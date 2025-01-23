import { _ as _export_sfc, f as __nuxt_component_0, e as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, ref, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as __nuxt_component_0$2 } from './nuxt-link-TpvcaGEw.mjs';
import SettingPage from './SettingPage-BfgDSMs7.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@formkit/core';
import '@formkit/utils';
import '@formkit/observer';
import '@formkit/rules';
import '@formkit/validation';
import '@formkit/i18n';
import '@formkit/inputs';
import '@formkit/themes';
import '@formkit/dev';

const _sfc_main$2 = {
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const searchTerm = ref("");
    const searchResults = ref([]);
    ref([]);
    const loginDropdownOpen = ref(false);
    const loggedIn = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="bg-green-300 w-[100%]"><div class="h-[100px] flex flex-row justify-between gap-4 items-center mr-[7px]"><div class="pl-[30px]"><svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 576 512"><path fill="" d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path></svg></div><div class="flex items-center gap-6 pr-[30px]"><div class="search-bar flex justify-end items-center relative ml-[20px]"><input${ssrRenderAttr("value", searchTerm.value)} type="text" placeholder="search...." class="p-[8px] pl-[30px] border-black rounded border-[1px]"><button class="bg-transparent border-none absolute cursor-pointer ml-[2px] text-[18px]"><svg class="mr-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="gary" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg></button><div class="content">`);
      if (searchResults.value.length > 0) {
        _push(`<p>Results:</p>`);
      } else {
        _push(`<!---->`);
      }
      if (searchResults.value.length > 0) {
        _push(`<ul><!--[-->`);
        ssrRenderList(searchResults.value, (result, index) => {
          _push(`<li>${ssrInterpolate(result)}</li>`);
        });
        _push(`<!--]--></ul>`);
      } else if (searchTerm.value) {
        _push(`<p> No results found for &quot;${ssrInterpolate(searchTerm.value)}&quot; </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div><div class="relative"><a href="#login"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><path fill="gray" d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"></path></svg></a></div>`);
      if (loginDropdownOpen.value) {
        _push(`<div class="w-[140px] absolute top-20 right-16 border bg-gray-700 px-6 py-4"><ul class="text-gray-400 text-center"><li class="pb-1 hover:opacity-60"><a href="#">Profile</a></li>`);
        if (!loggedIn.value) {
          _push(`<li class="pb-1 hover:opacity-60">`);
          _push(ssrRenderComponent(_component_NuxtLayout, { name: "custom" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_NuxtLink, { to: "/custom" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`Login`);
                    } else {
                      return [
                        createTextVNode("Login")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_NuxtLink, { to: "/custom" }, {
                    default: withCtx(() => [
                      createTextVNode("Login")
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li>`);
        } else {
          _push(`<li class="pb-1 hover:opacity-60">`);
          _push(ssrRenderComponent(_component_NuxtLayout, { name: "logout" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: "/logout",
                  onClick: ($event) => loggedIn.value = false
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`logout `);
                    } else {
                      return [
                        createTextVNode("logout ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_NuxtLink, {
                    to: "/logout",
                    onClick: ($event) => loggedIn.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode("logout ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li>`);
        }
        _push(`<li class="pb-1 hover:opacity-60"><a href="#">Switch</a></li></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="hover:to-black"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="gray" d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"></path></svg></div><div class=""><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><path fill="gray" d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path></svg></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const _sfc_main$1 = {
  __name: "SideBar",
  __ssrInlineRender: true,
  setup(__props) {
    const baseDropdownOpen = ref(false);
    const sidebarDropdownOpen = ref(false);
    const isCollapsed = ref(true);
    const toggleSidebar = () => {
      isCollapsed.value = !isCollapsed.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b95a4516><div class="${ssrRenderClass([isCollapsed.value ? " w-[265px]" : " w-[100px]", "bg-black font-extralight rounded sidebar-container"])}" data-v-b95a4516><div class="${ssrRenderClass({ collapsed: isCollapsed.value })}" data-v-b95a4516><div class="sidebar-logo" data-v-b95a4516>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo black opacity-1 relative h-[100%] flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (isCollapsed.value) {
              _push2(`<div class="flex" data-v-b95a4516${_scopeId}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem_of_Nepal.svg/375px-Emblem_of_Nepal.svg.png" alt="navbar brand" class="pt-0 pb-0 mt-[8px] mr-0 h-[50px]" data-v-b95a4516${_scopeId}><p class="text-white flex justify-center items-center px-[25px] mt-[5px] text-xl font-normal relative mb-[3px] none" data-v-b95a4516${_scopeId}> Nepal </p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex justify-end items-end px-[30px]" data-v-b95a4516${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" height="40" width="30" viewBox="0 0 448 512" data-v-b95a4516${_scopeId}><path fill="white" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" data-v-b95a4516${_scopeId}></path></svg></div>`);
          } else {
            return [
              isCollapsed.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex"
              }, [
                createVNode("img", {
                  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem_of_Nepal.svg/375px-Emblem_of_Nepal.svg.png",
                  alt: "navbar brand",
                  class: "pt-0 pb-0 mt-[8px] mr-0 h-[50px]"
                }),
                createVNode("p", { class: "text-white flex justify-center items-center px-[25px] mt-[5px] text-xl font-normal relative mb-[3px] none" }, " Nepal ")
              ])) : createCommentVNode("", true),
              createVNode("div", {
                class: "flex justify-end items-end px-[30px]",
                onClick: toggleSidebar
              }, [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "40",
                  width: "30",
                  viewBox: "0 0 448 512"
                }, [
                  createVNode("path", {
                    fill: "white",
                    d: "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
                  })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="slidebar-content !pt-0 !pb-[60px]" data-v-b95a4516><ul class="nav float-none mt-[20px]" data-v-b95a4516><li class="nav-item list-item" data-v-b95a4516>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center py-[6px] px-[25px] text-xl font-normal relative mb-[3px] none hover:bg-gray-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" height="25" width="20" viewBox="0 0 576 512" data-v-b95a4516${_scopeId}><path class="hover:fill-blue-500" fill="gray" d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185l0-121c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32l0 36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1l32 0 0 69.7c-.1 .9-.1 1.8-.1 2.8l0 112c0 22.1 17.9 40 40 40l16 0c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2l31.9 0 24 0c22.1 0 40-17.9 40-40l0-24 0-64c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64 0 24c0 22.1 17.9 40 40 40l24 0 32.5 0c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1l16 0c22.1 0 40-17.9 40-40l0-16.2c.3-2.6 .5-5.3 .5-8.1l-.7-160.2 32 0z" data-v-b95a4516${_scopeId}></path></svg>`);
            if (isCollapsed.value) {
              _push2(`<div class="flex justify-between w-full" data-v-b95a4516${_scopeId}><p class="text-white pl-[15px]" data-v-b95a4516${_scopeId}>Dashboard</p><svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 320 512" data-v-b95a4516${_scopeId}><path fill="gray" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" data-v-b95a4516${_scopeId}></path></svg></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                height: "25",
                width: "20",
                viewBox: "0 0 576 512"
              }, [
                createVNode("path", {
                  class: "hover:fill-blue-500",
                  fill: "gray",
                  d: "M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185l0-121c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32l0 36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1l32 0 0 69.7c-.1 .9-.1 1.8-.1 2.8l0 112c0 22.1 17.9 40 40 40l16 0c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2l31.9 0 24 0c22.1 0 40-17.9 40-40l0-24 0-64c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64 0 24c0 22.1 17.9 40 40 40l24 0 32.5 0c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1l16 0c22.1 0 40-17.9 40-40l0-16.2c.3-2.6 .5-5.3 .5-8.1l-.7-160.2 32 0z"
                })
              ])),
              isCollapsed.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex justify-between w-full"
              }, [
                createVNode("p", { class: "text-white pl-[15px]" }, "Dashboard"),
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "15",
                  width: "15",
                  viewBox: "0 0 320 512"
                }, [
                  createVNode("path", {
                    fill: "gray",
                    d: "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                  })
                ]))
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><h4 class="text-gray-400 m-[15px] py-[6px] font-none relative mb-[10px] uppercase font-bold" data-v-b95a4516>`);
      if (isCollapsed.value) {
        _push(`<div class="flex w-full justify-between" data-v-b95a4516> Components <hr class="ml-2 w-full" data-v-b95a4516></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</h4><div data-v-b95a4516><a href="#base" class="flex items-center justify-between py-[6px] px-[25px] text-xl font-normal relative mb-[3px] none hover:bg-gray-500 cursor-pointer" data-v-b95a4516><svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 576 512" data-v-b95a4516><path class="hover:fill-blue-500" fill="gray" d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" data-v-b95a4516></path></svg>`);
      if (isCollapsed.value) {
        _push(`<div class="flex justify-between w-full" data-v-b95a4516><p class="text-white pl-[15px]" data-v-b95a4516>Base</p><svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 320 512" data-v-b95a4516><path fill="gray" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" data-v-b95a4516></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a>`);
      if (baseDropdownOpen.value) {
        _push(`<ul class="pl-6 ml-[45px] text-gray-400 nav-droplist list-disc" data-v-b95a4516><li class="pb-1" data-v-b95a4516><a href="#" data-v-b95a4516>Avatars</a></li><li class="pb-1" data-v-b95a4516><a href="#" data-v-b95a4516>Buttons</a></li><li class="pb-1" data-v-b95a4516><a href="#" data-v-b95a4516>Grid System</a></li><li class="pb-1" data-v-b95a4516><a href="#" data-v-b95a4516>Panels</a></li><li class="pb-1" data-v-b95a4516><a href="#" data-v-b95a4516>Notifications</a></li><li class="pb-1" data-v-b95a4516><a href="#" data-v-b95a4516>Sweet Alert</a></li><li class="pb-1" data-v-b95a4516><a href="#" data-v-b95a4516>Font Awesome Icons</a></li><li class="pb-1" data-v-b95a4516><a href="#" class="" data-v-b95a4516>Simple Line Icons</a></li><li class="pb-1" data-v-b95a4516><a href="#" data-v-b95a4516>Typography</a></li></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><a href="#sidebar" class="cursor-pointer flex items-center justify-between py-[6px] px-[25px] text-xl font-normal relative mb-[3px] none hover:bg-gray-500" data-v-b95a4516><svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 512 512" data-v-b95a4516><path class="hover:fill-blue-500" fill="gray" d="M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z" data-v-b95a4516></path></svg>`);
      if (isCollapsed.value) {
        _push(`<div class="flex justify-between w-full" data-v-b95a4516><p class="text-white pl-[15px]" data-v-b95a4516>Sidebar Layout</p><svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 320 512" data-v-b95a4516><path fill="gray" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" data-v-b95a4516></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a>`);
      if (sidebarDropdownOpen.value) {
        _push(`<ul class="pl-6 ml-[45px] text-gray-400 nav-droplist list-disc" data-v-b95a4516><li class="pb-1" data-v-b95a4516><a href="#" data-v-b95a4516>Icon Bar</a></li><li class="pb-1" data-v-b95a4516>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/cardPage" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` card `);
            } else {
              return [
                createTextVNode(" card ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="pb-1" data-v-b95a4516>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Follower`);
            } else {
              return [
                createTextVNode("Follower")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="pb-1" data-v-b95a4516><a href="#" data-v-b95a4516>Following</a></li><li class="pb-1" data-v-b95a4516><a href="#" data-v-b95a4516>Revenue</a></li></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<a href="#forms" class="flex items-center justify-between py-[6px] px-[25px] text-xl font-normal relative mb-[3px] none hover:bg-gray-500" data-v-b95a4516><svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 512 512" data-v-b95a4516><path class="hover:fill-blue-500" fill="gray" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" data-v-b95a4516></path></svg>`);
      if (isCollapsed.value) {
        _push(`<div class="flex justify-between w-full" data-v-b95a4516><p class="text-white pl-[15px]" data-v-b95a4516>Forms</p><svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 320 512" data-v-b95a4516><path class="hover:fill-blue-500" fill="gray" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" data-v-b95a4516></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a><a href="#tables" class="flex items-center justify-between py-[6px] px-[25px] text-xl font-normal relative mb-[3px] none hover:bg-gray-500" data-v-b95a4516><svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 512 512" data-v-b95a4516><path class="hover:fill-blue-500" fill="gray" d="M64 256l0-96 160 0 0 96L64 256zm0 64l160 0 0 96L64 416l0-96zm224 96l0-96 160 0 0 96-160 0zM448 256l-160 0 0-96 160 0 0 96zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" data-v-b95a4516></path></svg>`);
      if (isCollapsed.value) {
        _push(`<div class="flex justify-between w-full" data-v-b95a4516><p class="text-white pl-[15px]" data-v-b95a4516>Table</p><svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 320 512" data-v-b95a4516><path fill="gray" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" data-v-b95a4516></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a><a href="#maps" class="flex items-center justify-between py-[6px] px-[25px] text-xl font-normal relative mb-[3px] none hover:bg-gray-500" data-v-b95a4516><svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 384 512" data-v-b95a4516><path class="hover:fill-blue-500" fill="gray" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" data-v-b95a4516></path></svg>`);
      if (isCollapsed.value) {
        _push(`<div class="flex justify-between w-full" data-v-b95a4516><p class="text-white pl-[15px]" data-v-b95a4516>Maps</p><svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 320 512" data-v-b95a4516><path fill="gray" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" data-v-b95a4516></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a><a href="#charts" class="flex items-center justify-between py-[6px] px-[25px] text-xl font-normal relative mb-[3px] none hover:bg-gray-500" data-v-b95a4516><svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 512 512" data-v-b95a4516><path class="hover:fill-blue-500" fill="gray" d="M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm128-64l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32zM480 96l0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-224c0-17.7 14.3-32 32-32s32 14.3 32 32z" data-v-b95a4516></path></svg>`);
      if (isCollapsed.value) {
        _push(`<div class="flex justify-between w-full" data-v-b95a4516><p class="text-white pl-[15px]" data-v-b95a4516>Charts</p><svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 320 512" data-v-b95a4516><path fill="gray" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" data-v-b95a4516></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a><a href="#widgets" class="flex items-center justify-between py-[6px] px-[25px] text-xl font-normal relative mb-[3px] none hover:bg-gray-500" data-v-b95a4516><svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 576 512" data-v-b95a4516><path class="hover:fill-blue-500" fill="gray" d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z" data-v-b95a4516></path></svg>`);
      if (isCollapsed.value) {
        _push(`<div class="flex justify-between w-full" data-v-b95a4516><p class="text-white pl-[15px]" data-v-b95a4516>Widgets</p><svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 320 512" data-v-b95a4516><path fill="gray" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" data-v-b95a4516></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a><a href="#documentation" class="flex items-center justify-between py-[6px] px-[25px] text-xl font-normal relative mb-[3px] none hover:bg-gray-500" data-v-b95a4516><svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 384 512" data-v-b95a4516><path class="hover:fill-blue-500" fill="gray" d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z" data-v-b95a4516></path></svg>`);
      if (isCollapsed.value) {
        _push(`<div class="flex justify-between w-full" data-v-b95a4516><p class="text-white pl-[15px]" data-v-b95a4516>Documentation</p><svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 320 512" data-v-b95a4516><path fill="gray" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" data-v-b95a4516></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a><a href="#menu" class="flex items-center justify-between py-[6px] px-[25px] text-xl font-normal relative mb-[3px] none hover:bg-gray-500" data-v-b95a4516><svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 512 512" data-v-b95a4516><path class="hover:fill-blue-500" fill="gray" d="M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z" data-v-b95a4516></path></svg>`);
      if (isCollapsed.value) {
        _push(`<div class="flex justify-between w-full" data-v-b95a4516><p class="text-white pl-[15px]" data-v-b95a4516>Menu Levels</p><svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 320 512" data-v-b95a4516><path fill="gray" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" data-v-b95a4516></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a></ul></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SideBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const SideBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b95a4516"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-dfab8567><div class="flex relative" data-v-dfab8567>`);
      _push(ssrRenderComponent(SideBar, null, null, _parent));
      _push(`<div class="container-main flex-1" data-v-dfab8567>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<div class="home-section" data-v-dfab8567>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`<div class="setting-dispaly" data-v-dfab8567>`);
      _push(ssrRenderComponent(SettingPage, null, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dfab8567"]]);

export { _default as default };
//# sourceMappingURL=default-BlbjCcpI.mjs.map
