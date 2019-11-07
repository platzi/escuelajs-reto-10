!(function(e) {
  function t(t) {
    for (
      var r, o, a = t[0], c = t[1], i = t[2], d = 0, l = [];
      d < a.length;
      d++
    )
      (o = a[d]),
        Object.prototype.hasOwnProperty.call(x, o) && x[o] && l.push(x[o][0]),
        (x[o] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    for (S && S(t); l.length; ) l.shift()();
    return N.push.apply(N, i || []), n();
  }
  function n() {
    for (var e, t = 0; t < N.length; t++) {
      for (var n = N[t], r = !0, o = 1; o < n.length; o++) {
        var a = n[o];
        0 !== x[a] && (r = !1);
      }
      r && (N.splice(t--, 1), (e = I((I.s = n[0]))));
    }
    return e;
  }
  var r = window.webpackHotUpdate;
  window.webpackHotUpdate = function(e, t) {
    !(function(e, t) {
      if (!O[e] || !g[e]) return;
      for (var n in ((g[e] = !1), t))
        Object.prototype.hasOwnProperty.call(t, n) && (v[n] = t[n]);
      0 == --b && 0 === E && D();
    })(e, t),
      r && r(e, t);
  };
  var o,
    a = !0,
    c = '7700891ce10708d1f3d8',
    i = 1e4,
    d = {},
    l = [],
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
      accept: function(e, n) {
        if (void 0 === e) t._selfAccepted = !0;
        else if ('function' == typeof e) t._selfAccepted = e;
        else if ('object' == typeof e)
          for (var r = 0; r < e.length; r++)
            t._acceptedDependencies[e[r]] = n || function() {};
        else t._acceptedDependencies[e] = n || function() {};
      },
      decline: function(e) {
        if (void 0 === e) t._selfDeclined = !0;
        else if ('object' == typeof e)
          for (var n = 0; n < e.length; n++) t._declinedDependencies[e[n]] = !0;
        else t._declinedDependencies[e] = !0;
      },
      dispose: function(e) {
        t._disposeHandlers.push(e);
      },
      addDisposeHandler: function(e) {
        t._disposeHandlers.push(e);
      },
      removeDisposeHandler: function(e) {
        var n = t._disposeHandlers.indexOf(e);
        n >= 0 && t._disposeHandlers.splice(n, 1);
      },
      check: j,
      apply: k,
      status: function(e) {
        if (!e) return f;
        p.push(e);
      },
      addStatusHandler: function(e) {
        p.push(e);
      },
      removeStatusHandler: function(e) {
        var t = p.indexOf(e);
        t >= 0 && p.splice(t, 1);
      },
      data: d[e],
    };
    return (o = void 0), t;
  }
  var p = [],
    f = 'idle';
  function h(e) {
    f = e;
    for (var t = 0; t < p.length; t++) p[t].call(null, e);
  }
  var m,
    v,
    y,
    b = 0,
    E = 0,
    w = {},
    g = {},
    O = {};
  function _(e) {
    return +e + '' === e ? +e : e;
  }
  function j(e) {
    if ('idle' !== f) throw new Error('check() is only allowed in idle status');
    return (
      (a = e),
      h('check'),
      ((t = i),
      (t = t || 1e4),
      new Promise(function(e, n) {
        if ('undefined' == typeof XMLHttpRequest)
          return n(new Error('No browser support'));
        try {
          var r = new XMLHttpRequest(),
            o = I.p + '' + c + '.hot-update.json';
          r.open('GET', o, !0), (r.timeout = t), r.send(null);
        } catch (e) {
          return n(e);
        }
        r.onreadystatechange = function() {
          if (4 === r.readyState)
            if (0 === r.status)
              n(new Error('Manifest request to ' + o + ' timed out.'));
            else if (404 === r.status) e();
            else if (200 !== r.status && 304 !== r.status)
              n(new Error('Manifest request to ' + o + ' failed.'));
            else {
              try {
                var t = JSON.parse(r.responseText);
              } catch (e) {
                return void n(e);
              }
              e(t);
            }
        };
      })).then(function(e) {
        if (!e) return h('idle'), null;
        (g = {}), (w = {}), (O = e.c), (y = e.h), h('prepare');
        var t = new Promise(function(e, t) {
          m = { resolve: e, reject: t };
        });
        for (var n in ((v = {}), x)) P(n);
        return 'prepare' === f && 0 === E && 0 === b && D(), t;
      })
    );
    var t;
  }
  function P(e) {
    O[e]
      ? ((g[e] = !0),
        b++,
        (function(e) {
          var t = document.createElement('script');
          (t.charset = 'utf-8'),
            (t.src = I.p + '' + e + '.' + c + '.hot-update.js'),
            document.head.appendChild(t);
        })(e))
      : (w[e] = !0);
  }
  function D() {
    h('ready');
    var e = m;
    if (((m = null), e))
      if (a)
        Promise.resolve()
          .then(function() {
            return k(a);
          })
          .then(
            function(t) {
              e.resolve(t);
            },
            function(t) {
              e.reject(t);
            }
          );
      else {
        var t = [];
        for (var n in v)
          Object.prototype.hasOwnProperty.call(v, n) && t.push(_(n));
        e.resolve(t);
      }
  }
  function k(t) {
    if ('ready' !== f)
      throw new Error('apply() is only allowed in ready status');
    var n, r, o, a, i;
    function u(e) {
      for (
        var t = [e],
          n = {},
          r = t.map(function(e) {
            return { chain: [e], id: e };
          });
        r.length > 0;

      ) {
        var o = r.pop(),
          c = o.id,
          i = o.chain;
        if ((a = H[c]) && !a.hot._selfAccepted) {
          if (a.hot._selfDeclined)
            return { type: 'self-declined', chain: i, moduleId: c };
          if (a.hot._main) return { type: 'unaccepted', chain: i, moduleId: c };
          for (var d = 0; d < a.parents.length; d++) {
            var l = a.parents[d],
              u = H[l];
            if (u) {
              if (u.hot._declinedDependencies[c])
                return {
                  type: 'declined',
                  chain: i.concat([l]),
                  moduleId: c,
                  parentId: l,
                };
              -1 === t.indexOf(l) &&
                (u.hot._acceptedDependencies[c]
                  ? (n[l] || (n[l] = []), s(n[l], [c]))
                  : (delete n[l],
                    t.push(l),
                    r.push({ chain: i.concat([l]), id: l })));
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
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        -1 === e.indexOf(r) && e.push(r);
      }
    }
    t = t || {};
    var p = {},
      m = [],
      b = {},
      E = function() {
        console.warn(
          '[HMR] unexpected require(' + g.moduleId + ') to disposed module'
        );
      };
    for (var w in v)
      if (Object.prototype.hasOwnProperty.call(v, w)) {
        var g;
        i = _(w);
        var j = !1,
          P = !1,
          D = !1,
          k = '';
        switch (
          ((g = v[w] ? u(i) : { type: 'disposed', moduleId: w }).chain &&
            (k = '\nUpdate propagation: ' + g.chain.join(' -> ')),
          g.type)
        ) {
          case 'self-declined':
            t.onDeclined && t.onDeclined(g),
              t.ignoreDeclined ||
                (j = new Error(
                  'Aborted because of self decline: ' + g.moduleId + k
                ));
            break;
          case 'declined':
            t.onDeclined && t.onDeclined(g),
              t.ignoreDeclined ||
                (j = new Error(
                  'Aborted because of declined dependency: ' +
                    g.moduleId +
                    ' in ' +
                    g.parentId +
                    k
                ));
            break;
          case 'unaccepted':
            t.onUnaccepted && t.onUnaccepted(g),
              t.ignoreUnaccepted ||
                (j = new Error(
                  'Aborted because ' + i + ' is not accepted' + k
                ));
            break;
          case 'accepted':
            t.onAccepted && t.onAccepted(g), (P = !0);
            break;
          case 'disposed':
            t.onDisposed && t.onDisposed(g), (D = !0);
            break;
          default:
            throw new Error('Unexception type ' + g.type);
        }
        if (j) return h('abort'), Promise.reject(j);
        if (P)
          for (i in ((b[i] = v[i]),
          s(m, g.outdatedModules),
          g.outdatedDependencies))
            Object.prototype.hasOwnProperty.call(g.outdatedDependencies, i) &&
              (p[i] || (p[i] = []), s(p[i], g.outdatedDependencies[i]));
        D && (s(m, [g.moduleId]), (b[i] = E));
      }
    var N,
      A = [];
    for (r = 0; r < m.length; r++)
      (i = m[r]),
        H[i] &&
          H[i].hot._selfAccepted &&
          b[i] !== E &&
          A.push({ module: i, errorHandler: H[i].hot._selfAccepted });
    h('dispose'),
      Object.keys(O).forEach(function(e) {
        !1 === O[e] &&
          (function(e) {
            delete x[e];
          })(e);
      });
    for (var M, C, S = m.slice(); S.length > 0; )
      if (((i = S.pop()), (a = H[i]))) {
        var T = {},
          U = a.hot._disposeHandlers;
        for (o = 0; o < U.length; o++) (n = U[o])(T);
        for (
          d[i] = T, a.hot.active = !1, delete H[i], delete p[i], o = 0;
          o < a.children.length;
          o++
        ) {
          var q = H[a.children[o]];
          q && ((N = q.parents.indexOf(i)) >= 0 && q.parents.splice(N, 1));
        }
      }
    for (i in p)
      if (Object.prototype.hasOwnProperty.call(p, i) && (a = H[i]))
        for (C = p[i], o = 0; o < C.length; o++)
          (M = C[o]),
            (N = a.children.indexOf(M)) >= 0 && a.children.splice(N, 1);
    for (i in (h('apply'), (c = y), b))
      Object.prototype.hasOwnProperty.call(b, i) && (e[i] = b[i]);
    var R = null;
    for (i in p)
      if (Object.prototype.hasOwnProperty.call(p, i) && (a = H[i])) {
        C = p[i];
        var J = [];
        for (r = 0; r < C.length; r++)
          if (((M = C[r]), (n = a.hot._acceptedDependencies[M]))) {
            if (-1 !== J.indexOf(n)) continue;
            J.push(n);
          }
        for (r = 0; r < J.length; r++) {
          n = J[r];
          try {
            n(C);
          } catch (e) {
            t.onErrored &&
              t.onErrored({
                type: 'accept-errored',
                moduleId: i,
                dependencyId: C[r],
                error: e,
              }),
              t.ignoreErrored || R || (R = e);
          }
        }
      }
    for (r = 0; r < A.length; r++) {
      var L = A[r];
      (i = L.module), (l = [i]);
      try {
        I(i);
      } catch (e) {
        if ('function' == typeof L.errorHandler)
          try {
            L.errorHandler(e);
          } catch (n) {
            t.onErrored &&
              t.onErrored({
                type: 'self-accept-error-handler-errored',
                moduleId: i,
                error: n,
                originalError: e,
              }),
              t.ignoreErrored || R || (R = n),
              R || (R = e);
          }
        else
          t.onErrored &&
            t.onErrored({ type: 'self-accept-errored', moduleId: i, error: e }),
            t.ignoreErrored || R || (R = e);
      }
    }
    return R
      ? (h('fail'), Promise.reject(R))
      : (h('idle'),
        new Promise(function(e) {
          e(m);
        }));
  }
  var H = {},
    x = { 0: 0 },
    N = [];
  function I(t) {
    if (H[t]) return H[t].exports;
    var n = (H[t] = {
      i: t,
      l: !1,
      exports: {},
      hot: s(t),
      parents: ((u = l), (l = []), u),
      children: [],
    });
    return (
      e[t].call(
        n.exports,
        n,
        n.exports,
        (function(e) {
          var t = H[e];
          if (!t) return I;
          var n = function(n) {
              return (
                t.hot.active
                  ? (H[n]
                      ? -1 === H[n].parents.indexOf(e) && H[n].parents.push(e)
                      : ((l = [e]), (o = n)),
                    -1 === t.children.indexOf(n) && t.children.push(n))
                  : (console.warn(
                      '[HMR] unexpected require(' +
                        n +
                        ') from disposed module ' +
                        e
                    ),
                    (l = [])),
                I(n)
              );
            },
            r = function(e) {
              return {
                configurable: !0,
                enumerable: !0,
                get: function() {
                  return I[e];
                },
                set: function(t) {
                  I[e] = t;
                },
              };
            };
          for (var a in I)
            Object.prototype.hasOwnProperty.call(I, a) &&
              'e' !== a &&
              't' !== a &&
              Object.defineProperty(n, a, r(a));
          return (
            (n.e = function(e) {
              return (
                'ready' === f && h('prepare'),
                E++,
                I.e(e).then(t, function(e) {
                  throw (t(), e);
                })
              );
              function t() {
                E--,
                  'prepare' === f && (w[e] || P(e), 0 === E && 0 === b && D());
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
    (I.c = H),
    (I.d = function(e, t, n) {
      I.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (I.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (I.t = function(e, t) {
      if ((1 & t && (e = I(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (I.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          I.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (I.n = function(e) {
      var t =
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
  var A = (window.webpackJsonp = window.webpackJsonp || []),
    M = A.push.bind(A);
  (A.push = t), (A = A.slice());
  for (var C = 0; C < A.length; C++) t(A[C]);
  var S = M;
  N.push([36, 1]), n();
})({
  31: function(e, t, n) {},
  32: function(e, t, n) {},
  33: function(e, t, n) {},
  35: function(e, t, n) {},
  36: function(e, t, n) {
    'use strict';
    n.r(t);
    var r = n(0),
      o = n.n(r),
      a = (n(12), n(8)),
      c = (n(14), n(11)),
      i =
        (n(9),
        n(31),
        {
          addToCart: function(e) {
            return { type: 'ADD_TO_CART', payload: e };
          },
        });
    Object(a.b)(function(e) {
      return { products: e.products };
    }, i)(function(e) {
      var t = e.products;
      console.log('prod', t);
      return o.a.createElement(
        'div',
        { className: 'Products' },
        o.a.createElement(
          'div',
          { className: 'Products-items' },
          void 0 !== t
            ? t.map(function(t) {
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
                      onClick: function() {
                        return (function(t) {
                          e.addToCart(t);
                        })(t);
                      },
                    },
                    'Comprar'
                  )
                );
              })
            : 'no hay datos'
        )
      );
    }),
      n(32),
      Object(a.b)(function(e) {
        return { cart: e.cart };
      }, null)(function(e) {
        var t = e.cart;
        return o.a.createElement(
          'div',
          { className: 'Checkout' },
          o.a.createElement(
            'div',
            { className: 'Checkout-content' },
            t.length > 0
              ? o.a.createElement('h3', null, 'Lista de Pedidos:')
              : o.a.createElement('h2', null, 'Sin Pedidos'),
            t.map(function(e) {
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
      }),
      n(33),
      Object(a.b)(function(e) {
        return { cart: e.cart };
      }, null)(function(e) {
        return o.a.createElement(
          'div',
          { className: 'Header' },
          o.a.createElement(
            c.b,
            { to: '/' },
            o.a.createElement('h1', null, 'Platzi Store')
          ),
          o.a.createElement(
            'div',
            { className: 'Header-checkout' },
            o.a.createElement(
              c.b,
              { to: '/checkout' },
              o.a.createElement('i', { className: 'fas fa-shopping-basket' })
            ),
            void 0 !== e.cart && e.cart.length > 0
              ? o.a.createElement(
                  'div',
                  { className: 'Header-alert' },
                  e.cart.length
                )
              : ''
          )
        );
      }),
      n(35);
  },
});
