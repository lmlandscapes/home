(function() {
    var s = {};
    (function() {
        /*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */
        var c = {},
            f = this || self; /*  SPDX-License-Identifier: Apache-2.0 */
        var l = /#|$/;
        function n(d) {
            var g = d.search(l),
                a;
            a:
            {
                for (a = 0; 0 <= (a = d.indexOf("fmt", a)) && a < g;) {
                    var b = d.charCodeAt(a - 1);
                    if (38 == b || 63 == b)
                        if (b = d.charCodeAt(a + 3), !b || 61 == b || 38 == b || 35 == b)
                            break a;
                    a += 4
                }
                a = -1
            }if (0 > a)
                return null;
            b = d.indexOf("&", a);
            if (0 > b || b > g)
                b = g;
            a += 4;
            return decodeURIComponent(d.substr(a, b - a).replace(/\+/g, " "))
        }
        ;
        function r(d, g, a) {
            function b() {
                --p;
                if (0 >= p) {
                    var e;
                    (e = d.GooglebQhCsO) || (e = {});
                    var q = e[g];
                    q && (delete e[g], (e = q[0]) && e.call && e())
                }
            }
            for (var p = a.length + 1, m = 0; m < a.length; m++) {
                var h = n(a[m]),
                    k = null;
                1 != h && 2 != h || !(h = d.document.getElementById("goog_conv_iframe")) || h.src || (k = h);
                k || (k = new Image);
                k.onload = b;
                k.src = a[m]
            }
            b()
        }
        var t = ["ss_"],
            u = s || f;
        t[0] in u || "undefined" == typeof u.execScript || u.execScript("var " + t[0]);
        for (var v; t.length && (v = t.shift());)
            t.length || void 0 === r ? u[v] && u[v] !== Object.prototype[v] ? u = u[v] : u = u[v] = {} : u[v] = r;
    }).call(this);
    ;
    s.ss_(window, 'OjE2Mzc3ODI0MDM5NDg', ['https://www.google.com/pagead/1p-user-list/368246525/?random\x3d1637782403948\x26cv\x3d9\x26fst\x3d1637780400000\x26num\x3d1\x26bg\x3dffffff\x26guid\x3dON\x26u_h\x3d900\x26u_w\x3d1440\x26u_ah\x3d875\x26u_aw\x3d1391\x26u_cd\x3d24\x26u_his\x3d4\x26u_tz\x3d0\x26u_java\x3dfalse\x26u_nplug\x3d1\x26u_nmime\x3d3\x26gtm\x3d2oaba1\x26sendb\x3d1\x26data\x3devent%3Dgtag.config\x26frm\x3d0\x26url\x3dhttps%3A%2F%2Fwww.jnlandscaping.co.uk%2F%3Fkeyword%3D%252Bnear%2520%252Blandscape%2520%252Bgardeners%26gwid%3Dfa0aad37-ede4-4592-bac6-e7906ee5ce26%26title%3Dneed-a-certified-%2526-trustworthy-landscape-gardener%26sub-title%3Dfor-landscape-gardeners-near-you%26about-text%3Dlandscaping%26search-term%3Dall-other-landscaping-work%26wf1%3D%26wf2%3Dlandscape-gardener%26wf3%3Dlandscape-gardeners%26wf4%3Dlandscaping%26cta1%3Da-certified-landscape-gardeners%26cta2%3Dnear-you%26form-title%3Dlandscaping-job%26form-text%3Dlandscaping-work%26location%3Dharlow%26location-header%3Dtrue%26area-code%3D01279%26gc\x26ref\x3dhttps%3A%2F%2Fwww.google.com%2F\x26tiba\x3dJ%26N%20Paving%20%26%20Landscapes\x26async\x3d1\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d3074206660\x26resp\x3dGooglemKTybQhCsO\x26rmt_tld\x3d0\x26ipr\x3dy', 'https://www.google.co.uk/pagead/1p-user-list/368246525/?random\x3d1637782403948\x26cv\x3d9\x26fst\x3d1637780400000\x26num\x3d1\x26bg\x3dffffff\x26guid\x3dON\x26u_h\x3d900\x26u_w\x3d1440\x26u_ah\x3d875\x26u_aw\x3d1391\x26u_cd\x3d24\x26u_his\x3d4\x26u_tz\x3d0\x26u_java\x3dfalse\x26u_nplug\x3d1\x26u_nmime\x3d3\x26gtm\x3d2oaba1\x26sendb\x3d1\x26data\x3devent%3Dgtag.config\x26frm\x3d0\x26url\x3dhttps%3A%2F%2Fwww.jnlandscaping.co.uk%2F%3Fkeyword%3D%252Bnear%2520%252Blandscape%2520%252Bgardeners%26gwid%3Dfa0aad37-ede4-4592-bac6-e7906ee5ce26%26title%3Dneed-a-certified-%2526-trustworthy-landscape-gardener%26sub-title%3Dfor-landscape-gardeners-near-you%26about-text%3Dlandscaping%26search-term%3Dall-other-landscaping-work%26wf1%3D%26wf2%3Dlandscape-gardener%26wf3%3Dlandscape-gardeners%26wf4%3Dlandscaping%26cta1%3Da-certified-landscape-gardeners%26cta2%3Dnear-you%26form-title%3Dlandscaping-job%26form-text%3Dlandscaping-work%26location%3Dharlow%26location-header%3Dtrue%26area-code%3D01279%26gc\x26ref\x3dhttps%3A%2F%2Fwww.google.com%2F\x26tiba\x3dJ%26N%20Paving%20%26%20Landscapes\x26async\x3d1\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d3074206660\x26resp\x3dGooglemKTybQhCsO\x26rmt_tld\x3d1\x26ipr\x3dy']);
})();

