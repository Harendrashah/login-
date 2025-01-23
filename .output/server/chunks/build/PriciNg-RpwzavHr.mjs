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
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="bg-gray-300 w-[100%] h-[100vh]"><div class="text-xl font-medium p-5">Pricing</div><div class="justify-center items-center mb-1 p-10 flex gap-3"><div class="bg-white w-[25%] min-h-[60vh] p-12"><div class="flex flex-col justify-center items-center gap-5"><div class="text-2xl font-normal">Basic</div><div class="mb-5"><span class="text-2xl font-medium">$25</span><span class="text-gray-400">/mon</span></div></div><div class="flex gap-3 flex-col"><div class="flex justify-between"><div class="text-gray-300">Customizer</div><div class="text-black">14 days trial</div></div><div class="border border-b-1"></div><div class="flex justify-between"><div class="text-gray-300">Chat History</div><div class="text-black">No</div></div><div class="border border-b-1"></div><div class="flex justify-between"><div class="text-gray-300">Statistics</div><div class="text-black">14 days trial</div></div><div class="border border-b-1"></div><div class="flex justify-between"><div class="text-gray-300">Support</div><div class="text-black">Yes</div></div><div class="border border-b-1"></div><div class="flex justify-between"><div class="text-gray-300">Live Support</div><div class="text-black">No</div></div><div class="border border-b-1"></div></div><div class="mt-8 text-center"><button class="bg-blue-500 text-white text-center font-semibold py-3 px-[70px]"> Get Started </button></div></div><div class="bg-blue-500 w-[25%] min-h-[67vh] p-2"><div class="flex flex-col justify-center items-center gap-5"><div class="text-2xl text-white font-normal">Basic</div><div class="mb-5"><span class="text-2xl text-white font-medium">$25</span><span class="text-gray-300">/mon</span></div></div><div class="flex gap-3 flex-col"><div class="flex justify-between"><div class="text-white">Customizer</div><div class="text-white">14 days trial</div></div><div class="border border-gray-300 border-b-1"></div><div class="flex justify-between"><div class="text-white">Chat History</div><div class="text-white">No</div></div><div class="border border-b-1 border-gray-300"></div><div class="flex justify-between"><div class="text-white">Statistics</div><div class="text-white">14 days trial</div></div><div class="border border-b-1 border-gray-300"></div><div class="flex justify-between"><div class="text-white">Support</div><div class="text-white">Yes</div></div><div class="border border-b-1 border-gray-300"></div><div class="flex justify-between"><div class="text-white">Live Support</div><div class="text-white">No</div></div><div class="border border-b-1 border-gray-300"></div></div><div class="mt-12 text-center"><button class="bg-white text-blue-500 text-center font-semibold py-3 px-[70px]"> Get Started </button></div></div><div class="bg-white w-[25%] min-h-[60vh] p-12"><div class="flex flex-col justify-center items-center gap-5"><div class="text-2xl font-normal">Basic</div><div class="mb-5"><span class="text-2xl font-medium">$25</span><span class="text-gray-400">/mon</span></div></div><div class="flex gap-3 flex-col"><div class="flex justify-between"><div class="text-gray-300">Customizer</div><div class="text-black">14 days trial</div></div><div class="border border-b-1"></div><div class="flex justify-between"><div class="text-gray-300">Chat History</div><div class="text-black">No</div></div><div class="border border-b-1"></div><div class="flex justify-between"><div class="text-gray-300">Statistics</div><div class="text-black">14 days trial</div></div><div class="border border-b-1"></div><div class="flex justify-between"><div class="text-gray-300">Support</div><div class="text-black">Yes</div></div><div class="border border-b-1"></div><div class="flex justify-between"><div class="text-gray-300">Live Support</div><div class="text-black">No</div></div><div class="border border-b-1"></div></div><div class="mt-8 text-center"><button class="bg-blue-500 text-white text-center font-semibold py-3 px-[70px]"> Get Started </button></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/PriciNg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const PriciNg = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { PriciNg as default };
//# sourceMappingURL=PriciNg-RpwzavHr.mjs.map
