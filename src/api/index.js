function _getCookieObj() {
    const cookie = document.cookie;
    const cookieObj = {};
    cookie.split(';').forEach((item) => {
        const arr = item.split('=');
        cookieObj[arr[0].trim()] = arr[1];
    });
    return cookieObj;
}

function _time_format(time) {
    const date = new Date(time * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hour}:${minute}`;
}

async function _get_content(id) {
    const content = await new Promise((resolve, reject) => {
        fetch(`https://treehole.pku.edu.cn/api/pku/${id}`, {
            headers: {
                accept: 'application/json, text/plain, */*',
                'accept-language': 'zh-CN,zh;q=0.9',
                authorization: 'Bearer ' + _getCookieObj()['pku_token'],
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                uuid: localStorage.getItem('pku-uuid'),
            },
            referrer: 'https://treehole.pku.edu.cn/web/',
            referrerPolicy: 'strict-origin-when-cross-origin',
            body: null,
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
        })
            .then((response) => {
                resolve(response.json());
            })
            .catch((err) => {
                reject(err);
            });
    });
    return content;
}

async function _get_replys(id, pages, sort = 'asc') {
    try {
        let fetch_list = [];
        let timeout = 0;
        for (let page = 1; page <= pages; ++page) {
            timeout += 200;
            fetch_list.push(
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        fetch(
                            `https://treehole.pku.edu.cn/api/pku_comment_v3/${id}?page=${page}&limit=15&sort=${sort}`,
                            {
                                headers: {
                                    accept: 'application/json, text/plain, */*',
                                    'accept-language': 'zh-CN,zh;q=0.9',
                                    authorization: 'Bearer ' + _getCookieObj()['pku_token'],
                                    'sec-fetch-dest': 'empty',
                                    'sec-fetch-mode': 'cors',
                                    'sec-fetch-site': 'same-origin',
                                    uuid: localStorage.getItem('pku-uuid'),
                                },
                                referrer: 'https://treehole.pku.edu.cn/web/',
                                referrerPolicy: 'strict-origin-when-cross-origin',
                                body: null,
                                method: 'GET',
                                mode: 'cors',
                                credentials: 'include',
                            }
                        )
                            .then((response) => resolve(response.json()))
                            .catch((err) => reject(err));
                    }, timeout);
                })
            );
        }
        const replys = await Promise.all(fetch_list);
        return replys;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function copy_full_text(id) {
    try {
        const content = await _get_content(id);
        console.log(content);
        if (content.code !== 20000) {
            throw new Error('获取内容失败');
        }
        const reply_nums = content.data.reply;
        const like_nums = content.data.likenum;
        const hole_content = content.data.text;
        const hole_timestamp = content.data.timestamp;

        let copy_content = `#${id}`
        if (content.data.label_info != null) {
            copy_content += ` [${content.data.label_info.tag_name}]`
        }

        copy_content += `\n${hole_content}\n(${_time_format(
            hole_timestamp
        )} 关注数：${like_nums} 回复数：${reply_nums})`;

        let replys = await _get_replys(id, Math.ceil(reply_nums / 15));
        replys = replys.map((reply) => reply.data.data).flat(1);
        replys.forEach((reply) => {
            let prefix = `[${reply.name}]`;
            if (reply.quote != null) {
                prefix += ` RE ${reply.quote.name_tag}`;
            }
            prefix += ': ';
            copy_content += `\n${prefix}${reply.text}`;
        });

        return copy_content;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
