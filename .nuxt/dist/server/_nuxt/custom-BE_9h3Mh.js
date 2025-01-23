import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { ref, useSSRContext } from "vue";
import "hookable";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "@formkit/core";
import "@formkit/utils";
import "@formkit/observer";
import "@formkit/rules";
import "@formkit/validation";
import "@formkit/i18n";
import "@formkit/inputs";
import "@formkit/themes";
import "@formkit/dev";
const _sfc_main = {
  __name: "custom",
  __ssrInlineRender: true,
  setup(__props) {
    const signUpData = ref({
      name: "",
      email: "",
      phone: "",
      password: ""
    });
    const signInData = ref({
      email: "",
      password: ""
    });
    const phoneError = ref(false);
    const isRightPanelActive = ref(false);
    const isLeftPanelActive = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-15b8a79e><div class="flex justify-center p-8" data-v-15b8a79e><div id="container" class="${ssrRenderClass([{
        "right-panel-active": isRightPanelActive.value,
        "left-Panel-active": isLeftPanelActive.value
      }, "container"])}" data-v-15b8a79e><div class="form-container sign-up-container" data-v-15b8a79e><form data-v-15b8a79e><h1 class="text-3xl font-bold underline" data-v-15b8a79e>Create Account</h1><div class="social-container" data-v-15b8a79e><div class="flex gap-[10px]" data-v-15b8a79e><a href="#" data-v-15b8a79e><img class="hover:bg-slate-300 rounded" src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="" data-v-15b8a79e></a><a href="#" data-v-15b8a79e><svg class="hover:bg-slate-300 rounded" xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 512 512" data-v-15b8a79e><path fill="blue" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" data-v-15b8a79e></path></svg></a><a href="#" data-v-15b8a79e><svg class="hover:bg-slate-300 rounded" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 448 512" data-v-15b8a79e><path fill="#007bb5" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" data-v-15b8a79e></path></svg></a><a href="#" data-v-15b8a79e><svg class="hover:bg-slate-300 rounded" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 448 512" data-v-15b8a79e><path fill="brown" d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" data-v-15b8a79e></path></svg></a></div></div><span class="underline" data-v-15b8a79e>or use your email for registration</span><input type="text" placeholder="Name"${ssrRenderAttr("value", signUpData.value.name)} required data-v-15b8a79e><input type="email" placeholder="Email"${ssrRenderAttr("value", signUpData.value.email)} required data-v-15b8a79e><input type="number" placeholder="phone"${ssrRenderAttr("value", signUpData.value.phone)} required class="${ssrRenderClass({ "border-red-500": phoneError.value })}" data-v-15b8a79e>`);
      if (phoneError.value) {
        _push(`<span class="text-red-500 text-sm" data-v-15b8a79e>Invalid phone number</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input type="password" placeholder="Password"${ssrRenderAttr("value", signUpData.value.password)} required data-v-15b8a79e><button data-v-15b8a79e>Sign Up</button></form></div><div class="form-container sign-in-container" data-v-15b8a79e><form data-v-15b8a79e><h1 class="font-bold text-3xl underline" data-v-15b8a79e>Sign In</h1><div class="social-container" data-v-15b8a79e><div class="flex gap-[10px]" data-v-15b8a79e><a href="#" data-v-15b8a79e><img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="" data-v-15b8a79e></a><a href="#" data-v-15b8a79e><svg class="hover:bg-slate-300 rounded" xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 512 512" data-v-15b8a79e><path fill="blue" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" data-v-15b8a79e></path></svg></a><a href="#" data-v-15b8a79e><svg class="hover:bg-slate-300 rounded" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 448 512" data-v-15b8a79e><path fill="#007bb5" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" data-v-15b8a79e></path></svg></a><a href="#" data-v-15b8a79e><svg class="hover:bg-slate-300 rounded" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 448 512" data-v-15b8a79e><path fill="brown" d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" data-v-15b8a79e></path></svg></a></div></div><span class="underline" data-v-15b8a79e>or use your account</span><input type="email" placeholder="Email"${ssrRenderAttr("value", signInData.value.email)} required data-v-15b8a79e><input type="password" placeholder="Password"${ssrRenderAttr("value", signInData.value.password)} required data-v-15b8a79e><a href="#" data-v-15b8a79e>Forgot your password?</a><button class="ghost" id="signIn" data-v-15b8a79e> Sign In </button></form></div><div class="overlay-container" data-v-15b8a79e><div class="overlay" data-v-15b8a79e><div class="overlay-panel overlay-left" data-v-15b8a79e><h1 class="font-bold text-2xl" data-v-15b8a79e>Welcome Back!</h1><p class="font-serif" data-v-15b8a79e> To keep connected with us please login with your personal info </p><button class="ghost" id="signIn" data-v-15b8a79e> Sign In </button></div><div class="overlay-panel overlay-right" data-v-15b8a79e><h1 class="text-red-400 text-4xl" data-v-15b8a79e>Hello, Friend!</h1><p class="text-red-400 font-medium text-2xl" data-v-15b8a79e> Enter your personal details and start journey with us </p><div class="" data-v-15b8a79e><button class="ghost bg-red-400" id="signUp" data-v-15b8a79e> Sign Up </button></div></div></div></div></div></div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/custom.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const custom = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-15b8a79e"]]);
export {
  custom as default
};
//# sourceMappingURL=custom-BE_9h3Mh.js.map
