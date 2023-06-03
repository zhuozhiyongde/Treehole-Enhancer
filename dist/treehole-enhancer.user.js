// ==UserScript==
// @name         Treehole Enhancer
// @namespace    npm/vite-plugin-monkey
// @version      0.0.1
// @author       Arthals
// @description  为树洞添加复制功能
// @license      GPL-3.0 License
// @icon         https://cdn.arthals.ink/Arthals-mcskin.png
// @supportURL   https://github.com/zhuozhiyongde/Treehole-Enhancer/issues
// @match        http*://treehole.pku.edu.cn/*
// @require      https://cdn.jsdelivr.net/npm/vue@3.3.4/dist/vue.global.prod.js
// @grant        GM_setClipboard
// ==/UserScript==

(a=>{const t=document.createElement("style");t.dataset.source="vite-plugin-monkey",t.innerText=a,document.head.appendChild(t)})(' *[data-v-1c39b402],[data-v-1c39b402]:before,[data-v-1c39b402]:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}[data-v-1c39b402]:before,[data-v-1c39b402]:after{--tw-content: ""}html[data-v-1c39b402]{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body[data-v-1c39b402]{margin:0;line-height:inherit}hr[data-v-1c39b402]{height:0;color:inherit;border-top-width:1px}abbr[data-v-1c39b402]:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1[data-v-1c39b402],h2[data-v-1c39b402],h3[data-v-1c39b402],h4[data-v-1c39b402],h5[data-v-1c39b402],h6[data-v-1c39b402]{font-size:inherit;font-weight:inherit}a[data-v-1c39b402]{color:inherit;text-decoration:inherit}b[data-v-1c39b402],strong[data-v-1c39b402]{font-weight:bolder}code[data-v-1c39b402],kbd[data-v-1c39b402],samp[data-v-1c39b402],pre[data-v-1c39b402]{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small[data-v-1c39b402]{font-size:80%}sub[data-v-1c39b402],sup[data-v-1c39b402]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[data-v-1c39b402]{bottom:-.25em}sup[data-v-1c39b402]{top:-.5em}table[data-v-1c39b402]{text-indent:0;border-color:inherit;border-collapse:collapse}button[data-v-1c39b402],input[data-v-1c39b402],optgroup[data-v-1c39b402],select[data-v-1c39b402],textarea[data-v-1c39b402]{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button[data-v-1c39b402],select[data-v-1c39b402]{text-transform:none}button[data-v-1c39b402],[type=button][data-v-1c39b402],[type=reset][data-v-1c39b402],[type=submit][data-v-1c39b402]{-webkit-appearance:button;background-color:transparent;background-image:none}[data-v-1c39b402]:-moz-focusring{outline:auto}[data-v-1c39b402]:-moz-ui-invalid{box-shadow:none}progress[data-v-1c39b402]{vertical-align:baseline}[data-v-1c39b402]::-webkit-inner-spin-button,[data-v-1c39b402]::-webkit-outer-spin-button{height:auto}[type=search][data-v-1c39b402]{-webkit-appearance:textfield;outline-offset:-2px}[data-v-1c39b402]::-webkit-search-decoration{-webkit-appearance:none}[data-v-1c39b402]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary[data-v-1c39b402]{display:list-item}blockquote[data-v-1c39b402],dl[data-v-1c39b402],dd[data-v-1c39b402],h1[data-v-1c39b402],h2[data-v-1c39b402],h3[data-v-1c39b402],h4[data-v-1c39b402],h5[data-v-1c39b402],h6[data-v-1c39b402],hr[data-v-1c39b402],figure[data-v-1c39b402],p[data-v-1c39b402],pre[data-v-1c39b402]{margin:0}fieldset[data-v-1c39b402]{margin:0;padding:0}legend[data-v-1c39b402]{padding:0}ol[data-v-1c39b402],ul[data-v-1c39b402],menu[data-v-1c39b402]{list-style:none;margin:0;padding:0}textarea[data-v-1c39b402]{resize:vertical}input[data-v-1c39b402]::-moz-placeholder,textarea[data-v-1c39b402]::-moz-placeholder{opacity:1;color:#9ca3af}input[data-v-1c39b402]::placeholder,textarea[data-v-1c39b402]::placeholder{opacity:1;color:#9ca3af}button[data-v-1c39b402],[role=button][data-v-1c39b402]{cursor:pointer}[data-v-1c39b402]:disabled{cursor:default}img[data-v-1c39b402],svg[data-v-1c39b402],video[data-v-1c39b402],canvas[data-v-1c39b402],audio[data-v-1c39b402],iframe[data-v-1c39b402],embed[data-v-1c39b402],object[data-v-1c39b402]{display:block;vertical-align:middle}img[data-v-1c39b402],video[data-v-1c39b402]{max-width:100%;height:auto}[hidden][data-v-1c39b402]{display:none}*[data-v-1c39b402],[data-v-1c39b402]:before,[data-v-1c39b402]:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }[data-v-1c39b402]::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.inline-flex[data-v-1c39b402]{display:inline-flex}.items-center[data-v-1c39b402]{align-items:center}.justify-center[data-v-1c39b402]{justify-content:center}.fill-link[data-v-1c39b402]{fill:#00c}.align-bottom[data-v-1c39b402]{vertical-align:bottom}.text-link[data-v-1c39b402]{--tw-text-opacity: 1;color:rgb(0 0 204 / var(--tw-text-opacity))}.hover\\:-mb-\\[1px\\][data-v-1c39b402]:hover{margin-bottom:-1px}.hover\\:border-b-\\[1px\\][data-v-1c39b402]:hover{border-bottom-width:1px}.hover\\:border-link[data-v-1c39b402]:hover{--tw-border-opacity: 1;border-color:rgb(0 0 204 / var(--tw-border-opacity))}@media (prefers-color-scheme: dark){.dark\\:fill-link-dark[data-v-1c39b402]{fill:#9bf}.dark\\:text-link-dark[data-v-1c39b402]{--tw-text-opacity: 1;color:rgb(153 187 255 / var(--tw-text-opacity))}.dark\\:hover\\:border-link-dark[data-v-1c39b402]:hover{--tw-border-opacity: 1;border-color:rgb(153 187 255 / var(--tw-border-opacity))}} ');

