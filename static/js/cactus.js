parcelRequire = function(e, r, t, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire, u = "function" == typeof require && require;
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i)
                    return i(t, !0);
                if (o)
                    return o(t, !0);
                if (u && "string" == typeof t)
                    return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND",
                c
            }
            p.resolve = function(r) {
                return e[t][1][r] || r
            }
            ,
            p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;
        function p(e) {
            return f(p.resolve(e))
        }
    }
    f.isParcelRequire = !0,
    f.Module = function(e) {
        this.id = e,
        this.bundle = f,
        this.exports = {}
    }
    ,
    f.modules = e,
    f.cache = r,
    f.parent = o,
    f.register = function(r, t) {
        e[r] = [function(e, r) {
            r.exports = t
        }
        , {}]
    }
    ;
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c])
        } catch (e) {
            i || (i = e)
        }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f,
    i)
        throw i;
    return f
}({
    "asWa": [function(require, module, exports) {
        !function(r) {
            "use strict";
            function n(r, n, t) {
                return t.a = r,
                t.f = n,
                t
            }
            function t(r) {
                return n(2, r, function(n) {
                    return function(t) {
                        return r(n, t)
                    }
                })
            }
            function e(r) {
                return n(3, r, function(n) {
                    return function(t) {
                        return function(e) {
                            return r(n, t, e)
                        }
                    }
                })
            }
            function u(r) {
                return n(4, r, function(n) {
                    return function(t) {
                        return function(e) {
                            return function(u) {
                                return r(n, t, e, u)
                            }
                        }
                    }
                })
            }
            function a(r) {
                return n(5, r, function(n) {
                    return function(t) {
                        return function(e) {
                            return function(u) {
                                return function(a) {
                                    return r(n, t, e, u, a)
                                }
                            }
                        }
                    }
                })
            }
            function c(r) {
                return n(6, r, function(n) {
                    return function(t) {
                        return function(e) {
                            return function(u) {
                                return function(a) {
                                    return function(c) {
                                        return r(n, t, e, u, a, c)
                                    }
                                }
                            }
                        }
                    }
                })
            }
            function i(r) {
                return n(7, r, function(n) {
                    return function(t) {
                        return function(e) {
                            return function(u) {
                                return function(a) {
                                    return function(c) {
                                        return function(i) {
                                            return r(n, t, e, u, a, c, i)
                                        }
                                    }
                                }
                            }
                        }
                    }
                })
            }
            function o(r) {
                return n(9, r, function(n) {
                    return function(t) {
                        return function(e) {
                            return function(u) {
                                return function(a) {
                                    return function(c) {
                                        return function(i) {
                                            return function(o) {
                                                return function(f) {
                                                    return r(n, t, e, u, a, c, i, o, f)
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                })
            }
            function f(r, n, t) {
                return 2 === r.a ? r.f(n, t) : r(n)(t)
            }
            function s(r, n, t, e) {
                return 3 === r.a ? r.f(n, t, e) : r(n)(t)(e)
            }
            function l(r, n, t, e, u) {
                return 4 === r.a ? r.f(n, t, e, u) : r(n)(t)(e)(u)
            }
            function b(r, n, t, e, u, a) {
                return 5 === r.a ? r.f(n, t, e, u, a) : r(n)(t)(e)(u)(a)
            }
            function d(r, n, t, e, u, a, c) {
                return 6 === r.a ? r.f(n, t, e, u, a, c) : r(n)(t)(e)(u)(a)(c)
            }
            function v(r, n, t, e, u, a, c, i) {
                return 7 === r.a ? r.f(n, t, e, u, a, c, i) : r(n)(t)(e)(u)(a)(c)(i)
            }
            function p(r, n) {
                for (var t, e = [], u = h(r, n, 0, e); u && (t = e.pop()); u = h(t.a, t.b, 0, e))
                    ;
                return u
            }
            function h(r, n, t, e) {
                if (r === n)
                    return !0;
                if ("object" != typeof r || null === r || null === n)
                    return "function" == typeof r && U(5),
                    !1;
                if (t > 100)
                    return e.push(q(r, n)),
                    !0;
                for (var u in 0 > r.$ && (r = ot(r),
                n = ot(n)),
                r)
                    if (!h(r[u], n[u], t + 1, e))
                        return !1;
                return !0
            }
            var g = t(p);
            function m(r, n, t) {
                if ("object" != typeof r)
                    return r === n ? 0 : n > r ? -1 : 1;
                if (void 0 === r.$)
                    return (t = m(r.a, n.a)) ? t : (t = m(r.b, n.b)) ? t : m(r.c, n.c);
                for (; r.b && n.b && !(t = m(r.a, n.a)); r = r.b,
                n = n.b)
                    ;
                return t || (r.b ? 1 : n.b ? -1 : 0)
            }
            var $ = t(function(r, n) {
                var t = m(r, n);
                return 0 > t ? at : t ? ut : et
            })
              , w = 0;
            function q(r, n) {
                return {
                    a: r,
                    b: n
                }
            }
            function y(r, n, t) {
                return {
                    a: r,
                    b: n,
                    c: t
                }
            }
            function E(r) {
                return r
            }
            function x(r, n) {
                var t = {};
                for (var e in r)
                    t[e] = r[e];
                for (var e in n)
                    t[e] = n[e];
                return t
            }
            var k = t(L);
            function L(r, n) {
                if ("string" == typeof r)
                    return r + n;
                if (!r.b)
                    return n;
                var t = N(r.a, n);
                r = r.b;
                for (var e = t; r.b; r = r.b)
                    e = e.b = N(r.a, n);
                return t
            }
            var A = {
                $: 0
            };
            function N(r, n) {
                return {
                    $: 1,
                    a: r,
                    b: n
                }
            }
            var T = t(N);
            function C(r) {
                for (var n = A, t = r.length; t--; )
                    n = N(r[t], n);
                return n
            }
            function D(r) {
                for (var n = []; r.b; r = r.b)
                    n.push(r.a);
                return n
            }
            var S = e(function(r, n, t) {
                for (var e = []; n.b && t.b; n = n.b,
                t = t.b)
                    e.push(f(r, n.a, t.a));
                return C(e)
            })
              , P = t(function(r, n) {
                return C(D(n).sort(function(n, t) {
                    return m(r(n), r(t))
                }))
            })
              , R = e(function(r, n, t) {
                for (var e = [], u = 0; r > u; u++)
                    e[u] = t(n + u);
                return e
            })
              , B = t(function(r, n) {
                for (var t = [], e = 0; r > e && n.b; e++)
                    t[e] = n.a,
                    n = n.b;
                return t.length = e,
                q(t, n)
            });
            function U(r) {
                throw Error("https://github.com/elm/core/blob/1.0.0/hints/" + r + ".md")
            }
            var I = t(function(r, n) {
                return r + n
            })
              , j = t(function(r, n) {
                return r * n
            })
              , O = t(Math.pow)
              , z = t(function(r, n) {
                var t = n % r;
                return 0 === r ? U(11) : t > 0 && 0 > r || 0 > t && r > 0 ? t + r : t
            })
              , _ = Math.ceil
              , V = Math.floor
              , G = Math.round
              , H = Math.log
              , M = t(function(r, n) {
                return r + n
            })
              , F = e(function(r, n, t) {
                for (var e = t.length, u = 0; e > u; ) {
                    var a = t[u]
                      , c = t.charCodeAt(u);
                    u++,
                    55296 > c || c > 56319 || (a += t[u],
                    u++),
                    n = f(r, E(a), n)
                }
                return n
            })
              , J = e(function(r, n, t) {
                for (var e = t.length; e--; ) {
                    var u = t[e]
                      , a = t.charCodeAt(e);
                    56320 > a || a > 57343 || (u = t[--e] + u),
                    n = f(r, E(u), n)
                }
                return n
            })
              , Z = t(function(r, n) {
                return n.split(r)
            })
              , K = t(function(r, n) {
                return n.join(r)
            })
              , Y = e(function(r, n, t) {
                return t.slice(r, n)
            })
              , X = t(function(r, n) {
                for (var t = n.length; t--; ) {
                    var e = n[t]
                      , u = n.charCodeAt(t);
                    if (56320 > u || u > 57343 || (e = n[--t] + e),
                    !r(E(e)))
                        return !1
                }
                return !0
            })
              , Q = t(function(r, n) {
                return n.indexOf(r) > -1
            })
              , W = t(function(r, n) {
                return 0 === n.indexOf(r)
            })
              , rr = t(function(r, n) {
                return n.length >= r.length && n.lastIndexOf(r) === n.length - r.length
            });
            function nr(r) {
                return {
                    $: 2,
                    b: r
                }
            }
            var tr = nr(function(r) {
                return "number" != typeof r ? qr("an INT", r) : r > -2147483647 && 2147483647 > r && (0 | r) === r ? dt(r) : !isFinite(r) || r % 1 ? qr("an INT", r) : dt(r)
            })
              , er = nr(function(r) {
                return "boolean" == typeof r ? dt(r) : qr("a BOOL", r)
            })
              , ur = nr(function(r) {
                return "number" == typeof r ? dt(r) : qr("a FLOAT", r)
            })
              , ar = nr(function(r) {
                return dt(kr(r))
            })
              , cr = nr(function(r) {
                return "string" == typeof r ? dt(r) : r instanceof String ? dt(r + "") : qr("a STRING", r)
            })
              , ir = t(function(r, n) {
                return {
                    $: 6,
                    d: r,
                    b: n
                }
            });
            function or(r, n) {
                return {
                    $: 9,
                    f: r,
                    g: n
                }
            }
            var fr = t(function(r, n) {
                return {
                    $: 10,
                    b: n,
                    h: r
                }
            })
              , sr = t(function(r, n) {
                return or(r, [n])
            })
              , lr = e(function(r, n, t) {
                return or(r, [n, t])
            })
              , br = u(function(r, n, t, e) {
                return or(r, [n, t, e])
            })
              , dr = a(function(r, n, t, e, u) {
                return or(r, [n, t, e, u])
            })
              , vr = c(function(r, n, t, e, u, a) {
                return or(r, [n, t, e, u, a])
            })
              , pr = t(function(r, n) {
                try {
                    return gr(r, JSON.parse(n))
                } catch (r) {
                    return ft(f(st, "This is not valid JSON! " + r.message, kr(n)))
                }
            })
              , hr = t(function(r, n) {
                return gr(r, Lr(n))
            });
            function gr(r, n) {
                switch (r.$) {
                case 2:
                    return r.b(n);
                case 5:
                    return null === n ? dt(r.c) : qr("null", n);
                case 3:
                    return $r(n) ? mr(r.b, n, C) : qr("a LIST", n);
                case 4:
                    return $r(n) ? mr(r.b, n, wr) : qr("an ARRAY", n);
                case 6:
                    var t = r.d;
                    if ("object" != typeof n || null === n || !(t in n))
                        return qr("an OBJECT with a field named `" + t + "`", n);
                    var e = gr(r.b, n[t]);
                    return oe(e) ? e : ft(f(lt, t, e.a));
                case 7:
                    var u = r.e;
                    return $r(n) ? n.length > u ? (e = gr(r.b, n[u]),
                    oe(e) ? e : ft(f(bt, u, e.a))) : qr("a LONGER array. Need index " + u + " but only see " + n.length + " entries", n) : qr("an ARRAY", n);
                case 8:
                    if ("object" != typeof n || null === n || $r(n))
                        return qr("an OBJECT", n);
                    var a = A;
                    for (var c in n)
                        if (n.hasOwnProperty(c)) {
                            if (e = gr(r.b, n[c]),
                            !oe(e))
                                return ft(f(lt, c, e.a));
                            a = N(q(c, e.a), a)
                        }
                    return dt(It(a));
                case 9:
                    for (var i = r.f, o = r.g, s = 0; o.length > s; s++) {
                        if (e = gr(o[s], n),
                        !oe(e))
                            return e;
                        i = i(e.a)
                    }
                    return dt(i);
                case 10:
                    return e = gr(r.b, n),
                    oe(e) ? gr(r.h(e.a), n) : e;
                case 11:
                    for (var l = A, b = r.g; b.b; b = b.b) {
                        if (e = gr(b.a, n),
                        oe(e))
                            return e;
                        l = N(e.a, l)
                    }
                    return ft(vt(It(l)));
                case 1:
                    return ft(f(st, r.a, kr(n)));
                case 0:
                    return dt(r.a)
                }
            }
            function mr(r, n, t) {
                for (var e = n.length, u = [], a = 0; e > a; a++) {
                    var c = gr(r, n[a]);
                    if (!oe(c))
                        return ft(f(bt, a, c.a));
                    u[a] = c.a
                }
                return dt(t(u))
            }
            function $r(r) {
                return Array.isArray(r) || "undefined" != typeof FileList && r instanceof FileList
            }
            function wr(r) {
                return f(ie, r.length, function(n) {
                    return r[n]
                })
            }
            function qr(r, n) {
                return ft(f(st, "Expecting " + r, kr(n)))
            }
            function yr(r, n) {
                if (r === n)
                    return !0;
                if (r.$ !== n.$)
                    return !1;
                switch (r.$) {
                case 0:
                case 1:
                    return r.a === n.a;
                case 2:
                    return r.b === n.b;
                case 5:
                    return r.c === n.c;
                case 3:
                case 4:
                case 8:
                    return yr(r.b, n.b);
                case 6:
                    return r.d === n.d && yr(r.b, n.b);
                case 7:
                    return r.e === n.e && yr(r.b, n.b);
                case 9:
                    return r.f === n.f && Er(r.g, n.g);
                case 10:
                    return r.h === n.h && yr(r.b, n.b);
                case 11:
                    return Er(r.g, n.g)
                }
            }
            function Er(r, n) {
                var t = r.length;
                if (t !== n.length)
                    return !1;
                for (var e = 0; t > e; e++)
                    if (!yr(r[e], n[e]))
                        return !1;
                return !0
            }
            var xr = t(function(r, n) {
                return JSON.stringify(Lr(n), null, r) + ""
            });
            function kr(r) {
                return r
            }
            function Lr(r) {
                return r
            }
            var Ar = e(function(r, n, t) {
                return t[r] = Lr(n),
                t
            });
            function Nr(r) {
                return {
                    $: 0,
                    a: r
                }
            }
            function Tr(r) {
                return {
                    $: 2,
                    b: r,
                    c: null
                }
            }
            kr(null);
            var Cr = t(function(r, n) {
                return {
                    $: 3,
                    b: r,
                    d: n
                }
            })
              , Dr = t(function(r, n) {
                return {
                    $: 4,
                    b: r,
                    d: n
                }
            })
              , Sr = 0;
            function Pr(r) {
                var n = {
                    $: 0,
                    e: Sr++,
                    f: r,
                    g: null,
                    h: []
                };
                return Or(n),
                n
            }
            function Rr(r) {
                return Tr(function(n) {
                    n(Nr(Pr(r)))
                })
            }
            function Br(r, n) {
                r.h.push(n),
                Or(r)
            }
            var Ur = t(function(r, n) {
                return Tr(function(t) {
                    Br(r, n),
                    t(Nr(w))
                })
            })
              , Ir = !1
              , jr = [];
            function Or(r) {
                if (jr.push(r),
                !Ir) {
                    for (Ir = !0; r = jr.shift(); )
                        zr(r);
                    Ir = !1
                }
            }
            function zr(r) {
                for (; r.f; ) {
                    var n = r.f.$;
                    if (0 === n || 1 === n) {
                        for (; r.g && r.g.$ !== n; )
                            r.g = r.g.i;
                        if (!r.g)
                            return;
                        r.f = r.g.b(r.f.a),
                        r.g = r.g.i
                    } else {
                        if (2 === n)
                            return void (r.f.c = r.f.b(function(n) {
                                r.f = n,
                                Or(r)
                            }));
                        if (5 === n) {
                            if (0 === r.h.length)
                                return;
                            r.f = r.f.b(r.h.shift())
                        } else
                            r.g = {
                                $: 3 === n ? 0 : 1,
                                b: r.f.b,
                                i: r.g
                            },
                            r.f = r.f.d
                    }
                }
            }
            function _r(r) {
                return Tr(function(n) {
                    var t = setTimeout(function() {
                        n(Nr(w))
                    }, r);
                    return function() {
                        clearTimeout(t)
                    }
                })
            }
            var Vr = {};
            function Gr(r, n, t, e, u) {
                return {
                    b: r,
                    c: n,
                    d: t,
                    e: e,
                    f: u
                }
            }
            function Hr(r, n) {
                var t = {
                    g: n,
                    h: void 0
                }
                  , e = r.c
                  , u = r.d
                  , a = r.e
                  , c = r.f;
                function i(r) {
                    return f(Cr, i, {
                        $: 5,
                        b: function(n) {
                            var i = n.a;
                            return 0 === n.$ ? s(u, t, i, r) : a && c ? l(e, t, i.i, i.j, r) : s(e, t, a ? i.i : i.j, r)
                        }
                    })
                }
                return t.h = Pr(f(Cr, i, r.b))
            }
            var Mr = t(function(r, n) {
                return Tr(function(t) {
                    r.g(n),
                    t(Nr(w))
                })
            })
              , Fr = t(function(r, n) {
                return f(Ur, r.h, {
                    $: 0,
                    a: n
                })
            });
            function Jr(r) {
                return function(n) {
                    return {
                        $: 1,
                        k: r,
                        l: n
                    }
                }
            }
            function Zr(r) {
                return {
                    $: 2,
                    m: r
                }
            }
            var Kr = []
              , Yr = !1;
            function Xr(r, n, t) {
                if (Kr.push({
                    p: r,
                    q: n,
                    r: t
                }),
                !Yr) {
                    Yr = !0;
                    for (var e; e = Kr.shift(); )
                        Qr(e.p, e.q, e.r);
                    Yr = !1
                }
            }
            function Qr(r, n, t) {
                var e = {};
                for (var u in Wr(!0, n, e, null),
                Wr(!1, t, e, null),
                r)
                    Br(r[u], {
                        $: "fx",
                        a: e[u] || {
                            i: A,
                            j: A
                        }
                    })
            }
            function Wr(r, n, t, e) {
                switch (n.$) {
                case 1:
                    var u = n.k
                      , a = function(r, t, e) {
                        function u(r) {
                            for (var n = e; n; n = n.t)
                                r = n.s(r);
                            return r
                        }
                        return f(r ? Vr[t].e : Vr[t].f, u, n.l)
                    }(r, u, e);
                    return void (t[u] = function(r, n, t) {
                        return t = t || {
                            i: A,
                            j: A
                        },
                        r ? t.i = N(n, t.i) : t.j = N(n, t.j),
                        t
                    }(r, a, t[u]));
                case 2:
                    for (var c = n.m; c.b; c = c.b)
                        Wr(r, c.a, t, e);
                    return;
                case 3:
                    return void Wr(r, n.o, t, {
                        s: n.n,
                        t: e
                    })
                }
            }
            var rn, nn = t(function(r, n) {
                return n
            });
            var tn = "undefined" != typeof document ? document : {};
            function en(r, n) {
                r.appendChild(n)
            }
            function un(r) {
                return {
                    $: 0,
                    a: r
                }
            }
            var an = t(function(r, n) {
                return t(function(t, e) {
                    for (var u = [], a = 0; e.b; e = e.b) {
                        var c = e.a;
                        a += c.b || 0,
                        u.push(c)
                    }
                    return a += u.length,
                    {
                        $: 1,
                        c: n,
                        d: gn(t),
                        e: u,
                        f: r,
                        b: a
                    }
                })
            })(void 0);
            t(function(r, n) {
                return t(function(t, e) {
                    for (var u = [], a = 0; e.b; e = e.b) {
                        var c = e.a;
                        a += c.b.b || 0,
                        u.push(c)
                    }
                    return a += u.length,
                    {
                        $: 2,
                        c: n,
                        d: gn(t),
                        e: u,
                        f: r,
                        b: a
                    }
                })
            })(void 0);
            var cn = t(function(r, n) {
                return {
                    $: 4,
                    j: r,
                    k: n,
                    b: 1 + (n.b || 0)
                }
            })
              , on = t(function(r, n) {
                return {
                    $: "a0",
                    n: r,
                    o: n
                }
            })
              , fn = t(function(r, n) {
                return {
                    $: "a1",
                    n: r,
                    o: n
                }
            })
              , sn = t(function(r, n) {
                return {
                    $: "a2",
                    n: r,
                    o: n
                }
            })
              , ln = t(function(r, n) {
                return {
                    $: "a3",
                    n: r,
                    o: n
                }
            });
            function bn(r) {
                return /^\s*(javascript:|data:text\/html)/i.test(r) ? "" : r
            }
            var dn, vn = t(function(r, n) {
                return "a0" === n.$ ? f(on, n.n, function(r, n) {
                    var t = be(n);
                    return {
                        $: n.$,
                        a: t ? s(se, 3 > t ? pn : hn, le(r), n.a) : f(fe, r, n.a)
                    }
                }(r, n.o)) : n
            }), pn = t(function(r, n) {
                return q(r(n.a), n.b)
            }), hn = t(function(r, n) {
                return {
                    aD: r(n.aD),
                    bh: n.bh,
                    a7: n.a7
                }
            });
            function gn(r) {
                for (var n = {}; r.b; r = r.b) {
                    var t = r.a
                      , e = t.$
                      , u = t.n
                      , a = t.o;
                    if ("a2" !== e) {
                        var c = n[e] || (n[e] = {});
                        "a3" === e && "class" === u ? mn(c, u, a) : c[u] = a
                    } else
                        "className" === u ? mn(n, u, Lr(a)) : n[u] = Lr(a)
                }
                return n
            }
            function mn(r, n, t) {
                var e = r[n];
                r[n] = e ? e + " " + t : t
            }
            function $n(r, n) {
                var t = r.$;
                if (5 === t)
                    return $n(r.k || (r.k = r.m()), n);
                if (0 === t)
                    return tn.createTextNode(r.a);
                if (4 === t) {
                    for (var e = r.k, u = r.j; 4 === e.$; )
                        "object" != typeof u ? u = [u, e.j] : u.push(e.j),
                        e = e.k;
                    var a = {
                        j: u,
                        p: n
                    };
                    return (c = $n(e, a)).elm_event_node_ref = a,
                    c
                }
                if (3 === t)
                    return wn(c = r.h(r.g), n, r.d),
                    c;
                var c = r.f ? tn.createElementNS(r.f, r.c) : tn.createElement(r.c);
                rn && "a" == r.c && c.addEventListener("click", rn(c)),
                wn(c, n, r.d);
                for (var i = r.e, o = 0; i.length > o; o++)
                    en(c, $n(1 === t ? i[o] : i[o].b, n));
                return c
            }
            function wn(r, n, t) {
                for (var e in t) {
                    var u = t[e];
                    "a1" === e ? qn(r, u) : "a0" === e ? xn(r, n, u) : "a3" === e ? yn(r, u) : "a4" === e ? En(r, u) : ("value" !== e && "checked" !== e || r[e] !== u) && (r[e] = u)
                }
            }
            function qn(r, n) {
                var t = r.style;
                for (var e in n)
                    t[e] = n[e]
            }
            function yn(r, n) {
                for (var t in n) {
                    var e = n[t];
                    void 0 !== e ? r.setAttribute(t, e) : r.removeAttribute(t)
                }
            }
            function En(r, n) {
                for (var t in n) {
                    var e = n[t]
                      , u = e.f
                      , a = e.o;
                    void 0 !== a ? r.setAttributeNS(u, t, a) : r.removeAttributeNS(u, t)
                }
            }
            function xn(r, n, t) {
                var e = r.elmFs || (r.elmFs = {});
                for (var u in t) {
                    var a = t[u]
                      , c = e[u];
                    if (a) {
                        if (c) {
                            if (c.q.$ === a.$) {
                                c.q = a;
                                continue
                            }
                            r.removeEventListener(u, c)
                        }
                        c = kn(n, a),
                        r.addEventListener(u, c, dn && {
                            passive: 2 > be(a)
                        }),
                        e[u] = c
                    } else
                        r.removeEventListener(u, c),
                        e[u] = void 0
                }
            }
            try {
                window.addEventListener("t", null, Object.defineProperty({}, "passive", {
                    get: function() {
                        dn = !0
                    }
                }))
            } catch (r) {}
            function kn(r, n) {
                function t(n) {
                    var e = t.q
                      , u = gr(e.a, n);
                    if (oe(u)) {
                        for (var a, c = be(e), i = u.a, o = c ? 3 > c ? i.a : i.aD : i, f = 1 == c ? i.b : 3 == c && i.bh, s = (f && n.stopPropagation(),
                        (2 == c ? i.b : 3 == c && i.a7) && n.preventDefault(),
                        r); a = s.j; ) {
                            if ("function" == typeof a)
                                o = a(o);
                            else
                                for (var l = a.length; l--; )
                                    o = a[l](o);
                            s = s.p
                        }
                        s(o, f)
                    }
                }
                return t.q = n,
                t
            }
            function Ln(r, n) {
                return r.$ == n.$ && yr(r.a, n.a)
            }
            function An(r, n, t, e) {
                var u = {
                    $: n,
                    r: t,
                    s: e,
                    t: void 0,
                    u: void 0
                };
                return r.push(u),
                u
            }
            function Nn(r, n, t, e) {
                if (r !== n) {
                    var u = r.$
                      , a = n.$;
                    if (u !== a) {
                        if (1 !== u || 2 !== a)
                            return void An(t, 0, e, n);
                        n = function(r) {
                            for (var n = r.e, t = n.length, e = [], u = 0; t > u; u++)
                                e[u] = n[u].b;
                            return {
                                $: 1,
                                c: r.c,
                                d: r.d,
                                e: e,
                                f: r.f,
                                b: r.b
                            }
                        }(n),
                        a = 1
                    }
                    switch (a) {
                    case 5:
                        for (var c = r.l, i = n.l, o = c.length, f = o === i.length; f && o--; )
                            f = c[o] === i[o];
                        if (f)
                            return void (n.k = r.k);
                        n.k = n.m();
                        var s = [];
                        return Nn(r.k, n.k, s, 0),
                        void (s.length > 0 && An(t, 1, e, s));
                    case 4:
                        for (var l = r.j, b = n.j, d = !1, v = r.k; 4 === v.$; )
                            d = !0,
                            "object" != typeof l ? l = [l, v.j] : l.push(v.j),
                            v = v.k;
                        for (var p = n.k; 4 === p.$; )
                            d = !0,
                            "object" != typeof b ? b = [b, p.j] : b.push(p.j),
                            p = p.k;
                        return d && l.length !== b.length ? void An(t, 0, e, n) : ((d ? function(r, n) {
                            for (var t = 0; r.length > t; t++)
                                if (r[t] !== n[t])
                                    return !1;
                            return !0
                        }(l, b) : l === b) || An(t, 2, e, b),
                        void Nn(v, p, t, e + 1));
                    case 0:
                        return void (r.a !== n.a && An(t, 3, e, n.a));
                    case 1:
                        return void Tn(r, n, t, e, Dn);
                    case 2:
                        return void Tn(r, n, t, e, Sn);
                    case 3:
                        if (r.h !== n.h)
                            return void An(t, 0, e, n);
                        var h = Cn(r.d, n.d);
                        h && An(t, 4, e, h);
                        var g = n.i(r.g, n.g);
                        return void (g && An(t, 5, e, g))
                    }
                }
            }
            function Tn(r, n, t, e, u) {
                if (r.c === n.c && r.f === n.f) {
                    var a = Cn(r.d, n.d);
                    a && An(t, 4, e, a),
                    u(r, n, t, e)
                } else
                    An(t, 0, e, n)
            }
            function Cn(r, n, t) {
                var e;
                for (var u in r)
                    if ("a1" !== u && "a0" !== u && "a3" !== u && "a4" !== u)
                        if (u in n) {
                            var a = r[u]
                              , c = n[u];
                            a === c && "value" !== u && "checked" !== u || "a0" === t && Ln(a, c) || ((e = e || {})[u] = c)
                        } else
                            (e = e || {})[u] = t ? "a1" === t ? "" : "a0" === t || "a3" === t ? void 0 : {
                                f: r[u].f,
                                o: void 0
                            } : "string" == typeof r[u] ? "" : null;
                    else {
                        var i = Cn(r[u], n[u] || {}, u);
                        i && ((e = e || {})[u] = i)
                    }
                for (var o in n)
                    o in r || ((e = e || {})[o] = n[o]);
                return e
            }
            function Dn(r, n, t, e) {
                var u = r.e
                  , a = n.e
                  , c = u.length
                  , i = a.length;
                c > i ? An(t, 6, e, {
                    v: i,
                    i: c - i
                }) : i > c && An(t, 7, e, {
                    v: c,
                    e: a
                });
                for (var o = i > c ? c : i, f = 0; o > f; f++) {
                    var s = u[f];
                    Nn(s, a[f], t, ++e),
                    e += s.b || 0
                }
            }
            function Sn(r, n, t, e) {
                for (var u = [], a = {}, c = [], i = r.e, o = n.e, f = i.length, s = o.length, l = 0, b = 0, d = e; f > l && s > b; ) {
                    var v = (L = i[l]).a
                      , p = (A = o[b]).a
                      , h = L.b
                      , g = A.b
                      , m = void 0
                      , $ = void 0;
                    if (v !== p) {
                        var w = i[l + 1]
                          , q = o[b + 1];
                        if (w) {
                            var y = w.a
                              , E = w.b;
                            $ = p === y
                        }
                        if (q) {
                            var x = q.a
                              , k = q.b;
                            m = v === x
                        }
                        if (m && $)
                            Nn(h, k, u, ++d),
                            Rn(a, u, v, g, b, c),
                            d += h.b || 0,
                            Bn(a, u, v, E, ++d),
                            d += E.b || 0,
                            l += 2,
                            b += 2;
                        else if (m)
                            d++,
                            Rn(a, u, p, g, b, c),
                            Nn(h, k, u, d),
                            d += h.b || 0,
                            l += 1,
                            b += 2;
                        else if ($)
                            Bn(a, u, v, h, ++d),
                            d += h.b || 0,
                            Nn(E, g, u, ++d),
                            d += E.b || 0,
                            l += 2,
                            b += 1;
                        else {
                            if (!w || y !== x)
                                break;
                            Bn(a, u, v, h, ++d),
                            Rn(a, u, p, g, b, c),
                            d += h.b || 0,
                            Nn(E, k, u, ++d),
                            d += E.b || 0,
                            l += 2,
                            b += 2
                        }
                    } else
                        Nn(h, g, u, ++d),
                        d += h.b || 0,
                        l++,
                        b++
                }
                for (; f > l; ) {
                    var L;
                    Bn(a, u, (L = i[l]).a, h = L.b, ++d),
                    d += h.b || 0,
                    l++
                }
                for (; s > b; ) {
                    var A, N = N || [];
                    Rn(a, u, (A = o[b]).a, A.b, void 0, N),
                    b++
                }
                (u.length > 0 || c.length > 0 || N) && An(t, 8, e, {
                    w: u,
                    x: c,
                    y: N
                })
            }
            var Pn = "_elmW6BL";
            function Rn(r, n, t, e, u, a) {
                var c = r[t];
                if (!c)
                    return a.push({
                        r: u,
                        A: c = {
                            c: 0,
                            z: e,
                            r: u,
                            s: void 0
                        }
                    }),
                    void (r[t] = c);
                if (1 === c.c) {
                    a.push({
                        r: u,
                        A: c
                    }),
                    c.c = 2;
                    var i = [];
                    return Nn(c.z, e, i, c.r),
                    c.r = u,
                    void (c.s.s = {
                        w: i,
                        A: c
                    })
                }
                Rn(r, n, t + Pn, e, u, a)
            }
            function Bn(r, n, t, e, u) {
                var a = r[t];
                if (a) {
                    if (0 === a.c) {
                        a.c = 2;
                        var c = [];
                        return Nn(e, a.z, c, u),
                        void An(n, 9, u, {
                            w: c,
                            A: a
                        })
                    }
                    Bn(r, n, t + Pn, e, u)
                } else {
                    var i = An(n, 9, u, void 0);
                    r[t] = {
                        c: 1,
                        z: e,
                        r: u,
                        s: i
                    }
                }
            }
            function Un(r, n, t, e) {
                return 0 === t.length ? r : (function r(n, t, e, u) {
                    !function n(t, e, u, a, c, i, o) {
                        for (var f = u[a], s = f.r; s === c; ) {
                            var l = f.$;
                            if (1 === l)
                                r(t, e.k, f.s, o);
                            else if (8 === l)
                                f.t = t,
                                f.u = o,
                                (b = f.s.w).length > 0 && n(t, e, b, 0, c, i, o);
                            else if (9 === l) {
                                f.t = t,
                                f.u = o;
                                var b, d = f.s;
                                d && (d.A.s = t,
                                (b = d.w).length > 0 && n(t, e, b, 0, c, i, o))
                            } else
                                f.t = t,
                                f.u = o;
                            if (!(f = u[++a]) || (s = f.r) > i)
                                return a
                        }
                        var v = e.$;
                        if (4 === v) {
                            for (var p = e.k; 4 === p.$; )
                                p = p.k;
                            return n(t, p, u, a, c + 1, i, t.elm_event_node_ref)
                        }
                        for (var h = e.e, g = t.childNodes, m = 0; h.length > m; m++) {
                            var $ = 1 === v ? h[m] : h[m].b
                              , w = ++c + ($.b || 0);
                            if (!(c > s || s > w || (f = u[a = n(g[m], $, u, a, c, w, o)]) && (s = f.r) <= i))
                                return a;
                            c = w
                        }
                        return a
                    }(n, t, e, 0, 0, t.b, u)
                }(r, n, t, e),
                In(r, t))
            }
            function In(r, n) {
                for (var t = 0; n.length > t; t++) {
                    var e = n[t]
                      , u = e.t
                      , a = jn(u, e);
                    u === r && (r = a)
                }
                return r
            }
            function jn(r, n) {
                switch (n.$) {
                case 0:
                    return function(r) {
                        var t = r.parentNode
                          , e = $n(n.s, n.u);
                        return e.elm_event_node_ref || (e.elm_event_node_ref = r.elm_event_node_ref),
                        t && e !== r && t.replaceChild(e, r),
                        e
                    }(r);
                case 4:
                    return wn(r, n.u, n.s),
                    r;
                case 3:
                    return r.replaceData(0, r.length, n.s),
                    r;
                case 1:
                    return In(r, n.s);
                case 2:
                    return r.elm_event_node_ref ? r.elm_event_node_ref.j = n.s : r.elm_event_node_ref = {
                        j: n.s,
                        p: n.u
                    },
                    r;
                case 6:
                    for (var t = n.s, e = 0; t.i > e; e++)
                        r.removeChild(r.childNodes[t.v]);
                    return r;
                case 7:
                    for (var u = (t = n.s).e, a = r.childNodes[e = t.v]; u.length > e; e++)
                        r.insertBefore($n(u[e], n.u), a);
                    return r;
                case 9:
                    if (!(t = n.s))
                        return r.parentNode.removeChild(r),
                        r;
                    var c = t.A;
                    return void 0 !== c.r && r.parentNode.removeChild(r),
                    c.s = In(r, t.w),
                    r;
                case 8:
                    return function(r, n) {
                        var t = n.s
                          , e = function(r, n) {
                            if (r) {
                                for (var t = tn.createDocumentFragment(), e = 0; r.length > e; e++) {
                                    var u = r[e].A;
                                    en(t, 2 === u.c ? u.s : $n(u.z, n.u))
                                }
                                return t
                            }
                        }(t.y, n);
                        r = In(r, t.w);
                        for (var u = t.x, a = 0; u.length > a; a++) {
                            var c = u[a]
                              , i = c.A
                              , o = 2 === i.c ? i.s : $n(i.z, n.u);
                            r.insertBefore(o, r.childNodes[c.r])
                        }
                        return e && en(r, e),
                        r
                    }(r, n);
                case 5:
                    return n.s(r);
                default:
                    U(10)
                }
            }
            var On = u(function(r, n, t, e) {
                return function(r, n, t, e, u, a) {
                    var c = f(hr, r, kr(n ? n.flags : void 0));
                    oe(c) || U(2);
                    var i = {}
                      , o = t(c.a)
                      , s = o.a
                      , l = a(d, s)
                      , b = function(r, n) {
                        var t;
                        for (var e in Vr) {
                            var u = Vr[e];
                            u.a && ((t = t || {})[e] = u.a(e, n)),
                            r[e] = Hr(u, n)
                        }
                        return t
                    }(i, d);
                    function d(r, n) {
                        var t = f(e, r, s);
                        l(s = t.a, n),
                        Xr(i, t.b, u(s))
                    }
                    return Xr(i, o.b, u(s)),
                    b ? {
                        ports: b
                    } : {}
                }(n, e, r.da, r.ec, r.dW, function(n, t) {
                    var u = r.ee
                      , a = e.node
                      , c = function r(n) {
                        if (3 === n.nodeType)
                            return un(n.textContent);
                        if (1 !== n.nodeType)
                            return un("");
                        for (var t = A, e = n.attributes, u = e.length; u--; ) {
                            var a = e[u];
                            t = N(f(ln, a.name, a.value), t)
                        }
                        var c = n.tagName.toLowerCase()
                          , i = A
                          , o = n.childNodes;
                        for (u = o.length; u--; )
                            i = N(r(o[u]), i);
                        return s(an, c, t, i)
                    }(a);
                    return function(r, n) {
                        n(r);
                        var t = 0;
                        function e() {
                            t = 1 === t ? 0 : (zn(e),
                            n(r),
                            1)
                        }
                        return function(u, a) {
                            r = u,
                            a ? (n(r),
                            2 === t && (t = 1)) : (0 === t && zn(e),
                            t = 2)
                        }
                    }(t, function(r) {
                        var t = u(r)
                          , e = function(r, n) {
                            var t = [];
                            return Nn(r, n, t, 0),
                            t
                        }(c, t);
                        a = Un(a, c, e, n),
                        c = t
                    })
                })
            })
              , zn = ("undefined" != typeof cancelAnimationFrame && cancelAnimationFrame,
            "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : function(r) {
                return setTimeout(r, 1e3 / 60)
            }
            );
            "undefined" != typeof document && document,
            "undefined" != typeof window && window;
            var _n = e(function(r, n, t) {
                return Tr(function(e) {
                    function u(r) {
                        e(n(t.aS.a(r)))
                    }
                    var a = new XMLHttpRequest;
                    a.addEventListener("error", function() {
                        u(bu)
                    }),
                    a.addEventListener("timeout", function() {
                        u(pu)
                    }),
                    a.addEventListener("load", function() {
                        u(function(r, n) {
                            return f(n.status >= 200 && 300 > n.status ? lu : fu, function(r) {
                                return {
                                    cC: r.responseURL,
                                    dQ: r.status,
                                    dR: r.statusText,
                                    c3: Vn(r.getAllResponseHeaders())
                                }
                            }(n), r(n.response))
                        }(t.aS.b, a))
                    }),
                    mu(t.cz) && function(r, n, t) {
                        n.upload.addEventListener("progress", function(e) {
                            n.c || Pr(f($u, r, q(t, vu({
                                dN: e.loaded,
                                cn: e.total
                            }))))
                        }),
                        n.addEventListener("progress", function(e) {
                            n.c || Pr(f($u, r, q(t, du({
                                dE: e.loaded,
                                cn: e.lengthComputable ? ht(e.total) : gt
                            }))))
                        })
                    }(r, a, t.cz.a);
                    try {
                        a.open(t.dh, t.cC, !0)
                    } catch (r) {
                        return u(su(t.cC))
                    }
                    return function(r, n) {
                        for (var t = n.c3; t.b; t = t.b)
                            r.setRequestHeader(t.a.a, t.a.b);
                        r.timeout = n.d5.a || 0,
                        r.responseType = n.aS.d,
                        r.withCredentials = n.cK
                    }(a, t),
                    t.cN.a && a.setRequestHeader("Content-Type", t.cN.a),
                    a.send(t.cN.b),
                    function() {
                        a.c = !0,
                        a.abort()
                    }
                })
            });
            function Vn(r) {
                if (!r)
                    return gu;
                for (var n = gu, t = r.split("\r\n"), e = t.length; e--; ) {
                    var u = t[e]
                      , a = u.indexOf(": ");
                    if (a > 0) {
                        var c = u.substring(0, a)
                          , i = u.substring(a + 2);
                        n = s(Pu, c, function(r) {
                            return ht(mu(r) ? i + ", " + r.a : i)
                        }, n)
                    }
                }
                return n
            }
            var Gn = e(function(r, n, t) {
                return {
                    $: 0,
                    d: r,
                    b: n,
                    a: t
                }
            })
              , Hn = t(function(r, n) {
                return {
                    $: 0,
                    a: r,
                    b: n
                }
            })
              , Mn = a(function(r, n, t, e, u) {
                for (var a = r.length, c = u.length >= n + a, i = 0; c && a > i; ) {
                    var o = u.charCodeAt(n);
                    c = r[i++] === u[n++] && (10 === o ? (t++,
                    e = 1) : (e++,
                    55296 == (63488 & o) ? r[i++] === u[n++] : 1))
                }
                return y(c ? n : -1, t, e)
            })
              , Fn = e(function(r, n, t) {
                return t.length > n ? 55296 == (63488 & t.charCodeAt(n)) ? r(E(t.substr(n, 2))) ? n + 2 : -1 : r(E(t[n])) ? "\n" === t[n] ? -2 : n + 1 : -1 : -1
            })
              , Jn = e(function(r, n, t) {
                return t.charCodeAt(n) === r
            })
              , Zn = t(function(r, n) {
                for (; n.length > r; r++) {
                    var t = n.charCodeAt(r);
                    if (48 > t || t > 57)
                        return r
                }
                return r
            })
              , Kn = e(function(r, n, t) {
                for (var e = 0; t.length > n; n++) {
                    var u = t.charCodeAt(n) - 48;
                    if (0 > u || u >= r)
                        break;
                    e = r * e + u
                }
                return q(n, e)
            })
              , Yn = t(function(r, n) {
                for (var t = 0; n.length > r; r++) {
                    var e = n.charCodeAt(r);
                    if (48 > e || e > 57)
                        if (65 > e || e > 70) {
                            if (97 > e || e > 102)
                                break;
                            t = 16 * t + e - 87
                        } else
                            t = 16 * t + e - 55;
                    else
                        t = 16 * t + e - 48
                }
                return q(r, t)
            })
              , Xn = a(function(r, n, t, e, u) {
                for (var a = u.indexOf(r, n), c = 0 > a ? u.length : a + r.length; c > n; ) {
                    var i = u.charCodeAt(n++);
                    10 === i ? (e = 1,
                    t++) : (e++,
                    55296 == (63488 & i) && n++)
                }
                return y(a, t, e)
            })
              , Qn = t(function(r, n) {
                return Tr(function() {
                    var t = setInterval(function() {
                        Pr(n)
                    }, r);
                    return function() {
                        clearInterval(t)
                    }
                })
            })
              , Wn = t(function(r, n) {
                var t = "g";
                r.dk && (t += "m"),
                r.cP && (t += "i");
                try {
                    return ht(RegExp(n, t))
                } catch (r) {
                    return gt
                }
            })
              , rt = t(function(r, n) {
                return null !== n.match(r)
            })
              , nt = e(function(r, n, t) {
                for (var e, u = [], a = 0, c = t, i = n.lastIndex, o = -1; a++ < r && (e = n.exec(c)) && o != n.lastIndex; ) {
                    for (var f = e.length - 1, s = []; f > 0; ) {
                        var b = e[f];
                        s[--f] = b ? ht(b) : gt
                    }
                    u.push(l(Nl, e[0], e.index, a, C(s))),
                    o = n.lastIndex
                }
                return n.lastIndex = i,
                C(u)
            })
              , tt = u(function(r, n, t, e) {
                var u = 0;
                return e.replace(n, function(n) {
                    if (u++ >= r)
                        return n;
                    for (var e = arguments.length - 3, a = []; e > 0; ) {
                        var c = arguments[e];
                        a[--e] = c ? ht(c) : gt
                    }
                    return t(l(Nl, n, arguments[arguments.length - 2], u, C(a)))
                })
            })
              , et = 1
              , ut = 2
              , at = 0
              , ct = T
              , it = e(function(r, n, t) {
                for (; ; ) {
                    if (-2 === t.$)
                        return n;
                    var e = t.d
                      , u = r
                      , a = s(r, t.b, t.c, s(it, r, n, t.e));
                    r = u,
                    n = a,
                    t = e
                }
            })
              , ot = function(r) {
                return s(it, e(function(r, n, t) {
                    return f(ct, q(r, n), t)
                }), A, r)
            }
              , ft = function(r) {
                return {
                    $: 1,
                    a: r
                }
            }
              , st = t(function(r, n) {
                return {
                    $: 3,
                    a: r,
                    b: n
                }
            })
              , lt = t(function(r, n) {
                return {
                    $: 0,
                    a: r,
                    b: n
                }
            })
              , bt = t(function(r, n) {
                return {
                    $: 1,
                    a: r,
                    b: n
                }
            })
              , dt = function(r) {
                return {
                    $: 0,
                    a: r
                }
            }
              , vt = function(r) {
                return {
                    $: 2,
                    a: r
                }
            }
              , pt = I
              , ht = function(r) {
                return {
                    $: 0,
                    a: r
                }
            }
              , gt = {
                $: 1
            }
              , mt = X
              , $t = k
              , wt = xr
              , qt = function(r) {
                return r + ""
            }
              , yt = t(function(r, n) {
                return f(K, r, D(n))
            })
              , Et = t(function(r, n) {
                return C(f(Z, r, n))
            })
              , xt = function(r) {
                return f(yt, "\n    ", f(Et, "\n", r))
            }
              , kt = e(function(r, n, t) {
                for (; ; ) {
                    if (!t.b)
                        return n;
                    var e = t.b
                      , u = r
                      , a = f(r, t.a, n);
                    r = u,
                    n = a,
                    t = e
                }
            })
              , Lt = function(r) {
                return s(kt, t(function(r, n) {
                    return n + 1
                }), 0, r)
            }
              , At = S
              , Nt = e(function(r, n, t) {
                for (; ; ) {
                    if (m(r, n) >= 1)
                        return t;
                    var e = r
                      , u = n - 1
                      , a = f(ct, n, t);
                    r = e,
                    n = u,
                    t = a
                }
            })
              , Tt = t(function(r, n) {
                return s(Nt, r, n, A)
            })
              , Ct = t(function(r, n) {
                return s(At, r, f(Tt, 0, Lt(n) - 1), n)
            })
              , Dt = function(r) {
                var n = r.charCodeAt(0);
                return 55296 > n || n > 56319 ? n : 1024 * (n - 55296) + r.charCodeAt(1) - 56320 + 65536
            }
              , St = function(r) {
                var n = Dt(r);
                return n >= 97 && 122 >= n
            }
              , Pt = function(r) {
                var n = Dt(r);
                return 90 >= n && n >= 65
            }
              , Rt = function(r) {
                return St(r) || Pt(r)
            }
              , Bt = function(r) {
                var n = Dt(r);
                return 57 >= n && n >= 48
            }
              , Ut = function(r) {
                return St(r) || Pt(r) || Bt(r)
            }
              , It = function(r) {
                return s(kt, ct, A, r)
            }
              , jt = t(function(r, n) {
                return "\n\n(" + qt(r + 1) + ") " + xt(Ot(n))
            })
              , Ot = function(r) {
                return f(zt, r, A)
            }
              , zt = t(function(r, n) {
                r: for (; ; )
                    switch (r.$) {
                    case 0:
                        var t = r.a
                          , e = r.b
                          , u = function() {
                            var r, n, e = (n = (r = t).charCodeAt(0),
                            isNaN(n) ? gt : ht(55296 > n || n > 56319 ? q(E(r[0]), r.slice(1)) : q(E(r[0] + r[1]), r.slice(2))));
                            if (1 === e.$)
                                return !1;
                            var u = e.a
                              , a = u.b;
                            return Rt(u.a) && f(mt, Ut, a)
                        }();
                        r = e,
                        n = f(ct, u ? "." + t : "['" + t + "']", n);
                        continue r;
                    case 1:
                        e = r.b;
                        var a = "[" + qt(r.a) + "]";
                        r = e,
                        n = f(ct, a, n);
                        continue r;
                    case 2:
                        var c = r.a;
                        if (c.b) {
                            if (c.b.b) {
                                var i = (n.b ? "The Json.Decode.oneOf at json" + f(yt, "", It(n)) : "Json.Decode.oneOf") + " failed in the following " + qt(Lt(c)) + " ways:";
                                return f(yt, "\n\n", f(ct, i, f(Ct, jt, c)))
                            }
                            r = e = c.a,
                            n = n;
                            continue r
                        }
                        return "Ran into a Json.Decode.oneOf with no possibilities" + (n.b ? " at json" + f(yt, "", It(n)) : "!");
                    default:
                        var o = r.a
                          , s = r.b;
                        return (i = n.b ? "Problem with the value at json" + f(yt, "", It(n)) + ":\n\n    " : "Problem with the given value:\n\n") + xt(f(wt, 4, s)) + "\n\n" + o
                    }
            })
              , _t = u(function(r, n, t, e) {
                return {
                    $: 0,
                    a: r,
                    b: n,
                    c: t,
                    d: e
                }
            })
              , Vt = []
              , Gt = _
              , Ht = t(function(r, n) {
                return H(n) / H(r)
            })
              , Mt = Gt(f(Ht, 2, 32))
              , Ft = l(_t, 0, Mt, Vt, Vt)
              , Jt = R
              , Zt = t(function(r, n) {
                return r(n)
            })
              , Kt = t(function(r, n) {
                return n(r)
            })
              , Yt = g
              , Xt = V
              , Qt = function(r) {
                return r.length
            }
              , Wt = t(function(r, n) {
                return m(r, n) > 0 ? r : n
            })
              , re = j
              , ne = B
              , te = t(function(r, n) {
                for (; ; ) {
                    var t = f(ne, 32, r)
                      , e = t.b
                      , u = f(ct, {
                        $: 0,
                        a: t.a
                    }, n);
                    if (!e.b)
                        return It(u);
                    r = e,
                    n = u
                }
            })
              , ee = function(r) {
                return r.a
            }
              , ue = t(function(r, n) {
                for (; ; ) {
                    var t = Gt(n / 32);
                    if (1 === t)
                        return f(ne, 32, r).a;
                    r = f(te, r, A),
                    n = t
                }
            })
              , ae = t(function(r, n) {
                if (n.h) {
                    var t = 32 * n.h
                      , e = Xt(f(Ht, 32, t - 1))
                      , u = r ? It(n.k) : n.k
                      , a = f(ue, u, n.h);
                    return l(_t, Qt(n.i) + t, f(Wt, 5, e * Mt), a, n.i)
                }
                return l(_t, Qt(n.i), Mt, Vt, n.i)
            })
              , ce = a(function(r, n, t, e, u) {
                for (; ; ) {
                    if (0 > n)
                        return f(ae, !1, {
                            k: e,
                            h: t / 32 | 0,
                            i: u
                        });
                    var a = {
                        $: 1,
                        a: s(Jt, 32, n, r)
                    };
                    r = r,
                    n -= 32,
                    t = t,
                    e = f(ct, a, e),
                    u = u
                }
            })
              , ie = t(function(r, n) {
                if (r > 0) {
                    var t = r % 32;
                    return b(ce, n, r - t - 32, r, A, s(Jt, t, r - t, n))
                }
                return Ft
            })
              , oe = function(r) {
                return !r.$
            }
              , fe = sr
              , se = lr
              , le = function(r) {
                return {
                    $: 0,
                    a: r
                }
            }
              , be = function(r) {
                switch (r.$) {
                case 0:
                    return 0;
                case 1:
                    return 1;
                case 2:
                    return 2;
                default:
                    return 3
                }
            }
              , de = function(r) {
                return r
            }
              , ve = Q
              , pe = function(r) {
                return r.length
            }
              , he = Y
              , ge = t(function(r, n) {
                return 1 > r ? n : s(he, r, pe(n), n)
            })
              , me = function(r) {
                return "" === r
            }
              , $e = t(function(r, n) {
                return 1 > r ? "" : s(he, 0, r, n)
            })
              , we = function(r) {
                for (var n = 0, t = r.charCodeAt(0), e = 43 == t || 45 == t ? 1 : 0, u = e; r.length > u; ++u) {
                    var a = r.charCodeAt(u);
                    if (48 > a || a > 57)
                        return gt;
                    n = 10 * n + a - 48
                }
                return u == e ? gt : ht(45 == t ? -n : n)
            }
              , qe = W
              , ye = function(r) {
                for (; ; )
                    r = r
            }
              , Ee = Nr
              , xe = Ee(0)
              , ke = u(function(r, n, t, e) {
                if (e.b) {
                    var u = e.a
                      , a = e.b;
                    if (a.b) {
                        var c = a.a
                          , i = a.b;
                        if (i.b) {
                            var o = i.a
                              , b = i.b;
                            if (b.b) {
                                var d = b.b;
                                return f(r, u, f(r, c, f(r, o, f(r, b.a, t > 500 ? s(kt, r, n, It(d)) : l(ke, r, n, t + 1, d)))))
                            }
                            return f(r, u, f(r, c, f(r, o, n)))
                        }
                        return f(r, u, f(r, c, n))
                    }
                    return f(r, u, n)
                }
                return n
            })
              , Le = e(function(r, n, t) {
                return l(ke, r, n, 0, t)
            })
              , Ae = t(function(r, n) {
                return s(Le, t(function(n, t) {
                    return f(ct, r(n), t)
                }), A, n)
            })
              , Ne = Cr
              , Te = t(function(r, n) {
                return f(Ne, function(n) {
                    return Ee(r(n))
                }, n)
            })
              , Ce = e(function(r, n, t) {
                return f(Ne, function(n) {
                    return f(Ne, function(t) {
                        return Ee(f(r, n, t))
                    }, t)
                }, n)
            })
              , De = function(r) {
                return s(Le, Ce(ct), Ee(A), r)
            }
              , Se = Mr
              , Pe = t(function(r, n) {
                var t = n;
                return Rr(f(Ne, Se(r), t))
            });
            Vr.Task = Gr(xe, e(function(r, n) {
                return f(Te, function() {
                    return 0
                }, De(f(Ae, Pe(r), n)))
            }), e(function() {
                return Ee(0)
            }), t(function(r, n) {
                return f(Te, r, n)
            }));
            var Re, Be = Jr("Task"), Ue = t(function(r, n) {
                return Be(f(Te, r, n))
            }), Ie = On, je = function(r) {
                return {
                    $: 1,
                    a: r
                }
            }, Oe = function(r) {
                return {
                    $: 6,
                    a: r
                }
            }, ze = function(r) {
                return {
                    $: 0,
                    a: r
                }
            }, _e = e(function(r, n, t) {
                return r(n(t))
            }), Ve = Dr, Ge = t(function(r, n) {
                return Be(f(Ve, f(_e, f(_e, Ee, r), ft), f(Ne, f(_e, f(_e, Ee, r), dt), n)))
            }), He = Zr, Me = function(r) {
                return {
                    $: 1,
                    a: r
                }
            }, Fe = t(function(r, n) {
                return {
                    $: 0,
                    a: r,
                    b: n
                }
            }), Je = fr, Ze = ir, Ke = tr, Ye = function(r) {
                return {
                    $: 11,
                    g: r
                }
            }, Xe = t(function(r, n) {
                return q(r, n)
            }), Qe = cr, We = f(Je, function(r) {
                var n = r.a
                  , t = r.b;
                return "M_LIMIT_EXCEEDED" === n ? Ye(C([f(fe, Me, f(Ze, "retry_after_ms", Ke)), le(f(Fe, n, t))])) : le(f(Fe, n, t))
            }, s(se, Xe, f(Ze, "errcode", Qe), f(Ze, "error", Qe))), ru = pr, nu = t(function(r, n) {
                return n.$ ? r : n.a
            }), tu = t(function(r, n) {
                switch (n.$) {
                case 0:
                    return ft(f(Fe, "Bad url", n.a));
                case 1:
                case 2:
                    return ft(Me(30));
                case 3:
                    return ft(f(nu, f(Fe, "Could not decode error", t = n.b), f(ru, We, t)));
                default:
                    var t, e = f(ru, r, t = n.b);
                    return 1 === e.$ ? ft(f(Fe, "Could not decode response", t)) : dt(e.a)
                }
            }), eu = t(function(r, n) {
                return {
                    $: 0,
                    a: r,
                    b: n
                }
            }), uu = t(function(r, n) {
                return n.$ ? gt : ht(r(n.a))
            }), au = t(function(r, n) {
                return {
                    $: 0,
                    a: r,
                    b: n
                }
            }), cu = function(r) {
                return {
                    $: 1,
                    a: r
                }
            }, iu = _r, ou = t(function(r, n) {
                return n.$ ? f(Ne, function() {
                    return f(Ve, ou(r), r)
                }, iu(n.a)) : cu(f(au, n.a, n.b))
            }), fu = t(function(r, n) {
                return {
                    $: 3,
                    a: r,
                    b: n
                }
            }), su = function(r) {
                return {
                    $: 0,
                    a: r
                }
            }, lu = t(function(r, n) {
                return {
                    $: 4,
                    a: r,
                    b: n
                }
            }), bu = {
                $: 2
            }, du = function(r) {
                return {
                    $: 1,
                    a: r
                }
            }, vu = function(r) {
                return {
                    $: 0,
                    a: r
                }
            }, pu = {
                $: 1
            }, hu = {
                $: -2
            }, gu = hu, mu = function(r) {
                return !r.$
            }, $u = Fr, wu = $, qu = t(function(r, n) {
                r: for (; ; ) {
                    if (-2 === n.$)
                        return gt;
                    var t = n.c
                      , e = n.d
                      , u = n.e;
                    switch (f(wu, r, n.b)) {
                    case 0:
                        r = r,
                        n = e;
                        continue r;
                    case 1:
                        return ht(t);
                    default:
                        r = r,
                        n = u;
                        continue r
                    }
                }
            }), yu = a(function(r, n, t, e, u) {
                return {
                    $: -1,
                    a: r,
                    b: n,
                    c: t,
                    d: e,
                    e: u
                }
            }), Eu = a(function(r, n, t, e, u) {
                if (-1 !== u.$ || u.a) {
                    if (-1 !== e.$ || e.a || -1 !== e.d.$ || e.d.a)
                        return b(yu, r, n, t, e, u);
                    var a = e.d;
                    return c = e.e,
                    b(yu, 0, e.b, e.c, b(yu, 1, a.b, a.c, a.d, a.e), b(yu, 1, n, t, c, u))
                }
                var c, i = u.b, o = u.c, f = u.d, s = u.e;
                return -1 !== e.$ || e.a ? b(yu, r, i, o, b(yu, 0, n, t, e, f), s) : b(yu, 0, n, t, b(yu, 1, e.b, e.c, e.d, c = e.e), b(yu, 1, i, o, f, s))
            }), xu = e(function(r, n, t) {
                if (-2 === t.$)
                    return b(yu, 0, r, n, hu, hu);
                var e = t.a
                  , u = t.b
                  , a = t.c
                  , c = t.d
                  , i = t.e;
                switch (f(wu, r, u)) {
                case 0:
                    return b(Eu, e, u, a, s(xu, r, n, c), i);
                case 1:
                    return b(yu, e, u, n, c, i);
                default:
                    return b(Eu, e, u, a, c, s(xu, r, n, i))
                }
            }), ku = e(function(r, n, t) {
                var e = s(xu, r, n, t);
                return -1 !== e.$ || e.a ? e : b(yu, 1, e.b, e.c, e.d, e.e)
            }), Lu = function(r) {
                if (-1 === r.$ && -1 === r.d.$ && -1 === r.e.$) {
                    if (-1 !== r.e.d.$ || r.e.d.a) {
                        var n = r.d
                          , t = r.e;
                        return c = t.b,
                        i = t.c,
                        e = t.d,
                        s = t.e,
                        b(yu, 1, r.b, r.c, b(yu, 0, n.b, n.c, n.d, n.e), b(yu, 0, c, i, e, s))
                    }
                    var e, u = r.d, a = r.e, c = a.b, i = a.c, o = (e = a.d).d, f = e.e, s = a.e;
                    return b(yu, 0, e.b, e.c, b(yu, 1, r.b, r.c, b(yu, 0, u.b, u.c, u.d, u.e), o), b(yu, 1, c, i, f, s))
                }
                return r
            }, Au = function(r) {
                if (-1 === r.$ && -1 === r.d.$ && -1 === r.e.$) {
                    if (-1 !== r.d.d.$ || r.d.d.a) {
                        var n = r.d
                          , t = r.e;
                        return f = t.b,
                        s = t.c,
                        l = t.d,
                        d = t.e,
                        b(yu, 1, e = r.b, u = r.c, b(yu, 0, n.b, n.c, n.d, i = n.e), b(yu, 0, f, s, l, d))
                    }
                    var e = r.b
                      , u = r.c
                      , a = r.d
                      , c = a.d
                      , i = a.e
                      , o = r.e
                      , f = o.b
                      , s = o.c
                      , l = o.d
                      , d = o.e;
                    return b(yu, 0, a.b, a.c, b(yu, 1, c.b, c.c, c.d, c.e), b(yu, 1, e, u, i, b(yu, 0, f, s, l, d)))
                }
                return r
            }, Nu = i(function(r, n, t, e, u, a, c) {
                if (-1 !== a.$ || a.a) {
                    r: for (; ; ) {
                        if (-1 === c.$ && 1 === c.a) {
                            if (-1 === c.d.$) {
                                if (1 === c.d.a)
                                    return Au(n);
                                break r
                            }
                            return Au(n)
                        }
                        break r
                    }
                    return n
                }
                return b(yu, t, a.b, a.c, a.d, b(yu, 0, e, u, a.e, c))
            }), Tu = function(r) {
                if (-1 === r.$ && -1 === r.d.$) {
                    var n = r.a
                      , t = r.b
                      , e = r.c
                      , u = r.d
                      , a = u.d
                      , c = r.e;
                    if (1 === u.a) {
                        if (-1 !== a.$ || a.a) {
                            var i = Lu(r);
                            if (-1 === i.$) {
                                var o = i.e;
                                return b(Eu, i.a, i.b, i.c, Tu(i.d), o)
                            }
                            return hu
                        }
                        return b(yu, n, t, e, Tu(u), c)
                    }
                    return b(yu, n, t, e, Tu(u), c)
                }
                return hu
            }, Cu = t(function(r, n) {
                if (-2 === n.$)
                    return hu;
                var t = n.a
                  , e = n.b
                  , u = n.c
                  , a = n.d
                  , c = n.e;
                if (0 > m(r, e)) {
                    if (-1 === a.$ && 1 === a.a) {
                        var i = a.d;
                        if (-1 !== i.$ || i.a) {
                            var o = Lu(n);
                            if (-1 === o.$) {
                                var s = o.e;
                                return b(Eu, o.a, o.b, o.c, f(Cu, r, o.d), s)
                            }
                            return hu
                        }
                        return b(yu, t, e, u, f(Cu, r, a), c)
                    }
                    return b(yu, t, e, u, f(Cu, r, a), c)
                }
                return f(Du, r, v(Nu, r, n, t, e, u, a, c))
            }), Du = t(function(r, n) {
                if (-1 === n.$) {
                    var t = n.a
                      , e = n.b
                      , u = n.c
                      , a = n.d
                      , c = n.e;
                    if (p(r, e)) {
                        var i = function(r) {
                            for (; ; ) {
                                if (-1 !== r.$ || -1 !== r.d.$)
                                    return r;
                                r = r.d
                            }
                        }(c);
                        return -1 === i.$ ? b(Eu, t, i.b, i.c, a, Tu(c)) : hu
                    }
                    return b(Eu, t, e, u, a, f(Cu, r, c))
                }
                return hu
            }), Su = t(function(r, n) {
                var t = f(Cu, r, n);
                return -1 !== t.$ || t.a ? t : b(yu, 1, t.b, t.c, t.d, t.e)
            }), Pu = e(function(r, n, t) {
                var e = n(f(qu, r, t));
                return e.$ ? f(Su, r, t) : s(ku, r, e.a, t)
            }), Ru = f(Gn, "", de), Bu = function(r) {
                return r.$ ? cu(r.a) : Ee(r.a)
            }, Uu = t(function(r, n) {
                return n.$ ? r : n.a
            }), Iu = function(r) {
                var n, t = r.dh, e = r.cC, u = r.dI, a = (n = {
                    cN: r.cN,
                    c3: f(Uu, A, f(uu, function(r) {
                        return C([f(eu, "Authorization", "Bearer " + r)])
                    }, r.T)),
                    dh: t,
                    dH: Ru(tu(u)),
                    d5: gt,
                    cC: e
                },
                s(_n, 0, Bu, {
                    cK: !1,
                    cN: n.cN,
                    aS: n.dH,
                    c3: n.c3,
                    dh: n.dh,
                    d5: n.d5,
                    cz: gt,
                    cC: n.cC
                }));
                return f(Ve, ou(a), a)
            }, ju = function(r) {
                return r.a + "=" + r.b
            }, Ou = e(function(r, n, t) {
                return r + "/" + (f(yt, "/", n) + function(r) {
                    return r.b ? "?" + f(yt, "&", f(Ae, ju, r)) : ""
                }(t))
            }), zu = function(r) {
                return encodeURIComponent(r)
            }, _u = u(function(r, n, t, e) {
                return s(Ou, n, f(Ae, zu, L(r, t)), e)
            }), Vu = _u(C(["_matrix", "client", "r0"])), Gu = t(function(r, n) {
                var t = r
                  , e = n.dh
                  , u = n.dB
                  , a = n.dA
                  , c = n.cN
                  , i = n.dI;
                return Iu({
                    T: ht(t.T),
                    cN: c,
                    dh: e,
                    dI: i,
                    cC: s(Vu, t.ae, u, a)
                })
            }), Hu = t(function(r, n) {
                return {
                    $: 1,
                    a: r,
                    b: n
                }
            }), Mu = function(r) {
                return {
                    $: 1,
                    a: r
                }
            }, Fu = f(Je, function(r) {
                switch (r) {
                case "invite":
                    return le(0);
                case "join":
                    return le(1);
                case "leave":
                    return le(2);
                case "ban":
                    return le(3);
                case "knock":
                    return le(4);
                default:
                    return Mu("Invalid membership field: " + r)
                }
            }, Qe), Ju = br, Zu = function(r) {
                return Ye(C([f(fe, ht, r), le(gt)]))
            }, Ku = l(Ju, e(function(r, n, t) {
                return {
                    bq: t,
                    bC: n,
                    bY: r
                }
            }), f(Ze, "membership", Fu), Zu(f(Ze, "displayname", Qe)), Zu(f(Ze, "avatar_url", Qe))), Yu = function(r) {
                return {
                    $: 6,
                    a: r
                }
            }, Xu = function(r) {
                return {
                    $: 1,
                    a: r
                }
            }, Qu = function(r) {
                return {
                    $: 4,
                    a: r
                }
            }, Wu = function(r) {
                return {
                    $: 3,
                    a: r
                }
            }, ra = function(r) {
                return {
                    $: 2,
                    a: r
                }
            }, na = function(r) {
                return {
                    $: 0,
                    a: r
                }
            }, ta = function(r) {
                return {
                    $: 5,
                    a: r
                }
            }, ea = s(se, t(function(r, n) {
                return {
                    cN: r,
                    cC: n
                }
            }), f(Ze, "body", Qe), f(Ze, "url", Qe)), ua = s(se, t(function(r, n) {
                return {
                    cN: r,
                    cC: n
                }
            }), f(Ze, "body", Qe), f(Ze, "url", Qe)), aa = f(fe, function(r) {
                return {
                    $: 0,
                    a: r
                }
            }, f(Ze, "body", Qe)), ca = e(function(r, n, t) {
                return {
                    $: 1,
                    a: r,
                    b: n,
                    c: t
                }
            }), ia = t(function(r, n) {
                return {
                    $: 1,
                    a: r,
                    b: n
                }
            }), oa = e(function(r, n, t) {
                return {
                    $: 0,
                    a: r,
                    b: n,
                    c: t
                }
            }), fa = t(function(r, n) {
                var t = n;
                return function(n) {
                    var e = t(n);
                    if (1 === e.$)
                        return f(ia, e.a, e.b);
                    var u = e.a
                      , a = e.c
                      , c = r(e.b)(a);
                    if (1 === c.$) {
                        var i = c.a;
                        return f(ia, u || i, c.b)
                    }
                    return i = c.a,
                    s(oa, u || i, c.b, c.c)
                }
            }), sa = fa, la = function(r) {
                var n = r;
                return function(r) {
                    var t = n(r);
                    return 1 === t.$ ? f(ia, !1, t.b) : s(oa, !1, t.b, t.c)
                }
            }, ba = la, da = {
                $: 11
            }, va = t(function(r, n) {
                return {
                    $: 1,
                    a: r,
                    b: n
                }
            }), pa = u(function(r, n, t, e) {
                return {
                    bv: n,
                    cU: e,
                    dC: t,
                    dL: r
                }
            }), ha = {
                $: 0
            }, ga = t(function(r, n) {
                return f(va, ha, l(pa, r.dL, r.bv, n, r.d))
            }), ma = Fn, $a = function(r) {
                return -r
            }, wa = t(function(r, n) {
                return function(t) {
                    var e = s(ma, r, t.b, t.cq);
                    return p(e, -1) ? f(ia, !1, f(ga, t, n)) : p(e, -2) ? s(oa, !0, 0, {
                        bv: 1,
                        d: t.d,
                        e: t.e,
                        b: t.b + 1,
                        dL: t.dL + 1,
                        cq: t.cq
                    }) : s(oa, !0, 0, {
                        bv: t.bv + 1,
                        d: t.d,
                        e: t.e,
                        b: e,
                        dL: t.dL,
                        cq: t.cq
                    })
                }
            }), qa = function(r) {
                return f(wa, r, da)
            }, ya = a(function(r, n, t, e, u) {
                for (; ; ) {
                    var a = s(ma, r, n, u.cq);
                    if (p(a, -1))
                        return s(oa, 0 > m(u.b, n), 0, {
                            bv: e,
                            d: u.d,
                            e: u.e,
                            b: n,
                            dL: t,
                            cq: u.cq
                        });
                    p(a, -2) ? (r = r,
                    n += 1,
                    t += 1,
                    e = 1,
                    u = u) : (r = r,
                    n = a,
                    t = t,
                    e += 1,
                    u = u)
                }
            }), Ea = function(r) {
                return function(n) {
                    return b(ya, r, n.b, n.dL, n.bv, n)
                }
            }, xa = Ea, ka = t(function(r) {
                return r
            }), La = e(function(r, n, t) {
                var e = n
                  , u = t;
                return function(n) {
                    var t = e(n);
                    if (1 === t.$)
                        return f(ia, t.a, t.b);
                    var a = t.a
                      , c = t.b
                      , i = u(t.c);
                    if (1 === i.$) {
                        var o = i.a;
                        return f(ia, a || o, i.b)
                    }
                    o = i.a;
                    var l = i.c;
                    return s(oa, a || o, f(r, c, i.b), l)
                }
            }), Aa = t(function(r, n) {
                return s(La, ka, r, n)
            }), Na = Aa, Ta = function(r) {
                return f(Na, qa(r), xa(r))
            }, Ca = t(function(r, n) {
                var t = n;
                return function(n) {
                    var e = t(n);
                    if (1 === e.$)
                        return f(ia, e.a, e.b);
                    var u = e.b
                      , a = e.c;
                    return s(oa, e.a, f(r, s(he, n.b, a.b, n.cq), u), a)
                }
            }), Da = function(r) {
                return f(Ca, ka, r)
            }, Sa = Da, Pa = function(r) {
                return " " === r || "\t" === r || "\n" === r || "\r" === r || "\f" === r || " " === r
            }, Ra = function(r) {
                return !r
            }, Ba = function(r) {
                return {
                    $: 12,
                    a: r
                }
            }, Ua = function(r) {
                return function(n) {
                    return f(ia, !1, f(ga, n, r))
                }
            }, Ia = function(r) {
                return Ua(Ba(r))
            }, ja = function(r) {
                return function(n) {
                    return s(oa, !1, r, n)
                }
            }, Oa = ja, za = function(r) {
                return r.toLowerCase()
            }, _a = function(r) {
                var n = f(sa, function(n) {
                    return p(za(n), r) ? Oa(0) : Ia("closing tag does not match opening tag: " + r)
                }, Sa(Ta(function(r) {
                    return !Pa(r) && ">" !== r
                })));
                return f(Na, f(Na, f(Na, f(Na, qa(Yt("<")), qa(Yt("/"))), n), xa(Pa)), qa(Yt(">")))
            }, Va = function(r) {
                return {
                    $: 2,
                    a: r
                }
            }, Ga = Xn, Ha = u(function(r, n, t, e) {
                return f(va, ha, l(pa, r, n, t, e))
            }), Ma = function(r) {
                var n = r.a
                  , t = r.b;
                return function(r) {
                    var e = b(Ga, n, r.b, r.dL, r.bv, r.cq)
                      , u = e.a
                      , a = e.b
                      , c = e.c;
                    return p(u, -1) ? f(ia, !1, l(Ha, a, c, t, r.d)) : s(oa, 0 > m(r.b, u), 0, {
                        bv: c,
                        d: r.d,
                        e: r.e,
                        b: u,
                        dL: a,
                        cq: r.cq
                    })
                }
            }, Fa = function(r) {
                return {
                    $: 0,
                    a: r
                }
            }, Ja = t(function(r, n) {
                return {
                    $: 0,
                    a: r,
                    b: n
                }
            }), Za = function(r) {
                return f(Ja, r, Fa(r))
            }, Ka = t(function(r, n) {
                return s(La, Zt, r, n)
            }), Ya = Ka, Xa = Mn, Qa = function(r) {
                var n = r.a
                  , t = r.b
                  , e = !me(n);
                return function(r) {
                    var u = b(Xa, n, r.b, r.dL, r.bv, r.cq)
                      , a = u.a
                      , c = u.b
                      , i = u.c;
                    return p(a, -1) ? f(ia, !1, f(ga, r, t)) : s(oa, e, 0, {
                        bv: i,
                        d: r.d,
                        e: r.e,
                        b: a,
                        dL: c,
                        cq: r.cq
                    })
                }
            }, Wa = function(r) {
                return Qa(Za(r))
            }, rc = f(Ya, f(Na, f(Na, Oa(de), Wa("<!")), Wa("--")), f(Na, Sa(Ma(Za("--\x3e"))), Wa("--\x3e"))), nc = t(function(r, n) {
                var t = n;
                return function(n) {
                    var e = t(n);
                    if (e.$)
                        return f(ia, e.a, e.b);
                    var u = e.c;
                    return s(oa, e.a, r(e.b), u)
                }
            }), tc = nc, ec = f(tc, Va, rc), uc = t(function(r, n) {
                for (; ; ) {
                    if (!n.b)
                        return !1;
                    var t = n.b;
                    if (r(n.a))
                        return !0;
                    r = r,
                    n = t
                }
            }), ac = t(function(r, n) {
                return f(uc, function(n) {
                    return p(n, r)
                }, n)
            }), cc = C(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]), ic = function(r) {
                return f(ac, r, cc)
            }, oc = function(r) {
                return {
                    $: 1,
                    a: r
                }
            }, fc = function(r) {
                return {
                    $: 0,
                    a: r
                }
            }, sc = u(function(r, n, t, e) {
                for (; ; ) {
                    var u = t(n)(e);
                    if (u.$)
                        return a = u.a,
                        f(ia, r || a, u.b);
                    var a = u.a
                      , c = u.b
                      , i = u.c;
                    if (c.$)
                        return s(oa, r || a, c.a, i);
                    r = r || a,
                    n = c.a,
                    t = t,
                    e = i
                }
            }), lc = t(function(r, n) {
                return function(t) {
                    return l(sc, !1, r, n, t)
                }
            }), bc = function(r) {
                return {
                    $: 1,
                    a: r
                }
            }, dc = function(r) {
                return {
                    $: 0,
                    a: r
                }
            }, vc = function(r) {
                return r.$ ? bc(r.a) : dc(r.a)
            }, pc = t(function(r, n) {
                return f(lc, r, function(r) {
                    return f(tc, vc, n(r))
                })
            }), hc = t(function(r, n) {
                return {
                    $: 2,
                    a: r,
                    b: n
                }
            }), gc = e(function(r, n, t) {
                r: for (; ; ) {
                    if (t.b) {
                        var e = t.b
                          , u = (0,
                        t.a)(r);
                        if (u.$) {
                            var a;
                            if ((a = u).a)
                                return a;
                            r = r,
                            n = f(hc, n, a.b),
                            t = e;
                            continue r
                        }
                        return u
                    }
                    return f(ia, !1, n)
                }
            }), mc = function(r) {
                return function(n) {
                    return s(gc, n, ha, r)
                }
            }, $c = mc, wc = function(r) {
                return f(pc, A, function(n) {
                    return $c(C([f(tc, function(r) {
                        return fc(f(ct, r, n))
                    }, r), Oa(oc(It(n)))]))
                })
            }, qc = f(tc, za, Sa(Ta(function(r) {
                return !Pa(r) && '"' !== r && "'" !== r && ">" !== r && "/" !== r && "=" !== r
            }))), yc = qa(Yt(";")), Ec = function(r) {
                return s(kt, t(function(r, n) {
                    return s(ku, r.a, r.b, n)
                }), gu, r)
            }, xc = Ec(C([q("Aacute", "Á"), q("aacute", "á"), q("Abreve", "Ă"), q("abreve", "ă"), q("ac", "∾"), q("acd", "∿"), q("acE", "∾̳"), q("Acirc", "Â"), q("acirc", "â"), q("acute", "´"), q("Acy", "А"), q("acy", "а"), q("AElig", "Æ"), q("aelig", "æ"), q("af", "⁡"), q("Afr", "𝔄"), q("afr", "𝔞"), q("Agrave", "À"), q("agrave", "à"), q("alefsym", "ℵ"), q("aleph", "ℵ"), q("Alpha", "Α"), q("alpha", "α"), q("Amacr", "Ā"), q("amacr", "ā"), q("amalg", "⨿"), q("amp", "&"), q("AMP", "&"), q("andand", "⩕"), q("And", "⩓"), q("and", "∧"), q("andd", "⩜"), q("andslope", "⩘"), q("andv", "⩚"), q("ang", "∠"), q("ange", "⦤"), q("angle", "∠"), q("angmsdaa", "⦨"), q("angmsdab", "⦩"), q("angmsdac", "⦪"), q("angmsdad", "⦫"), q("angmsdae", "⦬"), q("angmsdaf", "⦭"), q("angmsdag", "⦮"), q("angmsdah", "⦯"), q("angmsd", "∡"), q("angrt", "∟"), q("angrtvb", "⊾"), q("angrtvbd", "⦝"), q("angsph", "∢"), q("angst", "Å"), q("angzarr", "⍼"), q("Aogon", "Ą"), q("aogon", "ą"), q("Aopf", "𝔸"), q("aopf", "𝕒"), q("apacir", "⩯"), q("ap", "≈"), q("apE", "⩰"), q("ape", "≊"), q("apid", "≋"), q("apos", "'"), q("ApplyFunction", "⁡"), q("approx", "≈"), q("approxeq", "≊"), q("Aring", "Å"), q("aring", "å"), q("Ascr", "𝒜"), q("ascr", "𝒶"), q("Assign", "≔"), q("ast", "*"), q("asymp", "≈"), q("asympeq", "≍"), q("Atilde", "Ã"), q("atilde", "ã"), q("Auml", "Ä"), q("auml", "ä"), q("awconint", "∳"), q("awint", "⨑"), q("backcong", "≌"), q("backepsilon", "϶"), q("backprime", "‵"), q("backsim", "∽"), q("backsimeq", "⋍"), q("Backslash", "∖"), q("Barv", "⫧"), q("barvee", "⊽"), q("barwed", "⌅"), q("Barwed", "⌆"), q("barwedge", "⌅"), q("bbrk", "⎵"), q("bbrktbrk", "⎶"), q("bcong", "≌"), q("Bcy", "Б"), q("bcy", "б"), q("bdquo", "„"), q("becaus", "∵"), q("because", "∵"), q("Because", "∵"), q("bemptyv", "⦰"), q("bepsi", "϶"), q("bernou", "ℬ"), q("Bernoullis", "ℬ"), q("Beta", "Β"), q("beta", "β"), q("beth", "ℶ"), q("between", "≬"), q("Bfr", "𝔅"), q("bfr", "𝔟"), q("bigcap", "⋂"), q("bigcirc", "◯"), q("bigcup", "⋃"), q("bigodot", "⨀"), q("bigoplus", "⨁"), q("bigotimes", "⨂"), q("bigsqcup", "⨆"), q("bigstar", "★"), q("bigtriangledown", "▽"), q("bigtriangleup", "△"), q("biguplus", "⨄"), q("bigvee", "⋁"), q("bigwedge", "⋀"), q("bkarow", "⤍"), q("blacklozenge", "⧫"), q("blacksquare", "▪"), q("blacktriangle", "▴"), q("blacktriangledown", "▾"), q("blacktriangleleft", "◂"), q("blacktriangleright", "▸"), q("blank", "␣"), q("blk12", "▒"), q("blk14", "░"), q("blk34", "▓"), q("block", "█"), q("bne", "=⃥"), q("bnequiv", "≡⃥"), q("bNot", "⫭"), q("bnot", "⌐"), q("Bopf", "𝔹"), q("bopf", "𝕓"), q("bot", "⊥"), q("bottom", "⊥"), q("bowtie", "⋈"), q("boxbox", "⧉"), q("boxdl", "┐"), q("boxdL", "╕"), q("boxDl", "╖"), q("boxDL", "╗"), q("boxdr", "┌"), q("boxdR", "╒"), q("boxDr", "╓"), q("boxDR", "╔"), q("boxh", "─"), q("boxH", "═"), q("boxhd", "┬"), q("boxHd", "╤"), q("boxhD", "╥"), q("boxHD", "╦"), q("boxhu", "┴"), q("boxHu", "╧"), q("boxhU", "╨"), q("boxHU", "╩"), q("boxminus", "⊟"), q("boxplus", "⊞"), q("boxtimes", "⊠"), q("boxul", "┘"), q("boxuL", "╛"), q("boxUl", "╜"), q("boxUL", "╝"), q("boxur", "└"), q("boxuR", "╘"), q("boxUr", "╙"), q("boxUR", "╚"), q("boxv", "│"), q("boxV", "║"), q("boxvh", "┼"), q("boxvH", "╪"), q("boxVh", "╫"), q("boxVH", "╬"), q("boxvl", "┤"), q("boxvL", "╡"), q("boxVl", "╢"), q("boxVL", "╣"), q("boxvr", "├"), q("boxvR", "╞"), q("boxVr", "╟"), q("boxVR", "╠"), q("bprime", "‵"), q("breve", "˘"), q("Breve", "˘"), q("brvbar", "¦"), q("bscr", "𝒷"), q("Bscr", "ℬ"), q("bsemi", "⁏"), q("bsim", "∽"), q("bsime", "⋍"), q("bsolb", "⧅"), q("bsol", "\\"), q("bsolhsub", "⟈"), q("bull", "•"), q("bullet", "•"), q("bump", "≎"), q("bumpE", "⪮"), q("bumpe", "≏"), q("Bumpeq", "≎"), q("bumpeq", "≏"), q("Cacute", "Ć"), q("cacute", "ć"), q("capand", "⩄"), q("capbrcup", "⩉"), q("capcap", "⩋"), q("cap", "∩"), q("Cap", "⋒"), q("capcup", "⩇"), q("capdot", "⩀"), q("CapitalDifferentialD", "ⅅ"), q("caps", "∩︀"), q("caret", "⁁"), q("caron", "ˇ"), q("Cayleys", "ℭ"), q("ccaps", "⩍"), q("Ccaron", "Č"), q("ccaron", "č"), q("Ccedil", "Ç"), q("ccedil", "ç"), q("Ccirc", "Ĉ"), q("ccirc", "ĉ"), q("Cconint", "∰"), q("ccups", "⩌"), q("ccupssm", "⩐"), q("Cdot", "Ċ"), q("cdot", "ċ"), q("cedil", "¸"), q("Cedilla", "¸"), q("cemptyv", "⦲"), q("cent", "¢"), q("centerdot", "·"), q("CenterDot", "·"), q("cfr", "𝔠"), q("Cfr", "ℭ"), q("CHcy", "Ч"), q("chcy", "ч"), q("check", "✓"), q("checkmark", "✓"), q("Chi", "Χ"), q("chi", "χ"), q("circ", "ˆ"), q("circeq", "≗"), q("circlearrowleft", "↺"), q("circlearrowright", "↻"), q("circledast", "⊛"), q("circledcirc", "⊚"), q("circleddash", "⊝"), q("CircleDot", "⊙"), q("circledR", "®"), q("circledS", "Ⓢ"), q("CircleMinus", "⊖"), q("CirclePlus", "⊕"), q("CircleTimes", "⊗"), q("cir", "○"), q("cirE", "⧃"), q("cire", "≗"), q("cirfnint", "⨐"), q("cirmid", "⫯"), q("cirscir", "⧂"), q("ClockwiseContourIntegral", "∲"), q("CloseCurlyDoubleQuote", "”"), q("CloseCurlyQuote", "’"), q("clubs", "♣"), q("clubsuit", "♣"), q("colon", ":"), q("Colon", "∷"), q("Colone", "⩴"), q("colone", "≔"), q("coloneq", "≔"), q("comma", ","), q("commat", "@"), q("comp", "∁"), q("compfn", "∘"), q("complement", "∁"), q("complexes", "ℂ"), q("cong", "≅"), q("congdot", "⩭"), q("Congruent", "≡"), q("conint", "∮"), q("Conint", "∯"), q("ContourIntegral", "∮"), q("copf", "𝕔"), q("Copf", "ℂ"), q("coprod", "∐"), q("Coproduct", "∐"), q("copy", "©"), q("COPY", "©"), q("copysr", "℗"), q("CounterClockwiseContourIntegral", "∳"), q("crarr", "↵"), q("cross", "✗"), q("Cross", "⨯"), q("Cscr", "𝒞"), q("cscr", "𝒸"), q("csub", "⫏"), q("csube", "⫑"), q("csup", "⫐"), q("csupe", "⫒"), q("ctdot", "⋯"), q("cudarrl", "⤸"), q("cudarrr", "⤵"), q("cuepr", "⋞"), q("cuesc", "⋟"), q("cularr", "↶"), q("cularrp", "⤽"), q("cupbrcap", "⩈"), q("cupcap", "⩆"), q("CupCap", "≍"), q("cup", "∪"), q("Cup", "⋓"), q("cupcup", "⩊"), q("cupdot", "⊍"), q("cupor", "⩅"), q("cups", "∪︀"), q("curarr", "↷"), q("curarrm", "⤼"), q("curlyeqprec", "⋞"), q("curlyeqsucc", "⋟"), q("curlyvee", "⋎"), q("curlywedge", "⋏"), q("curren", "¤"), q("curvearrowleft", "↶"), q("curvearrowright", "↷"), q("cuvee", "⋎"), q("cuwed", "⋏"), q("cwconint", "∲"), q("cwint", "∱"), q("cylcty", "⌭"), q("dagger", "†"), q("Dagger", "‡"), q("daleth", "ℸ"), q("darr", "↓"), q("Darr", "↡"), q("dArr", "⇓"), q("dash", "‐"), q("Dashv", "⫤"), q("dashv", "⊣"), q("dbkarow", "⤏"), q("dblac", "˝"), q("Dcaron", "Ď"), q("dcaron", "ď"), q("Dcy", "Д"), q("dcy", "д"), q("ddagger", "‡"), q("ddarr", "⇊"), q("DD", "ⅅ"), q("dd", "ⅆ"), q("DDotrahd", "⤑"), q("ddotseq", "⩷"), q("deg", "°"), q("Del", "∇"), q("Delta", "Δ"), q("delta", "δ"), q("demptyv", "⦱"), q("dfisht", "⥿"), q("Dfr", "𝔇"), q("dfr", "𝔡"), q("dHar", "⥥"), q("dharl", "⇃"), q("dharr", "⇂"), q("DiacriticalAcute", "´"), q("DiacriticalDot", "˙"), q("DiacriticalDoubleAcute", "˝"), q("DiacriticalGrave", "`"), q("DiacriticalTilde", "˜"), q("diam", "⋄"), q("diamond", "⋄"), q("Diamond", "⋄"), q("diamondsuit", "♦"), q("diams", "♦"), q("die", "¨"), q("DifferentialD", "ⅆ"), q("digamma", "ϝ"), q("disin", "⋲"), q("div", "÷"), q("divide", "÷"), q("divideontimes", "⋇"), q("divonx", "⋇"), q("DJcy", "Ђ"), q("djcy", "ђ"), q("dlcorn", "⌞"), q("dlcrop", "⌍"), q("dollar", "$"), q("Dopf", "𝔻"), q("dopf", "𝕕"), q("Dot", "¨"), q("dot", "˙"), q("DotDot", "⃜"), q("doteq", "≐"), q("doteqdot", "≑"), q("DotEqual", "≐"), q("dotminus", "∸"), q("dotplus", "∔"), q("dotsquare", "⊡"), q("doublebarwedge", "⌆"), q("DoubleContourIntegral", "∯"), q("DoubleDot", "¨"), q("DoubleDownArrow", "⇓"), q("DoubleLeftArrow", "⇐"), q("DoubleLeftRightArrow", "⇔"), q("DoubleLeftTee", "⫤"), q("DoubleLongLeftArrow", "⟸"), q("DoubleLongLeftRightArrow", "⟺"), q("DoubleLongRightArrow", "⟹"), q("DoubleRightArrow", "⇒"), q("DoubleRightTee", "⊨"), q("DoubleUpArrow", "⇑"), q("DoubleUpDownArrow", "⇕"), q("DoubleVerticalBar", "∥"), q("DownArrowBar", "⤓"), q("downarrow", "↓"), q("DownArrow", "↓"), q("Downarrow", "⇓"), q("DownArrowUpArrow", "⇵"), q("DownBreve", "̑"), q("downdownarrows", "⇊"), q("downharpoonleft", "⇃"), q("downharpoonright", "⇂"), q("DownLeftRightVector", "⥐"), q("DownLeftTeeVector", "⥞"), q("DownLeftVectorBar", "⥖"), q("DownLeftVector", "↽"), q("DownRightTeeVector", "⥟"), q("DownRightVectorBar", "⥗"), q("DownRightVector", "⇁"), q("DownTeeArrow", "↧"), q("DownTee", "⊤"), q("drbkarow", "⤐"), q("drcorn", "⌟"), q("drcrop", "⌌"), q("Dscr", "𝒟"), q("dscr", "𝒹"), q("DScy", "Ѕ"), q("dscy", "ѕ"), q("dsol", "⧶"), q("Dstrok", "Đ"), q("dstrok", "đ"), q("dtdot", "⋱"), q("dtri", "▿"), q("dtrif", "▾"), q("duarr", "⇵"), q("duhar", "⥯"), q("dwangle", "⦦"), q("DZcy", "Џ"), q("dzcy", "џ"), q("dzigrarr", "⟿"), q("Eacute", "É"), q("eacute", "é"), q("easter", "⩮"), q("Ecaron", "Ě"), q("ecaron", "ě"), q("Ecirc", "Ê"), q("ecirc", "ê"), q("ecir", "≖"), q("ecolon", "≕"), q("Ecy", "Э"), q("ecy", "э"), q("eDDot", "⩷"), q("Edot", "Ė"), q("edot", "ė"), q("eDot", "≑"), q("ee", "ⅇ"), q("efDot", "≒"), q("Efr", "𝔈"), q("efr", "𝔢"), q("eg", "⪚"), q("Egrave", "È"), q("egrave", "è"), q("egs", "⪖"), q("egsdot", "⪘"), q("el", "⪙"), q("Element", "∈"), q("elinters", "⏧"), q("ell", "ℓ"), q("els", "⪕"), q("elsdot", "⪗"), q("Emacr", "Ē"), q("emacr", "ē"), q("empty", "∅"), q("emptyset", "∅"), q("EmptySmallSquare", "◻"), q("emptyv", "∅"), q("EmptyVerySmallSquare", "▫"), q("emsp13", " "), q("emsp14", " "), q("emsp", " "), q("ENG", "Ŋ"), q("eng", "ŋ"), q("ensp", " "), q("Eogon", "Ę"), q("eogon", "ę"), q("Eopf", "𝔼"), q("eopf", "𝕖"), q("epar", "⋕"), q("eparsl", "⧣"), q("eplus", "⩱"), q("epsi", "ε"), q("Epsilon", "Ε"), q("epsilon", "ε"), q("epsiv", "ϵ"), q("eqcirc", "≖"), q("eqcolon", "≕"), q("eqsim", "≂"), q("eqslantgtr", "⪖"), q("eqslantless", "⪕"), q("Equal", "⩵"), q("equals", "="), q("EqualTilde", "≂"), q("equest", "≟"), q("Equilibrium", "⇌"), q("equiv", "≡"), q("equivDD", "⩸"), q("eqvparsl", "⧥"), q("erarr", "⥱"), q("erDot", "≓"), q("escr", "ℯ"), q("Escr", "ℰ"), q("esdot", "≐"), q("Esim", "⩳"), q("esim", "≂"), q("Eta", "Η"), q("eta", "η"), q("ETH", "Ð"), q("eth", "ð"), q("Euml", "Ë"), q("euml", "ë"), q("euro", "€"), q("excl", "!"), q("exist", "∃"), q("Exists", "∃"), q("expectation", "ℰ"), q("exponentiale", "ⅇ"), q("ExponentialE", "ⅇ"), q("fallingdotseq", "≒"), q("Fcy", "Ф"), q("fcy", "ф"), q("female", "♀"), q("ffilig", "ﬃ"), q("fflig", "ﬀ"), q("ffllig", "ﬄ"), q("Ffr", "𝔉"), q("ffr", "𝔣"), q("filig", "ﬁ"), q("FilledSmallSquare", "◼"), q("FilledVerySmallSquare", "▪"), q("fjlig", "fj"), q("flat", "♭"), q("fllig", "ﬂ"), q("fltns", "▱"), q("fnof", "ƒ"), q("Fopf", "𝔽"), q("fopf", "𝕗"), q("forall", "∀"), q("ForAll", "∀"), q("fork", "⋔"), q("forkv", "⫙"), q("Fouriertrf", "ℱ"), q("fpartint", "⨍"), q("frac12", "½"), q("frac13", "⅓"), q("frac14", "¼"), q("frac15", "⅕"), q("frac16", "⅙"), q("frac18", "⅛"), q("frac23", "⅔"), q("frac25", "⅖"), q("frac34", "¾"), q("frac35", "⅗"), q("frac38", "⅜"), q("frac45", "⅘"), q("frac56", "⅚"), q("frac58", "⅝"), q("frac78", "⅞"), q("frasl", "⁄"), q("frown", "⌢"), q("fscr", "𝒻"), q("Fscr", "ℱ"), q("gacute", "ǵ"), q("Gamma", "Γ"), q("gamma", "γ"), q("Gammad", "Ϝ"), q("gammad", "ϝ"), q("gap", "⪆"), q("Gbreve", "Ğ"), q("gbreve", "ğ"), q("Gcedil", "Ģ"), q("Gcirc", "Ĝ"), q("gcirc", "ĝ"), q("Gcy", "Г"), q("gcy", "г"), q("Gdot", "Ġ"), q("gdot", "ġ"), q("ge", "≥"), q("gE", "≧"), q("gEl", "⪌"), q("gel", "⋛"), q("geq", "≥"), q("geqq", "≧"), q("geqslant", "⩾"), q("gescc", "⪩"), q("ges", "⩾"), q("gesdot", "⪀"), q("gesdoto", "⪂"), q("gesdotol", "⪄"), q("gesl", "⋛︀"), q("gesles", "⪔"), q("Gfr", "𝔊"), q("gfr", "𝔤"), q("gg", "≫"), q("Gg", "⋙"), q("ggg", "⋙"), q("gimel", "ℷ"), q("GJcy", "Ѓ"), q("gjcy", "ѓ"), q("gla", "⪥"), q("gl", "≷"), q("glE", "⪒"), q("glj", "⪤"), q("gnap", "⪊"), q("gnapprox", "⪊"), q("gne", "⪈"), q("gnE", "≩"), q("gneq", "⪈"), q("gneqq", "≩"), q("gnsim", "⋧"), q("Gopf", "𝔾"), q("gopf", "𝕘"), q("grave", "`"), q("GreaterEqual", "≥"), q("GreaterEqualLess", "⋛"), q("GreaterFullEqual", "≧"), q("GreaterGreater", "⪢"), q("GreaterLess", "≷"), q("GreaterSlantEqual", "⩾"), q("GreaterTilde", "≳"), q("Gscr", "𝒢"), q("gscr", "ℊ"), q("gsim", "≳"), q("gsime", "⪎"), q("gsiml", "⪐"), q("gtcc", "⪧"), q("gtcir", "⩺"), q("gt", ">"), q("GT", ">"), q("Gt", "≫"), q("gtdot", "⋗"), q("gtlPar", "⦕"), q("gtquest", "⩼"), q("gtrapprox", "⪆"), q("gtrarr", "⥸"), q("gtrdot", "⋗"), q("gtreqless", "⋛"), q("gtreqqless", "⪌"), q("gtrless", "≷"), q("gtrsim", "≳"), q("gvertneqq", "≩︀"), q("gvnE", "≩︀"), q("Hacek", "ˇ"), q("hairsp", " "), q("half", "½"), q("hamilt", "ℋ"), q("HARDcy", "Ъ"), q("hardcy", "ъ"), q("harrcir", "⥈"), q("harr", "↔"), q("hArr", "⇔"), q("harrw", "↭"), q("Hat", "^"), q("hbar", "ℏ"), q("Hcirc", "Ĥ"), q("hcirc", "ĥ"), q("hearts", "♥"), q("heartsuit", "♥"), q("hellip", "…"), q("hercon", "⊹"), q("hfr", "𝔥"), q("Hfr", "ℌ"), q("HilbertSpace", "ℋ"), q("hksearow", "⤥"), q("hkswarow", "⤦"), q("hoarr", "⇿"), q("homtht", "∻"), q("hookleftarrow", "↩"), q("hookrightarrow", "↪"), q("hopf", "𝕙"), q("Hopf", "ℍ"), q("horbar", "―"), q("HorizontalLine", "─"), q("hscr", "𝒽"), q("Hscr", "ℋ"), q("hslash", "ℏ"), q("Hstrok", "Ħ"), q("hstrok", "ħ"), q("HumpDownHump", "≎"), q("HumpEqual", "≏"), q("hybull", "⁃"), q("hyphen", "‐"), q("Iacute", "Í"), q("iacute", "í"), q("ic", "⁣"), q("Icirc", "Î"), q("icirc", "î"), q("Icy", "И"), q("icy", "и"), q("Idot", "İ"), q("IEcy", "Е"), q("iecy", "е"), q("iexcl", "¡"), q("iff", "⇔"), q("ifr", "𝔦"), q("Ifr", "ℑ"), q("Igrave", "Ì"), q("igrave", "ì"), q("ii", "ⅈ"), q("iiiint", "⨌"), q("iiint", "∭"), q("iinfin", "⧜"), q("iiota", "℩"), q("IJlig", "Ĳ"), q("ijlig", "ĳ"), q("Imacr", "Ī"), q("imacr", "ī"), q("image", "ℑ"), q("ImaginaryI", "ⅈ"), q("imagline", "ℐ"), q("imagpart", "ℑ"), q("imath", "ı"), q("Im", "ℑ"), q("imof", "⊷"), q("imped", "Ƶ"), q("Implies", "⇒"), q("incare", "℅"), q("in", "∈"), q("infin", "∞"), q("infintie", "⧝"), q("inodot", "ı"), q("intcal", "⊺"), q("int", "∫"), q("Int", "∬"), q("integers", "ℤ"), q("Integral", "∫"), q("intercal", "⊺"), q("Intersection", "⋂"), q("intlarhk", "⨗"), q("intprod", "⨼"), q("InvisibleComma", "⁣"), q("InvisibleTimes", "⁢"), q("IOcy", "Ё"), q("iocy", "ё"), q("Iogon", "Į"), q("iogon", "į"), q("Iopf", "𝕀"), q("iopf", "𝕚"), q("Iota", "Ι"), q("iota", "ι"), q("iprod", "⨼"), q("iquest", "¿"), q("iscr", "𝒾"), q("Iscr", "ℐ"), q("isin", "∈"), q("isindot", "⋵"), q("isinE", "⋹"), q("isins", "⋴"), q("isinsv", "⋳"), q("isinv", "∈"), q("it", "⁢"), q("Itilde", "Ĩ"), q("itilde", "ĩ"), q("Iukcy", "І"), q("iukcy", "і"), q("Iuml", "Ï"), q("iuml", "ï"), q("Jcirc", "Ĵ"), q("jcirc", "ĵ"), q("Jcy", "Й"), q("jcy", "й"), q("Jfr", "𝔍"), q("jfr", "𝔧"), q("jmath", "ȷ"), q("Jopf", "𝕁"), q("jopf", "𝕛"), q("Jscr", "𝒥"), q("jscr", "𝒿"), q("Jsercy", "Ј"), q("jsercy", "ј"), q("Jukcy", "Є"), q("jukcy", "є"), q("Kappa", "Κ"), q("kappa", "κ"), q("kappav", "ϰ"), q("Kcedil", "Ķ"), q("kcedil", "ķ"), q("Kcy", "К"), q("kcy", "к"), q("Kfr", "𝔎"), q("kfr", "𝔨"), q("kgreen", "ĸ"), q("KHcy", "Х"), q("khcy", "х"), q("KJcy", "Ќ"), q("kjcy", "ќ"), q("Kopf", "𝕂"), q("kopf", "𝕜"), q("Kscr", "𝒦"), q("kscr", "𝓀"), q("lAarr", "⇚"), q("Lacute", "Ĺ"), q("lacute", "ĺ"), q("laemptyv", "⦴"), q("lagran", "ℒ"), q("Lambda", "Λ"), q("lambda", "λ"), q("lang", "⟨"), q("Lang", "⟪"), q("langd", "⦑"), q("langle", "⟨"), q("lap", "⪅"), q("Laplacetrf", "ℒ"), q("laquo", "«"), q("larrb", "⇤"), q("larrbfs", "⤟"), q("larr", "←"), q("Larr", "↞"), q("lArr", "⇐"), q("larrfs", "⤝"), q("larrhk", "↩"), q("larrlp", "↫"), q("larrpl", "⤹"), q("larrsim", "⥳"), q("larrtl", "↢"), q("latail", "⤙"), q("lAtail", "⤛"), q("lat", "⪫"), q("late", "⪭"), q("lates", "⪭︀"), q("lbarr", "⤌"), q("lBarr", "⤎"), q("lbbrk", "❲"), q("lbrace", "{"), q("lbrack", "["), q("lbrke", "⦋"), q("lbrksld", "⦏"), q("lbrkslu", "⦍"), q("Lcaron", "Ľ"), q("lcaron", "ľ"), q("Lcedil", "Ļ"), q("lcedil", "ļ"), q("lceil", "⌈"), q("lcub", "{"), q("Lcy", "Л"), q("lcy", "л"), q("ldca", "⤶"), q("ldquo", "“"), q("ldquor", "„"), q("ldrdhar", "⥧"), q("ldrushar", "⥋"), q("ldsh", "↲"), q("le", "≤"), q("lE", "≦"), q("LeftAngleBracket", "⟨"), q("LeftArrowBar", "⇤"), q("leftarrow", "←"), q("LeftArrow", "←"), q("Leftarrow", "⇐"), q("LeftArrowRightArrow", "⇆"), q("leftarrowtail", "↢"), q("LeftCeiling", "⌈"), q("LeftDoubleBracket", "⟦"), q("LeftDownTeeVector", "⥡"), q("LeftDownVectorBar", "⥙"), q("LeftDownVector", "⇃"), q("LeftFloor", "⌊"), q("leftharpoondown", "↽"), q("leftharpoonup", "↼"), q("leftleftarrows", "⇇"), q("leftrightarrow", "↔"), q("LeftRightArrow", "↔"), q("Leftrightarrow", "⇔"), q("leftrightarrows", "⇆"), q("leftrightharpoons", "⇋"), q("leftrightsquigarrow", "↭"), q("LeftRightVector", "⥎"), q("LeftTeeArrow", "↤"), q("LeftTee", "⊣"), q("LeftTeeVector", "⥚"), q("leftthreetimes", "⋋"), q("LeftTriangleBar", "⧏"), q("LeftTriangle", "⊲"), q("LeftTriangleEqual", "⊴"), q("LeftUpDownVector", "⥑"), q("LeftUpTeeVector", "⥠"), q("LeftUpVectorBar", "⥘"), q("LeftUpVector", "↿"), q("LeftVectorBar", "⥒"), q("LeftVector", "↼"), q("lEg", "⪋"), q("leg", "⋚"), q("leq", "≤"), q("leqq", "≦"), q("leqslant", "⩽"), q("lescc", "⪨"), q("les", "⩽"), q("lesdot", "⩿"), q("lesdoto", "⪁"), q("lesdotor", "⪃"), q("lesg", "⋚︀"), q("lesges", "⪓"), q("lessapprox", "⪅"), q("lessdot", "⋖"), q("lesseqgtr", "⋚"), q("lesseqqgtr", "⪋"), q("LessEqualGreater", "⋚"), q("LessFullEqual", "≦"), q("LessGreater", "≶"), q("lessgtr", "≶"), q("LessLess", "⪡"), q("lesssim", "≲"), q("LessSlantEqual", "⩽"), q("LessTilde", "≲"), q("lfisht", "⥼"), q("lfloor", "⌊"), q("Lfr", "𝔏"), q("lfr", "𝔩"), q("lg", "≶"), q("lgE", "⪑"), q("lHar", "⥢"), q("lhard", "↽"), q("lharu", "↼"), q("lharul", "⥪"), q("lhblk", "▄"), q("LJcy", "Љ"), q("ljcy", "љ"), q("llarr", "⇇"), q("ll", "≪"), q("Ll", "⋘"), q("llcorner", "⌞"), q("Lleftarrow", "⇚"), q("llhard", "⥫"), q("lltri", "◺"), q("Lmidot", "Ŀ"), q("lmidot", "ŀ"), q("lmoustache", "⎰"), q("lmoust", "⎰"), q("lnap", "⪉"), q("lnapprox", "⪉"), q("lne", "⪇"), q("lnE", "≨"), q("lneq", "⪇"), q("lneqq", "≨"), q("lnsim", "⋦"), q("loang", "⟬"), q("loarr", "⇽"), q("lobrk", "⟦"), q("longleftarrow", "⟵"), q("LongLeftArrow", "⟵"), q("Longleftarrow", "⟸"), q("longleftrightarrow", "⟷"), q("LongLeftRightArrow", "⟷"), q("Longleftrightarrow", "⟺"), q("longmapsto", "⟼"), q("longrightarrow", "⟶"), q("LongRightArrow", "⟶"), q("Longrightarrow", "⟹"), q("looparrowleft", "↫"), q("looparrowright", "↬"), q("lopar", "⦅"), q("Lopf", "𝕃"), q("lopf", "𝕝"), q("loplus", "⨭"), q("lotimes", "⨴"), q("lowast", "∗"), q("lowbar", "_"), q("LowerLeftArrow", "↙"), q("LowerRightArrow", "↘"), q("loz", "◊"), q("lozenge", "◊"), q("lozf", "⧫"), q("lpar", "("), q("lparlt", "⦓"), q("lrarr", "⇆"), q("lrcorner", "⌟"), q("lrhar", "⇋"), q("lrhard", "⥭"), q("lrm", "‎"), q("lrtri", "⊿"), q("lsaquo", "‹"), q("lscr", "𝓁"), q("Lscr", "ℒ"), q("lsh", "↰"), q("Lsh", "↰"), q("lsim", "≲"), q("lsime", "⪍"), q("lsimg", "⪏"), q("lsqb", "["), q("lsquo", "‘"), q("lsquor", "‚"), q("Lstrok", "Ł"), q("lstrok", "ł"), q("ltcc", "⪦"), q("ltcir", "⩹"), q("lt", "<"), q("LT", "<"), q("Lt", "≪"), q("ltdot", "⋖"), q("lthree", "⋋"), q("ltimes", "⋉"), q("ltlarr", "⥶"), q("ltquest", "⩻"), q("ltri", "◃"), q("ltrie", "⊴"), q("ltrif", "◂"), q("ltrPar", "⦖"), q("lurdshar", "⥊"), q("luruhar", "⥦"), q("lvertneqq", "≨︀"), q("lvnE", "≨︀"), q("macr", "¯"), q("male", "♂"), q("malt", "✠"), q("maltese", "✠"), q("Map", "⤅"), q("map", "↦"), q("mapsto", "↦"), q("mapstodown", "↧"), q("mapstoleft", "↤"), q("mapstoup", "↥"), q("marker", "▮"), q("mcomma", "⨩"), q("Mcy", "М"), q("mcy", "м"), q("mdash", "—"), q("mDDot", "∺"), q("measuredangle", "∡"), q("MediumSpace", " "), q("Mellintrf", "ℳ"), q("Mfr", "𝔐"), q("mfr", "𝔪"), q("mho", "℧"), q("micro", "µ"), q("midast", "*"), q("midcir", "⫰"), q("mid", "∣"), q("middot", "·"), q("minusb", "⊟"), q("minus", "−"), q("minusd", "∸"), q("minusdu", "⨪"), q("MinusPlus", "∓"), q("mlcp", "⫛"), q("mldr", "…"), q("mnplus", "∓"), q("models", "⊧"), q("Mopf", "𝕄"), q("mopf", "𝕞"), q("mp", "∓"), q("mscr", "𝓂"), q("Mscr", "ℳ"), q("mstpos", "∾"), q("Mu", "Μ"), q("mu", "μ"), q("multimap", "⊸"), q("mumap", "⊸"), q("nabla", "∇"), q("Nacute", "Ń"), q("nacute", "ń"), q("nang", "∠⃒"), q("nap", "≉"), q("napE", "⩰̸"), q("napid", "≋̸"), q("napos", "ŉ"), q("napprox", "≉"), q("natural", "♮"), q("naturals", "ℕ"), q("natur", "♮"), q("nbsp", " "), q("nbump", "≎̸"), q("nbumpe", "≏̸"), q("ncap", "⩃"), q("Ncaron", "Ň"), q("ncaron", "ň"), q("Ncedil", "Ņ"), q("ncedil", "ņ"), q("ncong", "≇"), q("ncongdot", "⩭̸"), q("ncup", "⩂"), q("Ncy", "Н"), q("ncy", "н"), q("ndash", "–"), q("nearhk", "⤤"), q("nearr", "↗"), q("neArr", "⇗"), q("nearrow", "↗"), q("ne", "≠"), q("nedot", "≐̸"), q("NegativeMediumSpace", "​"), q("NegativeThickSpace", "​"), q("NegativeThinSpace", "​"), q("NegativeVeryThinSpace", "​"), q("nequiv", "≢"), q("nesear", "⤨"), q("nesim", "≂̸"), q("NestedGreaterGreater", "≫"), q("NestedLessLess", "≪"), q("NewLine", "\n"), q("nexist", "∄"), q("nexists", "∄"), q("Nfr", "𝔑"), q("nfr", "𝔫"), q("ngE", "≧̸"), q("nge", "≱"), q("ngeq", "≱"), q("ngeqq", "≧̸"), q("ngeqslant", "⩾̸"), q("nges", "⩾̸"), q("nGg", "⋙̸"), q("ngsim", "≵"), q("nGt", "≫⃒"), q("ngt", "≯"), q("ngtr", "≯"), q("nGtv", "≫̸"), q("nharr", "↮"), q("nhArr", "⇎"), q("nhpar", "⫲"), q("ni", "∋"), q("nis", "⋼"), q("nisd", "⋺"), q("niv", "∋"), q("NJcy", "Њ"), q("njcy", "њ"), q("nlarr", "↚"), q("nlArr", "⇍"), q("nldr", "‥"), q("nlE", "≦̸"), q("nle", "≰"), q("nleftarrow", "↚"), q("nLeftarrow", "⇍"), q("nleftrightarrow", "↮"), q("nLeftrightarrow", "⇎"), q("nleq", "≰"), q("nleqq", "≦̸"), q("nleqslant", "⩽̸"), q("nles", "⩽̸"), q("nless", "≮"), q("nLl", "⋘̸"), q("nlsim", "≴"), q("nLt", "≪⃒"), q("nlt", "≮"), q("nltri", "⋪"), q("nltrie", "⋬"), q("nLtv", "≪̸"), q("nmid", "∤"), q("NoBreak", "⁠"), q("NonBreakingSpace", " "), q("nopf", "𝕟"), q("Nopf", "ℕ"), q("Not", "⫬"), q("not", "¬"), q("NotCongruent", "≢"), q("NotCupCap", "≭"), q("NotDoubleVerticalBar", "∦"), q("NotElement", "∉"), q("NotEqual", "≠"), q("NotEqualTilde", "≂̸"), q("NotExists", "∄"), q("NotGreater", "≯"), q("NotGreaterEqual", "≱"), q("NotGreaterFullEqual", "≧̸"), q("NotGreaterGreater", "≫̸"), q("NotGreaterLess", "≹"), q("NotGreaterSlantEqual", "⩾̸"), q("NotGreaterTilde", "≵"), q("NotHumpDownHump", "≎̸"), q("NotHumpEqual", "≏̸"), q("notin", "∉"), q("notindot", "⋵̸"), q("notinE", "⋹̸"), q("notinva", "∉"), q("notinvb", "⋷"), q("notinvc", "⋶"), q("NotLeftTriangleBar", "⧏̸"), q("NotLeftTriangle", "⋪"), q("NotLeftTriangleEqual", "⋬"), q("NotLess", "≮"), q("NotLessEqual", "≰"), q("NotLessGreater", "≸"), q("NotLessLess", "≪̸"), q("NotLessSlantEqual", "⩽̸"), q("NotLessTilde", "≴"), q("NotNestedGreaterGreater", "⪢̸"), q("NotNestedLessLess", "⪡̸"), q("notni", "∌"), q("notniva", "∌"), q("notnivb", "⋾"), q("notnivc", "⋽"), q("NotPrecedes", "⊀"), q("NotPrecedesEqual", "⪯̸"), q("NotPrecedesSlantEqual", "⋠"), q("NotReverseElement", "∌"), q("NotRightTriangleBar", "⧐̸"), q("NotRightTriangle", "⋫"), q("NotRightTriangleEqual", "⋭"), q("NotSquareSubset", "⊏̸"), q("NotSquareSubsetEqual", "⋢"), q("NotSquareSuperset", "⊐̸"), q("NotSquareSupersetEqual", "⋣"), q("NotSubset", "⊂⃒"), q("NotSubsetEqual", "⊈"), q("NotSucceeds", "⊁"), q("NotSucceedsEqual", "⪰̸"), q("NotSucceedsSlantEqual", "⋡"), q("NotSucceedsTilde", "≿̸"), q("NotSuperset", "⊃⃒"), q("NotSupersetEqual", "⊉"), q("NotTilde", "≁"), q("NotTildeEqual", "≄"), q("NotTildeFullEqual", "≇"), q("NotTildeTilde", "≉"), q("NotVerticalBar", "∤"), q("nparallel", "∦"), q("npar", "∦"), q("nparsl", "⫽⃥"), q("npart", "∂̸"), q("npolint", "⨔"), q("npr", "⊀"), q("nprcue", "⋠"), q("nprec", "⊀"), q("npreceq", "⪯̸"), q("npre", "⪯̸"), q("nrarrc", "⤳̸"), q("nrarr", "↛"), q("nrArr", "⇏"), q("nrarrw", "↝̸"), q("nrightarrow", "↛"), q("nRightarrow", "⇏"), q("nrtri", "⋫"), q("nrtrie", "⋭"), q("nsc", "⊁"), q("nsccue", "⋡"), q("nsce", "⪰̸"), q("Nscr", "𝒩"), q("nscr", "𝓃"), q("nshortmid", "∤"), q("nshortparallel", "∦"), q("nsim", "≁"), q("nsime", "≄"), q("nsimeq", "≄"), q("nsmid", "∤"), q("nspar", "∦"), q("nsqsube", "⋢"), q("nsqsupe", "⋣"), q("nsub", "⊄"), q("nsubE", "⫅̸"), q("nsube", "⊈"), q("nsubset", "⊂⃒"), q("nsubseteq", "⊈"), q("nsubseteqq", "⫅̸"), q("nsucc", "⊁"), q("nsucceq", "⪰̸"), q("nsup", "⊅"), q("nsupE", "⫆̸"), q("nsupe", "⊉"), q("nsupset", "⊃⃒"), q("nsupseteq", "⊉"), q("nsupseteqq", "⫆̸"), q("ntgl", "≹"), q("Ntilde", "Ñ"), q("ntilde", "ñ"), q("ntlg", "≸"), q("ntriangleleft", "⋪"), q("ntrianglelefteq", "⋬"), q("ntriangleright", "⋫"), q("ntrianglerighteq", "⋭"), q("Nu", "Ν"), q("nu", "ν"), q("num", "#"), q("numero", "№"), q("numsp", " "), q("nvap", "≍⃒"), q("nvdash", "⊬"), q("nvDash", "⊭"), q("nVdash", "⊮"), q("nVDash", "⊯"), q("nvge", "≥⃒"), q("nvgt", ">⃒"), q("nvHarr", "⤄"), q("nvinfin", "⧞"), q("nvlArr", "⤂"), q("nvle", "≤⃒"), q("nvlt", "<⃒"), q("nvltrie", "⊴⃒"), q("nvrArr", "⤃"), q("nvrtrie", "⊵⃒"), q("nvsim", "∼⃒"), q("nwarhk", "⤣"), q("nwarr", "↖"), q("nwArr", "⇖"), q("nwarrow", "↖"), q("nwnear", "⤧"), q("Oacute", "Ó"), q("oacute", "ó"), q("oast", "⊛"), q("Ocirc", "Ô"), q("ocirc", "ô"), q("ocir", "⊚"), q("Ocy", "О"), q("ocy", "о"), q("odash", "⊝"), q("Odblac", "Ő"), q("odblac", "ő"), q("odiv", "⨸"), q("odot", "⊙"), q("odsold", "⦼"), q("OElig", "Œ"), q("oelig", "œ"), q("ofcir", "⦿"), q("Ofr", "𝔒"), q("ofr", "𝔬"), q("ogon", "˛"), q("Ograve", "Ò"), q("ograve", "ò"), q("ogt", "⧁"), q("ohbar", "⦵"), q("ohm", "Ω"), q("oint", "∮"), q("olarr", "↺"), q("olcir", "⦾"), q("olcross", "⦻"), q("oline", "‾"), q("olt", "⧀"), q("Omacr", "Ō"), q("omacr", "ō"), q("Omega", "Ω"), q("omega", "ω"), q("Omicron", "Ο"), q("omicron", "ο"), q("omid", "⦶"), q("ominus", "⊖"), q("Oopf", "𝕆"), q("oopf", "𝕠"), q("opar", "⦷"), q("OpenCurlyDoubleQuote", "“"), q("OpenCurlyQuote", "‘"), q("operp", "⦹"), q("oplus", "⊕"), q("orarr", "↻"), q("Or", "⩔"), q("or", "∨"), q("ord", "⩝"), q("order", "ℴ"), q("orderof", "ℴ"), q("ordf", "ª"), q("ordm", "º"), q("origof", "⊶"), q("oror", "⩖"), q("orslope", "⩗"), q("orv", "⩛"), q("oS", "Ⓢ"), q("Oscr", "𝒪"), q("oscr", "ℴ"), q("Oslash", "Ø"), q("oslash", "ø"), q("osol", "⊘"), q("Otilde", "Õ"), q("otilde", "õ"), q("otimesas", "⨶"), q("Otimes", "⨷"), q("otimes", "⊗"), q("Ouml", "Ö"), q("ouml", "ö"), q("ovbar", "⌽"), q("OverBar", "‾"), q("OverBrace", "⏞"), q("OverBracket", "⎴"), q("OverParenthesis", "⏜"), q("para", "¶"), q("parallel", "∥"), q("par", "∥"), q("parsim", "⫳"), q("parsl", "⫽"), q("part", "∂"), q("PartialD", "∂"), q("Pcy", "П"), q("pcy", "п"), q("percnt", "%"), q("period", "."), q("permil", "‰"), q("perp", "⊥"), q("pertenk", "‱"), q("Pfr", "𝔓"), q("pfr", "𝔭"), q("Phi", "Φ"), q("phi", "φ"), q("phiv", "ϕ"), q("phmmat", "ℳ"), q("phone", "☎"), q("Pi", "Π"), q("pi", "π"), q("pitchfork", "⋔"), q("piv", "ϖ"), q("planck", "ℏ"), q("planckh", "ℎ"), q("plankv", "ℏ"), q("plusacir", "⨣"), q("plusb", "⊞"), q("pluscir", "⨢"), q("plus", "+"), q("plusdo", "∔"), q("plusdu", "⨥"), q("pluse", "⩲"), q("PlusMinus", "±"), q("plusmn", "±"), q("plussim", "⨦"), q("plustwo", "⨧"), q("pm", "±"), q("Poincareplane", "ℌ"), q("pointint", "⨕"), q("popf", "𝕡"), q("Popf", "ℙ"), q("pound", "£"), q("prap", "⪷"), q("Pr", "⪻"), q("pr", "≺"), q("prcue", "≼"), q("precapprox", "⪷"), q("prec", "≺"), q("preccurlyeq", "≼"), q("Precedes", "≺"), q("PrecedesEqual", "⪯"), q("PrecedesSlantEqual", "≼"), q("PrecedesTilde", "≾"), q("preceq", "⪯"), q("precnapprox", "⪹"), q("precneqq", "⪵"), q("precnsim", "⋨"), q("pre", "⪯"), q("prE", "⪳"), q("precsim", "≾"), q("prime", "′"), q("Prime", "″"), q("primes", "ℙ"), q("prnap", "⪹"), q("prnE", "⪵"), q("prnsim", "⋨"), q("prod", "∏"), q("Product", "∏"), q("profalar", "⌮"), q("profline", "⌒"), q("profsurf", "⌓"), q("prop", "∝"), q("Proportional", "∝"), q("Proportion", "∷"), q("propto", "∝"), q("prsim", "≾"), q("prurel", "⊰"), q("Pscr", "𝒫"), q("pscr", "𝓅"), q("Psi", "Ψ"), q("psi", "ψ"), q("puncsp", " "), q("Qfr", "𝔔"), q("qfr", "𝔮"), q("qint", "⨌"), q("qopf", "𝕢"), q("Qopf", "ℚ"), q("qprime", "⁗"), q("Qscr", "𝒬"), q("qscr", "𝓆"), q("quaternions", "ℍ"), q("quatint", "⨖"), q("quest", "?"), q("questeq", "≟"), q("quot", '"'), q("QUOT", '"'), q("rAarr", "⇛"), q("race", "∽̱"), q("Racute", "Ŕ"), q("racute", "ŕ"), q("radic", "√"), q("raemptyv", "⦳"), q("rang", "⟩"), q("Rang", "⟫"), q("rangd", "⦒"), q("range", "⦥"), q("rangle", "⟩"), q("raquo", "»"), q("rarrap", "⥵"), q("rarrb", "⇥"), q("rarrbfs", "⤠"), q("rarrc", "⤳"), q("rarr", "→"), q("Rarr", "↠"), q("rArr", "⇒"), q("rarrfs", "⤞"), q("rarrhk", "↪"), q("rarrlp", "↬"), q("rarrpl", "⥅"), q("rarrsim", "⥴"), q("Rarrtl", "⤖"), q("rarrtl", "↣"), q("rarrw", "↝"), q("ratail", "⤚"), q("rAtail", "⤜"), q("ratio", "∶"), q("rationals", "ℚ"), q("rbarr", "⤍"), q("rBarr", "⤏"), q("RBarr", "⤐"), q("rbbrk", "❳"), q("rbrace", "}"), q("rbrack", "]"), q("rbrke", "⦌"), q("rbrksld", "⦎"), q("rbrkslu", "⦐"), q("Rcaron", "Ř"), q("rcaron", "ř"), q("Rcedil", "Ŗ"), q("rcedil", "ŗ"), q("rceil", "⌉"), q("rcub", "}"), q("Rcy", "Р"), q("rcy", "р"), q("rdca", "⤷"), q("rdldhar", "⥩"), q("rdquo", "”"), q("rdquor", "”"), q("rdsh", "↳"), q("real", "ℜ"), q("realine", "ℛ"), q("realpart", "ℜ"), q("reals", "ℝ"), q("Re", "ℜ"), q("rect", "▭"), q("reg", "®"), q("REG", "®"), q("ReverseElement", "∋"), q("ReverseEquilibrium", "⇋"), q("ReverseUpEquilibrium", "⥯"), q("rfisht", "⥽"), q("rfloor", "⌋"), q("rfr", "𝔯"), q("Rfr", "ℜ"), q("rHar", "⥤"), q("rhard", "⇁"), q("rharu", "⇀"), q("rharul", "⥬"), q("Rho", "Ρ"), q("rho", "ρ"), q("rhov", "ϱ"), q("RightAngleBracket", "⟩"), q("RightArrowBar", "⇥"), q("rightarrow", "→"), q("RightArrow", "→"), q("Rightarrow", "⇒"), q("RightArrowLeftArrow", "⇄"), q("rightarrowtail", "↣"), q("RightCeiling", "⌉"), q("RightDoubleBracket", "⟧"), q("RightDownTeeVector", "⥝"), q("RightDownVectorBar", "⥕"), q("RightDownVector", "⇂"), q("RightFloor", "⌋"), q("rightharpoondown", "⇁"), q("rightharpoonup", "⇀"), q("rightleftarrows", "⇄"), q("rightleftharpoons", "⇌"), q("rightrightarrows", "⇉"), q("rightsquigarrow", "↝"), q("RightTeeArrow", "↦"), q("RightTee", "⊢"), q("RightTeeVector", "⥛"), q("rightthreetimes", "⋌"), q("RightTriangleBar", "⧐"), q("RightTriangle", "⊳"), q("RightTriangleEqual", "⊵"), q("RightUpDownVector", "⥏"), q("RightUpTeeVector", "⥜"), q("RightUpVectorBar", "⥔"), q("RightUpVector", "↾"), q("RightVectorBar", "⥓"), q("RightVector", "⇀"), q("ring", "˚"), q("risingdotseq", "≓"), q("rlarr", "⇄"), q("rlhar", "⇌"), q("rlm", "‏"), q("rmoustache", "⎱"), q("rmoust", "⎱"), q("rnmid", "⫮"), q("roang", "⟭"), q("roarr", "⇾"), q("robrk", "⟧"), q("ropar", "⦆"), q("ropf", "𝕣"), q("Ropf", "ℝ"), q("roplus", "⨮"), q("rotimes", "⨵"), q("RoundImplies", "⥰"), q("rpar", ")"), q("rpargt", "⦔"), q("rppolint", "⨒"), q("rrarr", "⇉"), q("Rrightarrow", "⇛"), q("rsaquo", "›"), q("rscr", "𝓇"), q("Rscr", "ℛ"), q("rsh", "↱"), q("Rsh", "↱"), q("rsqb", "]"), q("rsquo", "’"), q("rsquor", "’"), q("rthree", "⋌"), q("rtimes", "⋊"), q("rtri", "▹"), q("rtrie", "⊵"), q("rtrif", "▸"), q("rtriltri", "⧎"), q("RuleDelayed", "⧴"), q("ruluhar", "⥨"), q("rx", "℞"), q("Sacute", "Ś"), q("sacute", "ś"), q("sbquo", "‚"), q("scap", "⪸"), q("Scaron", "Š"), q("scaron", "š"), q("Sc", "⪼"), q("sc", "≻"), q("sccue", "≽"), q("sce", "⪰"), q("scE", "⪴"), q("Scedil", "Ş"), q("scedil", "ş"), q("Scirc", "Ŝ"), q("scirc", "ŝ"), q("scnap", "⪺"), q("scnE", "⪶"), q("scnsim", "⋩"), q("scpolint", "⨓"), q("scsim", "≿"), q("Scy", "С"), q("scy", "с"), q("sdotb", "⊡"), q("sdot", "⋅"), q("sdote", "⩦"), q("searhk", "⤥"), q("searr", "↘"), q("seArr", "⇘"), q("searrow", "↘"), q("sect", "§"), q("semi", ";"), q("seswar", "⤩"), q("setminus", "∖"), q("setmn", "∖"), q("sext", "✶"), q("Sfr", "𝔖"), q("sfr", "𝔰"), q("sfrown", "⌢"), q("sharp", "♯"), q("SHCHcy", "Щ"), q("shchcy", "щ"), q("SHcy", "Ш"), q("shcy", "ш"), q("ShortDownArrow", "↓"), q("ShortLeftArrow", "←"), q("shortmid", "∣"), q("shortparallel", "∥"), q("ShortRightArrow", "→"), q("ShortUpArrow", "↑"), q("shy", "­"), q("Sigma", "Σ"), q("sigma", "σ"), q("sigmaf", "ς"), q("sigmav", "ς"), q("sim", "∼"), q("simdot", "⩪"), q("sime", "≃"), q("simeq", "≃"), q("simg", "⪞"), q("simgE", "⪠"), q("siml", "⪝"), q("simlE", "⪟"), q("simne", "≆"), q("simplus", "⨤"), q("simrarr", "⥲"), q("slarr", "←"), q("SmallCircle", "∘"), q("smallsetminus", "∖"), q("smashp", "⨳"), q("smeparsl", "⧤"), q("smid", "∣"), q("smile", "⌣"), q("smt", "⪪"), q("smte", "⪬"), q("smtes", "⪬︀"), q("SOFTcy", "Ь"), q("softcy", "ь"), q("solbar", "⌿"), q("solb", "⧄"), q("sol", "/"), q("Sopf", "𝕊"), q("sopf", "𝕤"), q("spades", "♠"), q("spadesuit", "♠"), q("spar", "∥"), q("sqcap", "⊓"), q("sqcaps", "⊓︀"), q("sqcup", "⊔"), q("sqcups", "⊔︀"), q("Sqrt", "√"), q("sqsub", "⊏"), q("sqsube", "⊑"), q("sqsubset", "⊏"), q("sqsubseteq", "⊑"), q("sqsup", "⊐"), q("sqsupe", "⊒"), q("sqsupset", "⊐"), q("sqsupseteq", "⊒"), q("square", "□"), q("Square", "□"), q("SquareIntersection", "⊓"), q("SquareSubset", "⊏"), q("SquareSubsetEqual", "⊑"), q("SquareSuperset", "⊐"), q("SquareSupersetEqual", "⊒"), q("SquareUnion", "⊔"), q("squarf", "▪"), q("squ", "□"), q("squf", "▪"), q("srarr", "→"), q("Sscr", "𝒮"), q("sscr", "𝓈"), q("ssetmn", "∖"), q("ssmile", "⌣"), q("sstarf", "⋆"), q("Star", "⋆"), q("star", "☆"), q("starf", "★"), q("straightepsilon", "ϵ"), q("straightphi", "ϕ"), q("strns", "¯"), q("sub", "⊂"), q("Sub", "⋐"), q("subdot", "⪽"), q("subE", "⫅"), q("sube", "⊆"), q("subedot", "⫃"), q("submult", "⫁"), q("subnE", "⫋"), q("subne", "⊊"), q("subplus", "⪿"), q("subrarr", "⥹"), q("subset", "⊂"), q("Subset", "⋐"), q("subseteq", "⊆"), q("subseteqq", "⫅"), q("SubsetEqual", "⊆"), q("subsetneq", "⊊"), q("subsetneqq", "⫋"), q("subsim", "⫇"), q("subsub", "⫕"), q("subsup", "⫓"), q("succapprox", "⪸"), q("succ", "≻"), q("succcurlyeq", "≽"), q("Succeeds", "≻"), q("SucceedsEqual", "⪰"), q("SucceedsSlantEqual", "≽"), q("SucceedsTilde", "≿"), q("succeq", "⪰"), q("succnapprox", "⪺"), q("succneqq", "⪶"), q("succnsim", "⋩"), q("succsim", "≿"), q("SuchThat", "∋"), q("sum", "∑"), q("Sum", "∑"), q("sung", "♪"), q("sup1", "¹"), q("sup2", "²"), q("sup3", "³"), q("sup", "⊃"), q("Sup", "⋑"), q("supdot", "⪾"), q("supdsub", "⫘"), q("supE", "⫆"), q("supe", "⊇"), q("supedot", "⫄"), q("Superset", "⊃"), q("SupersetEqual", "⊇"), q("suphsol", "⟉"), q("suphsub", "⫗"), q("suplarr", "⥻"), q("supmult", "⫂"), q("supnE", "⫌"), q("supne", "⊋"), q("supplus", "⫀"), q("supset", "⊃"), q("Supset", "⋑"), q("supseteq", "⊇"), q("supseteqq", "⫆"), q("supsetneq", "⊋"), q("supsetneqq", "⫌"), q("supsim", "⫈"), q("supsub", "⫔"), q("supsup", "⫖"), q("swarhk", "⤦"), q("swarr", "↙"), q("swArr", "⇙"), q("swarrow", "↙"), q("swnwar", "⤪"), q("szlig", "ß"), q("Tab", "\t"), q("target", "⌖"), q("Tau", "Τ"), q("tau", "τ"), q("tbrk", "⎴"), q("Tcaron", "Ť"), q("tcaron", "ť"), q("Tcedil", "Ţ"), q("tcedil", "ţ"), q("Tcy", "Т"), q("tcy", "т"), q("tdot", "⃛"), q("telrec", "⌕"), q("Tfr", "𝔗"), q("tfr", "𝔱"), q("there4", "∴"), q("therefore", "∴"), q("Therefore", "∴"), q("Theta", "Θ"), q("theta", "θ"), q("thetasym", "ϑ"), q("thetav", "ϑ"), q("thickapprox", "≈"), q("thicksim", "∼"), q("ThickSpace", "  "), q("ThinSpace", " "), q("thinsp", " "), q("thkap", "≈"), q("thksim", "∼"), q("THORN", "Þ"), q("thorn", "þ"), q("tilde", "˜"), q("Tilde", "∼"), q("TildeEqual", "≃"), q("TildeFullEqual", "≅"), q("TildeTilde", "≈"), q("timesbar", "⨱"), q("timesb", "⊠"), q("times", "×"), q("timesd", "⨰"), q("tint", "∭"), q("toea", "⤨"), q("topbot", "⌶"), q("topcir", "⫱"), q("top", "⊤"), q("Topf", "𝕋"), q("topf", "𝕥"), q("topfork", "⫚"), q("tosa", "⤩"), q("tprime", "‴"), q("trade", "™"), q("TRADE", "™"), q("triangle", "▵"), q("triangledown", "▿"), q("triangleleft", "◃"), q("trianglelefteq", "⊴"), q("triangleq", "≜"), q("triangleright", "▹"), q("trianglerighteq", "⊵"), q("tridot", "◬"), q("trie", "≜"), q("triminus", "⨺"), q("TripleDot", "⃛"), q("triplus", "⨹"), q("trisb", "⧍"), q("tritime", "⨻"), q("trpezium", "⏢"), q("Tscr", "𝒯"), q("tscr", "𝓉"), q("TScy", "Ц"), q("tscy", "ц"), q("TSHcy", "Ћ"), q("tshcy", "ћ"), q("Tstrok", "Ŧ"), q("tstrok", "ŧ"), q("twixt", "≬"), q("twoheadleftarrow", "↞"), q("twoheadrightarrow", "↠"), q("Uacute", "Ú"), q("uacute", "ú"), q("uarr", "↑"), q("Uarr", "↟"), q("uArr", "⇑"), q("Uarrocir", "⥉"), q("Ubrcy", "Ў"), q("ubrcy", "ў"), q("Ubreve", "Ŭ"), q("ubreve", "ŭ"), q("Ucirc", "Û"), q("ucirc", "û"), q("Ucy", "У"), q("ucy", "у"), q("udarr", "⇅"), q("Udblac", "Ű"), q("udblac", "ű"), q("udhar", "⥮"), q("ufisht", "⥾"), q("Ufr", "𝔘"), q("ufr", "𝔲"), q("Ugrave", "Ù"), q("ugrave", "ù"), q("uHar", "⥣"), q("uharl", "↿"), q("uharr", "↾"), q("uhblk", "▀"), q("ulcorn", "⌜"), q("ulcorner", "⌜"), q("ulcrop", "⌏"), q("ultri", "◸"), q("Umacr", "Ū"), q("umacr", "ū"), q("uml", "¨"), q("UnderBar", "_"), q("UnderBrace", "⏟"), q("UnderBracket", "⎵"), q("UnderParenthesis", "⏝"), q("Union", "⋃"), q("UnionPlus", "⊎"), q("Uogon", "Ų"), q("uogon", "ų"), q("Uopf", "𝕌"), q("uopf", "𝕦"), q("UpArrowBar", "⤒"), q("uparrow", "↑"), q("UpArrow", "↑"), q("Uparrow", "⇑"), q("UpArrowDownArrow", "⇅"), q("updownarrow", "↕"), q("UpDownArrow", "↕"), q("Updownarrow", "⇕"), q("UpEquilibrium", "⥮"), q("upharpoonleft", "↿"), q("upharpoonright", "↾"), q("uplus", "⊎"), q("UpperLeftArrow", "↖"), q("UpperRightArrow", "↗"), q("upsi", "υ"), q("Upsi", "ϒ"), q("upsih", "ϒ"), q("Upsilon", "Υ"), q("upsilon", "υ"), q("UpTeeArrow", "↥"), q("UpTee", "⊥"), q("upuparrows", "⇈"), q("urcorn", "⌝"), q("urcorner", "⌝"), q("urcrop", "⌎"), q("Uring", "Ů"), q("uring", "ů"), q("urtri", "◹"), q("Uscr", "𝒰"), q("uscr", "𝓊"), q("utdot", "⋰"), q("Utilde", "Ũ"), q("utilde", "ũ"), q("utri", "▵"), q("utrif", "▴"), q("uuarr", "⇈"), q("Uuml", "Ü"), q("uuml", "ü"), q("uwangle", "⦧"), q("vangrt", "⦜"), q("varepsilon", "ϵ"), q("varkappa", "ϰ"), q("varnothing", "∅"), q("varphi", "ϕ"), q("varpi", "ϖ"), q("varpropto", "∝"), q("varr", "↕"), q("vArr", "⇕"), q("varrho", "ϱ"), q("varsigma", "ς"), q("varsubsetneq", "⊊︀"), q("varsubsetneqq", "⫋︀"), q("varsupsetneq", "⊋︀"), q("varsupsetneqq", "⫌︀"), q("vartheta", "ϑ"), q("vartriangleleft", "⊲"), q("vartriangleright", "⊳"), q("vBar", "⫨"), q("Vbar", "⫫"), q("vBarv", "⫩"), q("Vcy", "В"), q("vcy", "в"), q("vdash", "⊢"), q("vDash", "⊨"), q("Vdash", "⊩"), q("VDash", "⊫"), q("Vdashl", "⫦"), q("veebar", "⊻"), q("vee", "∨"), q("Vee", "⋁"), q("veeeq", "≚"), q("vellip", "⋮"), q("verbar", "|"), q("Verbar", "‖"), q("vert", "|"), q("Vert", "‖"), q("VerticalBar", "∣"), q("VerticalLine", "|"), q("VerticalSeparator", "❘"), q("VerticalTilde", "≀"), q("VeryThinSpace", " "), q("Vfr", "𝔙"), q("vfr", "𝔳"), q("vltri", "⊲"), q("vnsub", "⊂⃒"), q("vnsup", "⊃⃒"), q("Vopf", "𝕍"), q("vopf", "𝕧"), q("vprop", "∝"), q("vrtri", "⊳"), q("Vscr", "𝒱"), q("vscr", "𝓋"), q("vsubnE", "⫋︀"), q("vsubne", "⊊︀"), q("vsupnE", "⫌︀"), q("vsupne", "⊋︀"), q("Vvdash", "⊪"), q("vzigzag", "⦚"), q("Wcirc", "Ŵ"), q("wcirc", "ŵ"), q("wedbar", "⩟"), q("wedge", "∧"), q("Wedge", "⋀"), q("wedgeq", "≙"), q("weierp", "℘"), q("Wfr", "𝔚"), q("wfr", "𝔴"), q("Wopf", "𝕎"), q("wopf", "𝕨"), q("wp", "℘"), q("wr", "≀"), q("wreath", "≀"), q("Wscr", "𝒲"), q("wscr", "𝓌"), q("xcap", "⋂"), q("xcirc", "◯"), q("xcup", "⋃"), q("xdtri", "▽"), q("Xfr", "𝔛"), q("xfr", "𝔵"), q("xharr", "⟷"), q("xhArr", "⟺"), q("Xi", "Ξ"), q("xi", "ξ"), q("xlarr", "⟵"), q("xlArr", "⟸"), q("xmap", "⟼"), q("xnis", "⋻"), q("xodot", "⨀"), q("Xopf", "𝕏"), q("xopf", "𝕩"), q("xoplus", "⨁"), q("xotime", "⨂"), q("xrarr", "⟶"), q("xrArr", "⟹"), q("Xscr", "𝒳"), q("xscr", "𝓍"), q("xsqcup", "⨆"), q("xuplus", "⨄"), q("xutri", "△"), q("xvee", "⋁"), q("xwedge", "⋀"), q("Yacute", "Ý"), q("yacute", "ý"), q("YAcy", "Я"), q("yacy", "я"), q("Ycirc", "Ŷ"), q("ycirc", "ŷ"), q("Ycy", "Ы"), q("ycy", "ы"), q("yen", "¥"), q("Yfr", "𝔜"), q("yfr", "𝔶"), q("YIcy", "Ї"), q("yicy", "ї"), q("Yopf", "𝕐"), q("yopf", "𝕪"), q("Yscr", "𝒴"), q("yscr", "𝓎"), q("YUcy", "Ю"), q("yucy", "ю"), q("yuml", "ÿ"), q("Yuml", "Ÿ"), q("Zacute", "Ź"), q("zacute", "ź"), q("Zcaron", "Ž"), q("zcaron", "ž"), q("Zcy", "З"), q("zcy", "з"), q("Zdot", "Ż"), q("zdot", "ż"), q("zeetrf", "ℨ"), q("ZeroWidthSpace", "​"), q("Zeta", "Ζ"), q("zeta", "ζ"), q("zfr", "𝔷"), q("Zfr", "ℨ"), q("ZHcy", "Ж"), q("zhcy", "ж"), q("zigrarr", "⇝"), q("zopf", "𝕫"), q("Zopf", "ℤ"), q("Zscr", "𝒵"), q("zscr", "𝓏"), q("zwj", "‍"), q("zwnj", "‌")])), kc = f(tc, function(r) {
                return f(Uu, "&" + r + ";", f(qu, r, xc))
            }, Sa(Ta(Rt))), Lc = e(function(r, n, t) {
                return n(r(t))
            }), Ac = M, Nc = function(r) {
                return f(Ac, r, "")
            }, Tc = function(r) {
                return E(0 > r || r > 1114111 ? "�" : r > 65535 ? String.fromCharCode(Math.floor((r -= 65536) / 1024) + 55296, r % 1024 + 56320) : String.fromCharCode(r))
            }, Cc = O, Dc = e(function(r, n, t) {
                r: for (; ; ) {
                    if (!n.b)
                        return dt(t);
                    var e = n.a
                      , u = n.b;
                    switch (e) {
                    case "0":
                        r = a = r - 1,
                        n = c = u,
                        t = i = t;
                        continue r;
                    case "1":
                        var a = r - 1
                          , c = u
                          , i = t + f(Cc, 16, r);
                        r = a,
                        n = c,
                        t = i;
                        continue r;
                    case "2":
                        a = r - 1,
                        c = u,
                        i = t + 2 * f(Cc, 16, r),
                        r = a,
                        n = c,
                        t = i;
                        continue r;
                    case "3":
                        a = r - 1,
                        c = u,
                        i = t + 3 * f(Cc, 16, r),
                        r = a,
                        n = c,
                        t = i;
                        continue r;
                    case "4":
                        a = r - 1,
                        c = u,
                        i = t + 4 * f(Cc, 16, r),
                        r = a,
                        n = c,
                        t = i;
                        continue r;
                    case "5":
                        a = r - 1,
                        c = u,
                        i = t + 5 * f(Cc, 16, r),
                        r = a,
                        n = c,
                        t = i;
                        continue r;
                    case "6":
                        a = r - 1,
                        c = u,
                        i = t + 6 * f(Cc, 16, r),
                        r = a,
                        n = c,
                        t = i;
                        continue r;
                    case "7":
                        a = r - 1,
                        c = u,
                        i = t + 7 * f(Cc, 16, r),
                        r = a,
                        n = c,
                        t = i;
                        continue r;
                    case "8":
                        a = r - 1,
                        c = u,
                        i = t + 8 * f(Cc, 16, r),
                        r = a,
                        n = c,
                        t = i;
                        continue r;
                    case "9":
                        a = r - 1,
                        c = u,
                        i = t + 9 * f(Cc, 16, r),
                        r = a,
                        n = c,
                        t = i;
                        continue r;
                    case "a":
                        a = r - 1,
                        c = u,
                        i = t + 10 * f(Cc, 16, r),
                        r = a,
                        n = c,
                        t = i;
                        continue r;
                    case "b":
                        a = r - 1,
                        c = u,
                        i = t + 11 * f(Cc, 16, r),
                        r = a,
                        n = c,
                        t = i;
                        continue r;
                    case "c":
                        a = r - 1,
                        c = u,
                        i = t + 12 * f(Cc, 16, r),
                        r = a,
                        n = c,
                        t = i;
                        continue r;
                    case "d":
                        a = r - 1,
                        c = u,
                        i = t + 13 * f(Cc, 16, r),
                        r = a,
                        n = c,
                        t = i;
                        continue r;
                    case "e":
                        a = r - 1,
                        c = u,
                        i = t + 14 * f(Cc, 16, r),
                        r = a,
                        n = c,
                        t = i;
                        continue r;
                    case "f":
                        a = r - 1,
                        c = u,
                        i = t + 15 * f(Cc, 16, r),
                        r = a,
                        n = c,
                        t = i;
                        continue r;
                    default:
                        return ft(Nc(e) + " is not a valid hexadecimal character.")
                    }
                }
            }), Sc = t(function(r, n) {
                return n.$ ? ft(n.a) : dt(r(n.a))
            }), Pc = t(function(r, n) {
                return n.$ ? ft(r(n.a)) : dt(n.a)
            }), Rc = J, Bc = function(r) {
                return s(Rc, ct, A, r)
            }, Uc = function(r) {
                if (me(r))
                    return ft("Empty strings are not valid hexadecimal strings.");
                var n = function() {
                    if (f(qe, "-", r)) {
                        var n = f(Uu, A, function(r) {
                            return r.b ? ht(r.b) : gt
                        }(Bc(r)));
                        return f(Sc, $a, s(Dc, Lt(n) - 1, n, 0))
                    }
                    return s(Dc, pe(r) - 1, Bc(r), 0)
                }();
                return f(Pc, function(n) {
                    return f(yt, " ", C(['"' + r + '"', "is not a valid hexadecimal string because", n]))
                }, n)
            }, Ic = function(r) {
                var n = Dt(r);
                return n >= 48 && 57 >= n || n >= 65 && 70 >= n || n >= 97 && 102 >= n
            }, jc = f(sa, function(r) {
                var n = Uc(za(r));
                return n.$ ? Ia(n.a) : Oa(n.a)
            }, Sa(Ta(Ic))), Oc = {
                $: 1
            }, zc = Kn, _c = Yn, Vc = t(function(r, n) {
                return {
                    bv: n.bv + (r - n.b),
                    d: n.d,
                    e: n.e,
                    b: r,
                    dL: n.dL,
                    cq: n.cq
                }
            }), Gc = Zn, Hc = Jn, Mc = t(function(r, n) {
                if (s(Hc, 101, r, n) || s(Hc, 69, r, n)) {
                    var t = r + 1
                      , e = s(Hc, 43, t, n) || s(Hc, 45, t, n) ? t + 1 : t
                      , u = f(Gc, e, n);
                    return p(e, u) ? -u : u
                }
                return r
            }), Fc = t(function(r, n) {
                return f(Mc, s(Hc, 46, r, n) ? f(Gc, r + 1, n) : r, n)
            }), Jc = a(function(r, n, t, e, u) {
                var a = e.a
                  , c = e.b;
                if (1 === n.$)
                    return f(ia, !0, f(ga, u, n.a));
                var i = n.a;
                return p(t, a) ? f(ia, 0 > m(u.b, t), f(ga, u, r)) : s(oa, !0, i(c), f(Vc, a, u))
            }), Zc = function(r) {
                if (0 === r.length || /[\sxbo]/.test(r))
                    return gt;
                var n = +r;
                return n == n ? ht(n) : gt
            }, Kc = c(function(r, n, t, e, u, a) {
                var c = u.a
                  , i = f(Fc, c, a.cq);
                if (0 > i)
                    return f(ia, !0, l(Ha, a.dL, a.bv - (i + a.b), r, a.d));
                if (p(a.b, i))
                    return f(ia, !1, f(ga, a, n));
                if (p(c, i))
                    return b(Jc, r, t, a.b, u, a);
                if (1 === e.$)
                    return f(ia, !0, f(ga, a, r));
                var o = e.a
                  , d = Zc(s(he, a.b, i, a.cq));
                return 1 === d.$ ? f(ia, !0, f(ga, a, r)) : s(oa, !0, o(d.a), f(Vc, i, a))
            }), Yc = f(t(function(r, n) {
                return t = {
                    br: ft(n),
                    bG: r,
                    bH: ft(n),
                    bM: ft(n),
                    bQ: dt(de),
                    dc: n,
                    b1: ft(n)
                },
                function(r) {
                    if (s(Hc, 48, r.b, r.cq)) {
                        var n = r.b + 1
                          , e = n + 1;
                        return s(Hc, 120, n, r.cq) ? b(Jc, t.dc, t.bM, e, f(_c, e, r.cq), r) : s(Hc, 111, n, r.cq) ? b(Jc, t.dc, t.b1, e, s(zc, 8, e, r.cq), r) : s(Hc, 98, n, r.cq) ? b(Jc, t.dc, t.br, e, s(zc, 2, e, r.cq), r) : d(Kc, t.dc, t.bG, t.bQ, t.bH, q(n, 0), r)
                    }
                    return d(Kc, t.dc, t.bG, t.bQ, t.bH, s(zc, 10, r.b, r.cq), r)
                }
                ;
                var t
            }), Oc, Oc), Xc = (Re = $c(C([f(Ya, f(Na, Oa(de), qa(function(r) {
                return "x" === r || "X" === r
            })), jc), f(Ya, f(Na, Oa(de), xa(Yt("0"))), Yc)])),
            f(Ya, f(Na, Oa(de), qa(Yt("#"))), f(tc, f(Lc, Tc, Nc), Re))), Qc = f(Ya, f(Na, Oa(de), qa(Yt("&"))), $c(C([f(Na, ba(kc), yc), f(Na, ba(Xc), yc), Oa("&")]))), Wc = function(r) {
                return f(Ya, f(Na, Oa(de), qa(Yt(r))), f(Na, f(tc, yt(""), wc($c(C([Sa(Ta(function(n) {
                    return !p(n, r) && "&" !== n
                })), Qc])))), qa(Yt(r))))
            }, ri = function(r) {
                return !r.b
            }, ni = t(function(r, n) {
                return f(pc, A, function(t) {
                    return $c(C([f(tc, function(r) {
                        return fc(f(ct, r, t))
                    }, n), ri(t) ? Ia("expecting at least one " + r) : Oa(oc(It(t)))]))
                })
            }), ti = f(tc, yt(""), f(ni, "attribute value", $c(C([Sa(Ta(function(r) {
                return !Pa(r) && '"' !== r && "'" !== r && "=" !== r && "<" !== r && ">" !== r && "`" !== r && "&" !== r
            })), Qc])))), ei = $c(C([f(Ya, f(Na, f(Na, Oa(de), qa(Yt("="))), xa(Pa)), $c(C([ti, Wc('"'), Wc("'")]))), Oa("")])), ui = f(Ya, f(Ya, Oa(Xe), f(Na, qc, xa(Pa))), f(Na, ei, xa(Pa))), ai = wc(ui), ci = f(tc, za, Sa(f(Na, qa(Ut), xa(function(r) {
                return Ut(r) || "-" === r
            })))), ii = function(r) {
                return {
                    $: 0,
                    a: r
                }
            }, oi = f(tc, f(Lc, yt(""), ii), f(ni, "text element", $c(C([Sa(Ta(function(r) {
                return "<" !== r && "&" !== r
            })), Qc]))));
            function fi() {
                return $c(C([oi, ec, si()]))
            }
            function si() {
                return f(sa, function(r) {
                    var n = r.a
                      , t = r.b;
                    return ic(n) ? f(Na, f(Na, Oa(s(ca, n, t, A)), $c(C([qa(Yt("/")), Oa(0)]))), qa(Yt(">"))) : f(Ya, f(Na, Oa(f(ca, n, t)), qa(Yt(">"))), f(Na, wc(ba(fi())), _a(n)))
                }, f(Ya, f(Ya, f(Na, Oa(Xe), qa(Yt("<"))), f(Na, ci, xa(Pa))), ai))
            }
            var li = fi();
            fi = function() {
                return li
            }
            ;
            var bi = si();
            si = function() {
                return bi
            }
            ;
            var di, vi, pi = e(function(r, n, t) {
                return {
                    bv: n,
                    dC: t,
                    dL: r
                }
            }), hi = function(r) {
                return s(pi, r.dL, r.bv, r.dC)
            }, gi = t(function(r, n) {
                r: for (; ; )
                    switch (r.$) {
                    case 0:
                        return n;
                    case 1:
                        var t = r.b;
                        r = r.a,
                        n = f(ct, t, n);
                        continue r;
                    default:
                        var e = r.b;
                        r = r.a,
                        n = f(gi, e, n);
                        continue r
                    }
            }), mi = t(function(r, n) {
                var t = r({
                    bv: 1,
                    d: A,
                    e: 1,
                    b: 0,
                    dL: 1,
                    cq: n
                });
                return t.$ ? ft(f(gi, t.b, A)) : dt(t.b)
            }), $i = t(function(r, n) {
                var t = f(mi, r, n);
                return t.$ ? ft(f(Ae, hi, t.a)) : dt(t.a)
            }), wi = f(Je, function(r) {
                return 1 === r.$ ? aa : le({
                    $: 1,
                    a: r.a
                })
            }, f(fe, function(r) {
                return me(r) ? dt(A) : f($i, f(ni, "node", li), r)
            }, f(Ze, "formatted_body", Qe))), qi = f(Je, function(r) {
                return r.$ || "org.matrix.custom.html" !== r.a ? aa : wi
            }, Zu(f(Ze, "format", Qe))), yi = e(function(r, n, t) {
                return {
                    cN: r,
                    a$: t,
                    cC: n
                }
            }), Ei = s(se, t(function(r, n) {
                return {
                    az: n,
                    aO: r
                }
            }), f(Ze, "w", Ke), f(Ze, "h", Ke)), xi = dr, ki = b(xi, u(function(r, n, t, e) {
                return {
                    az: n,
                    cw: e,
                    cx: t,
                    aO: r
                }
            }), f(Ze, "w", Ke), f(Ze, "h", Ke), Zu(f(Ze, "thumbnail_url", Qe)), Zu(f(Ze, "thumbnail_info", Ei))), Li = l(Ju, yi, f(Ze, "body", Qe), f(Ze, "url", Qe), Zu(f(Ze, "info", ki))), Ai = s(se, t(function(r, n) {
                return {
                    cN: r,
                    cC: n
                }
            }), f(Ze, "body", Qe), f(Ze, "url", Qe)), Ni = f(Je, function(r) {
                switch (r) {
                case "m.text":
                    return f(fe, na, qi);
                case "m.emote":
                    return f(fe, Xu, qi);
                case "m.notice":
                    return f(fe, ra, qi);
                case "m.image":
                    return f(fe, Wu, Li);
                case "m.file":
                    return f(fe, Qu, ua);
                case "m.audio":
                    return f(fe, Yu, ea);
                case "m.video":
                    return f(fe, ta, Ai);
                default:
                    return Mu("Unsupported msgtype: " + r)
                }
            }, f(Ze, "msgtype", Qe)), Ti = de, Ci = t(function(r, n) {
                return b(xi, r, f(Ze, "type", Qe), f(Ze, "content", n), f(Ze, "sender", Qe), f(fe, Ti, f(Ze, "origin_server_ts", Ke)))
            }), Di = Ye(C([f(Je, function(r) {
                switch (r) {
                case "m.room.message":
                    return f(Ci, u(function(r, n, t, e) {
                        return {
                            $: 0,
                            a: {
                                ad: n,
                                ax: r,
                                Y: e,
                                aJ: t
                            }
                        }
                    }), Ni);
                case "m.room.member":
                    return f(Je, function(r) {
                        return f(Ci, u(function(n, t, e, u) {
                            return f(Hu, r, {
                                ad: t,
                                ax: n,
                                Y: u,
                                aJ: e
                            })
                        }), Ku)
                    }, f(Ze, "state_key", Qe));
                default:
                    return Mu("Unsupported event type: " + r)
                }
            }, f(Ze, "type", Qe)), f(Ci, u(function(r, n, t, e) {
                return {
                    $: 2,
                    a: {
                        ad: n,
                        ax: r,
                        Y: e,
                        aJ: t
                    }
                }
            }), le(0))])), Si = function(r) {
                return {
                    $: 3,
                    b: r
                }
            }, Pi = l(Ju, e(function(r, n, t) {
                return {
                    bu: t,
                    bE: n,
                    dP: r
                }
            }), f(Ze, "start", Qe), f(Ze, "end", Qe), f(Ze, "chunk", Si(Di))), Ri = {
                $: 0
            }, Bi = t(function(r, n) {
                return f(Gu, r, {
                    cN: Ri,
                    dh: "GET",
                    dA: A,
                    dB: C(["rooms", n, "initialSync"]),
                    dI: f(Ze, "messages", Pi)
                })
            }), Ui = s(se, t(function(r, n) {
                return q(r, n)
            }), f(Ze, "state_key", Qe), f(Ze, "content", Ku)), Ii = f(Ze, "chunk", f(Je, f(Lc, Ec, le), Si(Ui))), ji = t(function(r, n) {
                return f(Gu, r, {
                    cN: Ri,
                    dh: "GET",
                    dA: A,
                    dB: C(["rooms", n, "members"]),
                    dI: Ii
                })
            }), Oi = t(function(r, n) {
                return f(Gu, r, {
                    cN: Ri,
                    dh: "GET",
                    dA: A,
                    dB: C(["directory", "room", n]),
                    dI: f(fe, de, f(Ze, "room_id", Qe))
                })
            }), zi = function(r) {
                return r
            }, _i = P, Vi = function(r) {
                return f(_i, function(r) {
                    switch (r.$) {
                    case 0:
                        return zi(r.a.Y);
                    case 1:
                        return zi(r.b.Y);
                    default:
                        return zi(r.a.Y)
                    }
                }, r)
            }, Gi = t(function(r, n) {
                return f(Te, de, f(Ne, function(n) {
                    return f(Te, function(r) {
                        return {
                            bE: n.bE,
                            C: n.C,
                            bX: r,
                            dK: n.dK,
                            F: n.F,
                            dP: n.dP
                        }
                    }, f(ji, r, n.F))
                }, f(Ne, function(n) {
                    return f(Te, function(r) {
                        return {
                            bE: r.bE,
                            C: Vi(r.bu),
                            dK: n.dK,
                            F: n.F,
                            dP: r.dP
                        }
                    }, f(Bi, r, n.F))
                }, f(Te, function(r) {
                    return {
                        dK: n,
                        F: r
                    }
                }, f(Oi, r, n)))))
            }), Hi = {
                U: "",
                ah: ""
            }, Mi = Hn, Fi = t(function(r, n) {
                return f(Gu, r, {
                    cN: f(Mi, "application/json", "{}"),
                    dh: "POST",
                    dA: A,
                    dB: C(["join", n]),
                    dI: le(0)
                })
            }), Ji = function(r) {
                return r.aA
            }, Zi = t(function(r, n) {
                return 1 === Ji(r) ? f(Fi, r, n) : Ee(0)
            }), Ki = He(A), Yi = t(function(r, n) {
                return {
                    $: 0,
                    a: r,
                    b: n
                }
            }), Xi = (di = Ti,
            Tr(function(r) {
                r(Nr(di(Date.now())))
            })), Qi = o(function(r, n, t, e, u, a, c, i, o) {
                return {
                    bw: e,
                    aP: r,
                    aT: i,
                    a1: c,
                    a6: a,
                    ck: n,
                    cm: t,
                    cr: u,
                    bl: o
                }
            }), Wi = Ye(C([f(fe, ht, er), f(fe, ht, f(Je, function(r) {
                switch (za(r)) {
                case "true":
                    return le(!0);
                case "false":
                    return le(!1);
                default:
                    return Mu("")
                }
            }, Qe))])), ro = f(Je, function(r) {
                return f(ve, " ", r) ? Mu("commentSectionId can't contain spaces") : le(r)
            }, f(Je, function(r) {
                return f(ve, "_", r) ? Mu("commentSectionId can't contain underscores") : le(r)
            }, Qe)), no = Ye(C([f(fe, ht, ur), f(fe, Zc, Qe)])), to = Ye(C([f(fe, ht, Ke), f(fe, we, Qe)])), eo = a(function(r, n, t, e, u) {
                return {
                    T: u,
                    ae: r,
                    aA: n,
                    ao: t,
                    bm: e
                }
            }), uo = f(Je, function(r) {
                switch (r) {
                case "guest":
                    return le(0);
                case "user":
                    return le(1);
                default:
                    return Mu(r + " is not a valid Session.Kind")
                }
            }, Qe), ao = f(fe, de, d(vr, eo, f(Ze, "homeserverUrl", Qe), f(Ze, "kind", uo), f(Ze, "txnId", Ke), f(Ze, "userId", Qe), f(Ze, "accessToken", Qe))), co = function(r) {
                return {
                    $: 5,
                    c: r
                }
            }, io = se(Kt), oo = hr, fo = ar, so = e(function(r, n, t) {
                return f(Je, function(e) {
                    var u = f(oo, r, e);
                    if (u.$)
                        return le(t);
                    var a = u.a
                      , c = f(oo, Ye(C([n, co(t)])), a);
                    return c.$ ? Mu(Ot(c.a)) : le(c.a)
                }, fo)
            }), lo = u(function(r, n, t, e) {
                return f(io, s(so, f(Ze, r, fo), n, t), e)
            }), bo = e(function(r, n, t) {
                return f(io, f(Ze, r, n), t)
            }), vo = l(lo, "updateInterval", no, gt, l(lo, "guestPostingEnabled", Wi, gt, l(lo, "loginEnabled", Wi, gt, l(lo, "pageSize", to, gt, l(lo, "storedSession", (vi = ao,
            Ye(C([co(gt), f(fe, ht, vi)]))), gt, s(bo, "commentSectionId", ro, s(bo, "siteName", Qe, s(bo, "serverName", Qe, s(bo, "defaultHomeserverUrl", Qe, le(Qi)))))))))), po = c(function(r, n, t, e, u, a) {
                return {
                    aP: r,
                    aT: u,
                    a1: e,
                    a6: t,
                    dK: n,
                    bl: a
                }
            }), ho = function(r) {
                return r
            }, go = function(r) {
                return q(d(po, r.aP, "#comments_" + (n = r).cm + "_" + n.bw + ":" + n.ck, f(Uu, 10, r.a6), f(Uu, !0, r.a1), f(Uu, !0, r.aT), ho(f(Uu, 0, r.bl))), r.cr);
                var n
            }, mo = t(function(r, n) {
                return f(fe, de, s(se, s(eo, r, n, 0), f(Ze, "user_id", Qe), f(Ze, "access_token", Qe)))
            }), $o = t(function(r, n) {
                return {
                    $: 0,
                    a: r,
                    b: n
                }
            }), wo = t(function(r, n) {
                return f($o, zu(r), zu(n))
            }), qo = function(r) {
                return Iu({
                    T: gt,
                    cN: r.cN,
                    dh: r.dh,
                    dI: r.dI,
                    cC: r.cC
                })
            }, yo = function(r) {
                return qo({
                    cN: f(Mi, "application/json", "{}"),
                    dh: "POST",
                    dI: f(mo, r, 0),
                    cC: s(Vu, r, C(["register"]), C([f(wo, "kind", "guest")]))
                })
            }, Eo = t(function(r, n) {
                return {
                    $: 0,
                    a: r,
                    b: n
                }
            }), xo = t(function(r, n) {
                return {
                    b8: n,
                    cv: r
                }
            }), ko = Ee(f(xo, gu, gu)), Lo = t(function(r, n) {
                var t = r.a
                  , e = r.b
                  , u = f(qu, t, n);
                return s(ku, t, 1 === u.$ ? C([e]) : f(ct, e, u.a), n)
            }), Ao = e(function(r, n, t) {
                for (; ; ) {
                    if (-2 === t.$)
                        return n;
                    var e = t.e
                      , u = r
                      , a = s(r, t.b, t.c, s(Ao, r, n, t.d));
                    r = u,
                    n = a,
                    t = e
                }
            }), No = c(function(r, n, u, a, c, i) {
                var o = s(Ao, e(function(t, e, a) {
                    r: for (; ; ) {
                        var c = a.a
                          , i = a.b;
                        if (c.b) {
                            var o = c.a
                              , f = o.a
                              , b = o.b
                              , d = c.b;
                            if (0 > m(f, t)) {
                                t = t,
                                e = e,
                                a = q(d, s(r, f, b, i));
                                continue r
                            }
                            return m(f, t) > 0 ? q(c, s(u, t, e, i)) : q(d, l(n, f, b, e, i))
                        }
                        return q(c, s(u, t, e, i))
                    }
                }), q(ot(a), i), c)
                  , f = o.a
                  , b = o.b;
                return s(kt, t(function(n, t) {
                    return s(r, n.a, n.b, t)
                }), b, f)
            }), To = Qn, Co = Rr, Do = e(function(r, n, t) {
                if (n.b) {
                    var e = n.a
                      , u = n.b
                      , a = Co(f(To, e, f($u, r, e)));
                    return f(Ne, function(n) {
                        return s(Do, r, u, s(ku, e, n, t))
                    }, a)
                }
                return Ee(t)
            });
            Vr.Time = Gr(ko, e(function(r, n, t) {
                var a = t.b8
                  , c = e(function(r, n, t) {
                    var e, u = t.c;
                    return y(t.a, t.b, f(Ne, function() {
                        return u
                    }, (e = n,
                    Tr(function(r) {
                        var n = e.f;
                        2 === n.$ && n.c && n.c(),
                        e.f = null,
                        r(Nr(w))
                    }))))
                })
                  , i = s(kt, Lo, gu, n)
                  , o = d(No, e(function(r, n, t) {
                    var e = t.b
                      , u = t.c;
                    return y(f(ct, r, t.a), e, u)
                }), u(function(r, n, t, e) {
                    var u = e.c;
                    return y(e.a, s(ku, r, t, e.b), u)
                }), c, i, a, y(A, gu, Ee(0)))
                  , l = o.a
                  , b = o.b;
                return f(Ne, function(r) {
                    return Ee(f(xo, i, r))
                }, f(Ne, function() {
                    return s(Do, r, l, b)
                }, o.c))
            }), e(function(r, n, t) {
                var e = f(qu, n, t.cv);
                if (1 === e.$)
                    return Ee(t);
                var u = e.a;
                return f(Ne, function() {
                    return Ee(t)
                }, f(Ne, function(n) {
                    return De(f(Ae, function(t) {
                        return f(Se, r, t(n))
                    }, u))
                }, Xi))
            }), 0, t(function(r, n) {
                return f(Eo, n.a, f(_e, r, n.b))
            }));
            var So = Jr("Time")
              , Po = t(function(r, n) {
                return So(f(Eo, r, n))
            })
              , Ro = function(r) {
                return r
            }
              , Bo = Zr(A)
              , Uo = e(function(r, n, t) {
                return {
                    $: 7,
                    a: r,
                    b: n,
                    c: t
                }
            })
              , Io = t(function(r, n) {
                return {
                    $: 10,
                    a: r,
                    b: n
                }
            })
              , jo = t(function(r, n) {
                return f(ct, {
                    W: f(Uu, 0, f(uu, pt(1), (t = f(Ae, function(r) {
                        return r.W
                    }, r),
                    t.b ? ht(s(kt, Wt, t.a, t.b)) : gt))),
                    aD: n
                }, r);
                var t
            })
              , Oo = function(r) {
                return x(r, {
                    U: ""
                })
            }
              , zo = function(r) {
                return s(kt, t(function(r, n) {
                    return r.$ ? n : f(ct, r.a, n)
                }), A, r)
            }
              , _o = t(function(r, n) {
                return s(Le, t(function(n, t) {
                    return r(n) ? f(ct, n, t) : t
                }), A, n)
            })
              , Vo = u(function(r, n, t, e) {
                var u = n;
                return f(Gu, r, {
                    cN: Ri,
                    dh: "GET",
                    dA: C([f(wo, "from", e), f(wo, "dir", t ? "f" : "b")]),
                    dB: C(["rooms", u, "messages"]),
                    dI: Pi
                })
            })
              , Go = t(function(r, n) {
                return l(Vo, r, n.F, 1, n.bE)
            })
              , Ho = t(function(r, n) {
                return l(Vo, r, n.F, 0, n.dP)
            })
              , Mo = {
                ae: "https://matrix.org",
                Z: "",
                aK: 0,
                ar: ""
            }
              , Fo = function(r) {
                return f(Hn, "application/json", f(wt, 0, r))
            }
              , Jo = function(r) {
                return kr(s(kt, t(function(r, n) {
                    return s(Ar, r.a, r.b, n)
                }), {}, r))
            }
              , Zo = kr
              , Ko = function(r) {
                var n = r.ed
                  , t = r.Z;
                return Jo(C([q("type", Zo("m.login.password")), q("identifier", Jo(C([q("type", Zo("m.id.user")), q("user", Zo(n))]))), q("password", Zo(t)), q("initial_device_display_name", Zo("Cactus Comments"))]))
            }
              , Yo = e(function(r, n, t) {
                return 1 === n.$ ? gt : 1 === t.$ ? gt : ht(f(r, n.a, t.a))
            })
              , Xo = t(function(r, n) {
                var t = n.b;
                return q(r(n.a), t)
            })
              , Qo = t(function(r, n) {
                return x(r, {
                    bE: n.bE,
                    C: Vi(L(r.C, n.bu))
                })
            })
              , Wo = t(function(r, n) {
                return x(r, {
                    C: Vi(L(r.C, n.bu)),
                    dP: n.bE
                })
            })
              , rf = e(function(r, n, t) {
                return f(1 === n ? Qo : Wo, r, t)
            })
              , nf = t(function(r, n) {
                return n.$ ? gt : r(n.a)
            })
              , tf = function(r) {
                return {
                    $: 4,
                    a: r
                }
            }
              , ef = function(r) {
                return {
                    $: 7,
                    a: r
                }
            }
              , uf = function(r) {
                return {
                    $: 5,
                    a: r
                }
            }
              , af = {
                $: 0
            }
              , cf = {
                $: 8
            }
              , of = t(function(r, n) {
                return {
                    $: 4,
                    a: r,
                    b: n
                }
            })
              , ff = function(r) {
                return {
                    $: 2,
                    a: r
                }
            }
              , sf = function(r) {
                return {
                    $: 0,
                    a: r
                }
            }
              , lf = function(r) {
                return {
                    $: 1,
                    a: r
                }
            }
              , bf = t(function(r, n) {
                return {
                    $: 3,
                    a: r,
                    b: n
                }
            })
              , df = e(function(r, n, t) {
                return {
                    $: 0,
                    a: r,
                    b: n,
                    c: t
                }
            })
              , vf = e(function(r, n, t) {
                return {
                    $: 2,
                    a: r,
                    b: n,
                    c: t
                }
            })
              , pf = function(r) {
                return {
                    $: 2,
                    a: r
                }
            }
              , hf = e(function(r, n, t) {
                return {
                    $: 1,
                    a: r,
                    b: n,
                    c: t
                }
            })
              , gf = t(function(r, n) {
                return {
                    $: 0,
                    a: r,
                    b: n
                }
            })
              , mf = function(r) {
                return {
                    $: 1,
                    a: r
                }
            }
              , $f = t(function(r, n) {
                return {
                    $: 2,
                    a: r,
                    b: n
                }
            })
              , wf = function(r) {
                return {
                    $: 5,
                    a: r
                }
            }
              , qf = function(r) {
                return {
                    $: 1,
                    a: r
                }
            }
              , yf = function(r) {
                return {
                    $: 2,
                    a: r
                }
            }
              , Ef = t(function(r, n) {
                return {
                    $: 6,
                    a: r,
                    b: n
                }
            })
              , xf = {
                $: 8
            }
              , kf = {
                $: 7
            }
              , Lf = t(function(r, n) {
                return {
                    P: f(ct, n, r.P),
                    H: r.H
                }
            })
              , Af = {
                $: 10
            }
              , Nf = function(r) {
                switch (r) {
                case " ":
                case "\t":
                    return !0;
                default:
                    return !1
                }
            }
              , Tf = f(Ja, "\r", Fa("a carriage return"))
              , Cf = f(Ja, "\n", Fa("a newline"))
              , Df = mc(C([Qa(Cf), f(Aa, Qa(Tf), mc(C([Qa(Cf), ja(0)])))]))
              , Sf = f(nc, function() {
                return Af
            }, f(Aa, la(Ea(Nf)), Df))
              , Pf = function(r) {
                return {
                    $: 11,
                    a: r
                }
            }
              , Rf = f(Ja, " ", Fa("a space"))
              , Bf = Qa
              , Uf = C([Bf(f(Ja, ">", Fa(">"))), f(Aa, la(Bf(Rf)), mc(C([Bf(f(Ja, ">", Fa(" >"))), Bf(f(Ja, " >", Fa("  >"))), Bf(f(Ja, "  >", Fa("   >")))])))])
              , If = function(r) {
                switch (r) {
                case "\n":
                case "\r":
                    return !0;
                default:
                    return !1
                }
            }
              , jf = Ea(f(_e, Ra, If))
              , Of = function(r) {
                return function(n) {
                    return p(pe(n.cq), n.b) ? s(oa, !1, 0, n) : f(ia, !1, f(ga, n, r))
                }
            }
              , zf = Of(Fa("the end of the input"))
              , _f = mc(C([Df, zf]))
              , Vf = f(Ka, f(Aa, f(Aa, ja(Pf), mc(Uf)), mc(C([Bf(Rf), ja(0)]))), f(Aa, Da(jf), _f))
              , Gf = t(function(r, n) {
                return {
                    $: 0,
                    a: r,
                    b: n
                }
            })
              , Hf = function(r) {
                return {
                    $: 6,
                    a: r
                }
            }
              , Mf = function(r) {
                return {
                    $: 8,
                    a: r
                }
            }
              , Ff = t(function(r, n) {
                return {
                    $: 0,
                    a: r,
                    b: n
                }
            })
              , Jf = t(function(r, n) {
                return {
                    $: 0,
                    a: r,
                    b: n
                }
            })
              , Zf = e(function(r, n, t) {
                var e = q(n, t);
                return "" === e.a ? t : "" === e.b ? n : L(n, L(r, t))
            })
              , Kf = t(function(r, n) {
                return r + "\n" + n
            })
              , Yf = function(r) {
                return Qa(f(Ja, r, Fa(r)))
            }
              , Xf = function(r) {
                var n = r.a
                  , e = r.b
                  , u = f(Uu, bc(e), f(uu, function(r) {
                    return bc(f(ct, r, e))
                }, n))
                  , a = f(Uu, dc(q(gt, e)), f(uu, function(r) {
                    return dc(q(gt, f(ct, r, e)))
                }, n))
                  , c = function(r) {
                    return dc(q(ht(function(r) {
                        return L(f(Uu, "", n), r)
                    }(r)), e))
                };
                return mc(C([f(nc, function() {
                    return u
                }, Yf("|\n")), f(nc, function() {
                    return u
                }, Yf("\n")), f(nc, function() {
                    return u
                }, Of(Fa("end"))), f(Aa, la(ja(c("|"))), Yf("\\\\|")), f(Aa, la(ja(c("\\"))), Yf("\\\\")), f(Aa, la(ja(c("|"))), Yf("\\|")), f(Aa, la(ja(a)), Yf("|")), f(Ca, t(function(r) {
                    return c(r)
                }), f(wa, ka(!0), Ba("No character found")))]))
            }
              , Qf = function(r) {
                return r.trim()
            }
              , Wf = f(nc, f(kt, t(function(r, n) {
                return f(ct, Qf(r), n)
            }), A), f(lc, q(gt, A), Xf))
              , rs = f(Ka, f(Aa, ja(de), mc(C([Yf("|"), ja(0)]))), Wf)
              , ns = t(function(r, n) {
                var e = r.b
                  , u = f(mi, rs, n);
                return u.$ ? ft("Unable to parse previous line as a table header") : function(r) {
                    return p(Lt(r), Lt(e)) ? dt(function(r) {
                        return s(At, t(function(r, n) {
                            return {
                                as: n,
                                X: r
                            }
                        }), r, e)
                    }(r)) : ft("Tables must have the same number of header columns (" + qt(Lt(r)) + ") as delimiter columns (" + qt(Lt(e)) + ")")
                }(u.a)
            })
              , ts = t(function(r, n) {
                return {
                    P: r.P,
                    H: function() {
                        var t = q(n, r.H);
                        r: for (; t.b.b; )
                            switch (t.b.a.$) {
                            case 5:
                                if (5 === t.a.$) {
                                    var e = t.b
                                      , u = e.b;
                                    return f(ct, uf({
                                        cN: f(Kf, e.a.a.cN, t.a.a.cN),
                                        dd: gt
                                    }), u)
                                }
                                break r;
                            case 6:
                                if (6 === t.a.$) {
                                    var a = t.b;
                                    return u = a.b,
                                    f(ct, Hf(f(Kf, a.a.a, t.a.a)), u)
                                }
                                break r;
                            case 11:
                                switch (t.a.$) {
                                case 1:
                                    var c = t.b;
                                    return u = c.b,
                                    f(ct, Pf(s(Zf, "\n", c.a.a, t.a.a)), u);
                                case 11:
                                    var i = t.b;
                                    return u = i.b,
                                    f(ct, Pf(f(Kf, i.a.a, t.a.a)), u);
                                default:
                                    break r
                                }
                            case 1:
                                switch (t.a.$) {
                                case 1:
                                    var o = t.b;
                                    return u = o.b,
                                    f(ct, mf(s(Zf, "\n", o.a.a, t.a.a)), u);
                                case 12:
                                    if (t.a.a) {
                                        var l = t.b;
                                        return u = l.b,
                                        f(ct, f(Gf, 2, l.a.a), u)
                                    }
                                    var b = t.b;
                                    u = b.b;
                                    return f(ct, f(Gf, 1, b.a.a), u);
                                case 9:
                                    var d = t.a.a
                                      , v = d.a
                                      , p = t.b
                                      , h = p.a.a
                                      , g = (u = p.b,
                                    f(ns, f(Jf, v, d.b), h));
                                    return f(ct, g.$ ? mf(s(Zf, "\n", h, v.cb)) : Mf(f(Ff, g.a, A)), u);
                                default:
                                    break r
                                }
                            case 8:
                                if (8 === t.a.$)
                                    return u = t.b.b,
                                    f(ct, Mf(t.a.a), u);
                                break r;
                            default:
                                break r
                            }
                        return f(ct, n, r.H)
                    }()
                }
            })
              , es = t(function(r, n) {
                return n.b ? s(Le, ct, n, r) : r
            })
              , us = function(r) {
                return s(Le, es, A, r)
            }
              , as = t(function(r, n) {
                return us(f(Ae, r, n))
            })
              , cs = function(r) {
                return "Problem at row " + qt(r.dL) + "\n" + function(r) {
                    switch (r.$) {
                    case 0:
                        return "Expecting " + r.a;
                    case 1:
                        return "Expecting int";
                    case 2:
                        return "Expecting hex";
                    case 3:
                        return "Expecting octal";
                    case 4:
                        return "Expecting binary";
                    case 5:
                        return "Expecting float";
                    case 6:
                        return "Expecting number";
                    case 7:
                        return "Expecting variable";
                    case 8:
                        return "Expecting symbol " + r.a;
                    case 9:
                        return "Expecting keyword " + r.a;
                    case 10:
                        return "Expecting keyword end";
                    case 11:
                        return "Unexpected char";
                    case 12:
                        return r.a;
                    default:
                        return "Bad repeat"
                    }
                }(r.dC)
            }
              , is = function(r) {
                return {
                    $: 3,
                    a: r
                }
            }
              , os = e(function(r, n, t) {
                return {
                    $: 0,
                    a: r,
                    b: n,
                    c: t
                }
            })
              , fs = Fa("at least 1 tag name character")
              , ss = function(r) {
                switch (r) {
                case " ":
                case "\r":
                case "\n":
                case "\t":
                case "/":
                case "<":
                case ">":
                case '"':
                case "'":
                case "=":
                    return !1;
                default:
                    return !0
                }
            }
              , ls = f(Ca, t(function(r) {
                return za(r)
            }), f(Aa, f(wa, ss, fs), Ea(ss)))
              , bs = ls
              , ds = function(r) {
                return {
                    $: 8,
                    a: r
                }
            }
              , vs = function(r) {
                return Qa(f(Ja, r, ds(r)))
            }
              , ps = Ec(C([q("amp", "&"), q("lt", "<"), q("gt", ">"), q("apos", "'"), q("quot", '"')]))
              , hs = t(function(r, n) {
                return n.$ ? ft(r) : dt(n.a)
            })
              , gs = function(r) {
                var n = function(r) {
                    var n, t = f(qe, "#x", n = r) ? f(Pc, Ba, f(Sc, Tc, Uc(f(ge, 2, n)))) : f(qe, "#", n) ? f(hs, Ba("Invalid escaped character: " + n), f(uu, Tc, we(f(ge, 1, n)))) : f(hs, Ba('No entity named "&' + n + ';" found.'), f(qu, n, ps));
                    return t.$ ? Ua(t.a) : ja(t.a)
                }
                  , t = function(n) {
                    return !p(n, r) && ";" !== n
                };
                return f(Ka, f(Aa, ja(de), vs("&")), f(Aa, f(fa, n, Da(f(Aa, f(wa, t, Fa("an entity character")), Ea(t)))), vs(";")))
            }
              , ms = e(function(r, n, t) {
                return f(fa, function(n) {
                    return mc(C([f(nc, function(r) {
                        return dc(L(t, L(n, Nc(r))))
                    }, gs(r)), ja(bc(L(t, n)))]))
                }, Da(Ea(n)))
            })
              , $s = function(r) {
                return f(lc, "", f(ms, r, function(n) {
                    return !p(n, r) && "&" !== n
                }))
            }
              , ws = mc(C([f(Ka, f(Aa, ja(de), vs('"')), f(Aa, $s('"'), vs('"'))), f(Ka, f(Aa, ja(de), vs("'")), f(Aa, $s("'"), vs("'")))]))
              , qs = t(function(r, n) {
                return ht(n.$ ? r : n.a)
            })
              , ys = function(r) {
                switch (r) {
                case " ":
                case "\r":
                case "\n":
                case "\t":
                    return !0;
                default:
                    return !1
                }
            }
              , Es = Ea(ys)
              , xs = function(r) {
                return mc(C([f(Ka, f(Ka, ja(t(function(n, t) {
                    return dc(s(Pu, za(n), qs(t), r))
                })), f(Aa, f(Aa, f(Aa, bs, Es), vs("=")), Es)), f(Aa, ws, Es)), ja(bc(r))]))
            }
              , ks = f(nc, f(Ao, e(function(r, n, t) {
                return f(ct, {
                    ah: r,
                    aN: n
                }, t)
            }), A), f(lc, gu, xs))
              , Ls = function(r) {
                return function(n) {
                    var t = b(Xn, r, n.b, n.dL, n.bv, n.cq)
                      , e = t.a
                      , u = t.b
                      , a = t.c
                      , c = 0 > e ? pe(n.cq) : e;
                    return s(oa, 0 > m(n.b, c), 0, {
                        bv: a,
                        d: n.d,
                        e: n.e,
                        b: c,
                        dL: u,
                        cq: n.cq
                    })
                }
            }
              , As = f(Ka, f(Aa, ja(de), vs("<![CDATA[")), f(Aa, Da(Ls("]]>")), vs("]]>")))
              , Ns = t(function(r, n) {
                return f(nc, function(r) {
                    return r(n)
                }, mc(r))
            })
              , Ts = function(r) {
                var n = f(fa, function(n) {
                    return p(r, n) ? ja(0) : Ua(Ba("tag name mismatch: " + r + " and " + n))
                }, ls);
                return f(Aa, f(Aa, f(Aa, f(Aa, vs("</"), Es), n), Es), vs(">"))
            }
              , Cs = function(r) {
                return f(Ja, r, Fa(r))
            }
              , Ds = f(Ka, f(Aa, ja(function(r) {
                return {
                    $: 2,
                    a: r
                }
            }), Qa(Cs("\x3c!--"))), f(Aa, Da(Ls("--\x3e")), Qa(Cs("--\x3e"))))
              , Ss = t(function(r, n) {
                return {
                    $: 5,
                    a: r,
                    b: n
                }
            })
              , Ps = Fa("at least 1 uppercase character")
              , Rs = Da(f(Aa, f(wa, Pt, Ps), Ea(Pt)))
              , Bs = f(Aa, f(wa, ys, Fa("at least one whitespace")), Ea(ys))
              , Us = f(Ka, f(Ka, f(Aa, ja(Ss), vs("<!")), f(Aa, Rs, Bs)), f(Aa, Da(Ls(">")), vs(">")))
              , Is = f(Ka, f(Aa, ja(function(r) {
                return {
                    $: 4,
                    a: r
                }
            }), vs("<?")), f(Aa, Da(Ls("?>")), vs("?>")))
              , js = function(r) {
                switch (r) {
                case "<":
                case "&":
                    return !1;
                default:
                    return !0
                }
            }
              , Os = C([f(nc, function() {
                return dc(0)
            }, f(Aa, f(wa, js, Fa("is not & or <")), Ea(js))), f(nc, function() {
                return dc(0)
            }, gs("<")), ja(bc(0))])
              , zs = Da(f(lc, 0, function() {
                return mc(Os)
            }))
              , _s = function(r) {
                return f(lc, A, Ns(Vs(r)))
            }
              , Vs = function(r) {
                return C([f(nc, t(function(r, n) {
                    return bc(It(n))
                }), Ts(r)), f(fa, function(n) {
                    return me(n) ? f(nc, t(function(r, n) {
                        return bc(It(n))
                    }), Ts(r)) : ja(function(r) {
                        return dc(f(ct, {
                            $: 1,
                            a: n
                        }, r))
                    })
                }, zs), f(nc, t(function(r, n) {
                    return dc(f(ct, r, n))
                }), Hs())])
            }
              , Gs = function(r) {
                return f(Ka, f(Ka, f(Aa, ja(os(r)), Es), f(Aa, ks, Es)), mc(C([f(nc, function() {
                    return A
                }, vs("/>")), f(Ka, f(Aa, ja(de), vs(">")), _s(r))])))
            };
            function Hs() {
                return mc(C([f(nc, is, As), Is, Ds, Us, Ms()]))
            }
            function Ms() {
                return f(Ka, f(Aa, ja(de), vs("<")), f(fa, Gs, ls))
            }
            var Fs = Hs();
            Hs = function() {
                return Fs
            }
            ;
            var Js = Ms();
            Ms = function() {
                return Js
            }
            ;
            var Zs, Ks, Ys, Xs, Qs = f(Ja, "\t", Fa("a tab")), Ws = mc(C([Bf(Qs), f(Aa, la(Bf(Rf)), mc(C([Bf(f(Ja, "   ", ds("Indentation"))), Bf(f(Ja, " \t", ds("Indentation"))), Bf(f(Ja, "  \t", ds("Indentation")))])))])), rl = f(Ka, f(Aa, ja(Hf), Ws), f(Aa, Da(jf), _f)), nl = t(function(r, n) {
                return q(n.a, r(n.b))
            }), tl = f(Ca, t(function(r) {
                return mf(r)
            }), jf), el = f(Aa, tl, _f), ul = t(function(r, n) {
                return {
                    $: 4,
                    a: r,
                    b: n
                }
            }), al = function(r) {
                return f(Aa, f(wa, r, Ba("Expected one or more character")), Ea(r))
            }, cl = f(Ja, ")", Fa("a `)`")), il = f(Ja, ".", Fa("a `.`")), ol = mc(C([f(Ka, f(Aa, ja(de), al(Nf)), f(Aa, Da(jf), _f)), f(Aa, ja(""), _f)])), fl = f(Ca, t(function(r) {
                return f(Uu, 0, we(r))
            }), al(Bt)), sl = t(function(r, n) {
                return mc(C([f(nc, function(r) {
                    return dc(f(ct, r, n))
                }, r), ja(bc(It(n)))]))
            }), ll = e(function(r, n, t) {
                return f(nc, function(n) {
                    return q(r, f(ct, t, n))
                }, f(lc, A, sl(function(r) {
                    return f(Ka, f(Aa, ja(de), la(f(Aa, fl, Bf(r)))), ol)
                }(n))))
            }), bl = f(fa, function(r) {
                return r > 999999999 ? Ua(Ba("Starting numbers must be nine digits or less.")) : ja(r)
            }, fl), dl = function(r) {
                return 1 === r ? ja(r) : Ua(Ba("Lists inside a paragraph or after a paragraph without a blank line must start with 1"))
            }, vl = function(r) {
                return f(nc, function(r) {
                    return f(ul, r.a, f(Ae, de, r.b))
                }, function(r) {
                    return f(fa, de, f(Ka, f(Ka, f(Ka, ja(ll), la(r ? f(fa, dl, bl) : bl)), f(Aa, la(mc(C([f(Aa, ja(il), Bf(il)), f(Aa, ja(cl), Bf(cl))]))), al(Nf))), f(Aa, Da(jf), _f)))
                }(r))
            }, pl = t(function(r, n) {
                return {
                    $: 6,
                    a: r,
                    b: n
                }
            }), hl = {
                $: 1
            }, gl = e(function(r, n, t) {
                return {
                    $: 4,
                    a: r,
                    b: n,
                    c: t
                }
            }), ml = e(function(r, n, t) {
                return {
                    $: 3,
                    a: r,
                    b: n,
                    c: t
                }
            }), $l = function(r) {
                return {
                    $: 0,
                    a: r
                }
            }, wl = function(r) {
                var n = r
                  , t = n.g;
                switch (t.$) {
                case 0:
                    return $l(n.d3);
                case 1:
                    return hl;
                case 2:
                    return {
                        $: 2,
                        a: n.d3
                    };
                case 3:
                    var e = t.a;
                    return s(ml, e.b, gt, C([$l(e.a)]));
                case 4:
                    var u = t.a;
                    return s(ml, u.a, u.b, ql(n.j));
                case 5:
                    var a = t.a;
                    return s(gl, a.a, a.b, ql(n.j));
                case 6:
                    return {
                        $: 5,
                        a: t.a
                    };
                case 7:
                    return f(pl, t.a, ql(n.j));
                default:
                    return {
                        $: 7,
                        a: ql(n.j)
                    }
                }
            }, ql = function(r) {
                return f(Ae, wl, r)
            }, yl = t(function(r, n) {
                return {
                    bE: n.bE - r.l,
                    j: n.j,
                    dP: n.dP - r.l,
                    d3: n.d3,
                    t: n.t - r.l,
                    l: n.l - r.l,
                    g: n.g
                }
            }), El = t(function(r, n) {
                return {
                    bE: r.bE,
                    j: f(ct, f(yl, r, n), r.j),
                    dP: r.dP,
                    d3: r.d3,
                    t: r.t,
                    l: r.l,
                    g: r.g
                }
            }), xl = function(r) {
                var n = r;
                return {
                    bE: n.bE,
                    j: kl(n.j),
                    dP: n.dP,
                    d3: n.d3,
                    t: n.t,
                    l: n.l,
                    g: n.g
                }
            }, kl = function(r) {
                var n = f(_i, function(r) {
                    return r.dP
                }, r);
                return n.b ? s(Ll, n.b, n.a, A) : A
            }, Ll = e(function(r, n, t) {
                for (; ; ) {
                    var e = n;
                    if (!r.b)
                        return f(ct, xl(e), t);
                    var u = r.a
                      , a = r.b;
                    1 > m(e.bE, u.dP) ? (r = a,
                    n = u,
                    t = f(ct, xl(e), t)) : 0 > m(e.dP, u.dP) && m(e.bE, u.bE) > 0 ? (r = a,
                    n = f(El, e, u),
                    t = t) : (r = a,
                    n = e,
                    t = t)
                }
            }), Al = {
                $: 0
            }, Nl = u(function(r, n, t, e) {
                return {
                    a: n,
                    ag: r,
                    dt: t,
                    bi: e
                }
            }), Tl = Wn, Cl = function(r) {
                return f(Tl, {
                    cP: !1,
                    dk: !1
                }, r)
            }, Dl = /.^/, Sl = f(Uu, Dl, Cl("&#([0-9]{1,8});")), Pl = tt(1 / 0), Rl = z, Bl = function(r) {
                return function(r) {
                    return 9 === r || 10 === r || 13 === r || 133 === r || r >= 32 && 126 >= r || r >= 160 && 55295 >= r || r >= 57344 && 64975 >= r || r >= 65008 && 65533 >= r || r >= 65536 && 1114109 >= r
                }(r) && !function(r) {
                    var n = f(Rl, 16, r)
                      , t = f(Rl, 131070, r);
                    return !(131070 > r || (0 > t || t > 15) && (65536 > t || t > 65551) || 14 !== n && 15 !== n)
                }(r) ? Nc(Tc(r)) : Nc(Tc(65533))
            }, Ul = f(Pl, Sl, function(r) {
                var n = r.bi;
                if (n.b && !n.a.$) {
                    var t = we(n.a.a);
                    return t.$ ? r.ag : Bl(t.a)
                }
                return r.ag
            }), Il = f(Uu, Dl, Cl("&([0-9a-zA-Z]+);")), jl = Ec(C([q("quot", 34), q("amp", 38), q("apos", 39), q("lt", 60), q("gt", 62), q("nbsp", 160), q("iexcl", 161), q("cent", 162), q("pound", 163), q("curren", 164), q("yen", 165), q("brvbar", 166), q("sect", 167), q("uml", 168), q("copy", 169), q("ordf", 170), q("laquo", 171), q("not", 172), q("shy", 173), q("reg", 174), q("macr", 175), q("deg", 176), q("plusmn", 177), q("sup2", 178), q("sup3", 179), q("acute", 180), q("micro", 181), q("para", 182), q("middot", 183), q("cedil", 184), q("sup1", 185), q("ordm", 186), q("raquo", 187), q("frac14", 188), q("frac12", 189), q("frac34", 190), q("iquest", 191), q("Agrave", 192), q("Aacute", 193), q("Acirc", 194), q("Atilde", 195), q("Auml", 196), q("Aring", 197), q("AElig", 198), q("Ccedil", 199), q("Egrave", 200), q("Eacute", 201), q("Ecirc", 202), q("Euml", 203), q("Igrave", 204), q("Iacute", 205), q("Icirc", 206), q("Iuml", 207), q("ETH", 208), q("Ntilde", 209), q("Ograve", 210), q("Oacute", 211), q("Ocirc", 212), q("Otilde", 213), q("Ouml", 214), q("times", 215), q("Oslash", 216), q("Ugrave", 217), q("Uacute", 218), q("Ucirc", 219), q("Uuml", 220), q("Yacute", 221), q("THORN", 222), q("szlig", 223), q("agrave", 224), q("aacute", 225), q("acirc", 226), q("atilde", 227), q("auml", 228), q("aring", 229), q("aelig", 230), q("ccedil", 231), q("egrave", 232), q("eacute", 233), q("ecirc", 234), q("euml", 235), q("igrave", 236), q("iacute", 237), q("icirc", 238), q("iuml", 239), q("eth", 240), q("ntilde", 241), q("ograve", 242), q("oacute", 243), q("ocirc", 244), q("otilde", 245), q("ouml", 246), q("divide", 247), q("oslash", 248), q("ugrave", 249), q("uacute", 250), q("ucirc", 251), q("uuml", 252), q("yacute", 253), q("thorn", 254), q("yuml", 255), q("OElig", 338), q("oelig", 339), q("Scaron", 352), q("scaron", 353), q("Yuml", 376), q("fnof", 402), q("circ", 710), q("tilde", 732), q("Alpha", 913), q("Beta", 914), q("Gamma", 915), q("Delta", 916), q("Epsilon", 917), q("Zeta", 918), q("Eta", 919), q("Theta", 920), q("Iota", 921), q("Kappa", 922), q("Lambda", 923), q("Mu", 924), q("Nu", 925), q("Xi", 926), q("Omicron", 927), q("Pi", 928), q("Rho", 929), q("Sigma", 931), q("Tau", 932), q("Upsilon", 933), q("Phi", 934), q("Chi", 935), q("Psi", 936), q("Omega", 937), q("alpha", 945), q("beta", 946), q("gamma", 947), q("delta", 948), q("epsilon", 949), q("zeta", 950), q("eta", 951), q("theta", 952), q("iota", 953), q("kappa", 954), q("lambda", 955), q("mu", 956), q("nu", 957), q("xi", 958), q("omicron", 959), q("pi", 960), q("rho", 961), q("sigmaf", 962), q("sigma", 963), q("tau", 964), q("upsilon", 965), q("phi", 966), q("chi", 967), q("psi", 968), q("omega", 969), q("thetasym", 977), q("upsih", 978), q("piv", 982), q("ensp", 8194), q("emsp", 8195), q("thinsp", 8201), q("zwnj", 8204), q("zwj", 8205), q("lrm", 8206), q("rlm", 8207), q("ndash", 8211), q("mdash", 8212), q("lsquo", 8216), q("rsquo", 8217), q("sbquo", 8218), q("ldquo", 8220), q("rdquo", 8221), q("bdquo", 8222), q("dagger", 8224), q("Dagger", 8225), q("bull", 8226), q("hellip", 8230), q("permil", 8240), q("prime", 8242), q("Prime", 8243), q("lsaquo", 8249), q("rsaquo", 8250), q("oline", 8254), q("frasl", 8260), q("euro", 8364), q("image", 8465), q("weierp", 8472), q("real", 8476), q("trade", 8482), q("alefsym", 8501), q("larr", 8592), q("uarr", 8593), q("rarr", 8594), q("darr", 8595), q("harr", 8596), q("crarr", 8629), q("lArr", 8656), q("uArr", 8657), q("rArr", 8658), q("dArr", 8659), q("hArr", 8660), q("forall", 8704), q("part", 8706), q("exist", 8707), q("empty", 8709), q("nabla", 8711), q("isin", 8712), q("notin", 8713), q("ni", 8715), q("prod", 8719), q("sum", 8721), q("minus", 8722), q("lowast", 8727), q("radic", 8730), q("prop", 8733), q("infin", 8734), q("ang", 8736), q("and", 8743), q("or", 8744), q("cap", 8745), q("cup", 8746), q("int", 8747), q("there4", 8756), q("sim", 8764), q("cong", 8773), q("asymp", 8776), q("ne", 8800), q("equiv", 8801), q("le", 8804), q("ge", 8805), q("sub", 8834), q("sup", 8835), q("nsub", 8836), q("sube", 8838), q("supe", 8839), q("oplus", 8853), q("otimes", 8855), q("perp", 8869), q("sdot", 8901), q("lceil", 8968), q("rceil", 8969), q("lfloor", 8970), q("rfloor", 8971), q("lang", 9001), q("rang", 9002), q("loz", 9674), q("spades", 9824), q("clubs", 9827), q("hearts", 9829), q("diams", 9830)])), Ol = f(Pl, Il, function(r) {
                var n = r.bi;
                if (n.b && !n.a.$) {
                    var t = f(qu, n.a.a, jl);
                    return t.$ ? r.ag : Nc(Tc(t.a))
                }
                return r.ag
            }), zl = f(Uu, Dl, Cl("(\\\\+)([!\"#$%&\\'()*+,./:;<=>?@[\\\\\\]^_`{|}~-])")), _l = e(function(r, n, t) {
                return r > 0 ? s(_l, r >> 1, L(n, n), 1 & r ? L(t, n) : t) : t
            }), Vl = t(function(r, n) {
                return s(_l, r, n, "")
            }), Gl = f(Pl, zl, function(r) {
                var n = r.bi;
                if (n.b && !n.a.$ && n.b.b && !n.b.a.$) {
                    var t = n.b.a.a;
                    return L(f(Vl, pe(n.a.a) / 2 | 0, "\\"), t)
                }
                return r.ag
            }), Hl = f(Uu, Dl, Cl("&#[Xx]([0-9a-fA-F]{1,8});")), Ml = F, Fl = f(Pl, Hl, function(r) {
                var n, e = r.bi;
                return e.b && !e.a.$ ? Bl((n = e.a.a,
                s(Ml, t(function(r, n) {
                    return 16 * n + f(Rl, 39, Dt(r)) - 9
                }), 0, za(n)))) : r.ag
            }), Jl = function(r) {
                var n = Gl(r);
                return f(ve, "&", n) ? Fl(Ul(Ol(n))) : n
            }, Zl = function(r) {
                return {
                    bE: 0,
                    j: A,
                    dP: 0,
                    d3: Jl(r),
                    t: 0,
                    l: 0,
                    g: Al
                }
            }, Kl = e(function(r, n, t) {
                var e = n
                  , u = {
                    bE: e.bE,
                    j: s(Yl, e.d3, A, e.j),
                    dP: e.dP,
                    d3: e.d3,
                    t: e.t,
                    l: e.l,
                    g: e.g
                };
                if (t.b) {
                    var a = t.a;
                    return a.g.$ ? p(e.bE, a.dP) ? f(ct, u, t) : 0 > m(e.bE, a.dP) ? f(ct, u, f(ct, Zl(s(he, e.bE, a.dP, r)), t)) : t : f(ct, u, t)
                }
                var c = f(ge, e.bE, r);
                return me(c) ? C([u]) : C([u, Zl(c)])
            }), Yl = e(function(r, n, t) {
                for (; ; ) {
                    if (!t.b) {
                        if (n.b) {
                            var e = n.a;
                            return e.dP > 0 ? f(ct, Zl(f($e, e.dP, r)), n) : n
                        }
                        return me(r) ? A : C([Zl(r)])
                    }
                    var u = t.b
                      , a = r
                      , c = s(Kl, r, t.a, n);
                    r = a,
                    n = c,
                    t = u
                }
            }), Xl = f(Uu, Dl, Cl("(\\\\*)(\\<)")), Ql = e(function(r, n, t) {
                var e = r(n);
                return e.$ ? t : f(ct, e.a, t)
            }), Wl = t(function(r, n) {
                return s(Le, Ql(r), A, n)
            }), rb = nt(1 / 0), nb = {
                $: 4
            }, tb = function(r) {
                return !f(Rl, 2, r)
            }, eb = function(r) {
                var n = r.bi;
                if (n.b && n.b.b && !n.b.a.$) {
                    var t = f(Uu, 0, f(uu, pe, n.a));
                    return tb(t) ? ht({
                        a: r.a + t,
                        a0: 1,
                        c: nb
                    }) : gt
                }
                return gt
            }, ub = f(Uu, Dl, Cl("(\\\\*)(\\>)")), ab = function(r) {
                return {
                    $: 5,
                    a: r
                }
            }, cb = function(r) {
                var n = r.bi;
                if (n.b && n.b.b && !n.b.a.$) {
                    var t = f(Uu, 0, f(uu, pe, n.a));
                    return ht({
                        a: r.a + t,
                        a0: 1,
                        c: tb(t) ? ab(1) : ab(0)
                    })
                }
                return gt
            }, ib = f(Uu, Dl, Cl("(\\\\*)([^*])?(\\*+)([^*])?")), ob = t(function(r, n) {
                return {
                    $: 7,
                    a: r,
                    b: n
                }
            }), fb = f(Ml, t(function(r, n) {
                return n || function(r) {
                    switch (r) {
                    case "!":
                    case '"':
                    case "#":
                    case "%":
                    case "&":
                    case "'":
                    case "(":
                    case ")":
                    case "*":
                    case ",":
                    case "-":
                    case ".":
                    case "/":
                    case ":":
                    case ";":
                    case "?":
                    case "@":
                    case "[":
                    case "]":
                    case "_":
                    case "{":
                    case "}":
                    case "~":
                        return !0;
                    default:
                        return !1
                    }
                }(r)
            }), !1), sb = f(Ml, t(function(r, n) {
                return n || function(r) {
                    switch (r) {
                    case " ":
                    case "\f":
                    case "\n":
                    case "\r":
                    case "\t":
                    case "\v":
                    case " ":
                    case "\u2028":
                    case "\u2029":
                        return !0;
                    default:
                        return !1
                    }
                }(r)
            }), !1), lb = function(r) {
                if (r.$)
                    return 0;
                var n = r.a;
                return me(n) || sb(n) ? 0 : fb(n) ? 1 : 2
            }, bb = e(function(r, n, t) {
                var e = t.bi;
                if (e.b && e.b.b && e.b.b.b && !e.b.b.a.$ && e.b.b.b.b) {
                    var u = e.a
                      , a = e.b
                      , c = a.a
                      , i = a.b
                      , o = i.a.a
                      , l = lb(i.b.a)
                      , b = c.$ ? 0 : pe(c.a)
                      , d = t.a && !b ? ht(s(he, t.a - 1, t.a, n)) : c
                      , v = u.$ ? 0 : pe(u.a)
                      , p = !tb(v) && !b || !d.$ && "\\" === d.a
                      , h = p ? pe(o) - 1 : pe(o)
                      , g = p ? 1 : lb(d);
                    return 0 >= h || "_" === r && 2 === g && 2 === l ? gt : ht({
                        a: t.a + v + b + (p ? 1 : 0),
                        a0: h,
                        c: f(ob, r, {
                            aB: g,
                            aH: l
                        })
                    })
                }
                return gt
            }), db = f(Uu, Dl, Cl("(\\\\*)(\\`+)")), vb = function(r) {
                return {
                    $: 0,
                    a: r
                }
            }, pb = function(r) {
                var n = r.bi;
                if (n.b && n.b.b && !n.b.a.$) {
                    var t = n.b.a.a
                      , e = f(Uu, 0, f(uu, pe, n.a));
                    return ht({
                        a: r.a + e,
                        a0: pe(t),
                        c: tb(e) ? vb(1) : vb(0)
                    })
                }
                return gt
            }, hb = f(Uu, Dl, Cl("(?:(\\\\+)|( {2,}))\\n")), gb = {
                $: 9
            }, mb = function(r) {
                var n = r.bi;
                r: for (; ; ) {
                    if (n.b) {
                        if (n.a.$) {
                            if (n.b.b && !n.b.a.$)
                                return ht({
                                    a: r.a,
                                    a0: pe(r.ag),
                                    c: gb
                                });
                            break r
                        }
                        var t = pe(n.a.a);
                        return tb(t) ? gt : ht({
                            a: r.a + t - 1,
                            a0: 2,
                            c: gb
                        })
                    }
                    break r
                }
                return gt
            }, $b = (Cl("(?:(\\\\+)|( *))\\n"),
            f(Uu, Dl, Cl("(\\\\*)(\\])"))), wb = {
                $: 3
            }, qb = function(r) {
                var n = r.bi;
                if (n.b && n.b.b && !n.b.a.$) {
                    var t = f(Uu, 0, f(uu, pe, n.a));
                    return tb(t) ? ht({
                        a: r.a + t,
                        a0: 1,
                        c: wb
                    }) : gt
                }
                return gt
            }, yb = f(Uu, Dl, Cl("(\\\\*)(\\!)?(\\[)")), Eb = {
                $: 2
            }, xb = function(r) {
                return {
                    $: 1,
                    a: r
                }
            }, kb = function(r) {
                var n = r.bi;
                if (n.b && n.b.b && n.b.b.b && !n.b.b.a.$) {
                    var t = n.b.a
                      , e = f(Uu, 0, f(uu, pe, n.a))
                      , u = !tb(e)
                      , a = u ? r.a + e + 1 : r.a + e;
                    return u ? t.$ ? gt : ht({
                        a: a,
                        a0: 1,
                        c: xb(0)
                    }) : ht(t.$ ? {
                        a: a,
                        a0: 1,
                        c: xb(0)
                    } : {
                        a: a,
                        a0: 2,
                        c: Eb
                    })
                }
                return gt
            }, Lb = function(r) {
                return {
                    $: 10,
                    a: r
                }
            }, Ab = function(r) {
                var n = r.bi;
                if (n.b && n.b.b && !n.b.a.$) {
                    var t = n.b.a.a
                      , e = f(Uu, 0, f(uu, pe, n.a))
                      , u = tb(e) ? q(pe(t), Lb(1)) : q(pe(t), Lb(0));
                    return ht({
                        a: r.a + e,
                        a0: u.a,
                        c: u.b
                    })
                }
                return gt
            }, Nb = f(Uu, Dl, Cl("(\\\\*)(~{2,})([^~])?")), Tb = f(Uu, Dl, Cl("(\\\\*)([^_])?(\\_+)([^_])?")), Cb = t(function(r, n) {
                if (r.b) {
                    var t = r.a
                      , e = r.b;
                    if (n.b) {
                        var u = n.a
                          , a = n.b;
                        return 0 > m(t.a, u.a) ? f(ct, t, f(Cb, e, n)) : f(ct, u, f(Cb, r, a))
                    }
                    return r
                }
                return n
            }), Db = {
                $: 2
            }, Sb = function(r) {
                return {
                    $: 6,
                    a: r
                }
            }, Pb = function(r) {
                return {
                    $: 5,
                    a: r
                }
            }, Rb = function(r) {
                return {
                    $: 4,
                    a: r
                }
            }, Bb = {
                $: 8
            }, Ub = function(r) {
                return {
                    $: 3,
                    a: r
                }
            }, Ib = rt, jb = f(Uu, Dl, Cl("%(?:3B|2C|2F|3F|3A|40|26|3D|2B|24|23|25)")), Ob = f(Lc, zu, f(Pl, jb, function(r) {
                return f(Uu, r.ag, function(r) {
                    try {
                        return ht(decodeURIComponent(r))
                    } catch (r) {
                        return gt
                    }
                }(r.ag))
            })), zb = f(Uu, Dl, Cl("^([A-Za-z][A-Za-z0-9.+\\-]{1,31}:[^<>\\x00-\\x20]*)$")), _b = nt, Vb = function(r) {
                return r.b ? ht(r.a) : gt
            }, Gb = f(Uu, Dl, Cl("^\\[\\s*([^\\[\\]\\\\]*(?:\\\\.[^\\[\\]\\\\]*)*)\\s*\\]")), Hb = function(r) {
                return r
            }, Mb = f(Lc, Hb, za), Fb = t(function(r, n) {
                return q(Ob(Jl(r)), f(uu, Jl, n))
            }), Jb = e(function(r, n, t) {
                var e, u = me(e = f(Uu, r.d3, f(Uu, gt, f(nf, f(Lc, function(r) {
                    return r.bi
                }, Vb), t)))) ? r.d3 : e, a = f(qu, Mb(u), n);
                if (1 === a.$)
                    return gt;
                var c = a.a
                  , i = c.a
                  , o = c.b
                  , s = 5 === r.g.$ ? Pb(f(Fb, i, o)) : Rb(f(Fb, i, o))
                  , l = t.$ ? 0 : pe(t.a.ag);
                return ht(x(r, {
                    bE: r.bE + l,
                    g: s
                }))
            }), Zb = e(function(r, n, t) {
                return s(Jb, n, t, Vb(s(_b, 1, Gb, r)))
            }), Kb = f(Uu, Dl, Cl("^\\(\\s*(?:<([^<>\\f\\v\\r\\n]*)>|([^ \\t\\f\\v\\r\\n\\(\\)\\\\]*(?:\\\\.[^ \\t\\f\\v\\r\\n\\(\\)\\\\]*)*))(?:[ \\t\\f\\v\\r\\n]+(?:'([^'\\\\]*(?:\\\\.[^'\\\\]*)*)'|" + '"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"|\\(([^\\)\\\\]*(?:\\\\.[^\\)\\\\]*)*)\\)))?\\s*\\)')), Yb = function(r) {
                return s(kt, t(function(r, n) {
                    return n.$ ? r : ht(n.a)
                }), gt, r)
            }, Xb = t(function(r, n) {
                var t, e = n.bi;
                if (e.b && e.b.b && e.b.b.b && e.b.b.b.b && e.b.b.b.b.b) {
                    var u = e.a
                      , a = e.b
                      , c = a.a
                      , i = a.b
                      , o = i.b
                      , s = Yb(C([i.a, o.a, o.b.a]))
                      , l = Yb(C([u, c]));
                    return ht((t = f(Uu, "", l),
                    x(r, {
                        bE: r.bE + pe(n.ag),
                        g: (5 === r.g.$ ? Pb : Rb)(f(Fb, t, s))
                    })))
                }
                return gt
            }), Qb = e(function(r, n, t) {
                var e = n
                  , u = s(_b, 1, Kb, r);
                if (u.b) {
                    var a = f(Xb, e, u.a);
                    return a.$ ? s(Zb, r, e, t) : ht(a.a)
                }
                return s(Zb, r, e, t)
            }), Wb = t(function(r, n) {
                var t = r
                  , e = _o(function(r) {
                    var n = r;
                    return m(t.bE, n.dP) > 0 && 0 > m(t.bE, n.bE)
                });
                return ri(n) || ri(e(n)) ? ht(f(ct, t, n)) : gt
            }), rd = f(Uu, Dl, Cl("^([a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~\\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?)*)$")), nd = function(r) {
                var n = r;
                return f(Ib, rd, n.d3) ? dt(x(n, {
                    g: Ub(q(n.d3, "mailto:" + Ob(n.d3)))
                })) : ft(n)
            }, td = e(function(r, n, t) {
                for (; ; ) {
                    if (!t.b)
                        return gt;
                    var e = t.a
                      , u = t.b;
                    if (n(e))
                        return ht(y(e, It(r), u));
                    r = f(ct, e, r),
                    n = n,
                    t = u
                }
            }), ed = t(function(r, n) {
                return s(td, A, r, n)
            }), ud = t(function(r, n) {
                return {
                    $: 6,
                    a: r,
                    b: n
                }
            }), ad = function(r) {
                return s(oa, !1, r.b, r)
            }, cd = t(function(r, n) {
                var t = n
                  , u = f(Ka, f(Ka, f(Ka, ja(e(function(r, n, t) {
                    return {
                        bP: n,
                        a0: t - r
                    }
                })), ad), Fs), ad)
                  , a = f(mi, u, f(ge, t.dP, r));
                return a.$ ? gt : ht({
                    a: t.dP,
                    a0: a.a.a0,
                    c: f(ud, 1, a.a.bP)
                })
            }), id = t(function(r, n) {
                return n.$ ? r(n.a) : n
            }), od = t(function() {
                return !1
            }), fd = t(function(r, n) {
                var t = n.c;
                return !t.$ && p(t.a ? n.a0 : n.a0 - 1, r.a0)
            }), sd = function(r) {
                switch (r.c.$) {
                case 1:
                case 2:
                    return !0;
                default:
                    return !1
                }
            }, ld = t(function(r, n) {
                var t = n.c;
                if (7 === t.$) {
                    var e = t.b
                      , u = r.c;
                    if (7 === u.$) {
                        var a = u.b;
                        return !(!p(t.a, u.a) || (p(e.aB, e.aH) || p(a.aB, a.aH)) && !f(Rl, 3, r.a0 + n.a0))
                    }
                    return !1
                }
                return !1
            }), bd = t(function(r, n) {
                var t, e, u = 10 === (e = n.c).$ ? q(!0, e.a ? n.a0 : n.a0 - 1) : q(!1, 0), a = u.a, c = u.b, i = 10 === (t = r.c).$ ? q(!0, t.a ? r.a0 : r.a0 - 1) : q(!1, 0);
                return i.a && a && p(i.b, c)
            }), dd = {
                $: 1
            }, vd = t(function(r, n) {
                return {
                    bE: r.a + r.a0,
                    j: A,
                    dP: r.a,
                    d3: "",
                    t: 0,
                    l: 0,
                    g: n
                }
            }), pd = a(function(r, n, t, e, u) {
                for (; ; ) {
                    if (!r.b)
                        return t;
                    var a = r.a
                      , c = r.b;
                    9 !== a.c.$ ? (r = c,
                    n = f(ct, a, n),
                    t = t,
                    e = e,
                    u = u) : (r = c,
                    n = n,
                    t = f(ct, f(vd, a, dd), t),
                    e = e,
                    u = u)
                }
            }), hd = t(function(r, n) {
                var t = r;
                return f(_o, function(r) {
                    return m(r.a, t.bE) > -1
                }, n)
            }), gd = c(function(r, n, t, e, u, a) {
                var c, i = a.c, o = f(id, nd, f(Ib, zb, (c = v(Ad, e, u, function(r) {
                    return r
                }, Db, a.a, r, A)).d3) ? dt(x(c, {
                    g: Ub(q(c.d3, Ob(c.d3)))
                })) : ft(c));
                if (1 === o.$) {
                    if (1 === n) {
                        var s = f(cd, u, o.a);
                        return s.$ ? gt : ht(q(f(ct, s.a, i), t))
                    }
                    return gt
                }
                return ht(q(i, f(ct, o.a, t)))
            }), md = a(function(r, n, t, e, u) {
                r: for (; ; ) {
                    if (!r.b)
                        return b(yd, It(n), A, t, e, u);
                    var a = r.a
                      , c = r.b
                      , i = a.c;
                    switch (i.$) {
                    case 0:
                        var o = i.a
                          , s = f(ed, fd(a), n);
                        if (s.$) {
                            r = c,
                            n = f(ct, a, n),
                            t = t,
                            e = e,
                            u = u;
                            continue r
                        }
                        var l = b($d, a, t, e, u, s.a);
                        r = c,
                        n = m = l.a,
                        t = $ = l.b,
                        e = e,
                        u = u;
                        continue r;
                    case 5:
                        o = i.a;
                        var v = function(r) {
                            return 4 === r.c.$
                        }
                          , p = f(ed, v, n);
                        if (p.$) {
                            r = c,
                            n = f(_o, f(_e, Ra, v), n),
                            t = t,
                            e = e,
                            u = u;
                            continue r
                        }
                        var h = d(gd, a, o, t, e, u, p.a);
                        if (h.$) {
                            r = c,
                            n = f(_o, f(_e, Ra, v), n),
                            t = t,
                            e = e,
                            u = u;
                            continue r
                        }
                        var g = h.a
                          , m = g.a
                          , $ = g.b;
                        r = c,
                        n = f(_o, f(_e, Ra, v), m),
                        t = $,
                        e = e,
                        u = u;
                        continue r;
                    default:
                        r = c,
                        n = f(ct, a, n),
                        t = t,
                        e = e,
                        u = u;
                        continue r
                    }
                }
            }), $d = a(function(r, n, t, e, u) {
                var a, c = u.a, i = u.c, o = (a = c.c).$ || a.a ? c : x(c, {
                    a: c.a + 1,
                    a0: c.a0 - 1
                });
                return q(i, f(ct, v(Ad, t, e, Hb, Db, o, r, A), n))
            }), wd = a(function(r, n, t, e, u) {
                r: for (; ; ) {
                    if (!r.b)
                        return b(kd, It(n), A, t, e, u);
                    var a = r.a
                      , c = r.b
                      , i = a.c;
                    if (7 !== i.$)
                        r = c,
                        n = f(ct, a, n),
                        t = t,
                        e = e,
                        u = u;
                    else {
                        var o = i.a
                          , s = i.b.aB
                          , l = i.b.aH;
                        if (p(s, l)) {
                            if (!l || "_" === o && 1 !== l) {
                                r = c,
                                n = n,
                                t = t,
                                e = e,
                                u = u;
                                continue r
                            }
                            var d = f(ed, ld(a), n);
                            if (d.$) {
                                r = c,
                                n = f(ct, a, n),
                                t = t,
                                e = e,
                                u = u;
                                continue r
                            }
                            var v = b(qd, e, u, a, c, d.a);
                            r = v.a,
                            n = v.c,
                            t = f(ct, v.b, t),
                            e = e,
                            u = u;
                            continue r
                        }
                        if (0 > m(s, l)) {
                            r = c,
                            n = f(ct, a, n),
                            t = t,
                            e = e,
                            u = u;
                            continue r
                        }
                        var h = f(ed, ld(a), n);
                        if (h.$) {
                            r = c,
                            n = n,
                            t = t,
                            e = e,
                            u = u;
                            continue r
                        }
                        var g = b(qd, e, u, a, c, h.a);
                        r = g.a,
                        n = g.c,
                        t = f(ct, g.b, t),
                        e = e,
                        u = u
                    }
                }
            }), qd = a(function(r, n, t, e, u) {
                var a = u.a
                  , c = u.b
                  , i = u.c
                  , o = a.a0 - t.a0
                  , s = o ? o > 0 ? {
                    aw: t,
                    ai: x(a, {
                        a: a.a + o,
                        a0: t.a0
                    }),
                    aG: f(ct, x(a, {
                        a0: o
                    }), i),
                    aM: e
                } : {
                    aw: x(t, {
                        a0: a.a0
                    }),
                    ai: a,
                    aG: i,
                    aM: f(ct, x(t, {
                        a: t.a + a.a0,
                        a0: -o
                    }), e)
                } : {
                    aw: t,
                    ai: a,
                    aG: i,
                    aM: e
                }
                  , l = v(Ad, r, n, function(r) {
                    return r
                }, {
                    $: 7,
                    a: s.ai.a0
                }, s.ai, s.aw, It(c));
                return y(s.aM, l, s.aG)
            }), yd = a(function(r, n, t, e, u) {
                r: for (; ; ) {
                    if (!r.b)
                        return b(Ed, It(n), A, t, e, u);
                    var a = r.a
                      , c = r.b
                      , i = a.c;
                    if (6 !== i.$)
                        r = c,
                        n = f(ct, a, n),
                        t = t,
                        e = e,
                        u = u;
                    else {
                        var o = i.b;
                        if (1 === i.a) {
                            r = c,
                            n = n,
                            t = f(ct, f(vd, a, Sb(o)), t),
                            e = e,
                            u = u;
                            continue r
                        }
                        var s = f(ed, od(o), c);
                        if (1 === s.$) {
                            r = c,
                            n = n,
                            t = f(ct, f(vd, a, Sb(o)), t),
                            e = e,
                            u = u;
                            continue r
                        }
                        var l = s.a
                          , d = l.a
                          , p = l.b
                          , h = l.c
                          , g = v(Ad, e, u, function(r) {
                            return r
                        }, Sb(o), a, d, p);
                        r = h,
                        n = n,
                        t = f(ct, g, t),
                        e = e,
                        u = u
                    }
                }
            }), Ed = a(function(r, n, t, e, u) {
                r: for (; ; ) {
                    if (!r.b)
                        return b(wd, It(n), A, t, e, u);
                    var a = r.a
                      , c = r.b;
                    if (3 !== a.c.$)
                        r = c,
                        n = f(ct, a, n),
                        t = t,
                        e = e,
                        u = u;
                    else {
                        var i = f(ed, sd, n);
                        if (i.$) {
                            r = c,
                            n = n,
                            t = t,
                            e = e,
                            u = u;
                            continue r
                        }
                        var o = d(xd, a, c, t, e, u, i.a);
                        if (o.$) {
                            r = c,
                            n = n,
                            t = t,
                            e = e,
                            u = u;
                            continue r
                        }
                        var s = o.a;
                        r = s.a,
                        n = s.c,
                        t = s.b,
                        e = e,
                        u = u
                    }
                }
            }), xd = c(function(r, n, t, e, u, a) {
                var c = a.a
                  , i = a.b
                  , o = a.c
                  , l = y(n, t, L(i, o))
                  , b = f(ge, r.a + 1, u)
                  , d = function(r) {
                    return 1 === r.c.$ ? x(r, {
                        c: xb(1)
                    }) : r
                }
                  , p = function(n) {
                    return v(Ad, e, u, function(r) {
                        return r
                    }, n ? Rb(q("", gt)) : Pb(q("", gt)), c, r, It(i))
                }
                  , h = c.c;
                switch (h.$) {
                case 2:
                    var g = p(!1)
                      , m = s(Qb, b, g, e);
                    if (1 === m.$)
                        return ht(l);
                    var $ = f(Wb, k = m.a, t);
                    if ($.$)
                        return ht(l);
                    var w = $.a;
                    return ht(y(f(hd, k, n), w, o));
                case 1:
                    if (h.a)
                        return ht(l);
                    g = p(!0);
                    var E = s(Qb, b, g, e);
                    if (1 === E.$)
                        return ht(l);
                    var k, A = f(Wb, k = E.a, t);
                    return A.$ ? ht(l) : (w = A.a,
                    ht(y(f(hd, k, n), w, f(Ae, d, o))));
                default:
                    return gt
                }
            }), kd = a(function(r, n, t, e, u) {
                r: for (; ; ) {
                    if (!r.b)
                        return b(pd, It(n), A, t, e, u);
                    var a = r.a
                      , c = r.b;
                    if (10 !== a.c.$)
                        r = c,
                        n = f(ct, a, n),
                        t = t,
                        e = e,
                        u = u;
                    else {
                        var i = f(ed, bd(a), n);
                        if (i.$) {
                            r = c,
                            n = f(ct, a, n),
                            t = t,
                            e = e,
                            u = u;
                            continue r
                        }
                        var o = b(Ld, a, t, e, u, i.a);
                        r = c,
                        n = o.a,
                        t = o.b,
                        e = e,
                        u = u
                    }
                }
            }), Ld = a(function(r, n, t, e, u) {
                var a, c = u.a, i = u.c, o = 10 !== (a = c.c).$ || a.a ? c : x(c, {
                    a: c.a + 1,
                    a0: c.a0 - 1
                });
                return q(i, f(ct, v(Ad, t, e, Hb, Bb, o, r, A), n))
            }), Ad = i(function(r, n, t, e, u, a, c) {
                var i = u.a + u.a0
                  , o = a.a
                  , b = t(s(he, i, o, n))
                  , d = u.a
                  , v = a.a + a.a0
                  , p = {
                    bE: v,
                    j: A,
                    dP: d,
                    d3: b,
                    t: o,
                    l: i,
                    g: e
                };
                return {
                    bE: v,
                    j: f(Ae, function(r) {
                        return f(yl, p, r)
                    }, l(Nd, c, A, r, n)),
                    dP: d,
                    d3: b,
                    t: o,
                    l: i,
                    g: e
                }
            }), Nd = u(function(r, n, t, e) {
                return b(md, r, A, n, t, e)
            }), Td = t(function(r, n) {
                var t = Qf(n)
                  , e = function(r) {
                    return f(Cb, f(Wl, cb, f(rb, ub, r)), f(Cb, f(Wl, eb, f(rb, Xl, r)), f(Cb, f(Wl, mb, f(rb, hb, r)), f(Cb, f(Wl, qb, f(rb, $b, r)), f(Cb, f(Wl, kb, f(rb, yb, r)), f(Cb, f(Wl, Ab, f(rb, Nb, r)), f(Cb, (n = r,
                    f(Wl, f(bb, "_", n), f(rb, Tb, n))), f(Cb, function(r) {
                        return f(Wl, f(bb, "*", r), f(rb, ib, r))
                    }(r), f(Wl, pb, f(rb, db, r))))))))));
                    var n
                }(t);
                return ql(s(Yl, t, A, kl(l(Nd, e, A, r, t))))
            }), Cd = mc(C([Qa(f(Ja, " ", Fa(" "))), Qa(f(Ja, ">", Fa(">"))), f(Aa, f(Aa, f(wa, Rt, Fa("Alpha")), Ea(function(r) {
                return Ut(r) || "-" === r
            })), mc(C([Qa(f(Ja, ":", Fa(":"))), Qa(f(Ja, "@", Fa("@"))), Qa(f(Ja, "\\", Fa("\\"))), Qa(f(Ja, "+", Fa("+"))), Qa(f(Ja, ".", Fa(".")))])))])), Dd = la(f(Ca, t(function(r) {
                return mf(r)
            }), f(Aa, f(Aa, f(Aa, Qa(f(Ja, "<", Fa("<"))), Cd), jf), _f))), Sd = t(function(r, n) {
                return {
                    cN: n,
                    dd: r
                }
            }), Pd = {
                au: "`",
                aA: 0,
                aL: f(Ja, "`", Fa("a '`'"))
            }, Rd = function(r) {
                switch (r) {
                case 1:
                    return ja(0);
                case 2:
                    return ja(1);
                case 3:
                    return ja(2);
                case 4:
                    return ja(3);
                default:
                    return Ua(Fa("Fenced code blocks should be indented no more than 3 spaces"))
                }
            }, Bd = e(function(r, n, t) {
                for (; ; ) {
                    if (0 >= n)
                        return r;
                    r = f(ct, t, r),
                    n -= 1,
                    t = t
                }
            }), Ud = t(function(r, n) {
                return s(Bd, A, r, n)
            }), Id = t(function(r, n) {
                var e = s(kt, t(function(r, n) {
                    return f(Aa, n, r)
                }), ja(0), f(Ud, r, Qa(n.aL)));
                return f(Ca, t(function(r) {
                    return q(n, pe(r))
                }), f(Aa, e, Ea(Yt(n.au))))
            }), jd = function(r) {
                return s(oa, !1, r.bv, r)
            }, Od = {
                au: "~",
                aA: 1,
                aL: f(Ja, "~", Fa("a `~`"))
            }, zd = Qa(Rf), _d = mc(C([f(Aa, f(Aa, zd, mc(C([zd, ja(0)]))), mc(C([zd, ja(0)]))), ja(0)])), Vd = f(Ka, f(Ka, f(Aa, ja(t(function(r, n) {
                return {
                    av: n.a,
                    a_: r,
                    a0: n.b
                }
            })), _d), f(fa, Rd, jd)), mc(C([f(Id, 3, Pd), f(Id, 3, Od)]))), Gd = {
                $: 10
            }, Hd = Yt(" "), Md = t(function(r, n) {
                return f(Aa, f(Aa, f(Aa, f(Aa, ja(0), _d), f(Id, r, n)), Ea(Hd)), _f)
            }), Fd = t(function(r, n) {
                var e = f(Ud, r, n);
                if (e.b) {
                    var u = e.a
                      , a = e.b;
                    return s(kt, t(function(r, n) {
                        return mc(C([f(Aa, r, n), ja(0)]))
                    }), mc(C([u, ja(0)])), a)
                }
                return ja(0)
            }), Jd = function(r) {
                return s(oa, !1, r.cq, r)
            }, Zd = function(r) {
                var n, u = r.a, a = r.b;
                return mc(C([f(Aa, ja(bc(a)), Of(Gd)), f(Ca, t(function(r) {
                    return dc(q(u, L(a, r)))
                }), Df), la(f(Aa, ja(bc(a)), f(Md, u.a0, u.av))), f(Ka, f(Ka, f(Ka, ja(e(function(r, n, t) {
                    return dc(q(u, L(a, s(he, r, n, t))))
                })), (n = u.a_,
                f(Ka, f(Aa, ja(de), f(Fd, n, zd)), f(Aa, f(Aa, ad, jf), _f)))), ad), Jd)]))
            }, Kd = f(fa, function(r) {
                return f(Ka, f(Ka, ja(Sd), f(Aa, (n = r.av,
                f(Ca, t(function(r) {
                    var n = Qf(r);
                    return "" === n ? gt : ht(n)
                }), Ea(n.aA ? f(_e, Ra, If) : function(r) {
                    return "`" !== r && !If(r)
                }
                ))), _f)), function(r) {
                    return f(lc, q(r, ""), Zd)
                }(r));
                var n
            }, Vd), Yd = t(function(r, n) {
                return 1 > r ? n : s(he, 0, -r, n)
            }), Xd = rr, Qd = function(r) {
                return f(Xd, "#", r) ? Qd(f(Yd, 1, r)) : r
            }, Wd = f(Ja, "#", Fa("a `#`")), rv = Ea(function(r) {
                return " " === r || "\n" === r || "\r" === r
            }), nv = f(Ka, f(Ka, f(Aa, f(Aa, ja(Gf), f(fa, function(r) {
                var n = pe(r);
                return 4 > n ? ja(n) : Ua(Fa("heading with < 4 spaces in front"))
            }, Da(rv))), Bf(Wd)), f(fa, function(r) {
                var n = pe(r) + 1;
                return 7 > n ? ja(n) : Ua(Fa("heading with < 7 #'s"))
            }, Da(Ea(function(r) {
                return "#" === r
            })))), mc(C([f(Aa, ja(""), Bf(Cf)), f(Ka, f(Aa, ja(de), mc(C([Bf(Rf), Bf(Qs)]))), f(Ca, t(function(r) {
                return n = Qf(r),
                t = Qd(n),
                f(Xd, " ", t) || me(t) ? t.replace(/\s+$/, "") : n;
                var n, t
            }), jf))]))), tv = f(Ja, ">", Fa("a `>`")), ev = e(function(r, n, t) {
                return {
                    bv: n,
                    d: t,
                    dL: r
                }
            }), uv = t(function(r, n) {
                return {
                    bv: n.bv,
                    d: r,
                    e: n.e,
                    b: n.b,
                    dL: n.dL,
                    cq: n.cq
                }
            }), av = t(function(r, n) {
                var t = n;
                return function(n) {
                    var e = t(f(uv, f(ct, s(ev, n.dL, n.bv, r), n.d), n));
                    return e.$ ? e : s(oa, e.a, e.b, f(uv, n.d, e.c))
                }
            }), cv = function(r) {
                switch (r) {
                case " ":
                case "\n":
                case "\t":
                case "\v":
                case "\f":
                case "\r":
                    return !0;
                default:
                    return !1
                }
            }, iv = f(Ja, "<", Fa("a `<`")), ov = f(av, "link destination", mc(C([f(Ka, f(Aa, ja(zu), Bf(iv)), f(Aa, Da(Ma(tv)), Bf(tv))), Da(al(f(_e, Ra, cv)))]))), fv = f(Ja, "]", Fa("a `]`")), sv = f(Ja, "[", Fa("a `[`")), lv = f(Ka, f(Aa, ja(Mb), Bf(sv)), f(Aa, Da(Ma(fv)), Bf(f(Ja, "]:", Fa("]:"))))), bv = f(Ja, '"', Fa("a double quote")), dv = function(r) {
                return f(ve, "\n\n", r) ? Ua(Fa("no blank line")) : ja(r)
            }, vv = f(Aa, Ea(function(r) {
                return !If(r) && cv(r)
            }), _f), pv = f(Aa, f(wa, cv, Fa("Required whitespace")), Ea(cv)), hv = f(Ja, "'", Fa("a single quote")), gv = (Zs = f(Ka, f(Aa, ja(ht), Bf(hv)), f(Aa, f(Aa, f(fa, dv, Da(Ma(hv))), Bf(hv)), vv)),
            Ks = f(Ka, f(Aa, ja(ht), Bf(bv)), f(Aa, f(Aa, f(fa, dv, Da(Ma(bv))), Bf(bv)), vv)),
            f(av, "title", mc(C([la(f(Ka, f(Aa, ja(de), pv), mc(C([Ks, Zs, ja(gt)])))), f(Aa, ja(gt), vv)])))), mv = f(av, "link reference definition", f(Ka, f(Ka, f(Ka, f(Aa, ja(e(function(r, n, t) {
                return q(r, {
                    bB: n,
                    cy: t
                })
            })), _d), f(Aa, f(Aa, f(Aa, lv, Ea(Nf)), mc(C([Df, ja(0)]))), Ea(Nf))), ov), gv)), $v = Ea(Nf), wv = function(r) {
                var n = Yf(Nc(r));
                return f(Aa, f(Aa, f(Aa, f(Aa, f(Aa, f(Aa, f(Aa, ja(0), n), $v), n), $v), n), Ea(function(n) {
                    return p(n, r) || Nf(n)
                })), _f)
            }, qv = mc(C([wv("-"), wv("*"), wv("_")])), yv = mc(C([f(Ka, f(Aa, f(Aa, f(Aa, ja(de), zd), mc(C([zd, ja(0)]))), mc(C([zd, ja(0)]))), qv), qv])), Ev = t(function(r, n) {
                return {
                    $: 12,
                    a: r,
                    b: n
                }
            }), xv = f(Ja, "=", Fa("a `=`")), kv = f(Ja, "-", Fa("a `-`")), Lv = (Ys = e(function(r, n, t) {
                return f(Aa, f(Aa, ja(r), Qa(n)), Ea(Yt(t)))
            }),
            f(Ca, t(function(r, n) {
                return f(Ev, n, r)
            }), f(Ka, f(Aa, ja(de), _d), f(Aa, f(Aa, mc(C([s(Ys, 0, xv, "="), s(Ys, 1, kv, "-")])), Ea(Nf)), _f)))), Av = function(r) {
                return {
                    $: 9,
                    a: r
                }
            }, Nv = Ea(Nf), Tv = function(r) {
                return mc(C([f(wa, r, Ba("Character not found")), ja(0)]))
            }, Cv = function(r) {
                return mc(C([la(f(nc, function() {
                    return bc(r)
                }, Yf("|\n"))), f(nc, function() {
                    return bc(r)
                }, Yf("\n")), f(nc, function() {
                    return bc(r)
                }, Of(Fa("end"))), la(f(Aa, f(Aa, ja(bc(r)), Yf("|")), Of(Fa("end")))), f(Ka, f(Aa, f(Aa, ja(function(n) {
                    return dc(f(ct, n, r))
                }), (n = r,
                ri(n) ? mc(C([Yf("|"), ja(0)])) : Yf("|"))), Nv), f(Aa, Da(f(Aa, f(Aa, f(Aa, ja(0), Tv(function(r) {
                    return ":" === r
                })), al(function(r) {
                    return "-" === r
                })), Tv(function(r) {
                    return ":" === r
                }))), Nv))]));
                var n
            }, Dv = function(r) {
                var n = q(f(qe, ":", r), f(Xd, ":", r));
                return n.a ? ht(n.b ? 2 : 0) : n.b ? ht(1) : gt
            }, Sv = f(nc, Av, f(fa, function(r) {
                var n = r.a.cB
                  , t = r.b;
                return ri(t) ? Ua(Fa("Must have at least one column in delimiter row.")) : 1 !== Lt(t) || f(qe, "|", n) && f(Xd, "|", n) ? ja(r) : Ua(Ba("Tables with a single column must have pipes at the start and end of the delimiter row to avoid ambiguity."))
            }, f(Ca, t(function(r, n) {
                return f(Jf, {
                    cb: r,
                    cB: Qf(r)
                }, f(Ae, Dv, It(n)))
            }), f(lc, A, Cv)))), Pv = t(function(r, n) {
                return !f(uc, f(_e, Ra, r), n)
            }), Rv = e(function(r, n, t) {
                r: for (; ; ) {
                    if (r > 0) {
                        if (n.b) {
                            var e = n.a;
                            r -= 1,
                            n = n.b,
                            t = f(ct, e, t);
                            continue r
                        }
                        return t
                    }
                    return t
                }
            }), Bv = t(function(r, n) {
                return It(s(Rv, r, n, A))
            }), Uv = e(function(r, n, t) {
                if (n > 0) {
                    var e = q(n, t);
                    r: for (; ; ) {
                        n: for (; ; ) {
                            if (!e.b.b)
                                return t;
                            if (!e.b.b.b) {
                                if (1 === e.a)
                                    break r;
                                break n
                            }
                            switch (e.a) {
                            case 1:
                                break r;
                            case 2:
                                var u = e.b;
                                return C([u.a, u.b.a]);
                            case 3:
                                if (e.b.b.b.b) {
                                    var a = e.b
                                      , c = a.b;
                                    return C([a.a, c.a, c.b.a])
                                }
                                break n;
                            default:
                                if (e.b.b.b.b && e.b.b.b.b.b) {
                                    var i = e.b
                                      , o = i.b
                                      , l = o.b
                                      , b = l.b
                                      , d = b.b;
                                    return f(ct, i.a, f(ct, o.a, f(ct, l.a, f(ct, b.a, r > 1e3 ? f(Bv, n - 4, d) : s(Uv, r + 1, n - 4, d)))))
                                }
                                break n
                            }
                        }
                        return t
                    }
                    return C([e.b.a])
                }
                return A
            }), Iv = t(function(r, n) {
                return s(Uv, 0, r, n)
            }), jv = t(function(r, n) {
                var t = Lt(n);
                switch (f(wu, r, t)) {
                case 0:
                    return f(Iv, r, n);
                case 1:
                    return n;
                default:
                    return L(n, f(Ud, r - t, ""))
                }
            }), Ov = function(r) {
                var n, t = r.a, e = r.b;
                return f(nc, function(r) {
                    return Mf(f(Ff, t, L(e, C([r]))))
                }, (n = Lt(t),
                f(fa, function(r) {
                    return ri(r) || f(Pv, me, r) ? Ua(Ba("A line must have at least one column")) : ja(f(jv, n, r))
                }, rs)))
            }, zv = function(r) {
                return {
                    $: 3,
                    a: r
                }
            }, _v = f(Ja, "*", Fa("a `*`")), Vv = f(Ja, "+", Fa("a `+`")), Gv = mc(C([f(Aa, ja(kv), Bf(kv)), f(Aa, ja(Vv), Bf(Vv)), f(Aa, ja(_v), Bf(_v))])), Hv = function(r) {
                return {
                    $: 1,
                    a: r
                }
            }, Mv = t(function(r, n) {
                return {
                    $: 0,
                    a: r,
                    b: n
                }
            }), Fv = mc(C([f(Aa, ja(1), Bf(f(Ja, "[x] ", ds("[x] ")))), f(Aa, ja(1), Bf(f(Ja, "[X] ", ds("[X] ")))), f(Aa, ja(0), Bf(f(Ja, "[ ] ", ds("[ ] "))))])), Jv = f(Ka, mc(C([f(Ka, ja(Mv), f(Aa, Fv, Ea(Nf))), ja(Hv)])), f(Aa, Da(jf), _f)), Zv = mc(C([f(Ka, f(Aa, ja(de), la(al(Nf))), Jv), f(Aa, ja(Hv("")), Df)])), Kv = e(function(r, n, t) {
                return mc(C([f(nc, function(r) {
                    return dc(f(ct, r, t))
                }, r), ja(bc(f(ct, n, It(t))))]))
            }), Yv = (Xs = t(function(r, n) {
                return f(lc, A, f(Kv, function(r) {
                    return f(Ka, f(Aa, ja(de), la(Bf(r))), Zv)
                }(r), n))
            }),
            f(fa, de, f(Ka, f(Ka, ja(Xs), f(Aa, la(Gv), al(Nf))), Jv))), Xv = f(nc, f(Lc, Ae(function(r) {
                return r.$ ? {
                    cN: r.a,
                    bk: gt
                } : {
                    cN: r.b,
                    bk: ht(1 === r.a)
                }
            }), zv), Yv), Qv = t(function(r, n) {
                switch (r.$) {
                case 0:
                    var t = r.a
                      , e = r.b
                      , u = tp(r.c);
                    if (u.$)
                        return ft(u.a);
                    var a = sf(s(df, t, e, u.a));
                    return dt(f(ct, a, n));
                case 1:
                    var c = up(r.a);
                    return c.$ ? ft(Fa(f(yt, "\n", f(Ae, cs, c.a)))) : dt(L(It(c.a), n));
                case 2:
                    return dt(f(ct, sf(lf(r.a)), n));
                case 3:
                    return dt(f(ct, sf(tf(r.a)), n));
                case 4:
                    return dt(f(ct, sf(yf(r.a)), n));
                default:
                    return dt(f(ct, sf(f(bf, r.a, r.b)), n))
                }
            }), Wv = t(function(r, n) {
                var t = n
                  , e = Ec(f(Ae, nl(function(r) {
                    return q(r.bB, r.cy)
                }), r));
                return f(Ae, rp, f(Td, e, t))
            }), rp = function(r) {
                switch (r.$) {
                case 0:
                    return {
                        $: 7,
                        a: r.a
                    };
                case 1:
                    return cf;
                case 2:
                    return {
                        $: 6,
                        a: r.a
                    };
                case 3:
                    return s(hf, r.a, r.b, f(Ae, rp, n = r.c));
                case 4:
                    return s(vf, r.a, r.b, f(Ae, rp, n = r.c));
                case 5:
                    return {
                        $: 0,
                        a: np(r.a)
                    };
                case 6:
                    var n = r.b;
                    switch (r.a) {
                    case 1:
                        return {
                            $: 3,
                            a: f(Ae, rp, n)
                        };
                    case 2:
                    default:
                        return function(r) {
                            return {
                                $: 4,
                                a: r
                            }
                        }(f(Ae, rp, n))
                    }
                default:
                    return {
                        $: 5,
                        a: f(Ae, rp, n = r.a)
                    }
                }
            }, np = function(r) {
                switch (r.$) {
                case 1:
                    return lf("TODO this never happens, but use types to drop this case.");
                case 0:
                    return s(df, r.a, r.b, f(as, function(r) {
                        return 1 === r.$ ? bp(r.a) : C([sf(np(r))])
                    }, r.c));
                case 2:
                    return lf(r.a);
                case 3:
                    return tf(r.a);
                case 4:
                    return yf(r.a);
                default:
                    return f(bf, r.a, r.b)
                }
            }, tp = function(r) {
                return f(ep, r, A)
            }, ep = t(function(r, n) {
                for (; ; ) {
                    if (!r.b)
                        return dt(It(n));
                    var t = r.b
                      , e = f(Qv, r.a, n);
                    if (e.$)
                        return ft(e.a);
                    r = t,
                    n = e.a
                }
            }), up = function(r) {
                var n = f(mi, f(Aa, gp(), zf), r);
                if (1 === n.$)
                    return ft(n.a);
                var t = ap(n.a);
                return 1 === t.$ ? f(mi, Ua(t.a), "") : dt(f(_o, function(r) {
                    return !(5 === r.$ && !r.a.b)
                }, t.a))
            }, ap = function(r) {
                return s(cp, r, r.H, A)
            }, cp = e(function(r, n, t) {
                r: for (; ; ) {
                    if (!n.b)
                        return dt(t);
                    var e = n.b
                      , u = f(op, r.P, n.a);
                    switch (u.$) {
                    case 1:
                        r = r,
                        n = e,
                        t = f(ct, u.a, t);
                        continue r;
                    case 0:
                        r = r,
                        n = e,
                        t = t;
                        continue r;
                    default:
                        return ft(u.a)
                    }
                }
            }), ip = t(function(r, n) {
                return f(Ae, function(n) {
                    var t = n.as;
                    return s(fp, r, function(r) {
                        return {
                            as: t,
                            X: r
                        }
                    }, n.X)
                }, n)
            }), op = t(function(r, n) {
                switch (n.$) {
                case 0:
                    var t = n.b
                      , e = function(r) {
                        switch (r) {
                        case 1:
                            return dt(0);
                        case 2:
                            return dt(1);
                        case 3:
                            return dt(2);
                        case 4:
                            return dt(3);
                        case 5:
                            return dt(4);
                        case 6:
                            return dt(5);
                        default:
                            return ft(Fa("A heading with 1 to 6 #'s, but found " + qt(r)))
                        }
                    }(n.a);
                    return e.$ ? pf(e.a) : qf(f(of, e.a, f(Wv, r, t)));
                case 1:
                    return qf(wf(f(Wv, r, t = n.a)));
                case 2:
                    return qf(sf(n.a));
                case 3:
                    return qf({
                        $: 1,
                        a: f(Ae, function(n) {
                            var t, e = (t = n.bk).$ ? 0 : t.a ? 2 : 1;
                            return f(gf, e, s(fp, r, de, n.cN))
                        }, n.a)
                    });
                case 4:
                    return t = n.b,
                    qf(f($f, n.a, f(Ae, f(fp, r, de), t)));
                case 5:
                    return qf(ef(n.a));
                case 7:
                    return qf(xf);
                case 10:
                    return af;
                case 11:
                    var u = n.a
                      , a = f(mi, gp(), u);
                    if (a.$)
                        return pf(Ba(f(yt, "\n", f(Ae, cs, a.a))));
                    var c = ap(a.a);
                    return c.$ ? pf(c.a) : qf({
                        $: 3,
                        a: c.a
                    });
                case 6:
                    return qf(ef({
                        cN: n.a,
                        dd: gt
                    }));
                case 8:
                    var i = n.a
                      , o = i.b;
                    return qf(f(Ef, f(ip, r, i.a), f(sp, r, o)));
                case 9:
                    return qf(wf(f(Wv, r, n.a.a.cb)));
                default:
                    return qf(wf(f(Wv, r, n.b)))
                }
            }), fp = e(function(r, n, t) {
                return n(f(Wv, r, t))
            }), sp = t(function(r, n) {
                return f(Ae, function(n) {
                    return f(Ae, function(n) {
                        return s(fp, r, de, n)
                    }, n)
                }, n)
            }), lp = function(r) {
                return mc(C([f(nc, function() {
                    return bc(r)
                }, zf), f(nc, function(n) {
                    return dc(f(Lf, r, n))
                }, la(mv)), f(nc, function(n) {
                    return dc(f(ts, r, n))
                }, function() {
                    var n = r.H;
                    r: for (; n.b; )
                        switch (n.a.$) {
                        case 1:
                            return pp();
                        case 8:
                            var t = n.a.a;
                            return mc(C([vp(), Ov(t)]));
                        default:
                            break r
                        }
                    return vp()
                }()), f(nc, function(n) {
                    return dc(f(ts, r, n))
                }, el)]))
            }, bp = function(r) {
                return f(nu, A, up(r))
            }, dp = function(r) {
                switch (r.$) {
                case 1:
                    return ja(mf(r.a));
                case 0:
                    var n = r.a
                      , t = r.b
                      , e = tp(r.c);
                    return e.$ ? Ua(e.a) : ja(ff(s(df, n, t, e.a)));
                case 2:
                    return ja(ff(lf(r.a)));
                case 3:
                    return ja(ff(tf(r.a)));
                case 4:
                    return ja(ff(yf(r.a)));
                default:
                    return ja(ff(f(bf, r.a, r.b)))
                }
            };
            function vp() {
                return mc(C([Dd, Sf, Vf, f(nc, uf, la(Kd)), rl, f(nc, function() {
                    return kf
                }, la(yv)), Xv, vl(!1), la(nv), hp()]))
            }
            function pp() {
                return mc(C([Dd, Sf, Vf, f(nc, uf, la(Kd)), la(Lv), f(nc, function() {
                    return kf
                }, la(yv)), Xv, vl(!0), la(nv), hp(), la(Sv)]))
            }
            function hp() {
                return f(fa, dp, Fs)
            }
            function gp() {
                return f(lc, {
                    P: A,
                    H: A
                }, lp)
            }
            var mp = vp();
            vp = function() {
                return mp
            }
            ;
            var $p = pp();
            pp = function() {
                return $p
            }
            ;
            var wp = hp();
            hp = function() {
                return wp
            }
            ;
            var qp = gp();
            gp = function() {
                return qp
            }
            ;
            var yp, Ep, xp, kp, Lp, Ap, Np, Tp = e(function(r, n, t) {
                if (1 === n.$)
                    return ft(n.a);
                var e = n.a;
                return 1 === t.$ ? ft(t.a) : dt(f(r, e, t.a))
            }), Cp = f(Le, Tp(ct), dt(A)), Dp = t(function(r, n) {
                return n.$ ? ft(n.a) : r(n.a)
            }), Sp = t(function(r, n) {
                r: for (; ; ) {
                    if (r > 0) {
                        if (n.b) {
                            r -= 1,
                            n = n.b;
                            continue r
                        }
                        return n
                    }
                    return n
                }
            }), Pp = e(function(r, n, t) {
                r: for (; ; ) {
                    if (!t.b)
                        return n;
                    var e = t.a
                      , u = t.b;
                    switch (e.$) {
                    case 0:
                        var a = e.a;
                        if (a.$) {
                            i = r,
                            o = f(r, e, n),
                            r = i,
                            n = o,
                            t = u;
                            continue r
                        }
                        var c = a.c
                          , i = r
                          , o = f(r, e, n);
                        r = i,
                        n = o,
                        t = L(c, u);
                        continue r;
                    case 1:
                    case 2:
                        i = r,
                        o = f(r, e, n),
                        r = i,
                        n = o,
                        t = u;
                        continue r;
                    case 3:
                        var s = e.a;
                        i = r,
                        o = f(r, e, n),
                        r = i,
                        n = o,
                        t = L(s, u);
                        continue r;
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    default:
                        i = r,
                        o = f(r, e, n),
                        r = i,
                        n = o,
                        t = u;
                        continue r
                    }
                }
            }), Rp = function(r) {
                switch (r.$) {
                case 5:
                    return Bp(r.a);
                case 0:
                    var n = r.a;
                    if (n.$)
                        return "";
                    var e = n.c;
                    return s(Pp, t(function(r, n) {
                        return L(n, Rp(r))
                    }), "", e);
                case 1:
                    return f(yt, "\n", f(Ae, function(r) {
                        return Bp(r.b)
                    }, r.a));
                case 2:
                    return f(yt, "\n", f(Ae, Bp, r.b));
                case 3:
                    return f(yt, "\n", f(Ae, Rp, e = r.a));
                case 4:
                    return Bp(r.b);
                case 6:
                    var u = r.b;
                    return f(yt, "\n", us(C([f(Ae, Bp, f(Ae, function(r) {
                        return r.X
                    }, r.a)), us(f(Ae, Ae(Bp), u))])));
                case 7:
                    return r.a.cN;
                default:
                    return ""
                }
            }, Bp = function(r) {
                return s(kt, Up, "", r)
            }, Up = t(function(r, n) {
                switch (r.$) {
                case 7:
                    return L(n, r.a);
                case 8:
                    return n + " ";
                case 6:
                    return L(n, r.a);
                case 1:
                case 2:
                    return L(n, Bp(r.c));
                case 0:
                    var e = r.a;
                    if (e.$)
                        return n;
                    var u = e.c;
                    return s(Pp, t(function(r, n) {
                        return L(n, Rp(r))
                    }), n, u);
                case 4:
                case 3:
                default:
                    return L(n, Bp(r.a))
                }
            }), Ip = a(function(r, n, t, e, u) {
                var a = e;
                return f(Dp, function(e) {
                    return f(Sc, function(r) {
                        return r(e)
                    }, s(a, r, n, t))
                }, Cp(u))
            }), jp = function(r) {
                return C([r])
            }, Op = e(function(r, n, t) {
                var e = f(Gp, r, n);
                return e.$ ? t : f(ct, e.a, t)
            }), zp = t(function(r, n) {
                return f(Wl, _p(r), n)
            }), _p = function(r) {
                return function(n) {
                    switch (n.$) {
                    case 4:
                        var e = n.a;
                        return ht(f(Sc, function(n) {
                            return r.c4({
                                cR: n,
                                de: e,
                                dD: Bp(u)
                            })
                        }, f(Hp, r, u = n.b)));
                    case 5:
                        var u;
                        return ht(f(Sc, r.dz, f(Hp, r, u = n.a)));
                    case 0:
                        var a = n.a;
                        return a.$ ? gt : ht(l(Vp, r, a.a, a.b, a.c));
                    case 1:
                        return ht(f(Sc, r.eb, Cp(f(Ae, function(n) {
                            var t = n.a;
                            return f(Sc, function(r) {
                                return f(gf, t, r)
                            }, f(Hp, r, n.b))
                        }, c = n.a))));
                    case 2:
                        var c = n.b;
                        return ht(f(Sc, r.dy(n.a), Cp(f(Ae, Hp(r), c))));
                    case 7:
                        return ht(dt(r.cS(n.a)));
                    case 8:
                        return ht(dt(r.d4));
                    case 3:
                        return ht(f(Sc, r.cM, Cp(f(zp, r, n.a))));
                    default:
                        var i = n.a
                          , o = n.b
                          , b = Cp(f(Ae, function(n) {
                            var t = n.X;
                            return f(Sc, Xe(n.as), f(Hp, r, t))
                        }, i))
                          , d = f(Sc, function(n) {
                            return r.d_(jp(r.d0(f(Ae, function(n) {
                                return f(r.d$, n.a, n.b)
                            }, n))))
                        }, b)
                          , v = function(n) {
                            return f(Sc, r.d0, f(Sc, Ct(t(function(n, t) {
                                return f(r.dZ, f(nf, function(r) {
                                    return r.as
                                }, Vb(f(Sp, n, i))), t)
                            })), Cp(f(Ae, Hp(r), n))))
                        }
                          , p = Cp(f(Ae, v, o));
                        return ht(s(Tp, t(function(n, t) {
                            return r.dX(f(ct, n, function(n) {
                                return ri(n) ? A : C([r.dY(n)])
                            }(t)))
                        }), d, p))
                    }
                }
            }, Vp = u(function(r, n, t, e) {
                return b(Ip, n, t, e, r.c7, f(zp, r, e))
            }), Gp = t(function(r, n) {
                switch (n.$) {
                case 4:
                    return ht(f(Sc, r.dU, f(Hp, r, n.a)));
                case 3:
                    return ht(f(Sc, r.cZ, f(Hp, r, n.a)));
                case 5:
                    return ht(f(Sc, r.dT, f(Hp, r, n.a)));
                case 2:
                    var t = n.a
                      , e = n.b;
                    return ht(dt(r.c8({
                        bo: Bp(n.c),
                        cq: t,
                        cy: e
                    })));
                case 7:
                    return ht(dt(r.d3(n.a)));
                case 6:
                    return ht(dt(r.cT(n.a)));
                case 1:
                    var u = n.a;
                    return e = n.b,
                    ht(f(Dp, function(n) {
                        return dt(f(r.df, {
                            bB: u,
                            cy: e
                        }, n))
                    }, f(Hp, r, n.c)));
                case 8:
                    return ht(dt(r.c2));
                default:
                    var a = n.a;
                    return a.$ ? gt : ht(l(Vp, r, a.a, a.b, a.c))
                }
            }), Hp = t(function(r, n) {
                return Cp(s(Le, Op(r), A, n))
            }), Mp = t(function(r, n) {
                return Cp(f(zp, r, n))
            }), Fp = e(function(r, n, t) {
                return {
                    $: 0,
                    a: r,
                    b: n,
                    c: t
                }
            }), Jp = e(function(r, n, t) {
                return s(Fp, r, n, {
                    $: 1,
                    a: t
                })
            }), Zp = Jp("a"), Kp = t(function(r, n) {
                return {
                    $: 1,
                    a: r,
                    b: n
                }
            }), Yp = Kp, Xp = function(r) {
                return f(Yp, "alt", r)
            }, Qp = Jp("blockquote"), Wp = {
                $: 0
            }, rh = e(function(r, n) {
                return s(Fp, r, n, Wp)
            }), nh = rh("br"), th = Jp("code"), eh = Jp("del"), uh = Jp("em"), ah = Jp("h1"), ch = Jp("h2"), ih = Jp("h3"), oh = Jp("h4"), fh = Jp("h5"), sh = Jp("h6"), lh = rh("hr"), bh = function(r) {
                return f(Yp, "href", r)
            }, dh = rh("img"), vh = Jp("li"), ph = Jp("ol"), hh = t(function(r, n) {
                return 1 === r.$ ? n.$ ? ft(f(ct, r.a, n.a)) : dt(n.a) : dt(r.a)
            }), gh = t(function(r, n) {
                return ri(n) ? "<" + r + ">" : "<" + r + " " + function(r) {
                    return f(yt, " ", f(Ae, function(r) {
                        return r.ah + '="' + r.aN + '"'
                    }, r))
                }(n) + ">"
            }), mh = Jp("p"), $h = Jp("pre"), wh = function(r) {
                return f(Yp, "src", r)
            }, qh = Jp("strong"), yh = Jp("table"), Eh = Jp("tbody"), xh = Jp("td"), kh = function(r) {
                return {
                    $: 1,
                    a: r
                }
            }, Lh = Jp("th"), Ah = Jp("thead"), Nh = Jp("tr"), Th = Jp("ul"), Ch = function(r) {
                return C(r.trim().split(/\s+/g))
            }, Dh = {
                cM: Qp(A),
                cS: function(r) {
                    var n, t, e = r.cN, u = !(t = f(uu, Ch, r.dd)).$ && t.a.b ? C([(n = "language-" + t.a.a,
                    f(Yp, "className", n))]) : A;
                    return f($h, A, C([f(th, u, C([kh(e)]))]))
                },
                cT: function(r) {
                    return f(th, A, C([kh(r)]))
                },
                cZ: function(r) {
                    return f(uh, A, r)
                },
                c2: f(nh, A, A),
                c4: function(r) {
                    var n = r.cR;
                    switch (r.de) {
                    case 0:
                        return f(ah, A, n);
                    case 1:
                        return f(ch, A, n);
                    case 2:
                        return f(ih, A, n);
                    case 3:
                        return f(oh, A, n);
                    case 4:
                        return f(fh, A, n);
                    default:
                        return f(sh, A, n)
                    }
                },
                c7: (yp = A,
                xp = f(Ae, function(r) {
                    return r
                }, yp),
                Ep = s(kt, t(function(r, n) {
                    return e(function(t, e, u) {
                        return f(hh, s(r, t, e, u), s(n, t, e, u))
                    })
                }), e(function() {
                    return ft(A)
                }), xp),
                e(function(r, n, e) {
                    return f(Pc, function(e) {
                        if (e.b) {
                            if (e.b.b)
                                return "oneOf failed parsing this value:\n    " + f(gh, r, n) + "\n\nParsing failed in the following 2 ways:\n\n\n" + f(yt, "\n\n", f(Ct, t(function(r, n) {
                                    return "(" + qt(r + 1) + ") " + n
                                }), e)) + "\n";
                            var u = e.a;
                            return "Problem with the given value:\n\n" + f(gh, r, n) + "\n\n" + u + "\n"
                        }
                        return "Ran into a oneOf with no possibilities!"
                    }, s(Ep, r, n, e))
                })),
                c8: function(r) {
                    var n = r.cy;
                    if (n.$)
                        return f(dh, C([wh(r.cq), Xp(r.bo)]), A);
                    var t, e = n.a;
                    return f(dh, C([wh(r.cq), Xp(r.bo), (t = e,
                    f(Yp, "title", t))]), A)
                },
                df: t(function(r, n) {
                    return f(Zp, C([bh(r.bB)]), n)
                }),
                dy: t(function(r, n) {
                    return f(ph, 1 === r ? C([(t = r,
                    f(Yp, "start", qt(t)))]) : A, f(Ae, function(r) {
                        return f(vh, A, r)
                    }, n));
                    var t
                }),
                dz: mh(A),
                dT: function(r) {
                    return f(eh, A, r)
                },
                dU: function(r) {
                    return f(qh, A, r)
                },
                dX: yh(A),
                dY: Eh(A),
                dZ: function() {
                    return xh(A)
                },
                d_: Ah(A),
                d$: function() {
                    return Lh(A)
                },
                d0: Nh(A),
                d3: kh,
                d4: f(lh, A, A),
                eb: function(r) {
                    return f(Th, A, f(Ae, function(r) {
                        return f(vh, A, r.b)
                    }, r))
                }
            }, Sh = function(r) {
                return r.$ ? gt : ht(r.a)
            }, Ph = e(function(r, n, t) {
                return L(f(Vl, r * n, " "), t)
            }), Rh = t(function(r, n) {
                if (n.b) {
                    if (n.b.b) {
                        u = n.a;
                        var e = n.b;
                        return s(kt, t(function(n, t) {
                            return L(n, L(r, t))
                        }), u, e)
                    }
                    var u;
                    return n.a
                }
                return ""
            }), Bh = function(r) {
                return "</" + r + ">"
            }, Uh = e(function(r, n, t) {
                return f(yt, n, f(Et, r, t))
            }), Ih = f(Lc, f(Uh, "&", "&amp;"), f(Lc, f(Uh, "<", "&lt;"), f(Uh, ">", "&gt;"))), jh = function(r) {
                return r.b
            }, Oh = f(Ml, t(function(r, n) {
                return '"' === r ? n + '\\"' : L(n, Nc(r))
            }), ""), zh = f(Ml, t(function(r, n) {
                return Pt(r) ? n + "-" + Nc(E(r.toLowerCase())) : L(n, Nc(r))
            }), ""), _h = t(function(r, n) {
                return zh(r) + '="' + Oh(n) + '"'
            }), Vh = function(r) {
                switch (r) {
                case "className":
                    return "class";
                case "defaultValue":
                    return "value";
                case "htmlFor":
                    return "for";
                default:
                    return r
                }
            }, Gh = t(function(r, n) {
                var t = n.a
                  , e = n.b
                  , u = n.c;
                switch (r.$) {
                case 0:
                    return y(t, e, f(ct, f(_h, r.a, a = r.b), u));
                case 1:
                    if ("className" === r.a)
                        return y(f(ct, a = r.b, t), e, u);
                    var a = r.b;
                    return y(t, e, f(ct, f(_h, Vh(c = r.a), a), u));
                case 2:
                    var c = r.a;
                    return r.b ? y(t, e, f(ct, zh(Vh(c)), u)) : n;
                case 3:
                    return a = r.b,
                    y(t, e, f(ct, f(_h, Vh(c = r.a), function(r) {
                        return f(wt, 0, r)
                    }(a)), u));
                case 4:
                    return a = r.b,
                    y(t, f(ct, Oh(r.a) + ": " + Oh(a), e), u);
                default:
                    return n
                }
            }), Hh = t(function(r, n) {
                return r.b ? f(ct, f(_h, "class", f(Rh, " ", r)), n) : n
            }), Mh = t(function(r, n) {
                return r.b ? f(ct, f(_h, "style", f(Rh, "; ", r)), n) : n
            }), Fh = t(function(r, n) {
                return "<" + f(yt, " ", f(ct, r, (t = n,
                e = s(kt, Gh, y(A, A, A), t),
                f(Mh, e.b, f(Hh, e.a, e.c))))) + ">";
                var t, e
            }), Jh = e(function(r, n, t) {
                r: for (; ; ) {
                    if (!n.b) {
                        var e = t.M;
                        if (e.b) {
                            var u = e.a
                              , a = e.b
                              , c = r
                              , i = u.b
                              , o = x(t, {
                                p: t.p - 1,
                                r: f(ct, f(r, t.p - 1, Bh(l = u.a)), t.r),
                                M: a
                            });
                            r = c,
                            n = i,
                            t = o;
                            continue r
                        }
                        return t
                    }
                    if (n.a.$)
                        c = r,
                        i = a = n.b,
                        o = x(t, {
                            r: f(ct, f(r, t.p, Ih(n.a.a)), t.r)
                        }),
                        r = c,
                        n = i,
                        t = o;
                    else {
                        var s = n.a
                          , l = s.a
                          , b = s.b
                          , d = s.c;
                        a = n.b;
                        switch (d.$) {
                        case 0:
                            c = r,
                            i = a,
                            o = x(t, {
                                r: f(ct, f(r, t.p, f(Fh, l, b)), t.r)
                            });
                            r = c,
                            n = i,
                            t = o;
                            continue r;
                        case 1:
                            c = r,
                            i = d.a,
                            o = x(t, {
                                p: t.p + 1,
                                r: f(ct, f(r, t.p, f(Fh, l, b)), t.r),
                                M: f(ct, q(l, a), t.M)
                            }),
                            r = c,
                            n = i,
                            t = o;
                            continue r;
                        default:
                            c = r,
                            i = f(Ae, jh, d.a),
                            o = x(t, {
                                p: t.p + 1,
                                r: f(ct, f(r, t.p, f(Fh, l, b)), t.r),
                                M: f(ct, q(l, a), t.M)
                            }),
                            r = c,
                            n = i,
                            t = o;
                            continue r
                        }
                    }
                }
            }), Zh = t(function(r, n) {
                var t = r ? "\n" : ""
                  , e = {
                    p: 0,
                    r: A,
                    M: A
                }
                  , u = r ? Ph(r) : ka(de);
                return f(Rh, t, s(Jh, u, C([n]), e).r)
            }), Kh = e(function(r, n, t) {
                var e, u = n, a = r.ao, c = f(Uu, A, f(uu, function(r) {
                    return C([q("format", Zo("org.matrix.custom.html")), q("formatted_body", Zo(r))])
                }, (e = t,
                f(nf, function(r) {
                    return p(r, "<p>" + e + "</p>") ? gt : ht(r)
                }, f(uu, f(Lc, Ae(Zh(0)), yt("")), f(Uu, gt, f(uu, f(Lc, Mp(Dh), Sh), s(Lc, up, Sh, e))))))));
                return f(Gu, r, {
                    cN: Fo(Jo(L(C([q("msgtype", Zo("m.text")), q("body", Zo(t))]), c))),
                    dh: "PUT",
                    dA: A,
                    dB: C(["rooms", u, "send", "m.room.message", qt(a)]),
                    dI: le(0)
                })
            }), Yh = e(function(r, n, t) {
                var e = n;
                return f(Ne, function() {
                    return s(Kh, r, e, t)
                }, f(Fi, r, e))
            }), Xh = e(function(r, n, t) {
                return q(s(Ji(r) ? Kh : Yh, r, n, t), x(e = r, {
                    ao: e.ao + 1
                }));
                var e
            }), Qh = function(r) {
                return r.bm
            }, Wh = t(function(r, n) {
                return f(Gu, r, {
                    cN: Fo(Jo(C([q("displayname", Zo(n))]))),
                    dh: "PUT",
                    dA: A,
                    dB: C(["profile", Qh(r), "displayname"]),
                    dI: le(0)
                })
            }), rg = kr, ng = (Lp = Zo,
            function(r) {
                Vr[r] && U(3)
            }(kp = "storeSession"),
            Vr[kp] = {
                e: nn,
                u: Lp,
                a: function(r) {
                    var n = []
                      , t = Vr[r].u
                      , u = _r(0);
                    return Vr[r].b = u,
                    Vr[r].c = e(function(r, e) {
                        for (; e.b; e = e.b)
                            for (var a = n, c = Lr(t(e.a)), i = 0; a.length > i; i++)
                                a[i](c);
                        return u
                    }),
                    {
                        subscribe: function(r) {
                            n.push(r)
                        },
                        unsubscribe: function(r) {
                            var t = (n = n.slice()).indexOf(r);
                            0 > t || n.splice(t, 1)
                        }
                    }
                }
            },
            Jr(kp)), tg = function(r) {
                return ng((e = (n = r).aA,
                u = n.ao,
                a = n.bm,
                c = n.T,
                f(wt, 0, Jo(C([q("homeserverUrl", Zo(n.ae)), q("kind", Zo((t = e,
                t ? "user" : "guest"))), q("txnId", rg(u)), q("userId", Zo(a)), q("accessToken", Zo(c))])))));
                var n, t, e, u, a, c
            }, eg = t(function(r, n) {
                return x(n, r.$ ? {
                    ah: r.a
                } : {
                    U: r.a
                })
            }), ug = t(function(r, n) {
                if (n.$) {
                    var e = n.a
                      , u = t(function(r, n) {
                        return 0 > m(Lt(zo(n.C)), e.al) ? f(Ge, f(Uo, r, 0), f(Ho, r, n)) : Ki
                    });
                    return f(Xo, je, function() {
                        switch (r.$) {
                        case 0:
                            return q(x(e, {
                                a4: r.a
                            }), f(Uu, Ki, s(Yo, t(function(r, n) {
                                return f(Ge, f(Uo, r, 1), f(Go, r, n))
                            }), e.a9, e.L)));
                        case 1:
                            var n = r.a;
                            return q(x(e, {
                                B: f(_o, function(r) {
                                    return !p(r.W, n)
                                }, e.B)
                            }), Ki);
                        case 5:
                            return q(x(e, {
                                J: f(eg, r.a, e.J)
                            }), Ki);
                        case 6:
                            if (r.a.$) {
                                var a = r.a.a;
                                return q(x(e, {
                                    B: f(jo, e.B, a.a + " " + a.b)
                                }), Ki)
                            }
                            var c = r.a.a
                              , i = c.a;
                            return q(x(e, {
                                Q: gt,
                                L: ht(h = c.b),
                                a9: ht(i)
                            }), He(C([tg(i), f(u, i, h)])));
                        case 7:
                            if (r.c.$) {
                                var o = r.c.a;
                                return q(x(e, {
                                    B: f(jo, e.B, o.a + " " + o.b)
                                }), Ki)
                            }
                            i = r.a;
                            var l = r.b
                              , b = r.c.a
                              , d = f(uu, function(r) {
                                return s(rf, r, l, b)
                            }, e.L)
                              , v = x(e, {
                                ay: ri(b.bu) && !l,
                                L: d
                            });
                            return q(v, (k = q(d, v.ay)).a.$ || k.b ? Ki : f(u, i, k.a.a));
                        case 8:
                            i = r.a;
                            var h = r.b;
                            return q(x(e, {
                                al: e.al + e.z.a6
                            }), f(Ge, f(Uo, i, 0), f(Ho, i, h)));
                        case 9:
                            var g = s(Xh, i = r.a, r.b, e.J.U)
                              , m = g.a
                              , $ = g.b;
                            return q(x(e, {
                                J: Oo(e.J),
                                a9: ht($)
                            }), He(C([f(Ge, Io(i), function() {
                                var r;
                                return 1 === Ji(i) ? m : f(Ne, function() {
                                    return m
                                }, f(Wh, i, "" === (r = e.J).ah ? "Anonymous" : r.ah))
                            }()), tg($)])));
                        case 10:
                            if (r.b.$) {
                                var w = r.b.a;
                                return q(x(e, {
                                    B: f(jo, e.B, w.a + " " + w.b)
                                }), Ki)
                            }
                            return q(e, f(Uu, Ki, f(uu, f(Lc, Go(i = r.a), Ge(f(Uo, i, 1))), e.L)));
                        case 3:
                            return q(x(e, {
                                Q: ht(Mo)
                            }), Ki);
                        case 4:
                            return q(x(e, {
                                Q: gt
                            }), Ki);
                        case 2:
                            return q(x(e, {
                                Q: ht(r.a)
                            }), Ki);
                        case 12:
                            return q(e, f(Ge, Oe, f(Ne, function(r) {
                                return f(Te, Xe(r), f(Gi, r, e.z.dK))
                            }, yo(e.z.aP))));
                        default:
                            var y = function(r) {
                                var n = r;
                                return q(x(n, {
                                    aK: 1
                                }), function(r) {
                                    var n = r.ae;
                                    return qo({
                                        cN: Fo(Ko({
                                            Z: r.Z,
                                            ed: r.ed
                                        })),
                                        dh: "POST",
                                        dI: f(mo, n, 1),
                                        cC: s(Vu, n, C(["login"]), A)
                                    })
                                }({
                                    ae: n.ae,
                                    Z: n.Z,
                                    ed: n.ar
                                }))
                            }(r.a)
                              , E = y.b;
                            return q(x(e, {
                                Q: ht(y.a)
                            }), f(Ge, Oe, f(Ne, function(r) {
                                return f(Ne, function() {
                                    return f(Te, function(n) {
                                        return q(r, n)
                                    }, f(Gi, r, e.z.dK))
                                }, f(Fi, r, e.z.dK))
                            }, E)))
                        }
                        var k
                    }())
                }
                return q(n, Ki)
            }), ag = function(r) {
                return {
                    $: 2,
                    a: r
                }
            }, cg = function(r) {
                return {
                    $: 5,
                    a: r
                }
            }, ig = {
                $: 4
            }, og = {
                $: 12
            }, fg = function(r) {
                return {
                    $: 11,
                    a: r
                }
            }, sg = t(function(r, n) {
                return {
                    $: 9,
                    a: r,
                    b: n
                }
            }), lg = {
                $: 3
            }, bg = t(function(r, n) {
                return {
                    $: 8,
                    a: r,
                    b: n
                }
            }), dg = an("button"), vg = t(function(r, n) {
                return f(sn, r, Zo(n))
            }), pg = vg("className"), hg = an("div"), gg = Ae(vn(ye)), mg = function(r) {
                return hg(gg(r))
            }, $g = function(r) {
                return r.F
            }, wg = on, qg = t(function(r, n) {
                return f(wg, r, {
                    $: 0,
                    a: n
                })
            }), yg = function(r) {
                return f(qg, "click", le(r))
            }, Eg = an("p"), xg = function(r) {
                return Eg(gg(r))
            }, kg = un, Lg = kg, Ag = function(r) {
                return {
                    $: 0,
                    a: r
                }
            }, Ng = function(r) {
                return {
                    $: 1,
                    a: r
                }
            }, Tg = an("a"), Cg = function(r) {
                return Tg(gg(r))
            }, Dg = kr, Sg = t(function(r, n) {
                return f(sn, r, Dg(n))
            }), Pg = Sg("disabled"), Rg = function(r) {
                return f(vg, "href", /^javascript:/i.test((n = r).replace(/\s/g, "")) ? "" : n);
                var n
            }, Bg = an("input"), Ug = vg("type"), Ig = vg("value"), jg = t(function(r, n) {
                return f(Bg, L(C([Ug("text"), Ig(r)]), n), A)
            }), Og = function(r) {
                return 1 === r.aA
            }, zg = vg("htmlFor"), _g = fn, Vg = C([f(_g, "property", "clip rect(1px, 1px, 1px, 1px)"), f(_g, "position", "absolute"), f(_g, "height", "1px"), f(_g, "width", "1px"), f(_g, "overflow", "hidden"), f(_g, "margin", "-1px"), f(_g, "padding", "0"), f(_g, "border", "0")]), Gg = an("label"), Hg = function(r) {
                return Gg(gg(r))
            }, Mg = cn, Fg = an("span"), Jg = function(r) {
                return Fg(gg(r))
            }, Zg = u(function(r, n, t, e) {
                return f(Jg, A, C([f(Hg, f(ct, zg(r), L(Vg, n)), C([f(Mg, ye, t)])), e]))
            }), Kg = function(r) {
                return s(Ou, "https://matrix.to", C(["#", zu(r)]), A)
            }, Yg = function(r) {
                return q(r, !0)
            }, Xg = t(function(r, n) {
                return f(wg, r, {
                    $: 1,
                    a: n
                })
            }), Qg = f(t(function(r, n) {
                return s(Le, Ze, n, r)
            }), C(["target", "value"]), Qe), Wg = function(r) {
                return f(Xg, "input", f(fe, Yg, f(fe, r, Qg)))
            }, rm = vg("placeholder"), nm = an("textarea"), tm = e(function(r, n, t) {
                var e, u = (e = q(f(uu, Og, r), f(uu, Qh, r))).a.$ || !e.a.a || e.b.$ ? "Post" : "Post as " + e.b.a, a = p(r, gt) || !pe(t), c = L(C([pg("cactus-button"), pg("cactus-send-button"), Pg(a)]), f(Uu, A, f(uu, jp, f(uu, yg, n))));
                return f(dg, c, C([Lg(u)]))
            }), em = t(function(r, n) {
                var t, e = r, u = n.a9, a = n.dK, c = n.a1, i = n.aT, o = n.dj, b = n.dO, d = n.dg, v = s(tm, u, n.dM, e.U), p = f(Uu, !0, f(uu, f(Lc, Og, Ra), u)) ? f(mg, C([pg("cactus-editor-name")]), C([l(Zg, "Name", A, Lg("Name"), f(jg, e.ah, C([rm("Name"), Wg(f(Lc, Ng, o))])))])) : Lg(""), h = c ? function(r) {
                    var n = r.bV
                      , t = r.bW
                      , e = r.a9
                      , u = f(dg, C([pg("cactus-button"), pg("cactus-logout-button"), yg(t)]), C([Lg("Log out")]))
                      , a = f(dg, C([pg("cactus-button"), pg("cactus-login-button"), yg(n)]), C([Lg("Log in")]));
                    return e.$ ? a : Og(e.a) ? u : a
                }({
                    bV: b,
                    bW: d,
                    a9: u
                }) : f(Cg, C([Rg(Kg(a))]), C([f(dg, C([pg("cactus-button")]), C([Lg("Log in")]))])), g = function(r) {
                    return l(Zg, "Comment Editor", A, Lg("Comment Editor"), f(nm, C([pg("cactus-editor-textarea"), Ig(e.U), Wg(f(Lc, Ag, o)), rm("Add a comment"), Pg(!r)]), A))
                }, m = f(mg, C([pg("cactus-editor-buttons")]), C([h, v]));
                return f(mg, C([pg("cactus-editor")]), C((t = q(c, i)).a ? t.b ? [g(!0), f(mg, C([pg("cactus-editor-below")]), C([p, m]))] : [g(f(Uu, !1, f(uu, Og, u))), f(mg, C([pg("cactus-editor-below")]), C([m]))] : t.b ? [g(!0), f(mg, C([pg("cactus-editor-below")]), C([p, m]))] : [f(Cg, C([Rg(Kg(a))]), C([f(dg, C([pg("cactus-button"), pg("cactus-matrixdotto-only")]), C([Lg("Comment using a Matrix client")]))]))]))
            }), um = an("b"), am = function(r) {
                return um(gg(r))
            }, cm = t(function(r, n) {
                return f(ln, function(r) {
                    return /^(on|formAction$)/i.test(r) ? "data-" + r : r
                }(r), bn(n))
            }), im = f(_e, cm, $t("aria-"))("errormessage"), om = function(r) {
                var n, t = r.W, e = r.aD;
                return f(mg, C([pg("cactus-error"), im(e)]), C([f(dg, C([pg("cactus-button"), yg((n = t,
                {
                    $: 1,
                    a: n
                }))]), C([Lg("X")])), f(am, A, C([Lg(" Error: " + e)]))]))
            }, fm = an("h3"), sm = function(r) {
                return fm(gg(r))
            }, lm = function(r) {
                return "" !== r.ar && "" !== r.Z
            }, bm = e(function(r, n, t) {
                return f(Hg, r, C([f(Mg, ye, n), t]))
            }), dm = Sg("required"), vm = e(function(r, n, t) {
                var e = r
                  , u = t.cX
                  , a = t.dV
                  , c = t.c6
                  , i = function(r) {
                    var n = r.ah
                      , t = r.aN
                      , e = r.aE
                      , u = r.at;
                    return s(bm, C([pg("cactus-login-field")]), f(xg, A, C([Lg(n)])), f(jg, t, L(C([rm(n), Wg(e), dm(!0)]), u)))
                }
                  , o = i({
                    at: A,
                    aE: function(r) {
                        return u(x(e, {
                            ar: r
                        }))
                    },
                    ah: "Username",
                    aN: e.ar
                })
                  , l = f(dg, C([pg("cactus-button"), yg(a(e)), Pg(!(lm(e) && !e.aK))]), C([Lg(e.aK ? "Logging in..." : "Log in")]))
                  , b = i({
                    at: C([Ug("password")]),
                    aE: function(r) {
                        return u(x(e, {
                            Z: r
                        }))
                    },
                    ah: "Password",
                    aN: e.Z
                })
                  , d = i({
                    at: A,
                    aE: function(r) {
                        return u(x(e, {
                            ae: r
                        }))
                    },
                    ah: "Homeserver Url",
                    aN: e.ae
                })
                  , v = f(dg, C([pg("cactus-button"), yg(c)]), C([Lg("Back")]))
                  , p = f(Cg, C([Rg(Kg(n))]), C([f(dg, C([pg("cactus-button"), pg("cactus-matrixdotto-button")]), C([Lg("Use a Matrix client")]))]))
                  , h = C([f(mg, C([pg("cactus-login-buttons")]), C([v, l])), p]);
                return f(mg, C([pg("cactus-login-form")]), L(C([f(sm, A, C([Lg("Log in using Matrix")])), o, b, d]), h))
            }), pm = e(function(r, n, e) {
                return f(uu, function(r) {
                    return r.ad
                }, Vb(f(_i, f(Lc, function(r) {
                    return r.Y
                }, f(Lc, zi, re(-1))), f(_o, function(r) {
                    return 1 > m(zi(r.Y), zi(n))
                }, f(Ae, jh, f(_o, f(Lc, ee, Yt(e)), (u = r,
                s(kt, t(function(r, n) {
                    return 1 === r.$ ? f(ct, q(r.a, r.b), n) : n
                }), A, u))))))));
                var u
            }), hm = ln("datetime"), gm = {
                $: 7
            }, mm = function(r) {
                return r > 11 ? "pm" : "am"
            }, $m = function(r) {
                switch (r) {
                case 0:
                    return "January";
                case 1:
                    return "February";
                case 2:
                    return "March";
                case 3:
                    return "April";
                case 4:
                    return "May";
                case 5:
                    return "June";
                case 6:
                    return "July";
                case 7:
                    return "August";
                case 8:
                    return "September";
                case 9:
                    return "October";
                case 10:
                    return "November";
                default:
                    return "December"
                }
            }, wm = function(r) {
                switch (f(Rl, 100, r)) {
                case 11:
                case 12:
                case 13:
                    return "th";
                default:
                    switch (f(Rl, 10, r)) {
                    case 1:
                        return "st";
                    case 2:
                        return "nd";
                    case 3:
                        return "rd";
                    default:
                        return "th"
                    }
                }
            }, qm = function(r) {
                switch (r) {
                case 0:
                    return "Monday";
                case 1:
                    return "Tuesday";
                case 2:
                    return "Wednesday";
                case 3:
                    return "Thursday";
                case 4:
                    return "Friday";
                case 5:
                    return "Saturday";
                default:
                    return "Sunday"
                }
            }, ym = d(c(function(r, n, t, e, u, a) {
                return {
                    d6: u,
                    d7: n,
                    d8: r,
                    aa: a,
                    d9: e,
                    ea: t
                }
            }), $m, f(Lc, $m, $e(3)), qm, f(Lc, qm, $e(3)), mm, wm), Em = t(function(r, n) {
                return Xt(r / n)
            }), xm = e(function(r, n, t) {
                for (; ; ) {
                    if (!t.b)
                        return n + r;
                    var e = t.a
                      , u = t.b;
                    if (0 > m(e.dP, n))
                        return n + e.b;
                    r = r,
                    n = n,
                    t = u
                }
            }), km = t(function(r, n) {
                var t = r.b;
                return s(xm, r.a, f(Em, zi(n), 6e4), t)
            }), Lm = t(function(r, n) {
                return f(Rl, 24, f(Em, f(km, r, n), 60))
            }), Am = e(function(r, n, t) {
                return r.d6(f(Lm, n, t))
            }), Nm = function(r) {
                var n = f(Em, r, 1440) + 719468
                  , t = (0 > n ? n - 146096 : n) / 146097 | 0
                  , e = n - 146097 * t
                  , u = (e - (e / 1460 | 0) + (e / 36524 | 0) - (e / 146096 | 0)) / 365 | 0
                  , a = e - (365 * u + (u / 4 | 0) - (u / 100 | 0))
                  , c = (5 * a + 2) / 153 | 0
                  , i = c + (10 > c ? 3 : -9);
                return {
                    bx: a - ((153 * c + 2) / 5 | 0) + 1,
                    b_: i,
                    cH: u + 400 * t + (i > 2 ? 0 : 1)
                }
            }, Tm = t(function(r, n) {
                return Nm(f(km, r, n)).bx
            }), Cm = C([6, 0, 1, 2, 3, 4, 5]), Dm = t(function(r, n) {
                switch (f(Rl, 7, f(Em, f(km, r, n), 1440))) {
                case 0:
                    return 3;
                case 1:
                    return 4;
                case 2:
                    return 5;
                case 3:
                    return 6;
                case 4:
                    return 0;
                case 5:
                    return 1;
                default:
                    return 2
                }
            }), Sm = t(function(r, n) {
                return f(Uu, q(0, 6), Vb(f(_o, function(t) {
                    return p(t.b, f(Dm, r, n))
                }, f(Ct, t(function(r, n) {
                    return q(r, n)
                }), Cm)))).a
            }), Pm = t(function(r, n) {
                switch (n) {
                case 0:
                    return 31;
                case 1:
                    return function(r) {
                        return !(f(Rl, 4, r) || !f(Rl, 100, r) && f(Rl, 400, r))
                    }(r) ? 29 : 28;
                case 2:
                    return 31;
                case 3:
                    return 30;
                case 4:
                    return 31;
                case 5:
                    return 30;
                case 6:
                case 7:
                    return 31;
                case 8:
                    return 30;
                case 9:
                    return 31;
                case 10:
                    return 30;
                default:
                    return 31
                }
            }), Rm = C([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), Bm = t(function(r, n) {
                switch (Nm(f(km, r, n)).b_) {
                case 1:
                    return 0;
                case 2:
                    return 1;
                case 3:
                    return 2;
                case 4:
                    return 3;
                case 5:
                    return 4;
                case 6:
                    return 5;
                case 7:
                    return 6;
                case 8:
                    return 7;
                case 9:
                    return 8;
                case 10:
                    return 9;
                case 11:
                    return 10;
                default:
                    return 11
                }
            }), Um = t(function(r, n) {
                return f(Uu, q(0, 0), Vb(f(_o, function(t) {
                    return p(t.b, f(Bm, r, n))
                }, f(Ct, t(function(r, n) {
                    return q(r, n)
                }), Rm))))
            }), Im = t(function(r, n) {
                return 1 + f(Um, r, n).a
            }), jm = t(function(r, n) {
                return Nm(f(km, r, n)).cH
            }), Om = t(function(r, n) {
                var t, e = f(Iv, f(Im, r, n) - 1, Rm);
                return t = f(Ae, Pm(f(jm, r, n)), e),
                s(kt, pt, 0, t) + f(Tm, r, n)
            }), zm = t(function(r, n) {
                return f(Im, r, n) / 4 | 0
            }), _m = t(function(r, n) {
                return 1 > r ? "" : s(he, -r, pe(n), n)
            }), Vm = t(function(r, n) {
                var t = qt(n)
                  , e = r - pe(t);
                return L(f(yt, "", f(Ae, function() {
                    return "0"
                }, f(Tt, 1, e))), t)
            }), Gm = t(function(r, n) {
                return f(Rl, 1e3, zi(n))
            }), Hm = t(function(r, n) {
                return f(Rl, 60, f(km, r, n))
            }), Mm = function(r) {
                return r ? r > 12 ? r - 12 : r : 12
            }, Fm = t(function(r, n) {
                return f(Rl, 60, f(Em, zi(n), 1e3))
            }), Jm = G(315576e5), Zm = t(function(r, n) {
                return Ti(Jm * f(jm, r, n))
            }), Km = t(function(r, n) {
                var t = f(Sm, r, f(Zm, r, n));
                return 1 + ((f(Om, r, n) + t) / 7 | 0)
            }), Ym = t(function(r, n) {
                return qt(f(jm, r, n))
            }), Xm = u(function(r, n, t, e) {
                switch (e.$) {
                case 0:
                    return qt(f(Im, n, t));
                case 1:
                    return L(qt(u = f(Im, n, t)), r.aa(u));
                case 2:
                    return f(Vm, 2, f(Im, n, t));
                case 3:
                    return r.d7(f(Bm, n, t));
                case 4:
                    return r.d8(f(Bm, n, t));
                case 17:
                    return qt(1 + f(zm, n, t));
                case 18:
                    return function(n) {
                        return L(qt(n), r.aa(n))
                    }(1 + f(zm, n, t));
                case 5:
                    return qt(f(Tm, n, t));
                case 6:
                    return function(n) {
                        return L(qt(n), r.aa(n))
                    }(f(Tm, n, t));
                case 7:
                    return f(Vm, 2, f(Tm, n, t));
                case 8:
                    return qt(f(Om, n, t));
                case 9:
                    return function(n) {
                        return L(qt(n), r.aa(n))
                    }(f(Om, n, t));
                case 10:
                    return f(Vm, 3, f(Om, n, t));
                case 11:
                    return qt(f(Sm, n, t));
                case 12:
                    return function(n) {
                        return L(qt(n), r.aa(n))
                    }(f(Sm, n, t));
                case 13:
                    return r.d9(f(Dm, n, t));
                case 14:
                    return r.ea(f(Dm, n, t));
                case 19:
                    return qt(f(Km, n, t));
                case 20:
                    return function(n) {
                        return L(qt(n), r.aa(n))
                    }(f(Km, n, t));
                case 21:
                    return f(Vm, 2, f(Km, n, t));
                case 15:
                    return f(_m, 2, f(Ym, n, t));
                case 16:
                    return f(Ym, n, t);
                case 22:
                    return s(Am, r, n, t).toUpperCase();
                case 23:
                    return za(s(Am, r, n, t));
                case 24:
                    return qt(f(Lm, n, t));
                case 25:
                    return f(Vm, 2, f(Lm, n, t));
                case 26:
                    return qt(Mm(f(Lm, n, t)));
                case 27:
                    return f(Vm, 2, Mm(f(Lm, n, t)));
                case 28:
                    return qt(1 + f(Lm, n, t));
                case 29:
                    return f(Vm, 2, 1 + f(Lm, n, t));
                case 30:
                    return qt(f(Hm, n, t));
                case 31:
                    return f(Vm, 2, f(Hm, n, t));
                case 32:
                    return qt(f(Fm, n, t));
                case 33:
                    return f(Vm, 2, f(Fm, n, t));
                case 34:
                    return qt(f(Gm, n, t));
                case 35:
                    return f(Vm, 3, f(Gm, n, t));
                default:
                    return e.a
                }
                var u
            }), Qm = u(function(r, n, t, e) {
                return f(yt, "", f(Ae, s(Xm, r, t, e), n))
            })(ym), Wm = {
                $: 25
            }, r$ = {
                $: 31
            }, n$ = {
                $: 2
            }, t$ = {
                $: 33
            }, e$ = function(r) {
                return {
                    $: 36,
                    a: r
                }
            }, u$ = f(Yi, 0, A), a$ = {
                $: 16
            }, c$ = {
                $: 13
            }, i$ = {
                $: 3
            }, o$ = an("time"), f$ = function(r) {
                return o$(gg(r))
            }, s$ = t(function(r, n) {
                return function(r) {
                    return ho(.001 * r)
                }(zi(n) - zi(r))
            }), l$ = function(r) {
                return Ro(r) / 86400
            }, b$ = function(r) {
                return Ro(r) / 3600
            }, d$ = function(r) {
                return Ro(r) / 31557600
            }, v$ = function(r) {
                return Ro(r) / 60
            }, p$ = function(r) {
                return Ro(r) / 604800
            }, h$ = t(function(r, n) {
                var t = C([q("year", d$), q("month", f(Lc, d$, re(12))), q("week", p$), q("day", l$), q("hour", b$), q("minute", v$), q("second", Ro)])
                  , e = f(s$, n, r)
                  , u = function(r) {
                    r: for (; ; ) {
                        if (r.b) {
                            var n = r.a
                              , t = n.a
                              , u = n.b
                              , a = r.b;
                            if (1 > u(e)) {
                                r = a;
                                continue r
                            }
                            return q(t, u)
                        }
                        return q("seconds", Ro)
                    }
                }(t)
                  , a = u.a
                  , c = Xt((0,
                u.b)(e))
                  , i = 1 === c ? a : a + "s";
                return 1 > Ro(e) ? "just now" : qt(c) + " " + i + " ago"
            }), g$ = vg("title"), m$ = vg("alt"), $$ = an("img"), w$ = t(function(r, n) {
                return f($$, f(ct, m$(r), gg(n)), A)
            }), q$ = function(r) {
                return f(vg, "src", bn(r))
            }, y$ = t(function(r, n) {
                return f($o, zu(r), qt(n))
            }), E$ = _u(C(["_matrix", "media", "r0"])), x$ = function(r) {
                return s(Lc, It, Vb, f(Et, "/", r))
            }, k$ = gu, L$ = {
                $: 7
            }, A$ = t(function(r, n) {
                return !f(qu, r, n).$
            }), N$ = t(function(r, n) {
                return f(A$, r, n)
            }), T$ = i(function(r, n, t, e, u, a, c) {
                for (; ; ) {
                    var i = s(ma, r, n, u);
                    if (p(i, -1))
                        return {
                            bv: e,
                            d: c,
                            e: a,
                            b: n,
                            dL: t,
                            cq: u
                        };
                    p(i, -2) ? (r = r,
                    n += 1,
                    t += 1,
                    e = 1,
                    u = u,
                    a = a,
                    c = c) : (r = r,
                    n = i,
                    t = t,
                    e += 1,
                    u = u,
                    a = a,
                    c = c)
                }
            }), C$ = function(r) {
                var n, t = function(r) {
                    return Ut(r) || f(ac, r, C([".", "-", ":"]))
                }, e = f(Ya, f(Na, Oa(de), Wa("mxc://")), function(r) {
                    return function(n) {
                        var t = s(ma, r.dP, n.b, n.cq);
                        if (p(t, -1))
                            return f(ia, !1, f(ga, n, r.bG));
                        var e = p(t, -2) ? v(T$, r.db, n.b + 1, n.dL + 1, 1, n.cq, n.e, n.d) : v(T$, r.db, t, n.dL, n.bv + 1, n.cq, n.e, n.d)
                          , u = s(he, n.b, e.b, n.cq);
                        return f(N$, u, r.dG) ? f(ia, !1, f(ga, n, r.bG)) : s(oa, !0, u, e)
                    }
                }({
                    bG: L$,
                    db: (n = {
                        db: t,
                        dG: k$,
                        dP: t
                    }).db,
                    dG: n.dG,
                    dP: n.dP
                }));
                return Sh(f($i, e, r))
            }, D$ = t(function(r, n) {
                var e = C$(n)
                  , u = x$(n);
                return s(Yo, t(function(n, t) {
                    return s(E$, r, C(["thumbnail", n, t]), C([f(y$, "width", 64), f(y$, "height", 64), f(wo, "method", "crop")]))
                }), e, u)
            }), S$ = t(function(r, n) {
                var t, e = (t = f(uu, D$(r), f(nf, function(r) {
                    return r.bq
                }, n))).$ ? gt : t.a;
                return f(mg, C([pg("cactus-comment-avatar")]), C(e.$ ? [f(xg, A, C([Lg("?")]))] : [f(w$, "user avatar image", C([q$(e.a)]))]))
            }), P$ = an("audio"), R$ = function(r) {
                return P$(gg(r))
            }, B$ = Sg("controls"), U$ = t(function(r, n) {
                var e = C$(n)
                  , u = x$(n);
                return s(Yo, t(function(n, t) {
                    return s(E$, r, C(["download", n, t]), A)
                }), e, u)
            }), I$ = an("i"), j$ = function(r) {
                return I$(gg(r))
            }, O$ = t(function(r, n) {
                var t = f(U$, r, n.cC);
                if (t.$)
                    return f(xg, A, C([f(j$, A, C([Lg("Error: Could not parse audio file URL")]))]));
                var e = t.a;
                return f(R$, C([pg("cactus-message-audio"), q$(e), B$(!0)]), A)
            }), z$ = ln("rel"), _$ = t(function(r, n) {
                var t = f(U$, r, n.cC);
                if (t.$)
                    return f(xg, A, C([f(j$, A, C([Lg("Error: Could not parse file URL")]))]));
                var e = t.a;
                return f(Cg, C([pg("cactus-message-file"), z$("noopener"), Rg(e)]), C([Lg("📎 Download " + n.cN)]))
            }), V$ = Of(Gd), G$ = f(sa, function(r) {
                return 7 === pe(r) ? Oa(r) : Ia("Hex color code should have 7 characters.")
            }, Sa(f(Na, f(Na, Bf(f(Ja, "#", ds("#"))), xa(Ic)), V$))), H$ = t(function(r, n) {
                return s(kt, t(function(n, t) {
                    switch (n.a) {
                    case "width":
                    case "height":
                    case "alt":
                    case "title":
                        return f(ct, n, t);
                    case "src":
                        return f(Uu, t, f(uu, function(r) {
                            return f(ct, q("src", r), t)
                        }, f(U$, r, n.b)));
                    default:
                        return t
                    }
                }), A, n)
            }), M$ = e(function(r, n, e) {
                switch (n) {
                case "font":
                case "span":
                    return function(r) {
                        return s(kt, t(function(r, n) {
                            switch (r.a) {
                            case "data-mx-color":
                                var t = f($i, G$, r.b);
                                return t.$ ? n : f(ct, q("style", "color:" + t.a), n);
                            case "data-mx-bg-color":
                                var e = f($i, G$, r.b);
                                return e.$ ? n : f(ct, q("style", "background:" + e.a), n);
                            default:
                                return n
                            }
                        }), A, r)
                    }(e);
                case "a":
                    return f(ct, q("rel", "noopener"), function(r) {
                        return s(kt, t(function(r, n) {
                            switch (r.a) {
                            case "name":
                                return f(ct, q("name", r.b), n);
                            case "target":
                                return f(ct, q("target", r.b), n);
                            case "href":
                                var t = r.b
                                  , e = C(["https", "http", "ftp", "mailto", "magnet"]);
                                return f(Uu, !1, f(uu, function(r) {
                                    return f(ac, r, e)
                                }, Vb(f(Et, ":", t)))) ? f(ct, q("href", t), n) : n;
                            default:
                                return n
                            }
                        }), A, r)
                    }(e));
                case "img":
                    return f(H$, r, e);
                case "ol":
                    return f(_o, f(Lc, ee, Yt("start")), e);
                case "code":
                    return f(_o, function(r) {
                        return "class" === r.a && "language-" === f($e, 9, r.b)
                    }, e);
                default:
                    return A
                }
            }), F$ = t(function(r, n) {
                return s(ku, r, 0, n)
            }), J$ = (Ap = C(["font", "del", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "p", "a", "ul", "ol", "sup", "sub", "li", "b", "i", "u", "strong", "em", "strike", "code", "hr", "br", "div", "table", "thead", "tbody", "tr", "th", "td", "caption", "pre", "span", "img"]),
            s(kt, F$, k$, Ap)), Z$ = t(function(r, n) {
                var e = t(function(n, t) {
                    if (n > 100)
                        return ii("");
                    switch (t.$) {
                    case 0:
                        return ii(t.a);
                    case 2:
                        return Va(t.a);
                    default:
                        var u = t.a
                          , a = t.b
                          , c = t.c;
                        return (f(N$, u, J$) ? f(ca, u, s(M$, r, u, a)) : f(ca, "div", A))(f(Ae, e(n + 1), c))
                    }
                });
                return f(e, 0, n)
            }), K$ = function(r) {
                return an(function(r) {
                    return "script" == r ? "p" : r
                }(r))
            }, Y$ = function(r) {
                return f(cm, r.a, r.b)
            }, X$ = function(r) {
                return f(Ae, Q$, r)
            }, Q$ = function(r) {
                switch (r.$) {
                case 1:
                    var n = r.c;
                    return s(K$, r.a, f(Ae, Y$, r.b), X$(n));
                case 0:
                    return kg(r.a);
                default:
                    return kg("")
                }
            }, W$ = t(function(r, n) {
                if (n.$) {
                    var t = n.a;
                    return f(mg, A, X$(f(Ae, Z$(r), t)))
                }
                return f(xg, A, C([Lg(n.a)]))
            }), rw = function(r) {
                return f(ln, "height", qt(r))
            }, nw = function(r) {
                return f(ln, "width", qt(r))
            }, tw = t(function(r, n) {
                var t = f(nf, function(n) {
                    var t = q(f(Uu, gt, f(uu, U$(r), n.cx)), n.cw);
                    return t.a.$ || t.b.$ ? gt : ht(q(t.a.a, t.b.a))
                }, n.a$)
                  , e = q(f(U$, r, n.cC), n.a$)
                  , u = q(e, t);
                if (u.a.a.$)
                    return f(xg, A, C([f(j$, A, C([Lg("Error: Could not render image")]))]));
                if (u.b.$) {
                    if (u.a.b.$)
                        return f(Cg, C([Rg(i = u.a.a.a)]), C([f(w$, n.cN, C([pg("cactus-message-image"), q$(i)]))]));
                    var a = u.a
                      , c = a.b.a;
                    return f(Cg, C([Rg(i = a.a.a)]), C([f(w$, n.cN, C([pg("cactus-message-image"), q$(i), nw(c.aO), rw(c.az)]))]))
                }
                var i, o = u.b.a, s = o.a, l = o.b;
                return f(Cg, C([Rg(i = u.a.a.a)]), C([f(w$, n.cN, C([pg("cactus-message-image"), q$(s), nw(l.aO), rw(l.az)]))]))
            }), ew = an("video"), uw = function(r) {
                return ew(gg(r))
            }, aw = t(function(r, n) {
                var t = f(U$, r, n.cC);
                if (t.$)
                    return f(xg, A, C([f(j$, A, C([Lg('Error: The URL for video "' + n.cN + '" could not be decoded.')]))]));
                var e = t.a;
                return f(uw, C([m$(n.cN), q$(e), B$(!0), pg("cactus-message-video")]), A)
            }), cw = e(function(r, n, t) {
                switch (t.$) {
                case 0:
                    var e = t.a;
                    return f(mg, C([pg("cactus-message-text")]), C([f(W$, r, e)]));
                case 1:
                    if (t.a.$)
                        return e = t.a,
                        f(mg, C([pg("cactus-message-text")]), C([f(W$, r, e)]));
                    var u = t.a.a;
                    return f(mg, C([pg("cactus-message-emote")]), C([f(xg, A, C([Lg(n + " " + u)]))]));
                case 2:
                    return e = t.a,
                    f(mg, C([pg("cactus-message-text")]), C([f(W$, r, e)]));
                case 3:
                    return f(tw, r, t.a);
                case 4:
                    return f(_$, r, t.a);
                case 6:
                    return f(O$, r, t.a);
                default:
                    return f(aw, r, t.a)
                }
            }), iw = c(function(r, n, t, e, u, a) {
                var c, i = (c = t,
                f(Qm(C([a$, e$("-"), n$, e$("-"), gm, e$("T"), Wm, e$(":"), r$, e$(":"), t$, e$("+00:00")])), u$, c)), o = function(r) {
                    return f(Qm(C([c$, e$(" "), i$, e$(" "), gm, e$(" "), Wm, e$(":"), r$, e$(":"), t$, e$(" "), a$, e$(" UTC")])), u$, r)
                }(t), l = f(h$, n, t), b = "https://matrix.to/#/" + e, d = f(Uu, e, f(uu, function(r) {
                    return f(Uu, e, r.bC)
                }, u)), v = s(cw, r, d, a);
                return f(mg, C([pg("cactus-comment")]), C([f(S$, r, u), f(mg, C([pg("cactus-comment-content")]), C([f(mg, C([pg("cactus-comment-header")]), C([f(xg, C([pg("cactus-comment-displayname")]), C([f(Cg, C([Rg(b)]), C([Lg(d)]))])), f(f$, C([pg("cactus-comment-time"), g$(o), hm(i)]), C([Lg(l)]))])), f(mg, C([pg("cactus-comment-body")]), C([v]))]))]))
            }), ow = u(function(r, n, t, e) {
                var u = n;
                return f(mg, A, f(Ae, function(n) {
                    return d(iw, r, e, n.Y, n.aJ, f(Uu, f(qu, n.aJ, u.bX), f(uu, ht, s(pm, u.C, n.Y, n.aJ))), n.ad)
                }, f(Iv, t, zo(u.C))))
            });
            Np = {
                Main: {
                    init: Ie({
                        da: function(r) {
                            var n = function(r) {
                                return f(Sc, go, f(oo, vo, r))
                            }(r);
                            if (n.$)
                                return q({
                                    $: 0,
                                    a: Ot(n.a)
                                }, Ki);
                            var t = n.a
                              , e = t.a
                              , u = t.b;
                            return q(je({
                                z: e,
                                J: Hi,
                                B: A,
                                ay: !1,
                                Q: gt,
                                a4: Ti(0),
                                L: gt,
                                a9: u,
                                al: e.a6
                            }), He(C([f(Ue, ze, Xi), f(Ge, Oe, function() {
                                if (1 === u.$)
                                    return f(Ne, function(r) {
                                        return f(Te, Xe(r), f(Gi, r, e.dK))
                                    }, yo(e.aP));
                                var r = u.a;
                                return f(Ne, function() {
                                    return f(Te, Xe(r), f(Gi, r, e.dK))
                                }, f(Zi, r, e.dK))
                            }())])))
                        },
                        dW: function(r) {
                            if (1 === r.$) {
                                var n = 1e3 * Ro(r.a.z.bl);
                                return n > 0 ? f(Po, n, ze) : Bo
                            }
                            return Bo
                        },
                        ec: ug,
                        ee: function(r) {
                            if (r.$) {
                                var n = r.a
                                  , t = (a = n.Q).$ ? Lg("") : s(vm, a.a, n.z.dK, {
                                    cX: ag,
                                    c6: ig,
                                    dV: fg
                                })
                                  , e = f(mg, A, f(Ae, om, n.B))
                                  , u = f(em, n.J, {
                                    aT: n.z.aT,
                                    a1: n.z.a1,
                                    dg: og,
                                    dj: cg,
                                    dK: n.z.dK,
                                    dM: s(Yo, sg, n.a9, f(uu, $g, n.L)),
                                    a9: n.a9,
                                    dO: lg
                                });
                                return f(mg, C([pg("cactus-container")]), C([e, t, u, function() {
                                    var r = q(n.L, n.a9);
                                    if (r.a.$ || r.b.$)
                                        return f(xg, A, C([Lg("Getting comments...")]));
                                    var t, e = r.a.a, u = r.b.a;
                                    return f(mg, A, C([l(ow, (t = u,
                                    t.ae), e, n.al, n.a4), n.ay ? Lg("") : f(mg, C([pg("cactus-view-more")]), C([f(dg, C([pg("cactus-button"), yg(f(bg, u, e))]), C([Lg("View more")]))]))]))
                                }()]))
                            }
                            var a;
                            return om({
                                W: 0,
                                aD: "Bad configuration: " + r.a
                            })
                        }
                    })(fo)(0)
                }
            },
            r.Elm ? function r(n, t) {
                for (var e in t)
                    e in n ? "init" == e ? U(6) : r(n[e], t[e]) : n[e] = t[e]
            }(r.Elm, Np) : r.Elm = Np
        }(this);
    }
    , {}],
    "Yscq": [function(require, module, exports) {
        "use strict";
        var e, t, n = require("./Main.elm");
        function o(e) {
            e.storedSession = JSON.parse(localStorage.getItem("cactus-session"));
            var t = e.node;
            delete e.node,
            "string" == typeof t && (t = document.querySelector(t)),
            n.Elm.Main.init({
                node: t,
                flags: e
            }).ports.storeSession.subscribe(function(e) {
                return localStorage.setItem("cactus-session", e)
            })
        }
        (null === (e = document.currentScript) || void 0 === e ? void 0 : null === (t = e.dataset) || void 0 === t ? void 0 : t.defaultHomeserverUrl) && o(Object.assign({
            node: document.currentScript
        }, document.currentScript.dataset)),
        window.initComments = o;
    }
    , {
        "./Main.elm": "asWa"
    }]
}, {}, ["Yscq"], null)
//# sourceMappingURL=/cactus.js.map
