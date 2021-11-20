"use strict";
(self.webpackChunkionic_app = self.webpackChunkionic_app || []).push([[68592], {
    20108: function(t, e, n) {
        n.d(e, {
            c: function() {
                return r
            }
        });
        var o = n(40941)
          , i = n(32538)
          , a = n(15359);
        const r = (t,e)=>{
            let n, r;
            const s = (t,o,i)=>{
                if ("undefined" == typeof document)
                    return;
                const a = document.elementFromPoint(t, o);
                a && e(a) ? a !== n && (c(),
                l(a, i)) : c()
            }
              , l = (t,e)=>{
                n = t,
                r || (r = n);
                const i = n;
                (0,
                o.c)(()=>i.classList.add("ion-activated")),
                e()
            }
              , c = (t=!1)=>{
                if (!n)
                    return;
                const e = n;
                (0,
                o.c)(()=>e.classList.remove("ion-activated")),
                t && r !== n && n.click(),
                n = void 0
            }
            ;
            return (0,
            a.createGesture)({
                el: t,
                gestureName: "buttonActiveDrag",
                threshold: 0,
                onStart: t=>s(t.currentX, t.currentY, i.a),
                onMove: t=>s(t.currentX, t.currentY, i.b),
                onEnd: ()=>{
                    c(!0),
                    (0,
                    i.h)(),
                    r = void 0
                }
            })
        }
    },
    90791: function(t, e, n) {
        n.r(e),
        n.d(e, {
            startFocusVisible: function() {
                return a
            }
        });
        const o = "ion-focused"
          , i = ["Tab", "ArrowDown", "Space", "Escape", " ", "Shift", "Enter", "ArrowLeft", "ArrowRight", "ArrowUp", "Home", "End"]
          , a = t=>{
            let e = []
              , n = !0;
            const a = t ? t.shadowRoot : document
              , r = t || document.body
              , s = t=>{
                e.forEach(t=>t.classList.remove(o)),
                t.forEach(t=>t.classList.add(o)),
                e = t
            }
              , l = ()=>{
                n = !1,
                s([])
            }
              , c = t=>{
                n = i.includes(t.key),
                n || s([])
            }
              , d = t=>{
                if (n && t.composedPath) {
                    const e = t.composedPath().filter(t=>!!t.classList && t.classList.contains("ion-focusable"));
                    s(e)
                }
            }
              , u = ()=>{
                a.activeElement === r && s([])
            }
            ;
            return a.addEventListener("keydown", c),
            a.addEventListener("focusin", d),
            a.addEventListener("focusout", u),
            a.addEventListener("touchstart", l),
            a.addEventListener("mousedown", l),
            {
                destroy: ()=>{
                    a.removeEventListener("keydown", c),
                    a.removeEventListener("focusin", d),
                    a.removeEventListener("focusout", u),
                    a.removeEventListener("touchstart", l),
                    a.removeEventListener("mousedown", l)
                }
                ,
                setFocus: s
            }
        }
    },
    35016: function(t, e, n) {
        n.d(e, {
            C: function() {
                return s
            },
            a: function() {
                return a
            },
            d: function() {
                return r
            }
        });
        var o = n(8239)
          , i = n(84899);
        const a = function() {
            var t = (0,
            o.Z)(function*(t, e, n, o, a, r) {
                if (t)
                    return t.attachViewToDom(e, n, a, o);
                if (!(r || "string" == typeof n || n instanceof HTMLElement))
                    throw new Error("framework delegate is missing");
                const s = "string" == typeof n ? e.ownerDocument && e.ownerDocument.createElement(n) : n;
                return o && o.forEach(t=>s.classList.add(t)),
                a && Object.assign(s, a),
                e.appendChild(s),
                yield new Promise(t=>(0,
                i.c)(s, t)),
                s
            });
            return function(e, n, o, i, a, r) {
                return t.apply(this, arguments)
            }
        }()
          , r = (t,e)=>{
            if (e) {
                if (t)
                    return t.removeViewFromDom(e.parentElement, e);
                e.remove()
            }
            return Promise.resolve()
        }
          , s = ()=>{
            let t, e;
            return {
                attachViewToDom: function() {
                    var n = (0,
                    o.Z)(function*(n, o, a={}, r=[]) {
                        if (t = n,
                        o) {
                            const e = "string" == typeof o ? t.ownerDocument && t.ownerDocument.createElement(o) : o;
                            r.forEach(t=>e.classList.add(t)),
                            Object.assign(e, a),
                            t.appendChild(e),
                            yield new Promise(t=>(0,
                            i.c)(e, t))
                        }
                        const s = document.querySelector("ion-app") || document.body;
                        return e = document.createComment("ionic teleport"),
                        t.parentNode.insertBefore(e, t),
                        s.appendChild(t),
                        t
                    });
                    return function(t, e) {
                        return n.apply(this, arguments)
                    }
                }(),
                removeViewFromDom: ()=>(t && e && (e.parentNode.insertBefore(t, e),
                e.remove()),
                Promise.resolve())
            }
        }
    },
    32538: function(t, e, n) {
        n.d(e, {
            a: function() {
                return a
            },
            b: function() {
                return r
            },
            c: function() {
                return i
            },
            d: function() {
                return l
            },
            h: function() {
                return s
            }
        });
        const o = {
            getEngine() {
                const t = window;
                return t.TapticEngine || t.Capacitor && t.Capacitor.isPluginAvailable("Haptics") && t.Capacitor.Plugins.Haptics
            },
            available() {
                return !!this.getEngine()
            },
            isCordova: ()=>!!window.TapticEngine,
            isCapacitor: ()=>!!window.Capacitor,
            impact(t) {
                const e = this.getEngine();
                if (!e)
                    return;
                const n = this.isCapacitor() ? t.style.toUpperCase() : t.style;
                e.impact({
                    style: n
                })
            },
            notification(t) {
                const e = this.getEngine();
                if (!e)
                    return;
                const n = this.isCapacitor() ? t.style.toUpperCase() : t.style;
                e.notification({
                    style: n
                })
            },
            selection() {
                this.impact({
                    style: "light"
                })
            },
            selectionStart() {
                const t = this.getEngine();
                !t || (this.isCapacitor() ? t.selectionStart() : t.gestureSelectionStart())
            },
            selectionChanged() {
                const t = this.getEngine();
                !t || (this.isCapacitor() ? t.selectionChanged() : t.gestureSelectionChanged())
            },
            selectionEnd() {
                const t = this.getEngine();
                !t || (this.isCapacitor() ? t.selectionEnd() : t.gestureSelectionEnd())
            }
        }
          , i = ()=>{
            o.selection()
        }
          , a = ()=>{
            o.selectionStart()
        }
          , r = ()=>{
            o.selectionChanged()
        }
          , s = ()=>{
            o.selectionEnd()
        }
          , l = t=>{
            o.impact(t)
        }
    },
    80647: function(t, e, n) {
        n.d(e, {
            s: function() {
                return o
            }
        });
        const o = t=>{
            try {
                if (t instanceof class {
                    constructor(t) {
                        this.value = t
                    }
                }
                )
                    return t.value;
                if (!r() || "string" != typeof t || "" === t)
                    return t;
                const e = document.createDocumentFragment()
                  , n = document.createElement("div");
                e.appendChild(n),
                n.innerHTML = t,
                l.forEach(t=>{
                    const n = e.querySelectorAll(t);
                    for (let o = n.length - 1; o >= 0; o--) {
                        const t = n[o];
                        t.parentNode ? t.parentNode.removeChild(t) : e.removeChild(t);
                        const r = a(t);
                        for (let e = 0; e < r.length; e++)
                            i(r[e])
                    }
                }
                );
                const o = a(e);
                for (let t = 0; t < o.length; t++)
                    i(o[t]);
                const s = document.createElement("div");
                s.appendChild(e);
                const c = s.querySelector("div");
                return null !== c ? c.innerHTML : s.innerHTML
            } catch (e) {
                return console.error(e),
                ""
            }
        }
          , i = t=>{
            if (t.nodeType && 1 !== t.nodeType)
                return;
            for (let n = t.attributes.length - 1; n >= 0; n--) {
                const e = t.attributes.item(n)
                  , o = e.name;
                if (!s.includes(o.toLowerCase())) {
                    t.removeAttribute(o);
                    continue
                }
                const i = e.value;
                null != i && i.toLowerCase().includes("javascript:") && t.removeAttribute(o)
            }
            const e = a(t);
            for (let n = 0; n < e.length; n++)
                i(e[n])
        }
          , a = t=>null != t.children ? t.children : t.childNodes
          , r = ()=>{
            const t = window
              , e = t && t.Ionic && t.Ionic.config;
            return !e || (e.get ? e.get("sanitizerEnabled", !0) : !0 === e.sanitizerEnabled || void 0 === e.sanitizerEnabled)
        }
          , s = ["class", "id", "href", "src", "name", "slot"]
          , l = ["script", "style", "iframe", "meta", "link", "object", "embed"]
    },
    43775: function(t, e, n) {
        n.d(e, {
            a: function() {
                return a
            },
            b: function() {
                return s
            },
            c: function() {
                return l
            },
            d: function() {
                return r
            },
            e: function() {
                return c
            },
            f: function() {
                return i
            },
            g: function() {
                return o
            }
        });
        const o = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>"
          , i = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>"
          , a = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>"
          , r = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>"
          , s = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>"
          , l = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>"
          , c = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>"
    },
    8798: function(t, e, n) {
        n.d(e, {
            S: function() {
                return o
            }
        });
        const o = {
            bubbles: {
                dur: 1e3,
                circles: 9,
                fn: (t,e,n)=>{
                    const o = t * e / n - t + "ms"
                      , i = 2 * Math.PI * e / n;
                    return {
                        r: 5,
                        style: {
                            top: 9 * Math.sin(i) + "px",
                            left: 9 * Math.cos(i) + "px",
                            "animation-delay": o
                        }
                    }
                }
            },
            circles: {
                dur: 1e3,
                circles: 8,
                fn: (t,e,n)=>{
                    const o = e / n
                      , i = t * o - t + "ms"
                      , a = 2 * Math.PI * o;
                    return {
                        r: 5,
                        style: {
                            top: 9 * Math.sin(a) + "px",
                            left: 9 * Math.cos(a) + "px",
                            "animation-delay": i
                        }
                    }
                }
            },
            circular: {
                dur: 1400,
                elmDuration: !0,
                circles: 1,
                fn: ()=>({
                    r: 20,
                    cx: 48,
                    cy: 48,
                    fill: "none",
                    viewBox: "24 24 48 48",
                    transform: "translate(0,0)",
                    style: {}
                })
            },
            crescent: {
                dur: 750,
                circles: 1,
                fn: ()=>({
                    r: 26,
                    style: {}
                })
            },
            dots: {
                dur: 750,
                circles: 3,
                fn: (t,e)=>({
                    r: 6,
                    style: {
                        left: 9 - 9 * e + "px",
                        "animation-delay": -110 * e + "ms"
                    }
                })
            },
            lines: {
                dur: 1e3,
                lines: 8,
                fn: (t,e,n)=>({
                    y1: 14,
                    y2: 26,
                    style: {
                        transform: `rotate(${360 / n * e + (e < n / 2 ? 180 : -180)}deg)`,
                        "animation-delay": t * e / n - t + "ms"
                    }
                })
            },
            "lines-small": {
                dur: 1e3,
                lines: 8,
                fn: (t,e,n)=>({
                    y1: 12,
                    y2: 20,
                    style: {
                        transform: `rotate(${360 / n * e + (e < n / 2 ? 180 : -180)}deg)`,
                        "animation-delay": t * e / n - t + "ms"
                    }
                })
            },
            "lines-sharp": {
                dur: 1e3,
                lines: 12,
                fn: (t,e,n)=>({
                    y1: 17,
                    y2: 29,
                    style: {
                        transform: `rotate(${30 * e + (e < 6 ? 180 : -180)}deg)`,
                        "animation-delay": t * e / n - t + "ms"
                    }
                })
            },
            "lines-sharp-small": {
                dur: 1e3,
                lines: 12,
                fn: (t,e,n)=>({
                    y1: 12,
                    y2: 20,
                    style: {
                        transform: `rotate(${30 * e + (e < 6 ? 180 : -180)}deg)`,
                        "animation-delay": t * e / n - t + "ms"
                    }
                })
            }
        }
    },
    35362: function(t, e, n) {
        n.d(e, {
            c: function() {
                return a
            },
            g: function() {
                return r
            },
            h: function() {
                return i
            },
            o: function() {
                return l
            }
        });
        var o = n(8239);
        const i = (t,e)=>null !== e.closest(t)
          , a = (t,e)=>"string" == typeof t && t.length > 0 ? Object.assign({
            "ion-color": !0,
            [`ion-color-${t}`]: !0
        }, e) : e
          , r = t=>{
            const e = {};
            return (t=>void 0 !== t ? (Array.isArray(t) ? t : t.split(" ")).filter(t=>null != t).map(t=>t.trim()).filter(t=>"" !== t) : [])(t).forEach(t=>e[t] = !0),
            e
        }
          , s = /^[a-z][a-z0-9+\-.]*:/
          , l = function() {
            var t = (0,
            o.Z)(function*(t, e, n, o) {
                if (null != t && "#" !== t[0] && !s.test(t)) {
                    const i = document.querySelector("ion-router");
                    if (i)
                        return null != e && e.preventDefault(),
                        i.push(t, n, o)
                }
                return !1
            });
            return function(e, n, o, i) {
                return t.apply(this, arguments)
            }
        }()
    },
    58615: function(t, e, n) {
        n.d(e, {
            c: function() {
                return r
            }
        });
        var o = n(90245)
          , i = n(52954)
          , a = n(39461);
        const r = (t,e)=>{
            let n, r;
            const s = (t,o,i)=>{
                if ("undefined" == typeof document)
                    return;
                const a = document.elementFromPoint(t, o);
                a && e(a) ? a !== n && (c(),
                l(a, i)) : c()
            }
              , l = (t,e)=>{
                n = t,
                r || (r = n);
                const i = n;
                (0,
                o.c)(()=>i.classList.add("ion-activated")),
                e()
            }
              , c = (t=!1)=>{
                if (!n)
                    return;
                const e = n;
                (0,
                o.c)(()=>e.classList.remove("ion-activated")),
                t && r !== n && n.click(),
                n = void 0
            }
            ;
            return (0,
            a.createGesture)({
                el: t,
                gestureName: "buttonActiveDrag",
                threshold: 0,
                onStart: t=>s(t.currentX, t.currentY, i.a),
                onMove: t=>s(t.currentX, t.currentY, i.b),
                onEnd: ()=>{
                    c(!0),
                    (0,
                    i.h)(),
                    r = void 0
                }
            })
        }
    },
    89653: function(t, e, n) {
        n.r(e),
        n.d(e, {
            startFocusVisible: function() {
                return a
            }
        });
        const o = "ion-focused"
          , i = ["Tab", "ArrowDown", "Space", "Escape", " ", "Shift", "Enter", "ArrowLeft", "ArrowRight", "ArrowUp", "Home", "End"]
          , a = t=>{
            let e = []
              , n = !0;
            const a = t ? t.shadowRoot : document
              , r = t || document.body
              , s = t=>{
                e.forEach(t=>t.classList.remove(o)),
                t.forEach(t=>t.classList.add(o)),
                e = t
            }
              , l = ()=>{
                n = !1,
                s([])
            }
              , c = t=>{
                n = i.includes(t.key),
                n || s([])
            }
              , d = t=>{
                if (n && t.composedPath) {
                    const e = t.composedPath().filter(t=>!!t.classList && t.classList.contains("ion-focusable"));
                    s(e)
                }
            }
              , u = ()=>{
                a.activeElement === r && s([])
            }
            ;
            return a.addEventListener("keydown", c),
            a.addEventListener("focusin", d),
            a.addEventListener("focusout", u),
            a.addEventListener("touchstart", l),
            a.addEventListener("mousedown", l),
            {
                destroy: ()=>{
                    a.removeEventListener("keydown", c),
                    a.removeEventListener("focusin", d),
                    a.removeEventListener("focusout", u),
                    a.removeEventListener("touchstart", l),
                    a.removeEventListener("mousedown", l)
                }
                ,
                setFocus: s
            }
        }
    },
    57013: function(t, e, n) {
        n.d(e, {
            C: function() {
                return s
            },
            a: function() {
                return a
            },
            d: function() {
                return r
            }
        });
        var o = n(8239)
          , i = n(98824);
        const a = function() {
            var t = (0,
            o.Z)(function*(t, e, n, o, a, r) {
                if (t)
                    return t.attachViewToDom(e, n, a, o);
                if (!(r || "string" == typeof n || n instanceof HTMLElement))
                    throw new Error("framework delegate is missing");
                const s = "string" == typeof n ? e.ownerDocument && e.ownerDocument.createElement(n) : n;
                return o && o.forEach(t=>s.classList.add(t)),
                a && Object.assign(s, a),
                e.appendChild(s),
                yield new Promise(t=>(0,
                i.c)(s, t)),
                s
            });
            return function(e, n, o, i, a, r) {
                return t.apply(this, arguments)
            }
        }()
          , r = (t,e)=>{
            if (e) {
                if (t)
                    return t.removeViewFromDom(e.parentElement, e);
                e.remove()
            }
            return Promise.resolve()
        }
          , s = ()=>{
            let t, e;
            return {
                attachViewToDom: function() {
                    var n = (0,
                    o.Z)(function*(n, o, a={}, r=[]) {
                        if (t = n,
                        o) {
                            const e = "string" == typeof o ? t.ownerDocument && t.ownerDocument.createElement(o) : o;
                            r.forEach(t=>e.classList.add(t)),
                            Object.assign(e, a),
                            t.appendChild(e),
                            yield new Promise(t=>(0,
                            i.c)(e, t))
                        }
                        const s = document.querySelector("ion-app") || document.body;
                        return e = document.createComment("ionic teleport"),
                        t.parentNode.insertBefore(e, t),
                        s.appendChild(t),
                        t
                    });
                    return function(t, e) {
                        return n.apply(this, arguments)
                    }
                }(),
                removeViewFromDom: ()=>(t && e && (e.parentNode.insertBefore(t, e),
                e.remove()),
                Promise.resolve())
            }
        }
    },
    52954: function(t, e, n) {
        n.d(e, {
            a: function() {
                return a
            },
            b: function() {
                return r
            },
            c: function() {
                return i
            },
            d: function() {
                return l
            },
            h: function() {
                return s
            }
        });
        const o = {
            getEngine() {
                const t = window;
                return t.TapticEngine || t.Capacitor && t.Capacitor.isPluginAvailable("Haptics") && t.Capacitor.Plugins.Haptics
            },
            available() {
                return !!this.getEngine()
            },
            isCordova: ()=>!!window.TapticEngine,
            isCapacitor: ()=>!!window.Capacitor,
            impact(t) {
                const e = this.getEngine();
                if (!e)
                    return;
                const n = this.isCapacitor() ? t.style.toUpperCase() : t.style;
                e.impact({
                    style: n
                })
            },
            notification(t) {
                const e = this.getEngine();
                if (!e)
                    return;
                const n = this.isCapacitor() ? t.style.toUpperCase() : t.style;
                e.notification({
                    style: n
                })
            },
            selection() {
                this.impact({
                    style: "light"
                })
            },
            selectionStart() {
                const t = this.getEngine();
                !t || (this.isCapacitor() ? t.selectionStart() : t.gestureSelectionStart())
            },
            selectionChanged() {
                const t = this.getEngine();
                !t || (this.isCapacitor() ? t.selectionChanged() : t.gestureSelectionChanged())
            },
            selectionEnd() {
                const t = this.getEngine();
                !t || (this.isCapacitor() ? t.selectionEnd() : t.gestureSelectionEnd())
            }
        }
          , i = ()=>{
            o.selection()
        }
          , a = ()=>{
            o.selectionStart()
        }
          , r = ()=>{
            o.selectionChanged()
        }
          , s = ()=>{
            o.selectionEnd()
        }
          , l = t=>{
            o.impact(t)
        }
    },
    66575: function(t, e, n) {
        n.d(e, {
            s: function() {
                return o
            }
        });
        const o = t=>{
            try {
                if (t instanceof class {
                    constructor(t) {
                        this.value = t
                    }
                }
                )
                    return t.value;
                if (!r() || "string" != typeof t || "" === t)
                    return t;
                const e = document.createDocumentFragment()
                  , n = document.createElement("div");
                e.appendChild(n),
                n.innerHTML = t,
                l.forEach(t=>{
                    const n = e.querySelectorAll(t);
                    for (let o = n.length - 1; o >= 0; o--) {
                        const t = n[o];
                        t.parentNode ? t.parentNode.removeChild(t) : e.removeChild(t);
                        const r = a(t);
                        for (let e = 0; e < r.length; e++)
                            i(r[e])
                    }
                }
                );
                const o = a(e);
                for (let t = 0; t < o.length; t++)
                    i(o[t]);
                const s = document.createElement("div");
                s.appendChild(e);
                const c = s.querySelector("div");
                return null !== c ? c.innerHTML : s.innerHTML
            } catch (e) {
                return console.error(e),
                ""
            }
        }
          , i = t=>{
            if (t.nodeType && 1 !== t.nodeType)
                return;
            for (let n = t.attributes.length - 1; n >= 0; n--) {
                const e = t.attributes.item(n)
                  , o = e.name;
                if (!s.includes(o.toLowerCase())) {
                    t.removeAttribute(o);
                    continue
                }
                const i = e.value;
                null != i && i.toLowerCase().includes("javascript:") && t.removeAttribute(o)
            }
            const e = a(t);
            for (let n = 0; n < e.length; n++)
                i(e[n])
        }
          , a = t=>null != t.children ? t.children : t.childNodes
          , r = ()=>{
            const t = window
              , e = t && t.Ionic && t.Ionic.config;
            return !e || (e.get ? e.get("sanitizerEnabled", !0) : !0 === e.sanitizerEnabled || void 0 === e.sanitizerEnabled)
        }
          , s = ["class", "id", "href", "src", "name", "slot"]
          , l = ["script", "style", "iframe", "meta", "link", "object", "embed"]
    },
    28941: function(t, e, n) {
        n.d(e, {
            a: function() {
                return a
            },
            b: function() {
                return s
            },
            c: function() {
                return l
            },
            d: function() {
                return r
            },
            e: function() {
                return c
            },
            f: function() {
                return i
            },
            g: function() {
                return o
            }
        });
        const o = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>"
          , i = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>"
          , a = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>"
          , r = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>"
          , s = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>"
          , l = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>"
          , c = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>"
    },
    70641: function(t, e, n) {
        n.d(e, {
            S: function() {
                return o
            }
        });
        const o = {
            bubbles: {
                dur: 1e3,
                circles: 9,
                fn: (t,e,n)=>{
                    const o = t * e / n - t + "ms"
                      , i = 2 * Math.PI * e / n;
                    return {
                        r: 5,
                        style: {
                            top: 9 * Math.sin(i) + "px",
                            left: 9 * Math.cos(i) + "px",
                            "animation-delay": o
                        }
                    }
                }
            },
            circles: {
                dur: 1e3,
                circles: 8,
                fn: (t,e,n)=>{
                    const o = e / n
                      , i = t * o - t + "ms"
                      , a = 2 * Math.PI * o;
                    return {
                        r: 5,
                        style: {
                            top: 9 * Math.sin(a) + "px",
                            left: 9 * Math.cos(a) + "px",
                            "animation-delay": i
                        }
                    }
                }
            },
            circular: {
                dur: 1400,
                elmDuration: !0,
                circles: 1,
                fn: ()=>({
                    r: 20,
                    cx: 48,
                    cy: 48,
                    fill: "none",
                    viewBox: "24 24 48 48",
                    transform: "translate(0,0)",
                    style: {}
                })
            },
            crescent: {
                dur: 750,
                circles: 1,
                fn: ()=>({
                    r: 26,
                    style: {}
                })
            },
            dots: {
                dur: 750,
                circles: 3,
                fn: (t,e)=>({
                    r: 6,
                    style: {
                        left: 9 - 9 * e + "px",
                        "animation-delay": -110 * e + "ms"
                    }
                })
            },
            lines: {
                dur: 1e3,
                lines: 8,
                fn: (t,e,n)=>({
                    y1: 14,
                    y2: 26,
                    style: {
                        transform: `rotate(${360 / n * e + (e < n / 2 ? 180 : -180)}deg)`,
                        "animation-delay": t * e / n - t + "ms"
                    }
                })
            },
            "lines-small": {
                dur: 1e3,
                lines: 8,
                fn: (t,e,n)=>({
                    y1: 12,
                    y2: 20,
                    style: {
                        transform: `rotate(${360 / n * e + (e < n / 2 ? 180 : -180)}deg)`,
                        "animation-delay": t * e / n - t + "ms"
                    }
                })
            },
            "lines-sharp": {
                dur: 1e3,
                lines: 12,
                fn: (t,e,n)=>({
                    y1: 17,
                    y2: 29,
                    style: {
                        transform: `rotate(${30 * e + (e < 6 ? 180 : -180)}deg)`,
                        "animation-delay": t * e / n - t + "ms"
                    }
                })
            },
            "lines-sharp-small": {
                dur: 1e3,
                lines: 12,
                fn: (t,e,n)=>({
                    y1: 12,
                    y2: 20,
                    style: {
                        transform: `rotate(${30 * e + (e < 6 ? 180 : -180)}deg)`,
                        "animation-delay": t * e / n - t + "ms"
                    }
                })
            }
        }
    },
    61269: function(t, e, n) {
        n.d(e, {
            c: function() {
                return a
            },
            g: function() {
                return r
            },
            h: function() {
                return i
            },
            o: function() {
                return l
            }
        });
        var o = n(8239);
        const i = (t,e)=>null !== e.closest(t)
          , a = (t,e)=>"string" == typeof t && t.length > 0 ? Object.assign({
            "ion-color": !0,
            [`ion-color-${t}`]: !0
        }, e) : e
          , r = t=>{
            const e = {};
            return (t=>void 0 !== t ? (Array.isArray(t) ? t : t.split(" ")).filter(t=>null != t).map(t=>t.trim()).filter(t=>"" !== t) : [])(t).forEach(t=>e[t] = !0),
            e
        }
          , s = /^[a-z][a-z0-9+\-.]*:/
          , l = function() {
            var t = (0,
            o.Z)(function*(t, e, n, o) {
                if (null != t && "#" !== t[0] && !s.test(t)) {
                    const i = document.querySelector("ion-router");
                    if (i)
                        return null != e && e.preventDefault(),
                        i.push(t, n, o)
                }
                return !1
            });
            return function(e, n, o, i) {
                return t.apply(this, arguments)
            }
        }()
    },
    68197: function(t, e, n) {
        n.d(e, {
            o: function() {
                return o
            }
        });
        var o = (()=>{
            return (t = o || (o = {})).CLAIM_REQUEST = "/hr/claim",
            t.CLAIM_TYPE = "/hr/claim/claim-type",
            t.CLAIM_TYPE_FORM = "/hr/claim/claim-type-form",
            t.CLAIM_RECEIPT_FORM = "/hr/claim/claim-receipt-form",
            t.CLAIM_FORM = "/hr/claim/claim-form",
            t.CLAIM_APPROVAL_DETAIL = "/hr/claim/claim-approval-detail",
            t.CLAIM_APPROVAL = "/hr/claim/claim-approval",
            t.CLAIM_BALANCE = "/hr/claim/claim-balance",
            t.CLAIM_BALANCE_DETAIL = "/hr/claim/claim-balance-detail",
            t.CLAIM_CANCELATION_FORM = "/hr/claim/claim-cancelation-form",
            o;
            var t
        }
        )()
    },
    67428: function(t, e, n) {
        n.d(e, {
            X: function() {
                return a
            }
        });
        var o = n(37716)
          , i = n(52436);
        let a = (()=>{
            class t {
                constructor(t) {
                    this.baseApi = t,
                    this.model = "attendancesFace"
                }
                listing(t, e) {
                    const n = "POST"
                      , o = t
                      , i = this.baseApi.urlBuilder({
                        method: n,
                        model: this.model,
                        func: "listing",
                        params: o,
                        urlParams: e
                    });
                    return this.baseApi.request({
                        method: n,
                        url: i,
                        params: o
                    })
                }
                configFaceRecognizeBase(t) {
                    const e = "POST"
                      , n = t
                      , o = this.baseApi.urlBuilder({
                        method: e,
                        model: this.model,
                        func: "configFaceRecognizeBase",
                        params: n,
                        urlParams: {}
                    });
                    return this.baseApi.request({
                        method: e,
                        url: o,
                        params: n
                    })
                }
                getBasePhoto(t) {
                    const e = "POST"
                      , n = t
                      , o = this.baseApi.urlBuilder({
                        method: e,
                        model: this.model,
                        func: "getBasePhoto",
                        params: n,
                        urlParams: {}
                    });
                    return this.baseApi.request({
                        method: e,
                        url: o,
                        params: n
                    })
                }
                getMyRequest(t) {
                    const e = "POST"
                      , n = t
                      , o = this.baseApi.urlBuilder({
                        method: e,
                        model: this.model,
                        func: "getMyRequest",
                        params: n,
                        urlParams: {}
                    });
                    return this.baseApi.request({
                        method: e,
                        url: o,
                        params: n
                    })
                }
                getNeedApproval(t) {
                    const e = {}
                      , n = this.baseApi.urlBuilder({
                        method: "GET",
                        model: this.model,
                        func: "getNeedApproval",
                        params: e,
                        urlParams: t
                    });
                    return this.baseApi.request({
                        method: "GET",
                        url: n,
                        params: e
                    })
                }
                processApprove(t) {
                    const e = "POST"
                      , n = t
                      , o = this.baseApi.urlBuilder({
                        method: e,
                        model: this.model,
                        func: "processApprove",
                        params: n,
                        urlParams: {}
                    });
                    return this.baseApi.request({
                        method: e,
                        url: o,
                        params: n
                    })
                }
                urlUploadFaceRecognize() {
                    return this.baseApi.urlBuilder({
                        method: "POST",
                        model: this.model,
                        func: "uploadFaceRecognize",
                        params: {},
                        urlParams: {}
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(o.LFG(i.e))
            }
            ,
            t.\u0275prov = o.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )()
    },
    97158: function(t, e, n) {
        n.d(e, {
            T: function() {
                return u
            }
        });
        var o = n(64762)
          , i = n(27969)
          , a = n(37716)
          , r = n(57196)
          , s = n(2738)
          , l = n(4062)
          , c = n(67428)
          , d = n(34026);
        let u = (()=>{
            class t {
                constructor(t, e, n, o, i) {
                    this.auth = t,
                    this.fileUploaderService = e,
                    this.fileService = n,
                    this.attendanceFaceApi = o,
                    this.employeeService = i,
                    this._subscription = [],
                    this._needApprove = 0
                }
                get needApprove() {
                    return this._needApprove
                }
                set needApprove(t) {
                    this._needApprove = t
                }
                unsubscribe() {
                    this._subscription.forEach(t=>t.unsubscribe())
                }
                upload(t) {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            return t.urlUpload = this.attendanceFaceApi.urlUploadFaceRecognize(),
                            yield this.fileUploaderService.upload(t, !1)
                        } catch (e) {
                            throw e
                        }
                    })
                }
                processWebImage(t) {
                    return this.fileService.processWebFile(t)
                }
                doGetNeedApproval() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const t = yield this.getNeedApproval({
                                limit: 1,
                                page: 1
                            });
                            this._needApprove = t.total
                        } catch (t) {}
                    })
                }
                listing(t, e) {
                    return new Promise((n,o)=>{
                        this._subscription.push(this.attendanceFaceApi.listing(t, e).subscribe(t=>{
                            n(t)
                        }
                        , t=>{
                            o(t)
                        }
                        ))
                    }
                    )
                }
                getBasePhoto(t) {
                    return new Promise((e,n)=>{
                        this._subscription.push(this.attendanceFaceApi.getBasePhoto(t).pipe((0,
                        i.U)(t=>t.data)).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                getMyRequest(t) {
                    return new Promise((e,n)=>{
                        this._subscription.push(this.attendanceFaceApi.getMyRequest(t).pipe((0,
                        i.U)(t=>t.data)).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                getNeedApproval(t) {
                    return new Promise((e,n)=>{
                        this._subscription.push(this.attendanceFaceApi.getNeedApproval(t).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                processApprove(t) {
                    return new Promise((e,n)=>{
                        this._subscription.push(this.attendanceFaceApi.processApprove(t).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                configFaceRecognizeBase(t) {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        return new Promise((e,n)=>(0,
                        o.mG)(this, void 0, void 0, function*() {
                            try {
                                this._subscription.push(this.attendanceFaceApi.configFaceRecognizeBase(t).pipe((0,
                                i.U)(t=>t.data)).subscribe(t=>{
                                    e(t)
                                }
                                , t=>{
                                    n(t)
                                }
                                ))
                            } catch (o) {
                                n(o)
                            }
                        }))
                    })
                }
                getEmp(t, e) {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const n = yield this.employeeService.getEmp(t, e);
                            return {
                                employees: n.data,
                                totalData: n.total,
                                totalPage: n.totalPage
                            }
                        } catch (n) {
                            throw new Error(n)
                        }
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.LFG(r.V),a.LFG(s.G),a.LFG(l.I),a.LFG(c.X),a.LFG(d.P))
            }
            ,
            t.\u0275prov = a.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )()
    },
    58890: function(t, e, n) {
        n.d(e, {
            X: function() {
                return d
            }
        });
        var o = n(64762)
          , i = n(27969)
          , a = n(37716)
          , r = n(56682)
          , s = n(52436);
        let l = (()=>{
            class t {
                constructor(t) {
                    this.baseApi = t,
                    this.model = "sfFormula"
                }
                getFormulaList() {
                    const t = r.n.POST
                      , e = {}
                      , n = this.baseApi.urlBuilder({
                        method: t,
                        model: this.model,
                        func: "listing",
                        params: e,
                        urlParams: {}
                    });
                    return this.baseApi.request({
                        method: t,
                        url: n,
                        params: e
                    })
                }
                getVariableList(t) {
                    const e = r.n.POST
                      , n = t
                      , o = this.baseApi.urlBuilder({
                        method: e,
                        model: this.model,
                        func: "getReserword",
                        params: n,
                        urlParams: {}
                    });
                    return this.baseApi.request({
                        method: e,
                        url: o,
                        params: n
                    })
                }
                save(t) {
                    const e = r.n.POST
                      , n = t
                      , o = this.baseApi.urlBuilder({
                        method: e,
                        model: this.model,
                        func: "save",
                        params: n,
                        urlParams: {}
                    });
                    return this.baseApi.request({
                        method: e,
                        url: o,
                        params: n
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.LFG(s.e))
            }
            ,
            t.\u0275prov = a.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )();
        var c = n(29790);
        let d = (()=>{
            class t {
                constructor(t, e, n) {
                    this.sfFormulaApi = t,
                    this.baseApi = e,
                    this.translateService = n,
                    this.subscription = [],
                    this.tempHeaderTable = []
                }
                dispose() {
                    this.unsubscribe()
                }
                unsubscribe() {
                    this.subscription.forEach(t=>t.unsubscribe())
                }
                getFormulaList() {
                    return new Promise((t,e)=>{
                        this.subscription.push(this.sfFormulaApi.getFormulaList().pipe((0,
                        i.U)(t=>t.data)).subscribe(e=>{
                            t(e)
                        }
                        , t=>{
                            e(t)
                        }
                        ))
                    }
                    )
                }
                getVariableList(t) {
                    return new Promise((e,n)=>{
                        this.subscription.push(this.sfFormulaApi.getVariableList(t).pipe((0,
                        i.U)(t=>t.data)).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                save(t) {
                    return new Promise((e,n)=>{
                        this.subscription.push(this.sfFormulaApi.save(t).pipe((0,
                        i.U)(t=>t.data)).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                createHeaderTable() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const t = yield this.baseApi.requestJson("assets/json/gdx-table/header-attendance-formula.json").toPromise();
                            this.tempHeaderTable = [];
                            for (const e of t)
                                "" !== e.label && (e.label = this.translateService.instant(e.label)),
                                this.tempHeaderTable.push(e)
                        } catch (t) {}
                    })
                }
                get headerTable() {
                    return this.tempHeaderTable
                }
                createContentTable(t) {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        const e = [];
                        let n = 0;
                        for (const [o,i] of t.entries()) {
                            const a = this.setCta(o, t.length)
                              , r = Object.assign(Object.assign({}, i), {
                                cta: a,
                                id: n
                            });
                            e.push(r),
                            n++
                        }
                        return e
                    })
                }
                setCta(t, e) {
                    let n;
                    return n = t === e - 1 && 1 === e ? [{
                        label: "",
                        iconUrl: "assets/icon/icon-feather/icon-edit-2.svg",
                        buttonType: "edit",
                        color: "medium",
                        customFunction: !0
                    }, {
                        label: "",
                        iconUrl: "assets/icon/icon-feather/icon-trash.svg",
                        buttonType: "remove",
                        color: "danger",
                        customFunction: !0
                    }] : 0 === t ? [{
                        label: "",
                        iconUrl: "assets/icon/icon-feather/icon-chevron-down.svg",
                        buttonType: "down",
                        color: "medium",
                        customFunction: !0
                    }, {
                        label: "",
                        iconUrl: "assets/icon/icon-feather/icon-edit-2.svg",
                        buttonType: "edit",
                        color: "medium",
                        customFunction: !0
                    }, {
                        label: "",
                        iconUrl: "assets/icon/icon-feather/icon-trash.svg",
                        buttonType: "remove",
                        color: "danger",
                        customFunction: !0
                    }] : t === e - 1 && 1 !== e ? [{
                        label: "",
                        iconUrl: "assets/icon/icon-feather/icon-chevron-up.svg",
                        buttonType: "up",
                        color: "medium",
                        customFunction: !0
                    }, {
                        label: "",
                        iconUrl: "assets/icon/icon-feather/icon-edit-2.svg",
                        buttonType: "edit",
                        color: "medium",
                        customFunction: !0
                    }, {
                        label: "",
                        iconUrl: "assets/icon/icon-feather/icon-trash.svg",
                        buttonType: "remove",
                        color: "danger",
                        customFunction: !0
                    }] : [{
                        label: "",
                        iconUrl: "assets/icon/icon-feather/icon-chevron-up.svg",
                        buttonType: "up",
                        color: "medium",
                        customFunction: !0
                    }, {
                        label: "",
                        iconUrl: "assets/icon/icon-feather/icon-chevron-down.svg",
                        buttonType: "down",
                        color: "medium",
                        customFunction: !0
                    }, {
                        label: "",
                        iconUrl: "assets/icon/icon-feather/icon-edit-2.svg",
                        buttonType: "edit",
                        color: "medium",
                        customFunction: !0
                    }, {
                        label: "",
                        iconUrl: "assets/icon/icon-feather/icon-trash.svg",
                        buttonType: "remove",
                        color: "danger",
                        customFunction: !0
                    }],
                    n
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.LFG(l),a.LFG(s.e),a.LFG(c.sK))
            }
            ,
            t.\u0275prov = a.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )()
    },
    37001: function(t, e, n) {
        n.d(e, {
            Y: function() {
                return c
            }
        });
        var o = n(64762)
          , i = n(27969)
          , a = n(37716)
          , r = n(75808)
          , s = n(52436)
          , l = n(29790);
        let c = (()=>{
            class t {
                constructor(t, e, n) {
                    this.businessTripApi = t,
                    this.baseApi = e,
                    this.translateService = n,
                    this.subscription$ = [],
                    this.tempHeaderTable = []
                }
                dispose() {
                    this.unsubscribe()
                }
                unsubscribe() {
                    this.subscription$.forEach(t=>t.unsubscribe())
                }
                getPurposeType(t) {
                    return new Promise((e,n)=>{
                        this.subscription$.push(this.businessTripApi.getPurposeType(t).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                submitPurposeType(t, e) {
                    return e ? this.editPurposeType(t) : this.addPurposeType(t)
                }
                addPurposeType(t) {
                    return new Promise((e,n)=>{
                        this.subscription$.push(this.businessTripApi.addPurposeType(t).pipe((0,
                        i.U)(t=>t.message)).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                editPurposeType(t) {
                    return new Promise((e,n)=>{
                        this.subscription$.push(this.businessTripApi.editPurposeType(t).pipe((0,
                        i.U)(t=>t.message)).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                deletePurposeType(t) {
                    return new Promise((e,n)=>{
                        this.subscription$.push(this.businessTripApi.deletePurposeType(t).pipe((0,
                        i.U)(t=>t.message)).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                createHeaderTable() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const t = yield this.baseApi.requestJson("assets/json/gdx-table/header-business-trip-manage-purpose-type-list.json").toPromise();
                            this.tempHeaderTable = [];
                            for (const e of t)
                                "" !== e.label && (e.label = this.translateService.instant(e.label)),
                                this.tempHeaderTable.push(e)
                        } catch (t) {}
                    })
                }
                get headerTable() {
                    return this.tempHeaderTable
                }
                createContentTable(t) {
                    const e = [];
                    for (const n of t)
                        e.push({
                            name: {
                                color: "dark",
                                label: n.purposeNameEn
                            },
                            detail: n,
                            cta: [{
                                buttonType: "edit",
                                iconUrl: "assets/icon-feather/icon-edit-2.svg",
                                customFunction: !0
                            }, {
                                iconUrl: "assets/icon-feather/icon-trash.svg",
                                customFunction: !0,
                                buttonType: "delete",
                                color: "danger"
                            }]
                        });
                    return e
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.LFG(r.U),a.LFG(s.e),a.LFG(l.sK))
            }
            ,
            t.\u0275prov = a.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )()
    },
    15070: function(t, e, n) {
        n.d(e, {
            V: function() {
                return h
            }
        });
        var o = n(27969)
          , i = n(37716)
          , a = n(87628)
          , r = n(82021)
          , s = n(95512)
          , l = n(57196)
          , c = n(9753)
          , d = n(4062)
          , u = n(2738)
          , p = n(87601)
          , g = n(62822)
          , m = n(33288);
        let h = (()=>{
            class t {
                constructor(t, e, n, o, i, a, r, s, l, c) {
                    this.authApi = t,
                    this.baseStorage = e,
                    this.sfCompanyApi = n,
                    this.auth = o,
                    this.sf6sCompanySettingApi = i,
                    this.fileService = a,
                    this.fileUploaderService = r,
                    this.companyApi = s,
                    this.companyProfileSF6Api = l,
                    this.timezoneApi = c,
                    this.multiCompany = [],
                    this.subscription$ = []
                }
                dispose() {
                    this.unsubscribe()
                }
                unsubscribe() {
                    this.subscription$.forEach(t=>t.unsubscribe())
                }
                set companyName(t) {
                    this.getCompanyName = t
                }
                get companyName() {
                    return this.getCompanyName
                }
                set myCompany(t) {
                    this.company = t
                }
                get myCompany() {
                    return this.company
                }
                getMyCompany(t) {
                    return new Promise((e,n)=>{
                        const i = {
                            companyId: t
                        };
                        this.auth.gdAuth.isSF6 ? this.companyProfileSF6Api.getCompanyProfile().subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ) : this.sfCompanyApi.getCompany(i).pipe((0,
                        o.U)(t=>t.data)).subscribe(t=>{
                            this.myCompany = t,
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        )
                    }
                    )
                }
                processWebFile(t) {
                    return this.fileService.processWebFile(t)
                }
                checkMaxSize(t) {
                    return this.fileService.checkMaxSize(t)
                }
                uploadCompanyProfile(t, e) {
                    return new Promise((n,i)=>{
                        this.companyApi.updateCompanyProfile(t, e).pipe((0,
                        o.U)(t=>t.data)).subscribe(t=>{
                            n(t)
                        }
                        , t=>{
                            i(t)
                        }
                        )
                    }
                    )
                }
                uploadCompanyLogo(t) {
                    const e = this.companyApi.uploadCompanyLogo({
                        access_token: this.auth.gdAuth.id
                    });
                    return console.log(e),
                    this.fileUploaderService.upload({
                        urlUpload: e.url,
                        fileName: t.fileName,
                        webSource: t.sourceFile,
                        nativeURI: t.sourceFile,
                        type: t.fileType
                    }, !1)
                }
                getTimezone() {
                    return new Promise((t,e)=>{
                        this.subscription$.push(this.timezoneApi.getAllTimezone().pipe((0,
                        o.U)(t=>t.data)).subscribe(e=>{
                            t(e)
                        }
                        , t=>{
                            e(t)
                        }
                        ))
                    }
                    )
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(i.LFG(a.z),i.LFG(r.E),i.LFG(s.X),i.LFG(l.V),i.LFG(c.F),i.LFG(d.I),i.LFG(u.G),i.LFG(p.u),i.LFG(g.f),i.LFG(m.K))
            }
            ,
            t.\u0275prov = i.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )()
    },
    85301: function(t, e, n) {
        n.d(e, {
            a: function() {
                return u
            }
        });
        var o = n(64762)
          , i = n(37716)
          , a = n(77774)
          , r = n(56682)
          , s = n(52436);
        let l = (()=>{
            class t {
                constructor(t) {
                    this.baseApiService = t,
                    this.model = "sfprofile"
                }
                getListEmpRehire(t) {
                    const e = r.n.GET
                      , n = {}
                      , o = t
                      , i = this.baseApiService.urlBuilder({
                        method: e,
                        model: this.model,
                        func: "getListEmpRehire",
                        params: n,
                        urlParams: o
                    });
                    return null != t.page && (o.page = t.page),
                    null != t.limit && (o.limit = t.limit),
                    null != t.q && (o.q = t.q),
                    this.baseApiService.request({
                        method: e,
                        url: i,
                        params: n
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(i.LFG(s.e))
            }
            ,
            t.\u0275prov = i.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )();
        var c = n(29790)
          , d = n(22168);
        let u = (()=>{
            class t {
                constructor(t, e, n, o, i) {
                    this.sfCareerApi = t,
                    this.empRehireApi = e,
                    this.baseApi = n,
                    this.translateService = o,
                    this.sfFormateDate = i,
                    this.subscription = [],
                    this.tempHeaderTable = []
                }
                dispose() {
                    this.unsubscribe()
                }
                unsubscribe() {
                    this.subscription.forEach(t=>t.unsubscribe())
                }
                getListEmpRehire(t) {
                    return new Promise((e,n)=>{
                        this.subscription.push(this.empRehireApi.getListEmpRehire(t).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                getEmpHistory(t) {
                    return new Promise((e,n)=>{
                        this.subscription.push(this.sfCareerApi.getEmpHistory(t).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                addCareer(t) {
                    return new Promise((e,n)=>{
                        this.subscription.push(this.sfCareerApi.addCareer(t).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                createHeaderTable() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const t = yield this.baseApi.requestJson("assets/json/gdx-table/header-emp-rehire.json").toPromise();
                            this.tempHeaderTable = [];
                            for (const e of t)
                                "" !== e.label && (e.label = this.translateService.instant(e.label)),
                                this.tempHeaderTable.push(e)
                        } catch (t) {}
                    })
                }
                get headerTable() {
                    return this.tempHeaderTable
                }
                createContentTable(t) {
                    const e = [];
                    for (const n of t) {
                        const t = [{
                            label: "Rehire",
                            buttonType: "addRow",
                            variant: "primary",
                            customFunction: !0,
                            color: "primary"
                        }]
                          , o = {
                            name: n.teomemppersonal.fullName,
                            id: n.teomemppersonal.empId,
                            terminationDate: this.sfFormateDate.transform(n.employmentEnddate, "DMMMYYYY"),
                            cta: t,
                            empRehireData: n
                        };
                        e.push(o)
                    }
                    return e
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(i.LFG(a.T),i.LFG(l),i.LFG(s.e),i.LFG(c.sK),i.LFG(d.I))
            }
            ,
            t.\u0275prov = i.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )()
    },
    25307: function(t, e, n) {
        n.d(e, {
            R: function() {
                return u
            }
        });
        var o = n(64762)
          , i = n(27969)
          , a = n(37716)
          , r = n(23974)
          , s = n(56682)
          , l = n(52436);
        let c = (()=>{
            class t {
                constructor(t) {
                    this.baseApiService = t,
                    this.model = "nationality"
                }
                nationalityList(t) {
                    const e = s.n.POST
                      , n = {}
                      , o = this.baseApiService.urlBuilder({
                        method: e,
                        model: this.model,
                        func: "listNationality",
                        params: n,
                        urlParams: t
                    });
                    return this.baseApiService.request({
                        method: e,
                        url: o,
                        params: n,
                        body: {}
                    })
                }
                addNationality(t) {
                    const e = s.n.POST
                      , n = t
                      , o = this.baseApiService.urlBuilder({
                        method: e,
                        model: this.model,
                        func: "addNationality",
                        params: n,
                        urlParams: {}
                    });
                    return this.baseApiService.request({
                        method: e,
                        url: o,
                        params: n,
                        body: {}
                    })
                }
                updateNationality(t) {
                    const e = s.n.POST
                      , n = t
                      , o = this.baseApiService.urlBuilder({
                        method: e,
                        model: this.model,
                        func: "updateNationality",
                        params: n,
                        urlParams: {}
                    });
                    return this.baseApiService.request({
                        method: e,
                        url: o,
                        params: n,
                        body: {}
                    })
                }
                deleteNationality(t) {
                    const e = s.n.POST
                      , n = t
                      , o = this.baseApiService.urlBuilder({
                        method: e,
                        model: this.model,
                        func: "deleteNationality",
                        params: n,
                        urlParams: {}
                    });
                    return this.baseApiService.request({
                        method: e,
                        url: o,
                        params: n,
                        body: {}
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.LFG(l.e))
            }
            ,
            t.\u0275prov = a.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )();
        var d = n(29790);
        let u = (()=>{
            class t {
                constructor(t, e, n, o) {
                    this.accessManagementApi = t,
                    this.nationalityApi = e,
                    this.baseApi = n,
                    this.translateService = o,
                    this.subscription = [],
                    this.tempHeaderTable = []
                }
                unsubscribe() {
                    this.subscription.forEach(t=>t.unsubscribe())
                }
                dispose() {
                    this.unsubscribe()
                }
                paginate(t, e, n) {
                    return t.slice((e - 1) * n, e * n)
                }
                getNationalityList() {
                    return new Promise((t,e)=>{
                        this.subscription.push(this.nationalityApi.nationalityList().pipe((0,
                        i.U)(t=>t.data)).subscribe(e=>{
                            t(e)
                        }
                        , t=>{
                            e(t)
                        }
                        ))
                    }
                    )
                }
                add(t) {
                    return new Promise((e,n)=>{
                        this.subscription.push(this.nationalityApi.addNationality(t).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                update(t) {
                    return new Promise((e,n)=>{
                        this.subscription.push(this.nationalityApi.updateNationality(t).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                delete(t) {
                    return new Promise((e,n)=>{
                        this.subscription.push(this.nationalityApi.deleteNationality(t).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                createHeaderTable() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const t = yield this.baseApi.requestJson("assets/json/gdx-table/header-nationality.json").toPromise();
                            this.tempHeaderTable = [];
                            for (const e of t)
                                "" !== e.label && (e.label = this.translateService.instant(e.label)),
                                this.tempHeaderTable.push(e)
                        } catch (t) {}
                    })
                }
                get headerTable() {
                    return this.tempHeaderTable
                }
                createContentTable(t) {
                    const e = [];
                    for (const n of t) {
                        const t = [{
                            label: "",
                            iconUrl: "assets/icon-feather/icon-edit.svg",
                            buttonType: "edit",
                            variant: "success",
                            customFunction: !0,
                            color: "medium"
                        }, {
                            label: "",
                            iconUrl: "assets/icon-feather/icon-trash.svg",
                            buttonType: "delete",
                            variant: "success",
                            customFunction: !0,
                            color: "danger"
                        }]
                          , o = Object.assign(Object.assign({}, n), {
                            cta: t
                        });
                        e.push(o)
                    }
                    return e
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.LFG(r.R),a.LFG(c),a.LFG(l.e),a.LFG(d.sK))
            }
            ,
            t.\u0275prov = a.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )()
    },
    14635: function(t, e, n) {
        n.d(e, {
            t: function() {
                return m
            }
        });
        var o = n(64762)
          , i = n(27969)
          , a = n(37716)
          , r = n(57196)
          , s = n(52436)
          , l = n(29790)
          , c = n(56682);
        let d = (()=>{
            class t {
                constructor(t) {
                    this.baseApi = t,
                    this.model = "sf6s/ohsaHistory"
                }
                listing(t) {
                    const e = c.n.GET
                      , n = {}
                      , o = this.baseApi.urlBuilder({
                        method: e,
                        model: this.model,
                        func: "listing",
                        params: n,
                        urlParams: t
                    });
                    return this.baseApi.request({
                        method: e,
                        url: o,
                        params: n
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.LFG(s.e))
            }
            ,
            t.\u0275prov = a.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )();
        var u = n(69259)
          , p = n(85136)
          , g = n(63359);
        let m = (()=>{
            class t {
                constructor(t, e, n, o, i, a, r) {
                    this.auth = t,
                    this.baseApi = e,
                    this.translateService = n,
                    this.ohsaHistoryApi = o,
                    this.personalApi = i,
                    this.fileDownloaderService = a,
                    this.attachmentService = r,
                    this.subscriptions = [],
                    this.tempHeaderTable = []
                }
                dispose() {
                    this.tempHeaderTable = [],
                    this.unsubscribe()
                }
                unsubscribe() {
                    this.subscriptions.forEach(t=>t.unsubscribe())
                }
                getOhsaHistory(t) {
                    return new Promise((e,n)=>{
                        this.subscriptions.push(this.ohsaHistoryApi.listing(t).pipe((0,
                        i.U)(t=>t.data)).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                getPersonalInfo(t) {
                    return new Promise((e,n)=>{
                        this.subscriptions.push(this.personalApi.getPersonal(t).pipe((0,
                        i.U)(t=>t.data)).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                downloadAttachment(t) {
                    var e;
                    return this.attachmentService.downloadAttachment(t, null, null === (e = this.auth.gdAuth) || void 0 === e ? void 0 : e.ohsahistorypath)
                }
                createHeaderTable() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const t = yield this.baseApi.requestJson("assets/json/gdx-table/header-profile-ohsa-history.json").toPromise();
                            this.tempHeaderTable = [];
                            for (const e of t)
                                "" !== e.label && (e.label = this.translateService.instant(e.label)),
                                this.tempHeaderTable.push(e)
                        } catch (t) {}
                    })
                }
                get headerTable() {
                    return this.tempHeaderTable
                }
                createContentTable(t) {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        const e = [];
                        let n = 0;
                        for (const o of t) {
                            n++;
                            const t = Object.assign(Object.assign({}, o), {
                                no: n
                            });
                            e.push(t)
                        }
                        return e
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.LFG(r.V),a.LFG(s.e),a.LFG(l.sK),a.LFG(d),a.LFG(u.O),a.LFG(p.B),a.LFG(g.L))
            }
            ,
            t.\u0275prov = a.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )()
    },
    72093: function(t, e, n) {
        n.r(e),
        n.d(e, {
            LoginCompanySearchPageModule: function() {
                return g
            }
        });
        var o = n(38583)
          , i = n(3679)
          , a = n(55546)
          , r = n(99415)
          , s = n(44550)
          , l = n(37716);
        const c = [{
            path: "",
            component: s.D
        }];
        let d = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[r.Bz.forChild(c)], r.Bz]
            }),
            t
        }
        )();
        var u = n(29790)
          , p = n(52928);
        let g = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[o.ez, i.u5, a.Pc, d, u.aw, p.jx]]
            }),
            t
        }
        )()
    },
    24310: function(t, e, n) {
        n.d(e, {
            x: function() {
                return d
            }
        });
        var o = n(37716)
          , i = n(27996)
          , a = n(55546)
          , r = n(52928)
          , s = n(35618)
          , l = n(3679)
          , c = n(29790);
        let d = (()=>{
            class t {
                constructor(t) {
                    this.modalService = t,
                    this.form = {
                        sort: "",
                        position: ""
                    },
                    this.positionList = [{
                        name: "Designer",
                        value: "designer"
                    }, {
                        name: "UX",
                        value: "ux"
                    }, {
                        name: "3D Modelling",
                        value: "3d"
                    }]
                }
                ngOnInit() {}
                clearFilter() {
                    this.form.sort = "",
                    this.form.position = ""
                }
                applyFilter() {
                    console.log(this.form),
                    this.modalService.dismiss({
                        filter: this.form
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(o.Y36(i.Z))
            }
            ,
            t.\u0275cmp = o.Xpm({
                type: t,
                selectors: [["app-activity-recording-filter-filter"]],
                decls: 30,
                vars: 16,
                consts: [["slot", "end", "fill", "clear", 3, "click"], [1, "ion-padding"], ["fxLayout", "column", "fxLayoutGap", "8px"], [3, "ngModel", "ngModelChange"], ["lines", "none"], ["slot", "start", "value", "az"], ["slot", "start", "value", "za"], [3, "name", "list", "ngModel", "ngModelChange"], [3, "click"]],
                template: function(t, e) {
                    1 & t && (o.TgZ(0, "ion-header"),
                    o.TgZ(1, "ion-toolbar"),
                    o.TgZ(2, "ion-title"),
                    o._uU(3),
                    o.ALo(4, "translate"),
                    o.qZA(),
                    o.TgZ(5, "gd-comp-button", 0),
                    o.NdJ("click", function() {
                        return e.clearFilter()
                    }),
                    o._uU(6, "Clear"),
                    o.qZA(),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(7, "ion-content", 1),
                    o.TgZ(8, "div", 2),
                    o.TgZ(9, "ion-label"),
                    o._uU(10),
                    o.ALo(11, "translate"),
                    o.qZA(),
                    o.TgZ(12, "ion-radio-group", 3),
                    o.NdJ("ngModelChange", function(t) {
                        return e.form.sort = t
                    }),
                    o.TgZ(13, "ion-item", 4),
                    o.TgZ(14, "ion-label"),
                    o._uU(15, "A-Z"),
                    o.qZA(),
                    o._UZ(16, "ion-radio", 5),
                    o.qZA(),
                    o.TgZ(17, "ion-item", 4),
                    o.TgZ(18, "ion-label"),
                    o._uU(19, "Z-A"),
                    o.qZA(),
                    o._UZ(20, "ion-radio", 6),
                    o.qZA(),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(21, "div", 2),
                    o.TgZ(22, "ion-label"),
                    o._uU(23),
                    o.ALo(24, "translate"),
                    o.qZA(),
                    o.TgZ(25, "gd-comp-select", 7),
                    o.NdJ("ngModelChange", function(t) {
                        return e.form.position = t
                    }),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(26, "div"),
                    o.TgZ(27, "gd-comp-button", 8),
                    o.NdJ("click", function() {
                        return e.applyFilter()
                    }),
                    o._uU(28),
                    o.ALo(29, "translate"),
                    o.qZA(),
                    o.qZA(),
                    o.qZA()),
                    2 & t && (o.xp6(3),
                    o.Oqu(o.lcZ(4, 8, "Filter")),
                    o.xp6(7),
                    o.Oqu(o.lcZ(11, 10, "Sort")),
                    o.xp6(2),
                    o.Q6J("ngModel", e.form.sort),
                    o.xp6(11),
                    o.Oqu(o.lcZ(24, 12, "Position")),
                    o.xp6(2),
                    o.Q6J("name", "Position")("list", e.positionList)("ngModel", e.form.position),
                    o.xp6(3),
                    o.Oqu(o.lcZ(29, 14, "Apply")))
                },
                directives: [a.Gu, a.sr, a.wd, r.qH, a.W2, s.xw, s.SQ, a.Q$, a.se, a.QI, l.JJ, l.On, a.Ie, a.B7, a.U5, r.sJ],
                pipes: [c.X$],
                styles: [".employees-activity-box[_ngcontent-%COMP%]{border:1px solid var(--gdx-color-outline);border-radius:var(--gdx-border-radius)}.employees-activity-box[_ngcontent-%COMP%]   .self-activity[_ngcontent-%COMP%]{border-bottom:1px solid var(--gdx-color-outline);padding:16px}.employees-activity-box[_ngcontent-%COMP%]   .self-activity[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.employees-activity-box[_ngcontent-%COMP%]   .employee-grid[_ngcontent-%COMP%]{padding:16px}.employees-activity-box[_ngcontent-%COMP%]   .employee-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:8px}.employees-activity-box[_ngcontent-%COMP%]   .employee-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{max-width:85px;text-align:center;width:85px}.employees-activity-box[_ngcontent-%COMP%]   .list-mode[_ngcontent-%COMP%]{flex-direction:column!important;align-items:flex-start!important}.employees-activity-box[_ngcontent-%COMP%]   .list-mode[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex-direction:row!important;justify-content:flex-start!important;margin:0!important;width:100%;border-bottom:1px solid var(--gdx-color-outline);padding:16px 0}.employees-activity-box[_ngcontent-%COMP%]   .list-mode[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   app-avatar[_ngcontent-%COMP%]{margin-bottom:0!important;margin-right:16px}.employees-activity-box[_ngcontent-%COMP%]   .list-mode[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{max-width:unset;text-align:left;width:unset}.employees-activity-box[_ngcontent-%COMP%]   .list-mode[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:16px;font-weight:700;margin-bottom:4px}.employees-activity-box[_ngcontent-%COMP%]   .list-mode[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ion-color-medium)}"]
            }),
            t
        }
        )()
    },
    15997: function(t, e, n) {
        n.r(e),
        n.d(e, {
            ProfileAddressPageModule: function() {
                return m
            }
        });
        var o = n(38583)
          , i = n(3679)
          , a = n(55546)
          , r = n(99415)
          , s = n(8358)
          , l = n(37716);
        const c = [{
            path: "",
            component: s.b
        }];
        let d = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[r.Bz.forChild(c)], r.Bz]
            }),
            t
        }
        )();
        var u = n(29790)
          , p = n(15566)
          , g = n(52928);
        let m = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[o.ez, i.u5, a.Pc, d, u.aw, p.o9, g.F$, g.R$, g.wb]]
            }),
            t
        }
        )()
    },
    8358: function(t, e, n) {
        n.d(e, {
            b: function() {
                return A
            }
        });
        var o = n(64762)
          , i = n(54450)
          , a = n(37716)
          , r = n(45588)
          , s = n(57196)
          , l = n(12132)
          , c = n(27996)
          , d = n(38583)
          , u = n(35618)
          , p = n(52928)
          , g = n(55546)
          , m = n(29790);
        function h(t, e) {
            1 & t && a._UZ(0, "gd-comp-empty-state")
        }
        function f(t, e) {
            1 & t && (a.TgZ(0, "div", 7),
            a._UZ(1, "div", 8),
            a._UZ(2, "div", 9),
            a.qZA())
        }
        const v = function() {
            return [1, 2, 3, 4]
        };
        function Z(t, e) {
            1 & t && (a.TgZ(0, "div", 5),
            a.YNc(1, f, 3, 0, "div", 6),
            a.qZA()),
            2 & t && (a.xp6(1),
            a.Q6J("ngForOf", a.DdM(1, v)))
        }
        function b(t, e) {
            if (1 & t) {
                const t = a.EpF();
                a.TgZ(0, "div", 11),
                a.NdJ("click", function() {
                    const e = a.CHM(t).$implicit;
                    return a.oxw(2).openModal(!0, e)
                }),
                a.TgZ(1, "div", 12),
                a.TgZ(2, "ion-label", 13),
                a._uU(3),
                a.ALo(4, "translate"),
                a.qZA(),
                a.qZA(),
                a.TgZ(5, "div", 14),
                a._UZ(6, "gd-comp-icon", 15),
                a.TgZ(7, "ion-label", 16),
                a._uU(8),
                a.qZA(),
                a.qZA(),
                a.qZA()
            }
            if (2 & t) {
                const t = e.$implicit;
                a.xp6(3),
                a.Oqu(a.lcZ(4, 6, t.addresstypeName)),
                a.xp6(3),
                a.Q6J("color", "primary")("size", 20)("type", "svg")("name", "icon-map-pin"),
                a.xp6(2),
                a.hij(" ", t.address + ", " + t.cityId + ", " + t.stateId, "")
            }
        }
        function x(t, e) {
            if (1 & t && (a.TgZ(0, "div", 5),
            a.YNc(1, b, 9, 8, "div", 10),
            a.qZA()),
            2 & t) {
                const t = a.oxw();
                a.xp6(1),
                a.Q6J("ngForOf", t.addressList)
            }
        }
        let A = (()=>{
            class t {
                constructor(t, e, n, o) {
                    this.profileAddressService = t,
                    this.auth = e,
                    this.alertService = n,
                    this.modalService = o,
                    this.hiddenBtn = !1,
                    this.addedAddress = [],
                    this.addressList = [],
                    this.addressAvailable = [],
                    this.isLoading = !1,
                    this.showBtnAdd = !0
                }
                ngOnInit() {
                    console.log(this.empId),
                    this.showBtnAdd = this.auth.gdAuth.menu["btn-add-address"],
                    this.getAddress()
                }
                openModal(t, e) {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        const t = {
                            data: e,
                            empId: this.empId,
                            addressList: this.addressList
                        };
                        yield this.modalService.present(i.X, t, "large-modal"),
                        this.getAddress()
                    })
                }
                getAddress() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const t = {
                                companyCode: this.auth.gdAuth.companyCode,
                                companyId: this.auth.gdAuth.companyId,
                                empId: this.empId,
                                page: 1,
                                limit: 20
                            }
                              , e = yield this.profileAddressService.getAddress(t);
                            this.addressList = e.data,
                            this.addressTypeCheck(),
                            console.log(e)
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        }
                    })
                }
                addressTypeCheck() {
                    const t = this.addressList.findIndex(t=>"A" === t.addresstypeCode)
                      , e = this.addressList.findIndex(t=>"B" === t.addresstypeCode)
                      , n = this.addressList.findIndex(t=>"C" === t.addresstypeCode);
                    this.hiddenBtn = -1 !== t && -1 !== e && -1 !== n
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.Y36(r.n),a.Y36(s.V),a.Y36(l.c),a.Y36(c.Z))
            }
            ,
            t.\u0275cmp = a.Xpm({
                type: t,
                selectors: [["app-profile-address"]],
                inputs: {
                    empId: "empId",
                    isSF6: "isSF6"
                },
                decls: 8,
                vars: 7,
                consts: [[1, "form-profile-box"], [4, "ngIf"], ["class", "address-card", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center ", "ph-16", "", 1, "footer-box", 3, "hidden"], ["color", "primary", 3, "click"], [1, "address-card"], ["class", "card-box", "pa", "", 4, "ngFor", "ngForOf"], ["pa", "", 1, "card-box"], ["grd-skeleton", "", 1, "skeleton-title"], ["grd-skeleton", "", 1, "skeleton-description"], ["class", "card-box", "pa", "", "fxFlex", "23.5", "pa", "", "mb-16", "", "mr-10", "", 3, "click", 4, "ngFor", "ngForOf"], ["pa", "", "fxFlex", "23.5", "pa", "", "mb-16", "", "mr-10", "", 1, "card-box", 3, "click"], ["mb-4", "", 1, "name-section"], ["color", "primary", "bold-text", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "address-section"], ["mr-10", "", "fxFlex", "10", 3, "color", "size", "type", "name"], ["fxFlex", ""]],
                template: function(t, e) {
                    1 & t && (a.TgZ(0, "div", 0),
                    a.YNc(1, h, 1, 0, "gd-comp-empty-state", 1),
                    a.YNc(2, Z, 2, 2, "div", 2),
                    a.YNc(3, x, 2, 1, "div", 2),
                    a.TgZ(4, "div", 3),
                    a.TgZ(5, "gd-comp-button", 4),
                    a.NdJ("click", function() {
                        return e.openModal(!1)
                    }),
                    a._uU(6),
                    a.ALo(7, "translate"),
                    a.qZA(),
                    a.qZA(),
                    a.qZA()),
                    2 & t && (a.xp6(1),
                    a.Q6J("ngIf", 0 == e.addressList.length && !e.isLoading),
                    a.xp6(1),
                    a.Q6J("ngIf", e.isLoading),
                    a.xp6(1),
                    a.Q6J("ngIf", e.addressList.length >= 0 && !e.isLoading),
                    a.xp6(1),
                    a.Q6J("hidden", e.hiddenBtn || !e.showBtnAdd),
                    a.xp6(2),
                    a.Oqu(a.lcZ(7, 5, "+ Add")))
                },
                directives: [d.O5, u.xw, u.Wh, p.qH, p.zK, d.sg, u.yH, g.Q$, p.pD],
                pipes: [m.X$],
                styles: [".form-profile-box[_ngcontent-%COMP%]   .address-card[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-gap:12px}.form-profile-box[_ngcontent-%COMP%]   .address-card[_ngcontent-%COMP%]   .card-box[_ngcontent-%COMP%]{transition:background-color .5s ease;border-radius:5px;border:1px solid var(--gdx-color-outline)}.form-profile-box[_ngcontent-%COMP%]   .address-card[_ngcontent-%COMP%]   .card-box[_ngcontent-%COMP%]   .name-section[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{word-wrap:break-word}.form-profile-box[_ngcontent-%COMP%]   .address-card[_ngcontent-%COMP%]   .card-box[_ngcontent-%COMP%]   .address-section[_ngcontent-%COMP%]{color:var(--ion-color-dark)}.form-profile-box[_ngcontent-%COMP%]   .address-card[_ngcontent-%COMP%]   .card-box[_ngcontent-%COMP%]   .address-section[_ngcontent-%COMP%]   .icon-supsection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:10px;height:20px}.form-profile-box[_ngcontent-%COMP%]   .address-card[_ngcontent-%COMP%]   .card-box[_ngcontent-%COMP%]   .skeleton-title[_ngcontent-%COMP%]{height:16px;width:50%;margin-bottom:10px;margin-top:10px;border-radius:8px}.form-profile-box[_ngcontent-%COMP%]   .address-card[_ngcontent-%COMP%]   .card-box[_ngcontent-%COMP%]   .skeleton-description[_ngcontent-%COMP%]{height:16px;width:80%;border-radius:8px}.form-profile-box[_ngcontent-%COMP%]   .address-card[_ngcontent-%COMP%]   .card-box[_ngcontent-%COMP%]:hover{background-color:var(--ion-color-light);cursor:pointer}"]
            }),
            t
        }
        )()
    },
    6315: function(t, e, n) {
        n.r(e),
        n.d(e, {
            ProfileAwardsPageModule: function() {
                return m
            }
        });
        var o = n(38583)
          , i = n(3679)
          , a = n(55546)
          , r = n(99415)
          , s = n(83980)
          , l = n(37716);
        const c = [{
            path: "",
            component: s.A
        }];
        let d = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[r.Bz.forChild(c)], r.Bz]
            }),
            t
        }
        )();
        var u = n(29790)
          , p = n(15566)
          , g = n(52928);
        let m = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[o.ez, i.u5, a.Pc, d, g.U9, g.F$, u.aw, p.o9]]
            }),
            t
        }
        )()
    },
    83980: function(t, e, n) {
        n.d(e, {
            A: function() {
                return v
            }
        });
        var o = n(64762)
          , i = n(35023)
          , a = n(37716)
          , r = n(27996)
          , s = n(27969)
          , l = n(57196)
          , c = n(56682)
          , d = n(52436);
        let u = (()=>{
            class t {
                constructor(t) {
                    this.baseApi = t,
                    this.model = "sf6s/awards"
                }
                listing(t) {
                    const e = c.n.GET
                      , n = {}
                      , o = this.baseApi.urlBuilder({
                        method: e,
                        model: this.model,
                        func: "listing",
                        params: n,
                        urlParams: t
                    });
                    return this.baseApi.request({
                        method: e,
                        url: o,
                        params: n
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.LFG(d.e))
            }
            ,
            t.\u0275prov = a.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )();
        var p = n(29790)
          , g = n(22168);
        let m = (()=>{
            class t {
                constructor(t, e, n, o, i) {
                    this.auth = t,
                    this.sf6AwardsApi = e,
                    this.baseApi = n,
                    this.translateService = o,
                    this.sfFormatDate = i,
                    this.subscriptions = [],
                    this.tempHeaderTable = []
                }
                unsubscribe() {
                    this.subscriptions.forEach(t=>t.unsubscribe())
                }
                getAwardsListSf6(t) {
                    return new Promise((e,n)=>{
                        this.subscriptions.push(this.sf6AwardsApi.listing(t).pipe((0,
                        s.U)(t=>t.data)).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                createHeaderTable() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const t = yield this.baseApi.requestJson("assets/json/gdx-table/header-profile-awards.json").toPromise();
                            this.tempHeaderTable = [];
                            for (const e of t)
                                "" !== e.label && (e.label = this.translateService.instant(e.label)),
                                this.tempHeaderTable.push(e)
                        } catch (t) {}
                    })
                }
                get headerTable() {
                    return this.tempHeaderTable
                }
                createContentTable(t) {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        const e = [];
                        let n = 0;
                        for (const o of t)
                            n++,
                            e.push({
                                data: o,
                                no: n,
                                awardName: o.achievementName,
                                refNo: o.refno,
                                date: o.date
                            });
                        return e
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.LFG(l.V),a.LFG(u),a.LFG(d.e),a.LFG(p.sK),a.LFG(g.I))
            }
            ,
            t.\u0275prov = a.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )();
        var h = n(12132)
          , f = n(52928);
        let v = (()=>{
            class t {
                constructor(t, e, n, o) {
                    this.modalService = t,
                    this.profileAwardsService = e,
                    this.alertService = n,
                    this.auth = o,
                    this.isLoading = !1,
                    this.showBtnAdd = !0,
                    this.bodyTable = []
                }
                ngOnInit() {
                    this.getData()
                }
                getData() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.isLoading = !0;
                            const t = {
                                empId: this.empId,
                                lang: "en"
                            };
                            yield this.profileAwardsService.createHeaderTable();
                            const e = yield this.profileAwardsService.getAwardsListSf6(t);
                            this.bodyTable = yield this.profileAwardsService.createContentTable(e)
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        } finally {
                            this.isLoading = !1
                        }
                    })
                }
                actionRow(t) {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        console.log(t, "actionRow"),
                        yield this.modalService.present(i.Y, t, ""),
                        this.getData()
                    })
                }
                openModal() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        yield this.modalService.present(i.Y),
                        this.getData()
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.Y36(r.Z),a.Y36(m),a.Y36(h.c),a.Y36(l.V))
            }
            ,
            t.\u0275cmp = a.Xpm({
                type: t,
                selectors: [["app-profile-awards"]],
                inputs: {
                    empId: "empId"
                },
                decls: 3,
                vars: 3,
                consts: [[1, "form-profile-box"], [3, "headerTable", "bodyTable", "loading", "callbackActionRow"]],
                template: function(t, e) {
                    1 & t && (a.TgZ(0, "div", 0),
                    a.ynx(1),
                    a.TgZ(2, "gd-comp-table", 1),
                    a.NdJ("callbackActionRow", function(t) {
                        return e.actionRow(t)
                    }),
                    a.qZA(),
                    a.BQk(),
                    a.qZA()),
                    2 & t && (a.xp6(2),
                    a.Q6J("headerTable", e.profileAwardsService.headerTable)("bodyTable", e.bodyTable)("loading", e.isLoading))
                },
                directives: [f.xh],
                styles: [""]
            }),
            t
        }
        )()
    },
    35023: function(t, e, n) {
        n.d(e, {
            Y: function() {
                return d
            }
        });
        var o = n(37716)
          , i = n(55546)
          , a = n(22168)
          , r = n(996)
          , s = n(35618)
          , l = n(3679)
          , c = n(29790);
        let d = (()=>{
            class t {
                constructor(t, e, n) {
                    this.navParams = t,
                    this.sfformatDate = e,
                    this.navService = n
                }
                ngOnInit() {
                    this.params = this.navParams.get("params"),
                    console.log(this.navParams, this.params),
                    this.date = this.params.date,
                    this.companyName = this.params.data.teomcompany.companyName,
                    this.refNo = this.params.refNo,
                    this.awardsName = this.params.awardName,
                    this.remark = this.params.data.remark,
                    this.empNo = this.params.data.empNo,
                    this.empName = this.params.data.teomemppersonal.fullName
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(o.Y36(i.X1),o.Y36(a.I),o.Y36(r.f))
            }
            ,
            t.\u0275cmp = o.Xpm({
                type: t,
                selectors: [["app-profile-modal-awards"]],
                decls: 41,
                vars: 29,
                consts: [["pa", "", 1, "container"], ["fxLayout", "column", "mb", "", "pa", "", 1, "header"], ["large-text", "", "heading", "", "mb-4", "", 1, "ion-no-padding"], ["fxLayout", "column", "pv-16", "", 1, "form-profile-box"], ["fxLayout", "column", "fxLayoutGap", "32px", 1, "form-input-box"], ["fxLayout", "row", "fxLayoutGap", "21px", "fxLayoutAlign", "start center", 1, "form-section"], ["fxFlex", "20%", 1, "form-label-caption"], ["fxFlex", "", "type", "text", "readonly", "", 1, "form-input-text", 3, "ngModel", "ngModelChange"]],
                template: function(t, e) {
                    1 & t && (o.TgZ(0, "div", 0),
                    o.TgZ(1, "div", 1),
                    o.TgZ(2, "ion-title", 2),
                    o._uU(3),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(4, "div", 3),
                    o.TgZ(5, "div", 4),
                    o.TgZ(6, "div", 5),
                    o.TgZ(7, "ion-label", 6),
                    o._uU(8),
                    o.ALo(9, "translate"),
                    o.qZA(),
                    o.TgZ(10, "ion-input", 7),
                    o.NdJ("ngModelChange", function(t) {
                        return e.refNo = t
                    }),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(11, "div", 5),
                    o.TgZ(12, "ion-label", 6),
                    o._uU(13),
                    o.ALo(14, "translate"),
                    o.qZA(),
                    o.TgZ(15, "ion-input", 7),
                    o.NdJ("ngModelChange", function(t) {
                        return e.awardsName = t
                    }),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(16, "div", 5),
                    o.TgZ(17, "ion-label", 6),
                    o._uU(18),
                    o.ALo(19, "translate"),
                    o.qZA(),
                    o.TgZ(20, "ion-input", 7),
                    o.NdJ("ngModelChange", function(t) {
                        return e.date = t
                    }),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(21, "div", 5),
                    o.TgZ(22, "ion-label", 6),
                    o._uU(23),
                    o.ALo(24, "translate"),
                    o.qZA(),
                    o.TgZ(25, "ion-input", 7),
                    o.NdJ("ngModelChange", function(t) {
                        return e.remark = t
                    }),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(26, "div", 5),
                    o.TgZ(27, "ion-label", 6),
                    o._uU(28),
                    o.ALo(29, "translate"),
                    o.qZA(),
                    o.TgZ(30, "ion-input", 7),
                    o.NdJ("ngModelChange", function(t) {
                        return e.companyName = t
                    }),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(31, "div", 5),
                    o.TgZ(32, "ion-label", 6),
                    o._uU(33),
                    o.ALo(34, "translate"),
                    o.qZA(),
                    o.TgZ(35, "ion-input", 7),
                    o.NdJ("ngModelChange", function(t) {
                        return e.empNo = t
                    }),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(36, "div", 5),
                    o.TgZ(37, "ion-label", 6),
                    o._uU(38),
                    o.ALo(39, "translate"),
                    o.qZA(),
                    o.TgZ(40, "ion-input", 7),
                    o.NdJ("ngModelChange", function(t) {
                        return e.empName = t
                    }),
                    o.qZA(),
                    o.qZA(),
                    o.qZA(),
                    o.qZA(),
                    o.qZA()),
                    2 & t && (o.xp6(3),
                    o.Oqu("Awards"),
                    o.xp6(5),
                    o.hij("", o.lcZ(9, 15, "Reference Number"), " "),
                    o.xp6(2),
                    o.Q6J("ngModel", e.refNo),
                    o.xp6(3),
                    o.hij("", o.lcZ(14, 17, "Awards Name"), " "),
                    o.xp6(2),
                    o.Q6J("ngModel", e.awardsName),
                    o.xp6(3),
                    o.hij("", o.lcZ(19, 19, "Date"), " "),
                    o.xp6(2),
                    o.Q6J("ngModel", e.date),
                    o.xp6(3),
                    o.hij("", o.lcZ(24, 21, "Remark"), " "),
                    o.xp6(2),
                    o.Q6J("ngModel", e.remark),
                    o.xp6(3),
                    o.hij("", o.lcZ(29, 23, "Company"), " "),
                    o.xp6(2),
                    o.Q6J("ngModel", e.companyName),
                    o.xp6(3),
                    o.hij("", o.lcZ(34, 25, "Employee Number"), " "),
                    o.xp6(2),
                    o.Q6J("ngModel", e.empNo),
                    o.xp6(3),
                    o.hij("", o.lcZ(39, 27, "Employee Name"), " "),
                    o.xp6(2),
                    o.Q6J("ngModel", e.empName))
                },
                directives: [s.xw, i.wd, s.SQ, s.Wh, i.Q$, s.yH, i.pK, i.j9, l.JJ, l.On],
                pipes: [c.X$],
                styles: [".container[_ngcontent-%COMP%]{overflow:auto}.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{border-bottom:1px solid var(--gdx-color-outline)}.required[_ngcontent-%COMP%]{color:var(--ion-color-danger)!important}"]
            }),
            t
        }
        )()
    },
    95600: function(t, e, n) {
        n.r(e),
        n.d(e, {
            ProfileContactPageModule: function() {
                return m
            }
        });
        var o = n(38583)
          , i = n(3679)
          , a = n(55546)
          , r = n(99415)
          , s = n(89506)
          , l = n(37716);
        const c = [{
            path: "",
            component: s.$
        }];
        let d = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[r.Bz.forChild(c)], r.Bz]
            }),
            t
        }
        )();
        var u = n(29790)
          , p = n(15566)
          , g = n(52928);
        let m = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[o.ez, i.u5, a.Pc, d, u.aw, p.o9, g.F$, i.UX]]
            }),
            t
        }
        )()
    },
    89506: function(t, e, n) {
        n.d(e, {
            $: function() {
                return y
            }
        });
        var o = n(64762)
          , i = n(3679)
          , a = n(10922)
          , r = n(37716)
          , s = n(27969)
          , l = n(57196)
          , c = n(29790)
          , d = n(56682)
          , u = n(52436);
        let p = (()=>{
            class t {
                constructor(t) {
                    this.baseApiService = t,
                    this.model = "Contacts"
                }
                getContact(t) {
                    const e = d.n.GET
                      , n = {}
                      , o = this.baseApiService.urlBuilder({
                        method: e,
                        model: this.model,
                        func: "getContact",
                        params: n,
                        urlParams: t
                    });
                    return this.baseApiService.request({
                        method: e,
                        url: o,
                        params: n,
                        body: {}
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(r.LFG(u.e))
            }
            ,
            t.\u0275prov = r.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )()
          , g = (()=>{
            class t {
                constructor(t) {
                    this.baseApi = t,
                    this.model = "sf6s/contact"
                }
                save(t) {
                    const e = d.n.POST
                      , n = t
                      , o = this.baseApi.urlBuilder({
                        method: e,
                        model: this.model,
                        func: "save",
                        params: n,
                        urlParams: {}
                    });
                    return this.baseApi.request({
                        method: e,
                        url: o,
                        params: n
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(r.LFG(u.e))
            }
            ,
            t.\u0275prov = r.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )();
        var m = n(24410);
        let h = (()=>{
            class t {
                constructor(t, e, n, o, i) {
                    this.auth = t,
                    this.translateService = e,
                    this.contactApi = n,
                    this.sf6contactApi = o,
                    this.empReqApi = i,
                    this.subscriptions = []
                }
                dispose() {
                    this.unsubscribe()
                }
                unsubscribe() {
                    this.subscriptions.forEach(t=>t.unsubscribe())
                }
                getContact(t) {
                    return new Promise((e,n)=>{
                        this.subscriptions.push(this.contactApi.getContact(t).pipe((0,
                        s.U)(t=>t.data)).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                addContact(t) {
                    return new Promise((e,n)=>(0,
                    o.mG)(this, void 0, void 0, function*() {
                        this.subscriptions.push(this.empReqApi.addContact(t).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }))
                }
                addContactSF6(t) {
                    return new Promise((e,n)=>(0,
                    o.mG)(this, void 0, void 0, function*() {
                        this.subscriptions.push(this.sf6contactApi.save(t).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }))
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(r.LFG(l.V),r.LFG(c.sK),r.LFG(p),r.LFG(g),r.LFG(m.E))
            }
            ,
            t.\u0275prov = r.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )();
        var f = n(12132)
          , v = n(35618)
          , Z = n(55546)
          , b = n(38583)
          , x = n(52928);
        function A(t, e) {
            if (1 & t) {
                const t = r.EpF();
                r.TgZ(0, "gd-comp-button", 17),
                r.NdJ("click", function() {
                    return r.CHM(t),
                    r.oxw().saveForm()
                }),
                r._uU(1),
                r.ALo(2, "translate"),
                r.qZA()
            }
            if (2 & t) {
                const t = r.oxw();
                r.Q6J("loading", t.loadingSave)("disabled", !t.myForm.valid),
                r.xp6(1),
                r.Oqu(r.lcZ(2, 3, "Save"))
            }
        }
        let y = (()=>{
            class t {
                constructor(t, e, n) {
                    this.profileContactService = t,
                    this.alertService = e,
                    this.auth = n,
                    this.loadingSave = !1
                }
                ngOnInit() {
                    this.showBtnUpd = this.auth.gdAuth.menu["btn-upd-contact"],
                    this.initForm(),
                    this.getContact()
                }
                getContact() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const t = {
                                empId: this.empId
                            }
                              , e = yield this.profileContactService.getContact(t);
                            console.log(e),
                            this.myForm.setValue({
                                email: null == e ? void 0 : e.email,
                                ext: null == e ? void 0 : e.phoneExt,
                                phone: null == e ? void 0 : e.phone
                            })
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        }
                    })
                }
                initForm() {
                    this.myForm = new i.cw({
                        email: new i.NI("",[i.kI.required, i.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
                        ext: new i.NI(""),
                        phone: new i.NI("")
                    })
                }
                saveForm() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.loadingSave = !0;
                            const t = this.myForm.value;
                            t.empId = this.empId,
                            t.requestedby = this.auth.gdAuth.empId,
                            t.requestfor = this.empId,
                            this.isSF6 ? yield this.profileContactService.addContactSF6(t) : yield this.profileContactService.addContact(t),
                            yield this.alertService.presentAlertSuccess(a.V.SUCCESSFULLY_PROFILE_DETAIL_SAVED)
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        } finally {
                            this.loadingSave = !1
                        }
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(r.Y36(h),r.Y36(f.c),r.Y36(l.V))
            }
            ,
            t.\u0275cmp = r.Xpm({
                type: t,
                selectors: [["app-profile-contact"]],
                inputs: {
                    empId: "empId",
                    isSF6: "isSF6"
                },
                decls: 36,
                vars: 29,
                consts: [[1, "form-profile-box"], ["mv-16", "", "fxLayout", "column", "pv-10", "", 1, "title-box"], ["large-text", "", "mb-4", "", "bold-text", "", "color", "primary"], ["color", "medium"], ["fxLayout", "column", "fxLayoutGap", "32px", 3, "formGroup"], [1, "form-input-box"], ["color", "primary", "large-text", "", "mb-16", ""], [1, "form-box"], ["fxLayout", "row", "fxLayoutGap", "16px", "fxLayoutAlign", " center", 1, "form-section"], ["fxFlex", "20%", "color", "medium", 1, "form-label-caption"], ["color", "medium", "formControlName", "phone", "type", "text", 1, "form-input-text", 3, "placeholder"], ["color", "medium", "fxFlex", "20%", 1, "form-label-caption"], ["color", "medium", "formControlName", "ext", "fxFlex", "", "type", "text", 1, "form-input-text", 3, "placeholder"], [1, "required"], ["color", "medium", "formControlName", "email", "fxFlex", "", "type", "text", 1, "form-input-text", 3, "placeholder"], ["fxLayout", "row", "fxLayoutAlign", "center ", "ph-16", "", 1, "footer-box"], ["color", "primary", 3, "loading", "disabled", "click", 4, "ngIf"], ["color", "primary", 3, "loading", "disabled", "click"]],
                template: function(t, e) {
                    1 & t && (r.TgZ(0, "div", 0),
                    r.TgZ(1, "div", 1),
                    r.TgZ(2, "ion-label", 2),
                    r._uU(3),
                    r.ALo(4, "translate"),
                    r.qZA(),
                    r.TgZ(5, "ion-label", 3),
                    r._uU(6),
                    r.ALo(7, "translate"),
                    r.qZA(),
                    r.qZA(),
                    r.TgZ(8, "form", 4),
                    r.TgZ(9, "div", 5),
                    r.TgZ(10, "ion-label", 6),
                    r._uU(11),
                    r.ALo(12, "translate"),
                    r.qZA(),
                    r.TgZ(13, "div", 7),
                    r.TgZ(14, "div", 8),
                    r.TgZ(15, "ion-label", 9),
                    r._uU(16),
                    r.ALo(17, "translate"),
                    r.qZA(),
                    r._UZ(18, "ion-input", 10),
                    r.ALo(19, "translate"),
                    r.qZA(),
                    r.TgZ(20, "div", 8),
                    r.TgZ(21, "ion-label", 11),
                    r._uU(22),
                    r.ALo(23, "translate"),
                    r.qZA(),
                    r._UZ(24, "ion-input", 12),
                    r.ALo(25, "translate"),
                    r.qZA(),
                    r.TgZ(26, "div", 8),
                    r.TgZ(27, "ion-label", 11),
                    r._uU(28),
                    r.ALo(29, "translate"),
                    r.TgZ(30, "span", 13),
                    r._uU(31, "*"),
                    r.qZA(),
                    r.qZA(),
                    r._UZ(32, "ion-input", 14),
                    r.ALo(33, "translate"),
                    r.qZA(),
                    r.qZA(),
                    r.qZA(),
                    r.TgZ(34, "div", 15),
                    r.YNc(35, A, 3, 5, "gd-comp-button", 16),
                    r.qZA(),
                    r.qZA(),
                    r.qZA()),
                    2 & t && (r.xp6(3),
                    r.Oqu(r.lcZ(4, 11, "Profile Contact")),
                    r.xp6(3),
                    r.Oqu(r.lcZ(7, 13, "You can change your basic information here")),
                    r.xp6(2),
                    r.Q6J("formGroup", e.myForm),
                    r.xp6(3),
                    r.Oqu(r.lcZ(12, 15, "Employee Contact")),
                    r.xp6(5),
                    r.hij("", r.lcZ(17, 17, "Phone / Mobile Phone"), " "),
                    r.xp6(2),
                    r.s9C("placeholder", r.lcZ(19, 19, "eg. +62.21.1111111 and use comma (,) for multiple entries")),
                    r.xp6(4),
                    r.Oqu(r.lcZ(23, 21, "Ext")),
                    r.xp6(2),
                    r.s9C("placeholder", r.lcZ(25, 23, "Enter ext")),
                    r.xp6(4),
                    r.hij("", r.lcZ(29, 25, "Email"), " "),
                    r.xp6(4),
                    r.s9C("placeholder", r.lcZ(33, 27, "Enter email address")),
                    r.xp6(3),
                    r.Q6J("ngIf", e.showBtnUpd))
                },
                directives: [v.xw, Z.Q$, i._Y, i.JL, v.SQ, i.sg, v.Wh, v.yH, Z.pK, Z.j9, i.JJ, i.u, b.O5, x.qH],
                pipes: [c.X$],
                styles: ["ion-label[_ngcontent-%COMP%]{display:block}"]
            }),
            t
        }
        )()
    },
    74942: function(t, e, n) {
        n.r(e),
        n.d(e, {
            ProfileCoursePageModule: function() {
                return m
            }
        });
        var o = n(38583)
          , i = n(3679)
          , a = n(55546)
          , r = n(99415)
          , s = n(33788)
          , l = n(37716);
        const c = [{
            path: "",
            component: s.N
        }];
        let d = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[r.Bz.forChild(c)], r.Bz]
            }),
            t
        }
        )();
        var u = n(29790)
          , p = n(15566)
          , g = n(52928);
        let m = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[o.ez, i.u5, a.Pc, d, u.aw, p.o9, g.U9, g.F$]]
            }),
            t
        }
        )()
    },
    33788: function(t, e, n) {
        n.d(e, {
            N: function() {
                return Z
            }
        });
        var o = n(64762)
          , i = n(66337)
          , a = n(18051)
          , r = n(37716)
          , s = n(27996)
          , l = n(12132)
          , c = n(88164)
          , d = n(35981)
          , u = n(57196)
          , p = n(35618)
          , g = n(55546)
          , m = n(52928)
          , h = n(38583)
          , f = n(29790);
        function v(t, e) {
            if (1 & t) {
                const t = r.EpF();
                r.TgZ(0, "gd-comp-button", 7),
                r.NdJ("click", function() {
                    return r.CHM(t),
                    r.oxw().openModal()
                }),
                r._uU(1),
                r.ALo(2, "translate"),
                r.qZA()
            }
            2 & t && (r.xp6(1),
            r.Oqu(r.lcZ(2, 1, "+ Add")))
        }
        let Z = (()=>{
            class t {
                constructor(t, e, n, o, i) {
                    this.modalService = t,
                    this.alertService = e,
                    this.eventService = n,
                    this.courseService = o,
                    this.auth = i,
                    this.headerTable = [{
                        label: "No",
                        key: "no",
                        type: "text",
                        textType: "text",
                        lock: !0
                    }, {
                        label: "Course Name",
                        key: "courseName",
                        type: "text",
                        textType: "text",
                        lock: !0
                    }, {
                        label: "Course Institution",
                        key: "courseInstitution",
                        type: "text",
                        textType: "text",
                        lock: !0
                    }, {
                        label: "Start Month",
                        key: "startMonth",
                        type: "text",
                        textType: "text",
                        lock: !0
                    }, {
                        label: "Start Year",
                        key: "startYear",
                        type: "text",
                        textType: "text",
                        lock: !0
                    }, {
                        label: "End Month",
                        key: "endMonth",
                        type: "text",
                        textType: "text",
                        lock: !0
                    }, {
                        label: "End Year",
                        key: "endYear",
                        type: "text",
                        textType: "text",
                        lock: !0
                    }],
                    this.arrCourseList = [],
                    this.isLoading = !0,
                    this.showBtnAdd = !0
                }
                ngOnInit() {
                    this.showBtnAdd = this.auth.gdAuth.menu["btn-add-course"],
                    this.courseService.createHeaderTable(),
                    this.eventListener(),
                    this.getData()
                }
                ngOnDestroy() {
                    this.eventService.unsubscribe(a.A.LOAD_COURSE_LIST),
                    this.courseService.dispose()
                }
                eventListener() {
                    this.eventService.subscribe(a.A.LOAD_COURSE_LIST, ()=>{
                        this.getData()
                    }
                    )
                }
                getData() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.isLoading = !0;
                            const t = {
                                empId: this.empId
                            }
                              , e = yield this.courseService.getCourseList(t);
                            this.arrCourseList = yield this.courseService.createContentTable(e)
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        } finally {
                            this.isLoading = !1
                        }
                    })
                }
                getResult(t) {
                    console.log(t, "getResult")
                }
                actionRow(t) {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        console.log(t, "actionRow");
                        const e = {
                            props: t,
                            empId: this.empId
                        };
                        yield this.modalService.present(i.V, e)
                    })
                }
                openModal() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        const t = {
                            props: "",
                            empId: this.empId
                        };
                        yield this.modalService.present(i.V, t)
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(r.Y36(s.Z),r.Y36(l.c),r.Y36(c.n),r.Y36(d.w),r.Y36(u.V))
            }
            ,
            t.\u0275cmp = r.Xpm({
                type: t,
                selectors: [["app-profile-course"]],
                inputs: {
                    empId: "empId"
                },
                decls: 12,
                vars: 10,
                consts: [[1, "form-profile-box"], ["mv-16", "", "fxLayout", "column", "pv-10", "", 1, "title-box"], ["large-text", "", "mb-4", "", "bold-text", "", "color", "primary"], ["color", "medium"], [3, "headerTable", "bodyTable", "loading", "callbackActionRow"], ["fxLayout", "row", "fxLayoutAlign", "center ", "pa-16", "", 1, "footer-box"], [3, "click", 4, "ngIf"], [3, "click"]],
                template: function(t, e) {
                    1 & t && (r.TgZ(0, "div", 0),
                    r.TgZ(1, "div", 1),
                    r.TgZ(2, "ion-label", 2),
                    r._uU(3),
                    r.ALo(4, "translate"),
                    r.qZA(),
                    r.TgZ(5, "ion-label", 3),
                    r._uU(6),
                    r.ALo(7, "translate"),
                    r.qZA(),
                    r.qZA(),
                    r.ynx(8),
                    r.TgZ(9, "gd-comp-table", 4),
                    r.NdJ("callbackActionRow", function(t) {
                        return e.actionRow(t)
                    }),
                    r.qZA(),
                    r.BQk(),
                    r.TgZ(10, "div", 5),
                    r.YNc(11, v, 3, 3, "gd-comp-button", 6),
                    r.qZA(),
                    r.qZA()),
                    2 & t && (r.xp6(3),
                    r.Oqu(r.lcZ(4, 6, "Course")),
                    r.xp6(3),
                    r.Oqu(r.lcZ(7, 8, "You can change your basic information here")),
                    r.xp6(3),
                    r.Q6J("headerTable", e.courseService.headerTable)("bodyTable", e.arrCourseList)("loading", e.isLoading),
                    r.xp6(2),
                    r.Q6J("ngIf", e.showBtnAdd))
                },
                directives: [p.xw, g.Q$, m.xh, p.Wh, h.O5, m.qH],
                pipes: [f.X$],
                styles: [""]
            }),
            t
        }
        )()
    },
    99372: function(t, e, n) {
        n.r(e),
        n.d(e, {
            ProfileCustomFieldPageModule: function() {
                return m
            }
        });
        var o = n(38583)
          , i = n(3679)
          , a = n(55546)
          , r = n(99415)
          , s = n(76289)
          , l = n(37716);
        const c = [{
            path: "",
            component: s.A
        }];
        let d = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[r.Bz.forChild(c)], r.Bz]
            }),
            t
        }
        )();
        var u = n(29790)
          , p = n(15566)
          , g = n(52928);
        let m = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[o.ez, i.u5, a.Pc, d, u.aw, p.o9, g.F$, i.UX]]
            }),
            t
        }
        )()
    },
    76289: function(t, e, n) {
        n.d(e, {
            A: function() {
                return x
            }
        });
        var o = n(64762)
          , i = n(10922)
          , a = n(37716)
          , r = n(27969)
          , s = n(57196)
          , l = n(29790)
          , c = n(56682)
          , d = n(52436);
        let u = (()=>{
            class t {
                constructor(t) {
                    this.baseApi = t,
                    this.model = "sf6s/customField"
                }
                listing(t) {
                    const e = c.n.GET
                      , n = {}
                      , o = this.baseApi.urlBuilder({
                        method: e,
                        model: this.model,
                        func: "listing",
                        params: n,
                        urlParams: t
                    });
                    return this.baseApi.request({
                        method: e,
                        url: o,
                        params: n
                    })
                }
                save(t) {
                    const e = c.n.POST
                      , n = t
                      , o = this.baseApi.urlBuilder({
                        method: e,
                        model: this.model,
                        func: "save",
                        params: n,
                        urlParams: {}
                    });
                    return this.baseApi.request({
                        method: e,
                        url: o,
                        params: n
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.LFG(d.e))
            }
            ,
            t.\u0275prov = a.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )()
          , p = (()=>{
            class t {
                constructor(t, e, n) {
                    this.auth = t,
                    this.translateService = e,
                    this.sf6customfieldApi = n,
                    this.subscriptions = []
                }
                dispose() {
                    this.unsubscribe()
                }
                unsubscribe() {
                    this.subscriptions.forEach(t=>t.unsubscribe())
                }
                getCustomField(t) {
                    return new Promise((e,n)=>{
                        this.subscriptions.push(this.sf6customfieldApi.listing(t).pipe((0,
                        r.U)(t=>t.data)).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                saveCustomField(t) {
                    return new Promise((e,n)=>(0,
                    o.mG)(this, void 0, void 0, function*() {
                        this.subscriptions.push(this.sf6customfieldApi.save(t).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }))
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.LFG(s.V),a.LFG(l.sK),a.LFG(u))
            }
            ,
            t.\u0275prov = a.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )();
        var g = n(12132)
          , m = n(35618)
          , h = n(55546)
          , f = n(3679)
          , v = n(38583)
          , Z = n(52928);
        function b(t, e) {
            if (1 & t) {
                const t = a.EpF();
                a.TgZ(0, "gd-comp-button", 11),
                a.NdJ("click", function() {
                    return a.CHM(t),
                    a.oxw().save()
                }),
                a._uU(1),
                a.ALo(2, "translate"),
                a.qZA()
            }
            if (2 & t) {
                const t = a.oxw();
                a.Q6J("loading", t.loadingSave),
                a.xp6(1),
                a.Oqu(a.lcZ(2, 2, "Save"))
            }
        }
        let x = (()=>{
            class t {
                constructor(t, e, n) {
                    this.profileCustomFieldService = t,
                    this.alertService = e,
                    this.auth = n,
                    this.loadingSave = !1
                }
                ngOnInit() {
                    this.showBtnUpd = this.auth.gdAuth.menu["btn-upd-customfield"],
                    this.getCustomField()
                }
                getCustomField() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const t = {
                                empId: this.empId
                            };
                            this.data = yield this.profileCustomFieldService.getCustomField(t),
                            this.initForm(this.data)
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        }
                    })
                }
                initForm(t) {
                    this.myForm = {
                        phone: t[0].customValue,
                        ext: t[1].customValue,
                        idFinger: t[2].customValue
                    }
                }
                save() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.loadingSave = !0,
                            this.data[0].customValue = this.myForm.phone,
                            this.data[1].customValue = this.myForm.ext,
                            this.data[2].customValue = this.myForm.idFinger;
                            const t = {
                                empId: this.empId,
                                payload: this.data
                            };
                            console.log(t),
                            yield this.profileCustomFieldService.saveCustomField(t),
                            this.alertService.presentAlertSuccess(i.V.SUCCESSFULLY_SAVED)
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        } finally {
                            this.loadingSave = !1
                        }
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.Y36(p),a.Y36(g.c),a.Y36(s.V))
            }
            ,
            t.\u0275cmp = a.Xpm({
                type: t,
                selectors: [["app-profile-custom-field"]],
                inputs: {
                    empId: "empId",
                    isSF6: "isSF6"
                },
                decls: 22,
                vars: 13,
                consts: [[1, "form-profile-box"], [1, "form-input-box"], [1, "form-box"], ["fxLayout", "row", "fxLayoutGap", "16px", "fxLayoutAlign", " center", 1, "form-section"], ["fxFlex", "20%", "color", "medium", 1, "form-label-caption"], ["color", "medium", "placeholder", "eg. +62.21.1111111 and use comma (,) for multiple entries", "type", "text", 1, "form-input-text", 3, "ngModel", "ngModelChange"], ["color", "medium", "fxFlex", "20%", 1, "form-label-caption"], ["color", "medium", "fxFlex", "", "type", "text", 1, "form-input-text", 3, "ngModel", "ngModelChange"], [1, "required"], ["fxLayout", "row", "fxLayoutAlign", "center ", "ph-16", "", 1, "footer-box"], ["color", "primary", 3, "loading", "click", 4, "ngIf"], ["color", "primary", 3, "loading", "click"]],
                template: function(t, e) {
                    1 & t && (a.TgZ(0, "div", 0),
                    a.TgZ(1, "div", 1),
                    a.TgZ(2, "div", 2),
                    a.TgZ(3, "div", 3),
                    a.TgZ(4, "ion-label", 4),
                    a._uU(5),
                    a.ALo(6, "translate"),
                    a.qZA(),
                    a.TgZ(7, "ion-input", 5),
                    a.NdJ("ngModelChange", function(t) {
                        return e.myForm.phone = t
                    }),
                    a.qZA(),
                    a.qZA(),
                    a.TgZ(8, "div", 3),
                    a.TgZ(9, "ion-label", 6),
                    a._uU(10),
                    a.ALo(11, "translate"),
                    a.qZA(),
                    a.TgZ(12, "ion-input", 7),
                    a.NdJ("ngModelChange", function(t) {
                        return e.myForm.ext = t
                    }),
                    a.qZA(),
                    a.qZA(),
                    a.TgZ(13, "div", 3),
                    a.TgZ(14, "ion-label", 6),
                    a._uU(15),
                    a.ALo(16, "translate"),
                    a.TgZ(17, "span", 8),
                    a._uU(18, "*"),
                    a.qZA(),
                    a.qZA(),
                    a.TgZ(19, "ion-input", 7),
                    a.NdJ("ngModelChange", function(t) {
                        return e.myForm.idFinger = t
                    }),
                    a.qZA(),
                    a.qZA(),
                    a.qZA(),
                    a.qZA(),
                    a.TgZ(20, "div", 9),
                    a.YNc(21, b, 3, 4, "gd-comp-button", 10),
                    a.qZA(),
                    a.qZA()),
                    2 & t && (a.xp6(5),
                    a.hij("", a.lcZ(6, 7, "Plot Area"), " "),
                    a.xp6(2),
                    a.Q6J("ngModel", e.myForm.phone),
                    a.xp6(3),
                    a.Oqu(a.lcZ(11, 9, "Fasilitas Kantor")),
                    a.xp6(2),
                    a.Q6J("ngModel", e.myForm.ext),
                    a.xp6(3),
                    a.hij("", a.lcZ(16, 11, "ID Finger"), " "),
                    a.xp6(4),
                    a.Q6J("ngModel", e.myForm.idFinger),
                    a.xp6(2),
                    a.Q6J("ngIf", e.showBtnUpd))
                },
                directives: [m.xw, m.SQ, m.Wh, h.Q$, m.yH, h.pK, h.j9, f.JJ, f.On, v.O5, Z.qH],
                pipes: [l.X$],
                styles: ["ion-label[_ngcontent-%COMP%]{display:block}"]
            }),
            t
        }
        )()
    },
    28893: function(t, e, n) {
        n.r(e),
        n.d(e, {
            ProfileDisciplinaryPageModule: function() {
                return g
            }
        });
        var o = n(38583)
          , i = n(3679)
          , a = n(55546)
          , r = n(99415)
          , s = n(38448)
          , l = n(37716);
        const c = [{
            path: "",
            component: s.v
        }, {
            path: "profile-modal-disciplinary",
            loadChildren: ()=>n.e(30217).then(n.bind(n, 30217)).then(t=>t.ProfileModalDisciplinaryPageModule)
        }];
        let d = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[r.Bz.forChild(c)], r.Bz]
            }),
            t
        }
        )();
        var u = n(29790)
          , p = n(52928);
        let g = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[o.ez, i.u5, a.Pc, d, p.U9, u.aw]]
            }),
            t
        }
        )()
    },
    38448: function(t, e, n) {
        n.d(e, {
            v: function() {
                return f
            }
        });
        var o = n(64762)
          , i = n(90817)
          , a = n(37716)
          , r = n(27996)
          , s = n(27969)
          , l = n(57196)
          , c = n(29790)
          , d = n(56682)
          , u = n(52436);
        let p = (()=>{
            class t {
                constructor(t) {
                    this.baseApi = t,
                    this.model = "sf6s/disciplinary"
                }
                listing(t) {
                    const e = d.n.GET
                      , n = {}
                      , o = this.baseApi.urlBuilder({
                        method: e,
                        model: this.model,
                        func: "listing",
                        params: n,
                        urlParams: t
                    });
                    return this.baseApi.request({
                        method: e,
                        url: o,
                        params: n
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.LFG(u.e))
            }
            ,
            t.\u0275prov = a.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )()
          , g = (()=>{
            class t {
                constructor(t, e, n, o) {
                    this.auth = t,
                    this.translateService = e,
                    this.sf6disciplinaryApi = n,
                    this.baseApi = o,
                    this.subscriptions = [],
                    this.tempHeaderTable = []
                }
                dispose() {
                    this.unsubscribe()
                }
                unsubscribe() {
                    this.subscriptions.forEach(t=>t.unsubscribe())
                }
                getDisciplinaryList(t) {
                    return new Promise((e,n)=>{
                        this.subscriptions.push(this.sf6disciplinaryApi.listing(t).pipe((0,
                        s.U)(t=>t.data)).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                createHeaderTable() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const t = yield this.baseApi.requestJson("assets/json/gdx-table/header-profile-disciplinary.json").toPromise();
                            this.tempHeaderTable = [];
                            for (const e of t)
                                "" !== e.label && (e.label = this.translateService.instant(e.label)),
                                this.tempHeaderTable.push(e)
                        } catch (t) {}
                    })
                }
                get headerTable() {
                    return this.tempHeaderTable
                }
                createContentTable(t) {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        const e = [];
                        let n = 0;
                        console.log(t.listing);
                        for (const o of t.listing) {
                            n++;
                            const i = {
                                data: t,
                                no: {
                                    label: n.toString(),
                                    color: "black"
                                },
                                refNo: {
                                    label: o.refno,
                                    color: "black"
                                },
                                date: {
                                    label: o.refdt,
                                    color: "black"
                                },
                                disciplinaryName: {
                                    label: o.disciplinesName,
                                    color: "black"
                                }
                            };
                            e.push(i)
                        }
                        return e
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.LFG(l.V),a.LFG(c.sK),a.LFG(p),a.LFG(u.e))
            }
            ,
            t.\u0275prov = a.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )();
        var m = n(12132)
          , h = n(52928);
        let f = (()=>{
            class t {
                constructor(t, e, n) {
                    this.modalService = t,
                    this.profileDisciplinaryService = e,
                    this.alertService = n,
                    this.loadingTable = !1,
                    this.headerTable = [{
                        label: "No",
                        key: "no",
                        type: "text",
                        textType: "text",
                        lock: !0
                    }, {
                        label: "Reference No",
                        key: "refNo",
                        type: "text",
                        textType: "text",
                        lock: !0
                    }, {
                        label: "Date",
                        key: "date",
                        type: "text",
                        textType: "text",
                        lock: !0
                    }, {
                        label: "Disciplinary Name",
                        key: "disciplinaryName",
                        type: "text",
                        textType: "text",
                        lock: !0
                    }],
                    this.bodyTable = [{
                        no: {
                            label: "1",
                            color: "black"
                        },
                        refNo: {
                            label: "dummy-ref-159357",
                            color: "black"
                        },
                        date: {
                            label: "03-12-2021",
                            color: "black"
                        },
                        disciplinaryName: {
                            label: "Dummy Disciplinary",
                            color: "black"
                        }
                    }]
                }
                ngOnInit() {
                    this.getData()
                }
                getResult(t) {}
                getData() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.loadingTable = !0;
                            const t = {
                                empId: this.empId,
                                language: "En"
                            };
                            yield this.profileDisciplinaryService.createHeaderTable();
                            const e = yield this.profileDisciplinaryService.getDisciplinaryList(t);
                            this.bodyTable = yield this.profileDisciplinaryService.createContentTable(e),
                            console.log(this.bodyTable)
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        } finally {
                            this.loadingTable = !1
                        }
                    })
                }
                actionRow(t) {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        console.log(t),
                        yield this.modalService.present(i.X, t, "")
                    })
                }
                fromError(t) {}
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.Y36(r.Z),a.Y36(g),a.Y36(m.c))
            }
            ,
            t.\u0275cmp = a.Xpm({
                type: t,
                selectors: [["app-profile-disciplinary"]],
                inputs: {
                    empId: "empId"
                },
                decls: 3,
                vars: 5,
                consts: [[1, "form-profile-box"], [3, "headerTable", "bodyTable", "blockUnselectedRow", "loading", "isError", "resultTable", "callbackActionRow"]],
                template: function(t, e) {
                    1 & t && (a.TgZ(0, "div", 0),
                    a.ynx(1),
                    a.TgZ(2, "gd-comp-table", 1),
                    a.NdJ("resultTable", function(t) {
                        return e.getResult(t)
                    })("callbackActionRow", function(t) {
                        return e.actionRow(t)
                    }),
                    a.qZA(),
                    a.BQk(),
                    a.qZA()),
                    2 & t && (a.xp6(2),
                    a.Q6J("headerTable", e.headerTable)("bodyTable", e.bodyTable)("blockUnselectedRow", !1)("loading", e.loadingTable)("isError", !1))
                },
                directives: [h.xh],
                styles: [""]
            }),
            t
        }
        )()
    },
    90817: function(t, e, n) {
        n.d(e, {
            X: function() {
                return c
            }
        });
        var o = n(37716)
          , i = n(55546)
          , a = n(22168)
          , r = n(35618)
          , s = n(3679)
          , l = n(29790);
        let c = (()=>{
            class t {
                constructor(t, e) {
                    this.navParams = t,
                    this.sfformatDate = e
                }
                ngOnInit() {
                    this.params = this.navParams.get("params"),
                    console.log(this.navParams, this.params),
                    this.date = this.sfformatDate.transform(this.params.date.label, "DMMMYYYY"),
                    this.companyName = this.params.data.listing[0].teomcompany.companyName,
                    this.refNo = this.params.refNo.label,
                    this.disciplineName = this.params.disciplinaryName.label,
                    this.remark = this.params.data.listing[0].remark,
                    this.empNo = this.params.data.empData.empNo,
                    this.empName = this.params.data.empData.fullName
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(o.Y36(i.X1),o.Y36(a.I))
            }
            ,
            t.\u0275cmp = o.Xpm({
                type: t,
                selectors: [["app-profile-modal-disciplinary"]],
                decls: 41,
                vars: 29,
                consts: [["pa", "", 1, "container"], ["fxLayout", "column", "mb", "", "pa", "", 1, "header"], ["large-text", "", "heading", "", "mb-4", "", 1, "ion-no-padding"], ["fxLayout", "column", "pv-16", "", 1, "form-profile-box"], ["fxLayout", "column", "fxLayoutGap", "32px", 1, "form-input-box"], ["fxLayout", "row", "fxLayoutGap", "21px", "fxLayoutAlign", "start center", 1, "form-section"], ["fxFlex", "20%", 1, "form-label-caption"], ["fxFlex", "", "type", "text", "readonly", "", 1, "form-input-text", 3, "ngModel", "ngModelChange"]],
                template: function(t, e) {
                    1 & t && (o.TgZ(0, "div", 0),
                    o.TgZ(1, "div", 1),
                    o.TgZ(2, "ion-title", 2),
                    o._uU(3),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(4, "div", 3),
                    o.TgZ(5, "div", 4),
                    o.TgZ(6, "div", 5),
                    o.TgZ(7, "ion-label", 6),
                    o._uU(8),
                    o.ALo(9, "translate"),
                    o.qZA(),
                    o.TgZ(10, "ion-input", 7),
                    o.NdJ("ngModelChange", function(t) {
                        return e.refNo = t
                    }),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(11, "div", 5),
                    o.TgZ(12, "ion-label", 6),
                    o._uU(13),
                    o.ALo(14, "translate"),
                    o.qZA(),
                    o.TgZ(15, "ion-input", 7),
                    o.NdJ("ngModelChange", function(t) {
                        return e.disciplineName = t
                    }),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(16, "div", 5),
                    o.TgZ(17, "ion-label", 6),
                    o._uU(18),
                    o.ALo(19, "translate"),
                    o.qZA(),
                    o.TgZ(20, "ion-input", 7),
                    o.NdJ("ngModelChange", function(t) {
                        return e.date = t
                    }),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(21, "div", 5),
                    o.TgZ(22, "ion-label", 6),
                    o._uU(23),
                    o.ALo(24, "translate"),
                    o.qZA(),
                    o.TgZ(25, "ion-input", 7),
                    o.NdJ("ngModelChange", function(t) {
                        return e.remark = t
                    }),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(26, "div", 5),
                    o.TgZ(27, "ion-label", 6),
                    o._uU(28),
                    o.ALo(29, "translate"),
                    o.qZA(),
                    o.TgZ(30, "ion-input", 7),
                    o.NdJ("ngModelChange", function(t) {
                        return e.companyName = t
                    }),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(31, "div", 5),
                    o.TgZ(32, "ion-label", 6),
                    o._uU(33),
                    o.ALo(34, "translate"),
                    o.qZA(),
                    o.TgZ(35, "ion-input", 7),
                    o.NdJ("ngModelChange", function(t) {
                        return e.empNo = t
                    }),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(36, "div", 5),
                    o.TgZ(37, "ion-label", 6),
                    o._uU(38),
                    o.ALo(39, "translate"),
                    o.qZA(),
                    o.TgZ(40, "ion-input", 7),
                    o.NdJ("ngModelChange", function(t) {
                        return e.empName = t
                    }),
                    o.qZA(),
                    o.qZA(),
                    o.qZA(),
                    o.qZA(),
                    o.qZA()),
                    2 & t && (o.xp6(3),
                    o.Oqu("Verbal Warning"),
                    o.xp6(5),
                    o.hij("", o.lcZ(9, 15, "Reference No"), " "),
                    o.xp6(2),
                    o.Q6J("ngModel", e.refNo),
                    o.xp6(3),
                    o.hij("", o.lcZ(14, 17, "Disciplinary Name"), " "),
                    o.xp6(2),
                    o.Q6J("ngModel", e.disciplineName),
                    o.xp6(3),
                    o.hij("", o.lcZ(19, 19, "Date"), " "),
                    o.xp6(2),
                    o.Q6J("ngModel", e.date),
                    o.xp6(3),
                    o.hij("", o.lcZ(24, 21, "Remark"), " "),
                    o.xp6(2),
                    o.Q6J("ngModel", e.remark),
                    o.xp6(3),
                    o.hij("", o.lcZ(29, 23, "Company"), " "),
                    o.xp6(2),
                    o.Q6J("ngModel", e.companyName),
                    o.xp6(3),
                    o.hij("", o.lcZ(34, 25, "Employee No"), " "),
                    o.xp6(2),
                    o.Q6J("ngModel", e.empNo),
                    o.xp6(3),
                    o.hij("", o.lcZ(39, 27, "Employee Name"), " "),
                    o.xp6(2),
                    o.Q6J("ngModel", e.empName))
                },
                directives: [r.xw, i.wd, r.SQ, r.Wh, i.Q$, r.yH, i.pK, i.j9, s.JJ, s.On],
                pipes: [l.X$],
                styles: [".container[_ngcontent-%COMP%]{overflow:auto}.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{border-bottom:1px solid var(--gdx-color-outline)}.required[_ngcontent-%COMP%]{color:var(--ion-color-danger)!important}"]
            }),
            t
        }
        )()
    },
    30938: function(t, e, n) {
        n.r(e),
        n.d(e, {
            ProfileEmploymentInfoPageModule: function() {
                return m
            }
        });
        var o = n(38583)
          , i = n(3679)
          , a = n(55546)
          , r = n(99415)
          , s = n(10063)
          , l = n(37716);
        const c = [{
            path: "",
            component: s.L
        }];
        let d = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[r.Bz.forChild(c)], r.Bz]
            }),
            t
        }
        )();
        var u = n(40719)
          , p = n(15566)
          , g = n(29790);
        let m = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[o.ez, i.u5, a.Pc, d, i.UX, u.$8, p.o9, g.aw]]
            }),
            t
        }
        )()
    },
    10063: function(t, e, n) {
        n.d(e, {
            L: function() {
                return f
            }
        });
        var o = n(64762)
          , i = n(37716)
          , a = n(27969)
          , r = n(57196)
          , s = n(29790)
          , l = n(56682)
          , c = n(52436);
        let d = (()=>{
            class t {
                constructor(t) {
                    this.baseApi = t,
                    this.model = "sf6s/employmentInfo"
                }
                detail(t) {
                    const e = l.n.GET
                      , n = {}
                      , o = this.baseApi.urlBuilder({
                        method: e,
                        model: this.model,
                        func: "detail",
                        params: n,
                        urlParams: t
                    });
                    return this.baseApi.request({
                        method: e,
                        url: o,
                        params: n
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(i.LFG(c.e))
            }
            ,
            t.\u0275prov = i.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )()
          , u = (()=>{
            class t {
                constructor(t, e, n) {
                    this.auth = t,
                    this.translateService = e,
                    this.sf6empinfoApi = n,
                    this.subscriptions = []
                }
                dispose() {
                    this.unsubscribe()
                }
                unsubscribe() {
                    this.subscriptions.forEach(t=>t.unsubscribe())
                }
                getDetailEmpInfo(t) {
                    return new Promise((e,n)=>{
                        this.subscriptions.push(this.sf6empinfoApi.detail(t).pipe((0,
                        a.U)(t=>t.data)).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(i.LFG(r.V),i.LFG(s.sK),i.LFG(d))
            }
            ,
            t.\u0275prov = i.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )();
        var p = n(12132)
          , g = n(55546)
          , m = n(35618)
          , h = n(3679);
        let f = (()=>{
            class t {
                constructor(t, e) {
                    this.profileEmpInfoService = t,
                    this.alertService = e
                }
                ngOnInit() {
                    this.getDetailEmpInfo()
                }
                getDetailEmpInfo() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const t = {
                                empId: this.empId
                            }
                              , e = yield this.profileEmpInfoService.getDetailEmpInfo(t);
                            this.initForm(e)
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        }
                    })
                }
                initForm(t) {
                    this.myForm = {
                        empNo: t.empNo,
                        joinDate: t.startDate,
                        endDate: t.endDate,
                        empStatus: t.employmentstatusName,
                        position: t.posName,
                        jobStatus: t.jobstatusname,
                        jobGrade: t.gradeName,
                        workLocation: t.worklocationName,
                        costCenter: t.costcenterName,
                        employeeStatus: t.status,
                        directSupervisor: t.spvName,
                        immediateManager: t.mgrName
                    }
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(i.Y36(u),i.Y36(p.c))
            }
            ,
            t.\u0275cmp = i.Xpm({
                type: t,
                selectors: [["app-profile-employment-info"]],
                inputs: {
                    empId: "empId",
                    isSF6: "isSF6"
                },
                decls: 66,
                vars: 51,
                consts: [[1, "form-profile-box"], [1, "form-input-box"], ["color", "primary", "large-text", "", "mb-16", ""], [1, "form-box"], ["fxLayout", "row", "fxLayoutGap", "16px", "fxLayoutAlign", " center", 1, "form-section"], ["color", "medium", "fxFlex", "20%", 1, "form-label-caption"], ["readonly", "", "color", "medium", "fxFlex", "", "type", "text", 1, "form-input-text", 3, "ngModel", "ngModelChange"]],
                template: function(t, e) {
                    1 & t && (i.TgZ(0, "div", 0),
                    i.TgZ(1, "div", 1),
                    i.TgZ(2, "ion-label", 2),
                    i._uU(3),
                    i.ALo(4, "translate"),
                    i.qZA(),
                    i.TgZ(5, "div", 3),
                    i.TgZ(6, "div", 4),
                    i.TgZ(7, "ion-label", 5),
                    i._uU(8),
                    i.ALo(9, "translate"),
                    i.qZA(),
                    i.TgZ(10, "ion-input", 6),
                    i.NdJ("ngModelChange", function(t) {
                        return e.myForm.empNo = t
                    }),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(11, "div", 4),
                    i.TgZ(12, "ion-label", 5),
                    i._uU(13),
                    i.ALo(14, "translate"),
                    i.qZA(),
                    i.TgZ(15, "ion-input", 6),
                    i.NdJ("ngModelChange", function(t) {
                        return e.myForm.joinDate = t
                    }),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(16, "div", 4),
                    i.TgZ(17, "ion-label", 5),
                    i._uU(18),
                    i.ALo(19, "translate"),
                    i.qZA(),
                    i.TgZ(20, "ion-input", 6),
                    i.NdJ("ngModelChange", function(t) {
                        return e.myForm.endDate = t
                    }),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(21, "div", 4),
                    i.TgZ(22, "ion-label", 5),
                    i._uU(23),
                    i.ALo(24, "translate"),
                    i.qZA(),
                    i.TgZ(25, "ion-input", 6),
                    i.NdJ("ngModelChange", function(t) {
                        return e.myForm.empStatus = t
                    }),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(26, "div", 4),
                    i.TgZ(27, "ion-label", 5),
                    i._uU(28),
                    i.ALo(29, "translate"),
                    i.qZA(),
                    i.TgZ(30, "ion-input", 6),
                    i.NdJ("ngModelChange", function(t) {
                        return e.myForm.position = t
                    }),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(31, "div", 4),
                    i.TgZ(32, "ion-label", 5),
                    i._uU(33),
                    i.ALo(34, "translate"),
                    i.qZA(),
                    i.TgZ(35, "ion-input", 6),
                    i.NdJ("ngModelChange", function(t) {
                        return e.myForm.jobStatus = t
                    }),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(36, "div", 4),
                    i.TgZ(37, "ion-label", 5),
                    i._uU(38),
                    i.ALo(39, "translate"),
                    i.qZA(),
                    i.TgZ(40, "ion-input", 6),
                    i.NdJ("ngModelChange", function(t) {
                        return e.myForm.jobGrade = t
                    }),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(41, "div", 4),
                    i.TgZ(42, "ion-label", 5),
                    i._uU(43),
                    i.ALo(44, "translate"),
                    i.qZA(),
                    i.TgZ(45, "ion-input", 6),
                    i.NdJ("ngModelChange", function(t) {
                        return e.myForm.workLocation = t
                    }),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(46, "div", 4),
                    i.TgZ(47, "ion-label", 5),
                    i._uU(48),
                    i.ALo(49, "translate"),
                    i.qZA(),
                    i.TgZ(50, "ion-input", 6),
                    i.NdJ("ngModelChange", function(t) {
                        return e.myForm.costCenter = t
                    }),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(51, "div", 4),
                    i.TgZ(52, "ion-label", 5),
                    i._uU(53),
                    i.ALo(54, "translate"),
                    i.qZA(),
                    i.TgZ(55, "ion-input", 6),
                    i.NdJ("ngModelChange", function(t) {
                        return e.myForm.employeeStatus = t
                    }),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(56, "div", 4),
                    i.TgZ(57, "ion-label", 5),
                    i._uU(58),
                    i.ALo(59, "translate"),
                    i.qZA(),
                    i.TgZ(60, "ion-input", 6),
                    i.NdJ("ngModelChange", function(t) {
                        return e.myForm.directSupervisor = t
                    }),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(61, "div", 4),
                    i.TgZ(62, "ion-label", 5),
                    i._uU(63),
                    i.ALo(64, "translate"),
                    i.qZA(),
                    i.TgZ(65, "ion-input", 6),
                    i.NdJ("ngModelChange", function(t) {
                        return e.myForm.immediateManager = t
                    }),
                    i.qZA(),
                    i.qZA(),
                    i.qZA(),
                    i.qZA(),
                    i.qZA()),
                    2 & t && (i.xp6(3),
                    i.Oqu(i.lcZ(4, 25, "Employment Information")),
                    i.xp6(5),
                    i.Oqu(i.lcZ(9, 27, "Employee No.")),
                    i.xp6(2),
                    i.Q6J("ngModel", e.myForm.empNo),
                    i.xp6(3),
                    i.Oqu(i.lcZ(14, 29, "Join Date")),
                    i.xp6(2),
                    i.Q6J("ngModel", e.myForm.joinDate),
                    i.xp6(3),
                    i.Oqu(i.lcZ(19, 31, "Employment End Date")),
                    i.xp6(2),
                    i.Q6J("ngModel", e.myForm.endDate),
                    i.xp6(3),
                    i.Oqu(i.lcZ(24, 33, "Employment Status")),
                    i.xp6(2),
                    i.Q6J("ngModel", e.myForm.empStatus),
                    i.xp6(3),
                    i.Oqu(i.lcZ(29, 35, "Current Position")),
                    i.xp6(2),
                    i.Q6J("ngModel", e.myForm.position),
                    i.xp6(3),
                    i.Oqu(i.lcZ(34, 37, "Job Status")),
                    i.xp6(2),
                    i.Q6J("ngModel", e.myForm.jobStatus),
                    i.xp6(3),
                    i.Oqu(i.lcZ(39, 39, "Job Grade")),
                    i.xp6(2),
                    i.Q6J("ngModel", e.myForm.jobGrade),
                    i.xp6(3),
                    i.Oqu(i.lcZ(44, 41, "Work Loocation")),
                    i.xp6(2),
                    i.Q6J("ngModel", e.myForm.workLocation),
                    i.xp6(3),
                    i.Oqu(i.lcZ(49, 43, "Cost Center")),
                    i.xp6(2),
                    i.Q6J("ngModel", e.myForm.costCenter),
                    i.xp6(3),
                    i.Oqu(i.lcZ(54, 45, "Employee Status")),
                    i.xp6(2),
                    i.Q6J("ngModel", e.myForm.employeeStatus),
                    i.xp6(3),
                    i.Oqu(i.lcZ(59, 47, "Direct Supervisor")),
                    i.xp6(2),
                    i.Q6J("ngModel", e.myForm.directSupervisor),
                    i.xp6(3),
                    i.Oqu(i.lcZ(64, 49, "Immediate Manager")),
                    i.xp6(2),
                    i.Q6J("ngModel", e.myForm.immediateManager))
                },
                directives: [g.Q$, m.xw, m.SQ, m.Wh, m.yH, g.pK, g.j9, h.JJ, h.On],
                pipes: [s.X$],
                styles: ["ion-label[_ngcontent-%COMP%]{display:block}.form-section-no-padding[_ngcontent-%COMP%]{border-bottom:none;padding:0;margin-bottom:32px!important}.form-section-no-padding[_ngcontent-%COMP%]   .form-label-caption-custom[_ngcontent-%COMP%]{white-space:normal!important;text-align:right!important;min-width:unset;max-width:20%;margin-right:21px}"]
            }),
            t
        }
        )()
    },
    72371: function(t, e, n) {
        n.r(e),
        n.d(e, {
            ProfileGovernmentTaxPageModule: function() {
                return m
            }
        });
        var o = n(38583)
          , i = n(3679)
          , a = n(55546)
          , r = n(99415)
          , s = n(65978)
          , l = n(37716);
        const c = [{
            path: "",
            component: s.Y
        }];
        let d = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[r.Bz.forChild(c)], r.Bz]
            }),
            t
        }
        )();
        var u = n(40719)
          , p = n(15566)
          , g = n(29790);
        let m = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[o.ez, i.u5, a.Pc, d, i.UX, u.$8, p.o9, g.aw]]
            }),
            t
        }
        )()
    },
    65978: function(t, e, n) {
        n.d(e, {
            Y: function() {
                return s
            }
        });
        var o = n(37716)
          , i = n(35618)
          , a = n(55546)
          , r = n(29790);
        let s = (()=>{
            class t {
                constructor() {}
                ngOnInit() {}
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275cmp = o.Xpm({
                type: t,
                selectors: [["app-profile-government-tax"]],
                decls: 25,
                vars: 15,
                consts: [[1, "form-profile-box"], ["mv-16", "", "fxLayout", "column", "pv-10", "", 1, "title-box"], ["large-text", "", "mb-4", "", "bold-text", "", "color", "primary", "bold", ""], ["color", "medium"], [1, "form-input-box"], [1, "form-box"], ["fxLayout", "row", "fxLayoutGap", "16px", "fxLayoutAlign", " center", 1, "form-section"], ["color", "medium", "fxFlex", "20%", 1, "form-label-caption"], ["color", "medium", "fxFlex", "", "type", "text", 1, "form-input-text"]],
                template: function(t, e) {
                    1 & t && (o.TgZ(0, "div", 0),
                    o.TgZ(1, "div", 1),
                    o.TgZ(2, "ion-label", 2),
                    o._uU(3),
                    o.ALo(4, "translate"),
                    o.qZA(),
                    o.TgZ(5, "ion-label", 3),
                    o._uU(6),
                    o.ALo(7, "translate"),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(8, "div", 4),
                    o.TgZ(9, "div", 5),
                    o.TgZ(10, "div", 6),
                    o.TgZ(11, "ion-label", 7),
                    o._uU(12),
                    o.ALo(13, "translate"),
                    o.qZA(),
                    o._UZ(14, "ion-input", 8),
                    o.qZA(),
                    o.TgZ(15, "div", 6),
                    o.TgZ(16, "ion-label", 7),
                    o._uU(17),
                    o.ALo(18, "translate"),
                    o.qZA(),
                    o._UZ(19, "ion-input", 8),
                    o.qZA(),
                    o.TgZ(20, "div", 6),
                    o.TgZ(21, "ion-label", 7),
                    o._uU(22),
                    o.ALo(23, "translate"),
                    o.qZA(),
                    o._UZ(24, "ion-input", 8),
                    o.qZA(),
                    o.qZA(),
                    o.qZA(),
                    o.qZA()),
                    2 & t && (o.xp6(3),
                    o.Oqu(o.lcZ(4, 5, "Government Tax")),
                    o.xp6(3),
                    o.Oqu(o.lcZ(7, 7, "You can change your basic information here")),
                    o.xp6(6),
                    o.Oqu(o.lcZ(13, 9, "Gov. Tax File No.")),
                    o.xp6(5),
                    o.Oqu(o.lcZ(18, 11, "Tax Type")),
                    o.xp6(5),
                    o.Oqu(o.lcZ(23, 13, "Tax Status")))
                },
                directives: [i.xw, a.Q$, i.SQ, i.Wh, i.yH, a.pK, a.j9],
                pipes: [r.X$],
                styles: ["ion-label[_ngcontent-%COMP%]{display:block}.form-section-no-padding[_ngcontent-%COMP%]{border-bottom:none;padding:0;margin-bottom:32px!important}.form-section-no-padding[_ngcontent-%COMP%]   .form-label-caption-custom[_ngcontent-%COMP%]{white-space:normal!important;text-align:right!important;min-width:unset;max-width:20%;margin-right:21px}"]
            }),
            t
        }
        )()
    },
    7201: function(t, e, n) {
        n.r(e),
        n.d(e, {
            ProfileInterestPageModule: function() {
                return m
            }
        });
        var o = n(38583)
          , i = n(3679)
          , a = n(55546)
          , r = n(99415)
          , s = n(13518)
          , l = n(37716);
        const c = [{
            path: "",
            component: s.j
        }];
        let d = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[r.Bz.forChild(c)], r.Bz]
            }),
            t
        }
        )();
        var u = n(29790)
          , p = n(15566)
          , g = n(52928);
        let m = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[o.ez, i.u5, a.Pc, d, g.R$, g.F$, u.aw, p.o9, g.ER]]
            }),
            t
        }
        )()
    },
    13518: function(t, e, n) {
        n.d(e, {
            j: function() {
                return T
            }
        });
        var o = n(64762)
          , i = n(10922)
          , a = n(37716)
          , r = n(27969)
          , s = n(69259)
          , l = n(56682)
          , c = n(52436);
        let d = (()=>{
            class t {
                constructor(t) {
                    this.baseApi = t,
                    this.model = "sf6s/interest"
                }
                listing(t) {
                    const e = l.n.GET
                      , n = {}
                      , o = this.baseApi.urlBuilder({
                        method: e,
                        model: this.model,
                        func: "listing",
                        params: n,
                        urlParams: t
                    });
                    return this.baseApi.request({
                        method: e,
                        url: o,
                        params: n
                    })
                }
                typeList() {
                    const t = l.n.GET
                      , e = {}
                      , n = this.baseApi.urlBuilder({
                        method: t,
                        model: this.model,
                        func: "type",
                        params: e,
                        urlParams: {}
                    });
                    return this.baseApi.request({
                        method: t,
                        url: n,
                        params: e
                    })
                }
                save(t) {
                    const e = l.n.POST
                      , n = t
                      , o = this.baseApi.urlBuilder({
                        method: e,
                        model: this.model,
                        func: "save",
                        params: n,
                        urlParams: {}
                    });
                    return this.baseApi.request({
                        method: e,
                        url: o,
                        params: n
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.LFG(c.e))
            }
            ,
            t.\u0275prov = a.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )()
          , u = (()=>{
            class t {
                constructor(t, e) {
                    this.personalApi = t,
                    this.sf6InterestApi = e,
                    this.subscription$ = []
                }
                unsubscribe() {
                    this.subscription$.forEach(t=>t.unsubscribe())
                }
                dispose() {
                    this.unsubscribe()
                }
                getListing(t) {
                    return new Promise((e,n)=>{
                        this.subscription$.push(this.sf6InterestApi.listing(t).pipe((0,
                        r.U)(t=>t.data)).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                getType() {
                    return new Promise((t,e)=>{
                        this.subscription$.push(this.sf6InterestApi.typeList().pipe((0,
                        r.U)(t=>t.data)).subscribe(e=>{
                            t(e)
                        }
                        , t=>{
                            e(t)
                        }
                        ))
                    }
                    )
                }
                save(t) {
                    return new Promise((e,n)=>{
                        this.subscription$.push(this.sf6InterestApi.save(t).pipe((0,
                        r.U)(t=>t.data)).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                getPersonalInfo(t) {
                    return new Promise((e,n)=>{
                        this.subscription$.push(this.personalApi.getPersonal(t).pipe((0,
                        r.U)(t=>t.data)).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.LFG(s.O),a.LFG(d))
            }
            ,
            t.\u0275prov = a.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )();
        var p = n(12132)
          , g = n(35618)
          , m = n(55546)
          , h = n(52928)
          , f = n(38583)
          , v = n(3679)
          , Z = n(29790);
        function b(t, e) {
            if (1 & t && (a.TgZ(0, "ion-select-option", 20),
            a._uU(1),
            a.qZA()),
            2 & t) {
                const t = e.$implicit;
                a.s9C("value", null == t ? null : t.value),
                a.xp6(1),
                a.hij(" ", null == t ? null : t.name, "")
            }
        }
        function x(t, e) {
            if (1 & t) {
                const t = a.EpF();
                a.TgZ(0, "gd-comp-icon", 21),
                a.NdJ("click", function() {
                    a.CHM(t);
                    const e = a.oxw().index;
                    return a.oxw().remove(e)
                }),
                a.qZA()
            }
            2 & t && a.Q6J("name", "icon-close")("size", "16")
        }
        function A(t, e) {
            if (1 & t) {
                const t = a.EpF();
                a.ynx(0),
                a.TgZ(1, "ion-icon", 22),
                a.NdJ("click", function() {
                    const e = a.CHM(t).index
                      , n = a.oxw().$implicit;
                    return a.oxw().starCheck(n, e)
                }),
                a.qZA(),
                a.BQk()
            }
            if (2 & t) {
                const t = e.index
                  , n = a.oxw().$implicit;
                a.xp6(1),
                a.ekj("star-check", t < n.interestRate)
            }
        }
        function y(t, e) {
            if (1 & t) {
                const t = a.EpF();
                a.TgZ(0, "div", 11),
                a.TgZ(1, "div", 12),
                a.TgZ(2, "ion-select", 13),
                a.NdJ("ngModelChange", function(e) {
                    return a.CHM(t).$implicit.interestCode = e
                }),
                a.ALo(3, "translate"),
                a.YNc(4, b, 2, 2, "ion-select-option", 14),
                a.qZA(),
                a.YNc(5, x, 1, 2, "gd-comp-icon", 15),
                a.qZA(),
                a.TgZ(6, "div", 16),
                a.TgZ(7, "ion-label", 17),
                a._uU(8),
                a.ALo(9, "translate"),
                a.qZA(),
                a.TgZ(10, "div", 18),
                a.YNc(11, A, 2, 2, "ng-container", 19),
                a.qZA(),
                a.qZA(),
                a.qZA()
            }
            if (2 & t) {
                const t = e.$implicit
                  , n = e.index
                  , o = a.oxw();
                a.xp6(2),
                a.s9C("placeholder", a.lcZ(3, 6, "Select Interest")),
                a.Q6J("ngModel", t.interestCode),
                a.xp6(2),
                a.Q6J("ngForOf", o.arrSkillType),
                a.xp6(1),
                a.Q6J("ngIf", 0 != n),
                a.xp6(3),
                a.Oqu(a.lcZ(9, 8, "Rate")),
                a.xp6(3),
                a.Q6J("ngForOf", o.numOfStar)
            }
        }
        let T = (()=>{
            class t {
                constructor(t, e) {
                    this.profileInterestService = t,
                    this.alertService = e,
                    this.arrSkillList = [],
                    this.arrSkillType = [],
                    this.numOfStar = [1, 2, 3, 4, 5],
                    this.isSaving = !1
                }
                ngOnInit() {
                    this.getData()
                }
                getData() {
                    this.getType(),
                    this.getListing()
                }
                getListing() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        const t = {
                            empId: this.empId
                        }
                          , e = yield this.profileInterestService.getListing(t);
                        this.arrSkillList = [],
                        e.forEach(t=>{
                            this.arrSkillList.push({
                                interestCode: t.interestCode,
                                interestRate: t.interestRate,
                                empId: t.empId
                            })
                        }
                        )
                    })
                }
                getType() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        const t = yield this.profileInterestService.getType();
                        this.arrSkillType = [],
                        t.forEach(t=>{
                            this.arrSkillType.push({
                                name: t.name,
                                value: t.code
                            })
                        }
                        )
                    })
                }
                addNew() {
                    this.arrSkillList.push({
                        interestCode: "0",
                        interestRate: 0,
                        empId: this.empId
                    })
                }
                remove(t) {
                    this.arrSkillList.splice(t, 1)
                }
                starCheck(t, e) {
                    t.interestRate = e + 1
                }
                saveForm() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            if (this.isSaving = !0,
                            this.checkValid(),
                            this.isValid) {
                                const t = this.getObjData();
                                yield this.profileInterestService.save(t),
                                yield this.alertService.presentAlertSuccess(i.V.SUCCESSFULLY_SAVED),
                                this.isSaving = !1
                            } else
                                this.isSaving = !1
                        } catch (t) {
                            yield this.alertService.presentAlertError(t),
                            this.isSaving = !1
                        }
                    })
                }
                checkValid() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        const t = [];
                        for (const e of this.arrSkillList) {
                            const n = t.find(t=>t === e.interestCode);
                            if (t.push(e.interestCode),
                            0 === e.interestCode)
                                return this.alertService.presentAlertWarning("Please Select Interest Type"),
                                this.isValid = !1,
                                !1;
                            if (n)
                                return this.alertService.presentAlertWarning("Duplicate Interest"),
                                this.isValid = !1,
                                !1;
                            if (0 === e.interestRate)
                                return this.alertService.presentAlertWarning("Rate Value Cannot Empty"),
                                this.isValid = !1,
                                !1;
                            this.isValid = !0
                        }
                    })
                }
                getObjData() {
                    const t = {};
                    let e = 1;
                    for (const n of this.arrSkillList)
                        t["grow_" + e + "_EmpInterest_interest_code"] = n.interestCode,
                        t["grow_" + e + "_EmpInterest_interest_rate"] = n.interestRate,
                        t["grow_" + e + "_EmpInterest_emp_id"] = n.empId,
                        t.hdn_grc_EmpInterest = 1 === e ? e : t.hdn_grc_EmpInterest + "," + e,
                        e++;
                    return t.empid = this.empId,
                    t.hdn_gridinput_EmpInterest = "EmpInterest",
                    t
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.Y36(u),a.Y36(p.c))
            }
            ,
            t.\u0275cmp = a.Xpm({
                type: t,
                selectors: [["app-profile-interest"]],
                inputs: {
                    empId: "empId"
                },
                decls: 19,
                vars: 15,
                consts: [[1, "form-profile-box"], ["mv-16", "", "fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "14px", "pv-10", "", 1, "title-box"], ["fxLayout", "column", 1, "left"], ["large-text", "", "mb-4", "", "bold-text", "", "color", "primary"], ["color", "medium"], [1, "right"], [3, "fill", "click"], [1, "interest-card"], ["class", "card-box", "pa", "", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "center ", "pa-16", "", 1, "footer-box"], [3, "loading", "click"], ["pa", "", 1, "card-box"], ["mb-4", "", "fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "14px", 1, "top"], [3, "ngModel", "placeholder", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["tappable", "", 3, "name", "size", "click", 4, "ngIf"], ["fxLayout", "column", "mt-16", "", 1, "interest-section"], ["bold-text", ""], ["mt-8", "", 1, "stars-container"], [4, "ngFor", "ngForOf"], [3, "value"], ["tappable", "", 3, "name", "size", "click"], ["name", "star", "tappable", "", 3, "click"]],
                template: function(t, e) {
                    1 & t && (a.TgZ(0, "div", 0),
                    a.TgZ(1, "div", 1),
                    a.TgZ(2, "div", 2),
                    a.TgZ(3, "ion-label", 3),
                    a._uU(4),
                    a.ALo(5, "translate"),
                    a.qZA(),
                    a.TgZ(6, "ion-label", 4),
                    a._uU(7),
                    a.ALo(8, "translate"),
                    a.qZA(),
                    a.qZA(),
                    a.TgZ(9, "div", 5),
                    a.TgZ(10, "gd-comp-button", 6),
                    a.NdJ("click", function() {
                        return e.addNew()
                    }),
                    a._uU(11),
                    a.ALo(12, "translate"),
                    a.qZA(),
                    a.qZA(),
                    a.qZA(),
                    a.TgZ(13, "div", 7),
                    a.YNc(14, y, 12, 10, "div", 8),
                    a.qZA(),
                    a.TgZ(15, "div", 9),
                    a.TgZ(16, "gd-comp-button", 10),
                    a.NdJ("click", function() {
                        return e.saveForm()
                    }),
                    a._uU(17),
                    a.ALo(18, "translate"),
                    a.qZA(),
                    a.qZA(),
                    a.qZA()),
                    2 & t && (a.xp6(4),
                    a.Oqu(a.lcZ(5, 7, "Interest")),
                    a.xp6(3),
                    a.Oqu(a.lcZ(8, 9, "You can change your basic Interest here")),
                    a.xp6(3),
                    a.Q6J("fill", "outline"),
                    a.xp6(1),
                    a.Oqu(a.lcZ(12, 11, "Add New Interest")),
                    a.xp6(3),
                    a.Q6J("ngForOf", e.arrSkillList),
                    a.xp6(2),
                    a.Q6J("loading", e.isSaving),
                    a.xp6(1),
                    a.Oqu(a.lcZ(18, 13, "Save")))
                },
                directives: [g.xw, g.Wh, g.SQ, m.Q$, h.qH, f.sg, m.t9, m.QI, v.JJ, v.On, f.O5, m.n0, h.pD, m.gu],
                pipes: [Z.X$],
                styles: [".interest-card[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-gap:12px}.interest-card[_ngcontent-%COMP%]   .card-box[_ngcontent-%COMP%]{border-radius:5px;border:1px solid var(--gdx-color-outline)}.interest-card[_ngcontent-%COMP%]   .card-box[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]{max-width:80%;padding:0!important;align-content:center;width:80%;font-size:17px!important}.interest-card[_ngcontent-%COMP%]   .card-box[_ngcontent-%COMP%]   .interest-section[_ngcontent-%COMP%]   .stars-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:24px;color:var(--gdx-color-outline)}.interest-card[_ngcontent-%COMP%]   .card-box[_ngcontent-%COMP%]   .interest-section[_ngcontent-%COMP%]   .star-check[_ngcontent-%COMP%]{color:var(--ion-color-primary)!important}"]
            }),
            t
        }
        )()
    },
    44667: function(t, e, n) {
        n.d(e, {
            r: function() {
                return u
            }
        });
        var o = n(64762)
          , i = n(37716)
          , a = n(55546)
          , r = n(14635)
          , s = n(35618)
          , l = n(38583)
          , c = n(29790);
        function d(t, e) {
            if (1 & t) {
                const t = i.EpF();
                i.TgZ(0, "div", 5),
                i.TgZ(1, "ion-label", 6),
                i._uU(2),
                i.ALo(3, "translate"),
                i.qZA(),
                i.TgZ(4, "a", 9),
                i.NdJ("click", function() {
                    i.CHM(t);
                    const e = i.oxw();
                    return e.downloadAttachment(e.historyDetail.attachment)
                }),
                i._uU(5),
                i.qZA(),
                i.qZA()
            }
            if (2 & t) {
                const t = i.oxw();
                i.xp6(2),
                i.hij("", i.lcZ(3, 2, "File Attachment"), " "),
                i.xp6(3),
                i.Oqu(t.historyDetail.attachment)
            }
        }
        let u = (()=>{
            class t {
                constructor(t, e) {
                    this.navParams = t,
                    this.profileOhsaHistoryService = e,
                    this.fullName = "",
                    this.loadingSave = !1,
                    this.isSaving = !1,
                    this.isFile = !1
                }
                ngOnInit() {
                    var t;
                    this.params = this.navParams.get("params"),
                    this.historyDetail = null === (t = this.params) || void 0 === t ? void 0 : t.props,
                    this.historyDetail.attachment && (this.isFile = !0),
                    this.getPersonalInfo()
                }
                getPersonalInfo() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const t = {
                                empId: this.params.empId
                            }
                              , e = yield this.profileOhsaHistoryService.getPersonalInfo(t);
                            this.fullName = e.fullName
                        } catch (t) {}
                    })
                }
                downloadAttachment(t) {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        yield this.profileOhsaHistoryService.downloadAttachment(t)
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(i.Y36(a.X1),i.Y36(r.t))
            }
            ,
            t.\u0275cmp = i.Xpm({
                type: t,
                selectors: [["app-modal-ohsa-history"]],
                decls: 56,
                vars: 36,
                consts: [["pa", "", 1, "container"], ["fxLayout", "column", "mb", "", "pa", "", 1, "header"], ["large-text", "", "heading", "", "mb-4", "", 1, "ion-no-padding"], ["fxLayout", "column", "pv-16", "", 1, "form-profile-box"], ["fxLayout", "column", "fxLayoutGap", "32px", 1, "form-input-box"], ["fxLayout", "row", "fxLayoutGap", "21px", "fxLayoutAlign", "start center", 1, "form-section"], ["fxFlex", "20%", 1, "form-label-caption"], ["color", "medium"], ["class", "form-section", "fxLayout", "row", "fxLayoutGap", "21px", "fxLayoutAlign", "start center", 4, "ngIf"], ["target", "_blank", 1, "url", 3, "click"]],
                template: function(t, e) {
                    1 & t && (i.TgZ(0, "div", 0),
                    i.TgZ(1, "div", 1),
                    i.TgZ(2, "ion-title", 2),
                    i._uU(3),
                    i.ALo(4, "translate"),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(5, "div", 3),
                    i.TgZ(6, "div", 4),
                    i.TgZ(7, "div", 5),
                    i.TgZ(8, "ion-label", 6),
                    i._uU(9),
                    i.ALo(10, "translate"),
                    i.qZA(),
                    i.TgZ(11, "ion-label", 7),
                    i._uU(12),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(13, "div", 5),
                    i.TgZ(14, "ion-label", 6),
                    i._uU(15),
                    i.ALo(16, "translate"),
                    i.qZA(),
                    i.TgZ(17, "ion-label", 7),
                    i._uU(18),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(19, "div", 5),
                    i.TgZ(20, "ion-label", 6),
                    i._uU(21),
                    i.ALo(22, "translate"),
                    i.qZA(),
                    i.TgZ(23, "ion-label", 7),
                    i._uU(24),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(25, "div", 5),
                    i.TgZ(26, "ion-label", 6),
                    i._uU(27),
                    i.ALo(28, "translate"),
                    i.qZA(),
                    i.TgZ(29, "ion-label", 7),
                    i._uU(30),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(31, "div", 5),
                    i.TgZ(32, "ion-label", 6),
                    i._uU(33),
                    i.ALo(34, "translate"),
                    i.qZA(),
                    i.TgZ(35, "ion-label", 7),
                    i._uU(36),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(37, "div", 5),
                    i.TgZ(38, "ion-label", 6),
                    i._uU(39),
                    i.ALo(40, "translate"),
                    i.qZA(),
                    i.TgZ(41, "ion-label", 7),
                    i._uU(42),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(43, "div", 5),
                    i.TgZ(44, "ion-label", 6),
                    i._uU(45),
                    i.ALo(46, "translate"),
                    i.qZA(),
                    i.TgZ(47, "ion-label", 7),
                    i._uU(48),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(49, "div", 5),
                    i.TgZ(50, "ion-label", 6),
                    i._uU(51),
                    i.ALo(52, "translate"),
                    i.qZA(),
                    i.TgZ(53, "ion-label", 7),
                    i._uU(54),
                    i.qZA(),
                    i.qZA(),
                    i.YNc(55, d, 6, 4, "div", 8),
                    i.qZA(),
                    i.qZA(),
                    i.qZA()),
                    2 & t && (i.xp6(3),
                    i.Oqu(i.lcZ(4, 18, "OHSA History Detail")),
                    i.xp6(6),
                    i.hij("", i.lcZ(10, 20, "Employee Name"), " "),
                    i.xp6(3),
                    i.Oqu(e.fullName),
                    i.xp6(3),
                    i.hij("", i.lcZ(16, 22, "Incident Code"), " "),
                    i.xp6(3),
                    i.Oqu(e.historyDetail.incidentCode),
                    i.xp6(3),
                    i.hij("", i.lcZ(22, 24, "OHSA Category"), " "),
                    i.xp6(3),
                    i.Oqu(e.historyDetail.teomohsacat.catName),
                    i.xp6(3),
                    i.hij("", i.lcZ(28, 26, "Description"), " "),
                    i.xp6(3),
                    i.Oqu(e.historyDetail.description),
                    i.xp6(3),
                    i.hij("", i.lcZ(34, 28, "Company Name"), " "),
                    i.xp6(3),
                    i.Oqu(e.historyDetail.teomcompany.companyName),
                    i.xp6(3),
                    i.hij("", i.lcZ(40, 30, "Work Location"), " "),
                    i.xp6(3),
                    i.Oqu(e.historyDetail.teomworklocation.worklocationName),
                    i.xp6(3),
                    i.hij("", i.lcZ(46, 32, "Location"), " "),
                    i.xp6(3),
                    i.Oqu(e.historyDetail.location),
                    i.xp6(3),
                    i.hij("", i.lcZ(52, 34, "Severity"), " "),
                    i.xp6(3),
                    i.Oqu(e.historyDetail.severity),
                    i.xp6(1),
                    i.Q6J("ngIf", e.isFile))
                },
                directives: [s.xw, a.wd, s.SQ, s.Wh, a.Q$, s.yH, l.O5],
                pipes: [c.X$],
                styles: [".container[_ngcontent-%COMP%]{overflow:auto}.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{border-bottom:1px solid var(--gdx-color-outline)}.required[_ngcontent-%COMP%]{color:var(--ion-color-danger)!important}"]
            }),
            t
        }
        )()
    },
    48282: function(t, e, n) {
        n.r(e),
        n.d(e, {
            ProfileOhsaHistoryPageModule: function() {
                return m
            }
        });
        var o = n(38583)
          , i = n(3679)
          , a = n(55546)
          , r = n(99415)
          , s = n(32984)
          , l = n(37716);
        const c = [{
            path: "",
            component: s.z
        }, {
            path: "modal-ohsa-history",
            loadChildren: ()=>n.e(68560).then(n.bind(n, 68560)).then(t=>t.ModalOhsaHistoryPageModule)
        }];
        let d = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[r.Bz.forChild(c)], r.Bz]
            }),
            t
        }
        )();
        var u = n(15566)
          , p = n(29790)
          , g = n(52928);
        let m = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[o.ez, i.u5, a.Pc, d, u.o9, g.U9, g.F$, p.aw]]
            }),
            t
        }
        )()
    },
    32984: function(t, e, n) {
        n.d(e, {
            z: function() {
                return d
            }
        });
        var o = n(64762)
          , i = n(44667)
          , a = n(37716)
          , r = n(27996)
          , s = n(14635)
          , l = n(12132)
          , c = n(52928);
        let d = (()=>{
            class t {
                constructor(t, e, n) {
                    this.modalService = t,
                    this.profileOhsaHistoryService = e,
                    this.alertService = n,
                    this.loadingTable = !1,
                    this.bodyTable = []
                }
                ngOnInit() {
                    this.getData()
                }
                getData() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.loadingTable = !0;
                            const t = {
                                empId: this.empId
                            };
                            yield this.profileOhsaHistoryService.createHeaderTable();
                            const e = yield this.profileOhsaHistoryService.getOhsaHistory(t);
                            this.bodyTable = yield this.profileOhsaHistoryService.createContentTable(e)
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        } finally {
                            this.loadingTable = !1
                        }
                    })
                }
                getResult(t) {}
                fromError(t) {}
                actionRow(t) {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        const e = {
                            props: t,
                            empId: this.empId
                        };
                        yield this.modalService.present(i.r, e)
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.Y36(r.Z),a.Y36(s.t),a.Y36(l.c))
            }
            ,
            t.\u0275cmp = a.Xpm({
                type: t,
                selectors: [["app-profile-ohsa-history"]],
                inputs: {
                    empId: "empId"
                },
                decls: 3,
                vars: 5,
                consts: [[1, "form-profile-box"], [3, "headerTable", "bodyTable", "blockUnselectedRow", "loading", "isError", "resultTable", "callbackActionRow"]],
                template: function(t, e) {
                    1 & t && (a.TgZ(0, "div", 0),
                    a.ynx(1),
                    a.TgZ(2, "gd-comp-table", 1),
                    a.NdJ("resultTable", function(t) {
                        return e.getResult(t)
                    })("callbackActionRow", function(t) {
                        return e.actionRow(t)
                    }),
                    a.qZA(),
                    a.BQk(),
                    a.qZA()),
                    2 & t && (a.xp6(2),
                    a.Q6J("headerTable", e.profileOhsaHistoryService.headerTable)("bodyTable", e.bodyTable)("blockUnselectedRow", !1)("loading", e.loadingTable)("isError", !1))
                },
                directives: [c.xh],
                styles: [""]
            }),
            t
        }
        )()
    },
    19913: function(t, e, n) {
        n.r(e),
        n.d(e, {
            ProfileSkillPageModule: function() {
                return m
            }
        });
        var o = n(38583)
          , i = n(3679)
          , a = n(55546)
          , r = n(99415)
          , s = n(27006)
          , l = n(37716);
        const c = [{
            path: "",
            component: s.c
        }];
        let d = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[r.Bz.forChild(c)], r.Bz]
            }),
            t
        }
        )();
        var u = n(29790)
          , p = n(15566)
          , g = n(52928);
        let m = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[o.ez, i.u5, a.Pc, d, u.aw, p.o9, g.F$, g.R$, g.ER]]
            }),
            t
        }
        )()
    },
    27006: function(t, e, n) {
        n.d(e, {
            c: function() {
                return y
            }
        });
        var o = n(64762)
          , i = n(10922)
          , a = n(37716)
          , r = n(27969)
          , s = n(57196)
          , l = n(29790)
          , c = n(39800);
        let d = (()=>{
            class t {
                constructor(t, e, n) {
                    this.auth = t,
                    this.translateService = e,
                    this.sf6skillApi = n,
                    this.subscriptions = []
                }
                dispose() {
                    this.unsubscribe()
                }
                unsubscribe() {
                    this.subscriptions.forEach(t=>t.unsubscribe())
                }
                getSkillList(t) {
                    return new Promise((e,n)=>{
                        this.subscriptions.push(this.sf6skillApi.listing(t).pipe((0,
                        r.U)(t=>t.data)).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                getTypeSkill(t) {
                    return new Promise((e,n)=>{
                        this.subscriptions.push(this.sf6skillApi.type(t).pipe((0,
                        r.U)(t=>t.data)).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
                saveSkill(t) {
                    return new Promise((e,n)=>(0,
                    o.mG)(this, void 0, void 0, function*() {
                        this.subscriptions.push(this.sf6skillApi.save(t).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }))
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.LFG(s.V),a.LFG(l.sK),a.LFG(c.H))
            }
            ,
            t.\u0275prov = a.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )();
        var u = n(12132)
          , p = n(35618)
          , g = n(55546)
          , m = n(52928)
          , h = n(38583)
          , f = n(3679);
        function v(t, e) {
            if (1 & t && (a.TgZ(0, "ion-select-option", 20),
            a._uU(1),
            a.qZA()),
            2 & t) {
                const t = e.$implicit;
                a.s9C("value", null == t ? null : t.value),
                a.xp6(1),
                a.hij(" ", null == t ? null : t.name, "")
            }
        }
        function Z(t, e) {
            if (1 & t) {
                const t = a.EpF();
                a.TgZ(0, "gd-comp-icon", 21),
                a.NdJ("click", function() {
                    a.CHM(t);
                    const e = a.oxw().index;
                    return a.oxw().remove(e)
                }),
                a.qZA()
            }
            2 & t && a.Q6J("name", "icon-close")("size", "16")
        }
        function b(t, e) {
            if (1 & t) {
                const t = a.EpF();
                a.ynx(0),
                a.TgZ(1, "ion-icon", 22),
                a.NdJ("click", function() {
                    const e = a.CHM(t).index
                      , n = a.oxw().$implicit;
                    return a.oxw().starCheck(n, e)
                }),
                a.qZA(),
                a.BQk()
            }
            if (2 & t) {
                const t = e.index
                  , n = a.oxw().$implicit;
                a.xp6(1),
                a.ekj("star-check", t < n.interestRate)
            }
        }
        function x(t, e) {
            if (1 & t) {
                const t = a.EpF();
                a.TgZ(0, "div", 11),
                a.TgZ(1, "div", 12),
                a.TgZ(2, "ion-select", 13),
                a.NdJ("ngModelChange", function(e) {
                    return a.CHM(t).$implicit.skillCode = e
                }),
                a.ALo(3, "translate"),
                a.YNc(4, v, 2, 2, "ion-select-option", 14),
                a.qZA(),
                a.YNc(5, Z, 1, 2, "gd-comp-icon", 15),
                a.qZA(),
                a.TgZ(6, "div", 16),
                a.TgZ(7, "ion-label", 17),
                a._uU(8),
                a.ALo(9, "translate"),
                a.qZA(),
                a.TgZ(10, "div", 18),
                a.YNc(11, b, 2, 2, "ng-container", 19),
                a.qZA(),
                a.qZA(),
                a.qZA()
            }
            if (2 & t) {
                const t = e.$implicit
                  , n = e.index
                  , o = a.oxw();
                a.xp6(2),
                a.s9C("placeholder", a.lcZ(3, 6, "Select Interest")),
                a.Q6J("ngModel", t.skillCode),
                a.xp6(2),
                a.Q6J("ngForOf", o.arrSkillType),
                a.xp6(1),
                a.Q6J("ngIf", 0 != n),
                a.xp6(3),
                a.Oqu(a.lcZ(9, 8, "Rate")),
                a.xp6(3),
                a.Q6J("ngForOf", o.numOfStar)
            }
        }
        function A(t, e) {
            if (1 & t) {
                const t = a.EpF();
                a.TgZ(0, "gd-comp-button", 23),
                a.NdJ("click", function() {
                    return a.CHM(t),
                    a.oxw().saveForm()
                }),
                a._uU(1),
                a.ALo(2, "translate"),
                a.qZA()
            }
            if (2 & t) {
                const t = a.oxw();
                a.Q6J("loading", t.loadingSave),
                a.xp6(1),
                a.Oqu(a.lcZ(2, 2, "Save"))
            }
        }
        let y = (()=>{
            class t {
                constructor(t, e, n) {
                    this.skillService = t,
                    this.alertService = e,
                    this.auth = n,
                    this.arrSkillList = [],
                    this.arrSkillType = [],
                    this.numOfStar = [1, 2, 3, 4, 5],
                    this.loadingSave = !1
                }
                ngOnInit() {
                    this.shownBtnUpd = this.auth.gdAuth.menu["btn-upd-skill"],
                    this.getTypeList(),
                    this.getSkillList()
                }
                getSkillList() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const t = {
                                empId: this.empId,
                                lang: "en"
                            }
                              , e = yield this.skillService.getSkillList(t);
                            for (const n of e)
                                this.arrSkillList.push({
                                    skillCode: n.skillCode,
                                    skillRate: n.skillRate,
                                    empId: n.empId
                                })
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        }
                    })
                }
                getTypeList() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const t = {
                                lang: "en"
                            }
                              , e = yield this.skillService.getTypeSkill(t);
                            this.arrSkillType = [];
                            for (const n of e)
                                this.arrSkillType.push({
                                    value: n.code,
                                    name: n.name
                                })
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        }
                    })
                }
                addNew() {
                    this.arrSkillList.push({
                        interestCode: "0",
                        interestRate: 0,
                        empId: this.empId
                    }),
                    console.log("add", this.arrSkillList)
                }
                remove(t) {
                    this.arrSkillList.splice(t, 1)
                }
                starCheck(t, e) {
                    console.log("starCheck", t, e),
                    t.interestRate = e + 1
                }
                saveForm() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.loadingSave = !0;
                            const t = this.getObjData();
                            console.log(t),
                            yield this.skillService.saveSkill(t),
                            yield this.alertService.presentAlertSuccess(i.V.SUCCESSFULLY_SAVED)
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        } finally {
                            this.loadingSave = !1
                        }
                    })
                }
                getObjData() {
                    const t = {};
                    let e = 1;
                    for (const n of this.arrSkillList)
                        t["grow_" + e + "_EmpSkill_skill_code"] = n.skillCode,
                        t["grow_" + e + "_EmpSkill_skill_rate"] = n.skillRate,
                        t["grow_" + e + "_EmpSkill_emp_id"] = n.empId,
                        t.hdn_grc_EmpSkill = 1 === e ? e : t.hdn_grc_EmpSkill + "," + e,
                        e++;
                    return t.empid = this.empId,
                    t.hdn_gridinput_EmpSkill = "EmpSkill",
                    console.log("obj | ", t),
                    t
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.Y36(d),a.Y36(u.c),a.Y36(s.V))
            }
            ,
            t.\u0275cmp = a.Xpm({
                type: t,
                selectors: [["app-profile-skill"]],
                inputs: {
                    empId: "empId"
                },
                decls: 17,
                vars: 12,
                consts: [[1, "form-profile-box"], ["mv-16", "", "fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "14px", "pv-10", "", 1, "title-box"], ["fxLayout", "column", 1, "left"], ["large-text", "", "mb-4", "", "bold-text", "", "color", "primary"], ["color", "medium"], [1, "right"], [3, "fill", "click"], [1, "interest-card"], ["class", "card-box", "pa", "", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "center ", "ph-16", "", 1, "footer-box"], [3, "loading", "click", 4, "ngIf"], ["pa", "", 1, "card-box"], ["mb-4", "", "fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "14px", 1, "top"], [3, "ngModel", "placeholder", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["tappable", "", 3, "name", "size", "click", 4, "ngIf"], ["fxLayout", "column", "mt-16", "", 1, "interest-section"], ["bold-text", ""], ["mt-8", "", 1, "stars-container"], [4, "ngFor", "ngForOf"], [3, "value"], ["tappable", "", 3, "name", "size", "click"], ["name", "star", "tappable", "", 3, "click"], [3, "loading", "click"]],
                template: function(t, e) {
                    1 & t && (a.TgZ(0, "div", 0),
                    a.TgZ(1, "div", 1),
                    a.TgZ(2, "div", 2),
                    a.TgZ(3, "ion-label", 3),
                    a._uU(4),
                    a.ALo(5, "translate"),
                    a.qZA(),
                    a.TgZ(6, "ion-label", 4),
                    a._uU(7),
                    a.ALo(8, "translate"),
                    a.qZA(),
                    a.qZA(),
                    a.TgZ(9, "div", 5),
                    a.TgZ(10, "gd-comp-button", 6),
                    a.NdJ("click", function() {
                        return e.addNew()
                    }),
                    a._uU(11),
                    a.ALo(12, "translate"),
                    a.qZA(),
                    a.qZA(),
                    a.qZA(),
                    a.TgZ(13, "div", 7),
                    a.YNc(14, x, 12, 10, "div", 8),
                    a.qZA(),
                    a.TgZ(15, "div", 9),
                    a.YNc(16, A, 3, 4, "gd-comp-button", 10),
                    a.qZA(),
                    a.qZA()),
                    2 & t && (a.xp6(4),
                    a.Oqu(a.lcZ(5, 6, "Skill")),
                    a.xp6(3),
                    a.Oqu(a.lcZ(8, 8, "You can change your basic Interest here")),
                    a.xp6(3),
                    a.Q6J("fill", "outline"),
                    a.xp6(1),
                    a.Oqu(a.lcZ(12, 10, "Add New Interest")),
                    a.xp6(3),
                    a.Q6J("ngForOf", e.arrSkillList),
                    a.xp6(2),
                    a.Q6J("ngIf", e.shownBtnUpd))
                },
                directives: [p.xw, p.Wh, p.SQ, g.Q$, m.qH, h.sg, h.O5, g.t9, g.QI, f.JJ, f.On, g.n0, m.pD, g.gu],
                pipes: [l.X$],
                styles: [".interest-card[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-gap:12px}.interest-card[_ngcontent-%COMP%]   .card-box[_ngcontent-%COMP%]{border-radius:5px;border:1px solid var(--gdx-color-outline)}.interest-card[_ngcontent-%COMP%]   .card-box[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]{max-width:80%;padding:0!important;align-content:center;width:80%;font-size:17px!important}.interest-card[_ngcontent-%COMP%]   .card-box[_ngcontent-%COMP%]   .interest-section[_ngcontent-%COMP%]   .stars-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:24px;color:var(--gdx-color-outline)}.interest-card[_ngcontent-%COMP%]   .card-box[_ngcontent-%COMP%]   .interest-section[_ngcontent-%COMP%]   .star-check[_ngcontent-%COMP%]{color:var(--ion-color-primary)!important}"]
            }),
            t
        }
        )()
    },
    18104: function(t, e, n) {
        n.d(e, {
            H: function() {
                return S
            }
        });
        var o = n(64762)
          , i = n(10922)
          , a = n(75839)
          , r = n(13415)
          , s = n(58135)
          , l = n(16738)
          , c = n(37716)
          , d = n(27996)
          , u = n(57196)
          , p = n(40559)
          , g = n(996)
          , m = n(29790)
          , h = n(11942)
          , f = n(55546)
          , v = n(35618)
          , Z = n(38583)
          , b = n(3679)
          , x = n(52928)
          , A = n(4458);
        const y = ["fileInputAttch"];
        function T(t, e) {
            if (1 & t) {
                const t = c.EpF();
                c.ynx(0),
                c.TgZ(1, "div"),
                c.TgZ(2, "ion-label", 7),
                c._uU(3),
                c.ALo(4, "translate"),
                c.qZA(),
                c.TgZ(5, "ion-input", 8),
                c.NdJ("click", function() {
                    return c.CHM(t),
                    c.oxw().employeeSearch()
                })("ngModelChange", function(e) {
                    return c.CHM(t),
                    c.oxw().form.requestForName = e
                }),
                c.qZA(),
                c.qZA(),
                c.TgZ(6, "div"),
                c.TgZ(7, "gd-comp-input-date", 9),
                c.NdJ("startDateChange", function(e) {
                    return c.CHM(t),
                    c.oxw().form.startdate = e
                })("endDateChange", function(e) {
                    return c.CHM(t),
                    c.oxw().form.enddate = e
                })("changeEvent", function(e) {
                    return c.CHM(t),
                    c.oxw().handleChangeDate(e)
                }),
                c.qZA(),
                c.qZA(),
                c.TgZ(8, "div", 10),
                c.TgZ(9, "ion-label", 7),
                c._uU(10),
                c.ALo(11, "translate"),
                c.qZA(),
                c._UZ(12, "app-attachment-support", 11),
                c.TgZ(13, "gd-comp-upload", 12),
                c.NdJ("ngModelChange", function(e) {
                    return c.CHM(t),
                    c.oxw().form.attachment = e
                })("fileChange", function(e) {
                    return c.CHM(t),
                    c.oxw().checkFileSize(e)
                }),
                c.qZA(),
                c.qZA(),
                c.BQk()
            }
            if (2 & t) {
                const t = c.oxw();
                c.xp6(3),
                c.Oqu(c.lcZ(4, 12, "Requested for")),
                c.xp6(2),
                c.Q6J("ngModel", t.form.requestForName),
                c.xp6(2),
                c.Q6J("tapSubmit", !0)("type", "multi")("option", t.optionInputDate)("startDate", t.form.startdate)("endDate", t.form.enddate),
                c.xp6(3),
                c.Oqu(c.lcZ(11, 14, "Attachment")),
                c.xp6(2),
                c.Q6J("auth", null == t.auth ? null : t.auth.gdAuth)("uploadCode", t.uploadCode)("align", "right"),
                c.xp6(1),
                c.Q6J("ngModel", t.form.attachment)
            }
        }
        function C(t, e) {
            if (1 & t) {
                const t = c.EpF();
                c.TgZ(0, "gd-comp-error-state", 13),
                c.NdJ("result", function(e) {
                    return c.CHM(t),
                    c.oxw().errorAction(e)
                }),
                c.qZA()
            }
        }
        function q(t, e) {
            if (1 & t) {
                const t = c.EpF();
                c.TgZ(0, "gd-comp-button", 14),
                c.NdJ("click", function() {
                    return c.CHM(t),
                    c.oxw().next()
                }),
                c._uU(1),
                c.ALo(2, "translate"),
                c.qZA()
            }
            2 & t && (c.xp6(1),
            c.Oqu(c.lcZ(2, 1, "Next")))
        }
        let S = (()=>{
            class t {
                constructor(t, e, n, o, i, a, r, s) {
                    this.modalService = t,
                    this.auth = e,
                    this.toastService = n,
                    this.navigationService = o,
                    this.ngZone = i,
                    this.translate = a,
                    this.attendanceCorrectionService = r,
                    this.navParams = s,
                    this.isMobile = !0,
                    this.optionInputDate = {
                        boldValue: !1,
                        sizeValue: 14,
                        colorValue: "dark",
                        boldLabel: !1,
                        sizeLabel: 12,
                        colorLabel: "medium"
                    },
                    this.form = {
                        requestBy: null,
                        requestByName: null,
                        requestByPhoto: null,
                        requestByUserId: null,
                        requestFor: null,
                        requestForName: null,
                        requestForPhoto: null,
                        requestForUserId: null,
                        requestForPosNameEn: null,
                        startdate: null,
                        enddate: null,
                        companyId: null,
                        companyCode: null,
                        isSF6: null,
                        popBack: null,
                        base64Image: null,
                        attachment: {
                            sourceFile: null,
                            base64Image: null,
                            fileName: null,
                            fileType: null
                        },
                        fileName: null,
                        acrSetting: null
                    },
                    this.uploadCode = "attcorrection",
                    this.isError = !1,
                    this.mindDiff = (new Date).getTimezoneOffset()
                }
                ngOnInit() {
                    var t, e, n;
                    this.form.acrSetting = this.navigationService.getParams(),
                    this.params = null !== (t = this.navParams.get("params")) && void 0 !== t ? t : this.navigationService.getParams(),
                    console.log("TCL params", this.params),
                    this.isMobile = null === (n = null === (e = this.params) || void 0 === e ? void 0 : e.isMobile) || void 0 === n || n,
                    this.defineFormValue()
                }
                defineFormValue() {
                    var t, e, n, o, i, a, r, s, c, d, u, p, g, m, h, f, v, Z, b, x, A, y, T, C, q, S, M, w;
                    const _ = null !== (e = null === (t = this.params) || void 0 === t ? void 0 : t.startDate) && void 0 !== e ? e : l().format("YYYY-MM-DDTHH:mm:ss")
                      , L = null !== (o = null === (n = this.params) || void 0 === n ? void 0 : n.endDate) && void 0 !== o ? o : l().format("YYYY-MM-DDTHH:mm:ss");
                    this.form.requestBy = null === (a = null === (i = this.auth) || void 0 === i ? void 0 : i.gdAuth) || void 0 === a ? void 0 : a.empId,
                    this.form.requestByName = null === (s = null === (r = this.auth) || void 0 === r ? void 0 : r.gdAuth) || void 0 === s ? void 0 : s.fullName,
                    this.form.requestByPhoto = null === (d = null === (c = this.auth) || void 0 === c ? void 0 : c.gdAuth) || void 0 === d ? void 0 : d.photo,
                    this.form.requestByUserId = null === (p = null === (u = this.auth) || void 0 === u ? void 0 : u.gdAuth) || void 0 === p ? void 0 : p.userId,
                    this.form.requestForName = null === (m = null === (g = this.auth) || void 0 === g ? void 0 : g.gdAuth) || void 0 === m ? void 0 : m.fullName,
                    this.form.requestForPosNameEn = null === (f = null === (h = this.auth) || void 0 === h ? void 0 : h.gdAuth) || void 0 === f ? void 0 : f.position,
                    this.form.requestFor = null === (Z = null === (v = this.auth) || void 0 === v ? void 0 : v.gdAuth) || void 0 === Z ? void 0 : Z.empId,
                    this.form.requestForPhoto = null === (x = null === (b = this.auth) || void 0 === b ? void 0 : b.gdAuth) || void 0 === x ? void 0 : x.photo,
                    this.form.requestForUserId = null === (y = null === (A = this.auth) || void 0 === A ? void 0 : A.gdAuth) || void 0 === y ? void 0 : y.userId,
                    this.form.isSF6 = null === (C = null === (T = this.auth) || void 0 === T ? void 0 : T.gdAuth) || void 0 === C ? void 0 : C.isSF6,
                    this.form.companyCode = null === (S = null === (q = this.auth) || void 0 === q ? void 0 : q.gdAuth) || void 0 === S ? void 0 : S.companyCode,
                    this.form.companyId = null === (w = null === (M = this.auth) || void 0 === M ? void 0 : M.gdAuth) || void 0 === w ? void 0 : w.companyId,
                    this.form.startdate = _,
                    this.form.enddate = L
                }
                employeeSearch() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        const t = yield this.modalService.present(r.b, {
                            module: "attcorr",
                            listType: "ess",
                            multipleSelect: !1,
                            empIds: []
                        });
                        t && t.length && (this.form.requestForName = t[0].fullName,
                        this.form.requestFor = t[0].empId,
                        this.form.requestForPhoto = t[0].photo,
                        this.form.requestForUserId = t[0].userId,
                        this.form.requestForPosNameEn = t[0].posNameEn)
                    })
                }
                takeFile() {
                    this.fileInputAttch.nativeElement.click()
                }
                get isValid() {
                    var t, e, n, o, a, r;
                    let s = !1;
                    const c = l(this.form.startdate).isAfter(this.form.enddate)
                      , d = l().startOf("day").diff(l(this.form.startdate).startOf("day"), "day")
                      , u = (null === (e = null === (t = this.form) || void 0 === t ? void 0 : t.acrSetting) || void 0 === e ? void 0 : e.attcorrection_max) ? null === (o = null === (n = this.form) || void 0 === n ? void 0 : n.acrSetting) || void 0 === o ? void 0 : o.attcorrection_max : 0;
                    return c ? this.toastService.presentToast(i.V.END_DATE_MUST_BE_GREATER_THAN_START_DATE) : 0 !== Number(u) && Number(u) < d && (null === (r = null === (a = this.auth) || void 0 === a ? void 0 : a.gdAuth) || void 0 === r ? void 0 : r.isSF6) ? this.toastService.presentToast(i.V.BEGIN_DATE_EXCEED_ATTENDANCE_CORRECTION_MAXIMUM) : s = !0,
                    s
                }
                checkFileSize(t) {
                    this.attendanceCorrectionService.checkMaxSize(t) || this.processWebFile(t)
                }
                processWebFile(t) {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        const e = yield this.attendanceCorrectionService.processWebFile(t);
                        this.form.attachment = e
                    })
                }
                removeAttachment() {
                    this.form.fileName = null,
                    this.form.attachment = null,
                    this.form.base64Image = null
                }
                next() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        this.isValid && this.navigationService.pushSide(s.I, a.t.ATTENDANCE_CORRECTION_FORM_DETAIL, this.form)
                    })
                }
                errorAction(t) {
                    console.log("error action")
                }
                handleChangeDate(t) {
                    setTimeout(()=>{
                        const t = l(this.form.startdate).format("YYYY-MM-DDTHH:mm:ss")
                          , e = l(this.form.enddate).format("YYYY-MM-DDTHH:mm:ss");
                        this.form.startdate = t,
                        this.form.enddate = e
                    }
                    , 250)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(c.Y36(d.Z),c.Y36(u.V),c.Y36(p.k),c.Y36(g.f),c.Y36(c.R0b),c.Y36(m.sK),c.Y36(h.k),c.Y36(f.X1))
            }
            ,
            t.\u0275cmp = c.Xpm({
                type: t,
                selectors: [["app-attendance-correction-form"]],
                viewQuery: function(t, e) {
                    if (1 & t && c.Gf(y, 5),
                    2 & t) {
                        let t;
                        c.iGM(t = c.CRH()) && (e.fileInputAttch = t.first)
                    }
                },
                inputs: {
                    isMobile: "isMobile"
                },
                decls: 14,
                vars: 6,
                consts: [["slot", "start"], ["gdx-content", "", "fxLayout", "column", "fxLayoutGap", "16px"], [4, "ngIf"], [3, "result", 4, "ngIf"], ["padding-approval-button", ""], ["fxLayout", "row", "fxLayoutAlign", "end "], [3, "click", 4, "ngIf"], ["small-text", "", "color", "medium"], ["readonly", "", "placeholder", "Employee", 3, "ngModel", "click", "ngModelChange"], ["placeholder", "DD MMM YYYY", 3, "tapSubmit", "type", "option", "startDate", "endDate", "startDateChange", "endDateChange", "changeEvent"], ["fxLayout", "column", "fxLayoutGap", "8px"], [3, "auth", "uploadCode", "align"], [3, "ngModel", "ngModelChange", "fileChange"], [3, "result"], [3, "click"]],
                template: function(t, e) {
                    1 & t && (c.TgZ(0, "ion-header"),
                    c.TgZ(1, "ion-toolbar"),
                    c._UZ(2, "ion-back-button", 0),
                    c.TgZ(3, "ion-title"),
                    c._uU(4),
                    c.ALo(5, "translate"),
                    c.qZA(),
                    c.qZA(),
                    c.qZA(),
                    c.TgZ(6, "ion-content"),
                    c.TgZ(7, "ion-card", 1),
                    c.YNc(8, T, 14, 16, "ng-container", 2),
                    c.YNc(9, C, 1, 0, "gd-comp-error-state", 3),
                    c.qZA(),
                    c.qZA(),
                    c.TgZ(10, "ion-footer", 4),
                    c.TgZ(11, "ion-toolbar"),
                    c.TgZ(12, "div", 5),
                    c.YNc(13, q, 3, 3, "gd-comp-button", 6),
                    c.qZA(),
                    c.qZA(),
                    c.qZA()),
                    2 & t && (c.xp6(4),
                    c.Oqu(c.lcZ(5, 4, "Attendance Correction Form")),
                    c.xp6(4),
                    c.Q6J("ngIf", !e.isError),
                    c.xp6(1),
                    c.Q6J("ngIf", e.isError),
                    c.xp6(4),
                    c.Q6J("ngIf", !e.isError))
                },
                directives: [f.Gu, f.sr, f.oU, f.cs, f.wd, f.W2, f.PM, v.xw, v.SQ, Z.O5, f.fr, v.Wh, f.Q$, f.pK, f.j9, b.JJ, b.On, x.Id, A.T, x.IL, x.K$, x.qH],
                pipes: [m.X$],
                styles: ["ion-item[_ngcontent-%COMP%]{padding-left:unset;margin-left:unset;--padding-inline-start: unset !important}.image-container[_ngcontent-%COMP%]{padding:6px;border:1px solid silver;border-radius:10px;position:relative;top:12px;width:200px;right:100px}.remove[_ngcontent-%COMP%]{position:absolute;right:-5px;top:-10px;padding:7px;background:red;color:#fff;border-radius:50%}gdx-input-date[_ngcontent-%COMP%]{width:100%}@media only screen and (min-width: 768px){ion-item[_ngcontent-%COMP%]{--border-width: 0px}ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{border-radius:8px;padding:0 8px!important;border:1px solid var(--gdx-color-outline);margin-top:12px}ion-item[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%]{border-radius:8px;padding:8px!important;border:1px solid var(--gdx-color-outline);margin-top:12px}}"]
            }),
            t
        }
        )()
    },
    57169: function(t, e, n) {
        n.d(e, {
            H: function() {
                return s
            }
        });
        var o = n(37716)
          , i = n(52928)
          , a = n(35618)
          , r = n(29790);
        let s = (()=>{
            class t {
                constructor(t) {
                    this.gdCompModal = t,
                    this.viewMode = "full"
                }
                ngOnInit() {}
                clearFilter() {
                    this.gdCompModal.dismiss()
                }
                submitFilter() {
                    this.gdCompModal.dismiss()
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(o.Y36(i.Vf))
            }
            ,
            t.\u0275cmp = o.Xpm({
                type: t,
                selectors: [["app-attendance-list-detail-filter"]],
                decls: 9,
                vars: 11,
                consts: [["pa", "", 1, "container"], ["fxFlex", "", "placeholder", "DD MMM YYYY", 3, "type", "startDate", "endDate", "startDateChange", "endDateChange"], ["pa", "", "fxLayout", "row", "fxLayoutGap", "16px", 1, "btn-box"], ["fxFlex", "", "fill", "outline", 3, "expand", "click"], ["fxFlex", "", "fill", "solid", 3, "expand", "click"]],
                template: function(t, e) {
                    1 & t && (o.TgZ(0, "div", 0),
                    o.TgZ(1, "gd-comp-input-date", 1),
                    o.NdJ("startDateChange", function(t) {
                        return e.startDate = t
                    })("endDateChange", function(t) {
                        return e.endDate = t
                    }),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(2, "div", 2),
                    o.TgZ(3, "gd-comp-button", 3),
                    o.NdJ("click", function() {
                        return e.clearFilter()
                    }),
                    o._uU(4),
                    o.ALo(5, "translate"),
                    o.qZA(),
                    o.TgZ(6, "gd-comp-button", 4),
                    o.NdJ("click", function() {
                        return e.submitFilter()
                    }),
                    o._uU(7),
                    o.ALo(8, "translate"),
                    o.qZA(),
                    o.qZA()),
                    2 & t && (o.xp6(1),
                    o.Q6J("type", "multi")("startDate", e.startDate)("endDate", e.endDate),
                    o.xp6(2),
                    o.Q6J("expand", "block"),
                    o.xp6(1),
                    o.Oqu(o.lcZ(5, 7, "Clear")),
                    o.xp6(2),
                    o.Q6J("expand", "block"),
                    o.xp6(1),
                    o.Oqu(o.lcZ(8, 9, "Filter")))
                },
                directives: [i.Id, a.yH, a.xw, a.SQ, i.qH],
                pipes: [r.X$],
                styles: [""]
            }),
            t
        }
        )()
    },
    79286: function(t, e, n) {
        n.d(e, {
            C: function() {
                return d
            }
        });
        var o = n(37716)
          , i = n(52928)
          , a = n(29790)
          , r = n(35618)
          , s = n(38583)
          , l = n(55546);
        function c(t, e) {
            if (1 & t) {
                const t = o.EpF();
                o.TgZ(0, "ion-label", 2),
                o.NdJ("click", function() {
                    const e = o.CHM(t).$implicit;
                    return o.oxw().openPage(e)
                }),
                o._uU(1),
                o.qZA()
            }
            if (2 & t) {
                const t = e.$implicit;
                o.xp6(1),
                o.Oqu(t.label)
            }
        }
        let d = (()=>{
            class t {
                constructor(t, e) {
                    this.gdCompModal = t,
                    this.translateService = e,
                    this.moreList = [{
                        label: "Request Overtime",
                        value: "1"
                    }, {
                        label: "Request Leave",
                        value: "2"
                    }, {
                        label: "Request Attendance Correction",
                        value: "3"
                    }, {
                        label: "View Log",
                        value: "4"
                    }]
                }
                ngOnInit() {
                    this.moreList.forEach(t=>{
                        t.label = this.translateService.instant(t.label)
                    }
                    )
                }
                openPage(t) {
                    this.gdCompModal.dismiss()
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(o.Y36(i.Vf),o.Y36(a.sK))
            }
            ,
            t.\u0275cmp = o.Xpm({
                type: t,
                selectors: [["app-attendance-list-detail-more"]],
                decls: 2,
                vars: 1,
                consts: [["fxLayout", "column", "pv-16", "", 1, "container"], ["pl-16", "", "pr-16", "", "pa-10", "", "pb-10", "", 3, "click", 4, "ngFor", "ngForOf"], ["pl-16", "", "pr-16", "", "pa-10", "", "pb-10", "", 3, "click"]],
                template: function(t, e) {
                    1 & t && (o.TgZ(0, "div", 0),
                    o.YNc(1, c, 2, 1, "ion-label", 1),
                    o.qZA()),
                    2 & t && (o.xp6(1),
                    o.Q6J("ngForOf", e.moreList))
                },
                directives: [r.xw, s.sg, l.Q$],
                styles: [".container[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]:hover{background-color:rgba(var(--ion-color-medium-rgb),.1);cursor:pointer}"]
            }),
            t
        }
        )()
    },
    50699: function(t, e, n) {
        n.d(e, {
            s: function() {
                return N
            }
        });
        var o = n(64762)
          , i = n(40719)
          , a = n(75839)
          , r = n(50530)
          , s = n(37716)
          , l = n(57741)
          , c = n(12132)
          , d = n(55546)
          , u = n(27996)
          , p = n(26205)
          , g = n(53956)
          , m = n(52928)
          , h = n(48964)
          , f = n(996)
          , v = n(38583)
          , Z = n(35618)
          , b = n(11882)
          , x = n(29790)
          , A = n(22168);
        function y(t, e) {
            if (1 & t && (s.TgZ(0, "ion-label", 17),
            s._uU(1),
            s.qZA()),
            2 & t) {
                const t = s.oxw().$implicit;
                s.xp6(1),
                s.Oqu(null == t ? null : t.temperature)
            }
        }
        function T(t, e) {
            if (1 & t && (s.TgZ(0, "ion-label", 18),
            s._uU(1),
            s.qZA()),
            2 & t) {
                const t = s.oxw().$implicit;
                s.xp6(1),
                s.hij(" ", null == t ? null : t.remark, "")
            }
        }
        function C(t, e) {
            1 & t && (s.TgZ(0, "ion-label", 18),
            s._uU(1),
            s.ALo(2, "translate"),
            s.qZA()),
            2 & t && (s.xp6(1),
            s.hij("", s.lcZ(2, 1, "Unprocessed"), " "))
        }
        function q(t, e) {
            1 & t && (s.TgZ(0, "div", 19),
            s._UZ(1, "gd-comp-icon", 20),
            s.TgZ(2, "ion-label", 21),
            s._uU(3),
            s.ALo(4, "translate"),
            s.qZA(),
            s.qZA()),
            2 & t && (s.xp6(1),
            s.Q6J("type", "svg")("src", "assets/icon/icon-feather/icon-check.svg")("color", "success")("size", "16"),
            s.xp6(2),
            s.hij("", s.lcZ(4, 5, "Has been processed"), " "))
        }
        function S(t, e) {
            1 & t && (s.TgZ(0, "ion-label", 18),
            s._uU(1),
            s.ALo(2, "translate"),
            s.qZA()),
            2 & t && (s.xp6(1),
            s.hij(" ", s.lcZ(2, 1, "Not first or not last time"), " "))
        }
        function M(t, e) {
            1 & t && s._UZ(0, "gd-comp-icon", 20),
            2 & t && s.Q6J("type", "svg")("src", "assets/icon/icon-feather/icon-smartphone.svg")("color", "dark")("size", "16")
        }
        function w(t, e) {
            1 & t && s._UZ(0, "gd-comp-icon", 22),
            2 & t && s.Q6J("name", "finger-print-outline")("color", "dark")("size", "16")
        }
        function _(t, e) {
            if (1 & t) {
                const t = s.EpF();
                s.TgZ(0, "gd-comp-icon", 23),
                s.NdJ("click", function() {
                    s.CHM(t);
                    const e = s.oxw().$implicit;
                    return s.oxw(2).toMap(e)
                }),
                s.qZA()
            }
            2 & t && s.Q6J("type", "svg")("name", "icon-map-pin")("color", "primary")("size", "24")
        }
        function L(t, e) {
            if (1 & t) {
                const t = s.EpF();
                s.TgZ(0, "div", 5),
                s.TgZ(1, "div", 6),
                s.TgZ(2, "image-component", 7),
                s.NdJ("click", function() {
                    const e = s.CHM(t).$implicit;
                    return s.oxw(2).openPicture(null == e ? null : e.photo)
                }),
                s.qZA(),
                s.TgZ(3, "div", 8),
                s.TgZ(4, "ion-label", 9),
                s._uU(5),
                s.ALo(6, "SFDate"),
                s.qZA(),
                s.YNc(7, y, 2, 1, "ion-label", 10),
                s.YNc(8, T, 2, 1, "ion-label", 11),
                s.YNc(9, C, 3, 3, "ion-label", 11),
                s.YNc(10, q, 5, 7, "div", 12),
                s.YNc(11, S, 3, 3, "ion-label", 11),
                s.TgZ(12, "div"),
                s.TgZ(13, "div", 13),
                s.YNc(14, M, 1, 4, "gd-comp-icon", 14),
                s.TgZ(15, "ion-label"),
                s._uU(16),
                s.ALo(17, "translate"),
                s.qZA(),
                s.YNc(18, w, 1, 3, "ng-template", null, 15, s.W1O),
                s.qZA(),
                s.qZA(),
                s.qZA(),
                s.YNc(20, _, 1, 4, "gd-comp-icon", 16),
                s.qZA(),
                s.qZA()
            }
            if (2 & t) {
                const t = e.$implicit
                  , n = s.MAs(19);
                s.xp6(2),
                s.Q6J("type", "ATTENDANCE")("imageName", null == t ? null : t.photo),
                s.xp6(3),
                s.Oqu(s.xi3(6, 12, null == t ? null : t.attendDate, "ddMMMyyyyHHmmNew")),
                s.xp6(2),
                s.Q6J("ngIf", null == t ? null : t.temperature),
                s.xp6(1),
                s.Q6J("ngIf", (null == t ? null : t.remark) && 0 != (null == t ? null : t.uploadstatus) && 1 != (null == t ? null : t.uploadstatus) && 3 != (null == t ? null : t.uploadstatus)),
                s.xp6(1),
                s.Q6J("ngIf", 0 == (null == t ? null : t.uploadstatus)),
                s.xp6(1),
                s.Q6J("ngIf", 1 == (null == t ? null : t.uploadstatus)),
                s.xp6(1),
                s.Q6J("ngIf", 3 == (null == t ? null : t.uploadstatus)),
                s.xp6(3),
                s.Q6J("ngIf", "ATTGO" === (null == t ? null : t.machineCode))("ngIfElse", n),
                s.xp6(2),
                s.Oqu(s.lcZ(17, 15, "by mobile phone")),
                s.xp6(4),
                s.Q6J("ngIf", null == t ? null : t.geolocation)
            }
        }
        function O(t, e) {
            if (1 & t && (s.ynx(0),
            s.YNc(1, L, 21, 17, "div", 4),
            s.BQk()),
            2 & t) {
                const t = s.oxw();
                s.xp6(1),
                s.Q6J("ngForOf", t.attendanceList)
            }
        }
        function P(t, e) {
            1 & t && (s.TgZ(0, "div", 26),
            s._UZ(1, "div", 27),
            s.TgZ(2, "div", 28),
            s._UZ(3, "div", 29),
            s._UZ(4, "div", 29),
            s.qZA(),
            s.qZA())
        }
        const k = function() {
            return [1, 2, 3, 4, 5]
        };
        function E(t, e) {
            1 & t && (s.TgZ(0, "div", 24),
            s.YNc(1, P, 5, 0, "div", 25),
            s.qZA()),
            2 & t && (s.xp6(1),
            s.Q6J("ngForOf", s.DdM(1, k)))
        }
        let N = (()=>{
            class t {
                constructor(t, e, n, o, i, a, r, s, l, c) {
                    this.attendanceService = t,
                    this.alertService = e,
                    this.navParams = n,
                    this.modalService = o,
                    this.profileService = i,
                    this.imageUrlService = a,
                    this.gdCompModal = r,
                    this.modalController = s,
                    this.attendanceListService = l,
                    this.navigationService = c,
                    this.attendanceList = [],
                    this.skeleton = !0
                }
                ngOnInit() {
                    var t;
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        this.payload = null !== (t = this.navParams.get("params")) && void 0 !== t ? t : this.payload,
                        yield this.getAttendanceTemp(),
                        this.skeleton = !1
                    })
                }
                getAttendanceTemp() {
                    var t, e;
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.payload.date = null !== (e = null === (t = this.payload) || void 0 === t ? void 0 : t.date) && void 0 !== e ? e : (new Date).toISOString(),
                            this.attendanceList = yield this.attendanceService.getAttendanceTemp(this.payload)
                        } catch (n) {
                            this.alertService.presentAlertError(n)
                        }
                    })
                }
                dismiss() {
                    this.modalService.dismiss()
                }
                toMap(t) {
                    const e = this.attendanceListService.createOptionsMapAttLog(t);
                    this.navigationService.pushSide(r.W, a.t.ATTENDANCE_LIST_MAP, e)
                }
                getImageUrl(t) {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        let e;
                        e = "ATTENDANCE";
                        const n = {
                            imageName: t,
                            userId: void 0,
                            type: "ATTENDANCE"
                        };
                        return yield this.imageUrlService.getUrl(n)
                    })
                }
                openPicture(t) {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        const e = yield this.getImageUrl(t)
                          , n = [];
                        n.push(e),
                        yield(yield this.modalController.create({
                            component: i.RD,
                            cssClass: "my-custom-class",
                            componentProps: {
                                image: n
                            }
                        })).present()
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(s.Y36(l.v),s.Y36(c.c),s.Y36(d.X1),s.Y36(u.Z),s.Y36(p.H),s.Y36(g.u),s.Y36(m.Vf),s.Y36(d.IN),s.Y36(h.D),s.Y36(f.f))
            }
            ,
            t.\u0275cmp = s.Xpm({
                type: t,
                selectors: [["app-attendance-list-log"]],
                decls: 9,
                vars: 5,
                consts: [["slot", "start"], [1, "ion-padding"], [4, "ngIf"], ["class", "skeleton", 4, "ngIf"], ["class", "content", 4, "ngFor", "ngForOf"], [1, "content"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "16px", 1, "list_log"], [3, "type", "imageName", "click"], ["fxLayout", "column", "fxFlex", "", 1, "sl"], ["no-margin", "", 1, "heading"], ["class", "subheading", "no-margin", "", 4, "ngIf"], ["class", "muted", "no-margin", "", 4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "4px", 4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "4px", "fxLayoutAlign", " center"], [3, "type", "src", "color", "size", 4, "ngIf", "ngIfElse"], ["fingerPrint", ""], [3, "type", "name", "color", "size", "click", 4, "ngIf"], ["no-margin", "", 1, "subheading"], ["no-margin", "", 1, "muted"], ["fxLayout", "row", "fxLayoutGap", "4px"], [3, "type", "src", "color", "size"], ["no-margin", "", 1, "success"], [3, "name", "color", "size"], [3, "type", "name", "color", "size", "click"], [1, "skeleton"], ["class", "skeleton-box", "fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "15px", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "15px", 1, "skeleton-box"], ["grd-skeleton", "", "fxFlex", "none", 1, "circle-box"], ["fxLayout", "column", "fxFlex", ""], ["grd-skeleton", "", 1, "line-box"]],
                template: function(t, e) {
                    1 & t && (s.TgZ(0, "ion-header"),
                    s.TgZ(1, "ion-toolbar"),
                    s._UZ(2, "ion-back-button", 0),
                    s.TgZ(3, "ion-title"),
                    s._uU(4),
                    s.ALo(5, "translate"),
                    s.qZA(),
                    s.qZA(),
                    s.qZA(),
                    s.TgZ(6, "ion-content", 1),
                    s.YNc(7, O, 2, 1, "ng-container", 2),
                    s.YNc(8, E, 2, 2, "div", 3),
                    s.qZA()),
                    2 & t && (s.xp6(4),
                    s.Oqu(s.lcZ(5, 3, "Attendance Log")),
                    s.xp6(3),
                    s.Q6J("ngIf", !e.skeleton),
                    s.xp6(1),
                    s.Q6J("ngIf", e.skeleton))
                },
                directives: [d.Gu, d.sr, d.oU, d.cs, d.wd, d.W2, v.O5, v.sg, Z.xw, Z.Wh, Z.SQ, b.c, Z.yH, d.Q$, m.pD],
                pipes: [x.X$, A.I],
                styles: [".content[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-weight:bold;font-size:16px!important}.content[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%]{font-size:14px!important;color:var(--ion-color-medium)!important}.content[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%]{font-size:12px!important;color:var(--ion-color-primary)!important;white-space:pre-wrap}.content[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%]{font-size:12px!important;color:var(--ion-color-success)!important;white-space:pre-wrap}.content[_ngcontent-%COMP%]   .list_log[_ngcontent-%COMP%]{border-bottom:1px solid var(--ion-color-outline);margin-bottom:10px;padding:10px 0}.content[_ngcontent-%COMP%]   .list_log[_ngcontent-%COMP%]   .sl[_ngcontent-%COMP%]{line-height:20px;width:50%}[_nghost-%COMP%]     image-component img{width:61px!important;height:61px!important;border-radius:10px;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.starttime[_ngcontent-%COMP%]{color:var(--ion-color-primary)!important}span.sficon-placeholder2[_ngcontent-%COMP%]{font-size:22pt}.skeleton[_ngcontent-%COMP%]   .skeleton-box[_ngcontent-%COMP%]{padding:18px 0}.skeleton[_ngcontent-%COMP%]   .skeleton-box[_ngcontent-%COMP%]   .circle-box[_ngcontent-%COMP%]{width:61px;height:61px;border-radius:8px}.skeleton[_ngcontent-%COMP%]   .skeleton-box[_ngcontent-%COMP%]   .line-box[_ngcontent-%COMP%]{width:60%;height:16px;border-radius:4px}.skeleton[_ngcontent-%COMP%]   .skeleton-box[_ngcontent-%COMP%]   .line-box[_ngcontent-%COMP%]:last-child{width:80%;height:16px;border-radius:4px;margin-top:12px}"]
            }),
            t
        }
        )()
    },
    75706: function(t, e, n) {
        n.d(e, {
            Z: function() {
                return v
            }
        });
        var o = n(64762)
          , i = n(73826)
          , a = n(10922)
          , r = n(13415)
          , s = n(37716)
          , l = n(12132)
          , c = n(60418);
        let d = (()=>{
            class t {
                constructor(t) {
                    this.attendanceApi = t,
                    this.employeeList = [],
                    this.finishInfinite = !1
                }
                dispose() {
                    this.employeeList = [],
                    this.finishInfinite = !1
                }
                saveAttendanceReProcess(t) {
                    return this.attendanceApi.reprocessAttendance(t).toPromise()
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(s.LFG(c.v))
            }
            ,
            t.\u0275prov = s.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )();
        var u = n(27996)
          , p = n(55546)
          , g = n(65744)
          , m = n(52928)
          , h = n(35618)
          , f = n(29790);
        let v = (()=>{
            class t {
                constructor(t, e, n) {
                    this.alertService = t,
                    this.attendanceReprocessService = e,
                    this.modalService = n,
                    this.queryParams = {
                        page: 1,
                        limit: 15
                    },
                    this.optionInputDate = {
                        boldLabel: !0,
                        sizeLabel: 14,
                        colorLabel: "medium",
                        border: !0
                    },
                    this.payloadGetEmp = {
                        dataAuth: !1,
                        paging: !0,
                        fullName: null,
                        positionId: [],
                        notEmpIds: []
                    },
                    this.employeeSelected = [],
                    this.employeeSelectedTemp = [],
                    this.selectedFilter = "1",
                    this.showSpinner = !1,
                    this.loadingSubmit = !1,
                    this.form = {
                        startDate: (new Date).toISOString(),
                        endDate: (new Date).toISOString(),
                        listEmp: [],
                        machineCode: "ATTGO"
                    },
                    this.totalSelected = 0
                }
                ngOnInit() {}
                ngOnDestroy() {
                    this.attendanceReprocessService.dispose()
                }
                handleSelectedData(t) {
                    this.employeeSelected = t
                }
                save() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.loadingSubmit = !0,
                            this.form.listEmp = this.employeeSelected.map(t=>t.empId),
                            yield this.attendanceReprocessService.saveAttendanceReProcess(this.form),
                            this.alertService.presentAlertSuccess(a.V.SUCCESSFULLY_REPROCESS_ATTENDANCE)
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        } finally {
                            this.loadingSubmit = !1
                        }
                    })
                }
                chooseEmployee(t) {
                    var e;
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        const t = {
                            module: i.Dz.ATTENDANCE_CORRECTION,
                            multipleSelect: !0,
                            listType: "ess",
                            type: "MODAL",
                            empIds: null !== (e = this.employeeSelected.map(t=>t.empId)) && void 0 !== e ? e : []
                        }
                          , n = yield this.modalService.present(r.b, t, "transparent-backdrop");
                        (null == n ? void 0 : n.length) && (this.employeeSelected = n,
                        this.totalSelected = null == n ? void 0 : n.length)
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(s.Y36(l.c),s.Y36(d),s.Y36(u.Z))
            }
            ,
            t.\u0275cmp = s.Xpm({
                type: t,
                selectors: [["app-attendance-reprocess-index"]],
                decls: 24,
                vars: 31,
                consts: [["slot", "end", 1, "ion-margin-end"], ["color", "primary", 3, "loading", "disabled", "hidden", "click"], ["responsive", ""], ["gdx-content", ""], [1, "container"], ["fxLayout", "column", "pa", "", 1, "box"], ["fxFlex", "", "placeholder", "DD MMM YYYY", 3, "label", "option", "format", "startDate", "endDate", "column", "type", "startDateChange", "endDateChange"], ["fxFlex", "", "fxLayout", "column", 1, "ion-item"], ["bold-text", "", "color", "medium"], ["tappable", "", 1, "input-with-icon", 3, "click"], ["readonly", "", 3, "placeholder", "value"], [3, "type", "name", "color"]],
                template: function(t, e) {
                    1 & t && (s.TgZ(0, "ion-header"),
                    s.TgZ(1, "ion-toolbar"),
                    s.TgZ(2, "app-title"),
                    s._uU(3),
                    s.ALo(4, "translate"),
                    s.qZA(),
                    s.TgZ(5, "div", 0),
                    s.TgZ(6, "gd-comp-button", 1),
                    s.NdJ("click", function() {
                        return e.save()
                    }),
                    s._uU(7),
                    s.ALo(8, "translate"),
                    s.qZA(),
                    s.qZA(),
                    s.qZA(),
                    s.qZA(),
                    s.TgZ(9, "ion-content", 2),
                    s.TgZ(10, "ion-card", 3),
                    s.TgZ(11, "div", 4),
                    s.TgZ(12, "div", 5),
                    s.TgZ(13, "gd-comp-input-date", 6),
                    s.NdJ("startDateChange", function(t) {
                        return e.form.startDate = t
                    })("endDateChange", function(t) {
                        return e.form.endDate = t
                    }),
                    s.ALo(14, "translate"),
                    s.qZA(),
                    s.TgZ(15, "div", 7),
                    s.TgZ(16, "ion-label", 8),
                    s._uU(17),
                    s.ALo(18, "translate"),
                    s.qZA(),
                    s.TgZ(19, "div", 9),
                    s.NdJ("click", function(t) {
                        return e.chooseEmployee(t)
                    }),
                    s._UZ(20, "ion-input", 10),
                    s.ALo(21, "translate"),
                    s.ALo(22, "translate"),
                    s._UZ(23, "gd-comp-icon", 11),
                    s.qZA(),
                    s.qZA(),
                    s.qZA(),
                    s.qZA(),
                    s.qZA(),
                    s.qZA()),
                    2 & t && (s.xp6(3),
                    s.Oqu(s.lcZ(4, 19, "Attendance Reprocess")),
                    s.xp6(3),
                    s.Q6J("loading", e.loadingSubmit)("disabled", 0 === e.employeeSelected.length)("hidden", e.showSpinner),
                    s.xp6(1),
                    s.Oqu(s.lcZ(8, 21, "Reprocess")),
                    s.xp6(6),
                    s.Q6J("label", s.lcZ(14, 23, "Date Range"))("option", e.optionInputDate)("format", "d MMM yyyy")("startDate", e.form.startDate)("endDate", e.form.endDate)("column", "single")("type", "multi"),
                    s.xp6(4),
                    s.hij("", s.lcZ(18, 25, "Employee"), ":"),
                    s.xp6(3),
                    s.s9C("placeholder", s.lcZ(21, 27, "Select Employee")),
                    s.hYB("value", "", s.lcZ(22, 29, "Selected"), " ", e.totalSelected, ""),
                    s.xp6(3),
                    s.Q6J("type", "svg")("name", "icon-users")("color", "medium"))
                },
                directives: [p.Gu, p.sr, g.z, m.qH, p.W2, p.PM, h.xw, m.Id, h.yH, p.Q$, p.pK, p.j9, m.pD],
                pipes: [f.X$],
                styles: [".container[_ngcontent-%COMP%]{background-color:var(--gdx-color-bgcard)}.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{flex-wrap:wrap}@media only screen and (min-width: 768px){.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{flex-direction:row!important}.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .ion-item[_ngcontent-%COMP%]{margin-top:0;margin-left:16px}}.container[_ngcontent-%COMP%]   .ion-item[_ngcontent-%COMP%]{display:flex;margin-top:16px;flex-direction:column}.container[_ngcontent-%COMP%]   .ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-bottom:4px}.container[_ngcontent-%COMP%]   .ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .ion-item[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .ion-item[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%]{border:1px solid var(--gdx-color-outline);border-radius:var(--gdx-border-radius);--padding-start: 16px;--padding-end: 16px;--padding-top: 13px;--padding-bottom: 13px;z-index:0}.container[_ngcontent-%COMP%]   .ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{--padding-top:14px;--padding-end:14px}.container[_ngcontent-%COMP%]   .ion-item[_ngcontent-%COMP%]   .input-with-icon[_ngcontent-%COMP%]{position:relative}.container[_ngcontent-%COMP%]   .ion-item[_ngcontent-%COMP%]   .input-with-icon[_ngcontent-%COMP%]   gd-comp-icon[_ngcontent-%COMP%]{position:absolute;right:12px;top:9px}"]
            }),
            t
        }
        )()
    },
    80465: function(t, e, n) {
        n.d(e, {
            f: function() {
                return A
            }
        });
        var o = n(64762)
          , i = n(75839)
          , a = n(13415)
          , r = n(47866)
          , s = n(37716)
          , l = n(55546)
          , c = n(86843)
          , d = n(12132)
          , u = n(27996)
          , p = n(4898)
          , g = n(996)
          , m = n(57196)
          , h = n(35618)
          , f = n(70850)
          , v = n(52928)
          , Z = n(3679)
          , b = n(29790);
        const x = ["fileInputAttch"];
        let A = (()=>{
            class t {
                constructor(t, e, n, o, i, a, r) {
                    this.modalCtrl = t,
                    this.businessTripService = e,
                    this.alertService = n,
                    this.modalService = o,
                    this.responsive = i,
                    this.navigationService = a,
                    this.auth = r,
                    this.purposeTypes = [],
                    this.form = {
                        purpose: {
                            purposeCode: null,
                            purposeName: ""
                        },
                        remark: "",
                        requestForName: null,
                        requestForEmpId: null,
                        requestForPhoto: null,
                        requestForUserId: null,
                        attachment: null
                    },
                    this.uploadCode = "businesstrip",
                    this.headerTitle = "Business Trip Form",
                    this.businessTripType = "Business Trip Type"
                }
                ngOnInit() {
                    var t, e, n, o, i, a;
                    this.form.requestForEmpId = null === (t = this.auth.gdAuth) || void 0 === t ? void 0 : t.empId,
                    this.form.requestForUserId = null === (e = this.auth.gdAuth) || void 0 === e ? void 0 : e.userId,
                    this.form.requestForName = null === (n = this.auth.gdAuth) || void 0 === n ? void 0 : n.fullName,
                    this.form.requestForPhoto = null === (o = this.auth.gdAuth) || void 0 === o ? void 0 : o.photo,
                    this.headerTitle = (null === (i = this.auth.gdAuth) || void 0 === i ? void 0 : i.isSF6) ? "On Duty Form" : this.headerTitle,
                    this.businessTripType = (null === (a = this.auth.gdAuth) || void 0 === a ? void 0 : a.isSF6) ? "On Duty Type" : this.businessTripType,
                    this.getOnDutyPurposeTypes()
                }
                getOnDutyPurposeTypes() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const t = yield this.businessTripService.getOnDutyPurposeTypes();
                            this.purposeTypes = t.map(t=>{
                                const e = {
                                    name: t.purposeNameEn,
                                    value: t.purposeCode
                                };
                                return Object.assign(Object.assign({}, t), e)
                            }
                            )
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        }
                    })
                }
                employeeSearch() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        const t = {
                            module: "onduty",
                            listType: "ess",
                            multipleSelect: !1,
                            empIds: [this.form.requestForEmpId]
                        }
                          , e = yield this.modalService.present(a.b, t);
                        e && e.length && (this.form.requestForName = e[0].fullName,
                        this.form.requestForEmpId = e[0].empId,
                        this.form.requestForUserId = e[0].userId,
                        this.form.requestForPhoto = e[0].photo)
                    })
                }
                deleteAttachment() {
                    this.form.attachment = null
                }
                purposeChanged(t) {
                    const e = this.purposeTypes.findIndex(e=>e.purposeCode === t);
                    this.form.purpose.purposeName = this.purposeTypes[e].purposeNameEn,
                    this.form.purpose.purposeCode = t
                }
                next() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        this.responsive.isMobile ? this.navigationService.push(i.t.BUSINESS_TRIP_FORM_DETAIL, this.form) : this.modalService.push(r.P, this.form)
                    })
                }
                takeFile() {
                    this.fileInputAttch.nativeElement.click()
                }
                checkFileSize(t) {
                    this.businessTripService.checkMaxSize(t) || this.processWebFile(t)
                }
                processWebFile(t) {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        const e = yield this.businessTripService.processWebFile(t);
                        this.form.attachment = e
                    })
                }
                checkCompanySetting() {
                    var t, e, n, o, i;
                    const a = !!(null === (t = this.auth.gdAuth) || void 0 === t ? void 0 : t.isSF6) && (null === (e = this.auth.gdAuth.companySetting) || void 0 === e ? void 0 : e.remarkisrequiredOnduty);
                    return (null === (n = this.auth.gdAuth) || void 0 === n ? void 0 : n.isSF6) ? !a || !!(null === (o = this.form) || void 0 === o ? void 0 : o.remark) : !!(null === (i = this.form) || void 0 === i ? void 0 : i.remark)
                }
                searchSelect(t) {}
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(s.Y36(l.IN),s.Y36(c.v),s.Y36(d.c),s.Y36(u.Z),s.Y36(p.k),s.Y36(g.f),s.Y36(m.V))
            }
            ,
            t.\u0275cmp = s.Xpm({
                type: t,
                selectors: [["app-business-trip-form"]],
                viewQuery: function(t, e) {
                    if (1 & t && s.Gf(x, 5),
                    2 & t) {
                        let t;
                        s.iGM(t = s.CRH()) && (e.fileInputAttch = t.first)
                    }
                },
                decls: 42,
                vars: 30,
                consts: [["slot", "start"], ["gdx-content", ""], ["type", "file", "hidden", "", 3, "change"], ["fileInputAttch", ""], [1, "container-business-form"], ["mb", "", 1, "field-box", 3, "click"], ["bold-text", "", "color", "medium", "mb", ""], ["fxLayout", "row", "fxLayoutAlign", " center", 1, "person-box"], ["pa", "", "fxFlex", ""], ["pa-10", "", "fxFlex", "none", "src", "assets/icon/icon-feather/icon-user.svg"], ["mb", "", 1, "field-box"], [3, "list", "ngModel", "placeholder", "ngModelChange", "searchingEvent"], ["pa", "", 3, "placeholder", "ngModel", "ngModelChange"], [1, "attachment-box"], ["mb-6", "", "bold-text", "", "color", "medium"], [3, "ngModel", "ngModelChange", "fileChange"], ["padding-approval-button", ""], ["fxLayout", "row", "fxLayoutAlign", "end "], ["color", "primary", 3, "disabled", "click"]],
                template: function(t, e) {
                    1 & t && (s.TgZ(0, "ion-header"),
                    s.TgZ(1, "ion-toolbar"),
                    s.TgZ(2, "ion-buttons", 0),
                    s._UZ(3, "ion-back-button"),
                    s.qZA(),
                    s.TgZ(4, "ion-title"),
                    s._uU(5),
                    s.ALo(6, "translate"),
                    s.qZA(),
                    s.qZA(),
                    s.qZA(),
                    s.TgZ(7, "ion-content"),
                    s.TgZ(8, "ion-card", 1),
                    s.TgZ(9, "input", 2, 3),
                    s.NdJ("change", function(t) {
                        return e.checkFileSize(t)
                    }),
                    s.qZA(),
                    s.TgZ(11, "div", 4),
                    s.TgZ(12, "div", 5),
                    s.NdJ("click", function() {
                        return e.employeeSearch()
                    }),
                    s.TgZ(13, "ion-label", 6),
                    s._uU(14),
                    s.ALo(15, "translate"),
                    s.qZA(),
                    s.TgZ(16, "div", 7),
                    s.TgZ(17, "ion-label", 8),
                    s._uU(18),
                    s.qZA(),
                    s._UZ(19, "svg-icon", 9),
                    s.qZA(),
                    s.qZA(),
                    s.TgZ(20, "div", 10),
                    s.TgZ(21, "ion-label", 6),
                    s._uU(22),
                    s.ALo(23, "translate"),
                    s.qZA(),
                    s.TgZ(24, "gd-comp-select", 11),
                    s.NdJ("ngModelChange", function(t) {
                        return e.form.purpose.purposeCode = t
                    })("ngModelChange", function(t) {
                        return e.purposeChanged(t)
                    })("searchingEvent", function(t) {
                        return e.searchSelect(t)
                    }),
                    s.ALo(25, "translate"),
                    s.qZA(),
                    s.qZA(),
                    s.TgZ(26, "div", 10),
                    s.TgZ(27, "ion-label", 6),
                    s._uU(28),
                    s.ALo(29, "translate"),
                    s.qZA(),
                    s.TgZ(30, "ion-textarea", 12),
                    s.NdJ("ngModelChange", function(t) {
                        return e.form.remark = t
                    }),
                    s.ALo(31, "translate"),
                    s.qZA(),
                    s.qZA(),
                    s.TgZ(32, "div", 13),
                    s.TgZ(33, "ion-label", 14),
                    s._uU(34),
                    s.ALo(35, "translate"),
                    s.qZA(),
                    s.TgZ(36, "gd-comp-upload", 15),
                    s.NdJ("ngModelChange", function(t) {
                        return e.form.attachment = t
                    })("fileChange", function(t) {
                        return e.checkFileSize(t)
                    }),
                    s.qZA(),
                    s.qZA(),
                    s.qZA(),
                    s.qZA(),
                    s.qZA(),
                    s.TgZ(37, "ion-footer", 16),
                    s.TgZ(38, "div", 17),
                    s.TgZ(39, "gd-comp-button", 18),
                    s.NdJ("click", function() {
                        return e.next()
                    }),
                    s._uU(40),
                    s.ALo(41, "translate"),
                    s.qZA(),
                    s.qZA(),
                    s.qZA()),
                    2 & t && (s.xp6(5),
                    s.Oqu(s.lcZ(6, 14, e.headerTitle)),
                    s.xp6(9),
                    s.Oqu(s.lcZ(15, 16, "Requested For")),
                    s.xp6(4),
                    s.Oqu(e.form.requestForName),
                    s.xp6(4),
                    s.Oqu(s.lcZ(23, 18, e.businessTripType)),
                    s.xp6(2),
                    s.Q6J("list", e.purposeTypes)("ngModel", e.form.purpose.purposeCode)("placeholder", s.lcZ(25, 20, "Select")),
                    s.xp6(4),
                    s.Oqu(s.lcZ(29, 22, "Remark")),
                    s.xp6(2),
                    s.Q6J("placeholder", s.lcZ(31, 24, "Tell your goal intention"))("ngModel", e.form.remark),
                    s.xp6(4),
                    s.Oqu(s.lcZ(35, 26, "Attachment")),
                    s.xp6(2),
                    s.Q6J("ngModel", e.form.attachment),
                    s.xp6(3),
                    s.Q6J("disabled", !e.form.purpose.purposeCode || !e.checkCompanySetting()),
                    s.xp6(1),
                    s.hij(" ", s.lcZ(41, 28, "Next"), ""))
                },
                directives: [l.Gu, l.sr, l.Sm, l.oU, l.cs, l.wd, l.W2, l.PM, l.Q$, h.xw, h.Wh, h.yH, f.bk, v.sJ, Z.JJ, Z.On, l.g2, l.j9, v.IL, l.fr, v.qH],
                pipes: [b.X$],
                styles: [".container-business-form[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{padding-left:0}.container-business-form[_ngcontent-%COMP%]   .person-box[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{border:1px solid var(--gdx-color-outline);border-radius:8px 0 0 8px;border-right:0;height:50px}.container-business-form[_ngcontent-%COMP%]   .person-box[_ngcontent-%COMP%]   svg-icon[_ngcontent-%COMP%]{border:1px solid var(--gdx-color-outline);border-radius:0 8px 8px 0}.container-business-form[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%]{border:1px solid var(--gdx-color-outline);border-radius:8px;--padding-start: 0;--padding-top: 0;--padding-bottom: 0;padding-bottom:0}.container-business-form[_ngcontent-%COMP%]   .field-box[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{display:block}.container-business-form[_ngcontent-%COMP%]   .field-box[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:transparent;border-bottom:1px solid var(--gdx-color-outline)}.container-business-form[_ngcontent-%COMP%]   .field-box[_ngcontent-%COMP%]   .field-section[_ngcontent-%COMP%]   .upload-btn[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);border-radius:8px;text-transform:capitalize;font-size:12px!important}.container-business-form[_ngcontent-%COMP%]   .field-box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   .img-section[_ngcontent-%COMP%]{position:relative}.container-business-form[_ngcontent-%COMP%]   .field-box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   .img-section[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{position:absolute;right:-10px;top:-10px;z-index:10}.container-business-form[_ngcontent-%COMP%]   .field-box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   .img-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;z-index:9;width:56px;height:56px;-o-object-fit:cover;object-fit:cover;border-radius:10px}.attachment-box[_ngcontent-%COMP%]{border-bottom:1px solid var(--gdx-outline-color)}.attachment-box[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{display:block}"]
            }),
            t
        }
        )()
    },
    37539: function(t, e, n) {
        n.d(e, {
            Y: function() {
                return v
            }
        });
        var o = n(64762)
          , i = n(10922)
          , a = n(18051)
          , r = n(37716)
          , s = n(55546)
          , l = n(996)
          , c = n(4898)
          , d = n(37001)
          , u = n(12132)
          , p = n(88164)
          , g = n(3679)
          , m = n(35618)
          , h = n(52928)
          , f = n(29790);
        let v = (()=>{
            class t {
                constructor(t, e, n, o, i, a) {
                    this.navParams = t,
                    this.navigationService = e,
                    this.responsive = n,
                    this.businessTripSettingService = o,
                    this.alertService = i,
                    this.eventsService = a,
                    this.titleHeader = "New Purpose Type",
                    this.isEdit = !1,
                    this.loadingSubmit = !1,
                    this.formData = {
                        purposeName: "",
                        purposeCode: ""
                    }
                }
                ngOnInit() {
                    var t;
                    const e = null !== (t = this.navigationService.getParams()) && void 0 !== t ? t : this.navParams.get("params");
                    e && (this.titleHeader = "Edit Purpose Type",
                    this.formData = e,
                    this.isEdit = !0)
                }
                save() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.loadingSubmit = !0,
                            yield this.businessTripSettingService.submitPurposeType(this.formData, this.isEdit),
                            this.eventsService.publish(a.A.LOAD_BST_MANAGE_PURPOSE_TYPE, !0),
                            yield this.alertService.presentAlertSuccess(i.V.SUCCESSFULLY_SAVED),
                            this.navigationService.back()
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        } finally {
                            this.loadingSubmit = !1
                        }
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(r.Y36(s.X1),r.Y36(l.f),r.Y36(c.k),r.Y36(d.Y),r.Y36(u.c),r.Y36(p.n))
            }
            ,
            t.\u0275cmp = r.Xpm({
                type: t,
                selectors: [["app-business-trip-new-purpose"]],
                decls: 21,
                vars: 15,
                consts: [["slot", "start"], [1, "ion-padding"], [1, "container"], [1, "form-box"], ["mb-8", "", "bold-text", "", "color", "medium"], ["id", "new-purpose", 3, "placeholder", "ngModel", "ngModelChange"], ["fxLayout", "row", "fxLayoutAlign", "center "], [3, "loading", "disabled", "click"]],
                template: function(t, e) {
                    1 & t && (r.TgZ(0, "ion-header"),
                    r.TgZ(1, "ion-toolbar"),
                    r.TgZ(2, "ion-buttons", 0),
                    r._UZ(3, "ion-back-button"),
                    r.qZA(),
                    r.TgZ(4, "ion-title"),
                    r._uU(5),
                    r.ALo(6, "translate"),
                    r.qZA(),
                    r.qZA(),
                    r.qZA(),
                    r.TgZ(7, "ion-content", 1),
                    r.TgZ(8, "div", 2),
                    r.TgZ(9, "div", 3),
                    r.TgZ(10, "ion-label", 4),
                    r._uU(11),
                    r.ALo(12, "translate"),
                    r.qZA(),
                    r.TgZ(13, "ion-input", 5),
                    r.NdJ("ngModelChange", function(t) {
                        return e.formData.purposeName = t
                    }),
                    r.ALo(14, "translate"),
                    r.qZA(),
                    r.qZA(),
                    r.qZA(),
                    r.qZA(),
                    r.TgZ(15, "ion-footer"),
                    r.TgZ(16, "ion-toolbar"),
                    r.TgZ(17, "div", 6),
                    r.TgZ(18, "gd-comp-button", 7),
                    r.NdJ("click", function() {
                        return e.save()
                    }),
                    r._uU(19),
                    r.ALo(20, "translate"),
                    r.qZA(),
                    r.qZA(),
                    r.qZA(),
                    r.qZA()),
                    2 & t && (r.xp6(5),
                    r.Oqu(r.lcZ(6, 7, e.titleHeader)),
                    r.xp6(6),
                    r.Oqu(r.lcZ(12, 9, "Purpose Name")),
                    r.xp6(2),
                    r.Q6J("placeholder", r.lcZ(14, 11, "Enter purpose name"))("ngModel", e.formData.purposeName),
                    r.xp6(5),
                    r.Q6J("loading", e.loadingSubmit)("disabled", !e.formData.purposeName),
                    r.xp6(1),
                    r.Oqu(r.lcZ(20, 13, "Save")))
                },
                directives: [s.Gu, s.sr, s.Sm, s.oU, s.cs, s.wd, s.W2, s.Q$, s.pK, s.j9, g.JJ, g.On, s.fr, m.xw, m.Wh, h.qH],
                pipes: [f.X$],
                styles: ["ion-label[_ngcontent-%COMP%]{display:block}ion-input[_ngcontent-%COMP%]{border:1px solid var(--gdx-color-outline);border-radius:8px;padding:16px}"]
            }),
            t
        }
        )()
    },
    21718: function(t, e, n) {
        n.d(e, {
            C: function() {
                return p
            }
        });
        var o = n(29790)
          , i = n(73178)
          , a = n(38583)
          , r = n(24586)
          , s = n(15566)
          , l = n(40719)
          , c = n(20145)
          , d = n(52928)
          , u = n(37716);
        let p = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = u.oAB({
                type: t
            }),
            t.\u0275inj = u.cJS({
                imports: [[o.aw, a.ez, r.D, s.o9, i.l, d.F$, c.T, l.Ft]]
            }),
            t
        }
        )()
    },
    24178: function(t, e, n) {
        n.d(e, {
            S: function() {
                return A
            }
        });
        var o = n(64762)
          , i = n(75839)
          , a = n(83422)
          , r = n(37716)
          , s = n(23920)
          , l = n(12132)
          , c = n(27019)
          , d = n(996)
          , u = n(55546)
          , p = n(38583)
          , g = n(35618)
          , m = n(52928)
          , h = n(3679)
          , f = n(29790);
        const v = ["fileInput"];
        function Z(t, e) {
            if (1 & t) {
                const t = r.EpF();
                r.TgZ(0, "gd-comp-button", 8),
                r.NdJ("click", function() {
                    return r.CHM(t),
                    r.oxw(2).download()
                }),
                r._UZ(1, "gd-comp-icon", 9),
                r._uU(2),
                r.ALo(3, "translate"),
                r.qZA()
            }
            if (2 & t) {
                const t = r.oxw(2);
                r.Q6J("loading", t.loadingBtn)("fill", "outline"),
                r.xp6(1),
                r.Q6J("type", "svg")("name", "icon-download-cloud")("color", "primary")("size", "20"),
                r.xp6(1),
                r.hij(" ", r.lcZ(3, 7, "Download Holiday Data"), " ")
            }
        }
        function b(t, e) {
            if (1 & t) {
                const t = r.EpF();
                r.TgZ(0, "div", 3),
                r.YNc(1, Z, 4, 9, "gd-comp-button", 4),
                r.TgZ(2, "div", 5),
                r.TgZ(3, "ion-label", 6),
                r._uU(4),
                r.ALo(5, "translate"),
                r.qZA(),
                r.TgZ(6, "gd-comp-upload", 7),
                r.NdJ("ngModelChange", function(e) {
                    return r.CHM(t),
                    r.oxw().file = e
                })("fileChange", function(e) {
                    return r.CHM(t),
                    r.oxw().upload(e)
                }),
                r.qZA(),
                r.qZA(),
                r.qZA()
            }
            if (2 & t) {
                const t = r.oxw();
                r.xp6(1),
                r.Q6J("ngIf", !t.isError),
                r.xp6(3),
                r.Oqu(r.lcZ(5, 4, "Upload holiday data")),
                r.xp6(2),
                r.Q6J("ngModel", t.file)("uploadProgress", t.uploadProgress)
            }
        }
        function x(t, e) {
            if (1 & t) {
                const t = r.EpF();
                r.TgZ(0, "gd-comp-error-state", 10),
                r.NdJ("result", function(e) {
                    return r.CHM(t),
                    r.oxw().errorAction(e)
                }),
                r.qZA()
            }
        }
        let A = (()=>{
            class t {
                constructor(t, e, n, o) {
                    this.holidayService = t,
                    this.alertService = e,
                    this.loadingService = n,
                    this.navigationService = o,
                    this.uploadProgress = -1,
                    this.isError = !1,
                    this.loadingBtn = !1
                }
                ngOnInit() {}
                download() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        yield this.holidayService.downloadTemplate()
                    })
                }
                errorAction(t) {}
                upload(t) {
                    this.processWebFile(t)
                }
                processWebFile(t) {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const e = yield this.holidayService.processWebFile(t);
                            if (!e.cancelled) {
                                yield this.loadingService.showLoading();
                                const t = yield this.holidayService.uploadTemplate(e);
                                this.navigationService.pushSide(a.Y, i.t.HOLIDAY_RESULT_UPLOAD, null == t ? void 0 : t.data)
                            }
                        } catch (e) {
                            this.alertService.presentAlertError(e)
                        } finally {
                            this.loadingService.hideLoading()
                        }
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(r.Y36(s.U),r.Y36(l.c),r.Y36(c.b),r.Y36(d.f))
            }
            ,
            t.\u0275cmp = r.Xpm({
                type: t,
                selectors: [["app-holiday-data-upload"]],
                viewQuery: function(t, e) {
                    if (1 & t && r.Gf(v, 5),
                    2 & t) {
                        let t;
                        r.iGM(t = r.CRH()) && (e.fileInput = t.first)
                    }
                },
                decls: 8,
                vars: 5,
                consts: [[1, "ion-padding"], ["fxLayout", "column", "fxLayoutGap", "16px", 4, "ngIf"], [3, "result", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "16px"], [3, "loading", "fill", "click", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "8px"], ["bold-text", ""], [3, "ngModel", "uploadProgress", "ngModelChange", "fileChange"], [3, "loading", "fill", "click"], [3, "type", "name", "color", "size"], [3, "result"]],
                template: function(t, e) {
                    1 & t && (r.TgZ(0, "ion-header"),
                    r.TgZ(1, "ion-toolbar"),
                    r.TgZ(2, "ion-title"),
                    r._uU(3),
                    r.ALo(4, "translate"),
                    r.qZA(),
                    r.qZA(),
                    r.qZA(),
                    r.TgZ(5, "ion-content", 0),
                    r.YNc(6, b, 7, 6, "div", 1),
                    r.YNc(7, x, 1, 0, "gd-comp-error-state", 2),
                    r.qZA()),
                    2 & t && (r.xp6(3),
                    r.Oqu(r.lcZ(4, 3, "Upload Holiday Data")),
                    r.xp6(3),
                    r.Q6J("ngIf", !e.isError),
                    r.xp6(1),
                    r.Q6J("ngIf", e.isError))
                },
                directives: [u.Gu, u.sr, u.wd, u.W2, p.O5, g.xw, g.SQ, u.Q$, m.IL, h.JJ, h.On, m.qH, m.pD, m.K$],
                pipes: [f.X$],
                styles: ["gd-comp-icon[_ngcontent-%COMP%]{margin-right:4px}"]
            }),
            t
        }
        )()
    },
    83422: function(t, e, n) {
        n.d(e, {
            Y: function() {
                return m
            }
        });
        var o = n(18051)
          , i = n(37716)
          , a = n(996)
          , r = n(55546)
          , s = n(88164)
          , l = n(35618)
          , c = n(38583)
          , d = n(29790);
        function u(t, e) {
            if (1 & t && (i.TgZ(0, "div", 12),
            i.TgZ(1, "p", 13),
            i._uU(2),
            i.ALo(3, "translate"),
            i.qZA(),
            i.qZA()),
            2 & t) {
                const t = i.oxw(2).$implicit;
                i.xp6(2),
                i.Oqu(i.lcZ(3, 1, null == t ? null : t.fail))
            }
        }
        function p(t, e) {
            if (1 & t && (i.TgZ(0, "div"),
            i.TgZ(1, "div", 9),
            i.TgZ(2, "ion-label", 10),
            i._uU(3),
            i.ALo(4, "translate"),
            i.qZA(),
            i.qZA(),
            i.YNc(5, u, 4, 3, "div", 11),
            i.qZA()),
            2 & t) {
                const t = i.oxw().$implicit;
                i.xp6(3),
                i.AsE("", i.lcZ(4, 3, "No"), ": ", null == t ? null : t.no, ""),
                i.xp6(2),
                i.Q6J("ngIf", null == t ? null : t.fail)
            }
        }
        function g(t, e) {
            if (1 & t && (i.ynx(0),
            i.YNc(1, p, 6, 5, "div", 8),
            i.BQk()),
            2 & t) {
                const t = e.$implicit;
                i.xp6(1),
                i.Q6J("ngIf", !t.success)
            }
        }
        let m = (()=>{
            class t {
                constructor(t, e, n) {
                    this.navigationService = t,
                    this.navParams = e,
                    this.eventsService = n,
                    this.params = [],
                    this.totalSuccess = 0,
                    this.totalFailed = 0
                }
                ngOnInit() {
                    var t, e, n, o;
                    this.params = null !== (t = this.navigationService.getParams()) && void 0 !== t ? t : this.navParams.get("params"),
                    (null === (e = this.params) || void 0 === e ? void 0 : e.length) && (this.totalSuccess = null === (n = this.params.filter(t=>t.success)) || void 0 === n ? void 0 : n.length,
                    this.totalFailed = null === (o = this.params.filter(t=>!t.success)) || void 0 === o ? void 0 : o.length)
                }
                ngOnDestroy() {
                    this.totalSuccess > 0 && this.eventsService.publish(o.A.LOAD_HOLIDAY, !0)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(i.Y36(a.f),i.Y36(r.X1),i.Y36(s.n))
            }
            ,
            t.\u0275cmp = i.Xpm({
                type: t,
                selectors: [["app-holiday-result-upload"]],
                decls: 20,
                vars: 12,
                consts: [["slot", "start"], ["gdx-content", ""], ["mb-4", "", "fxLayout", "row", "fxLayoutGap", "10px", "fxLayoutAlign", " center", 1, "box-success"], ["name", "cloud-done-outline"], ["item-content", "", "fxFlex", ""], ["mb-16", "", "fxLayout", "row", "fxLayoutGap", "10px", "fxLayoutAlign", " center", 1, "box-error"], ["name", "alert-circle-outline"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["fxLayout", "column", 1, "wrap-box"], ["no-margin", ""], ["class", "message-box", "mt-16", "", 4, "ngIf"], ["mt-16", "", 1, "message-box"], [1, "label-message"]],
                template: function(t, e) {
                    1 & t && (i.TgZ(0, "ion-header"),
                    i.TgZ(1, "ion-toolbar"),
                    i.TgZ(2, "ion-buttons", 0),
                    i._UZ(3, "ion-back-button"),
                    i.qZA(),
                    i.TgZ(4, "ion-title"),
                    i._uU(5),
                    i.ALo(6, "translate"),
                    i.qZA(),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(7, "ion-content"),
                    i.TgZ(8, "ion-card", 1),
                    i.TgZ(9, "div", 2),
                    i._UZ(10, "ion-icon", 3),
                    i.TgZ(11, "ion-label", 4),
                    i._uU(12),
                    i.ALo(13, "translate"),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(14, "div", 5),
                    i._UZ(15, "ion-icon", 6),
                    i.TgZ(16, "ion-label", 4),
                    i._uU(17),
                    i.ALo(18, "translate"),
                    i.qZA(),
                    i.qZA(),
                    i.YNc(19, g, 2, 1, "ng-container", 7),
                    i.qZA(),
                    i.qZA()),
                    2 & t && (i.xp6(5),
                    i.Oqu(i.lcZ(6, 6, "Result Upload")),
                    i.xp6(7),
                    i.AsE("", i.lcZ(13, 8, "Success"), ": ", e.totalSuccess, ""),
                    i.xp6(5),
                    i.AsE("", i.lcZ(18, 10, "Failed"), ": ", e.totalFailed, ""),
                    i.xp6(2),
                    i.Q6J("ngForOf", e.params))
                },
                directives: [r.Gu, r.sr, r.Sm, r.oU, r.cs, r.wd, r.W2, r.PM, l.xw, l.SQ, l.Wh, r.gu, r.Q$, l.yH, c.sg, c.O5],
                pipes: [d.X$],
                styles: [".box-success[_ngcontent-%COMP%]{padding:6px 10px}.box-success[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-size:24px}.box-error[_ngcontent-%COMP%]{background-color:rgba(var(--ion-color-danger-rgb),.2);padding:6px 10px;border-radius:4px}.box-error[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-danger);font-size:24px}.message-box[_ngcontent-%COMP%]{background-color:rgba(var(--ion-color-danger-rgb),.1);border-left:4px solid var(--ion-color-danger);padding:6px 10px;border-radius:4px;margin-bottom:12px}"]
            }),
            t
        }
        )()
    },
    10725: function(t, e, n) {
        n.d(e, {
            C: function() {
                return b
            }
        });
        var o = n(64762)
          , i = n(73826)
          , a = n(13415)
          , r = n(61158)
          , s = n(75839)
          , l = n(37716)
          , c = n(27996)
          , d = n(64586)
          , u = n(12132)
          , p = n(996)
          , g = n(55546)
          , m = n(65744)
          , h = n(35618)
          , f = n(52928)
          , v = n(3679)
          , Z = n(29790);
        let b = (()=>{
            class t {
                constructor(t, e, n, o) {
                    this.modalService = t,
                    this.leaveBalanceMaintenanceService = e,
                    this.alertService = n,
                    this.navigationService = o,
                    this.leaveCode = "",
                    this.employeeSelected = [],
                    this.listLeaveType = [],
                    this.dropDownLeaveType = [],
                    this.showSpinner = !1,
                    this.totalSelected = 0
                }
                ngOnInit() {
                    this.getLeaveType()
                }
                ngOnDestroy() {
                    this.leaveBalanceMaintenanceService.dispose()
                }
                getLeaveType() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.showSpinner = !0;
                            const t = yield this.leaveBalanceMaintenanceService.getLeaveType();
                            this.dropDownLeaveType = t.map(t=>({
                                name: t.leavenameEn,
                                value: t.leaveCode
                            }))
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        } finally {
                            this.showSpinner = !1
                        }
                    })
                }
                browse() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        const t = this.employeeSelected.map(t=>t.empId);
                        this.navigationService.push(s.t.LEAVE_BALANCE_MAINTENANCE_LIST, {
                            leaveCode: this.leaveCode,
                            empIds: t
                        })
                    })
                }
                next() {
                    this.modalService.present(r.Q)
                }
                handleSelectedData(t) {
                    this.employeeSelected = t
                }
                chooseEmployee(t) {
                    var e;
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        const t = {
                            module: i.Dz.LEAVE,
                            multipleSelect: !0,
                            listType: "ess",
                            type: "MODAL",
                            employeeSelected: null !== (e = this.employeeSelected) && void 0 !== e ? e : []
                        }
                          , n = yield this.modalService.present(a.b, t, "transparent-backdrop");
                        (null == n ? void 0 : n.length) && (this.employeeSelected = n,
                        this.totalSelected = null == n ? void 0 : n.length)
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(l.Y36(c.Z),l.Y36(d.l),l.Y36(u.c),l.Y36(p.f))
            }
            ,
            t.\u0275cmp = l.Xpm({
                type: t,
                selectors: [["app-leave-balance-maintenance-index"]],
                decls: 30,
                vars: 33,
                consts: [["responsive", ""], ["gdx-content", ""], [1, "container"], ["fxLayout", "row", "fxLayoutAlign", "center center", 3, "hidden"], [3, "color"], ["fxLayout", "row", "fxLayoutGap", "16px", 3, "hidden"], ["fxLayout", "column", "fxLayoutGap", "8px", "fxFlex", ""], ["bold-text", "", "color", "medium"], [3, "list", "placeholder", "ngModel", "showSearchValue", "ngModelChange"], ["fxFlex", "", "fxLayout", "column", "fxLayoutGap", "8px", 1, "ion-item"], ["tappable", "", 1, "input-with-icon", 3, "click"], ["readonly", "", 3, "placeholder", "value"], [3, "type", "name", "color"], ["responsive", "regular", "pt-6", "", "pb-6", ""], [3, "expand", "disabled", "click"]],
                template: function(t, e) {
                    1 & t && (l.TgZ(0, "ion-header"),
                    l.TgZ(1, "ion-toolbar"),
                    l.TgZ(2, "app-title"),
                    l._uU(3),
                    l.ALo(4, "translate"),
                    l.qZA(),
                    l.qZA(),
                    l.qZA(),
                    l.TgZ(5, "ion-content", 0),
                    l.TgZ(6, "ion-card", 1),
                    l.TgZ(7, "div", 2),
                    l.TgZ(8, "div", 3),
                    l._UZ(9, "gd-comp-loading", 4),
                    l.qZA(),
                    l.TgZ(10, "div", 5),
                    l.TgZ(11, "div", 6),
                    l.TgZ(12, "ion-label", 7),
                    l._uU(13),
                    l.ALo(14, "translate"),
                    l.qZA(),
                    l.TgZ(15, "gd-comp-select", 8),
                    l.NdJ("ngModelChange", function(t) {
                        return e.leaveCode = t
                    }),
                    l.ALo(16, "translate"),
                    l.qZA(),
                    l.qZA(),
                    l.TgZ(17, "div", 9),
                    l.TgZ(18, "ion-label", 7),
                    l._uU(19),
                    l.ALo(20, "translate"),
                    l.qZA(),
                    l.TgZ(21, "div", 10),
                    l.NdJ("click", function(t) {
                        return e.chooseEmployee(t)
                    }),
                    l._UZ(22, "ion-input", 11),
                    l.ALo(23, "translate"),
                    l.ALo(24, "translate"),
                    l._UZ(25, "gd-comp-icon", 12),
                    l.qZA(),
                    l.qZA(),
                    l.qZA(),
                    l.qZA(),
                    l.qZA(),
                    l.qZA(),
                    l.TgZ(26, "ion-footer", 13),
                    l.TgZ(27, "gd-comp-button", 14),
                    l.NdJ("click", function() {
                        return e.browse()
                    }),
                    l._uU(28),
                    l.ALo(29, "translate"),
                    l.qZA(),
                    l.qZA()),
                    2 & t && (l.xp6(3),
                    l.Oqu(l.lcZ(4, 19, "Leave Balance Maintenance")),
                    l.xp6(5),
                    l.Q6J("hidden", !e.showSpinner),
                    l.xp6(1),
                    l.Q6J("color", "medium"),
                    l.xp6(1),
                    l.Q6J("hidden", e.showSpinner),
                    l.xp6(3),
                    l.Oqu(l.lcZ(14, 21, "Leave/Permit Type")),
                    l.xp6(2),
                    l.Q6J("list", e.dropDownLeaveType)("placeholder", l.lcZ(16, 23, "Select"))("ngModel", e.leaveCode)("showSearchValue", !0),
                    l.xp6(4),
                    l.hij("", l.lcZ(20, 25, "Employee"), ":"),
                    l.xp6(3),
                    l.s9C("placeholder", l.lcZ(23, 27, "Select Employee")),
                    l.hYB("value", "", l.lcZ(24, 29, "Selected"), " ", e.totalSelected, ""),
                    l.xp6(3),
                    l.Q6J("type", "svg")("name", "icon-users")("color", "medium"),
                    l.xp6(2),
                    l.Q6J("expand", "block")("disabled", !e.leaveCode || !e.employeeSelected.length),
                    l.xp6(1),
                    l.hij(" ", l.lcZ(29, 31, "Apply"), ""))
                },
                directives: [g.Gu, g.sr, m.z, g.W2, g.PM, h.xw, h.Wh, f.Kn, h.SQ, h.yH, g.Q$, f.sJ, v.JJ, v.On, g.pK, g.j9, f.pD, g.fr, f.qH],
                pipes: [Z.X$],
                styles: ["[_nghost-%COMP%]     app-selection .card-box{height:calc(90vh - 270px)!important;position:relative!important;border-radius:0}[_nghost-%COMP%]     gdx-selection .card-box{height:calc(90vh - 270px)!important;position:relative!important;border-radius:0}.ion-item[_ngcontent-%COMP%]{display:flex;flex-direction:column}.ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-bottom:4px}.ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{--padding-top:16px;--padding-bottom:16px;border:1px solid var(--gdx-color-outline);border-radius:var(--gdx-border-radius);--padding-start: 16px;--padding-end: 16px;z-index:0}.ion-item[_ngcontent-%COMP%]   .input-with-icon[_ngcontent-%COMP%]{position:relative}.ion-item[_ngcontent-%COMP%]   .input-with-icon[_ngcontent-%COMP%]   gd-comp-icon[_ngcontent-%COMP%]{position:absolute;right:12px;top:14px}"]
            }),
            t
        }
        )()
    },
    16142: function(t, e, n) {
        n.d(e, {
            q: function() {
                return C
            }
        });
        var o = n(64762)
          , i = n(73291)
          , a = n(75839)
          , r = n(37716)
          , s = n(84025)
          , l = n(4062)
          , c = n(12132)
          , d = n(4898)
          , u = n(99415)
          , p = n(57196)
          , g = n(996)
          , m = n(27996)
          , h = n(55546)
          , f = n(65744)
          , v = n(38583)
          , Z = n(88030)
          , b = n(52928)
          , x = n(3679)
          , A = n(29790);
        const y = ["fileInput"]
          , T = function(t) {
            return {
                "text-align": t
            }
        };
        let C = (()=>{
            class t {
                constructor(t, e, n, o, i, a, r, s) {
                    this.leaveService = t,
                    this.fileService = e,
                    this.alertService = n,
                    this.responsive = o,
                    this.route = i,
                    this.auth = a,
                    this.navigationService = r,
                    this.modalService = s,
                    this.loadingDownload = !1,
                    this.loadingUpload = !1,
                    this.leaveOptions = [],
                    this.uploadProgress = -1,
                    this.indexPage = !1
                }
                ngOnInit() {
                    this.route.params.subscribe(()=>(0,
                    o.mG)(this, void 0, void 0, function*() {
                        var t, e;
                        this.isSF = null === (e = null === (t = this.auth) || void 0 === t ? void 0 : t.gdAuth) || void 0 === e ? void 0 : e.isSF6,
                        this.indexPage = !(yield this.modalService.isPresent())
                    })),
                    this.getLeaveType()
                }
                download() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.loadingDownload = !0,
                            yield this.leaveService.downloadLeaveSetup(this.leaveCode)
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        } finally {
                            this.loadingDownload = !1
                        }
                    })
                }
                processWebFile(t) {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.loadingUpload = !0;
                            const e = a.t.LEAVE_HISTORY_UPLOAD_RESULT
                              , n = yield this.fileService.processWebFile(t);
                            this.uploadProgress = 50;
                            const o = yield this.leaveService.uploadLeaveSetup(n.sourceFile, this.leaveCode);
                            this.uploadProgress = 100,
                            this.navigationService.pushSide(i.k, e, o, {
                                indexPage: this.indexPage
                            })
                        } catch (e) {
                            this.alertService.presentAlertError(e)
                        } finally {
                            this.uploadProgress = -1,
                            this.loadingUpload = !1
                        }
                    })
                }
                openPageResult() {}
                upload() {
                    this.fileInput.nativeElement.click()
                }
                getLeaveType() {
                    var t, e, n, i;
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const o = null === (e = null === (t = this.auth) || void 0 === t ? void 0 : t.gdAuth) || void 0 === e ? void 0 : e.isSF6
                              , a = null === (i = null === (n = this.auth) || void 0 === n ? void 0 : n.gdAuth) || void 0 === i ? void 0 : i.empId;
                            this.leaveOptions = yield this.leaveService.getLeaveTypeForOptions(a, o)
                        } catch (o) {
                            this.alertService.presentAlertError(o)
                        }
                    })
                }
                checkFileSize(t) {
                    this.processWebFile(t)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(r.Y36(s.e),r.Y36(l.I),r.Y36(c.c),r.Y36(d.k),r.Y36(u.gz),r.Y36(p.V),r.Y36(g.f),r.Y36(m.Z))
            }
            ,
            t.\u0275cmp = r.Xpm({
                type: t,
                selectors: [["app-leave-history-upload"]],
                viewQuery: function(t, e) {
                    if (1 & t && r.Gf(y, 5),
                    2 & t) {
                        let t;
                        r.iGM(t = r.CRH()) && (e.fileInput = t.first)
                    }
                },
                decls: 23,
                vars: 24,
                consts: [["slot", "start"], [1, "ion-padding"], ["gdx-content", ""], [1, "container-leave-history-upload"], ["color", "medium", "mb-16", "", 3, "ngStyle"], [3, "infiniteLoading", "placeholder", "list", "ngModel", "ngModelChange"], ["fill", "outline", "color", "primary", 3, "loading", "click"], ["mt", "", 1, "upload-box"], ["mb-10", "", "large-text", "", "bold-text", "", "color", "dark"], [3, "ngModel", "uploadProgress", "ngModelChange", "fileChange"]],
                template: function(t, e) {
                    1 & t && (r.TgZ(0, "ion-header"),
                    r.TgZ(1, "ion-toolbar"),
                    r.TgZ(2, "ion-buttons", 0),
                    r._UZ(3, "ion-back-button"),
                    r.qZA(),
                    r.TgZ(4, "app-title"),
                    r._uU(5),
                    r.ALo(6, "translate"),
                    r.qZA(),
                    r.qZA(),
                    r.qZA(),
                    r.TgZ(7, "ion-content", 1),
                    r.TgZ(8, "ion-card", 2),
                    r.TgZ(9, "div", 3),
                    r.TgZ(10, "ion-label", 4),
                    r._uU(11),
                    r.ALo(12, "translate"),
                    r.qZA(),
                    r.TgZ(13, "gd-comp-select", 5),
                    r.NdJ("ngModelChange", function(t) {
                        return e.leaveCode = t
                    }),
                    r.ALo(14, "translate"),
                    r.qZA(),
                    r.TgZ(15, "gd-comp-button", 6),
                    r.NdJ("click", function() {
                        return e.download()
                    }),
                    r._uU(16),
                    r.ALo(17, "translate"),
                    r.qZA(),
                    r.TgZ(18, "div", 7),
                    r.TgZ(19, "ion-label", 8),
                    r._uU(20),
                    r.ALo(21, "translate"),
                    r.qZA(),
                    r.TgZ(22, "gd-comp-upload", 9),
                    r.NdJ("ngModelChange", function(t) {
                        return e.attachment = t
                    })("fileChange", function(t) {
                        return e.checkFileSize(t)
                    }),
                    r.qZA(),
                    r.qZA(),
                    r.qZA(),
                    r.qZA(),
                    r.qZA()),
                    2 & t && (r.xp6(5),
                    r.Oqu(r.lcZ(6, 12, "Leave History Upload")),
                    r.xp6(5),
                    r.Q6J("ngStyle", r.VKq(22, T, e.responsive.isMobile ? "center" : "unset")),
                    r.xp6(1),
                    r.hij(" ", r.lcZ(12, 14, "Press DOWNLOAD TEMPLATE to download document template that can you fill for setup leave history and press UPLOAD for upload document had you filled"), " "),
                    r.xp6(2),
                    r.Q6J("infiniteLoading", !0)("placeholder", r.lcZ(14, 16, "Select"))("list", e.leaveOptions)("ngModel", e.leaveCode),
                    r.xp6(2),
                    r.Q6J("loading", e.loadingDownload),
                    r.xp6(1),
                    r.hij(" ", r.lcZ(17, 18, "Download Template"), ""),
                    r.xp6(4),
                    r.Oqu(r.lcZ(21, 20, "Upload Files")),
                    r.xp6(2),
                    r.Q6J("ngModel", e.attachment)("uploadProgress", e.uploadProgress))
                },
                directives: [h.Gu, h.sr, h.Sm, h.oU, h.cs, f.z, h.W2, h.PM, h.Q$, v.PC, Z.Zl, b.sJ, x.JJ, x.On, b.qH, b.IL],
                pipes: [A.X$],
                styles: [".container-leave-history-upload[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%]   gd-comp-button[_ngcontent-%COMP%]{width:100%}.container-leave-history-upload[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{display:block}"]
            }),
            t
        }
        )()
    },
    29689: function(t, e, n) {
        n.r(e),
        n.d(e, {
            RequestShiftScheduleListPageModule: function() {
                return m
            }
        });
        var o = n(38583)
          , i = n(3679)
          , a = n(55546)
          , r = n(99415)
          , s = n(64864)
          , l = n(37716);
        const c = [{
            path: "",
            component: s.S
        }];
        let d = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[r.Bz.forChild(c)], r.Bz]
            }),
            t
        }
        )();
        var u = n(15566)
          , p = n(29790)
          , g = n(52928);
        let m = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[o.ez, i.u5, a.Pc, d, u.o9, g.F$, p.aw, g.U9, g.R$, g.h4, g.wb]]
            }),
            t
        }
        )()
    },
    64909: function(t, e, n) {
        n.d(e, {
            V: function() {
                return m
            }
        });
        var o = n(64762)
          , i = n(10922)
          , a = n(18051)
          , r = n(37716)
          , s = n(996)
          , l = n(55546)
          , c = n(12132)
          , d = n(25441)
          , u = n(88164)
          , p = n(29790)
          , g = n(52928);
        let m = (()=>{
            class t {
                constructor(t, e, n, o, i, a) {
                    this.navigationService = t,
                    this.navParams = e,
                    this.alertService = n,
                    this.shiftPatternService = o,
                    this.eventsService = i,
                    this.translateService = a,
                    this.headerTable = [{
                        label: this.translateService.instant("Day"),
                        key: "day",
                        type: "text",
                        lock: !0
                    }, {
                        label: "",
                        key: "time",
                        type: "select",
                        lock: !0,
                        justifyContent: "end"
                    }],
                    this.loadingSave = !1,
                    this.disableBtn = !0,
                    this.bodyList = [],
                    this.params = {
                        shiftName: "",
                        shiftGroupCode: "",
                        ttarshiftgroupdailys: [],
                        shiftDailyList: []
                    }
                }
                ngOnInit() {
                    var t, e, n;
                    this.params = null !== (t = this.navParams.get("params")) && void 0 !== t ? t : this.navigationService.getParams(),
                    this.bodyList = this.shiftPatternService.createContentTableDetailShift(null === (e = this.params) || void 0 === e ? void 0 : e.ttarshiftgroupdailys, null === (n = this.params) || void 0 === n ? void 0 : n.shiftDailyList)
                }
                action(t) {
                    var e, n, o, i;
                    try {
                        this.disableBtn = !1;
                        const a = null == t ? void 0 : t.data;
                        this.params.ttarshiftgroupdailys[null == a ? void 0 : a.id].ttamshiftdaily.shiftdailycode = null == t ? void 0 : t.dataPopover,
                        this.params.ttarshiftgroupdailys[null == a ? void 0 : a.id].ttamshiftdaily.starttime = null === (n = null === (e = null == a ? void 0 : a.time) || void 0 === e ? void 0 : e.selected) || void 0 === n ? void 0 : n.startTime,
                        this.params.ttarshiftgroupdailys[null == a ? void 0 : a.id].ttamshiftdaily.endtime = null === (i = null === (o = null == a ? void 0 : a.time) || void 0 === o ? void 0 : o.selected) || void 0 === i ? void 0 : i.endTime
                    } catch (a) {
                        console.log("TCL: error", a)
                    }
                }
                save() {
                    var t, e, n, r, s;
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const o = [];
                            for (const i of null === (t = this.params) || void 0 === t ? void 0 : t.ttarshiftgroupdailys)
                                o.push({
                                    shiftdailycode: null === (e = i.ttamshiftdaily) || void 0 === e ? void 0 : e.shiftdailycode,
                                    shiftstarttime: String(null === (n = i.ttamshiftdaily) || void 0 === n ? void 0 : n.starttime),
                                    shiftendtime: String(null === (r = i.ttamshiftdaily) || void 0 === r ? void 0 : r.endtime)
                                });
                            const l = {
                                shiftgroupcode: null === (s = this.params) || void 0 === s ? void 0 : s.shiftGroupCode,
                                ttarshiftgroupdailys: o
                            };
                            this.loadingSave = !0,
                            this.disableBtn = !0,
                            yield this.shiftPatternService.editShiftPattern(l),
                            this.eventsService.publish(a.A.LOAD_SHIFT_PATTERN, !0),
                            this.alertService.presentAlertSuccess(i.V.SUCCESSFULLY_UPDATED)
                        } catch (o) {
                            this.alertService.presentAlertError(o)
                        } finally {
                            this.loadingSave = !1,
                            this.disableBtn = !1
                        }
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(r.Y36(s.f),r.Y36(l.X1),r.Y36(c.c),r.Y36(d.y),r.Y36(u.n),r.Y36(p.sK))
            }
            ,
            t.\u0275cmp = r.Xpm({
                type: t,
                selectors: [["app-shift-schedule-pattern-detail"]],
                decls: 9,
                vars: 8,
                consts: [["slot", "end", 3, "loading", "disabled", "click"], [1, "ion-padding"], [3, "headerTable", "bodyTable", "callPopoverAction"]],
                template: function(t, e) {
                    1 & t && (r.TgZ(0, "ion-header"),
                    r.TgZ(1, "ion-toolbar"),
                    r.TgZ(2, "ion-title"),
                    r._uU(3),
                    r.qZA(),
                    r.TgZ(4, "gd-comp-button", 0),
                    r.NdJ("click", function() {
                        return e.save()
                    }),
                    r._uU(5),
                    r.ALo(6, "translate"),
                    r.qZA(),
                    r.qZA(),
                    r.qZA(),
                    r.TgZ(7, "ion-content", 1),
                    r.TgZ(8, "gd-comp-table", 2),
                    r.NdJ("callPopoverAction", function(t) {
                        return e.action(t)
                    }),
                    r.qZA(),
                    r.qZA()),
                    2 & t && (r.xp6(3),
                    r.Oqu(null == e.params ? null : e.params.shiftName),
                    r.xp6(1),
                    r.Q6J("loading", e.loadingSave)("disabled", e.disableBtn),
                    r.xp6(1),
                    r.Oqu(r.lcZ(6, 6, "Save")),
                    r.xp6(3),
                    r.Q6J("headerTable", e.headerTable)("bodyTable", e.bodyList))
                },
                directives: [l.Gu, l.sr, l.wd, g.qH, l.W2, g.xh],
                pipes: [p.X$],
                styles: [""]
            }),
            t
        }
        )()
    },
    67247: function(t, e, n) {
        n.d(e, {
            J: function() {
                return f
            }
        });
        var o = n(64762)
          , i = n(37716)
          , a = n(39209)
          , r = n(12132)
          , s = n(996)
          , l = n(22168)
          , c = n(29790)
          , d = n(55546)
          , u = n(35618)
          , p = n(3679)
          , g = n(38583)
          , m = n(52928);
        function h(t, e) {
            if (1 & t) {
                const t = i.EpF();
                i.TgZ(0, "div"),
                i.TgZ(1, "gd-comp-table", 10),
                i.NdJ("callbackAction", function(e) {
                    return i.CHM(t),
                    i.oxw().action(e)
                }),
                i.qZA(),
                i.qZA()
            }
            if (2 & t) {
                const t = i.oxw();
                i.xp6(1),
                i.Q6J("headerTable", t.headerTable)("bodyTable", t.bodyList)
            }
        }
        let f = (()=>{
            class t {
                constructor(t, e, n, o, i) {
                    this.shiftScheduleService = t,
                    this.alertService = e,
                    this.navigationService = n,
                    this.sfFormatDatePipe = o,
                    this.translateService = i,
                    this.shiftDailies = [],
                    this.quickMode = !1,
                    this.headerTable = [{
                        label: this.translateService.instant("Shift Name"),
                        key: "shiftName",
                        type: "text",
                        lock: !0
                    }, {
                        label: this.translateService.instant("Time"),
                        key: "time",
                        type: "text",
                        lock: !0
                    }, {
                        label: this.translateService.instant("Color"),
                        key: "shiftColor",
                        type: "color",
                        lock: !0
                    }, {
                        label: "",
                        key: "btn",
                        type: "button",
                        lock: !0
                    }],
                    this.bodyList = []
                }
                ngOnInit() {
                    this.getShiftDailiesListing()
                }
                getShiftDailiesListing() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.shiftDailies = yield this.shiftScheduleService.getShiftDailiesListing(),
                            this.shiftDailies.forEach(t=>{
                                this.bodyList.push(Object.assign({
                                    shiftName: t.remark,
                                    time: this.sfFormatDatePipe.transform(t.starttime, "HH:mm") + " - " + this.sfFormatDatePipe.transform(t.endtime, "HH:mm"),
                                    shiftColor: {
                                        color: t.color,
                                        label: ""
                                    },
                                    btn: [{
                                        label: this.translateService.instant("Pick"),
                                        iconUrl: "",
                                        buttonType: "pick",
                                        customFunction: !0,
                                        color: "primary"
                                    }]
                                }, t))
                            }
                            )
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        }
                    })
                }
                chooseShift(t) {
                    this.shiftScheduleService.shiftQuickMode = t,
                    this.navigationService.back()
                }
                action(t) {
                    console.log(t),
                    "pick" === t.btn.buttonType && this.chooseShift(t.data)
                }
                viewDetail() {}
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(i.Y36(a.V),i.Y36(r.c),i.Y36(s.f),i.Y36(l.I),i.Y36(c.sK))
            }
            ,
            t.\u0275cmp = i.Xpm({
                type: t,
                selectors: [["app-shift-schedule-pick-shift"]],
                decls: 21,
                vars: 11,
                consts: [["slot", "start"], ["gdx-content", ""], [1, "content"], ["mb", "", 1, "warning-box"], ["fxLayout", "column", 1, "top"], ["bold", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "title"], ["slot", "end", 3, "ngModel", "ngModelChange"], [4, "ngIf"], [3, "headerTable", "bodyTable", "callbackAction"]],
                template: function(t, e) {
                    1 & t && (i.TgZ(0, "ion-header"),
                    i.TgZ(1, "ion-toolbar"),
                    i.TgZ(2, "ion-buttons", 0),
                    i._UZ(3, "ion-back-button"),
                    i.qZA(),
                    i.TgZ(4, "ion-title"),
                    i._uU(5),
                    i.ALo(6, "translate"),
                    i.qZA(),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(7, "ion-content"),
                    i.TgZ(8, "ion-card", 1),
                    i.TgZ(9, "div", 2),
                    i._UZ(10, "div", 3),
                    i.TgZ(11, "div", 4),
                    i.TgZ(12, "ion-label", 5),
                    i._uU(13),
                    i.ALo(14, "translate"),
                    i.qZA(),
                    i.TgZ(15, "div", 6),
                    i.TgZ(16, "ion-label", 7),
                    i._uU(17),
                    i.ALo(18, "translate"),
                    i.qZA(),
                    i.TgZ(19, "ion-toggle", 8),
                    i.NdJ("ngModelChange", function(t) {
                        return e.shiftScheduleService.quickMode = t
                    }),
                    i.qZA(),
                    i.qZA(),
                    i.qZA(),
                    i.YNc(20, h, 2, 2, "div", 9),
                    i.qZA(),
                    i.qZA(),
                    i.qZA()),
                    2 & t && (i.xp6(5),
                    i.Oqu(i.lcZ(6, 5, "Pick Shift")),
                    i.xp6(8),
                    i.Oqu(i.lcZ(14, 7, "Pick One")),
                    i.xp6(4),
                    i.Oqu(i.lcZ(18, 9, "Quick Apply Shift")),
                    i.xp6(2),
                    i.Q6J("ngModel", e.shiftScheduleService.quickMode),
                    i.xp6(1),
                    i.Q6J("ngIf", e.shiftScheduleService.quickMode))
                },
                directives: [d.Gu, d.sr, d.Sm, d.oU, d.cs, d.wd, d.W2, d.PM, u.xw, d.Q$, u.Wh, d.ho, d.w, p.JJ, p.On, g.O5, m.xh],
                pipes: [c.X$],
                styles: [".content[_ngcontent-%COMP%]   .warning-box[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;overflow:hidden;width:100%}.content[_ngcontent-%COMP%]   .warning-box[_ngcontent-%COMP%]   .cancel-text[_ngcontent-%COMP%]{padding:1px;border-radius:200px}.content[_ngcontent-%COMP%]   .warning-box[_ngcontent-%COMP%]   .warning-section[_ngcontent-%COMP%]{align-items:flex-start}.content[_ngcontent-%COMP%]   .warning-box[_ngcontent-%COMP%]   .bg-box[_ngcontent-%COMP%]{background-color:rgba(var(--ion-color-warning-rgb),.7)}.content[_ngcontent-%COMP%]   .warning-box[_ngcontent-%COMP%]   .bg-box[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--ion-color-primary-shade)}.content[_ngcontent-%COMP%]   ion-label.title[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.content[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{padding:8px 16px;border-bottom:1px solid var(--gdx-color-outline)}.content[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .mark[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:200px}"]
            }),
            t
        }
        )()
    },
    39586: function(t, e, n) {
        n.d(e, {
            t: function() {
                return Z
            }
        });
        var o = n(64762)
          , i = n(10922)
          , a = n(37716)
          , r = n(39209)
          , s = n(57196)
          , l = n(12132)
          , c = n(55546)
          , d = n(65744)
          , u = n(35618)
          , p = n(52928)
          , g = n(38583)
          , m = n(29790);
        const h = ["fileInputAttch"];
        function f(t, e) {
            if (1 & t) {
                const t = a.EpF();
                a.TgZ(0, "gd-comp-button", 8),
                a.NdJ("click", function() {
                    return a.CHM(t),
                    a.oxw().takeFile()
                }),
                a._uU(1),
                a.ALo(2, "translate"),
                a.qZA()
            }
            if (2 & t) {
                const t = a.oxw();
                a.Q6J("loading", t.loadingUpload)("disabled", t.loadingDownload)("expand", "block"),
                a.xp6(1),
                a.hij(" ", a.lcZ(2, 4, "Upload Shfit"), "")
            }
        }
        function v(t, e) {
            if (1 & t && (a.TgZ(0, "gd-comp-button", 11),
            a._uU(1),
            a.ALo(2, "translate"),
            a.qZA()),
            2 & t) {
                const t = a.oxw();
                a.Q6J("disabled", t.loadingUpload)("expand", "block"),
                a.xp6(1),
                a.AsE(" ", t.loadingProgress, " % ", a.lcZ(2, 4, "Uploading"), " ")
            }
        }
        let Z = (()=>{
            class t {
                constructor(t, e, n) {
                    this.shiftScheduleService = t,
                    this.auth = e,
                    this.alertService = n,
                    this.loadingUpload = !1,
                    this.loadingDownload = !1,
                    this.form = {
                        startDate: (new Date).toISOString(),
                        endDate: (new Date).toISOString(),
                        emailUser: null,
                        fullName: null,
                        isCordova: 0,
                        companyId: null,
                        sendEmail: 0
                    },
                    this.failed = [],
                    this.loadingProgress = 0
                }
                ngOnInit() {
                    var t, e, n;
                    this.form.companyId = null === (t = this.auth.gdAuth) || void 0 === t ? void 0 : t.companyId,
                    this.form.fullName = null === (e = this.auth.gdAuth) || void 0 === e ? void 0 : e.fullName,
                    this.form.emailUser = null === (n = this.auth.gdAuth) || void 0 === n ? void 0 : n.email
                }
                download() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.loadingDownload = !0,
                            yield this.shiftScheduleService.downloadTemplate(this.form)
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        } finally {
                            this.loadingDownload = !1
                        }
                    })
                }
                takeFile() {
                    this.fileInputAttch.nativeElement.click()
                }
                processWebFile(t) {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.loadingUpload = !0;
                            const e = yield this.shiftScheduleService.processWebFile(t);
                            yield this.upload(e)
                        } catch (e) {
                            this.alertService.presentAlertError(e)
                        } finally {
                            this.loadingUpload = !1
                        }
                    })
                }
                upload(t) {
                    var e;
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const n = yield this.shiftScheduleService.shiftUploadFile(t);
                            if ((null === (e = n.data) || void 0 === e ? void 0 : e.length) > 0) {
                                let t = 1;
                                this.failed = [];
                                for (const e of n.data) {
                                    const o = yield this.shiftScheduleService.shiftProcessUpload(e);
                                    o.data.success || this.failed.push({
                                        date: e.date,
                                        fullName: e.fullName,
                                        message: o.data.error
                                    });
                                    const i = Math.round(100 * t / n.data.length);
                                    this.loadingProgress = i,
                                    t++
                                }
                                yield this.alertService.presentAlertSuccess(i.V.SUCCESSFULLY_UPLOADED),
                                this.loadingProgress = 0
                            } else
                                this.loadingProgress = 0
                        } catch (n) {
                            this.loadingProgress = 0,
                            this.alertService.presentAlertError(n)
                        }
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.Y36(r.V),a.Y36(s.V),a.Y36(l.c))
            }
            ,
            t.\u0275cmp = a.Xpm({
                type: t,
                selectors: [["app-shift-schedule-upload"]],
                viewQuery: function(t, e) {
                    if (1 & t && a.Gf(h, 5),
                    2 & t) {
                        let t;
                        a.iGM(t = a.CRH()) && (e.fileInputAttch = t.first)
                    }
                },
                decls: 20,
                vars: 14,
                consts: [["slot", "start"], ["type", "file", "hidden", "", 3, "change"], ["fileInputAttch", ""], ["gdx-content", ""], ["fxLayout", "column", 1, "content"], [1, "date"], ["type", "multi", "placeholder", "DD/MMMM/YYYY", 3, "startDate", "endDate", "firstShow", "startDateChange", "endDateChange"], ["fxLayout", "row", "fxLayoutGap", "8px", 1, "button"], [3, "loading", "disabled", "expand", "click"], [3, "loading", "disabled", "expand", "click", 4, "ngIf"], [3, "disabled", "expand", 4, "ngIf"], [3, "disabled", "expand"]],
                template: function(t, e) {
                    1 & t && (a.TgZ(0, "ion-header"),
                    a.TgZ(1, "ion-toolbar"),
                    a.TgZ(2, "ion-buttons", 0),
                    a._UZ(3, "ion-back-button"),
                    a.qZA(),
                    a.TgZ(4, "app-title"),
                    a._uU(5),
                    a.ALo(6, "translate"),
                    a.qZA(),
                    a.qZA(),
                    a.qZA(),
                    a.TgZ(7, "ion-content"),
                    a.TgZ(8, "input", 1, 2),
                    a.NdJ("change", function(t) {
                        return e.processWebFile(t)
                    }),
                    a.qZA(),
                    a.TgZ(10, "ion-card", 3),
                    a.TgZ(11, "div", 4),
                    a.TgZ(12, "div", 5),
                    a.TgZ(13, "gd-comp-input-date", 6),
                    a.NdJ("startDateChange", function(t) {
                        return e.form.startDate = t
                    })("endDateChange", function(t) {
                        return e.form.endDate = t
                    }),
                    a.qZA(),
                    a.qZA(),
                    a.TgZ(14, "div", 7),
                    a.TgZ(15, "gd-comp-button", 8),
                    a.NdJ("click", function() {
                        return e.download()
                    }),
                    a._uU(16),
                    a.ALo(17, "translate"),
                    a.qZA(),
                    a.YNc(18, f, 3, 6, "gd-comp-button", 9),
                    a.YNc(19, v, 3, 6, "gd-comp-button", 10),
                    a.qZA(),
                    a.qZA(),
                    a.qZA(),
                    a.qZA()),
                    2 & t && (a.xp6(5),
                    a.Oqu(a.lcZ(6, 10, "Shift Upload")),
                    a.xp6(8),
                    a.Q6J("startDate", e.form.startDate)("endDate", e.form.endDate)("firstShow", "year"),
                    a.xp6(2),
                    a.Q6J("loading", e.loadingDownload)("disabled", e.loadingUpload)("expand", "block"),
                    a.xp6(1),
                    a.hij(" ", a.lcZ(17, 12, "Download Shift"), ""),
                    a.xp6(2),
                    a.Q6J("ngIf", !e.loadingProgress),
                    a.xp6(1),
                    a.Q6J("ngIf", e.loadingProgress))
                },
                directives: [c.Gu, c.sr, c.Sm, c.oU, c.cs, d.z, c.W2, c.PM, u.xw, p.Id, u.SQ, p.qH, g.O5],
                pipes: [m.X$],
                styles: [".content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{margin-top:16px;align-self:flex-end}"]
            }),
            t
        }
        )()
    },
    73155: function(t, e, n) {
        n.d(e, {
            a: function() {
                return s
            }
        });
        var o = n(37716)
          , i = n(55546)
          , a = n(35618)
          , r = n(29790);
        let s = (()=>{
            class t {
                constructor(t) {
                    this.params = t
                }
                ngOnInit() {
                    this.paramsData = this.params.data,
                    console.log(this.paramsData)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(o.Y36(i.X1))
            }
            ,
            t.\u0275cmp = o.Xpm({
                type: t,
                selectors: [["app-claim-balance-detail"]],
                decls: 47,
                vars: 29,
                consts: [[1, "ion-padding"], [1, "container"], ["fxLayout", "column", "fxLayoutGap", "16px"], [1, "title"], ["fxLayout", "column"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["color", "medium"]],
                template: function(t, e) {
                    1 & t && (o.TgZ(0, "ion-header"),
                    o.TgZ(1, "ion-toolbar"),
                    o.TgZ(2, "ion-title"),
                    o._uU(3),
                    o.ALo(4, "translate"),
                    o.qZA(),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(5, "ion-content", 0),
                    o.TgZ(6, "div", 1),
                    o.TgZ(7, "div", 2),
                    o.TgZ(8, "div", 3),
                    o.TgZ(9, "ion-label"),
                    o._uU(10),
                    o.ALo(11, "translate"),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(12, "div", 4),
                    o.TgZ(13, "ion-label"),
                    o._uU(14),
                    o.ALo(15, "translate"),
                    o.qZA(),
                    o.TgZ(16, "div", 5),
                    o.TgZ(17, "ion-label", 6),
                    o._uU(18),
                    o.qZA(),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(19, "div", 4),
                    o.TgZ(20, "ion-label"),
                    o._uU(21),
                    o.ALo(22, "translate"),
                    o.qZA(),
                    o.TgZ(23, "div", 5),
                    o.TgZ(24, "ion-label", 6),
                    o._uU(25),
                    o.qZA(),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(26, "div", 4),
                    o.TgZ(27, "ion-label"),
                    o._uU(28),
                    o.ALo(29, "translate"),
                    o.qZA(),
                    o.TgZ(30, "div", 5),
                    o.TgZ(31, "ion-label", 6),
                    o._uU(32),
                    o.qZA(),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(33, "div", 4),
                    o.TgZ(34, "ion-label"),
                    o._uU(35),
                    o.ALo(36, "translate"),
                    o.qZA(),
                    o.TgZ(37, "div", 5),
                    o.TgZ(38, "ion-label", 6),
                    o._uU(39),
                    o.qZA(),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(40, "div", 4),
                    o.TgZ(41, "ion-label"),
                    o._uU(42),
                    o.ALo(43, "translate"),
                    o.qZA(),
                    o.TgZ(44, "div", 5),
                    o.TgZ(45, "ion-label", 6),
                    o._uU(46),
                    o.qZA(),
                    o.qZA(),
                    o.qZA(),
                    o.qZA(),
                    o.qZA(),
                    o.qZA()),
                    2 & t && (o.xp6(3),
                    o.Oqu(o.lcZ(4, 15, "Claim Balance")),
                    o.xp6(7),
                    o.Oqu(o.lcZ(11, 17, e.paramsData.reimname)),
                    o.xp6(4),
                    o.Oqu(o.lcZ(15, 19, "Start Valid Date")),
                    o.xp6(4),
                    o.Oqu(e.paramsData.startvaliddate),
                    o.xp6(3),
                    o.Oqu(o.lcZ(22, 21, "End Valid Date")),
                    o.xp6(4),
                    o.Oqu(e.paramsData.endvaliddate),
                    o.xp6(3),
                    o.Oqu(o.lcZ(29, 23, "Total Balance")),
                    o.xp6(4),
                    o.AsE("", e.paramsData.currencyCode, " ", e.paramsData.balance, ""),
                    o.xp6(3),
                    o.Oqu(o.lcZ(36, 25, "Used")),
                    o.xp6(4),
                    o.AsE("", e.paramsData.currencyCode, " ", e.paramsData.used, ""),
                    o.xp6(3),
                    o.Oqu(o.lcZ(43, 27, "Remaining")),
                    o.xp6(4),
                    o.AsE("", e.paramsData.currencyCode, " ", e.paramsData.remaining, ""))
                },
                directives: [i.Gu, i.sr, i.wd, i.W2, a.xw, a.SQ, i.Q$, a.Wh],
                pipes: [r.X$],
                styles: [".title[_ngcontent-%COMP%]{background:var(--ion-color-light-shade);padding:8px;margin-bottom:16px}.title[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-weight:700;color:var(--ion-color-dark)}"]
            }),
            t
        }
        )()
    },
    1629: function(t, e, n) {
        n.d(e, {
            m: function() {
                return s
            }
        });
        var o = n(37716)
          , i = n(55546)
          , a = n(35618)
          , r = n(52928);
        let s = (()=>{
            class t {
                constructor() {}
                ngOnInit() {}
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275cmp = o.Xpm({
                type: t,
                selectors: [["app-claim-type-form"]],
                decls: 21,
                vars: 1,
                consts: [[1, "content", "ion-padding"], ["mb-24", "", 1, "content-header"], ["no-margin", ""], [1, "content-body"], ["fxLayout", "column", 1, "form"], ["mt-10", "", "placeholder", "name", "type", "text"], ["pt-16", "", "pb-16", "", "fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "form"], ["fxFlex", "none", "color", "primary", 1, "ion-no-padding"], ["mt-16", "", "mb-16", "", "type", "number"], ["mt-16", "", 1, "button"], [3, "expand"]],
                template: function(t, e) {
                    1 & t && (o.TgZ(0, "ion-content"),
                    o.TgZ(1, "div", 0),
                    o.TgZ(2, "div", 1),
                    o.TgZ(3, "h4", 2),
                    o._uU(4, "Add New Claim Type"),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(5, "div", 3),
                    o.TgZ(6, "div", 4),
                    o.TgZ(7, "ion-label"),
                    o._uU(8, "Type Of Claim"),
                    o.qZA(),
                    o._UZ(9, "ion-input", 5),
                    o.qZA(),
                    o.TgZ(10, "div", 6),
                    o.TgZ(11, "ion-label"),
                    o._uU(12, "User Balance"),
                    o.qZA(),
                    o._UZ(13, "ion-toggle", 7),
                    o.qZA(),
                    o.TgZ(14, "div", 4),
                    o.TgZ(15, "ion-label"),
                    o._uU(16, "Available After (Month(s) From Join Date) "),
                    o.qZA(),
                    o._UZ(17, "ion-input", 8),
                    o.qZA(),
                    o.TgZ(18, "div", 9),
                    o.TgZ(19, "gd-comp-button", 10),
                    o._uU(20, "Save Claim Type"),
                    o.qZA(),
                    o.qZA(),
                    o.qZA(),
                    o.qZA(),
                    o.qZA()),
                    2 & t && (o.xp6(19),
                    o.Q6J("expand", "block"))
                },
                directives: [i.W2, a.xw, i.Q$, i.pK, i.j9, a.Wh, i.ho, i.w, a.yH, i.as, r.qH],
                styles: [".content[_ngcontent-%COMP%]   .content-body[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{border:1px solid var(--gdx-color-outline);border-radius:8px}"]
            }),
            t
        }
        )()
    },
    54870: function(t, e, n) {
        n.d(e, {
            A: function() {
                return v
            }
        });
        var o = n(64762)
          , i = n(10922)
          , a = n(37716)
          , r = n(996)
          , s = n(55546)
          , l = n(25307)
          , c = n(12132)
          , d = n(38583)
          , u = n(35618)
          , p = n(3679)
          , g = n(52928)
          , m = n(29790);
        function h(t, e) {
            1 & t && (a.TgZ(0, "ion-title"),
            a._uU(1),
            a.ALo(2, "translate"),
            a.qZA()),
            2 & t && (a.xp6(1),
            a.Oqu(a.lcZ(2, 1, "Add Nationality")))
        }
        function f(t, e) {
            1 & t && (a.TgZ(0, "ion-title"),
            a._uU(1),
            a.ALo(2, "translate"),
            a.qZA()),
            2 & t && (a.xp6(1),
            a.Oqu(a.lcZ(2, 1, "Edit Nationality")))
        }
        let v = (()=>{
            class t {
                constructor(t, e, n, o) {
                    this.navigationService = t,
                    this.navParams = e,
                    this.nationalityService = n,
                    this.alertService = o,
                    this.code = "",
                    this.nameEn = "",
                    this.nameId = "",
                    this.nameMy = "",
                    this.nameTh = "",
                    this.loading = !1
                }
                ngOnInit() {
                    var t;
                    this.params = null !== (t = this.navParams.get("params")) && void 0 !== t ? t : this.navigationService.getParams(),
                    this.code = this.params.data.data.nationalityCode,
                    this.nameEn = this.params.data.data.nationalityNameEn,
                    this.nameId = this.params.data.data.nationalityNameId,
                    this.nameMy = this.params.data.data.nationalityNameMy,
                    this.nameTh = this.params.data.data.nationalityNameTh
                }
                saveForm() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.loading = !0;
                            const t = {
                                nationalityCode: this.code,
                                nationalityNameEn: this.nameEn,
                                nationalityNameId: this.nameId,
                                nationalityNameMy: this.nameMy,
                                nationalityNameTh: this.nameTh
                            };
                            this.params ? yield this.nationalityService.update(t) : yield this.nationalityService.add(t),
                            yield this.alertService.presentAlertSuccess(i.V.SUCCESSFULLY_SAVED)
                        } catch (t) {
                            yield this.alertService.presentAlertError(t)
                        } finally {
                            this.loading = !1,
                            this.navigationService.back()
                        }
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.Y36(r.f),a.Y36(s.X1),a.Y36(l.R),a.Y36(c.c))
            }
            ,
            t.\u0275cmp = a.Xpm({
                type: t,
                selectors: [["app-nationality-form"]],
                decls: 48,
                vars: 55,
                consts: [[4, "ngIf"], [1, "ion-padding"], ["fxLayout", "column", "fxLayoutGap", "16px"], ["fxLayout", "column", 1, "section"], [1, "required"], [3, "disabled", "placeholder", "ngModel", "ngModelChange"], [3, "placeholder", "ngModel", "ngModelChange"], ["fxLayout", "row", "fxLayoutAlign", "flex-end center"], [3, "disabled", "loading", "click"]],
                template: function(t, e) {
                    1 & t && (a.TgZ(0, "ion-header"),
                    a.TgZ(1, "ion-toolbar"),
                    a.YNc(2, h, 3, 3, "ion-title", 0),
                    a.YNc(3, f, 3, 3, "ion-title", 0),
                    a.qZA(),
                    a.qZA(),
                    a.TgZ(4, "ion-content", 1),
                    a.TgZ(5, "div", 2),
                    a.TgZ(6, "div", 3),
                    a.TgZ(7, "ion-label"),
                    a._uU(8),
                    a.ALo(9, "translate"),
                    a.TgZ(10, "span", 4),
                    a._uU(11, "*"),
                    a.qZA(),
                    a.qZA(),
                    a.TgZ(12, "ion-input", 5),
                    a.NdJ("ngModelChange", function(t) {
                        return e.code = t
                    }),
                    a.ALo(13, "translate"),
                    a.qZA(),
                    a.qZA(),
                    a.TgZ(14, "div", 3),
                    a.TgZ(15, "ion-label"),
                    a._uU(16),
                    a.ALo(17, "translate"),
                    a.ALo(18, "translate"),
                    a.qZA(),
                    a.TgZ(19, "ion-input", 6),
                    a.NdJ("ngModelChange", function(t) {
                        return e.nameEn = t
                    }),
                    a.ALo(20, "translate"),
                    a.qZA(),
                    a.qZA(),
                    a.TgZ(21, "div", 3),
                    a.TgZ(22, "ion-label"),
                    a._uU(23),
                    a.ALo(24, "translate"),
                    a.ALo(25, "translate"),
                    a.qZA(),
                    a.TgZ(26, "ion-input", 6),
                    a.NdJ("ngModelChange", function(t) {
                        return e.nameId = t
                    }),
                    a.ALo(27, "translate"),
                    a.qZA(),
                    a.qZA(),
                    a.TgZ(28, "div", 3),
                    a.TgZ(29, "ion-label"),
                    a._uU(30),
                    a.ALo(31, "translate"),
                    a.ALo(32, "translate"),
                    a.qZA(),
                    a.TgZ(33, "ion-input", 6),
                    a.NdJ("ngModelChange", function(t) {
                        return e.nameTh = t
                    }),
                    a.ALo(34, "translate"),
                    a.qZA(),
                    a.qZA(),
                    a.TgZ(35, "div", 3),
                    a.TgZ(36, "ion-label"),
                    a._uU(37),
                    a.ALo(38, "translate"),
                    a.ALo(39, "translate"),
                    a.qZA(),
                    a.TgZ(40, "ion-input", 6),
                    a.NdJ("ngModelChange", function(t) {
                        return e.nameMy = t
                    }),
                    a.ALo(41, "translate"),
                    a.qZA(),
                    a.qZA(),
                    a.qZA(),
                    a.qZA(),
                    a.TgZ(42, "ion-footer", 1),
                    a.TgZ(43, "ion-toolbar"),
                    a.TgZ(44, "div", 7),
                    a.TgZ(45, "gd-comp-button", 8),
                    a.NdJ("click", function() {
                        return e.saveForm()
                    }),
                    a._uU(46),
                    a.ALo(47, "translate"),
                    a.qZA(),
                    a.qZA(),
                    a.qZA(),
                    a.qZA()),
                    2 & t && (a.xp6(2),
                    a.Q6J("ngIf", !e.params),
                    a.xp6(1),
                    a.Q6J("ngIf", e.params),
                    a.xp6(5),
                    a.hij("", a.lcZ(9, 25, "Nationality Code"), " "),
                    a.xp6(4),
                    a.s9C("placeholder", a.lcZ(13, 27, "Enter Nationality Code")),
                    a.Q6J("disabled", !!e.params)("ngModel", e.code),
                    a.xp6(4),
                    a.AsE("", a.lcZ(17, 29, "Nationality Name"), " ", a.lcZ(18, 31, "(English)"), ""),
                    a.xp6(3),
                    a.s9C("placeholder", a.lcZ(20, 33, "Enter Nationality Name")),
                    a.Q6J("ngModel", e.nameEn),
                    a.xp6(4),
                    a.AsE("", a.lcZ(24, 35, "Nationality Name"), " ", a.lcZ(25, 37, "(Indonesia)"), ""),
                    a.xp6(3),
                    a.s9C("placeholder", a.lcZ(27, 39, "Enter Nationality Name")),
                    a.Q6J("ngModel", e.nameId),
                    a.xp6(4),
                    a.AsE("", a.lcZ(31, 41, "Nationality Name"), " ", a.lcZ(32, 43, "(Thailand)"), ""),
                    a.xp6(3),
                    a.s9C("placeholder", a.lcZ(34, 45, "Enter Nationality Name")),
                    a.Q6J("ngModel", e.nameTh),
                    a.xp6(4),
                    a.AsE("", a.lcZ(38, 47, "Nationality Name"), " ", a.lcZ(39, 49, "(Malaysia)"), ""),
                    a.xp6(3),
                    a.s9C("placeholder", a.lcZ(41, 51, "Enter Nationality Name")),
                    a.Q6J("ngModel", e.nameMy),
                    a.xp6(5),
                    a.Q6J("disabled", "" === e.code)("loading", e.loading),
                    a.xp6(1),
                    a.Oqu(a.lcZ(47, 53, "Save")))
                },
                directives: [s.Gu, s.sr, d.O5, s.W2, u.xw, u.SQ, s.Q$, s.pK, s.j9, p.JJ, p.On, s.fr, u.Wh, g.qH, s.wd],
                pipes: [m.X$],
                styles: [".section[_ngcontent-%COMP%]{padding:8px 0}.section[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-bottom:var(--gdx-border-radius);color:var(--ion-color-medium)}.section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0}.section[_ngcontent-%COMP%]   ion-label.title[_ngcontent-%COMP%]{color:var(--ion-color-dark)}.section[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{--padding-bottom: 16px;--padding-end: 16px;--padding-start: 16px;--padding-top: 16px;border-radius:var(--gdx-border-radius);border:1px solid var(--gdx-color-outline);margin-top:6px}"]
            }),
            t
        }
        )()
    },
    46458: function(t, e, n) {
        n.d(e, {
            l: function() {
                return g
            }
        });
        var o = n(37716)
          , i = n(996)
          , a = n(55546)
          , r = n(38583)
          , s = n(35618)
          , l = n(3679)
          , c = n(52928)
          , d = n(29790);
        function u(t, e) {
            1 & t && (o.TgZ(0, "ion-title"),
            o._uU(1),
            o.ALo(2, "translate"),
            o.qZA()),
            2 & t && (o.xp6(1),
            o.Oqu(o.lcZ(2, 1, "Add Religion")))
        }
        function p(t, e) {
            1 & t && (o.TgZ(0, "ion-title"),
            o._uU(1),
            o.ALo(2, "translate"),
            o.qZA()),
            2 & t && (o.xp6(1),
            o.Oqu(o.lcZ(2, 1, "Edit Religion")))
        }
        let g = (()=>{
            class t {
                constructor(t, e) {
                    this.navigationService = t,
                    this.navParams = e,
                    this.code = "",
                    this.nameEn = "",
                    this.nameId = "",
                    this.nameMy = "",
                    this.nameTh = ""
                }
                ngOnInit() {
                    var t;
                    this.params = null !== (t = this.navParams.get("params")) && void 0 !== t ? t : this.navigationService.getParams(),
                    this.code = this.params.data.data.code,
                    this.nameEn = this.params.data.data.religionNameEn,
                    this.nameId = this.params.data.data.religionNameId,
                    this.nameMy = this.params.data.data.religionNameMy,
                    this.nameTh = this.params.data.data.religionNameTh
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(o.Y36(i.f),o.Y36(a.X1))
            }
            ,
            t.\u0275cmp = o.Xpm({
                type: t,
                selectors: [["app-religion-form"]],
                decls: 48,
                vars: 54,
                consts: [[4, "ngIf"], [1, "ion-padding"], ["fxLayout", "column", "fxLayoutGap", "16px"], ["fxLayout", "column", 1, "section"], [1, "required"], [3, "disabled", "placeholder", "ngModel", "ngModelChange"], [3, "placeholder", "ngModel", "ngModelChange"], ["fxLayout", "row", "fxLayoutAlign", "flex-end center"], [3, "disabled"]],
                template: function(t, e) {
                    1 & t && (o.TgZ(0, "ion-header"),
                    o.TgZ(1, "ion-toolbar"),
                    o.YNc(2, u, 3, 3, "ion-title", 0),
                    o.YNc(3, p, 3, 3, "ion-title", 0),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(4, "ion-content", 1),
                    o.TgZ(5, "div", 2),
                    o.TgZ(6, "div", 3),
                    o.TgZ(7, "ion-label"),
                    o._uU(8),
                    o.ALo(9, "translate"),
                    o.TgZ(10, "span", 4),
                    o._uU(11, "*"),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(12, "ion-input", 5),
                    o.NdJ("ngModelChange", function(t) {
                        return e.code = t
                    }),
                    o.ALo(13, "translate"),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(14, "div", 3),
                    o.TgZ(15, "ion-label"),
                    o._uU(16),
                    o.ALo(17, "translate"),
                    o.ALo(18, "translate"),
                    o.qZA(),
                    o.TgZ(19, "ion-input", 6),
                    o.NdJ("ngModelChange", function(t) {
                        return e.nameEn = t
                    }),
                    o.ALo(20, "translate"),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(21, "div", 3),
                    o.TgZ(22, "ion-label"),
                    o._uU(23),
                    o.ALo(24, "translate"),
                    o.ALo(25, "translate"),
                    o.qZA(),
                    o.TgZ(26, "ion-input", 6),
                    o.NdJ("ngModelChange", function(t) {
                        return e.nameId = t
                    }),
                    o.ALo(27, "translate"),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(28, "div", 3),
                    o.TgZ(29, "ion-label"),
                    o._uU(30),
                    o.ALo(31, "translate"),
                    o.ALo(32, "translate"),
                    o.qZA(),
                    o.TgZ(33, "ion-input", 6),
                    o.NdJ("ngModelChange", function(t) {
                        return e.nameTh = t
                    }),
                    o.ALo(34, "translate"),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(35, "div", 3),
                    o.TgZ(36, "ion-label"),
                    o._uU(37),
                    o.ALo(38, "translate"),
                    o.ALo(39, "translate"),
                    o.qZA(),
                    o.TgZ(40, "ion-input", 6),
                    o.NdJ("ngModelChange", function(t) {
                        return e.nameMy = t
                    }),
                    o.ALo(41, "translate"),
                    o.qZA(),
                    o.qZA(),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(42, "ion-footer", 1),
                    o.TgZ(43, "ion-toolbar"),
                    o.TgZ(44, "div", 7),
                    o.TgZ(45, "gd-comp-button", 8),
                    o._uU(46),
                    o.ALo(47, "translate"),
                    o.qZA(),
                    o.qZA(),
                    o.qZA(),
                    o.qZA()),
                    2 & t && (o.xp6(2),
                    o.Q6J("ngIf", !e.params),
                    o.xp6(1),
                    o.Q6J("ngIf", e.params),
                    o.xp6(5),
                    o.hij("", o.lcZ(9, 24, "Religion Code"), " "),
                    o.xp6(4),
                    o.s9C("placeholder", o.lcZ(13, 26, "Enter Religion Code")),
                    o.Q6J("disabled", !!e.params)("ngModel", e.code),
                    o.xp6(4),
                    o.AsE("", o.lcZ(17, 28, "Religion Name"), " ", o.lcZ(18, 30, "(English)"), ""),
                    o.xp6(3),
                    o.s9C("placeholder", o.lcZ(20, 32, "Enter Religion Name")),
                    o.Q6J("ngModel", e.nameEn),
                    o.xp6(4),
                    o.AsE("", o.lcZ(24, 34, "Religion Name"), " ", o.lcZ(25, 36, "(Indonesia)"), ""),
                    o.xp6(3),
                    o.s9C("placeholder", o.lcZ(27, 38, "Enter Religion Name")),
                    o.Q6J("ngModel", e.nameId),
                    o.xp6(4),
                    o.AsE("", o.lcZ(31, 40, "Religion Name"), " ", o.lcZ(32, 42, "(Thailand)"), ""),
                    o.xp6(3),
                    o.s9C("placeholder", o.lcZ(34, 44, "Enter Religion Name")),
                    o.Q6J("ngModel", e.nameTh),
                    o.xp6(4),
                    o.AsE("", o.lcZ(38, 46, "Religion Name"), " ", o.lcZ(39, 48, "(Malaysia)"), ""),
                    o.xp6(3),
                    o.s9C("placeholder", o.lcZ(41, 50, "Enter Religion Name")),
                    o.Q6J("ngModel", e.nameMy),
                    o.xp6(5),
                    o.Q6J("disabled", "" === e.code),
                    o.xp6(1),
                    o.Oqu(o.lcZ(47, 52, "Save")))
                },
                directives: [a.Gu, a.sr, r.O5, a.W2, s.xw, s.SQ, a.Q$, a.pK, a.j9, l.JJ, l.On, a.fr, s.Wh, c.qH, a.wd],
                pipes: [d.X$],
                styles: [".section[_ngcontent-%COMP%]{padding:8px 0}.section[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-bottom:var(--gdx-border-radius);color:var(--ion-color-medium)}.section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0}.section[_ngcontent-%COMP%]   ion-label.title[_ngcontent-%COMP%]{color:var(--ion-color-dark)}.section[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{--padding-bottom: 16px;--padding-end: 16px;--padding-start: 16px;--padding-top: 16px;border-radius:var(--gdx-border-radius);border:1px solid var(--gdx-color-outline);margin-top:6px}"]
            }),
            t
        }
        )()
    },
    43114: function(t, e, n) {
        n.d(e, {
            k: function() {
                return S
            }
        });
        var o = n(64762)
          , i = n(37716)
          , a = n(27996)
          , r = n(89045)
          , s = n(12132)
          , l = n(55546)
          , c = n(38583)
          , d = n(35618)
          , u = n(52928)
          , p = n(3679)
          , g = n(29790);
        const m = ["fileInput"];
        function h(t, e) {
            1 & t && (i.TgZ(0, "ion-title"),
            i._uU(1),
            i.ALo(2, "translate"),
            i.qZA()),
            2 & t && (i.xp6(1),
            i.Oqu(i.lcZ(2, 1, "Upload Member Data")))
        }
        function f(t, e) {
            1 & t && (i.TgZ(0, "ion-title"),
            i._uU(1),
            i.ALo(2, "translate"),
            i.qZA()),
            2 & t && (i.xp6(1),
            i.Oqu(i.lcZ(2, 1, "Upload Result")))
        }
        function v(t, e) {
            1 & t && (i.TgZ(0, "div", 9),
            i._UZ(1, "gd-comp-icon", 10),
            i.TgZ(2, "div", 11),
            i.TgZ(3, "p"),
            i._uU(4),
            i.ALo(5, "translate"),
            i.qZA(),
            i.TgZ(6, "ion-label", 12),
            i._uU(7),
            i.ALo(8, "translate"),
            i.qZA(),
            i.qZA(),
            i.qZA()),
            2 & t && (i.xp6(1),
            i.Q6J("type", "svg")("name", "icon-alert-circle")("color", "primary"),
            i.xp6(3),
            i.Oqu(i.lcZ(5, 5, "We highly recommend you to setup this setting using a desktop platform and access it through our website in https://app.greatdayhr.com/")),
            i.xp6(3),
            i.Oqu(i.lcZ(8, 7, "Visit")))
        }
        function Z(t, e) {
            1 & t && (i.TgZ(0, "div", 13),
            i._UZ(1, "img", 14),
            i.TgZ(2, "div"),
            i.TgZ(3, "h5"),
            i._uU(4),
            i.ALo(5, "translate"),
            i.qZA(),
            i.TgZ(6, "p"),
            i._uU(7),
            i.ALo(8, "translate"),
            i.qZA(),
            i.qZA(),
            i.qZA()),
            2 & t && (i.xp6(4),
            i.Oqu(i.lcZ(5, 2, "Invite staffs in your company to join GreatDay HR")),
            i.xp6(3),
            i.Oqu(i.lcZ(8, 4, "Let them who have not yet been registered to use it by having the data of your staff mounted through the upload feature in the app. To do this, press the \u2018Download Template\u2019 button, and then upload it once you finish filling in the template.")))
        }
        function b(t, e) {
            1 & t && (i.TgZ(0, "div", 13),
            i._UZ(1, "img", 15),
            i.TgZ(2, "div"),
            i.TgZ(3, "h5"),
            i._uU(4),
            i.ALo(5, "translate"),
            i.qZA(),
            i.TgZ(6, "p"),
            i._uU(7),
            i.ALo(8, "translate"),
            i.qZA(),
            i.qZA(),
            i.qZA()),
            2 & t && (i.xp6(4),
            i.Oqu(i.lcZ(5, 2, "Invitation email has been sent to your designated people")),
            i.xp6(3),
            i.Oqu(i.lcZ(8, 4, "They will receive an invitation link shortly. Make sure to download GreatDay HR Apps on the App Store or Google Playstore.")))
        }
        function x(t, e) {
            if (1 & t) {
                const t = i.EpF();
                i.TgZ(0, "gd-comp-button", 16),
                i.NdJ("click", function() {
                    return i.CHM(t),
                    i.oxw(2).download()
                }),
                i._UZ(1, "gd-comp-icon", 17),
                i._uU(2),
                i.ALo(3, "translate"),
                i.qZA()
            }
            if (2 & t) {
                const t = i.oxw(2);
                i.Q6J("loading", t.loadingDownload)("fill", "outline")("expand", "block"),
                i.xp6(1),
                i.Q6J("type", "svg")("color", "primary")("name", "icon-download"),
                i.xp6(1),
                i.hij(" ", i.lcZ(3, 7, "Download Template"), " ")
            }
        }
        function A(t, e) {
            if (1 & t) {
                const t = i.EpF();
                i.TgZ(0, "div", 18),
                i.TgZ(1, "ion-label", 12),
                i._uU(2),
                i.ALo(3, "translate"),
                i.qZA(),
                i.TgZ(4, "gd-comp-upload", 19),
                i.NdJ("ngModelChange", function(e) {
                    return i.CHM(t),
                    i.oxw(2).file = e
                })("fileChange", function(e) {
                    return i.CHM(t),
                    i.oxw(2).upload(e)
                }),
                i.qZA(),
                i.qZA()
            }
            if (2 & t) {
                const t = i.oxw(2);
                i.xp6(2),
                i.Oqu(i.lcZ(3, 3, "Upload Template")),
                i.xp6(2),
                i.Q6J("ngModel", t.file)("uploadProgress", t.uploadProgress)
            }
        }
        function y(t, e) {
            if (1 & t && (i.TgZ(0, "div", 23),
            i.TgZ(1, "ion-label", 24),
            i._uU(2),
            i.qZA(),
            i.TgZ(3, "p"),
            i._uU(4),
            i.qZA(),
            i.TgZ(5, "div", 9),
            i._UZ(6, "gd-comp-icon", 10),
            i.TgZ(7, "div", 25),
            i.TgZ(8, "p"),
            i._uU(9),
            i.qZA(),
            i.qZA(),
            i.qZA(),
            i.qZA()),
            2 & t) {
                const t = e.$implicit;
                i.xp6(2),
                i.Oqu(null == t ? null : t.empName),
                i.xp6(2),
                i.Oqu(null == t ? null : t.empNo),
                i.xp6(2),
                i.Q6J("type", "svg")("name", "icon-alert-circle")("color", "primary"),
                i.xp6(3),
                i.Oqu(null == t ? null : t.message)
            }
        }
        function T(t, e) {
            if (1 & t && (i.TgZ(0, "div", 18),
            i.TgZ(1, "div", 20),
            i.TgZ(2, "div", 21),
            i._uU(3),
            i.ALo(4, "translate"),
            i.ALo(5, "translate"),
            i.qZA(),
            i.YNc(6, y, 10, 6, "div", 22),
            i.qZA(),
            i.qZA()),
            2 & t) {
                const t = i.oxw(2);
                i.xp6(3),
                i.HOy(" \u2705 ", i.lcZ(4, 5, "Success added"), " : ", t.totalSuccess, " | \u26a0\ufe0f ", i.lcZ(5, 7, "Failed"), " : ", t.totalFailed, " "),
                i.xp6(3),
                i.Q6J("ngForOf", null == t.data ? null : t.data.failed)
            }
        }
        function C(t, e) {
            if (1 & t && (i.TgZ(0, "div", 4),
            i.YNc(1, v, 9, 9, "div", 5),
            i.YNc(2, Z, 9, 6, "div", 6),
            i.YNc(3, b, 9, 6, "div", 6),
            i.YNc(4, x, 4, 9, "gd-comp-button", 7),
            i.YNc(5, A, 5, 5, "div", 8),
            i.YNc(6, T, 7, 9, "div", 8),
            i.qZA()),
            2 & t) {
                const t = i.oxw();
                i.xp6(1),
                i.Q6J("ngIf", !t.isUploaded),
                i.xp6(1),
                i.Q6J("ngIf", !t.isUploaded),
                i.xp6(1),
                i.Q6J("ngIf", t.isUploaded),
                i.xp6(1),
                i.Q6J("ngIf", !t.isUploaded),
                i.xp6(1),
                i.Q6J("ngIf", !t.isUploaded),
                i.xp6(1),
                i.Q6J("ngIf", t.isUploaded)
            }
        }
        function q(t, e) {
            if (1 & t) {
                const t = i.EpF();
                i.TgZ(0, "gd-comp-error-state", 26),
                i.NdJ("result", function(e) {
                    return i.CHM(t),
                    i.oxw().errorAction(e)
                }),
                i.qZA()
            }
        }
        let S = (()=>{
            class t {
                constructor(t, e, n) {
                    this.modalService = t,
                    this.empTableListServie = e,
                    this.alertService = n,
                    this.isUploaded = !1,
                    this.uploadProgress = -1,
                    this.isError = !1,
                    this.loadingBtn = !1,
                    this.loadingDownload = !1,
                    this.totalSuccess = 0,
                    this.totalFailed = 0
                }
                ngOnInit() {}
                upload(t) {
                    this.processWebFile(t)
                }
                processWebFile(t) {
                    var e, n;
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.uploadProgress = 50;
                            const o = yield this.empTableListServie.processWebFile(t);
                            if (!o.cancelled) {
                                const t = (yield this.empTableListServie.uploadTemplate(o)).data;
                                if (console.log("result upload", t),
                                null == t ? void 0 : t.length) {
                                    this.totalSuccess = null === (e = t.filter(t=>t.success)) || void 0 === e ? void 0 : e.length,
                                    this.totalFailed = null === (n = t.filter(t=>!t.success)) || void 0 === n ? void 0 : n.length;
                                    const o = []
                                      , i = [];
                                    t.forEach(t=>{
                                        t.fail ? i.push(t.fail) : t.success && o.push(t.success)
                                    }
                                    ),
                                    this.data = {
                                        success: o,
                                        failed: i
                                    },
                                    console.log(this.data)
                                }
                            }
                        } catch (o) {
                            this.alertService.presentAlertError(o)
                        } finally {
                            this.uploadProgress = 100,
                            this.isUploaded = !0,
                            this.uploadProgress = -1
                        }
                    })
                }
                finish() {
                    this.modalService.dismiss()
                }
                download() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.loadingDownload = !0,
                            yield this.empTableListServie.downloadTemplate()
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        } finally {
                            this.loadingDownload = !1
                        }
                    })
                }
                errorAction(t) {}
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(i.Y36(a.Z),i.Y36(r.T),i.Y36(s.c))
            }
            ,
            t.\u0275cmp = i.Xpm({
                type: t,
                selectors: [["app-employee-invite-upload"]],
                viewQuery: function(t, e) {
                    if (1 & t && i.Gf(m, 5),
                    2 & t) {
                        let t;
                        i.iGM(t = i.CRH()) && (e.fileInput = t.first)
                    }
                },
                decls: 7,
                vars: 4,
                consts: [[4, "ngIf"], [1, "ion-padding"], ["class", "container", 4, "ngIf"], [3, "result", 4, "ngIf"], [1, "container"], ["class", "alert-box", "fxLayout", "row", "fxLayoutGap", "8px", 4, "ngIf"], ["class", "information", "fxLayout", "row", "fxLayoutGap", "16px", 4, "ngIf"], ["class", "download", 3, "loading", "fill", "expand", "click", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "8px", 4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "8px", 1, "alert-box"], [3, "type", "name", "color"], [1, "message"], ["bold-text", ""], ["fxLayout", "row", "fxLayoutGap", "16px", 1, "information"], ["src", "assets/images/staff-member.png", "alt", "image"], ["src", "assets/images/invitation-email.png", "alt", "image"], [1, "download", 3, "loading", "fill", "expand", "click"], [3, "type", "color", "name"], ["fxLayout", "column", "fxLayoutGap", "8px"], [3, "ngModel", "uploadProgress", "ngModelChange", "fileChange"], [1, "preview-custom"], [1, "info"], ["fxLayout", "column", 4, "ngFor", "ngForOf"], ["fxLayout", "column"], ["bold-text", "", "large-text", ""], [1, "message", "center"], [3, "result"]],
                template: function(t, e) {
                    1 & t && (i.TgZ(0, "ion-header"),
                    i.TgZ(1, "ion-toolbar"),
                    i.YNc(2, h, 3, 3, "ion-title", 0),
                    i.YNc(3, f, 3, 3, "ion-title", 0),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(4, "ion-content", 1),
                    i.YNc(5, C, 7, 6, "div", 2),
                    i.YNc(6, q, 1, 0, "gd-comp-error-state", 3),
                    i.qZA()),
                    2 & t && (i.xp6(2),
                    i.Q6J("ngIf", !e.isUploaded),
                    i.xp6(1),
                    i.Q6J("ngIf", e.isUploaded && !e.isError),
                    i.xp6(2),
                    i.Q6J("ngIf", !e.isError),
                    i.xp6(1),
                    i.Q6J("ngIf", e.isError))
                },
                directives: [l.Gu, l.sr, c.O5, l.W2, l.wd, d.xw, d.SQ, u.pD, l.Q$, u.qH, u.IL, p.JJ, p.On, c.sg, u.K$],
                pipes: [g.X$],
                styles: [".alert-box[_ngcontent-%COMP%]{background:rgba(255,214,102,.5);padding:8px;border-radius:var(--gdx-border-radius);margin-bottom:22px}.alert-box[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:8px}.alert-box[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{cursor:pointer}.alert-box[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .alert-box[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--ion-color-primary);line-height:16.41px}.alert-box[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{display:flex;align-items:center}.alert-box[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.information[_ngcontent-%COMP%]{align-items:center;margin-bottom:40px}.information[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ion-color-medium)}gd-comp-button.download[_ngcontent-%COMP%]{margin-bottom:40px}.preview-custom[_ngcontent-%COMP%]{background:var(--gdx-color-bgcard2);border:3px dashed var(--ion-color-medium);border-radius:8px;min-height:165px;overflow-x:auto;padding:16px;width:100%}.preview-custom[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{text-align:center;margin-bottom:16px}.preview-custom[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-bottom:4px}.preview-custom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:16px}"]
            }),
            t
        }
        )()
    },
    39893: function(t, e, n) {
        n.r(e),
        n.d(e, {
            EmployeeListPageModule: function() {
                return f
            }
        });
        var o = n(38583)
          , i = n(3679)
          , a = n(55546)
          , r = n(99415)
          , s = n(13415)
          , l = n(37716);
        const c = [{
            path: "",
            component: s.b
        }];
        let d = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[r.Bz.forChild(c)], r.Bz]
            }),
            t
        }
        )();
        var u = n(29790)
          , p = n(15566)
          , g = n(73178)
          , m = n(20145)
          , h = n(52928);
        let f = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[o.ez, i.u5, a.Pc, d, u.aw, p.o9, g.l, h.wb, h.F$, m.T, h.R$, h.jx]]
            }),
            t
        }
        )()
    },
    31021: function(t, e, n) {
        n.d(e, {
            K: function() {
                return A
            }
        });
        var o = n(64762)
          , i = n(18051)
          , a = n(10922)
          , r = n(37716)
          , s = n(55546)
          , l = n(996)
          , c = n(4898)
          , d = n(88164)
          , u = n(12132)
          , p = n(47305)
          , g = n(29790)
          , m = n(38583)
          , h = n(3679)
          , f = n(35618)
          , v = n(52928);
        function Z(t, e) {
            1 & t && (r.TgZ(0, "ion-title"),
            r._uU(1),
            r.ALo(2, "translate"),
            r.qZA()),
            2 & t && (r.xp6(1),
            r.Oqu(r.lcZ(2, 1, "New Terms")))
        }
        function b(t, e) {
            1 & t && (r.TgZ(0, "ion-title"),
            r._uU(1),
            r.ALo(2, "translate"),
            r.qZA()),
            2 & t && (r.xp6(1),
            r.Oqu(r.lcZ(2, 1, "Edit Terms")))
        }
        function x(t, e) {
            if (1 & t) {
                const t = r.EpF();
                r.TgZ(0, "div", 4),
                r.TgZ(1, "ion-label", 5),
                r._uU(2),
                r.ALo(3, "translate"),
                r.TgZ(4, "span", 6),
                r._uU(5, "*"),
                r.qZA(),
                r.qZA(),
                r.TgZ(6, "ion-input", 7),
                r.NdJ("ngModelChange", function(e) {
                    return r.CHM(t),
                    r.oxw().formData.ruleCode = e
                }),
                r.ALo(7, "translate"),
                r.qZA(),
                r.qZA()
            }
            if (2 & t) {
                const t = r.oxw();
                r.xp6(2),
                r.hij("", r.lcZ(3, 3, "Rules Code"), " "),
                r.xp6(4),
                r.s9C("placeholder", r.lcZ(7, 5, "Enter rules code")),
                r.Q6J("ngModel", t.formData.ruleCode)
            }
        }
        let A = (()=>{
            class t {
                constructor(t, e, n, o, i, a, r) {
                    this.navParams = t,
                    this.navigationService = e,
                    this.responsive = n,
                    this.eventService = o,
                    this.alertService = i,
                    this.terminationSettingService = a,
                    this.translateService = r,
                    this.formData = {
                        ruleCode: "",
                        ruleTitle: ""
                    },
                    this.loadingSave = !1
                }
                ngOnInit() {
                    var t;
                    this.params = null !== (t = this.navigationService.getParams()) && void 0 !== t ? t : this.navParams.get("params"),
                    console.log(this.params),
                    this.isEdit = !!this.params,
                    this.initForm(),
                    this.isEdit && this.getTerminationSettingDetail()
                }
                getTerminationSettingDetail() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const t = {
                                code: this.params.ruleCode
                            };
                            yield this.terminationSettingService.getByCode(t)
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        }
                    })
                }
                initForm() {
                    var t, e;
                    this.isEdit && (this.formData.ruleTitle = null === (t = this.params) || void 0 === t ? void 0 : t.ruleTitle,
                    this.formData.ruleCode = null === (e = this.params) || void 0 === e ? void 0 : e.ruleCode)
                }
                save() {
                    if ("" !== this.formData.ruleCode && "" !== this.formData.ruleTitle)
                        this.submit();
                    else {
                        const t = this.translateService.instant("Required field cannot be empty.");
                        this.alertService.presentAlertError(t)
                    }
                }
                submit() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.loadingSave = !0,
                            this.isEdit ? yield this.terminationSettingService.updateTermination(this.formData) : yield this.terminationSettingService.addTermination(this.formData),
                            this.eventService.publish(i.A.LOAD_EMP_TERMINATION_SETTING, !0),
                            yield this.alertService.presentAlertSuccess(a.V.SUCCESSFULLY_SAVED),
                            this.navigationService.back()
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        } finally {
                            this.loadingSave = !1
                        }
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(r.Y36(s.X1),r.Y36(l.f),r.Y36(c.k),r.Y36(d.n),r.Y36(u.c),r.Y36(p.m),r.Y36(g.sK))
            }
            ,
            t.\u0275cmp = r.Xpm({
                type: t,
                selectors: [["app-employee-new-terms"]],
                decls: 21,
                vars: 15,
                consts: [[4, "ngIf"], [1, "ion-padding"], [1, "container"], ["class", "form-box", 4, "ngIf"], [1, "form-box"], ["mb-8", "", "bold-text", "", "color", "medium"], [1, "required"], ["id", "new-terms", 3, "placeholder", "ngModel", "ngModelChange"], ["fxLayout", "row", "pa", "", 3, "fxLayoutAlign"], [3, "loading", "click"]],
                template: function(t, e) {
                    1 & t && (r.TgZ(0, "ion-header"),
                    r.TgZ(1, "ion-toolbar"),
                    r.YNc(2, Z, 3, 3, "ion-title", 0),
                    r.YNc(3, b, 3, 3, "ion-title", 0),
                    r.qZA(),
                    r.qZA(),
                    r.TgZ(4, "ion-content", 1),
                    r.TgZ(5, "div", 2),
                    r.YNc(6, x, 8, 7, "div", 3),
                    r.TgZ(7, "div", 4),
                    r.TgZ(8, "ion-label", 5),
                    r._uU(9),
                    r.ALo(10, "translate"),
                    r.TgZ(11, "span", 6),
                    r._uU(12, "*"),
                    r.qZA(),
                    r.qZA(),
                    r.TgZ(13, "ion-input", 7),
                    r.NdJ("ngModelChange", function(t) {
                        return e.formData.ruleTitle = t
                    }),
                    r.ALo(14, "translate"),
                    r.qZA(),
                    r.qZA(),
                    r.qZA(),
                    r.qZA(),
                    r.TgZ(15, "ion-footer"),
                    r.TgZ(16, "ion-toolbar"),
                    r.TgZ(17, "div", 8),
                    r.TgZ(18, "gd-comp-button", 9),
                    r.NdJ("click", function() {
                        return e.save()
                    }),
                    r._uU(19),
                    r.ALo(20, "translate"),
                    r.qZA(),
                    r.qZA(),
                    r.qZA(),
                    r.qZA()),
                    2 & t && (r.xp6(2),
                    r.Q6J("ngIf", !e.isEdit),
                    r.xp6(1),
                    r.Q6J("ngIf", e.isEdit),
                    r.xp6(3),
                    r.Q6J("ngIf", !e.isEdit),
                    r.xp6(3),
                    r.hij("", r.lcZ(10, 9, "Rules Title"), " "),
                    r.xp6(4),
                    r.s9C("placeholder", r.lcZ(14, 11, "Enter rules title")),
                    r.Q6J("ngModel", e.formData.ruleTitle),
                    r.xp6(4),
                    r.s9C("fxLayoutAlign", e.responsive.isMobile ? "center " : "end "),
                    r.xp6(1),
                    r.Q6J("loading", e.loadingSave),
                    r.xp6(1),
                    r.Oqu(r.lcZ(20, 13, "Save")))
                },
                directives: [s.Gu, s.sr, m.O5, s.W2, s.Q$, s.pK, s.j9, h.JJ, h.On, s.fr, f.xw, f.Wh, v.qH, s.wd],
                pipes: [g.X$],
                styles: ["ion-label[_ngcontent-%COMP%]{display:block}ion-input[_ngcontent-%COMP%]{border:1px solid var(--gdx-color-outline);border-radius:8px;padding:16px}.required[_ngcontent-%COMP%]{color:var(--ion-color-danger)!important}"]
            }),
            t
        }
        )()
    },
    50173: function(t, e, n) {
        n.d(e, {
            Z: function() {
                return p
            }
        });
        var o = n(64762)
          , i = n(37716)
          , a = n(12132)
          , r = n(27996)
          , s = n(55546)
          , l = n(85301)
          , c = n(52928)
          , d = n(35618)
          , u = n(29790);
        let p = (()=>{
            class t {
                constructor(t, e, n, o) {
                    this.alertService = t,
                    this.modalService = e,
                    this.navParams = n,
                    this.empRehireService = o
                }
                ngOnInit() {
                    this.params = this.navParams.get("params"),
                    console.log(this.params),
                    this.getOldPosition()
                }
                onHIt() {
                    console.log(this.today, "kena")
                }
                getOldPosition() {
                    var t, e, n, i;
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const o = {
                                empId: null === (n = null === (e = null === (t = this.params) || void 0 === t ? void 0 : t.data) || void 0 === e ? void 0 : e.empRehireData) || void 0 === n ? void 0 : n.empId,
                                flag: 1
                            }
                              , a = yield this.empRehireService.getEmpHistory(o);
                            this.oldEffDate = null === (i = null == a ? void 0 : a.data[0]) || void 0 === i ? void 0 : i.effectivedt
                        } catch (o) {
                            this.alertService.presentAlertError(o)
                        }
                    })
                }
                confirmAlert() {
                    var t, e, n, i, a, r, s, l, c, d, u, p, g, m, h, f, v, Z, b, x, A, y, T, C, q, S, M, w, _, L, O, P, k, E, N, U;
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        if (this.today) {
                            const o = {
                                effectiveDate: this.today,
                                empId: null === (n = null === (e = null === (t = this.params) || void 0 === t ? void 0 : t.data) || void 0 === e ? void 0 : e.empRehireData) || void 0 === n ? void 0 : n.empId,
                                companyId: null === (r = null === (a = null === (i = this.params) || void 0 === i ? void 0 : i.data) || void 0 === a ? void 0 : a.empRehireData) || void 0 === r ? void 0 : r.companyId,
                                posCode: null === (c = null === (l = null === (s = this.params) || void 0 === s ? void 0 : s.data) || void 0 === l ? void 0 : l.empRehireData) || void 0 === c ? void 0 : c.teomposition.posCode,
                                costcenterCode: null === (p = null === (u = null === (d = this.params) || void 0 === d ? void 0 : d.data) || void 0 === u ? void 0 : u.empRehireData) || void 0 === p ? void 0 : p.teomposition.costcenterCode,
                                gradeCode: null === (h = null === (m = null === (g = this.params) || void 0 === g ? void 0 : g.data) || void 0 === m ? void 0 : m.empRehireData) || void 0 === h ? void 0 : h.gradeCode,
                                fullName: null === (Z = null === (v = null === (f = this.params) || void 0 === f ? void 0 : f.data) || void 0 === v ? void 0 : v.empRehireData) || void 0 === Z ? void 0 : Z.teomemppersonal.fullName,
                                workLocationCode: null === (A = null === (x = null === (b = this.params) || void 0 === b ? void 0 : b.data) || void 0 === x ? void 0 : x.empRehireData) || void 0 === A ? void 0 : A.workLocationCode,
                                oldeffdate: this.oldEffDate,
                                employCode: null === (C = null === (T = null === (y = this.params) || void 0 === y ? void 0 : y.data) || void 0 === T ? void 0 : T.empRehireData) || void 0 === C ? void 0 : C.employCode,
                                spvParent: null === (M = null === (S = null === (q = this.params) || void 0 === q ? void 0 : q.data) || void 0 === S ? void 0 : S.empRehireData) || void 0 === M ? void 0 : M.teodemppath.spvParent,
                                employmentEnddate: null === (L = null === (_ = null === (w = this.params) || void 0 === w ? void 0 : w.data) || void 0 === _ ? void 0 : _.empRehireData) || void 0 === L ? void 0 : L.employmentEnddate,
                                empNo: null === (k = null === (P = null === (O = this.params) || void 0 === O ? void 0 : O.data) || void 0 === P ? void 0 : P.empRehireData) || void 0 === k ? void 0 : k.empNo,
                                mgrParent: null === (U = null === (N = null === (E = this.params) || void 0 === E ? void 0 : E.data) || void 0 === N ? void 0 : N.empRehireData) || void 0 === U ? void 0 : U.teodemppath.mgrParent
                            };
                            this.modalService.dismiss(o)
                        } else
                            this.cancel()
                    })
                }
                cancel() {
                    this.modalService.dismiss()
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(i.Y36(a.c),i.Y36(r.Z),i.Y36(s.X1),i.Y36(l.a))
            }
            ,
            t.\u0275cmp = i.Xpm({
                type: t,
                selectors: [["app-employee-rehire-modal"]],
                decls: 20,
                vars: 18,
                consts: [[1, "ion-padding"], [1, "content"], ["mb", "", 1, "header"], ["no-margin", "", "bold", "", "mb-8", ""], ["color", "medium"], [1, "body"], [1, "box-date"], ["type", "single", "placeholder", "DD/MMMM/YYYY", 3, "label", "format", "option", "singleDate", "onChangeEvent", "singleDateChange"], ["pa", "", "fxLayout", "row", "fxLayoutGap", "16px", 1, "footer"], ["fxFlex", "", 3, "fill", "click"], ["fxFlex", "", 3, "disabled", "click"]],
                template: function(t, e) {
                    1 & t && (i.TgZ(0, "ion-content", 0),
                    i.TgZ(1, "div", 1),
                    i.TgZ(2, "section", 2),
                    i.TgZ(3, "h4", 3),
                    i._uU(4),
                    i.ALo(5, "translate"),
                    i.qZA(),
                    i.TgZ(6, "ion-label", 4),
                    i._uU(7),
                    i.ALo(8, "translate"),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(9, "section", 5),
                    i.TgZ(10, "div", 6),
                    i.TgZ(11, "gd-comp-input-date", 7),
                    i.NdJ("onChangeEvent", function() {
                        return e.onHIt()
                    })("onChangeEvent", function() {
                        return e.onHIt()
                    })("singleDateChange", function(t) {
                        return e.today = t
                    }),
                    i.qZA(),
                    i.qZA(),
                    i.qZA(),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(12, "ion-footer"),
                    i.TgZ(13, "section", 8),
                    i.TgZ(14, "gd-comp-button", 9),
                    i.NdJ("click", function() {
                        return e.cancel()
                    }),
                    i._uU(15),
                    i.ALo(16, "translate"),
                    i.qZA(),
                    i.TgZ(17, "gd-comp-button", 10),
                    i.NdJ("click", function() {
                        return e.confirmAlert()
                    }),
                    i._uU(18),
                    i.ALo(19, "translate"),
                    i.qZA(),
                    i.qZA(),
                    i.qZA()),
                    2 & t && (i.xp6(4),
                    i.Oqu(i.lcZ(5, 10, "The effective date of employment")),
                    i.xp6(3),
                    i.Oqu(i.lcZ(8, 12, "Determine the first day the employee is actively at work.")),
                    i.xp6(4),
                    i.Q6J("label", "")("format", "dd MMM yyyy")("option", e.option)("singleDate", e.today),
                    i.xp6(3),
                    i.Q6J("fill", "outline"),
                    i.xp6(1),
                    i.Oqu(i.lcZ(16, 14, "Cancel")),
                    i.xp6(2),
                    i.Q6J("disabled", !e.today),
                    i.xp6(1),
                    i.Oqu(i.lcZ(19, 16, "Confirm")))
                },
                directives: [s.W2, s.Q$, c.Id, s.fr, d.xw, d.SQ, c.qH, d.yH],
                pipes: [u.X$],
                styles: [".content{height:100%}.content .box-date{border:2px solid var(--gdx-color-outline);border-radius:8px}.footer gd-comp-button ion-button{width:100%!important}.footer gd-comp-button{width:100%!important}\n"],
                encapsulation: 2
            }),
            t
        }
        )()
    },
    91233: function(t, e, n) {
        n.d(e, {
            Q: function() {
                return p
            }
        });
        var o = n(37716)
          , i = n(55546)
          , a = n(996)
          , r = n(38583)
          , s = n(3679)
          , l = n(52928)
          , c = n(29790);
        function d(t, e) {
            if (1 & t) {
                const t = o.EpF();
                o.ynx(0),
                o.TgZ(1, "div", 3),
                o.TgZ(2, "ion-label", 4),
                o._uU(3),
                o.ALo(4, "translate"),
                o.qZA(),
                o.TgZ(5, "ion-input", 5),
                o.NdJ("ngModelChange", function(e) {
                    return o.CHM(t),
                    o.oxw().gradeCode = e
                }),
                o.qZA(),
                o.qZA(),
                o.TgZ(6, "div", 3),
                o.TgZ(7, "ion-label", 4),
                o._uU(8),
                o.ALo(9, "translate"),
                o.qZA(),
                o.TgZ(10, "ion-input", 6),
                o.NdJ("ngModelChange", function(e) {
                    return o.CHM(t),
                    o.oxw().gradeName = e
                }),
                o.qZA(),
                o.qZA(),
                o.BQk()
            }
            if (2 & t) {
                const t = o.oxw();
                o.xp6(3),
                o.Oqu(o.lcZ(4, 4, "Job Grade Code")),
                o.xp6(2),
                o.Q6J("ngModel", t.gradeCode),
                o.xp6(3),
                o.Oqu(o.lcZ(9, 6, "Job Grade Name")),
                o.xp6(2),
                o.Q6J("ngModel", t.gradeName)
            }
        }
        function u(t, e) {
            1 & t && o._UZ(0, "gd-comp-error-state")
        }
        let p = (()=>{
            class t {
                constructor(t, e) {
                    this.navParams = t,
                    this.navigationService = e
                }
                ngOnInit() {
                    var t;
                    this.params = null !== (t = this.navigationService.getParams()) && void 0 !== t ? t : this.navParams.get("params"),
                    console.log(this.params),
                    this.gradeCode = this.params.gradeCode,
                    this.gradeName = this.params.gradeName
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(o.Y36(i.X1),o.Y36(a.f))
            }
            ,
            t.\u0275cmp = o.Xpm({
                type: t,
                selectors: [["app-job-grade-detail"]],
                decls: 9,
                vars: 5,
                consts: [[1, "ion-padding"], [1, "container"], [4, "ngIf"], [1, "ion-item"], ["bold-text", ""], ["readonly", "", "placeholder", "Job grade code...", 3, "ngModel", "ngModelChange"], ["readonly", "", "placeholder", "Job grade name...", 3, "ngModel", "ngModelChange"]],
                template: function(t, e) {
                    1 & t && (o.TgZ(0, "ion-header"),
                    o.TgZ(1, "ion-toolbar"),
                    o.TgZ(2, "ion-title"),
                    o._uU(3),
                    o.ALo(4, "translate"),
                    o.qZA(),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(5, "ion-content", 0),
                    o.TgZ(6, "div", 1),
                    o.YNc(7, d, 11, 8, "ng-container", 2),
                    o.YNc(8, u, 1, 0, "gd-comp-error-state", 2),
                    o.qZA(),
                    o.qZA()),
                    2 & t && (o.xp6(3),
                    o.Oqu(o.lcZ(4, 3, "Job Grade Detail")),
                    o.xp6(4),
                    o.Q6J("ngIf", !e.isError),
                    o.xp6(1),
                    o.Q6J("ngIf", e.isError))
                },
                directives: [i.Gu, i.sr, i.wd, i.W2, r.O5, i.Q$, i.pK, i.j9, s.JJ, s.On, l.K$],
                pipes: [c.X$],
                styles: ["ion-item[_ngcontent-%COMP%], .ion-item[_ngcontent-%COMP%]{--border-width: 0px;margin-bottom:16px;display:flex;flex-direction:column}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], .ion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ion-color-medium);margin-bottom:12px}ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], .ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{border-radius:8px;padding:0 8px!important;border:1px solid var(--gdx-color-outline)}.line[_ngcontent-%COMP%]{width:100%;border-top:1px solid var(--gdx-color-outline)}[_nghost-%COMP%]     gdx-input-date .multi-box .section{display:flex;flex-direction:column}[_nghost-%COMP%]     gdx-input-date .multi-box ion-label.title{color:var(--ion-color-medium)!important;margin-bottom:8px!important;font-weight:bold!important}"]
            }),
            t
        }
        )()
    },
    77124: function(t, e, n) {
        n.d(e, {
            B: function() {
                return g
            }
        });
        var o = n(18051)
          , i = n(37716)
          , a = n(996)
          , r = n(55546)
          , s = n(88164)
          , l = n(35618)
          , c = n(38583)
          , d = n(29790);
        function u(t, e) {
            if (1 & t && (i.TgZ(0, "div"),
            i.TgZ(1, "div", 9),
            i.TgZ(2, "ion-label", 10),
            i._uU(3),
            i.ALo(4, "translate"),
            i.qZA(),
            i.qZA(),
            i.TgZ(5, "div", 11),
            i.TgZ(6, "p", 12),
            i._uU(7),
            i.ALo(8, "translate"),
            i.qZA(),
            i.qZA(),
            i.qZA()),
            2 & t) {
                const t = i.oxw()
                  , e = t.index
                  , n = t.$implicit;
                i.xp6(3),
                i.AsE("", i.lcZ(4, 3, "No"), ": ", e + 1, ""),
                i.xp6(4),
                i.Oqu(i.lcZ(8, 5, null == n ? null : n.message))
            }
        }
        function p(t, e) {
            if (1 & t && (i.ynx(0),
            i.YNc(1, u, 9, 7, "div", 8),
            i.BQk()),
            2 & t) {
                const t = e.$implicit;
                i.xp6(1),
                i.Q6J("ngIf", t)
            }
        }
        let g = (()=>{
            class t {
                constructor(t, e, n) {
                    this.navigationService = t,
                    this.navParams = e,
                    this.eventsService = n,
                    this.params = [],
                    this.totalSuccess = 0,
                    this.totalFailed = 0
                }
                ngOnInit() {
                    var t, e, n, o, i;
                    this.params = null !== (t = this.navigationService.getParams()) && void 0 !== t ? t : this.navParams.get("params"),
                    console.log(this.params),
                    this.params && (this.totalSuccess = null === (n = null === (e = this.params) || void 0 === e ? void 0 : e.success) || void 0 === n ? void 0 : n.length,
                    this.totalFailed = null === (i = null === (o = this.params) || void 0 === o ? void 0 : o.fail) || void 0 === i ? void 0 : i.length)
                }
                ngOnDestroy() {
                    this.totalSuccess > 0 && this.eventsService.publish(o.A.LOAD_JOB_GRADE_LIST, !0)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(i.Y36(a.f),i.Y36(r.X1),i.Y36(s.n))
            }
            ,
            t.\u0275cmp = i.Xpm({
                type: t,
                selectors: [["app-job-grade-result-upload"]],
                decls: 20,
                vars: 12,
                consts: [["slot", "start"], ["gdx-content", ""], ["mb-4", "", "fxLayout", "row", "fxLayoutGap", "10px", "fxLayoutAlign", " center", 1, "box-success"], ["name", "cloud-done-outline"], ["item-content", "", "fxFlex", ""], ["mb-16", "", "fxLayout", "row", "fxLayoutGap", "10px", "fxLayoutAlign", " center", 1, "box-error"], ["name", "alert-circle-outline"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["fxLayout", "column", 1, "wrap-box"], ["no-margin", ""], ["mt-16", "", 1, "message-box"], [1, "label-message"]],
                template: function(t, e) {
                    1 & t && (i.TgZ(0, "ion-header"),
                    i.TgZ(1, "ion-toolbar"),
                    i.TgZ(2, "ion-buttons", 0),
                    i._UZ(3, "ion-back-button"),
                    i.qZA(),
                    i.TgZ(4, "ion-title"),
                    i._uU(5),
                    i.ALo(6, "translate"),
                    i.qZA(),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(7, "ion-content"),
                    i.TgZ(8, "ion-card", 1),
                    i.TgZ(9, "div", 2),
                    i._UZ(10, "ion-icon", 3),
                    i.TgZ(11, "ion-label", 4),
                    i._uU(12),
                    i.ALo(13, "translate"),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(14, "div", 5),
                    i._UZ(15, "ion-icon", 6),
                    i.TgZ(16, "ion-label", 4),
                    i._uU(17),
                    i.ALo(18, "translate"),
                    i.qZA(),
                    i.qZA(),
                    i.YNc(19, p, 2, 1, "ng-container", 7),
                    i.qZA(),
                    i.qZA()),
                    2 & t && (i.xp6(5),
                    i.Oqu(i.lcZ(6, 6, "Result Upload")),
                    i.xp6(7),
                    i.AsE("", i.lcZ(13, 8, "Success"), ": ", e.totalSuccess, ""),
                    i.xp6(5),
                    i.AsE("", i.lcZ(18, 10, "Failed"), ": ", e.totalFailed, ""),
                    i.xp6(2),
                    i.Q6J("ngForOf", e.params.fail))
                },
                directives: [r.Gu, r.sr, r.Sm, r.oU, r.cs, r.wd, r.W2, r.PM, l.xw, l.SQ, l.Wh, r.gu, r.Q$, l.yH, c.sg, c.O5],
                pipes: [d.X$],
                styles: [".box-success[_ngcontent-%COMP%]{padding:6px 10px}.box-success[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-size:24px}.box-error[_ngcontent-%COMP%]{background-color:rgba(var(--ion-color-danger-rgb),.2);padding:6px 10px;border-radius:4px}.box-error[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-danger);font-size:24px}.message-box[_ngcontent-%COMP%]{background-color:rgba(var(--ion-color-danger-rgb),.1);border-left:4px solid var(--ion-color-danger);padding:6px 10px;border-radius:4px;margin-bottom:12px}"]
            }),
            t
        }
        )()
    },
    40173: function(t, e, n) {
        n.d(e, {
            r: function() {
                return A
            }
        });
        var o = n(64762)
          , i = n(77124)
          , a = n(18824)
          , r = n(37716)
          , s = n(81791)
          , l = n(12132)
          , c = n(27019)
          , d = n(996)
          , u = n(55546)
          , p = n(38583)
          , g = n(35618)
          , m = n(52928)
          , h = n(3679)
          , f = n(29790);
        const v = ["fileInput"];
        function Z(t, e) {
            if (1 & t) {
                const t = r.EpF();
                r.TgZ(0, "gd-comp-button", 8),
                r.NdJ("click", function() {
                    return r.CHM(t),
                    r.oxw(2).download()
                }),
                r._UZ(1, "gd-comp-icon", 9),
                r._uU(2),
                r.ALo(3, "translate"),
                r.qZA()
            }
            if (2 & t) {
                const t = r.oxw(2);
                r.Q6J("loading", t.loadingBtn)("fill", "outline"),
                r.xp6(1),
                r.Q6J("type", "svg")("name", "icon-download-cloud")("color", "primary")("size", "20"),
                r.xp6(1),
                r.hij(" ", r.lcZ(3, 7, "Download Template"), " ")
            }
        }
        function b(t, e) {
            if (1 & t) {
                const t = r.EpF();
                r.TgZ(0, "div", 3),
                r.YNc(1, Z, 4, 9, "gd-comp-button", 4),
                r.TgZ(2, "div", 5),
                r.TgZ(3, "ion-label", 6),
                r._uU(4),
                r.ALo(5, "translate"),
                r.qZA(),
                r.TgZ(6, "gd-comp-upload", 7),
                r.NdJ("ngModelChange", function(e) {
                    return r.CHM(t),
                    r.oxw().file = e
                })("fileChange", function(e) {
                    return r.CHM(t),
                    r.oxw().upload(e)
                }),
                r.qZA(),
                r.qZA(),
                r.qZA()
            }
            if (2 & t) {
                const t = r.oxw();
                r.xp6(1),
                r.Q6J("ngIf", !t.isError),
                r.xp6(3),
                r.Oqu(r.lcZ(5, 4, "Upload Job Grade")),
                r.xp6(2),
                r.Q6J("ngModel", t.file)("uploadProgress", t.uploadProgress)
            }
        }
        function x(t, e) {
            if (1 & t) {
                const t = r.EpF();
                r.TgZ(0, "gd-comp-error-state", 10),
                r.NdJ("result", function(e) {
                    return r.CHM(t),
                    r.oxw().errorAction(e)
                }),
                r.qZA()
            }
        }
        let A = (()=>{
            class t {
                constructor(t, e, n, o) {
                    this.jobgradeService = t,
                    this.alertService = e,
                    this.loadingService = n,
                    this.navigationService = o,
                    this.uploadProgress = -1,
                    this.isError = !1,
                    this.loadingBtn = !1
                }
                ngOnInit() {}
                download() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        yield this.jobgradeService.downloadTemplate()
                    })
                }
                errorAction(t) {}
                upload(t) {
                    this.processWebFile(t)
                }
                processWebFile(t) {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.uploadProgress = 50;
                            const e = yield this.jobgradeService.processWebFile(t);
                            if (!e.cancelled) {
                                yield this.loadingService.showLoading();
                                const t = yield this.jobgradeService.uploadJobGrade(e);
                                this.navigationService.pushSide(i.B, a.R.JOB_GRADE_RESULTUPLOAD, null == t ? void 0 : t.data)
                            }
                        } catch (e) {
                            this.alertService.presentAlertError(e)
                        } finally {
                            this.loadingService.hideLoading(),
                            this.uploadProgress = 100,
                            this.uploadProgress = -1
                        }
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(r.Y36(s.N),r.Y36(l.c),r.Y36(c.b),r.Y36(d.f))
            }
            ,
            t.\u0275cmp = r.Xpm({
                type: t,
                selectors: [["app-job-grade-upload"]],
                viewQuery: function(t, e) {
                    if (1 & t && r.Gf(v, 5),
                    2 & t) {
                        let t;
                        r.iGM(t = r.CRH()) && (e.fileInput = t.first)
                    }
                },
                decls: 8,
                vars: 5,
                consts: [[1, "ion-padding"], ["fxLayout", "column", "fxLayoutGap", "16px", 4, "ngIf"], [3, "result", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "16px"], [3, "loading", "fill", "click", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "8px"], ["bold-text", ""], [3, "ngModel", "uploadProgress", "ngModelChange", "fileChange"], [3, "loading", "fill", "click"], [3, "type", "name", "color", "size"], [3, "result"]],
                template: function(t, e) {
                    1 & t && (r.TgZ(0, "ion-header"),
                    r.TgZ(1, "ion-toolbar"),
                    r.TgZ(2, "ion-title"),
                    r._uU(3),
                    r.ALo(4, "translate"),
                    r.qZA(),
                    r.qZA(),
                    r.qZA(),
                    r.TgZ(5, "ion-content", 0),
                    r.YNc(6, b, 7, 6, "div", 1),
                    r.YNc(7, x, 1, 0, "gd-comp-error-state", 2),
                    r.qZA()),
                    2 & t && (r.xp6(3),
                    r.Oqu(r.lcZ(4, 3, "Upload Job Grade")),
                    r.xp6(3),
                    r.Q6J("ngIf", !e.isError),
                    r.xp6(1),
                    r.Q6J("ngIf", e.isError))
                },
                directives: [u.Gu, u.sr, u.wd, u.W2, p.O5, g.xw, g.SQ, u.Q$, m.IL, h.JJ, h.On, m.qH, m.pD, m.K$],
                pipes: [f.X$],
                styles: ["gd-comp-icon[_ngcontent-%COMP%]{margin-right:4px}"]
            }),
            t
        }
        )()
    },
    71988: function(t, e, n) {
        n.d(e, {
            Q: function() {
                return d
            }
        });
        var o = n(37716)
          , i = n(996)
          , a = n(55546)
          , r = n(35618)
          , s = n(38583)
          , l = n(29790);
        function c(t, e) {
            if (1 & t && (o.TgZ(0, "div", 2),
            o.TgZ(1, "ion-label"),
            o._uU(2),
            o.ALo(3, "translate"),
            o.qZA(),
            o.TgZ(4, "h6", 3),
            o._uU(5),
            o.qZA(),
            o.qZA()),
            2 & t) {
                const t = o.oxw();
                o.xp6(2),
                o.Oqu(o.lcZ(3, 2, "Parent Name")),
                o.xp6(3),
                o.Oqu(t.parent)
            }
        }
        let d = (()=>{
            class t {
                constructor(t, e) {
                    this.navigationService = t,
                    this.navParams = e
                }
                ngOnInit() {
                    var t;
                    this.params = null !== (t = this.navParams.get("params")) && void 0 !== t ? t : this.navigationService.getParams(),
                    console.log(this.params, "this.params"),
                    this.parent = this.params.list.find(t=>t.positionId === this.params.data.parentId).name,
                    console.log(this.parent, "this.parent")
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(o.Y36(i.f),o.Y36(a.X1))
            }
            ,
            t.\u0275cmp = o.Xpm({
                type: t,
                selectors: [["app-organization-detail"]],
                decls: 14,
                vars: 8,
                consts: [[1, "ion-padding"], ["fxLayout", "column"], ["fxLayout", "column", 1, "section"], [1, "ion-no-margin"], ["fxLayout", "column", "class", "section", 4, "ngIf"]],
                template: function(t, e) {
                    1 & t && (o.TgZ(0, "ion-header"),
                    o.TgZ(1, "ion-toolbar"),
                    o.TgZ(2, "ion-title"),
                    o._uU(3),
                    o.ALo(4, "translate"),
                    o.qZA(),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(5, "ion-content", 0),
                    o.TgZ(6, "div", 1),
                    o.TgZ(7, "div", 2),
                    o.TgZ(8, "ion-label"),
                    o._uU(9),
                    o.ALo(10, "translate"),
                    o.qZA(),
                    o.TgZ(11, "h6", 3),
                    o._uU(12),
                    o.qZA(),
                    o.qZA(),
                    o.YNc(13, c, 6, 4, "div", 4),
                    o.qZA(),
                    o.qZA()),
                    2 & t && (o.xp6(3),
                    o.Oqu(o.lcZ(4, 4, "Organization Detail")),
                    o.xp6(6),
                    o.Oqu(2 == e.params.data.posFlag ? "Position Name" : o.lcZ(10, 6, "Department Name")),
                    o.xp6(3),
                    o.Oqu(e.params.data.posNameEn),
                    o.xp6(1),
                    o.Q6J("ngIf", "0" != e.params.data.parentPath))
                },
                directives: [a.Gu, a.sr, a.wd, a.W2, r.xw, a.Q$, s.O5],
                pipes: [l.X$],
                styles: [".section[_ngcontent-%COMP%]{padding:8px 0}.section[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--ion-color-primary)}"]
            }),
            t
        }
        )()
    },
    55937: function(t, e, n) {
        n.d(e, {
            c: function() {
                return C
            }
        });
        var o = n(64762)
          , i = n(18051)
          , a = n(10922)
          , r = n(37716)
          , s = n(996)
          , l = n(55546)
          , c = n(1238)
          , d = n(12132)
          , u = n(88164)
          , p = n(38583)
          , g = n(35618)
          , m = n(52928)
          , h = n(3679)
          , f = n(29790);
        function v(t, e) {
            1 & t && (r.TgZ(0, "ion-title"),
            r._uU(1),
            r.ALo(2, "translate"),
            r.qZA()),
            2 & t && (r.xp6(1),
            r.Oqu(r.lcZ(2, 1, "Add Organization")))
        }
        function Z(t, e) {
            1 & t && (r.TgZ(0, "ion-title"),
            r._uU(1),
            r.ALo(2, "translate"),
            r.qZA()),
            2 & t && (r.xp6(1),
            r.Oqu(r.lcZ(2, 1, "Edit Organization")))
        }
        function b(t, e) {
            if (1 & t) {
                const t = r.EpF();
                r.TgZ(0, "div", 6),
                r.TgZ(1, "ion-label"),
                r._uU(2),
                r.ALo(3, "translate"),
                r.qZA(),
                r.TgZ(4, "gd-comp-select", 7),
                r.NdJ("clickAction", function(e) {
                    return r.CHM(t),
                    r.oxw().action(e)
                })("ngModelChange", function(e) {
                    return r.CHM(t),
                    r.oxw().postOrDeptParent = e
                }),
                r.qZA(),
                r.qZA()
            }
            if (2 & t) {
                const t = r.oxw();
                r.xp6(2),
                r.Oqu(r.lcZ(3, 3, "Move to Position or Department")),
                r.xp6(2),
                r.Q6J("list", t.list)("ngModel", t.postOrDeptParent)
            }
        }
        function x(t, e) {
            if (1 & t) {
                const t = r.EpF();
                r.TgZ(0, "div", 6),
                r.TgZ(1, "ion-label"),
                r._uU(2),
                r.ALo(3, "translate"),
                r.qZA(),
                r.TgZ(4, "gd-comp-select", 7),
                r.NdJ("clickAction", function(e) {
                    return r.CHM(t),
                    r.oxw().action(e)
                })("ngModelChange", function(e) {
                    return r.CHM(t),
                    r.oxw().selectDepartement = e
                }),
                r.qZA(),
                r.qZA()
            }
            if (2 & t) {
                const t = r.oxw();
                r.xp6(2),
                r.Oqu(r.lcZ(3, 3, "Select Department")),
                r.xp6(2),
                r.Q6J("list", t.listDepartement)("ngModel", t.selectDepartement)
            }
        }
        function A(t, e) {
            if (1 & t) {
                const t = r.EpF();
                r.TgZ(0, "div", 6),
                r.TgZ(1, "ion-label"),
                r._uU(2),
                r.ALo(3, "translate"),
                r.qZA(),
                r.TgZ(4, "gd-comp-select", 7),
                r.NdJ("clickAction", function(e) {
                    return r.CHM(t),
                    r.oxw().action(e)
                })("ngModelChange", function(e) {
                    return r.CHM(t),
                    r.oxw().category = e
                }),
                r.qZA(),
                r.qZA()
            }
            if (2 & t) {
                const t = r.oxw();
                r.xp6(2),
                r.Oqu(r.lcZ(3, 3, "Add Position or Department")),
                r.xp6(2),
                r.Q6J("list", t.listMenu)("ngModel", t.category)
            }
        }
        function y(t, e) {
            if (1 & t) {
                const t = r.EpF();
                r.TgZ(0, "div", 6),
                r.TgZ(1, "div", 6),
                r.TgZ(2, "ion-label"),
                r._uU(3),
                r.ALo(4, "translate"),
                r.qZA(),
                r.TgZ(5, "ion-input", 8),
                r.NdJ("ngModelChange", function(e) {
                    return r.CHM(t),
                    r.oxw().name = e
                }),
                r.ALo(6, "translate"),
                r.qZA(),
                r.qZA(),
                r.TgZ(7, "div", 6),
                r.TgZ(8, "ion-label"),
                r._uU(9),
                r.ALo(10, "translate"),
                r.qZA(),
                r.TgZ(11, "ion-input", 8),
                r.NdJ("ngModelChange", function(e) {
                    return r.CHM(t),
                    r.oxw().desc = e
                }),
                r.ALo(12, "translate"),
                r.qZA(),
                r.qZA(),
                r.qZA()
            }
            if (2 & t) {
                const t = r.oxw();
                r.xp6(3),
                r.AsE("", 2 === t.category || 2 == t.params.data.posFlag && 0 != t.params.data.posLevel ? "Position" : "Department", " ", r.lcZ(4, 7, " Name"), ""),
                r.xp6(2),
                r.s9C("placeholder", r.lcZ(6, 9, "Enter Name")),
                r.Q6J("ngModel", t.name),
                r.xp6(4),
                r.Oqu(r.lcZ(10, 11, "Description")),
                r.xp6(2),
                r.s9C("placeholder", r.lcZ(12, 13, "Enter Name")),
                r.Q6J("ngModel", t.desc)
            }
        }
        function T(t, e) {
            if (1 & t) {
                const t = r.EpF();
                r.TgZ(0, "div", 6),
                r.TgZ(1, "div", 6),
                r.TgZ(2, "ion-label"),
                r._uU(3),
                r.ALo(4, "translate"),
                r.qZA(),
                r.TgZ(5, "ion-input", 8),
                r.NdJ("ngModelChange", function(e) {
                    return r.CHM(t),
                    r.oxw().name = e
                }),
                r.ALo(6, "translate"),
                r.qZA(),
                r.qZA(),
                r.TgZ(7, "div", 6),
                r.TgZ(8, "ion-label"),
                r._uU(9),
                r.ALo(10, "translate"),
                r.qZA(),
                r.TgZ(11, "ion-input", 8),
                r.NdJ("ngModelChange", function(e) {
                    return r.CHM(t),
                    r.oxw().desc = e
                }),
                r.ALo(12, "translate"),
                r.qZA(),
                r.qZA(),
                r.qZA()
            }
            if (2 & t) {
                const t = r.oxw();
                r.xp6(3),
                r.Oqu(r.lcZ(4, 6, "Position Name")),
                r.xp6(2),
                r.s9C("placeholder", r.lcZ(6, 8, "Enter Name")),
                r.Q6J("ngModel", t.name),
                r.xp6(4),
                r.Oqu(r.lcZ(10, 10, "Description")),
                r.xp6(2),
                r.s9C("placeholder", r.lcZ(12, 12, "Enter Name")),
                r.Q6J("ngModel", t.desc)
            }
        }
        let C = (()=>{
            class t {
                constructor(t, e, n, o, i) {
                    this.navigationService = t,
                    this.navParams = e,
                    this.orgService = n,
                    this.alertService = o,
                    this.eventService = i,
                    this.mode = "",
                    this.postOrDeptParent = "",
                    this.selectDepartement = "",
                    this.category = "",
                    this.name = "",
                    this.desc = "",
                    this.listMenu = [{
                        name: "Position",
                        value: 2
                    }, {
                        name: "Department",
                        value: 1
                    }],
                    this.list = [],
                    this.listDepartement = [],
                    this.loadingSave = !1
                }
                ngOnInit() {
                    var t;
                    if (this.params = null !== (t = this.navParams.get("params")) && void 0 !== t ? t : this.navigationService.getParams(),
                    console.log(this.params, "this.params"),
                    this.mode = this.params.mode,
                    this.isEdit = "childEdit" === this.params.mode,
                    0 !== this.params.data.parentId && "childEdit" === this.mode) {
                        this.getDeptList();
                        const t = this.params.list.filter(t=>t.positionId !== this.params.data.positionId);
                        if (console.log("templst", t),
                        1 === this.params.data.posFlag) {
                            const e = t.shift()
                              , n = t.filter(t=>2 !== t.posFlag);
                            n.unshift(e),
                            console.log("deptlst", n),
                            this.list = [];
                            for (const t of n)
                                this.list.push({
                                    name: 1 === t.posFlag ? t.name + " (Department)" : t.name + " (Position)",
                                    value: t.positionId
                                })
                        } else {
                            this.list = [];
                            for (const e of t)
                                this.list.push({
                                    name: 1 === e.posFlag ? e.name + " (Department)" : e.name + " (Position)",
                                    value: e.positionId
                                })
                        }
                        console.log("this list", this.list),
                        this.name = this.params.data.posNameEn,
                        this.selectDepartement = this.params.data.parentId,
                        this.postOrDeptParent = this.params.data.parentId
                    }
                }
                getDeptList() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const t = {
                                limit: 1e3
                            }
                              , e = yield this.orgService.findDepartment(t);
                            this.listDepartement = [];
                            for (const n of e)
                                this.listDepartement.push({
                                    name: n.posNameEn,
                                    value: n.positionId
                                });
                            console.log("list dept", this.listDepartement)
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        }
                    })
                }
                action(t) {
                    console.log(t)
                }
                submit() {
                    this.isEdit ? this.save() : this.add()
                }
                add() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        2 === this.params.data.posFlag && 0 !== this.params.data.posLevel ? this.createPos() : 1 === this.category ? this.createDept() : this.createPos()
                    })
                }
                createDept() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.loadingSave = !0;
                            const t = {
                                deptId: this.params.data.positionId,
                                deptName: this.name,
                                jobDesc: this.desc
                            };
                            yield this.orgService.createDepartment(t),
                            this.eventService.publish(i.A.LOAD_ORGANIZATION, !0),
                            yield this.alertService.presentAlertSuccess(a.V.SUCCESSFULLY_SAVED),
                            this.navigationService.back()
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        } finally {
                            this.loadingSave = !1
                        }
                    })
                }
                createPos() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.loadingSave = !0;
                            const t = {
                                deptId: this.params.data.positionId,
                                posName: this.name,
                                jobDesc: this.desc
                            };
                            yield this.orgService.createPosition(t),
                            this.eventService.publish(i.A.LOAD_ORGANIZATION, !0),
                            yield this.alertService.presentAlertSuccess(a.V.SUCCESSFULLY_SAVED),
                            this.navigationService.back()
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        } finally {
                            this.loadingSave = !1
                        }
                    })
                }
                save() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.loadingSave = !0;
                            const t = {
                                parentId: this.postOrDeptParent,
                                posName: this.name,
                                positionId: this.params.data.positionId,
                                deptId: this.selectDepartement
                            };
                            yield this.orgService.updatePosition(t),
                            this.eventService.publish(i.A.LOAD_ORGANIZATION, !0),
                            yield this.alertService.presentAlertSuccess(a.V.SUCCESSFULLY_SAVED),
                            this.navigationService.back()
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        } finally {
                            this.loadingSave = !1
                        }
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(r.Y36(s.f),r.Y36(l.X1),r.Y36(c.M),r.Y36(d.c),r.Y36(u.n))
            }
            ,
            t.\u0275cmp = r.Xpm({
                type: t,
                selectors: [["app-organization-form"]],
                decls: 17,
                vars: 11,
                consts: [[4, "ngIf"], [1, "ion-padding"], ["fxLayout", "column", "fxLayoutGap", "16px"], ["class", "section", "fxLayout", "column", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "flex-end center"], [3, "disabled", "click"], ["fxLayout", "column", 1, "section"], [3, "list", "ngModel", "clickAction", "ngModelChange"], [3, "placeholder", "ngModel", "ngModelChange"]],
                template: function(t, e) {
                    1 & t && (r.TgZ(0, "ion-header"),
                    r.TgZ(1, "ion-toolbar"),
                    r.YNc(2, v, 3, 3, "ion-title", 0),
                    r.YNc(3, Z, 3, 3, "ion-title", 0),
                    r.qZA(),
                    r.qZA(),
                    r.TgZ(4, "ion-content", 1),
                    r.TgZ(5, "div", 2),
                    r.YNc(6, b, 5, 5, "div", 3),
                    r.YNc(7, x, 5, 5, "div", 3),
                    r.YNc(8, A, 5, 5, "div", 3),
                    r.YNc(9, y, 13, 15, "div", 3),
                    r.YNc(10, T, 13, 14, "div", 3),
                    r.qZA(),
                    r.qZA(),
                    r.TgZ(11, "ion-footer", 1),
                    r.TgZ(12, "ion-toolbar"),
                    r.TgZ(13, "div", 4),
                    r.TgZ(14, "gd-comp-button", 5),
                    r.NdJ("click", function() {
                        return e.submit()
                    }),
                    r._uU(15),
                    r.ALo(16, "translate"),
                    r.qZA(),
                    r.qZA(),
                    r.qZA(),
                    r.qZA()),
                    2 & t && (r.xp6(2),
                    r.Q6J("ngIf", "childAdd" === e.mode || "parentAdd" === e.mode),
                    r.xp6(1),
                    r.Q6J("ngIf", "childEdit" === e.mode),
                    r.xp6(3),
                    r.Q6J("ngIf", "childEdit" === e.mode),
                    r.xp6(1),
                    r.Q6J("ngIf", "childEdit" === e.mode),
                    r.xp6(1),
                    r.Q6J("ngIf", "childAdd" === e.mode && 1 === e.params.data.posFlag || "parentAdd" === e.mode),
                    r.xp6(1),
                    r.Q6J("ngIf", e.category || "childEdit" === e.mode),
                    r.xp6(1),
                    r.Q6J("ngIf", "childAdd" === e.mode && 2 === e.params.data.posFlag),
                    r.xp6(4),
                    r.Q6J("disabled", "" === e.name),
                    r.xp6(1),
                    r.Oqu(r.lcZ(16, 9, "Save")))
                },
                directives: [l.Gu, l.sr, p.O5, l.W2, g.xw, g.SQ, l.fr, g.Wh, m.qH, l.wd, l.Q$, m.sJ, h.JJ, h.On, l.pK, l.j9],
                pipes: [f.X$],
                styles: [".section[_ngcontent-%COMP%]{padding:8px 0}.section[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-bottom:var(--gdx-border-radius);color:var(--ion-color-medium)}.section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0}.section[_ngcontent-%COMP%]   ion-label.title[_ngcontent-%COMP%]{color:var(--ion-color-dark)}.section[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{--padding-bottom: 16px;--padding-end: 16px;--padding-start: 16px;--padding-top: 16px;border-radius:var(--gdx-border-radius);border:1px solid var(--gdx-color-outline);margin-top:6px}"]
            }),
            t
        }
        )()
    },
    88550: function(t, e, n) {
        n.d(e, {
            K: function() {
                return q
            }
        });
        var o = n(64762)
          , i = n(18051)
          , a = n(10922)
          , r = n(22832)
          , s = n(37716)
          , l = n(55546)
          , c = n(996)
          , d = n(88164)
          , u = n(12132)
          , p = n(12255)
          , g = n(57196)
          , m = n(45131)
          , h = n(27996)
          , f = n(52928)
          , v = n(38583)
          , Z = n(3679)
          , b = n(35618)
          , x = n(29790);
        function A(t, e) {
            if (1 & t) {
                const t = s.EpF();
                s.TgZ(0, "div", 15),
                s.NdJ("click", function() {
                    s.CHM(t);
                    const e = s.oxw().index;
                    return s.oxw(2).removeRow(e)
                }),
                s._UZ(1, "gd-comp-icon", 9),
                s.qZA()
            }
            2 & t && (s.xp6(1),
            s.Q6J("type", "svg")("name", "icon-close")("color", "medium")("size", "20"))
        }
        function y(t, e) {
            if (1 & t) {
                const t = s.EpF();
                s.TgZ(0, "div"),
                s.TgZ(1, "div", 4),
                s.TgZ(2, "div", 10),
                s.TgZ(3, "ion-label", 5),
                s._uU(4),
                s.ALo(5, "translate"),
                s.qZA(),
                s.YNc(6, A, 2, 4, "div", 11),
                s.qZA(),
                s.TgZ(7, "ion-input", 12),
                s.NdJ("click", function(e) {
                    const n = s.CHM(t).index;
                    return s.oxw(2).viewListEmp(n, e)
                })("ngModelChange", function(e) {
                    return s.CHM(t).$implicit.appCode = e
                }),
                s.ALo(8, "translate"),
                s.qZA(),
                s.qZA(),
                s.TgZ(9, "div", 13),
                s.TgZ(10, "ion-label", 5),
                s._uU(11),
                s.ALo(12, "translate"),
                s.qZA(),
                s.TgZ(13, "ion-checkbox", 14),
                s.NdJ("ngModelChange", function(e) {
                    return s.CHM(t).$implicit.isreq = e
                }),
                s.qZA(),
                s.qZA(),
                s.qZA()
            }
            if (2 & t) {
                const t = e.$implicit
                  , n = e.index;
                s.xp6(4),
                s.AsE("", s.lcZ(5, 7, "Approval"), " ", n + 1, ""),
                s.xp6(2),
                s.Q6J("ngIf", n > 0),
                s.xp6(1),
                s.s9C("placeholder", s.lcZ(8, 9, "Approval")),
                s.Q6J("ngModel", t.appCode),
                s.xp6(4),
                s.Oqu(s.lcZ(12, 11, "Required To Approve")),
                s.xp6(2),
                s.Q6J("ngModel", t.isreq)
            }
        }
        function T(t, e) {
            if (1 & t) {
                const t = s.EpF();
                s.ynx(0),
                s.TgZ(1, "div", 4),
                s.TgZ(2, "ion-label", 5),
                s._uU(3),
                s.ALo(4, "translate"),
                s.qZA(),
                s.TgZ(5, "ion-input", 6),
                s.NdJ("ngModelChange", function(e) {
                    return s.CHM(t),
                    s.oxw().requestApprovalName = e
                }),
                s.qZA(),
                s.qZA(),
                s.YNc(6, y, 14, 13, "div", 7),
                s.TgZ(7, "gd-comp-button", 8),
                s.NdJ("click", function() {
                    return s.CHM(t),
                    s.oxw().addRow()
                }),
                s._UZ(8, "gd-comp-icon", 9),
                s._uU(9),
                s.ALo(10, "translate"),
                s.qZA(),
                s.BQk()
            }
            if (2 & t) {
                const t = s.oxw();
                s.xp6(3),
                s.Oqu(s.lcZ(4, 10, "Request Approval")),
                s.xp6(2),
                s.Q6J("disabled", !0)("ngModel", t.requestApprovalName),
                s.xp6(1),
                s.Q6J("ngForOf", t.arrAproval),
                s.xp6(1),
                s.Q6J("fill", "clear"),
                s.xp6(1),
                s.Q6J("type", "svg")("name", "icon-plus")("color", "primary")("size", "20"),
                s.xp6(1),
                s.hij(" ", s.lcZ(10, 12, "Add New Approval"), " ")
            }
        }
        function C(t, e) {
            1 & t && s._UZ(0, "gd-comp-error-state")
        }
        let q = (()=>{
            class t {
                constructor(t, e, n, o, i, a, r, s) {
                    this.navParams = t,
                    this.navigationService = e,
                    this.eventService = n,
                    this.alertService = o,
                    this.reqApprovalService = i,
                    this.auth = a,
                    this.popoverService = r,
                    this.modalService = s,
                    this.isedit = !1,
                    this.isError = !1,
                    this.loadingBtn = !1,
                    this.arrAproval = [],
                    this.step = 1
                }
                ngOnInit() {
                    var t;
                    this.params = null !== (t = this.navigationService.getParams()) && void 0 !== t ? t : this.navParams.get("params"),
                    this.requestApprovalName = this.params.requestApprovalName;
                    const e = this.params.requestApprovalFormula.split("+");
                    for (const n of e) {
                        const t = n.substring(n.length - 1, n.length)
                          , e = {
                            appStep: this.step,
                            appCode: "*" === t ? n.slice(0, -1) : n,
                            isreq: "*" === t,
                            showEmpOpt: !1,
                            select: !0
                        };
                        this.arrAproval.push(e),
                        this.step = this.step + 1
                    }
                }
                submit() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.loadingBtn = !0;
                            const t = {
                                arrFormula: this.arrAproval,
                                code: this.params.requestApprovalCode
                            };
                            yield this.reqApprovalService.saveReqApproval(t),
                            this.eventService.publish(i.A.LOAD_JOB_GRADE_LIST, !0),
                            yield this.alertService.presentAlertSuccess(a.V.SUCCESSFULLY_SAVED),
                            this.navigationService.back()
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        } finally {
                            this.loadingBtn = !1
                        }
                    })
                }
                addRow() {
                    this.arrAproval.push({
                        appStep: this.step,
                        appCode: "",
                        isreq: !1,
                        select: !1
                    }),
                    this.step = this.step + 1
                }
                removeRow(t) {
                    this.arrAproval.splice(t, 1),
                    this.step = this.step - 1
                }
                viewListEmp(t, e) {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        const n = {
                            data: this.arrAproval[t]
                        }
                          , o = yield this.popoverService.present(r.F, e, n, "transparent");
                        o && (this.arrAproval[t].appCode = o.groupName,
                        this.arrAproval[t].select = o.select)
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(s.Y36(l.X1),s.Y36(c.f),s.Y36(d.n),s.Y36(u.c),s.Y36(p.j),s.Y36(g.V),s.Y36(m.X),s.Y36(h.Z))
            }
            ,
            t.\u0275cmp = s.Xpm({
                type: t,
                selectors: [["app-request-approval-edit"]],
                decls: 12,
                vars: 9,
                consts: [["slot", "end", 3, "loading", "click"], [1, "ion-padding"], [1, "container"], [4, "ngIf"], [1, "ion-item"], ["bold-text", ""], [3, "disabled", "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [3, "fill", "click"], [3, "type", "name", "color", "size"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["class", "btn-close", "fxLayout", "row", "fxLayoutAlign", "center center", "tappable", "", 3, "click", 4, "ngIf"], ["readonly", "", 3, "placeholder", "ngModel", "click", "ngModelChange"], ["fxLayout", "row", "fxLayoutGap", "auto", 1, "ion-item"], [3, "ngModel", "ngModelChange"], ["fxLayout", "row", "fxLayoutAlign", "center center", "tappable", "", 1, "btn-close", 3, "click"]],
                template: function(t, e) {
                    1 & t && (s.TgZ(0, "ion-header"),
                    s.TgZ(1, "ion-toolbar"),
                    s.TgZ(2, "ion-title"),
                    s._uU(3),
                    s.ALo(4, "translate"),
                    s.qZA(),
                    s.TgZ(5, "gd-comp-button", 0),
                    s.NdJ("click", function() {
                        return e.submit()
                    }),
                    s._uU(6),
                    s.ALo(7, "translate"),
                    s.qZA(),
                    s.qZA(),
                    s.qZA(),
                    s.TgZ(8, "ion-content", 1),
                    s.TgZ(9, "div", 2),
                    s.YNc(10, T, 11, 14, "ng-container", 3),
                    s.YNc(11, C, 1, 0, "gd-comp-error-state", 3),
                    s.qZA(),
                    s.qZA()),
                    2 & t && (s.xp6(3),
                    s.Oqu(s.lcZ(4, 5, "Request Approval Edit")),
                    s.xp6(2),
                    s.Q6J("loading", e.loadingBtn),
                    s.xp6(1),
                    s.hij("", s.lcZ(7, 7, "Save"), " "),
                    s.xp6(4),
                    s.Q6J("ngIf", !e.isError),
                    s.xp6(1),
                    s.Q6J("ngIf", e.isError))
                },
                directives: [l.Gu, l.sr, l.wd, f.qH, l.W2, v.O5, l.Q$, l.pK, l.j9, Z.JJ, Z.On, v.sg, f.pD, b.xw, b.Wh, b.SQ, l.nz, l.w, f.K$],
                pipes: [x.X$],
                styles: ["ion-item[_ngcontent-%COMP%], .ion-item[_ngcontent-%COMP%]{--border-width: 0px;margin-bottom:16px;display:flex;flex-direction:column}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], .ion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ion-color-medium);margin-bottom:12px}ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], .ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{border-radius:8px;padding:0 8px!important;border:1px solid var(--gdx-color-outline)}.line[_ngcontent-%COMP%]{width:100%;border-top:1px solid var(--gdx-color-outline)}[_nghost-%COMP%]     gdx-input-date .multi-box .section{display:flex;flex-direction:column}[_nghost-%COMP%]     gdx-input-date .multi-box ion-label.title{color:var(--ion-color-medium)!important;margin-bottom:8px!important;font-weight:bold!important}"]
            }),
            t
        }
        )()
    },
    84270: function(t, e, n) {
        n.d(e, {
            s: function() {
                return Z
            }
        });
        var o = n(64762)
          , i = n(37716)
          , a = n(55546)
          , r = n(996)
          , s = n(88164)
          , l = n(12132)
          , c = n(13829)
          , d = n(57196)
          , u = n(38583)
          , p = n(3679)
          , g = n(52928)
          , m = n(29790);
        function h(t, e) {
            if (1 & t && (i.TgZ(0, "div", 3),
            i.TgZ(1, "ion-label", 4),
            i._uU(2),
            i.ALo(3, "translate"),
            i.qZA(),
            i._UZ(4, "img", 11),
            i.qZA()),
            2 & t) {
                const t = i.oxw(2);
                i.xp6(2),
                i.Oqu(i.lcZ(3, 3, "Coordinate")),
                i.xp6(2),
                i.hYB("src", "https://maps.googleapis.com/maps/api/staticmap?center=", null == t.params ? null : t.params.latLng, "&zoom=15&scale=1&size=400x215&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C", null == t.params ? null : t.params.latLng, "&key=AIzaSyCMu9Z9bl68pD2myITBlsZq_lroTQ7Gfd0", i.LSH)
            }
        }
        function f(t, e) {
            if (1 & t) {
                const t = i.EpF();
                i.ynx(0),
                i.TgZ(1, "div", 3),
                i.TgZ(2, "ion-label", 4),
                i._uU(3),
                i.ALo(4, "translate"),
                i.qZA(),
                i.TgZ(5, "ion-input", 5),
                i.NdJ("ngModelChange", function(e) {
                    return i.CHM(t),
                    i.oxw().formData.worklocationName = e
                }),
                i.qZA(),
                i.qZA(),
                i.TgZ(6, "div", 3),
                i.TgZ(7, "ion-label", 4),
                i._uU(8),
                i.ALo(9, "translate"),
                i.qZA(),
                i.TgZ(10, "ion-input", 6),
                i.NdJ("ngModelChange", function(e) {
                    return i.CHM(t),
                    i.oxw().formData.worklocationAddress = e
                }),
                i.qZA(),
                i.qZA(),
                i.TgZ(11, "div", 3),
                i.TgZ(12, "ion-label", 4),
                i._uU(13),
                i.ALo(14, "translate"),
                i.qZA(),
                i.TgZ(15, "ion-input", 7),
                i.NdJ("ngModelChange", function(e) {
                    return i.CHM(t),
                    i.oxw().formData.phone = e
                }),
                i.qZA(),
                i.qZA(),
                i.TgZ(16, "div", 3),
                i.TgZ(17, "ion-label", 4),
                i._uU(18),
                i.ALo(19, "translate"),
                i.qZA(),
                i.TgZ(20, "ion-input", 8),
                i.NdJ("ngModelChange", function(e) {
                    return i.CHM(t),
                    i.oxw().formData.fax = e
                }),
                i.qZA(),
                i.qZA(),
                i.TgZ(21, "div", 3),
                i.TgZ(22, "ion-label", 4),
                i._uU(23),
                i.ALo(24, "translate"),
                i.qZA(),
                i.TgZ(25, "ion-input", 9),
                i.NdJ("ngModelChange", function(e) {
                    return i.CHM(t),
                    i.oxw().formData.maxRadius = e
                }),
                i.qZA(),
                i.qZA(),
                i.YNc(26, h, 5, 5, "div", 10),
                i.BQk()
            }
            if (2 & t) {
                const t = i.oxw();
                i.xp6(3),
                i.Oqu(i.lcZ(4, 11, "Work Location Name")),
                i.xp6(2),
                i.Q6J("ngModel", t.formData.worklocationName),
                i.xp6(3),
                i.Oqu(i.lcZ(9, 13, "Work Location Address")),
                i.xp6(2),
                i.Q6J("ngModel", t.formData.worklocationAddress),
                i.xp6(3),
                i.Oqu(i.lcZ(14, 15, "Phone")),
                i.xp6(2),
                i.Q6J("ngModel", t.formData.phone),
                i.xp6(3),
                i.Oqu(i.lcZ(19, 17, "Fax")),
                i.xp6(2),
                i.Q6J("ngModel", t.formData.fax),
                i.xp6(3),
                i.Oqu(i.lcZ(24, 19, "Maximum Radius (km)")),
                i.xp6(2),
                i.Q6J("ngModel", t.formData.maxRadius),
                i.xp6(1),
                i.Q6J("ngIf", null == t.params ? null : t.params.latLng)
            }
        }
        function v(t, e) {
            1 & t && i._UZ(0, "gd-comp-error-state")
        }
        let Z = (()=>{
            class t {
                constructor(t, e, n, o, i, a) {
                    this.navParams = t,
                    this.navigationService = e,
                    this.eventService = n,
                    this.alertService = o,
                    this.worklocationService = i,
                    this.auth = a,
                    this.isedit = !1,
                    this.formData = {
                        worklocationName: "",
                        worklocationAddress: "",
                        phone: null,
                        maxRadius: null,
                        latLng: "",
                        fax: null
                    },
                    this.isError = !1,
                    this.loadingBtn = !1
                }
                ngOnInit() {
                    var t;
                    this.params = null !== (t = this.navigationService.getParams()) && void 0 !== t ? t : this.navParams.get("params"),
                    console.log(this.params),
                    this.isedit = !!this.params,
                    this.getWorkLocationDetail()
                }
                getWorkLocationDetail() {
                    var t;
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const e = {
                                worklocationCode: null === (t = this.params) || void 0 === t ? void 0 : t.worklocationCode
                            }
                              , n = yield this.worklocationService.findOneWorkLocation(e);
                            this.initForm(n)
                        } catch (e) {
                            this.alertService.presentAlertError(e)
                        }
                    })
                }
                initForm(t) {
                    var e, n, o;
                    this.isedit && (this.formData.worklocationName = null === (e = this.params) || void 0 === e ? void 0 : e.worklocationName,
                    this.formData.worklocationAddress = null === (n = this.params) || void 0 === n ? void 0 : n.worklocationAddress,
                    this.formData.phone = t.phone,
                    this.formData.maxRadius = t.maxRadius,
                    this.formData.latLng = null === (o = this.params) || void 0 === o ? void 0 : o.latLng,
                    this.formData.fax = t.fax)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(i.Y36(a.X1),i.Y36(r.f),i.Y36(s.n),i.Y36(l.c),i.Y36(c.s),i.Y36(d.V))
            }
            ,
            t.\u0275cmp = i.Xpm({
                type: t,
                selectors: [["app-work-location-detail"]],
                decls: 9,
                vars: 5,
                consts: [[1, "ion-padding"], [1, "container"], [4, "ngIf"], [1, "ion-item"], ["bold-text", ""], ["readonly", "", "placeholder", "Work location name...", "type", "text", 3, "ngModel", "ngModelChange"], ["readonly", "", "placeholder", "Work location address...", "type", "text", 3, "ngModel", "ngModelChange"], ["readonly", "", "placeholder", "Phone...", 3, "ngModel", "ngModelChange"], ["readonly", "", "placeholder", "Fax...", 3, "ngModel", "ngModelChange"], ["readonly", "", "placeholder", "Maximum radius...", "type", "number", 3, "ngModel", "ngModelChange"], ["class", "ion-item", 4, "ngIf"], [1, "map", 3, "src"]],
                template: function(t, e) {
                    1 & t && (i.TgZ(0, "ion-header"),
                    i.TgZ(1, "ion-toolbar"),
                    i.TgZ(2, "ion-title"),
                    i._uU(3),
                    i.ALo(4, "translate"),
                    i.qZA(),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(5, "ion-content", 0),
                    i.TgZ(6, "div", 1),
                    i.YNc(7, f, 27, 21, "ng-container", 2),
                    i.YNc(8, v, 1, 0, "gd-comp-error-state", 2),
                    i.qZA(),
                    i.qZA()),
                    2 & t && (i.xp6(3),
                    i.Oqu(i.lcZ(4, 3, "Work Location Detail")),
                    i.xp6(4),
                    i.Q6J("ngIf", !e.isError),
                    i.xp6(1),
                    i.Q6J("ngIf", e.isError))
                },
                directives: [a.Gu, a.sr, a.wd, a.W2, u.O5, a.Q$, a.pK, a.j9, p.JJ, p.On, a.as, g.K$],
                pipes: [m.X$],
                styles: ["ion-item[_ngcontent-%COMP%], .ion-item[_ngcontent-%COMP%]{--border-width: 0px;margin-bottom:16px;display:flex;flex-direction:column}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], .ion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ion-color-medium);margin-bottom:12px}ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], .ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{border-radius:8px;padding:0 8px!important;border:1px solid var(--gdx-color-outline)}.line[_ngcontent-%COMP%]{width:100%;border-top:1px solid var(--gdx-color-outline)}[_nghost-%COMP%]     gdx-input-date .multi-box .section{display:flex;flex-direction:column}[_nghost-%COMP%]     gdx-input-date .multi-box ion-label.title{color:var(--ion-color-medium)!important;margin-bottom:8px!important;font-weight:bold!important}"]
            }),
            t
        }
        )()
    },
    44599: function(t, e, n) {
        n.d(e, {
            a: function() {
                return g
            }
        });
        var o = n(18051)
          , i = n(37716)
          , a = n(996)
          , r = n(55546)
          , s = n(88164)
          , l = n(35618)
          , c = n(38583)
          , d = n(29790);
        function u(t, e) {
            if (1 & t && (i.TgZ(0, "div"),
            i.TgZ(1, "div", 9),
            i.TgZ(2, "ion-label", 10),
            i._uU(3),
            i.ALo(4, "translate"),
            i.qZA(),
            i.qZA(),
            i.TgZ(5, "div", 11),
            i.TgZ(6, "p", 12),
            i._uU(7),
            i.ALo(8, "translate"),
            i.qZA(),
            i.qZA(),
            i.qZA()),
            2 & t) {
                const t = i.oxw()
                  , e = t.index
                  , n = t.$implicit;
                i.xp6(3),
                i.AsE("", i.lcZ(4, 3, "No"), ": ", e + 1, ""),
                i.xp6(4),
                i.Oqu(i.lcZ(8, 5, null == n ? null : n.message))
            }
        }
        function p(t, e) {
            if (1 & t && (i.ynx(0),
            i.YNc(1, u, 9, 7, "div", 8),
            i.BQk()),
            2 & t) {
                const t = e.$implicit;
                i.xp6(1),
                i.Q6J("ngIf", t)
            }
        }
        let g = (()=>{
            class t {
                constructor(t, e, n) {
                    this.navigationService = t,
                    this.navParams = e,
                    this.eventsService = n,
                    this.params = [],
                    this.totalSuccess = 0,
                    this.totalFailed = 0
                }
                ngOnInit() {
                    var t, e, n, o, i;
                    this.params = null !== (t = this.navigationService.getParams()) && void 0 !== t ? t : this.navParams.get("params"),
                    console.log(this.params),
                    this.params && (this.totalSuccess = null === (n = null === (e = this.params) || void 0 === e ? void 0 : e.success) || void 0 === n ? void 0 : n.length,
                    this.totalFailed = null === (i = null === (o = this.params) || void 0 === o ? void 0 : o.fail) || void 0 === i ? void 0 : i.length)
                }
                ngOnDestroy() {
                    this.totalSuccess > 0 && this.eventsService.publish(o.A.LOAD_JOB_GRADE_LIST, !0)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(i.Y36(a.f),i.Y36(r.X1),i.Y36(s.n))
            }
            ,
            t.\u0275cmp = i.Xpm({
                type: t,
                selectors: [["app-work-location-result-upload"]],
                decls: 20,
                vars: 12,
                consts: [["slot", "start"], ["gdx-content", ""], ["mb-4", "", "fxLayout", "row", "fxLayoutGap", "10px", "fxLayoutAlign", " center", 1, "box-success"], ["name", "cloud-done-outline"], ["item-content", "", "fxFlex", ""], ["mb-16", "", "fxLayout", "row", "fxLayoutGap", "10px", "fxLayoutAlign", " center", 1, "box-error"], ["name", "alert-circle-outline"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["fxLayout", "column", 1, "wrap-box"], ["no-margin", ""], ["mt-16", "", 1, "message-box"], [1, "label-message"]],
                template: function(t, e) {
                    1 & t && (i.TgZ(0, "ion-header"),
                    i.TgZ(1, "ion-toolbar"),
                    i.TgZ(2, "ion-buttons", 0),
                    i._UZ(3, "ion-back-button"),
                    i.qZA(),
                    i.TgZ(4, "ion-title"),
                    i._uU(5),
                    i.ALo(6, "translate"),
                    i.qZA(),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(7, "ion-content"),
                    i.TgZ(8, "ion-card", 1),
                    i.TgZ(9, "div", 2),
                    i._UZ(10, "ion-icon", 3),
                    i.TgZ(11, "ion-label", 4),
                    i._uU(12),
                    i.ALo(13, "translate"),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(14, "div", 5),
                    i._UZ(15, "ion-icon", 6),
                    i.TgZ(16, "ion-label", 4),
                    i._uU(17),
                    i.ALo(18, "translate"),
                    i.qZA(),
                    i.qZA(),
                    i.YNc(19, p, 2, 1, "ng-container", 7),
                    i.qZA(),
                    i.qZA()),
                    2 & t && (i.xp6(5),
                    i.Oqu(i.lcZ(6, 6, "Result Upload")),
                    i.xp6(7),
                    i.AsE("", i.lcZ(13, 8, "Success"), ": ", e.totalSuccess, ""),
                    i.xp6(5),
                    i.AsE("", i.lcZ(18, 10, "Failed"), ": ", e.totalFailed, ""),
                    i.xp6(2),
                    i.Q6J("ngForOf", e.params.fail))
                },
                directives: [r.Gu, r.sr, r.Sm, r.oU, r.cs, r.wd, r.W2, r.PM, l.xw, l.SQ, l.Wh, r.gu, r.Q$, l.yH, c.sg, c.O5],
                pipes: [d.X$],
                styles: [".box-success[_ngcontent-%COMP%]{padding:6px 10px}.box-success[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-size:24px}.box-error[_ngcontent-%COMP%]{background-color:rgba(var(--ion-color-danger-rgb),.2);padding:6px 10px;border-radius:4px}.box-error[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-danger);font-size:24px}.message-box[_ngcontent-%COMP%]{background-color:rgba(var(--ion-color-danger-rgb),.1);border-left:4px solid var(--ion-color-danger);padding:6px 10px;border-radius:4px;margin-bottom:12px}"]
            }),
            t
        }
        )()
    },
    14861: function(t, e, n) {
        n.d(e, {
            R: function() {
                return A
            }
        });
        var o = n(64762)
          , i = n(18824)
          , a = n(44599)
          , r = n(37716)
          , s = n(13829)
          , l = n(12132)
          , c = n(27019)
          , d = n(996)
          , u = n(55546)
          , p = n(38583)
          , g = n(35618)
          , m = n(52928)
          , h = n(3679)
          , f = n(29790);
        const v = ["fileInput"];
        function Z(t, e) {
            if (1 & t) {
                const t = r.EpF();
                r.TgZ(0, "gd-comp-button", 8),
                r.NdJ("click", function() {
                    return r.CHM(t),
                    r.oxw(2).download()
                }),
                r._UZ(1, "gd-comp-icon", 9),
                r._uU(2),
                r.ALo(3, "translate"),
                r.qZA()
            }
            if (2 & t) {
                const t = r.oxw(2);
                r.Q6J("loading", t.loadingBtn)("fill", "outline"),
                r.xp6(1),
                r.Q6J("type", "svg")("name", "icon-download-cloud")("color", "primary")("size", "20"),
                r.xp6(1),
                r.hij(" ", r.lcZ(3, 7, "Download Template"), " ")
            }
        }
        function b(t, e) {
            if (1 & t) {
                const t = r.EpF();
                r.TgZ(0, "div", 3),
                r.YNc(1, Z, 4, 9, "gd-comp-button", 4),
                r.TgZ(2, "div", 5),
                r.TgZ(3, "ion-label", 6),
                r._uU(4),
                r.ALo(5, "translate"),
                r.qZA(),
                r.TgZ(6, "gd-comp-upload", 7),
                r.NdJ("ngModelChange", function(e) {
                    return r.CHM(t),
                    r.oxw().file = e
                })("fileChange", function(e) {
                    return r.CHM(t),
                    r.oxw().upload(e)
                }),
                r.qZA(),
                r.qZA(),
                r.qZA()
            }
            if (2 & t) {
                const t = r.oxw();
                r.xp6(1),
                r.Q6J("ngIf", !t.isError),
                r.xp6(3),
                r.Oqu(r.lcZ(5, 4, "Upload Work Location")),
                r.xp6(2),
                r.Q6J("ngModel", t.file)("uploadProgress", t.uploadProgress)
            }
        }
        function x(t, e) {
            if (1 & t) {
                const t = r.EpF();
                r.TgZ(0, "gd-comp-error-state", 10),
                r.NdJ("result", function(e) {
                    return r.CHM(t),
                    r.oxw().errorAction(e)
                }),
                r.qZA()
            }
        }
        let A = (()=>{
            class t {
                constructor(t, e, n, o) {
                    this.worklocationService = t,
                    this.alertService = e,
                    this.loadingService = n,
                    this.navigationService = o,
                    this.uploadProgress = -1,
                    this.isError = !1,
                    this.loadingBtn = !1
                }
                ngOnInit() {}
                download() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        yield this.worklocationService.downloadTemplate()
                    })
                }
                errorAction(t) {}
                upload(t) {
                    this.processWebFile(t)
                }
                processWebFile(t) {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.uploadProgress = 50;
                            const e = yield this.worklocationService.processWebFile(t);
                            if (!e.cancelled) {
                                yield this.loadingService.showLoading();
                                const t = yield this.worklocationService.uploadWorkLocation(e);
                                this.navigationService.pushSide(a.a, i.R.WORK_LOCATION_RESULTUPLOAD, null == t ? void 0 : t.data)
                            }
                        } catch (e) {
                            this.alertService.presentAlertError(e)
                        } finally {
                            this.loadingService.hideLoading(),
                            this.uploadProgress = 100,
                            this.uploadProgress = -1
                        }
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(r.Y36(s.s),r.Y36(l.c),r.Y36(c.b),r.Y36(d.f))
            }
            ,
            t.\u0275cmp = r.Xpm({
                type: t,
                selectors: [["app-work-location-upload"]],
                viewQuery: function(t, e) {
                    if (1 & t && r.Gf(v, 5),
                    2 & t) {
                        let t;
                        r.iGM(t = r.CRH()) && (e.fileInput = t.first)
                    }
                },
                decls: 8,
                vars: 5,
                consts: [[1, "ion-padding"], ["fxLayout", "column", "fxLayoutGap", "16px", 4, "ngIf"], [3, "result", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "16px"], [3, "loading", "fill", "click", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "8px"], ["bold-text", ""], [3, "ngModel", "uploadProgress", "ngModelChange", "fileChange"], [3, "loading", "fill", "click"], [3, "type", "name", "color", "size"], [3, "result"]],
                template: function(t, e) {
                    1 & t && (r.TgZ(0, "ion-header"),
                    r.TgZ(1, "ion-toolbar"),
                    r.TgZ(2, "ion-title"),
                    r._uU(3),
                    r.ALo(4, "translate"),
                    r.qZA(),
                    r.qZA(),
                    r.qZA(),
                    r.TgZ(5, "ion-content", 0),
                    r.YNc(6, b, 7, 6, "div", 1),
                    r.YNc(7, x, 1, 0, "gd-comp-error-state", 2),
                    r.qZA()),
                    2 & t && (r.xp6(3),
                    r.Oqu(r.lcZ(4, 3, "Upload Work Location")),
                    r.xp6(3),
                    r.Q6J("ngIf", !e.isError),
                    r.xp6(1),
                    r.Q6J("ngIf", e.isError))
                },
                directives: [u.Gu, u.sr, u.wd, u.W2, p.O5, g.xw, g.SQ, u.Q$, m.IL, h.JJ, h.On, m.qH, m.pD, m.K$],
                pipes: [f.X$],
                styles: ["gd-comp-icon[_ngcontent-%COMP%]{margin-right:4px}"]
            }),
            t
        }
        )()
    },
    693: function(t, e, n) {
        n.d(e, {
            z: function() {
                return p
            }
        });
        var o = n(38583)
          , i = n(3679)
          , a = n(55546)
          , r = n(15566)
          , s = n(20145)
          , l = n(29790)
          , c = n(24586)
          , d = n(52928)
          , u = n(37716);
        let p = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = u.oAB({
                type: t
            }),
            t.\u0275inj = u.cJS({
                imports: [[o.ez, i.u5, a.Pc, d.F$, l.aw, r.o9, s.T, d.R$, c.D]]
            }),
            t
        }
        )()
    },
    26341: function(t, e, n) {
        n.d(e, {
            R: function() {
                return x
            }
        });
        var o = n(64762)
          , i = n(37716)
          , a = n(27996)
          , r = n(996)
          , s = n(55546)
          , l = n(58890)
          , c = n(12132)
          , d = n(38583)
          , u = n(35618)
          , p = n(3679)
          , g = n(52928)
          , m = n(40719)
          , h = n(29790);
        const f = ["nama"];
        function v(t, e) {
            1 & t && (i.TgZ(0, "ion-title"),
            i._uU(1),
            i.ALo(2, "translate"),
            i.qZA()),
            2 & t && (i.xp6(1),
            i.Oqu(i.lcZ(2, 1, "Add Formula")))
        }
        function Z(t, e) {
            1 & t && (i.TgZ(0, "ion-title"),
            i._uU(1),
            i.ALo(2, "translate"),
            i.qZA()),
            2 & t && (i.xp6(1),
            i.Oqu(i.lcZ(2, 1, "Edit Formula")))
        }
        function b(t, e) {
            if (1 & t) {
                const t = i.EpF();
                i.TgZ(0, "div", 11),
                i.NdJ("click", function() {
                    const e = i.CHM(t).$implicit;
                    return i.oxw().showWord(null == e ? null : e.word)
                }),
                i.TgZ(1, "ion-label", 12),
                i._uU(2),
                i.qZA(),
                i.TgZ(3, "div", 13),
                i.TgZ(4, "ion-label"),
                i._uU(5, "="),
                i.qZA(),
                i.TgZ(6, "p", 14),
                i._uU(7),
                i.qZA(),
                i.qZA(),
                i.qZA()
            }
            if (2 & t) {
                const t = e.$implicit;
                i.xp6(2),
                i.Oqu(null == t ? null : t.description),
                i.xp6(5),
                i.Oqu(null == t ? null : t.word)
            }
        }
        let x = (()=>{
            class t {
                constructor(t, e, n, o, i) {
                    this.modalService = t,
                    this.navigationService = e,
                    this.navParams = n,
                    this.attendanceFormulaService = o,
                    this.alertService = i,
                    this.variableList = [],
                    this.formula = "",
                    this.loadingSave = !1
                }
                ngOnInit() {
                    var t, e;
                    this.params = null !== (t = this.navParams.get("params")) && void 0 !== t ? t : this.navigationService.getParams(),
                    console.log(this.params, "this.params"),
                    (null === (e = this.params) || void 0 === e ? void 0 : e.data) && (this.formula = this.params.data.attformula),
                    this.getData()
                }
                getData() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            const t = {
                                category: "ATTENDDATA"
                            }
                              , e = yield this.attendanceFormulaService.getVariableList(t);
                            for (const n of e)
                                this.variableList.push({
                                    description: n.description,
                                    word: n.word
                                })
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        }
                    })
                }
                showWord(t) {
                    null == this.formula && (this.formula = ""),
                    this.formula += t,
                    this.nameField.setFocus()
                }
                save() {
                    this.loadingSave = !0;
                    const t = {
                        params: this.formula
                    };
                    setTimeout(()=>{
                        this.loadingSave = !1,
                        this.modalService.dismiss(t)
                    }
                    , 500)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(i.Y36(a.Z),i.Y36(r.f),i.Y36(s.X1),i.Y36(l.X),i.Y36(c.c))
            }
            ,
            t.\u0275cmp = i.Xpm({
                type: t,
                selectors: [["app-attendance-formula-form"]],
                viewQuery: function(t, e) {
                    if (1 & t && i.Gf(f, 5),
                    2 & t) {
                        let t;
                        i.iGM(t = i.CRH()) && (e.nameField = t.first)
                    }
                },
                decls: 24,
                vars: 14,
                consts: [[4, "ngIf"], [1, "ion-padding"], ["fxLayout", "column", "fxLayoutGap", "24px"], ["fxLayout", "column", "fxLayoutGap", "8px", 1, "section"], ["placeholder", "Add formula here..., you can also choose variable below to use it in formula", 3, "ngModel", "ngModelChange"], ["nama", ""], ["fxLayout", "column", "fxLayoutGap", "8px"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "list-box"], ["class", "list-section", "fxLayoutGap", "5px", "fxLayout", "row", "fxFlex", "auto", "gdx-ripple-effect", "", "gdx-ripple-effecttappable", "", "fxLayoutAlign", "start center", 3, "click", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "flex-end center"], [3, "loading", "click"], ["fxLayoutGap", "5px", "fxLayout", "row", "fxFlex", "auto", "gdx-ripple-effect", "", "gdx-ripple-effecttappable", "", "fxLayoutAlign", "start center", 1, "list-section", 3, "click"], ["fxFlex", "130px", 1, "ion-no-margin", "title"], ["fxLayout", "row", "fxLayoutGap", "5px", "fxLayoutAlign", "start center"], [1, "ion-no-margin"]],
                template: function(t, e) {
                    1 & t && (i.TgZ(0, "ion-header"),
                    i.TgZ(1, "ion-toolbar"),
                    i.YNc(2, v, 3, 3, "ion-title", 0),
                    i.YNc(3, Z, 3, 3, "ion-title", 0),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(4, "ion-content", 1),
                    i.TgZ(5, "div", 2),
                    i.TgZ(6, "div", 3),
                    i.TgZ(7, "ion-label"),
                    i._uU(8),
                    i.ALo(9, "translate"),
                    i.qZA(),
                    i.TgZ(10, "ion-textarea", 4, 5),
                    i.NdJ("ngModelChange", function(t) {
                        return e.formula = t
                    }),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(12, "div", 6),
                    i.TgZ(13, "ion-label"),
                    i._uU(14),
                    i.ALo(15, "translate"),
                    i.qZA(),
                    i.TgZ(16, "div", 7),
                    i.YNc(17, b, 8, 2, "div", 8),
                    i.qZA(),
                    i.qZA(),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(18, "ion-footer", 1),
                    i.TgZ(19, "ion-toolbar"),
                    i.TgZ(20, "div", 9),
                    i.TgZ(21, "gd-comp-button", 10),
                    i.NdJ("click", function() {
                        return e.save()
                    }),
                    i._uU(22),
                    i.ALo(23, "translate"),
                    i.qZA(),
                    i.qZA(),
                    i.qZA(),
                    i.qZA()),
                    2 & t && (i.xp6(2),
                    i.Q6J("ngIf", !(null != e.params && e.params.data)),
                    i.xp6(1),
                    i.Q6J("ngIf", null == e.params ? null : e.params.data),
                    i.xp6(5),
                    i.Oqu(i.lcZ(9, 8, "Edit Formula")),
                    i.xp6(2),
                    i.Q6J("ngModel", e.formula),
                    i.xp6(4),
                    i.Oqu(i.lcZ(15, 10, "Variable")),
                    i.xp6(3),
                    i.Q6J("ngForOf", e.variableList),
                    i.xp6(4),
                    i.Q6J("loading", e.loadingSave),
                    i.xp6(1),
                    i.Oqu(i.lcZ(23, 12, "Save")))
                },
                directives: [s.Gu, s.sr, d.O5, s.W2, u.xw, u.SQ, s.Q$, s.g2, s.j9, p.JJ, p.On, u.Wh, d.sg, s.fr, g.qH, s.wd, u.yH, m.u_],
                pipes: [h.X$],
                styles: [".section[_ngcontent-%COMP%]{padding:8px 0}.section[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-bottom:var(--gdx-border-radius);color:var(--ion-color-medium)}.section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0}.section[_ngcontent-%COMP%]   ion-label.title[_ngcontent-%COMP%]{color:var(--ion-color-dark)}.section[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%]{--padding-bottom: 16px;--padding-end: 16px;--padding-start: 16px;--padding-top: 16px;border-radius:var(--gdx-border-radius);border:1px solid var(--gdx-color-outline);margin-top:6px}.list-box[_ngcontent-%COMP%]{flex-wrap:wrap}.list-box[_ngcontent-%COMP%]   .list-section[_ngcontent-%COMP%]{padding:8px}.list-box[_ngcontent-%COMP%]   .list-section[_ngcontent-%COMP%]   ion-label.title[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.list-box[_ngcontent-%COMP%]   .list-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ion-color-medium)}"]
            }),
            t
        }
        )()
    },
    51662: function(t, e, n) {
        n.d(e, {
            f: function() {
                return m
            }
        });
        var o = n(64762)
          , i = n(10922)
          , a = n(37716)
          , r = n(12132)
          , s = n(29790)
          , l = n(27969)
          , c = n(16343);
        let d = (()=>{
            class t {
                constructor(t, e) {
                    this.translateService = t,
                    this.settingApi = e,
                    this.subscription = []
                }
                unsubscribe() {
                    this.subscription.forEach(t=>t.unsubscribe())
                }
                dispose() {
                    this.unsubscribe()
                }
                getCompanySetting() {
                    return new Promise((t,e)=>{
                        this.subscription.push(this.settingApi.getCompanySetting().pipe((0,
                        l.U)(t=>t.data)).subscribe(e=>{
                            t(e)
                        }
                        , t=>{
                            e(t)
                        }
                        ))
                    }
                    )
                }
                save(t) {
                    return new Promise((e,n)=>{
                        this.subscription.push(this.settingApi.updateCompanySetting(t).pipe((0,
                        l.U)(t=>t.data)).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.LFG(s.sK),a.LFG(c.T))
            }
            ,
            t.\u0275prov = a.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )();
        var u = n(55546)
          , p = n(52928)
          , g = n(35618);
        let m = (()=>{
            class t {
                constructor(t, e, n) {
                    this.alertService = t,
                    this.translateService = e,
                    this.generalSettingService = n,
                    this.attdHeaderTable = [{
                        label: this.translateService.instant("Attendance"),
                        key: "title",
                        type: "text",
                        textType: "text",
                        lock: !0
                    }, {
                        label: "",
                        key: "active",
                        type: "toggle",
                        justifyContent: "end",
                        lock: !0
                    }],
                    this.empHeaderTable = [{
                        label: this.translateService.instant("Employee"),
                        key: "title",
                        type: "text",
                        textType: "text",
                        lock: !0
                    }, {
                        label: "",
                        key: "active",
                        type: "toggle",
                        justifyContent: "end",
                        lock: !0
                    }],
                    this.postHeaderTable = [{
                        label: this.translateService.instant("Posting"),
                        key: "title",
                        type: "text",
                        textType: "text",
                        lock: !0
                    }, {
                        label: "",
                        key: "active",
                        type: "toggle",
                        justifyContent: "end",
                        lock: !0
                    }],
                    this.trackHeaderTable = [{
                        label: this.translateService.instant("Tracking"),
                        key: "title",
                        type: "text",
                        textType: "text",
                        lock: !0
                    }, {
                        label: "",
                        key: "active",
                        multipleType: !0,
                        justifyContent: "end",
                        lock: !1,
                        width: "300"
                    }],
                    this.paysHeaderTable = [{
                        label: this.translateService.instant("Payslip"),
                        key: "title",
                        type: "text",
                        textType: "text",
                        lock: !0
                    }, {
                        label: "",
                        key: "active",
                        type: "toggle",
                        justifyContent: "end",
                        lock: !0
                    }],
                    this.AttdBodyTable = [{
                        key: "webAbsent",
                        title: this.translateService.instant("Record Attendance on Web"),
                        active: {
                            value: !1
                        }
                    }, {
                        key: "checkRoot",
                        title: this.translateService.instant("Record Attendance on Rooted Devices"),
                        active: {
                            value: !1
                        }
                    }, {
                        key: "takePhoto",
                        title: this.translateService.instant("Record Attendance Using Selfie"),
                        active: {
                            value: !1
                        }
                    }, {
                        key: "checkFakeGPS",
                        title: this.translateService.instant("Reject Attendance with Fake GPS"),
                        active: {
                            value: !1
                        }
                    }, {
                        key: "attendanceLock",
                        title: this.translateService.instant("Enable Locked Attendance Location"),
                        active: {
                            value: !1
                        }
                    }, {
                        key: "attendanceLockPrompt",
                        title: this.translateService.instant("Notify & Allow Attendance Record Outside Locked Location"),
                        active: {
                            value: !1
                        }
                    }, {
                        key: "offlineMode",
                        title: this.translateService.instant("Enable Offline Mode"),
                        active: {
                            value: !1
                        }
                    }, {
                        key: "checkAutoTime",
                        title: this.translateService.instant("Enable Auto Time to Record Attendance"),
                        active: {
                            value: !1
                        }
                    }, {
                        key: "developerOptions",
                        title: this.translateService.instant("Disable Developer Options to Record Attendance"),
                        active: {
                            value: !1
                        }
                    }, {
                        key: "skipErrorLocation",
                        title: this.translateService.instant("Skip location if fail to retrieve current location"),
                        active: {
                            value: !1
                        }
                    }],
                    this.empBodyTable = [{
                        key: "showEmpNo",
                        title: this.translateService.instant("Show Employee Number On Employee Search"),
                        active: {
                            value: !1
                        }
                    }],
                    this.postBodyTable = [{
                        key: "showPosting",
                        title: this.translateService.instant("Enable Posting on Feed"),
                        active: {
                            value: !1
                        }
                    }],
                    this.trackBodyTable = [{
                        key: "flexibleTracking",
                        title: this.translateService.instant("Enable Flexible Tracking"),
                        active: {
                            value: !1
                        },
                        typeOption: {
                            type: "toggle",
                            lock: !0
                        }
                    }, {
                        key: "intervalTracker",
                        title: this.translateService.instant("Send Tracking Log Every (Minute)"),
                        active: "15",
                        typeOption: {
                            type: "text",
                            lock: !1
                        }
                    }],
                    this.paysBodyTable = [{
                        key: "preventScreenshotPayslip",
                        title: this.translateService.instant("Prevent Screenshots on the Payslip Page"),
                        active: {
                            value: !1
                        },
                        parent: null
                    }],
                    this.loading = !0,
                    this.isError = !1,
                    this.loadingSave = !1
                }
                ngOnInit() {
                    this.getData()
                }
                getData() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        this.result = yield this.generalSettingService.getCompanySetting(),
                        this.loading = !1;
                        const t = [...this.paysBodyTable, ...this.empBodyTable, ...this.AttdBodyTable, ...this.trackBodyTable, ...this.postBodyTable]
                          , e = Object.keys(this.result);
                        for (const n of t)
                            for (const t of e)
                                n.key === t && "intervalTracker" !== n.key ? n.active.value = this.result[t] : n.key === t && "intervalTracker" === n.key && (n.active = this.result[t])
                    })
                }
                save() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.loadingSave = !0;
                            const t = [...this.paysBodyTable, ...this.empBodyTable, ...this.AttdBodyTable, ...this.trackBodyTable, ...this.postBodyTable]
                              , e = this.setPayload(t);
                            yield this.generalSettingService.save(e),
                            this.loadingSave = !1,
                            yield this.alertService.presentAlertSuccess(i.V.SUCCESSFULLY_SAVED),
                            this.getData()
                        } catch (t) {
                            this.loadingSave = !1,
                            yield this.alertService.presentAlertError(t)
                        }
                    })
                }
                setPayload(t) {
                    const e = {
                        checkRoot: !0,
                        checkFakeGPS: !1,
                        webAbsent: !0,
                        attendanceLock: !1,
                        attendanceLockPrompt: !1,
                        cameraLock: !1,
                        showPosting: !0,
                        attUpload: !1,
                        attendanceFace: !1,
                        checkAutoTime: !0,
                        offlineMode: !0,
                        showEmpNo: !0,
                        takePhoto: !0,
                        intervalTracker: 15,
                        socialMedia: !1,
                        changePhotoProfile: !1,
                        flexibleTracking: !1,
                        covid19Zone: !1,
                        isOnboardingNewCompany: !1,
                        actualBreak: !1,
                        imeiLock: !1,
                        previewPayslip: !0,
                        confirmClaimItem: !1,
                        remremarkisrequired: !1,
                        skipErrorLocation: !1,
                        developerOptions: !0,
                        remarkisrequiredAttcorr: !1,
                        remarkisrequiredOvt: !1,
                        remarkisrequiredOnduty: !1,
                        remarkisrequiredDeclaration: !1,
                        remarkisrequiredLeave: !1,
                        actualtimeAttcorr: !1,
                        shiftAttcorr: !1,
                        shiftfutureAttcorr: !1,
                        pnipnoAttcorr: !1,
                        ovtreason: !1,
                        ovttype: "",
                        resubmitOndutyDeclaration: !1,
                        futureonlyshiftchange: !1,
                        preventScreenshotPayslip: !1
                    }
                      , n = Object.keys(this.result)
                      , o = Object.keys(e);
                    for (const i of n)
                        for (const t of o)
                            t === i && (e[t] = this.result[i]);
                    for (const i of t)
                        "intervalTracker" !== i.key ? e[i.key] = i.active.value : "intervalTracker" === i.key && (e[i.key] = i.active);
                    return e
                }
                errorAction(t) {}
                action(t) {}
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.Y36(r.c),a.Y36(s.sK),a.Y36(d))
            }
            ,
            t.\u0275cmp = a.Xpm({
                type: t,
                selectors: [["app-change-access"]],
                decls: 20,
                vars: 27,
                consts: [["slot", "end", 3, "loading", "click"], [1, "ion-padding"], ["fxLayout", "column", "fxLayoutGap", "24px", 1, "container"], ["fxLayout", "column", 1, "table-layout"], [3, "headerTable", "bodyTable", "loading", "isError", "callbackAction", "errorResult"]],
                template: function(t, e) {
                    1 & t && (a.TgZ(0, "ion-header"),
                    a.TgZ(1, "ion-toolbar"),
                    a.TgZ(2, "ion-title"),
                    a._uU(3),
                    a.ALo(4, "translate"),
                    a.qZA(),
                    a.TgZ(5, "gd-comp-button", 0),
                    a.NdJ("click", function() {
                        return e.save()
                    }),
                    a._uU(6),
                    a.ALo(7, "translate"),
                    a.qZA(),
                    a.qZA(),
                    a.qZA(),
                    a.TgZ(8, "ion-content", 1),
                    a.TgZ(9, "div", 2),
                    a.TgZ(10, "div", 3),
                    a.TgZ(11, "gd-comp-table", 4),
                    a.NdJ("callbackAction", function(t) {
                        return e.action(t)
                    })("errorResult", function(t) {
                        return e.errorAction(t)
                    }),
                    a.qZA(),
                    a.qZA(),
                    a.TgZ(12, "div", 3),
                    a.TgZ(13, "gd-comp-table", 4),
                    a.NdJ("callbackAction", function(t) {
                        return e.action(t)
                    })("errorResult", function(t) {
                        return e.errorAction(t)
                    }),
                    a.qZA(),
                    a.qZA(),
                    a.TgZ(14, "div", 3),
                    a.TgZ(15, "gd-comp-table", 4),
                    a.NdJ("callbackAction", function(t) {
                        return e.action(t)
                    })("errorResult", function(t) {
                        return e.errorAction(t)
                    }),
                    a.qZA(),
                    a.qZA(),
                    a.TgZ(16, "div", 3),
                    a.TgZ(17, "gd-comp-table", 4),
                    a.NdJ("callbackAction", function(t) {
                        return e.action(t)
                    })("errorResult", function(t) {
                        return e.errorAction(t)
                    }),
                    a.qZA(),
                    a.qZA(),
                    a.TgZ(18, "div", 3),
                    a.TgZ(19, "gd-comp-table", 4),
                    a.NdJ("callbackAction", function(t) {
                        return e.action(t)
                    })("errorResult", function(t) {
                        return e.errorAction(t)
                    }),
                    a.qZA(),
                    a.qZA(),
                    a.qZA(),
                    a.qZA()),
                    2 & t && (a.xp6(3),
                    a.Oqu(a.lcZ(4, 23, "Change Access")),
                    a.xp6(2),
                    a.Q6J("loading", e.loadingSave),
                    a.xp6(1),
                    a.hij(" ", a.lcZ(7, 25, "Save"), " "),
                    a.xp6(5),
                    a.Q6J("headerTable", e.attdHeaderTable)("bodyTable", e.AttdBodyTable)("loading", e.loading)("isError", e.isError),
                    a.xp6(2),
                    a.Q6J("headerTable", e.empHeaderTable)("bodyTable", e.empBodyTable)("loading", e.loading)("isError", e.isError),
                    a.xp6(2),
                    a.Q6J("headerTable", e.postHeaderTable)("bodyTable", e.postBodyTable)("loading", e.loading)("isError", e.isError),
                    a.xp6(2),
                    a.Q6J("headerTable", e.trackHeaderTable)("bodyTable", e.trackBodyTable)("loading", e.loading)("isError", e.isError),
                    a.xp6(2),
                    a.Q6J("headerTable", e.paysHeaderTable)("bodyTable", e.paysBodyTable)("loading", e.loading)("isError", e.isError))
                },
                directives: [u.Gu, u.sr, u.wd, p.qH, u.W2, g.xw, g.SQ, p.xh],
                pipes: [s.X$],
                styles: [".table-layout[_ngcontent-%COMP%]{width:100%}@media only screen and (min-width: 768px){.table-layout[_ngcontent-%COMP%]{border:3px solid var(--gdx-color-bgcard2);border-radius:8px;overflow:hidden}}"]
            }),
            t
        }
        )()
    },
    35426: function(t, e, n) {
        n.d(e, {
            _: function() {
                return c
            }
        });
        var o = n(37716)
          , i = n(55546)
          , a = n(35618)
          , r = n(38583)
          , s = n(29790);
        function l(t, e) {
            1 & t && (o.TgZ(0, "div"),
            o.TgZ(1, "h6"),
            o._uU(2),
            o.ALo(3, "translate"),
            o.qZA(),
            o.TgZ(4, "p"),
            o._uU(5, "Employee who belongs to Payroll Admin group get the access to all menu in Payroll module including report and setting. Payroll Admin get the privilege to all employee's data in Payroll module."),
            o.qZA(),
            o._UZ(6, "br"),
            o.TgZ(7, "h6"),
            o._uU(8),
            o.ALo(9, "translate"),
            o.qZA(),
            o.TgZ(10, "p"),
            o._uU(11, "Employee who belongs to Attendance Admin group get the access to all menu in Attendance module including report and setting. Attendance Admin get the privilege to all employee's data in Attendance module."),
            o.qZA(),
            o._UZ(12, "br"),
            o.TgZ(13, "h6"),
            o._uU(14),
            o.ALo(15, "translate"),
            o.qZA(),
            o.TgZ(16, "p"),
            o._uU(17, "Employee who belongs to Claim Admin group get the access to all menu in Claim module including report and setting. Claim Admin get the privilege to all employee's data in Claim module."),
            o.qZA(),
            o.qZA()),
            2 & t && (o.xp6(2),
            o.Oqu(o.lcZ(3, 3, "Payroll Admin")),
            o.xp6(6),
            o.Oqu(o.lcZ(9, 5, "Attendance Admin")),
            o.xp6(6),
            o.Oqu(o.lcZ(15, 7, "Claim Admin")))
        }
        let c = (()=>{
            class t {
                constructor() {
                    this.showAll = !0
                }
                ngOnInit() {}
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275cmp = o.Xpm({
                type: t,
                selectors: [["app-change-admin-detail"]],
                decls: 13,
                vars: 7,
                consts: [[1, "ion-padding"], ["fxLayout", "column", "fxLayoutGap", "16px", 1, "container"], [4, "ngIf"]],
                template: function(t, e) {
                    1 & t && (o.TgZ(0, "ion-header"),
                    o.TgZ(1, "ion-toolbar"),
                    o.TgZ(2, "ion-title"),
                    o._uU(3),
                    o.ALo(4, "translate"),
                    o.qZA(),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(5, "ion-content", 0),
                    o.TgZ(6, "div", 1),
                    o.TgZ(7, "h6"),
                    o._uU(8),
                    o.ALo(9, "translate"),
                    o.qZA(),
                    o.TgZ(10, "p"),
                    o._uU(11, "Employee who belongs to Superadmin group get the access to all menu in GreatDay HR. They also get the privilege to see all employee's data. Also, Superadmin is one of the approver for all type of request beside direct supervisor."),
                    o.qZA(),
                    o.YNc(12, l, 18, 9, "div", 2),
                    o.qZA(),
                    o.qZA()),
                    2 & t && (o.xp6(3),
                    o.Oqu(o.lcZ(4, 3, "Admin Group Information")),
                    o.xp6(5),
                    o.Oqu(o.lcZ(9, 5, "Superadmin")),
                    o.xp6(4),
                    o.Q6J("ngIf", e.showAll))
                },
                directives: [i.Gu, i.sr, i.wd, i.W2, a.xw, a.SQ, r.O5],
                pipes: [s.X$],
                styles: [""]
            }),
            t
        }
        )()
    },
    60566: function(t, e, n) {
        n.d(e, {
            _: function() {
                return Z
            }
        });
        var o = n(64762)
          , i = n(10922)
          , a = n(37716)
          , r = n(12132)
          , s = n(29790)
          , l = n(27969)
          , c = n(16343)
          , d = n(56682)
          , u = n(52436);
        let p = (()=>{
            class t {
                constructor(t) {
                    this.baseApi = t,
                    this.model = "SFChangePrivacies"
                }
                getDataPrivacy() {
                    const t = d.n.GET
                      , e = {}
                      , n = this.baseApi.urlBuilder({
                        method: t,
                        model: this.model,
                        func: "getDataPrivacy",
                        params: e,
                        urlParams: {}
                    });
                    return this.baseApi.request({
                        method: t,
                        url: n,
                        params: e
                    })
                }
                save(t) {
                    const e = d.n.POST
                      , n = t
                      , o = this.baseApi.urlBuilder({
                        method: e,
                        model: this.model,
                        func: "savePrivacy",
                        params: n,
                        urlParams: {}
                    });
                    return this.baseApi.request({
                        method: e,
                        url: o,
                        params: n
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.LFG(u.e))
            }
            ,
            t.\u0275prov = a.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )()
          , g = (()=>{
            class t {
                constructor(t, e, n) {
                    this.translateService = t,
                    this.settingApi = e,
                    this.sfChangePrivacyApi = n,
                    this.subscription = []
                }
                unsubscribe() {
                    this.subscription.forEach(t=>t.unsubscribe())
                }
                dispose() {
                    this.unsubscribe()
                }
                getDataPrivacy() {
                    return new Promise((t,e)=>{
                        this.subscription.push(this.sfChangePrivacyApi.getDataPrivacy().pipe((0,
                        l.U)(t=>t.data)).subscribe(e=>{
                            t(e)
                        }
                        , t=>{
                            e(t)
                        }
                        ))
                    }
                    )
                }
                save(t) {
                    return new Promise((e,n)=>{
                        this.subscription.push(this.sfChangePrivacyApi.save(t).subscribe(t=>{
                            e(t)
                        }
                        , t=>{
                            n(t)
                        }
                        ))
                    }
                    )
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.LFG(s.sK),a.LFG(c.T),a.LFG(p))
            }
            ,
            t.\u0275prov = a.Yz7({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )();
        var m = n(55546)
          , h = n(65744)
          , f = n(52928)
          , v = n(35618);
        let Z = (()=>{
            class t {
                constructor(t, e, n) {
                    this.alertService = t,
                    this.translateService = e,
                    this.changePrivacyService = n,
                    this.headerTable = [{
                        label: this.translateService.instant("Change Global Privacy"),
                        key: "title",
                        type: "text",
                        textType: "text",
                        lock: !0
                    }, {
                        label: "",
                        key: "active",
                        type: "toggle",
                        justifyContent: "end",
                        lock: !0
                    }],
                    this.bodyTable = [{
                        key: "phone",
                        title: this.translateService.instant("Show Phone Employees On Profile"),
                        active: {
                            value: !1
                        }
                    }, {
                        key: "email",
                        title: this.translateService.instant("Show Email Employees On Profile"),
                        active: {
                            value: !1
                        }
                    }],
                    this.loading = !0,
                    this.isError = !1,
                    this.loadingSave = !1
                }
                ngOnInit() {
                    this.getData(),
                    setTimeout(()=>{
                        this.loading = !1
                    }
                    , 500)
                }
                getData() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.loading = !0,
                            this.result = yield this.changePrivacyService.getDataPrivacy();
                            for (const t of this.bodyTable)
                                for (const e of this.result)
                                    t.key === e.privacyCode && (t.active.value = 1 === e.status)
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        } finally {
                            this.loading = !1
                        }
                    })
                }
                save() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            this.loadingSave = !0;
                            const t = this.setPayload(this.bodyTable);
                            yield this.changePrivacyService.save(t),
                            yield this.alertService.presentAlertSuccess(i.V.SUCCESSFULLY_SAVED),
                            this.getData()
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        } finally {
                            this.loadingSave = !1
                        }
                    })
                }
                setPayload(t) {
                    const e = {
                        mailstat: !1,
                        phonestat: !1
                    };
                    for (const n of t)
                        "email" === n.key ? e.mailstat = n.active.value : "phone" === n.key && (e.phonestat = n.active.value);
                    return e
                }
                errorAction(t) {}
                action(t) {}
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(a.Y36(r.c),a.Y36(s.sK),a.Y36(g))
            }
            ,
            t.\u0275cmp = a.Xpm({
                type: t,
                selectors: [["app-change-privacy"]],
                decls: 12,
                vars: 11,
                consts: [["slot", "end", 3, "loading", "click"], [1, "ion-padding"], ["fxLayout", "row", "fxLayoutGap", "24px", 1, "container"], ["fxLayout", "column", "fxFlex", "", 1, "table-layout"], [3, "headerTable", "bodyTable", "loading", "isError", "callbackAction", "errorResult"]],
                template: function(t, e) {
                    1 & t && (a.TgZ(0, "ion-header"),
                    a.TgZ(1, "ion-toolbar"),
                    a.TgZ(2, "app-title"),
                    a._uU(3),
                    a.ALo(4, "translate"),
                    a.qZA(),
                    a.TgZ(5, "gd-comp-button", 0),
                    a.NdJ("click", function() {
                        return e.save()
                    }),
                    a._uU(6),
                    a.ALo(7, "translate"),
                    a.qZA(),
                    a.qZA(),
                    a.qZA(),
                    a.TgZ(8, "ion-content", 1),
                    a.TgZ(9, "div", 2),
                    a.TgZ(10, "div", 3),
                    a.TgZ(11, "gd-comp-table", 4),
                    a.NdJ("callbackAction", function(t) {
                        return e.action(t)
                    })("errorResult", function(t) {
                        return e.errorAction(t)
                    }),
                    a.qZA(),
                    a.qZA(),
                    a.qZA(),
                    a.qZA()),
                    2 & t && (a.xp6(3),
                    a.Oqu(a.lcZ(4, 7, "Change Privacy")),
                    a.xp6(2),
                    a.Q6J("loading", e.loadingSave),
                    a.xp6(1),
                    a.hij(" ", a.lcZ(7, 9, "Save"), " "),
                    a.xp6(5),
                    a.Q6J("headerTable", e.headerTable)("bodyTable", e.bodyTable)("loading", e.loading)("isError", e.isError))
                },
                directives: [m.Gu, m.sr, h.z, f.qH, m.W2, v.xw, v.SQ, v.yH, f.xh],
                pipes: [s.X$],
                styles: [".table-layout[_ngcontent-%COMP%]{width:100%}@media only screen and (min-width: 768px){.table-layout[_ngcontent-%COMP%]{border:3px solid var(--gdx-color-bgcard2);border-radius:8px;overflow:hidden}}"]
            }),
            t
        }
        )()
    },
    55688: function(t, e, n) {
        n.d(e, {
            M: function() {
                return d
            }
        });
        var o = n(37716)
          , i = n(996)
          , a = n(55546)
          , r = n(35618)
          , s = n(38583)
          , l = n(29790);
        function c(t, e) {
            if (1 & t && (o.TgZ(0, "div", 2),
            o.TgZ(1, "ion-label"),
            o._uU(2),
            o.ALo(3, "translate"),
            o.qZA(),
            o.TgZ(4, "h6", 3),
            o._uU(5),
            o.qZA(),
            o.qZA()),
            2 & t) {
                const t = o.oxw();
                o.xp6(2),
                o.Oqu(o.lcZ(3, 2, "Cost Center Parent Code")),
                o.xp6(3),
                o.Oqu(null == t.params || null == t.params.data ? null : t.params.data.parentCode)
            }
        }
        let d = (()=>{
            class t {
                constructor(t, e) {
                    this.navigationService = t,
                    this.navParams = e
                }
                ngOnInit() {
                    var t;
                    this.params = null !== (t = this.navParams.get("params")) && void 0 !== t ? t : this.navigationService.getParams(),
                    console.log(this.params, "this.params"),
                    console.log(this.parent, "this.parent")
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(o.Y36(i.f),o.Y36(a.X1))
            }
            ,
            t.\u0275cmp = o.Xpm({
                type: t,
                selectors: [["app-cost-center-detail"]],
                decls: 20,
                vars: 12,
                consts: [[1, "ion-padding"], ["fxLayout", "column"], ["fxLayout", "column", 1, "section"], [1, "ion-no-margin"], ["fxLayout", "column", "class", "section", 4, "ngIf"]],
                template: function(t, e) {
                    1 & t && (o.TgZ(0, "ion-header"),
                    o.TgZ(1, "ion-toolbar"),
                    o.TgZ(2, "ion-title"),
                    o._uU(3),
                    o.ALo(4, "translate"),
                    o.qZA(),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(5, "ion-content", 0),
                    o.TgZ(6, "div", 1),
                    o.TgZ(7, "div", 2),
                    o.TgZ(8, "ion-label"),
                    o._uU(9),
                    o.ALo(10, "translate"),
                    o.qZA(),
                    o.TgZ(11, "h6", 3),
                    o._uU(12),
                    o.qZA(),
                    o.qZA(),
                    o.TgZ(13, "div", 2),
                    o.TgZ(14, "ion-label"),
                    o._uU(15),
                    o.ALo(16, "translate"),
                    o.qZA(),
                    o.TgZ(17, "h6", 3),
                    o._uU(18),
                    o.qZA(),
                    o.qZA(),
                    o.YNc(19, c, 6, 4, "div", 4),
                    o.qZA(),
                    o.qZA()),
                    2 & t && (o.xp6(3),
                    o.Oqu(o.lcZ(4, 6, "Cost Center Detail")),
                    o.xp6(6),
                    o.Oqu(o.lcZ(10, 8, "Cost Center Code")),
                    o.xp6(3),
                    o.Oqu(null == e.params || null == e.params.data ? null : e.params.data.costCenterCode),
                    o.xp6(3),
                    o.Oqu(o.lcZ(16, 10, "Cost Center Name")),
                    o.xp6(3),
                    o.Oqu(null == e.params || null == e.params.data ? null : e.params.data.costCenterNameEn),
                    o.xp6(1),
                    o.Q6J("ngIf", 0 != (null == e.params || null == e.params.data ? null : e.params.data.parentPath)))
                },
                directives: [a.Gu, a.sr, a.wd, a.W2, r.xw, a.Q$, s.O5],
                pipes: [l.X$],
                styles: [".section[_ngcontent-%COMP%]{padding:8px 0}.section[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--ion-color-primary)}"]
            }),
            t
        }
        )()
    },
    15861: function(t, e, n) {
        n.d(e, {
            U: function() {
                return y
            }
        });
        var o = n(64762)
          , i = n(18051)
          , a = n(10922)
          , r = n(37716)
          , s = n(996)
          , l = n(27996)
          , c = n(55546)
          , d = n(12132)
          , u = n(883)
          , p = n(88164)
          , g = n(29790)
          , m = n(38583)
          , h = n(35618)
          , f = n(3679)
          , v = n(52928);
        function Z(t, e) {
            1 & t && (r.TgZ(0, "ion-title"),
            r._uU(1),
            r.ALo(2, "translate"),
            r.qZA()),
            2 & t && (r.xp6(1),
            r.Oqu(r.lcZ(2, 1, "Add Cost Center")))
        }
        function b(t, e) {
            1 & t && (r.TgZ(0, "ion-title"),
            r._uU(1),
            r.ALo(2, "translate"),
            r.qZA()),
            2 & t && (r.xp6(1),
            r.Oqu(r.lcZ(2, 1, "Edit Cost Center")))
        }
        function x(t, e) {
            if (1 & t) {
                const t = r.EpF();
                r.TgZ(0, "div", 4),
                r.TgZ(1, "ion-label"),
                r._uU(2),
                r.ALo(3, "translate"),
                r.qZA(),
                r.TgZ(4, "gd-comp-select", 8),
                r.NdJ("ngModelChange", function(e) {
                    return r.CHM(t),
                    r.oxw().costCentParent = e
                }),
                r.qZA(),
                r.qZA()
            }
            if (2 & t) {
                const t = r.oxw();
                r.xp6(2),
                r.Oqu(r.lcZ(3, 3, "Cost Center Parent")),
                r.xp6(2),
                r.Q6J("list", t.list)("ngModel", t.costCentParent)
            }
        }
        function A(t, e) {
            if (1 & t) {
                const t = r.EpF();
                r.TgZ(0, "div", 4),
                r.TgZ(1, "ion-label"),
                r._uU(2),
                r.ALo(3, "translate"),
                r.qZA(),
                r.TgZ(4, "ion-input", 5),
                r.NdJ("ngModelChange", function(e) {
                    return r.CHM(t),
                    r.oxw().code = e
                }),
                r.ALo(5, "translate"),
                r.qZA(),
                r.qZA()
            }
            if (2 & t) {
                const t = r.oxw();
                r.xp6(2),
                r.Oqu(r.lcZ(3, 3, "Cost Center Code")),
                r.xp6(2),
                r.s9C("placeholder", r.lcZ(5, 5, "Enter Code")),
                r.Q6J("ngModel", t.code)
            }
        }
        let y = (()=>{
            class t {
                constructor(t, e, n, o, i, a, r) {
                    this.navigationService = t,
                    this.modalService = e,
                    this.navParams = n,
                    this.alertService = o,
                    this.costCenterService = i,
                    this.eventService = a,
                    this.translate = r,
                    this.mode = "",
                    this.name = "",
                    this.code = "",
                    this.costCentParent = "",
                    this.list = [{
                        name: "PEOPLE INTELIGENT INDONESIA (DEVELOPMENT)",
                        value: 158
                    }, {
                        name: "Test Cost",
                        value: 56
                    }, {
                        name: "Test Cost Sub",
                        value: 75
                    }, {
                        name: "Development",
                        value: 76
                    }, {
                        name: "Security",
                        value: 57
                    }, {
                        name: "Lift",
                        value: 77
                    }],
                    this.loadingSave = !1
                }
                ngOnInit() {
                    var t, e, n;
                    this.params = null !== (t = this.navParams.get("params")) && void 0 !== t ? t : this.navigationService.getParams(),
                    this.listCostCenter(),
                    console.log(this.params, "this.params"),
                    this.mode = null === (e = this.params) || void 0 === e ? void 0 : e.mode,
                    this.isEdit = "edit" === (null === (n = this.params) || void 0 === n ? void 0 : n.mode),
                    this.isEdit && (this.costCentParent = this.params.data.parentCode,
                    this.name = this.params.data.costCenterNameEn)
                }
                listCostCenter() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            let t = function(e) {
                                for (const o of e.childList)
                                    n.push({
                                        name: o.costcenterNameEn,
                                        value: o.costcenterCode
                                    }),
                                    o.childList && t(o)
                            };
                            const e = yield this.costCenterService.getCostCenter()
                              , n = [];
                            n.push({
                                name: e.costcenterNameEn,
                                value: e.costcenterCode
                            }),
                            t(e);
                            const o = n.findIndex(t=>t.value === this.params.data.costCenterCode);
                            n.splice(o, 1),
                            this.list = n
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        }
                    })
                }
                save() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        try {
                            if (this.loadingSave = !0,
                            this.isEdit) {
                                const t = {
                                    costcenterCode: this.params.data.costCenterCode,
                                    costcenterName: this.name,
                                    parentCode: this.costCentParent,
                                    status: 1
                                };
                                yield this.costCenterService.updateCostCenter(t),
                                this.eventService.publish(i.A.LOAD_COST_CENTER, !0),
                                yield this.alertService.presentAlertSuccess(a.V.SUCCESSFULLY_SAVED),
                                this.navigationService.back()
                            } else {
                                const t = {
                                    costCenterCode: this.code,
                                    costCenterName: this.name,
                                    parentCode: this.params.data.costCenterCode
                                };
                                (yield this.costCenterService.createCostCenter(t)).message.code ? this.alertService.presentAlertError(this.translate.instant("Cost center code has been registered, please try different code name.")) : (this.eventService.publish(i.A.LOAD_COST_CENTER, !0),
                                yield this.alertService.presentAlertSuccess(a.V.SUCCESSFULLY_SAVED),
                                this.navigationService.back())
                            }
                        } catch (t) {
                            this.alertService.presentAlertError(t)
                        } finally {
                            this.loadingSave = !1
                        }
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(r.Y36(s.f),r.Y36(l.Z),r.Y36(c.X1),r.Y36(d.c),r.Y36(u.h),r.Y36(p.n),r.Y36(g.sK))
            }
            ,
            t.\u0275cmp = r.Xpm({
                type: t,
                selectors: [["app-cost-center-form"]],
                decls: 20,
                vars: 15,
                consts: [[4, "ngIf"], [1, "ion-padding"], ["fxLayout", "column", "fxLayoutGap", "16px"], ["class", "section", "fxLayout", "column", 4, "ngIf"], ["fxLayout", "column", 1, "section"], [3, "placeholder", "ngModel", "ngModelChange"], ["fxLayout", "row", "fxLayoutAlign", "flex-end center"], [3, "disabled", "click"], [3, "list", "ngModel", "ngModelChange"]],
                template: function(t, e) {
                    1 & t && (r.TgZ(0, "ion-header"),
                    r.TgZ(1, "ion-toolbar"),
                    r.YNc(2, Z, 3, 3, "ion-title", 0),
                    r.YNc(3, b, 3, 3, "ion-title", 0),
                    r.qZA(),
                    r.qZA(),
                    r.TgZ(4, "ion-content", 1),
                    r.TgZ(5, "div", 2),
                    r.YNc(6, x, 5, 5, "div", 3),
                    r.YNc(7, A, 6, 7, "div", 3),
                    r.TgZ(8, "div", 4),
                    r.TgZ(9, "ion-label"),
                    r._uU(10),
                    r.ALo(11, "translate"),
                    r.qZA(),
                    r.TgZ(12, "ion-input", 5),
                    r.NdJ("ngModelChange", function(t) {
                        return e.name = t
                    }),
                    r.ALo(13, "translate"),
                    r.qZA(),
                    r.qZA(),
                    r.qZA(),
                    r.qZA(),
                    r.TgZ(14, "ion-footer", 1),
                    r.TgZ(15, "ion-toolbar"),
                    r.TgZ(16, "div", 6),
                    r.TgZ(17, "gd-comp-button", 7),
                    r.NdJ("click", function() {
                        return e.save()
                    }),
                    r._uU(18),
                    r.ALo(19, "translate"),
                    r.qZA(),
                    r.qZA(),
                    r.qZA(),
                    r.qZA()),
                    2 & t && (r.xp6(2),
                    r.Q6J("ngIf", !e.isEdit),
                    r.xp6(1),
                    r.Q6J("ngIf", e.isEdit),
                    r.xp6(3),
                    r.Q6J("ngIf", e.isEdit),
                    r.xp6(1),
                    r.Q6J("ngIf", !e.isEdit),
                    r.xp6(3),
                    r.Oqu(r.lcZ(11, 9, "Cost Center Name")),
                    r.xp6(2),
                    r.s9C("placeholder", r.lcZ(13, 11, "Enter Name")),
                    r.Q6J("ngModel", e.name),
                    r.xp6(5),
                    r.Q6J("disabled", "" === e.name),
                    r.xp6(1),
                    r.Oqu(r.lcZ(19, 13, "Save")))
                },
                directives: [c.Gu, c.sr, m.O5, c.W2, h.xw, h.SQ, c.Q$, c.pK, c.j9, f.JJ, f.On, c.fr, h.Wh, v.qH, c.wd, v.sJ],
                pipes: [g.X$],
                styles: [".section[_ngcontent-%COMP%]{padding:8px 0}.section[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-bottom:var(--gdx-border-radius);color:var(--ion-color-medium)}.section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0}.section[_ngcontent-%COMP%]   ion-label.title[_ngcontent-%COMP%]{color:var(--ion-color-dark)}.section[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{--padding-bottom: 16px;--padding-end: 16px;--padding-start: 16px;--padding-top: 16px;border-radius:var(--gdx-border-radius);border:1px solid var(--gdx-color-outline);margin-top:6px}"]
            }),
            t
        }
        )()
    },
    63648: function(t, e, n) {
        n.r(e),
        n.d(e, {
            ResultUploadPageModule: function() {
                return m
            }
        });
        var o = n(38583)
          , i = n(3679)
          , a = n(55546)
          , r = n(99415)
          , s = n(88055)
          , l = n(37716);
        const c = [{
            path: "",
            component: s.$
        }];
        let d = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[r.Bz.forChild(c)], r.Bz]
            }),
            t
        }
        )();
        var u = n(29790)
          , p = n(15566)
          , g = n(70850);
        let m = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[o.ez, i.u5, a.Pc, d, u.aw, p.o9, g._J]]
            }),
            t
        }
        )()
    },
    21877: function(t, e, n) {
        n.d(e, {
            f: function() {
                return g
            }
        });
        var o = n(38583)
          , i = n(55546)
          , a = n(15566)
          , r = n(24586)
          , s = n(29790)
          , l = n(52928)
          , c = n(72045)
          , d = n(40719)
          , u = n(3679)
          , p = n(37716);
        let g = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = p.oAB({
                type: t
            }),
            t.\u0275inj = p.cJS({
                imports: [[o.ez, u.u5, i.Pc, s.aw, l.F$, c.c, a.o9, d.ju, r.D]]
            }),
            t
        }
        )()
    },
    79258: function(t, e, n) {
        n.r(e),
        n.d(e, {
            GetToKnowPageModule: function() {
                return g
            }
        });
        var o = n(38583)
          , i = n(3679)
          , a = n(55546)
          , r = n(99415)
          , s = n(54838)
          , l = n(37716);
        const c = [{
            path: "",
            component: s.u
        }];
        let d = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[r.Bz.forChild(c)], r.Bz]
            }),
            t
        }
        )();
        var u = n(29790)
          , p = n(15566);
        let g = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = l.oAB({
                type: t
            }),
            t.\u0275inj = l.cJS({
                imports: [[o.ez, i.u5, a.Pc, d, u.aw, p.o9]]
            }),
            t
        }
        )()
    },
    54838: function(t, e, n) {
        n.d(e, {
            u: function() {
                return r
            }
        });
        var o = n(64762)
          , i = n(37716)
          , a = n(53760);
        let r = (()=>{
            class t {
                constructor(t) {
                    this.iab = t,
                    this.baseUrl = "https://gd-help.s3-ap-southeast-1.amazonaws.com",
                    this.lang = "en",
                    this.listLink = [{
                        code: "attendance-location",
                        link: "explanation-attendance-location"
                    }, {
                        code: "attendance-setup",
                        link: "explanation-attendance-setup"
                    }, {
                        code: "claim-type",
                        link: "explanation-claim-type"
                    }, {
                        code: "company-setup",
                        link: "explanation-company-setup"
                    }, {
                        code: "cost-center",
                        link: "explanation-cost-center"
                    }, {
                        code: "employee-setup",
                        link: "explanation-employee-setup"
                    }, {
                        code: "feature-need",
                        link: "explanation-feature-need"
                    }, {
                        code: "job-grade",
                        link: "explanation-job-grade"
                    }, {
                        code: "leave-type",
                        link: "explanation-leave-type"
                    }, {
                        code: "organization",
                        link: "explanation-organization"
                    }, {
                        code: "overtime-type",
                        link: "explanation-overtime-type"
                    }, {
                        code: "purpose-type",
                        link: "explanation-purpose-type"
                    }, {
                        code: "request-approval",
                        link: "explanation-request-approval"
                    }, {
                        code: "shift-daily",
                        link: "explanation-shift-daily"
                    }, {
                        code: "shift-pattern",
                        link: "explanation-shift-pattern"
                    }, {
                        code: "work-location",
                        link: "explanation-work-location"
                    }]
                }
                ngOnInit() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {})
                }
                get2Know() {}
                openBrowser() {
                    const t = this.listLink.filter(t=>t.code === this.code).map(t=>t.link);
                    t.length > 0 && this.iab.create(`${this.baseUrl}/${"en" !== this.lang ? t[0] + "-" + this.lang : t[0]}.html`, "_blank", {
                        zoom: "no",
                        hideurlbar: "yes",
                        location: "no",
                        clearcache: "yes"
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(i.Y36(a.i))
            }
            ,
            t.\u0275cmp = i.Xpm({
                type: t,
                selectors: [["app-get-to-know"]],
                inputs: {
                    code: "code"
                },
                decls: 0,
                vars: 0,
                template: function(t, e) {},
                styles: [".context[_ngcontent-%COMP%]{border-radius:10px;padding:13px 10px;box-shadow:1px 3px 20px -2px #0000002e;width:100%;margin:0 auto;background:#fff}.context[_ngcontent-%COMP%]   ion-icon.help[_ngcontent-%COMP%]{font-size:25px;font-weight:800}.context[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-weight:700;margin:0 0 5px!important}.context[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ion-color-primary);display:flex}.context[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-left:7px;font-size:14px;margin-top:2px}@media screen and (min-width: 768px){.context[_ngcontent-%COMP%]{max-width:230px}}"]
            }),
            t
        }
        )()
    },
    80896: function(t, e, n) {
        n.d(e, {
            F: function() {
                return c
            }
        });
        var o = n(23664)
          , i = n(37716)
          , a = n(55546)
          , r = n(52928)
          , s = n(3679)
          , l = n(35618);
        let c = (()=>{
            class t {
                constructor(t, e) {
                    this.navParams = t,
                    this.gdCompModalCtrl = e
                }
                ngOnInit() {
                    this.data = this.navParams.get("id"),
                    this.fullName = this.navParams.get("fullName"),
                    this.online = this.navParams.get("online"),
                    this.geo = this.navParams.get("geo"),
                    this.flagTime = this.navParams.get("flagTime"),
                    this.newdata = this.navParams.get("newData"),
                    this.inputan = this.data,
                    this.callback = this.navParams.get("callback"),
                    console.log("this.navParams", this.navParams)
                }
                next(t) {
                    this.gdCompModalCtrl.push(o.j, {
                        id: t,
                        data: this.data,
                        fullName: this.fullName,
                        online: this.online,
                        geo: this.geo,
                        flagTime: this.flagTime
                    })
                }
                save() {
                    this.gdCompModalCtrl.dismiss({
                        newData: this.newdata,
                        fullName: this.fullName,
                        online: this.online,
                        geo: this.geo,
                        flagTime: this.flagTime
                    })
                }
                prev(t) {
                    console.log("prev"),
                    this.callback(this.inputan).then(()=>{
                        this.gdCompModalCtrl.pop()
                    }
                    )
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(i.Y36(a.X1),i.Y36(r.Vf))
            }
            ,
            t.\u0275cmp = i.Xpm({
                type: t,
                selectors: [["app-modal-detail"]],
                decls: 22,
                vars: 4,
                consts: [["slot", "start"], ["placeholder", "Masukkan data", 3, "ngModel", "ngModelChange"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["color", "success", 3, "click"], ["fxLayout", "row"], ["color", "medium", 3, "click"], [3, "click"]],
                template: function(t, e) {
                    1 & t && (i.TgZ(0, "ion-header"),
                    i.TgZ(1, "ion-toolbar"),
                    i.TgZ(2, "ion-buttons", 0),
                    i._UZ(3, "ion-back-button"),
                    i.qZA(),
                    i.TgZ(4, "ion-title"),
                    i._uU(5, "modalDetail"),
                    i.qZA(),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(6, "ion-content"),
                    i.TgZ(7, "h5"),
                    i._uU(8),
                    i.qZA(),
                    i.TgZ(9, "p"),
                    i._uU(10),
                    i.qZA(),
                    i.TgZ(11, "ion-input", 1),
                    i.NdJ("ngModelChange", function(t) {
                        return e.inputan = t
                    }),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(12, "ion-footer"),
                    i.TgZ(13, "ion-toolbar"),
                    i.TgZ(14, "div", 2),
                    i.TgZ(15, "ion-button", 3),
                    i.NdJ("click", function() {
                        return e.save()
                    }),
                    i._uU(16, "Save"),
                    i.qZA(),
                    i.TgZ(17, "div", 4),
                    i.TgZ(18, "ion-button", 5),
                    i.NdJ("click", function() {
                        return e.prev(e.data)
                    }),
                    i._uU(19, "Prev Page"),
                    i.qZA(),
                    i.TgZ(20, "ion-button", 6),
                    i.NdJ("click", function() {
                        return e.next(e.data)
                    }),
                    i._uU(21, "Next Page"),
                    i.qZA(),
                    i.qZA(),
                    i.qZA(),
                    i.qZA(),
                    i.qZA()),
                    2 & t && (i.xp6(8),
                    i.Oqu(e.data),
                    i.xp6(2),
                    i.AsE(" ", e.fullName, " is ", e.online ? "online" : "offline", " "),
                    i.xp6(1),
                    i.Q6J("ngModel", e.inputan))
                },
                directives: [a.Gu, a.sr, a.Sm, a.oU, a.cs, a.wd, a.W2, a.pK, a.j9, s.JJ, s.On, a.fr, l.xw, l.Wh, a.YG],
                styles: [""]
            }),
            t
        }
        )()
    },
    23664: function(t, e, n) {
        n.d(e, {
            j: function() {
                return d
            }
        });
        var o = n(64762)
          , i = n(37716)
          , a = n(55546)
          , r = n(40719)
          , s = n(99415);
        const l = function() {
            return ["/ui-playground/gdx-page-content"]
        }
          , c = function() {
            return ["/ui-playground/gdx-page-list"]
        };
        let d = (()=>{
            class t {
                constructor(t, e, n) {
                    this.navCtrl = t,
                    this.toastService = e,
                    this.alertController = n,
                    this.isSticky = "fixed",
                    this.isScrollBottom = !1,
                    this.headerTable = [{
                        label: "Text Biasa",
                        key: "name",
                        type: "text",
                        textType: "text",
                        lock: !1
                    }, {
                        label: "Password",
                        key: "alamat",
                        type: "text",
                        textType: "password",
                        lock: !1
                    }, {
                        label: "Number",
                        key: "negara",
                        type: "text",
                        textType: "number",
                        lock: !0
                    }, {
                        label: "Paragraph",
                        key: "kelas",
                        type: "text",
                        textType: "paragraph",
                        lock: !1
                    }, {
                        label: "Select",
                        key: "jurusan",
                        type: "select",
                        select: [{
                            id: "1",
                            value: "Rekayasa Perangkat Lunak"
                        }, {
                            id: "2",
                            value: "Teknologi Komputer Jaringan"
                        }, {
                            id: "3",
                            value: "Multimedia"
                        }],
                        lock: !1
                    }, {
                        label: "Checklist",
                        key: "cumlaude",
                        type: "checklist",
                        lock: !1
                    }, {
                        label: "Button",
                        key: "cta",
                        type: "button",
                        lock: !1
                    }],
                    this.bodyTable = [{
                        id: "01",
                        name: "Rooney",
                        alamat: "simatupang",
                        negara: 234567,
                        kelas: " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        jurusan: "Rekayasa Perangkat Lunak",
                        cumlaude: !0,
                        cta: [{
                            label: "Add",
                            iconUrl: "assets/icon/icon-feather/icon-save.svg",
                            variant: "primary"
                        }, {
                            label: "Remove",
                            iconUrl: "assets/icon/icon-feather/icon-trash.svg",
                            variant: "success"
                        }]
                    }, {
                        id: "02",
                        name: "ujang",
                        alamat: "simatupang",
                        negara: 45678,
                        kelas: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                        jurusan: "Multimedia",
                        cumlaude: !1,
                        cta: [{
                            label: "Add",
                            iconUrl: "assets/icon/icon-feather/icon-save.svg",
                            variant: "danger"
                        }, {
                            label: "Remove",
                            iconUrl: "assets/icon/icon-feather/icon-delete.svg",
                            variant: "primary"
                        }]
                    }, {
                        id: "03",
                        name: "Rooney",
                        alamat: "simatupang",
                        negara: 234567,
                        kelas: " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        jurusan: "Rekayasa Perangkat Lunak",
                        cumlaude: !0,
                        cta: [{
                            label: "Add",
                            iconUrl: "assets/icon/icon-feather/icon-save.svg",
                            variant: "success"
                        }, {
                            label: "Remove",
                            iconUrl: "assets/icon/icon-feather/icon-delete.svg",
                            variant: "danger"
                        }]
                    }, {
                        id: "04",
                        name: "ujang",
                        alamat: "simatupang",
                        negara: 45678,
                        kelas: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                        jurusan: "Multimedia",
                        cumlaude: !1,
                        cta: [{
                            label: "Add",
                            iconUrl: "assets/icon/icon-feather/icon-save.svg",
                            variant: "primary"
                        }, {
                            label: "Remove",
                            iconUrl: "assets/icon/icon-feather/icon-delete.svg",
                            variant: "danger"
                        }]
                    }]
                }
                ngOnInit() {}
                newAlert() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {})
                }
                ionicAlert() {
                    return (0,
                    o.mG)(this, void 0, void 0, function*() {
                        yield(yield this.alertController.create({
                            cssClass: "my-custom-class",
                            header: "Alert",
                            subHeader: "Subtitle",
                            message: "This is an alert message.",
                            buttons: ["OK"]
                        })).present()
                    })
                }
                toggleSticky() {
                    console.log("toggleSticky()"),
                    this.isSticky = "fixed" === this.isSticky ? "" : "fixed"
                }
                onScroll(t) {}
                onScrollStart(t) {
                    console.log("onScrollStart()", t),
                    this.isScrollBottom = !1
                }
                onScrollEnd(t) {
                    console.log("onScrollEnd()", t)
                }
                getResult(t) {}
                action(t) {}
                openserpis() {
                    this.toastService.createToast("ini title", "ini desc", "ok", null, !1)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(i.Y36(a.SH),i.Y36(r.kl),i.Y36(a.Br))
            }
            ,
            t.\u0275cmp = i.Xpm({
                type: t,
                selectors: [["app-ui-playground"]],
                decls: 21,
                vars: 4,
                consts: [[1, "ion-no-border"], ["fullscreen", ""], [3, "routerLink"], [1, "container"], [3, "click"]],
                template: function(t, e) {
                    1 & t && (i.TgZ(0, "ion-header", 0),
                    i.TgZ(1, "ion-title"),
                    i._uU(2, "UI Playground"),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(3, "ion-content", 1),
                    i.TgZ(4, "ion-button", 2),
                    i._uU(5, "GDX Page: Content"),
                    i.qZA(),
                    i.TgZ(6, "ion-button", 2),
                    i._uU(7, "GDX Page: List"),
                    i.qZA(),
                    i.TgZ(8, "div", 3),
                    i.TgZ(9, "button", 4),
                    i.NdJ("click", function() {
                        return e.openserpis()
                    }),
                    i._uU(10, "open Toast"),
                    i.qZA(),
                    i.TgZ(11, "div"),
                    i.TgZ(12, "h2"),
                    i._uU(13, "New Alert"),
                    i.qZA(),
                    i.TgZ(14, "ion-button", 4),
                    i.NdJ("click", function() {
                        return e.newAlert()
                    }),
                    i._uU(15, "open new alert"),
                    i.qZA(),
                    i.qZA(),
                    i.TgZ(16, "div"),
                    i.TgZ(17, "h2"),
                    i._uU(18, "Ionic Alert"),
                    i.qZA(),
                    i.TgZ(19, "ion-button", 4),
                    i.NdJ("click", function() {
                        return e.ionicAlert()
                    }),
                    i._uU(20, "open new alert"),
                    i.qZA(),
                    i.qZA(),
                    i.qZA(),
                    i.qZA()),
                    2 & t && (i.xp6(4),
                    i.Q6J("routerLink", i.DdM(2, l)),
                    i.xp6(2),
                    i.Q6J("routerLink", i.DdM(3, c)))
                },
                directives: [a.Gu, a.wd, a.W2, a.YG, a.YI, s.rH],
                styles: [".container[_ngcontent-%COMP%]{width:100%;padding:16px}"]
            }),
            t
        }
        )()
    },
    86846: function(t, e, n) {
        n.d(e, {
            J: function() {
                return a
            },
            x: function() {
                return r
            }
        });
        var o = n(37716);
        const i = ["gdxSticky"];
        let a = (()=>{
            class t {
                constructor(t, e) {
                    this.host = t,
                    this.renderer = e,
                    this.lastUpdate = 0,
                    this.lastScrollTop = 0,
                    console.log("[appContentScroll]", this.host, this.stickyEl)
                }
                onContentScroll(t) {
                    t.timeStamp - this.lastUpdate > 40 && (this.checkScroll(t.detail.scrollTop),
                    this.lastUpdate = t.timeStamp),
                    this.lastScrollTop = t.detail.scrollTop
                }
                onContentScrollEnd(t) {
                    console.log("onScrollEnd()", this.host, t),
                    console.log("scrollElement", this.host.nativeElement.getScrollElement()),
                    this.checkScroll(this.lastScrollTop)
                }
                checkScroll(t) {
                    console.log("scrollTop: " + t),
                    this.setScrollClass(t > 20)
                }
                setScrollClass(t) {
                    t ? this.renderer.addClass(this.host.nativeElement, "scrolled") : this.renderer.removeClass(this.host.nativeElement, "scrolled")
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(o.Y36(o.SBq, 1),o.Y36(o.Qsj))
            }
            ,
            t.\u0275dir = o.lG2({
                type: t,
                selectors: [["", "appContentScroll", ""]],
                contentQueries: function(t, e, n) {
                    if (1 & t && o.Suo(n, i, 5),
                    2 & t) {
                        let t;
                        o.iGM(t = o.CRH()) && (e.stickyEl = t.first)
                    }
                },
                hostBindings: function(t, e) {
                    1 & t && o.NdJ("ionScroll", function(t) {
                        return e.onContentScroll(t)
                    })("ionScrollEnd", function(t) {
                        return e.onContentScrollEnd(t)
                    })
                }
            }),
            t
        }
        )()
          , r = (()=>{
            class t {
                constructor(t, e) {
                    this.host = t,
                    this.renderer = e,
                    console.log("appElSticky", this.host);
                    const n = this.host.nativeElement.cloneNode(!0);
                    console.log("cln", n),
                    console.log(this.host),
                    this.renderer.setAttribute(n, "slot", "fixed")
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(o.Y36(o.SBq, 1),o.Y36(o.Qsj))
            }
            ,
            t.\u0275dir = o.lG2({
                type: t,
                selectors: [["", "appElSticky", ""]]
            }),
            t
        }
        )()
    }
}]);
