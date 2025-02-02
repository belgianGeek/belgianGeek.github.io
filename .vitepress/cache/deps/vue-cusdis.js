import {
  h,
  ref
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-cusdis/dist/VueCusdis.es.js
var t = Object.defineProperty;
var e = Object.defineProperties;
var r = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty;
var o = Object.prototype.propertyIsEnumerable;
var n = (e2, r2, a2) => r2 in e2 ? t(e2, r2, { enumerable: true, configurable: true, writable: true, value: a2 }) : e2[r2] = a2;
var d = (t2, e2) => {
  for (var r2 in e2 || (e2 = {})) s.call(e2, r2) && n(t2, r2, e2[r2]);
  if (a) for (var r2 of a(e2)) o.call(e2, r2) && n(t2, r2, e2[r2]);
  return t2;
};
function p(t2) {
  return a2 = d({}, t2), s2 = { attrs: d({ host: "https://cusdis.com" }, t2.attrs) }, e(a2, r(s2));
  var a2, s2;
}
function u(t2) {
  return new Promise((e2, r2) => {
    let a2 = document.querySelector(`script[src="${t2}"]`);
    if (!a2) return a2 = document.createElement("script"), a2.src = t2, a2.async = true, a2.defer = true, document.body.appendChild(a2), a2.addEventListener("load", () => {
      e2(a2);
    }), a2.addEventListener("error", r2), void a2.addEventListener("abort", r2);
    e2(a2);
  });
}
var l = { props: { attrs: { type: Object, validator: (t2) => ["appId", "pageId"].every((e2) => t2[e2]) || console.error("Missing required attrs. Check out `https://cusdis.com/doc#/advanced/sdk`") }, lang: String }, setup(t2) {
  const e2 = ref(), r2 = p(t2);
  return function(t3) {
    return new Promise((e3, r3) => {
      const a2 = [], s2 = u(`${t3.attrs.host}/js/cusdis.es.js`);
      if (a2.push(s2), t3.lang) {
        const e4 = u(`${t3.attrs.host}/js/widget/lang/${t3.lang}.js`);
        a2.push(e4);
      }
      Promise.all(a2).then(() => e3()).catch(r3);
    });
  }(r2).then(() => {
    const t3 = window.renderCusdis, r3 = e2.value;
    t3 && r3 && t3(r3);
  }), () => h("div", { id: "cusdis_thread", ref: e2, "data-host": r2.attrs.host, "data-page-id": r2.attrs.pageId, "data-app-id": r2.attrs.appId, "data-page-title": r2.attrs.pageTitle, "data-page-url": r2.attrs.pageUrl, "data-theme": r2.attrs.theme });
} };
var VueCusdis_es_default = l;
export {
  VueCusdis_es_default as default
};
//# sourceMappingURL=vue-cusdis.js.map
