import { _ as _export_sfc, e as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-TpvcaGEw.mjs';
import { ref, computed, withCtx, createTextVNode, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  emits: ["search"],
  setup(__props, { emit: __emit }) {
    const query = ref("");
    const loggedIn = ref(null);
    const courses = ref([
      {
        id: 1,
        title: "Web Development Basics",
        description: "Learn HTML, CSS, and JavaScript.",
        image: "https://statdprdprcitnslrs03.blob.core.windows.net/tns-assets/web/course_thumbnails/web_development.jpg"
      },
      {
        id: 2,
        title: "Advanced Vue.js",
        description: "Deep dive into Vue.js and its ecosystem.",
        image: "https://www.spec-india.com/wp-content/uploads/2023/05/Hire-Vuejs-Developer.png"
      },
      {
        id: 3,
        title: "Introduction to Data Science",
        description: "Start your journey in data science.",
        image: "https://srmmcet.edu.in/wp-content/uploads/2023/11/DATA-SCIENCE-USECASES-1.png"
      }
    ]);
    const testimonials = ref([
      {
        id: 1,
        text: "This platform transformed my learning experience!",
        author: "Alice"
      },
      {
        id: 2,
        text: "The courses are top-notch and easy to follow.",
        author: "Bob"
      },
      { id: 3, text: "Great platform for learning new skills.", author: "Charlie" }
    ]);
    const filteredCourses = computed(() => {
      if (!query.value) {
        return courses.value;
      }
      return courses.value.filter(
        (course) => course.title.toLowerCase().includes(query.value.toLowerCase())
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-8feafb86><div class="bg-gray-300 w-[100%] h-[100vh]" data-v-8feafb86><div class="bg-blue-300 font-extralight rounded sidebar-container" data-v-8feafb86><div class="sidebar-logo" data-v-8feafb86><div class="logo black opacity-1 relative h-[100%] flex" data-v-8feafb86><div class="flex" data-v-8feafb86><img src="https://i.pinimg.com/736x/ee/3b/5b/ee3b5b2488ae85947c0ccb7a03bba0ce.jpg" alt="navbar brand" class="pt-0 pb-0 mb-1 mt-[8px] ml-1 h-[70px] w-[70px] rounded-full" data-v-8feafb86><p class="text-black flex justify-center items-center px-[15px] mt-[5px] text-xl font-normal relative mb-[3px] none" data-v-8feafb86> \u{1D4D7}\u{1D4F4} \u{1D4FC}\u{1D4F1}\u{1D4EA}\u{1D4FB}\u{1D4EE} &amp; \u{1D4EC}\u{1D4EA}\u{1D4FB}\u{1D4EE} </p></div><div class="flex justify-between left-[18rem] gap-12 items-center px-[15px] mt-[5px] text-xl font-normal relative mb-[3px] none" data-v-8feafb86><div class="flex" data-v-8feafb86><button class="text-black" data-v-8feafb86>Home</button><svg class="mt-[6px]" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 448 512" data-v-8feafb86><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" data-v-8feafb86></path></svg></div><div class="flex" data-v-8feafb86><button class="text-black" data-v-8feafb86>Course</button><svg class="mt-[6px]" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 448 512" data-v-8feafb86><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" data-v-8feafb86></path></svg></div><div class="flex" data-v-8feafb86><button class="text-black" data-v-8feafb86>Contact</button><svg class="mt-[6px]" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 448 512" data-v-8feafb86><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" data-v-8feafb86></path></svg></div><div class="flex" data-v-8feafb86><button class="text-black" data-v-8feafb86>Abouts</button><svg class="mt-[6px]" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 448 512" data-v-8feafb86><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" data-v-8feafb86></path></svg></div>`);
      if (!loggedIn.value) {
        _push(`<div class="pb-1 hover:opacity-60 ml-[200px]" data-v-8feafb86>`);
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
        _push(`</div>`);
      } else {
        _push(`<div class="pb-1 hover:opacity-60" data-v-8feafb86>`);
        _push(ssrRenderComponent(_component_NuxtLayout, { name: "logout" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, { to: "/logout" }, {
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
                createVNode(_component_NuxtLink, { to: "/logout" }, {
                  default: withCtx(() => [
                    createTextVNode("logout ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></div></div></div><div class="p-3 m-3" data-v-8feafb86><div class="flex justify-between" data-v-8feafb86><div data-v-8feafb86><h1 class="text-2xl font-semibold" data-v-8feafb86> Geeting <span class="text-violet-500" data-v-8feafb86>Quality</span> Education Is Now </h1><h1 class="text-2xl font-semibold" data-v-8feafb86> More <span class="text-violet-500" data-v-8feafb86>Easy </span></h1></div><div class="search-container" data-v-8feafb86><input type="text" placeholder="What do you want to learn"${ssrRenderAttr("value", query.value)} class="search-input" data-v-8feafb86><button class="search-button" data-v-8feafb86> Search Course </button></div></div></div><section class="p-6 bg-white rounded-lg shadow-lg m-3" data-v-8feafb86><h2 class="text-xl font-semibold mb-4" data-v-8feafb86>Featured Courses</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-8feafb86><!--[-->`);
      ssrRenderList(unref(filteredCourses), (course) => {
        _push(`<div class="p-4 border rounded-lg" data-v-8feafb86><img${ssrRenderAttr("src", course.image)} alt="Course Image" class="w-full h-[311px]; object-cover rounded-md mb-3" data-v-8feafb86><h3 class="text-lg font-semibold" data-v-8feafb86>${ssrInterpolate(course.title)}</h3><p class="text-sm text-gray-700" data-v-8feafb86>${ssrInterpolate(course.description)}</p></div>`);
      });
      _push(`<!--]--></div></section><div class="w-[100%] h-[100%] bg-gray-300" data-v-8feafb86><section class="p-6 bg-gray-100 rounded-lg shadow-lg m-3" data-v-8feafb86><h2 class="text-xl font-semibold text-center mb-4" data-v-8feafb86> Student Testimonials </h2><div class="flex flex-col md:flex-row gap-[15.25rem]" data-v-8feafb86><!--[-->`);
      ssrRenderList(testimonials.value, (testimonial) => {
        _push(`<div class="p-4 border rounded-lg bg-white shadow" data-v-8feafb86><p class="text-sm gap-8 text-gray-700 italic" data-v-8feafb86> &quot;${ssrInterpolate(testimonial.text)}&quot; </p><div class="mt-3 text-right font-semibold text-violet-500" data-v-8feafb86> - ${ssrInterpolate(testimonial.author)}</div></div>`);
      });
      _push(`<!--]--></div></section><section class="p-8 w-[80%] bg-blue-500 text-white rounded-lg shadow-lg m-[9rem] text-center" data-v-8feafb86><h2 class="text-xl font-semibold mb-2" data-v-8feafb86>Ready to Start Learning?</h2><p class="text-sm mb-4" data-v-8feafb86> Join our community and gain access to top-quality educational resources. </p></section></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8feafb86"]]);

export { index as default };
//# sourceMappingURL=index-COuXr45l.mjs.map
