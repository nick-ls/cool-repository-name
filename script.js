et = 1683152903;
function f0(d) {
    return ((d.getUTCHours() + 11) % 12) + 1 + ":" + p2(d.getUTCMinutes()) + ":" + p2(d.getUTCSeconds()) + " " + _ap(d);
}
cks = { t1: { t: [{ a: "PDT" }], f: f0, d: 1683331200, cs: 1, cr: 900, tpt: "SDCTF 2023 is now!" } };
function _ap(d) {
    var t = Math.floor(d.getTime() / 1e3 + 8640000000) % 86400;
    if (t === 0) {
        return "midnight";
    }
    if (t == 43200) {
        return "noon";
    }
    if (t < 43200) {
        return "am";
    }
    return "pm";
}
//Copyright timeanddate.com 2016, do not use without permission
var ltn = 0,
    lt0,
    ltj = 0,
    tj = 0,
    tf = 1e3;
flO = null;
function dt() {
    return new Date().getTime();
}
function gf(a) {
    var c = document;
    return c.getElementById ? c.getElementById(a) : c.all ? c.all[a] : null;
}
function ih(a, c) {
    a && (a.innerHTML = c);
}
function ihf(a, c) {
    ih(a, Math.floor(c));
}
function rf(a, c) {
    setTimeout("location.reload()", Math.floor(1e3 * (a + Math.random() * c)));
}
function pf(a, c) {
    for (; (a = "0000" + a) && a.length < c; );
    return a.substring(a.length - c);
}
function p2(a) {
    return 10 > a ? "0" + a : a;
}
function ac(a, c) {
    a && ((a.className += " p"), "string" === typeof c && (a.innerHTML = c));
}
function upd() {
    var a,
        c = dt() + sa;
    if (ltn > c) rf(7, 0);
    else {
        ltn = c;
        var c = c / 1e3,
            h = Math.floor(c);
        if (h > et) rf(10, 0);
        else {
            if (h != lt0 || 1e3 > tf) {
                var k = function (a, c) {
                    var b = "00" + Math.floor(c);
                    e.innerHTML = b.slice(b.length - a);
                };
                lt0 = h;
                for (a in cks) {
                    for (var f = cks[a], b = f.t, d = 0; d < b.length; d++) {
                        var g = b[d];
                        tj = g.j ? g.j : 0;
                        if (g.t > h) break;
                    }
                    var b = f.e,
                        e,
                        d = f.d - c + tj;
                    0 > d ? ((d = f.cs ? 0 : -d), f.cu || ((f.cu = 1), ac(b.r1, f.tpt), ac(b.r2, f.mpt), ac(gf("t")))) : f.cr && (d += 0.001 * f.cr);
                    (e = b.ci) && k(3, (1e3 * d) % 1e3);
                    (e = b.cs) && k(2, d % 60);
                    (e = b.cm) && k(2, (d / 60) % 60);
                    (e = b.ch) && k(2, (d / 3600) % 24);
                    (e = b.cd) && ihf(e, d / 86400);
                    (e = b.ai) && ihf(e, 1e3 * d);
                    (e = b.as) && ihf(e, d);
                    (e = b.am) && ihf(e, d / 60);
                    (e = b.ah) && ihf(e, d / 3600);
                    (e = b.ad) && ihf(e, d / 86400);
                }
            }
            c = dt() + sa;
            a = tf - (c % tf);
            25 > a && (a = 25);
            setTimeout(upd, a);
        }
    }
}
function sync(a) {
    function c(a, b, d) {
        sa = a;
        sae = b;
        if (flO)
            try {
                flO.setSync(a + 1e3 * tj, b);
            } catch (p) {
                2e3 > d &&
                    ((d += 100),
                    setTimeout(function () {
                        c(sa, sae, d);
                    }, d));
            }
    }
    var g = null,
        e = window;
    f = dt();
    var a = dt();
    var b = (f + a) / 2,
    d = 1e3 * parseFloat((Date.now()/1000)+""),
    d = Math.floor(d - b),
    b = a - b;
    c(d, b, 0);
    upd();
    f = dt();
}
function init() {
    lt0 = 0;
    var a;
    flO = document.count;
    if ("undefined" !== typeof cks)
        for (a in cks) {
            var c = cks[a],
                h = {},
                k = "r1,r2,cd,ch,cm,cs,ci,ad,ah,am,as,ai".split(/,/),
                f;
            for (f = 0; 12 > f; f++) {
                var b = k[f],
                    d = gf(b);
                d && (h[b] = d);
            }
            c.e = h;
        }
    sync(0);
}
