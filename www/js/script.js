/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e, t) {
    var n, r, i = typeof t,
        o = e.location,
        a = e.document,
        s = a.documentElement,
        l = e.jQuery,
        u = e.$,
        c = {},
        p = [],
        f = "1.10.2",
        d = p.concat,
        h = p.push,
        g = p.slice,
        m = p.indexOf,
        y = c.toString,
        v = c.hasOwnProperty,
        b = f.trim,
        x = function(e, t) {
            return new x.fn.init(e, t, r)
        },
        w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = /\S+/g,
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        E = /^[\],:{}\s]*$/,
        S = /(?:^|:|,)(?:\s*\[)+/g,
        A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        D = /^-ms-/,
        L = /-([\da-z])/gi,
        H = function(e, t) {
            return t.toUpperCase()
        },
        q = function(e) {
            (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
        },
        _ = function() {
            a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
        };
    x.fn = x.prototype = {
        jquery: f,
        constructor: x,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n))
                        for (i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = a.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = a, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return g.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return x.each(this, e, t)
        },
        ready: function(e) {
            return x.ready.promise().done(e), this
        },
        slice: function() {
            return this.pushStack(g.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(x.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: h,
        sort: [].sort,
        splice: [].splice
    }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {},
            l = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)
            if (null != (o = arguments[l]))
                for (i in o) e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? x.readyWait++ : x.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--x.readyWait : !x.isReady) {
                if (!a.body) return setTimeout(x.ready);
                x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === x.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === x.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
            try {
                if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (r) {
                return !1
            }
            if (x.support.ownLast)
                for (n in e) return v.call(e, n);
            for (n in e);
            return n === t || v.call(e, n)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || a;
            var r = k.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
        },
        noop: function() {},
        globalEval: function(t) {
            t && x.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(D, "ms-").replace(L, H)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++)
                        if (r = t.apply(e[i], n), r === !1) break
                } else
                    for (i in e)
                        if (r = t.apply(e[i], n), r === !1) break
            } else if (a) {
                for (; o > i; i++)
                    if (r = t.call(e[i], i, e[i]), r === !1) break
            } else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]), r === !1) break;
            return e
        },
        trim: b && !b.call("\ufeff\u00a0") ? function(e) {
            return null == e ? "" : b.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(C, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (m) return m.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r)
                for (; r > o; o++) e[i++] = n[o];
            else
                while (n[o] !== t) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e),
                s = [];
            if (a)
                for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
            else
                for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
            return d.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function() {
                return e.apply(n || this, r.concat(g.call(arguments)))
            }, i.guid = e.guid = e.guid || x.guid++, i) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var l = 0,
                u = e.length,
                c = null == r;
            if ("object" === x.type(r)) {
                o = !0;
                for (l in r) x.access(e, n, l, r[l], !0, a, s)
            } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                    return c.call(x(e), n)
                })), n))
                for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), x.ready.promise = function(t) {
        if (!n)
            if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready);
            else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1);
        else {
            a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
            var r = !1;
            try {
                r = null == e.frameElement && a.documentElement
            } catch (i) {}
            r && r.doScroll && function o() {
                if (!x.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    _(), x.ready()
                }
            }()
        }
        return n.promise(t)
    }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });

    function M(e) {
        var t = e.length,
            n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = x(a),
        function(e, t) {
            var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date,
                w = e.document,
                T = 0,
                C = 0,
                N = st(),
                k = st(),
                E = st(),
                S = !1,
                A = function(e, t) {
                    return e === t ? (S = !0, 0) : 0
                },
                j = typeof t,
                D = 1 << 31,
                L = {}.hasOwnProperty,
                H = [],
                q = H.pop,
                _ = H.push,
                M = H.push,
                O = H.slice,
                F = H.indexOf || function(e) {
                    var t = 0,
                        n = this.length;
                    for (; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                P = "[\\x20\\t\\r\\n\\f]",
                R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                W = R.replace("w", "w#"),
                $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]",
                I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
                z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                X = RegExp("^" + P + "*," + P + "*"),
                U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
                V = RegExp(P + "*[+~]"),
                Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
                J = RegExp(I),
                G = RegExp("^" + W + "$"),
                Q = {
                    ID: RegExp("^#(" + R + ")"),
                    CLASS: RegExp("^\\.(" + R + ")"),
                    TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + $),
                    PSEUDO: RegExp("^" + I),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + B + ")$", "i"),
                    needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
                },
                K = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                et = /^(?:input|select|textarea|button)$/i,
                tt = /^h\d$/i,
                nt = /'|\\/g,
                rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
                it = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
                };
            try {
                M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
            } catch (ot) {
                M = {
                    apply: H.length ? function(e, t) {
                        _.apply(e, O.call(t))
                    } : function(e, t) {
                        var n = e.length,
                            r = 0;
                        while (e[n++] = t[r++]);
                        e.length = n - 1
                    }
                }
            }

            function at(e, t, n, i) {
                var o, a, s, l, u, c, d, m, y, x;
                if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (l = t.nodeType) && 9 !== l) return [];
                if (h && !i) {
                    if (o = Z.exec(e))
                        if (s = o[1]) {
                            if (9 === l) {
                                if (a = t.getElementById(s), !a || !a.parentNode) return n;
                                if (a.id === s) return n.push(a), n
                            } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n
                        } else {
                            if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;
                            if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n
                        }
                    if (r.qsa && (!g || !g.test(e))) {
                        if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                            c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
                            while (u--) c[u] = m + yt(c[u]);
                            y = V.test(e) && t.parentNode || t, x = c.join(",")
                        }
                        if (x) try {
                            return M.apply(n, y.querySelectorAll(x)), n
                        } catch (T) {} finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
                return kt(e.replace(z, "$1"), t, n, i)
            }

            function st() {
                var e = [];

                function t(n, r) {
                    return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
                }
                return t
            }

            function lt(e) {
                return e[b] = !0, e
            }

            function ut(e) {
                var t = f.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function ct(e, t) {
                var n = e.split("|"),
                    r = e.length;
                while (r--) o.attrHandle[n[r]] = t
            }

            function pt(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
                if (r) return r;
                if (n)
                    while (n = n.nextSibling)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function ft(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function dt(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function ht(e) {
                return lt(function(t) {
                    return t = +t, lt(function(n, r) {
                        var i, o = e([], n.length, t),
                            a = o.length;
                        while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }
            s = at.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, r = at.support = {}, p = at.setDocument = function(e) {
                var n = e ? e.ownerDocument || e : w,
                    i = n.defaultView;
                return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
                    p()
                }), r.attributes = ut(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), r.getElementsByTagName = ut(function(e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), r.getElementsByClassName = ut(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), r.getById = ut(function(e) {
                    return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
                }), r.getById ? (o.find.ID = function(e, t) {
                    if (typeof t.getElementById !== j && h) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, o.filter.ID = function(e) {
                    var t = e.replace(rt, it);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete o.find.ID, o.filter.ID = function(e) {
                    var t = e.replace(rt, it);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), o.find.TAG = r.getElementsByTagName ? function(e, n) {
                    return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, o.find.CLASS = r.getElementsByClassName && function(e, n) {
                    return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
                }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
                }), ut(function(e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function(e) {
                    r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
                }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, A = d.compareDocumentPosition ? function(e, t) {
                    if (e === t) return S = !0, 0;
                    var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                    return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function(e, t) {
                    var r, i = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        s = [e],
                        l = [t];
                    if (e === t) return S = !0, 0;
                    if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
                    if (o === a) return pt(e, t);
                    r = e;
                    while (r = r.parentNode) s.unshift(r);
                    r = t;
                    while (r = r.parentNode) l.unshift(r);
                    while (s[i] === l[i]) i++;
                    return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
                }, n) : f
            }, at.matches = function(e, t) {
                return at(e, null, null, t)
            }, at.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try {
                    var n = y.call(e, t);
                    if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (i) {}
                return at(t, f, null, [e]).length > 0
            }, at.contains = function(e, t) {
                return (e.ownerDocument || e) !== f && p(e), v(e, t)
            }, at.attr = function(e, n) {
                (e.ownerDocument || e) !== f && p(e);
                var i = o.attrHandle[n.toLowerCase()],
                    a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
                return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
            }, at.error = function(e) {
                throw Error("Syntax error, unrecognized expression: " + e)
            }, at.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
                    while (t = e[o++]) t === e[o] && (i = n.push(o));
                    while (i--) e.splice(n[i], 1)
                }
                return e
            }, a = at.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r]; r++) n += a(t);
                return n
            }, o = at.selectors = {
                cacheLength: 50,
                createPseudo: lt,
                match: Q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var n, r = !e[5] && e[2];
                        return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(rt, it).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = N[e + " "];
                        return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = at.attr(r, e);
                            return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                y = s && t.nodeName.toLowerCase(),
                                v = !l && !s;
                            if (m) {
                                if (o) {
                                    while (g) {
                                        p = t;
                                        while (p = p[g])
                                            if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                    c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                        if (1 === p.nodeType && ++f && p === t) {
                                            c[e] = [T, d, f];
                                            break
                                        }
                                } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1];
                                else
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                        if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break;
                                return f -= i, f === r || 0 === f % r && f / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
                        return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function(e, n) {
                            var i, o = r(e, t),
                                a = o.length;
                            while (a--) i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: lt(function(e) {
                        var t = [],
                            n = [],
                            r = l(e.replace(z, "$1"));
                        return r[b] ? lt(function(e, t, n, i) {
                            var o, a = r(e, null, i, []),
                                s = e.length;
                            while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), !n.pop()
                        }
                    }),
                    has: lt(function(e) {
                        return function(t) {
                            return at(e, t).length > 0
                        }
                    }),
                    contains: lt(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
                        }
                    }),
                    lang: lt(function(e) {
                        return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === d
                    },
                    focus: function(e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !o.pseudos.empty(e)
                    },
                    header: function(e) {
                        return tt.test(e.nodeName)
                    },
                    input: function(e) {
                        return et.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: ht(function() {
                        return [0]
                    }),
                    last: ht(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ht(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: ht(function(e, t) {
                        var n = 0;
                        for (; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: ht(function(e, t) {
                        var n = 1;
                        for (; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: ht(function(e, t, n) {
                        var r = 0 > n ? n + t : n;
                        for (; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: ht(function(e, t, n) {
                        var r = 0 > n ? n + t : n;
                        for (; t > ++r;) e.push(r);
                        return e
                    })
                }
            }, o.pseudos.nth = o.pseudos.eq;
            for (n in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) o.pseudos[n] = ft(n);
            for (n in {
                    submit: !0,
                    reset: !0
                }) o.pseudos[n] = dt(n);

            function gt() {}
            gt.prototype = o.filters = o.pseudos, o.setFilters = new gt;

            function mt(e, t) {
                var n, r, i, a, s, l, u, c = k[e + " "];
                if (c) return t ? 0 : c.slice(0);
                s = e, l = [], u = o.preFilter;
                while (s) {
                    (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(z, " ")
                    }), s = s.slice(n.length));
                    for (a in o.filter) !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
                        value: n,
                        type: a,
                        matches: r
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
            }

            function yt(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for (; n > t; t++) r += e[t].value;
                return r
            }

            function vt(e, t, n) {
                var r = t.dir,
                    o = n && "parentNode" === r,
                    a = C++;
                return t.first ? function(t, n, i) {
                    while (t = t[r])
                        if (1 === t.nodeType || o) return e(t, n, i)
                } : function(t, n, s) {
                    var l, u, c, p = T + " " + a;
                    if (s) {
                        while (t = t[r])
                            if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                    } else
                        while (t = t[r])
                            if (1 === t.nodeType || o)
                                if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
                                    if ((l = u[1]) === !0 || l === i) return l === !0
                                } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0
                }
            }

            function bt(e) {
                return e.length > 1 ? function(t, n, r) {
                    var i = e.length;
                    while (i--)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function xt(e, t, n, r, i) {
                var o, a = [],
                    s = 0,
                    l = e.length,
                    u = null != t;
                for (; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
                return a
            }

            function wt(e, t, n, r, i, o) {
                return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function(o, a, s, l) {
                    var u, c, p, f = [],
                        d = [],
                        h = a.length,
                        g = o || Nt(t || "*", s.nodeType ? [s] : s, []),
                        m = !e || !o && t ? g : xt(g, f, e, s, l),
                        y = n ? i || (o ? e : h || r) ? [] : a : m;
                    if (n && n(m, y, s, l), r) {
                        u = xt(y, d), r(u, [], s, l), c = u.length;
                        while (c--)(p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                    }
                    if (o) {
                        if (i || e) {
                            if (i) {
                                u = [], c = y.length;
                                while (c--)(p = y[c]) && u.push(m[c] = p);
                                i(null, y = [], u, l)
                            }
                            c = y.length;
                            while (c--)(p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                        }
                    } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
                })
            }

            function Tt(e) {
                var t, n, r, i = e.length,
                    a = o.relative[e[0].type],
                    s = a || o.relative[" "],
                    l = a ? 1 : 0,
                    c = vt(function(e) {
                        return e === t
                    }, s, !0),
                    p = vt(function(e) {
                        return F.call(t, e) > -1
                    }, s, !0),
                    f = [function(e, n, r) {
                        return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                    }];
                for (; i > l; l++)
                    if (n = o.relative[e[l].type]) f = [vt(bt(f), n)];
                    else {
                        if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
                            for (r = ++l; i > r; r++)
                                if (o.relative[e[r].type]) break;
                            return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({
                                value: " " === e[l - 2].type ? "*" : ""
                            })).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
                        }
                        f.push(n)
                    }
                return bt(f)
            }

            function Ct(e, t) {
                var n = 0,
                    r = t.length > 0,
                    a = e.length > 0,
                    s = function(s, l, c, p, d) {
                        var h, g, m, y = [],
                            v = 0,
                            b = "0",
                            x = s && [],
                            w = null != d,
                            C = u,
                            N = s || a && o.find.TAG("*", d && l.parentNode || l),
                            k = T += null == C ? 1 : Math.random() || .1;
                        for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
                            if (a && h) {
                                g = 0;
                                while (m = e[g++])
                                    if (m(h, l, c)) {
                                        p.push(h);
                                        break
                                    }
                                w && (T = k, i = ++n)
                            }
                            r && ((h = !m && h) && v--, s && x.push(h))
                        }
                        if (v += b, r && b !== v) {
                            g = 0;
                            while (m = t[g++]) m(x, y, l, c);
                            if (s) {
                                if (v > 0)
                                    while (b--) x[b] || y[b] || (y[b] = q.call(p));
                                y = xt(y)
                            }
                            M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                        }
                        return w && (T = k, u = C), x
                    };
                return r ? lt(s) : s
            }
            l = at.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = E[e + " "];
                if (!o) {
                    t || (t = mt(e)), n = t.length;
                    while (n--) o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
                    o = E(e, Ct(i, r))
                }
                return o
            };

            function Nt(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; i > r; r++) at(e, t[r], n);
                return n
            }

            function kt(e, t, n, i) {
                var a, s, u, c, p, f = mt(e);
                if (!i && 1 === f.length) {
                    if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                        if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n;
                        e = e.slice(s.shift().value.length)
                    }
                    a = Q.needsContext.test(e) ? 0 : s.length;
                    while (a--) {
                        if (u = s[a], o.relative[c = u.type]) break;
                        if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                            if (s.splice(a, 1), e = i.length && yt(s), !e) return M.apply(n, i), n;
                            break
                        }
                    }
                }
                return l(e, f)(i, t, !h, n, V.test(e)), n
            }
            r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function(e) {
                return 1 & e.compareDocumentPosition(f.createElement("div"))
            }), ut(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || ct("type|href|height|width", function(e, n, r) {
                return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
            }), r.attributes && ut(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || ct("value", function(e, n, r) {
                return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
            }), ut(function(e) {
                return null == e.getAttribute("disabled")
            }) || ct(B, function(e, n, r) {
                var i;
                return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
            }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
        }(e);
    var O = {};

    function F(e) {
        var t = O[e] = {};
        return x.each(e.match(T) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [],
            u = !e.once && [],
            c = function(t) {
                for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++)
                    if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
            },
            p = {
                add: function() {
                    if (l) {
                        var t = l.length;
                        (function i(t) {
                            x.each(t, function(t, n) {
                                var r = x.type(n);
                                "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        })(arguments), n ? o = l.length : r && (s = t, c(r))
                    }
                    return this
                },
                remove: function() {
                    return l && x.each(arguments, function(e, t) {
                        var r;
                        while ((r = x.inArray(t, l, r)) > -1) l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
                    }), this
                },
                has: function(e) {
                    return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], o = 0, this
                },
                disable: function() {
                    return l = u = r = t, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = t, r || p.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, t) {
                    return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return p
    }, x.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", x.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", x.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", x.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return x.Deferred(function(n) {
                            x.each(t, function(t, o) {
                                var a = o[0],
                                    s = x.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? x.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, x.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = g.call(arguments),
                r = n.length,
                i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
                o = 1 === i ? e : x.Deferred(),
                a = function(e, t, n) {
                    return function(r) {
                        t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                    }
                },
                s, l, u;
            if (r > 1)
                for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
            return i || o.resolveWith(u, n), o.promise()
        }
    }), x.support = function(t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
        s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in {
                submit: !0,
                change: !0,
                focusin: !0
            }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t)) break;
        return t.ownLast = "0" !== f, x(function() {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
        }), n = s = l = u = r = o = null, t
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        P = /([A-Z])/g;

    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando,
                l = e.nodeType,
                u = l ? x.cache : e,
                c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {
                toJSON: x.noop
            }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
        }
    }

    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? x.cache : e,
                s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    while (i--) delete r[t[i]];
                    if (n ? !I(r) : !x.isEmptyObject(r)) return
                }(n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }
    x.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e)
        },
        data: function(e, t, n) {
            return R(e, t, n)
        },
        removeData: function(e, t) {
            return W(e, t)
        },
        _data: function(e, t, n) {
            return R(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return W(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), x.fn.extend({
        data: function(e, n) {
            var r, i, o = null,
                a = 0,
                s = this[0];
            if (e === t) {
                if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                    for (r = s.attributes; r.length > a; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
                    x._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                x.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                x.data(this, e, n)
            }) : s ? $(s, e, x.data(s, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                x.removeData(this, e)
            })
        }
    });

    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
                } catch (o) {}
                x.data(e, n, r)
            } else r = t
        }
        return r
    }

    function I(e) {
        var t;
        for (t in e)
            if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }
    x.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = x._queueHooks(e, t),
                a = function() {
                    x.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return x._data(e, n) || x._data(e, n, {
                empty: x.Callbacks("once memory").add(function() {
                    x._removeData(e, t + "queue"), x._removeData(e, n)
                })
            })
        }
    }), x.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                o = x.Deferred(),
                a = this,
                s = this.length,
                l = function() {
                    --i || o.resolveWith(a, [a])
                };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (s--) r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n)
        }
    });
    var z, X, U = /[\t\r\n\f]/g,
        V = /\r/g,
        Y = /^(?:input|select|textarea|button|object)$/i,
        J = /^(?:a|area)$/i,
        G = /^(?:checked|selected)$/i,
        Q = x.support.getSetAttribute,
        K = x.support.input;
    x.fn.extend({
        attr: function(e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = x.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function(t) {
                x(this).addClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                        o = 0;
                        while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = x.trim(r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function(t) {
                x(this).removeClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                        o = 0;
                        while (i = t[o++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? x.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) {
                x(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) {
                    var t, r = 0,
                        o = x(this),
                        a = e.match(T) || [];
                    while (t = a[r++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = x.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
            }
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        o = "select-one" === e.type || 0 > i,
                        a = o ? null : [],
                        s = o ? i + 1 : r.length,
                        l = 0 > i ? s : o ? i : 0;
                    for (; s > l; l++)
                        if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = x.makeArray(t),
                        a = i.length;
                    while (a--) r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function(e, n, r) {
            var o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(T);
            if (o && 1 === e.nodeType)
                while (n = o[i++]) r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), X = {
        set: function(e, t, n) {
            return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ? function(e, n, i) {
            var o = x.expr.attrHandle[n],
                a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return x.expr.attrHandle[n] = o, a
        } : function(e, n, r) {
            return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), K && Q || (x.attrHooks.value = {
        set: function(e, n, r) {
            return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
        }
    }), Q || (z = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, x.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: z.set
    }, x.attrHooks.contenteditable = {
        set: function(e, t, n) {
            z.set(e, "" === t ? !1 : t, n)
        }
    }, x.each(["width", "height"], function(e, n) {
        x.attrHooks[n] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        }
    })), x.support.hrefNormalized || x.each(["href", "src"], function(e, t) {
        x.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), x.support.style || (x.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), x.support.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        x.propFix[this.toLowerCase()] = this
    }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = {
            set: function(e, n) {
                return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
            }
        }, x.support.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;

    function it() {
        return !0
    }

    function ot() {
        return !1
    }

    function at() {
        try {
            return a.activeElement
        } catch (e) {}
    }
    x.event = {
        global: {},
        add: function(e, n, r, o, a) {
            var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
            if (v) {
                r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
                    return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
                }, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
                while (u--) s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
                    type: g,
                    origType: y,
                    data: o,
                    handler: r,
                    guid: r.guid,
                    selector: a,
                    needsContext: a && x.expr.match.needsContext.test(a),
                    namespace: m.join(".")
                }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(T) || [""], u = t.length;
                while (u--)
                    if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
                        while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                        l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
                    } else
                        for (d in c) x.event.remove(e, d + t[u], n, r, !0);
                x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var s, l, u, c, p, f, d, h = [i || a],
                g = v.call(n, "type") ? n.type : n,
                m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !x.isWindow(i)) {
                    for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) h.push(u), f = u;
                    f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((u = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
                if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                    f = i[l], f && (i[l] = null), x.event.triggered = g;
                    try {
                        i[g]()
                    } catch (y) {}
                    x.event.triggered = t, f && (i[l] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = x.event.fix(e);
            var n, r, i, o, a, s = [],
                l = g.call(arguments),
                u = (x._data(this, "events") || {})[e.type] || [],
                c = x.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = x.event.handlers.call(this, e, u), n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem, a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [],
                l = n.delegateCount,
                u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return n.length > l && s.push({
                elem: this,
                handlers: n.slice(l)
            }), s
        },
        fix: function(e) {
            if (e[x.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
            while (t--) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, s = n.button,
                    l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== at() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === at() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                },
                _default: function(e) {
                    return x.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, x.removeEvent = a.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, x.Event = function(e, n) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
    }, x.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }
    }, x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), x.support.submitBubbles || (x.event.special.submit = {
        setup: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target,
                    r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
                r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), x._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
        }
    }), x.support.changeBubbles || (x.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), x.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
            })), !1) : (x.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
                }), x._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return x.event.remove(this, "._change"), !Z.test(this.nodeName)
        }
    }), x.support.focusinBubbles || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0,
            r = function(e) {
                x.event.simulate(t, e.target, x.event.fix(e), !0)
            };
        x.event.special[t] = {
            setup: function() {
                0 === n++ && a.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && a.removeEventListener(e, r, !0)
            }
        }
    }), x.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;
            else if (!i) return this;
            return 1 === o && (s = i, i = function(e) {
                return x().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function() {
                x.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() {
                x.event.remove(this, e, r, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? x.event.trigger(e, n, r, !0) : t
        }
    });
    var st = /^.[^:#\[\.,]*$/,
        lt = /^(?:parents|prev(?:Until|All))/,
        ut = x.expr.match.needsContext,
        ct = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    x.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(x(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (x.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) x.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function(e) {
            var t, n = x(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (x.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(ft(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(ft(this, e || [], !1))
        },
        is: function(e) {
            return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? x.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
                r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function pt(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }
    x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return x.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x.dir(e, "parentNode", n)
        },
        next: function(e) {
            return pt(e, "nextSibling")
        },
        prev: function(e) {
            return pt(e, "previousSibling")
        },
        nextAll: function(e) {
            return x.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return x.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return x.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x.sibling(e.firstChild)
        },
        contents: function(e) {
            return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
        }
    }, function(e, t) {
        x.fn[e] = function(n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), x.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, r) {
            var i = [],
                o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });

    function ft(e, t, n) {
        if (x.isFunction(t)) return x.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return x.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (st.test(t)) return x.filter(t, e, n);
            t = x.filter(t, e)
        }
        return x.grep(e, function(e) {
            return x.inArray(e, t) >= 0 !== n
        })
    }

    function dt(e) {
        var t = ht.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gt = / jQuery\d+="(?:null|\d+)"/g,
        mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
        yt = /^\s+/,
        vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        xt = /<tbody/i,
        wt = /<|&#?\w+;/,
        Tt = /<(?:script|style|link)/i,
        Ct = /^(?:checkbox|radio)$/i,
        Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        kt = /^$|\/(?:java|ecma)script/i,
        Et = /^true\/(.*)/,
        St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        At = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        jt = dt(a),
        Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
        text: function(e) {
            return x.access(this, function(e) {
                return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = e ? x.filter(e, this) : this,
                i = 0;
            for (; null != (n = r[i]); i++) t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && x.cleanData(Ft(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && x.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return x.clone(this, e, t)
            })
        },
        html: function(e) {
            return x.access(this, function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = x.map(this, function(e) {
                    return [e.nextSibling, e.parentNode]
                }),
                t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++],
                    i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = d.apply([], e);
            var r, i, o, a, s, l, u = 0,
                c = this.length,
                p = this,
                f = c - 1,
                h = e[0],
                g = x.isFunction(h);
            if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function(r) {
                var i = p.eq(r);
                g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
                if (o)
                    for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
                l = r = null
            }
            return this
        }
    });

    function Lt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Ht(e) {
        return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
    }

    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function _t(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
    }

    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e),
                a = x._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) x.event.add(t, n, s[n][r])
            }
            a.data && (a.data = x.extend({}, a.data))
        }
    }

    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events) x.removeEvent(t, r, i.handle);
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        x.fn[e] = function(e) {
            var n, r = 0,
                i = [],
                o = x(e),
                a = o.length - 1;
            for (; a >= r; r++) n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
            return this.pushStack(i)
        }
    });

    function Ft(e, n) {
        var r, o, a = 0,
            s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s)
            for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }

    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked)
    }
    x.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
            if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) r[a] && Ot(i, r[a]);
            if (t)
                if (n)
                    for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) Mt(i, r[a]);
                else Mt(e, o);
            return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            var i, o, a, s, l, u, c, p = e.length,
                f = dt(t),
                d = [],
                h = 0;
            for (; p > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);
                    else if (wt.test(o)) {
                s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
                while (i--) s = s.lastChild;
                if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
                    o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                    while (i--) x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
                }
                x.merge(d, s.childNodes), s.textContent = "";
                while (s.firstChild) s.removeChild(s.firstChild);
                s = f.lastChild
            } else d.push(t.createTextNode(o));
            s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
            while (o = d[h++])
                if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
                    i = 0;
                    while (o = s[i++]) kt.test(o.type || "") && n.push(o)
                }
            return s = null, f
        },
        cleanData: function(e, t) {
            var n, r, o, a, s = 0,
                l = x.expando,
                u = x.cache,
                c = x.support.deleteExpando,
                f = x.event.special;
            for (; null != (n = e[s]); s++)
                if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
                    if (a.events)
                        for (r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
                    u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
                }
        },
        _evalUrl: function(e) {
            return x.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), x.fn.extend({
        wrapAll: function(e) {
            if (x.isFunction(e)) return this.each(function(t) {
                x(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return x.isFunction(e) ? this.each(function(t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = x(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = x.isFunction(e);
            return this.each(function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
        It = /opacity\s*=\s*([^)]*)/,
        zt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Ut = /^margin/,
        Vt = RegExp("^(" + w + ")(.*)$", "i"),
        Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
        Jt = RegExp("^([+-])=(" + w + ")", "i"),
        Gt = {
            BODY: "block"
        },
        Qt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Kt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];

    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--)
            if (t = en[i] + n, t in e) return t;
        return r
    }

    function nn(e, t) {
        return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, o = [],
            a = 0,
            s = e.length;
        for (; s > a; a++) r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    x.fn.extend({
        css: function(e, n) {
            return x.access(this, function(e, n, r) {
                var i, o, a = {},
                    s = 0;
                if (x.isArray(n)) {
                    for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = x.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? x.style(e, n, r) : x.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return rn(this, !0)
        },
        hide: function() {
            return rn(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                nn(this) ? x(this).show() : x(this).hide()
            })
        }
    }), x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": x.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = x.camelCase(n),
                    u = e.style;
                if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    u[n] = r
                } catch (c) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, l = x.camelCase(n);
            return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
        }
    }), e.getComputedStyle ? (Rt = function(t) {
        return e.getComputedStyle(t, null)
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            l = s ? s.getPropertyValue(n) || s[n] : t,
            u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
    }) : a.documentElement.currentStyle && (Rt = function(e) {
        return e.currentStyle
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            l = s ? s[n] : t,
            u = e.style;
        return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
    });

    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            a = 0;
        for (; 4 > o; o += 2) "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }

    function sn(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Rt(e),
            a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
            r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function ln(e) {
        var t = a,
            n = Gt[e];
        return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
    }

    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body),
            r = x.css(n[0], "display");
        return n.remove(), r
    }
    x.each(["height", "width"], function(e, n) {
        x.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function() {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), x.support.opacity || (x.cssHooks.opacity = {
        get: function(e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }), x(function() {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? x.swap(e, {
                    display: "inline-block"
                }, Wt, [e, "marginRight"]) : t
            }
        }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, n) {
            x.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
    }, x.expr.filters.visible = function(e) {
        return !x.expr.filters.hidden(e)
    }), x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0,
                    i = {},
                    o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ut.test(e) || (x.cssHooks[e + t].set = on)
    });
    var cn = /%20/g,
        pn = /\[\]$/,
        fn = /\r?\n/g,
        dn = /^(?:submit|button|image|reset|file)$/i,
        hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
            }).map(function(e, t) {
                var n = x(this).val();
                return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                }
            }).get()
        }
    }), x.param = function(e, n) {
        var r, i = [],
            o = function(e, t) {
                t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (r in e) gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+")
    };

    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t)) x.each(t, function(t, i) {
            n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== x.type(t)) r(e, t);
        else
            for (i in t) gn(e + "[" + i + "]", t[i], n, r)
    }
    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        x.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), x.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mn, yn, vn = x.now(),
        bn = /\?/,
        xn = /#.*$/,
        wn = /([?&])_=[^&]*/,
        Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Nn = /^(?:GET|HEAD)$/,
        kn = /^\/\//,
        En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Sn = x.fn.load,
        An = {},
        jn = {},
        Dn = "*/".concat("*");
    try {
        yn = o.href
    } catch (Ln) {
        yn = a.createElement("a"), yn.href = "", yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];

    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n))
                while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, n, r, i) {
        var o = {},
            a = e === jn;

        function s(l) {
            var u;
            return o[l] = !0, x.each(e[l] || [], function(e, l) {
                var c = l(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
            }), u
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function _n(e, n) {
        var r, i, o = x.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && x.extend(!0, e, r), e
    }
    x.fn.load = function(e, n, r) {
        if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
        var i, o, a, s = this,
            l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Cn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": x.parseJSON,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function(e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n),
                f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
                h = x.Deferred(),
                g = x.Callbacks("once memory"),
                m = p.statusCode || {},
                y = {},
                v = {},
                b = 0,
                w = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c) {
                                c = {};
                                while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
                            }
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = v[n] = v[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else C.always(e[C.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return u && u.abort(t), k(0, t), this
                    }
                };
            if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C;
            l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) C.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();
            w = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) C[i](p[i]);
            if (u = qn(jn, p, n, C)) {
                C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, u.send(y, k)
                } catch (N) {
                    if (!(2 > b)) throw N;
                    k(-1, N)
                }
            } else k(-1, "No Transport");

            function k(e, n, r, i) {
                var c, y, v, w, T, N = n;
                2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return x.get(e, t, n, "script")
        }
    }), x.each(["get", "post"], function(e, n) {
        x[n] = function(e, r, i, o) {
            return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    });

    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in l)
                if (l[s] && l[s].test(o)) {
                    u.unshift(s);
                    break
                }
        if (u[0] in r) a = u[0];
        else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t
    }

    function On(e, t, n, r) {
        var i, o, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)
                for (i in u)
                    if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (p) {
                    return {
                        state: "parsererror",
                        error: a ? p : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), x.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return {
                send: function(t, i) {
                    n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Fn = [],
        Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Fn.pop() || x.expando + "_" + vn++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || x.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Pn, Rn, Wn = 0,
        $n = e.ActiveXObject && function() {
            var e;
            for (e in Pn) Pn[e](t, !0)
        };

    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    x.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && In() || zn()
    } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function(n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) l.setRequestHeader(s, i[s])
                    } catch (u) {}
                    l.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, u, c, p;
                        try {
                            if (r && (i || 4 === l.readyState))
                                if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort();
                                else {
                                    p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                    try {
                                        c = l.statusText
                                    } catch (f) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        p && o(s, c, p, u)
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
        Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
        Jn = /queueHooks$/,
        Gn = [nr],
        Qn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Yn.exec(t),
                    o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
                    a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };

    function Kn() {
        return setTimeout(function() {
            Xn = t
        }), Xn = x.now()
    }

    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]),
            o = 0,
            a = i.length;
        for (; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function er(e, t, n) {
        var r, i, o = 0,
            a = Gn.length,
            s = x.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) return !1;
                var t = Xn || Kn(),
                    n = Math.max(0, u.startTime + u.duration - t),
                    r = n / u.duration || 0,
                    o = 1 - r,
                    a = 0,
                    l = u.tweens.length;
                for (; l > a; a++) u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Kn(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++)
            if (r = Gn[o].call(u, e, c, u.opts)) return r;
        return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }
    x.Animation = x.extend(er, {
        tweener: function(e, t) {
            x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });

    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this,
            c = {},
            p = e.style,
            f = e.nodeType && nn(e),
            d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, u.always(function() {
            u.always(function() {
                s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], Vn.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
                c[r] = d && d[r] || x.style(e, r)
            }
        if (!x.isEmptyObject(c)) {
            d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function() {
                x(e).hide()
            }), u.done(function() {
                var t;
                x._removeData(e, "fxshow");
                for (t in c) x.style(e, t, c[t])
            });
            for (r in c) a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }
    x.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.each(["toggle", "show", "hide"], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), x.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = x.isEmptyObject(e),
                o = x.speed(t, n, r),
                a = function() {
                    var t = er(this, x.extend({}, e), o);
                    (i || x._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = x.timers,
                    a = x._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && x.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = x._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = x.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    });

    function ir(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    x.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        x.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), x.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || x.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x.isFunction(t) && t
        };
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
        }, r
    }, x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function() {
        var e, n = x.timers,
            r = 0;
        for (Xn = x.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || x.fx.stop(), Xn = t
    }, x.fx.timer = function(e) {
        e() && x.timers.push(e) && x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function() {
        Un || (Un = setInterval(x.fx.tick, x.fx.interval))
    }, x.fx.stop = function() {
        clearInterval(Un), Un = null
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
        return x.grep(x.timers, function(t) {
            return e === t.elem
        }).length
    }), x.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            x.offset.setOffset(this, e, t)
        });
        var n, r, o = {
                top: 0,
                left: 0
            },
            a = this[0],
            s = a && a.ownerDocument;
        if (s) return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
            top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o
    }, x.offset = {
        setOffset: function(e, t, n) {
            var r = x.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = x(e),
                o = i.offset(),
                a = x.css(e, "top"),
                s = x.css(e, "left"),
                l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1,
                u = {},
                c = {},
                p, f;
            l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u)
        }
    }, x.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - x.css(r, "marginTop", !0),
                    left: t.left - n.left - x.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || s;
                while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent;
                return e || s
            })
        }
    }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function(i) {
            return x.access(this, function(e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    });

    function or(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    x.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        x.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            x.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function(n, r, i) {
                    var o;
                    return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), x.fn.size = function() {
        return this.length
    }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function() {
        return x
    }))
})(window);;
/*!
 * $.fn.scrollIntoView - similar to the default browser scrollIntoView
 * The default browser behavior always places the element at the top or bottom of its container. 
 * This override is smart enough to not scroll if the element is already visible.
 *
 * Copyright 2011 Arwid Bancewicz
 * Licensed under the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * @date 8 Jan 2013
 * @author Arwid Bancewicz http://arwid.ca
 * @version 0.3
 */
(function(a) {
    a.fn.scrollIntoView = function(f, j, c) {
        var b = a.extend({}, a.fn.scrollIntoView.defaults);
        if (a.type(f) == "object") {
            a.extend(b, f)
        } else {
            if (a.type(f) == "number") {
                a.extend(b, {
                    duration: f,
                    easing: j,
                    complete: c
                })
            } else {
                if (f == false) {
                    b.smooth = false
                }
            }
        }
        var h = Infinity,
            e = 0;
        if (this.size() == 1) {
            ((h = this.get(0).offsetTop) == null || (e = h + this.get(0).offsetHeight))
        } else {
            this.each(function(m, n) {
                (n.offsetTop < h ? h = n.offsetTop : n.offsetTop + n.offsetHeight > e ? e = n.offsetTop + n.offsetHeight : null)
            })
        }
        e -= h;
        var k = this.commonAncestor().get(0);
        var g = a(window).height();
        while (k) {
            var d = k.scrollTop,
                l = k.clientHeight;
            if (l > g) {
                l = g
            }
            if (l == 0 && k.tagName == "BODY") {
                l = g
            }
            if ((k.scrollTop != ((k.scrollTop += 1) == null || k.scrollTop) && (k.scrollTop -= 1) != null) || (k.scrollTop != ((k.scrollTop -= 1) == null || k.scrollTop) && (k.scrollTop += 1) != null)) {
                if (h <= d) {
                    i(k, h)
                } else {
                    if ((h + e) > (d + l)) {
                        i(k, h + e - l)
                    } else {
                        i(k, undefined)
                    }
                }
                return
            }
            k = k.parentNode
        }

        function i(n, m) {
            if (m === undefined) {
                if (a.isFunction(b.complete)) {
                    b.complete.call(n)
                }
            } else {
                if (b.smooth) {
                    a(n).stop().animate({
                        scrollTop: m
                    }, b)
                } else {
                    n.scrollTop = m;
                    if (a.isFunction(b.complete)) {
                        b.complete.call(n)
                    }
                }
            }
        }
        return this
    };
    a.fn.scrollIntoView.defaults = {
        smooth: true,
        duration: null,
        easing: a.easing && a.easing.easeOutExpo ? "easeOutExpo" : null,
        complete: a.noop(),
        step: null,
        specialEasing: {}
    };
    a.fn.isOutOfView = function(b) {
        var c = true;
        this.each(function() {
            var h = this.parentNode,
                d = h.scrollTop,
                g = h.clientHeight,
                f = this.offsetTop,
                e = this.offsetHeight;
            if (b ? (f) > (d + g) : (f + e) > (d + g)) {} else {
                if (b ? (f + e) < d : f < d) {} else {
                    c = false
                }
            }
        });
        return c
    };
    a.fn.commonAncestor = function() {
        var c = [];
        var f = Infinity;
        a(this).each(function() {
            var g = a(this).parents();
            c.push(g);
            f = Math.min(f, g.length)
        });
        for (var d = 0; d < c.length; d++) {
            c[d] = c[d].slice(c[d].length - f)
        }
        for (var d = 0; d < c[0].length; d++) {
            var e = true;
            for (var b in c) {
                if (c[b][d] != c[0][d]) {
                    e = false;
                    break
                }
            }
            if (e) {
                return a(c[0][d])
            }
        }
        return a([])
    }
})(jQuery);;
(function() {
    $.fn.values = function(b) {
        var a = $(this).find(":input").get();
        if (typeof b != "object") {
            b = {};
            $.each(a, function() {
                if (this.name && !this.disabled && (this.checked || /select|textarea/i.test(this.nodeName) || /text|hidden|password/i.test(this.type))) {
                    b[this.name] = $(this).val()
                }
            });
            return b
        } else {
            $.each(a, function() {
                if (this.name && b[this.name]) {
                    if (this.type == "checkbox" || this.type == "radio") {
                        $(this).attr("checked", (b[this.name] == $(this).val()))
                    } else {
                        $(this).val(b[this.name])
                    }
                }
            });
            return $(this)
        }
    }
})();;
(function(f) {
    var j = (history && history.pushState);
    var i = !j && ("onhashchange" in window) && false;
    var l = {};
    var h = [];
    var a = false;
    var c = location.href;
    var d = true;
    l.currentId = "";
    l.currentParameters = {};
    l.capabilities = {
        hash: i,
        pushState: j,
        timer: !i && !j
    };
    l.reset = function() {
        var n = {};
        var o = [];
        n.currentId = "";
        n.currentParameters = {}
    };
    l.add = function(o, r, q) {
        if (typeof r == "function") {
            q = r;
            delete r
        }
        var n = typeof o == "object";
        if (!n) {
            if (o.lastIndexOf("/") == o.length - 1) {
                o = o.substring(0, o.length - 1)
            }
            o = o.replace(location.protocol + "//", "").replace(location.hostname, "")
        }
        var p = {
            route: o,
            callback: q,
            type: n ? "regexp" : "string",
            id: r
        };
        h.push(p);
        if (!a) {
            m()
        }
    };

    function m() {
        a = true;
        l.fromHash = false;
        if (j) {
            if (location.hash.indexOf("#!/") === 0) {
                var n = location.pathname + location.hash.replace(/^#!\//gi, "");
                history.replaceState({}, "", n);
                l.fromHash = true
            }
            f(window).bind("popstate", g)
        } else {
            if (i) {
                f(window).bind("hashchange.router", g)
            } else {
                setInterval(function() {
                    if (location.href != c) {
                        g();
                        c = location.href
                    }
                }, 500)
            }
        }
    }
    m();
    l.go = function(o, q, n) {
        if (j) {
            history.pushState({}, q, o);
            if (!n) {
                k()
            }
        } else {
            o = o.replace(location.protocol + "//", "").replace(location.hostname, "");
            var p = o.replace(location.pathname, "");
            if (p.indexOf("!") < 0) {
                p = "!/" + p
            }
            location.hash = p
        }
    };
    l.check = l.redo = function() {
        k(true)
    };

    function b(n) {
        var o = n ? n : location.pathname;
        o = decodeURI(o);
        if (!j) {
            if (location.hash.indexOf("#!/") === 0) {
                o += location.hash.substring(3)
            } else {
                return ""
            }
        }
        o = o.replace(/\/$/, "");
        return o
    }
    l.parameters = function(n) {
        var p = b(n);
        var o = e(p);
        if (o.length == 0) {
            l.currentParameters = {}
        } else {
            l.currentParameters = o[0].data
        }
        return l.currentParameters
    };

    function e(n) {
        var v = [];
        for (var s = 0, y = h.length; s < y; s++) {
            var w = h[s];
            if (w.type == "regexp") {
                var A = n.match(w.route);
                if (A) {
                    var r = {};
                    r.matches = A;
                    v.push({
                        route: w,
                        data: r
                    });
                    l.currentId = w.id;
                    break
                }
            } else {
                var x = n.split("/");
                var z = w.route.split("/");
                if (z.length == x.length) {
                    var r = {};
                    var o = true;
                    var u = 0;
                    for (var q = 0, t = z.length; q < t; q++) {
                        var p = z[q].indexOf(":") === 0;
                        if (p) {
                            r[z[q].substring(1)] = decodeURI(x[q]);
                            u++
                        } else {
                            if (z[q] == x[q]) {
                                u++
                            }
                        }
                    }
                    if (z.length == u) {
                        v.push({
                            route: w,
                            data: r
                        });
                        l.currentId = w.id;
                        l.currentParameters = r;
                        break
                    }
                }
            }
        }
        return v
    }

    function k() {
        var q = b(location.pathname);
        var p = e(q);
        for (var n = 0, o = p.length; n < o; n++) {
            p[n].route.callback(p[n].data)
        }
    }

    function g(n) {
        if (n != null && n.originalEvent && n.originalEvent.state) {
            k()
        } else {
            if (i) {
                k()
            } else {
                if (!i && !j) {
                    k()
                }
            }
        }
    }
    if (!f.router) {
        f.router = l
    } else {
        if (window.console && window.console.warn) {
            console.warn("jQuery.status already defined. Something is using the same name.")
        }
    }
})(jQuery);;
/*!
 * Bootstrap.js by @fat & @mdo
 * Copyright 2012 Twitter, Inc.
 * http://www.apache.org/licenses/LICENSE-2.0.txt
 */
! function(e) {
    "use strict";
    e(function() {
        e.support.transition = function() {
            var e = function() {
                var e = document.createElement("bootstrap"),
                    t = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    },
                    n;
                for (n in t)
                    if (e.style[n] !== undefined) return t[n]
            }();
            return e && {
                end: e
            }
        }()
    })
}(window.jQuery), ! function(e) {
    "use strict";
    var t = '[data-dismiss="alert"]',
        n = function(n) {
            e(n).on("click", t, this.close)
        };
    n.prototype.close = function(t) {
        function s() {
            i.trigger("closed").remove()
        }
        var n = e(this),
            r = n.attr("data-target"),
            i;
        r || (r = n.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), i = e(r), t && t.preventDefault(), i.length || (i = n.hasClass("alert") ? n : n.parent()), i.trigger(t = e.Event("close"));
        if (t.isDefaultPrevented()) return;
        i.removeClass("in"), e.support.transition && i.hasClass("fade") ? i.on(e.support.transition.end, s) : s()
    };
    var r = e.fn.alert;
    e.fn.alert = function(t) {
        return this.each(function() {
            var r = e(this),
                i = r.data("alert");
            i || r.data("alert", i = new n(this)), typeof t == "string" && i[t].call(r)
        })
    }, e.fn.alert.Constructor = n, e.fn.alert.noConflict = function() {
        return e.fn.alert = r, this
    }, e(document).on("click.alert.data-api", t, n.prototype.close)
}(window.jQuery), ! function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t), this.options = e.extend({}, e.fn.button.defaults, n)
    };
    t.prototype.setState = function(e) {
        var t = "disabled",
            n = this.$element,
            r = n.data(),
            i = n.is("input") ? "val" : "html";
        e += "Text", r.resetText || n.data("resetText", n[i]()), n[i](r[e] || this.options[e]), setTimeout(function() {
            e == "loadingText" ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t)
        }, 0)
    }, t.prototype.toggle = function() {
        var e = this.$element.closest('[data-toggle="buttons-radio"]');
        e && e.find(".active").removeClass("active"), this.$element.toggleClass("active")
    };
    var n = e.fn.button;
    e.fn.button = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("button"),
                s = typeof n == "object" && n;
            i || r.data("button", i = new t(this, s)), n == "toggle" ? i.toggle() : n && i.setState(n)
        })
    }, e.fn.button.defaults = {
        loadingText: "loading..."
    }, e.fn.button.Constructor = t, e.fn.button.noConflict = function() {
        return e.fn.button = n, this
    }, e(document).on("click.button.data-api", "[data-toggle^=button]", function(t) {
        var n = e(t.target);
        n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle")
    })
}(window.jQuery), ! function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.options.pause == "hover" && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
    };
    t.prototype = {
        cycle: function(t) {
            return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
        },
        getActiveIndex: function() {
            return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
        },
        to: function(t) {
            var n = this.getActiveIndex(),
                r = this;
            if (t > this.$items.length - 1 || t < 0) return;
            return this.sliding ? this.$element.one("slid", function() {
                r.to(t)
            }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", e(this.$items[t]))
        },
        pause: function(t) {
            return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition.end && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), clearInterval(this.interval), this.interval = null, this
        },
        next: function() {
            if (this.sliding) return;
            return this.slide("next")
        },
        prev: function() {
            if (this.sliding) return;
            return this.slide("prev")
        },
        slide: function(t, n) {
            var r = this.$element.find(".item.active"),
                i = n || r[t](),
                s = this.interval,
                o = t == "next" ? "left" : "right",
                u = t == "next" ? "first" : "last",
                a = this,
                f;
            this.sliding = !0, s && this.pause(), i = i.length ? i : this.$element.find(".item")[u](), f = e.Event("slide", {
                relatedTarget: i[0],
                direction: o
            });
            if (i.hasClass("active")) return;
            this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
                var t = e(a.$indicators.children()[a.getActiveIndex()]);
                t && t.addClass("active")
            }));
            if (e.support.transition && this.$element.hasClass("slide")) {
                this.$element.trigger(f);
                if (f.isDefaultPrevented()) return;
                i.addClass(t), i[0].offsetWidth, r.addClass(o), i.addClass(o), this.$element.one(e.support.transition.end, function() {
                    i.removeClass([t, o].join(" ")).addClass("active"), r.removeClass(["active", o].join(" ")), a.sliding = !1, setTimeout(function() {
                        a.$element.trigger("slid")
                    }, 0)
                })
            } else {
                this.$element.trigger(f);
                if (f.isDefaultPrevented()) return;
                r.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
            }
            return s && this.cycle(), this
        }
    };
    var n = e.fn.carousel;
    e.fn.carousel = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("carousel"),
                s = e.extend({}, e.fn.carousel.defaults, typeof n == "object" && n),
                o = typeof n == "string" ? n : s.slide;
            i || r.data("carousel", i = new t(this, s)), typeof n == "number" ? i.to(n) : o ? i[o]() : s.interval && i.pause().cycle()
        })
    }, e.fn.carousel.defaults = {
        interval: 5e3,
        pause: "hover"
    }, e.fn.carousel.Constructor = t, e.fn.carousel.noConflict = function() {
        return e.fn.carousel = n, this
    }, e(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function(t) {
        var n = e(this),
            r, i = e(n.attr("data-target") || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "")),
            s = e.extend({}, i.data(), n.data()),
            o;
        i.carousel(s), (o = n.attr("data-slide-to")) && i.data("carousel").pause().to(o).cycle(), t.preventDefault()
    })
}(window.jQuery), ! function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t), this.options = e.extend({}, e.fn.collapse.defaults, n), this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
    };
    t.prototype = {
        constructor: t,
        dimension: function() {
            var e = this.$element.hasClass("width");
            return e ? "width" : "height"
        },
        show: function() {
            var t, n, r, i;
            if (this.transitioning || this.$element.hasClass("in")) return;
            t = this.dimension(), n = e.camelCase(["scroll", t].join("-")), r = this.$parent && this.$parent.find("> .accordion-group > .in");
            if (r && r.length) {
                i = r.data("collapse");
                if (i && i.transitioning) return;
                r.collapse("hide"), i || r.data("collapse", null)
            }
            this.$element[t](0), this.transition("addClass", e.Event("show"), "shown"), e.support.transition && this.$element[t](this.$element[0][n])
        },
        hide: function() {
            var t;
            if (this.transitioning || !this.$element.hasClass("in")) return;
            t = this.dimension(), this.reset(this.$element[t]()), this.transition("removeClass", e.Event("hide"), "hidden"), this.$element[t](0)
        },
        reset: function(e) {
            var t = this.dimension();
            return this.$element.removeClass("collapse")[t](e || "auto")[0].offsetWidth, this.$element[e !== null ? "addClass" : "removeClass"]("collapse"), this
        },
        transition: function(t, n, r) {
            var i = this,
                s = function() {
                    n.type == "show" && i.reset(), i.transitioning = 0, i.$element.trigger(r)
                };
            this.$element.trigger(n);
            if (n.isDefaultPrevented()) return;
            this.transitioning = 1, this.$element[t]("in"), e.support.transition && this.$element.hasClass("collapse") ? this.$element.one(e.support.transition.end, s) : s()
        },
        toggle: function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }
    };
    var n = e.fn.collapse;
    e.fn.collapse = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("collapse"),
                s = e.extend({}, e.fn.collapse.defaults, r.data(), typeof n == "object" && n);
            i || r.data("collapse", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.collapse.defaults = {
        toggle: !0
    }, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function() {
        return e.fn.collapse = n, this
    }, e(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(t) {
        var n = e(this),
            r, i = n.attr("data-target") || t.preventDefault() || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""),
            s = e(i).data("collapse") ? "toggle" : n.data();
        n[e(i).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), e(i).collapse(s)
    })
}(window.jQuery), ! function(e) {
    "use strict";

    function r() {
        e(t).each(function() {
            i(e(this)).removeClass("open")
        })
    }

    function i(t) {
        var n = t.attr("data-target"),
            r;
        n || (n = t.attr("href"), n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")), r = n && e(n);
        if (!r || !r.length) r = t.parent();
        return r
    }
    var t = "[data-toggle=dropdown]",
        n = function(t) {
            var n = e(t).on("click.dropdown.data-api", this.toggle);
            e("html").on("click.dropdown.data-api", function() {
                n.parent().removeClass("open")
            })
        };
    n.prototype = {
        constructor: n,
        toggle: function(t) {
            var n = e(this),
                s, o;
            if (n.is(".disabled, :disabled")) return;
            return s = i(n), o = s.hasClass("open"), r(), o || s.toggleClass("open"), n.focus(), !1
        },
        keydown: function(n) {
            var r, s, o, u, a, f;
            if (!/(38|40|27)/.test(n.keyCode)) return;
            r = e(this), n.preventDefault(), n.stopPropagation();
            if (r.is(".disabled, :disabled")) return;
            u = i(r), a = u.hasClass("open");
            if (!a || a && n.keyCode == 27) return n.which == 27 && u.find(t).focus(), r.click();
            s = e("[role=menu] li:not(.divider):visible a", u);
            if (!s.length) return;
            f = s.index(s.filter(":focus")), n.keyCode == 38 && f > 0 && f--, n.keyCode == 40 && f < s.length - 1 && f++, ~f || (f = 0), s.eq(f).focus()
        }
    };
    var s = e.fn.dropdown;
    e.fn.dropdown = function(t) {
        return this.each(function() {
            var r = e(this),
                i = r.data("dropdown");
            i || r.data("dropdown", i = new n(this)), typeof t == "string" && i[t].call(r)
        })
    }, e.fn.dropdown.Constructor = n, e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = s, this
    }, e(document).on("click.dropdown.data-api", r).on("click.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.dropdown-menu", function(e) {
        e.stopPropagation()
    }).on("click.dropdown.data-api", t, n.prototype.toggle).on("keydown.dropdown.data-api", t + ", [role=menu]", n.prototype.keydown)
}(window.jQuery), ! function(e) {
    "use strict";
    var t = function(t, n) {
        this.options = n, this.$element = e(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", e.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
    };
    t.prototype = {
        constructor: t,
        toggle: function() {
            return this[this.isShown ? "hide" : "show"]()
        },
        show: function() {
            var t = this,
                n = e.Event("show");
            this.$element.trigger(n);
            if (this.isShown || n.isDefaultPrevented()) return;
            this.isShown = !0, this.escape(), this.backdrop(function() {
                var n = e.support.transition && t.$element.hasClass("fade");
                t.$element.parent().length || t.$element.appendTo(document.body), t.$element.show(), n && t.$element[0].offsetWidth, t.$element.addClass("in").attr("aria-hidden", !1), t.enforceFocus(), n ? t.$element.one(e.support.transition.end, function() {
                    t.$element.focus().trigger("shown")
                }) : t.$element.focus().trigger("shown")
            })
        },
        hide: function(t) {
            t && t.preventDefault();
            var n = this;
            t = e.Event("hide"), this.$element.trigger(t);
            if (!this.isShown || t.isDefaultPrevented()) return;
            this.isShown = !1, this.escape(), e(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), e.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal()
        },
        enforceFocus: function() {
            var t = this;
            e(document).on("focusin.modal", function(e) {
                t.$element[0] !== e.target && !t.$element.has(e.target).length && t.$element.focus()
            })
        },
        escape: function() {
            var e = this;
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(t) {
                t.which == 27 && e.hide()
            }) : this.isShown || this.$element.off("keyup.dismiss.modal")
        },
        hideWithTransition: function() {
            var t = this,
                n = setTimeout(function() {
                    t.$element.off(e.support.transition.end), t.hideModal()
                }, 500);
            this.$element.one(e.support.transition.end, function() {
                clearTimeout(n), t.hideModal()
            })
        },
        hideModal: function() {
            var e = this;
            this.$element.hide(), this.backdrop(function() {
                e.removeBackdrop(), e.$element.trigger("hidden")
            })
        },
        removeBackdrop: function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        },
        backdrop: function(t) {
            var n = this,
                r = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var i = e.support.transition && r;
                this.$backdrop = e('<div class="modal-backdrop ' + r + '" />').appendTo(document.body), this.$backdrop.click(this.options.backdrop == "static" ? e.proxy(this.$element[0].focus, this.$element[0]) : e.proxy(this.hide, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in");
                if (!t) return;
                i ? this.$backdrop.one(e.support.transition.end, t) : t()
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t) : t()) : t && t()
        }
    };
    var n = e.fn.modal;
    e.fn.modal = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("modal"),
                s = e.extend({}, e.fn.modal.defaults, r.data(), typeof n == "object" && n);
            i || r.data("modal", i = new t(this, s)), typeof n == "string" ? i[n]() : s.show && i.show()
        })
    }, e.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function() {
        return e.fn.modal = n, this
    }, e(document).on("click.modal.data-api", '[data-toggle="modal"]', function(t) {
        var n = e(this),
            r = n.attr("href"),
            i = e(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            s = i.data("modal") ? "toggle" : e.extend({
                remote: !/#/.test(r) && r
            }, i.data(), n.data());
        t.preventDefault(), i.modal(s).one("hide", function() {
            n.focus()
        })
    })
}(window.jQuery), ! function(e) {
    "use strict";
    var t = function(e, t) {
        this.init("tooltip", e, t)
    };
    t.prototype = {
        constructor: t,
        init: function(t, n, r) {
            var i, s, o, u, a;
            this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.enabled = !0, o = this.options.trigger.split(" ");
            for (a = o.length; a--;) u = o[a], u == "click" ? this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)) : u != "manual" && (i = u == "hover" ? "mouseenter" : "focus", s = u == "hover" ? "mouseleave" : "blur", this.$element.on(i + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.leave, this)));
            this.options.selector ? this._options = e.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        },
        getOptions: function(t) {
            return t = e.extend({}, e.fn[this.type].defaults, this.$element.data(), t), t.delay && typeof t.delay == "number" && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t
        },
        enter: function(t) {
            var n = e.fn[this.type].defaults,
                r = {},
                i;
            this._options && e.each(this._options, function(e, t) {
                n[e] != t && (r[e] = t)
            }, this), i = e(t.currentTarget)[this.type](r).data(this.type);
            if (!i.options.delay || !i.options.delay.show) return i.show();
            clearTimeout(this.timeout), i.hoverState = "in", this.timeout = setTimeout(function() {
                i.hoverState == "in" && i.show()
            }, i.options.delay.show)
        },
        leave: function(t) {
            var n = e(t.currentTarget)[this.type](this._options).data(this.type);
            this.timeout && clearTimeout(this.timeout);
            if (!n.options.delay || !n.options.delay.hide) return n.hide();
            n.hoverState = "out", this.timeout = setTimeout(function() {
                n.hoverState == "out" && n.hide()
            }, n.options.delay.hide)
        },
        show: function() {
            var t, n, r, i, s, o, u = e.Event("show");
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(u);
                if (u.isDefaultPrevented()) return;
                t = this.tip(), this.setContent(), this.options.animation && t.addClass("fade"), s = typeof this.options.placement == "function" ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement, t.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }), this.options.container ? t.appendTo(this.options.container) : t.insertAfter(this.$element), n = this.getPosition(), r = t[0].offsetWidth, i = t[0].offsetHeight;
                switch (s) {
                    case "bottom":
                        o = {
                            top: n.top + n.height,
                            left: n.left + n.width / 2 - r / 2
                        };
                        break;
                    case "top":
                        o = {
                            top: n.top - i,
                            left: n.left + n.width / 2 - r / 2
                        };
                        break;
                    case "left":
                        o = {
                            top: n.top + n.height / 2 - i / 2,
                            left: n.left - r
                        };
                        break;
                    case "right":
                        o = {
                            top: n.top + n.height / 2 - i / 2,
                            left: n.left + n.width
                        }
                }
                this.applyPlacement(o, s), this.$element.trigger("shown")
            }
        },
        applyPlacement: function(e, t) {
            var n = this.tip(),
                r = n[0].offsetWidth,
                i = n[0].offsetHeight,
                s, o, u, a;
            n.offset(e).addClass(t).addClass("in"), s = n[0].offsetWidth, o = n[0].offsetHeight, t == "top" && o != i && (e.top = e.top + i - o, a = !0), t == "bottom" || t == "top" ? (u = 0, e.left < 0 && (u = e.left * -2, e.left = 0, n.offset(e), s = n[0].offsetWidth, o = n[0].offsetHeight), this.replaceArrow(u - r + s, s, "left")) : this.replaceArrow(o - i, o, "top"), a && n.offset(e)
        },
        replaceArrow: function(e, t, n) {
            this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
        },
        setContent: function() {
            var e = this.tip(),
                t = this.getTitle();
            e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
        },
        hide: function() {
            function i() {
                var t = setTimeout(function() {
                    n.off(e.support.transition.end).detach()
                }, 500);
                n.one(e.support.transition.end, function() {
                    clearTimeout(t), n.detach()
                })
            }
            var t = this,
                n = this.tip(),
                r = e.Event("hide");
            this.$element.trigger(r);
            if (r.isDefaultPrevented()) return;
            return n.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? i() : n.detach(), this.$element.trigger("hidden"), this
        },
        fixTitle: function() {
            var e = this.$element;
            (e.attr("title") || typeof e.attr("data-original-title") != "string") && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
        },
        hasContent: function() {
            return this.getTitle()
        },
        getPosition: function() {
            var t = this.$element[0];
            return e.extend({}, typeof t.getBoundingClientRect == "function" ? t.getBoundingClientRect() : {
                width: t.offsetWidth,
                height: t.offsetHeight
            }, this.$element.offset())
        },
        getTitle: function() {
            var e, t = this.$element,
                n = this.options;
            return e = t.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(t[0]) : n.title), e
        },
        tip: function() {
            return this.$tip = this.$tip || e(this.options.template)
        },
        arrow: function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        },
        validate: function() {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function() {
            this.enabled = !0
        },
        disable: function() {
            this.enabled = !1
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled
        },
        toggle: function(t) {
            var n = t ? e(t.currentTarget)[this.type](this._options).data(this.type) : this;
            n.tip().hasClass("in") ? n.hide() : n.show()
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    };
    var n = e.fn.tooltip;
    e.fn.tooltip = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("tooltip"),
                s = typeof n == "object" && n;
            i || r.data("tooltip", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.tooltip.Constructor = t, e.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = n, this
    }
}(window.jQuery), ! function(e) {
    "use strict";
    var t = function(e, t) {
        this.init("popover", e, t)
    };
    t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype, {
        constructor: t,
        setContent: function() {
            var e = this.tip(),
                t = this.getTitle(),
                n = this.getContent();
            e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content")[this.options.html ? "html" : "text"](n), e.removeClass("fade top bottom left right in")
        },
        hasContent: function() {
            return this.getTitle() || this.getContent()
        },
        getContent: function() {
            var e, t = this.$element,
                n = this.options;
            return e = (typeof n.content == "function" ? n.content.call(t[0]) : n.content) || t.attr("data-content"), e
        },
        tip: function() {
            return this.$tip || (this.$tip = e(this.options.template)), this.$tip
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    });
    var n = e.fn.popover;
    e.fn.popover = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("popover"),
                s = typeof n == "object" && n;
            i || r.data("popover", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.popover.Constructor = t, e.fn.popover.defaults = e.extend({}, e.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), e.fn.popover.noConflict = function() {
        return e.fn.popover = n, this
    }
}(window.jQuery), ! function(e) {
    "use strict";

    function t(t, n) {
        var r = e.proxy(this.process, this),
            i = e(t).is("body") ? e(window) : e(t),
            s;
        this.options = e.extend({}, e.fn.scrollspy.defaults, n), this.$scrollElement = i.on("scroll.scroll-spy.data-api", r), this.selector = (this.options.target || (s = e(t).attr("href")) && s.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = e("body"), this.refresh(), this.process()
    }
    t.prototype = {
        constructor: t,
        refresh: function() {
            var t = this,
                n;
            this.offsets = e([]), this.targets = e([]), n = this.$body.find(this.selector).map(function() {
                var n = e(this),
                    r = n.data("target") || n.attr("href"),
                    i = /^#\w/.test(r) && e(r);
                return i && i.length && [
                    [i.position().top + (!e.isWindow(t.$scrollElement.get(0)) && t.$scrollElement.scrollTop()), r]
                ] || null
            }).sort(function(e, t) {
                return e[0] - t[0]
            }).each(function() {
                t.offsets.push(this[0]), t.targets.push(this[1])
            })
        },
        process: function() {
            var e = this.$scrollElement.scrollTop() + this.options.offset,
                t = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
                n = t - this.$scrollElement.height(),
                r = this.offsets,
                i = this.targets,
                s = this.activeTarget,
                o;
            if (e >= n) return s != (o = i.last()[0]) && this.activate(o);
            for (o = r.length; o--;) s != i[o] && e >= r[o] && (!r[o + 1] || e <= r[o + 1]) && this.activate(i[o])
        },
        activate: function(t) {
            var n, r;
            this.activeTarget = t, e(this.selector).parent(".active").removeClass("active"), r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', n = e(r).parent("li").addClass("active"), n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate")
        }
    };
    var n = e.fn.scrollspy;
    e.fn.scrollspy = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("scrollspy"),
                s = typeof n == "object" && n;
            i || r.data("scrollspy", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.defaults = {
        offset: 10
    }, e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = n, this
    }, e(window).on("load", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            t.scrollspy(t.data())
        })
    })
}(window.jQuery), ! function(e) {
    "use strict";
    var t = function(t) {
        this.element = e(t)
    };
    t.prototype = {
        constructor: t,
        show: function() {
            var t = this.element,
                n = t.closest("ul:not(.dropdown-menu)"),
                r = t.attr("data-target"),
                i, s, o;
            r || (r = t.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
            if (t.parent("li").hasClass("active")) return;
            i = n.find(".active:last a")[0], o = e.Event("show", {
                relatedTarget: i
            }), t.trigger(o);
            if (o.isDefaultPrevented()) return;
            s = e(r), this.activate(t.parent("li"), n), this.activate(s, s.parent(), function() {
                t.trigger({
                    type: "shown",
                    relatedTarget: i
                })
            })
        },
        activate: function(t, n, r) {
            function o() {
                i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), r && r()
            }
            var i = n.find("> .active"),
                s = r && e.support.transition && i.hasClass("fade");
            s ? i.one(e.support.transition.end, o) : o(), i.removeClass("in")
        }
    };
    var n = e.fn.tab;
    e.fn.tab = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("tab");
            i || r.data("tab", i = new t(this)), typeof n == "string" && i[n]()
        })
    }, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function() {
        return e.fn.tab = n, this
    }, e(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
        t.preventDefault(), e(this).tab("show")
    })
}(window.jQuery), ! function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t), this.options = e.extend({}, e.fn.typeahead.defaults, n), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = e(this.options.menu), this.shown = !1, this.listen()
    };
    t.prototype = {
        constructor: t,
        select: function() {
            var e = this.$menu.find(".active").attr("data-value");
            return this.$element.val(this.updater(e)).change(), this.hide()
        },
        updater: function(e) {
            return e
        },
        show: function() {
            var t = e.extend({}, this.$element.position(), {
                height: this.$element[0].offsetHeight
            });
            return this.$menu.insertAfter(this.$element).css({
                top: t.top + t.height,
                left: t.left
            }).show(), this.shown = !0, this
        },
        hide: function() {
            return this.$menu.hide(), this.shown = !1, this
        },
        lookup: function(t) {
            var n;
            return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (n = e.isFunction(this.source) ? this.source(this.query, e.proxy(this.process, this)) : this.source, n ? this.process(n) : this)
        },
        process: function(t) {
            var n = this;
            return t = e.grep(t, function(e) {
                return n.matcher(e)
            }), t = this.sorter(t), t.length ? this.render(t.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
        },
        matcher: function(e) {
            return ~e.toLowerCase().indexOf(this.query.toLowerCase())
        },
        sorter: function(e) {
            var t = [],
                n = [],
                r = [],
                i;
            while (i = e.shift()) i.toLowerCase().indexOf(this.query.toLowerCase()) ? ~i.indexOf(this.query) ? n.push(i) : r.push(i) : t.push(i);
            return t.concat(n, r)
        },
        highlighter: function(e) {
            var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return e.replace(new RegExp("(" + t + ")", "ig"), function(e, t) {
                return "<strong>" + t + "</strong>"
            })
        },
        render: function(t) {
            var n = this;
            return t = e(t).map(function(t, r) {
                return t = e(n.options.item).attr("data-value", r), t.find("a").html(n.highlighter(r)), t[0]
            }), t.first().addClass("active"), this.$menu.html(t), this
        },
        next: function(t) {
            var n = this.$menu.find(".active").removeClass("active"),
                r = n.next();
            r.length || (r = e(this.$menu.find("li")[0])), r.addClass("active")
        },
        prev: function(e) {
            var t = this.$menu.find(".active").removeClass("active"),
                n = t.prev();
            n.length || (n = this.$menu.find("li").last()), n.addClass("active")
        },
        listen: function() {
            this.$element.on("focus", e.proxy(this.focus, this)).on("blur", e.proxy(this.blur, this)).on("keypress", e.proxy(this.keypress, this)).on("keyup", e.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", e.proxy(this.keydown, this)), this.$menu.on("click", e.proxy(this.click, this)).on("mouseenter", "li", e.proxy(this.mouseenter, this)).on("mouseleave", "li", e.proxy(this.mouseleave, this))
        },
        eventSupported: function(e) {
            var t = e in this.$element;
            return t || (this.$element.setAttribute(e, "return;"), t = typeof this.$element[e] == "function"), t
        },
        move: function(e) {
            if (!this.shown) return;
            switch (e.keyCode) {
                case 9:
                case 13:
                case 27:
                    e.preventDefault();
                    break;
                case 38:
                    e.preventDefault(), this.prev();
                    break;
                case 40:
                    e.preventDefault(), this.next()
            }
            e.stopPropagation()
        },
        keydown: function(t) {
            this.suppressKeyPressRepeat = ~e.inArray(t.keyCode, [40, 38, 9, 13, 27]), this.move(t)
        },
        keypress: function(e) {
            if (this.suppressKeyPressRepeat) return;
            this.move(e)
        },
        keyup: function(e) {
            switch (e.keyCode) {
                case 40:
                case 38:
                case 16:
                case 17:
                case 18:
                    break;
                case 9:
                case 13:
                    if (!this.shown) return;
                    this.select();
                    break;
                case 27:
                    if (!this.shown) return;
                    this.hide();
                    break;
                default:
                    this.lookup()
            }
            e.stopPropagation(), e.preventDefault()
        },
        focus: function(e) {
            this.focused = !0
        },
        blur: function(e) {
            this.focused = !1, !this.mousedover && this.shown && this.hide()
        },
        click: function(e) {
            e.stopPropagation(), e.preventDefault(), this.select(), this.$element.focus()
        },
        mouseenter: function(t) {
            this.mousedover = !0, this.$menu.find(".active").removeClass("active"), e(t.currentTarget).addClass("active")
        },
        mouseleave: function(e) {
            this.mousedover = !1, !this.focused && this.shown && this.hide()
        }
    };
    var n = e.fn.typeahead;
    e.fn.typeahead = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("typeahead"),
                s = typeof n == "object" && n;
            i || r.data("typeahead", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        minLength: 1
    }, e.fn.typeahead.Constructor = t, e.fn.typeahead.noConflict = function() {
        return e.fn.typeahead = n, this
    }, e(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(t) {
        var n = e(this);
        if (n.data("typeahead")) return;
        n.typeahead(n.data())
    })
}(window.jQuery), ! function(e) {
    "use strict";
    var t = function(t, n) {
        this.options = e.extend({}, e.fn.affix.defaults, n), this.$window = e(window).on("scroll.affix.data-api", e.proxy(this.checkPosition, this)).on("click.affix.data-api", e.proxy(function() {
            setTimeout(e.proxy(this.checkPosition, this), 1)
        }, this)), this.$element = e(t), this.checkPosition()
    };
    t.prototype.checkPosition = function() {
        if (!this.$element.is(":visible")) return;
        var t = e(document).height(),
            n = this.$window.scrollTop(),
            r = this.$element.offset(),
            i = this.options.offset,
            s = i.bottom,
            o = i.top,
            u = "affix affix-top affix-bottom",
            a;
        typeof i != "object" && (s = o = i), typeof o == "function" && (o = i.top()), typeof s == "function" && (s = i.bottom()), a = this.unpin != null && n + this.unpin <= r.top ? !1 : s != null && r.top + this.$element.height() >= t - s ? "bottom" : o != null && n <= o ? "top" : !1;
        if (this.affixed === a) return;
        this.affixed = a, this.unpin = a == "bottom" ? r.top - n : null, this.$element.removeClass(u).addClass("affix" + (a ? "-" + a : ""))
    };
    var n = e.fn.affix;
    e.fn.affix = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("affix"),
                s = typeof n == "object" && n;
            i || r.data("affix", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.affix.Constructor = t, e.fn.affix.defaults = {
        offset: 0
    }, e.fn.affix.noConflict = function() {
        return e.fn.affix = n, this
    }, e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var t = e(this),
                n = t.data();
            n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), t.affix(n)
        })
    })
}(window.jQuery);;
! function(c) {
    var d = function(e) {
        this.value = {
            h: 1,
            s: 1,
            b: 1,
            a: 1
        };
        this.setColor(e)
    };
    d.prototype = {
        constructor: d,
        setColor: function(f) {
            f = f.toLowerCase();
            var e = this;
            c.each(b.stringParsers, function(j, l) {
                var h = l.re.exec(f),
                    g = h && l.parse(h),
                    k = l.space || "rgba";
                if (g) {
                    if (k === "hsla") {
                        e.value = b.RGBtoHSB.apply(null, b.HSLtoRGB.apply(null, g))
                    } else {
                        e.value = b.RGBtoHSB.apply(null, g)
                    }
                    return false
                }
            })
        },
        setHue: function(e) {
            this.value.h = 1 - e
        },
        setSaturation: function(e) {
            this.value.s = e
        },
        setLightness: function(e) {
            this.value.b = 1 - e
        },
        setAlpha: function(e) {
            this.value.a = parseInt((1 - e) * 100, 10) / 100
        },
        toRGB: function(j, n, k, l) {
            if (!j) {
                j = this.value.h;
                n = this.value.s;
                k = this.value.b
            }
            j *= 360;
            var i, m, f, g, e;
            j = (j % 360) / 60;
            e = k * n;
            g = e * (1 - Math.abs(j % 2 - 1));
            i = m = f = k - e;
            j = ~~j;
            i += [e, g, 0, 0, g, e][j];
            m += [g, e, e, g, 0, 0][j];
            f += [0, 0, g, e, e, g][j];
            return {
                r: Math.round(i * 255),
                g: Math.round(m * 255),
                b: Math.round(f * 255),
                a: l || this.value.a
            }
        },
        toHex: function(j, i, e, f) {
            var g = this.toRGB(j, i, e, f);
            return "#" + ((1 << 24) | (parseInt(g.r) << 16) | (parseInt(g.g) << 8) | parseInt(g.b)).toString(16).substr(1).toUpperCase()
        },
        toHSL: function(l, k, f, g) {
            if (!l) {
                l = this.value.h;
                k = this.value.s;
                f = this.value.b
            }
            var j = l,
                e = (2 - k) * f,
                i = k * f;
            if (e > 0 && e <= 1) {
                i /= e
            } else {
                i /= 2 - e
            }
            e /= 2;
            if (i > 1) {
                i = 1
            }
            return {
                h: j,
                s: i,
                l: e,
                a: g || this.value.a
            }
        }
    };
    var a = function(f, e) {
        this.element = c(f);
        var g = e.format || this.element.data("color-format") || "hex";
        this.format = b.translateFormats[g];
        this.isInput = this.element.is("input");
        this.component = this.element.is(".color") ? this.element.find(".add-on") : false;
        this.picker = c(b.template).appendTo("body").on("mousedown", c.proxy(this.mousedown, this));
        if (this.isInput) {
            this.element.on({
                focus: c.proxy(this.show, this),
                keyup: c.proxy(this.update, this)
            })
        } else {
            if (this.component) {
                this.component.on({
                    click: c.proxy(this.show, this)
                })
            } else {
                this.element.on({
                    click: c.proxy(this.show, this)
                })
            }
        }
        if (g === "rgba" || g === "hsla") {
            this.picker.addClass("alpha");
            this.alpha = this.picker.find(".colorpicker-alpha")[0].style
        }
        if (this.component) {
            this.picker.find(".colorpicker-color").hide();
            this.preview = this.element.find("i")[0].style
        } else {
            this.preview = this.picker.find("div:last")[0].style
        }
        this.base = this.picker.find("div:first")[0].style;
        this.update()
    };
    a.prototype = {
        constructor: a,
        show: function(f) {
            this.picker.show();
            this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
            this.place();
            c(window).on("resize", c.proxy(this.place, this));
            if (!this.isInput) {
                if (f) {
                    f.stopPropagation();
                    f.preventDefault()
                }
            }
            c(document).on({
                mousedown: c.proxy(this.hide, this)
            });
            this.element.trigger({
                type: "show",
                color: this.color
            })
        },
        update: function() {
            this.color = new d(this.isInput ? this.element.prop("value") : this.element.data("color"));
            this.picker.find("i").eq(0).css({
                left: this.color.value.s * 100,
                top: 100 - this.color.value.b * 100
            }).end().eq(1).css("top", 100 * (1 - this.color.value.h)).end().eq(2).css("top", 100 * (1 - this.color.value.a));
            this.previewColor()
        },
        setValue: function(e) {
            this.color = new d(e);
            this.picker.find("i").eq(0).css({
                left: this.color.value.s * 100,
                top: 100 - this.color.value.b * 100
            }).end().eq(1).css("top", 100 * (1 - this.color.value.h)).end().eq(2).css("top", 100 * (1 - this.color.value.a));
            this.previewColor();
            this.element.trigger({
                type: "changeColor",
                color: this.color
            })
        },
        hide: function() {
            this.picker.hide();
            c(window).off("resize", this.place);
            if (!this.isInput) {
                c(document).off({
                    mousedown: this.hide
                });
                if (this.component) {
                    this.element.find("input").prop("value", this.format.call(this))
                }
                this.element.data("color", this.format.call(this))
            } else {}
            this.element.trigger({
                type: "hide",
                color: this.color
            })
        },
        place: function() {
            var e = this.component ? this.component.offset() : this.element.offset();
            this.picker.css({
                top: e.top + this.height,
                left: e.left
            })
        },
        previewColor: function() {
            try {
                this.preview.backgroundColor = this.format.call(this)
            } catch (f) {
                this.preview.backgroundColor = this.color.toHex()
            }
            this.base.backgroundColor = this.color.toHex(this.color.value.h, 1, 1, 1);
            if (this.alpha) {
                this.alpha.backgroundColor = this.color.toHex()
            }
        },
        pointer: null,
        slider: null,
        mousedown: function(h) {
            h.stopPropagation();
            h.preventDefault();
            var g = c(h.target);
            var f = g.closest("div");
            if (!f.is(".colorpicker")) {
                if (f.is(".colorpicker-saturation")) {
                    this.slider = c.extend({}, b.sliders.saturation)
                } else {
                    if (f.is(".colorpicker-hue")) {
                        this.slider = c.extend({}, b.sliders.hue)
                    } else {
                        if (f.is(".colorpicker-alpha")) {
                            this.slider = c.extend({}, b.sliders.alpha)
                        } else {
                            return false
                        }
                    }
                }
                var i = f.offset();
                this.slider.knob = f.find("i")[0].style;
                this.slider.left = h.pageX - i.left;
                this.slider.top = h.pageY - i.top;
                this.pointer = {
                    left: h.pageX,
                    top: h.pageY
                };
                c(document).on({
                    mousemove: c.proxy(this.mousemove, this),
                    mouseup: c.proxy(this.mouseup, this)
                }).trigger("mousemove")
            }
            return false
        },
        mousemove: function(h) {
            h.stopPropagation();
            h.preventDefault();
            var g = Math.max(0, Math.min(this.slider.maxLeft, this.slider.left + ((h.pageX || this.pointer.left) - this.pointer.left)));
            var f = Math.max(0, Math.min(this.slider.maxTop, this.slider.top + ((h.pageY || this.pointer.top) - this.pointer.top)));
            this.slider.knob.left = g + "px";
            this.slider.knob.top = f + "px";
            if (this.slider.callLeft) {
                this.color[this.slider.callLeft].call(this.color, g / 100)
            }
            if (this.slider.callTop) {
                this.color[this.slider.callTop].call(this.color, f / 100)
            }
            this.previewColor();
            this.element.trigger({
                type: "changeColor",
                color: this.color
            });
            return false
        },
        mouseup: function(f) {
            f.stopPropagation();
            f.preventDefault();
            c(document).off({
                mousemove: this.mousemove,
                mouseup: this.mouseup
            });
            return false
        }
    };
    c.fn.colorpicker = function(e) {
        return this.each(function() {
            var h = c(this),
                g = h.data("colorpicker"),
                f = typeof e === "object" && e;
            if (!g) {
                h.data("colorpicker", (g = new a(this, c.extend({}, c.fn.colorpicker.defaults, f))))
            }
            if (typeof e === "string") {
                g[e]()
            }
        })
    };
    c.fn.colorpicker.defaults = {};
    c.fn.colorpicker.Constructor = a;
    var b = {
        translateFormats: {
            rgb: function() {
                var e = this.color.toRGB();
                return "rgb(" + e.r + "," + e.g + "," + e.b + ")"
            },
            rgba: function() {
                var e = this.color.toRGB();
                return "rgba(" + e.r + "," + e.g + "," + e.b + "," + e.a + ")"
            },
            hsl: function() {
                var e = this.color.toHSL();
                return "hsl(" + Math.round(e.h * 360) + "," + Math.round(e.s * 100) + "%," + Math.round(e.l * 100) + "%)"
            },
            hsla: function() {
                var e = this.color.toHSL();
                return "hsla(" + Math.round(e.h * 360) + "," + Math.round(e.s * 100) + "%," + Math.round(e.l * 100) + "%," + e.a + ")"
            },
            hex: function() {
                return this.color.toHex()
            }
        },
        sliders: {
            saturation: {
                maxLeft: 100,
                maxTop: 100,
                callLeft: "setSaturation",
                callTop: "setLightness"
            },
            hue: {
                maxLeft: 0,
                maxTop: 100,
                callLeft: false,
                callTop: "setHue"
            },
            alpha: {
                maxLeft: 0,
                maxTop: 100,
                callLeft: false,
                callTop: "setAlpha"
            }
        },
        RGBtoHSB: function(l, k, e, h) {
            l /= 255;
            k /= 255;
            e /= 255;
            var j, i, f, m;
            f = Math.max(l, k, e);
            m = f - Math.min(l, k, e);
            j = (m === 0 ? null : f == l ? (k - e) / m : f == k ? (e - l) / m + 2 : (l - k) / m + 4);
            j = ((j + 360) % 6) * 60 / 360;
            i = m === 0 ? 0 : m / f;
            return {
                h: j || 1,
                s: i,
                b: f,
                a: h || 1
            }
        },
        HueToRGB: function(g, f, e) {
            if (e < 0) {
                e += 1
            } else {
                if (e > 1) {
                    e -= 1
                }
            }
            if ((e * 6) < 1) {
                return g + (f - g) * e * 6
            } else {
                if ((e * 2) < 1) {
                    return f
                } else {
                    if ((e * 3) < 2) {
                        return g + (f - g) * ((2 / 3) - e) * 6
                    } else {
                        return g
                    }
                }
            }
        },
        HSLtoRGB: function(n, w, k, v) {
            if (w < 0) {
                w = 0
            }
            var f;
            if (k <= 0.5) {
                f = k * (1 + w)
            } else {
                f = k + w - (k * w)
            }
            var i = 2 * k - f;
            var t = n + (1 / 3);
            var j = n;
            var m = n - (1 / 3);
            var e = Math.round(b.HueToRGB(i, f, t) * 255);
            var o = Math.round(b.HueToRGB(i, f, j) * 255);
            var u = Math.round(b.HueToRGB(i, f, m) * 255);
            return [e, o, u, v || 1]
        },
        stringParsers: [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: function(e) {
                return [e[1], e[2], e[3], e[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: function(e) {
                return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
            }
        }, {
            re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
            parse: function(e) {
                return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
            }
        }, {
            re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
            parse: function(e) {
                return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(e) {
                return [e[1] / 360, e[2] / 100, e[3] / 100, e[4]]
            }
        }],
        template: '<div class="colorpicker dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-alpha"><i></i></div><div class="colorpicker-color"><div /></div></div>'
    }
}(window.jQuery);;
! function(c) {
    var a = function(e, d) {
        this.element = c(e);
        this.format = b.parseFormat(d.format || this.element.data("date-format") || "mm/dd/yyyy");
        this.picker = c(b.template).appendTo("body").on({
            click: c.proxy(this.click, this)
        });
        this.isInput = this.element.is("input");
        this.component = this.element.is(".date") ? this.element.find(".add-on") : false;
        if (this.isInput) {
            this.element.on({
                focus: c.proxy(this.show, this),
                keyup: c.proxy(this.update, this)
            })
        } else {
            if (this.component) {
                this.component.on("click", c.proxy(this.show, this))
            } else {
                this.element.on("click", c.proxy(this.show, this))
            }
        }
        this.minViewMode = d.minViewMode || this.element.data("date-minviewmode") || 0;
        if (typeof this.minViewMode === "string") {
            switch (this.minViewMode) {
                case "months":
                    this.minViewMode = 1;
                    break;
                case "years":
                    this.minViewMode = 2;
                    break;
                default:
                    this.minViewMode = 0;
                    break
            }
        }
        this.viewMode = d.viewMode || this.element.data("date-viewmode") || 0;
        if (typeof this.viewMode === "string") {
            switch (this.viewMode) {
                case "months":
                    this.viewMode = 1;
                    break;
                case "years":
                    this.viewMode = 2;
                    break;
                default:
                    this.viewMode = 0;
                    break
            }
        }
        this.startViewMode = this.viewMode;
        this.weekStart = d.weekStart || this.element.data("date-weekstart") || 0;
        this.weekEnd = this.weekStart === 0 ? 6 : this.weekStart - 1;
        this.onRender = d.onRender;
        this.fillDow();
        this.fillMonths();
        this.update();
        this.showMode()
    };
    a.prototype = {
        constructor: a,
        show: function(f) {
            this.picker.show();
            this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
            this.place();
            c(window).on("resize", c.proxy(this.place, this));
            if (f) {
                f.stopPropagation();
                f.preventDefault()
            }
            if (!this.isInput) {}
            var d = this;
            c(document).on("mousedown", function(e) {
                if (c(e.target).closest(".datepicker").length == 0) {
                    d.hide()
                }
            });
            this.element.trigger({
                type: "show",
                date: this.date
            })
        },
        hide: function() {
            this.picker.hide();
            c(window).off("resize", this.place);
            this.viewMode = this.startViewMode;
            this.showMode();
            if (!this.isInput) {
                c(document).off("mousedown", this.hide)
            }
            this.element.trigger({
                type: "hide",
                date: this.date
            })
        },
        set: function() {
            var d = b.formatDate(this.date, this.format);
            if (!this.isInput) {
                if (this.component) {
                    this.element.find("input").prop("value", d)
                }
                this.element.data("date", d)
            } else {
                this.element.prop("value", d)
            }
        },
        setValue: function(d) {
            if (typeof d === "string") {
                this.date = b.parseDate(d, this.format)
            } else {
                this.date = new Date(d)
            }
            this.set();
            this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0);
            this.fill()
        },
        place: function() {
            var d = this.component ? this.component.offset() : this.element.offset();
            this.picker.css({
                top: d.top + this.height,
                left: d.left
            })
        },
        update: function(d) {
            this.date = b.parseDate(typeof d === "string" ? d : (this.isInput ? this.element.prop("value") : this.element.data("date")), this.format);
            this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0);
            this.fill()
        },
        fillDow: function() {
            var d = this.weekStart;
            var e = "<tr>";
            while (d < this.weekStart + 7) {
                e += '<th class="dow">' + b.dates.daysMin[(d++) % 7] + "</th>"
            }
            e += "</tr>";
            this.picker.find(".datepicker-days thead").append(e)
        },
        fillMonths: function() {
            var e = "";
            var d = 0;
            while (d < 12) {
                e += '<span class="month">' + b.dates.monthsShort[d++] + "</span>"
            }
            this.picker.find(".datepicker-months td").append(e)
        },
        fill: function() {
            var r = new Date(this.viewDate),
                s = r.getFullYear(),
                q = r.getMonth(),
                g = this.date.valueOf();
            this.picker.find(".datepicker-days th:eq(1)").text(b.dates.months[q] + " " + s);
            var k = new Date(s, q - 1, 28, 0, 0, 0, 0),
                t = b.getDaysInMonth(k.getFullYear(), k.getMonth());
            k.setDate(t);
            k.setDate(t - (k.getDay() - this.weekStart + 7) % 7);
            var n = new Date(k);
            n.setDate(n.getDate() + 42);
            n = n.valueOf();
            var m = [];
            var j, p, e;
            while (k.valueOf() < n) {
                if (k.getDay() === this.weekStart) {
                    m.push("<tr>")
                }
                j = this.onRender(k);
                p = k.getFullYear();
                e = k.getMonth();
                if ((e < q && p === s) || p < s) {
                    j += " old"
                } else {
                    if ((e > q && p === s) || p > s) {
                        j += " new"
                    }
                }
                if (k.valueOf() === g) {
                    j += " active"
                }
                m.push('<td class="day ' + j + '">' + k.getDate() + "</td>");
                if (k.getDay() === this.weekEnd) {
                    m.push("</tr>")
                }
                k.setDate(k.getDate() + 1)
            }
            this.picker.find(".datepicker-days tbody").empty().append(m.join(""));
            var o = this.date.getFullYear();
            var f = this.picker.find(".datepicker-months").find("th:eq(1)").text(s).end().find("span").removeClass("active");
            if (o === s) {
                f.eq(this.date.getMonth()).addClass("active")
            }
            m = "";
            s = parseInt(s / 10, 10) * 10;
            var h = this.picker.find(".datepicker-years").find("th:eq(1)").text(s + "-" + (s + 9)).end().find("td");
            s -= 1;
            for (var l = -1; l < 11; l++) {
                m += '<span class="year' + (l === -1 || l === 10 ? " old" : "") + (o === s ? " active" : "") + '">' + s + "</span>";
                s += 1
            }
            h.html(m)
        },
        click: function(i) {
            i.stopPropagation();
            i.preventDefault();
            var h = c(i.target).closest("span, td, th");
            if (h.length === 1) {
                switch (h[0].nodeName.toLowerCase()) {
                    case "th":
                        switch (h[0].className) {
                            case "switch":
                                this.showMode(1);
                                break;
                            case "prev":
                            case "next":
                                this.viewDate["set" + b.modes[this.viewMode].navFnc].call(this.viewDate, this.viewDate["get" + b.modes[this.viewMode].navFnc].call(this.viewDate) + b.modes[this.viewMode].navStep * (h[0].className === "prev" ? -1 : 1));
                                this.fill();
                                this.set();
                                break
                        }
                        break;
                    case "span":
                        if (h.is(".month")) {
                            var g = h.parent().find("span").index(h);
                            this.viewDate.setMonth(g)
                        } else {
                            var f = parseInt(h.text(), 10) || 0;
                            this.viewDate.setFullYear(f)
                        }
                        if (this.viewMode !== 0) {
                            this.date = new Date(this.viewDate);
                            this.element.trigger({
                                type: "changeDate",
                                date: this.date,
                                viewMode: b.modes[this.viewMode].clsName
                            })
                        }
                        this.showMode(-1);
                        this.fill();
                        this.set();
                        break;
                    case "td":
                        if (h.is(".day") && !h.is(".disabled")) {
                            var d = parseInt(h.text(), 10) || 1;
                            var g = this.viewDate.getMonth();
                            if (h.is(".old")) {
                                g -= 1
                            } else {
                                if (h.is(".new")) {
                                    g += 1
                                }
                            }
                            var f = this.viewDate.getFullYear();
                            this.date = new Date(f, g, d, 0, 0, 0, 0);
                            this.viewDate = new Date(f, g, Math.min(28, d), 0, 0, 0, 0);
                            this.fill();
                            this.set();
                            this.element.trigger({
                                type: "changeDate",
                                date: this.date,
                                viewMode: b.modes[this.viewMode].clsName
                            })
                        }
                        break
                }
            }
        },
        mousedown: function(d) {
            d.stopPropagation();
            d.preventDefault()
        },
        showMode: function(d) {
            if (d) {
                this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + d))
            }
            this.picker.find(">div").hide().filter(".datepicker-" + b.modes[this.viewMode].clsName).show()
        }
    };
    c.fn.datepicker = function(d, e) {
        return this.each(function() {
            var h = c(this),
                g = h.data("datepicker"),
                f = typeof d === "object" && d;
            if (!g) {
                h.data("datepicker", (g = new a(this, c.extend({}, c.fn.datepicker.defaults, f))))
            }
            if (typeof d === "string") {
                g[d](e)
            }
        })
    };
    c.fn.datepicker.defaults = {
        onRender: function(d) {
            return ""
        }
    };
    c.fn.datepicker.Constructor = a;
    var b = {
        modes: [{
            clsName: "days",
            navFnc: "Month",
            navStep: 1
        }, {
            clsName: "months",
            navFnc: "FullYear",
            navStep: 1
        }, {
            clsName: "years",
            navFnc: "FullYear",
            navStep: 10
        }],
        dates: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        isLeapYear: function(d) {
            return (((d % 4 === 0) && (d % 100 !== 0)) || (d % 400 === 0))
        },
        getDaysInMonth: function(d, e) {
            return [31, (b.isLeapYear(d) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
        },
        parseFormat: function(f) {
            var e = f.match(/[.\/\-\s].*?/),
                d = f.split(/\W+/);
            if (!e || !d || d.length === 0) {
                throw new Error("Invalid date format.")
            }
            return {
                separator: e,
                parts: d
            }
        },
        parseDate: function(f, m) {
            var g = f.split(m.separator),
                f = new Date(),
                e;
            f.setHours(0);
            f.setMinutes(0);
            f.setSeconds(0);
            f.setMilliseconds(0);
            if (g.length === m.parts.length) {
                var k = f.getFullYear(),
                    l = f.getDate(),
                    j = f.getMonth();
                for (var h = 0, d = m.parts.length; h < d; h++) {
                    e = parseInt(g[h], 10) || 1;
                    switch (m.parts[h]) {
                        case "dd":
                        case "d":
                            l = e;
                            f.setDate(e);
                            break;
                        case "mm":
                        case "m":
                            j = e - 1;
                            f.setMonth(e - 1);
                            break;
                        case "yy":
                            k = 2000 + e;
                            f.setFullYear(2000 + e);
                            break;
                        case "yyyy":
                            k = e;
                            f.setFullYear(e);
                            break
                    }
                }
                f = new Date(k, j, l, 0, 0, 0)
            }
            return f
        },
        formatDate: function(d, g) {
            var h = {
                d: d.getDate(),
                m: d.getMonth() + 1,
                yy: d.getFullYear().toString().substring(2),
                yyyy: d.getFullYear()
            };
            h.dd = (h.d < 10 ? "0" : "") + h.d;
            h.mm = (h.m < 10 ? "0" : "") + h.m;
            var d = [];
            for (var f = 0, e = g.parts.length; f < e; f++) {
                d.push(h[g.parts[f]])
            }
            return d.join(g.separator)
        },
        headTemplate: '<thead><tr><th class="prev"><i class="icon-chevron-left"></i></th><th colspan="5" class="switch"></th><th class="next"><i class="icon-chevron-right"></i></th></tr></thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
    };
    b.template = '<div class="datepicker dropdown-menu"><div class="datepicker-days"><table class=" table-condensed">' + b.headTemplate + '<tbody></tbody></table></div><div class="datepicker-months"><table class="table-condensed">' + b.headTemplate + b.contTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + b.headTemplate + b.contTemplate + "</table></div></div>"
}(window.jQuery);;
! function(b) {
    var a = function(d, c) {
        this.$element = b(d);
        this.options = b.extend({}, b.fn.timepicker.defaults, c, this.$element.data());
        this.minuteStep = this.options.minuteStep || this.minuteStep;
        this.secondStep = this.options.secondStep || this.secondStep;
        this.showMeridian = this.options.showMeridian || this.showMeridian;
        this.showSeconds = this.options.showSeconds || this.showSeconds;
        this.showInputs = this.options.showInputs || this.showInputs;
        this.disableFocus = this.options.disableFocus || this.disableFocus;
        this.template = this.options.template || this.template;
        this.modalBackdrop = this.options.modalBackdrop || this.modalBackdrop;
        this.defaultTime = this.options.defaultTime || this.defaultTime;
        this.open = false;
        this.init()
    };
    a.prototype = {
        constructor: a,
        init: function() {
            if (this.$element.parent().hasClass("input-append")) {
                this.$element.parent(".input-append").find(".add-on").on("click", b.proxy(this.showWidget, this));
                this.$element.on({
                    focus: b.proxy(this.highlightUnit, this),
                    click: b.proxy(this.highlightUnit, this),
                    keypress: b.proxy(this.elementKeypress, this),
                    blur: b.proxy(this.blurElement, this)
                })
            } else {
                if (this.template) {
                    this.$element.on({
                        focus: b.proxy(this.showWidget, this),
                        click: b.proxy(this.showWidget, this),
                        keypress: b.proxy(this.elementKeypress, this),
                        blur: b.proxy(this.blurElement, this)
                    })
                } else {
                    this.$element.on({
                        focus: b.proxy(this.highlightUnit, this),
                        click: b.proxy(this.highlightUnit, this),
                        keypress: b.proxy(this.elementKeypress, this),
                        blur: b.proxy(this.blurElement, this)
                    })
                }
            }
            this.$widget = b(this.getTemplate()).appendTo("body");
            this.$widget.on("click", b.proxy(this.widgetClick, this));
            if (this.showInputs) {
                this.$widget.find("input").on({
                    click: function() {
                        this.select()
                    },
                    keypress: b.proxy(this.widgetKeypress, this),
                    change: b.proxy(this.updateFromWidgetInputs, this)
                })
            }
            this.setDefaultTime(this.defaultTime)
        },
        showWidget: function(d) {
            d.stopPropagation();
            d.preventDefault();
            if (this.open) {
                return
            }
            this.$element.trigger("show");
            if (this.disableFocus) {
                this.$element.blur()
            }
            var f = b.extend({}, this.$element.offset(), {
                height: this.$element[0].offsetHeight
            });
            this.updateFromElementVal(true);
            var c = this;
            b(document).on("mousedown", function(e) {
                if (b(e.target).closest(".bootstrap-timepicker").length == 0) {
                    c.hideWidget()
                }
            });
            if (this.template === "modal") {
                this.$widget.modal("show").on("hidden", b.proxy(this.hideWidget, this))
            } else {
                this.$widget.css({
                    top: f.top + f.height,
                    left: f.left
                });
                if (!this.open) {
                    this.$widget.addClass("open")
                }
            }
            this.open = true;
            this.$element.trigger("shown")
        },
        hideWidget: function() {
            this.$element.trigger("hide");
            if (this.template === "modal") {
                this.$widget.modal("hide")
            } else {
                this.$widget.removeClass("open")
            }
            this.open = false;
            this.$element.trigger("hidden")
        },
        widgetClick: function(d) {
            d.stopPropagation();
            d.preventDefault();
            var c = b(d.target).closest("a").data("action");
            if (c) {
                this[c]();
                this.update()
            }
        },
        widgetKeypress: function(d) {
            var c = b(d.target).closest("input").attr("name");
            switch (d.keyCode) {
                case 9:
                    if (this.showMeridian) {
                        if (c == "meridian") {
                            this.hideWidget()
                        }
                    } else {
                        if (this.showSeconds) {
                            if (c == "second") {
                                this.hideWidget()
                            }
                        } else {
                            if (c == "minute") {
                                this.hideWidget()
                            }
                        }
                    }
                    break;
                case 27:
                    this.hideWidget();
                    break;
                case 38:
                    switch (c) {
                        case "hour":
                            this.incrementHour();
                            break;
                        case "minute":
                            this.incrementMinute();
                            break;
                        case "second":
                            this.incrementSecond();
                            break;
                        case "meridian":
                            this.toggleMeridian();
                            break
                    }
                    this.update();
                    break;
                case 40:
                    switch (c) {
                        case "hour":
                            this.decrementHour();
                            break;
                        case "minute":
                            this.decrementMinute();
                            break;
                        case "second":
                            this.decrementSecond();
                            break;
                        case "meridian":
                            this.toggleMeridian();
                            break
                    }
                    this.update();
                    break
            }
        },
        elementKeypress: function(d) {
            var c = this.$element.get(0);
            switch (d.keyCode) {
                case 0:
                    break;
                case 9:
                    this.updateFromElementVal();
                    if (this.showMeridian) {
                        if (this.highlightedUnit != "meridian") {
                            d.preventDefault();
                            this.highlightNextUnit()
                        }
                    } else {
                        if (this.showSeconds) {
                            if (this.highlightedUnit != "second") {
                                d.preventDefault();
                                this.highlightNextUnit()
                            }
                        } else {
                            if (this.highlightedUnit != "minute") {
                                d.preventDefault();
                                this.highlightNextUnit()
                            }
                        }
                    }
                    break;
                case 27:
                case 13:
                    this.updateFromElementVal();
                    break;
                case 37:
                    this.updateFromElementVal();
                    this.highlightPrevUnit();
                    break;
                case 38:
                    switch (this.highlightedUnit) {
                        case "hour":
                            this.incrementHour();
                            break;
                        case "minute":
                            this.incrementMinute();
                            break;
                        case "second":
                            this.incrementSecond();
                            break;
                        case "meridian":
                            this.toggleMeridian();
                            break
                    }
                    this.updateElement();
                    break;
                case 39:
                    this.updateFromElementVal();
                    this.highlightNextUnit();
                    break;
                case 40:
                    switch (this.highlightedUnit) {
                        case "hour":
                            this.decrementHour();
                            break;
                        case "minute":
                            this.decrementMinute();
                            break;
                        case "second":
                            this.decrementSecond();
                            break;
                        case "meridian":
                            this.toggleMeridian();
                            break
                    }
                    this.updateElement();
                    break
            }
            if (d.keyCode !== 0 && d.keyCode !== 8 && d.keyCode !== 9 && d.keyCode !== 46) {}
        },
        setValues: function(e) {
            if (this.showMeridian) {
                var c = e.split(" ");
                var d = c[0].split(":");
                this.meridian = c[1]
            } else {
                var d = e.split(":")
            }
            this.hour = parseInt(d[0], 10);
            this.minute = parseInt(d[1], 10);
            this.second = parseInt(d[2], 10);
            if (isNaN(this.hour)) {
                this.hour = 0
            }
            if (isNaN(this.minute)) {
                this.minute = 0
            }
            if (this.showMeridian) {
                if (this.hour > 12) {
                    this.hour = 12
                } else {
                    if (this.hour < 1) {
                        this.hour = 1
                    }
                }
                if (this.meridian == "am" || this.meridian == "a") {
                    this.meridian = "AM"
                } else {
                    if (this.meridian == "pm" || this.meridian == "p") {
                        this.meridian = "PM"
                    }
                }
                if (this.meridian != "AM" && this.meridian != "PM") {
                    this.meridian = "AM"
                }
            } else {
                if (this.hour >= 24) {
                    this.hour = 23
                } else {
                    if (this.hour < 0) {
                        this.hour = 0
                    }
                }
            }
            if (this.minute < 0) {
                this.minute = 0
            } else {
                if (this.minute >= 60) {
                    this.minute = 59
                }
            }
            if (this.showSeconds) {
                if (isNaN(this.second)) {
                    this.second = 0
                } else {
                    if (this.second < 0) {
                        this.second = 0
                    } else {
                        if (this.second >= 60) {
                            this.second = 59
                        }
                    }
                }
            }
            this.updateElement();
            this.updateWidget()
        },
        setMeridian: function(c) {
            if (c == "a" || c == "am" || c == "AM") {
                this.meridian = "AM"
            } else {
                if (c == "p" || c == "pm" || c == "PM") {
                    this.meridian = "PM"
                } else {
                    this.updateWidget()
                }
            }
            this.updateElement()
        },
        setDefaultTime: function(e) {
            if (e) {
                if (e === "current") {
                    var c = new Date();
                    var d = c.getHours();
                    var g = Math.floor(c.getMinutes() / this.minuteStep) * this.minuteStep;
                    var h = Math.floor(c.getSeconds() / this.secondStep) * this.secondStep;
                    var f = "AM";
                    if (this.showMeridian) {
                        if (d === 0) {
                            d = 12
                        } else {
                            if (d >= 12) {
                                if (d > 12) {
                                    d = d - 12
                                }
                                f = "PM"
                            } else {
                                f = "AM"
                            }
                        }
                    }
                    this.hour = d;
                    this.minute = g;
                    this.second = h;
                    this.meridian = f
                } else {
                    if (e === "value") {
                        this.setValues(this.$element.val())
                    } else {
                        this.setValues(e)
                    }
                }
                if (this.$element.val() != "") {
                    this.updateElement()
                }
                this.updateWidget()
            } else {
                this.hour = 0;
                this.minute = 0;
                this.second = 0
            }
        },
        formatTime: function(c, f, d, e) {
            c = c < 10 ? "0" + c : c;
            f = f < 10 ? "0" + f : f;
            d = d < 10 ? "0" + d : d;
            return c + ":" + f + (this.showSeconds ? ":" + d : "") + (this.showMeridian ? " " + e : "")
        },
        getTime: function() {
            return this.formatTime(this.hour, this.minute, this.second, this.meridian)
        },
        setTime: function(c) {
            this.setValues(c);
            this.update()
        },
        update: function() {
            this.updateElement();
            this.updateWidget();
            this.$element.trigger({
                type: "changeTime.timepicker",
                time: {
                    value: this.getTime(),
                    hours: this.hour,
                    minutes: this.minute,
                    seconds: this.second,
                    meridian: this.meridian
                }
            })
        },
        clear: function() {
            this.$element.trigger({
                type: "clearTime.timepicker"
            })
        },
        blurElement: function() {
            this.highlightedUnit = undefined;
            this.updateFromElementVal()
        },
        updateElement: function() {
            var c = this.getTime();
            this.$element.val(c).change();
            switch (this.highlightedUnit) {
                case "hour":
                    this.highlightHour();
                    break;
                case "minute":
                    this.highlightMinute();
                    break;
                case "second":
                    this.highlightSecond();
                    break;
                case "meridian":
                    this.highlightMeridian();
                    break
            }
        },
        updateWidget: function() {
            if (this.showInputs) {
                this.$widget.find("input.bootstrap-timepicker-hour").val(this.hour < 10 ? "0" + this.hour : this.hour);
                this.$widget.find("input.bootstrap-timepicker-minute").val(this.minute < 10 ? "0" + this.minute : this.minute);
                if (this.showSeconds) {
                    this.$widget.find("input.bootstrap-timepicker-second").val(this.second < 10 ? "0" + this.second : this.second)
                }
                if (this.showMeridian) {
                    this.$widget.find("input.bootstrap-timepicker-meridian").val(this.meridian)
                }
            } else {
                this.$widget.find("span.bootstrap-timepicker-hour").text(this.hour);
                this.$widget.find("span.bootstrap-timepicker-minute").text(this.minute < 10 ? "0" + this.minute : this.minute);
                if (this.showSeconds) {
                    this.$widget.find("span.bootstrap-timepicker-second").text(this.second < 10 ? "0" + this.second : this.second)
                }
                if (this.showMeridian) {
                    this.$widget.find("span.bootstrap-timepicker-meridian").text(this.meridian)
                }
            }
        },
        updateFromElementVal: function(d) {
            var c = this.$element.val();
            if (c) {
                this.setValues(c);
                if (!d) {
                    this.update()
                }
            } else {
                this.clear()
            }
        },
        updateFromWidgetInputs: function() {
            var c = b("input.bootstrap-timepicker-hour", this.$widget).val() + ":" + b("input.bootstrap-timepicker-minute", this.$widget).val() + (this.showSeconds ? ":" + b("input.bootstrap-timepicker-second", this.$widget).val() : "") + (this.showMeridian ? " " + b("input.bootstrap-timepicker-meridian", this.$widget).val() : "");
            this.setValues(c);
            this.update()
        },
        getCursorPosition: function() {
            var d = this.$element.get(0);
            if ("selectionStart" in d) {
                return d.selectionStart
            } else {
                if (document.selection) {
                    d.focus();
                    var e = document.selection.createRange();
                    var c = document.selection.createRange().text.length;
                    e.moveStart("character", -d.value.length);
                    return e.text.length - c
                }
            }
        },
        highlightUnit: function() {
            var c = this.$element.get(0);
            this.position = this.getCursorPosition();
            if (this.position >= 0 && this.position <= 2) {
                this.highlightHour()
            } else {
                if (this.position >= 3 && this.position <= 5) {
                    this.highlightMinute()
                } else {
                    if (this.position >= 6 && this.position <= 8) {
                        if (this.showSeconds) {
                            this.highlightSecond()
                        } else {
                            this.highlightMeridian()
                        }
                    } else {
                        if (this.position >= 9 && this.position <= 11) {
                            this.highlightMeridian()
                        }
                    }
                }
            }
        },
        highlightNextUnit: function() {
            switch (this.highlightedUnit) {
                case "hour":
                    this.highlightMinute();
                    break;
                case "minute":
                    if (this.showSeconds) {
                        this.highlightSecond()
                    } else {
                        this.highlightMeridian()
                    }
                    break;
                case "second":
                    this.highlightMeridian();
                    break;
                case "meridian":
                    this.highlightHour();
                    break
            }
        },
        highlightPrevUnit: function() {
            switch (this.highlightedUnit) {
                case "hour":
                    this.highlightMeridian();
                    break;
                case "minute":
                    this.highlightHour();
                    break;
                case "second":
                    this.highlightMinute();
                    break;
                case "meridian":
                    if (this.showSeconds) {
                        this.highlightSecond()
                    } else {
                        this.highlightMinute()
                    }
                    break
            }
        },
        highlightHour: function() {
            this.highlightedUnit = "hour";
            this.$element.get(0).setSelectionRange(0, 2)
        },
        highlightMinute: function() {
            this.highlightedUnit = "minute";
            this.$element.get(0).setSelectionRange(3, 5)
        },
        highlightSecond: function() {
            this.highlightedUnit = "second";
            this.$element.get(0).setSelectionRange(6, 8)
        },
        highlightMeridian: function() {
            this.highlightedUnit = "meridian";
            if (this.showSeconds) {
                this.$element.get(0).setSelectionRange(9, 11)
            } else {
                this.$element.get(0).setSelectionRange(6, 8)
            }
        },
        incrementHour: function() {
            if (this.showMeridian) {
                if (this.hour === 11) {
                    this.toggleMeridian()
                } else {
                    if (this.hour === 12) {
                        return this.hour = 1
                    }
                }
            }
            if (this.hour === 23) {
                return this.hour = 0
            }
            this.hour = this.hour + 1
        },
        decrementHour: function() {
            if (this.showMeridian) {
                if (this.hour === 1) {
                    return this.hour = 12
                } else {
                    if (this.hour === 12) {
                        this.toggleMeridian()
                    }
                }
            }
            if (this.hour === 0) {
                return this.hour = 23
            }
            this.hour = this.hour - 1
        },
        incrementMinute: function() {
            var c = this.minute + this.minuteStep - (this.minute % this.minuteStep);
            if (c > 59) {
                this.incrementHour();
                this.minute = c - 60
            } else {
                this.minute = c
            }
        },
        decrementMinute: function() {
            var c = this.minute - this.minuteStep;
            if (c < 0) {
                this.decrementHour();
                this.minute = c + 60
            } else {
                this.minute = c
            }
        },
        incrementSecond: function() {
            var c = this.second + this.secondStep - (this.second % this.secondStep);
            if (c > 59) {
                this.incrementMinute();
                this.second = c - 60
            } else {
                this.second = c
            }
        },
        decrementSecond: function() {
            var c = this.second - this.secondStep;
            if (c < 0) {
                this.decrementMinute();
                this.second = c + 60
            } else {
                this.second = c
            }
        },
        toggleMeridian: function() {
            this.meridian = this.meridian === "AM" ? "PM" : "AM";
            this.update()
        },
        getTemplate: function() {
            if (this.options.templates[this.options.template]) {
                return this.options.templates[this.options.template]
            }
            if (this.showInputs) {
                var g = '<input type="text" name="hour" class="bootstrap-timepicker-hour" maxlength="2"/>';
                var d = '<input type="text" name="minute" class="bootstrap-timepicker-minute" maxlength="2"/>';
                var c = '<input type="text" name="second" class="bootstrap-timepicker-second" maxlength="2"/>';
                var f = '<input type="text" name="meridian" class="bootstrap-timepicker-meridian" maxlength="2"/>'
            } else {
                var g = '<span class="bootstrap-timepicker-hour"></span>';
                var d = '<span class="bootstrap-timepicker-minute"></span>';
                var c = '<span class="bootstrap-timepicker-second"></span>';
                var f = '<span class="bootstrap-timepicker-meridian"></span>'
            }
            var h = '<table class="' + (this.showSeconds ? "show-seconds" : "") + " " + (this.showMeridian ? "show-meridian" : "") + '"><tr><td><a href="#" data-action="incrementHour"><i class="icon-chevron-up"></i></a></td><td class="separator">&nbsp;</td><td><a href="#" data-action="incrementMinute"><i class="icon-chevron-up"></i></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="incrementSecond"><i class="icon-chevron-up"></i></a></td>' : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td class="meridian-column"><a href="#" data-action="toggleMeridian"><i class="icon-chevron-up"></i></a></td>' : "") + "</tr><tr><td>" + g + '</td> <td class="separator">:</td><td>' + d + "</td> " + (this.showSeconds ? '<td class="separator">:</td><td>' + c + "</td>" : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td>' + f + "</td>" : "") + '</tr><tr><td><a href="#" data-action="decrementHour"><i class="icon-chevron-down"></i></a></td><td class="separator"></td><td><a href="#" data-action="decrementMinute"><i class="icon-chevron-down"></i></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="decrementSecond"><i class="icon-chevron-down"></i></a></td>' : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="toggleMeridian"><i class="icon-chevron-down"></i></a></td>' : "") + "</tr></table>";
            var e;
            switch (this.options.template) {
                case "modal":
                    e = '<div class="bootstrap-timepicker modal hide fade in" style="top: 30%; margin-top: 0; width: 200px; margin-left: -100px;" data-backdrop="' + (this.modalBackdrop ? "true" : "false") + '"><div class="modal-header"><a href="#" class="close" data-dismiss="modal">??</a><h3>Pick a Time</h3></div><div class="modal-content">' + h + '</div><div class="modal-footer"><a href="#" class="btn btn-primary" data-dismiss="modal">Ok</a></div></div>';
                    break;
                case "dropdown":
                    e = '<div class="bootstrap-timepicker dropdown-menu">' + h + "</div>";
                    break
            }
            return e
        }
    };
    b.fn.timepicker = function(c) {
        return this.each(function() {
            var f = b(this),
                e = f.data("timepicker"),
                d = typeof c == "object" && c;
            if (!e) {
                f.data("timepicker", (e = new a(this, d)))
            }
            if (typeof c == "string") {
                e[c]()
            }
        })
    };
    b.fn.timepicker.defaults = {
        minuteStep: 15,
        secondStep: 15,
        disableFocus: false,
        defaultTime: "current",
        showSeconds: false,
        showInputs: true,
        showMeridian: true,
        template: "dropdown",
        modalBackdrop: false,
        templates: {}
    };
    b.fn.timepicker.Constructor = a
}(window.jQuery);;
! function(b) {
    var a = {
        lookup: function(d) {
            var c;
            this.query = this.$element.val() || "";
            if (this.query.length < this.options.minLength) {
                return this.shown ? this.hide() : this
            }
            c = b.isFunction(this.source) ? this.source(this.query, b.proxy(this.process, this)) : this.source;
            return c ? this.process(c) : this
        },
        process: function(c) {
            var d = this;
            c = b.grep(c, function(e) {
                return d.matcher(e)
            });
            c = this.sorter(c);
            if (!c.length) {
                return this.shown ? this.hide() : this
            }
            c = c.slice(0, this.options.items);
            return this.render(c).show()
        },
        render: function(c) {
            var d = this;
            c = b(c).map(function(e, f) {
                e = b(d.options.item).attr("data-value", f);
                e.find("a").html(d.highlighter(f));
                return e[0]
            });
            if (this.query.length > 0) {
                c.first().addClass("active")
            }
            this.$menu.html(c);
            return this
        },
        keydown: function(c) {
            this.suppressKeyPressRepeat = ~b.inArray(c.keyCode, [40, 38, 9, 13, 27]);
            if (c.keyCode === 9) {
                if (!this.shown) {
                    return
                }
                this.select()
            } else {
                this.move(c)
            }
        },
        keyup: function(c) {
            switch (c.keyCode) {
                case 39:
                case 37:
                case 40:
                case 38:
                case 16:
                case 17:
                case 18:
                    break;
                case 13:
                    if (!this.shown) {
                        return
                    }
                    this.select();
                    break;
                case 27:
                    if (!this.shown) {
                        return
                    }
                    this.hide();
                    break;
                default:
                    this.lookup()
            }
            c.stopPropagation();
            c.preventDefault()
        },
        focus: function(c) {
            this.focused = true;
            if (!this.mousedover) {
                this.lookup(c)
            }
        },
        show: function() {
            var c = b.extend({}, this.$element.offset(), {
                height: this.$element[0].offsetHeight
            });
            this.$menu.appendTo(b("body")).css({
                top: c.top + c.height,
                left: c.left
            }).show();
            this.shown = true;
            return this
        }
    };
    b.extend(b.fn.typeahead.Constructor.prototype, a)
}(window.jQuery);;
/*
 * Bootstrap Context Menu
 * Version: 2.1
 * A small variation of the dropdown plugin by @sydcanem
 * https://github.com/sydcanem/bootstrap-contextmenu
 *
 * New options added by @jeremyhubble for javascript launching
 *  $('#elem').contextmenu({target:'#menu',before:function(e) { return true; } });
 *   
 *
 * Twitter Bootstrap (http://twitter.github.com/bootstrap).
 */
!(function(a) {
    var b = function(d, c) {
        this.$elements = a(d);
        this.options = c;
        this.before = this.options.before || this.before;
        this.onItem = this.options.onItem || this.onItem;
        if (this.options.target) {
            this.$elements.attr("data-target", this.options.target)
        }
        this.listen()
    };
    b.prototype = {
        constructor: b,
        show: function(h) {
            var g = a(this),
                f, d, c;
            if (g.is(".disabled, :disabled")) {
                return
            }
            c = a.Event("context");
            if (!this.before.call(this, h, a(h.currentTarget))) {
                return
            }
            this.$elements.trigger(c);
            f = this.getMenu();
            var i = this.getPosition(h, f);
            f.attr("style", "").css(i).addClass("open");
            return false
        },
        closemenu: function(c) {
            this.getMenu().removeClass("open")
        },
        before: function(c) {
            return true
        },
        onItem: function(d, c) {
            return true
        },
        listen: function() {
            var d = this;
            this.$elements.on("contextmenu.context.data-api", a.proxy(this.show, this));
            a("html").on("click.context.data-api", a.proxy(this.closemenu, this));
            var c = a(this.$elements.attr("data-target"));
            c.on("click.context.data-api", function(f) {
                d.onItem.call(this, f, a(f.target))
            });
            a("html").on("click.context.data-api", function(f) {
                if (!f.ctrlKey) {
                    c.removeClass("open")
                }
            })
        },
        getMenu: function() {
            var c = this.$elements.attr("data-target"),
                d;
            if (!c) {
                c = this.$elements.attr("href");
                c = c && c.replace(/.*(?=#[^\s]*$)/, "")
            }
            d = a(c);
            return d
        },
        getPosition: function(m, c) {
            var i = m.clientX,
                h = m.clientY,
                k = a(window).width(),
                j = a(window).height(),
                l = c.find(".dropdown-menu").outerWidth(),
                g = c.find(".dropdown-menu").outerHeight(),
                n = {
                    position: "fixed"
                },
                d, f;
            if (h + g > j) {
                d = {
                    top: h - g
                }
            } else {
                d = {
                    top: h
                }
            }
            if ((i + l > k) && ((i - l) > 0)) {
                f = {
                    left: i - l
                }
            } else {
                f = {
                    left: i
                }
            }
            return a.extend(n, d, f)
        },
        clearMenus: function(c) {
            if (!c.ctrlKey) {
                a("[data-toggle=context]").each(function() {
                    this.getMenu().removeClass("open")
                })
            }
        }
    };
    a.fn.contextmenu = function(c, f) {
        var d = this;
        return (function() {
            var g = d.data("context"),
                e = typeof c == "object" && c;
            if (!g) {
                d.data("context", (g = new b(d, e)))
            }
            if (typeof c == "string") {
                g[c].call(g, f)
            }
        })()
    };
    a.fn.contextmenu.Constructor = b;
    a(document).on("contextmenu.context.data-api", "[data-toggle=context]", function(c) {
        a(this).contextmenu("show", c);
        c.preventDefault()
    })
}(window.jQuery));;
! function(t, s) {
    "function" == typeof define && define.amd ? define(s) : "undefined" != typeof module ? module.exports = s() : t.proj4 = s()
}(this, function() {
    var t, s, i;
    return function(a) {
        function h(t, s) {
            return x.call(t, s)
        }

        function e(t, s) {
            var i, a, h, e, n, r, o, l, u, c, M = s && s.split("/"),
                f = y.map,
                m = f && f["*"] || {};
            if (t && "." === t.charAt(0))
                if (s) {
                    for (M = M.slice(0, M.length - 1), t = M.concat(t.split("/")), l = 0; l < t.length; l += 1)
                        if (c = t[l], "." === c) t.splice(l, 1), l -= 1;
                        else if (".." === c) {
                        if (1 === l && (".." === t[2] || ".." === t[0])) break;
                        l > 0 && (t.splice(l - 1, 2), l -= 2)
                    }
                    t = t.join("/")
                } else 0 === t.indexOf("./") && (t = t.substring(2));
            if ((M || m) && f) {
                for (i = t.split("/"), l = i.length; l > 0; l -= 1) {
                    if (a = i.slice(0, l).join("/"), M)
                        for (u = M.length; u > 0; u -= 1)
                            if (h = f[M.slice(0, u).join("/")], h && (h = h[a])) {
                                e = h, n = l;
                                break
                            }
                    if (e) break;
                    !r && m && m[a] && (r = m[a], o = l)
                }!e && r && (e = r, n = o), e && (i.splice(0, n, e), t = i.join("/"))
            }
            return t
        }

        function n(t, s) {
            return function() {
                return f.apply(a, v.call(arguments, 0).concat([t, s]))
            }
        }

        function r(t) {
            return function(s) {
                return e(s, t)
            }
        }

        function o(t) {
            return function(s) {
                _[t] = s
            }
        }

        function l(t) {
            if (h(d, t)) {
                var s = d[t];
                delete d[t], g[t] = !0, M.apply(a, s)
            }
            if (!h(_, t) && !h(g, t)) throw new Error("No " + t);
            return _[t]
        }

        function u(t) {
            var s, i = t ? t.indexOf("!") : -1;
            return i > -1 && (s = t.substring(0, i), t = t.substring(i + 1, t.length)), [s, t]
        }

        function c(t) {
            return function() {
                return y && y.config && y.config[t] || {}
            }
        }
        var M, f, m, p, _ = {},
            d = {},
            y = {},
            g = {},
            x = Object.prototype.hasOwnProperty,
            v = [].slice;
        m = function(t, s) {
            var i, a = u(t),
                h = a[0];
            return t = a[1], h && (h = e(h, s), i = l(h)), h ? t = i && i.normalize ? i.normalize(t, r(s)) : e(t, s) : (t = e(t, s), a = u(t), h = a[0], t = a[1], h && (i = l(h))), {
                f: h ? h + "!" + t : t,
                n: t,
                pr: h,
                p: i
            }
        }, p = {
            require: function(t) {
                return n(t)
            },
            exports: function(t) {
                var s = _[t];
                return "undefined" != typeof s ? s : _[t] = {}
            },
            module: function(t) {
                return {
                    id: t,
                    uri: "",
                    exports: _[t],
                    config: c(t)
                }
            }
        }, M = function(t, s, i, e) {
            var r, u, c, M, f, y, x = [];
            if (e = e || t, "function" == typeof i) {
                for (s = !s.length && i.length ? ["require", "exports", "module"] : s, f = 0; f < s.length; f += 1)
                    if (M = m(s[f], e), u = M.f, "require" === u) x[f] = p.require(t);
                    else if ("exports" === u) x[f] = p.exports(t), y = !0;
                else if ("module" === u) r = x[f] = p.module(t);
                else if (h(_, u) || h(d, u) || h(g, u)) x[f] = l(u);
                else {
                    if (!M.p) throw new Error(t + " missing " + u);
                    M.p.load(M.n, n(e, !0), o(u), {}), x[f] = _[u]
                }
                c = i.apply(_[t], x), t && (r && r.exports !== a && r.exports !== _[t] ? _[t] = r.exports : c === a && y || (_[t] = c))
            } else t && (_[t] = i)
        }, t = s = f = function(t, s, i, h, e) {
            return "string" == typeof t ? p[t] ? p[t](s) : l(m(t, s).f) : (t.splice || (y = t, s.splice ? (t = s, s = i, i = null) : t = a), s = s || function() {}, "function" == typeof i && (i = h, h = e), h ? M(a, t, s, i) : setTimeout(function() {
                M(a, t, s, i)
            }, 4), f)
        }, f.config = function(t) {
            return y = t, y.deps && f(y.deps, y.callback), f
        }, t._defined = _, i = function(t, s, i) {
            s.splice || (i = s, s = []), h(_, t) || h(d, t) || (d[t] = [t, s, i])
        }, i.amd = {
            jQuery: !0
        }
    }(), i("node_modules/almond/almond", function() {}), i("proj4/mgrs", ["require", "exports", "module"], function(t, s) {
        function i(t) {
            return t * (Math.PI / 180)
        }

        function a(t) {
            return 180 * (t / Math.PI)
        }

        function h(t) {
            var s, a, h, e, r, o, l, u, c, M = t.lat,
                f = t.lon,
                m = 6378137,
                p = .00669438,
                _ = .9996,
                d = i(M),
                y = i(f);
            c = Math.floor((f + 180) / 6) + 1, 180 === f && (c = 60), M >= 56 && 64 > M && f >= 3 && 12 > f && (c = 32), M >= 72 && 84 > M && (f >= 0 && 9 > f ? c = 31 : f >= 9 && 21 > f ? c = 33 : f >= 21 && 33 > f ? c = 35 : f >= 33 && 42 > f && (c = 37)), s = 6 * (c - 1) - 180 + 3, u = i(s), a = p / (1 - p), h = m / Math.sqrt(1 - p * Math.sin(d) * Math.sin(d)), e = Math.tan(d) * Math.tan(d), r = a * Math.cos(d) * Math.cos(d), o = Math.cos(d) * (y - u), l = m * ((1 - p / 4 - 3 * p * p / 64 - 5 * p * p * p / 256) * d - (3 * p / 8 + 3 * p * p / 32 + 45 * p * p * p / 1024) * Math.sin(2 * d) + (15 * p * p / 256 + 45 * p * p * p / 1024) * Math.sin(4 * d) - 35 * p * p * p / 3072 * Math.sin(6 * d));
            var g = _ * h * (o + (1 - e + r) * o * o * o / 6 + (5 - 18 * e + e * e + 72 * r - 58 * a) * o * o * o * o * o / 120) + 5e5,
                x = _ * (l + h * Math.tan(d) * (o * o / 2 + (5 - e + 9 * r + 4 * r * r) * o * o * o * o / 24 + (61 - 58 * e + e * e + 600 * r - 330 * a) * o * o * o * o * o * o / 720));
            return 0 > M && (x += 1e7), {
                northing: Math.round(x),
                easting: Math.round(g),
                zoneNumber: c,
                zoneLetter: n(M)
            }
        }

        function e(t) {
            var s = t.northing,
                i = t.easting,
                h = t.zoneLetter,
                n = t.zoneNumber;
            if (0 > n || n > 60) return null;
            var r, o, l, u, c, M, f, m, p, _, d = .9996,
                y = 6378137,
                g = .00669438,
                x = (1 - Math.sqrt(1 - g)) / (1 + Math.sqrt(1 - g)),
                v = i - 5e5,
                P = s;
            "N" > h && (P -= 1e7), m = 6 * (n - 1) - 180 + 3, r = g / (1 - g), f = P / d, p = f / (y * (1 - g / 4 - 3 * g * g / 64 - 5 * g * g * g / 256)), _ = p + (3 * x / 2 - 27 * x * x * x / 32) * Math.sin(2 * p) + (21 * x * x / 16 - 55 * x * x * x * x / 32) * Math.sin(4 * p) + 151 * x * x * x / 96 * Math.sin(6 * p), o = y / Math.sqrt(1 - g * Math.sin(_) * Math.sin(_)), l = Math.tan(_) * Math.tan(_), u = r * Math.cos(_) * Math.cos(_), c = y * (1 - g) / Math.pow(1 - g * Math.sin(_) * Math.sin(_), 1.5), M = v / (o * d);
            var b = _ - o * Math.tan(_) / c * (M * M / 2 - (5 + 3 * l + 10 * u - 4 * u * u - 9 * r) * M * M * M * M / 24 + (61 + 90 * l + 298 * u + 45 * l * l - 252 * r - 3 * u * u) * M * M * M * M * M * M / 720);
            b = a(b);
            var C = (M - (1 + 2 * l + u) * M * M * M / 6 + (5 - 2 * u + 28 * l - 3 * u * u + 8 * r + 24 * l * l) * M * M * M * M * M / 120) / Math.cos(_);
            C = m + a(C);
            var S;
            if (t.accuracy) {
                var j = e({
                    northing: t.northing + t.accuracy,
                    easting: t.easting + t.accuracy,
                    zoneLetter: t.zoneLetter,
                    zoneNumber: t.zoneNumber
                });
                S = {
                    top: j.lat,
                    right: j.lon,
                    bottom: b,
                    left: C
                }
            } else S = {
                lat: b,
                lon: C
            };
            return S
        }

        function n(t) {
            var s = "Z";
            return 84 >= t && t >= 72 ? s = "X" : 72 > t && t >= 64 ? s = "W" : 64 > t && t >= 56 ? s = "V" : 56 > t && t >= 48 ? s = "U" : 48 > t && t >= 40 ? s = "T" : 40 > t && t >= 32 ? s = "S" : 32 > t && t >= 24 ? s = "R" : 24 > t && t >= 16 ? s = "Q" : 16 > t && t >= 8 ? s = "P" : 8 > t && t >= 0 ? s = "N" : 0 > t && t >= -8 ? s = "M" : -8 > t && t >= -16 ? s = "L" : -16 > t && t >= -24 ? s = "K" : -24 > t && t >= -32 ? s = "J" : -32 > t && t >= -40 ? s = "H" : -40 > t && t >= -48 ? s = "G" : -48 > t && t >= -56 ? s = "F" : -56 > t && t >= -64 ? s = "E" : -64 > t && t >= -72 ? s = "D" : -72 > t && t >= -80 && (s = "C"), s
        }

        function r(t, s) {
            var i = "" + t.easting,
                a = "" + t.northing;
            return t.zoneNumber + t.zoneLetter + o(t.easting, t.northing, t.zoneNumber) + i.substr(i.length - 5, s) + a.substr(a.length - 5, s)
        }

        function o(t, s, i) {
            var a = l(i),
                h = Math.floor(t / 1e5),
                e = Math.floor(s / 1e5) % 20;
            return u(h, e, a)
        }

        function l(t) {
            var s = t % p;
            return 0 === s && (s = p), s
        }

        function u(t, s, i) {
            var a = i - 1,
                h = _.charCodeAt(a),
                e = d.charCodeAt(a),
                n = h + t - 1,
                r = e + s,
                o = !1;
            n > P && (n = n - P + y - 1, o = !0), (n === g || g > h && n > g || (n > g || g > h) && o) && n++, (n === x || x > h && n > x || (n > x || x > h) && o) && (n++, n === g && n++), n > P && (n = n - P + y - 1), r > v ? (r = r - v + y - 1, o = !0) : o = !1, (r === g || g > e && r > g || (r > g || g > e) && o) && r++, (r === x || x > e && r > x || (r > x || x > e) && o) && (r++, r === g && r++), r > v && (r = r - v + y - 1);
            var l = String.fromCharCode(n) + String.fromCharCode(r);
            return l
        }

        function c(t) {
            if (t && 0 === t.length) throw "MGRSPoint coverting from nothing";
            for (var s, i = t.length, a = null, h = "", e = 0; !/[A-Z]/.test(s = t.charAt(e));) {
                if (e >= 2) throw "MGRSPoint bad conversion from: " + t;
                h += s, e++
            }
            var n = parseInt(h, 10);
            if (0 === e || e + 3 > i) throw "MGRSPoint bad conversion from: " + t;
            var r = t.charAt(e++);
            if ("A" >= r || "B" === r || "Y" === r || r >= "Z" || "I" === r || "O" === r) throw "MGRSPoint zone letter " + r + " not handled: " + t;
            a = t.substring(e, e += 2);
            for (var o = l(n), u = M(a.charAt(0), o), c = f(a.charAt(1), o); c < m(r);) c += 2e6;
            var p = i - e;
            if (0 !== p % 2) throw "MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters" + t;
            var _, d, y, g, x, v = p / 2,
                P = 0,
                b = 0;
            return v > 0 && (_ = 1e5 / Math.pow(10, v), d = t.substring(e, e + v), P = parseFloat(d) * _, y = t.substring(e + v), b = parseFloat(y) * _), g = P + u, x = b + c, {
                easting: g,
                northing: x,
                zoneLetter: r,
                zoneNumber: n,
                accuracy: _
            }
        }

        function M(t, s) {
            for (var i = _.charCodeAt(s - 1), a = 1e5, h = !1; i !== t.charCodeAt(0);) {
                if (i++, i === g && i++, i === x && i++, i > P) {
                    if (h) throw "Bad character: " + t;
                    i = y, h = !0
                }
                a += 1e5
            }
            return a
        }

        function f(t, s) {
            if (t > "V") throw "MGRSPoint given invalid Northing " + t;
            for (var i = d.charCodeAt(s - 1), a = 0, h = !1; i !== t.charCodeAt(0);) {
                if (i++, i === g && i++, i === x && i++, i > v) {
                    if (h) throw "Bad character: " + t;
                    i = y, h = !0
                }
                a += 1e5
            }
            return a
        }

        function m(t) {
            var s;
            switch (t) {
                case "C":
                    s = 11e5;
                    break;
                case "D":
                    s = 2e6;
                    break;
                case "E":
                    s = 28e5;
                    break;
                case "F":
                    s = 37e5;
                    break;
                case "G":
                    s = 46e5;
                    break;
                case "H":
                    s = 55e5;
                    break;
                case "J":
                    s = 64e5;
                    break;
                case "K":
                    s = 73e5;
                    break;
                case "L":
                    s = 82e5;
                    break;
                case "M":
                    s = 91e5;
                    break;
                case "N":
                    s = 0;
                    break;
                case "P":
                    s = 8e5;
                    break;
                case "Q":
                    s = 17e5;
                    break;
                case "R":
                    s = 26e5;
                    break;
                case "S":
                    s = 35e5;
                    break;
                case "T":
                    s = 44e5;
                    break;
                case "U":
                    s = 53e5;
                    break;
                case "V":
                    s = 62e5;
                    break;
                case "W":
                    s = 7e6;
                    break;
                case "X":
                    s = 79e5;
                    break;
                default:
                    s = -1
            }
            if (s >= 0) return s;
            throw "Invalid zone letter: " + t
        }
        var p = 6,
            _ = "AJSAJS",
            d = "AFAFAF",
            y = 65,
            g = 73,
            x = 79,
            v = 86,
            P = 90;
        s.forward = function(t, s) {
            return s = s || 5, r(h({
                lat: t.lat,
                lon: t.lon
            }), s)
        }, s.inverse = function(t) {
            var s = e(c(t.toUpperCase()));
            return [s.left, s.bottom, s.right, s.top]
        }
    }), i("proj4/Point", ["./mgrs"], function(t) {
        function s(t, i, a) {
            if (!(this instanceof s)) return new s(t, i, a);
            if ("object" == typeof t) this.x = t[0], this.y = t[1], this.z = t[2] || 0;
            else if ("string" == typeof t && "undefined" == typeof i) {
                var h = t.split(",");
                this.x = parseFloat(h[0]), this.y = parseFloat(h[1]), this.z = parseFloat(h[2]) || 0
            } else this.x = t, this.y = i, this.z = a || 0;
            this.clone = function() {
                return new s(this.x, this.y, this.z)
            }, this.toString = function() {
                return "x=" + this.x + ",y=" + this.y
            }, this.toShortString = function() {
                return this.x + ", " + this.y
            }
        }
        return s.fromMGRS = function(i) {
            var a = t.inverse(i);
            return new s((a[2] + a[0]) / 2, (a[3] + a[1]) / 2)
        }, s.prototype.toMGRS = function(s) {
            return t.forward({
                lon: this.x,
                lat: this.y
            }, s)
        }, s
    }), i("proj4/extend", [], function() {
        return function(t, s) {
            t = t || {};
            var i, a;
            if (!s) return t;
            for (a in s) i = s[a], void 0 !== i && (t[a] = i);
            return t
        }
    }), i("proj4/common", [], function() {
        var t = {
            PI: 3.141592653589793,
            HALF_PI: 1.5707963267948966,
            TWO_PI: 6.283185307179586,
            FORTPI: .7853981633974483,
            R2D: 57.29577951308232,
            D2R: .017453292519943295,
            SEC_TO_RAD: 484813681109536e-20,
            EPSLN: 1e-10,
            MAX_ITER: 20,
            COS_67P5: .3826834323650898,
            AD_C: 1.0026,
            PJD_UNKNOWN: 0,
            PJD_3PARAM: 1,
            PJD_7PARAM: 2,
            PJD_GRIDSHIFT: 3,
            PJD_WGS84: 4,
            PJD_NODATUM: 5,
            SRS_WGS84_SEMIMAJOR: 6378137,
            SRS_WGS84_ESQUARED: .006694379990141316,
            SIXTH: .16666666666666666,
            RA4: .04722222222222222,
            RA6: .022156084656084655,
            RV4: .06944444444444445,
            RV6: .04243827160493827,
            msfnz: function(t, s, i) {
                var a = t * s;
                return i / Math.sqrt(1 - a * a)
            },
            tsfnz: function(t, s, i) {
                var a = t * i,
                    h = .5 * t;
                return a = Math.pow((1 - a) / (1 + a), h), Math.tan(.5 * (this.HALF_PI - s)) / a
            },
            phi2z: function(t, s) {
                for (var i, a, h = .5 * t, e = this.HALF_PI - 2 * Math.atan(s), n = 0; 15 >= n; n++)
                    if (i = t * Math.sin(e), a = this.HALF_PI - 2 * Math.atan(s * Math.pow((1 - i) / (1 + i), h)) - e, e += a, Math.abs(a) <= 1e-10) return e;
                return -9999
            },
            qsfnz: function(t, s) {
                var i;
                return t > 1e-7 ? (i = t * s, (1 - t * t) * (s / (1 - i * i) - .5 / t * Math.log((1 - i) / (1 + i)))) : 2 * s
            },
            iqsfnz: function(s, i) {
                var a = 1 - (1 - s * s) / (2 * s) * Math.log((1 - s) / (1 + s));
                if (Math.abs(Math.abs(i) - a) < 1e-6) return 0 > i ? -1 * t.HALF_PI : t.HALF_PI;
                for (var h, e, n, r, o = Math.asin(.5 * i), l = 0; 30 > l; l++)
                    if (e = Math.sin(o), n = Math.cos(o), r = s * e, h = Math.pow(1 - r * r, 2) / (2 * n) * (i / (1 - s * s) - e / (1 - r * r) + .5 / s * Math.log((1 - r) / (1 + r))), o += h, Math.abs(h) <= 1e-10) return o;
                return 0 / 0
            },
            asinz: function(t) {
                return Math.abs(t) > 1 && (t = t > 1 ? 1 : -1), Math.asin(t)
            },
            e0fn: function(t) {
                return 1 - .25 * t * (1 + t / 16 * (3 + 1.25 * t))
            },
            e1fn: function(t) {
                return .375 * t * (1 + .25 * t * (1 + .46875 * t))
            },
            e2fn: function(t) {
                return .05859375 * t * t * (1 + .75 * t)
            },
            e3fn: function(t) {
                return t * t * t * (35 / 3072)
            },
            mlfn: function(t, s, i, a, h) {
                return t * h - s * Math.sin(2 * h) + i * Math.sin(4 * h) - a * Math.sin(6 * h)
            },
            imlfn: function(t, s, i, a, h) {
                var e, n;
                e = t / s;
                for (var r = 0; 15 > r; r++)
                    if (n = (t - (s * e - i * Math.sin(2 * e) + a * Math.sin(4 * e) - h * Math.sin(6 * e))) / (s - 2 * i * Math.cos(2 * e) + 4 * a * Math.cos(4 * e) - 6 * h * Math.cos(6 * e)), e += n, Math.abs(n) <= 1e-10) return e;
                return 0 / 0
            },
            srat: function(t, s) {
                return Math.pow((1 - t) / (1 + t), s)
            },
            sign: function(t) {
                return 0 > t ? -1 : 1
            },
            adjust_lon: function(t) {
                return t = Math.abs(t) < this.PI ? t : t - this.sign(t) * this.TWO_PI
            },
            adjust_lat: function(t) {
                return t = Math.abs(t) < this.HALF_PI ? t : t - this.sign(t) * this.PI
            },
            latiso: function(t, s, i) {
                if (Math.abs(s) > this.HALF_PI) return Number.NaN;
                if (s === this.HALF_PI) return Number.POSITIVE_INFINITY;
                if (s === -1 * this.HALF_PI) return Number.NEGATIVE_INFINITY;
                var a = t * i;
                return Math.log(Math.tan((this.HALF_PI + s) / 2)) + t * Math.log((1 - a) / (1 + a)) / 2
            },
            fL: function(t, s) {
                return 2 * Math.atan(t * Math.exp(s)) - this.HALF_PI
            },
            invlatiso: function(t, s) {
                var i = this.fL(1, s),
                    a = 0,
                    h = 0;
                do a = i, h = t * Math.sin(a), i = this.fL(Math.exp(t * Math.log((1 + h) / (1 - h)) / 2), s); while (Math.abs(i - a) > 1e-12);
                return i
            },
            sinh: function(t) {
                var s = Math.exp(t);
                return s = (s - 1 / s) / 2
            },
            cosh: function(t) {
                var s = Math.exp(t);
                return s = (s + 1 / s) / 2
            },
            tanh: function(t) {
                var s = Math.exp(t);
                return s = (s - 1 / s) / (s + 1 / s)
            },
            asinh: function(t) {
                var s = t >= 0 ? 1 : -1;
                return s * Math.log(Math.abs(t) + Math.sqrt(t * t + 1))
            },
            acosh: function(t) {
                return 2 * Math.log(Math.sqrt((t + 1) / 2) + Math.sqrt((t - 1) / 2))
            },
            atanh: function(t) {
                return Math.log((t - 1) / (t + 1)) / 2
            },
            gN: function(t, s, i) {
                var a = s * i;
                return t / Math.sqrt(1 - a * a)
            },
            pj_enfn: function(t) {
                var s = [];
                s[0] = this.C00 - t * (this.C02 + t * (this.C04 + t * (this.C06 + t * this.C08))), s[1] = t * (this.C22 - t * (this.C04 + t * (this.C06 + t * this.C08)));
                var i = t * t;
                return s[2] = i * (this.C44 - t * (this.C46 + t * this.C48)), i *= t, s[3] = i * (this.C66 - t * this.C68), s[4] = i * t * this.C88, s
            },
            pj_mlfn: function(t, s, i, a) {
                return i *= s, s *= s, a[0] * t - i * (a[1] + s * (a[2] + s * (a[3] + s * a[4])))
            },
            pj_inv_mlfn: function(s, i, a) {
                for (var h = 1 / (1 - i), e = s, n = t.MAX_ITER; n; --n) {
                    var r = Math.sin(e),
                        o = 1 - i * r * r;
                    if (o = (this.pj_mlfn(e, r, Math.cos(e), a) - s) * o * Math.sqrt(o) * h, e -= o, Math.abs(o) < t.EPSLN) return e
                }
                return e
            },
            nad_intr: function(t, s) {
                var i, a = {
                        x: (t.x - 1e-7) / s.del[0],
                        y: (t.y - 1e-7) / s.del[1]
                    },
                    h = {
                        x: Math.floor(a.x),
                        y: Math.floor(a.y)
                    },
                    e = {
                        x: a.x - 1 * h.x,
                        y: a.y - 1 * h.y
                    },
                    n = {
                        x: Number.NaN,
                        y: Number.NaN
                    };
                if (h.x < 0) {
                    if (!(-1 === h.x && e.x > .99999999999)) return n;
                    h.x++, e.x = 0
                } else if (i = h.x + 1, i >= s.lim[0]) {
                    if (!(i === s.lim[0] && e.x < 1e-11)) return n;
                    h.x--, e.x = 1
                }
                if (h.y < 0) {
                    if (!(-1 === h.y && e.y > .99999999999)) return n;
                    h.y++, e.y = 0
                } else if (i = h.y + 1, i >= s.lim[1]) {
                    if (!(i === s.lim[1] && e.y < 1e-11)) return n;
                    h.y++, e.y = 1
                }
                i = h.y * s.lim[0] + h.x;
                var r = {
                    x: s.cvs[i][0],
                    y: s.cvs[i][1]
                };
                i++;
                var o = {
                    x: s.cvs[i][0],
                    y: s.cvs[i][1]
                };
                i += s.lim[0];
                var l = {
                    x: s.cvs[i][0],
                    y: s.cvs[i][1]
                };
                i--;
                var u = {
                        x: s.cvs[i][0],
                        y: s.cvs[i][1]
                    },
                    c = e.x * e.y,
                    M = e.x * (1 - e.y),
                    f = (1 - e.x) * (1 - e.y),
                    m = (1 - e.x) * e.y;
                return n.x = f * r.x + M * o.x + m * u.x + c * l.x, n.y = f * r.y + M * o.y + m * u.y + c * l.y, n
            },
            nad_cvt: function(s, i, a) {
                var h = {
                    x: Number.NaN,
                    y: Number.NaN
                };
                if (isNaN(s.x)) return h;
                var e = {
                    x: s.x,
                    y: s.y
                };
                e.x -= a.ll[0], e.y -= a.ll[1], e.x = t.adjust_lon(e.x - t.PI) + t.PI;
                var n = t.nad_intr(e, a);
                if (i) {
                    if (isNaN(n.x)) return h;
                    n.x = e.x + n.x, n.y = e.y - n.y;
                    var r, o, l = 9,
                        u = 1e-12;
                    do {
                        if (o = t.nad_intr(n, a), isNaN(o.x)) {
                            this.reportError("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");
                            break
                        }
                        r = {
                            x: n.x - o.x - e.x,
                            y: n.y + o.y - e.y
                        }, n.x -= r.x, n.y -= r.y
                    } while (l-- && Math.abs(r.x) > u && Math.abs(r.y) > u);
                    if (0 > l) return this.reportError("Inverse grid shift iterator failed to converge."), h;
                    h.x = t.adjust_lon(n.x + a.ll[0]), h.y = n.y + a.ll[1]
                } else isNaN(n.x) || (h.x = s.x - n.x, h.y = s.y + n.y);
                return h
            },
            C00: 1,
            C02: .25,
            C04: .046875,
            C06: .01953125,
            C08: .01068115234375,
            C22: .75,
            C44: .46875,
            C46: .013020833333333334,
            C48: .007120768229166667,
            C66: .3645833333333333,
            C68: .005696614583333333,
            C88: .3076171875
        };
        return t
    }), i("proj4/constants", [], function() {
        var t = {};
        return t.PrimeMeridian = {
            greenwich: 0,
            lisbon: -9.131906111111,
            paris: 2.337229166667,
            bogota: -74.080916666667,
            madrid: -3.687938888889,
            rome: 12.452333333333,
            bern: 7.439583333333,
            jakarta: 106.807719444444,
            ferro: -17.666666666667,
            brussels: 4.367975,
            stockholm: 18.058277777778,
            athens: 23.7163375,
            oslo: 10.722916666667
        }, t.Ellipsoid = {
            MERIT: {
                a: 6378137,
                rf: 298.257,
                ellipseName: "MERIT 1983"
            },
            SGS85: {
                a: 6378136,
                rf: 298.257,
                ellipseName: "Soviet Geodetic System 85"
            },
            GRS80: {
                a: 6378137,
                rf: 298.257222101,
                ellipseName: "GRS 1980(IUGG, 1980)"
            },
            IAU76: {
                a: 6378140,
                rf: 298.257,
                ellipseName: "IAU 1976"
            },
            airy: {
                a: 6377563.396,
                b: 6356256.91,
                ellipseName: "Airy 1830"
            },
            "APL4.": {
                a: 6378137,
                rf: 298.25,
                ellipseName: "Appl. Physics. 1965"
            },
            NWL9D: {
                a: 6378145,
                rf: 298.25,
                ellipseName: "Naval Weapons Lab., 1965"
            },
            mod_airy: {
                a: 6377340.189,
                b: 6356034.446,
                ellipseName: "Modified Airy"
            },
            andrae: {
                a: 6377104.43,
                rf: 300,
                ellipseName: "Andrae 1876 (Den., Iclnd.)"
            },
            aust_SA: {
                a: 6378160,
                rf: 298.25,
                ellipseName: "Australian Natl & S. Amer. 1969"
            },
            GRS67: {
                a: 6378160,
                rf: 298.247167427,
                ellipseName: "GRS 67(IUGG 1967)"
            },
            bessel: {
                a: 6377397.155,
                rf: 299.1528128,
                ellipseName: "Bessel 1841"
            },
            bess_nam: {
                a: 6377483.865,
                rf: 299.1528128,
                ellipseName: "Bessel 1841 (Namibia)"
            },
            clrk66: {
                a: 6378206.4,
                b: 6356583.8,
                ellipseName: "Clarke 1866"
            },
            clrk80: {
                a: 6378249.145,
                rf: 293.4663,
                ellipseName: "Clarke 1880 mod."
            },
            clrk58: {
                a: 6378293.645208759,
                rf: 294.2606763692654,
                ellipseName: "Clarke 1858"
            },
            CPM: {
                a: 6375738.7,
                rf: 334.29,
                ellipseName: "Comm. des Poids et Mesures 1799"
            },
            delmbr: {
                a: 6376428,
                rf: 311.5,
                ellipseName: "Delambre 1810 (Belgium)"
            },
            engelis: {
                a: 6378136.05,
                rf: 298.2566,
                ellipseName: "Engelis 1985"
            },
            evrst30: {
                a: 6377276.345,
                rf: 300.8017,
                ellipseName: "Everest 1830"
            },
            evrst48: {
                a: 6377304.063,
                rf: 300.8017,
                ellipseName: "Everest 1948"
            },
            evrst56: {
                a: 6377301.243,
                rf: 300.8017,
                ellipseName: "Everest 1956"
            },
            evrst69: {
                a: 6377295.664,
                rf: 300.8017,
                ellipseName: "Everest 1969"
            },
            evrstSS: {
                a: 6377298.556,
                rf: 300.8017,
                ellipseName: "Everest (Sabah & Sarawak)"
            },
            fschr60: {
                a: 6378166,
                rf: 298.3,
                ellipseName: "Fischer (Mercury Datum) 1960"
            },
            fschr60m: {
                a: 6378155,
                rf: 298.3,
                ellipseName: "Fischer 1960"
            },
            fschr68: {
                a: 6378150,
                rf: 298.3,
                ellipseName: "Fischer 1968"
            },
            helmert: {
                a: 6378200,
                rf: 298.3,
                ellipseName: "Helmert 1906"
            },
            hough: {
                a: 6378270,
                rf: 297,
                ellipseName: "Hough"
            },
            intl: {
                a: 6378388,
                rf: 297,
                ellipseName: "International 1909 (Hayford)"
            },
            kaula: {
                a: 6378163,
                rf: 298.24,
                ellipseName: "Kaula 1961"
            },
            lerch: {
                a: 6378139,
                rf: 298.257,
                ellipseName: "Lerch 1979"
            },
            mprts: {
                a: 6397300,
                rf: 191,
                ellipseName: "Maupertius 1738"
            },
            new_intl: {
                a: 6378157.5,
                b: 6356772.2,
                ellipseName: "New International 1967"
            },
            plessis: {
                a: 6376523,
                rf: 6355863,
                ellipseName: "Plessis 1817 (France)"
            },
            krass: {
                a: 6378245,
                rf: 298.3,
                ellipseName: "Krassovsky, 1942"
            },
            SEasia: {
                a: 6378155,
                b: 6356773.3205,
                ellipseName: "Southeast Asia"
            },
            walbeck: {
                a: 6376896,
                b: 6355834.8467,
                ellipseName: "Walbeck"
            },
            WGS60: {
                a: 6378165,
                rf: 298.3,
                ellipseName: "WGS 60"
            },
            WGS66: {
                a: 6378145,
                rf: 298.25,
                ellipseName: "WGS 66"
            },
            WGS72: {
                a: 6378135,
                rf: 298.26,
                ellipseName: "WGS 72"
            },
            WGS84: {
                a: 6378137,
                rf: 298.257223563,
                ellipseName: "WGS 84"
            },
            sphere: {
                a: 6370997,
                b: 6370997,
                ellipseName: "Normal Sphere (r=6370997)"
            }
        }, t.Datum = {
            wgs84: {
                towgs84: "0,0,0",
                ellipse: "WGS84",
                datumName: "WGS84"
            },
            ch1903: {
                towgs84: "674.374,15.056,405.346",
                ellipse: "bessel",
                datumName: "swiss"
            },
            ggrs87: {
                towgs84: "-199.87,74.79,246.62",
                ellipse: "GRS80",
                datumName: "Greek_Geodetic_Reference_System_1987"
            },
            nad83: {
                towgs84: "0,0,0",
                ellipse: "GRS80",
                datumName: "North_American_Datum_1983"
            },
            nad27: {
                nadgrids: "@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",
                ellipse: "clrk66",
                datumName: "North_American_Datum_1927"
            },
            potsdam: {
                towgs84: "606.0,23.0,413.0",
                ellipse: "bessel",
                datumName: "Potsdam Rauenberg 1950 DHDN"
            },
            carthage: {
                towgs84: "-263.0,6.0,431.0",
                ellipse: "clark80",
                datumName: "Carthage 1934 Tunisia"
            },
            hermannskogel: {
                towgs84: "653.0,-212.0,449.0",
                ellipse: "bessel",
                datumName: "Hermannskogel"
            },
            ire65: {
                towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
                ellipse: "mod_airy",
                datumName: "Ireland 1965"
            },
            rassadiran: {
                towgs84: "-133.63,-157.5,-158.62",
                ellipse: "intl",
                datumName: "Rassadiran"
            },
            nzgd49: {
                towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",
                ellipse: "intl",
                datumName: "New Zealand Geodetic Datum 1949"
            },
            osgb36: {
                towgs84: "446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",
                ellipse: "airy",
                datumName: "Airy 1830"
            },
            s_jtsk: {
                towgs84: "589,76,480",
                ellipse: "bessel",
                datumName: "S-JTSK (Ferro)"
            },
            beduaram: {
                towgs84: "-106,-87,188",
                ellipse: "clrk80",
                datumName: "Beduaram"
            },
            gunung_segara: {
                towgs84: "-403,684,41",
                ellipse: "bessel",
                datumName: "Gunung Segara Jakarta"
            }
        }, t.Datum.OSB36 = t.Datum.OSGB36, t.wktProjections = {
            "Lambert Tangential Conformal Conic Projection": "lcc",
            Lambert_Conformal_Conic: "lcc",
            Lambert_Conformal_Conic_2SP: "lcc",
            Mercator: "merc",
            "Popular Visualisation Pseudo Mercator": "merc",
            Mercator_1SP: "merc",
            Transverse_Mercator: "tmerc",
            "Transverse Mercator": "tmerc",
            "Lambert Azimuthal Equal Area": "laea",
            "Universal Transverse Mercator System": "utm",
            Hotine_Oblique_Mercator: "omerc",
            "Hotine Oblique Mercator": "omerc",
            Hotine_Oblique_Mercator_Azimuth_Natural_Origin: "omerc",
            Hotine_Oblique_Mercator_Azimuth_Center: "omerc",
            Van_der_Grinten_I: "vandg",
            VanDerGrinten: "vandg",
            Stereographic_North_Pole: "sterea",
            Oblique_Stereographic: "sterea",
            Polar_Stereographic: "sterea",
            Polyconic: "poly",
            New_Zealand_Map_Grid: "nzmg",
            Miller_Cylindrical: "mill",
            Krovak: "krovak",
            Equirectangular: "eqc",
            Equidistant_Cylindrical: "eqc",
            Cassini: "cass",
            Cassini_Soldner: "cass",
            Azimuthal_Equidistant: "aeqd",
            Albers_Conic_Equal_Area: "aea",
            Albers: "aea",
            Mollweide: "moll",
            Lambert_Azimuthal_Equal_Area: "laea",
            Sinusoidal: "sinu",
            Equidistant_Conic: "eqdc",
            Mercator_Auxiliary_Sphere: "merc"
        }, t.grids = {
            "null": {
                ll: [-3.14159265, -1.57079633],
                del: [3.14159265, 1.57079633],
                lim: [3, 3],
                count: 9,
                cvs: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ]
            }
        }, t
    }), i("proj4/global", [], function() {
        return function(t) {
            t("WGS84", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"), t("EPSG:4326", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"), t("EPSG:4269", "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"), t("EPSG:3857", "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"), t["EPSG:3785"] = t["EPSG:3857"], t.GOOGLE = t["EPSG:3857"], t["EPSG:900913"] = t["EPSG:3857"], t["EPSG:102113"] = t["EPSG:3857"]
        }
    }), i("proj4/projString", ["./common", "./constants"], function(t, s) {
        return function(i) {
            var a = {},
                h = {};
            i.split("+").map(function(t) {
                return t.trim()
            }).filter(function(t) {
                return t
            }).forEach(function(t) {
                var s = t.split("=");
                "@null" !== s[1] && (s.push(!0), h[s[0].toLowerCase()] = s[1])
            });
            var e, n, r, o = {
                proj: "projName",
                datum: "datumCode",
                rf: function(t) {
                    a.rf = parseFloat(t, 10)
                },
                lat_0: function(s) {
                    a.lat0 = s * t.D2R
                },
                lat_1: function(s) {
                    a.lat1 = s * t.D2R
                },
                lat_2: function(s) {
                    a.lat2 = s * t.D2R
                },
                lat_ts: function(s) {
                    a.lat_ts = s * t.D2R
                },
                lon_0: function(s) {
                    a.long0 = s * t.D2R
                },
                lon_1: function(s) {
                    a.long1 = s * t.D2R
                },
                lon_2: function(s) {
                    a.long2 = s * t.D2R
                },
                alpha: function(s) {
                    a.alpha = parseFloat(s) * t.D2R
                },
                lonc: function(s) {
                    a.longc = s * t.D2R
                },
                x_0: function(t) {
                    a.x0 = parseFloat(t, 10)
                },
                y_0: function(t) {
                    a.y0 = parseFloat(t, 10)
                },
                k_0: function(t) {
                    a.k0 = parseFloat(t, 10)
                },
                k: function(t) {
                    a.k0 = parseFloat(t, 10)
                },
                r_a: function() {
                    a.R_A = !0
                },
                zone: function(t) {
                    a.zone = parseInt(t, 10)
                },
                south: function() {
                    a.utmSouth = !0
                },
                towgs84: function(t) {
                    a.datum_params = t.split(",").map(function(t) {
                        return parseFloat(t, 10)
                    })
                },
                to_meter: function(t) {
                    a.to_meter = parseFloat(t, 10)
                },
                from_greenwich: function(s) {
                    a.from_greenwich = s * t.D2R
                },
                pm: function(i) {
                    a.from_greenwich = (s.PrimeMeridian[i] ? s.PrimeMeridian[i] : parseFloat(i, 10)) * t.D2R
                },
                axis: function(t) {
                    var s = "ewnsud";
                    3 === t.length && -1 !== s.indexOf(t.substr(0, 1)) && -1 !== s.indexOf(t.substr(1, 1)) && -1 !== s.indexOf(t.substr(2, 1)) && (a.axis = t)
                }
            };
            for (e in h) n = h[e], e in o ? (r = o[e], "function" == typeof r ? r(n) : a[r] = n) : a[e] = n;
            return a
        }
    }), i("proj4/wkt", ["./extend", "./constants", "./common"], function(t, s, i) {
        function a(s, i, a) {
            s[i] = a.map(function(t) {
                var s = {};
                return h(t, s), s
            }).reduce(function(s, i) {
                return t(s, i)
            }, {})
        }

        function h(t, s) {
            var i;
            return Array.isArray(t) ? (i = t.shift(), "PARAMETER" === i && (i = t.shift()), 1 === t.length ? Array.isArray(t[0]) ? (s[i] = {}, h(t[0], s[i])) : s[i] = t[0] : t.length ? "TOWGS84" === i ? s[i] = t : (s[i] = {}, ["UNIT", "PRIMEM", "VERT_DATUM"].indexOf(i) > -1 ? (s[i] = {
                name: t[0].toLowerCase(),
                convert: t[1]
            }, 3 === t.length && (s[i].auth = t[2])) : "SPHEROID" === i ? (s[i] = {
                name: t[0],
                a: t[1],
                rf: t[2]
            }, 4 === t.length && (s[i].auth = t[3])) : ["GEOGCS", "GEOCCS", "DATUM", "VERT_CS", "COMPD_CS", "LOCAL_CS", "FITTED_CS", "LOCAL_DATUM"].indexOf(i) > -1 ? (t[0] = ["name", t[0]], a(s, i, t)) : t.every(function(t) {
                return Array.isArray(t)
            }) ? a(s, i, t) : h(t, s[i])) : s[i] = !0, void 0) : (s[t] = !0, void 0)
        }

        function e(t, s) {
            var i = s[0],
                a = s[1];
            !(i in t) && a in t && (t[i] = t[a], 3 === s.length && (t[i] = s[2](t[i])))
        }

        function n(t) {
            return t * i.D2R
        }

        function r(t) {
            function i(s) {
                var i = t.to_meter || 1;
                return parseFloat(s, 10) * i
            }
            "GEOGCS" === t.type ? t.projName = "longlat" : "LOCAL_CS" === t.type ? (t.projName = "identity", t.local = !0) : t.projName = s.wktProjections[t.PROJECTION], t.UNIT && (t.units = t.UNIT.name.toLowerCase(), "metre" === t.units && (t.units = "meter"), t.UNIT.convert && (t.to_meter = parseFloat(t.UNIT.convert, 10))), t.GEOGCS && (t.datumCode = t.GEOGCS.DATUM ? t.GEOGCS.DATUM.name.toLowerCase() : t.GEOGCS.name.toLowerCase(), "d_" === t.datumCode.slice(0, 2) && (t.datumCode = t.datumCode.slice(2)), ("new_zealand_geodetic_datum_1949" === t.datumCode || "new_zealand_1949" === t.datumCode) && (t.datumCode = "nzgd49"), "wgs_1984" === t.datumCode && ("Mercator_Auxiliary_Sphere" === t.PROJECTION && (t.sphere = !0), t.datumCode = "wgs84"), "_ferro" === t.datumCode.slice(-6) && (t.datumCode = t.datumCode.slice(0, -6)), "_jakarta" === t.datumCode.slice(-8) && (t.datumCode = t.datumCode.slice(0, -8)), t.GEOGCS.DATUM && t.GEOGCS.DATUM.SPHEROID && (t.ellps = t.GEOGCS.DATUM.SPHEROID.name.replace("_19", "").replace(/[Cc]larke\_18/, "clrk"), "international" === t.ellps.toLowerCase().slice(0, 13) && (t.ellps = "intl"), t.a = t.GEOGCS.DATUM.SPHEROID.a, t.rf = parseFloat(t.GEOGCS.DATUM.SPHEROID.rf, 10))), t.b && !isFinite(t.b) && (t.b = t.a);
            var a = function(s) {
                    return e(t, s)
                },
                h = [
                    ["standard_parallel_1", "Standard_Parallel_1"],
                    ["standard_parallel_2", "Standard_Parallel_2"],
                    ["false_easting", "False_Easting"],
                    ["false_northing", "False_Northing"],
                    ["central_meridian", "Central_Meridian"],
                    ["latitude_of_origin", "Latitude_Of_Origin"],
                    ["scale_factor", "Scale_Factor"],
                    ["k0", "scale_factor"],
                    ["latitude_of_center", "Latitude_of_center"],
                    ["lat0", "latitude_of_center", n],
                    ["longitude_of_center", "Longitude_Of_Center"],
                    ["longc", "longitude_of_center", n],
                    ["x0", "false_easting", i],
                    ["y0", "false_northing", i],
                    ["long0", "central_meridian", n],
                    ["lat0", "latitude_of_origin", n],
                    ["lat0", "standard_parallel_1", n],
                    ["lat1", "standard_parallel_1", n],
                    ["lat2", "standard_parallel_2", n],
                    ["alpha", "azimuth", n],
                    ["srsCode", "name"]
                ];
            h.forEach(a), t.long0 || !t.longc || "Albers_Conic_Equal_Area" !== t.PROJECTION && "Lambert_Azimuthal_Equal_Area" !== t.PROJECTION || (t.long0 = t.longc)
        }
        return function(s, i) {
            var a = JSON.parse(("," + s).replace(/\,([A-Z_0-9]+?)(\[)/g, ',["$1",').slice(1).replace(/\,([A-Z_0-9]+?)\]/g, ',"$1"]')),
                e = a.shift(),
                n = a.shift();
            a.unshift(["name", n]), a.unshift(["type", e]), a.unshift("output");
            var o = {};
            return h(a, o), r(o.output), t(i, o.output)
        }
    }), i("proj4/defs", ["./common", "./constants", "./global", "./projString", "./wkt"], function(t, s, i, a, h) {
        function e(t) {
            var s = this;
            if (2 === arguments.length) e[t] = "+" === arguments[1][0] ? a(arguments[1]) : h(arguments[1]);
            else if (1 === arguments.length) return Array.isArray(t) ? t.map(function(t) {
                Array.isArray(t) ? e.apply(s, t) : e(t)
            }) : ("string" == typeof t || ("EPSG" in t ? e["EPSG:" + t.EPSG] = t : "ESRI" in t ? e["ESRI:" + t.ESRI] = t : "IAU2000" in t ? e["IAU2000:" + t.IAU2000] = t : console.log(t)), void 0)
        }
        return i(e), e
    }), i("proj4/datum", ["./common"], function(t) {
        var s = function(i) {
            if (!(this instanceof s)) return new s(i);
            if (this.datum_type = t.PJD_WGS84, i) {
                if (i.datumCode && "none" === i.datumCode && (this.datum_type = t.PJD_NODATUM), i.datum_params) {
                    for (var a = 0; a < i.datum_params.length; a++) i.datum_params[a] = parseFloat(i.datum_params[a]);
                    (0 !== i.datum_params[0] || 0 !== i.datum_params[1] || 0 !== i.datum_params[2]) && (this.datum_type = t.PJD_3PARAM), i.datum_params.length > 3 && (0 !== i.datum_params[3] || 0 !== i.datum_params[4] || 0 !== i.datum_params[5] || 0 !== i.datum_params[6]) && (this.datum_type = t.PJD_7PARAM, i.datum_params[3] *= t.SEC_TO_RAD, i.datum_params[4] *= t.SEC_TO_RAD, i.datum_params[5] *= t.SEC_TO_RAD, i.datum_params[6] = i.datum_params[6] / 1e6 + 1)
                }
                this.datum_type = i.grids ? t.PJD_GRIDSHIFT : this.datum_type, this.a = i.a, this.b = i.b, this.es = i.es, this.ep2 = i.ep2, this.datum_params = i.datum_params, this.datum_type === t.PJD_GRIDSHIFT && (this.grids = i.grids)
            }
        };
        return s.prototype = {
            compare_datums: function(s) {
                return this.datum_type !== s.datum_type ? !1 : this.a !== s.a || Math.abs(this.es - s.es) > 5e-11 ? !1 : this.datum_type === t.PJD_3PARAM ? this.datum_params[0] === s.datum_params[0] && this.datum_params[1] === s.datum_params[1] && this.datum_params[2] === s.datum_params[2] : this.datum_type === t.PJD_7PARAM ? this.datum_params[0] === s.datum_params[0] && this.datum_params[1] === s.datum_params[1] && this.datum_params[2] === s.datum_params[2] && this.datum_params[3] === s.datum_params[3] && this.datum_params[4] === s.datum_params[4] && this.datum_params[5] === s.datum_params[5] && this.datum_params[6] === s.datum_params[6] : this.datum_type === t.PJD_GRIDSHIFT || s.datum_type === t.PJD_GRIDSHIFT ? this.nadgrids === s.nadgrids : !0
            },
            geodetic_to_geocentric: function(s) {
                var i, a, h, e, n, r, o, l = s.x,
                    u = s.y,
                    c = s.z ? s.z : 0,
                    M = 0;
                if (u < -t.HALF_PI && u > -1.001 * t.HALF_PI) u = -t.HALF_PI;
                else if (u > t.HALF_PI && u < 1.001 * t.HALF_PI) u = t.HALF_PI;
                else if (u < -t.HALF_PI || u > t.HALF_PI) return null;
                return l > t.PI && (l -= 2 * t.PI), n = Math.sin(u), o = Math.cos(u), r = n * n, e = this.a / Math.sqrt(1 - this.es * r), i = (e + c) * o * Math.cos(l), a = (e + c) * o * Math.sin(l), h = (e * (1 - this.es) + c) * n, s.x = i, s.y = a, s.z = h, M
            },
            geocentric_to_geodetic: function(s) {
                var i, a, h, e, n, r, o, l, u, c, M, f, m, p, _, d, y, g = 1e-12,
                    x = g * g,
                    v = 30,
                    P = s.x,
                    b = s.y,
                    C = s.z ? s.z : 0;
                if (m = !1, i = Math.sqrt(P * P + b * b), a = Math.sqrt(P * P + b * b + C * C), i / this.a < g) {
                    if (m = !0, _ = 0, a / this.a < g) return d = t.HALF_PI, y = -this.b, void 0
                } else _ = Math.atan2(b, P);
                h = C / a, e = i / a, n = 1 / Math.sqrt(1 - this.es * (2 - this.es) * e * e), l = e * (1 - this.es) * n, u = h * n, p = 0;
                do p++, o = this.a / Math.sqrt(1 - this.es * u * u), y = i * l + C * u - o * (1 - this.es * u * u), r = this.es * o / (o + y), n = 1 / Math.sqrt(1 - r * (2 - r) * e * e), c = e * (1 - r) * n, M = h * n, f = M * l - c * u, l = c, u = M; while (f * f > x && v > p);
                return d = Math.atan(M / Math.abs(c)), s.x = _, s.y = d, s.z = y, s
            },
            geocentric_to_geodetic_noniter: function(s) {
                var i, a, h, e, n, r, o, l, u, c, M, f, m, p, _, d, y, g = s.x,
                    x = s.y,
                    v = s.z ? s.z : 0;
                if (g = parseFloat(g), x = parseFloat(x), v = parseFloat(v), y = !1, 0 !== g) i = Math.atan2(x, g);
                else if (x > 0) i = t.HALF_PI;
                else if (0 > x) i = -t.HALF_PI;
                else if (y = !0, i = 0, v > 0) a = t.HALF_PI;
                else {
                    if (!(0 > v)) return a = t.HALF_PI, h = -this.b, void 0;
                    a = -t.HALF_PI
                }
                return n = g * g + x * x, e = Math.sqrt(n), r = v * t.AD_C, l = Math.sqrt(r * r + n), c = r / l, f = e / l, M = c * c * c, o = v + this.b * this.ep2 * M, d = e - this.a * this.es * f * f * f, u = Math.sqrt(o * o + d * d), m = o / u, p = d / u, _ = this.a / Math.sqrt(1 - this.es * m * m), h = p >= t.COS_67P5 ? e / p - _ : p <= -t.COS_67P5 ? e / -p - _ : v / m + _ * (this.es - 1), y === !1 && (a = Math.atan(m / p)), s.x = i, s.y = a, s.z = h, s
            },
            geocentric_to_wgs84: function(s) {
                if (this.datum_type === t.PJD_3PARAM) s.x += this.datum_params[0], s.y += this.datum_params[1], s.z += this.datum_params[2];
                else if (this.datum_type === t.PJD_7PARAM) {
                    var i = this.datum_params[0],
                        a = this.datum_params[1],
                        h = this.datum_params[2],
                        e = this.datum_params[3],
                        n = this.datum_params[4],
                        r = this.datum_params[5],
                        o = this.datum_params[6],
                        l = o * (s.x - r * s.y + n * s.z) + i,
                        u = o * (r * s.x + s.y - e * s.z) + a,
                        c = o * (-n * s.x + e * s.y + s.z) + h;
                    s.x = l, s.y = u, s.z = c
                }
            },
            geocentric_from_wgs84: function(s) {
                if (this.datum_type === t.PJD_3PARAM) s.x -= this.datum_params[0], s.y -= this.datum_params[1], s.z -= this.datum_params[2];
                else if (this.datum_type === t.PJD_7PARAM) {
                    var i = this.datum_params[0],
                        a = this.datum_params[1],
                        h = this.datum_params[2],
                        e = this.datum_params[3],
                        n = this.datum_params[4],
                        r = this.datum_params[5],
                        o = this.datum_params[6],
                        l = (s.x - i) / o,
                        u = (s.y - a) / o,
                        c = (s.z - h) / o;
                    s.x = l + r * u - n * c, s.y = -r * l + u + e * c, s.z = n * l - e * u + c
                }
            }
        }, s
    }), i("proj4/projCode/longlat", ["require", "exports", "module"], function(t, s) {
        function i(t) {
            return t
        }
        s.init = function() {}, s.forward = i, s.inverse = i
    }), i("proj4/projCode/tmerc", ["../common"], function(t) {
        return {
            init: function() {
                this.e0 = t.e0fn(this.es), this.e1 = t.e1fn(this.es), this.e2 = t.e2fn(this.es), this.e3 = t.e3fn(this.es), this.ml0 = this.a * t.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0)
            },
            forward: function(s) {
                var i, a, h, e = s.x,
                    n = s.y,
                    r = t.adjust_lon(e - this.long0),
                    o = Math.sin(n),
                    l = Math.cos(n);
                if (this.sphere) {
                    var u = l * Math.sin(r);
                    if (Math.abs(Math.abs(u) - 1) < 1e-10) return 93;
                    a = .5 * this.a * this.k0 * Math.log((1 + u) / (1 - u)), i = Math.acos(l * Math.cos(r) / Math.sqrt(1 - u * u)), 0 > n && (i = -i), h = this.a * this.k0 * (i - this.lat0)
                } else {
                    var c = l * r,
                        M = Math.pow(c, 2),
                        f = this.ep2 * Math.pow(l, 2),
                        m = Math.tan(n),
                        p = Math.pow(m, 2);
                    i = 1 - this.es * Math.pow(o, 2);
                    var _ = this.a / Math.sqrt(i),
                        d = this.a * t.mlfn(this.e0, this.e1, this.e2, this.e3, n);
                    a = this.k0 * _ * c * (1 + M / 6 * (1 - p + f + M / 20 * (5 - 18 * p + Math.pow(p, 2) + 72 * f - 58 * this.ep2))) + this.x0, h = this.k0 * (d - this.ml0 + _ * m * M * (.5 + M / 24 * (5 - p + 9 * f + 4 * Math.pow(f, 2) + M / 30 * (61 - 58 * p + Math.pow(p, 2) + 600 * f - 330 * this.ep2)))) + this.y0
                }
                return s.x = a, s.y = h, s
            },
            inverse: function(s) {
                var i, a, h, e, n, r, o = 6;
                if (this.sphere) {
                    var l = Math.exp(s.x / (this.a * this.k0)),
                        u = .5 * (l - 1 / l),
                        c = this.lat0 + s.y / (this.a * this.k0),
                        M = Math.cos(c);
                    i = Math.sqrt((1 - M * M) / (1 + u * u)), n = t.asinz(i), 0 > c && (n = -n), r = 0 === u && 0 === M ? this.long0 : t.adjust_lon(Math.atan2(u, M) + this.long0)
                } else {
                    var f = s.x - this.x0,
                        m = s.y - this.y0;
                    for (i = (this.ml0 + m / this.k0) / this.a, a = i, e = 0; !0 && (h = (i + this.e1 * Math.sin(2 * a) - this.e2 * Math.sin(4 * a) + this.e3 * Math.sin(6 * a)) / this.e0 - a, a += h, !(Math.abs(h) <= t.EPSLN)); e++)
                        if (e >= o) return 95;
                    if (Math.abs(a) < t.HALF_PI) {
                        var p = Math.sin(a),
                            _ = Math.cos(a),
                            d = Math.tan(a),
                            y = this.ep2 * Math.pow(_, 2),
                            g = Math.pow(y, 2),
                            x = Math.pow(d, 2),
                            v = Math.pow(x, 2);
                        i = 1 - this.es * Math.pow(p, 2);
                        var P = this.a / Math.sqrt(i),
                            b = P * (1 - this.es) / i,
                            C = f / (P * this.k0),
                            S = Math.pow(C, 2);
                        n = a - P * d * S / b * (.5 - S / 24 * (5 + 3 * x + 10 * y - 4 * g - 9 * this.ep2 - S / 30 * (61 + 90 * x + 298 * y + 45 * v - 252 * this.ep2 - 3 * g))), r = t.adjust_lon(this.long0 + C * (1 - S / 6 * (1 + 2 * x + y - S / 20 * (5 - 2 * y + 28 * x - 3 * g + 8 * this.ep2 + 24 * v))) / _)
                    } else n = t.HALF_PI * t.sign(m), r = this.long0
                }
                return s.x = r, s.y = n, s
            }
        }
    }), i("proj4/projCode/utm", ["../common", "./tmerc"], function(t, s) {
        return {
            dependsOn: "tmerc",
            init: function() {
                this.zone && (this.lat0 = 0, this.long0 = (6 * Math.abs(this.zone) - 183) * t.D2R, this.x0 = 5e5, this.y0 = this.utmSouth ? 1e7 : 0, this.k0 = .9996, s.init.apply(this), this.forward = s.forward, this.inverse = s.inverse)
            }
        }
    }), i("proj4/projCode/gauss", ["../common"], function(t) {
        return {
            init: function() {
                var s = Math.sin(this.lat0),
                    i = Math.cos(this.lat0);
                i *= i, this.rc = Math.sqrt(1 - this.es) / (1 - this.es * s * s), this.C = Math.sqrt(1 + this.es * i * i / (1 - this.es)), this.phic0 = Math.asin(s / this.C), this.ratexp = .5 * this.C * this.e, this.K = Math.tan(.5 * this.phic0 + t.FORTPI) / (Math.pow(Math.tan(.5 * this.lat0 + t.FORTPI), this.C) * t.srat(this.e * s, this.ratexp))
            },
            forward: function(s) {
                var i = s.x,
                    a = s.y;
                return s.y = 2 * Math.atan(this.K * Math.pow(Math.tan(.5 * a + t.FORTPI), this.C) * t.srat(this.e * Math.sin(a), this.ratexp)) - t.HALF_PI, s.x = this.C * i, s
            },
            inverse: function(s) {
                for (var i = 1e-14, a = s.x / this.C, h = s.y, e = Math.pow(Math.tan(.5 * h + t.FORTPI) / this.K, 1 / this.C), n = t.MAX_ITER; n > 0 && (h = 2 * Math.atan(e * t.srat(this.e * Math.sin(s.y), -.5 * this.e)) - t.HALF_PI, !(Math.abs(h - s.y) < i)); --n) s.y = h;
                return n ? (s.x = a, s.y = h, s) : null
            }
        }
    }), i("proj4/projCode/sterea", ["../common", "./gauss"], function(t, s) {
        return {
            init: function() {
                s.init.apply(this), this.rc && (this.sinc0 = Math.sin(this.phic0), this.cosc0 = Math.cos(this.phic0), this.R2 = 2 * this.rc, this.title || (this.title = "Oblique Stereographic Alternative"))
            },
            forward: function(i) {
                var a, h, e, n;
                return i.x = t.adjust_lon(i.x - this.long0), s.forward.apply(this, [i]), a = Math.sin(i.y), h = Math.cos(i.y), e = Math.cos(i.x), n = this.k0 * this.R2 / (1 + this.sinc0 * a + this.cosc0 * h * e), i.x = n * h * Math.sin(i.x), i.y = n * (this.cosc0 * a - this.sinc0 * h * e), i.x = this.a * i.x + this.x0, i.y = this.a * i.y + this.y0, i
            },
            inverse: function(i) {
                var a, h, e, n, r;
                if (i.x = (i.x - this.x0) / this.a, i.y = (i.y - this.y0) / this.a, i.x /= this.k0, i.y /= this.k0, r = Math.sqrt(i.x * i.x + i.y * i.y)) {
                    var o = 2 * Math.atan2(r, this.R2);
                    a = Math.sin(o), h = Math.cos(o), n = Math.asin(h * this.sinc0 + i.y * a * this.cosc0 / r), e = Math.atan2(i.x * a, r * this.cosc0 * h - i.y * this.sinc0 * a)
                } else n = this.phic0, e = 0;
                return i.x = e, i.y = n, s.inverse.apply(this, [i]), i.x = t.adjust_lon(i.x + this.long0), i
            }
        }
    }), i("proj4/projCode/somerc", [], function() {
        return {
            init: function() {
                var t = this.lat0;
                this.lambda0 = this.long0;
                var s = Math.sin(t),
                    i = this.a,
                    a = this.rf,
                    h = 1 / a,
                    e = 2 * h - Math.pow(h, 2),
                    n = this.e = Math.sqrt(e);
                this.R = this.k0 * i * Math.sqrt(1 - e) / (1 - e * Math.pow(s, 2)), this.alpha = Math.sqrt(1 + e / (1 - e) * Math.pow(Math.cos(t), 4)), this.b0 = Math.asin(s / this.alpha);
                var r = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2)),
                    o = Math.log(Math.tan(Math.PI / 4 + t / 2)),
                    l = Math.log((1 + n * s) / (1 - n * s));
                this.K = r - this.alpha * o + this.alpha * n / 2 * l
            },
            forward: function(t) {
                var s = Math.log(Math.tan(Math.PI / 4 - t.y / 2)),
                    i = this.e / 2 * Math.log((1 + this.e * Math.sin(t.y)) / (1 - this.e * Math.sin(t.y))),
                    a = -this.alpha * (s + i) + this.K,
                    h = 2 * (Math.atan(Math.exp(a)) - Math.PI / 4),
                    e = this.alpha * (t.x - this.lambda0),
                    n = Math.atan(Math.sin(e) / (Math.sin(this.b0) * Math.tan(h) + Math.cos(this.b0) * Math.cos(e))),
                    r = Math.asin(Math.cos(this.b0) * Math.sin(h) - Math.sin(this.b0) * Math.cos(h) * Math.cos(e));
                return t.y = this.R / 2 * Math.log((1 + Math.sin(r)) / (1 - Math.sin(r))) + this.y0, t.x = this.R * n + this.x0, t
            },
            inverse: function(t) {
                for (var s = t.x - this.x0, i = t.y - this.y0, a = s / this.R, h = 2 * (Math.atan(Math.exp(i / this.R)) - Math.PI / 4), e = Math.asin(Math.cos(this.b0) * Math.sin(h) + Math.sin(this.b0) * Math.cos(h) * Math.cos(a)), n = Math.atan(Math.sin(a) / (Math.cos(this.b0) * Math.cos(a) - Math.sin(this.b0) * Math.tan(h))), r = this.lambda0 + n / this.alpha, o = 0, l = e, u = -1e3, c = 0; Math.abs(l - u) > 1e-7;) {
                    if (++c > 20) return;
                    o = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + e / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(l)) / 2)), u = l, l = 2 * Math.atan(Math.exp(o)) - Math.PI / 2
                }
                return t.x = r, t.y = l, t
            }
        }
    }), i("proj4/projCode/omerc", ["../common"], function(t) {
        return {
            init: function() {
                this.no_off = this.no_off || !1, this.no_rot = this.no_rot || !1, isNaN(this.k0) && (this.k0 = 1);
                var s = Math.sin(this.lat0),
                    i = Math.cos(this.lat0),
                    a = this.e * s;
                this.bl = Math.sqrt(1 + this.es / (1 - this.es) * Math.pow(i, 4)), this.al = this.a * this.bl * this.k0 * Math.sqrt(1 - this.es) / (1 - a * a);
                var h = t.tsfnz(this.e, this.lat0, s),
                    e = this.bl / i * Math.sqrt((1 - this.es) / (1 - a * a));
                1 > e * e && (e = 1);
                var n, r;
                if (isNaN(this.longc)) {
                    var o = t.tsfnz(this.e, this.lat1, Math.sin(this.lat1)),
                        l = t.tsfnz(this.e, this.lat2, Math.sin(this.lat2));
                    this.el = this.lat0 >= 0 ? (e + Math.sqrt(e * e - 1)) * Math.pow(h, this.bl) : (e - Math.sqrt(e * e - 1)) * Math.pow(h, this.bl);
                    var u = Math.pow(o, this.bl),
                        c = Math.pow(l, this.bl);
                    n = this.el / u, r = .5 * (n - 1 / n);
                    var M = (this.el * this.el - c * u) / (this.el * this.el + c * u),
                        f = (c - u) / (c + u),
                        m = t.adjust_lon(this.long1 - this.long2);
                    this.long0 = .5 * (this.long1 + this.long2) - Math.atan(M * Math.tan(.5 * this.bl * m) / f) / this.bl, this.long0 = t.adjust_lon(this.long0);
                    var p = t.adjust_lon(this.long1 - this.long0);
                    this.gamma0 = Math.atan(Math.sin(this.bl * p) / r), this.alpha = Math.asin(e * Math.sin(this.gamma0))
                } else n = this.lat0 >= 0 ? e + Math.sqrt(e * e - 1) : e - Math.sqrt(e * e - 1), this.el = n * Math.pow(h, this.bl), r = .5 * (n - 1 / n), this.gamma0 = Math.asin(Math.sin(this.alpha) / e), this.long0 = this.longc - Math.asin(r * Math.tan(this.gamma0)) / this.bl;
                this.uc = this.no_off ? 0 : this.lat0 >= 0 ? this.al / this.bl * Math.atan2(Math.sqrt(e * e - 1), Math.cos(this.alpha)) : -1 * this.al / this.bl * Math.atan2(Math.sqrt(e * e - 1), Math.cos(this.alpha))
            },
            forward: function(s) {
                var i, a, h, e = s.x,
                    n = s.y,
                    r = t.adjust_lon(e - this.long0);
                if (Math.abs(Math.abs(n) - t.HALF_PI) <= t.EPSLN) h = n > 0 ? -1 : 1, a = this.al / this.bl * Math.log(Math.tan(t.FORTPI + .5 * h * this.gamma0)), i = -1 * h * t.HALF_PI * this.al / this.bl;
                else {
                    var o = t.tsfnz(this.e, n, Math.sin(n)),
                        l = this.el / Math.pow(o, this.bl),
                        u = .5 * (l - 1 / l),
                        c = .5 * (l + 1 / l),
                        M = Math.sin(this.bl * r),
                        f = (u * Math.sin(this.gamma0) - M * Math.cos(this.gamma0)) / c;
                    a = Math.abs(Math.abs(f) - 1) <= t.EPSLN ? Number.POSITIVE_INFINITY : .5 * this.al * Math.log((1 - f) / (1 + f)) / this.bl, i = Math.abs(Math.cos(this.bl * r)) <= t.EPSLN ? this.al * this.bl * r : this.al * Math.atan2(u * Math.cos(this.gamma0) + M * Math.sin(this.gamma0), Math.cos(this.bl * r)) / this.bl
                }
                return this.no_rot ? (s.x = this.x0 + i, s.y = this.y0 + a) : (i -= this.uc, s.x = this.x0 + a * Math.cos(this.alpha) + i * Math.sin(this.alpha), s.y = this.y0 + i * Math.cos(this.alpha) - a * Math.sin(this.alpha)), s
            },
            inverse: function(s) {
                var i, a;
                this.no_rot ? (a = s.y - this.y0, i = s.x - this.x0) : (a = (s.x - this.x0) * Math.cos(this.alpha) - (s.y - this.y0) * Math.sin(this.alpha), i = (s.y - this.y0) * Math.cos(this.alpha) + (s.x - this.x0) * Math.sin(this.alpha), i += this.uc);
                var h = Math.exp(-1 * this.bl * a / this.al),
                    e = .5 * (h - 1 / h),
                    n = .5 * (h + 1 / h),
                    r = Math.sin(this.bl * i / this.al),
                    o = (r * Math.cos(this.gamma0) + e * Math.sin(this.gamma0)) / n,
                    l = Math.pow(this.el / Math.sqrt((1 + o) / (1 - o)), 1 / this.bl);
                return Math.abs(o - 1) < t.EPSLN ? (s.x = this.long0, s.y = t.HALF_PI) : Math.abs(o + 1) < t.EPSLN ? (s.x = this.long0, s.y = -1 * t.HALF_PI) : (s.y = t.phi2z(this.e, l), s.x = t.adjust_lon(this.long0 - Math.atan2(e * Math.cos(this.gamma0) - r * Math.sin(this.gamma0), Math.cos(this.bl * i / this.al)) / this.bl)), s
            }
        }
    }), i("proj4/projCode/lcc", ["../common"], function(t) {
        return {
            init: function() {
                if (this.lat2 || (this.lat2 = this.lat1), this.k0 || (this.k0 = 1), !(Math.abs(this.lat1 + this.lat2) < t.EPSLN)) {
                    var s = this.b / this.a;
                    this.e = Math.sqrt(1 - s * s);
                    var i = Math.sin(this.lat1),
                        a = Math.cos(this.lat1),
                        h = t.msfnz(this.e, i, a),
                        e = t.tsfnz(this.e, this.lat1, i),
                        n = Math.sin(this.lat2),
                        r = Math.cos(this.lat2),
                        o = t.msfnz(this.e, n, r),
                        l = t.tsfnz(this.e, this.lat2, n),
                        u = t.tsfnz(this.e, this.lat0, Math.sin(this.lat0));
                    this.ns = Math.abs(this.lat1 - this.lat2) > t.EPSLN ? Math.log(h / o) / Math.log(e / l) : i, isNaN(this.ns) && (this.ns = i), this.f0 = h / (this.ns * Math.pow(e, this.ns)), this.rh = this.a * this.f0 * Math.pow(u, this.ns), this.title || (this.title = "Lambert Conformal Conic")
                }
            },
            forward: function(s) {
                var i = s.x,
                    a = s.y;
                Math.abs(2 * Math.abs(a) - t.PI) <= t.EPSLN && (a = t.sign(a) * (t.HALF_PI - 2 * t.EPSLN));
                var h, e, n = Math.abs(Math.abs(a) - t.HALF_PI);
                if (n > t.EPSLN) h = t.tsfnz(this.e, a, Math.sin(a)), e = this.a * this.f0 * Math.pow(h, this.ns);
                else {
                    if (n = a * this.ns, 0 >= n) return null;
                    e = 0
                }
                var r = this.ns * t.adjust_lon(i - this.long0);
                return s.x = this.k0 * e * Math.sin(r) + this.x0, s.y = this.k0 * (this.rh - e * Math.cos(r)) + this.y0, s
            },
            inverse: function(s) {
                var i, a, h, e, n, r = (s.x - this.x0) / this.k0,
                    o = this.rh - (s.y - this.y0) / this.k0;
                this.ns > 0 ? (i = Math.sqrt(r * r + o * o), a = 1) : (i = -Math.sqrt(r * r + o * o), a = -1);
                var l = 0;
                if (0 !== i && (l = Math.atan2(a * r, a * o)), 0 !== i || this.ns > 0) {
                    if (a = 1 / this.ns, h = Math.pow(i / (this.a * this.f0), a), e = t.phi2z(this.e, h), -9999 === e) return null
                } else e = -t.HALF_PI;
                return n = t.adjust_lon(l / this.ns + this.long0), s.x = n, s.y = e, s
            }
        }
    }), i("proj4/projCode/krovak", ["../common"], function(t) {
        return {
            init: function() {
                this.a = 6377397.155, this.es = .006674372230614, this.e = Math.sqrt(this.es), this.lat0 || (this.lat0 = .863937979737193), this.long0 || (this.long0 = .4334234309119251), this.k0 || (this.k0 = .9999), this.s45 = .785398163397448, this.s90 = 2 * this.s45, this.fi0 = this.lat0, this.e2 = this.es, this.e = Math.sqrt(this.e2), this.alfa = Math.sqrt(1 + this.e2 * Math.pow(Math.cos(this.fi0), 4) / (1 - this.e2)), this.uq = 1.04216856380474, this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa), this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2), this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g, this.k1 = this.k0, this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2)), this.s0 = 1.37008346281555, this.n = Math.sin(this.s0), this.ro0 = this.k1 * this.n0 / Math.tan(this.s0), this.ad = this.s90 - this.uq
            },
            forward: function(s) {
                var i, a, h, e, n, r, o, l = s.x,
                    u = s.y,
                    c = t.adjust_lon(l - this.long0);
                return i = Math.pow((1 + this.e * Math.sin(u)) / (1 - this.e * Math.sin(u)), this.alfa * this.e / 2), a = 2 * (Math.atan(this.k * Math.pow(Math.tan(u / 2 + this.s45), this.alfa) / i) - this.s45), h = -c * this.alfa, e = Math.asin(Math.cos(this.ad) * Math.sin(a) + Math.sin(this.ad) * Math.cos(a) * Math.cos(h)), n = Math.asin(Math.cos(a) * Math.sin(h) / Math.cos(e)), r = this.n * n, o = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(e / 2 + this.s45), this.n), s.y = o * Math.cos(r) / 1, s.x = o * Math.sin(r) / 1, this.czech || (s.y *= -1, s.x *= -1), s
            },
            inverse: function(t) {
                var s, i, a, h, e, n, r, o, l = t.x;
                t.x = t.y, t.y = l, this.czech || (t.y *= -1, t.x *= -1), n = Math.sqrt(t.x * t.x + t.y * t.y), e = Math.atan2(t.y, t.x), h = e / Math.sin(this.s0), a = 2 * (Math.atan(Math.pow(this.ro0 / n, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45), s = Math.asin(Math.cos(this.ad) * Math.sin(a) - Math.sin(this.ad) * Math.cos(a) * Math.cos(h)), i = Math.asin(Math.cos(a) * Math.sin(h) / Math.cos(s)), t.x = this.long0 - i / this.alfa, r = s, o = 0;
                var u = 0;
                do t.y = 2 * (Math.atan(Math.pow(this.k, -1 / this.alfa) * Math.pow(Math.tan(s / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(r)) / (1 - this.e * Math.sin(r)), this.e / 2)) - this.s45), Math.abs(r - t.y) < 1e-10 && (o = 1), r = t.y, u += 1; while (0 === o && 15 > u);
                return u >= 15 ? null : t
            }
        }
    }), i("proj4/projCode/cass", ["../common"], function(t) {
        return {
            init: function() {
                this.sphere || (this.e0 = t.e0fn(this.es), this.e1 = t.e1fn(this.es), this.e2 = t.e2fn(this.es), this.e3 = t.e3fn(this.es), this.ml0 = this.a * t.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0))
            },
            forward: function(s) {
                var i, a, h = s.x,
                    e = s.y;
                if (h = t.adjust_lon(h - this.long0), this.sphere) i = this.a * Math.asin(Math.cos(e) * Math.sin(h)), a = this.a * (Math.atan2(Math.tan(e), Math.cos(h)) - this.lat0);
                else {
                    var n = Math.sin(e),
                        r = Math.cos(e),
                        o = t.gN(this.a, this.e, n),
                        l = Math.tan(e) * Math.tan(e),
                        u = h * Math.cos(e),
                        c = u * u,
                        M = this.es * r * r / (1 - this.es),
                        f = this.a * t.mlfn(this.e0, this.e1, this.e2, this.e3, e);
                    i = o * u * (1 - c * l * (1 / 6 - (8 - l + 8 * M) * c / 120)), a = f - this.ml0 + o * n / r * c * (.5 + (5 - l + 6 * M) * c / 24)
                }
                return s.x = i + this.x0, s.y = a + this.y0, s
            },
            inverse: function(s) {
                s.x -= this.x0, s.y -= this.y0;
                var i, a, h = s.x / this.a,
                    e = s.y / this.a;
                if (this.sphere) {
                    var n = e + this.lat0;
                    i = Math.asin(Math.sin(n) * Math.cos(h)), a = Math.atan2(Math.tan(h), Math.cos(n))
                } else {
                    var r = this.ml0 / this.a + e,
                        o = t.imlfn(r, this.e0, this.e1, this.e2, this.e3);
                    if (Math.abs(Math.abs(o) - t.HALF_PI) <= t.EPSLN) return s.x = this.long0, s.y = t.HALF_PI, 0 > e && (s.y *= -1), s;
                    var l = t.gN(this.a, this.e, Math.sin(o)),
                        u = l * l * l / this.a / this.a * (1 - this.es),
                        c = Math.pow(Math.tan(o), 2),
                        M = h * this.a / l,
                        f = M * M;
                    i = o - l * Math.tan(o) / u * M * M * (.5 - (1 + 3 * c) * M * M / 24), a = M * (1 - f * (c / 3 + (1 + 3 * c) * c * f / 15)) / Math.cos(o)
                }
                return s.x = t.adjust_lon(a + this.long0), s.y = t.adjust_lat(i), s
            }
        }
    }), i("proj4/projCode/laea", ["../common"], function(t) {
        return {
            S_POLE: 1,
            N_POLE: 2,
            EQUIT: 3,
            OBLIQ: 4,
            init: function() {
                var s = Math.abs(this.lat0);
                if (this.mode = Math.abs(s - t.HALF_PI) < t.EPSLN ? this.lat0 < 0 ? this.S_POLE : this.N_POLE : Math.abs(s) < t.EPSLN ? this.EQUIT : this.OBLIQ, this.es > 0) {
                    var i;
                    switch (this.qp = t.qsfnz(this.e, 1), this.mmf = .5 / (1 - this.es), this.apa = this.authset(this.es), this.mode) {
                        case this.N_POLE:
                            this.dd = 1;
                            break;
                        case this.S_POLE:
                            this.dd = 1;
                            break;
                        case this.EQUIT:
                            this.rq = Math.sqrt(.5 * this.qp), this.dd = 1 / this.rq, this.xmf = 1, this.ymf = .5 * this.qp;
                            break;
                        case this.OBLIQ:
                            this.rq = Math.sqrt(.5 * this.qp), i = Math.sin(this.lat0), this.sinb1 = t.qsfnz(this.e, i) / this.qp, this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1), this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * i * i) * this.rq * this.cosb1), this.ymf = (this.xmf = this.rq) / this.dd, this.xmf *= this.dd
                    }
                } else this.mode === this.OBLIQ && (this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0))
            },
            forward: function(s) {
                var i, a, h, e, n, r, o, l, u, c, M = s.x,
                    f = s.y;
                if (M = t.adjust_lon(M - this.long0), this.sphere) {
                    if (n = Math.sin(f), c = Math.cos(f), h = Math.cos(M), this.mode === this.OBLIQ || this.mode === this.EQUIT) {
                        if (a = this.mode === this.EQUIT ? 1 + c * h : 1 + this.sinph0 * n + this.cosph0 * c * h, a <= t.EPSLN) return null;
                        a = Math.sqrt(2 / a), i = a * c * Math.sin(M), a *= this.mode === this.EQUIT ? n : this.cosph0 * n - this.sinph0 * c * h
                    } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
                        if (this.mode === this.N_POLE && (h = -h), Math.abs(f + this.phi0) < t.EPSLN) return null;
                        a = t.FORTPI - .5 * f, a = 2 * (this.mode === this.S_POLE ? Math.cos(a) : Math.sin(a)), i = a * Math.sin(M), a *= h
                    }
                } else {
                    switch (o = 0, l = 0, u = 0, h = Math.cos(M), e = Math.sin(M), n = Math.sin(f), r = t.qsfnz(this.e, n), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (o = r / this.qp, l = Math.sqrt(1 - o * o)), this.mode) {
                        case this.OBLIQ:
                            u = 1 + this.sinb1 * o + this.cosb1 * l * h;
                            break;
                        case this.EQUIT:
                            u = 1 + l * h;
                            break;
                        case this.N_POLE:
                            u = t.HALF_PI + f, r = this.qp - r;
                            break;
                        case this.S_POLE:
                            u = f - t.HALF_PI, r = this.qp + r
                    }
                    if (Math.abs(u) < t.EPSLN) return null;
                    switch (this.mode) {
                        case this.OBLIQ:
                        case this.EQUIT:
                            u = Math.sqrt(2 / u), a = this.mode === this.OBLIQ ? this.ymf * u * (this.cosb1 * o - this.sinb1 * l * h) : (u = Math.sqrt(2 / (1 + l * h))) * o * this.ymf, i = this.xmf * u * l * e;
                            break;
                        case this.N_POLE:
                        case this.S_POLE:
                            r >= 0 ? (i = (u = Math.sqrt(r)) * e, a = h * (this.mode === this.S_POLE ? u : -u)) : i = a = 0
                    }
                }
                return s.x = this.a * i + this.x0, s.y = this.a * a + this.y0, s
            },
            inverse: function(s) {
                s.x -= this.x0, s.y -= this.y0;
                var i, a, h, e, n, r, o, l = s.x / this.a,
                    u = s.y / this.a;
                if (this.sphere) {
                    var c, M = 0,
                        f = 0;
                    if (c = Math.sqrt(l * l + u * u), a = .5 * c, a > 1) return null;
                    switch (a = 2 * Math.asin(a), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (f = Math.sin(a), M = Math.cos(a)), this.mode) {
                        case this.EQUIT:
                            a = Math.abs(c) <= t.EPSLN ? 0 : Math.asin(u * f / c), l *= f, u = M * c;
                            break;
                        case this.OBLIQ:
                            a = Math.abs(c) <= t.EPSLN ? this.phi0 : Math.asin(M * this.sinph0 + u * f * this.cosph0 / c), l *= f * this.cosph0, u = (M - Math.sin(a) * this.sinph0) * c;
                            break;
                        case this.N_POLE:
                            u = -u, a = t.HALF_PI - a;
                            break;
                        case this.S_POLE:
                            a -= t.HALF_PI
                    }
                    i = 0 !== u || this.mode !== this.EQUIT && this.mode !== this.OBLIQ ? Math.atan2(l, u) : 0
                } else {
                    if (o = 0, this.mode === this.OBLIQ || this.mode === this.EQUIT) {
                        if (l /= this.dd, u *= this.dd, r = Math.sqrt(l * l + u * u), r < t.EPSLN) return s.x = 0, s.y = this.phi0, s;
                        e = 2 * Math.asin(.5 * r / this.rq), h = Math.cos(e), l *= e = Math.sin(e), this.mode === this.OBLIQ ? (o = h * this.sinb1 + u * e * this.cosb1 / r, n = this.qp * o, u = r * this.cosb1 * h - u * this.sinb1 * e) : (o = u * e / r, n = this.qp * o, u = r * h)
                    } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
                        if (this.mode === this.N_POLE && (u = -u), n = l * l + u * u, !n) return s.x = 0, s.y = this.phi0, s;
                        o = 1 - n / this.qp, this.mode === this.S_POLE && (o = -o)
                    }
                    i = Math.atan2(l, u), a = this.authlat(Math.asin(o), this.apa)
                }
                return s.x = t.adjust_lon(this.long0 + i), s.y = a, s
            },
            P00: .3333333333333333,
            P01: .17222222222222222,
            P02: .10257936507936508,
            P10: .06388888888888888,
            P11: .0664021164021164,
            P20: .016415012942191543,
            authset: function(t) {
                var s, i = [];
                return i[0] = t * this.P00, s = t * t, i[0] += s * this.P01, i[1] = s * this.P10, s *= t, i[0] += s * this.P02, i[1] += s * this.P11, i[2] = s * this.P20, i
            },
            authlat: function(t, s) {
                var i = t + t;
                return t + s[0] * Math.sin(i) + s[1] * Math.sin(i + i) + s[2] * Math.sin(i + i + i)
            }
        }
    }), i("proj4/projCode/merc", ["../common"], function(t) {
        return {
            init: function() {
                var s = this.b / this.a;
                this.es = 1 - s * s, this.e = Math.sqrt(this.es), this.lat_ts ? this.k0 = this.sphere ? Math.cos(this.lat_ts) : t.msfnz(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) : this.k0 || (this.k0 = this.k ? this.k : 1)
            },
            forward: function(s) {
                var i = s.x,
                    a = s.y;
                if (a * t.R2D > 90 && a * t.R2D < -90 && i * t.R2D > 180 && i * t.R2D < -180) return null;
                var h, e;
                if (Math.abs(Math.abs(a) - t.HALF_PI) <= t.EPSLN) return null;
                if (this.sphere) h = this.x0 + this.a * this.k0 * t.adjust_lon(i - this.long0), e = this.y0 + this.a * this.k0 * Math.log(Math.tan(t.FORTPI + .5 * a));
                else {
                    var n = Math.sin(a),
                        r = t.tsfnz(this.e, a, n);
                    h = this.x0 + this.a * this.k0 * t.adjust_lon(i - this.long0), e = this.y0 - this.a * this.k0 * Math.log(r)
                }
                return s.x = h, s.y = e, s
            },
            inverse: function(s) {
                var i, a, h = s.x - this.x0,
                    e = s.y - this.y0;
                if (this.sphere) a = t.HALF_PI - 2 * Math.atan(Math.exp(-e / (this.a * this.k0)));
                else {
                    var n = Math.exp(-e / (this.a * this.k0));
                    if (a = t.phi2z(this.e, n), -9999 === a) return null
                }
                return i = t.adjust_lon(this.long0 + h / (this.a * this.k0)), s.x = i, s.y = a, s
            }
        }
    }), i("proj4/projCode/aea", ["../common"], function(t) {
        return {
            init: function() {
                Math.abs(this.lat1 + this.lat2) < t.EPSLN || (this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e3 = Math.sqrt(this.es), this.sin_po = Math.sin(this.lat1), this.cos_po = Math.cos(this.lat1), this.t1 = this.sin_po, this.con = this.sin_po, this.ms1 = t.msfnz(this.e3, this.sin_po, this.cos_po), this.qs1 = t.qsfnz(this.e3, this.sin_po, this.cos_po), this.sin_po = Math.sin(this.lat2), this.cos_po = Math.cos(this.lat2), this.t2 = this.sin_po, this.ms2 = t.msfnz(this.e3, this.sin_po, this.cos_po), this.qs2 = t.qsfnz(this.e3, this.sin_po, this.cos_po), this.sin_po = Math.sin(this.lat0), this.cos_po = Math.cos(this.lat0), this.t3 = this.sin_po, this.qs0 = t.qsfnz(this.e3, this.sin_po, this.cos_po), this.ns0 = Math.abs(this.lat1 - this.lat2) > t.EPSLN ? (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1) : this.con, this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1, this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0)
            },
            forward: function(s) {
                var i = s.x,
                    a = s.y;
                this.sin_phi = Math.sin(a), this.cos_phi = Math.cos(a);
                var h = t.qsfnz(this.e3, this.sin_phi, this.cos_phi),
                    e = this.a * Math.sqrt(this.c - this.ns0 * h) / this.ns0,
                    n = this.ns0 * t.adjust_lon(i - this.long0),
                    r = e * Math.sin(n) + this.x0,
                    o = this.rh - e * Math.cos(n) + this.y0;
                return s.x = r, s.y = o, s
            },
            inverse: function(s) {
                var i, a, h, e, n, r;
                return s.x -= this.x0, s.y = this.rh - s.y + this.y0, this.ns0 >= 0 ? (i = Math.sqrt(s.x * s.x + s.y * s.y), h = 1) : (i = -Math.sqrt(s.x * s.x + s.y * s.y), h = -1), e = 0, 0 !== i && (e = Math.atan2(h * s.x, h * s.y)), h = i * this.ns0 / this.a, this.sphere ? r = Math.asin((this.c - h * h) / (2 * this.ns0)) : (a = (this.c - h * h) / this.ns0, r = this.phi1z(this.e3, a)), n = t.adjust_lon(e / this.ns0 + this.long0), s.x = n, s.y = r, s
            },
            phi1z: function(s, i) {
                var a, h, e, n, r, o = t.asinz(.5 * i);
                if (s < t.EPSLN) return o;
                for (var l = s * s, u = 1; 25 >= u; u++)
                    if (a = Math.sin(o), h = Math.cos(o), e = s * a, n = 1 - e * e, r = .5 * n * n / h * (i / (1 - l) - a / n + .5 / s * Math.log((1 - e) / (1 + e))), o += r, Math.abs(r) <= 1e-7) return o;
                return null
            }
        }
    }), i("proj4/projCode/gnom", ["../common"], function(t) {
        return {
            init: function() {
                this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0), this.infinity_dist = 1e3 * this.a, this.rc = 1
            },
            forward: function(s) {
                var i, a, h, e, n, r, o, l, u = s.x,
                    c = s.y;
                return h = t.adjust_lon(u - this.long0), i = Math.sin(c), a = Math.cos(c), e = Math.cos(h), r = this.sin_p14 * i + this.cos_p14 * a * e, n = 1, r > 0 || Math.abs(r) <= t.EPSLN ? (o = this.x0 + this.a * n * a * Math.sin(h) / r, l = this.y0 + this.a * n * (this.cos_p14 * i - this.sin_p14 * a * e) / r) : (o = this.x0 + this.infinity_dist * a * Math.sin(h), l = this.y0 + this.infinity_dist * (this.cos_p14 * i - this.sin_p14 * a * e)), s.x = o, s.y = l, s
            },
            inverse: function(s) {
                var i, a, h, e, n, r;
                return s.x = (s.x - this.x0) / this.a, s.y = (s.y - this.y0) / this.a, s.x /= this.k0, s.y /= this.k0, (i = Math.sqrt(s.x * s.x + s.y * s.y)) ? (e = Math.atan2(i, this.rc), a = Math.sin(e), h = Math.cos(e), r = t.asinz(h * this.sin_p14 + s.y * a * this.cos_p14 / i), n = Math.atan2(s.x * a, i * this.cos_p14 * h - s.y * this.sin_p14 * a), n = t.adjust_lon(this.long0 + n)) : (r = this.phic0, n = 0), s.x = n, s.y = r, s
            }
        }
    }), i("proj4/projCode/cea", ["../common"], function(t) {
        return {
            init: function() {
                this.sphere || (this.k0 = t.msfnz(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)))
            },
            forward: function(s) {
                var i, a, h = s.x,
                    e = s.y,
                    n = t.adjust_lon(h - this.long0);
                if (this.sphere) i = this.x0 + this.a * n * Math.cos(this.lat_ts), a = this.y0 + this.a * Math.sin(e) / Math.cos(this.lat_ts);
                else {
                    var r = t.qsfnz(this.e, Math.sin(e));
                    i = this.x0 + this.a * this.k0 * n, a = this.y0 + .5 * this.a * r / this.k0
                }
                return s.x = i, s.y = a, s
            },
            inverse: function(s) {
                s.x -= this.x0, s.y -= this.y0;
                var i, a;
                return this.sphere ? (i = t.adjust_lon(this.long0 + s.x / this.a / Math.cos(this.lat_ts)), a = Math.asin(s.y / this.a * Math.cos(this.lat_ts))) : (a = t.iqsfnz(this.e, 2 * s.y * this.k0 / this.a), i = t.adjust_lon(this.long0 + s.x / (this.a * this.k0))), s.x = i, s.y = a, s
            }
        }
    }), i("proj4/projCode/eqc", ["../common"], function(t) {
        return {
            init: function() {
                this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_t || 0, this.title = this.title || "Equidistant Cylindrical (Plate Carre)", this.rc = Math.cos(this.lat_ts)
            },
            forward: function(s) {
                var i = s.x,
                    a = s.y,
                    h = t.adjust_lon(i - this.long0),
                    e = t.adjust_lat(a - this.lat0);
                return s.x = this.x0 + this.a * h * this.rc, s.y = this.y0 + this.a * e, s
            },
            inverse: function(s) {
                var i = s.x,
                    a = s.y;
                return s.x = t.adjust_lon(this.long0 + (i - this.x0) / (this.a * this.rc)), s.y = t.adjust_lat(this.lat0 + (a - this.y0) / this.a), s
            }
        }
    }), i("proj4/projCode/poly", ["../common"], function(t) {
        return {
            init: function() {
                this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = t.e0fn(this.es), this.e1 = t.e1fn(this.es), this.e2 = t.e2fn(this.es), this.e3 = t.e3fn(this.es), this.ml0 = this.a * t.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0)
            },
            forward: function(s) {
                var i, a, h, e = s.x,
                    n = s.y,
                    r = t.adjust_lon(e - this.long0);
                if (h = r * Math.sin(n), this.sphere) Math.abs(n) <= t.EPSLN ? (i = this.a * r, a = -1 * this.a * this.lat0) : (i = this.a * Math.sin(h) / Math.tan(n), a = this.a * (t.adjust_lat(n - this.lat0) + (1 - Math.cos(h)) / Math.tan(n)));
                else if (Math.abs(n) <= t.EPSLN) i = this.a * r, a = -1 * this.ml0;
                else {
                    var o = t.gN(this.a, this.e, Math.sin(n)) / Math.tan(n);
                    i = o * Math.sin(h), a = this.a * t.mlfn(this.e0, this.e1, this.e2, this.e3, n) - this.ml0 + o * (1 - Math.cos(h))
                }
                return s.x = i + this.x0, s.y = a + this.y0, s
            },
            inverse: function(s) {
                var i, a, h, e, n, r, o, l, u;
                if (h = s.x - this.x0, e = s.y - this.y0, this.sphere)
                    if (Math.abs(e + this.a * this.lat0) <= t.EPSLN) i = t.adjust_lon(h / this.a + this.long0), a = 0;
                    else {
                        r = this.lat0 + e / this.a, o = h * h / this.a / this.a + r * r, l = r;
                        var c;
                        for (n = t.MAX_ITER; n; --n)
                            if (c = Math.tan(l), u = -1 * (r * (l * c + 1) - l - .5 * (l * l + o) * c) / ((l - r) / c - 1), l += u, Math.abs(u) <= t.EPSLN) {
                                a = l;
                                break
                            }
                        i = t.adjust_lon(this.long0 + Math.asin(h * Math.tan(l) / this.a) / Math.sin(a))
                    }
                else if (Math.abs(e + this.ml0) <= t.EPSLN) a = 0, i = t.adjust_lon(this.long0 + h / this.a);
                else {
                    r = (this.ml0 + e) / this.a, o = h * h / this.a / this.a + r * r, l = r;
                    var M, f, m, p, _;
                    for (n = t.MAX_ITER; n; --n)
                        if (_ = this.e * Math.sin(l), M = Math.sqrt(1 - _ * _) * Math.tan(l), f = this.a * t.mlfn(this.e0, this.e1, this.e2, this.e3, l), m = this.e0 - 2 * this.e1 * Math.cos(2 * l) + 4 * this.e2 * Math.cos(4 * l) - 6 * this.e3 * Math.cos(6 * l), p = f / this.a, u = (r * (M * p + 1) - p - .5 * M * (p * p + o)) / (this.es * Math.sin(2 * l) * (p * p + o - 2 * r * p) / (4 * M) + (r - p) * (M * m - 2 / Math.sin(2 * l)) - m), l -= u, Math.abs(u) <= t.EPSLN) {
                            a = l;
                            break
                        }
                    M = Math.sqrt(1 - this.es * Math.pow(Math.sin(a), 2)) * Math.tan(a), i = t.adjust_lon(this.long0 + Math.asin(h * M / this.a) / Math.sin(a))
                }
                return s.x = i, s.y = a, s
            }
        }
    }), i("proj4/projCode/nzmg", ["../common"], function(t) {
        return {
            iterations: 1,
            init: function() {
                this.A = [], this.A[1] = .6399175073, this.A[2] = -.1358797613, this.A[3] = .063294409, this.A[4] = -.02526853, this.A[5] = .0117879, this.A[6] = -.0055161, this.A[7] = .0026906, this.A[8] = -.001333, this.A[9] = 67e-5, this.A[10] = -34e-5, this.B_re = [], this.B_im = [], this.B_re[1] = .7557853228, this.B_im[1] = 0, this.B_re[2] = .249204646, this.B_im[2] = .003371507, this.B_re[3] = -.001541739, this.B_im[3] = .04105856, this.B_re[4] = -.10162907, this.B_im[4] = .01727609, this.B_re[5] = -.26623489, this.B_im[5] = -.36249218, this.B_re[6] = -.6870983, this.B_im[6] = -1.1651967, this.C_re = [], this.C_im = [], this.C_re[1] = 1.3231270439, this.C_im[1] = 0, this.C_re[2] = -.577245789, this.C_im[2] = -.007809598, this.C_re[3] = .508307513, this.C_im[3] = -.112208952, this.C_re[4] = -.15094762, this.C_im[4] = .18200602, this.C_re[5] = 1.01418179, this.C_im[5] = 1.64497696, this.C_re[6] = 1.9660549, this.C_im[6] = 2.5127645, this.D = [], this.D[1] = 1.5627014243, this.D[2] = .5185406398, this.D[3] = -.03333098, this.D[4] = -.1052906, this.D[5] = -.0368594, this.D[6] = .007317, this.D[7] = .0122, this.D[8] = .00394, this.D[9] = -.0013
            },
            forward: function(s) {
                var i, a = s.x,
                    h = s.y,
                    e = h - this.lat0,
                    n = a - this.long0,
                    r = 1e-5 * (e / t.SEC_TO_RAD),
                    o = n,
                    l = 1,
                    u = 0;
                for (i = 1; 10 >= i; i++) l *= r, u += this.A[i] * l;
                var c, M, f = u,
                    m = o,
                    p = 1,
                    _ = 0,
                    d = 0,
                    y = 0;
                for (i = 1; 6 >= i; i++) c = p * f - _ * m, M = _ * f + p * m, p = c, _ = M, d = d + this.B_re[i] * p - this.B_im[i] * _, y = y + this.B_im[i] * p + this.B_re[i] * _;
                return s.x = y * this.a + this.x0, s.y = d * this.a + this.y0, s
            },
            inverse: function(s) {
                var i, a, h, e = s.x,
                    n = s.y,
                    r = e - this.x0,
                    o = n - this.y0,
                    l = o / this.a,
                    u = r / this.a,
                    c = 1,
                    M = 0,
                    f = 0,
                    m = 0;
                for (i = 1; 6 >= i; i++) a = c * l - M * u, h = M * l + c * u, c = a, M = h, f = f + this.C_re[i] * c - this.C_im[i] * M, m = m + this.C_im[i] * c + this.C_re[i] * M;
                for (var p = 0; p < this.iterations; p++) {
                    var _, d, y = f,
                        g = m,
                        x = l,
                        v = u;
                    for (i = 2; 6 >= i; i++) _ = y * f - g * m, d = g * f + y * m, y = _, g = d, x += (i - 1) * (this.B_re[i] * y - this.B_im[i] * g), v += (i - 1) * (this.B_im[i] * y + this.B_re[i] * g);
                    y = 1, g = 0;
                    var P = this.B_re[1],
                        b = this.B_im[1];
                    for (i = 2; 6 >= i; i++) _ = y * f - g * m, d = g * f + y * m, y = _, g = d, P += i * (this.B_re[i] * y - this.B_im[i] * g), b += i * (this.B_im[i] * y + this.B_re[i] * g);
                    var C = P * P + b * b;
                    f = (x * P + v * b) / C, m = (v * P - x * b) / C
                }
                var S = f,
                    j = m,
                    N = 1,
                    A = 0;
                for (i = 1; 9 >= i; i++) N *= S, A += this.D[i] * N;
                var I = this.lat0 + 1e5 * A * t.SEC_TO_RAD,
                    E = this.long0 + j;
                return s.x = E, s.y = I, s
            }
        }
    }), i("proj4/projCode/mill", ["../common"], function(t) {
        return {
            init: function() {},
            forward: function(s) {
                var i = s.x,
                    a = s.y,
                    h = t.adjust_lon(i - this.long0),
                    e = this.x0 + this.a * h,
                    n = this.y0 + 1.25 * this.a * Math.log(Math.tan(t.PI / 4 + a / 2.5));
                return s.x = e, s.y = n, s
            },
            inverse: function(s) {
                s.x -= this.x0, s.y -= this.y0;
                var i = t.adjust_lon(this.long0 + s.x / this.a),
                    a = 2.5 * (Math.atan(Math.exp(.8 * s.y / this.a)) - t.PI / 4);
                return s.x = i, s.y = a, s
            }
        }
    }), i("proj4/projCode/sinu", ["../common"], function(t) {
        return {
            init: function() {
                this.sphere ? (this.n = 1, this.m = 0, this.es = 0, this.C_y = Math.sqrt((this.m + 1) / this.n), this.C_x = this.C_y / (this.m + 1)) : this.en = t.pj_enfn(this.es)
            },
            forward: function(s) {
                var i, a, h = s.x,
                    e = s.y;
                if (h = t.adjust_lon(h - this.long0), this.sphere) {
                    if (this.m)
                        for (var n = this.n * Math.sin(e), r = t.MAX_ITER; r; --r) {
                            var o = (this.m * e + Math.sin(e) - n) / (this.m + Math.cos(e));
                            if (e -= o, Math.abs(o) < t.EPSLN) break
                        } else e = 1 !== this.n ? Math.asin(this.n * Math.sin(e)) : e;
                    i = this.a * this.C_x * h * (this.m + Math.cos(e)), a = this.a * this.C_y * e
                } else {
                    var l = Math.sin(e),
                        u = Math.cos(e);
                    a = this.a * t.pj_mlfn(e, l, u, this.en), i = this.a * h * u / Math.sqrt(1 - this.es * l * l)
                }
                return s.x = i, s.y = a, s
            },
            inverse: function(s) {
                var i, a, h;
                if (s.x -= this.x0, s.y -= this.y0, i = s.y / this.a, this.sphere) s.y /= this.C_y, i = this.m ? Math.asin((this.m * s.y + Math.sin(s.y)) / this.n) : 1 !== this.n ? Math.asin(Math.sin(s.y) / this.n) : s.y, h = s.x / (this.C_x * (this.m + Math.cos(s.y)));
                else {
                    i = t.pj_inv_mlfn(s.y / this.a, this.es, this.en);
                    var e = Math.abs(i);
                    e < t.HALF_PI ? (e = Math.sin(i), a = this.long0 + s.x * Math.sqrt(1 - this.es * e * e) / (this.a * Math.cos(i)), h = t.adjust_lon(a)) : e - t.EPSLN < t.HALF_PI && (h = this.long0)
                }
                return s.x = h, s.y = i, s
            }
        }
    }), i("proj4/projCode/moll", ["../common"], function(t) {
        return {
            init: function() {},
            forward: function(s) {
                for (var i = s.x, a = s.y, h = t.adjust_lon(i - this.long0), e = a, n = t.PI * Math.sin(a), r = 0; !0; r++) {
                    var o = -(e + Math.sin(e) - n) / (1 + Math.cos(e));
                    if (e += o, Math.abs(o) < t.EPSLN) break
                }
                e /= 2, t.PI / 2 - Math.abs(a) < t.EPSLN && (h = 0);
                var l = .900316316158 * this.a * h * Math.cos(e) + this.x0,
                    u = 1.4142135623731 * this.a * Math.sin(e) + this.y0;
                return s.x = l, s.y = u, s
            },
            inverse: function(s) {
                var i, a;
                s.x -= this.x0, s.y -= this.y0, a = s.y / (1.4142135623731 * this.a), Math.abs(a) > .999999999999 && (a = .999999999999), i = Math.asin(a);
                var h = t.adjust_lon(this.long0 + s.x / (.900316316158 * this.a * Math.cos(i)));
                h < -t.PI && (h = -t.PI), h > t.PI && (h = t.PI), a = (2 * i + Math.sin(2 * i)) / t.PI, Math.abs(a) > 1 && (a = 1);
                var e = Math.asin(a);
                return s.x = h, s.y = e, s
            }
        }
    }), i("proj4/projCode/eqdc", ["../common"], function(t) {
        return {
            init: function() {
                return Math.abs(this.lat1 + this.lat2) < t.EPSLN ? (t.reportError("eqdc:init: Equal Latitudes"), void 0) : (this.lat2 = this.lat2 || this.lat1, this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = t.e0fn(this.es), this.e1 = t.e1fn(this.es), this.e2 = t.e2fn(this.es), this.e3 = t.e3fn(this.es), this.sinphi = Math.sin(this.lat1), this.cosphi = Math.cos(this.lat1), this.ms1 = t.msfnz(this.e, this.sinphi, this.cosphi), this.ml1 = t.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat1), Math.abs(this.lat1 - this.lat2) < t.EPSLN ? this.ns = this.sinphi : (this.sinphi = Math.sin(this.lat2), this.cosphi = Math.cos(this.lat2), this.ms2 = t.msfnz(this.e, this.sinphi, this.cosphi), this.ml2 = t.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat2), this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1)), this.g = this.ml1 + this.ms1 / this.ns, this.ml0 = t.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0), this.rh = this.a * (this.g - this.ml0), void 0)
            },
            forward: function(s) {
                var i, a = s.x,
                    h = s.y;
                if (this.sphere) i = this.a * (this.g - h);
                else {
                    var e = t.mlfn(this.e0, this.e1, this.e2, this.e3, h);
                    i = this.a * (this.g - e)
                }
                var n = this.ns * t.adjust_lon(a - this.long0),
                    r = this.x0 + i * Math.sin(n),
                    o = this.y0 + this.rh - i * Math.cos(n);
                return s.x = r, s.y = o, s
            },
            inverse: function(s) {
                s.x -= this.x0, s.y = this.rh - s.y + this.y0;
                var i, a, h, e;
                this.ns >= 0 ? (a = Math.sqrt(s.x * s.x + s.y * s.y), i = 1) : (a = -Math.sqrt(s.x * s.x + s.y * s.y), i = -1);
                var n = 0;
                if (0 !== a && (n = Math.atan2(i * s.x, i * s.y)), this.sphere) return e = t.adjust_lon(this.long0 + n / this.ns), h = t.adjust_lat(this.g - a / this.a), s.x = e, s.y = h, s;
                var r = this.g - a / this.a;
                return h = t.imlfn(r, this.e0, this.e1, this.e2, this.e3), e = t.adjust_lon(this.long0 + n / this.ns), s.x = e, s.y = h, s
            }
        }
    }), i("proj4/projCode/vandg", ["../common"], function(t) {
        return {
            init: function() {
                this.R = this.a
            },
            forward: function(s) {
                var i, a, h = s.x,
                    e = s.y,
                    n = t.adjust_lon(h - this.long0);
                Math.abs(e) <= t.EPSLN && (i = this.x0 + this.R * n, a = this.y0);
                var r = t.asinz(2 * Math.abs(e / t.PI));
                (Math.abs(n) <= t.EPSLN || Math.abs(Math.abs(e) - t.HALF_PI) <= t.EPSLN) && (i = this.x0, a = e >= 0 ? this.y0 + t.PI * this.R * Math.tan(.5 * r) : this.y0 + t.PI * this.R * -Math.tan(.5 * r));
                var o = .5 * Math.abs(t.PI / n - n / t.PI),
                    l = o * o,
                    u = Math.sin(r),
                    c = Math.cos(r),
                    M = c / (u + c - 1),
                    f = M * M,
                    m = M * (2 / u - 1),
                    p = m * m,
                    _ = t.PI * this.R * (o * (M - p) + Math.sqrt(l * (M - p) * (M - p) - (p + l) * (f - p))) / (p + l);
                0 > n && (_ = -_), i = this.x0 + _;
                var d = l + M;
                return _ = t.PI * this.R * (m * d - o * Math.sqrt((p + l) * (l + 1) - d * d)) / (p + l), a = e >= 0 ? this.y0 + _ : this.y0 - _, s.x = i, s.y = a, s
            },
            inverse: function(s) {
                var i, a, h, e, n, r, o, l, u, c, M, f, m;
                return s.x -= this.x0, s.y -= this.y0, M = t.PI * this.R, h = s.x / M, e = s.y / M, n = h * h + e * e, r = -Math.abs(e) * (1 + n), o = r - 2 * e * e + h * h, l = -2 * r + 1 + 2 * e * e + n * n, m = e * e / l + (2 * o * o * o / l / l / l - 9 * r * o / l / l) / 27, u = (r - o * o / 3 / l) / l, c = 2 * Math.sqrt(-u / 3), M = 3 * m / u / c, Math.abs(M) > 1 && (M = M >= 0 ? 1 : -1), f = Math.acos(M) / 3, a = s.y >= 0 ? (-c * Math.cos(f + t.PI / 3) - o / 3 / l) * t.PI : -(-c * Math.cos(f + t.PI / 3) - o / 3 / l) * t.PI, i = Math.abs(h) < t.EPSLN ? this.long0 : t.adjust_lon(this.long0 + t.PI * (n - 1 + Math.sqrt(1 + 2 * (h * h - e * e) + n * n)) / 2 / h), s.x = i, s.y = a, s
            }
        }
    }), i("proj4/projCode/aeqd", ["../common"], function(t) {
        return {
            init: function() {
                this.sin_p12 = Math.sin(this.lat0), this.cos_p12 = Math.cos(this.lat0)
            },
            forward: function(s) {
                var i, a, h, e, n, r, o, l, u, c, M, f, m, p, _, d, y, g, x, v, P, b, C, S = s.x,
                    j = s.y,
                    N = Math.sin(s.y),
                    A = Math.cos(s.y),
                    I = t.adjust_lon(S - this.long0);
                return this.sphere ? Math.abs(this.sin_p12 - 1) <= t.EPSLN ? (s.x = this.x0 + this.a * (t.HALF_PI - j) * Math.sin(I), s.y = this.y0 - this.a * (t.HALF_PI - j) * Math.cos(I), s) : Math.abs(this.sin_p12 + 1) <= t.EPSLN ? (s.x = this.x0 + this.a * (t.HALF_PI + j) * Math.sin(I), s.y = this.y0 + this.a * (t.HALF_PI + j) * Math.cos(I), s) : (g = this.sin_p12 * N + this.cos_p12 * A * Math.cos(I), d = Math.acos(g), y = d / Math.sin(d), s.x = this.x0 + this.a * y * A * Math.sin(I), s.y = this.y0 + this.a * y * (this.cos_p12 * N - this.sin_p12 * A * Math.cos(I)), s) : (i = t.e0fn(this.es), a = t.e1fn(this.es), h = t.e2fn(this.es), e = t.e3fn(this.es), Math.abs(this.sin_p12 - 1) <= t.EPSLN ? (n = this.a * t.mlfn(i, a, h, e, t.HALF_PI), r = this.a * t.mlfn(i, a, h, e, j), s.x = this.x0 + (n - r) * Math.sin(I), s.y = this.y0 - (n - r) * Math.cos(I), s) : Math.abs(this.sin_p12 + 1) <= t.EPSLN ? (n = this.a * t.mlfn(i, a, h, e, t.HALF_PI), r = this.a * t.mlfn(i, a, h, e, j), s.x = this.x0 + (n + r) * Math.sin(I), s.y = this.y0 + (n + r) * Math.cos(I), s) : (o = N / A, l = t.gN(this.a, this.e, this.sin_p12), u = t.gN(this.a, this.e, N), c = Math.atan((1 - this.es) * o + this.es * l * this.sin_p12 / (u * A)), M = Math.atan2(Math.sin(I), this.cos_p12 * Math.tan(c) - this.sin_p12 * Math.cos(I)), x = 0 === M ? Math.asin(this.cos_p12 * Math.sin(c) - this.sin_p12 * Math.cos(c)) : Math.abs(Math.abs(M) - t.PI) <= t.EPSLN ? -Math.asin(this.cos_p12 * Math.sin(c) - this.sin_p12 * Math.cos(c)) : Math.asin(Math.sin(I) * Math.cos(c) / Math.sin(M)), f = this.e * this.sin_p12 / Math.sqrt(1 - this.es), m = this.e * this.cos_p12 * Math.cos(M) / Math.sqrt(1 - this.es), p = f * m, _ = m * m, v = x * x, P = v * x, b = P * x, C = b * x, d = l * x * (1 - v * _ * (1 - _) / 6 + P / 8 * p * (1 - 2 * _) + b / 120 * (_ * (4 - 7 * _) - 3 * f * f * (1 - 7 * _)) - C / 48 * p), s.x = this.x0 + d * Math.sin(M), s.y = this.y0 + d * Math.cos(M), s))
            },
            inverse: function(s) {
                s.x -= this.x0, s.y -= this.y0;
                var i, a, h, e, n, r, o, l, u, c, M, f, m, p, _, d, y, g, x, v, P, b, C;
                if (this.sphere) {
                    if (i = Math.sqrt(s.x * s.x + s.y * s.y), i > 2 * t.HALF_PI * this.a) return;
                    return a = i / this.a, h = Math.sin(a), e = Math.cos(a), n = this.long0, Math.abs(i) <= t.EPSLN ? r = this.lat0 : (r = t.asinz(e * this.sin_p12 + s.y * h * this.cos_p12 / i), o = Math.abs(this.lat0) - t.HALF_PI, n = Math.abs(o) <= t.EPSLN ? this.lat0 >= 0 ? t.adjust_lon(this.long0 + Math.atan2(s.x, -s.y)) : t.adjust_lon(this.long0 - Math.atan2(-s.x, s.y)) : t.adjust_lon(this.long0 + Math.atan2(s.x * h, i * this.cos_p12 * e - s.y * this.sin_p12 * h))), s.x = n, s.y = r, s
                }
                return l = t.e0fn(this.es), u = t.e1fn(this.es), c = t.e2fn(this.es), M = t.e3fn(this.es), Math.abs(this.sin_p12 - 1) <= t.EPSLN ? (f = this.a * t.mlfn(l, u, c, M, t.HALF_PI), i = Math.sqrt(s.x * s.x + s.y * s.y), m = f - i, r = t.imlfn(m / this.a, l, u, c, M), n = t.adjust_lon(this.long0 + Math.atan2(s.x, -1 * s.y)), s.x = n, s.y = r, s) : Math.abs(this.sin_p12 + 1) <= t.EPSLN ? (f = this.a * t.mlfn(l, u, c, M, t.HALF_PI), i = Math.sqrt(s.x * s.x + s.y * s.y), m = i - f, r = t.imlfn(m / this.a, l, u, c, M), n = t.adjust_lon(this.long0 + Math.atan2(s.x, s.y)), s.x = n, s.y = r, s) : (i = Math.sqrt(s.x * s.x + s.y * s.y), d = Math.atan2(s.x, s.y), p = t.gN(this.a, this.e, this.sin_p12), y = Math.cos(d), g = this.e * this.cos_p12 * y, x = -g * g / (1 - this.es), v = 3 * this.es * (1 - x) * this.sin_p12 * this.cos_p12 * y / (1 - this.es), P = i / p, b = P - x * (1 + x) * Math.pow(P, 3) / 6 - v * (1 + 3 * x) * Math.pow(P, 4) / 24, C = 1 - x * b * b / 2 - P * b * b * b / 6, _ = Math.asin(this.sin_p12 * Math.cos(b) + this.cos_p12 * Math.sin(b) * y), n = t.adjust_lon(this.long0 + Math.asin(Math.sin(d) * Math.sin(b) / Math.cos(_))), r = Math.atan((1 - this.es * C * this.sin_p12 / Math.sin(_)) * Math.tan(_) / (1 - this.es)), s.x = n, s.y = r, s)
            }
        }
    }), i("proj4/projections", ["require", "exports", "module", "./projCode/longlat", "./projCode/tmerc", "./projCode/utm", "./projCode/sterea", "./projCode/somerc", "./projCode/omerc", "./projCode/lcc", "./projCode/krovak", "./projCode/cass", "./projCode/laea", "./projCode/merc", "./projCode/aea", "./projCode/gnom", "./projCode/cea", "./projCode/eqc", "./projCode/poly", "./projCode/nzmg", "./projCode/mill", "./projCode/sinu", "./projCode/moll", "./projCode/eqdc", "./projCode/vandg", "./projCode/aeqd", "./projCode/longlat"], function(t, s) {
        s.longlat = t("./projCode/longlat"), s.identity = s.longlat, s.tmerc = t("./projCode/tmerc"), s.utm = t("./projCode/utm"), s.sterea = t("./projCode/sterea"), s.somerc = t("./projCode/somerc"), s.omerc = t("./projCode/omerc"), s.lcc = t("./projCode/lcc"), s.krovak = t("./projCode/krovak"), s.cass = t("./projCode/cass"), s.laea = t("./projCode/laea"), s.merc = t("./projCode/merc"), s.aea = t("./projCode/aea"), s.gnom = t("./projCode/gnom"), s.cea = t("./projCode/cea"), s.eqc = t("./projCode/eqc"), s.poly = t("./projCode/poly"), s.nzmg = t("./projCode/nzmg"), s.mill = t("./projCode/mill"), s.sinu = t("./projCode/sinu"), s.moll = t("./projCode/moll"), s.eqdc = t("./projCode/eqdc"), s.vandg = t("./projCode/vandg"), s.aeqd = t("./projCode/aeqd"), s.longlat = t("./projCode/longlat"), s.identity = s.longlat
    }), i("proj4/Proj", ["./extend", "./common", "./defs", "./constants", "./datum", "./projections", "./wkt", "./projString"], function(t, s, i, a, h, e, n, r) {
        var o = function l(s) {
            if (!(this instanceof l)) return new l(s);
            this.srsCodeInput = s;
            var a;
            "string" == typeof s ? s in i ? (this.deriveConstants(i[s]), t(this, i[s])) : s.indexOf("GEOGCS") >= 0 || s.indexOf("GEOCCS") >= 0 || s.indexOf("PROJCS") >= 0 || s.indexOf("LOCAL_CS") >= 0 ? (a = n(s), this.deriveConstants(a), t(this, a)) : "+" === s[0] && (a = r(s), this.deriveConstants(a), t(this, a)) : (this.deriveConstants(s), t(this, s)), this.initTransforms(this.projName)
        };
        return o.prototype = {
            initTransforms: function(s) {
                if (!(s in o.projections)) throw "unknown projection " + s;
                t(this, o.projections[s]), this.init()
            },
            deriveConstants: function(i) {
                if (i.nadgrids && 0 === i.nadgrids.length && (i.nadgrids = null), i.nadgrids) {
                    i.grids = i.nadgrids.split(",");
                    var e = null,
                        n = i.grids.length;
                    if (n > 0)
                        for (var r = 0; n > r; r++) {
                            e = i.grids[r];
                            var o = e.split("@");
                            "" !== o[o.length - 1] && (i.grids[r] = {
                                mandatory: 1 === o.length,
                                name: o[o.length - 1],
                                grid: a.grids[o[o.length - 1]]
                            }, i.grids[r].mandatory && !i.grids[r].grid)
                        }
                }
                if (i.datumCode && "none" !== i.datumCode) {
                    var l = a.Datum[i.datumCode];
                    l && (i.datum_params = l.towgs84 ? l.towgs84.split(",") : null, i.ellps = l.ellipse, i.datumName = l.datumName ? l.datumName : i.datumCode)
                }
                if (!i.a) {
                    var u = a.Ellipsoid[i.ellps] ? a.Ellipsoid[i.ellps] : a.Ellipsoid.WGS84;
                    t(i, u)
                }
                i.rf && !i.b && (i.b = (1 - 1 / i.rf) * i.a), (0 === i.rf || Math.abs(i.a - i.b) < s.EPSLN) && (i.sphere = !0, i.b = i.a), i.a2 = i.a * i.a, i.b2 = i.b * i.b, i.es = (i.a2 - i.b2) / i.a2, i.e = Math.sqrt(i.es), i.R_A && (i.a *= 1 - i.es * (s.SIXTH + i.es * (s.RA4 + i.es * s.RA6)), i.a2 = i.a * i.a, i.b2 = i.b * i.b, i.es = 0), i.ep2 = (i.a2 - i.b2) / i.b2, i.k0 || (i.k0 = 1), i.axis || (i.axis = "enu"), i.datum = h(i)
            }
        }, o.projections = e, o
    }), i("proj4/datum_transform", ["./common"], function(t) {
        return function(s, i, a) {
            function h(s) {
                return s === t.PJD_3PARAM || s === t.PJD_7PARAM
            }
            var e, n, r;
            if (s.compare_datums(i)) return a;
            if (s.datum_type === t.PJD_NODATUM || i.datum_type === t.PJD_NODATUM) return a;
            var o = s.a,
                l = s.es,
                u = i.a,
                c = i.es,
                M = s.datum_type;
            if (M === t.PJD_GRIDSHIFT)
                if (0 === this.apply_gridshift(s, 0, a)) s.a = t.SRS_WGS84_SEMIMAJOR, s.es = t.SRS_WGS84_ESQUARED;
                else {
                    if (!s.datum_params) return s.a = o, s.es = s.es, a;
                    for (e = 1, n = 0, r = s.datum_params.length; r > n; n++) e *= s.datum_params[n];
                    if (0 === e) return s.a = o, s.es = s.es, a;
                    M = s.datum_params.length > 3 ? t.PJD_7PARAM : t.PJD_3PARAM
                }
            return i.datum_type === t.PJD_GRIDSHIFT && (i.a = t.SRS_WGS84_SEMIMAJOR, i.es = t.SRS_WGS84_ESQUARED), (s.es !== i.es || s.a !== i.a || h(M) || h(i.datum_type)) && (s.geodetic_to_geocentric(a), h(s.datum_type) && s.geocentric_to_wgs84(a), h(i.datum_type) && i.geocentric_from_wgs84(a), i.geocentric_to_geodetic(a)), i.datum_type === t.PJD_GRIDSHIFT && this.apply_gridshift(i, 1, a), s.a = o, s.es = l, i.a = u, i.es = c, a
        }
    }), i("proj4/adjust_axis", [], function() {
        return function(t, s, i) {
            var a, h, e, n = i.x,
                r = i.y,
                o = i.z || 0;
            for (e = 0; 3 > e; e++)
                if (!s || 2 !== e || void 0 !== i.z) switch (0 === e ? (a = n, h = "x") : 1 === e ? (a = r, h = "y") : (a = o, h = "z"), t.axis[e]) {
                    case "e":
                        i[h] = a;
                        break;
                    case "w":
                        i[h] = -a;
                        break;
                    case "n":
                        i[h] = a;
                        break;
                    case "s":
                        i[h] = -a;
                        break;
                    case "u":
                        void 0 !== i[h] && (i.z = a);
                        break;
                    case "d":
                        void 0 !== i[h] && (i.z = -a);
                        break;
                    default:
                        return null
                }
            return i
        }
    }), i("proj4/transform", ["./common", "./datum_transform", "./adjust_axis", "./Proj"], function(t, s, i, a) {
        return function(h, e, n) {
            function r(s, i) {
                return (s.datum.datum_type === t.PJD_3PARAM || s.datum.datum_type === t.PJD_7PARAM) && "WGS84" !== i.datumCode
            }
            var o;
            return h.datum && e.datum && (r(h, e) || r(e, h)) && (o = new a("WGS84"), this.transform(h, o, n), h = o), "enu" !== h.axis && i(h, !1, n), "longlat" === h.projName ? (n.x *= t.D2R, n.y *= t.D2R) : (h.to_meter && (n.x *= h.to_meter, n.y *= h.to_meter), h.inverse(n)), h.from_greenwich && (n.x += h.from_greenwich), n = s(h.datum, e.datum, n), e.from_greenwich && (n.x -= e.from_greenwich), "longlat" === e.projName ? (n.x *= t.R2D, n.y *= t.R2D) : (e.forward(n), e.to_meter && (n.x /= e.to_meter, n.y /= e.to_meter)), "enu" !== e.axis && i(e, !0, n), n
        }
    }), i("proj4/core", ["./Point", "./Proj", "./transform"], function(t, s, i) {
        var a = s("WGS84");
        return function(h, e, n) {
            var r = function(s, a, n) {
                var r;
                return Array.isArray(n) ? (r = i(s, a, t(n)), 3 === n.length ? [r.x, r.y, r.z] : [r.x, r.y]) : i(h, e, n)
            };
            return h = h instanceof s ? h : s(h), "undefined" == typeof e ? (e = h, h = a) : "string" == typeof e ? e = s(e) : "x" in e || Array.isArray(e) ? (n = e, e = h, h = a) : e = e instanceof s ? e : s(e), n ? r(h, e, n) : {
                forward: function(t) {
                    return r(h, e, t)
                },
                inverse: function(t) {
                    return r(e, h, t)
                }
            }
        }
    }), i("proj4", ["proj4/core", "proj4/Proj", "proj4/Point", "proj4/defs", "proj4/transform", "proj4/mgrs"], function(t, s, i, a, h, e) {
        return t.defaultDatum = "WGS84", t.Proj = s, t.WGS84 = new t.Proj("WGS84"), t.Point = i, t.defs = a, t.transform = h, t.mgrs = e, t
    }), s("proj4")
});;
/*
 Leaflet, a JavaScript library for mobile-friendly interactive maps. http://leafletjs.com
 (c) 2010-2013, Vladimir Agafonkin
 (c) 2010-2011, CloudMade
*/
! function(t, e, i) {
    var n = t.L,
        o = {};
    o.version = "0.7.3", "object" == typeof module && "object" == typeof module.exports ? module.exports = o : "function" == typeof define && define.amd && define(o), o.noConflict = function() {
            return t.L = n, this
        }, t.L = o, o.Util = {
            extend: function(t) {
                var e, i, n, o, s = Array.prototype.slice.call(arguments, 1);
                for (i = 0, n = s.length; n > i; i++) {
                    o = s[i] || {};
                    for (e in o) o.hasOwnProperty(e) && (t[e] = o[e])
                }
                return t
            },
            bind: function(t, e) {
                var i = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
                return function() {
                    return t.apply(e, i || arguments)
                }
            },
            stamp: function() {
                var t = 0,
                    e = "_leaflet_id";
                return function(i) {
                    return i[e] = i[e] || ++t, i[e]
                }
            }(),
            invokeEach: function(t, e, i) {
                var n, o;
                if ("object" == typeof t) {
                    o = Array.prototype.slice.call(arguments, 3);
                    for (n in t) e.apply(i, [n, t[n]].concat(o));
                    return !0
                }
                return !1
            },
            limitExecByInterval: function(t, e, i) {
                var n, o;
                return function s() {
                    var a = arguments;
                    return n ? void(o = !0) : (n = !0, setTimeout(function() {
                        n = !1, o && (s.apply(i, a), o = !1)
                    }, e), void t.apply(i, a))
                }
            },
            falseFn: function() {
                return !1
            },
            formatNum: function(t, e) {
                var i = Math.pow(10, e || 5);
                return Math.round(t * i) / i
            },
            trim: function(t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
            },
            splitWords: function(t) {
                return o.Util.trim(t).split(/\s+/)
            },
            setOptions: function(t, e) {
                return t.options = o.extend({}, t.options, e), t.options
            },
            getParamString: function(t, e, i) {
                var n = [];
                for (var o in t) n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
                return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&")
            },
            template: function(t, e) {
                return t.replace(/\{ *([\w_]+) *\}/g, function(t, n) {
                    var o = e[n];
                    if (o === i) throw new Error("No value provided for variable " + t);
                    return "function" == typeof o && (o = o(e)), o
                })
            },
            isArray: Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            },
            emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },
        function() {
            function e(e) {
                var i, n, o = ["webkit", "moz", "o", "ms"];
                for (i = 0; i < o.length && !n; i++) n = t[o[i] + e];
                return n
            }

            function i(e) {
                var i = +new Date,
                    o = Math.max(0, 16 - (i - n));
                return n = i + o, t.setTimeout(e, o)
            }
            var n = 0,
                s = t.requestAnimationFrame || e("RequestAnimationFrame") || i,
                a = t.cancelAnimationFrame || e("CancelAnimationFrame") || e("CancelRequestAnimationFrame") || function(e) {
                    t.clearTimeout(e)
                };
            o.Util.requestAnimFrame = function(e, n, a, r) {
                return e = o.bind(e, n), a && s === i ? void e() : s.call(t, e, r)
            }, o.Util.cancelAnimFrame = function(e) {
                e && a.call(t, e)
            }
        }(), o.extend = o.Util.extend, o.bind = o.Util.bind, o.stamp = o.Util.stamp, o.setOptions = o.Util.setOptions, o.Class = function() {}, o.Class.extend = function(t) {
            var e = function() {
                    this.initialize && this.initialize.apply(this, arguments), this._initHooks && this.callInitHooks()
                },
                i = function() {};
            i.prototype = this.prototype;
            var n = new i;
            n.constructor = e, e.prototype = n;
            for (var s in this) this.hasOwnProperty(s) && "prototype" !== s && (e[s] = this[s]);
            t.statics && (o.extend(e, t.statics), delete t.statics), t.includes && (o.Util.extend.apply(null, [n].concat(t.includes)), delete t.includes), t.options && n.options && (t.options = o.extend({}, n.options, t.options)), o.extend(n, t), n._initHooks = [];
            var a = this;
            return e.__super__ = a.prototype, n.callInitHooks = function() {
                if (!this._initHooksCalled) {
                    a.prototype.callInitHooks && a.prototype.callInitHooks.call(this), this._initHooksCalled = !0;
                    for (var t = 0, e = n._initHooks.length; e > t; t++) n._initHooks[t].call(this)
                }
            }, e
        }, o.Class.include = function(t) {
            o.extend(this.prototype, t)
        }, o.Class.mergeOptions = function(t) {
            o.extend(this.prototype.options, t)
        }, o.Class.addInitHook = function(t) {
            var e = Array.prototype.slice.call(arguments, 1),
                i = "function" == typeof t ? t : function() {
                    this[t].apply(this, e)
                };
            this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i)
        };
    var s = "_leaflet_events";
    o.Mixin = {}, o.Mixin.Events = {
            addEventListener: function(t, e, i) {
                if (o.Util.invokeEach(t, this.addEventListener, this, e, i)) return this;
                var n, a, r, h, l, u, c, d = this[s] = this[s] || {},
                    p = i && i !== this && o.stamp(i);
                for (t = o.Util.splitWords(t), n = 0, a = t.length; a > n; n++) r = {
                    action: e,
                    context: i || this
                }, h = t[n], p ? (l = h + "_idx", u = l + "_len", c = d[l] = d[l] || {}, c[p] || (c[p] = [], d[u] = (d[u] || 0) + 1), c[p].push(r)) : (d[h] = d[h] || [], d[h].push(r));
                return this
            },
            hasEventListeners: function(t) {
                var e = this[s];
                return !!e && (t in e && e[t].length > 0 || t + "_idx" in e && e[t + "_idx_len"] > 0)
            },
            removeEventListener: function(t, e, i) {
                if (!this[s]) return this;
                if (!t) return this.clearAllEventListeners();
                if (o.Util.invokeEach(t, this.removeEventListener, this, e, i)) return this;
                var n, a, r, h, l, u, c, d, p, _ = this[s],
                    m = i && i !== this && o.stamp(i);
                for (t = o.Util.splitWords(t), n = 0, a = t.length; a > n; n++)
                    if (r = t[n], u = r + "_idx", c = u + "_len", d = _[u], e) {
                        if (h = m && d ? d[m] : _[r]) {
                            for (l = h.length - 1; l >= 0; l--) h[l].action !== e || i && h[l].context !== i || (p = h.splice(l, 1), p[0].action = o.Util.falseFn);
                            i && d && 0 === h.length && (delete d[m], _[c]--)
                        }
                    } else delete _[r], delete _[u], delete _[c];
                return this
            },
            clearAllEventListeners: function() {
                return delete this[s], this
            },
            fireEvent: function(t, e) {
                if (!this.hasEventListeners(t)) return this;
                var i, n, a, r, h, l = o.Util.extend({}, e, {
                        type: t,
                        target: this
                    }),
                    u = this[s];
                if (u[t])
                    for (i = u[t].slice(), n = 0, a = i.length; a > n; n++) i[n].action.call(i[n].context, l);
                r = u[t + "_idx"];
                for (h in r)
                    if (i = r[h].slice())
                        for (n = 0, a = i.length; a > n; n++) i[n].action.call(i[n].context, l);
                return this
            },
            addOneTimeEventListener: function(t, e, i) {
                if (o.Util.invokeEach(t, this.addOneTimeEventListener, this, e, i)) return this;
                var n = o.bind(function() {
                    this.removeEventListener(t, e, i).removeEventListener(t, n, i)
                }, this);
                return this.addEventListener(t, e, i).addEventListener(t, n, i)
            }
        }, o.Mixin.Events.on = o.Mixin.Events.addEventListener, o.Mixin.Events.off = o.Mixin.Events.removeEventListener, o.Mixin.Events.once = o.Mixin.Events.addOneTimeEventListener, o.Mixin.Events.fire = o.Mixin.Events.fireEvent,
        function() {
            var n = "ActiveXObject" in t,
                s = n && !e.addEventListener,
                a = navigator.userAgent.toLowerCase(),
                r = -1 !== a.indexOf("webkit"),
                h = -1 !== a.indexOf("chrome"),
                l = -1 !== a.indexOf("phantom"),
                u = -1 !== a.indexOf("android"),
                c = -1 !== a.search("android [23]"),
                d = -1 !== a.indexOf("gecko"),
                p = typeof orientation != i + "",
                _ = t.navigator && t.navigator.msPointerEnabled && t.navigator.msMaxTouchPoints && !t.PointerEvent,
                m = t.PointerEvent && t.navigator.pointerEnabled && t.navigator.maxTouchPoints || _,
                f = "devicePixelRatio" in t && t.devicePixelRatio > 1 || "matchMedia" in t && t.matchMedia("(min-resolution:144dpi)") && t.matchMedia("(min-resolution:144dpi)").matches,
                g = e.documentElement,
                v = n && "transition" in g.style,
                y = "WebKitCSSMatrix" in t && "m11" in new t.WebKitCSSMatrix && !c,
                P = "MozPerspective" in g.style,
                L = "OTransition" in g.style,
                x = !t.L_DISABLE_3D && (v || y || P || L) && !l,
                w = !t.L_NO_TOUCH && !l && function() {
                    var t = "ontouchstart";
                    if (m || t in g) return !0;
                    var i = e.createElement("div"),
                        n = !1;
                    return i.setAttribute ? (i.setAttribute(t, "return;"), "function" == typeof i[t] && (n = !0), i.removeAttribute(t), i = null, n) : !1
                }();
            o.Browser = {
                ie: n,
                ielt9: s,
                webkit: r,
                gecko: d && !r && !t.opera && !n,
                android: u,
                android23: c,
                chrome: h,
                ie3d: v,
                webkit3d: y,
                gecko3d: P,
                opera3d: L,
                any3d: x,
                mobile: p,
                mobileWebkit: p && r,
                mobileWebkit3d: p && y,
                mobileOpera: p && t.opera,
                touch: w,
                msPointer: _,
                pointer: m,
                retina: f
            }
        }(), o.Point = function(t, e, i) {
            this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e
        }, o.Point.prototype = {
            clone: function() {
                return new o.Point(this.x, this.y)
            },
            add: function(t) {
                return this.clone()._add(o.point(t))
            },
            _add: function(t) {
                return this.x += t.x, this.y += t.y, this
            },
            subtract: function(t) {
                return this.clone()._subtract(o.point(t))
            },
            _subtract: function(t) {
                return this.x -= t.x, this.y -= t.y, this
            },
            divideBy: function(t) {
                return this.clone()._divideBy(t)
            },
            _divideBy: function(t) {
                return this.x /= t, this.y /= t, this
            },
            multiplyBy: function(t) {
                return this.clone()._multiplyBy(t)
            },
            _multiplyBy: function(t) {
                return this.x *= t, this.y *= t, this
            },
            round: function() {
                return this.clone()._round()
            },
            _round: function() {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this
            },
            floor: function() {
                return this.clone()._floor()
            },
            _floor: function() {
                return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
            },
            distanceTo: function(t) {
                t = o.point(t);
                var e = t.x - this.x,
                    i = t.y - this.y;
                return Math.sqrt(e * e + i * i)
            },
            equals: function(t) {
                return t = o.point(t), t.x === this.x && t.y === this.y
            },
            contains: function(t) {
                return t = o.point(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
            },
            toString: function() {
                return "Point(" + o.Util.formatNum(this.x) + ", " + o.Util.formatNum(this.y) + ")"
            }
        }, o.point = function(t, e, n) {
            return t instanceof o.Point ? t : o.Util.isArray(t) ? new o.Point(t[0], t[1]) : t === i || null === t ? t : new o.Point(t, e, n)
        }, o.Bounds = function(t, e) {
            if (t)
                for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++) this.extend(i[n])
        }, o.Bounds.prototype = {
            extend: function(t) {
                return t = o.point(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
            },
            getCenter: function(t) {
                return new o.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
            },
            getBottomLeft: function() {
                return new o.Point(this.min.x, this.max.y)
            },
            getTopRight: function() {
                return new o.Point(this.max.x, this.min.y)
            },
            getSize: function() {
                return this.max.subtract(this.min)
            },
            contains: function(t) {
                var e, i;
                return t = "number" == typeof t[0] || t instanceof o.Point ? o.point(t) : o.bounds(t), t instanceof o.Bounds ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
            },
            intersects: function(t) {
                t = o.bounds(t);
                var e = this.min,
                    i = this.max,
                    n = t.min,
                    s = t.max,
                    a = s.x >= e.x && n.x <= i.x,
                    r = s.y >= e.y && n.y <= i.y;
                return a && r
            },
            isValid: function() {
                return !(!this.min || !this.max)
            }
        }, o.bounds = function(t, e) {
            return !t || t instanceof o.Bounds ? t : new o.Bounds(t, e)
        }, o.Transformation = function(t, e, i, n) {
            this._a = t, this._b = e, this._c = i, this._d = n
        }, o.Transformation.prototype = {
            transform: function(t, e) {
                return this._transform(t.clone(), e)
            },
            _transform: function(t, e) {
                return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
            },
            untransform: function(t, e) {
                return e = e || 1, new o.Point((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
            }
        }, o.DomUtil = {
            get: function(t) {
                return "string" == typeof t ? e.getElementById(t) : t
            },
            getStyle: function(t, i) {
                var n = t.style[i];
                if (!n && t.currentStyle && (n = t.currentStyle[i]), (!n || "auto" === n) && e.defaultView) {
                    var o = e.defaultView.getComputedStyle(t, null);
                    n = o ? o[i] : null
                }
                return "auto" === n ? null : n
            },
            getViewportOffset: function(t) {
                var i, n = 0,
                    s = 0,
                    a = t,
                    r = e.body,
                    h = e.documentElement;
                do {
                    if (n += a.offsetTop || 0, s += a.offsetLeft || 0, n += parseInt(o.DomUtil.getStyle(a, "borderTopWidth"), 10) || 0, s += parseInt(o.DomUtil.getStyle(a, "borderLeftWidth"), 10) || 0, i = o.DomUtil.getStyle(a, "position"), a.offsetParent === r && "absolute" === i) break;
                    if ("fixed" === i) {
                        n += r.scrollTop || h.scrollTop || 0, s += r.scrollLeft || h.scrollLeft || 0;
                        break
                    }
                    if ("relative" === i && !a.offsetLeft) {
                        var l = o.DomUtil.getStyle(a, "width"),
                            u = o.DomUtil.getStyle(a, "max-width"),
                            c = a.getBoundingClientRect();
                        ("none" !== l || "none" !== u) && (s += c.left + a.clientLeft), n += c.top + (r.scrollTop || h.scrollTop || 0);
                        break
                    }
                    a = a.offsetParent
                } while (a);
                a = t;
                do {
                    if (a === r) break;
                    n -= a.scrollTop || 0, s -= a.scrollLeft || 0, a = a.parentNode
                } while (a);
                return new o.Point(s, n)
            },
            documentIsLtr: function() {
                return o.DomUtil._docIsLtrCached || (o.DomUtil._docIsLtrCached = !0, o.DomUtil._docIsLtr = "ltr" === o.DomUtil.getStyle(e.body, "direction")), o.DomUtil._docIsLtr
            },
            create: function(t, i, n) {
                var o = e.createElement(t);
                return o.className = i, n && n.appendChild(o), o
            },
            hasClass: function(t, e) {
                if (t.classList !== i) return t.classList.contains(e);
                var n = o.DomUtil._getClass(t);
                return n.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(n)
            },
            addClass: function(t, e) {
                if (t.classList !== i)
                    for (var n = o.Util.splitWords(e), s = 0, a = n.length; a > s; s++) t.classList.add(n[s]);
                else if (!o.DomUtil.hasClass(t, e)) {
                    var r = o.DomUtil._getClass(t);
                    o.DomUtil._setClass(t, (r ? r + " " : "") + e)
                }
            },
            removeClass: function(t, e) {
                t.classList !== i ? t.classList.remove(e) : o.DomUtil._setClass(t, o.Util.trim((" " + o.DomUtil._getClass(t) + " ").replace(" " + e + " ", " ")))
            },
            _setClass: function(t, e) {
                t.className.baseVal === i ? t.className = e : t.className.baseVal = e
            },
            _getClass: function(t) {
                return t.className.baseVal === i ? t.className : t.className.baseVal
            },
            setOpacity: function(t, e) {
                if ("opacity" in t.style) t.style.opacity = e;
                else if ("filter" in t.style) {
                    var i = !1,
                        n = "DXImageTransform.Microsoft.Alpha";
                    try {
                        i = t.filters.item(n)
                    } catch (o) {
                        if (1 === e) return
                    }
                    e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
                }
            },
            testProp: function(t) {
                for (var i = e.documentElement.style, n = 0; n < t.length; n++)
                    if (t[n] in i) return t[n];
                return !1
            },
            getTranslateString: function(t) {
                var e = o.Browser.webkit3d,
                    i = "translate" + (e ? "3d" : "") + "(",
                    n = (e ? ",0" : "") + ")";
                return i + t.x + "px," + t.y + "px" + n
            },
            getScaleString: function(t, e) {
                var i = o.DomUtil.getTranslateString(e.add(e.multiplyBy(-1 * t))),
                    n = " scale(" + t + ") ";
                return i + n
            },
            setPosition: function(t, e, i) {
                t._leaflet_pos = e, !i && o.Browser.any3d ? t.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
            },
            getPosition: function(t) {
                return t._leaflet_pos
            }
        }, o.DomUtil.TRANSFORM = o.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]), o.DomUtil.TRANSITION = o.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), o.DomUtil.TRANSITION_END = "webkitTransition" === o.DomUtil.TRANSITION || "OTransition" === o.DomUtil.TRANSITION ? o.DomUtil.TRANSITION + "End" : "transitionend",
        function() {
            if ("onselectstart" in e) o.extend(o.DomUtil, {
                disableTextSelection: function() {
                    o.DomEvent.on(t, "selectstart", o.DomEvent.preventDefault)
                },
                enableTextSelection: function() {
                    o.DomEvent.off(t, "selectstart", o.DomEvent.preventDefault)
                }
            });
            else {
                var i = o.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
                o.extend(o.DomUtil, {
                    disableTextSelection: function() {
                        if (i) {
                            var t = e.documentElement.style;
                            this._userSelect = t[i], t[i] = "none"
                        }
                    },
                    enableTextSelection: function() {
                        i && (e.documentElement.style[i] = this._userSelect, delete this._userSelect)
                    }
                })
            }
            o.extend(o.DomUtil, {
                disableImageDrag: function() {
                    o.DomEvent.on(t, "dragstart", o.DomEvent.preventDefault)
                },
                enableImageDrag: function() {
                    o.DomEvent.off(t, "dragstart", o.DomEvent.preventDefault)
                }
            })
        }(), o.LatLng = function(t, e, n) {
            if (t = parseFloat(t), e = parseFloat(e), isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
            this.lat = t, this.lng = e, n !== i && (this.alt = parseFloat(n))
        }, o.extend(o.LatLng, {
            DEG_TO_RAD: Math.PI / 180,
            RAD_TO_DEG: 180 / Math.PI,
            MAX_MARGIN: 1e-9
        }), o.LatLng.prototype = {
            equals: function(t) {
                if (!t) return !1;
                t = o.latLng(t);
                var e = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
                return e <= o.LatLng.MAX_MARGIN
            },
            toString: function(t) {
                return "LatLng(" + o.Util.formatNum(this.lat, t) + ", " + o.Util.formatNum(this.lng, t) + ")"
            },
            distanceTo: function(t) {
                t = o.latLng(t);
                var e = 6378137,
                    i = o.LatLng.DEG_TO_RAD,
                    n = (t.lat - this.lat) * i,
                    s = (t.lng - this.lng) * i,
                    a = this.lat * i,
                    r = t.lat * i,
                    h = Math.sin(n / 2),
                    l = Math.sin(s / 2),
                    u = h * h + l * l * Math.cos(a) * Math.cos(r);
                return 2 * e * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u))
            },
            wrap: function(t, e) {
                var i = this.lng;
                return t = t || -180, e = e || 180, i = (i + e) % (e - t) + (t > i || i === e ? e : t), new o.LatLng(this.lat, i)
            }
        }, o.latLng = function(t, e) {
            return t instanceof o.LatLng ? t : o.Util.isArray(t) ? "number" == typeof t[0] || "string" == typeof t[0] ? new o.LatLng(t[0], t[1], t[2]) : null : t === i || null === t ? t : "object" == typeof t && "lat" in t ? new o.LatLng(t.lat, "lng" in t ? t.lng : t.lon) : e === i ? null : new o.LatLng(t, e)
        }, o.LatLngBounds = function(t, e) {
            if (t)
                for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++) this.extend(i[n])
        }, o.LatLngBounds.prototype = {
            extend: function(t) {
                if (!t) return this;
                var e = o.latLng(t);
                return t = null !== e ? e : o.latLngBounds(t), t instanceof o.LatLng ? this._southWest || this._northEast ? (this._southWest.lat = Math.min(t.lat, this._southWest.lat), this._southWest.lng = Math.min(t.lng, this._southWest.lng), this._northEast.lat = Math.max(t.lat, this._northEast.lat), this._northEast.lng = Math.max(t.lng, this._northEast.lng)) : (this._southWest = new o.LatLng(t.lat, t.lng), this._northEast = new o.LatLng(t.lat, t.lng)) : t instanceof o.LatLngBounds && (this.extend(t._southWest), this.extend(t._northEast)), this
            },
            pad: function(t) {
                var e = this._southWest,
                    i = this._northEast,
                    n = Math.abs(e.lat - i.lat) * t,
                    s = Math.abs(e.lng - i.lng) * t;
                return new o.LatLngBounds(new o.LatLng(e.lat - n, e.lng - s), new o.LatLng(i.lat + n, i.lng + s))
            },
            getCenter: function() {
                return new o.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
            },
            getSouthWest: function() {
                return this._southWest
            },
            getNorthEast: function() {
                return this._northEast
            },
            getNorthWest: function() {
                return new o.LatLng(this.getNorth(), this.getWest())
            },
            getSouthEast: function() {
                return new o.LatLng(this.getSouth(), this.getEast())
            },
            getWest: function() {
                return this._southWest.lng
            },
            getSouth: function() {
                return this._southWest.lat
            },
            getEast: function() {
                return this._northEast.lng
            },
            getNorth: function() {
                return this._northEast.lat
            },
            contains: function(t) {
                t = "number" == typeof t[0] || t instanceof o.LatLng ? o.latLng(t) : o.latLngBounds(t);
                var e, i, n = this._southWest,
                    s = this._northEast;
                return t instanceof o.LatLngBounds ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= s.lat && e.lng >= n.lng && i.lng <= s.lng
            },
            intersects: function(t) {
                t = o.latLngBounds(t);
                var e = this._southWest,
                    i = this._northEast,
                    n = t.getSouthWest(),
                    s = t.getNorthEast(),
                    a = s.lat >= e.lat && n.lat <= i.lat,
                    r = s.lng >= e.lng && n.lng <= i.lng;
                return a && r
            },
            toBBoxString: function() {
                return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
            },
            equals: function(t) {
                return t ? (t = o.latLngBounds(t), this._southWest.equals(t.getSouthWest()) && this._northEast.equals(t.getNorthEast())) : !1
            },
            isValid: function() {
                return !(!this._southWest || !this._northEast)
            }
        }, o.latLngBounds = function(t, e) {
            return !t || t instanceof o.LatLngBounds ? t : new o.LatLngBounds(t, e)
        }, o.Projection = {}, o.Projection.SphericalMercator = {
            MAX_LATITUDE: 85.0511287798,
            project: function(t) {
                var e = o.LatLng.DEG_TO_RAD,
                    i = this.MAX_LATITUDE,
                    n = Math.max(Math.min(i, t.lat), -i),
                    s = t.lng * e,
                    a = n * e;
                return a = Math.log(Math.tan(Math.PI / 4 + a / 2)), new o.Point(s, a)
            },
            unproject: function(t) {
                var e = o.LatLng.RAD_TO_DEG,
                    i = t.x * e,
                    n = (2 * Math.atan(Math.exp(t.y)) - Math.PI / 2) * e;
                return new o.LatLng(n, i)
            }
        }, o.Projection.LonLat = {
            project: function(t) {
                return new o.Point(t.lng, t.lat)
            },
            unproject: function(t) {
                return new o.LatLng(t.y, t.x)
            }
        }, o.CRS = {
            latLngToPoint: function(t, e) {
                var i = this.projection.project(t),
                    n = this.scale(e);
                return this.transformation._transform(i, n)
            },
            pointToLatLng: function(t, e) {
                var i = this.scale(e),
                    n = this.transformation.untransform(t, i);
                return this.projection.unproject(n)
            },
            project: function(t) {
                return this.projection.project(t)
            },
            scale: function(t) {
                return 256 * Math.pow(2, t)
            },
            getSize: function(t) {
                var e = this.scale(t);
                return o.point(e, e)
            }
        }, o.CRS.Simple = o.extend({}, o.CRS, {
            projection: o.Projection.LonLat,
            transformation: new o.Transformation(1, 0, -1, 0),
            scale: function(t) {
                return Math.pow(2, t)
            }
        }), o.CRS.EPSG3857 = o.extend({}, o.CRS, {
            code: "EPSG:3857",
            projection: o.Projection.SphericalMercator,
            transformation: new o.Transformation(.5 / Math.PI, .5, -.5 / Math.PI, .5),
            project: function(t) {
                var e = this.projection.project(t),
                    i = 6378137;
                return e.multiplyBy(i)
            }
        }), o.CRS.EPSG900913 = o.extend({}, o.CRS.EPSG3857, {
            code: "EPSG:900913"
        }), o.CRS.EPSG4326 = o.extend({}, o.CRS, {
            code: "EPSG:4326",
            projection: o.Projection.LonLat,
            transformation: new o.Transformation(1 / 360, .5, -1 / 360, .5)
        }), o.Map = o.Class.extend({
            includes: o.Mixin.Events,
            options: {
                crs: o.CRS.EPSG3857,
                fadeAnimation: o.DomUtil.TRANSITION && !o.Browser.android23,
                trackResize: !0,
                markerZoomAnimation: o.DomUtil.TRANSITION && o.Browser.any3d
            },
            initialize: function(t, e) {
                e = o.setOptions(this, e), this._initContainer(t), this._initLayout(), this._onResize = o.bind(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.center && e.zoom !== i && this.setView(o.latLng(e.center), e.zoom, {
                    reset: !0
                }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._tileLayersNum = 0, this.callInitHooks(), this._addLayers(e.layers)
            },
            setView: function(t, e) {
                return e = e === i ? this.getZoom() : e, this._resetView(o.latLng(t), this._limitZoom(e)), this
            },
            setZoom: function(t, e) {
                return this._loaded ? this.setView(this.getCenter(), t, {
                    zoom: e
                }) : (this._zoom = this._limitZoom(t), this)
            },
            zoomIn: function(t, e) {
                return this.setZoom(this._zoom + (t || 1), e)
            },
            zoomOut: function(t, e) {
                return this.setZoom(this._zoom - (t || 1), e)
            },
            setZoomAround: function(t, e, i) {
                var n = this.getZoomScale(e),
                    s = this.getSize().divideBy(2),
                    a = t instanceof o.Point ? t : this.latLngToContainerPoint(t),
                    r = a.subtract(s).multiplyBy(1 - 1 / n),
                    h = this.containerPointToLatLng(s.add(r));
                return this.setView(h, e, {
                    zoom: i
                })
            },
            fitBounds: function(t, e) {
                e = e || {}, t = t.getBounds ? t.getBounds() : o.latLngBounds(t);
                var i = o.point(e.paddingTopLeft || e.padding || [0, 0]),
                    n = o.point(e.paddingBottomRight || e.padding || [0, 0]),
                    s = this.getBoundsZoom(t, !1, i.add(n)),
                    a = n.subtract(i).divideBy(2),
                    r = this.project(t.getSouthWest(), s),
                    h = this.project(t.getNorthEast(), s),
                    l = this.unproject(r.add(h).divideBy(2).add(a), s);
                return s = e && e.maxZoom ? Math.min(e.maxZoom, s) : s, this.setView(l, s, e)
            },
            fitWorld: function(t) {
                return this.fitBounds([
                    [-90, -180],
                    [90, 180]
                ], t)
            },
            panTo: function(t, e) {
                return this.setView(t, this._zoom, {
                    pan: e
                })
            },
            panBy: function(t) {
                return this.fire("movestart"), this._rawPanBy(o.point(t)), this.fire("move"), this.fire("moveend")
            },
            setMaxBounds: function(t) {
                return t = o.latLngBounds(t), this.options.maxBounds = t, t ? (this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds, this)) : this.off("moveend", this._panInsideMaxBounds, this)
            },
            panInsideBounds: function(t, e) {
                var i = this.getCenter(),
                    n = this._limitCenter(i, this._zoom, t);
                return i.equals(n) ? this : this.panTo(n, e)
            },
            addLayer: function(t) {
                var e = o.stamp(t);
                return this._layers[e] ? this : (this._layers[e] = t, !t.options || isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[e] = t, this._updateZoomLevels()), this.options.zoomAnimation && o.TileLayer && t instanceof o.TileLayer && (this._tileLayersNum++, this._tileLayersToLoad++, t.on("load", this._onTileLayerLoad, this)), this._loaded && this._layerAdd(t), this)
            },
            removeLayer: function(t) {
                var e = o.stamp(t);
                return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && this.fire("layerremove", {
                    layer: t
                }), this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels()), this.options.zoomAnimation && o.TileLayer && t instanceof o.TileLayer && (this._tileLayersNum--, this._tileLayersToLoad--, t.off("load", this._onTileLayerLoad, this)), this) : this
            },
            hasLayer: function(t) {
                return t ? o.stamp(t) in this._layers : !1
            },
            eachLayer: function(t, e) {
                for (var i in this._layers) t.call(e, this._layers[i]);
                return this
            },
            invalidateSize: function(t) {
                if (!this._loaded) return this;
                t = o.extend({
                    animate: !1,
                    pan: !0
                }, t === !0 ? {
                    animate: !0
                } : t);
                var e = this.getSize();
                this._sizeChanged = !0, this._initialCenter = null;
                var i = this.getSize(),
                    n = e.divideBy(2).round(),
                    s = i.divideBy(2).round(),
                    a = n.subtract(s);
                return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(o.bind(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                    oldSize: e,
                    newSize: i
                })) : this
            },
            addHandler: function(t, e) {
                if (!e) return this;
                var i = this[t] = new e(this);
                return this._handlers.push(i), this.options[t] && i.enable(), this
            },
            remove: function() {
                this._loaded && this.fire("unload"), this._initEvents("off");
                try {
                    delete this._container._leaflet
                } catch (t) {
                    this._container._leaflet = i
                }
                return this._clearPanes(), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this
            },
            getCenter: function() {
                return this._checkIfLoaded(), this._initialCenter && !this._moved() ? this._initialCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
            },
            getZoom: function() {
                return this._zoom
            },
            getBounds: function() {
                var t = this.getPixelBounds(),
                    e = this.unproject(t.getBottomLeft()),
                    i = this.unproject(t.getTopRight());
                return new o.LatLngBounds(e, i)
            },
            getMinZoom: function() {
                return this.options.minZoom === i ? this._layersMinZoom === i ? 0 : this._layersMinZoom : this.options.minZoom
            },
            getMaxZoom: function() {
                return this.options.maxZoom === i ? this._layersMaxZoom === i ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
            },
            getBoundsZoom: function(t, e, i) {
                t = o.latLngBounds(t);
                var n, s = this.getMinZoom() - (e ? 1 : 0),
                    a = this.getMaxZoom(),
                    r = this.getSize(),
                    h = t.getNorthWest(),
                    l = t.getSouthEast(),
                    u = !0;
                i = o.point(i || [0, 0]);
                do s++, n = this.project(l, s).subtract(this.project(h, s)).add(i), u = e ? n.x < r.x || n.y < r.y : r.contains(n); while (u && a >= s);
                return u && e ? null : e ? s : s - 1
            },
            getSize: function() {
                return (!this._size || this._sizeChanged) && (this._size = new o.Point(this._container.clientWidth, this._container.clientHeight), this._sizeChanged = !1), this._size.clone()
            },
            getPixelBounds: function() {
                var t = this._getTopLeftPoint();
                return new o.Bounds(t, t.add(this.getSize()))
            },
            getPixelOrigin: function() {
                return this._checkIfLoaded(), this._initialTopLeftPoint
            },
            getPanes: function() {
                return this._panes
            },
            getContainer: function() {
                return this._container
            },
            getZoomScale: function(t) {
                var e = this.options.crs;
                return e.scale(t) / e.scale(this._zoom)
            },
            getScaleZoom: function(t) {
                return this._zoom + Math.log(t) / Math.LN2
            },
            project: function(t, e) {
                return e = e === i ? this._zoom : e, this.options.crs.latLngToPoint(o.latLng(t), e)
            },
            unproject: function(t, e) {
                return e = e === i ? this._zoom : e, this.options.crs.pointToLatLng(o.point(t), e)
            },
            layerPointToLatLng: function(t) {
                var e = o.point(t).add(this.getPixelOrigin());
                return this.unproject(e)
            },
            latLngToLayerPoint: function(t) {
                var e = this.project(o.latLng(t))._round();
                return e._subtract(this.getPixelOrigin())
            },
            containerPointToLayerPoint: function(t) {
                return o.point(t).subtract(this._getMapPanePos())
            },
            layerPointToContainerPoint: function(t) {
                return o.point(t).add(this._getMapPanePos())
            },
            containerPointToLatLng: function(t) {
                var e = this.containerPointToLayerPoint(o.point(t));
                return this.layerPointToLatLng(e)
            },
            latLngToContainerPoint: function(t) {
                return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)))
            },
            mouseEventToContainerPoint: function(t) {
                return o.DomEvent.getMousePosition(t, this._container)
            },
            mouseEventToLayerPoint: function(t) {
                return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
            },
            mouseEventToLatLng: function(t) {
                return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
            },
            _initContainer: function(t) {
                var e = this._container = o.DomUtil.get(t);
                if (!e) throw new Error("Map container not found.");
                if (e._leaflet) throw new Error("Map container is already initialized.");
                e._leaflet = !0
            },
            _initLayout: function() {
                var t = this._container;
                o.DomUtil.addClass(t, "leaflet-container" + (o.Browser.touch ? " leaflet-touch" : "") + (o.Browser.retina ? " leaflet-retina" : "") + (o.Browser.ielt9 ? " leaflet-oldie" : "") + (this.options.fadeAnimation ? " leaflet-fade-anim" : ""));
                var e = o.DomUtil.getStyle(t, "position");
                "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
            },
            _initPanes: function() {
                var t = this._panes = {};
                this._mapPane = t.mapPane = this._createPane("leaflet-map-pane", this._container), this._tilePane = t.tilePane = this._createPane("leaflet-tile-pane", this._mapPane), t.objectsPane = this._createPane("leaflet-objects-pane", this._mapPane), t.shadowPane = this._createPane("leaflet-shadow-pane"), t.overlayPane = this._createPane("leaflet-overlay-pane"), t.markerPane = this._createPane("leaflet-marker-pane"), t.popupPane = this._createPane("leaflet-popup-pane");
                var e = " leaflet-zoom-hide";
                this.options.markerZoomAnimation || (o.DomUtil.addClass(t.markerPane, e), o.DomUtil.addClass(t.shadowPane, e), o.DomUtil.addClass(t.popupPane, e))
            },
            _createPane: function(t, e) {
                return o.DomUtil.create("div", t, e || this._panes.objectsPane)
            },
            _clearPanes: function() {
                this._container.removeChild(this._mapPane)
            },
            _addLayers: function(t) {
                t = t ? o.Util.isArray(t) ? t : [t] : [];
                for (var e = 0, i = t.length; i > e; e++) this.addLayer(t[e])
            },
            _resetView: function(t, e, i, n) {
                var s = this._zoom !== e;
                n || (this.fire("movestart"), s && this.fire("zoomstart")), this._zoom = e, this._initialCenter = t, this._initialTopLeftPoint = this._getNewTopLeftPoint(t), i ? this._initialTopLeftPoint._add(this._getMapPanePos()) : o.DomUtil.setPosition(this._mapPane, new o.Point(0, 0)), this._tileLayersToLoad = this._tileLayersNum;
                var a = !this._loaded;
                this._loaded = !0, this.fire("viewreset", {
                    hard: !i
                }), a && (this.fire("load"), this.eachLayer(this._layerAdd, this)), this.fire("move"), (s || n) && this.fire("zoomend"), this.fire("moveend", {
                    hard: !i
                })
            },
            _rawPanBy: function(t) {
                o.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(t))
            },
            _getZoomSpan: function() {
                return this.getMaxZoom() - this.getMinZoom()
            },
            _updateZoomLevels: function() {
                var t, e = 1 / 0,
                    n = -1 / 0,
                    o = this._getZoomSpan();
                for (t in this._zoomBoundLayers) {
                    var s = this._zoomBoundLayers[t];
                    isNaN(s.options.minZoom) || (e = Math.min(e, s.options.minZoom)), isNaN(s.options.maxZoom) || (n = Math.max(n, s.options.maxZoom))
                }
                t === i ? this._layersMaxZoom = this._layersMinZoom = i : (this._layersMaxZoom = n, this._layersMinZoom = e), o !== this._getZoomSpan() && this.fire("zoomlevelschange")
            },
            _panInsideMaxBounds: function() {
                this.panInsideBounds(this.options.maxBounds)
            },
            _checkIfLoaded: function() {
                if (!this._loaded) throw new Error("Set map center and zoom first.")
            },
            _initEvents: function(e) {
                if (o.DomEvent) {
                    e = e || "on", o.DomEvent[e](this._container, "click", this._onMouseClick, this);
                    var i, n, s = ["dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "contextmenu"];
                    for (i = 0, n = s.length; n > i; i++) o.DomEvent[e](this._container, s[i], this._fireMouseEvent, this);
                    this.options.trackResize && o.DomEvent[e](t, "resize", this._onResize, this)
                }
            },
            _onResize: function() {
                o.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = o.Util.requestAnimFrame(function() {
                    this.invalidateSize({
                        debounceMoveend: !0
                    })
                }, this, !1, this._container)
            },
            _onMouseClick: function(t) {
                !this._loaded || !t._simulated && (this.dragging && this.dragging.moved() || this.boxZoom && this.boxZoom.moved()) || o.DomEvent._skipped(t) || (this.fire("preclick"), this._fireMouseEvent(t))
            },
            _fireMouseEvent: function(t) {
                if (this._loaded && !o.DomEvent._skipped(t)) {
                    var e = t.type;
                    if (e = "mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, this.hasEventListeners(e)) {
                        "contextmenu" === e && o.DomEvent.preventDefault(t);
                        var i = this.mouseEventToContainerPoint(t),
                            n = this.containerPointToLayerPoint(i),
                            s = this.layerPointToLatLng(n);
                        this.fire(e, {
                            latlng: s,
                            layerPoint: n,
                            containerPoint: i,
                            originalEvent: t
                        })
                    }
                }
            },
            _onTileLayerLoad: function() {
                this._tileLayersToLoad--, this._tileLayersNum && !this._tileLayersToLoad && this.fire("tilelayersload")
            },
            _clearHandlers: function() {
                for (var t = 0, e = this._handlers.length; e > t; t++) this._handlers[t].disable()
            },
            whenReady: function(t, e) {
                return this._loaded ? t.call(e || this, this) : this.on("load", t, e), this
            },
            _layerAdd: function(t) {
                t.onAdd(this), this.fire("layeradd", {
                    layer: t
                })
            },
            _getMapPanePos: function() {
                return o.DomUtil.getPosition(this._mapPane)
            },
            _moved: function() {
                var t = this._getMapPanePos();
                return t && !t.equals([0, 0])
            },
            _getTopLeftPoint: function() {
                return this.getPixelOrigin().subtract(this._getMapPanePos())
            },
            _getNewTopLeftPoint: function(t, e) {
                var i = this.getSize()._divideBy(2);
                return this.project(t, e)._subtract(i)._round()
            },
            _latLngToNewLayerPoint: function(t, e, i) {
                var n = this._getNewTopLeftPoint(i, e).add(this._getMapPanePos());
                return this.project(t, e)._subtract(n)
            },
            _getCenterLayerPoint: function() {
                return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
            },
            _getCenterOffset: function(t) {
                return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
            },
            _limitCenter: function(t, e, i) {
                if (!i) return t;
                var n = this.project(t, e),
                    s = this.getSize().divideBy(2),
                    a = new o.Bounds(n.subtract(s), n.add(s)),
                    r = this._getBoundsOffset(a, i, e);
                return this.unproject(n.add(r), e)
            },
            _limitOffset: function(t, e) {
                if (!e) return t;
                var i = this.getPixelBounds(),
                    n = new o.Bounds(i.min.add(t), i.max.add(t));
                return t.add(this._getBoundsOffset(n, e))
            },
            _getBoundsOffset: function(t, e, i) {
                var n = this.project(e.getNorthWest(), i).subtract(t.min),
                    s = this.project(e.getSouthEast(), i).subtract(t.max),
                    a = this._rebound(n.x, -s.x),
                    r = this._rebound(n.y, -s.y);
                return new o.Point(a, r)
            },
            _rebound: function(t, e) {
                return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
            },
            _limitZoom: function(t) {
                var e = this.getMinZoom(),
                    i = this.getMaxZoom();
                return Math.max(e, Math.min(i, t))
            }
        }), o.map = function(t, e) {
            return new o.Map(t, e)
        }, o.Projection.Mercator = {
            MAX_LATITUDE: 85.0840591556,
            R_MINOR: 6356752.314245179,
            R_MAJOR: 6378137,
            project: function(t) {
                var e = o.LatLng.DEG_TO_RAD,
                    i = this.MAX_LATITUDE,
                    n = Math.max(Math.min(i, t.lat), -i),
                    s = this.R_MAJOR,
                    a = this.R_MINOR,
                    r = t.lng * e * s,
                    h = n * e,
                    l = a / s,
                    u = Math.sqrt(1 - l * l),
                    c = u * Math.sin(h);
                c = Math.pow((1 - c) / (1 + c), .5 * u);
                var d = Math.tan(.5 * (.5 * Math.PI - h)) / c;
                return h = -s * Math.log(d), new o.Point(r, h)
            },
            unproject: function(t) {
                for (var e, i = o.LatLng.RAD_TO_DEG, n = this.R_MAJOR, s = this.R_MINOR, a = t.x * i / n, r = s / n, h = Math.sqrt(1 - r * r), l = Math.exp(-t.y / n), u = Math.PI / 2 - 2 * Math.atan(l), c = 15, d = 1e-7, p = c, _ = .1; Math.abs(_) > d && --p > 0;) e = h * Math.sin(u), _ = Math.PI / 2 - 2 * Math.atan(l * Math.pow((1 - e) / (1 + e), .5 * h)) - u, u += _;
                return new o.LatLng(u * i, a)
            }
        }, o.CRS.EPSG3395 = o.extend({}, o.CRS, {
            code: "EPSG:3395",
            projection: o.Projection.Mercator,
            transformation: function() {
                var t = o.Projection.Mercator,
                    e = t.R_MAJOR,
                    i = .5 / (Math.PI * e);
                return new o.Transformation(i, .5, -i, .5)
            }()
        }), o.TileLayer = o.Class.extend({
            includes: o.Mixin.Events,
            options: {
                minZoom: 0,
                maxZoom: 18,
                tileSize: 256,
                subdomains: "abc",
                errorTileUrl: "",
                attribution: "",
                zoomOffset: 0,
                opacity: 1,
                unloadInvisibleTiles: o.Browser.mobile,
                updateWhenIdle: o.Browser.mobile
            },
            initialize: function(t, e) {
                e = o.setOptions(this, e), e.detectRetina && o.Browser.retina && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomOffset++, e.minZoom > 0 && e.minZoom--, this.options.maxZoom--), e.bounds && (e.bounds = o.latLngBounds(e.bounds)), this._url = t;
                var i = this.options.subdomains;
                "string" == typeof i && (this.options.subdomains = i.split(""))
            },
            onAdd: function(t) {
                this._map = t, this._animated = t._zoomAnimated, this._initContainer(), t.on({
                    viewreset: this._reset,
                    moveend: this._update
                }, this), this._animated && t.on({
                    zoomanim: this._animateZoom,
                    zoomend: this._endZoomAnim
                }, this), this.options.updateWhenIdle || (this._limitedUpdate = o.Util.limitExecByInterval(this._update, 150, this), t.on("move", this._limitedUpdate, this)), this._reset(), this._update()
            },
            addTo: function(t) {
                return t.addLayer(this), this
            },
            onRemove: function(t) {
                this._container.parentNode.removeChild(this._container), t.off({
                    viewreset: this._reset,
                    moveend: this._update
                }, this), this._animated && t.off({
                    zoomanim: this._animateZoom,
                    zoomend: this._endZoomAnim
                }, this), this.options.updateWhenIdle || t.off("move", this._limitedUpdate, this), this._container = null, this._map = null
            },
            bringToFront: function() {
                var t = this._map._panes.tilePane;
                return this._container && (t.appendChild(this._container), this._setAutoZIndex(t, Math.max)), this
            },
            bringToBack: function() {
                var t = this._map._panes.tilePane;
                return this._container && (t.insertBefore(this._container, t.firstChild), this._setAutoZIndex(t, Math.min)), this
            },
            getAttribution: function() {
                return this.options.attribution
            },
            getContainer: function() {
                return this._container
            },
            setOpacity: function(t) {
                return this.options.opacity = t, this._map && this._updateOpacity(), this
            },
            setZIndex: function(t) {
                return this.options.zIndex = t, this._updateZIndex(), this
            },
            setUrl: function(t, e) {
                return this._url = t, e || this.redraw(), this
            },
            redraw: function() {
                return this._map && (this._reset({
                    hard: !0
                }), this._update()), this
            },
            _updateZIndex: function() {
                this._container && this.options.zIndex !== i && (this._container.style.zIndex = this.options.zIndex)
            },
            _setAutoZIndex: function(t, e) {
                var i, n, o, s = t.children,
                    a = -e(1 / 0, -1 / 0);
                for (n = 0, o = s.length; o > n; n++) s[n] !== this._container && (i = parseInt(s[n].style.zIndex, 10), isNaN(i) || (a = e(a, i)));
                this.options.zIndex = this._container.style.zIndex = (isFinite(a) ? a : 0) + e(1, -1)
            },
            _updateOpacity: function() {
                var t, e = this._tiles;
                if (o.Browser.ielt9)
                    for (t in e) o.DomUtil.setOpacity(e[t], this.options.opacity);
                else o.DomUtil.setOpacity(this._container, this.options.opacity)
            },
            _initContainer: function() {
                var t = this._map._panes.tilePane;
                if (!this._container) {
                    if (this._container = o.DomUtil.create("div", "leaflet-layer"), this._updateZIndex(), this._animated) {
                        var e = "leaflet-tile-container";
                        this._bgBuffer = o.DomUtil.create("div", e, this._container), this._tileContainer = o.DomUtil.create("div", e, this._container)
                    } else this._tileContainer = this._container;
                    t.appendChild(this._container), this.options.opacity < 1 && this._updateOpacity()
                }
            },
            _reset: function(t) {
                for (var e in this._tiles) this.fire("tileunload", {
                    tile: this._tiles[e]
                });
                this._tiles = {}, this._tilesToLoad = 0, this.options.reuseTiles && (this._unusedTiles = []), this._tileContainer.innerHTML = "", this._animated && t && t.hard && this._clearBgBuffer(), this._initContainer()
            },
            _getTileSize: function() {
                var t = this._map,
                    e = t.getZoom() + this.options.zoomOffset,
                    i = this.options.maxNativeZoom,
                    n = this.options.tileSize;
                return i && e > i && (n = Math.round(t.getZoomScale(e) / t.getZoomScale(i) * n)), n
            },
            _update: function() {
                if (this._map) {
                    var t = this._map,
                        e = t.getPixelBounds(),
                        i = t.getZoom(),
                        n = this._getTileSize();
                    if (!(i > this.options.maxZoom || i < this.options.minZoom)) {
                        var s = o.bounds(e.min.divideBy(n)._floor(), e.max.divideBy(n)._floor());
                        this._addTilesFromCenterOut(s), (this.options.unloadInvisibleTiles || this.options.reuseTiles) && this._removeOtherTiles(s)
                    }
                }
            },
            _addTilesFromCenterOut: function(t) {
                var i, n, s, a = [],
                    r = t.getCenter();
                for (i = t.min.y; i <= t.max.y; i++)
                    for (n = t.min.x; n <= t.max.x; n++) s = new o.Point(n, i), this._tileShouldBeLoaded(s) && a.push(s);
                var h = a.length;
                if (0 !== h) {
                    a.sort(function(t, e) {
                        return t.distanceTo(r) - e.distanceTo(r)
                    });
                    var l = e.createDocumentFragment();
                    for (this._tilesToLoad || this.fire("loading"), this._tilesToLoad += h, n = 0; h > n; n++) this._addTile(a[n], l);
                    this._tileContainer.appendChild(l)
                }
            },
            _tileShouldBeLoaded: function(t) {
                if (t.x + ":" + t.y in this._tiles) return !1;
                var e = this.options;
                if (!e.continuousWorld) {
                    var i = this._getWrapTileNum();
                    if (e.noWrap && (t.x < 0 || t.x >= i.x) || t.y < 0 || t.y >= i.y) return !1
                }
                if (e.bounds) {
                    var n = e.tileSize,
                        o = t.multiplyBy(n),
                        s = o.add([n, n]),
                        a = this._map.unproject(o),
                        r = this._map.unproject(s);
                    if (e.continuousWorld || e.noWrap || (a = a.wrap(), r = r.wrap()), !e.bounds.intersects([a, r])) return !1
                }
                return !0
            },
            _removeOtherTiles: function(t) {
                var e, i, n, o;
                for (o in this._tiles) e = o.split(":"), i = parseInt(e[0], 10), n = parseInt(e[1], 10), (i < t.min.x || i > t.max.x || n < t.min.y || n > t.max.y) && this._removeTile(o)
            },
            _removeTile: function(t) {
                var e = this._tiles[t];
                this.fire("tileunload", {
                    tile: e,
                    url: e.src
                }), this.options.reuseTiles ? (o.DomUtil.removeClass(e, "leaflet-tile-loaded"), this._unusedTiles.push(e)) : e.parentNode === this._tileContainer && this._tileContainer.removeChild(e), o.Browser.android || (e.onload = null, e.src = o.Util.emptyImageUrl), delete this._tiles[t]
            },
            _addTile: function(t, e) {
                var i = this._getTilePos(t),
                    n = this._getTile();
                o.DomUtil.setPosition(n, i, o.Browser.chrome), this._tiles[t.x + ":" + t.y] = n, this._loadTile(n, t), n.parentNode !== this._tileContainer && e.appendChild(n)
            },
            _getZoomForUrl: function() {
                var t = this.options,
                    e = this._map.getZoom();
                return t.zoomReverse && (e = t.maxZoom - e), e += t.zoomOffset, t.maxNativeZoom ? Math.min(e, t.maxNativeZoom) : e
            },
            _getTilePos: function(t) {
                var e = this._map.getPixelOrigin(),
                    i = this._getTileSize();
                return t.multiplyBy(i).subtract(e)
            },
            getTileUrl: function(t) {
                return o.Util.template(this._url, o.extend({
                    s: this._getSubdomain(t),
                    z: t.z,
                    x: t.x,
                    y: t.y
                }, this.options))
            },
            _getWrapTileNum: function() {
                var t = this._map.options.crs,
                    e = t.getSize(this._map.getZoom());
                return e.divideBy(this._getTileSize())._floor()
            },
            _adjustTilePoint: function(t) {
                var e = this._getWrapTileNum();
                this.options.continuousWorld || this.options.noWrap || (t.x = (t.x % e.x + e.x) % e.x), this.options.tms && (t.y = e.y - t.y - 1), t.z = this._getZoomForUrl()
            },
            _getSubdomain: function(t) {
                var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
                return this.options.subdomains[e]
            },
            _getTile: function() {
                if (this.options.reuseTiles && this._unusedTiles.length > 0) {
                    var t = this._unusedTiles.pop();
                    return this._resetTile(t), t
                }
                return this._createTile()
            },
            _resetTile: function() {},
            _createTile: function() {
                var t = o.DomUtil.create("img", "leaflet-tile");
                return t.style.width = t.style.height = this._getTileSize() + "px", t.galleryimg = "no", t.onselectstart = t.onmousemove = o.Util.falseFn, o.Browser.ielt9 && this.options.opacity !== i && o.DomUtil.setOpacity(t, this.options.opacity), o.Browser.mobileWebkit3d && (t.style.WebkitBackfaceVisibility = "hidden"), t
            },
            _loadTile: function(t, e) {
                t._layer = this, t.onload = this._tileOnLoad, t.onerror = this._tileOnError, this._adjustTilePoint(e), t.src = this.getTileUrl(e), this.fire("tileloadstart", {
                    tile: t,
                    url: t.src
                })
            },
            _tileLoaded: function() {
                this._tilesToLoad--, this._animated && o.DomUtil.addClass(this._tileContainer, "leaflet-zoom-animated"), this._tilesToLoad || (this.fire("load"), this._animated && (clearTimeout(this._clearBgBufferTimer), this._clearBgBufferTimer = setTimeout(o.bind(this._clearBgBuffer, this), 500)))
            },
            _tileOnLoad: function() {
                var t = this._layer;
                this.src !== o.Util.emptyImageUrl && (o.DomUtil.addClass(this, "leaflet-tile-loaded"), t.fire("tileload", {
                    tile: this,
                    url: this.src
                })), t._tileLoaded()
            },
            _tileOnError: function() {
                var t = this._layer;
                t.fire("tileerror", {
                    tile: this,
                    url: this.src
                });
                var e = t.options.errorTileUrl;
                e && (this.src = e), t._tileLoaded()
            }
        }), o.tileLayer = function(t, e) {
            return new o.TileLayer(t, e)
        }, o.TileLayer.WMS = o.TileLayer.extend({
            defaultWmsParams: {
                service: "WMS",
                request: "GetMap",
                version: "1.1.1",
                layers: "",
                styles: "",
                format: "image/jpeg",
                transparent: !1
            },
            initialize: function(t, e) {
                this._url = t;
                var i = o.extend({}, this.defaultWmsParams),
                    n = e.tileSize || this.options.tileSize;
                i.width = i.height = e.detectRetina && o.Browser.retina ? 2 * n : n;
                for (var s in e) this.options.hasOwnProperty(s) || "crs" === s || (i[s] = e[s]);
                this.wmsParams = i, o.setOptions(this, e)
            },
            onAdd: function(t) {
                this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
                var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
                this.wmsParams[e] = this._crs.code, o.TileLayer.prototype.onAdd.call(this, t)
            },
            getTileUrl: function(t) {
                var e = this._map,
                    i = this.options.tileSize,
                    n = t.multiplyBy(i),
                    s = n.add([i, i]),
                    a = this._crs.project(e.unproject(n, t.z)),
                    r = this._crs.project(e.unproject(s, t.z)),
                    h = this._wmsVersion >= 1.3 && this._crs === o.CRS.EPSG4326 ? [r.y, a.x, a.y, r.x].join(",") : [a.x, r.y, r.x, a.y].join(","),
                    l = o.Util.template(this._url, {
                        s: this._getSubdomain(t)
                    });
                return l + o.Util.getParamString(this.wmsParams, l, !0) + "&BBOX=" + h
            },
            setParams: function(t, e) {
                return o.extend(this.wmsParams, t), e || this.redraw(), this
            }
        }), o.tileLayer.wms = function(t, e) {
            return new o.TileLayer.WMS(t, e)
        }, o.TileLayer.Canvas = o.TileLayer.extend({
            options: {
                async: !1
            },
            initialize: function(t) {
                o.setOptions(this, t)
            },
            redraw: function() {
                this._map && (this._reset({
                    hard: !0
                }), this._update());
                for (var t in this._tiles) this._redrawTile(this._tiles[t]);
                return this
            },
            _redrawTile: function(t) {
                this.drawTile(t, t._tilePoint, this._map._zoom)
            },
            _createTile: function() {
                var t = o.DomUtil.create("canvas", "leaflet-tile");
                return t.width = t.height = this.options.tileSize, t.onselectstart = t.onmousemove = o.Util.falseFn, t
            },
            _loadTile: function(t, e) {
                t._layer = this, t._tilePoint = e, this._redrawTile(t), this.options.async || this.tileDrawn(t)
            },
            drawTile: function() {},
            tileDrawn: function(t) {
                this._tileOnLoad.call(t)
            }
        }), o.tileLayer.canvas = function(t) {
            return new o.TileLayer.Canvas(t)
        }, o.ImageOverlay = o.Class.extend({
            includes: o.Mixin.Events,
            options: {
                opacity: 1
            },
            initialize: function(t, e, i) {
                this._url = t, this._bounds = o.latLngBounds(e), o.setOptions(this, i)
            },
            onAdd: function(t) {
                this._map = t, this._image || this._initImage(), t._panes.overlayPane.appendChild(this._image), t.on("viewreset", this._reset, this), t.options.zoomAnimation && o.Browser.any3d && t.on("zoomanim", this._animateZoom, this), this._reset()
            },
            onRemove: function(t) {
                t.getPanes().overlayPane.removeChild(this._image), t.off("viewreset", this._reset, this), t.options.zoomAnimation && t.off("zoomanim", this._animateZoom, this)
            },
            addTo: function(t) {
                return t.addLayer(this), this
            },
            setOpacity: function(t) {
                return this.options.opacity = t, this._updateOpacity(), this
            },
            bringToFront: function() {
                return this._image && this._map._panes.overlayPane.appendChild(this._image), this
            },
            bringToBack: function() {
                var t = this._map._panes.overlayPane;
                return this._image && t.insertBefore(this._image, t.firstChild), this
            },
            setUrl: function(t) {
                this._url = t, this._image.src = this._url
            },
            getAttribution: function() {
                return this.options.attribution
            },
            _initImage: function() {
                this._image = o.DomUtil.create("img", "leaflet-image-layer"), this._map.options.zoomAnimation && o.Browser.any3d ? o.DomUtil.addClass(this._image, "leaflet-zoom-animated") : o.DomUtil.addClass(this._image, "leaflet-zoom-hide"), this._updateOpacity(), o.extend(this._image, {
                    galleryimg: "no",
                    onselectstart: o.Util.falseFn,
                    onmousemove: o.Util.falseFn,
                    onload: o.bind(this._onImageLoad, this),
                    src: this._url
                })
            },
            _animateZoom: function(t) {
                var e = this._map,
                    i = this._image,
                    n = e.getZoomScale(t.zoom),
                    s = this._bounds.getNorthWest(),
                    a = this._bounds.getSouthEast(),
                    r = e._latLngToNewLayerPoint(s, t.zoom, t.center),
                    h = e._latLngToNewLayerPoint(a, t.zoom, t.center)._subtract(r),
                    l = r._add(h._multiplyBy(.5 * (1 - 1 / n)));
                i.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(l) + " scale(" + n + ") "
            },
            _reset: function() {
                var t = this._image,
                    e = this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
                    i = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);
                o.DomUtil.setPosition(t, e), t.style.width = i.x + "px", t.style.height = i.y + "px"
            },
            _onImageLoad: function() {
                this.fire("load")
            },
            _updateOpacity: function() {
                o.DomUtil.setOpacity(this._image, this.options.opacity)
            }
        }), o.imageOverlay = function(t, e, i) {
            return new o.ImageOverlay(t, e, i)
        }, o.Icon = o.Class.extend({
            options: {
                className: ""
            },
            initialize: function(t) {
                o.setOptions(this, t)
            },
            createIcon: function(t) {
                return this._createIcon("icon", t)
            },
            createShadow: function(t) {
                return this._createIcon("shadow", t)
            },
            _createIcon: function(t, e) {
                var i = this._getIconUrl(t);
                if (!i) {
                    if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                    return null
                }
                var n;
                return n = e && "IMG" === e.tagName ? this._createImg(i, e) : this._createImg(i), this._setIconStyles(n, t), n
            },
            _setIconStyles: function(t, e) {
                var i, n = this.options,
                    s = o.point(n[e + "Size"]);
                i = o.point("shadow" === e ? n.shadowAnchor || n.iconAnchor : n.iconAnchor), !i && s && (i = s.divideBy(2, !0)), t.className = "leaflet-marker-" + e + " " + n.className, i && (t.style.marginLeft = -i.x + "px", t.style.marginTop = -i.y + "px"), s && (t.style.width = s.x + "px", t.style.height = s.y + "px")
            },
            _createImg: function(t, i) {
                return i = i || e.createElement("img"), i.src = t, i
            },
            _getIconUrl: function(t) {
                return o.Browser.retina && this.options[t + "RetinaUrl"] ? this.options[t + "RetinaUrl"] : this.options[t + "Url"]
            }
        }), o.icon = function(t) {
            return new o.Icon(t)
        }, o.Icon.Default = o.Icon.extend({
            options: {
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            },
            _getIconUrl: function(t) {
                var e = t + "Url";
                if (this.options[e]) return this.options[e];
                o.Browser.retina && "icon" === t && (t += "-2x");
                var i = o.Icon.Default.imagePath;
                if (!i) throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");
                return i + "/marker-" + t + ".png"
            }
        }), o.Icon.Default.imagePath = function() {
            var t, i, n, o, s, a = e.getElementsByTagName("script"),
                r = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;
            for (t = 0, i = a.length; i > t; t++)
                if (n = a[t].src, o = n.match(r)) return s = n.split(r)[0], (s ? s + "/" : "") + "images"
        }(), o.Marker = o.Class.extend({
            includes: o.Mixin.Events,
            options: {
                icon: new o.Icon.Default,
                title: "",
                alt: "",
                clickable: !0,
                draggable: !1,
                keyboard: !0,
                zIndexOffset: 0,
                opacity: 1,
                riseOnHover: !1,
                riseOffset: 250
            },
            initialize: function(t, e) {
                o.setOptions(this, e), this._latlng = o.latLng(t)
            },
            onAdd: function(t) {
                this._map = t, t.on("viewreset", this.update, this), this._initIcon(), this.update(), this.fire("add"), t.options.zoomAnimation && t.options.markerZoomAnimation && t.on("zoomanim", this._animateZoom, this)
            },
            addTo: function(t) {
                return t.addLayer(this), this
            },
            onRemove: function(t) {
                this.dragging && this.dragging.disable(), this._removeIcon(), this._removeShadow(), this.fire("remove"), t.off({
                    viewreset: this.update,
                    zoomanim: this._animateZoom
                }, this), this._map = null
            },
            getLatLng: function() {
                return this._latlng
            },
            setLatLng: function(t) {
                return this._latlng = o.latLng(t), this.update(), this.fire("move", {
                    latlng: this._latlng
                })
            },
            setZIndexOffset: function(t) {
                return this.options.zIndexOffset = t, this.update(), this
            },
            setIcon: function(t) {
                return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup), this
            },
            update: function() {
                if (this._icon) {
                    var t = this._map.latLngToLayerPoint(this._latlng).round();
                    this._setPos(t)
                }
                return this
            },
            _initIcon: function() {
                var t = this.options,
                    e = this._map,
                    i = e.options.zoomAnimation && e.options.markerZoomAnimation,
                    n = i ? "leaflet-zoom-animated" : "leaflet-zoom-hide",
                    s = t.icon.createIcon(this._icon),
                    a = !1;
                s !== this._icon && (this._icon && this._removeIcon(), a = !0, t.title && (s.title = t.title), t.alt && (s.alt = t.alt)), o.DomUtil.addClass(s, n), t.keyboard && (s.tabIndex = "0"), this._icon = s, this._initInteraction(), t.riseOnHover && o.DomEvent.on(s, "mouseover", this._bringToFront, this).on(s, "mouseout", this._resetZIndex, this);
                var r = t.icon.createShadow(this._shadow),
                    h = !1;
                r !== this._shadow && (this._removeShadow(), h = !0), r && o.DomUtil.addClass(r, n), this._shadow = r, t.opacity < 1 && this._updateOpacity();
                var l = this._map._panes;
                a && l.markerPane.appendChild(this._icon), r && h && l.shadowPane.appendChild(this._shadow)
            },
            _removeIcon: function() {
                this.options.riseOnHover && o.DomEvent.off(this._icon, "mouseover", this._bringToFront).off(this._icon, "mouseout", this._resetZIndex), this._map._panes.markerPane.removeChild(this._icon), this._icon = null
            },
            _removeShadow: function() {
                this._shadow && this._map._panes.shadowPane.removeChild(this._shadow), this._shadow = null
            },
            _setPos: function(t) {
                o.DomUtil.setPosition(this._icon, t), this._shadow && o.DomUtil.setPosition(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
            },
            _updateZIndex: function(t) {
                this._icon.style.zIndex = this._zIndex + t
            },
            _animateZoom: function(t) {
                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                this._setPos(e)
            },
            _initInteraction: function() {
                if (this.options.clickable) {
                    var t = this._icon,
                        e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
                    o.DomUtil.addClass(t, "leaflet-clickable"), o.DomEvent.on(t, "click", this._onMouseClick, this), o.DomEvent.on(t, "keypress", this._onKeyPress, this);
                    for (var i = 0; i < e.length; i++) o.DomEvent.on(t, e[i], this._fireMouseEvent, this);
                    o.Handler.MarkerDrag && (this.dragging = new o.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable())
                }
            },
            _onMouseClick: function(t) {
                var e = this.dragging && this.dragging.moved();
                (this.hasEventListeners(t.type) || e) && o.DomEvent.stopPropagation(t), e || (this.dragging && this.dragging._enabled || !this._map.dragging || !this._map.dragging.moved()) && this.fire(t.type, {
                    originalEvent: t,
                    latlng: this._latlng
                })
            },
            _onKeyPress: function(t) {
                13 === t.keyCode && this.fire("click", {
                    originalEvent: t,
                    latlng: this._latlng
                })
            },
            _fireMouseEvent: function(t) {
                this.fire(t.type, {
                    originalEvent: t,
                    latlng: this._latlng
                }), "contextmenu" === t.type && this.hasEventListeners(t.type) && o.DomEvent.preventDefault(t), "mousedown" !== t.type ? o.DomEvent.stopPropagation(t) : o.DomEvent.preventDefault(t)
            },
            setOpacity: function(t) {
                return this.options.opacity = t, this._map && this._updateOpacity(), this
            },
            _updateOpacity: function() {
                o.DomUtil.setOpacity(this._icon, this.options.opacity), this._shadow && o.DomUtil.setOpacity(this._shadow, this.options.opacity)
            },
            _bringToFront: function() {
                this._updateZIndex(this.options.riseOffset)
            },
            _resetZIndex: function() {
                this._updateZIndex(0)
            }
        }), o.marker = function(t, e) {
            return new o.Marker(t, e)
        }, o.DivIcon = o.Icon.extend({
            options: {
                iconSize: [12, 12],
                className: "leaflet-div-icon",
                html: !1
            },
            createIcon: function(t) {
                var i = t && "DIV" === t.tagName ? t : e.createElement("div"),
                    n = this.options;
                return i.innerHTML = n.html !== !1 ? n.html : "", n.bgPos && (i.style.backgroundPosition = -n.bgPos.x + "px " + -n.bgPos.y + "px"), this._setIconStyles(i, "icon"), i
            },
            createShadow: function() {
                return null
            }
        }), o.divIcon = function(t) {
            return new o.DivIcon(t)
        }, o.Map.mergeOptions({
            closePopupOnClick: !0
        }), o.Popup = o.Class.extend({
            includes: o.Mixin.Events,
            options: {
                minWidth: 50,
                maxWidth: 300,
                autoPan: !0,
                closeButton: !0,
                offset: [0, 7],
                autoPanPadding: [5, 5],
                keepInView: !1,
                className: "",
                zoomAnimation: !0
            },
            initialize: function(t, e) {
                o.setOptions(this, t), this._source = e, this._animated = o.Browser.any3d && this.options.zoomAnimation, this._isOpen = !1
            },
            onAdd: function(t) {
                this._map = t, this._container || this._initLayout();
                var e = t.options.fadeAnimation;
                e && o.DomUtil.setOpacity(this._container, 0), t._panes.popupPane.appendChild(this._container), t.on(this._getEvents(), this), this.update(), e && o.DomUtil.setOpacity(this._container, 1), this.fire("open"), t.fire("popupopen", {
                    popup: this
                }), this._source && this._source.fire("popupopen", {
                    popup: this
                })
            },
            addTo: function(t) {
                return t.addLayer(this), this
            },
            openOn: function(t) {
                return t.openPopup(this), this
            },
            onRemove: function(t) {
                t._panes.popupPane.removeChild(this._container), o.Util.falseFn(this._container.offsetWidth), t.off(this._getEvents(), this), t.options.fadeAnimation && o.DomUtil.setOpacity(this._container, 0), this._map = null, this.fire("close"), t.fire("popupclose", {
                    popup: this
                }), this._source && this._source.fire("popupclose", {
                    popup: this
                })
            },
            getLatLng: function() {
                return this._latlng
            },
            setLatLng: function(t) {
                return this._latlng = o.latLng(t), this._map && (this._updatePosition(), this._adjustPan()), this
            },
            getContent: function() {
                return this._content
            },
            setContent: function(t) {
                return this._content = t, this.update(), this
            },
            update: function() {
                this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
            },
            _getEvents: function() {
                var t = {
                    viewreset: this._updatePosition
                };
                return this._animated && (t.zoomanim = this._zoomAnimation), ("closeOnClick" in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
            },
            _close: function() {
                this._map && this._map.closePopup(this)
            },
            _initLayout: function() {
                var t, e = "leaflet-popup",
                    i = e + " " + this.options.className + " leaflet-zoom-" + (this._animated ? "animated" : "hide"),
                    n = this._container = o.DomUtil.create("div", i);
                this.options.closeButton && (t = this._closeButton = o.DomUtil.create("a", e + "-close-button", n), t.href = "#close", t.innerHTML = "&#215;", o.DomEvent.disableClickPropagation(t), o.DomEvent.on(t, "click", this._onCloseButtonClick, this));
                var s = this._wrapper = o.DomUtil.create("div", e + "-content-wrapper", n);
                o.DomEvent.disableClickPropagation(s), this._contentNode = o.DomUtil.create("div", e + "-content", s), o.DomEvent.disableScrollPropagation(this._contentNode), o.DomEvent.on(s, "contextmenu", o.DomEvent.stopPropagation), this._tipContainer = o.DomUtil.create("div", e + "-tip-container", n), this._tip = o.DomUtil.create("div", e + "-tip", this._tipContainer)
            },
            _updateContent: function() {
                if (this._content) {
                    if ("string" == typeof this._content) this._contentNode.innerHTML = this._content;
                    else {
                        for (; this._contentNode.hasChildNodes();) this._contentNode.removeChild(this._contentNode.firstChild);
                        this._contentNode.appendChild(this._content)
                    }
                    this.fire("contentupdate")
                }
            },
            _updateLayout: function() {
                var t = this._contentNode,
                    e = t.style;
                e.width = "", e.whiteSpace = "nowrap";
                var i = t.offsetWidth;
                i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
                var n = t.offsetHeight,
                    s = this.options.maxHeight,
                    a = "leaflet-popup-scrolled";
                s && n > s ? (e.height = s + "px", o.DomUtil.addClass(t, a)) : o.DomUtil.removeClass(t, a), this._containerWidth = this._container.offsetWidth
            },
            _updatePosition: function() {
                if (this._map) {
                    var t = this._map.latLngToLayerPoint(this._latlng),
                        e = this._animated,
                        i = o.point(this.options.offset);
                    e && o.DomUtil.setPosition(this._container, t), this._containerBottom = -i.y - (e ? 0 : t.y), this._containerLeft = -Math.round(this._containerWidth / 2) + i.x + (e ? 0 : t.x), this._container.style.bottom = this._containerBottom + "px", this._container.style.left = this._containerLeft + "px"
                }
            },
            _zoomAnimation: function(t) {
                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                o.DomUtil.setPosition(this._container, e)
            },
            _adjustPan: function() {
                if (this.options.autoPan) {
                    var t = this._map,
                        e = this._container.offsetHeight,
                        i = this._containerWidth,
                        n = new o.Point(this._containerLeft, -e - this._containerBottom);
                    this._animated && n._add(o.DomUtil.getPosition(this._container));
                    var s = t.layerPointToContainerPoint(n),
                        a = o.point(this.options.autoPanPadding),
                        r = o.point(this.options.autoPanPaddingTopLeft || a),
                        h = o.point(this.options.autoPanPaddingBottomRight || a),
                        l = t.getSize(),
                        u = 0,
                        c = 0;
                    s.x + i + h.x > l.x && (u = s.x + i - l.x + h.x), s.x - u - r.x < 0 && (u = s.x - r.x), s.y + e + h.y > l.y && (c = s.y + e - l.y + h.y), s.y - c - r.y < 0 && (c = s.y - r.y), (u || c) && t.fire("autopanstart").panBy([u, c])
                }
            },
            _onCloseButtonClick: function(t) {
                this._close(), o.DomEvent.stop(t)
            }
        }), o.popup = function(t, e) {
            return new o.Popup(t, e)
        }, o.Map.include({
            openPopup: function(t, e, i) {
                if (this.closePopup(), !(t instanceof o.Popup)) {
                    var n = t;
                    t = new o.Popup(i).setLatLng(e).setContent(n)
                }
                return t._isOpen = !0, this._popup = t, this.addLayer(t)
            },
            closePopup: function(t) {
                return t && t !== this._popup || (t = this._popup, this._popup = null), t && (this.removeLayer(t), t._isOpen = !1), this
            }
        }), o.Marker.include({
            openPopup: function() {
                return this._popup && this._map && !this._map.hasLayer(this._popup) && (this._popup.setLatLng(this._latlng), this._map.openPopup(this._popup)), this
            },
            closePopup: function() {
                return this._popup && this._popup._close(), this
            },
            togglePopup: function() {
                return this._popup && (this._popup._isOpen ? this.closePopup() : this.openPopup()), this
            },
            bindPopup: function(t, e) {
                var i = o.point(this.options.icon.options.popupAnchor || [0, 0]);
                return i = i.add(o.Popup.prototype.options.offset), e && e.offset && (i = i.add(e.offset)), e = o.extend({
                    offset: i
                }, e), this._popupHandlersAdded || (this.on("click", this.togglePopup, this).on("remove", this.closePopup, this).on("move", this._movePopup, this), this._popupHandlersAdded = !0), t instanceof o.Popup ? (o.setOptions(t, e), this._popup = t) : this._popup = new o.Popup(e, this).setContent(t), this
            },
            setPopupContent: function(t) {
                return this._popup && this._popup.setContent(t), this
            },
            unbindPopup: function() {
                return this._popup && (this._popup = null, this.off("click", this.togglePopup, this).off("remove", this.closePopup, this).off("move", this._movePopup, this), this._popupHandlersAdded = !1), this
            },
            getPopup: function() {
                return this._popup
            },
            _movePopup: function(t) {
                this._popup.setLatLng(t.latlng)
            }
        }), o.LayerGroup = o.Class.extend({
            initialize: function(t) {
                this._layers = {};
                var e, i;
                if (t)
                    for (e = 0, i = t.length; i > e; e++) this.addLayer(t[e])
            },
            addLayer: function(t) {
                var e = this.getLayerId(t);
                return this._layers[e] = t, this._map && this._map.addLayer(t), this
            },
            removeLayer: function(t) {
                var e = t in this._layers ? t : this.getLayerId(t);
                return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
            },
            hasLayer: function(t) {
                return t ? t in this._layers || this.getLayerId(t) in this._layers : !1
            },
            clearLayers: function() {
                return this.eachLayer(this.removeLayer, this), this
            },
            invoke: function(t) {
                var e, i, n = Array.prototype.slice.call(arguments, 1);
                for (e in this._layers) i = this._layers[e], i[t] && i[t].apply(i, n);
                return this
            },
            onAdd: function(t) {
                this._map = t, this.eachLayer(t.addLayer, t)
            },
            onRemove: function(t) {
                this.eachLayer(t.removeLayer, t), this._map = null
            },
            addTo: function(t) {
                return t.addLayer(this), this
            },
            eachLayer: function(t, e) {
                for (var i in this._layers) t.call(e, this._layers[i]);
                return this
            },
            getLayer: function(t) {
                return this._layers[t]
            },
            getLayers: function() {
                var t = [];
                for (var e in this._layers) t.push(this._layers[e]);
                return t
            },
            setZIndex: function(t) {
                return this.invoke("setZIndex", t)
            },
            getLayerId: function(t) {
                return o.stamp(t)
            }
        }), o.layerGroup = function(t) {
            return new o.LayerGroup(t)
        }, o.FeatureGroup = o.LayerGroup.extend({
            includes: o.Mixin.Events,
            statics: {
                EVENTS: "click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"
            },
            addLayer: function(t) {
                return this.hasLayer(t) ? this : ("on" in t && t.on(o.FeatureGroup.EVENTS, this._propagateEvent, this), o.LayerGroup.prototype.addLayer.call(this, t), this._popupContent && t.bindPopup && t.bindPopup(this._popupContent, this._popupOptions), this.fire("layeradd", {
                    layer: t
                }))
            },
            removeLayer: function(t) {
                return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.off(o.FeatureGroup.EVENTS, this._propagateEvent, this), o.LayerGroup.prototype.removeLayer.call(this, t), this._popupContent && this.invoke("unbindPopup"), this.fire("layerremove", {
                    layer: t
                })) : this
            },
            bindPopup: function(t, e) {
                return this._popupContent = t, this._popupOptions = e, this.invoke("bindPopup", t, e)
            },
            openPopup: function(t) {
                for (var e in this._layers) {
                    this._layers[e].openPopup(t);
                    break
                }
                return this
            },
            setStyle: function(t) {
                return this.invoke("setStyle", t)
            },
            bringToFront: function() {
                return this.invoke("bringToFront")
            },
            bringToBack: function() {
                return this.invoke("bringToBack")
            },
            getBounds: function() {
                var t = new o.LatLngBounds;
                return this.eachLayer(function(e) {
                    t.extend(e instanceof o.Marker ? e.getLatLng() : e.getBounds())
                }), t
            },
            _propagateEvent: function(t) {
                t = o.extend({
                    layer: t.target,
                    target: this
                }, t), this.fire(t.type, t)
            }
        }), o.featureGroup = function(t) {
            return new o.FeatureGroup(t)
        }, o.Path = o.Class.extend({
            includes: [o.Mixin.Events],
            statics: {
                CLIP_PADDING: function() {
                    var e = o.Browser.mobile ? 1280 : 2e3,
                        i = (e / Math.max(t.outerWidth, t.outerHeight) - 1) / 2;
                    return Math.max(0, Math.min(.5, i))
                }()
            },
            options: {
                stroke: !0,
                color: "#0033ff",
                dashArray: null,
                lineCap: null,
                lineJoin: null,
                weight: 5,
                opacity: .5,
                fill: !1,
                fillColor: null,
                fillOpacity: .2,
                clickable: !0
            },
            initialize: function(t) {
                o.setOptions(this, t)
            },
            onAdd: function(t) {
                this._map = t, this._container || (this._initElements(), this._initEvents()), this.projectLatlngs(), this._updatePath(), this._container && this._map._pathRoot.appendChild(this._container), this.fire("add"), t.on({
                    viewreset: this.projectLatlngs,
                    moveend: this._updatePath
                }, this)
            },
            addTo: function(t) {
                return t.addLayer(this), this
            },
            onRemove: function(t) {
                t._pathRoot.removeChild(this._container), this.fire("remove"), this._map = null, o.Browser.vml && (this._container = null, this._stroke = null, this._fill = null), t.off({
                    viewreset: this.projectLatlngs,
                    moveend: this._updatePath
                }, this)
            },
            projectLatlngs: function() {},
            setStyle: function(t) {
                return o.setOptions(this, t), this._container && this._updateStyle(), this
            },
            redraw: function() {
                return this._map && (this.projectLatlngs(), this._updatePath()), this
            }
        }), o.Map.include({
            _updatePathViewport: function() {
                var t = o.Path.CLIP_PADDING,
                    e = this.getSize(),
                    i = o.DomUtil.getPosition(this._mapPane),
                    n = i.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()),
                    s = n.add(e.multiplyBy(1 + 2 * t)._round());
                this._pathViewport = new o.Bounds(n, s)
            }
        }), o.Path.SVG_NS = "http://www.w3.org/2000/svg", o.Browser.svg = !(!e.createElementNS || !e.createElementNS(o.Path.SVG_NS, "svg").createSVGRect), o.Path = o.Path.extend({
            statics: {
                SVG: o.Browser.svg
            },
            bringToFront: function() {
                var t = this._map._pathRoot,
                    e = this._container;
                return e && t.lastChild !== e && t.appendChild(e), this
            },
            bringToBack: function() {
                var t = this._map._pathRoot,
                    e = this._container,
                    i = t.firstChild;
                return e && i !== e && t.insertBefore(e, i), this
            },
            getPathString: function() {},
            _createElement: function(t) {
                return e.createElementNS(o.Path.SVG_NS, t)
            },
            _initElements: function() {
                this._map._initPathRoot(), this._initPath(), this._initStyle()
            },
            _initPath: function() {
                this._container = this._createElement("g"), this._path = this._createElement("path"), this.options.className && o.DomUtil.addClass(this._path, this.options.className), this._container.appendChild(this._path)
            },
            _initStyle: function() {
                this.options.stroke && (this._path.setAttribute("stroke-linejoin", "round"), this._path.setAttribute("stroke-linecap", "round")), this.options.fill && this._path.setAttribute("fill-rule", "evenodd"), this.options.pointerEvents && this._path.setAttribute("pointer-events", this.options.pointerEvents), this.options.clickable || this.options.pointerEvents || this._path.setAttribute("pointer-events", "none"), this._updateStyle()
            },
            _updateStyle: function() {
                this.options.stroke ? (this._path.setAttribute("stroke", this.options.color), this._path.setAttribute("stroke-opacity", this.options.opacity), this._path.setAttribute("stroke-width", this.options.weight), this.options.dashArray ? this._path.setAttribute("stroke-dasharray", this.options.dashArray) : this._path.removeAttribute("stroke-dasharray"), this.options.lineCap && this._path.setAttribute("stroke-linecap", this.options.lineCap), this.options.lineJoin && this._path.setAttribute("stroke-linejoin", this.options.lineJoin)) : this._path.setAttribute("stroke", "none"), this.options.fill ? (this._path.setAttribute("fill", this.options.fillColor || this.options.color), this._path.setAttribute("fill-opacity", this.options.fillOpacity)) : this._path.setAttribute("fill", "none")
            },
            _updatePath: function() {
                var t = this.getPathString();
                t || (t = "M0 0"), this._path.setAttribute("d", t)
            },
            _initEvents: function() {
                if (this.options.clickable) {
                    (o.Browser.svg || !o.Browser.vml) && o.DomUtil.addClass(this._path, "leaflet-clickable"), o.DomEvent.on(this._container, "click", this._onMouseClick, this);
                    for (var t = ["dblclick", "mousedown", "mouseover", "mouseout", "mousemove", "contextmenu"], e = 0; e < t.length; e++) o.DomEvent.on(this._container, t[e], this._fireMouseEvent, this)
                }
            },
            _onMouseClick: function(t) {
                this._map.dragging && this._map.dragging.moved() || this._fireMouseEvent(t)
            },
            _fireMouseEvent: function(t) {
                if (this.hasEventListeners(t.type)) {
                    var e = this._map,
                        i = e.mouseEventToContainerPoint(t),
                        n = e.containerPointToLayerPoint(i),
                        s = e.layerPointToLatLng(n);
                    this.fire(t.type, {
                        latlng: s,
                        layerPoint: n,
                        containerPoint: i,
                        originalEvent: t
                    }), "contextmenu" === t.type && o.DomEvent.preventDefault(t), "mousemove" !== t.type && o.DomEvent.stopPropagation(t)
                }
            }
        }), o.Map.include({
            _initPathRoot: function() {
                this._pathRoot || (this._pathRoot = o.Path.prototype._createElement("svg"), this._panes.overlayPane.appendChild(this._pathRoot), this.options.zoomAnimation && o.Browser.any3d ? (o.DomUtil.addClass(this._pathRoot, "leaflet-zoom-animated"), this.on({
                    zoomanim: this._animatePathZoom,
                    zoomend: this._endPathZoom
                })) : o.DomUtil.addClass(this._pathRoot, "leaflet-zoom-hide"), this.on("moveend", this._updateSvgViewport), this._updateSvgViewport())
            },
            _animatePathZoom: function(t) {
                var e = this.getZoomScale(t.zoom),
                    i = this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);
                this._pathRoot.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(i) + " scale(" + e + ") ", this._pathZooming = !0
            },
            _endPathZoom: function() {
                this._pathZooming = !1
            },
            _updateSvgViewport: function() {
                if (!this._pathZooming) {
                    this._updatePathViewport();
                    var t = this._pathViewport,
                        e = t.min,
                        i = t.max,
                        n = i.x - e.x,
                        s = i.y - e.y,
                        a = this._pathRoot,
                        r = this._panes.overlayPane;
                    o.Browser.mobileWebkit && r.removeChild(a), o.DomUtil.setPosition(a, e), a.setAttribute("width", n), a.setAttribute("height", s), a.setAttribute("viewBox", [e.x, e.y, n, s].join(" ")), o.Browser.mobileWebkit && r.appendChild(a)
                }
            }
        }), o.Path.include({
            bindPopup: function(t, e) {
                return t instanceof o.Popup ? this._popup = t : ((!this._popup || e) && (this._popup = new o.Popup(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on("click", this._openPopup, this).on("remove", this.closePopup, this), this._popupHandlersAdded = !0), this
            },
            unbindPopup: function() {
                return this._popup && (this._popup = null, this.off("click", this._openPopup).off("remove", this.closePopup), this._popupHandlersAdded = !1), this
            },
            openPopup: function(t) {
                return this._popup && (t = t || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)], this._openPopup({
                    latlng: t
                })), this
            },
            closePopup: function() {
                return this._popup && this._popup._close(), this
            },
            _openPopup: function(t) {
                this._popup.setLatLng(t.latlng), this._map.openPopup(this._popup)
            }
        }), o.Browser.vml = !o.Browser.svg && function() {
            try {
                var t = e.createElement("div");
                t.innerHTML = '<v:shape adj="1"/>';
                var i = t.firstChild;
                return i.style.behavior = "url(#default#VML)", i && "object" == typeof i.adj
            } catch (n) {
                return !1
            }
        }(), o.Path = o.Browser.svg || !o.Browser.vml ? o.Path : o.Path.extend({
            statics: {
                VML: !0,
                CLIP_PADDING: .02
            },
            _createElement: function() {
                try {
                    return e.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                        function(t) {
                            return e.createElement("<lvml:" + t + ' class="lvml">')
                        }
                } catch (t) {
                    return function(t) {
                        return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                    }
                }
            }(),
            _initPath: function() {
                var t = this._container = this._createElement("shape");
                o.DomUtil.addClass(t, "leaflet-vml-shape" + (this.options.className ? " " + this.options.className : "")), this.options.clickable && o.DomUtil.addClass(t, "leaflet-clickable"), t.coordsize = "1 1", this._path = this._createElement("path"), t.appendChild(this._path), this._map._pathRoot.appendChild(t)
            },
            _initStyle: function() {
                this._updateStyle()
            },
            _updateStyle: function() {
                var t = this._stroke,
                    e = this._fill,
                    i = this.options,
                    n = this._container;
                n.stroked = i.stroke, n.filled = i.fill, i.stroke ? (t || (t = this._stroke = this._createElement("stroke"), t.endcap = "round", n.appendChild(t)), t.weight = i.weight + "px", t.color = i.color, t.opacity = i.opacity, t.dashStyle = i.dashArray ? o.Util.isArray(i.dashArray) ? i.dashArray.join(" ") : i.dashArray.replace(/( *, *)/g, " ") : "", i.lineCap && (t.endcap = i.lineCap.replace("butt", "flat")), i.lineJoin && (t.joinstyle = i.lineJoin)) : t && (n.removeChild(t), this._stroke = null), i.fill ? (e || (e = this._fill = this._createElement("fill"), n.appendChild(e)), e.color = i.fillColor || i.color, e.opacity = i.fillOpacity) : e && (n.removeChild(e), this._fill = null)
            },
            _updatePath: function() {
                var t = this._container.style;
                t.display = "none", this._path.v = this.getPathString() + " ", t.display = ""
            }
        }), o.Map.include(o.Browser.svg || !o.Browser.vml ? {} : {
            _initPathRoot: function() {
                if (!this._pathRoot) {
                    var t = this._pathRoot = e.createElement("div");
                    t.className = "leaflet-vml-container", this._panes.overlayPane.appendChild(t), this.on("moveend", this._updatePathViewport), this._updatePathViewport()
                }
            }
        }), o.Browser.canvas = function() {
            return !!e.createElement("canvas").getContext
        }(), o.Path = o.Path.SVG && !t.L_PREFER_CANVAS || !o.Browser.canvas ? o.Path : o.Path.extend({
            statics: {
                CANVAS: !0,
                SVG: !1
            },
            redraw: function() {
                return this._map && (this.projectLatlngs(), this._requestUpdate()), this
            },
            setStyle: function(t) {
                return o.setOptions(this, t), this._map && (this._updateStyle(), this._requestUpdate()), this
            },
            onRemove: function(t) {
                t.off("viewreset", this.projectLatlngs, this).off("moveend", this._updatePath, this), this.options.clickable && (this._map.off("click", this._onClick, this), this._map.off("mousemove", this._onMouseMove, this)), this._requestUpdate(), this.fire("remove"), this._map = null
            },
            _requestUpdate: function() {
                this._map && !o.Path._updateRequest && (o.Path._updateRequest = o.Util.requestAnimFrame(this._fireMapMoveEnd, this._map))
            },
            _fireMapMoveEnd: function() {
                o.Path._updateRequest = null, this.fire("moveend")
            },
            _initElements: function() {
                this._map._initPathRoot(), this._ctx = this._map._canvasCtx
            },
            _updateStyle: function() {
                var t = this.options;
                t.stroke && (this._ctx.lineWidth = t.weight, this._ctx.strokeStyle = t.color), t.fill && (this._ctx.fillStyle = t.fillColor || t.color)
            },
            _drawPath: function() {
                var t, e, i, n, s, a;
                for (this._ctx.beginPath(), t = 0, i = this._parts.length; i > t; t++) {
                    for (e = 0, n = this._parts[t].length; n > e; e++) s = this._parts[t][e], a = (0 === e ? "move" : "line") + "To", this._ctx[a](s.x, s.y);
                    this instanceof o.Polygon && this._ctx.closePath()
                }
            },
            _checkIfEmpty: function() {
                return !this._parts.length
            },
            _updatePath: function() {
                if (!this._checkIfEmpty()) {
                    var t = this._ctx,
                        e = this.options;
                    this._drawPath(), t.save(), this._updateStyle(), e.fill && (t.globalAlpha = e.fillOpacity, t.fill()), e.stroke && (t.globalAlpha = e.opacity, t.stroke()), t.restore()
                }
            },
            _initEvents: function() {
                this.options.clickable && (this._map.on("mousemove", this._onMouseMove, this), this._map.on("click", this._onClick, this))
            },
            _onClick: function(t) {
                this._containsPoint(t.layerPoint) && this.fire("click", t)
            },
            _onMouseMove: function(t) {
                this._map && !this._map._animatingZoom && (this._containsPoint(t.layerPoint) ? (this._ctx.canvas.style.cursor = "pointer", this._mouseInside = !0, this.fire("mouseover", t)) : this._mouseInside && (this._ctx.canvas.style.cursor = "", this._mouseInside = !1, this.fire("mouseout", t)))
            }
        }), o.Map.include(o.Path.SVG && !t.L_PREFER_CANVAS || !o.Browser.canvas ? {} : {
            _initPathRoot: function() {
                var t, i = this._pathRoot;
                i || (i = this._pathRoot = e.createElement("canvas"), i.style.position = "absolute", t = this._canvasCtx = i.getContext("2d"), t.lineCap = "round", t.lineJoin = "round", this._panes.overlayPane.appendChild(i), this.options.zoomAnimation && (this._pathRoot.className = "leaflet-zoom-animated", this.on("zoomanim", this._animatePathZoom), this.on("zoomend", this._endPathZoom)), this.on("moveend", this._updateCanvasViewport), this._updateCanvasViewport())
            },
            _updateCanvasViewport: function() {
                if (!this._pathZooming) {
                    this._updatePathViewport();
                    var t = this._pathViewport,
                        e = t.min,
                        i = t.max.subtract(e),
                        n = this._pathRoot;
                    o.DomUtil.setPosition(n, e), n.width = i.x, n.height = i.y, n.getContext("2d").translate(-e.x, -e.y)
                }
            }
        }), o.LineUtil = {
            simplify: function(t, e) {
                if (!e || !t.length) return t.slice();
                var i = e * e;
                return t = this._reducePoints(t, i), t = this._simplifyDP(t, i)
            },
            pointToSegmentDistance: function(t, e, i) {
                return Math.sqrt(this._sqClosestPointOnSegment(t, e, i, !0))
            },
            closestPointOnSegment: function(t, e, i) {
                return this._sqClosestPointOnSegment(t, e, i)
            },
            _simplifyDP: function(t, e) {
                var n = t.length,
                    o = typeof Uint8Array != i + "" ? Uint8Array : Array,
                    s = new o(n);
                s[0] = s[n - 1] = 1, this._simplifyDPStep(t, s, e, 0, n - 1);
                var a, r = [];
                for (a = 0; n > a; a++) s[a] && r.push(t[a]);
                return r
            },
            _simplifyDPStep: function(t, e, i, n, o) {
                var s, a, r, h = 0;
                for (a = n + 1; o - 1 >= a; a++) r = this._sqClosestPointOnSegment(t[a], t[n], t[o], !0), r > h && (s = a, h = r);
                h > i && (e[s] = 1, this._simplifyDPStep(t, e, i, n, s), this._simplifyDPStep(t, e, i, s, o))
            },
            _reducePoints: function(t, e) {
                for (var i = [t[0]], n = 1, o = 0, s = t.length; s > n; n++) this._sqDist(t[n], t[o]) > e && (i.push(t[n]), o = n);
                return s - 1 > o && i.push(t[s - 1]), i
            },
            clipSegment: function(t, e, i, n) {
                var o, s, a, r = n ? this._lastCode : this._getBitCode(t, i),
                    h = this._getBitCode(e, i);
                for (this._lastCode = h;;) {
                    if (!(r | h)) return [t, e];
                    if (r & h) return !1;
                    o = r || h, s = this._getEdgeIntersection(t, e, o, i), a = this._getBitCode(s, i), o === r ? (t = s, r = a) : (e = s, h = a)
                }
            },
            _getEdgeIntersection: function(t, e, i, n) {
                var s = e.x - t.x,
                    a = e.y - t.y,
                    r = n.min,
                    h = n.max;
                return 8 & i ? new o.Point(t.x + s * (h.y - t.y) / a, h.y) : 4 & i ? new o.Point(t.x + s * (r.y - t.y) / a, r.y) : 2 & i ? new o.Point(h.x, t.y + a * (h.x - t.x) / s) : 1 & i ? new o.Point(r.x, t.y + a * (r.x - t.x) / s) : void 0
            },
            _getBitCode: function(t, e) {
                var i = 0;
                return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i
            },
            _sqDist: function(t, e) {
                var i = e.x - t.x,
                    n = e.y - t.y;
                return i * i + n * n
            },
            _sqClosestPointOnSegment: function(t, e, i, n) {
                var s, a = e.x,
                    r = e.y,
                    h = i.x - a,
                    l = i.y - r,
                    u = h * h + l * l;
                return u > 0 && (s = ((t.x - a) * h + (t.y - r) * l) / u, s > 1 ? (a = i.x, r = i.y) : s > 0 && (a += h * s, r += l * s)), h = t.x - a, l = t.y - r, n ? h * h + l * l : new o.Point(a, r)
            }
        }, o.Polyline = o.Path.extend({
            initialize: function(t, e) {
                o.Path.prototype.initialize.call(this, e), this._latlngs = this._convertLatLngs(t)
            },
            options: {
                smoothFactor: 1,
                noClip: !1
            },
            projectLatlngs: function() {
                this._originalPoints = [];
                for (var t = 0, e = this._latlngs.length; e > t; t++) this._originalPoints[t] = this._map.latLngToLayerPoint(this._latlngs[t])
            },
            getPathString: function() {
                for (var t = 0, e = this._parts.length, i = ""; e > t; t++) i += this._getPathPartStr(this._parts[t]);
                return i
            },
            getLatLngs: function() {
                return this._latlngs
            },
            setLatLngs: function(t) {
                return this._latlngs = this._convertLatLngs(t), this.redraw()
            },
            addLatLng: function(t) {
                return this._latlngs.push(o.latLng(t)), this.redraw()
            },
            spliceLatLngs: function() {
                var t = [].splice.apply(this._latlngs, arguments);
                return this._convertLatLngs(this._latlngs, !0), this.redraw(), t
            },
            closestLayerPoint: function(t) {
                for (var e, i, n = 1 / 0, s = this._parts, a = null, r = 0, h = s.length; h > r; r++)
                    for (var l = s[r], u = 1, c = l.length; c > u; u++) {
                        e = l[u - 1], i = l[u];
                        var d = o.LineUtil._sqClosestPointOnSegment(t, e, i, !0);
                        n > d && (n = d, a = o.LineUtil._sqClosestPointOnSegment(t, e, i))
                    }
                return a && (a.distance = Math.sqrt(n)), a
            },
            getBounds: function() {
                return new o.LatLngBounds(this.getLatLngs())
            },
            _convertLatLngs: function(t, e) {
                var i, n, s = e ? t : [];
                for (i = 0, n = t.length; n > i; i++) {
                    if (o.Util.isArray(t[i]) && "number" != typeof t[i][0]) return;
                    s[i] = o.latLng(t[i])
                }
                return s
            },
            _initEvents: function() {
                o.Path.prototype._initEvents.call(this)
            },
            _getPathPartStr: function(t) {
                for (var e, i = o.Path.VML, n = 0, s = t.length, a = ""; s > n; n++) e = t[n], i && e._round(), a += (n ? "L" : "M") + e.x + " " + e.y;
                return a
            },
            _clipPoints: function() {
                var t, e, i, n = this._originalPoints,
                    s = n.length;
                if (this.options.noClip) return void(this._parts = [n]);
                this._parts = [];
                var a = this._parts,
                    r = this._map._pathViewport,
                    h = o.LineUtil;
                for (t = 0, e = 0; s - 1 > t; t++) i = h.clipSegment(n[t], n[t + 1], r, t), i && (a[e] = a[e] || [], a[e].push(i[0]), (i[1] !== n[t + 1] || t === s - 2) && (a[e].push(i[1]), e++))
            },
            _simplifyPoints: function() {
                for (var t = this._parts, e = o.LineUtil, i = 0, n = t.length; n > i; i++) t[i] = e.simplify(t[i], this.options.smoothFactor)
            },
            _updatePath: function() {
                this._map && (this._clipPoints(), this._simplifyPoints(), o.Path.prototype._updatePath.call(this))
            }
        }), o.polyline = function(t, e) {
            return new o.Polyline(t, e)
        }, o.PolyUtil = {}, o.PolyUtil.clipPolygon = function(t, e) {
            var i, n, s, a, r, h, l, u, c, d = [1, 4, 2, 8],
                p = o.LineUtil;
            for (n = 0, l = t.length; l > n; n++) t[n]._code = p._getBitCode(t[n], e);
            for (a = 0; 4 > a; a++) {
                for (u = d[a], i = [], n = 0, l = t.length, s = l - 1; l > n; s = n++) r = t[n], h = t[s], r._code & u ? h._code & u || (c = p._getEdgeIntersection(h, r, u, e), c._code = p._getBitCode(c, e), i.push(c)) : (h._code & u && (c = p._getEdgeIntersection(h, r, u, e), c._code = p._getBitCode(c, e), i.push(c)), i.push(r));
                t = i
            }
            return t
        }, o.Polygon = o.Polyline.extend({
            options: {
                fill: !0
            },
            initialize: function(t, e) {
                o.Polyline.prototype.initialize.call(this, t, e), this._initWithHoles(t)
            },
            _initWithHoles: function(t) {
                var e, i, n;
                if (t && o.Util.isArray(t[0]) && "number" != typeof t[0][0])
                    for (this._latlngs = this._convertLatLngs(t[0]), this._holes = t.slice(1), e = 0, i = this._holes.length; i > e; e++) n = this._holes[e] = this._convertLatLngs(this._holes[e]), n[0].equals(n[n.length - 1]) && n.pop();
                t = this._latlngs, t.length >= 2 && t[0].equals(t[t.length - 1]) && t.pop()
            },
            projectLatlngs: function() {
                if (o.Polyline.prototype.projectLatlngs.call(this), this._holePoints = [], this._holes) {
                    var t, e, i, n;
                    for (t = 0, i = this._holes.length; i > t; t++)
                        for (this._holePoints[t] = [], e = 0, n = this._holes[t].length; n > e; e++) this._holePoints[t][e] = this._map.latLngToLayerPoint(this._holes[t][e])
                }
            },
            setLatLngs: function(t) {
                return t && o.Util.isArray(t[0]) && "number" != typeof t[0][0] ? (this._initWithHoles(t), this.redraw()) : o.Polyline.prototype.setLatLngs.call(this, t)
            },
            _clipPoints: function() {
                var t = this._originalPoints,
                    e = [];
                if (this._parts = [t].concat(this._holePoints), !this.options.noClip) {
                    for (var i = 0, n = this._parts.length; n > i; i++) {
                        var s = o.PolyUtil.clipPolygon(this._parts[i], this._map._pathViewport);
                        s.length && e.push(s)
                    }
                    this._parts = e
                }
            },
            _getPathPartStr: function(t) {
                var e = o.Polyline.prototype._getPathPartStr.call(this, t);
                return e + (o.Browser.svg ? "z" : "x")
            }
        }), o.polygon = function(t, e) {
            return new o.Polygon(t, e)
        },
        function() {
            function t(t) {
                return o.FeatureGroup.extend({
                    initialize: function(t, e) {
                        this._layers = {}, this._options = e, this.setLatLngs(t)
                    },
                    setLatLngs: function(e) {
                        var i = 0,
                            n = e.length;
                        for (this.eachLayer(function(t) {
                                n > i ? t.setLatLngs(e[i++]) : this.removeLayer(t)
                            }, this); n > i;) this.addLayer(new t(e[i++], this._options));
                        return this
                    },
                    getLatLngs: function() {
                        var t = [];
                        return this.eachLayer(function(e) {
                            t.push(e.getLatLngs())
                        }), t
                    }
                })
            }
            o.MultiPolyline = t(o.Polyline), o.MultiPolygon = t(o.Polygon), o.multiPolyline = function(t, e) {
                return new o.MultiPolyline(t, e)
            }, o.multiPolygon = function(t, e) {
                return new o.MultiPolygon(t, e)
            }
        }(), o.Rectangle = o.Polygon.extend({
            initialize: function(t, e) {
                o.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
            },
            setBounds: function(t) {
                this.setLatLngs(this._boundsToLatLngs(t))
            },
            _boundsToLatLngs: function(t) {
                return t = o.latLngBounds(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
            }
        }), o.rectangle = function(t, e) {
            return new o.Rectangle(t, e)
        }, o.Circle = o.Path.extend({
            initialize: function(t, e, i) {
                o.Path.prototype.initialize.call(this, i), this._latlng = o.latLng(t), this._mRadius = e
            },
            options: {
                fill: !0
            },
            setLatLng: function(t) {
                return this._latlng = o.latLng(t), this.redraw()
            },
            setRadius: function(t) {
                return this._mRadius = t, this.redraw()
            },
            projectLatlngs: function() {
                var t = this._getLngRadius(),
                    e = this._latlng,
                    i = this._map.latLngToLayerPoint([e.lat, e.lng - t]);
                this._point = this._map.latLngToLayerPoint(e), this._radius = Math.max(this._point.x - i.x, 1)
            },
            getBounds: function() {
                var t = this._getLngRadius(),
                    e = this._mRadius / 40075017 * 360,
                    i = this._latlng;
                return new o.LatLngBounds([i.lat - e, i.lng - t], [i.lat + e, i.lng + t])
            },
            getLatLng: function() {
                return this._latlng
            },
            getPathString: function() {
                var t = this._point,
                    e = this._radius;
                return this._checkIfEmpty() ? "" : o.Browser.svg ? "M" + t.x + "," + (t.y - e) + "A" + e + "," + e + ",0,1,1," + (t.x - .1) + "," + (t.y - e) + " z" : (t._round(), e = Math.round(e), "AL " + t.x + "," + t.y + " " + e + "," + e + " 0,23592600")
            },
            getRadius: function() {
                return this._mRadius
            },
            _getLatRadius: function() {
                return this._mRadius / 40075017 * 360
            },
            _getLngRadius: function() {
                return this._getLatRadius() / Math.cos(o.LatLng.DEG_TO_RAD * this._latlng.lat)
            },
            _checkIfEmpty: function() {
                if (!this._map) return !1;
                var t = this._map._pathViewport,
                    e = this._radius,
                    i = this._point;
                return i.x - e > t.max.x || i.y - e > t.max.y || i.x + e < t.min.x || i.y + e < t.min.y
            }
        }), o.circle = function(t, e, i) {
            return new o.Circle(t, e, i)
        }, o.CircleMarker = o.Circle.extend({
            options: {
                radius: 10,
                weight: 2
            },
            initialize: function(t, e) {
                o.Circle.prototype.initialize.call(this, t, null, e), this._radius = this.options.radius
            },
            projectLatlngs: function() {
                this._point = this._map.latLngToLayerPoint(this._latlng)
            },
            _updateStyle: function() {
                o.Circle.prototype._updateStyle.call(this), this.setRadius(this.options.radius)
            },
            setLatLng: function(t) {
                return o.Circle.prototype.setLatLng.call(this, t), this._popup && this._popup._isOpen && this._popup.setLatLng(t), this
            },
            setRadius: function(t) {
                return this.options.radius = this._radius = t, this.redraw()
            },
            getRadius: function() {
                return this._radius
            }
        }), o.circleMarker = function(t, e) {
            return new o.CircleMarker(t, e)
        }, o.Polyline.include(o.Path.CANVAS ? {
            _containsPoint: function(t, e) {
                var i, n, s, a, r, h, l, u = this.options.weight / 2;
                for (o.Browser.touch && (u += 10), i = 0, a = this._parts.length; a > i; i++)
                    for (l = this._parts[i], n = 0, r = l.length, s = r - 1; r > n; s = n++)
                        if ((e || 0 !== n) && (h = o.LineUtil.pointToSegmentDistance(t, l[s], l[n]), u >= h)) return !0;
                return !1
            }
        } : {}), o.Polygon.include(o.Path.CANVAS ? {
            _containsPoint: function(t) {
                var e, i, n, s, a, r, h, l, u = !1;
                if (o.Polyline.prototype._containsPoint.call(this, t, !0)) return !0;
                for (s = 0, h = this._parts.length; h > s; s++)
                    for (e = this._parts[s], a = 0, l = e.length, r = l - 1; l > a; r = a++) i = e[a], n = e[r], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (u = !u);
                return u
            }
        } : {}), o.Circle.include(o.Path.CANVAS ? {
            _drawPath: function() {
                var t = this._point;
                this._ctx.beginPath(), this._ctx.arc(t.x, t.y, this._radius, 0, 2 * Math.PI, !1)
            },
            _containsPoint: function(t) {
                var e = this._point,
                    i = this.options.stroke ? this.options.weight / 2 : 0;
                return t.distanceTo(e) <= this._radius + i
            }
        } : {}), o.CircleMarker.include(o.Path.CANVAS ? {
            _updateStyle: function() {
                o.Path.prototype._updateStyle.call(this)
            }
        } : {}), o.GeoJSON = o.FeatureGroup.extend({
            initialize: function(t, e) {
                o.setOptions(this, e), this._layers = {}, t && this.addData(t)
            },
            addData: function(t) {
                var e, i, n, s = o.Util.isArray(t) ? t : t.features;
                if (s) {
                    for (e = 0, i = s.length; i > e; e++) n = s[e], (n.geometries || n.geometry || n.features || n.coordinates) && this.addData(s[e]);
                    return this
                }
                var a = this.options;
                if (!a.filter || a.filter(t)) {
                    var r = o.GeoJSON.geometryToLayer(t, a.pointToLayer, a.coordsToLatLng, a);
                    return r.feature = o.GeoJSON.asFeature(t), r.defaultOptions = r.options, this.resetStyle(r), a.onEachFeature && a.onEachFeature(t, r), this.addLayer(r)
                }
            },
            resetStyle: function(t) {
                var e = this.options.style;
                e && (o.Util.extend(t.options, t.defaultOptions), this._setLayerStyle(t, e))
            },
            setStyle: function(t) {
                this.eachLayer(function(e) {
                    this._setLayerStyle(e, t)
                }, this)
            },
            _setLayerStyle: function(t, e) {
                "function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e)
            }
        }), o.extend(o.GeoJSON, {
            geometryToLayer: function(t, e, i, n) {
                var s, a, r, h, l = "Feature" === t.type ? t.geometry : t,
                    u = l.coordinates,
                    c = [];
                switch (i = i || this.coordsToLatLng, l.type) {
                    case "Point":
                        return s = i(u), e ? e(t, s) : new o.Marker(s);
                    case "MultiPoint":
                        for (r = 0, h = u.length; h > r; r++) s = i(u[r]), c.push(e ? e(t, s) : new o.Marker(s));
                        return new o.FeatureGroup(c);
                    case "LineString":
                        return a = this.coordsToLatLngs(u, 0, i), new o.Polyline(a, n);
                    case "Polygon":
                        if (2 === u.length && !u[1].length) throw new Error("Invalid GeoJSON object.");
                        return a = this.coordsToLatLngs(u, 1, i), new o.Polygon(a, n);
                    case "MultiLineString":
                        return a = this.coordsToLatLngs(u, 1, i), new o.MultiPolyline(a, n);
                    case "MultiPolygon":
                        return a = this.coordsToLatLngs(u, 2, i), new o.MultiPolygon(a, n);
                    case "GeometryCollection":
                        for (r = 0, h = l.geometries.length; h > r; r++) c.push(this.geometryToLayer({
                            geometry: l.geometries[r],
                            type: "Feature",
                            properties: t.properties
                        }, e, i, n));
                        return new o.FeatureGroup(c);
                    default:
                        throw new Error("Invalid GeoJSON object.")
                }
            },
            coordsToLatLng: function(t) {
                return new o.LatLng(t[1], t[0], t[2])
            },
            coordsToLatLngs: function(t, e, i) {
                var n, o, s, a = [];
                for (o = 0, s = t.length; s > o; o++) n = e ? this.coordsToLatLngs(t[o], e - 1, i) : (i || this.coordsToLatLng)(t[o]), a.push(n);
                return a
            },
            latLngToCoords: function(t) {
                var e = [t.lng, t.lat];
                return t.alt !== i && e.push(t.alt), e
            },
            latLngsToCoords: function(t) {
                for (var e = [], i = 0, n = t.length; n > i; i++) e.push(o.GeoJSON.latLngToCoords(t[i]));
                return e
            },
            getFeature: function(t, e) {
                return t.feature ? o.extend({}, t.feature, {
                    geometry: e
                }) : o.GeoJSON.asFeature(e)
            },
            asFeature: function(t) {
                return "Feature" === t.type ? t : {
                    type: "Feature",
                    properties: {},
                    geometry: t
                }
            }
        });
    var a = {
        toGeoJSON: function() {
            return o.GeoJSON.getFeature(this, {
                type: "Point",
                coordinates: o.GeoJSON.latLngToCoords(this.getLatLng())
            })
        }
    };
    o.Marker.include(a), o.Circle.include(a), o.CircleMarker.include(a), o.Polyline.include({
            toGeoJSON: function() {
                return o.GeoJSON.getFeature(this, {
                    type: "LineString",
                    coordinates: o.GeoJSON.latLngsToCoords(this.getLatLngs())
                })
            }
        }), o.Polygon.include({
            toGeoJSON: function() {
                var t, e, i, n = [o.GeoJSON.latLngsToCoords(this.getLatLngs())];
                if (n[0].push(n[0][0]), this._holes)
                    for (t = 0, e = this._holes.length; e > t; t++) i = o.GeoJSON.latLngsToCoords(this._holes[t]), i.push(i[0]), n.push(i);
                return o.GeoJSON.getFeature(this, {
                    type: "Polygon",
                    coordinates: n
                })
            }
        }),
        function() {
            function t(t) {
                return function() {
                    var e = [];
                    return this.eachLayer(function(t) {
                        e.push(t.toGeoJSON().geometry.coordinates)
                    }), o.GeoJSON.getFeature(this, {
                        type: t,
                        coordinates: e
                    })
                }
            }
            o.MultiPolyline.include({
                toGeoJSON: t("MultiLineString")
            }), o.MultiPolygon.include({
                toGeoJSON: t("MultiPolygon")
            }), o.LayerGroup.include({
                toGeoJSON: function() {
                    var e, i = this.feature && this.feature.geometry,
                        n = [];
                    if (i && "MultiPoint" === i.type) return t("MultiPoint").call(this);
                    var s = i && "GeometryCollection" === i.type;
                    return this.eachLayer(function(t) {
                        t.toGeoJSON && (e = t.toGeoJSON(), n.push(s ? e.geometry : o.GeoJSON.asFeature(e)))
                    }), s ? o.GeoJSON.getFeature(this, {
                        geometries: n,
                        type: "GeometryCollection"
                    }) : {
                        type: "FeatureCollection",
                        features: n
                    }
                }
            })
        }(), o.geoJson = function(t, e) {
            return new o.GeoJSON(t, e)
        }, o.DomEvent = {
            addListener: function(t, e, i, n) {
                var s, a, r, h = o.stamp(i),
                    l = "_leaflet_" + e + h;
                return t[l] ? this : (s = function(e) {
                    return i.call(n || t, e || o.DomEvent._getEvent())
                }, o.Browser.pointer && 0 === e.indexOf("touch") ? this.addPointerListener(t, e, s, h) : (o.Browser.touch && "dblclick" === e && this.addDoubleTapListener && this.addDoubleTapListener(t, s, h), "addEventListener" in t ? "mousewheel" === e ? (t.addEventListener("DOMMouseScroll", s, !1), t.addEventListener(e, s, !1)) : "mouseenter" === e || "mouseleave" === e ? (a = s, r = "mouseenter" === e ? "mouseover" : "mouseout", s = function(e) {
                    return o.DomEvent._checkMouse(t, e) ? a(e) : void 0
                }, t.addEventListener(r, s, !1)) : "click" === e && o.Browser.android ? (a = s, s = function(t) {
                    return o.DomEvent._filterClick(t, a)
                }, t.addEventListener(e, s, !1)) : t.addEventListener(e, s, !1) : "attachEvent" in t && t.attachEvent("on" + e, s), t[l] = s, this))
            },
            removeListener: function(t, e, i) {
                var n = o.stamp(i),
                    s = "_leaflet_" + e + n,
                    a = t[s];
                return a ? (o.Browser.pointer && 0 === e.indexOf("touch") ? this.removePointerListener(t, e, n) : o.Browser.touch && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, n) : "removeEventListener" in t ? "mousewheel" === e ? (t.removeEventListener("DOMMouseScroll", a, !1), t.removeEventListener(e, a, !1)) : "mouseenter" === e || "mouseleave" === e ? t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseout", a, !1) : t.removeEventListener(e, a, !1) : "detachEvent" in t && t.detachEvent("on" + e, a), t[s] = null, this) : this
            },
            stopPropagation: function(t) {
                return t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, o.DomEvent._skipped(t), this
            },
            disableScrollPropagation: function(t) {
                var e = o.DomEvent.stopPropagation;
                return o.DomEvent.on(t, "mousewheel", e).on(t, "MozMousePixelScroll", e)
            },
            disableClickPropagation: function(t) {
                for (var e = o.DomEvent.stopPropagation, i = o.Draggable.START.length - 1; i >= 0; i--) o.DomEvent.on(t, o.Draggable.START[i], e);
                return o.DomEvent.on(t, "click", o.DomEvent._fakeStop).on(t, "dblclick", e)
            },
            preventDefault: function(t) {
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
            },
            stop: function(t) {
                return o.DomEvent.preventDefault(t).stopPropagation(t)
            },
            getMousePosition: function(t, e) {
                if (!e) return new o.Point(t.clientX, t.clientY);
                var i = e.getBoundingClientRect();
                return new o.Point(t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop)
            },
            getWheelDelta: function(t) {
                var e = 0;
                return t.wheelDelta && (e = t.wheelDelta / 120), t.detail && (e = -t.detail / 3), e
            },
            _skipEvents: {},
            _fakeStop: function(t) {
                o.DomEvent._skipEvents[t.type] = !0
            },
            _skipped: function(t) {
                var e = this._skipEvents[t.type];
                return this._skipEvents[t.type] = !1, e
            },
            _checkMouse: function(t, e) {
                var i = e.relatedTarget;
                if (!i) return !0;
                try {
                    for (; i && i !== t;) i = i.parentNode
                } catch (n) {
                    return !1
                }
                return i !== t
            },
            _getEvent: function() {
                var e = t.event;
                if (!e)
                    for (var i = arguments.callee.caller; i && (e = i.arguments[0], !e || t.Event !== e.constructor);) i = i.caller;
                return e
            },
            _filterClick: function(t, e) {
                var i = t.timeStamp || t.originalEvent.timeStamp,
                    n = o.DomEvent._lastClick && i - o.DomEvent._lastClick;
                return n && n > 100 && 500 > n || t.target._simulatedClick && !t._simulated ? void o.DomEvent.stop(t) : (o.DomEvent._lastClick = i, e(t))
            }
        }, o.DomEvent.on = o.DomEvent.addListener, o.DomEvent.off = o.DomEvent.removeListener, o.Draggable = o.Class.extend({
            includes: o.Mixin.Events,
            statics: {
                START: o.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
                END: {
                    mousedown: "mouseup",
                    touchstart: "touchend",
                    pointerdown: "touchend",
                    MSPointerDown: "touchend"
                },
                MOVE: {
                    mousedown: "mousemove",
                    touchstart: "touchmove",
                    pointerdown: "touchmove",
                    MSPointerDown: "touchmove"
                }
            },
            initialize: function(t, e) {
                this._element = t, this._dragStartTarget = e || t
            },
            enable: function() {
                if (!this._enabled) {
                    for (var t = o.Draggable.START.length - 1; t >= 0; t--) o.DomEvent.on(this._dragStartTarget, o.Draggable.START[t], this._onDown, this);
                    this._enabled = !0
                }
            },
            disable: function() {
                if (this._enabled) {
                    for (var t = o.Draggable.START.length - 1; t >= 0; t--) o.DomEvent.off(this._dragStartTarget, o.Draggable.START[t], this._onDown, this);
                    this._enabled = !1, this._moved = !1
                }
            },
            _onDown: function(t) {
                if (this._moved = !1, !(t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (o.DomEvent.stopPropagation(t), o.Draggable._disabled || (o.DomUtil.disableImageDrag(), o.DomUtil.disableTextSelection(), this._moving)))) {
                    var i = t.touches ? t.touches[0] : t;
                    this._startPoint = new o.Point(i.clientX, i.clientY), this._startPos = this._newPos = o.DomUtil.getPosition(this._element), o.DomEvent.on(e, o.Draggable.MOVE[t.type], this._onMove, this).on(e, o.Draggable.END[t.type], this._onUp, this)
                }
            },
            _onMove: function(t) {
                if (t.touches && t.touches.length > 1) return void(this._moved = !0);
                var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                    n = new o.Point(i.clientX, i.clientY),
                    s = n.subtract(this._startPoint);
                (s.x || s.y) && (o.Browser.touch && Math.abs(s.x) + Math.abs(s.y) < 3 || (o.DomEvent.preventDefault(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = o.DomUtil.getPosition(this._element).subtract(s), o.DomUtil.addClass(e.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, o.DomUtil.addClass(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(s), this._moving = !0, o.Util.cancelAnimFrame(this._animRequest), this._animRequest = o.Util.requestAnimFrame(this._updatePosition, this, !0, this._dragStartTarget)))
            },
            _updatePosition: function() {
                this.fire("predrag"), o.DomUtil.setPosition(this._element, this._newPos), this.fire("drag")
            },
            _onUp: function() {
                o.DomUtil.removeClass(e.body, "leaflet-dragging"), this._lastTarget && (o.DomUtil.removeClass(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null);
                for (var t in o.Draggable.MOVE) o.DomEvent.off(e, o.Draggable.MOVE[t], this._onMove).off(e, o.Draggable.END[t], this._onUp);
                o.DomUtil.enableImageDrag(), o.DomUtil.enableTextSelection(), this._moved && this._moving && (o.Util.cancelAnimFrame(this._animRequest), this.fire("dragend", {
                    distance: this._newPos.distanceTo(this._startPos)
                })), this._moving = !1
            }
        }), o.Handler = o.Class.extend({
            initialize: function(t) {
                this._map = t
            },
            enable: function() {
                this._enabled || (this._enabled = !0, this.addHooks())
            },
            disable: function() {
                this._enabled && (this._enabled = !1, this.removeHooks())
            },
            enabled: function() {
                return !!this._enabled
            }
        }), o.Map.mergeOptions({
            dragging: !0,
            inertia: !o.Browser.android23,
            inertiaDeceleration: 3400,
            inertiaMaxSpeed: 1 / 0,
            inertiaThreshold: o.Browser.touch ? 32 : 18,
            easeLinearity: .25,
            worldCopyJump: !1
        }), o.Map.Drag = o.Handler.extend({
            addHooks: function() {
                if (!this._draggable) {
                    var t = this._map;
                    this._draggable = new o.Draggable(t._mapPane, t._container), this._draggable.on({
                        dragstart: this._onDragStart,
                        drag: this._onDrag,
                        dragend: this._onDragEnd
                    }, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDrag, this), t.on("viewreset", this._onViewReset, this), t.whenReady(this._onViewReset, this))
                }
                this._draggable.enable()
            },
            removeHooks: function() {
                this._draggable.disable()
            },
            moved: function() {
                return this._draggable && this._draggable._moved
            },
            _onDragStart: function() {
                var t = this._map;
                t._panAnim && t._panAnim.stop(), t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
            },
            _onDrag: function() {
                if (this._map.options.inertia) {
                    var t = this._lastTime = +new Date,
                        e = this._lastPos = this._draggable._newPos;
                    this._positions.push(e), this._times.push(t), t - this._times[0] > 200 && (this._positions.shift(), this._times.shift())
                }
                this._map.fire("move").fire("drag")
            },
            _onViewReset: function() {
                var t = this._map.getSize()._divideBy(2),
                    e = this._map.latLngToLayerPoint([0, 0]);
                this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.project([0, 180]).x
            },
            _onPreDrag: function() {
                var t = this._worldWidth,
                    e = Math.round(t / 2),
                    i = this._initialWorldOffset,
                    n = this._draggable._newPos.x,
                    o = (n - e + i) % t + e - i,
                    s = (n + e + i) % t - e - i,
                    a = Math.abs(o + i) < Math.abs(s + i) ? o : s;
                this._draggable._newPos.x = a
            },
            _onDragEnd: function(t) {
                var e = this._map,
                    i = e.options,
                    n = +new Date - this._lastTime,
                    s = !i.inertia || n > i.inertiaThreshold || !this._positions[0];
                if (e.fire("dragend", t), s) e.fire("moveend");
                else {
                    var a = this._lastPos.subtract(this._positions[0]),
                        r = (this._lastTime + n - this._times[0]) / 1e3,
                        h = i.easeLinearity,
                        l = a.multiplyBy(h / r),
                        u = l.distanceTo([0, 0]),
                        c = Math.min(i.inertiaMaxSpeed, u),
                        d = l.multiplyBy(c / u),
                        p = c / (i.inertiaDeceleration * h),
                        _ = d.multiplyBy(-p / 2).round();
                    _.x && _.y ? (_ = e._limitOffset(_, e.options.maxBounds), o.Util.requestAnimFrame(function() {
                        e.panBy(_, {
                            duration: p,
                            easeLinearity: h,
                            noMoveStart: !0
                        })
                    })) : e.fire("moveend")
                }
            }
        }), o.Map.addInitHook("addHandler", "dragging", o.Map.Drag), o.Map.mergeOptions({
            doubleClickZoom: !0
        }), o.Map.DoubleClickZoom = o.Handler.extend({
            addHooks: function() {
                this._map.on("dblclick", this._onDoubleClick, this)
            },
            removeHooks: function() {
                this._map.off("dblclick", this._onDoubleClick, this)
            },
            _onDoubleClick: function(t) {
                var e = this._map,
                    i = e.getZoom() + (t.originalEvent.shiftKey ? -1 : 1);
                "center" === e.options.doubleClickZoom ? e.setZoom(i) : e.setZoomAround(t.containerPoint, i)
            }
        }), o.Map.addInitHook("addHandler", "doubleClickZoom", o.Map.DoubleClickZoom), o.Map.mergeOptions({
            scrollWheelZoom: !0
        }), o.Map.ScrollWheelZoom = o.Handler.extend({
            addHooks: function() {
                o.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this), o.DomEvent.on(this._map._container, "MozMousePixelScroll", o.DomEvent.preventDefault), this._delta = 0
            },
            removeHooks: function() {
                o.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll), o.DomEvent.off(this._map._container, "MozMousePixelScroll", o.DomEvent.preventDefault)
            },
            _onWheelScroll: function(t) {
                var e = o.DomEvent.getWheelDelta(t);
                this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
                var i = Math.max(40 - (+new Date - this._startTime), 0);
                clearTimeout(this._timer), this._timer = setTimeout(o.bind(this._performZoom, this), i), o.DomEvent.preventDefault(t), o.DomEvent.stopPropagation(t)
            },
            _performZoom: function() {
                var t = this._map,
                    e = this._delta,
                    i = t.getZoom();
                e = e > 0 ? Math.ceil(e) : Math.floor(e), e = Math.max(Math.min(e, 4), -4), e = t._limitZoom(i + e) - i, this._delta = 0, this._startTime = null, e && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + e) : t.setZoomAround(this._lastMousePos, i + e))
            }
        }), o.Map.addInitHook("addHandler", "scrollWheelZoom", o.Map.ScrollWheelZoom), o.extend(o.DomEvent, {
            _touchstart: o.Browser.msPointer ? "MSPointerDown" : o.Browser.pointer ? "pointerdown" : "touchstart",
            _touchend: o.Browser.msPointer ? "MSPointerUp" : o.Browser.pointer ? "pointerup" : "touchend",
            addDoubleTapListener: function(t, i, n) {
                function s(t) {
                    var e;
                    if (o.Browser.pointer ? (_.push(t.pointerId), e = _.length) : e = t.touches.length, !(e > 1)) {
                        var i = Date.now(),
                            n = i - (r || i);
                        h = t.touches ? t.touches[0] : t, l = n > 0 && u >= n, r = i
                    }
                }

                function a(t) {
                    if (o.Browser.pointer) {
                        var e = _.indexOf(t.pointerId);
                        if (-1 === e) return;
                        _.splice(e, 1)
                    }
                    if (l) {
                        if (o.Browser.pointer) {
                            var n, s = {};
                            for (var a in h) n = h[a], s[a] = "function" == typeof n ? n.bind(h) : n;
                            h = s
                        }
                        h.type = "dblclick", i(h), r = null
                    }
                }
                var r, h, l = !1,
                    u = 250,
                    c = "_leaflet_",
                    d = this._touchstart,
                    p = this._touchend,
                    _ = [];
                t[c + d + n] = s, t[c + p + n] = a;
                var m = o.Browser.pointer ? e.documentElement : t;
                return t.addEventListener(d, s, !1), m.addEventListener(p, a, !1), o.Browser.pointer && m.addEventListener(o.DomEvent.POINTER_CANCEL, a, !1), this
            },
            removeDoubleTapListener: function(t, i) {
                var n = "_leaflet_";
                return t.removeEventListener(this._touchstart, t[n + this._touchstart + i], !1), (o.Browser.pointer ? e.documentElement : t).removeEventListener(this._touchend, t[n + this._touchend + i], !1), o.Browser.pointer && e.documentElement.removeEventListener(o.DomEvent.POINTER_CANCEL, t[n + this._touchend + i], !1), this
            }
        }), o.extend(o.DomEvent, {
            POINTER_DOWN: o.Browser.msPointer ? "MSPointerDown" : "pointerdown",
            POINTER_MOVE: o.Browser.msPointer ? "MSPointerMove" : "pointermove",
            POINTER_UP: o.Browser.msPointer ? "MSPointerUp" : "pointerup",
            POINTER_CANCEL: o.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
            _pointers: [],
            _pointerDocumentListener: !1,
            addPointerListener: function(t, e, i, n) {
                switch (e) {
                    case "touchstart":
                        return this.addPointerListenerStart(t, e, i, n);
                    case "touchend":
                        return this.addPointerListenerEnd(t, e, i, n);
                    case "touchmove":
                        return this.addPointerListenerMove(t, e, i, n);
                    default:
                        throw "Unknown touch event type"
                }
            },
            addPointerListenerStart: function(t, i, n, s) {
                var a = "_leaflet_",
                    r = this._pointers,
                    h = function(t) {
                        o.DomEvent.preventDefault(t);
                        for (var e = !1, i = 0; i < r.length; i++)
                            if (r[i].pointerId === t.pointerId) {
                                e = !0;
                                break
                            }
                        e || r.push(t), t.touches = r.slice(), t.changedTouches = [t], n(t)
                    };
                if (t[a + "touchstart" + s] = h, t.addEventListener(this.POINTER_DOWN, h, !1), !this._pointerDocumentListener) {
                    var l = function(t) {
                        for (var e = 0; e < r.length; e++)
                            if (r[e].pointerId === t.pointerId) {
                                r.splice(e, 1);
                                break
                            }
                    };
                    e.documentElement.addEventListener(this.POINTER_UP, l, !1), e.documentElement.addEventListener(this.POINTER_CANCEL, l, !1), this._pointerDocumentListener = !0
                }
                return this
            },
            addPointerListenerMove: function(t, e, i, n) {
                function o(t) {
                    if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) {
                        for (var e = 0; e < a.length; e++)
                            if (a[e].pointerId === t.pointerId) {
                                a[e] = t;
                                break
                            }
                        t.touches = a.slice(), t.changedTouches = [t], i(t)
                    }
                }
                var s = "_leaflet_",
                    a = this._pointers;
                return t[s + "touchmove" + n] = o, t.addEventListener(this.POINTER_MOVE, o, !1), this
            },
            addPointerListenerEnd: function(t, e, i, n) {
                var o = "_leaflet_",
                    s = this._pointers,
                    a = function(t) {
                        for (var e = 0; e < s.length; e++)
                            if (s[e].pointerId === t.pointerId) {
                                s.splice(e, 1);
                                break
                            }
                        t.touches = s.slice(), t.changedTouches = [t], i(t)
                    };
                return t[o + "touchend" + n] = a, t.addEventListener(this.POINTER_UP, a, !1), t.addEventListener(this.POINTER_CANCEL, a, !1), this
            },
            removePointerListener: function(t, e, i) {
                var n = "_leaflet_",
                    o = t[n + e + i];
                switch (e) {
                    case "touchstart":
                        t.removeEventListener(this.POINTER_DOWN, o, !1);
                        break;
                    case "touchmove":
                        t.removeEventListener(this.POINTER_MOVE, o, !1);
                        break;
                    case "touchend":
                        t.removeEventListener(this.POINTER_UP, o, !1), t.removeEventListener(this.POINTER_CANCEL, o, !1)
                }
                return this
            }
        }), o.Map.mergeOptions({
            touchZoom: o.Browser.touch && !o.Browser.android23,
            bounceAtZoomLimits: !0
        }), o.Map.TouchZoom = o.Handler.extend({
            addHooks: function() {
                o.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this)
            },
            removeHooks: function() {
                o.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this)
            },
            _onTouchStart: function(t) {
                var i = this._map;
                if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
                    var n = i.mouseEventToLayerPoint(t.touches[0]),
                        s = i.mouseEventToLayerPoint(t.touches[1]),
                        a = i._getCenterLayerPoint();
                    this._startCenter = n.add(s)._divideBy(2), this._startDist = n.distanceTo(s), this._moved = !1, this._zooming = !0, this._centerOffset = a.subtract(this._startCenter), i._panAnim && i._panAnim.stop(), o.DomEvent.on(e, "touchmove", this._onTouchMove, this).on(e, "touchend", this._onTouchEnd, this), o.DomEvent.preventDefault(t)
                }
            },
            _onTouchMove: function(t) {
                var e = this._map;
                if (t.touches && 2 === t.touches.length && this._zooming) {
                    var i = e.mouseEventToLayerPoint(t.touches[0]),
                        n = e.mouseEventToLayerPoint(t.touches[1]);
                    this._scale = i.distanceTo(n) / this._startDist, this._delta = i._add(n)._divideBy(2)._subtract(this._startCenter), 1 !== this._scale && (e.options.bounceAtZoomLimits || !(e.getZoom() === e.getMinZoom() && this._scale < 1 || e.getZoom() === e.getMaxZoom() && this._scale > 1)) && (this._moved || (o.DomUtil.addClass(e._mapPane, "leaflet-touching"), e.fire("movestart").fire("zoomstart"), this._moved = !0), o.Util.cancelAnimFrame(this._animRequest), this._animRequest = o.Util.requestAnimFrame(this._updateOnMove, this, !0, this._map._container), o.DomEvent.preventDefault(t))
                }
            },
            _updateOnMove: function() {
                var t = this._map,
                    e = this._getScaleOrigin(),
                    i = t.layerPointToLatLng(e),
                    n = t.getScaleZoom(this._scale);
                t._animateZoom(i, n, this._startCenter, this._scale, this._delta, !1, !0)
            },
            _onTouchEnd: function() {
                if (!this._moved || !this._zooming) return void(this._zooming = !1);
                var t = this._map;
                this._zooming = !1, o.DomUtil.removeClass(t._mapPane, "leaflet-touching"), o.Util.cancelAnimFrame(this._animRequest), o.DomEvent.off(e, "touchmove", this._onTouchMove).off(e, "touchend", this._onTouchEnd);
                var i = this._getScaleOrigin(),
                    n = t.layerPointToLatLng(i),
                    s = t.getZoom(),
                    a = t.getScaleZoom(this._scale) - s,
                    r = a > 0 ? Math.ceil(a) : Math.floor(a),
                    h = t._limitZoom(s + r),
                    l = t.getZoomScale(h) / this._scale;
                t._animateZoom(n, h, i, l)
            },
            _getScaleOrigin: function() {
                var t = this._centerOffset.subtract(this._delta).divideBy(this._scale);
                return this._startCenter.add(t)
            }
        }), o.Map.addInitHook("addHandler", "touchZoom", o.Map.TouchZoom), o.Map.mergeOptions({
            tap: !0,
            tapTolerance: 15
        }), o.Map.Tap = o.Handler.extend({
            addHooks: function() {
                o.DomEvent.on(this._map._container, "touchstart", this._onDown, this)
            },
            removeHooks: function() {
                o.DomEvent.off(this._map._container, "touchstart", this._onDown, this)
            },
            _onDown: function(t) {
                if (t.touches) {
                    if (o.DomEvent.preventDefault(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                    var i = t.touches[0],
                        n = i.target;
                    this._startPos = this._newPos = new o.Point(i.clientX, i.clientY), n.tagName && "a" === n.tagName.toLowerCase() && o.DomUtil.addClass(n, "leaflet-active"), this._holdTimeout = setTimeout(o.bind(function() {
                        this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i))
                    }, this), 1e3), o.DomEvent.on(e, "touchmove", this._onMove, this).on(e, "touchend", this._onUp, this)
                }
            },
            _onUp: function(t) {
                if (clearTimeout(this._holdTimeout), o.DomEvent.off(e, "touchmove", this._onMove, this).off(e, "touchend", this._onUp, this), this._fireClick && t && t.changedTouches) {
                    var i = t.changedTouches[0],
                        n = i.target;
                    n && n.tagName && "a" === n.tagName.toLowerCase() && o.DomUtil.removeClass(n, "leaflet-active"), this._isTapValid() && this._simulateEvent("click", i)
                }
            },
            _isTapValid: function() {
                return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
            },
            _onMove: function(t) {
                var e = t.touches[0];
                this._newPos = new o.Point(e.clientX, e.clientY)
            },
            _simulateEvent: function(i, n) {
                var o = e.createEvent("MouseEvents");
                o._simulated = !0, n.target._simulatedClick = !0, o.initMouseEvent(i, !0, !0, t, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), n.target.dispatchEvent(o)
            }
        }), o.Browser.touch && !o.Browser.pointer && o.Map.addInitHook("addHandler", "tap", o.Map.Tap), o.Map.mergeOptions({
            boxZoom: !0
        }), o.Map.BoxZoom = o.Handler.extend({
            initialize: function(t) {
                this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._moved = !1
            },
            addHooks: function() {
                o.DomEvent.on(this._container, "mousedown", this._onMouseDown, this)
            },
            removeHooks: function() {
                o.DomEvent.off(this._container, "mousedown", this._onMouseDown), this._moved = !1
            },
            moved: function() {
                return this._moved
            },
            _onMouseDown: function(t) {
                return this._moved = !1, !t.shiftKey || 1 !== t.which && 1 !== t.button ? !1 : (o.DomUtil.disableTextSelection(), o.DomUtil.disableImageDrag(), this._startLayerPoint = this._map.mouseEventToLayerPoint(t), void o.DomEvent.on(e, "mousemove", this._onMouseMove, this).on(e, "mouseup", this._onMouseUp, this).on(e, "keydown", this._onKeyDown, this))
            },
            _onMouseMove: function(t) {
                this._moved || (this._box = o.DomUtil.create("div", "leaflet-zoom-box", this._pane), o.DomUtil.setPosition(this._box, this._startLayerPoint), this._container.style.cursor = "crosshair", this._map.fire("boxzoomstart"));
                var e = this._startLayerPoint,
                    i = this._box,
                    n = this._map.mouseEventToLayerPoint(t),
                    s = n.subtract(e),
                    a = new o.Point(Math.min(n.x, e.x), Math.min(n.y, e.y));
                o.DomUtil.setPosition(i, a), this._moved = !0, i.style.width = Math.max(0, Math.abs(s.x) - 4) + "px", i.style.height = Math.max(0, Math.abs(s.y) - 4) + "px"
            },
            _finish: function() {
                this._moved && (this._pane.removeChild(this._box), this._container.style.cursor = ""), o.DomUtil.enableTextSelection(), o.DomUtil.enableImageDrag(), o.DomEvent.off(e, "mousemove", this._onMouseMove).off(e, "mouseup", this._onMouseUp).off(e, "keydown", this._onKeyDown)
            },
            _onMouseUp: function(t) {
                this._finish();
                var e = this._map,
                    i = e.mouseEventToLayerPoint(t);
                if (!this._startLayerPoint.equals(i)) {
                    var n = new o.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint), e.layerPointToLatLng(i));
                    e.fitBounds(n), e.fire("boxzoomend", {
                        boxZoomBounds: n
                    })
                }
            },
            _onKeyDown: function(t) {
                27 === t.keyCode && this._finish()
            }
        }), o.Map.addInitHook("addHandler", "boxZoom", o.Map.BoxZoom), o.Map.mergeOptions({
            keyboard: !0,
            keyboardPanOffset: 80,
            keyboardZoomOffset: 1
        }), o.Map.Keyboard = o.Handler.extend({
            keyCodes: {
                left: [37],
                right: [39],
                down: [40],
                up: [38],
                zoomIn: [187, 107, 61, 171],
                zoomOut: [189, 109, 173]
            },
            initialize: function(t) {
                this._map = t, this._setPanOffset(t.options.keyboardPanOffset), this._setZoomOffset(t.options.keyboardZoomOffset)
            },
            addHooks: function() {
                var t = this._map._container; - 1 === t.tabIndex && (t.tabIndex = "0"), o.DomEvent.on(t, "focus", this._onFocus, this).on(t, "blur", this._onBlur, this).on(t, "mousedown", this._onMouseDown, this), this._map.on("focus", this._addHooks, this).on("blur", this._removeHooks, this)
            },
            removeHooks: function() {
                this._removeHooks();
                var t = this._map._container;
                o.DomEvent.off(t, "focus", this._onFocus, this).off(t, "blur", this._onBlur, this).off(t, "mousedown", this._onMouseDown, this), this._map.off("focus", this._addHooks, this).off("blur", this._removeHooks, this)
            },
            _onMouseDown: function() {
                if (!this._focused) {
                    var i = e.body,
                        n = e.documentElement,
                        o = i.scrollTop || n.scrollTop,
                        s = i.scrollLeft || n.scrollLeft;
                    this._map._container.focus(), t.scrollTo(s, o)
                }
            },
            _onFocus: function() {
                this._focused = !0, this._map.fire("focus")
            },
            _onBlur: function() {
                this._focused = !1, this._map.fire("blur")
            },
            _setPanOffset: function(t) {
                var e, i, n = this._panKeys = {},
                    o = this.keyCodes;
                for (e = 0, i = o.left.length; i > e; e++) n[o.left[e]] = [-1 * t, 0];
                for (e = 0, i = o.right.length; i > e; e++) n[o.right[e]] = [t, 0];
                for (e = 0, i = o.down.length; i > e; e++) n[o.down[e]] = [0, t];
                for (e = 0, i = o.up.length; i > e; e++) n[o.up[e]] = [0, -1 * t]
            },
            _setZoomOffset: function(t) {
                var e, i, n = this._zoomKeys = {},
                    o = this.keyCodes;
                for (e = 0, i = o.zoomIn.length; i > e; e++) n[o.zoomIn[e]] = t;
                for (e = 0, i = o.zoomOut.length; i > e; e++) n[o.zoomOut[e]] = -t
            },
            _addHooks: function() {
                o.DomEvent.on(e, "keydown", this._onKeyDown, this)
            },
            _removeHooks: function() {
                o.DomEvent.off(e, "keydown", this._onKeyDown, this)
            },
            _onKeyDown: function(t) {
                var e = t.keyCode,
                    i = this._map;
                if (e in this._panKeys) {
                    if (i._panAnim && i._panAnim._inProgress) return;
                    i.panBy(this._panKeys[e]), i.options.maxBounds && i.panInsideBounds(i.options.maxBounds)
                } else {
                    if (!(e in this._zoomKeys)) return;
                    i.setZoom(i.getZoom() + this._zoomKeys[e])
                }
                o.DomEvent.stop(t)
            }
        }), o.Map.addInitHook("addHandler", "keyboard", o.Map.Keyboard), o.Handler.MarkerDrag = o.Handler.extend({
            initialize: function(t) {
                this._marker = t
            },
            addHooks: function() {
                var t = this._marker._icon;
                this._draggable || (this._draggable = new o.Draggable(t, t)), this._draggable.on("dragstart", this._onDragStart, this).on("drag", this._onDrag, this).on("dragend", this._onDragEnd, this), this._draggable.enable(), o.DomUtil.addClass(this._marker._icon, "leaflet-marker-draggable")
            },
            removeHooks: function() {
                this._draggable.off("dragstart", this._onDragStart, this).off("drag", this._onDrag, this).off("dragend", this._onDragEnd, this), this._draggable.disable(), o.DomUtil.removeClass(this._marker._icon, "leaflet-marker-draggable")
            },
            moved: function() {
                return this._draggable && this._draggable._moved
            },
            _onDragStart: function() {
                this._marker.closePopup().fire("movestart").fire("dragstart")
            },
            _onDrag: function() {
                var t = this._marker,
                    e = t._shadow,
                    i = o.DomUtil.getPosition(t._icon),
                    n = t._map.layerPointToLatLng(i);
                e && o.DomUtil.setPosition(e, i), t._latlng = n, t.fire("move", {
                    latlng: n
                }).fire("drag")
            },
            _onDragEnd: function(t) {
                this._marker.fire("moveend").fire("dragend", t)
            }
        }), o.Control = o.Class.extend({
            options: {
                position: "topright"
            },
            initialize: function(t) {
                o.setOptions(this, t)
            },
            getPosition: function() {
                return this.options.position
            },
            setPosition: function(t) {
                var e = this._map;
                return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
            },
            getContainer: function() {
                return this._container
            },
            addTo: function(t) {
                this._map = t;
                var e = this._container = this.onAdd(t),
                    i = this.getPosition(),
                    n = t._controlCorners[i];
                return o.DomUtil.addClass(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this
            },
            removeFrom: function(t) {
                var e = this.getPosition(),
                    i = t._controlCorners[e];
                return i.removeChild(this._container), this._map = null, this.onRemove && this.onRemove(t), this
            },
            _refocusOnMap: function() {
                this._map && this._map.getContainer().focus()
            }
        }), o.control = function(t) {
            return new o.Control(t)
        }, o.Map.include({
            addControl: function(t) {
                return t.addTo(this), this
            },
            removeControl: function(t) {
                return t.removeFrom(this), this
            },
            _initControlPos: function() {
                function t(t, s) {
                    var a = i + t + " " + i + s;
                    e[t + s] = o.DomUtil.create("div", a, n)
                }
                var e = this._controlCorners = {},
                    i = "leaflet-",
                    n = this._controlContainer = o.DomUtil.create("div", i + "control-container", this._container);
                t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
            },
            _clearControlPos: function() {
                this._container.removeChild(this._controlContainer)
            }
        }), o.Control.Zoom = o.Control.extend({
            options: {
                position: "topleft",
                zoomInText: "+",
                zoomInTitle: "Zoom in",
                zoomOutText: "-",
                zoomOutTitle: "Zoom out"
            },
            onAdd: function(t) {
                var e = "leaflet-control-zoom",
                    i = o.DomUtil.create("div", e + " leaflet-bar");
                return this._map = t, this._zoomInButton = this._createButton(this.options.zoomInText, this.options.zoomInTitle, e + "-in", i, this._zoomIn, this), this._zoomOutButton = this._createButton(this.options.zoomOutText, this.options.zoomOutTitle, e + "-out", i, this._zoomOut, this), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i
            },
            onRemove: function(t) {
                t.off("zoomend zoomlevelschange", this._updateDisabled, this)
            },
            _zoomIn: function(t) {
                this._map.zoomIn(t.shiftKey ? 3 : 1)
            },
            _zoomOut: function(t) {
                this._map.zoomOut(t.shiftKey ? 3 : 1)
            },
            _createButton: function(t, e, i, n, s, a) {
                var r = o.DomUtil.create("a", i, n);
                r.innerHTML = t, r.href = "#", r.title = e;
                var h = o.DomEvent.stopPropagation;
                return o.DomEvent.on(r, "click", h).on(r, "mousedown", h).on(r, "dblclick", h).on(r, "click", o.DomEvent.preventDefault).on(r, "click", s, a).on(r, "click", this._refocusOnMap, a), r
            },
            _updateDisabled: function() {
                var t = this._map,
                    e = "leaflet-disabled";
                o.DomUtil.removeClass(this._zoomInButton, e), o.DomUtil.removeClass(this._zoomOutButton, e), t._zoom === t.getMinZoom() && o.DomUtil.addClass(this._zoomOutButton, e), t._zoom === t.getMaxZoom() && o.DomUtil.addClass(this._zoomInButton, e)
            }
        }), o.Map.mergeOptions({
            zoomControl: !0
        }), o.Map.addInitHook(function() {
            this.options.zoomControl && (this.zoomControl = new o.Control.Zoom, this.addControl(this.zoomControl))
        }), o.control.zoom = function(t) {
            return new o.Control.Zoom(t)
        }, o.Control.Attribution = o.Control.extend({
            options: {
                position: "bottomright",
                prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
            },
            initialize: function(t) {
                o.setOptions(this, t), this._attributions = {}
            },
            onAdd: function(t) {
                this._container = o.DomUtil.create("div", "leaflet-control-attribution"), o.DomEvent.disableClickPropagation(this._container);
                for (var e in t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                return t.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this), this._update(), this._container
            },
            onRemove: function(t) {
                t.off("layeradd", this._onLayerAdd).off("layerremove", this._onLayerRemove)
            },
            setPrefix: function(t) {
                return this.options.prefix = t, this._update(), this
            },
            addAttribution: function(t) {
                return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : void 0
            },
            removeAttribution: function(t) {
                return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : void 0
            },
            _update: function() {
                if (this._map) {
                    var t = [];
                    for (var e in this._attributions) this._attributions[e] && t.push(e);
                    var i = [];
                    this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(" | ")
                }
            },
            _onLayerAdd: function(t) {
                t.layer.getAttribution && this.addAttribution(t.layer.getAttribution())
            },
            _onLayerRemove: function(t) {
                t.layer.getAttribution && this.removeAttribution(t.layer.getAttribution())
            }
        }), o.Map.mergeOptions({
            attributionControl: !0
        }), o.Map.addInitHook(function() {
            this.options.attributionControl && (this.attributionControl = (new o.Control.Attribution).addTo(this))
        }), o.control.attribution = function(t) {
            return new o.Control.Attribution(t)
        }, o.Control.Scale = o.Control.extend({
            options: {
                position: "bottomleft",
                maxWidth: 100,
                metric: !0,
                imperial: !0,
                updateWhenIdle: !1
            },
            onAdd: function(t) {
                this._map = t;
                var e = "leaflet-control-scale",
                    i = o.DomUtil.create("div", e),
                    n = this.options;
                return this._addScales(n, e, i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i
            },
            onRemove: function(t) {
                t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
            },
            _addScales: function(t, e, i) {
                t.metric && (this._mScale = o.DomUtil.create("div", e + "-line", i)), t.imperial && (this._iScale = o.DomUtil.create("div", e + "-line", i))
            },
            _update: function() {
                var t = this._map.getBounds(),
                    e = t.getCenter().lat,
                    i = 6378137 * Math.PI * Math.cos(e * Math.PI / 180),
                    n = i * (t.getNorthEast().lng - t.getSouthWest().lng) / 180,
                    o = this._map.getSize(),
                    s = this.options,
                    a = 0;
                o.x > 0 && (a = n * (s.maxWidth / o.x)), this._updateScales(s, a)
            },
            _updateScales: function(t, e) {
                t.metric && e && this._updateMetric(e), t.imperial && e && this._updateImperial(e)
            },
            _updateMetric: function(t) {
                var e = this._getRoundNum(t);
                this._mScale.style.width = this._getScaleWidth(e / t) + "px", this._mScale.innerHTML = 1e3 > e ? e + " m" : e / 1e3 + " km"
            },
            _updateImperial: function(t) {
                var e, i, n, o = 3.2808399 * t,
                    s = this._iScale;
                o > 5280 ? (e = o / 5280, i = this._getRoundNum(e), s.style.width = this._getScaleWidth(i / e) + "px", s.innerHTML = i + " mi") : (n = this._getRoundNum(o), s.style.width = this._getScaleWidth(n / o) + "px", s.innerHTML = n + " ft")
            },
            _getScaleWidth: function(t) {
                return Math.round(this.options.maxWidth * t) - 10
            },
            _getRoundNum: function(t) {
                var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                    i = t / e;
                return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i
            }
        }), o.control.scale = function(t) {
            return new o.Control.Scale(t)
        }, o.Control.Layers = o.Control.extend({
            options: {
                collapsed: !0,
                position: "topright",
                autoZIndex: !0
            },
            initialize: function(t, e, i) {
                o.setOptions(this, i), this._layers = {}, this._lastZIndex = 0, this._handlingClick = !1;
                for (var n in t) this._addLayer(t[n], n);
                for (n in e) this._addLayer(e[n], n, !0)
            },
            onAdd: function(t) {
                return this._initLayout(), this._update(), t.on("layeradd", this._onLayerChange, this).on("layerremove", this._onLayerChange, this), this._container
            },
            onRemove: function(t) {
                t.off("layeradd", this._onLayerChange, this).off("layerremove", this._onLayerChange, this)
            },
            addBaseLayer: function(t, e) {
                return this._addLayer(t, e), this._update(), this
            },
            addOverlay: function(t, e) {
                return this._addLayer(t, e, !0), this._update(), this
            },
            removeLayer: function(t) {
                var e = o.stamp(t);
                return delete this._layers[e], this._update(), this
            },
            _initLayout: function() {
                var t = "leaflet-control-layers",
                    e = this._container = o.DomUtil.create("div", t);
                e.setAttribute("aria-haspopup", !0), o.Browser.touch ? o.DomEvent.on(e, "click", o.DomEvent.stopPropagation) : o.DomEvent.disableClickPropagation(e).disableScrollPropagation(e);
                var i = this._form = o.DomUtil.create("form", t + "-list");
                if (this.options.collapsed) {
                    o.Browser.android || o.DomEvent.on(e, "mouseover", this._expand, this).on(e, "mouseout", this._collapse, this);
                    var n = this._layersLink = o.DomUtil.create("a", t + "-toggle", e);
                    n.href = "#", n.title = "Layers", o.Browser.touch ? o.DomEvent.on(n, "click", o.DomEvent.stop).on(n, "click", this._expand, this) : o.DomEvent.on(n, "focus", this._expand, this), o.DomEvent.on(i, "click", function() {
                        setTimeout(o.bind(this._onInputClick, this), 0)
                    }, this), this._map.on("click", this._collapse, this)
                } else this._expand();
                this._baseLayersList = o.DomUtil.create("div", t + "-base", i), this._separator = o.DomUtil.create("div", t + "-separator", i), this._overlaysList = o.DomUtil.create("div", t + "-overlays", i), e.appendChild(i)
            },
            _addLayer: function(t, e, i) {
                var n = o.stamp(t);
                this._layers[n] = {
                    layer: t,
                    name: e,
                    overlay: i
                }, this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex))
            },
            _update: function() {
                if (this._container) {
                    this._baseLayersList.innerHTML = "", this._overlaysList.innerHTML = "";
                    var t, e, i = !1,
                        n = !1;
                    for (t in this._layers) e = this._layers[t], this._addItem(e), n = n || e.overlay, i = i || !e.overlay;
                    this._separator.style.display = n && i ? "" : "none"
                }
            },
            _onLayerChange: function(t) {
                var e = this._layers[o.stamp(t.layer)];
                if (e) {
                    this._handlingClick || this._update();
                    var i = e.overlay ? "layeradd" === t.type ? "overlayadd" : "overlayremove" : "layeradd" === t.type ? "baselayerchange" : null;
                    i && this._map.fire(i, e)
                }
            },
            _createRadioElement: function(t, i) {
                var n = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"';
                i && (n += ' checked="checked"'), n += "/>";
                var o = e.createElement("div");
                return o.innerHTML = n, o.firstChild
            },
            _addItem: function(t) {
                var i, n = e.createElement("label"),
                    s = this._map.hasLayer(t.layer);
                t.overlay ? (i = e.createElement("input"), i.type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = s) : i = this._createRadioElement("leaflet-base-layers", s), i.layerId = o.stamp(t.layer), o.DomEvent.on(i, "click", this._onInputClick, this);
                var a = e.createElement("span");
                a.innerHTML = " " + t.name, n.appendChild(i), n.appendChild(a);
                var r = t.overlay ? this._overlaysList : this._baseLayersList;
                return r.appendChild(n), n
            },
            _onInputClick: function() {
                var t, e, i, n = this._form.getElementsByTagName("input"),
                    o = n.length;
                for (this._handlingClick = !0, t = 0; o > t; t++) e = n[t], i = this._layers[e.layerId], e.checked && !this._map.hasLayer(i.layer) ? this._map.addLayer(i.layer) : !e.checked && this._map.hasLayer(i.layer) && this._map.removeLayer(i.layer);
                this._handlingClick = !1, this._refocusOnMap()
            },
            _expand: function() {
                o.DomUtil.addClass(this._container, "leaflet-control-layers-expanded")
            },
            _collapse: function() {
                this._container.className = this._container.className.replace(" leaflet-control-layers-expanded", "")
            }
        }), o.control.layers = function(t, e, i) {
            return new o.Control.Layers(t, e, i)
        }, o.PosAnimation = o.Class.extend({
            includes: o.Mixin.Events,
            run: function(t, e, i, n) {
                this.stop(), this._el = t, this._inProgress = !0, this._newPos = e, this.fire("start"), t.style[o.DomUtil.TRANSITION] = "all " + (i || .25) + "s cubic-bezier(0,0," + (n || .5) + ",1)", o.DomEvent.on(t, o.DomUtil.TRANSITION_END, this._onTransitionEnd, this), o.DomUtil.setPosition(t, e), o.Util.falseFn(t.offsetWidth), this._stepTimer = setInterval(o.bind(this._onStep, this), 50)
            },
            stop: function() {
                this._inProgress && (o.DomUtil.setPosition(this._el, this._getPos()), this._onTransitionEnd(), o.Util.falseFn(this._el.offsetWidth))
            },
            _onStep: function() {
                var t = this._getPos();
                return t ? (this._el._leaflet_pos = t, void this.fire("step")) : void this._onTransitionEnd()
            },
            _transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,
            _getPos: function() {
                var e, i, n, s = this._el,
                    a = t.getComputedStyle(s);
                if (o.Browser.any3d) {
                    if (n = a[o.DomUtil.TRANSFORM].match(this._transformRe), !n) return;
                    e = parseFloat(n[1]), i = parseFloat(n[2])
                } else e = parseFloat(a.left), i = parseFloat(a.top);
                return new o.Point(e, i, !0)
            },
            _onTransitionEnd: function() {
                o.DomEvent.off(this._el, o.DomUtil.TRANSITION_END, this._onTransitionEnd, this), this._inProgress && (this._inProgress = !1, this._el.style[o.DomUtil.TRANSITION] = "", this._el._leaflet_pos = this._newPos, clearInterval(this._stepTimer), this.fire("step").fire("end"))
            }
        }), o.Map.include({
            setView: function(t, e, n) {
                if (e = e === i ? this._zoom : this._limitZoom(e), t = this._limitCenter(o.latLng(t), e, this.options.maxBounds), n = n || {}, this._panAnim && this._panAnim.stop(), this._loaded && !n.reset && n !== !0) {
                    n.animate !== i && (n.zoom = o.extend({
                        animate: n.animate
                    }, n.zoom), n.pan = o.extend({
                        animate: n.animate
                    }, n.pan));
                    var s = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan);
                    if (s) return clearTimeout(this._sizeTimer), this
                }
                return this._resetView(t, e), this
            },
            panBy: function(t, e) {
                if (t = o.point(t).round(), e = e || {}, !t.x && !t.y) return this;
                if (this._panAnim || (this._panAnim = new o.PosAnimation, this._panAnim.on({
                        step: this._onPanTransitionStep,
                        end: this._onPanTransitionEnd
                    }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
                    o.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
                    var i = this._getMapPanePos().subtract(t);
                    this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
                } else this._rawPanBy(t), this.fire("move").fire("moveend");
                return this
            },
            _onPanTransitionStep: function() {
                this.fire("move")
            },
            _onPanTransitionEnd: function() {
                o.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
            },
            _tryAnimatedPan: function(t, e) {
                var i = this._getCenterOffset(t)._floor();
                return (e && e.animate) === !0 || this.getSize().contains(i) ? (this.panBy(i, e), !0) : !1
            }
        }), o.PosAnimation = o.DomUtil.TRANSITION ? o.PosAnimation : o.PosAnimation.extend({
            run: function(t, e, i, n) {
                this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = o.DomUtil.getPosition(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
            },
            stop: function() {
                this._inProgress && (this._step(), this._complete())
            },
            _animate: function() {
                this._animId = o.Util.requestAnimFrame(this._animate, this), this._step()
            },
            _step: function() {
                var t = +new Date - this._startTime,
                    e = 1e3 * this._duration;
                e > t ? this._runFrame(this._easeOut(t / e)) : (this._runFrame(1), this._complete())
            },
            _runFrame: function(t) {
                var e = this._startPos.add(this._offset.multiplyBy(t));
                o.DomUtil.setPosition(this._el, e), this.fire("step")
            },
            _complete: function() {
                o.Util.cancelAnimFrame(this._animId), this._inProgress = !1, this.fire("end")
            },
            _easeOut: function(t) {
                return 1 - Math.pow(1 - t, this._easeOutPower)
            }
        }), o.Map.mergeOptions({
            zoomAnimation: !0,
            zoomAnimationThreshold: 4
        }), o.DomUtil.TRANSITION && o.Map.addInitHook(function() {
            this._zoomAnimated = this.options.zoomAnimation && o.DomUtil.TRANSITION && o.Browser.any3d && !o.Browser.android23 && !o.Browser.mobileOpera, this._zoomAnimated && o.DomEvent.on(this._mapPane, o.DomUtil.TRANSITION_END, this._catchTransitionEnd, this)
        }), o.Map.include(o.DomUtil.TRANSITION ? {
            _catchTransitionEnd: function(t) {
                this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
            },
            _nothingToAnimate: function() {
                return !this._container.getElementsByClassName("leaflet-zoom-animated").length
            },
            _tryAnimatedZoom: function(t, e, i) {
                if (this._animatingZoom) return !0;
                if (i = i || {}, !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                var n = this.getZoomScale(e),
                    o = this._getCenterOffset(t)._divideBy(1 - 1 / n),
                    s = this._getCenterLayerPoint()._add(o);
                return i.animate === !0 || this.getSize().contains(o) ? (this.fire("movestart").fire("zoomstart"), this._animateZoom(t, e, s, n, null, !0), !0) : !1
            },
            _animateZoom: function(t, e, i, n, s, a, r) {
                r || (this._animatingZoom = !0), o.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim"), this._animateToCenter = t, this._animateToZoom = e, o.Draggable && (o.Draggable._disabled = !0), o.Util.requestAnimFrame(function() {
                    this.fire("zoomanim", {
                        center: t,
                        zoom: e,
                        origin: i,
                        scale: n,
                        delta: s,
                        backwards: a
                    })
                }, this)
            },
            _onZoomTransitionEnd: function() {
                this._animatingZoom = !1, o.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), this._resetView(this._animateToCenter, this._animateToZoom, !0, !0), o.Draggable && (o.Draggable._disabled = !1)
            }
        } : {}), o.TileLayer.include({
            _animateZoom: function(t) {
                this._animating || (this._animating = !0, this._prepareBgBuffer());
                var e = this._bgBuffer,
                    i = o.DomUtil.TRANSFORM,
                    n = t.delta ? o.DomUtil.getTranslateString(t.delta) : e.style[i],
                    s = o.DomUtil.getScaleString(t.scale, t.origin);
                e.style[i] = t.backwards ? s + " " + n : n + " " + s
            },
            _endZoomAnim: function() {
                var t = this._tileContainer,
                    e = this._bgBuffer;
                t.style.visibility = "", t.parentNode.appendChild(t), o.Util.falseFn(e.offsetWidth), this._animating = !1
            },
            _clearBgBuffer: function() {
                var t = this._map;
                !t || t._animatingZoom || t.touchZoom._zooming || (this._bgBuffer.innerHTML = "", this._bgBuffer.style[o.DomUtil.TRANSFORM] = "")
            },
            _prepareBgBuffer: function() {
                var t = this._tileContainer,
                    e = this._bgBuffer,
                    i = this._getLoadedTilesPercentage(e),
                    n = this._getLoadedTilesPercentage(t);
                return e && i > .5 && .5 > n ? (t.style.visibility = "hidden", void this._stopLoadingImages(t)) : (e.style.visibility = "hidden", e.style[o.DomUtil.TRANSFORM] = "", this._tileContainer = e, e = this._bgBuffer = t, this._stopLoadingImages(e), void clearTimeout(this._clearBgBufferTimer))
            },
            _getLoadedTilesPercentage: function(t) {
                var e, i, n = t.getElementsByTagName("img"),
                    o = 0;
                for (e = 0, i = n.length; i > e; e++) n[e].complete && o++;
                return o / i
            },
            _stopLoadingImages: function(t) {
                var e, i, n, s = Array.prototype.slice.call(t.getElementsByTagName("img"));
                for (e = 0, i = s.length; i > e; e++) n = s[e], n.complete || (n.onload = o.Util.falseFn, n.onerror = o.Util.falseFn, n.src = o.Util.emptyImageUrl, n.parentNode.removeChild(n))
            }
        }), o.Map.include({
            _defaultLocateOptions: {
                watch: !1,
                setView: !1,
                maxZoom: 1 / 0,
                timeout: 1e4,
                maximumAge: 0,
                enableHighAccuracy: !1
            },
            locate: function(t) {
                if (t = this._locateOptions = o.extend(this._defaultLocateOptions, t), !navigator.geolocation) return this._handleGeolocationError({
                    code: 0,
                    message: "Geolocation not supported."
                }), this;
                var e = o.bind(this._handleGeolocationResponse, this),
                    i = o.bind(this._handleGeolocationError, this);
                return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this
            },
            stopLocate: function() {
                return navigator.geolocation && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
            },
            _handleGeolocationError: function(t) {
                var e = t.code,
                    i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
                this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                    code: e,
                    message: "Geolocation error: " + i + "."
                })
            },
            _handleGeolocationResponse: function(t) {
                var e = t.coords.latitude,
                    i = t.coords.longitude,
                    n = new o.LatLng(e, i),
                    s = 180 * t.coords.accuracy / 40075017,
                    a = s / Math.cos(o.LatLng.DEG_TO_RAD * e),
                    r = o.latLngBounds([e - s, i - a], [e + s, i + a]),
                    h = this._locateOptions;
                if (h.setView) {
                    var l = Math.min(this.getBoundsZoom(r), h.maxZoom);
                    this.setView(n, l)
                }
                var u = {
                    latlng: n,
                    bounds: r,
                    timestamp: t.timestamp
                };
                for (var c in t.coords) "number" == typeof t.coords[c] && (u[c] = t.coords[c]);
                this.fire("locationfound", u)
            }
        })
}(window, document);;
/*
	Leaflet.label, a plugin that adds labels to markers and vectors for Leaflet powered maps.
	(c) 2012-2013, Jacob Toye, Smartrak

	https://github.com/Leaflet/Leaflet.label
	http://leafletjs.com
	https://github.com/jacobtoye
*/
(function() {
    L.labelVersion = "0.2.1-dev", L.Label = L.Class.extend({
        includes: L.Mixin.Events,
        options: {
            className: "",
            clickable: !1,
            direction: "right",
            noHide: !1,
            offset: [12, -15],
            opacity: 1,
            zoomAnimation: !0
        },
        initialize: function(t, e) {
            L.setOptions(this, t), this._source = e, this._animated = L.Browser.any3d && this.options.zoomAnimation, this._isOpen = !1
        },
        onAdd: function(t) {
            this._map = t, this._pane = this._source instanceof L.Marker ? t._panes.markerPane : t._panes.popupPane, this._container || this._initLayout(), this._pane.appendChild(this._container), this._initInteraction(), this._update(), this.setOpacity(this.options.opacity), t.on("moveend", this._onMoveEnd, this).on("viewreset", this._onViewReset, this), this._animated && t.on("zoomanim", this._zoomAnimation, this), L.Browser.touch && !this.options.noHide && L.DomEvent.on(this._container, "click", this.close, this)
        },
        onRemove: function(t) {
            this._pane.removeChild(this._container), t.off({
                zoomanim: this._zoomAnimation,
                moveend: this._onMoveEnd,
                viewreset: this._onViewReset
            }, this), this._removeInteraction(), this._map = null
        },
        setLatLng: function(t) {
            return this._latlng = L.latLng(t), this._map && this._updatePosition(), this
        },
        setContent: function(t) {
            return this._previousContent = this._content, this._content = t, this._updateContent(), this
        },
        close: function() {
            var t = this._map;
            t && (L.Browser.touch && !this.options.noHide && L.DomEvent.off(this._container, "click", this.close), t.removeLayer(this))
        },
        updateZIndex: function(t) {
            this._zIndex = t, this._container && this._zIndex && (this._container.style.zIndex = t)
        },
        setOpacity: function(t) {
            this.options.opacity = t, this._container && L.DomUtil.setOpacity(this._container, t)
        },
        _initLayout: function() {
            this._container = L.DomUtil.create("div", "leaflet-label " + this.options.className + " leaflet-zoom-animated"), this.updateZIndex(this._zIndex)
        },
        _update: function() {
            this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updatePosition(), this._container.style.visibility = "")
        },
        _updateContent: function() {
            this._content && this._map && this._prevContent !== this._content && "string" == typeof this._content && (this._container.innerHTML = this._content, this._prevContent = this._content, this._labelWidth = this._container.offsetWidth)
        },
        _updatePosition: function() {
            var t = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(t)
        },
        _setPosition: function(t) {
            var e = this._map,
                i = this._container,
                n = e.latLngToContainerPoint(e.getCenter()),
                o = e.layerPointToContainerPoint(t),
                s = this.options.direction,
                a = this._labelWidth,
                l = L.point(this.options.offset);
            "right" === s || "auto" === s && o.x < n.x ? (L.DomUtil.addClass(i, "leaflet-label-right"), L.DomUtil.removeClass(i, "leaflet-label-left"), t = t.add(l)) : (L.DomUtil.addClass(i, "leaflet-label-left"), L.DomUtil.removeClass(i, "leaflet-label-right"), t = t.add(L.point(-l.x - a, l.y))), L.DomUtil.setPosition(i, t)
        },
        _zoomAnimation: function(t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
            this._setPosition(e)
        },
        _onMoveEnd: function() {
            this._animated && "auto" !== this.options.direction || this._updatePosition()
        },
        _onViewReset: function(t) {
            t && t.hard && this._update()
        },
        _initInteraction: function() {
            if (this.options.clickable) {
                var t = this._container,
                    e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
                L.DomUtil.addClass(t, "leaflet-clickable"), L.DomEvent.on(t, "click", this._onMouseClick, this);
                for (var i = 0; e.length > i; i++) L.DomEvent.on(t, e[i], this._fireMouseEvent, this)
            }
        },
        _removeInteraction: function() {
            if (this.options.clickable) {
                var t = this._container,
                    e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
                L.DomUtil.removeClass(t, "leaflet-clickable"), L.DomEvent.off(t, "click", this._onMouseClick, this);
                for (var i = 0; e.length > i; i++) L.DomEvent.off(t, e[i], this._fireMouseEvent, this)
            }
        },
        _onMouseClick: function(t) {
            this.hasEventListeners(t.type) && L.DomEvent.stopPropagation(t), this.fire(t.type, {
                originalEvent: t
            })
        },
        _fireMouseEvent: function(t) {
            this.fire(t.type, {
                originalEvent: t
            }), "contextmenu" === t.type && this.hasEventListeners(t.type) && L.DomEvent.preventDefault(t), "mousedown" !== t.type ? L.DomEvent.stopPropagation(t) : L.DomEvent.preventDefault(t)
        }
    }), L.BaseMarkerMethods = {
        showLabel: function() {
            return this.label && this._map && (this.label.setLatLng(this._latlng), this._map.showLabel(this.label)), this
        },
        hideLabel: function() {
            return this.label && this.label.close(), this
        },
        setLabelNoHide: function(t) {
            this._labelNoHide !== t && (this._labelNoHide = t, t ? (this._removeLabelRevealHandlers(), this.showLabel()) : (this._addLabelRevealHandlers(), this.hideLabel()))
        },
        bindLabel: function(t, e) {
            var i = this.options.icon ? this.options.icon.options.labelAnchor : this.options.labelAnchor,
                n = L.point(i) || L.point(0, 0);
            return n = n.add(L.Label.prototype.options.offset), e && e.offset && (n = n.add(e.offset)), e = L.Util.extend({
                offset: n
            }, e), this._labelNoHide = e.noHide, this.label || (this._labelNoHide || this._addLabelRevealHandlers(), this.on("remove", this.hideLabel, this).on("move", this._moveLabel, this).on("add", this._onMarkerAdd, this), this._hasLabelHandlers = !0), this.label = new L.Label(e, this).setContent(t), this
        },
        unbindLabel: function() {
            return this.label && (this.hideLabel(), this.label = null, this._hasLabelHandlers && (this._labelNoHide || this._removeLabelRevealHandlers(), this.off("remove", this.hideLabel, this).off("move", this._moveLabel, this).off("add", this._onMarkerAdd, this)), this._hasLabelHandlers = !1), this
        },
        updateLabelContent: function(t) {
            this.label && this.label.setContent(t)
        },
        getLabel: function() {
            return this.label
        },
        _onMarkerAdd: function() {
            this._labelNoHide && this.showLabel()
        },
        _addLabelRevealHandlers: function() {
            this.on("mouseover", this.showLabel, this).on("mouseout", this.hideLabel, this), L.Browser.touch && this.on("click", this.showLabel, this)
        },
        _removeLabelRevealHandlers: function() {
            this.off("mouseover", this.showLabel, this).off("mouseout", this.hideLabel, this), L.Browser.touch && this.off("click", this.showLabel, this)
        },
        _moveLabel: function(t) {
            this.label.setLatLng(t.latlng)
        }
    }, L.Icon.Default.mergeOptions({
        labelAnchor: new L.Point(9, -20)
    }), L.Marker.mergeOptions({
        icon: new L.Icon.Default
    }), L.Marker.include(L.BaseMarkerMethods), L.Marker.include({
        _originalUpdateZIndex: L.Marker.prototype._updateZIndex,
        _updateZIndex: function(t) {
            var e = this._zIndex + t;
            this._originalUpdateZIndex(t), this.label && this.label.updateZIndex(e)
        },
        _originalSetOpacity: L.Marker.prototype.setOpacity,
        setOpacity: function(t, e) {
            this.options.labelHasSemiTransparency = e, this._originalSetOpacity(t)
        },
        _originalUpdateOpacity: L.Marker.prototype._updateOpacity,
        _updateOpacity: function() {
            var t = 0 === this.options.opacity ? 0 : 1;
            this._originalUpdateOpacity(), this.label && this.label.setOpacity(this.options.labelHasSemiTransparency ? this.options.opacity : t)
        },
        _originalSetLatLng: L.Marker.prototype.setLatLng,
        setLatLng: function(t) {
            return this.label && !this._labelNoHide && this.hideLabel(), this._originalSetLatLng(t)
        }
    }), L.CircleMarker.mergeOptions({
        labelAnchor: new L.Point(0, 0)
    }), L.CircleMarker.include(L.BaseMarkerMethods), L.Path.include({
        bindLabel: function(t, e) {
            return this.label && this.label.options === e || (this.label = new L.Label(e, this)), this.label.setContent(t), this._showLabelAdded || (this.on("mouseover", this._showLabel, this).on("mousemove", this._moveLabel, this).on("mouseout remove", this._hideLabel, this), L.Browser.touch && this.on("click", this._showLabel, this), this._showLabelAdded = !0), this
        },
        unbindLabel: function() {
            return this.label && (this._hideLabel(), this.label = null, this._showLabelAdded = !1, this.off("mouseover", this._showLabel, this).off("mousemove", this._moveLabel, this).off("mouseout remove", this._hideLabel, this)), this
        },
        updateLabelContent: function(t) {
            this.label && this.label.setContent(t)
        },
        _showLabel: function(t) {
            this.label.setLatLng(t.latlng), this._map.showLabel(this.label)
        },
        _moveLabel: function(t) {
            this.label.setLatLng(t.latlng)
        },
        _hideLabel: function() {
            this.label.close()
        }
    }), L.Map.include({
        showLabel: function(t) {
            return this.addLayer(t)
        }
    }), L.FeatureGroup.include({
        clearLayers: function() {
            return this.unbindLabel(), this.eachLayer(this.removeLayer, this), this
        },
        bindLabel: function(t, e) {
            return this.invoke("bindLabel", t, e)
        },
        unbindLabel: function() {
            return this.invoke("unbindLabel")
        },
        updateLabelContent: function(t) {
            this.invoke("updateLabelContent", t)
        }
    })
})(this, document);;
/*
 Leaflet.markercluster, Provides Beautiful Animated Marker Clustering functionality for Leaflet, a JS library for interactive maps.
 https://github.com/Leaflet/Leaflet.markercluster
 (c) 2012-2013, Dave Leaver, smartrak
*/
! function(t, e) {
    L.MarkerClusterGroup = L.FeatureGroup.extend({
            options: {
                maxClusterRadius: 80,
                iconCreateFunction: null,
                spiderfyOnMaxZoom: !0,
                showCoverageOnHover: !0,
                zoomToBoundsOnClick: !0,
                singleMarkerMode: !1,
                disableClusteringAtZoom: null,
                removeOutsideVisibleBounds: !0,
                animateAddingMarkers: !1,
                spiderfyDistanceMultiplier: 1,
                polygonOptions: {}
            },
            initialize: function(t) {
                L.Util.setOptions(this, t), this.options.iconCreateFunction || (this.options.iconCreateFunction = this._defaultIconCreateFunction), this._featureGroup = L.featureGroup(), this._featureGroup.on(L.FeatureGroup.EVENTS, this._propagateEvent, this), this._nonPointGroup = L.featureGroup(), this._nonPointGroup.on(L.FeatureGroup.EVENTS, this._propagateEvent, this), this._inZoomAnimation = 0, this._needsClustering = [], this._needsRemoving = [], this._currentShownBounds = null
            },
            addLayer: function(t) {
                if (t instanceof L.LayerGroup) {
                    var e = [];
                    for (var i in t._layers) e.push(t._layers[i]);
                    return this.addLayers(e)
                }
                if (!t.getLatLng) return this._nonPointGroup.addLayer(t), this;
                if (!this._map) return this._needsClustering.push(t), this;
                if (this.hasLayer(t)) return this;
                this._unspiderfy && this._unspiderfy(), this._addLayer(t, this._maxZoom);
                var n = t,
                    s = this._map.getZoom();
                if (t.__parent)
                    for (; n.__parent._zoom >= s;) n = n.__parent;
                return this._currentShownBounds.contains(n.getLatLng()) && (this.options.animateAddingMarkers ? this._animationAddLayer(t, n) : this._animationAddLayerNonAnimated(t, n)), this
            },
            removeLayer: function(t) {
                if (t instanceof L.LayerGroup) {
                    var e = [];
                    for (var i in t._layers) e.push(t._layers[i]);
                    return this.removeLayers(e)
                }
                return t.getLatLng ? this._map ? t.__parent ? (this._unspiderfy && (this._unspiderfy(), this._unspiderfyLayer(t)), this._removeLayer(t, !0), this._featureGroup.hasLayer(t) && (this._featureGroup.removeLayer(t), t.setOpacity && t.setOpacity(1)), this) : this : (!this._arraySplice(this._needsClustering, t) && this.hasLayer(t) && this._needsRemoving.push(t), this) : (this._nonPointGroup.removeLayer(t), this)
            },
            addLayers: function(t) {
                var e, i, n, s = this._map,
                    r = this._featureGroup,
                    o = this._nonPointGroup;
                for (e = 0, i = t.length; i > e; e++)
                    if (n = t[e], n.getLatLng) {
                        if (!this.hasLayer(n))
                            if (s) {
                                if (this._addLayer(n, this._maxZoom), n.__parent && 2 === n.__parent.getChildCount()) {
                                    var a = n.__parent.getAllChildMarkers(),
                                        h = a[0] === n ? a[1] : a[0];
                                    r.removeLayer(h)
                                }
                            } else this._needsClustering.push(n)
                    } else o.addLayer(n);
                return s && (r.eachLayer(function(t) {
                    t instanceof L.MarkerCluster && t._iconNeedsUpdate && t._updateIcon()
                }), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds)), this
            },
            removeLayers: function(t) {
                var e, i, n, s = this._featureGroup,
                    r = this._nonPointGroup;
                if (!this._map) {
                    for (e = 0, i = t.length; i > e; e++) n = t[e], this._arraySplice(this._needsClustering, n), r.removeLayer(n);
                    return this
                }
                for (e = 0, i = t.length; i > e; e++) n = t[e], n.__parent ? (this._removeLayer(n, !0, !0), s.hasLayer(n) && (s.removeLayer(n), n.setOpacity && n.setOpacity(1))) : r.removeLayer(n);
                return this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds), s.eachLayer(function(t) {
                    t instanceof L.MarkerCluster && t._updateIcon()
                }), this
            },
            clearLayers: function() {
                return this._map || (this._needsClustering = [], delete this._gridClusters, delete this._gridUnclustered), this._noanimationUnspiderfy && this._noanimationUnspiderfy(), this._featureGroup.clearLayers(), this._nonPointGroup.clearLayers(), this.eachLayer(function(t) {
                    delete t.__parent
                }), this._map && this._generateInitialClusters(), this
            },
            getBounds: function() {
                var t = new L.LatLngBounds;
                if (this._topClusterLevel) t.extend(this._topClusterLevel._bounds);
                else
                    for (var e = this._needsClustering.length - 1; e >= 0; e--) t.extend(this._needsClustering[e].getLatLng());
                var i = this._nonPointGroup.getBounds();
                return i.isValid() && t.extend(i), t
            },
            eachLayer: function(t, e) {
                var i, n = this._needsClustering.slice();
                for (this._topClusterLevel && this._topClusterLevel.getAllChildMarkers(n), i = n.length - 1; i >= 0; i--) t.call(e, n[i]);
                this._nonPointGroup.eachLayer(t, e)
            },
            hasLayer: function(t) {
                if (!t) return !1;
                var e, i = this._needsClustering;
                for (e = i.length - 1; e >= 0; e--)
                    if (i[e] === t) return !0;
                for (i = this._needsRemoving, e = i.length - 1; e >= 0; e--)
                    if (i[e] === t) return !1;
                return !(!t.__parent || t.__parent._group !== this) || this._nonPointGroup.hasLayer(t)
            },
            zoomToShowLayer: function(t, e) {
                var i = function() {
                    if ((t._icon || t.__parent._icon) && !this._inZoomAnimation)
                        if (this._map.off("moveend", i, this), this.off("animationend", i, this), t._icon) e();
                        else if (t.__parent._icon) {
                        var n = function() {
                            this.off("spiderfied", n, this), e()
                        };
                        this.on("spiderfied", n, this), t.__parent.spiderfy()
                    }
                };
                t._icon ? e() : t.__parent._zoom < this._map.getZoom() ? (this._map.on("moveend", i, this), t._icon || this._map.panTo(t.getLatLng())) : (this._map.on("moveend", i, this), this.on("animationend", i, this), this._map.setView(t.getLatLng(), t.__parent._zoom + 1), t.__parent.zoomToBounds())
            },
            onAdd: function(t) {
                this._map = t;
                var e, i, n;
                if (!isFinite(this._map.getMaxZoom())) throw "Map has no maxZoom specified";
                for (this._featureGroup.onAdd(t), this._nonPointGroup.onAdd(t), this._gridClusters || this._generateInitialClusters(), e = 0, i = this._needsRemoving.length; i > e; e++) n = this._needsRemoving[e], this._removeLayer(n, !0);
                for (this._needsRemoving = [], e = 0, i = this._needsClustering.length; i > e; e++) n = this._needsClustering[e], n.getLatLng ? n.__parent || this._addLayer(n, this._maxZoom) : this._featureGroup.addLayer(n);
                this._needsClustering = [], this._map.on("zoomend", this._zoomEnd, this), this._map.on("moveend", this._moveEnd, this), this._spiderfierOnAdd && this._spiderfierOnAdd(), this._bindEvents(), this._zoom = this._map.getZoom(), this._currentShownBounds = this._getExpandedVisibleBounds(), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds)
            },
            onRemove: function(t) {
                t.off("zoomend", this._zoomEnd, this), t.off("moveend", this._moveEnd, this), this._unbindEvents(), this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", ""), this._spiderfierOnRemove && this._spiderfierOnRemove(), this._featureGroup.onRemove(t), this._nonPointGroup.onRemove(t), this._featureGroup.clearLayers(), this._map = null
            },
            getVisibleParent: function(t) {
                for (var e = t; null !== e && !e._icon;) e = e.__parent;
                return e
            },
            _arraySplice: function(t, e) {
                for (var i = t.length - 1; i >= 0; i--)
                    if (t[i] === e) return t.splice(i, 1), !0
            },
            _removeLayer: function(t, e, i) {
                var n = this._gridClusters,
                    s = this._gridUnclustered,
                    r = this._featureGroup,
                    o = this._map;
                if (e)
                    for (var a = this._maxZoom; a >= 0 && s[a].removeObject(t, o.project(t.getLatLng(), a)); a--);
                var h, _ = t.__parent,
                    u = _._markers;
                for (this._arraySplice(u, t); _ && (_._childCount--, !(_._zoom < 0));) e && _._childCount <= 1 ? (h = _._markers[0] === t ? _._markers[1] : _._markers[0], n[_._zoom].removeObject(_, o.project(_._cLatLng, _._zoom)), s[_._zoom].addObject(h, o.project(h.getLatLng(), _._zoom)), this._arraySplice(_.__parent._childClusters, _), _.__parent._markers.push(h), h.__parent = _.__parent, _._icon && (r.removeLayer(_), i || r.addLayer(h))) : (_._recalculateBounds(), i && _._icon || _._updateIcon()), _ = _.__parent;
                delete t.__parent
            },
            _propagateEvent: function(t) {
                t.layer instanceof L.MarkerCluster && (t.type = "cluster" + t.type), this.fire(t.type, t)
            },
            _defaultIconCreateFunction: function(t) {
                var e = t.getChildCount(),
                    i = " marker-cluster-";
                return i += 10 > e ? "small" : 100 > e ? "medium" : "large", new L.DivIcon({
                    html: "<div><span>" + e + "</span></div>",
                    className: "marker-cluster" + i,
                    iconSize: new L.Point(40, 40)
                })
            },
            _bindEvents: function() {
                var t = this._map,
                    e = this.options.spiderfyOnMaxZoom,
                    i = this.options.showCoverageOnHover,
                    n = this.options.zoomToBoundsOnClick;
                (e || n) && this.on("clusterclick", this._zoomOrSpiderfy, this), i && (this.on("clustermouseover", this._showCoverage, this), this.on("clustermouseout", this._hideCoverage, this), t.on("zoomend", this._hideCoverage, this), t.on("layerremove", this._hideCoverageOnRemove, this))
            },
            _zoomOrSpiderfy: function(t) {
                var e = this._map;
                e.getMaxZoom() === e.getZoom() ? this.options.spiderfyOnMaxZoom && t.layer.spiderfy() : this.options.zoomToBoundsOnClick && t.layer.zoomToBounds()
            },
            _showCoverage: function(t) {
                var e = this._map;
                this._inZoomAnimation || (this._shownPolygon && e.removeLayer(this._shownPolygon), t.layer.getChildCount() > 2 && t.layer !== this._spiderfied && (this._shownPolygon = new L.Polygon(t.layer.getConvexHull(), this.options.polygonOptions), e.addLayer(this._shownPolygon)))
            },
            _hideCoverage: function() {
                this._shownPolygon && (this._map.removeLayer(this._shownPolygon), this._shownPolygon = null)
            },
            _hideCoverageOnRemove: function(t) {
                t.layer === this && this._hideCoverage()
            },
            _unbindEvents: function() {
                var t = this.options.spiderfyOnMaxZoom,
                    e = this.options.showCoverageOnHover,
                    i = this.options.zoomToBoundsOnClick,
                    n = this._map;
                (t || i) && this.off("clusterclick", this._zoomOrSpiderfy, this), e && (this.off("clustermouseover", this._showCoverage, this), this.off("clustermouseout", this._hideCoverage, this), n.off("zoomend", this._hideCoverage, this), n.off("layerremove", this._hideCoverageOnRemove, this))
            },
            _zoomEnd: function() {
                this._map && (this._mergeSplitClusters(), this._zoom = this._map._zoom, this._currentShownBounds = this._getExpandedVisibleBounds())
            },
            _moveEnd: function() {
                if (!this._inZoomAnimation) {
                    var t = this._getExpandedVisibleBounds();
                    this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, this._zoom, t), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, t), this._currentShownBounds = t
                }
            },
            _generateInitialClusters: function() {
                var t = this._map.getMaxZoom(),
                    e = this.options.maxClusterRadius;
                this.options.disableClusteringAtZoom && (t = this.options.disableClusteringAtZoom - 1), this._maxZoom = t, this._gridClusters = {}, this._gridUnclustered = {};
                for (var i = t; i >= 0; i--) this._gridClusters[i] = new L.DistanceGrid(e), this._gridUnclustered[i] = new L.DistanceGrid(e);
                this._topClusterLevel = new L.MarkerCluster(this, -1)
            },
            _addLayer: function(t, e) {
                var i, n, s = this._gridClusters,
                    r = this._gridUnclustered;
                for (this.options.singleMarkerMode && (t.options.icon = this.options.iconCreateFunction({
                        getChildCount: function() {
                            return 1
                        },
                        getAllChildMarkers: function() {
                            return [t]
                        }
                    })); e >= 0; e--) {
                    i = this._map.project(t.getLatLng(), e);
                    var o = s[e].getNearObject(i);
                    if (o) return o._addChild(t), t.__parent = o, void 0;
                    if (o = r[e].getNearObject(i)) {
                        var a = o.__parent;
                        a && this._removeLayer(o, !1);
                        var h = new L.MarkerCluster(this, e, o, t);
                        s[e].addObject(h, this._map.project(h._cLatLng, e)), o.__parent = h, t.__parent = h;
                        var _ = h;
                        for (n = e - 1; n > a._zoom; n--) _ = new L.MarkerCluster(this, n, _), s[n].addObject(_, this._map.project(o.getLatLng(), n));
                        for (a._addChild(_), n = e; n >= 0 && r[n].removeObject(o, this._map.project(o.getLatLng(), n)); n--);
                        return
                    }
                    r[e].addObject(t, i)
                }
                this._topClusterLevel._addChild(t), t.__parent = this._topClusterLevel
            },
            _mergeSplitClusters: function() {
                this._zoom < this._map._zoom ? (this._animationStart(), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, this._zoom, this._getExpandedVisibleBounds()), this._animationZoomIn(this._zoom, this._map._zoom)) : this._zoom > this._map._zoom ? (this._animationStart(), this._animationZoomOut(this._zoom, this._map._zoom)) : this._moveEnd()
            },
            _getExpandedVisibleBounds: function() {
                if (!this.options.removeOutsideVisibleBounds) return this.getBounds();
                var t = this._map,
                    e = t.getBounds(),
                    i = e._southWest,
                    n = e._northEast,
                    s = L.Browser.mobile ? 0 : Math.abs(i.lat - n.lat),
                    r = L.Browser.mobile ? 0 : Math.abs(i.lng - n.lng);
                return new L.LatLngBounds(new L.LatLng(i.lat - s, i.lng - r, !0), new L.LatLng(n.lat + s, n.lng + r, !0))
            },
            _animationAddLayerNonAnimated: function(t, e) {
                if (e === t) this._featureGroup.addLayer(t);
                else if (2 === e._childCount) {
                    e._addToMap();
                    var i = e.getAllChildMarkers();
                    this._featureGroup.removeLayer(i[0]), this._featureGroup.removeLayer(i[1])
                } else e._updateIcon()
            }
        }), L.MarkerClusterGroup.include(L.DomUtil.TRANSITION ? {
            _animationStart: function() {
                this._map._mapPane.className += " leaflet-cluster-anim", this._inZoomAnimation++
            },
            _animationEnd: function() {
                this._map && (this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", "")), this._inZoomAnimation--, this.fire("animationend")
            },
            _animationZoomIn: function(t, e) {
                var i, n = this,
                    s = this._getExpandedVisibleBounds(),
                    r = this._featureGroup;
                this._topClusterLevel._recursively(s, t, 0, function(n) {
                    var o, a = n._latlng,
                        h = n._markers;
                    for (s.contains(a) || (a = null), n._isSingleParent() && t + 1 === e ? (r.removeLayer(n), n._recursivelyAddChildrenToMap(null, e, s)) : (n.setOpacity(0), n._recursivelyAddChildrenToMap(a, e, s)), i = h.length - 1; i >= 0; i--) o = h[i], s.contains(o._latlng) || r.removeLayer(o)
                }), this._forceLayout(), n._topClusterLevel._recursivelyBecomeVisible(s, e), r.eachLayer(function(t) {
                    t instanceof L.MarkerCluster || !t._icon || t.setOpacity(1)
                }), n._topClusterLevel._recursively(s, t, e, function(t) {
                    t._recursivelyRestoreChildPositions(e)
                }), setTimeout(function() {
                    n._topClusterLevel._recursively(s, t, 0, function(t) {
                        r.removeLayer(t), t.setOpacity(1)
                    }), n._animationEnd()
                }, 200)
            },
            _animationZoomOut: function(t, e) {
                this._animationZoomOutSingle(this._topClusterLevel, t - 1, e), this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, t, this._getExpandedVisibleBounds())
            },
            _animationZoomOutSingle: function(t, e, i) {
                var n = this._getExpandedVisibleBounds();
                t._recursivelyAnimateChildrenInAndAddSelfToMap(n, e + 1, i);
                var s = this;
                this._forceLayout(), t._recursivelyBecomeVisible(n, i), setTimeout(function() {
                    if (1 === t._childCount) {
                        var r = t._markers[0];
                        r.setLatLng(r.getLatLng()), r.setOpacity(1)
                    } else t._recursively(n, i, 0, function(t) {
                        t._recursivelyRemoveChildrenFromMap(n, e + 1)
                    });
                    s._animationEnd()
                }, 200)
            },
            _animationAddLayer: function(t, e) {
                var i = this,
                    n = this._featureGroup;
                n.addLayer(t), e !== t && (e._childCount > 2 ? (e._updateIcon(), this._forceLayout(), this._animationStart(), t._setPos(this._map.latLngToLayerPoint(e.getLatLng())), t.setOpacity(0), setTimeout(function() {
                    n.removeLayer(t), t.setOpacity(1), i._animationEnd()
                }, 200)) : (this._forceLayout(), i._animationStart(), i._animationZoomOutSingle(e, this._map.getMaxZoom(), this._map.getZoom())))
            },
            _forceLayout: function() {
                L.Util.falseFn(e.body.offsetWidth)
            }
        } : {
            _animationStart: function() {},
            _animationZoomIn: function(t, e) {
                this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, t), this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds())
            },
            _animationZoomOut: function(t, e) {
                this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, t), this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds())
            },
            _animationAddLayer: function(t, e) {
                this._animationAddLayerNonAnimated(t, e)
            }
        }), L.markerClusterGroup = function(t) {
            return new L.MarkerClusterGroup(t)
        }, L.MarkerCluster = L.Marker.extend({
            initialize: function(t, e, i, n) {
                L.Marker.prototype.initialize.call(this, i ? i._cLatLng || i.getLatLng() : new L.LatLng(0, 0), {
                    icon: this
                }), this._group = t, this._zoom = e, this._markers = [], this._childClusters = [], this._childCount = 0, this._iconNeedsUpdate = !0, this._bounds = new L.LatLngBounds, i && this._addChild(i), n && this._addChild(n)
            },
            getAllChildMarkers: function(t) {
                t = t || [];
                for (var e = this._childClusters.length - 1; e >= 0; e--) this._childClusters[e].getAllChildMarkers(t);
                for (var i = this._markers.length - 1; i >= 0; i--) t.push(this._markers[i]);
                return t
            },
            getChildCount: function() {
                return this._childCount
            },
            zoomToBounds: function() {
                this._group._map.fitBounds(this._bounds)
            },
            getBounds: function() {
                var t = new L.LatLngBounds;
                return t.extend(this._bounds), t
            },
            _updateIcon: function() {
                this._iconNeedsUpdate = !0, this._icon && this.setIcon(this)
            },
            createIcon: function() {
                return this._iconNeedsUpdate && (this._iconObj = this._group.options.iconCreateFunction(this), this._iconNeedsUpdate = !1), this._iconObj.createIcon()
            },
            createShadow: function() {
                return this._iconObj.createShadow()
            },
            _addChild: function(t, e) {
                this._iconNeedsUpdate = !0, this._expandBounds(t), t instanceof L.MarkerCluster ? (e || (this._childClusters.push(t), t.__parent = this), this._childCount += t._childCount) : (e || this._markers.push(t), this._childCount++), this.__parent && this.__parent._addChild(t, !0)
            },
            _expandBounds: function(t) {
                var e, i = t._wLatLng || t._latlng;
                t instanceof L.MarkerCluster ? (this._bounds.extend(t._bounds), e = t._childCount) : (this._bounds.extend(i), e = 1), this._cLatLng || (this._cLatLng = t._cLatLng || i);
                var n = this._childCount + e;
                this._wLatLng ? (this._wLatLng.lat = (i.lat * e + this._wLatLng.lat * this._childCount) / n, this._wLatLng.lng = (i.lng * e + this._wLatLng.lng * this._childCount) / n) : this._latlng = this._wLatLng = new L.LatLng(i.lat, i.lng)
            },
            _addToMap: function(t) {
                t && (this._backupLatlng = this._latlng, this.setLatLng(t)), this._group._featureGroup.addLayer(this)
            },
            _recursivelyAnimateChildrenIn: function(t, e, i) {
                this._recursively(t, 0, i - 1, function(t) {
                    var i, n, s = t._markers;
                    for (i = s.length - 1; i >= 0; i--) n = s[i], n._icon && (n._setPos(e), n.setOpacity(0))
                }, function(t) {
                    var i, n, s = t._childClusters;
                    for (i = s.length - 1; i >= 0; i--) n = s[i], n._icon && (n._setPos(e), n.setOpacity(0))
                })
            },
            _recursivelyAnimateChildrenInAndAddSelfToMap: function(t, e, i) {
                this._recursively(t, i, 0, function(n) {
                    n._recursivelyAnimateChildrenIn(t, n._group._map.latLngToLayerPoint(n.getLatLng()).round(), e), n._isSingleParent() && e - 1 === i ? (n.setOpacity(1), n._recursivelyRemoveChildrenFromMap(t, e)) : n.setOpacity(0), n._addToMap()
                })
            },
            _recursivelyBecomeVisible: function(t, e) {
                this._recursively(t, 0, e, null, function(t) {
                    t.setOpacity(1)
                })
            },
            _recursivelyAddChildrenToMap: function(t, e, i) {
                this._recursively(i, -1, e, function(n) {
                    if (e !== n._zoom)
                        for (var s = n._markers.length - 1; s >= 0; s--) {
                            var r = n._markers[s];
                            i.contains(r._latlng) && (t && (r._backupLatlng = r.getLatLng(), r.setLatLng(t), r.setOpacity && r.setOpacity(0)), n._group._featureGroup.addLayer(r))
                        }
                }, function(e) {
                    e._addToMap(t)
                })
            },
            _recursivelyRestoreChildPositions: function(t) {
                for (var e = this._markers.length - 1; e >= 0; e--) {
                    var i = this._markers[e];
                    i._backupLatlng && (i.setLatLng(i._backupLatlng), delete i._backupLatlng)
                }
                if (t - 1 === this._zoom)
                    for (var n = this._childClusters.length - 1; n >= 0; n--) this._childClusters[n]._restorePosition();
                else
                    for (var s = this._childClusters.length - 1; s >= 0; s--) this._childClusters[s]._recursivelyRestoreChildPositions(t)
            },
            _restorePosition: function() {
                this._backupLatlng && (this.setLatLng(this._backupLatlng), delete this._backupLatlng)
            },
            _recursivelyRemoveChildrenFromMap: function(t, e, i) {
                var n, s;
                this._recursively(t, -1, e - 1, function(t) {
                    for (s = t._markers.length - 1; s >= 0; s--) n = t._markers[s], i && i.contains(n._latlng) || (t._group._featureGroup.removeLayer(n), n.setOpacity && n.setOpacity(1))
                }, function(t) {
                    for (s = t._childClusters.length - 1; s >= 0; s--) n = t._childClusters[s], i && i.contains(n._latlng) || (t._group._featureGroup.removeLayer(n), n.setOpacity && n.setOpacity(1))
                })
            },
            _recursively: function(t, e, i, n, s) {
                var r, o, a = this._childClusters,
                    h = this._zoom;
                if (e > h)
                    for (r = a.length - 1; r >= 0; r--) o = a[r], t.intersects(o._bounds) && o._recursively(t, e, i, n, s);
                else if (n && n(this), s && this._zoom === i && s(this), i > h)
                    for (r = a.length - 1; r >= 0; r--) o = a[r], t.intersects(o._bounds) && o._recursively(t, e, i, n, s)
            },
            _recalculateBounds: function() {
                var t, e = this._markers,
                    i = this._childClusters;
                for (this._bounds = new L.LatLngBounds, delete this._wLatLng, t = e.length - 1; t >= 0; t--) this._expandBounds(e[t]);
                for (t = i.length - 1; t >= 0; t--) this._expandBounds(i[t])
            },
            _isSingleParent: function() {
                return this._childClusters.length > 0 && this._childClusters[0]._childCount === this._childCount
            }
        }), L.DistanceGrid = function(t) {
            this._cellSize = t, this._sqCellSize = t * t, this._grid = {}, this._objectPoint = {}
        }, L.DistanceGrid.prototype = {
            addObject: function(t, e) {
                var i = this._getCoord(e.x),
                    n = this._getCoord(e.y),
                    s = this._grid,
                    r = s[n] = s[n] || {},
                    o = r[i] = r[i] || [],
                    a = L.Util.stamp(t);
                this._objectPoint[a] = e, o.push(t)
            },
            updateObject: function(t, e) {
                this.removeObject(t), this.addObject(t, e)
            },
            removeObject: function(t, e) {
                var i, n, s = this._getCoord(e.x),
                    r = this._getCoord(e.y),
                    o = this._grid,
                    a = o[r] = o[r] || {},
                    h = a[s] = a[s] || [];
                for (delete this._objectPoint[L.Util.stamp(t)], i = 0, n = h.length; n > i; i++)
                    if (h[i] === t) return h.splice(i, 1), 1 === n && delete a[s], !0
            },
            eachObject: function(t, e) {
                var i, n, s, r, o, a, h, _ = this._grid;
                for (i in _) {
                    o = _[i];
                    for (n in o)
                        for (a = o[n], s = 0, r = a.length; r > s; s++) h = t.call(e, a[s]), h && (s--, r--)
                }
            },
            getNearObject: function(t) {
                var e, i, n, s, r, o, a, h, _ = this._getCoord(t.x),
                    u = this._getCoord(t.y),
                    l = this._objectPoint,
                    d = this._sqCellSize,
                    p = null;
                for (e = u - 1; u + 1 >= e; e++)
                    if (s = this._grid[e])
                        for (i = _ - 1; _ + 1 >= i; i++)
                            if (r = s[i])
                                for (n = 0, o = r.length; o > n; n++) a = r[n], h = this._sqDist(l[L.Util.stamp(a)], t), d > h && (d = h, p = a);
                return p
            },
            _getCoord: function(t) {
                return Math.floor(t / this._cellSize)
            },
            _sqDist: function(t, e) {
                var i = e.x - t.x,
                    n = e.y - t.y;
                return i * i + n * n
            }
        },
        function() {
            L.QuickHull = {
                getDistant: function(t, e) {
                    var i = e[1].lat - e[0].lat,
                        n = e[0].lng - e[1].lng;
                    return n * (t.lat - e[0].lat) + i * (t.lng - e[0].lng)
                },
                findMostDistantPointFromBaseLine: function(t, e) {
                    var i, n, s, r = 0,
                        o = null,
                        a = [];
                    for (i = e.length - 1; i >= 0; i--) n = e[i], s = this.getDistant(n, t), s > 0 && (a.push(n), s > r && (r = s, o = n));
                    return {
                        maxPoint: o,
                        newPoints: a
                    }
                },
                buildConvexHull: function(t, e) {
                    var i = [],
                        n = this.findMostDistantPointFromBaseLine(t, e);
                    return n.maxPoint ? (i = i.concat(this.buildConvexHull([t[0], n.maxPoint], n.newPoints)), i = i.concat(this.buildConvexHull([n.maxPoint, t[1]], n.newPoints))) : [t]
                },
                getConvexHull: function(t) {
                    var e, i = !1,
                        n = !1,
                        s = null,
                        r = null;
                    for (e = t.length - 1; e >= 0; e--) {
                        var o = t[e];
                        (i === !1 || o.lat > i) && (s = o, i = o.lat), (n === !1 || o.lat < n) && (r = o, n = o.lat)
                    }
                    var a = [].concat(this.buildConvexHull([r, s], t), this.buildConvexHull([s, r], t));
                    return a
                }
            }
        }(), L.MarkerCluster.include({
            getConvexHull: function() {
                var t, e, i, n = this.getAllChildMarkers(),
                    s = [],
                    r = [];
                for (i = n.length - 1; i >= 0; i--) e = n[i].getLatLng(), s.push(e);
                for (t = L.QuickHull.getConvexHull(s), i = t.length - 1; i >= 0; i--) r.push(t[i][0]);
                return r
            }
        }), L.MarkerCluster.include({
            _2PI: 2 * Math.PI,
            _circleFootSeparation: 25,
            _circleStartAngle: Math.PI / 6,
            _spiralFootSeparation: 28,
            _spiralLengthStart: 11,
            _spiralLengthFactor: 5,
            _circleSpiralSwitchover: 9,
            spiderfy: function() {
                if (this._group._spiderfied !== this && !this._group._inZoomAnimation) {
                    var t, e = this.getAllChildMarkers(),
                        i = this._group,
                        n = i._map,
                        s = n.latLngToLayerPoint(this._latlng);
                    this._group._unspiderfy(), this._group._spiderfied = this, e.length >= this._circleSpiralSwitchover ? t = this._generatePointsSpiral(e.length, s) : (s.y += 10, t = this._generatePointsCircle(e.length, s)), this._animationSpiderfy(e, t)
                }
            },
            unspiderfy: function(t) {
                this._group._inZoomAnimation || (this._animationUnspiderfy(t), this._group._spiderfied = null)
            },
            _generatePointsCircle: function(t, e) {
                var i, n, s = this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + t),
                    r = s / this._2PI,
                    o = this._2PI / t,
                    a = [];
                for (a.length = t, i = t - 1; i >= 0; i--) n = this._circleStartAngle + i * o, a[i] = new L.Point(e.x + r * Math.cos(n), e.y + r * Math.sin(n))._round();
                return a
            },
            _generatePointsSpiral: function(t, e) {
                var i, n = this._group.options.spiderfyDistanceMultiplier * this._spiralLengthStart,
                    s = this._group.options.spiderfyDistanceMultiplier * this._spiralFootSeparation,
                    r = this._group.options.spiderfyDistanceMultiplier * this._spiralLengthFactor,
                    o = 0,
                    a = [];
                for (a.length = t, i = t - 1; i >= 0; i--) o += s / n + 5e-4 * i, a[i] = new L.Point(e.x + n * Math.cos(o), e.y + n * Math.sin(o))._round(), n += this._2PI * r / o;
                return a
            },
            _noanimationUnspiderfy: function() {
                var t, e, i = this._group,
                    n = i._map,
                    s = i._featureGroup,
                    r = this.getAllChildMarkers();
                for (this.setOpacity(1), e = r.length - 1; e >= 0; e--) t = r[e], s.removeLayer(t), t._preSpiderfyLatlng && (t.setLatLng(t._preSpiderfyLatlng), delete t._preSpiderfyLatlng), t.setZIndexOffset && t.setZIndexOffset(0), t._spiderLeg && (n.removeLayer(t._spiderLeg), delete t._spiderLeg)
            }
        }), L.MarkerCluster.include(L.DomUtil.TRANSITION ? {
            SVG_ANIMATION: function() {
                return e.createElementNS("http://www.w3.org/2000/svg", "animate").toString().indexOf("SVGAnimate") > -1
            }(),
            _animationSpiderfy: function(t, i) {
                var n, s, r, o, a = this,
                    h = this._group,
                    _ = h._map,
                    u = h._featureGroup,
                    l = _.latLngToLayerPoint(this._latlng);
                for (n = t.length - 1; n >= 0; n--) s = t[n], s.setOpacity ? (s.setZIndexOffset(1e6), s.setOpacity(0), u.addLayer(s), s._setPos(l)) : u.addLayer(s);
                h._forceLayout(), h._animationStart();
                var d = L.Path.SVG ? 0 : .3,
                    p = L.Path.SVG_NS;
                for (n = t.length - 1; n >= 0; n--)
                    if (o = _.layerPointToLatLng(i[n]), s = t[n], s._preSpiderfyLatlng = s._latlng, s.setLatLng(o), s.setOpacity && s.setOpacity(1), r = new L.Polyline([a._latlng, o], {
                            weight: 1.5,
                            color: "#222",
                            opacity: d
                        }), _.addLayer(r), s._spiderLeg = r, L.Path.SVG && this.SVG_ANIMATION) {
                        var c = r._path.getTotalLength();
                        r._path.setAttribute("stroke-dasharray", c + "," + c);
                        var m = e.createElementNS(p, "animate");
                        m.setAttribute("attributeName", "stroke-dashoffset"), m.setAttribute("begin", "indefinite"), m.setAttribute("from", c), m.setAttribute("to", 0), m.setAttribute("dur", .25), r._path.appendChild(m), m.beginElement(), m = e.createElementNS(p, "animate"), m.setAttribute("attributeName", "stroke-opacity"), m.setAttribute("attributeName", "stroke-opacity"), m.setAttribute("begin", "indefinite"), m.setAttribute("from", 0), m.setAttribute("to", .5), m.setAttribute("dur", .25), r._path.appendChild(m), m.beginElement()
                    }
                if (a.setOpacity(.3), L.Path.SVG)
                    for (this._group._forceLayout(), n = t.length - 1; n >= 0; n--) s = t[n]._spiderLeg, s.options.opacity = .5, s._path.setAttribute("stroke-opacity", .5);
                setTimeout(function() {
                    h._animationEnd(), h.fire("spiderfied")
                }, 200)
            },
            _animationUnspiderfy: function(t) {
                var e, i, n, s = this._group,
                    r = s._map,
                    o = s._featureGroup,
                    a = t ? r._latLngToNewLayerPoint(this._latlng, t.zoom, t.center) : r.latLngToLayerPoint(this._latlng),
                    h = this.getAllChildMarkers(),
                    _ = L.Path.SVG && this.SVG_ANIMATION;
                for (s._animationStart(), this.setOpacity(1), i = h.length - 1; i >= 0; i--) e = h[i], e._preSpiderfyLatlng && (e.setLatLng(e._preSpiderfyLatlng), delete e._preSpiderfyLatlng, e.setOpacity ? (e._setPos(a), e.setOpacity(0)) : o.removeLayer(e), _ && (n = e._spiderLeg._path.childNodes[0], n.setAttribute("to", n.getAttribute("from")), n.setAttribute("from", 0), n.beginElement(), n = e._spiderLeg._path.childNodes[1], n.setAttribute("from", .5), n.setAttribute("to", 0), n.setAttribute("stroke-opacity", 0), n.beginElement(), e._spiderLeg._path.setAttribute("stroke-opacity", 0)));
                setTimeout(function() {
                    var t = 0;
                    for (i = h.length - 1; i >= 0; i--) e = h[i], e._spiderLeg && t++;
                    for (i = h.length - 1; i >= 0; i--) e = h[i], e._spiderLeg && (e.setOpacity && (e.setOpacity(1), e.setZIndexOffset(0)), t > 1 && o.removeLayer(e), r.removeLayer(e._spiderLeg), delete e._spiderLeg);
                    s._animationEnd()
                }, 200)
            }
        } : {
            _animationSpiderfy: function(t, e) {
                var i, n, s, r, o = this._group,
                    a = o._map,
                    h = o._featureGroup;
                for (i = t.length - 1; i >= 0; i--) r = a.layerPointToLatLng(e[i]), n = t[i], n._preSpiderfyLatlng = n._latlng, n.setLatLng(r), n.setZIndexOffset && n.setZIndexOffset(1e6), h.addLayer(n), s = new L.Polyline([this._latlng, r], {
                    weight: 1.5,
                    color: "#222"
                }), a.addLayer(s), n._spiderLeg = s;
                this.setOpacity(.3), o.fire("spiderfied")
            },
            _animationUnspiderfy: function() {
                this._noanimationUnspiderfy()
            }
        }), L.MarkerClusterGroup.include({
            _spiderfied: null,
            _spiderfierOnAdd: function() {
                this._map.on("click", this._unspiderfyWrapper, this), this._map.options.zoomAnimation ? this._map.on("zoomstart", this._unspiderfyZoomStart, this) : this._map.on("zoomend", this._unspiderfyWrapper, this), L.Path.SVG && !L.Browser.touch && this._map._initPathRoot()
            },
            _spiderfierOnRemove: function() {
                this._map.off("click", this._unspiderfyWrapper, this), this._map.off("zoomstart", this._unspiderfyZoomStart, this), this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._unspiderfy()
            },
            _unspiderfyZoomStart: function() {
                this._map && this._map.on("zoomanim", this._unspiderfyZoomAnim, this)
            },
            _unspiderfyZoomAnim: function(t) {
                L.DomUtil.hasClass(this._map._mapPane, "leaflet-touching") || (this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._unspiderfy(t))
            },
            _unspiderfyWrapper: function() {
                this._unspiderfy()
            },
            _unspiderfy: function(t) {
                this._spiderfied && this._spiderfied.unspiderfy(t)
            },
            _noanimationUnspiderfy: function() {
                this._spiderfied && this._spiderfied._noanimationUnspiderfy()
            },
            _unspiderfyLayer: function(t) {
                t._spiderLeg && (this._featureGroup.removeLayer(t), t.setOpacity(1), t.setZIndexOffset(0), this._map.removeLayer(t._spiderLeg), delete t._spiderLeg)
            }
        })
}(window, document);;
(function(a) {
    if (!(a.Polyline.prototype.fromEncoded)) {
        a.Polyline.fromEncoded = function(d, c) {
            return new a.Polyline(a.PolylineUtil.decode(d), c)
        }
    }
    if (!(a.Polygon.prototype.fromEncoded)) {
        a.Polygon.fromEncoded = function(d, c) {
            return new a.Polygon(a.PolylineUtil.decode(d), c)
        }
    }
    var b = {
        encodePath: function() {
            return a.PolylineUtil.encode(this.getLatLngs())
        }
    };
    if (!a.Polyline.prototype.encodePath) {
        a.Polyline.include(b)
    }
    if (!a.Polygon.prototype.encodePath) {
        a.Polygon.include(b)
    }
})(L);
L.PolylineUtil = {};
L.PolylineUtil.encode = function(a) {
    var c, g, h;
    var e = 0;
    var f = 0;
    var d = "";
    for (c = 0; c < a.length; c++) {
        var j = a[c].lat;
        var k = a[c].lng;
        var b = Math.floor(j * 100000);
        var l = Math.floor(k * 100000);
        g = b - e;
        h = l - f;
        e = b;
        f = l;
        d += L.PolylineUtil.encodeSignedNumber(g) + L.PolylineUtil.encodeSignedNumber(h)
    }
    return d
};
L.PolylineUtil.encodeNumber = function(b) {
    var a = "";
    var c, d;
    while (b >= 32) {
        c = (32 | (b & 31)) + 63;
        a += (String.fromCharCode(c));
        b >>= 5
    }
    d = b + 63;
    a += (String.fromCharCode(d));
    return a
};
L.PolylineUtil.encodeSignedNumber = function(a) {
    var b = a << 1;
    if (a < 0) {
        b = ~(b)
    }
    return (L.PolylineUtil.encodeNumber(b))
};
L.PolylineUtil.decode = function(d) {
    var f = d.length;
    var e = 0;
    var a = [];
    var i = 0;
    var j = 0;
    while (e < f) {
        var k;
        var c = 0;
        var l = 0;
        do {
            k = d.charCodeAt(e++) - 63;
            l |= (k & 31) << c;
            c += 5
        } while (k >= 32);
        var g = ((l & 1) ? ~(l >> 1) : (l >> 1));
        i += g;
        c = 0;
        l = 0;
        do {
            k = d.charCodeAt(e++) - 63;
            l |= (k & 31) << c;
            c += 5
        } while (k >= 32);
        var h = ((l & 1) ? ~(l >> 1) : (l >> 1));
        j += h;
        a.push(new L.LatLng(i * 0.00001, j * 0.00001))
    }
    return a
};;
var dateFormat = function() {
    var a = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        b = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        d = /[^-+\dA-Z]/g,
        c = function(f, e) {
            f = String(f);
            e = e || 2;
            while (f.length < e) {
                f = "0" + f
            }
            return f
        };
    return function(i, v, q) {
        var g = dateFormat;
        if (arguments.length == 1 && Object.prototype.toString.call(i) == "[object String]" && !/\d/.test(i)) {
            v = i;
            i = undefined
        }
        i = i ? new Date(i) : new Date;
        if (isNaN(i)) {
            throw SyntaxError("invalid date")
        }
        v = String(g.masks[v] || v || g.masks["default"]);
        if (v.slice(0, 4) == "UTC:") {
            v = v.slice(4);
            q = true
        }
        var t = q ? "getUTC" : "get",
            l = i[t + "Date"](),
            e = i[t + "Day"](),
            j = i[t + "Month"](),
            p = i[t + "FullYear"](),
            r = i[t + "Hours"](),
            k = i[t + "Minutes"](),
            u = i[t + "Seconds"](),
            n = i[t + "Milliseconds"](),
            f = q ? 0 : i.getTimezoneOffset(),
            h = {
                d: l,
                dd: c(l),
                ddd: g.i18n.dayNames[e],
                dddd: g.i18n.dayNames[e + 7],
                m: j + 1,
                mm: c(j + 1),
                mmm: g.i18n.monthNames[j],
                mmmm: g.i18n.monthNames[j + 12],
                yy: String(p).slice(2),
                yyyy: p,
                h: r % 12 || 12,
                hh: c(r % 12 || 12),
                H: r,
                HH: c(r),
                M: k,
                MM: c(k),
                s: u,
                ss: c(u),
                l: c(n, 3),
                L: c(n > 99 ? Math.round(n / 10) : n),
                t: r < 12 ? "a" : "p",
                tt: r < 12 ? "am" : "pm",
                T: r < 12 ? "A" : "P",
                TT: r < 12 ? "AM" : "PM",
                Z: q ? "UTC" : (String(i).match(b) || [""]).pop().replace(d, ""),
                o: (f > 0 ? "-" : "+") + c(Math.floor(Math.abs(f) / 60) * 100 + Math.abs(f) % 60, 4),
                S: ["th", "st", "nd", "rd"][l % 10 > 3 ? 0 : (l % 100 - l % 10 != 10) * l % 10]
            };
        return v.replace(a, function(m) {
            return m in h ? h[m] : m.slice(1, m.length - 1)
        })
    }
}();
dateFormat.masks = {
    "default": "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};
dateFormat.i18n = {
    dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
Date.prototype.format = function(a, b) {
    return dateFormat(this, a, b)
};;
var T = {};
$(document).ready(function() {
    T.Map.init();
    T.Panel.init();
    T.LayoutManager.init();
    T.PageManager.init();
    $('[data-toggle="tooltip"]').tooltip({
        delay: {
            show: 300,
            hide: 0
        }
    });
    $("#map").contextmenu({
        target: "#context-menu",
        onItem: function(c, d) {
            c.preventDefault();
            switch (d.closest("a").attr("data-action")) {
                case "set-departure":
                    T.Session.departureLocation.updateLatLng(T.Session.rightClickLatLng, true);
                    break;
                case "set-arrival":
                    T.Session.arrivalLocation.updateLatLng(T.Session.rightClickLatLng, true);
                    break
            }
        }
    });
    $(window).bind("mapRightClick", function() {});
    setTimeout(function() {
        $("#loading-screen").fadeOut("slow")
    }, 1000);
    $("#btn-toggle-panel").click(function() {
        $(".panel-menu, .panel-main").toggle();
        $("#map").toggleVisibility();
        $("#logo-overlay").toggleVisibility()
    })
});
(function(b) {
    b.fn.toggleVisibility = function() {
        return this.css("visibility", function(d, a) {
            return (a == "visible") ? "hidden" : "visible"
        })
    };
    b.fn.visible = function() {
        return this.css("visibility", "visible")
    };
    b.fn.invisible = function() {
        return this.css("visibility", "hidden")
    }
}(jQuery));
T.Button = {
    create: function(d) {
        var c = $("<button>");
        this.setStyle(c, d.style);
        this.setIcon(c, d.icon);
        this.setText(c, d.text);
        this.setTooltip(c, d.tooltip);
        this.setAttr(c, "data-action", d.dataAction);
        this.setAttr(c, "data-id", d.dataId);
        this.setAttr(c, "href", d.href);
        return c
    },
    setStyle: function(c, d) {
        c.removeClass();
        if (d) {
            if (typeof d === "string") {
                c.addClass(d)
            } else {
                c.addClass(d.join(" "))
            }
        }
    },
    setIcon: function(f, d) {
        if (!d) {
            return
        }
        var e = $("<i>");
        this.setStyle(e, d);
        f.append(e)
    },
    setText: function(d, c) {
        if (!c) {
            return
        }
        d.append(c)
    },
    setTooltip: function(d, c) {
        if (!c) {
            return
        }
        d.attr("title", c);
        d.tooltip({
            delay: {
                show: 300,
                hide: 0
            },
            container: "body"
        })
    },
    setAttr: function(d, e, f) {
        if (!f) {
            return
        }
        d.attr(e, f)
    }
};
T.Config = {
    imagePath: "img/",
    apiPath: "http://www.transporturban.ro/api/",
    urls: {}
};
T.Form = {
    defaultConfig: {
        styles: {
            form: "form-horizontal",
            input: {
                text: "input-large",
                password: "input-large",
                submit: "btn btn-primary",
                button: "btn"
            },
            select: "input-large",
            description: ["control-label"],
            textarea: "input-large",
            colorpicker: "input-small",
            datepicker: "input-small"
        },
        container: {
            type: "div",
            styles: "control-group"
        },
        elementContainer: {
            type: "div",
            styles: ["controls"]
        }
    },
    createFormFactory: function(b) {
        return new this.FormFactory(b)
    }
};
T.Form.FormFactory = function(b) {
    this.config = b;
    this.setStyle = function(e, f, a) {
        if (!a) {
            e.removeClass()
        }
        if (f) {
            if (typeof f === "string") {
                e.addClass(f)
            } else {
                e.addClass(f.join(" "))
            }
        }
    };
    this.setAttributes = function(h, g) {
        var j = ["name", "id", "type", "placeholder", "maxlength", "autocomplete"];
        for (var a in j) {
            var i = j[a];
            val = g[i];
            if (i == "type") {
                switch (val) {
                    case "datepicker":
                    case "timepicker":
                    case "colorpicker":
                        val = "text";
                        break
                }
            }
            if (g[i]) {
                h.attr(i, val)
            }
        }
    };
    this.setAlignment = function(a, d) {
        if (!d) {
            return
        }
        if (d == "horizontal") {
            this.setStyle(a, ["align-horizontal", "inline-block"], true)
        } else {
            this.setStyle(a, "align-vertical", true)
        }
    };
    this.createHidden = function(d) {
        var a = $("<input>");
        this.setAttributes(a, d);
        if (d.value) {
            a.val(d.value)
        }
        return a
    };
    this.createInput = function(d) {
        var a = $("<input>");
        this.setAttributes(a, d);
        this.setStyle(a, this.config.styles.input.text);
        if (d.value) {
            a.val(d.value)
        }
        return a
    };
    this.createSubmit = function(d) {
        var a = this.createInput(d);
        this.setStyle(a, this.config.styles.input.submit);
        return a
    };
    this.createButton = function(d) {
        var a = this.createInput(d);
        this.setStyle(a, this.config.styles.input.button);
        return a
    };
    this.createColorpicker = function(d) {
        var a = $("<input>");
        this.setAttributes(a, d);
        this.setStyle(a, this.config.styles.colorpicker);
        if (d.value) {
            a.val(d.value)
        }
        a.colorpicker();
        return a
    };
    this.createDatepicker = function(d) {
        var a = $("<input>");
        this.setAttributes(a, d);
        this.setStyle(a, this.config.styles.datepicker);
        if (d.value) {
            a.val(d.value)
        }
        a.datepicker({
            format: "yyyy-mm-dd"
        }).on("changeDate", function() {
            a.datepicker("hide")
        });
        return a
    };
    this.createTimepicker = function(d) {
        var a = $("<input>");
        this.setAttributes(a, d);
        this.setStyle(a, this.config.styles.datepicker);
        if (d.value) {
            a.val(d.value)
        }
        a.timepicker({
            defaultTime: "00:00",
            showMeridian: false,
            minuteStep: 1
        }).on("changeTime.timepicker", function(c) {
            $(window).trigger("timeChanged", c)
        }).on("clearTime.timepicker", function(c) {
            $(window).trigger("timeClear", c)
        });
        a.focus(function(c) {
            $(window).trigger("timeFocused", c)
        });
        return a
    };
    this.createSelect = function(d) {
        var a = $("<select>");
        this.setAttributes(a, d);
        this.setStyle(a, this.config.styles.select);
        if (d.options) {
            $.each(d.options, function(f, c) {
                a.append($("<option>").val(f).html(c))
            })
        }
        if (d.value) {
            a.val(d.value)
        }
        return a
    };
    this.createTextarea = function(a) {
        var d = $("<textarea>");
        this.setAttributes(d, a);
        this.setStyle(d, this.config.styles.textarea);
        if (a.value) {
            d.val(a.value)
        }
        return d
    };
    this.createCheckbox = function(e) {
        var f = this.createInput(e);
        if (e.checked) {
            f.prop("checked", true)
        }
        if (e.text) {
            var a = $("<label>");
            this.setStyle(a, ["checkbox", "append"]);
            a.append(f).append(" " + e.text);
            f = a
        }
        return f
    };
    this.createElement = function(a) {
        var d;
        switch (a.type) {
            case "select":
                d = this.createSelect(a);
                break;
            case "text":
            case "password":
                d = this.createInput(a);
                break;
            case "hidden":
                d = this.createHidden(a);
                break;
            case "submit":
                d = this.createSubmit(a);
                break;
            case "button":
                d = this.createButton(a);
                break;
            case "colorpicker":
                d = this.createColorpicker(a);
                break;
            case "datepicker":
                d = this.createDatepicker(a);
                break;
            case "timepicker":
                d = this.createTimepicker(a);
                break;
            case "textarea":
                d = this.createTextarea(a);
                break;
            case "checkbox":
                d = this.createCheckbox(a);
                break
        }
        return d
    };
    this.createForm = function(s) {
        var v = $("<form>").attr("name", s.name).attr("method", s.method).attr("action", s.action);
        var u = [];
        this.setStyle(v, this.config.styles.form);
        for (var r in s.elements) {
            var x, z;
            var i = false;
            var q = s.elements[r];
            x = this.createElement(q);
            z = x;
            if (this.config.elementContainer && q.type != "hidden") {
                var y = null;
                if (q.group) {
                    y = u[q.group]
                }
                if (!y) {
                    y = $("<" + this.config.elementContainer.type + ">");
                    this.setStyle(y, this.config.elementContainer.styles);
                    if (q.group) {
                        u[q.group] = y
                    }
                } else {
                    i = true
                }
                if (i) {
                    z = $("<div>").append(x);
                    this.setAlignment(z, q.align)
                }
                z = y.append(z)
            }
            if (!i) {
                if (this.config.container && q.type != "hidden") {
                    var t = null;
                    t = $("<" + this.config.container.type + ">");
                    this.setStyle(t, this.config.container.styles);
                    if (q.description) {
                        var w = $("<label>").html(q.description + (q.required ? ' <span class="text-warning">*</span>' : ""));
                        this.setStyle(w, this.config.styles.description);
                        t.append(w)
                    }
                    t.append(z);
                    v.append(t)
                } else {
                    v.append(z)
                }
            }
            var p = q.ajax;
            if (p) {
                var a = new T.Form.AjaxHandler(x, p);
                a.init()
            }
        }
        return v
    }
};
T.Form.AjaxHandler = function(c, d) {
    this.config = d;
    this.elem = c;
    this.init = function() {
        var a = this;
        $(this.elem).bind(this.config.event, function(b) {
            $.get(a.config.url, {
                data: b.target.value
            }, function(h) {
                var g = $("#" + a.config.target);
                if (g.is("select")) {
                    g.empty();
                    $.each(h, function(f, e) {
                        g.append($("<option>").attr("name", f).html(e))
                    })
                } else {
                    $.each(h, function(e) {
                        g.val(h[e])
                    })
                }
            }, "json")
        })
    }
};
T.Geocoder = {
    geocode: function(d, c) {
        this.nominatimGeocode(d, c)
    },
    micromapperGeocode: function(address, callback) {
        var micromapperURL = "http://www.mapdata.ro/localisation.php";
        var that = this;
        $.get(micromapperURL, "type=json&address=" + address, function(response) {
            response = eval("(" + response + ")");
            if (!response || !response.Lat || !response.Long) {
                console.log("micromapper: no results found");
                that.mapquestGeocode(address, callback);
                return
            }
            if (["B", "S"].indexOf(response.Precision) == -1) {
                console.log("micromapper: precision too low");
                that.mapquestGeocode(address, callback);
                return
            }
            callback(true, response.Lat, response.Long)
        })
    },
    mapquestGeocode: function(g, h) {
        var i = "Fmjtd%7Cluua2l012g%2C7x%3Do5-hz2wl";
        var j = "http://www.transporturban.ro/api/mapquestGeocode";
        var f = this;
        $.get(j, "key=" + i + "&thumbMaps=false&location=" + g, function(b) {
            if (b.info.statuscode != 0) {
                console.log("mapquest geocode error: " + b.info.statuscode);
                f.nominatimGeocode(g, h);
                return
            }
            if (b.results[0].locations.length == 0) {
                console.log("mapquest: no results found");
                f.nominatimGeocode(g, h);
                return
            }
            var a = b.results[0].locations[0].latLng;
            h(true, a.lat, a.lng)
        }, "json")
    },
    nominatimGeocode: function(e, f) {
        var d = "http://www.transporturban.ro/api/nominatimGeocode";
        $.get(d, "format=json&q=" + e, function(a) {
            if (!a || a.length == 0) {
                console.log("nominatim: no results found");
                f(false);
                return
            }
            f(true, a[0].lat, a[0].lon)
        }, "json")
    },
    reverse: function(h, f, g) {
        var e = "http://nominatim.openstreetmap.org/reverse.php";
        $.get(e, "format=json&lat=" + h + "&lon=" + f, function(a) {
            if (!a || a.length == 0 || !a.address.road) {
                console.log("nominatim reverse: no results found");
                g(false);
                return
            }
            g(true, a.address.road)
        }, "json")
    }
};
T.Lang = {
    getString: function(b) {
        return T.Lang.Strings[T.Metadata.getLang()][b]
    },
    getRouteTypeString: function(b) {
        switch (b.toString()) {
            case "0":
                return this.getString("TRAM");
            case "1":
                return this.getString("SUBWAY");
            case "702":
                return this.getString("EXPRESS");
            case "800":
                return this.getString("TROLLEY");
            default:
                return this.getString("BUS")
        }
    }
};
T.Lang.Strings = {
    ro: {
        BUS: "autobuz",
        TRAM: "tramvai",
        TROLLEY: "troleibuz",
        SUBWAY: "metrou",
        EXPRESS: "expres",
        WALK: "mergi",
        TO: "pana la",
        DESTINATION: "destinatie",
        STOPS_1: "statie",
        STOPS_N: "statii",
        TRANSFERS_1: "legatura",
        TRANSFERS_N: "legaturi",
        WAIT: "asteapta",
        NOW: "acum",
        TRIP_OUT: "tur",
        TRIP_IN: "retur",
        SEARCH_POP: "Poti alege locatia si prin<br />click dreapta pe harta",
        GEOCODE_ERROR: "Locatia nu a fost gasita"
    },
    en: {
        BUS: "bus",
        TRAM: "tram",
        TROLLEY: "trolley",
        SUBWAY: "metro",
        EXPRESS: "express",
        WALK: "walk",
        TO: "to",
        DESTINATION: "destination",
        STOPS_1: "stop",
        STOPS_N: "stops",
        TRANSFERS_1: "transfer",
        TRANSFERS_N: "transfers",
        WAIT: "wait",
        NOW: "now",
        TRIP_OUT: "outbound",
        TRIP_IN: "inbound",
        SEARCH_POP: "You can also choose location<br />by right-clicking the map",
        GEOCODE_ERROR: "Location not found"
    }
};
T.LayoutManager = {
    vars: {},
    init: function() {
        $(window).resize(function() {
            T.LayoutManager.adjustLayout();
            T.LayoutManager.resize(true)
        });
        this.adjustLayout();
        this.resize()
    },
    adjustLayout: function() {
        if (this.isMobile()) {
            $(".panel-wrapper").css({
                padding: 0,
                width: "100%"
            });
            $(".panel-wrapper, .panel-main, .panel-page-content").css({
                "max-height": "",
                height: "",
                overflow: "visible"
            });
            $(".panel-pages-wrapper").css({
                width: window.innerWidth,
                left: 0
            });
            $(".panel-page").css({
                width: window.innerWidth,
                height: ""
            }).hide().eq(T.Session.currentPanelPage).show();
            if ($(".panel-menu").is(":visible")) {
                $("#map").invisible();
                $("#logo-overlay").invisible()
            }
            $(".leaflet-control-layers").css("margin-top", "60px")
        } else {
            $(".panel-wrapper").css({
                padding: "",
                width: ""
            });
            $(".panel-main, .panel-page-content").css({
                "max-height": "",
                height: "",
                overflow: ""
            });
            $(".panel-pages-wrapper").css({
                width: "",
                left: -(370 * T.Session.currentPanelPage)
            });
            $(".panel-page").css("width", "");
            $(".panel-page").show().height(1);
            $(".panel-page").eq(T.Session.currentPanelPage).css({
                overflow: "auto",
                height: "auto"
            });
            $(".panel-menu, .panel-main").show();
            $("#map").visible();
            $(".leaflet-control-layers").css("margin-top", "")
        }
    },
    beforeResize: function() {},
    resize: function(b) {
        if (!this.isMobile()) {
            this.resizePanel(T.Session.currentPanelPage, b)
        }
    },
    getMaxPanelHeight: function() {
        return $("body").height() - $(".panel-header").height() - $(".panel-menu").height() - 2 * 15
    },
    resizePanel: function(f, e) {
        if (this.isMobile()) {
            return
        }
        var d = this.getMaxPanelHeight();
        if (e) {
            $(".panel-page").css("max-height", d)
        } else {
            $(".panel-page").animate({
                maxHeight: d
            }, 200)
        }
        $(".panel-wrapper").css("max-height", $("body").height() - 45)
    },
    isMobile: function() {
        return ($("mobile").is(":visible") && (!this.isWidget() || this.widgetIsResponsive()))
    },
    isWidget: function() {
        return $("widget").length > 0
    },
    getWidgetMode: function() {
        return $("widget").attr("data-mode")
    },
    widgetIsResponsive: function() {
        return $("widget").attr("data-responsive") === "true"
    }
};
T.LocationType = {
    TYPE_MY_LOCATION: 1,
    TYPE_HISTORY: 2,
    TYPE_FAVORITE: 3,
    TYPE_STOP: 4,
    TYPE_POI: 5,
    TYPE_STREET: 6
};
T.Location = function(d, e) {
    this.icon = d;
    this.input = e;
    this.marker = null;
    this.oppositeLocation = null;
    var f = this;
    T.Search.typeahead(e, this);
    $(e).popover({
        html: true,
        content: T.Lang.getString("SEARCH_POP"),
        container: "body",
        trigger: "manual"
    });
    $(e).click(function() {
        $(this).select();
        if (!T.Session.locationInputPopoverShowed && !T.LayoutManager.isMobile()) {
            var a = $(this);
            setTimeout(function() {
                a.popover("show")
            }, 300);
            setTimeout(function() {
                a.popover("destroy")
            }, 3300);
            T.Session.locationInputPopoverShowed = true
        }
    });
    $(e).blur(function() {});
    $(e).keypress(function(a) {
        if (a.which == 13) {
            f.enterPressed();
            return
        }
    });
    $(e).keydown(function(a) {
        if (a.which == 9) {
            a.preventDefault();
            f.enterPressed();
            return
        }
    });
    this.enterPressed = function() {
        if (this.type == T.LocationType.TYPE_MY_LOCATION) {
            if (this.oppositeLocation.type == T.LocationType.TYPE_MY_LOCATION) {
                this.oppositeLocation.input.val("");
                this.oppositeLocation.fromSuggestion()
            }
            this.updateLatLng(T.Session.currentUserLocation);
            T.Map.map.setCenter(T.Session.currentUserLocation)
        } else {
            this.geocode()
        }
        if (!this.oppositeLocation.input.val()) {
            var a = this;
            setTimeout(function() {
                a.oppositeLocation.input.focus()
            }, 1)
        }
    };
    this.isGeocoded = function() {
        return !(this.lat == "0" && this.lng == "0")
    };
    this.fromSuggestion = function(b, a) {
        if (e.val() == this.name && !a) {
            return
        }
        if (b) {
            this.id = b.id;
            this.name = b.name;
            this.type = b.type;
            this.lat = b.lat;
            this.lng = b.lng
        } else {
            this.id = null;
            this.name = null;
            this.type = null;
            this.lat = null;
            this.lng = null
        }
        this.removeMarker();
        if (a) {
            this.enterPressed()
        }
    };
    this.get = function() {
        return {
            id: this.id,
            name: this.name,
            type: this.type,
            lat: this.lat,
            lng: this.lng
        }
    };
    this.getLatLng = function() {
        if (!this.lat || !this.lng) {
            return null
        }
        return new T.Map.LatLng(this.lat, this.lng)
    };
    this.updateLatLng = function(b, a, c) {
        if (!b) {
            return
        }
        this.lat = b.lat;
        this.lng = b.lng;
        if (a) {
            this.updateName("(punct pe harta)");
            this.reverse()
        }
        this.drawMarker();
        if (!c) {
            $(window).trigger("locationReady")
        }
    };
    this.updateName = function(a) {
        this.name = a;
        this.input.val(a)
    };
    this.removeMarker = function() {
        if (this.marker) {
            T.Map.map.removeMarker(this.marker)
        }
    };
    this.drawMarker = function() {
        this.removeMarker();
        if (!this.lat || !this.lng) {
            return
        }
        this.marker = T.Map.map.addMarker(this.lat, this.lng, this.icon);
        var a = this;
        $(this.marker).bind("markerDragged", function(b, c) {
            a.updateLatLng(c, true);
            this.type = T.LocationType.TYPE_STREET
        })
    };
    this.geocode = function(b) {
        var c = this.input.val();
        this.input.addClass("input-ajax");
        if (!c) {
            this.removeMarker();
            if (b) {
                this.input.click()
            }
            this.input.removeClass("input-ajax");
            return
        }
        if (this.isGeocoded()) {
            this.drawMarker();
            T.Map.map.setCenter(new T.Map.LatLng(this.lat, this.lng));
            $(window).trigger("locationReady");
            this.input.removeClass("input-ajax");
            return
        }
        var a = this;
        T.Geocoder.geocode(c + ", " + T.Metadata.getCity(), function(l, j, k) {
            if (!l) {
                a.removeMarker();
                if (b) {
                    a.input.click()
                }
                if (!T.LayoutManager.isMobile()) {
                    $(a.input).popover({
                        html: true,
                        content: T.Lang.getString("GEOCODE_ERROR"),
                        container: "body",
                        trigger: "manual"
                    }).popover("show");
                    setTimeout(function() {
                        a.input.popover("destroy")
                    }, 3000)
                }
                a.input.removeClass("input-ajax");
                return
            }
            a.updateLatLng({
                lat: j,
                lng: k
            }, false);
            a.input.removeClass("input-ajax");
            T.Map.map.setCenter(new T.Map.LatLng(j, k))
        })
    };
    this.reverse = function() {
        this.input.addClass("input-ajax");
        var a = this;
        T.Geocoder.reverse(this.lat, this.lng, function(b, c) {
            if (!b) {
                return
            }
            a.input.removeClass("input-ajax");
            a.updateName(c)
        })
    };
    this.reset = function() {
        this.id = null;
        this.name = null;
        this.type = null;
        this.lat = null;
        this.lng = null;
        this.removeMarker();
        this.input.val("")
    };
    return this
};
T.Map = {
    map: null,
    init: function() {
        this.map = T.Map.Leaflet;
        $(window).on("mapRightClick", function(d, c) {
            T.Session.rightClickLatLng = c
        });
        $(window).on("zoomEnd", function() {
            T.Route.displayLabels()
        });
        $(window).on("mapViewChanged", function() {
            T.Stops.load()
        });
        this.map.init("map");
        T.Stops.load()
    },
    LatLng: function(f, e) {
        if (typeof f === "string" && !e) {
            var d = f.split(",");
            this.lat = d[0] ? d[0] : 0;
            this.lng = d[1] ? d[1] : 0
        } else {
            this.lat = f ? f : 0;
            this.lng = e ? e : 0
        }
        this.toString = function() {
            return T.Utils.roundNumber(this.lat, 5) + "," + T.Utils.roundNumber(this.lng, 5)
        }
    }
};
T.Map.Leaflet = {
    routes: [],
    routeStops: [],
    labels: [],
    stopsLayer: null,
    popup: null,
    greenIcon: L.icon({
        iconUrl: "img/marker-green.png",
        iconRetinaUrl: "img/marker-green-2x.png",
        shadowUrl: "img/marker-shadow.png",
        iconSize: [28, 44],
        shadowSize: [44, 44],
        iconAnchor: [14, 44],
        labelAnchor: [10, -22],
        popupAnchor: [1, -37]
    }),
    redIcon: L.icon({
        iconUrl: "img/marker-red.png",
        iconRetinaUrl: "img/marker-red-2x.png",
        shadowUrl: "img/marker-shadow.png",
        iconSize: [28, 44],
        shadowSize: [44, 44],
        iconAnchor: [14, 44],
        labelAnchor: [10, -22],
        popupAnchor: [1, -37]
    }),
    init: function(t) {
        var o = this;
        this.elem = $("#" + t);
        L.Icon.Default.imagePath = "img";
        var v = "http://tiles.mondoroute.com/tu/{z}/{x}/{y}.png",
            r = "http://tiles.mondoroute.com/transit/{z}/{x}/{y}.png",
            m = "http://a.tiles.mapbox.com/v3/reflexive.map-sw9zczec/{z}/{x}/{y}.png",
            p = '2017',
            q = new L.LatLng(T.Metadata.getLat(), T.Metadata.getLng()),
            n = new L.TileLayer(v, {
                attribution: p
            }),
            s = new L.TileLayer(m, {
                attribution: p
            }),
            u = new L.TileLayer(r, {
                attribution: p
            });
        if (T.Metadata.getRouter() == "ub") {
            var w = new L.Map("map", {
                center: q,
                zoom: 15,
                layers: [s],
                attributionControl: false,
                zoomControl: false
            })
        } else {
            var w = new L.Map("map", {
                center: q,
                zoom: 15,
                layers: [n],
                attributionControl: false,
                zoomControl: false
            })
        }
        if (!T.LayoutManager.isMobile()) {
            w.panBy(L.point(-180, 0), {
                animate: false
            })
        }
        L.control.attribution({
            prefix: "",
            position: "bottomright"
        }).addAttribution(p).addTo(w);
        L.control.zoom({
            position: "bottomright"
        }).addTo(w);
        w.on("click", function(a) {
            $(window).trigger("mapClick", a)
        });
        w.on("contextmenu", function(a) {
            $(window).trigger("mapRightClick", {
                lat: a.latlng.lat,
                lng: a.latlng.lng
            })
        });
        w.on("zoomstart", function() {
            o.resetLabels()
        });
        w.on("zoomend", function() {
            $(window).trigger("zoomEnd")
        });
        w.on("zoomend moveend load", function() {
            $(window).trigger("mapViewChanged")
        });
        w.on("locationfound", function(b) {
            var a = b.accuracy / 2;
            L.circle(b.latlng, a).addTo(w);
            T.Session.currentUserLocation = new T.Map.LatLng(b.latlng.lat, b.latlng.lng)
        });
        w.on("locationerror", function(a) {});
        if (/(android)/i.test(navigator.userAgent)) {
            w.locate();
        }
        this.stopsLayer = L.layerGroup().addTo(w);
        this.popup = L.popup({
            offset: [0, -5],
            autoPanPadding: [30, 55],
            maxWidth: 250
        });
        var x = {
            "arata statii": this.stopsLayer,
            "harta retea transport": u
        };
        L.control.layers({}, x).addTo(w);
        this.map = w
    },
    resize: function() {
        this.map.invalidateSize()
    },
    getStopIcon: function(b) {
        switch (b) {
            case "0":
                return L.icon({
                    iconUrl: "img/stop-tram.png",
                    iconSize: L.point(14, 14),
                    iconAnchor: L.point(7, 7),
                    popupAnchor: [0, -10]
                });
            case "1":
                return L.icon({
                    iconUrl: "img/stop-metro.png",
                    iconSize: L.point(18, 18),
                    iconAnchor: L.point(9, 9),
                    popupAnchor: [0, -12]
                });
            default:
                return L.icon({
                    iconUrl: "img/stop.png",
                    iconSize: L.point(14, 14),
                    iconAnchor: L.point(7, 7),
                    popupAnchor: [0, -10]
                })
        }
    },
    loadStopDetails: function(d) {
        var c = this;
        T.Stops.getDetails(d, function(a) {
            c.popup.setContent(a);
            $(".btn-reload", a).click(function() {
                $(this).html('<img align="center" src="img/circle.gif" />');
                c.loadStopDetails(d)
            })
        })
    },
    showStopPopup: function(d, c) {
        this.popup.setContent('<img align="center" src="img/circle.gif" />').setLatLng(c).openOn(this.map);
        this.loadStopDetails(d)
    },
    addStops: function(i) {
        var g = {
            color: T.Utils.shadeColor("#2f91c9", -25),
            opacity: 1,
            weight: 1,
            fillColor: "#2f91c9",
            fillOpacity: 1,
            radius: 6
        };
        var f = L.icon({
            iconUrl: "img/stop-cluster.png",
            iconSize: L.point(14, 14),
            iconAnchor: L.point(7, 7),
            popupAnchor: [0, -10]
        });
        this.removeStops();
        var h = L.markerClusterGroup({
            iconCreateFunction: function(a) {
                return f
            },
            spiderfyOnMaxZoom: false,
            showCoverageOnHover: false,
            zoomToBoundsOnClick: true,
            disableClusteringAtZoom: this.getMaxZoom(),
            maxClusterRadius: 30
        });
        var j = this;
        $(i).each(function(a, b) {
            var c = L.marker(new L.LatLng(b.latitude, b.longitude), {
                icon: j.getStopIcon(b.type)
            }).addTo(b.type == 1 ? j.stopsLayer : h);
            c.on("click", function() {
                j.showStopPopup(b.id, new T.Map.LatLng(b.latitude, b.longitude))
            })
        });
        h.addTo(j.stopsLayer)
    },
    removeStops: function() {
        this.stopsLayer.clearLayers()
    },
    addMarker: function(h, f, i) {
        var j = (i == "arrival" && T.LayoutManager.getWidgetMode() == "simple") ? false : true;
        var g = L.marker([h, f], {
            icon: this.getIcon(i),
            draggable: j
        }).addTo(this.map);
        g.on("dragend", function(a) {
            $(g).trigger("markerDragged", {
                lat: a.target.getLatLng().lat,
                lng: a.target.getLatLng().lng
            })
        });
        return g
    },
    addLabel: function(u, l, s, m) {
        var s = "#" + s;
        var t = T.Utils.shadeColor(s, -25);
        var m = "#" + m;
        var p = '<div style="padding: 1px 3px; background: ' + s + "; color: " + m + '; border-radius: 5px;">' + l + "</div>";
        var v = $(p).css("display", "none");
        $("body").append(v);
        var o = v.width() + 3;
        var r = v.height() + 1;
        v.remove();
        var n = L.divIcon({
            html: p,
            className: "div-icon",
            iconSize: [o, r]
        });
        var q = L.marker([u.lat, u.lng], {
            icon: n
        }).addTo(this.map);
        this.labels.push(q);
        return q
    },
    removeMarker: function(b) {
        this.map.removeLayer(b)
    },
    getIcon: function(b) {
        switch (b) {
            case "departure":
                return this.greenIcon;
            case "arrival":
                return this.redIcon;
            default:
                return new L.Icon.Default()
        }
    },
    resetRoutes: function() {
        console.log("reset routes");
        var b = this;
        $(this.routes).each(function(d, a) {
            b.map.removeLayer(a)
        });
        $(this.routeStops).each(function(d, a) {
            b.map.removeLayer(a)
        });
        this.routes = [];
        this.routeStops = [];
        this.map.closePopup()
    },
    resetLabels: function() {
        console.log("reset labels");
        var b = this;
        $(this.labels).each(function(d, a) {
            b.map.removeLayer(a)
        });
        this.labels = []
    },
    displayRouteSegment: function(h) {
        var e = h.itinerary;
        var f;
        if (this.routes[e]) {
            f = this.routes[e]
        } else {
            f = L.featureGroup().addTo(this.map);
            this.routes[e] = f;
            f.on("click", function() {
                $(window).trigger("displayRoute", e)
            })
        }
        var g = h.geometry;
        if (!h.isOverview) {
            L.polyline(g, {
                opacity: 1,
                color: T.Utils.shadeColor("#" + h.color, -25),
                weight: 7
            }).addTo(f);
            L.polyline(g, {
                opacity: 1,
                color: "#" + h.color,
                weight: 5
            }).addTo(f)
        } else {
            L.polyline(g, {
                opacity: 0.5,
                color: "#" + h.color,
                weight: 6
            }).addTo(f)
        }
    },
    displayRouteStops: function(g) {
        var h = this;
        var e = {
            color: "#333",
            opacity: 1,
            fillColor: "#FFF",
            fillOpacity: 1
        };
        var f = 6;
        $.each(g, function(a, b) {
            var c = L.circleMarker(b.latLng, e).setRadius(f).addTo(h.map);
            h.routeStops.push(c);
            c.on("click", function() {
                h.showStopPopup(b.id, b.latLng)
            });
            if (b.name) {
                if (a > 0 && b.id == g[a - 1].id) {
                    return
                }
                c.bindLabel(b.name, {
                    noHide: true,
                    direction: (a % 2 == 0 ? "right" : "left")
                }).showLabel()
            }
        })
    },
    fitRouteBounds: function(e) {
        var f = T.LayoutManager.isMobile() ? [15, 60] : [370, 40];
        var d = T.LayoutManager.isMobile() ? [15, 15] : [40, 40];
        this.map.fitBounds(this.routes[e].getBounds(), {
            paddingTopLeft: f,
            paddingBottomRight: d
        })
    },
    getZoom: function() {
        return this.map.getZoom() + (T.Metadata.getRouter() == "abudhabi" ? 6 : 0)
    },
    getMaxZoom: function() {
        return this.map.getMaxZoom()
    },
    setCenter: function(b) {
        this.map.setView(new L.LatLng(b.lat, b.lng), this.map.getZoom(), {
            animate: false
        });
        if (!T.LayoutManager.isMobile() && !(T.LayoutManager.getWidgetMode() == "simple")) {
            this.map.panBy([-185, 0], {
                animate: false
            })
        }
    },
    getBounds: function() {
        var b = this.map.getBounds();
        return {
            n: b.getNorth(),
            s: b.getSouth(),
            e: b.getEast(),
            w: b.getWest()
        }
    }
};
T.Menu = {
    init: function() {
        $("#menu li a").click(function() {
            var b = $(this).attr("data-page");
            T.Menu.highlight(b);
            return false
        })
    },
    highlight: function(b) {}
};
T.Metadata = {
    getRouter: function() {
        return $("metadata").attr("data-router")
    },
    getLat: function() {
        return $("metadata").attr("data-lat")
    },
    getLng: function() {
        return $("metadata").attr("data-lng")
    },
    getCity: function() {
        return $("metadata").attr("data-city")
    },
    getLang: function() {
        return $("metadata").attr("data-lang")
    }
};
T.PageManager = {
    init: function() {
        $.router.add(this.getPath(""), function(a) {
            T.Panel.reset()
        });
        $.router.add("", function(a) {
            T.Panel.Plan.reset()
        });
        $.router.add("", function(a) {
            T.Panel.Plan.fromConfig(T.Utils.queryToObject(a.qs))
        });
        $.router.add("", function(d) {
            T.Panel.Plan.reset();
            var a = new T.Map.LatLng(d.latlng);
            T.Session.departureLocation.updateLatLng(a, true);
            T.Map.map.setCenter(a)
        });
        $.router.add("", function(d) {
            T.Panel.Plan.reset();
            var a = new T.Map.LatLng(d.latlng);
            T.Session.arrivalLocation.updateLatLng(a, true);
            T.Map.map.setCenter(a)
        });
        $.router.add("", function(a) {
            T.Panel.Lines.getDetails(a.line)
        });
        var b = window.location.pathname + window.location.search + window.location.hash;
        $.router.go(b)
    },
    getPath: function(b) {
        return ""
    },
    buildRouteURL: function(f) {
        delete f.router;
        delete f.numRoutes;
        if (!T.Panel.Plan.vars.dateModified) {
            delete f.time;
            delete f.date
        }
        if (f.timeType == 1) {
            delete f.timeType
        }
        if (f.maxWalk == 2) {
            delete f.maxWalk
        }
        if (f.routeType == 1) {
            delete f.routeType
        }
        var e = $.param(f).replace(/%2C/g, ",");
        var d = this.getPath("plan/" + e + "/");
        $.router.go(d, null, true);
        return d
    },
    resetURL: function() {
        $.router.go(this.getPath(""))
    },
    gotoURL: function(b) {
        $.router.go(this.getPath(b))
    }
};
T.Panel = {
    init: function() {
        T.Panel.Plan.init();
        T.Panel.Lines.init();
        $(".header-buttons a").click(function(f) {
            f.preventDefault();
            var e = $(this).attr("data-settings");
            var d = e == "loc" ? "lang" : "loc";
            T.LayoutManager.beforeResize();
            $("#wrapper-settings-" + d).slideUp(200, function() {
                $("#wrapper-settings-" + e).slideToggle(200, function() {
                    T.LayoutManager.resize()
                })
            })
        });
        $(".panel-menu a").click(function(g) {
            g.preventDefault();
            var h = $(this).attr("data-page");
            T.Session.currentPanelPage = h;
            if (T.LayoutManager.isMobile()) {
                $(".panel-page").hide().eq(h).show()
            } else {
                $(".panel-main").height($(".panel-main").height());
                $(".panel-page").height("auto");
                $(".panel-page").css("overflow", "hidden");
                $(".panel-pages-wrapper").animate({
                    left: -(370 * h)
                }, 300);
                var f = $(".panel-page-content").eq(h).height() + 40;
                var e = T.LayoutManager.getMaxPanelHeight();
                $(".panel-main").animate({
                    height: (f > e ? e : f)
                }, 300, function() {
                    $(".panel-page").height(1);
                    $(".panel-page").eq(h).css({
                        overflow: "auto",
                        height: "auto"
                    });
                    $(".panel-main").height("auto");
                    T.LayoutManager.resize()
                })
            }
        });
        $(".panel-main").scroll(function(b) {
            $(this).scrollTop(0).scrollLeft(0)
        })
    },
    reset: function() {
        T.Panel.Plan.reset();
        T.Panel.Lines.reset();
        T.Stops.load()
    }
};
T.Panel.Lines = {
    vars: {
        response: null,
        currentRoute: 0
    },
    init: function() {
        var b = this;
        $("#btn-back-lines").click(function() {
            T.PageManager.resetURL();
            return false
        });
        $("#input-filter-lines").change(function() {
            b.load($(this).val())
        });
        $(window).bind("displayRoute", function(d, a) {
            if (!b.isTripDisplayed()) {
                return
            }
            b.displayTrips(a)
        });
        this.load()
    },
    load: function(d) {
        var c = this;
        $.get("http://www.transporturban.ro/api/lines-get.php", {
            router: T.Metadata.getRouter(),
            type: d
        }, function(a) {
            if (!a || a.status == "error") {
                return
            }
            c.buildTable(a.data)
        }, "json")
    },
    buildTable: function(h) {
        if (!h) {
            return
        }
        var f = {
            styles: ["table", "table-striped", "table-hover"],
            columns: [{
                type: "text",
                property: "short_name",
                func: function(a, b) {
                    return $("<a>").attr({
                        href: T.PageManager.getPath("line/" + a[b] + "/"),
                        "data-line": a[b]
                    }).text(a[b])
                }
            }, {
                type: "text",
                property: "name",
                func: function(a, b) {
                    return $("<a>").addClass("color-dark-grey").attr({
                        href: T.PageManager.getPath("line/" + a.short_name + "/"),
                        "data-line": a.short_name
                    }).text(a[b])
                },
                maxLength: 100
            }]
        };
        var e = $("<table>");
        var g = T.Table.create(f, e);
        e.bind("tableChanged", function() {
            $("a", e).click(function() {
                return false
            })
        });
        $("#wrapper-lines").html(g.createTable(h));
        T.Search.init($("#input-search-lines"), g, h, ["short_name", "name"])
    },
    getDetails: function(e) {
        T.Panel.Plan.reset();
        $("#wrapper-lines, #input-search-lines, #input-filter-lines").hide();
        var f = $("#wrapper-line-details").show();
        $("#btn-lines").click();
        f.find("h3").text(e);
        var d = this;
        $.get("http://www.transporturban.ro/api/lines-trips-get.php", {
            router: T.Metadata.getRouter(),
            line: e
        }, function(a) {
            if (!a || a.status == "error" || !a.data) {
                return
            }
            d.vars.response = a.data;
            d.displayTrips(0, true)
        }, "json")
    },
    displayTrips: function(h, e) {
        if ($(".trip-details").eq(h).is(":visible") && T.LayoutManager.isMobile()) {
            $("#btn-toggle-panel").click()
        }
        this.vars.currentRoute = h;
        T.Map.map.resetRoutes();
        var f = this;
        var g = this.vars.response;
        $(g).each(function(b, a) {
            if (b != h) {
                f.displayTripOverview(a, b)
            }
        });
        this.displayTrip(g[h], h);
        this.displayTripStops(g[h], h);
        if (e) {
            this.displaySummary(g)
        }
        T.Map.map.fitRouteBounds(h);
        $(".route-container").removeClass("selected");
        $(".route-container").eq(h).addClass("selected");
        $(".trip-details").hide();
        $(".trip-details").eq(h).show();
        T.LayoutManager.resize()
    },
    displayTrip: function(h, f) {
        var g = L.PolylineUtil.decode(h.geometry);
        var e = {
            itinerary: f,
            geometry: g,
            color: h.color
        };
        T.Map.map.displayRouteSegment(e)
    },
    displayTripStops: function(f, e) {
        var d = [];
        $.each(f.stops, function(b, a) {
            d.push({
                id: a.id,
                latLng: [a.latitude, a.longitude]
            })
        });
        T.Map.map.displayRouteStops(d)
    },
    displayTripOverview: function(f, e) {
        var d = {
            itinerary: e,
            geometry: L.PolylineUtil.decode(f.geometry),
            color: "666",
            isOverview: true
        };
        T.Map.map.displayRouteSegment(d)
    },
    displaySummary: function(d) {
        var e = this;
        var f = $("#wrapper-trips").html("").show();
        $(d).each(function(i, a) {
            var b = $("<div>").addClass("route-container").attr("data-index", i).append($("<div>").append($("<span>").addClass("color-blue").text(a.name)).append($("<span>").addClass("color-grey").text(" (" + (a.direction == 0 ? T.Lang.getString("TRIP_OUT") : T.Lang.getString("TRIP_IN")) + ")")));
            if (i == 0) {
                b.addClass("selected")
            }
            var j = $("<div>").addClass("trip-details");
            $(a.stops).each(function(h, g) {
                var m = $("<div>").addClass("trip-stop").append($("<a>").addClass("color-dark-grey").text(g.name).click(function(k) {
                    k.stopPropagation();
                    T.Map.map.showStopPopup(g.id, new T.Map.LatLng(g.latitude, g.longitude))
                }));
                j.append(m)
            });
            var c = $("<div>").addClass("route-info clearfix");
            c.append($("<div>").addClass("info-item").append($("<span>").append($("<i>").addClass("icon-time")).append(" " + a.duration + ""))).append($("<div>").addClass("info-item").append($("<span>").append($("<i>").addClass("icon-road")).append(" " + T.Utils.pathLength(L.PolylineUtil.decode(a.geometry)) + " km"))).append($("<div>").addClass("info-item"));
            f.append(b.append(c).append(j))
        });
        $(".route-container").click(function() {
            e.displayTrips($(this).attr("data-index"))
        })
    },
    isTripDisplayed: function() {
        return this.vars.response != null
    },
    reset: function() {
        this.vars.response = null;
        this.vars.currentRoute = 0;
        $("#wrapper-lines, #input-search-lines, #input-filter-lines").show();
        $("#wrapper-line-details").hide()
    }
};
T.Panel.Plan = {
    vars: {
        dateType: "dmy",
        dateModified: false,
        numRoutes: 3
    },
    init: function() {
        var d = this;
        var e = $("#input-departure");
        var f = $("#input-arrival");
        T.Session.departureLocation = new T.Location("departure", e);
        T.Session.arrivalLocation = new T.Location("arrival", f);
        T.Session.departureLocation.oppositeLocation = T.Session.arrivalLocation;
        T.Session.arrivalLocation.oppositeLocation = T.Session.departureLocation;
        $(".input-time").change(function() {
            d.dateChanged()
        }).timepicker({
            showMeridian: false,
            minuteStep: 5,
            defaultTime: false
        });
        $(".input-date").on("changeDate", function() {
            d.dateChanged()
        }).datepicker({
            format: T.Utils.getDateFormat(d.vars.dateType)
        });
        $('input[name="time-type"]').change(function() {
            d.dateChanged()
        });
        $("#btn-set-time").click(function(a) {
            a.preventDefault();
            if (!d.vars.dateModified && !$("#wrapper-settings-time").is(":visible")) {
                d.resetDateTime()
            }
            T.LayoutManager.beforeResize();
            $("#wrapper-settings-time").slideToggle(300, function() {
                T.LayoutManager.resize()
            })
        });
        $("#btn-reverse").click(function() {
            var a = T.Session.departureLocation.get();
            var b = T.Session.arrivalLocation.get();
            T.Session.departureLocation.input.val(b.name);
            T.Session.departureLocation.fromSuggestion(b);
            T.Session.departureLocation.drawMarker();
            T.Session.arrivalLocation.input.val(a.name);
            T.Session.arrivalLocation.fromSuggestion(a);
            T.Session.arrivalLocation.drawMarker();
            d.computeRoute();
            return false
        });
        $("#btn-settings").click(function(a) {
            a.preventDefault();
            T.LayoutManager.beforeResize();
            $("#wrapper-settings").slideToggle(300, function() {
                T.LayoutManager.resize()
            })
        });
        $("#btn-compute-route").click(function() {
            d.computeRoute();
            return false
        });
        $("#btn-new-search").click(function() {
            T.PageManager.resetURL();
            return false
        });
        $("#btn-more-routes").click(function() {
            d.vars.numRoutes = d.vars.numRoutes < 7 ? d.vars.numRoutes + 2 : 7;
            d.computeRoute(true, d.vars.numRoutes);
            return false
        });
        $("#btn-minus").click(function() {
            var a = parseFloat($("#input-max-walk").val()) - 0.5;
            if (a < 0.5) {
                a = 0.5
            }
            $("#input-max-walk").val(a);
            return false
        });
        $("#btn-plus").click(function() {
            var a = parseFloat($("#input-max-walk").val()) + 0.5;
            if (a > 5) {
                a = 5
            }
            $("#input-max-walk").val(a);
            return false
        });
        $(window).bind("locationReady", function() {
            if (!T.LayoutManager.isWidget() || T.LayoutManager.getWidgetMode() == "premium") {
                d.computeRoute()
            }
        });
        $(window).bind("displayRoute", function(a, b) {
            if (!T.Route.isRouteDisplayed()) {
                return
            }
            T.Route.displayRoutes(b)
        });
        $(window).bind("mapClick", function(a) {
            $(document).mousedown()
        });
        $("#wrapper-feedback textarea").click(function() {
            T.LayoutManager.beforeResize();
            var a = $(this);
            $(this).animate({
                height: 70
            }, 200);
            $(".feedback-input").slideToggle(200, function() {
                T.LayoutManager.resize();
                a.off("click")
            });
            $("#page-plan").animate({
                scrollTop: 1000
            }, 200)
        });
        $("#wrapper-feedback form").submit(function() {
            var a = $(this).find('input[name="email"]');
            var b = $(this).find('textarea[name="feedback"]');
            if (!a.val().trim()) {
                a.focus();
                return false
            }
            if (!b.val().trim()) {
                b.focus();
                return false
            }
            T.LayoutManager.beforeResize();
            $(".feedback-success").slideDown(200);
            $(this).slideUp(200, function() {
                T.LayoutManager.resize()
            });
            $.post("http://www.transporturban.ro/feedback.php", $(this).serialize());
            return false
        })
    },
    computeRoute: function(l, i) {
        $("#btn-plan").click();
        var j = T.Session.departureLocation.getLatLng();
        if (!j) {
            if (!$("#input-departure").is(":focus")) {
                T.Session.departureLocation.geocode(true)
            }
            return
        }
        $("#input-departure").blur();
        var k = T.Session.arrivalLocation.getLatLng();
        if (!k) {
            if (!$("#input-arrival").is(":focus")) {
                T.Session.arrivalLocation.geocode(true)
            }
            return
        }
        $("#input-arrival").blur();
        if (!i) {
            this.vars.numRoutes = i = 3
        }
        var m = new Date();
        var n = {
            router: T.Metadata.getRouter(),
            from: j.toString(),
            to: k.toString(),
            time: this.vars.dateModified ? $(".input-time").val() : m.format("HH:MM"),
            date: this.vars.dateModified ? $(".input-date").val() : m.format(T.Utils.getDateFormat(this.vars.dateType)),
            timeType: $('input[name="time-type"]:checked').val(),
            maxWalk: $("#input-max-walk").val(),
            routeType: $('input[name="route-type"]:checked').val(),
            numRoutes: i
        };
        if (!T.LayoutManager.isWidget() || T.LayoutManager.getWidgetMode() == "premium") {
            T.Route.plan(n);
            T.Panel.Lines.reset();
            if (!l) {
                T.PageManager.buildRouteURL(n)
            }
        } else {
            var h = "http://www.transporturban.ro" + T.PageManager.buildRouteURL(n);
            window.open(h, "_blank")
        }
    },
    dateChanged: function() {
        this.vars.dateModified = true;
        var b = $('input[name="time-type"]:checked');
        $("#time-type-label").text(b.closest("label").text());
        $("#btn-set-time").text($(".input-time").val() + ", " + $(".input-date").val());
        $(".wrapper-time i").removeClass().addClass(b.val() == 1 ? "icon-caret-right" : "icon-caret-left")
    },
    fromConfig: function(b) {
        this.reset();
        T.Session.departureLocation.updateLatLng(new T.Map.LatLng(b.from), true, true);
        T.Session.arrivalLocation.updateLatLng(new T.Map.LatLng(b.to), true, true);
        if (b.timeType) {
            $('input[name="time-type"][value="' + b.timeType + '"]').prop("checked", true)
        }
        if (b.time) {
            this.vars.dateModified = true;
            $(".input-time").val(b.time);
            $(".input-date").val(b.date);
            this.dateChanged()
        }
        if (b.maxWalk) {
            $("#input-max-walk").val(b.maxWalk)
        }
        if (b.routeType) {
            $('input[name="route-type"][value="' + b.routeType + '"]').prop("checked", true)
        }
        this.computeRoute(true)
    },
    resetDateTime: function() {
        var b = new Date();
        $(".input-time").val(b.format("HH:MM"));
        $(".input-date").val(b.format(T.Utils.getDateFormat(this.vars.dateType)))
    },
    reset: function() {
        this.vars.dateModified = false;
        var b = $('input[name="time-type"][value="1"]').prop("checked", true);
        this.resetDateTime();
        $("#time-type-label").text(b.closest("label").text());
        $("#btn-set-time").text(T.Lang.getString("NOW"));
        $(".wrapper-time i").removeClass().addClass("icon-caret-right");
        $("#input-max-walk").val(2);
        $('input[name="route-type"][value="1"]').prop("checked", true);
        T.Session.departureLocation.reset();
        T.Session.arrivalLocation.reset();
        T.Route.reset()
    }
};
T.Route = {
    vars: {
        currentRoute: 0,
        response: null,
        clickCount: 0
    },
    plan: function(d) {
        var c = this;
        $.get("http://www.transporturban.ro/api/route.php", d, function(a) {
            if (!a || a.status == "error" || !a.data) {
                c.reset();
                $("#wrapper-route-error").slideDown(200);
                return
            }
            $("#wrapper-route-error").hide();
            c.vars.response = a.data;
            c.displayRoutes(0, true);
            T.Map.map.removeStops()
        }, "json");
        return false
    },
    displayRoutes: function(g, h) {
        if ($(".route-details").eq(g).is(":visible") && T.LayoutManager.isMobile()) {
            $("#btn-toggle-panel").click()
        }
        this.vars.currentRoute = g;
        T.Map.map.resetRoutes();
        var e = this;
        var f = this.vars.response.itineraries;
        $(f).each(function(a, b) {
            if (a != g) {
                e.displayRouteOverview(b, a)
            }
        });
        this.displayRoute(f[g], g);
        this.displayRouteStops(f[g], g);
        this.displayLabels();
        if (h) {
            this.displaySummary(f)
        }
        T.Map.map.fitRouteBounds(g);
        $(".route-container").removeClass("selected");
        $(".route-container").eq(g).addClass("selected");
        $(".route-details").hide();
        $(".route-details").eq(g).show();
        T.LayoutManager.resize()
    },
    displayRoute: function(d, c) {
        $.each(d.legs, function(h, b) {
            var a = L.PolylineUtil.decode(b.geometry);
            var g = {
                itinerary: c,
                geometry: a,
                color: b.routeColor,
                textColor: b.routeTextColor
            };
            T.Map.map.displayRouteSegment(g)
        })
    },
    displayRouteStops: function(f, e, g) {
        var h = [];
        $.each(f.legs, function(c, b) {
            var a = L.PolylineUtil.decode(b.geometry);
            if (b.mode != "WALK") {
                h.push({
                    id: b.from.id,
                    latLng: a[0],
                    name: b.from.name
                });
                h.push({
                    id: b.to.id,
                    latLng: T.Utils.lastElement(a),
                    name: b.to.name
                });
                if (!g) {
                    return
                }
                $.each(b.intermediateStops, function(j, d) {
                    h.push({
                        id: d.id,
                        latLng: [d.lat, d.lng],
                        name: d.name
                    })
                })
            }
        });
        T.Map.map.displayRouteStops(h)
    },
    displayRouteOverview: function(f, e) {
        var g = [];
        $(f.legs).each(function(b, a) {
            g = g.concat(L.PolylineUtil.decode(a.geometry))
        });
        var h = {
            itinerary: e,
            geometry: g,
            color: "666",
            isOverview: true
        };
        T.Map.map.displayRouteSegment(h)
    },
    displayLabels: function() {
        T.Map.map.resetLabels();
        var h = T.Map.map.getZoom();
        if (!this.vars.response) {
            return
        }
        if (h < 12) {
            return
        }
        var f = this.vars.response.itineraries[this.vars.currentRoute];
        var g = {
            12: 4000,
            13: 2800,
            14: 2200,
            15: 1600,
            16: 800,
            17: 400,
            18: 250
        };
        var e = g[h];
        $(f.legs).each(function(l, d) {
            if (d.mode != "WALK") {
                var b = L.PolylineUtil.decode(d.geometry);
                var c = T.Utils.pathLength(b) * 1000;
                var i = Math.ceil(c / e);
                if (i == 1) {
                    i++
                }
                var a = T.Utils.getPointsAtDistance(b, c / i + 10);
                $(a).each(function(k, j) {
                    T.Map.map.addLabel(j, d.route, d.routeColor, d.routeTextColor)
                })
            }
        })
    },
    displaySummary: function(e) {
        var d = this;
        var f = $("#wrapper-routes").html("").show();
        $(e).each(function(l, n) {
            var b = $("<div>").addClass("route-container").attr("data-index", l);
            if (l == 0) {
                b.addClass("selected")
            }
            var a = $("<div>").addClass("progress");
            var c = $("<div>").addClass("route-details");
            var m = 0;
            $(n.legs).each(function(v, x) {
                var t = Math.floor(x.distance / n.distance * 100);
                m += t;
                if (x.mode != "WALK") {
                    var j = $("<div>").addClass("bar bar-stop").append($("<div>").addClass("stop"));
                    var k = $("<div>").addClass("bar").css({
                        width: t + "%",
                        backgroundColor: "#" + x.routeColor
                    });
                    var h = $("<div>").addClass("route-label").append($("<span>").css({
                        color: "#" + x.routeTextColor,
                        backgroundColor: "#" + x.routeColor
                    }).text(x.route));
                    a.append(j.clone()).append(k.append(h)).append(j.clone());
                    var g = x.intermediateStops.length + 1;
                    var u = $("<div>").addClass("details-item").append($("<div>").addClass("clearfix").append($("<div>").addClass("pull-left item-desc").html(T.Lang.getRouteTypeString(x.routeType) + " <strong>" + x.route + "</strong> " + T.Lang.getString("TO") + " <strong>" + x.to.name + "</strong")).append($("<div>").addClass("pull-right").html("<small>" + Math.floor(x.duration / 60) + " min</small>"))).append($("<div>").addClass("item-extra").html("<small>" + x.startTime + ", " + g + " " + (g == 1 ? T.Lang.getString("STOPS_1") : T.Lang.getString("STOPS_N")) + "</small>"));
                    c.append(u)
                } else {
                    var w = v == (n.legs.length - 1) ? (t + (100 - m)) : t;
                    var k = $("<div>").addClass("bar").css({
                        width: w + "%",
                        backgroundColor: "#" + x.routeColor
                    });
                    a.append(k);
                    var u = $("<div>").addClass("details-item").append($("<div>").addClass("clearfix").append($("<div>").addClass("pull-left item-desc").html(T.Lang.getString("WALK") + " " + T.Lang.getString("TO") + " " + (v == (n.legs.length - 1) ? T.Lang.getString("DESTINATION") : "<strong>" + x.to.name + "</strong"))).append($("<div>").addClass("pull-right").html("<small>" + Math.floor(x.duration / 60) + " min</small>")));
                    c.append(u)
                }
            });
            var i = $("<div>").addClass("route-info clearfix");
            i.append($("<div>").addClass("info-item").append($("<span>").append($("<i>").addClass("icon-time")).append(" " + Math.floor(n.duration / 60) + " min"))).append($("<div>").addClass("info-item").append($("<span>").append($("<i>").addClass("icon-road")).append(" " + T.Utils.roundNumber(n.distance / 1000, 1) + " km"))).append($("<div>").addClass("info-item").append(n.transfers >= 0 ? $("<span>").append($("<i>").addClass("icon-code-fork icon-rotate-90")).append(" " + n.transfers + " " + (n.transfers == 1 ? T.Lang.getString("TRANSFERS_1") : T.Lang.getString("TRANSFERS_N"))) : ""));
            f.append(b.append($("<div>").addClass("route-summary").append(a).append(i)).append(c));
            $(".route-summary .bar").each(function() {
                var g = $(this).find("span");
                if (g && (g.width() + 15) > $(this).width()) {
                    g.remove()
                }
            })
        });
        $(".route-container").click(function() {
            d.displayRoutes($(this).attr("data-index"))
        });
        $("#wrapper-routes-options").show()
    },
    isRouteDisplayed: function() {
        return this.vars.response != null
    },
    reset: function() {
        this.vars.response = null;
        this.vars.currentRoute = 0;
        T.Map.map.resetRoutes();
        T.Map.map.resetLabels();
        $("#wrapper-route-error").hide();
        $("#wrapper-routes-options").hide();
        $("#wrapper-routes").html("").hide()
    }
};
T.Search = {
    init: function(f, g, h, e) {
        f.off("keyup");
        f.keyup(function(a) {
            if (a.keyCode == 27) {
                $(this).val("")
            }
            var b = [];
            var j = $(this).val().trim().toLowerCase();
            if (j == "") {
                g.createTable(h);
                return
            }
            for (var c in h) {
                var o = h[c];
                for (var d in e) {
                    var i = e[d];
                    if (!o[i]) {
                        continue
                    }
                    if (o[i].toLowerCase().indexOf(j) !== -1) {
                        b.push(o);
                        break
                    }
                }
            }
            g.createTable(b)
        })
    },
    typeahead: function(h, e) {
        var g = ["icon-location-arrow", "icon-time", "icon-star-empty", "icon-circle-blank", "icon-map-marker", "icon-road"];
        var f;
        h.typeahead({
            source: function(b, a) {
                e.fromSuggestion({
                    name: b
                });
                if(/(android)/i.test(navigator.userAgent))
                {$.get("http://www.transporturban.ro/api/suggestions.php", {
                    term: b,
                    router: T.Metadata.getRouter(),
                    lang: T.Metadata.getLang()
                }, function(i) {
                    f = i.data || [];
                    var c = [];
                    for (var d in f) {
                        c.push(d)
                    }
                    a(c)
                }, "json")
            } else if (b != "") {
            $.get("http://www.transporturban.ro/api/suggestions.php", {
                    term: b,
                    router: T.Metadata.getRouter(),
                    lang: T.Metadata.getLang()
                }, function(i) {
                    f = i.data || [];
                    var c = [];
                    for (var d in f) {
                        c.push(d)
                    }
                    a(c)
                }, "json")
            }},
            matcher: function(a) {
                return true
            },
            sorter: function(a) {
                return a
            },
            updater: function(a) {
                if (!a) {
                    return
                }
                e.input.val(f[a].name);
                e.fromSuggestion(f[a], true);
                return f[a].name
            },
            highlighter: function(b) {
                var c = f[b];
                var a = c.name.length > 27 ? c.name.substr(0, 27) + "..." : c.name;
                return '<span class="icon-wrapper"><i class="' + g[c.type - 1] + ' icon-grey"></i></span> ' + a
            },
            minLength: 0,
            menu: '<ul class="typeahead dropdown-menu ' + e.icon + '"></ul>'
        })
    }
};
T.Session = {
    currentPanelPage: 0,
    rightClickLatLng: null,
    departureLocation: null,
    arrivalLocation: null,
    currentUserLocation: null,
    locationInputPopoverShowed: false
};
T.Stops = {
    vars: {},
    load: function() {
        if (T.Route.isRouteDisplayed() || T.Panel.Lines.isTripDisplayed() || T.Map.map.getZoom() < 12 || (T.LayoutManager.isWidget() && T.LayoutManager.getWidgetMode() != "premium")) {
            T.Map.map.removeStops();
            return
        }
        var b = T.Map.map.getBounds();
        b.router = T.Metadata.getRouter();
        b.zoom = T.Map.map.getZoom();
        $.get("http://www.transporturban.ro/api/stops-get.php", b, function(a) {
            if (!a || a.status == "error") {
                return
            }
            T.Map.map.addStops(a.data)
        }, "json")
    },
    getDetails: function(c, d) {
        $.get("http://www.transporturban.ro/api/stops-details-get.php", {
            id: c
        }, function(b) {
            if (!b || b.status == "error") {
                return
            }
            var a = $("<div>").append($("<div>").addClass("popup-stop-name").text(b.data.name));
            if (b.data.live) {
                a.append($("<div>").addClass("alert alert-popup").append("<strong>LIVE!</strong>").append($("<a>").addClass("btn-reload pull-right").html('<i class="icon-refresh"></i>')))
            }
            a.append($("<div>").addClass("popup-content"));
            $.each(b.data.lines, function(p, m) {
                var r = $("<div>").addClass("popup-lines");
                if (b.data.live) {
                    var q = {
                        styles: ["table", "table-striped", "table-hover", "table-condensed", "popup-table"],
                        columns: [{
                            type: "text",
                            property: "shortname",
                            width: 150,
                            func: function(e, f) {
                                return $("<a>").attr("href", "#").text(e[f]).click(function() {
                                    T.PageManager.gotoURL("line/" + e[f] + "/");
                                    return false
                                })
                            }
                        }, {
                            type: "text",
                            property: "time",
                            width: 50
                        }]
                    };
                    var i = T.Table.create(q);
                    var o = i.createTable(m);
                    r.append(o)
                } else {
                    $.each(m, function(e, f) {
                        r.append($("<a>").attr("href", "#").addClass("popup-line").css("color", f.color).text(f.shortname).click(function() {
                            T.PageManager.gotoURL("line/" + f.shortname + "/");
                            return false
                        }))
                    })
                }
                var n = $("<div>").addClass("popup-lines-group").append($("<div>").addClass("popup-group-type").text(T.Lang.getRouteTypeString(p))).append(r);
                a.find(".popup-content").append(n)
            });
            d(a.get(0))
        }, "json")
    }
};
T.Table = {
    create: function(d, c) {
        if (!c) {
            var c = $("<table>")
        }
        return new this.TableFactory(c, d)
    },
    attachButtons: function(i, h) {
        var g = $("<div>").addClass("pull-right");
        for (var j in i) {
            var f = T.Button.create(i[j]);
            g.append(f).append("&nbsp;")
        }
        h.bind("tableEmpty", function() {
            $(".btn", g).tooltip("hide");
            g.detach()
        });
        h.bind("tableChanged", function() {
            $("tr", h).hover(function() {
                $(".btn", g).attr("data-id", $(this).attr("data-id"));
                $("td:last", this).append(g)
            }, function() {
                g.detach()
            })
        });
        return g
    }
};
T.Table.TableFactory = function(c, d) {
    this.config = d;
    this.table = c;
    this.thead = null;
    this.tbody = null;
    this.createTable = function(a) {
        this.setStyle(this.table, this.config.styles);
        this.table.trigger("tableEmpty");
        this.table.html("");
        this.thead = $("<thead>");
        this.tbody = $("<tbody>");
        this.createHeader();
        for (var b in a) {
            this.createRow(a[b], b)
        }
        this.table.append(this.thead).append(this.tbody);
        this.table.trigger("tableChanged");
        return this.table
    };
    this.createHeader = function() {
        var a = $("<tr>");
        for (var b in this.config.header) {
            var g = this.config.header[b];
            var h = this.createHeaderColumn(g);
            a.append(h)
        }
        this.thead.append(a)
    };
    this.createRow = function(b, i) {
        var a = $("<tr>");
        if (b.id) {
            a.attr("data-id", b.id)
        }
        for (var j in this.config.columns) {
            var l = this.config.columns[j];
            var k;
            switch (l.type) {
                case "buttons":
                    k = this.createButtonsColumn(l, b);
                    break;
                case "input":
                    k = this.createInputColumn(l, b, i);
                    break;
                case "text":
                default:
                    k = this.createTextColumn(l, b);
                    break
            }
            a.append(k)
        }
        this.tbody.append(a)
    };
    this.setStyle = function(a, b) {
        a.removeClass();
        if (b) {
            if (typeof b === "string") {
                a.addClass(b)
            } else {
                a.addClass(b.join(" "))
            }
        }
    };
    this.createColumn = function(b, a) {
        var f = $(a ? "<th>" : "<td>");
        if (b.width) {
            f.attr("width", b.width)
        }
        return f
    };
    this.createContainer = function(a) {
        if (!a) {
            return null
        }
        var b = $("<" + a.tag + ">");
        this.setStyle(b, a.styles);
        return b
    };
    this.createButtonsColumn = function(l, a) {
        var m = this.createColumn(l);
        var n = this.createContainer(l.container);
        for (var b in l.buttons) {
            var i = l.buttons[b];
            i.dataId = a.id;
            var k = T.Button.create(i);
            if (n) {
                n.append(k).append("&nbsp;")
            } else {
                m.append(k).append("&nbsp;")
            }
        }
        if (n) {
            m.append(n)
        }
        return m
    };
    this.createTextColumn = function(i, b) {
        var j = this.createColumn(i);
        var k = this.createContainer(i.container);
        var a;
        var l = i.maxLength ? i.maxLength : 40;
        if (i.func) {
            a = i.func(b, i.property)
        } else {
            a = b[i.property]
        }
        if (a && a.length > l) {
            a = a.substr(0, l) + "..."
        }
        if (k) {
            k.append(a)
        } else {
            j.append(a)
        }
        if (k) {
            j.append(k)
        }
        return j
    };
    this.createHeaderColumn = function(b) {
        var g = this.createColumn(b, true);
        var h = this.createContainer(b.container);
        var a = b.text;
        if (a && a.length > 40) {
            a = a.substr(0, 40) + "..."
        }
        if (h) {
            h.append(a)
        } else {
            g.append(a)
        }
        if (h) {
            g.append(h)
        }
        return g
    };
    this.createInputColumn = function(k, j, a) {
        var m = T.Form.createFormFactory(T.Form.defaultConfig);
        var l = this.createColumn(k);
        var n = m.createElement(k.config);
        n.addClass("no-margin");
        var b;
        if (k.func) {
            b = k.func(j, k.property)
        } else {
            b = j[k.property]
        }
        n.val(b);
        n.attr("id", k.property + "-" + a);
        l.append(n);
        return l
    }
};
T.Utils = {
    getByID: function(d, c) {
        return d[c]
    },
    deleteByID: function(d, c) {
        delete d[c]
    },
    getStationByID: function(b) {
        return this.getByID(T.Session.stations, b)
    },
    searchByID: function(d, g) {
        if (!g) {
            return null
        }
        for (var f in d) {
            var h = d[f];
            if (h.id && h.id == g) {
                return h
            }
        }
        return null
    },
    removeByID: function(d, g) {
        if (!g) {
            return
        }
        for (var f in d) {
            var h = d[f];
            if (h.id && h.id == g) {
                d.splice(f, 1);
                return
            }
        }
    },
    updateEntry: function(c, d) {
        if (!c || !d) {
            return
        }
        this.deleteByID(c, d.id);
        c[d.id] = d
    },
    roundNumber: function(d, f) {
        var e = Math.round(d * Math.pow(10, f)) / Math.pow(10, f);
        return e
    },
    confirm: function(f, g, h) {
        var e = $("#modal-confirm").modal("show");
        e.on("hide", function() {
            $("button", e).off("click")
        });
        if (f) {
            e.find(".modal-body p").text(f)
        }
        if (g) {
            $("#btn-ok-modal").click(g)
        }
        if (h) {
            $("#btn-cancel-modal").click(h)
        }
    },
    resetForm: function(b) {
        $(".control-group", b).removeClass("error");
        $(".alert", b).remove();
        b.get(0).reset();
        $("input[type=hidden]", b).val("")
    },
    createAlert: function(f, j) {
        var h = $("<div>").addClass("alert " + f);
        var g = $("<button>").addClass("close").attr({
            type: "button",
            "data-dismiss": "alert"
        }).html("&times;");
        var i = $("<small>").text(j);
        h.append(g).append(i);
        return h
    },
    showFormErrors: function(i, j) {
        if (!j) {
            return
        }
        $(".control-group", j).removeClass("error");
        $(".alert", j).remove();
        var g = i ? "alert-error" : "alert-success";
        var k = i ? "Check input data!" : "Saved!";
        j.prepend(this.createAlert(g, k));
        if (!i) {
            return
        }
        for (var h in i) {
            var l = i[h];
            $(':input[name="' + l["for"] + '"]', j).closest(".control-group").addClass("error")
        }
    },
    toIndexedObject: function(h) {
        var f = {};
        for (var d in h) {
            var g = h[d];
            f[g.id] = g
        }
        return f
    },
    distance: function(e, g, f, h) {
        return Math.sqrt((e -= f) * e + (g -= h) * g)
    },
    geoDistance: function(r, o, s, p) {
        var q = 6371;
        var d = (s - r) / 180 * Math.PI;
        var t = (p - o) / 180 * Math.PI;
        var r = r / 180 * Math.PI;
        var s = s / 180 * Math.PI;
        var a = Math.sin(d / 2) * Math.sin(d / 2) + Math.sin(t / 2) * Math.sin(t / 2) * Math.cos(r) * Math.cos(s);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var n = q * c;
        return n
    },
    pathLength: function(d) {
        if (!d || d.length <= 1) {
            return 0
        }
        var f = 0;
        for (var e = 1; e < d.length; e++) {
            f += this.geoDistance(d[e - 1].lat, d[e - 1].lng, d[e].lat, d[e].lng)
        }
        return this.roundNumber(f, 2)
    },
    getPointAtDistance: function(m, i) {
        if (i == 0) {
            return null
        }
        if (i < 0) {
            return null
        }
        var k = 0;
        var p = 0;
        for (var o = 1;
            (o < m.length && k < i); o++) {
            p = k;
            k += this.geoDistance(m[o][0], m[o][1], m[o - 1][0], m[o - 1][1])
        }
        if (k < i) {
            return null
        }
        var l = m[o - 2];
        var n = m[o - 1];
        var j = (i - p) / (k - p);
        return new T.Map.LatLng(l[0] + (n[0] - l[0]) * j, l[1] + (n[1] - l[1]) * j)
    },
    getPointsAtDistance: function(i, t) {
        var p = t;
        var m = [];
        if (t <= 0) {
            return m
        }
        var o = 0;
        var r = 0;
        for (var q = 1;
            (q < i.length); q++) {
            r = o;
            o += this.geoDistance(i[q].lat, i[q].lng, i[q - 1].lat, i[q - 1].lng) * 1000;
            while (o > p) {
                var l = i[q - 1];
                var n = i[q];
                var s = (p - r) / (o - r);
                m.push(new T.Map.LatLng(l.lat + (n.lat - l.lat) * s, l.lng + (n.lng - l.lng) * s));
                p += t
            }
        }
        return m
    },
    lastElement: function(b) {
        if (!b || b.length == 0) {
            return null
        }
        return b[b.length - 1]
    },
    shadeColor: function(i, l) {
        var h = parseInt(i.slice(1), 16),
            j = Math.round(2.55 * l),
            m = (h >> 16) + j,
            k = (h >> 8 & 255) + j,
            n = (h & 255) + j;
        return "#" + (16777216 + (m < 255 ? m < 1 ? 0 : m : 255) * 65536 + (k < 255 ? k < 1 ? 0 : k : 255) * 256 + (n < 255 ? n < 1 ? 0 : n : 255)).toString(16).slice(1)
    },
    getDateFormat: function(b) {
        switch (b) {
            case "ymd":
                return "yyyy-mm-dd";
            case "mdy":
                return "mm/dd/yyyy";
            case "dmy":
            default:
                return "dd.mm.yyyy"
        }
    },
    queryToObject: function(f) {
        var d = f.split("&");
        var e = {};
        $.each(d, function(b, a) {
            a = a.split("=");
            e[a[0]] = decodeURIComponent(a[1] || "")
        });
        return e
    }
};;