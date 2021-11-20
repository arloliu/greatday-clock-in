// extract from greatday main.js
class HashHelper {
  getEncode(t) {
    let e = t.replace(/[\u0080-\u07ff]/g, (t) => {
      const e = t.charCodeAt(0);
      return String.fromCharCode(192 | (e >> 6), 128 | (63 & e));
    });
    return (
      (e = e.replace(/[\u0800-\uffff]/g, (t) => {
        const e = t.charCodeAt(0);
        return String.fromCharCode(
          224 | (e >> 12),
          128 | ((e >> 6) & 63),
          128 | (63 & e)
        );
      })),
      e
    );
  }
  getDecode(t) {
    let e = t.replace(
      /[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,
      (t) => {
        const e =
          ((15 & t.charCodeAt(0)) << 12) |
          ((63 & t.charCodeAt(1)) << 6) |
          (63 & t.charCodeAt(2));
        return String.fromCharCode(e);
      }
    );
    return (
      (e = e.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, (t) => {
        const e =
          ((31 & t.charCodeAt(0)) << 6) | (63 & t.charCodeAt(1));
        return String.fromCharCode(e);
      })),
      e
    );
  }
  getF(t, e, n, i) {
    switch (t) {
      case 0:
        return (e & n) ^ (~e & i);
      case 1:
        return e ^ n ^ i;
      case 2:
        return (e & n) ^ (e & i) ^ (n & i);
      case 3:
        return e ^ n ^ i;
    }
  }
  getROTL(t, e) {
    return (t << e) | (t >>> (32 - e));
  }
  getToHexStr(t) {
    let e,
      n = '';
    for (let i = 7; i >= 0; i--)
      (e = (t >>> (4 * i)) & 15), (n += e.toString(16));
    return n;
  }
  setHash(t, e, n) {
    const i = this;
    null == n && (n = 2), (e = void 0 === e || e) && (t = i.getEncode(t));
    const o = [1518500249, 1859775393, 2400959708, 3395469782];
    t += String.fromCharCode(128);
    const r = Math.ceil((t.length / 4 + 2) / 16),
      s = new Array(r);
    for (let y = 0; y < r; y++) {
      s[y] = new Array(16);
      for (let e = 0; e < 16; e++)
        s[y][e] =
          (t.charCodeAt(64 * y + 4 * e) << 24) |
          (t.charCodeAt(64 * y + 4 * e + 1) << 16) |
          (t.charCodeAt(64 * y + 4 * e + 2) << 8) |
          t.charCodeAt(64 * y + 4 * e + 3);
    }
    (s[r - 1][14] = (8 * (t.length - 1)) / Math.pow(2, 32)),
      (s[r - 1][14] = Math.floor(s[r - 1][14])),
      (s[r - 1][15] = (8 * (t.length - 1)) & 4294967295);
    let a = 1732584193,
      l = 4023233417,
      c = 2562383102,
      u = 271733878,
      d = 3285377520;
    const h = new Array(80);
    let p, m, f, g, _;
    for (let y = 0; y < r; y++) {
      for (let t = 0; t < 16; t++) h[t] = s[y][t];
      for (let t = 16; t < 80; t++)
        h[t] = i.getROTL(
          h[t - 3] ^ h[t - 8] ^ h[t - 14] ^ h[t - 16],
          1
        );
      (p = a), (m = l), (f = c), (g = u), (_ = d);
      for (let t = 0; t < 80; t++) {
        const e = Math.floor(t / 20),
          n =
            (i.getROTL(p, 5) +
              i.getF(e, m, f, g) +
              _ +
              o[e] +
              h[t]) &
            4294967295;
        (_ = g), (g = f), (f = i.getROTL(m, 30)), (m = p), (p = n);
      }
      (a = (a + p) & 4294967295),
        (l = (l + m) & 4294967295),
        (c = (c + f) & 4294967295),
        (u = (u + g) & 4294967295),
        (d = (d + _) & 4294967295);
    }
    let v =
      i.getToHexStr(a) +
      i.getToHexStr(l) +
      i.getToHexStr(c) +
      i.getToHexStr(u) +
      i.getToHexStr(d);
    return (
      1 === n ? (v = v.toLowerCase()) : 2 === n && (v = v.toUpperCase()),
      v
    );
  }
  getHash(t, e, n) {
    const i = this;
    let o = '';
    if (0 === n) {
      o = i.setHash(t, !0, null);
      const e = [
        o.substr(0, 4),
        o.substr(4, o.length - 8),
        o.substr(o.length - 4, 4),
      ];
      o =
        e[0].split('').reverse().join('') +
        e[1].split('').reverse().join('') +
        e[2].split('').reverse().join('');
    } else {
      (e = e.split('').reverse().join('')),
        (o = i.setHash(t + e, !0, null));
      for (let t = 1; t < n; t++) o = i.setHash(o + e, !0, null);
    }
    return o;
  }
}
module.exports = HashHelper;