(function(vue) {
  "use strict";
  function _getCookieObj() {
    const cookie = document.cookie;
    const cookieObj = {};
    cookie.split(";").forEach((item) => {
      const arr = item.split("=");
      cookieObj[arr[0].trim()] = arr[1];
    });
    return cookieObj;
  }
  function _time_format(time) {
    const date = new Date(time * 1e3);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day} ${hour}:${minute}`;
  }
  async function _get_content(id) {
    const content = await new Promise((resolve, reject) => {
      fetch(`https://treehole.pku.edu.cn/api/pku/${id}`, {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "zh-CN,zh;q=0.9",
          authorization: "Bearer " + _getCookieObj()["pku_token"],
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          uuid: localStorage.getItem("pku-uuid")
        },
        referrer: "https://treehole.pku.edu.cn/web/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "include"
      }).then((response) => {
        resolve(response.json());
      }).catch((err) => {
        reject(err);
      });
    });
    return content;
  }
  async function _get_replys(id, pages, sort = "asc") {
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
                    accept: "application/json, text/plain, */*",
                    "accept-language": "zh-CN,zh;q=0.9",
                    authorization: "Bearer " + _getCookieObj()["pku_token"],
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    uuid: localStorage.getItem("pku-uuid")
                  },
                  referrer: "https://treehole.pku.edu.cn/web/",
                  referrerPolicy: "strict-origin-when-cross-origin",
                  body: null,
                  method: "GET",
                  mode: "cors",
                  credentials: "include"
                }
              ).then((response) => resolve(response.json())).catch((err) => reject(err));
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
  async function copy_full_text(id) {
    try {
      const content = await _get_content(id);
      console.log(content);
      if (content.code !== 2e4) {
        throw new Error("获取内容失败");
      }
      const reply_nums = content.data.reply;
      const like_nums = content.data.likenum;
      const hole_content = content.data.text;
      const hole_timestamp = content.data.timestamp;
      let copy_content = `#${id}`;
      if (content.data.label_info != null) {
        copy_content += ` [${content.data.label_info.tag_name}]`;
      }
      copy_content += `
${hole_content}
(${_time_format(
        hole_timestamp
      )} 关注数：${like_nums} 回复数：${reply_nums})`;
      let replys = await _get_replys(id, Math.ceil(reply_nums / 15));
      replys = replys.map((reply) => reply.data.data).flat(1);
      replys.forEach((reply) => {
        let prefix = `[${reply.name}]`;
        if (reply.quote != null) {
          prefix += ` RE ${reply.quote.name_tag}`;
        }
        prefix += ": ";
        copy_content += `
${prefix}${reply.text}`;
      });
      return copy_content;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  var monkeyWindow = window;
  var GM_setClipboard = /* @__PURE__ */ (() => monkeyWindow.GM_setClipboard)();
  const CopyButton_vue_vue_type_style_index_0_scoped_1c39b402_lang = "";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _withScopeId = (n) => (vue.pushScopeId("data-v-1c39b402"), n = n(), vue.popScopeId(), n);
  const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("span", { class: "icon" }, [
    /* @__PURE__ */ vue.createElementVNode("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      viewBox: "0 0 512 512",
      class: "fill-link dark:fill-link-dark"
    }, [
      /* @__PURE__ */ vue.createElementVNode("path", { d: "M272 0H396.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128H192v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" })
    ])
  ], -1));
  const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("label", null, "复制全文", -1));
  const _hoisted_3 = [
    _hoisted_1,
    _hoisted_2
  ];
  const _sfc_main$1 = {
    __name: "CopyButton",
    setup(__props) {
      async function copy() {
        const hole_id = document.querySelector(
          "div.sidebar > div.sidebar-content.sidebar-content-show div.box-header.box-header-top-icon > code.box-id"
        ).innerHTML.trim().substring(1);
        console.log("hole_id", hole_id);
        const full_text = await copy_full_text(hole_id);
        GM_setClipboard(full_text);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("span", {
          class: "text-link dark:text-link-dark inline-flex items-center align-bottom justify-center hover:border-b-[1px] hover:-mb-[1px] hover:border-link dark:hover:border-link-dark",
          onClick: copy
        }, _hoisted_3);
      };
    }
  };
  const CopyButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1c39b402"]]);
  const _sfc_main = {
    __name: "App",
    setup(__props) {
      const isTooltip = vue.ref(false);
      setInterval(() => {
        const res = document.querySelector(".box.box-tip.sidebar-toolbar") !== null;
        if (res != isTooltip.value) {
          isTooltip.value = res;
          console.log("isTooltip", isTooltip.value);
        }
      }, 200);
      vue.watch(isTooltip, (newVal) => {
        if (newVal) {
          const copyShortcut = document.createElement("span");
          copyShortcut.classList.add("sidebar-toolbar-item");
          const tooltips = document.querySelector(".box.box-tip.sidebar-toolbar");
          tooltips.insertBefore(copyShortcut, tooltips.firstChild);
          const copyApp = vue.createApp(CopyButton);
          copyApp.mount(copyShortcut);
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div");
      };
    }
  };
  const Apps = vue.createApp(_sfc_main);
  const root = document.createElement("div");
  document.body.appendChild(root);
  Apps.mount(root);
})(Vue);
