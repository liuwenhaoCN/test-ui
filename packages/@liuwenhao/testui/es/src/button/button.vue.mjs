import { defineComponent as e, computed as u, openBlock as s, createElementBlock as l, normalizeClass as p, unref as c, renderSlot as a } from "vue";
import "./style/index.css";
const m = e({
  name: "t-button"
}), d = /* @__PURE__ */ e({
  ...m,
  props: {
    type: null
  },
  setup(o) {
    const t = o, n = u(() => ({ [`t-button--${t.type}`]: t.type }));
    return (r, f) => (s(), l("button", {
      class: p(["t-button", c(n)])
    }, [
      a(r.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
