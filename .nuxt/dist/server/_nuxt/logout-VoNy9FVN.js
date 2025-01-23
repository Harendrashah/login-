import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
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
  __name: "logout",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "logout-page" }, _attrs))} data-v-5960865a><h1 data-v-5960865a>Logging out...</h1><p data-v-5960865a>Please wait...</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/logout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const logout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5960865a"]]);
export {
  logout as default
};
//# sourceMappingURL=logout-VoNy9FVN.js.map
