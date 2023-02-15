(() => {
  var t = {
      501: () => {
        var t = document.querySelector(".js-infobar");
        if (t) {
          function e() {
            var e = t.getBoundingClientRect(),
              n = Math.max(e.bottom, 0);
            document.body.style.setProperty("--infobar-push", n + "px");
          }
          document.addEventListener("scroll", e), e();
        }
      },
      547: () => {
        document.querySelector(".c-canvas")
          ? setTimeout(function () {
              document.body.classList.remove("is-hide-cookie-banner");
            }, 2500)
          : document.body.classList.remove("is-hide-cookie-banner");
      },
      699: () => {
        var t = document.querySelector(".js-horizontal-lines"),
          e = document.querySelector(".js-grid-container");
        if (t && e) {
          var n = [],
            i = parseInt(e.getAttribute("data-lines-mobile")) || 5;
          function o() {
            var o,
              r = window.innerWidth < 600,
              s = r ? 2 : 6,
              c = r ? 24 : 40,
              a = r ? 0 : 40,
              u = (document.body.clientWidth - 2 * c) / s;
            (o =
              window.innerWidth < 1200
                ? e.offsetHeight / i
                : (window.innerHeight - a) / 7),
              document.body.style.setProperty("--col-size", u + "px"),
              document.body.style.setProperty("--row-size", o + "px");
            for (
              var l = Math.ceil(document.body.clientHeight / o);
              n.length + 1 < l;

            )
              (h = document.createElement("div")).classList.add(
                "c-header__hline"
              ),
                h.style.setProperty("--    e = {};index", n.length.toString()),
                t.appendChild(h),
                n.push(h);
            for (; n.length + 1 > l; ) {
              var h = n.pop();
              t.removeChild(h);
            }
          }
          window.addEventListener("resize", o),
            o(),
            window.addEventListener("load", o);
        }
      },
    },
    e = {};
  function n(i) {
    var o = e[i];
    if (void 0 !== o) return o.exports;
    var r = (e[i] = { exports: {} });
    return t[i](r, r.exports, n), r.exports;
  }
  (n.d = (t, e) => {
    for (var i in e)
      n.o(e, i) &&
        !n.o(t, i) &&
        Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
  }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (() => {
      "use strict";
      var t = {};
      n.r(t),
        n.d(t, {
          facebook: () => At,
          linkedin: () => Pt,
          pinterest: () => Tt,
          reddit: () => jt,
          twitter: () => Ct,
        });
      var e = (function () {
          function t(t, e) {
            (this.limit = 1 / 0),
              (this.calls = 0),
              (this.callback = t),
              (this.context = e);
          }
          return (
            (t.prototype.invoke = function (t) {
              this.callback.apply(this.context, t), this.calls++;
            }),
            t
          );
        })(),
        i = (function () {
          function t() {
            this.listeners = {};
          }
          return (
            (t.prototype.list = function (t) {
              return this.listeners[t] || (this.listeners[t] = []);
            }),
            (t.prototype.on = function (t, n, i) {
              var o = new e(n, i);
              return this.list(t).push(o), o;
            }),
            (t.prototype.few = function (t, e, n, i) {
              var o = this.on(t, e, i);
              return (o.limit = n), o;
            }),
            (t.prototype.once = function (t, e, n) {
              return this.few(t, e, 1, n);
            }),
            (t.prototype.promise = function (t) {
              var e = this;
              return new Promise(function (n) {
                e.once(t, function () {
                  for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                  n(t);
                });
              });
            }),
            (t.prototype.emit = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              var i = [];
              this.list(t).forEach(function (t) {
                t.calls < t.limit && t.invoke(e),
                  t.calls >= t.limit && i.push(t);
              }),
                i.length && this.remove(t, i);
            }),
            (t.prototype.remove = function (t, e) {
              var n = this.list(t);
              (n = e
                ? n.filter(function (t) {
                    return !e.includes(t);
                  })
                : []).length
                ? (this.listeners[t] = n)
                : delete this.listeners[t];
            }),
            (t.prototype.off = function (t, e, n) {
              if (arguments.length > 1) {
                var i = this.list(t).filter(function (t) {
                  var i = !0,
                    o = !0;
                  return (
                    "function" == typeof e && (i = t.callback === e),
                    void 0 !== n && (o = t.context === n),
                    i && o
                  );
                });
                this.remove(t, i);
              } else
                1 === arguments.length ? this.remove(t) : (this.listeners = {});
            }),
            (t.prototype.purge = function (t) {
              for (var e in this.listeners) this.off(e, null, t);
            }),
            (t.prototype.destroy = function () {
              this.listeners = null;
            }),
            t
          );
        })();
      function o(t) {
        return t && "object" == typeof t;
      }
      function r(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        return (
          e.forEach(function (e) {
            if (o(e))
              for (var n in e)
                e.hasOwnProperty(n) &&
                  (o(e[n]) && o(t[n]) ? r(t[n], e[n]) : (t[n] = e[n]));
          }),
          t
        );
      }
      function s(t, e) {
        var n;
        return function () {
          for (var i = [], o = 0; o < arguments.length; o++)
            i[o] = arguments[o];
          clearTimeout(n),
            (n = window.setTimeout(function () {
              t.apply(null, i);
            }, e));
        };
      }
      function c(t, e) {
        var n = null;
        return function () {
          for (var i = [], o = 0; o < arguments.length; o++)
            i[o] = arguments[o];
          var r = Date.now();
          r - n >= e && ((n = r), t.apply(null, i));
        };
      }
      var a,
        u = (function () {
          function t(t, e, n) {
            (this._isInit = !1),
              (this._isDestroyed = !1),
              (this.$name = null),
              (this.$children = []),
              (this.$element = t),
              (this.$options = r({}, this.constructor.defaults, e)),
              (this.$parent = n),
              (this.$emitter = new i()),
              this.create(),
              this.$parent &&
                ((this.$name = this.$parent.constructor.$name(
                  this.constructor
                )),
                this.$parent._addChild(this));
          }
          return (
            (t.$name = function (t) {
              if (!this.components)
                throw new Error("Component has no children: " + this.name);
              var e = Object.entries(this.components)
                .filter(function (e) {
                  return e[1] === t;
                })
                .map(function (t) {
                  return t[0];
                });
              if (1 === e.length) return e[0];
              if (e.length < 1)
                throw new Error(this.name + " has no child: " + t.name);
              if (e.length > 1)
                throw new Error("Subcomponent has multiple names: " + e);
            }),
            (t.prototype.$init = function () {
              this._isInit ||
                (this.$children.forEach(function (t) {
                  return t.$init();
                }),
                this.init(),
                this.$emitter.emit("init"),
                (this._isInit = !0));
            }),
            (t.prototype._ref = function (t, e) {
              void 0 === e && (e = !1);
              var n = "$" + t.$name,
                i = this[n];
              if (Array.isArray(i)) {
                var o = i.indexOf(t),
                  r = o >= 0;
                e ? r && i.splice(o, 1) : r || i.push(t);
              } else e ? i === t && (this[n] = null) : (this[n] = t);
            }),
            (t.prototype._addChild = function (t) {
              this.$children.indexOf(t) < 0 &&
                (this.$children.push(t),
                this._ref(t),
                this.$emitter.emit("add:" + t.$name, t));
            }),
            (t.prototype._removeChild = function (t) {
              var e = this.$children.indexOf(t);
              e >= 0 &&
                (this.$children.splice(e, 1),
                this._ref(t, !0),
                this.$emitter.emit("remove:" + t.$name, t));
            }),
            (t.prototype.$destroy = function () {
              this._isDestroyed ||
                (this.destroy(),
                Array.from(this.$children).forEach(function (t) {
                  t.$destroy();
                }),
                this.$parent && this.$parent._removeChild(this),
                this.$emitter.emit("destroy"),
                (this._isDestroyed = !0));
            }),
            (t.prototype.create = function () {}),
            (t.prototype.init = function () {}),
            (t.prototype.destroy = function () {}),
            (t.isMovable = !0),
            t
          );
        })(),
        l =
          ((a = function (t, e) {
            return (
              (a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                }),
              a(t, e)
            );
          }),
          function (t, e) {
            function n() {
              this.constructor = t;
            }
            a(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n()));
          }),
        h = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.stamp = null),
              (e.isTicking = !1),
              (e.handler = e.run.bind(e)),
              e
            );
          }
          return (
            l(e, t),
            (e.prototype.schedule = function () {
              window.requestAnimationFrame(this.handler);
            }),
            (e.prototype.run = function () {
              if (this.isTicking) {
                var t = Date.now(),
                  e = t - this.stamp;
                this.tick(e), (this.stamp = t), this.schedule();
              }
            }),
            (e.prototype.tick = function (t) {
              this.emit("tick", t);
            }),
            (e.prototype.start = function () {
              (this.isTicking = !0), (this.stamp = Date.now()), this.schedule();
            }),
            (e.prototype.stop = function () {
              this.isTicking = !1;
            }),
            e
          );
        })(i),
        p = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            function i() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((i.prototype = n.prototype), new i()));
          };
        })(),
        f = new ((function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            p(e, t),
            (e.prototype.tick = function (e) {
              var n = this;
              t.prototype.tick.call(this, e),
                this.emit("measure"),
                setTimeout(function () {
                  n.emit("mutate");
                }, 0);
            }),
            e
          );
        })(h))();
      function d(t, e) {
        for (; (t = t.parentElement); ) if (!0 === e(t)) return t;
        return null;
      }
      function m(t) {
        return "A" === t.tagName
          ? t
          : d(t, function (t) {
              return "A" === t.tagName;
            });
      }
      function y(t) {
        return t instanceof Element
          ? t.getBoundingClientRect()
          : t === window
          ? {
              width: window.innerWidth,
              height: window.innerHeight,
              top: 0,
              right: window.innerWidth,
              bottom: window.innerHeight,
              left: 0,
            }
          : void 0;
      }
      f.start();
      var v = /^\-?\d*\.?\d+(?:e-?\d+)?$/;
      function g(t) {
        if ("string" == typeof t) {
          if (t.match(v)) return parseFloat(t);
          if ("true" === t) return !0;
          if ("false" === t) return !1;
          if ("null" === t) return null;
        }
        return t;
      }
      var w = new ((function () {
        function t() {}
        return (
          (t.prototype.init = function (t) {
            (this.input = t),
              (this.index = 0),
              (this.buffer = ""),
              (this.key = null),
              (this.context = null),
              (this.lastContext = null),
              (this.contextStack = []),
              (this.isImplicitContext = null),
              (this.isInQuote = !1),
              (this.isEscapeNext = !1),
              (this.isQuotedToken = !1);
          }),
          (t.prototype.error = function (t) {
            throw new Error(t + " at index " + this.index);
          }),
          (t.prototype.isEmpty = function () {
            return 0 === Object.keys(this.context).length;
          }),
          (t.prototype.isExpectingKey = function () {
            return !this.key && !Array.isArray(this.context);
          }),
          (t.prototype.setContext = function (t) {
            (this.context = t),
              (this.contextStack = [this.context]),
              (this.isImplicitContext = !0);
          }),
          (t.prototype.pushContext = function (t) {
            this.flush(),
              this.lastContext &&
                !this.contextStack.length &&
                this.setContext([this.lastContext]),
              (this.context || this.key) && this.commit(t),
              this.context || (this.isImplicitContext = !1),
              (this.context = t),
              this.contextStack.push(this.context);
          }),
          (t.prototype.popContext = function () {
            this.clear(),
              this.contextStack.length > 0
                ? (this.contextStack.pop(),
                  (this.lastContext = this.context),
                  (this.context =
                    this.contextStack[this.contextStack.length - 1]))
                : this.error("Can not pop context");
          }),
          (t.prototype.commit = function (t) {
            this.context || this.setContext({}),
              this.isQuotedToken ? (this.isQuotedToken = !1) : (t = g(t)),
              Array.isArray(this.context)
                ? this.context.push(t)
                : this.key
                ? (this.context[this.key] = t)
                : this.error("Missing value key"),
              (this.key = null);
          }),
          (t.prototype.flush = function () {
            var t = this.buffer.trim();
            t.length &&
              (this.isExpectingKey() ? (this.key = t) : this.commit(t)),
              (this.buffer = "");
          }),
          (t.prototype.clear = function () {
            this.flush(),
              this.key &&
                ("!" === this.key[0]
                  ? ((this.key = this.key.substr(1)), this.commit(!1))
                  : this.commit(!0));
          }),
          (t.prototype.read = function (t) {
            if (this.isEscapeNext) this.isEscapeNext = !1;
            else if (this.isInQuote) {
              if ("`" === t)
                return (this.isQuotedToken = !0), (this.isInQuote = !1);
              if ("\\" === t) return (this.isEscapeNext = !0);
            } else if (":" === t) {
              if (this.isExpectingKey()) return this.flush();
            } else {
              if ("," === t) return this.clear();
              if ("{" === t) return this.pushContext({});
              if ("[" === t) return this.pushContext([]);
              if ("}" === t || "]" === t) return this.popContext();
              if ("`" === t) return (this.isInQuote = !0);
            }
            this.buffer += t;
          }),
          (t.prototype.next = function () {
            this.read(this.input[this.index]), this.index++;
          }),
          (t.prototype.parse = function (t) {
            if ((this.init(t), "string" != typeof this.input)) return t;
            for (; this.index < this.input.length; ) this.next();
            return (
              this.isInQuote && this.error("Unterminated string"),
              (this.key || this.context) && this.clear(),
              this.context && this.isImplicitContext && this.popContext(),
              this.contextStack.length > 0 && this.error("Unclosed context"),
              this.lastContext ? this.lastContext : g(this.buffer)
            );
          }),
          t
        );
      })())();
      function b(t, e) {
        var n = t.name,
          i = t.value;
        if (n.indexOf(e) >= 0) {
          var o = n.replace(e, ""),
            r = o.split("-"),
            s = r.pop(),
            c = r.join("-"),
            a = r.pop(),
            u = null;
          return (
            a ? (u = n.replace(o, c)) : ((c = null), (a = null)),
            {
              attr: n,
              id: o,
              name: s,
              parentAttr: u,
              parentId: c,
              parentName: a,
              value: i,
            }
          );
        }
        return null;
      }
      var _ = function (t) {
          var e = "function" == typeof Symbol && Symbol.iterator,
            n = e && t[e],
            i = 0;
          if (n) return n.call(t);
          if (t && "number" == typeof t.length)
            return {
              next: function () {
                return (
                  t && i >= t.length && (t = void 0),
                  { value: t && t[i++], done: !t }
                );
              },
            };
          throw new TypeError(
            e ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        },
        $ = (function () {
          function t(t) {
            (this.elements = []), t && this.add(t);
          }
          return (
            (t.prototype.addTarget = function (t) {
              if (t instanceof Element && this.elements.indexOf(t) < 0)
                return this.elements.push(t);
            }),
            (t.prototype.add = function (t) {
              var e, n;
              if (
                (function (t) {
                  return (
                    Array.isArray(t) ||
                    t instanceof NodeList ||
                    t instanceof HTMLCollection
                  );
                })(t)
              )
                try {
                  for (var i = _(t), o = i.next(); !o.done; o = i.next()) {
                    var r = o.value;
                    this.addTarget(r);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    o && !o.done && (n = i.return) && n.call(i);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              else this.addTarget(t);
              return this;
            }),
            (t.prototype.process = function (e) {
              var n,
                i,
                o = new t();
              try {
                for (
                  var r = _(this.elements), s = r.next();
                  !s.done;
                  s = r.next()
                ) {
                  var c = s.value;
                  o.add(e(c));
                }
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  s && !s.done && (i = r.return) && i.call(r);
                } finally {
                  if (n) throw n.error;
                }
              }
              return o;
            }),
            (t.prototype.parent = function (t) {
              return (
                void 0 === t && (t = 1),
                this.process(function (e) {
                  for (var n = t; e && n > 0; ) (e = e.parentElement), n--;
                  return e;
                })
              );
            }),
            (t.prototype.descendant = function (t) {
              return this.process(function (e) {
                for (var n = t; e && n > 0; ) (e = e.children[0]), n--;
                return e;
              });
            }),
            (t.prototype.child = function (t) {
              return (
                void 0 === t && (t = 0),
                this.process(function (e) {
                  var n = e.children;
                  if (n && n[t]) return n[t];
                })
              );
            }),
            (t.prototype.children = function () {
              return this.process(function (t) {
                return t.children;
              });
            }),
            (t.prototype.sibling = function (t) {
              return (
                void 0 === t && (t = 1),
                this.process(function (e) {
                  for (var n = t > 0, i = Math.abs(t); e && i > 0; )
                    (e = n ? e.nextElementSibling : e.previousElementSibling),
                      i--;
                  return e;
                })
              );
            }),
            (t.prototype.select = function (t) {
              return this.process(function (e) {
                if ("string" == typeof t) return e.querySelector(t);
              });
            }),
            (t.prototype.selectAll = function (t) {
              return (
                void 0 === t && (t = "*"),
                this.process(function (e) {
                  if ("string" == typeof t) return e.querySelectorAll(t);
                })
              );
            }),
            (t.prototype.nth = function (t) {
              var e = this.elements[t] || null;
              return (this.elements = e ? [e] : []), this;
            }),
            (t.prototype.first = function () {
              return this.nth(0);
            }),
            (t.prototype.last = function () {
              return this.nth(this.elements.length - 1);
            }),
            t
          );
        })(),
        x = (function () {
          function t() {}
          return (
            (t.prototype.init = function () {
              this.clear(), (this.brackets = 0), (this.data = []);
            }),
            (t.prototype.clear = function () {
              (this.name = ""), (this.arg = "");
            }),
            (t.prototype.commit = function () {
              this.name &&
                (this.data.push({ name: this.name, arg: this.arg || null }),
                this.clear());
            }),
            (t.prototype.read = function (t) {
              if ("(" === t) {
                if ((this.brackets++, 1 === this.brackets)) {
                  if (!this.name) throw new Error("Method name expected");
                  return;
                }
              } else if (")" === t && (this.brackets--, 0 === this.brackets))
                return void this.commit();
              this.brackets
                ? (this.arg += t)
                : "." === t
                ? this.commit()
                : (this.name += t);
            }),
            (t.prototype.parse = function (t) {
              if ((this.init(), "string" == typeof t && t.length)) {
                for (var e = 0; e < t.length; e++) this.read(t[e]);
                this.commit();
              }
              if (this.brackets) throw new Error("Unclosed brackets");
              return this.data;
            }),
            t
          );
        })(),
        E = /^\d+$/,
        S = new x();
      function O(t) {
        if ("string" == typeof t && t.length)
          return t.match(E) ? parseInt(t) : t;
      }
      function L(t, e, n) {
        var i = new $(),
          o = null;
        if (
          ("string" == typeof t && ((e = t), (t = null)), "string" == typeof e)
        ) {
          var r = e.split("@"),
            s = r[0];
          (o = r[1]), s.length && (t = document.querySelectorAll(s));
        }
        var c = t;
        i.add(c),
          o &&
            (i = (function (t, e) {
              var n,
                i,
                o = S.parse(e);
              try {
                for (
                  var r = (function (t) {
                      var e = "function" == typeof Symbol && Symbol.iterator,
                        n = e && t[e],
                        i = 0;
                      if (n) return n.call(t);
                      if (t && "number" == typeof t.length)
                        return {
                          next: function () {
                            return (
                              t && i >= t.length && (t = void 0),
                              { value: t && t[i++], done: !t }
                            );
                          },
                        };
                      throw new TypeError(
                        e
                          ? "Object is not iterable."
                          : "Symbol.iterator is not defined."
                      );
                    })(o),
                    s = r.next();
                  !s.done;
                  s = r.next()
                ) {
                  var c = s.value;
                  if ("function" != typeof t[c.name])
                    throw new Error("Invalid query method: " + c.name);
                  t = t[c.name](O(c.arg));
                }
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  s && !s.done && (i = r.return) && i.call(r);
                } finally {
                  if (n) throw n.error;
                }
              }
              return t;
            })(i, o));
        var a = i.elements,
          u = a.length;
        if (
          "function" == typeof n &&
          ((a = a.filter(function (t) {
            return t instanceof n;
          })),
          u && !a.length)
        )
          throw new Error("No matched elements are of type: " + n.name);
        return a;
      }
      function k(t, e) {
        for (var n in t) {
          var i = t[n];
          "string" == typeof i && 0 === n.indexOf("$")
            ? ((t[n.substr(1)] =
                (void 0, 1 === (o = L(e, i)).length ? o[0] : o)),
              delete t[n])
            : i && "object" == typeof i && k(i, e);
        }
        var o;
      }
      var A = function (t) {
          var e = "function" == typeof Symbol && Symbol.iterator,
            n = e && t[e],
            i = 0;
          if (n) return n.call(t);
          if (t && "number" == typeof t.length)
            return {
              next: function () {
                return (
                  t && i >= t.length && (t = void 0),
                  { value: t && t[i++], done: !t }
                );
              },
            };
          throw new TypeError(
            e ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        },
        C = (function () {
          function t(t, e) {
            var n = this;
            (this.target = t),
              (this.options = r({ prefix: "ob-", components: {} }, e)),
              (this.instances = new Map()),
              (this.observer = new MutationObserver(function (t) {
                return n.handleMutations(t);
              }));
          }
          return (
            (t.prototype.handleMutations = function (t) {
              var e = this,
                n = [],
                i = [],
                o = [];
              t.forEach(function (t) {
                (n = n.concat(Array.from(t.addedNodes))),
                  (i = i.concat(Array.from(t.removedNodes)));
              }),
                (o = n.filter(function (t) {
                  return i.includes(t);
                })),
                (n = n.filter(function (t) {
                  return !o.includes(t);
                })),
                (i = i.filter(function (t) {
                  return !o.includes(t);
                })).forEach(function (t) {
                  return e.iterate(t, "remove");
                }),
                o.forEach(function (t) {
                  return e.iterate(t, "move");
                }),
                n.forEach(function (t) {
                  return e.iterate(t, "add");
                });
            }),
            (t.prototype.iterate = function (t, e) {
              var n = this;
              t instanceof Element &&
                (!0 === this.predicate(t) && this.nodeMatched(t, e),
                Array.from(t.childNodes).forEach(function (t) {
                  n.iterate(t, e);
                }),
                this.nodeSearched(t, e));
            }),
            (t.prototype.predicate = function (t) {
              var e, n;
              try {
                for (
                  var i = A(t.attributes), o = i.next();
                  !o.done;
                  o = i.next()
                )
                  if (0 === o.value.name.indexOf(this.options.prefix))
                    return !0;
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  o && !o.done && (n = i.return) && n.call(i);
                } finally {
                  if (e) throw e.error;
                }
              }
              return !1;
            }),
            (t.prototype.nodeMatched = function (t, e) {
              switch (e) {
                case "add":
                  this.createComponents(t);
                  break;
                case "move":
                  this.moveComponents(t);
                  break;
                case "remove":
                  this.destroyComponents(t);
              }
            }),
            (t.prototype.nodeSearched = function (t, e) {
              ("add" !== e && "move" !== e) || this.initComponents(t);
            }),
            (t.prototype.resolveConstructor = function (t) {
              var e,
                n,
                i,
                o = t.split("-"),
                r = o.shift(),
                s = this.options.components[r];
              if (o.length && s)
                try {
                  for (var c = A(o), a = c.next(); !a.done; a = c.next()) {
                    var u = a.value,
                      l =
                        null === (i = s.components) || void 0 === i
                          ? void 0
                          : i[u];
                    if (!l) throw new Error("Missing child " + u + " in: " + t);
                    s = l;
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    a && !a.done && (n = c.return) && n.call(c);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              if ("function" != typeof s)
                throw new Error("Missing component: " + r);
              return s;
            }),
            (t.prototype.createComponentInstance = function (t, e) {
              var n = this.resolveConstructor(e.id),
                i = null,
                o = null;
              if (
                e.parentAttr &&
                ((i = d(t, function (t) {
                  return t.hasAttribute(e.parentAttr);
                })),
                !(o = this.instance(i, e.parentId)))
              )
                throw new Error(
                  "Parent of " + e.name + " not found: " + e.parentAttr
                );
              var r,
                s =
                  "string" == typeof (r = e.value) && r.length > 0
                    ? "{" === r[0]
                      ? JSON.parse(r)
                      : w.parse(r)
                    : void 0;
              return k(s, t), new n(t, s, o);
            }),
            (t.prototype.getComponentMeta = function (t) {
              var e,
                n,
                i = [];
              try {
                for (
                  var o = A(t.attributes), r = o.next();
                  !r.done;
                  r = o.next()
                ) {
                  var s = b(r.value, this.options.prefix);
                  s && i.push(s);
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  r && !r.done && (n = o.return) && n.call(o);
                } finally {
                  if (e) throw e.error;
                }
              }
              return i;
            }),
            (t.prototype.attempt = function (t) {
              try {
                t();
              } catch (t) {
                console.warn(t);
              }
            }),
            (t.prototype.createComponents = function (t) {
              var e = this,
                n = this.getComponentMeta(t),
                i = this.instances.get(t);
              i || ((i = {}), this.instances.set(t, i)),
                n.forEach(function (n) {
                  i[n.id] ||
                    e.attempt(function () {
                      i[n.id] = e.createComponentInstance(t, n);
                    });
                });
            }),
            (t.prototype.moveComponents = function (t) {
              var e = this,
                n = this.getComponentMeta(t),
                i = this.instances.get(t);
              i || ((i = {}), this.instances.set(t, i)),
                n.forEach(function (n) {
                  var o,
                    r = i[n.id],
                    s =
                      null === (o = null == r ? void 0 : r.constructor) ||
                      void 0 === o
                        ? void 0
                        : o.isMovable;
                  r &&
                    !s &&
                    e.attempt(function () {
                      "function" == typeof r.$destroy && r.$destroy(),
                        (i[n.id] = e.createComponentInstance(t, n));
                    });
                });
            }),
            (t.prototype.initComponents = function (t) {
              var e = this.instances.get(t);
              if (e) {
                var n = function (t) {
                    i.attempt(function () {
                      "function" == typeof e[t].$init && e[t].$init();
                    });
                  },
                  i = this;
                for (var o in e) n(o);
              }
            }),
            (t.prototype.destroyComponents = function (t) {
              var e = this.instances.get(t);
              if (e) {
                var n = function (t) {
                    i.attempt(function () {
                      "function" == typeof e[t].$destroy && e[t].$destroy();
                    }),
                      delete e[t];
                  },
                  i = this;
                for (var o in e) n(o);
                this.instances.delete(t);
              }
            }),
            (t.prototype.init = function () {
              this.observer.observe(this.target, {
                childList: !0,
                subtree: !0,
              }),
                this.iterate(this.target, "add");
            }),
            (t.prototype.instance = function (t, e) {
              var n;
              return null === (n = this.instances.get(t)) || void 0 === n
                ? void 0
                : n[e];
            }),
            (t.prototype.destroy = function () {
              (this.target = null),
                this.instances.clear(),
                this.observer.disconnect();
            }),
            t
          );
        })(),
        P = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            function i() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((i.prototype = n.prototype), new i()));
          };
        })(),
        j = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            P(e, t),
            (e.prototype.init = function () {
              var t = this;
              this.$element.addEventListener("click", function () {
                t.$parent.$parent.toggle(t.$parent);
              });
            }),
            e
          );
        })(u),
        T = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return P(e, t), (e.components = { toggle: j }), e;
        })(u),
        H = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.$item = []), e;
          }
          return (
            P(e, t),
            (e.prototype.init = function () {
              "number" == typeof this.$options.active &&
                this.toggle(this.$item[this.$options.active - 1]);
            }),
            (e.prototype.toggle = function (t) {
              var e = this;
              this.$item.forEach(function (n) {
                n === t
                  ? n.$element.classList.toggle(e.$options.class)
                  : n.$element.classList.remove(e.$options.class);
              });
            }),
            (e.components = { item: T }),
            (e.defaults = { active: null, class: "is-active" }),
            e
          );
        })(u);
      function M(t, e, n) {
        return Math.min(Math.max(t, e), n);
      }
      var R = (function () {
          function t(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), this.set(t, e);
          }
          return (
            (t.prototype.copy = function () {
              return new t(this.x, this.y);
            }),
            (t.prototype.set = function (e, n) {
              "number" == typeof e
                ? ((this.x = e), (this.y = n))
                : e instanceof t && this.set(e.x, e.y);
            }),
            (t.prototype.add = function (t, e) {
              void 0 === e && (e = 0),
                "number" == typeof t
                  ? this.set(this.x + t, this.y + e)
                  : t instanceof I &&
                    this.add(
                      t.magnitude * Math.cos(t.direction),
                      t.magnitude * Math.sin(t.direction)
                    );
            }),
            (t.prototype.subtract = function (t) {
              return (this.x -= t.x), (this.y -= t.y), this;
            }),
            (t.prototype.to = function (t) {
              return new I(this, t);
            }),
            t
          );
        })(),
        I = (function () {
          function t(t, e) {
            (this.magnitude = 0), (this.direction = 0), t && this.set(t, e);
          }
          return (
            (t.prototype.set = function (t, e) {
              var n = t.x,
                i = t.y;
              e && ((n = e.x - n), (i = e.y - i)),
                (this.magnitude = Math.sqrt(Math.pow(i, 2) + Math.pow(n, 2))),
                (this.direction = Math.atan2(i, n));
            }),
            (t.prototype.add = function (t) {
              var e = new R();
              e.add(this), e.add(t), this.set(e);
            }),
            t
          );
        })(),
        D = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            function i() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((i.prototype = n.prototype), new i()));
          };
        })(),
        U = function (t) {
          var e = "function" == typeof Symbol && Symbol.iterator,
            n = e && t[e],
            i = 0;
          if (n) return n.call(t);
          if (t && "number" == typeof t.length)
            return {
              next: function () {
                return (
                  t && i >= t.length && (t = void 0),
                  { value: t && t[i++], done: !t }
                );
              },
            };
          throw new TypeError(
            e ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        },
        N = (function () {
          function t(t, e) {
            (this.id = t),
              (this.origin = e),
              (this.position = e.copy()),
              (this.positionPrev = null),
              (this.delta = null),
              (this.speed = null);
          }
          return (
            (t.prototype.offset = function () {
              return this.position.copy().subtract(this.origin);
            }),
            t
          );
        })(),
        F = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              (n.mouseStartHandler = n.mouseStart.bind(n)),
              (n.mouseMoveHandler = n.mouseMove.bind(n)),
              (n.mouseEndHandler = n.mouseEnd.bind(n)),
              (n.touchStartHandler = n.touchStart.bind(n)),
              (n.touchMoveHandler = n.touchMove.bind(n)),
              (n.touchEndHandler = n.touchEnd.bind(n)),
              (n.element = e),
              (n.swipes = []),
              n.element.addEventListener("mousedown", n.mouseStartHandler),
              n.element.addEventListener("touchstart", n.touchStartHandler),
              n.element.addEventListener("touchmove", n.touchMoveHandler),
              n.element.addEventListener("touchend", n.touchEndHandler),
              n.element.addEventListener("touchcancel", n.touchEndHandler),
              n
            );
          }
          return (
            D(e, t),
            (e.prototype.getEventPoint = function (t) {
              return new R(t.clientX, t.clientY);
            }),
            (e.prototype.touchStart = function (t) {
              var e, n;
              try {
                for (
                  var i = U(t.changedTouches), o = i.next();
                  !o.done;
                  o = i.next()
                ) {
                  var r = o.value,
                    s = this.getEventPoint(r),
                    c = new N(r.identifier, s);
                  this.swipes.push(c);
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  o && !o.done && (n = i.return) && n.call(i);
                } finally {
                  if (e) throw e.error;
                }
              }
              this.emitStart(t);
            }),
            (e.prototype.touchMove = function (t) {
              var e,
                n,
                i = function (t) {
                  var e = o.swipes.find(function (e) {
                    return e.id === t.identifier;
                  });
                  e && (e.position = o.getEventPoint(t));
                },
                o = this;
              try {
                for (
                  var r = U(t.changedTouches), s = r.next();
                  !s.done;
                  s = r.next()
                )
                  i(s.value);
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  s && !s.done && (n = r.return) && n.call(r);
                } finally {
                  if (e) throw e.error;
                }
              }
              this.emitMove(t);
            }),
            (e.prototype.touchEnd = function (t) {
              var e,
                n,
                i = function (t) {
                  o.swipes = o.swipes.filter(function (e) {
                    return e.id !== t.identifier;
                  });
                },
                o = this;
              try {
                for (
                  var r = U(t.changedTouches), s = r.next();
                  !s.done;
                  s = r.next()
                )
                  i(s.value);
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  s && !s.done && (n = r.return) && n.call(r);
                } finally {
                  if (e) throw e.error;
                }
              }
              this.emitEnd(t);
            }),
            (e.prototype.mouseStart = function (t) {
              var e = this.getEventPoint(t),
                n = new N("mouse", e);
              this.swipes.push(n),
                this.element.addEventListener(
                  "mousemove",
                  this.mouseMoveHandler
                ),
                this.element.addEventListener("mouseup", this.mouseEndHandler),
                this.element.addEventListener(
                  "mouseleave",
                  this.mouseEndHandler
                ),
                this.emitStart(t);
            }),
            (e.prototype.mouseMove = function (t) {
              var e = this.swipes.find(function (t) {
                return "mouse" === t.id;
              });
              e && (e.position = this.getEventPoint(t)), this.emitMove(t);
            }),
            (e.prototype.mouseEnd = function (t) {
              this.element.removeEventListener(
                "mousemove",
                this.mouseMoveHandler
              ),
                this.element.removeEventListener(
                  "mouseup",
                  this.mouseEndHandler
                ),
                this.element.removeEventListener(
                  "mouseleave",
                  this.mouseEndHandler
                ),
                (this.swipes = this.swipes.filter(function (t) {
                  return "mouse" !== t.id;
                })),
                this.emitEnd(t);
            }),
            (e.prototype.emitStart = function (t) {
              1 === this.swipes.length &&
                (this.emit("start", t), f.on("tick", this.handleTick, this)),
                this.emit("down", t);
            }),
            (e.prototype.emitMove = function (t) {
              this.emit("move", t);
            }),
            (e.prototype.emitEnd = function (t) {
              0 === this.swipes.length && (this.emit("end", t), f.purge(this)),
                this.emit("up", t);
            }),
            (e.prototype.handleTick = function (t) {
              this.swipes.forEach(function (e) {
                e.positionPrev &&
                  ((e.delta = new I(e.positionPrev, e.position)),
                  (e.speed = e.delta.magnitude * (1e3 / t))),
                  (e.positionPrev = e.position);
              });
            }),
            e
          );
        })(i),
        q = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            function i() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((i.prototype = n.prototype), new i()));
          };
        })(),
        B = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.location = null),
              (e.marginLeft = 0),
              (e.marginRight = 0),
              (e.width = 0),
              e
            );
          }
          return (
            q(e, t),
            (e.prototype.init = function () {
              this.$element.addEventListener("touchstart", function () {});
            }),
            (e.prototype.update = function () {
              var t = window.getComputedStyle(this.$element);
              (this.marginLeft = parseFloat(t.marginLeft)),
                (this.marginRight = parseFloat(t.marginRight)),
                (this.width = parseFloat(t.width));
            }),
            (e.prototype.space = function () {
              return this.marginLeft + this.width + this.marginRight;
            }),
            e
          );
        })(u),
        z = (function () {
          function t(t, e) {
            (this.items = t), (this.offset = e);
          }
          return (
            (t.prototype.left = function () {
              return this.items[0].location.left;
            }),
            (t.prototype.right = function () {
              return this.items[this.items.length - 1].location.right;
            }),
            (t.prototype.width = function () {
              return this.right() - this.left();
            }),
            (t.prototype.anchor = function (t) {
              var e = t - this.width();
              return this.left() - e * this.offset;
            }),
            (t.prototype.activate = function () {}),
            (t.prototype.deactivate = function () {}),
            t
          );
        })(),
        W = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            function i() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((i.prototype = n.prototype), new i()));
          };
        })(),
        Q = function (t, e) {
          var n = "function" == typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var i,
            o,
            r = n.call(t),
            s = [];
          try {
            for (; (void 0 === e || e-- > 0) && !(i = r.next()).done; )
              s.push(i.value);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              i && !i.done && (n = r.return) && n.call(r);
            } finally {
              if (o) throw o.error;
            }
          }
          return s;
        },
        V = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.$item = []),
              (e.orderIndex = 1),
              (e.clickHandler = e.handleClick.bind(e)),
              (e.resizeHandler = e.handleResize.bind(e)),
              e
            );
          }
          return (
            W(e, t),
            (e.prototype.create = function () {
              this.gesture = new F(this.$element);
            }),
            (e.prototype.init = function () {
              (this.isDraggingLink = null),
                (this.isDrag = null),
                (this.offset = 0),
                (this.offsetRender = 0),
                (this.offsetLogical = 0),
                this.$options.infinite &&
                  ((this.order = (function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                      t = t.concat(Q(arguments[e]));
                    return t;
                  })(this.$item)),
                  this.$options.orderContainer
                    ? (this.orderContainer = this.$options.orderContainer)
                    : (this.orderContainer = this.$element.parentElement),
                  f.on("tick", this.updateOrder, this)),
                this.calc(),
                this.setScreen(this.screens[0]),
                this.update(),
                this.gesture.on("start", this.pointerDown.bind(this)),
                this.gesture.on("end", this.pointerUp.bind(this)),
                this.$element.addEventListener("click", this.clickHandler),
                window.addEventListener("resize", this.resizeHandler);
            }),
            (e.prototype.destroy = function () {
              this.gesture.destroy(),
                f.purge(this),
                this.$element.removeEventListener("click", this.clickHandler),
                window.removeEventListener("resize", this.resizeHandler);
            }),
            (e.prototype.handleClick = function (t) {
              this.isDraggingLink && this.isDrag && t.preventDefault();
            }),
            (e.prototype.handleResize = function () {
              var t = this.screens.indexOf(this.activeScreen);
              this.calc(),
                this.screens[t] && this.setScreen(this.screens[t]),
                this.update();
            }),
            (e.prototype.calc = function () {
              this.calcDimensions(),
                this.calcItemsPerScreen(),
                this.calcScreens();
            }),
            (e.prototype.calcDimensions = function () {
              var t,
                e,
                n = 0;
              try {
                for (
                  var i = (function (t) {
                      var e = "function" == typeof Symbol && Symbol.iterator,
                        n = e && t[e],
                        i = 0;
                      if (n) return n.call(t);
                      if (t && "number" == typeof t.length)
                        return {
                          next: function () {
                            return (
                              t && i >= t.length && (t = void 0),
                              { value: t && t[i++], done: !t }
                            );
                          },
                        };
                      throw new TypeError(
                        e
                          ? "Object is not iterable."
                          : "Symbol.iterator is not defined."
                      );
                    })(this.$item),
                    o = i.next();
                  !o.done;
                  o = i.next()
                ) {
                  var r = o.value;
                  r.update(),
                    (r.location = {
                      left: n + r.marginLeft,
                      right: n + r.marginLeft + r.width,
                    }),
                    (n += r.space());
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  o && !o.done && (e = i.return) && e.call(i);
                } finally {
                  if (t) throw t.error;
                }
              }
              this.width = n;
            }),
            (e.prototype.calcItemsPerScreen = function () {
              "number" == typeof this.$options.itemsPerScreen
                ? (this.itemsPerScreen = this.$options.itemsPerScreen)
                : (this.itemsPerScreen = Math.round(
                    this.$element.offsetWidth / this.$item[0].width
                  ));
            }),
            (e.prototype.calcScreens = function () {
              var t = this,
                e = [],
                n = null;
              this.$item.forEach(function (i) {
                (!n || n.length >= t.itemsPerScreen) && ((n = []), e.push(n)),
                  n.push(i);
              }),
                (this.screens = e.map(function (t) {
                  return new z(t, 0.5);
                }));
            }),
            (e.prototype.pointerDown = function (t) {
              (this.swipe = this.gesture.swipes[0]),
                (this.isDrag = !1),
                (this.isDragging = !1),
                (this.isDraggingLink = !!m(t.target)),
                this.$element.classList.add("is-dragged"),
                "touchstart" !== t.type && t.preventDefault(),
                t.stopPropagation(),
                f.on("tick", this.updateOffsetRender, this);
            }),
            (e.prototype.pointerUp = function () {
              var t = this.swipe.origin.to(this.swipe.position),
                e = Math.sign(Math.cos(t.direction)),
                n = this.getClosestScreen(this.offsetRender);
              this.setScreen(n),
                this.swipe.speed > this.$options.screenChangeSpeed &&
                  (1 === e ? this.prevScreen() : this.nextScreen()),
                (this.swipe = null),
                f.off("tick", this.updateOffsetRender, this),
                this.updateOffsetRender(),
                this.$element.classList.remove("is-dragged");
            }),
            (e.prototype.getClosestScreen = function (t) {
              var e = this;
              return this.screens.reduce(function (n, i) {
                var o = e.getSmallestDelta(t, e.getScreenAnchor(n)),
                  r = e.getSmallestDelta(t, e.getScreenAnchor(i));
                return Math.abs(r) < Math.abs(o) ? i : n;
              });
            }),
            (e.prototype.getSmallestDelta = function (t, e) {
              var n = this,
                i = (e - t) % this.width;
              if (this.$options.infinite) {
                var o = [i, i + this.width, i - this.width];
                return (
                  "number" == typeof this.direction &&
                    (o = o.filter(function (t) {
                      return Math.sign(t) === n.direction;
                    })),
                  o.reduce(function (t, e) {
                    return Math.abs(e) < Math.abs(t) ? e : t;
                  })
                );
              }
              return i;
            }),
            (e.prototype.getScreenAnchor = function (t) {
              return t.anchor(this.$element.offsetWidth);
            }),
            (e.prototype.nextScreen = function () {
              (this.direction = 1),
                this.setScreen(this.getScreenByOffset(1)),
                (this.direction = null);
            }),
            (e.prototype.prevScreen = function () {
              (this.direction = -1),
                this.setScreen(this.getScreenByOffset(-1)),
                (this.direction = null);
            }),
            (e.prototype.getScreenByOffset = function (t) {
              var e = this.screens.indexOf(this.activeScreen) + t;
              return (
                this.$options.infinite &&
                  (e >= this.screens.length
                    ? (e = 0)
                    : e < 0 && (e = this.screens.length - 1)),
                this.screens[e]
              );
            }),
            (e.prototype.setScreen = function (t) {
              if (this.screens.includes(t)) {
                this.$options.infinite
                  ? (this.offset =
                      this.offsetRender +
                      this.getSmallestDelta(
                        this.offsetRender,
                        this.getScreenAnchor(t)
                      ))
                  : (this.offset = this.getScreenAnchor(t));
                var e = this.activeScreen;
                e !== t && (e && e.deactivate(), t.activate()),
                  (this.activeScreen = t),
                  e !== t &&
                    this.$emitter.emit(
                      "slideChange",
                      this.screens.indexOf(t),
                      t
                    );
              }
            }),
            (e.prototype.update = function () {
              this.updateOffsetRender(),
                this.$options.infinite && this.updateOffsetLogical();
            }),
            (e.prototype.updateOffsetRender = function () {
              var t = this.offset;
              if (this.swipe) {
                var e = this.swipe.offset().x;
                (t -= e),
                  !this.isDrag &&
                    Math.abs(e) >= this.$options.clickThreshold &&
                    (this.isDrag = !0);
              }
              this.$options.infinite || (t = this.getConstrainedOffset(t)),
                (this.offsetRender = t),
                this.render();
            }),
            (e.prototype.getConstrainedOffset = function (t) {
              var e = this.getScreenAnchor(this.screens[0]),
                n = this.getScreenAnchor(this.screens[this.screens.length - 1]);
              return t < e
                ? e - this.getOverdrag(e - t)
                : t > n
                ? n + this.getOverdrag(t - n)
                : t;
            }),
            (e.prototype.getOverdrag = function (t) {
              var e = this.$element.offsetWidth * this.$options.overdrag;
              return (t * e) / (t + e);
            }),
            (e.prototype.render = function () {
              this.$element.style.transform =
                "translateX(" + -this.offsetRender + "px)";
            }),
            (e.prototype.updateOffsetLogical = function () {
              var t = this.order[0],
                e = t.location.left - t.marginLeft;
              (this.offsetLogical += this.getSmallestDelta(
                this.offsetLogical,
                e
              )),
                this.renderOffsetLogical();
            }),
            (e.prototype.renderOffsetLogical = function () {
              this.$element.style.left = this.offsetLogical + "px";
            }),
            (e.prototype.updateOrder = function () {
              var t,
                e = this.orderContainer.getBoundingClientRect(),
                n = this.order[0].$element.getBoundingClientRect(),
                i =
                  this.order[
                    this.order.length - 1
                  ].$element.getBoundingClientRect();
              i.right < e.right && n.right <= e.left
                ? (((t = this.order.shift()).$element.style.order =
                    this.orderIndex.toString()),
                  (this.offsetLogical += t.space()),
                  this.order.push(t))
                : n.left > e.left &&
                  i.left >= e.right &&
                  (((t = this.order.pop()).$element.style.order = (-this
                    .orderIndex).toString()),
                  (this.offsetLogical -= t.space()),
                  this.order.unshift(t)),
                t && (this.renderOffsetLogical(), this.orderIndex++);
            }),
            (e.components = { item: B }),
            (e.defaults = {
              clickThreshold: 40,
              screenChangeSpeed: 500,
              overdrag: 0.3,
              infinite: !1,
            }),
            e
          );
        })(u),
        G = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            function i() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((i.prototype = n.prototype), new i()));
          };
        })(),
        X = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            G(e, t),
            (e.prototype.init = function () {
              var t = this;
              this.$element.addEventListener("click", function () {
                t.update(),
                  t.$parent.$rail.setScreen(t.target),
                  t.$parent.$rail.update();
              }),
                this.$parent.$rail.$emitter.on("slideChange", function () {
                  t.update();
                }),
                this.update();
            }),
            (e.prototype.updateTarget = function () {
              var t = this.$parent.$rail,
                e = t.screens.indexOf(t.activeScreen);
              return t.screens[e + 1];
            }),
            (e.prototype.update = function () {
              (this.target = this.updateTarget()),
                this.target
                  ? this.$element.classList.remove("is-disabled")
                  : this.$element.classList.add("is-disabled");
            }),
            e
          );
        })(u),
        Y = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            G(e, t),
            (e.prototype.updateTarget = function () {
              var t = this.$parent.$rail,
                e = t.screens.indexOf(t.activeScreen);
              return t.screens[e - 1];
            }),
            e
          );
        })(X),
        K = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return G(e, t), (e.components = { rail: V, next: X, prev: Y }), e;
        })(u),
        J = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            function i() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((i.prototype = n.prototype), new i()));
          };
        })(),
        Z = (function (t) {
          function e(e) {
            for (var n = [], i = 1; i < arguments.length; i++)
              n[i - 1] = arguments[i];
            var o = t.call(this) || this;
            return (
              (o.memo = {}),
              (o.polls = 0),
              (o.target = e),
              (o.props = n),
              f.on("measure", o.update, o),
              o
            );
          }
          return (
            J(e, t),
            (e.prototype.update = function () {
              var t,
                e,
                n = {},
                i = !1,
                o = 0 === this.polls;
              try {
                for (
                  var r = (function (t) {
                      var e = "function" == typeof Symbol && Symbol.iterator,
                        n = e && t[e],
                        i = 0;
                      if (n) return n.call(t);
                      if (t && "number" == typeof t.length)
                        return {
                          next: function () {
                            return (
                              t && i >= t.length && (t = void 0),
                              { value: t && t[i++], done: !t }
                            );
                          },
                        };
                      throw new TypeError(
                        e
                          ? "Object is not iterable."
                          : "Symbol.iterator is not defined."
                      );
                    })(this.props),
                    s = r.next();
                  !s.done;
                  s = r.next()
                ) {
                  var c = s.value;
                  if (c in this.target) {
                    var a = this.memo[c],
                      u = this.target[c],
                      l = void 0;
                    c in this.memo
                      ? u !== a && (l = { newValue: u, oldValue: a })
                      : (l = { newValue: u, initial: !0 }),
                      l && ((this.memo[c] = l.newValue), (n[c] = l), (i = !0));
                  }
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  s && !s.done && (e = r.return) && e.call(r);
                } finally {
                  if (t) throw t.error;
                }
              }
              o && this.emit("init", this.memo),
                i && this.emit("change", n, o),
                this.polls++;
            }),
            (e.prototype.get = function (t) {
              return this.memo[t];
            }),
            (e.prototype.destroy = function () {
              f.purge(this), t.prototype.destroy.call(this);
            }),
            e
          );
        })(i),
        tt = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            function i() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((i.prototype = n.prototype), new i()));
          };
        })(),
        et = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            tt(e, t),
            (e.prototype.create = function () {
              var t,
                e,
                n,
                i =
                  null !== (t = this.$options.target) && void 0 !== t
                    ? t
                    : this.$element.firstElementChild;
              (this.poller = new Z(i, "offsetHeight")),
                (null === (e = this.$options) || void 0 === e
                  ? void 0
                  : e.var) &&
                  ((this.varName = this.$options.var),
                  (this.varTarget =
                    null !== (n = this.$options.varTarget) && void 0 !== n
                      ? n
                      : this.$element));
            }),
            (e.prototype.init = function () {
              var t = this;
              this.poller.on("change", function (e) {
                t.update(e.offsetHeight.newValue);
              });
            }),
            (e.prototype.update = function (t) {
              var e = t.toString() + "px";
              this.varTarget
                ? this.varTarget.style.setProperty("--" + this.varName, e)
                : t && (this.$element.style.height = e);
            }),
            (e.prototype.destroy = function () {
              this.poller.destroy();
            }),
            e
          );
        })(u);
      function nt(t) {
        return t;
      }
      function it(t) {
        return Math.pow(t - 1, 5) + 1;
      }
      var ot = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            function i() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((i.prototype = n.prototype), new i()));
          };
        })(),
        rt = (function (t) {
          function e(e, n) {
            var i = t.call(this) || this;
            if (
              ((i.duration = e), (i.easing = n), "number" != typeof i.duration)
            )
              throw new Error("Duration must be a number");
            return (
              "function" != typeof i.easing && (i.easing = nt),
              (i.elapsed = 0),
              (i.progress = 0),
              (i.value = 0),
              (i.stamp = Date.now()),
              (i.delta = 0),
              (i.isComplete = !1),
              i
            );
          }
          return (
            ot(e, t),
            (e.prototype.update = function () {
              this.emit("update", this.value);
            }),
            (e.prototype.step = function () {
              var t = this.stamp,
                e = this.isComplete;
              (this.stamp = Date.now()),
                (this.delta = this.stamp - t),
                (this.elapsed += this.delta),
                this.duration > 0
                  ? (this.progress = Math.min(this.elapsed / this.duration, 1))
                  : (this.progress = 1),
                (this.isComplete = 1 === this.progress),
                (this.value = this.easing(this.progress)),
                this.update(),
                !e && this.isComplete && this.emit("end");
            }),
            e
          );
        })(i),
        st = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            function i() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((i.prototype = n.prototype), new i()));
          };
        })(),
        ct = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.isTicking = !1), (e.isRunning = !1), e;
          }
          return (
            st(e, t),
            (e.prototype.run = function () {
              var t = this;
              this.isTicking ||
                (this.isRunning ||
                  ((this.stamp = Date.now()),
                  (this.isRunning = !0),
                  this.emit("start")),
                0 === this.duration && this.step(),
                this.isComplete ||
                  (window.requestAnimationFrame(function () {
                    (t.isTicking = !1), t.isRunning && (t.step(), t.run());
                  }),
                  (this.isTicking = !0)));
            }),
            (e.prototype.stop = function () {
              (this.isRunning = !1), this.emit("stop");
            }),
            e
          );
        })(rt),
        at = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            function i() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((i.prototype = n.prototype), new i()));
          };
        })(),
        ut = (function (t) {
          function e(e) {
            var n,
              i = t.call(this, e.duration, e.easing) || this;
            if (
              ((i.start = document.scrollingElement.scrollTop),
              (i.end = null !== (n = e.offset) && void 0 !== n ? n : 0),
              e.target &&
                (i.end += (function (t, e) {
                  void 0 === e && (e = null);
                  var n = { top: 0, left: 0 };
                  do {
                    (n.top += t.offsetTop),
                      (n.left += t.offsetLeft),
                      (t = t.offsetParent);
                  } while (t !== e);
                  return n;
                })(e.target).top),
              (i.end = Math.min(
                i.end,
                document.scrollingElement.scrollHeight - window.innerHeight
              )),
              !1 !== e.interruptible)
            ) {
              var o = function () {
                i.stop(),
                  window.removeEventListener("wheel", o),
                  window.removeEventListener("touchstart", o);
              };
              window.addEventListener("wheel", o),
                window.addEventListener("touchstart", o);
            }
            return i;
          }
          return (
            at(e, t),
            (e.prototype.update = function () {
              var t = this.end - this.start,
                e = this.start + t * this.value;
              document.scrollingElement &&
                (document.scrollingElement.scrollTop = e);
            }),
            e
          );
        })(ct);
      function lt(t) {
        var e = new ut(t);
        return e.run(), e;
      }
      var ht = (function () {
          function t() {
            var t;
            this.entries =
              (((t = {})[window.location.href] =
                document.documentElement.outerHTML),
              t);
          }
          return (
            (t.prototype.get = function (t) {
              return this.entries[t];
            }),
            (t.prototype.set = function (t, e) {
              return (this.entries[t] = e);
            }),
            (t.prototype.fetch = function (t) {
              return (
                (e = this),
                (n = void 0),
                (o = function () {
                  var e, n, i;
                  return (function (t, e) {
                    var n,
                      i,
                      o,
                      r,
                      s = {
                        label: 0,
                        sent: function () {
                          if (1 & o[0]) throw o[1];
                          return o[1];
                        },
                        trys: [],
                        ops: [],
                      };
                    return (
                      (r = { next: c(0), throw: c(1), return: c(2) }),
                      "function" == typeof Symbol &&
                        (r[Symbol.iterator] = function () {
                          return this;
                        }),
                      r
                    );
                    function c(r) {
                      return function (c) {
                        return (function (r) {
                          if (n)
                            throw new TypeError(
                              "Generator is already executing."
                            );
                          for (; s; )
                            try {
                              if (
                                ((n = 1),
                                i &&
                                  (o =
                                    2 & r[0]
                                      ? i.return
                                      : r[0]
                                      ? i.throw ||
                                        ((o = i.return) && o.call(i), 0)
                                      : i.next) &&
                                  !(o = o.call(i, r[1])).done)
                              )
                                return o;
                              switch (
                                ((i = 0), o && (r = [2 & r[0], o.value]), r[0])
                              ) {
                                case 0:
                                case 1:
                                  o = r;
                                  break;
                                case 4:
                                  return s.label++, { value: r[1], done: !1 };
                                case 5:
                                  s.label++, (i = r[1]), (r = [0]);
                                  continue;
                                case 7:
                                  (r = s.ops.pop()), s.trys.pop();
                                  continue;
                                default:
                                  if (
                                    !(
                                      (o =
                                        (o = s.trys).length > 0 &&
                                        o[o.length - 1]) ||
                                      (6 !== r[0] && 2 !== r[0])
                                    )
                                  ) {
                                    s = 0;
                                    continue;
                                  }
                                  if (
                                    3 === r[0] &&
                                    (!o || (r[1] > o[0] && r[1] < o[3]))
                                  ) {
                                    s.label = r[1];
                                    break;
                                  }
                                  if (6 === r[0] && s.label < o[1]) {
                                    (s.label = o[1]), (o = r);
                                    break;
                                  }
                                  if (o && s.label < o[2]) {
                                    (s.label = o[2]), s.ops.push(r);
                                    break;
                                  }
                                  o[2] && s.ops.pop(), s.trys.pop();
                                  continue;
                              }
                              r = e.call(t, s);
                            } catch (t) {
                              (r = [6, t]), (i = 0);
                            } finally {
                              n = o = 0;
                            }
                          if (5 & r[0]) throw r[1];
                          return { value: r[0] ? r[1] : void 0, done: !0 };
                        })([r, c]);
                      };
                    }
                  })(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (e = this.get(t))
                          ? [3, 2]
                          : ((n = this.set),
                            (i = [t]),
                            [
                              4,
                              fetch(t).then(function (t) {
                                return t.text();
                              }),
                            ]);
                      case 1:
                        (e = n.apply(this, i.concat([o.sent()]))),
                          (o.label = 2);
                      case 2:
                        return [2, e];
                    }
                  });
                }),
                new ((i = void 0) || (i = Promise))(function (t, r) {
                  function s(t) {
                    try {
                      a(o.next(t));
                    } catch (t) {
                      r(t);
                    }
                  }
                  function c(t) {
                    try {
                      a(o.throw(t));
                    } catch (t) {
                      r(t);
                    }
                  }
                  function a(e) {
                    var n;
                    e.done
                      ? t(e.value)
                      : ((n = e.value),
                        n instanceof i
                          ? n
                          : new i(function (t) {
                              t(n);
                            })).then(s, c);
                  }
                  a((o = o.apply(e, n || [])).next());
                })
              );
              var e, n, i, o;
            }),
            t
          );
        })(),
        pt = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            function i() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((i.prototype = n.prototype), new i()));
          };
        })(),
        ft = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            pt(e, t),
            (e.prototype.promiseAnimation = function () {
              var t = this;
              return new Promise(function (e) {
                var n = function () {
                  t.$element.removeEventListener("animationend", n), e();
                };
                t.$element.addEventListener("animationend", n);
              });
            }),
            (e.prototype.animateIn = function () {
              return Promise.resolve();
            }),
            (e.prototype.animateOut = function () {
              return Promise.resolve();
            }),
            e
          );
        })(u),
        dt = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            function i() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((i.prototype = n.prototype), new i()));
          };
        })(),
        mt = function () {
          return (
            (mt =
              Object.assign ||
              function (t) {
                for (var e, n = 1, i = arguments.length; n < i; n++)
                  for (var o in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }),
            mt.apply(this, arguments)
          );
        },
        yt = function (t, e, n, i) {
          return new (n || (n = Promise))(function (o, r) {
            function s(t) {
              try {
                a(i.next(t));
              } catch (t) {
                r(t);
              }
            }
            function c(t) {
              try {
                a(i.throw(t));
              } catch (t) {
                r(t);
              }
            }
            function a(t) {
              var e;
              t.done
                ? o(t.value)
                : ((e = t.value),
                  e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      })).then(s, c);
            }
            a((i = i.apply(t, e || [])).next());
          });
        },
        vt = function (t, e) {
          var n,
            i,
            o,
            r,
            s = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (r = { next: c(0), throw: c(1), return: c(2) }),
            "function" == typeof Symbol &&
              (r[Symbol.iterator] = function () {
                return this;
              }),
            r
          );
          function c(r) {
            return function (c) {
              return (function (r) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((n = 1),
                      i &&
                        (o =
                          2 & r[0]
                            ? i.return
                            : r[0]
                            ? i.throw || ((o = i.return) && o.call(i), 0)
                            : i.next) &&
                        !(o = o.call(i, r[1])).done)
                    )
                      return o;
                    switch (((i = 0), o && (r = [2 & r[0], o.value]), r[0])) {
                      case 0:
                      case 1:
                        o = r;
                        break;
                      case 4:
                        return s.label++, { value: r[1], done: !1 };
                      case 5:
                        s.label++, (i = r[1]), (r = [0]);
                        continue;
                      case 7:
                        (r = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (o = (o = s.trys).length > 0 && o[o.length - 1]) ||
                            (6 !== r[0] && 2 !== r[0])
                          )
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === r[0] &&
                          (!o || (r[1] > o[0] && r[1] < o[3]))
                        ) {
                          s.label = r[1];
                          break;
                        }
                        if (6 === r[0] && s.label < o[1]) {
                          (s.label = o[1]), (o = r);
                          break;
                        }
                        if (o && s.label < o[2]) {
                          (s.label = o[2]), s.ops.push(r);
                          break;
                        }
                        o[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    r = e.call(t, s);
                  } catch (t) {
                    (r = [6, t]), (i = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & r[0]) throw r[1];
                return { value: r[0] ? r[1] : void 0, done: !0 };
              })([r, c]);
            };
          }
        };
      !(function (t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (
            (e.popStateHandler = e.handlePopState.bind(e)),
            (e.clickHandler = e.handleClick.bind(e)),
            (e.scrollHandler = e.handleScroll.bind(e)),
            (e.scrollUpdateDebounced = s(e.scrollUpdate.bind(e), 100)),
            e
          );
        }
        dt(e, t),
          (e.prototype.create = function () {
            (this.cache = new ht()), (this.parser = new DOMParser());
          }),
          (e.prototype.init = function () {
            window.addEventListener("popstate", this.popStateHandler),
              document.addEventListener("click", this.clickHandler),
              document.addEventListener("scroll", this.scrollHandler),
              (history.scrollRestoration = "manual");
          }),
          (e.prototype.changeState = function (t, e) {
            e ? history.pushState(t, "", e) : history.replaceState(t, "");
          }),
          (e.prototype.scrollTo = function (t) {
            var e = this.constructor.defaults,
              n = Object.assign({}, e.scroll, t);
            this.scrollAnimation && this.scrollAnimation.stop(),
              (this.scrollAnimation = lt(n));
          }),
          (e.prototype.getFragmentElement = function (t) {
            return t.hash ? document.querySelector(t.hash) : null;
          }),
          (e.prototype.getContainers = function () {
            var t = [];
            for (var e in this.constructor.components) {
              var n = this["$" + e];
              n && t.push(n);
            }
            return t;
          }),
          (e.prototype.addContainers = function (t) {
            var e = this,
              n = this.getContainers().map(function (n) {
                var i = t.querySelector("[ob-loader-" + n.$name + "]"),
                  o = n.$element.parentElement;
                if (i && n)
                  return (
                    o.insertBefore(i, n.$element),
                    e.$emitter.promise("add:" + n.$name)
                  );
              });
            return Promise.all(n);
          }),
          (e.prototype.showContainers = function () {
            var t = this;
            return Promise.all(
              this.getContainers().map(function (e) {
                return t.interruptify(e.animateIn());
              })
            );
          }),
          (e.prototype.hideContainers = function () {
            var t = this;
            return Promise.all(
              this.getContainers().map(function (e) {
                return t.interruptify(e.animateOut());
              })
            );
          }),
          (e.prototype.removeContainers = function () {
            var t = this.getContainers();
            this.$children.forEach(function (e) {
              t.indexOf(e) < 0 &&
                e.$element.parentElement.removeChild(e.$element);
            });
          }),
          (e.prototype.interruptify = function (t) {
            var e = this;
            return new Promise(function (n, i) {
              var o = !1;
              t
                .then(function () {
                  (o = !0), n();
                })
                .catch(i),
                e.$emitter.once("navigation", function () {
                  o || i(new Error("Interrupted"));
                });
            });
          }),
          (e.prototype.transition = function (t, e, n) {
            var i;
            return yt(this, void 0, void 0, function () {
              var o, r, s, c, a;
              return vt(this, function (u) {
                switch (u.label) {
                  case 0:
                    (o = null), (r = !1), (u.label = 1);
                  case 1:
                    return (
                      u.trys.push([1, 5, , 8]),
                      [
                        4,
                        Promise.all([
                          this.hideContainers(),
                          this.cache.fetch(e).then(function (t) {
                            return (o = t);
                          }),
                        ]),
                      ]
                    );
                  case 2:
                    return (
                      u.sent(),
                      (a = this.parser.parseFromString(o, "text/html")),
                      [4, this.addContainers(a)]
                    );
                  case 3:
                    return (
                      u.sent(),
                      (r = !0),
                      this.removeContainers(),
                      n &&
                        (this.changeState(t, e),
                        (document.title =
                          null === (i = a.querySelector("head title")) ||
                          void 0 === i
                            ? void 0
                            : i.textContent)),
                      (s = this.getFragmentElement(new URL(e))),
                      (c = {}),
                      s && s
                        ? (c.target = s)
                        : "number" == typeof t.scroll && (c.offset = t.scroll),
                      this.scrollTo(c),
                      [4, this.showContainers()]
                    );
                  case 4:
                    return u.sent(), [3, 8];
                  case 5:
                    return (
                      u.sent(),
                      !o || r
                        ? [3, 7]
                        : ((a = this.parser.parseFromString(o, "text/html")),
                          [4, this.addContainers(a)])
                    );
                  case 6:
                    u.sent(),
                      (document.scrollingElement.scrollTop = t.scroll),
                      this.removeContainers(),
                      (u.label = 7);
                  case 7:
                    return [3, 8];
                  case 8:
                    return (this.promiseTransition = null), [2];
                }
              });
            });
          }),
          (e.prototype.performTransition = function (t, e, n) {
            return (
              void 0 === n && (n = !1),
              yt(this, void 0, void 0, function () {
                return vt(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        this.$emitter.emit("navigation"),
                        this.promiseTransition
                          ? [4, this.promiseTransition]
                          : [3, 2]
                      );
                    case 1:
                      i.sent(), (i.label = 2);
                    case 2:
                      return (
                        (this.promiseTransition = this.transition(t, e, n)), [2]
                      );
                  }
                });
              })
            );
          }),
          (e.prototype.handleClick = function (t) {
            if (t.target instanceof Element) {
              var e = m(t.target);
              if (e) {
                var n = e.getAttribute("href"),
                  i = e.getAttribute("target");
                n && !0 === this.handleNavigation(n, i) && t.preventDefault();
              }
            }
          }),
          (e.prototype.handleNavigation = function (t, e) {
            var n = new URL(t, window.location.href),
              i = n.host === window.location.host,
              o = n.pathname === window.location.pathname,
              r = i && "_blank" !== e,
              s = r && o && n.hash;
            if (r)
              return s
                ? ((this.isIgnoreNextPop = !0),
                  this.scrollTo({ target: this.getFragmentElement(n) }),
                  !1)
                : (this.performTransition({ scroll: 0 }, n.href, !0), !0);
          }),
          (e.prototype.handlePopState = function () {
            this.isIgnoreNextPop
              ? (this.isIgnoreNextPop = !1)
              : this.performTransition(history.state, window.location.href);
          }),
          (e.prototype.handleScroll = function () {
            this.promiseTransition || this.scrollUpdateDebounced();
          }),
          (e.prototype.scrollUpdate = function () {
            this.changeState(
              mt(mt({}, history.state), {
                scroll: document.scrollingElement.scrollTop,
              })
            );
          }),
          (e.prototype.destroy = function () {
            window.removeEventListener("popstate", this.popStateHandler),
              document.removeEventListener("click", this.clickHandler),
              document.removeEventListener("scroll", this.scrollHandler);
          }),
          (e.components = { container: ft }),
          (e.defaults = { scroll: { duration: 1e3, easing: it } });
      })(u);
      var gt = (function () {
        var t = function (e, n) {
          return (
            (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              }),
            t(e, n)
          );
        };
        return function (e, n) {
          function i() {
            this.constructor = e;
          }
          t(e, n),
            (e.prototype =
              null === n
                ? Object.create(n)
                : ((i.prototype = n.prototype), new i()));
        };
      })();
      function wt(t) {
        return (
          t.offsetTop +
          t.offsetHeight +
          parseInt(window.getComputedStyle(t).marginBottom)
        );
      }
      var bt = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            gt(e, t),
            (e.prototype.init = function () {
              var t = this;
              (this.poller = new Z(this.$element, "offsetTop", "offsetHeight")),
                this.poller.on("change", function () {
                  t.$parent.update();
                });
            }),
            (e.prototype.destroy = function () {
              this.poller.destroy();
            }),
            e
          );
        })(u),
        _t = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.$item = []), e;
          }
          return (
            gt(e, t),
            (e.prototype.init = function () {
              this.update();
            }),
            (e.prototype.update = function () {
              this.$item.forEach(function (t) {
                t.$element.style.marginTop = "";
              });
              var t = [];
              this.$item.forEach(function (e) {
                var n = e.$element,
                  i = t
                    .filter(function (t) {
                      return (
                        t.offsetTop < n.offsetTop &&
                        ((i = t),
                        (o = (e = n).offsetWidth / 2),
                        (r = i.offsetWidth / 2),
                        (s = e.offsetLeft + o),
                        (c = i.offsetLeft + r),
                        Math.abs(s - c) < o + r - 1)
                      );
                      var e, i, o, r, s, c;
                    })
                    .reduce(function (t, e) {
                      return t ? (wt(e) > wt(t) ? e : t) : e;
                    }, null);
                if (i) {
                  var o = parseInt(window.getComputedStyle(n).marginTop),
                    r = wt(i) - n.offsetTop + 2 * o;
                  r !== o && (n.style.marginTop = r + "px");
                }
                t.push(n);
              });
            }),
            (e.components = { item: bt }),
            e
          );
        })(u),
        $t = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            function i() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((i.prototype = n.prototype), new i()));
          };
        })();
      !(function (t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (e.scrollHandler = e.update.bind(e)), e;
        }
        $t(e, t),
          (e.prototype.init = function () {
            (this.reference = this.$options.reference),
              this.reference.addEventListener("scroll", this.scrollHandler),
              this.update();
          }),
          (e.prototype.update = function () {
            var t = this.getValue();
            this.$options.clamp && (t = M(t, 0, 1)),
              (t = this.transform(t)),
              this.apply(t);
          }),
          (e.prototype.getValue = function () {
            var t = this.$element.getBoundingClientRect(),
              e = y(this.reference);
            return this.calculate(t, e, this.$options.axis);
          }),
          (e.prototype.calculate = function (t, e, n) {
            var i, o, r;
            return (
              "x" === n
                ? ((i = e.width), (o = t.left - e.left), (r = t.width))
                : ((i = e.height), (o = t.top - e.top), (r = t.height)),
              (i - o) / (r + i)
            );
          }),
          (e.prototype.transform = function (t) {
            return 2 * (0.5 - t);
          }),
          (e.prototype.apply = function (t) {
            this.$element.style.setProperty(
              "--" + this.$options.var,
              t.toString()
            );
          }),
          (e.prototype.destroy = function () {
            this.reference.removeEventListener("scroll", this.scrollHandler);
          }),
          (e.defaults = {
            var: "parallax",
            axis: "y",
            clamp: !0,
            reference: window,
          });
      })(u);
      var xt = (function () {
        var t = function (e, n) {
          return (
            (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              }),
            t(e, n)
          );
        };
        return function (e, n) {
          function i() {
            this.constructor = e;
          }
          t(e, n),
            (e.prototype =
              null === n
                ? Object.create(n)
                : ((i.prototype = n.prototype), new i()));
        };
      })();
      !(function (t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (e.clickHandler = e.handleClick.bind(e)), e;
        }
        xt(e, t),
          (e.clickHandler = function (t) {
            var e = this;
            return function (n) {
              var i = m(n.target),
                o = null == i ? void 0 : i.getAttribute("href");
              if (o) {
                var s = new URL(o, window.location.href);
                if (
                  s.hash &&
                  s.origin === window.location.origin &&
                  s.pathname === window.location.pathname
                ) {
                  var c = document.querySelector(o);
                  lt(r({}, e.defaults, t, { target: c }));
                }
              }
            };
          }),
          (e.prototype.init = function () {
            this.$element.addEventListener("click", this.clickHandler);
          }),
          (e.prototype.handleClick = function () {
            lt(this.$options);
          }),
          (e.prototype.destroy = function () {
            this.$element.removeEventListener("click", this.clickHandler);
          }),
          (e.defaults = { duration: 1e3, easing: it });
      })(u);
      var Et = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            function i() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((i.prototype = n.prototype), new i()));
          };
        })(),
        St = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.scrollHandler = e.update.bind(e)), e;
          }
          return (
            Et(e, t),
            (e.prototype.init = function () {
              window.addEventListener("scroll", this.scrollHandler);
            }),
            (e.prototype.update = function () {
              var t = this.position;
              (this.position = document.scrollingElement.scrollTop),
                this.updateScrolled(
                  this.position > this.$options.slackScrolled
                );
              var e = t < this.position;
              if (e !== this.isDown)
                (this.positionAnchor = this.position), (this.isDown = e);
              else if ("number" == typeof this.positionAnchor) {
                var n = this.position - this.positionAnchor;
                n > this.$options.slack
                  ? ((this.positionAnchor = null), this.updateActive(!1))
                  : n < -this.$options.slackActive &&
                    ((this.positionAnchor = null), this.updateActive(!0));
              }
            }),
            (e.prototype.updateScrolled = function (t) {
              t
                ? this.$element.classList.add(this.$options.classScrolled)
                : this.$element.classList.remove(this.$options.classScrolled);
            }),
            (e.prototype.updateActive = function (t) {
              t
                ? this.$element.classList.add(this.$options.classActive)
                : this.$element.classList.remove(this.$options.classActive);
            }),
            (e.prototype.destroy = function () {
              window.removeEventListener("scroll", this.scrollHandler);
            }),
            (e.defaults = {
              slack: 200,
              slackActive: 20,
              slackScrolled: 10,
              classActive: "is-scrolled-up",
              classScrolled: "is-scrolled",
            }),
            e
          );
        })(u),
        Ot = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            function i() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((i.prototype = n.prototype), new i()));
          };
        })(),
        Lt = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.updateHandler = c(e.update.bind(e), 80)), e;
          }
          return (
            Ot(e, t),
            (e.prototype.init = function () {
              window.addEventListener("scroll", this.updateHandler),
                window.addEventListener("resize", this.updateHandler),
                this.update();
            }),
            (e.prototype.destroy = function () {
              window.removeEventListener("scroll", this.updateHandler),
                window.removeEventListener("resize", this.updateHandler);
            }),
            (e.prototype.update = function () {
              var t = this.$element.getBoundingClientRect(),
                e = y(this.$options.container),
                n = this.measure(t, e);
              n !== this.value && (this.mutate(n), (this.value = n));
            }),
            (e.prototype.measure = function (t, e) {
              var n = t[this.$options.edge] + this.$options.offset;
              return e[this.$options.containerEdge] - n > 0;
            }),
            (e.prototype.mutate = function (t) {
              t
                ? this.$element.classList.add(this.$options.class)
                : this.$element.classList.remove(this.$options.class);
            }),
            (e.defaults = {
              class: "is-active",
              offset: 0,
              container: window,
              edge: "top",
              containerEdge: "bottom",
            }),
            e
          );
        })(u),
        kt = navigator.userAgent.toLowerCase();
      kt.match(/android|webos|iphone|ipad|ipod|blackberry|windows phone/i),
        kt.indexOf("firefox") >= 0 ||
          kt.indexOf("edge") >= 0 ||
          kt.indexOf("chrome") >= 0 ||
          kt.indexOf("safari") >= 0 ||
          kt.indexOf("trident");
      var At = function (t) {
          return (
            "https://facebook.com/sharer.php?display=popup&u=" +
            encodeURIComponent(t.url)
          );
        },
        Ct = function (t) {
          var e =
            "https://twitter.com/intent/tweet?url=" + encodeURIComponent(t.url);
          return t.text && (e += "&text=" + encodeURIComponent(t.text)), e;
        },
        Pt = function (t) {
          return (
            "https://www.linkedin.com/shareArticle?url=" +
            encodeURIComponent(t.url)
          );
        },
        jt = function (t) {
          var e =
            "http://www.reddit.com/submit?url=" + encodeURIComponent(t.url);
          return t.text && (e += "&title=" + t.text), e;
        },
        Tt = function (t) {
          var e =
            "http://pinterest.com/pin/create/button/?url=" +
            encodeURIComponent(t.url);
          return (
            t.text && (e += "&description=" + encodeURIComponent(t.text)),
            t.image && (e += "&media=" + encodeURIComponent(t.image)),
            e
          );
        },
        Ht = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            function i() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((i.prototype = n.prototype), new i()));
          };
        })(),
        Mt = (function (e) {
          function n() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.clickHandler = t.action.bind(t)), t;
          }
          return (
            Ht(n, e),
            (n.getUrl = function (e) {
              var n = t[e.type];
              if (n) return n(e);
            }),
            (n.prototype.init = function () {
              this.$element.addEventListener("click", this.clickHandler);
            }),
            (n.prototype.destroy = function () {
              this.$element.removeEventListener("click", this.clickHandler);
            }),
            (n.prototype.action = function () {
              if ("copy" === this.$options.type)
                (e = this.$options.url),
                  (n = window.getSelection()),
                  (i = document.createTextNode(e)),
                  (o = document.createRange()),
                  n.removeAllRanges(),
                  document.body.appendChild(i),
                  o.selectNodeContents(i),
                  n.addRange(o),
                  document.execCommand("copy"),
                  document.body.removeChild(i),
                  this.handleCopy();
              else {
                var t = this.constructor.getUrl(this.$options);
                t &&
                  window.open(
                    t,
                    "_blank",
                    "width=" +
                      this.$options.width +
                      ",height=" +
                      this.$options.height
                  );
              }
              var e, n, i, o;
            }),
            (n.prototype.handleCopy = function () {
              alert("URL copied!");
            }),
            (n.defaults = {
              width: 600,
              height: 400,
              url: window.location.href,
              text: document.title,
            }),
            n
          );
        })(u),
        Rt = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            function i() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((i.prototype = n.prototype), new i()));
          };
        })(),
        It = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Rt(e, t),
            (e.prototype.init = function () {
              var t = this;
              this.$element.addEventListener("click", function () {
                t.$parent.toggle(t.$parent.$toggle.indexOf(t));
              });
            }),
            e
          );
        })(u),
        Dt = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return Rt(e, t), e;
        })(u);
      !(function (t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (e.$item = []), (e.$toggle = []), e;
        }
        Rt(e, t),
          (e.prototype.init = function () {
            "number" == typeof this.$options.active &&
              this.toggle(this.$options.active - 1);
          }),
          (e.prototype.toggle = function (t) {
            var e, n, i, o;
            null === (e = this.$toggle[this.index]) ||
              void 0 === e ||
              e.$element.classList.remove(this.$options.class),
              null === (n = this.$item[this.index]) ||
                void 0 === n ||
                n.$element.classList.remove(this.$options.class),
              null === (i = this.$toggle[t]) ||
                void 0 === i ||
                i.$element.classList.add(this.$options.class),
              null === (o = this.$item[t]) ||
                void 0 === o ||
                o.$element.classList.add(this.$options.class),
              (this.index = t);
          }),
          (e.components = { toggle: It, item: Dt }),
          (e.defaults = { active: 1, class: "is-active" });
      })(u);
      var Ut = (function () {
        var t = function (e, n) {
          return (
            (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              }),
            t(e, n)
          );
        };
        return function (e, n) {
          function i() {
            this.constructor = e;
          }
          t(e, n),
            (e.prototype =
              null === n
                ? Object.create(n)
                : ((i.prototype = n.prototype), new i()));
        };
      })();
      !(function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        Ut(e, t),
          (e.prototype.init = function () {
            if (!this.$options.target) throw new Error("No target set");
            this.$options.off
              ? ((this.onHandler = this.on.bind(this)),
                (this.offHandler = this.off.bind(this)),
                this.$element.addEventListener(
                  this.$options.off,
                  this.offHandler
                ))
              : (this.onHandler = this.toggle.bind(this)),
              this.$element.addEventListener(this.$options.on, this.onHandler),
              this.change(this.$options.active);
          }),
          (e.prototype.on = function () {
            this.change(!0);
          }),
          (e.prototype.off = function () {
            this.change(!1);
          }),
          (e.prototype.toggle = function () {
            this.change(!this.active);
          }),
          (e.prototype.change = function (t) {
            !0 === t
              ? this.$options.target.classList.add(this.$options.class)
              : this.$options.target.classList.remove(this.$options.class),
              (this.active = t);
          }),
          (e.prototype.destroy = function () {
            this.$element.removeEventListener(this.$options.on, this.onHandler),
              this.offHandler &&
                this.$element.removeEventListener(
                  this.$options.off,
                  this.offHandler
                );
          }),
          (e.defaults = { on: "click", active: !1, class: "is-active" });
      })(u);
      var Nt = (function () {
        var t = function (e, n) {
          return (
            (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              }),
            t(e, n)
          );
        };
        return function (e, n) {
          function i() {
            this.constructor = e;
          }
          t(e, n),
            (e.prototype =
              null === n
                ? Object.create(n)
                : ((i.prototype = n.prototype), new i()));
        };
      })();
      !(function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        Nt(e, t),
          (e.prototype.init = function () {
            this.$element.classList.add("twitter-tweet"),
              this.$element.setAttribute("data-lang", this.$options.lang),
              (this.$element.innerHTML =
                '<a href="' + this.$options.url + '"></a>'),
              this.load();
          }),
          (e.prototype.load = function () {
            var t,
              e = this.constructor;
            e.injected ||
              ("https://platform.twitter.com/widgets.js",
              void 0 === t && (t = !0),
              new Promise(function (e, n) {
                var i = document.createElement("script");
                i.addEventListener("load", e),
                  i.addEventListener("error", n),
                  (i.type = "text/javascript"),
                  (i.async = t),
                  (i.src = "https://platform.twitter.com/widgets.js"),
                  document.head.appendChild(i);
              }),
              (e.injected = !0));
          }),
          (e.injected = "twttr" in window),
          (e.defaults = { lang: "en" });
      })(u);
      var Ft = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            function i() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((i.prototype = n.prototype), new i()));
          };
        })(),
        qt = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Ft(e, t),
            (e.prototype.init = function () {
              var t = this;
              this.$element.addEventListener("mouseenter", function () {
                t.$parent.pause();
              }),
                this.$element.addEventListener("mouseleave", function () {
                  t.$parent.resume();
                });
            }),
            e
          );
        })(u),
        Bt = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return Ft(e, t), e;
        })(u),
        zt = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Ft(e, t),
            (e.prototype.init = function () {
              var t = this;
              this.$element.addEventListener("animationend", function () {
                t.$parent.leaveStart();
              }),
                this.$element.addEventListener("click", function () {
                  t.$parent.changeItem(t.$parent.$toggle.indexOf(t));
                });
            }),
            e
          );
        })(u),
        Wt = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return Ft(e, t), e;
        })(u),
        Qt = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.$text = []),
              (e.$toggle = []),
              (e.$visual = []),
              (e.isPaused = !1),
              (e.indexSelected = 0),
              (e.indexActive = 0),
              e
            );
          }
          return (
            Ft(e, t),
            (e.prototype.init = function () {
              var t = this;
              window.addEventListener("scroll", function () {
                t.activate();
              }),
                this.$element.addEventListener("animationend", function (e) {
                  e.target === t.$element &&
                    ("focuscarousel-enter" === e.animationName
                      ? t.enterEnd()
                      : "focuscarousel-leave" === e.animationName &&
                        t.leaveEnd());
                });
              var e = new F(this.$element),
                n = null;
              e.on("start", function () {
                n = e.swipes[0];
              }),
                e.on("end", function () {
                  var e = n.position.x - n.origin.x,
                    i = n.position.y - n.origin.y,
                    o = Math.atan2(i, e),
                    r = Math.cos(o);
                  Math.abs(r) > 0.5 &&
                    Math.abs(e) > 40 &&
                    (r > 0 ? t.prev() : t.next());
                }),
                this.updateHeight();
            }),
            (e.prototype.activate = function () {
              var t = this.$element.getBoundingClientRect(),
                e = this.$toggle[this.indexSelected].$element,
                n = 0.6 * window.innerHeight;
              t.top < n && t.bottom > n
                ? e.classList.add("is-active")
                : e.classList.remove("is-active");
            }),
            (e.prototype.pause = function () {
              this.$toggle[this.indexActive].$element.classList.add(
                "is-paused"
              ),
                (this.isPaused = !0);
            }),
            (e.prototype.resume = function () {
              this.$toggle[this.indexActive].$element.classList.remove(
                "is-paused"
              ),
                (this.isPaused = !1);
            }),
            (e.prototype.setSelected = function (t) {
              this.$toggle[this.indexSelected].$element.classList.remove(
                "is-selected"
              ),
                (this.indexSelected = t),
                this.$toggle[this.indexSelected].$element.classList.add(
                  "is-selected"
                );
            }),
            (e.prototype.changeItem = function (t) {
              this.indexSelected !== t &&
                (this.setSelected(t), this.leaveStart());
            }),
            (e.prototype.next = function () {
              var t = this.indexSelected + 1;
              this.$toggle[t] || (t = 0), this.changeItem(t);
            }),
            (e.prototype.prev = function () {
              var t = this.indexSelected - 1;
              t < 0 && (t = this.$toggle.length - 1), this.changeItem(t);
            }),
            (e.prototype.updateHeight = function () {
              this.$wrap.$element.parentElement.style.height =
                this.$wrap.$element.offsetHeight + "px";
            }),
            (e.prototype.leaveStart = function () {
              this.$element.classList.add("is-anim-out");
            }),
            (e.prototype.leaveEnd = function () {
              if (
                (this.$element.classList.remove("is-anim-out"),
                this.$text[this.indexActive].$element.classList.remove(
                  "is-active"
                ),
                this.$visual[this.indexActive].$element.classList.remove(
                  "is-active"
                ),
                this.$toggle[this.indexActive].$element.classList.remove(
                  "is-active"
                ),
                this.isPaused &&
                  this.$toggle[this.indexActive].$element.classList.remove(
                    "is-paused"
                  ),
                this.indexSelected === this.indexActive)
              ) {
                var t = this.indexSelected + 1;
                this.setSelected(t >= this.$toggle.length ? 0 : t);
              }
              (this.indexActive = this.indexSelected), this.enterStart();
            }),
            (e.prototype.enterStart = function () {
              this.$element.classList.add("is-anim-in"),
                this.$text[this.indexActive].$element.classList.add(
                  "is-active"
                ),
                this.$toggle[this.indexActive].$element.classList.add(
                  "is-active"
                ),
                this.$visual[this.indexActive].$element.classList.add(
                  "is-active"
                ),
                this.updateHeight(),
                this.isPaused &&
                  this.$toggle[this.indexActive].$element.classList.add(
                    "is-paused"
                  );
            }),
            (e.prototype.enterEnd = function () {
              this.$element.classList.remove("is-anim-in");
            }),
            (e.components = { wrap: qt, text: Bt, toggle: zt, visual: Wt }),
            e
          );
        })(u),
        Vt =
          (n(501),
          (function () {
            var t = function (e, n) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                  }),
                t(e, n)
              );
            };
            return function (e, n) {
              function i() {
                this.constructor = e;
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })()),
        Gt = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Vt(e, t),
            (e.prototype.init = function () {
              var t = this;
              this.$element.addEventListener("submit", function (e) {
                var n, i, o;
                e.preventDefault(),
                  (t.email = t.$input.$element.value),
                  ((n = function (e) {
                    return t.$options.url + "&EMAIL=" + t.email + "&c=" + e;
                  }),
                  (i = document.createElement("script")),
                  (o =
                    "oblik_jsonp_" +
                    Date.now() +
                    "_" +
                    Math.floor(1e4 * Math.random())),
                  (i.src = n(o)),
                  document.head.appendChild(i),
                  new Promise(function (t) {
                    window[o] = function (e) {
                      document.head.removeChild(i), t(e);
                    };
                  })).then(function (e) {
                    "success" === e.result ||
                    e.msg.indexOf("already subscribed") >= 0
                      ? t.success()
                      : t.error();
                  });
              });
            }),
            (e.prototype.success = function () {
              window.location.href = this.$options.redirect;
            }),
            (e.prototype.error = function () {
              alert("An error occurred");
            }),
            (e.components = {
              input: (function (t) {
                function e() {
                  return (null !== t && t.apply(this, arguments)) || this;
                }
                return Vt(e, t), e;
              })(u),
            }),
            e
          );
        })(u),
        Xt = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            function i() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((i.prototype = n.prototype), new i()));
          };
        })(),
        Yt = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Xt(e, t),
            (e.prototype.init = function () {
              var t = this;
              window.addEventListener("scroll", function () {
                t.update();
              }),
                this.update();
            }),
            (e.prototype.update = function () {
              var t = M(
                document.scrollingElement.scrollTop /
                  (this.$element.offsetTop + this.$element.offsetHeight),
                0,
                1
              );
              this.$element.style.setProperty("--scroll", t.toString());
            }),
            e
          );
        })(u),
        Kt = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            function i() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((i.prototype = n.prototype), new i()));
          };
        })(),
        Jt = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Kt(e, t),
            (e.prototype.init = function () {
              var t = this;
              this.$element.addEventListener("click", function () {
                t.$options.target.classList.toggle(t.$options.class);
              });
            }),
            e
          );
        })(u);
      if (
        (n(547), n(699), "job" === document.body.getAttribute("data-template"))
      ) {
        document.querySelectorAll(".js-button-form").forEach(function (t) {
          t.addEventListener("click", function () {
            document.body.classList.toggle("is-form-active");
          });
        }),
          document
            .querySelector(".js-form")
            .addEventListener("submit", function (t) {
              var e = document.querySelector(".js-form-submit"),
                n = e.querySelector(".js-form-submit-label");
              (e.disabled = !0),
                e.classList.add("is-loading"),
                (n.innerText = this.getAttribute("data-loading-text"));
            });
        var Zt = document.querySelector(".js-job-overlay"),
          te = !1,
          ee = function () {
            0 === Zt.getBoundingClientRect().top
              ? te || (document.body.classList.add("is-form-sticky"), (te = !0))
              : te &&
                (document.body.classList.remove("is-form-sticky"), (te = !1));
          };
        window.addEventListener("scroll", c(ee, 100)), ee();
      }
      var ne = document.querySelectorAll(".js-theme"),
        ie = document.querySelectorAll("[data-set-theme]");
      function oe() {
        ne.forEach(function (t) {
          var e = t.getBoundingClientRect(),
            n = "";
          ie.forEach(function (t) {
            var i = t.getBoundingClientRect();
            e.bottom > i.top &&
              e.top < i.bottom &&
              (n = t.getAttribute("data-set-theme"));
          }),
            t.setAttribute("data-theme", n);
        });
      }
      window.addEventListener("scroll", c(oe, 100)), oe();
      var re = 0,
        se = 0,
        ce = 0,
        ae = 0,
        ue = 0,
        le = document.querySelector(".js-header-canvas");
      le &&
        (function (t) {
          var e = t.getContext("webgl"),
            n = e.createShader(e.VERTEX_SHADER);
          e.shaderSource(
            n,
            "\nattribute vec4 a_position;\nvoid main()\n{\n\tgl_Position = a_position;\n}\n"
          ),
            e.compileShader(n);
          var i = e.createShader(e.FRAGMENT_SHADER);
          e.shaderSource(
            i,
            "\nprecision mediump float;\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform float u_offset;\nuniform float u_size;\nuniform float u_speed;\nuniform float u_scroll;\n\nvoid main() {\n\tfloat s1 = 0.45;\n\tfloat s2 = 0.70;\n\tfloat s3 = 0.99;\n\n\tvec2 p = gl_FragCoord.xy / u_resolution.xy;\n\tvec2 m = u_mouse.xy / u_resolution.xy;\n\tfloat dist = distance(p, m);\n\n\tp.y += -u_scroll / 5000.;\n\tp.y += sin(p.x * 3.14) * (u_speed / 400.);\n\n\tdist = smoothstep(0., u_size * .6, dist);\n\tp.x += (1. - dist) * (.5 - p.x);\n\n\tfor(int i = 1; i < 6; i++) {\n\t\tp.x += 0.05 / float(i) * sin(float(i) * 9. * p.y + u_time * 0.2);\n\t\tp.y += 0.15 / float(i) * cos(float(i) * 5. * p.x + u_time * 0.2);\n\n\t\tp.x -= (0.1 / float(i) * cos(float(i) * p.x)) * (u_speed / 80.);\n\t\tp.y -= (0.1 / float(i) * cos(float(i) * p.x)) * (u_speed / 80.);\n\t}\n\n\tp.x -= u_offset;\n\n\tvec3 c1 = vec3(0., 0.035, 0.133);   // #c4c4c4\n\tvec3 c2 = vec3(0.02, 0.102, 0.471); // #c4c4c4\n\tvec3 c3 = vec3(0.114, 0.231, 1.);   // #c4c4c4\n\tvec3 c4 = vec3(0.514, 0.816, 1.);   // #c4c4c4\n\n\tvec3 color = vec3(0.);\n\tcolor = mix(c1, c2, vec3(min(p.x / s1, 1.)));\n\tcolor = mix(color, c3, vec3(max(min((p.x - s1) / (s2 - s1), 1.), 0.)));\n\tcolor = mix(color, c4, vec3(max(min((p.x - s2) / (s3 - s2), 1.), 0.)));\n\n\tgl_FragColor = vec4(color, 1.);\n}\n"
          ),
            e.compileShader(i);
          var o = e.createProgram();
          e.attachShader(o, n),
            e.attachShader(o, i),
            e.linkProgram(o),
            e.useProgram(o);
          var r = e.getAttribLocation(o, "a_position"),
            s = e.getUniformLocation(o, "u_resolution"),
            c = e.getUniformLocation(o, "u_mouse"),
            a = e.getUniformLocation(o, "u_time"),
            u = e.getUniformLocation(o, "u_offset"),
            l = e.getUniformLocation(o, "u_size"),
            h = e.getUniformLocation(o, "u_speed"),
            p = e.getUniformLocation(o, "u_scroll"),
            f = e.createBuffer(),
            d = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
          function m() {
            var n = t.clientWidth / t.clientHeight;
            (t.width = 100 * n),
              (t.height = 100),
              e.viewport(0, 0, e.canvas.width, e.canvas.height);
          }
          e.bindBuffer(e.ARRAY_BUFFER, f),
            e.bufferData(e.ARRAY_BUFFER, d, e.STATIC_DRAW),
            e.enableVertexAttribArray(r),
            e.vertexAttribPointer(r, 2, e.FLOAT, !1, 0, 0),
            window.addEventListener("resize", m),
            m();
          var y = 0,
            v = 0;
          document.addEventListener("mousemove", function (e) {
            (y = (e.clientX / window.innerWidth) * t.width),
              (v = (1 - e.clientY / window.innerHeight) * t.height);
          });
          var g = Date.now(),
            w = 0,
            b = 0,
            _ = 0;
          window.addEventListener("scroll", function () {
            w = document.scrollingElement.scrollTop;
          }),
            requestAnimationFrame(function t() {
              var n,
                i = Date.now() - g,
                o =
                  1 == (n = Math.min(i, 4e3) / 4e3)
                    ? 1
                    : 1 - Math.pow(2, -10 * n),
                r = ce - y,
                f = ae - v;
              (ce = y), (ae = v);
              var d = Math.hypot(r, f),
                m = (ue += 0.1 * (d - ue)) / 2e4;
              (m = (1 * m) / (m + 1)),
                (re += 0.05 * (y - re)),
                (se += 0.05 * (v - se));
              var $ = w - _;
              (_ = w),
                (b += 0.1 * ($ - b)),
                e.uniform2f(s, e.canvas.width, e.canvas.height),
                e.uniform2f(c, re, se),
                e.uniform1f(a, i / 1e3),
                e.uniform1f(u, 2 - 2 * o),
                e.uniform1f(l, 1 - m),
                e.uniform1f(h, -b),
                e.uniform1f(p, _),
                e.drawArrays(e.TRIANGLES, 0, 6),
                requestAnimationFrame(t);
            });
        })(le),
        (Lt.defaults.offset = 100),
        new C(document.body, {
          components: {
            carousel: K,
            height: et,
            accordion: H,
            scrolled: St,
            masonry: _t,
            sensor: Lt,
            sharer: Mt,
            focuscarousel: Qt,
            newsletter: Gt,
            scrollingvisuals: Yt,
            toggle: Jt,
          },
        }).init(),
        document.addEventListener("keydown", function (t) {
          "Tab" === t.key && document.body.classList.add("has-keyboard");
        });
      var he = window.location.hash;
      if (he) {
        var pe = document.getElementById(he.substring(1));
        (null == pe ? void 0 : pe.classList.contains("b-accordion__slide")) &&
          pe.classList.add("is-active");
      }
    })();
})();
