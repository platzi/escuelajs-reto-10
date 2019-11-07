!(function(e) {
  function t(t) {
    for (
      var r, o, a = t[0], c = t[1], i = t[2], l = 0, d = [];
      l < a.length;
      l++
    ) {
      (o = a[l]),
        Object.prototype.hasOwnProperty.call(H, o) && H[o] && d.push(H[o][0]),
        (H[o] = 0);
    }
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    for (M && M(t); d.length; ) d.shift()();
    return x.push.apply(x, i || []), n();
  }
  function n() {
    for (var e, t = 0; t < x.length; t++) {
      for (var n = x[t], r = !0, o = 1; o < n.length; o++) {
        const a = n[o];
        H[a] !== 0 && (r = !1);
      }
      r && (x.splice(t--, 1), (e = I((I.s = n[0]))));
    }
    return e;
  }
  const r = window.webpackHotUpdate;
  window.webpackHotUpdate = function(e, t) {
    !(function(e, t) {
      if (!g[e] || !w[e]) return;
      for (const n in ((w[e] = !1), t))
        Object.prototype.hasOwnProperty.call(t, n) && (v[n] = t[n]);
      --b == 0 && E === 0 && D();
    })(e, t),
      r && r(e, t);
  };
  let o,
    a = !0,
    c = '3ba0c172347af3cdb5d7',
    i = 1e4,
    l = {},
    d = [],
    u = [];
  function s(e) {
    var t = {
      _acceptedDependencies: {},
      _declinedDependencies: {},
      _selfAccepted: !1,
      _selfDeclined: !1,
      _disposeHandlers: [],
      _main: o !== e,
      active: !0,
      accept(e, n) {
        if (void 0 === e) t._selfAccepted = !0;
        else if (typeof e === 'function') t._selfAccepted = e;
        else if (typeof e === 'object')
          for (let r = 0; r < e.length; r++)
            t._acceptedDependencies[e[r]] = n || function() {};
        else t._acceptedDependencies[e] = n || function() {};
      },
      decline(e) {
        if (void 0 === e) t._selfDeclined = !0;
        else if (typeof e === 'object')
          for (let n = 0; n < e.length; n++) t._declinedDependencies[e[n]] = !0;
        else t._declinedDependencies[e] = !0;
      },
      dispose(e) {
        t._disposeHandlers.push(e);
      },
      addDisposeHandler(e) {
        t._disposeHandlers.push(e);
      },
      removeDisposeHandler(e) {
        const n = t._disposeHandlers.indexOf(e);
        n >= 0 && t._disposeHandlers.splice(n, 1);
      },
      check: _,
      apply: k,
      status(e) {
        if (!e) return f;
        p.push(e);
      },
      addStatusHandler(e) {
        p.push(e);
      },
      removeStatusHandler(e) {
        const t = p.indexOf(e);
        t >= 0 && p.splice(t, 1);
      },
      data: l[e],
    };
    return (o = void 0), t;
  }
  var p = [],
    f = 'idle';
  function h(e) {
    f = e;
    for (let t = 0; t < p.length; t++) p[t].call(null, e);
  }
  var m,
    v,
    y,
    b = 0,
    E = 0,
    O = {},
    w = {},
    g = {};
  function j(e) {
    return `${+e}` === e ? +e : e;
  }
  function _(e) {
    if (f !== 'idle') throw new Error('check() is only allowed in idle status');
    return (
      (a = e),
      h('check'),
      ((t = i),
      (t = t || 1e4),
      new Promise((e, n) => {
        if (typeof XMLHttpRequest === 'undefined')
          return n(new Error('No browser support'));
        try {
          var r = new XMLHttpRequest(),
            o = `${I.p}${c}.hot-update.json`;
          r.open('GET', o, !0), (r.timeout = t), r.send(null);
        } catch (e) {
          return n(e);
        }
        r.onreadystatechange = function() {
          if (r.readyState === 4) {
            if (r.status === 0)
              n(new Error(`Manifest request to ${o} timed out.`));
            else if (r.status === 404) e();
            else if (r.status !== 200 && r.status !== 304)
              n(new Error(`Manifest request to ${o} failed.`));
            else {
              try {
                var t = JSON.parse(r.responseText);
              } catch (e) {
                return void n(e);
              }
              e(t);
            }
          }
        };
      })).then(e => {
        if (!e) return h('idle'), null;
        (w = {}), (O = {}), (g = e.c), (y = e.h), h('prepare');
        const t = new Promise((e, t) => {
          m = { resolve: e, reject: t };
        });
        for (const n in ((v = {}), H)) P(n);
        return f === 'prepare' && E === 0 && b === 0 && D(), t;
      })
    );
    let t;
  }
  function P(e) {
    g[e]
      ? ((w[e] = !0),
        b++,
        (function(e) {
          const t = document.createElement('script');
          (t.charset = 'utf-8'),
            (t.src = `${I.p}${e}.${c}.hot-update.js`),
            document.head.appendChild(t);
        })(e))
      : (O[e] = !0);
  }
  function D() {
    h('ready');
    const e = m;
    if (((m = null), e)) {
      if (a) {
        Promise.resolve()
          .then(() => {
            return k(a);
          })
          .then(
            t => {
              e.resolve(t);
            },
            t => {
              e.reject(t);
            }
          );
      } else {
        const t = [];
        for (const n in v)
          Object.prototype.hasOwnProperty.call(v, n) && t.push(j(n));
        e.resolve(t);
      }
    }
  }
  function k(t) {
    if (f !== 'ready')
      throw new Error('apply() is only allowed in ready status');
    let n, r, o, a, i;
    function u(e) {
      for (
        var t = [e],
          n = {},
          r = t.map(e => {
            return { chain: [e], id: e };
          });
        r.length > 0;

      ) {
        const o = r.pop(),
          c = o.id,
          i = o.chain;
        if ((a = A[c]) && !a.hot._selfAccepted) {
          if (a.hot._selfDeclined)
            return { type: 'self-declined', chain: i, moduleId: c };
          if (a.hot._main) return { type: 'unaccepted', chain: i, moduleId: c };
          for (let l = 0; l < a.parents.length; l++) {
            const d = a.parents[l],
              u = A[d];
            if (u) {
              if (u.hot._declinedDependencies[c]) {
                return {
                  type: 'declined',
                  chain: i.concat([d]),
                  moduleId: c,
                  parentId: d,
                };
              }
              t.indexOf(d) === -1 &&
                (u.hot._acceptedDependencies[c]
                  ? (n[d] || (n[d] = []), s(n[d], [c]))
                  : (delete n[d],
                    t.push(d),
                    r.push({ chain: i.concat([d]), id: d })));
            }
          }
        }
      }
      return {
        type: 'accepted',
        moduleId: e,
        outdatedModules: t,
        outdatedDependencies: n,
      };
    }
    function s(e, t) {
      for (let n = 0; n < t.length; n++) {
        const r = t[n];
        e.indexOf(r) === -1 && e.push(r);
      }
    }
    t = t || {};
    const p = {},
      m = [],
      b = {},
      E = function() {
        console.warn(
          `[HMR] unexpected require(${w.moduleId}) to disposed module`
        );
      };
    for (const O in v) {
      if (Object.prototype.hasOwnProperty.call(v, O)) {
        var w;
        i = j(O);
        let _ = !1,
          P = !1,
          D = !1,
          k = '';
        switch (
          ((w = v[O] ? u(i) : { type: 'disposed', moduleId: O }).chain &&
            (k = `\nUpdate propagation: ${w.chain.join(' -> ')}`),
          w.type)
        ) {
          case 'self-declined':
            t.onDeclined && t.onDeclined(w),
              t.ignoreDeclined ||
                (_ = new Error(
                  `Aborted because of self decline: ${w.moduleId}${k}`
                ));
            break;
          case 'declined':
            t.onDeclined && t.onDeclined(w),
              t.ignoreDeclined ||
                (_ = new Error(
                  `Aborted because of declined dependency: ${w.moduleId} in ${w.parentId}${k}`
                ));
            break;
          case 'unaccepted':
            t.onUnaccepted && t.onUnaccepted(w),
              t.ignoreUnaccepted ||
                (_ = new Error(`Aborted because ${i} is not accepted${k}`));
            break;
          case 'accepted':
            t.onAccepted && t.onAccepted(w), (P = !0);
            break;
          case 'disposed':
            t.onDisposed && t.onDisposed(w), (D = !0);
            break;
          default:
            throw new Error(`Unexception type ${w.type}`);
        }
        if (_) return h('abort'), Promise.reject(_);
        if (P) {
          for (i in ((b[i] = v[i]),
          s(m, w.outdatedModules),
          w.outdatedDependencies)) {
            Object.prototype.hasOwnProperty.call(w.outdatedDependencies, i) &&
              (p[i] || (p[i] = []), s(p[i], w.outdatedDependencies[i]));
          }
        }
        D && (s(m, [w.moduleId]), (b[i] = E));
      }
    }
    let x,
      N = [];
    for (r = 0; r < m.length; r++) {
      (i = m[r]),
        A[i] &&
          A[i].hot._selfAccepted &&
          b[i] !== E &&
          N.push({ module: i, errorHandler: A[i].hot._selfAccepted });
    }
    h('dispose'),
      Object.keys(g).forEach(e => {
        !1 === g[e] &&
          (function(e) {
            delete H[e];
          })(e);
      });
    for (var S, T, M = m.slice(); M.length > 0; ) {
      if (((i = M.pop()), (a = A[i]))) {
        const C = {},
          R = a.hot._disposeHandlers;
        for (o = 0; o < R.length; o++) (n = R[o])(C);
        for (
          l[i] = C, a.hot.active = !1, delete A[i], delete p[i], o = 0;
          o < a.children.length;
          o++
        ) {
          const q = A[a.children[o]];
          q && ((x = q.parents.indexOf(i)) >= 0 && q.parents.splice(x, 1));
        }
      }
    }
    for (i in p) {
      if (Object.prototype.hasOwnProperty.call(p, i) && (a = A[i])) {
        for (T = p[i], o = 0; o < T.length; o++) {
          (S = T[o]),
            (x = a.children.indexOf(S)) >= 0 && a.children.splice(x, 1);
        }
      }
    }
    for (i in (h('apply'), (c = y), b))
      Object.prototype.hasOwnProperty.call(b, i) && (e[i] = b[i]);
    let U = null;
    for (i in p) {
      if (Object.prototype.hasOwnProperty.call(p, i) && (a = A[i])) {
        T = p[i];
        const L = [];
        for (r = 0; r < T.length; r++) {
          if (((S = T[r]), (n = a.hot._acceptedDependencies[S]))) {
            if (L.indexOf(n) !== -1) continue;
            L.push(n);
          }
        }
        for (r = 0; r < L.length; r++) {
          n = L[r];
          try {
            n(T);
          } catch (e) {
            t.onErrored &&
              t.onErrored({
                type: 'accept-errored',
                moduleId: i,
                dependencyId: T[r],
                error: e,
              }),
              t.ignoreErrored || U || (U = e);
          }
        }
      }
    }
    for (r = 0; r < N.length; r++) {
      const J = N[r];
      (i = J.module), (d = [i]);
      try {
        I(i);
      } catch (e) {
        if (typeof J.errorHandler === 'function') {
          try {
            J.errorHandler(e);
          } catch (n) {
            t.onErrored &&
              t.onErrored({
                type: 'self-accept-error-handler-errored',
                moduleId: i,
                error: n,
                originalError: e,
              }),
              t.ignoreErrored || U || (U = n),
              U || (U = e);
          }
        } else {
          t.onErrored &&
            t.onErrored({ type: 'self-accept-errored', moduleId: i, error: e }),
            t.ignoreErrored || U || (U = e);
        }
      }
    }
    return U
      ? (h('fail'), Promise.reject(U))
      : (h('idle'),
        new Promise(e => {
          e(m);
        }));
  }
  var A = {},
    H = { 0: 0 },
    x = [];
  function I(t) {
    if (A[t]) return A[t].exports;
    const n = (A[t] = {
      i: t,
      l: !1,
      exports: {},
      hot: s(t),
      parents: ((u = d), (d = []), u),
      children: [],
    });
    return (
      e[t].call(
        n.exports,
        n,
        n.exports,
        (function(e) {
          const t = A[e];
          if (!t) return I;
          const n = function(n) {
              return (
                t.hot.active
                  ? (A[n]
                      ? A[n].parents.indexOf(e) === -1 && A[n].parents.push(e)
                      : ((d = [e]), (o = n)),
                    t.children.indexOf(n) === -1 && t.children.push(n))
                  : (console.warn(
                      `[HMR] unexpected require(${n}) from disposed module ${e}`
                    ),
                    (d = [])),
                I(n)
              );
            },
            r = function(e) {
              return {
                configurable: !0,
                enumerable: !0,
                get() {
                  return I[e];
                },
                set(t) {
                  I[e] = t;
                },
              };
            };
          for (const a in I) {
            Object.prototype.hasOwnProperty.call(I, a) &&
              a !== 'e' &&
              a !== 't' &&
              Object.defineProperty(n, a, r(a));
          }
          return (
            (n.e = function(e) {
              return (
                f === 'ready' && h('prepare'),
                E++,
                I.e(e).then(t, e => {
                  throw (t(), e);
                })
              );
              function t() {
                E--,
                  f === 'prepare' && (O[e] || P(e), E === 0 && b === 0 && D());
              }
            }),
            (n.t = function(e, t) {
              return 1 & t && (e = n(e)), I.t(e, -2 & t);
            }),
            n
          );
        })(t)
      ),
      (n.l = !0),
      n.exports
    );
  }
  (I.m = e),
    (I.c = A),
    (I.d = function(e, t, n) {
      I.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (I.r = function(e) {
      typeof Symbol !== 'undefined' &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (I.t = function(e, t) {
      if ((1 & t && (e = I(e)), 8 & t)) return e;
      if (4 & t && typeof e === 'object' && e && e.__esModule) return e;
      const n = Object.create(null);
      if (
        (I.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && typeof e !== 'string')
      ) {
        for (const r in e) {
          I.d(
            n,
            r,
            (t => {
              return e[t];
            }).bind(null, r)
          );
        }
      }
      return n;
    }),
    (I.n = function(e) {
      const t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return I.d(t, 'a', t), t;
    }),
    (I.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (I.p = '/'),
    (I.h = function() {
      return c;
    });
  let N = (window.webpackJsonp = window.webpackJsonp || []),
    S = N.push.bind(N);
  (N.push = t), (N = N.slice());
  for (let T = 0; T < N.length; T++) t(N[T]);
  var M = S;
  x.push([37, 1]), n();
})({
  32(e, t, n) {},
  33(e, t, n) {},
  34(e, t, n) {},
  36(e, t, n) {},
  37(e, t, n) {
    'use strict';

    n.r(t);
    const r = n(0),
      o = n.n(r),
      a = n(13),
      c = n(8),
      i = n(10),
      l = n(22),
      d = n(12),
      u = n(9),
      s =
        (n(32),
        {
          addToCart(e) {
            return { type: 'ADD_TO_CART', payload: e };
          },
        }),
      p = Object(c.b)(e => {
        return { products: e.products };
      }, s)(e => {
        const t = e.products;
        return o.a.createElement(
          'div',
          { className: 'Products' },
          o.a.createElement(
            'div',
            { className: 'Products-items' },
            t.map(t => {
              return o.a.createElement(
                'div',
                { className: 'Products-item', key: t.id },
                o.a.createElement('img', { src: t.image, alt: t.title }),
                o.a.createElement(
                  'div',
                  { className: 'Products-item-info' },
                  o.a.createElement(
                    'h2',
                    null,
                    t.title,
                    o.a.createElement('span', null, '$', t.price)
                  ),
                  o.a.createElement('p', null, t.description)
                ),
                o.a.createElement(
                  'button',
                  {
                    type: 'button',
                    onClick() {
                      return (function(t) {
                        e.addToCart(t);
                      })(t);
                    },
                  },
                  'Comprar'
                )
              );
            })
          )
        );
      }),
      f = function() {
        return o.a.createElement(p, null);
      },
      h =
        (n(33),
        Object(c.b)(e => {
          return { cart: e.cart };
        }, null)(e => {
          const t = e.cart;
          return o.a.createElement(
            'div',
            { className: 'Checkout' },
            o.a.createElement(
              'div',
              { className: 'Checkout-content' },
              t.length > 0
                ? o.a.createElement('h3', null, 'Lista de Pedidos:')
                : o.a.createElement('h2', null, 'Sin Pedidos'),
              t.map(e => {
                return o.a.createElement(
                  'div',
                  { className: 'Checkout-item' },
                  o.a.createElement(
                    'div',
                    { className: 'Checkout-element' },
                    o.a.createElement('h4', null, e.title),
                    o.a.createElement('span', null, '$', e.price)
                  ),
                  o.a.createElement('i', { className: 'fas fa-trash-alt' })
                );
              })
            ),
            t.length > 0 &&
              o.a.createElement(
                'div',
                { className: 'Checkout-sidebar' },
                o.a.createElement('h3', null, 'Precio Total:'),
                o.a.createElement('h4', null, '$')
              )
          );
        })),
      m =
        (n(34),
        Object(c.b)(e => {
          return { cart: e.cart };
        }, null)(e => {
          return o.a.createElement(
            'div',
            { className: 'Header' },
            o.a.createElement(
              d.b,
              { to: '/' },
              o.a.createElement('h1', null, 'Platzi Store')
            ),
            o.a.createElement(
              'div',
              { className: 'Header-checkout' },
              o.a.createElement(
                d.b,
                { to: '/checkout' },
                o.a.createElement('i', { className: 'fas fa-shopping-basket' })
              ),
              e.cart.length > 0 &&
                o.a.createElement(
                  'div',
                  { className: 'Header-alert' },
                  e.cart.length
                )
            )
          );
        })),
      v = function() {
        return o.a.createElement(
          'div',
          null,
          o.a.createElement('p', null, 'Todos los Izquierdos Reservados')
        );
      },
      y =
        (n(36),
        function(e) {
          const t = e.children;
          return o.a.createElement(
            'div',
            { className: 'Main' },
            o.a.createElement(m, null),
            t,
            o.a.createElement(v, null)
          );
        }),
      b = function() {
        return o.a.createElement('h1', null, 'No Encontrado');
      },
      E = function() {
        return o.a.createElement(
          d.a,
          null,
          o.a.createElement(
            y,
            null,
            o.a.createElement(
              u.c,
              null,
              o.a.createElement(u.a, { exact: !0, path: '/', component: f }),
              o.a.createElement(u.a, {
                exact: !0,
                path: '/checkout',
                component: h,
              }),
              o.a.createElement(u.a, { component: b })
            )
          )
        );
      };
    function O(e) {
      return (
        (function(e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = new Array(e.length); t < e.length; t++)
              n[t] = e[t];
            return n;
          }
        })(e) ||
        (function(e) {
          if (
            Symbol.iterator in Object(e) ||
            Object.prototype.toString.call(e) === '[object Arguments]'
          )
            return Array.from(e);
        })(e) ||
        (function() {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance'
          );
        })()
      );
    }
    function w(e, t) {
      const n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(t => {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function g(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const j = function(e, t) {
      switch (t.type) {
        case 'ADD_TO_CART':
          return (function(e) {
            for (let t = 1; t < arguments.length; t++) {
              var n = arguments[t] != null ? arguments[t] : {};
              t % 2
                ? w(n, !0).forEach(t => {
                    g(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : w(n).forEach(t => {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          })({}, e, { cart: [].concat(O(e.cart), [t.payload]) });
        default:
          return e;
      }
    };
    if (typeof window !== 'undefined') {
      let _;
      _ = i.c;
      const P = window.__PRELOADED_STATE__,
        D = Object(i.d)(j, P, _(Object(i.a)(l.a)));
      Object(a.hydrate)(
        o.a.createElement(c.a, { store: D }, o.a.createElement(E, null)),
        document.getElementById('app')
      );
    }
  },
});
