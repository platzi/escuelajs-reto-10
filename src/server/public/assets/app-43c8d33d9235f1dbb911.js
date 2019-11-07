!(function(e) {
  function t(t) {
    for (
      var r, a, o = t[0], c = t[1], i = t[2], l = 0, d = [];
      l < o.length;
      l++
    )
      (a = o[l]),
        Object.prototype.hasOwnProperty.call(x, a) && x[a] && d.push(x[a][0]),
        (x[a] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    for (C && C(t); d.length; ) d.shift()();
    return A.push.apply(A, i || []), n();
  }
  function n() {
    for (var e, t = 0; t < A.length; t++) {
      for (var n = A[t], r = !0, a = 1; a < n.length; a++) {
        var o = n[a];
        0 !== x[o] && (r = !1);
      }
      r && (A.splice(t--, 1), (e = I((I.s = n[0]))));
    }
    return e;
  }
  var r = window.webpackHotUpdate;
  window.webpackHotUpdate = function(e, t) {
    !(function(e, t) {
      if (!w[e] || !O[e]) return;
      for (var n in ((O[e] = !1), t))
        Object.prototype.hasOwnProperty.call(t, n) && (b[n] = t[n]);
      0 == --y && 0 === g && D();
    })(e, t),
      r && r(e, t);
  };
  var a,
    o = !0,
    c = '43c8d33d9235f1dbb911',
    i = 1e4,
    l = {},
    d = [],
    s = [];
  function u(e) {
    var t = {
      _acceptedDependencies: {},
      _declinedDependencies: {},
      _selfAccepted: !1,
      _selfDeclined: !1,
      _disposeHandlers: [],
      _main: a !== e,
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
      check: P,
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
      data: l[e],
    };
    return (a = void 0), t;
  }
  var p = [],
    f = 'idle';
  function h(e) {
    f = e;
    for (var t = 0; t < p.length; t++) p[t].call(null, e);
  }
  var m,
    b,
    v,
    y = 0,
    g = 0,
    E = {},
    O = {},
    w = {};
  function j(e) {
    return +e + '' === e ? +e : e;
  }
  function P(e) {
    if ('idle' !== f) throw new Error('check() is only allowed in idle status');
    return (
      (o = e),
      h('check'),
      ((t = i),
      (t = t || 1e4),
      new Promise(function(e, n) {
        if ('undefined' == typeof XMLHttpRequest)
          return n(new Error('No browser support'));
        try {
          var r = new XMLHttpRequest(),
            a = I.p + '' + c + '.hot-update.json';
          r.open('GET', a, !0), (r.timeout = t), r.send(null);
        } catch (e) {
          return n(e);
        }
        r.onreadystatechange = function() {
          if (4 === r.readyState)
            if (0 === r.status)
              n(new Error('Manifest request to ' + a + ' timed out.'));
            else if (404 === r.status) e();
            else if (200 !== r.status && 304 !== r.status)
              n(new Error('Manifest request to ' + a + ' failed.'));
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
        (O = {}), (E = {}), (w = e.c), (v = e.h), h('prepare');
        var t = new Promise(function(e, t) {
          m = { resolve: e, reject: t };
        });
        for (var n in ((b = {}), x)) _(n);
        return 'prepare' === f && 0 === g && 0 === y && D(), t;
      })
    );
    var t;
  }
  function _(e) {
    w[e]
      ? ((O[e] = !0),
        y++,
        (function(e) {
          var t = document.createElement('script');
          (t.charset = 'utf-8'),
            (t.src = I.p + '' + e + '.' + c + '.hot-update.js'),
            document.head.appendChild(t);
        })(e))
      : (E[e] = !0);
  }
  function D() {
    h('ready');
    var e = m;
    if (((m = null), e))
      if (o)
        Promise.resolve()
          .then(function() {
            return k(o);
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
        for (var n in b)
          Object.prototype.hasOwnProperty.call(b, n) && t.push(j(n));
        e.resolve(t);
      }
  }
  function k(t) {
    if ('ready' !== f)
      throw new Error('apply() is only allowed in ready status');
    var n, r, a, o, i;
    function s(e) {
      for (
        var t = [e],
          n = {},
          r = t.map(function(e) {
            return { chain: [e], id: e };
          });
        r.length > 0;

      ) {
        var a = r.pop(),
          c = a.id,
          i = a.chain;
        if ((o = H[c]) && !o.hot._selfAccepted) {
          if (o.hot._selfDeclined)
            return { type: 'self-declined', chain: i, moduleId: c };
          if (o.hot._main) return { type: 'unaccepted', chain: i, moduleId: c };
          for (var l = 0; l < o.parents.length; l++) {
            var d = o.parents[l],
              s = H[d];
            if (s) {
              if (s.hot._declinedDependencies[c])
                return {
                  type: 'declined',
                  chain: i.concat([d]),
                  moduleId: c,
                  parentId: d,
                };
              -1 === t.indexOf(d) &&
                (s.hot._acceptedDependencies[c]
                  ? (n[d] || (n[d] = []), u(n[d], [c]))
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
    function u(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        -1 === e.indexOf(r) && e.push(r);
      }
    }
    t = t || {};
    var p = {},
      m = [],
      y = {},
      g = function() {
        console.warn(
          '[HMR] unexpected require(' + O.moduleId + ') to disposed module'
        );
      };
    for (var E in b)
      if (Object.prototype.hasOwnProperty.call(b, E)) {
        var O;
        i = j(E);
        var P = !1,
          _ = !1,
          D = !1,
          k = '';
        switch (
          ((O = b[E] ? s(i) : { type: 'disposed', moduleId: E }).chain &&
            (k = '\nUpdate propagation: ' + O.chain.join(' -> ')),
          O.type)
        ) {
          case 'self-declined':
            t.onDeclined && t.onDeclined(O),
              t.ignoreDeclined ||
                (P = new Error(
                  'Aborted because of self decline: ' + O.moduleId + k
                ));
            break;
          case 'declined':
            t.onDeclined && t.onDeclined(O),
              t.ignoreDeclined ||
                (P = new Error(
                  'Aborted because of declined dependency: ' +
                    O.moduleId +
                    ' in ' +
                    O.parentId +
                    k
                ));
            break;
          case 'unaccepted':
            t.onUnaccepted && t.onUnaccepted(O),
              t.ignoreUnaccepted ||
                (P = new Error(
                  'Aborted because ' + i + ' is not accepted' + k
                ));
            break;
          case 'accepted':
            t.onAccepted && t.onAccepted(O), (_ = !0);
            break;
          case 'disposed':
            t.onDisposed && t.onDisposed(O), (D = !0);
            break;
          default:
            throw new Error('Unexception type ' + O.type);
        }
        if (P) return h('abort'), Promise.reject(P);
        if (_)
          for (i in ((y[i] = b[i]),
          u(m, O.outdatedModules),
          O.outdatedDependencies))
            Object.prototype.hasOwnProperty.call(O.outdatedDependencies, i) &&
              (p[i] || (p[i] = []), u(p[i], O.outdatedDependencies[i]));
        D && (u(m, [O.moduleId]), (y[i] = g));
      }
    var A,
      N = [];
    for (r = 0; r < m.length; r++)
      (i = m[r]),
        H[i] &&
          H[i].hot._selfAccepted &&
          y[i] !== g &&
          N.push({ module: i, errorHandler: H[i].hot._selfAccepted });
    h('dispose'),
      Object.keys(w).forEach(function(e) {
        !1 === w[e] &&
          (function(e) {
            delete x[e];
          })(e);
      });
    for (var S, M, C = m.slice(); C.length > 0; )
      if (((i = C.pop()), (o = H[i]))) {
        var T = {},
          z = o.hot._disposeHandlers;
        for (a = 0; a < z.length; a++) (n = z[a])(T);
        for (
          l[i] = T, o.hot.active = !1, delete H[i], delete p[i], a = 0;
          a < o.children.length;
          a++
        ) {
          var q = H[o.children[a]];
          q && ((A = q.parents.indexOf(i)) >= 0 && q.parents.splice(A, 1));
        }
      }
    for (i in p)
      if (Object.prototype.hasOwnProperty.call(p, i) && (o = H[i]))
        for (M = p[i], a = 0; a < M.length; a++)
          (S = M[a]),
            (A = o.children.indexOf(S)) >= 0 && o.children.splice(A, 1);
    for (i in (h('apply'), (c = v), y))
      Object.prototype.hasOwnProperty.call(y, i) && (e[i] = y[i]);
    var R = null;
    for (i in p)
      if (Object.prototype.hasOwnProperty.call(p, i) && (o = H[i])) {
        M = p[i];
        var U = [];
        for (r = 0; r < M.length; r++)
          if (((S = M[r]), (n = o.hot._acceptedDependencies[S]))) {
            if (-1 !== U.indexOf(n)) continue;
            U.push(n);
          }
        for (r = 0; r < U.length; r++) {
          n = U[r];
          try {
            n(M);
          } catch (e) {
            t.onErrored &&
              t.onErrored({
                type: 'accept-errored',
                moduleId: i,
                dependencyId: M[r],
                error: e,
              }),
              t.ignoreErrored || R || (R = e);
          }
        }
      }
    for (r = 0; r < N.length; r++) {
      var J = N[r];
      (i = J.module), (d = [i]);
      try {
        I(i);
      } catch (e) {
        if ('function' == typeof J.errorHandler)
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
    A = [];
  function I(t) {
    if (H[t]) return H[t].exports;
    var n = (H[t] = {
      i: t,
      l: !1,
      exports: {},
      hot: u(t),
      parents: ((s = d), (d = []), s),
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
                      : ((d = [e]), (a = n)),
                    -1 === t.children.indexOf(n) && t.children.push(n))
                  : (console.warn(
                      '[HMR] unexpected require(' +
                        n +
                        ') from disposed module ' +
                        e
                    ),
                    (d = [])),
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
          for (var o in I)
            Object.prototype.hasOwnProperty.call(I, o) &&
              'e' !== o &&
              't' !== o &&
              Object.defineProperty(n, o, r(o));
          return (
            (n.e = function(e) {
              return (
                'ready' === f && h('prepare'),
                g++,
                I.e(e).then(t, function(e) {
                  throw (t(), e);
                })
              );
              function t() {
                g--,
                  'prepare' === f && (E[e] || _(e), 0 === g && 0 === y && D());
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
  var N = (window.webpackJsonp = window.webpackJsonp || []),
    S = N.push.bind(N);
  (N.push = t), (N = N.slice());
  for (var M = 0; M < N.length; M++) t(N[M]);
  var C = S;
  A.push([36, 1]), n();
})({
  31: function(e, t, n) {},
  32: function(e, t, n) {},
  33: function(e, t, n) {},
  35: function(e, t, n) {},
  36: function(e, t, n) {
    'use strict';
    n.r(t);
    var r = n(0),
      a = n.n(r),
      o = n(12),
      c = n(8),
      i = n(14),
      l = n(11),
      d = n(9),
      s =
        (n(31),
        {
          addToCart: function(e) {
            return { type: 'ADD_TO_CART', payload: e };
          },
        }),
      u = Object(c.b)(function(e) {
        return { products: e.products };
      }, s)(function(e) {
        var t = e.products;
        return a.a.createElement(
          'div',
          { className: 'Products' },
          a.a.createElement(
            'div',
            { className: 'Products-items' },
            t.map(function(t) {
              return a.a.createElement(
                'div',
                { className: 'Products-item', key: t.id },
                a.a.createElement('img', { src: t.image, alt: t.title }),
                a.a.createElement(
                  'div',
                  { className: 'Products-item-info' },
                  a.a.createElement(
                    'h2',
                    null,
                    t.title,
                    a.a.createElement('span', null, '$', t.price)
                  ),
                  a.a.createElement('p', null, t.description)
                ),
                a.a.createElement(
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
          )
        );
      }),
      p = function() {
        return a.a.createElement(u, null);
      },
      f =
        (n(32),
        Object(c.b)(function(e) {
          return { cart: e.cart };
        }, null)(function(e) {
          var t = e.cart;
          return a.a.createElement(
            'div',
            { className: 'Checkout' },
            a.a.createElement(
              'div',
              { className: 'Checkout-content' },
              t.length > 0
                ? a.a.createElement('h3', null, 'Lista de Pedidos:')
                : a.a.createElement('h2', null, 'Sin Pedidos'),
              t.map(function(e) {
                return a.a.createElement(
                  'div',
                  { className: 'Checkout-item' },
                  a.a.createElement(
                    'div',
                    { className: 'Checkout-element' },
                    a.a.createElement('h4', null, e.title),
                    a.a.createElement('span', null, '$', e.price)
                  ),
                  a.a.createElement('i', { className: 'fas fa-trash-alt' })
                );
              })
            ),
            t.length > 0 &&
              a.a.createElement(
                'div',
                { className: 'Checkout-sidebar' },
                a.a.createElement('h3', null, 'Precio Total:'),
                a.a.createElement('h4', null, '$')
              )
          );
        })),
      h =
        (n(33),
        Object(c.b)(function(e) {
          return { cart: e.cart };
        }, null)(function(e) {
          return a.a.createElement(
            'div',
            { className: 'Header' },
            a.a.createElement(
              l.b,
              { to: '/' },
              a.a.createElement('h1', null, 'Platzi Store')
            ),
            a.a.createElement(
              'div',
              { className: 'Header-checkout' },
              a.a.createElement(
                l.b,
                { to: '/checkout' },
                a.a.createElement('i', { className: 'fas fa-shopping-basket' })
              ),
              e.cart.length > 0 &&
                a.a.createElement(
                  'div',
                  { className: 'Header-alert' },
                  e.cart.length
                )
            )
          );
        })),
      m = function() {
        return a.a.createElement(
          'div',
          null,
          a.a.createElement('p', null, 'Todos los Izquierdos Reservados')
        );
      },
      b =
        (n(35),
        function(e) {
          var t = e.children;
          return a.a.createElement(
            'div',
            { className: 'Main' },
            a.a.createElement(h, null),
            t,
            a.a.createElement(m, null)
          );
        }),
      v = function() {
        return a.a.createElement('h1', null, 'No Encontrado');
      },
      y = function() {
        return a.a.createElement(
          l.a,
          null,
          a.a.createElement(
            b,
            null,
            a.a.createElement(
              d.c,
              null,
              a.a.createElement(d.a, { exact: !0, path: '/', component: p }),
              a.a.createElement(d.a, {
                exact: !0,
                path: '/checkout',
                component: f,
              }),
              a.a.createElement(d.a, { component: v })
            )
          )
        );
      };
    function g(e) {
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
            '[object Arguments]' === Object.prototype.toString.call(e)
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
    function E(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function O(e, t, n) {
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
    var w = function(e, t) {
        switch (t.type) {
          case 'ADD_TO_CART':
            return (function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? E(n, !0).forEach(function(t) {
                      O(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : E(n).forEach(function(t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            })({}, e, { cart: [].concat(g(e.cart), [t.payload]) });
          default:
            return e;
        }
      },
      j = Object(i.b)(w, {
        cart: [],
        products: [
          {
            id: '1',
            image: 'https://arepa.s3.amazonaws.com/camiseta.png',
            title: 'Camiseta',
            price: 25,
            description: 'bla bla bla bla bla',
          },
          {
            id: '3',
            image: 'https://arepa.s3.amazonaws.com/mug.png',
            title: 'Mug',
            price: 10,
            description: 'bla bla bla bla bla',
          },
          {
            id: '4',
            image: 'https://arepa.s3.amazonaws.com/pin.png',
            title: 'Pin',
            price: 4,
            description: 'bla bla bla bla bla',
          },
          {
            id: '5',
            image: 'https://arepa.s3.amazonaws.com/stickers1.png',
            title: 'Stickers',
            price: 2,
            description: 'bla bla bla bla bla',
          },
          {
            id: '6',
            image: 'https://arepa.s3.amazonaws.com/stickers2.png',
            title: 'Stickers',
            price: 2,
            description: 'bla bla bla bla bla',
          },
          {
            id: '7',
            image: 'https://arepa.s3.amazonaws.com/hoodie.png',
            title: 'Hoodie',
            price: 35,
            description: 'bla bla bla bla bla',
          },
        ],
      });
    Object(o.hydrate)(
      a.a.createElement(c.a, { store: j }, a.a.createElement(y, null)),
      document.getElementById('app')
    );
  },
});
