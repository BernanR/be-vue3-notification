import { openBlock as i, createElementBlock as l, unref as m, createElementVNode as o, ref as y, withDirectives as I, vModelText as $, Fragment as b, createBlock as h, toDisplayString as _, createCommentVNode as w, createTextVNode as M, TransitionGroup as N, normalizeClass as x, withCtx as F, renderList as T, createVNode as E, inject as R, onMounted as z } from "vue";
import A from "mitt";
const O = A(), S = { class: "box-ico" }, j = { key: 0 }, L = /* @__PURE__ */ o("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ o("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
  })
], -1), V = [
  L
], H = { key: 1 }, G = /* @__PURE__ */ o("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ o("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
  })
], -1), D = [
  G
], P = { key: 2 }, U = /* @__PURE__ */ o("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ o("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })
], -1), q = [
  U
], J = { key: 3 }, K = /* @__PURE__ */ o("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ o("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
  })
], -1), Q = [
  K
], W = { key: 4 }, X = /* @__PURE__ */ o("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ o("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
  })
], -1), Y = [
  X
], Z = {
  __name: "BeNofiticationIcon",
  props: {
    type: String,
    ico: String
  },
  setup(t) {
    const s = t;
    return (n, c) => (i(), l("div", S, [
      m(s).type === "danger" ? (i(), l("span", j, V)) : m(s).type === "warning" ? (i(), l("span", H, D)) : m(s).type === "success" ? (i(), l("span", P, q)) : m(s).type === "love" ? (i(), l("span", J, Q)) : (i(), l("span", W, Y))
    ]));
  }
}, tt = { class: "BenotifyInput" }, ot = /* @__PURE__ */ o("label", null, "Reply", -1), nt = { class: "benotify-input-box" }, et = { class: "be-notify-button--Send" }, it = /* @__PURE__ */ o("span", { class: "ico" }, [
  /* @__PURE__ */ o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor"
  }, [
    /* @__PURE__ */ o("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
    })
  ])
], -1), st = [
  it
], ct = {
  key: 1,
  class: "spinner-button spinner-loading"
}, at = {
  __name: "BeNotificationInput",
  emits: ["emitCallbackText", "OnInputFocus"],
  setup(t, { emit: s }) {
    const n = y(""), c = y(!1);
    function u() {
      n.value !== "" && (s("emitCallbackText", n), c.value = !0);
    }
    return (a, r) => (i(), l("div", tt, [
      ot,
      o("div", nt, [
        o("div", null, [
          I(o("input", {
            type: "text",
            "onUpdate:modelValue": r[0] || (r[0] = (f) => n.value = f),
            onFocus: r[1] || (r[1] = (f) => s("OnInputFocus", { focus: "in", text: n.value })),
            onBlur: r[2] || (r[2] = (f) => s("OnInputFocus", { focus: "out", text: n.value }))
          }, null, 544), [
            [$, n.value]
          ])
        ]),
        o("div", et, [
          c.value ? (i(), l("span", ct)) : (i(), l("button", {
            key: 0,
            type: "button",
            onClick: u
          }, st))
        ])
      ])
    ]));
  }
}, lt = {
  key: 1,
  class: "thumbnail"
}, rt = ["src"], ut = { class: "text-box" }, dt = { key: 0 }, ft = { class: "button-box" }, mt = {
  __name: "BeNotificationItem",
  props: {
    notification: Object
  },
  emits: ["remove"],
  setup(t, { emit: s }) {
    const n = t;
    function c(u) {
      u.focus === "in" ? (n.notification.InputFocusOn = !0, n.notification.selfRemove("clear")) : u.text !== "" ? n.notification.InputFocusOn = !1 : (n.notification.InputFocusOn = !1, n.notification.selfRemove("start", 2e3));
    }
    return n.notification.selfRemove(), (u, a) => (i(), l(b, null, [
      t.notification.thumb ? (i(), l("div", lt, [
        o("img", {
          src: t.notification.thumb,
          alt: ""
        }, null, 8, rt)
      ])) : (i(), h(Z, {
        key: 0,
        type: t.notification.type
      }, null, 8, ["type"])),
      o("div", ut, [
        o("h2", null, _(t.notification.title), 1),
        o("p", null, [
          t.notification.label ? (i(), l("strong", dt, _(t.notification.label) + ":", 1)) : w("", !0),
          M(" " + _(t.notification.message), 1)
        ]),
        t.notification.reply ? (i(), h(at, {
          key: 0,
          onOnInputFocus: c,
          onEmitCallbackText: a[0] || (a[0] = (r) => {
            t.notification.emitCallbackText(r, t.notification);
          })
        })) : w("", !0)
      ]),
      o("div", ft, [
        o("button", {
          type: "button",
          onClick: a[1] || (a[1] = (r) => s("remove", t.notification.id))
        }, "x")
      ])
    ], 64));
  }
}, pt = ["id"], ht = {
  __name: "BeTransitionGroup",
  props: {
    position: String,
    notifications: Array
  },
  emits: ["remove"],
  setup(t, { emit: s }) {
    function n(c) {
      s("remove", c);
    }
    return (c, u) => (i(), h(N, {
      tag: "ul",
      name: "benotify",
      class: x(["Vue-Benotify_conteiner", ["Position--" + t.position]])
    }, {
      default: F(() => [
        (i(!0), l(b, null, T(t.notifications, (a, r) => (i(), l("li", {
          class: x(["benotify", [
            "benotify--" + a.type,
            "animation--" + a.animation,
            a.reply ? "input-type" : "",
            a.InputFocusOn ? "InputFocusOn" : ""
          ]]),
          style: { bottom: "0" },
          id: "be-benotify-" + a.id,
          key: a.id
        }, [
          E(mt, {
            onRemove: n,
            notification: a
          }, null, 8, ["notification"])
        ], 10, pt))), 128))
      ]),
      _: 1
    }, 8, ["class"]));
  }
}, k = {
  TOP_LEFT: "top-left",
  TOP_CENTER: "top-center",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_CENTER: "bottom-center",
  BOTTOM_RIGHT: "bottom-right"
}, g = {
  BOUNCE: "bounce",
  SLIDE: "slide",
  FADE: "fade",
  undefined: "bounce"
}, vt = {
  __name: "BeNotification",
  setup(t) {
    let s = 0;
    const n = y([]), c = R("benotifySetup"), u = {
      type: "info",
      animation: g.BOUNCE,
      position: k.BOTTOM_RIGHT,
      duration: 3e3
    };
    z(() => {
      c.position && (u.position = c.position), c.animation && (u.animation = c.animation), c.duration && (u.duration = c.duration), O.on("notify", r);
    });
    function a() {
      return s++;
    }
    function r(d) {
      const e = new Object({ ...u, ...d });
      e.id = a(), e.animation = g[d.animation] || e.animation, e.position = k[d.position] || e.position, e.reply && (e.duration = d.duration || 9e3, e.emitCallbackText = B), console.log(e.duration), e.selfRemove = f, n.value.push(e);
    }
    function f(d, e) {
      const p = e || this.duration;
      d === "clear" ? clearTimeout(this.timeout) : this.timeout = setTimeout(() => v(this.id), p);
    }
    function v(d) {
      n.value.splice(n.value.findIndex((e) => e.id === d), 1);
    }
    function B(d, e) {
      e.callback(d), setTimeout(() => v(e.id), 500);
    }
    return (d, e) => (i(!0), l(b, null, T(m(k), (p) => (i(), h(ht, {
      position: p,
      notifications: n.value.filter((C) => C.position === p),
      onRemove: v
    }, null, 8, ["position", "notifications"]))), 256));
  }
}, _t = (t) => {
  O.emit("notify", t);
};
const bt = {
  install: (t, s) => {
    const n = s || {};
    t.provide("benotifySetup", n), t.component("be-notifications", vt), t.provide("notify", _t);
  }
};
export {
  bt as default
};
