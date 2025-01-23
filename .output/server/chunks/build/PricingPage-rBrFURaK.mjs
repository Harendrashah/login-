import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-f0cfc832><div class="bg-gray-300 w-[100%] h-[100vh]" data-v-f0cfc832><div class="text-xl font-medium p-5" data-v-f0cfc832>Pricing</div><div class="justify-center items-center mb-1 p-10 flex gap-3" data-v-f0cfc832><div class="bg-white rounded-[5px] w-[25%] min-h-[90vh] relative overflow-hidden" data-v-f0cfc832><div class="demo bg-green-500" data-v-f0cfc832></div><div class="text-demo flex flex-col pt-5 pr-5 pb-15 pl-5 gap-3" data-v-f0cfc832><div class="text-white text-2xl font-medium" data-v-f0cfc832>Standard</div><div class="text-white text-xl font-normal" data-v-f0cfc832>Lorem Lorem</div></div><div class="relative" data-v-f0cfc832><div class="prices" data-v-f0cfc832><div class="buttonline" data-v-f0cfc832><div class="price" data-v-f0cfc832><div class="months" data-v-f0cfc832></div><div class="month" data-v-f0cfc832></div></div></div></div></div></div><div class="bg-white rounded-[5px] w-[25%] min-h-[60vh] relative overflow-hidden p-12" data-v-f0cfc832><div class="demo bg-blue-500" data-v-f0cfc832></div><div class="text-demo flex flex-col pt-5 pr-5 pb-15 pl-5 gap-3" data-v-f0cfc832><div class="text-white text-2xl font-medium" data-v-f0cfc832>Standard</div><div class="text-white text-xl font-normal" data-v-f0cfc832>Lorem Lorem</div></div></div><div class="bg-white rounded-[5px] w-[25%] min-h-[60vh] relative overflow-hidden p-12" data-v-f0cfc832><div class="demo bg-violet-500" data-v-f0cfc832></div><div class="text-demo flex flex-col pt-5 pr-5 pb-15 pl-5 gap-3" data-v-f0cfc832><div class="text-white text-2xl font-medium" data-v-f0cfc832>Standard</div><div class="text-white text-xl font-normal" data-v-f0cfc832>Lorem Lorem</div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/PricingPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const PricingPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f0cfc832"]]);

export { PricingPage as default };
//# sourceMappingURL=PricingPage-rBrFURaK.mjs.map
