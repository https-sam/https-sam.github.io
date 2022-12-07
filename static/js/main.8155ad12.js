/*! For license information please see main.8155ad12.js.LICENSE.txt */
!(function () {
  var e = {
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = n(296);
        function l(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          i = {};
        function u(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, l, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = l),
            (this.removeEmptyString = o);
        }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            v[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            v[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = v.hasOwnProperty(t) ? v[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = Symbol.for("react.element"),
          A = Symbol.for("react.portal"),
          k = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          S = Symbol.for("react.profiler"),
          C = Symbol.for("react.provider"),
          P = Symbol.for("react.context"),
          j = Symbol.for("react.forward_ref"),
          N = Symbol.for("react.suspense"),
          z = Symbol.for("react.suspense_list"),
          O = Symbol.for("react.memo"),
          L = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var B = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var D = Symbol.iterator;
        function T(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (D && e[D]) || e["@@iterator"])
            ? e
            : null;
        }
        var F,
          I = Object.assign;
        function U(e) {
          if (void 0 === F)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              F = (t && t[1]) || "";
            }
          return "\n" + F + e;
        }
        var M = !1;
        function R(e, t) {
          if (!e || M) return "";
          M = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (s) {
                  r = s;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && "string" === typeof s.stack) {
              for (
                var a = s.stack.split("\n"),
                  l = r.stack.split("\n"),
                  o = a.length - 1,
                  i = l.length - 1;
                1 <= o && 0 <= i && a[o] !== l[i];

              )
                i--;
              for (; 1 <= o && 0 <= i; o--, i--)
                if (a[o] !== l[i]) {
                  if (1 !== o || 1 !== i)
                    do {
                      if ((o--, 0 > --i || a[o] !== l[i])) {
                        var u = "\n" + a[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= o && 0 <= i);
                  break;
                }
            }
          } finally {
            (M = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? U(e) : "";
        }
        function _(e) {
          switch (e.tag) {
            case 5:
              return U(e.type);
            case 16:
              return U("Lazy");
            case 13:
              return U("Suspense");
            case 19:
              return U("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = R(e.type, !1));
            case 11:
              return (e = R(e.type.render, !1));
            case 1:
              return (e = R(e.type, !0));
            default:
              return "";
          }
        }
        function Q(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case k:
              return "Fragment";
            case A:
              return "Portal";
            case S:
              return "Profiler";
            case E:
              return "StrictMode";
            case N:
              return "Suspense";
            case z:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case P:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case j:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case O:
                return null !== (t = e.displayName || null)
                  ? t
                  : Q(e.type) || "Memo";
              case L:
                (t = e._payload), (e = e._init);
                try {
                  return Q(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return Q(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function V(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function K(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  l = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), l.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function X(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function J(e, t) {
          var n = t.checked;
          return I({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = V(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function G(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Z(e, t) {
          G(e, t);
          var n = V(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, V(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function $(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && X(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + V(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
          return I({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(l(92));
              if (te(n)) {
                if (1 < n.length) throw Error(l(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: V(n) };
        }
        function le(e, t) {
          var n = V(t.value),
            r = V(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ie(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ie(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var se,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (se = se || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = I(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(l(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(l(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(l(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(l(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function xe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Ae = null,
          ke = null,
          Ee = null;
        function Se(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof Ae) throw Error(l(280));
            var t = e.stateNode;
            t && ((t = xa(t)), Ae(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          ke ? (Ee ? Ee.push(e) : (Ee = [e])) : (ke = e);
        }
        function Pe() {
          if (ke) {
            var e = ke,
              t = Ee;
            if (((Ee = ke = null), Se(e), t))
              for (e = 0; e < t.length; e++) Se(t[e]);
          }
        }
        function je(e, t) {
          return e(t);
        }
        function Ne() {}
        var ze = !1;
        function Oe(e, t, n) {
          if (ze) return e(t, n);
          ze = !0;
          try {
            return je(e, t, n);
          } finally {
            (ze = !1), (null !== ke || null !== Ee) && (Ne(), Pe());
          }
        }
        function Le(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = xa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(l(231, t, typeof n));
          return n;
        }
        var Be = !1;
        if (c)
          try {
            var De = {};
            Object.defineProperty(De, "passive", {
              get: function () {
                Be = !0;
              },
            }),
              window.addEventListener("test", De, De),
              window.removeEventListener("test", De, De);
          } catch (ce) {
            Be = !1;
          }
        function Te(e, t, n, r, a, l, o, i, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var Fe = !1,
          Ie = null,
          Ue = !1,
          Me = null,
          Re = {
            onError: function (e) {
              (Fe = !0), (Ie = e);
            },
          };
        function _e(e, t, n, r, a, l, o, i, u) {
          (Fe = !1), (Ie = null), Te.apply(Re, arguments);
        }
        function Qe(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ve(e) {
          if (Qe(e) !== e) throw Error(l(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Qe(e))) throw Error(l(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return Ve(a), e;
                    if (o === r) return Ve(a), t;
                    o = o.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                  for (var i = !1, u = a.child; u; ) {
                    if (u === n) {
                      (i = !0), (n = a), (r = o);
                      break;
                    }
                    if (u === r) {
                      (i = !0), (r = a), (n = o);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!i) {
                    for (u = o.child; u; ) {
                      if (u === n) {
                        (i = !0), (n = o), (r = a);
                        break;
                      }
                      if (u === r) {
                        (i = !0), (r = o), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!i) throw Error(l(189));
                  }
                }
                if (n.alternate !== r) throw Error(l(190));
              }
              if (3 !== n.tag) throw Error(l(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ke(e)
            : null;
        }
        function Ke(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ke(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Xe = a.unstable_cancelCallback,
          Je = a.unstable_shouldYield,
          Ye = a.unstable_requestPaint,
          Ge = a.unstable_now,
          Ze = a.unstable_getCurrentPriorityLevel,
          $e = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          lt = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((it(e) / ut) | 0)) | 0;
              },
          it = Math.log,
          ut = Math.LN2;
        var st = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var i = o & ~a;
            0 !== i ? (r = ft(i)) : 0 !== (l &= o) && (r = ft(l));
          } else 0 !== (o = n & ~a) ? (r = ft(o)) : 0 !== l && (r = ft(l));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (l = t & -t) || (16 === a && 0 !== (4194240 & l)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = st;
          return 0 === (4194240 & (st <<= 1)) && (st = 64), e;
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var xt,
          At,
          kt,
          Et,
          St,
          Ct = !1,
          Pt = [],
          jt = null,
          Nt = null,
          zt = null,
          Ot = new Map(),
          Lt = new Map(),
          Bt = [],
          Dt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Tt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              jt = null;
              break;
            case "dragenter":
            case "dragleave":
              Nt = null;
              break;
            case "mouseover":
            case "mouseout":
              zt = null;
              break;
            case "pointerover":
            case "pointerout":
              Ot.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Lt.delete(t.pointerId);
          }
        }
        function Ft(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && At(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function It(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = Qe(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void St(e.priority, function () {
                      kt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ut(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && At(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Mt(e, t, n) {
          Ut(e) && n.delete(t);
        }
        function Rt() {
          (Ct = !1),
            null !== jt && Ut(jt) && (jt = null),
            null !== Nt && Ut(Nt) && (Nt = null),
            null !== zt && Ut(zt) && (zt = null),
            Ot.forEach(Mt),
            Lt.forEach(Mt);
        }
        function _t(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ct ||
              ((Ct = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Rt)));
        }
        function Qt(e) {
          function t(t) {
            return _t(t, e);
          }
          if (0 < Pt.length) {
            _t(Pt[0], e);
            for (var n = 1; n < Pt.length; n++) {
              var r = Pt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== jt && _t(jt, e),
              null !== Nt && _t(Nt, e),
              null !== zt && _t(zt, e),
              Ot.forEach(t),
              Lt.forEach(t),
              n = 0;
            n < Bt.length;
            n++
          )
            (r = Bt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Bt.length && null === (n = Bt[0]).blockedOn; )
            It(n), null === n.blockedOn && Bt.shift();
        }
        var Ht = w.ReactCurrentBatchConfig,
          Vt = !0;
        function Wt(e, t, n, r) {
          var a = bt,
            l = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = a), (Ht.transition = l);
          }
        }
        function Kt(e, t, n, r) {
          var a = bt,
            l = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = a), (Ht.transition = l);
          }
        }
        function qt(e, t, n, r) {
          if (Vt) {
            var a = Jt(e, t, n, r);
            if (null === a) Vr(e, t, r, Xt, n), Tt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (jt = Ft(jt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Nt = Ft(Nt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (zt = Ft(zt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var l = a.pointerId;
                    return Ot.set(l, Ft(Ot.get(l) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (l = a.pointerId),
                      Lt.set(l, Ft(Lt.get(l) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Tt(e, r), 4 & t && -1 < Dt.indexOf(e))) {
              for (; null !== a; ) {
                var l = ba(a);
                if (
                  (null !== l && xt(l),
                  null === (l = Jt(e, t, n, r)) && Vr(e, t, r, Xt, n),
                  l === a)
                )
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else Vr(e, t, r, null, n);
          }
        }
        var Xt = null;
        function Jt(e, t, n, r) {
          if (((Xt = null), null !== (e = ya((e = xe(r))))))
            if (null === (t = Qe(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Xt = e), null;
        }
        function Yt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ze()) {
                case $e:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Gt = null,
          Zt = null,
          $t = null;
        function en() {
          if ($t) return $t;
          var e,
            t,
            n = Zt,
            r = n.length,
            a = "value" in Gt ? Gt.value : Gt.textContent,
            l = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
          return ($t = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, l) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            I(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var ln,
          on,
          un,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(sn),
          fn = I({}, sn, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = I({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Sn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((ln = e.screenX - un.screenX),
                        (on = e.screenY - un.screenY))
                      : (on = ln = 0),
                    (un = e)),
                  ln);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : on;
            },
          }),
          hn = an(pn),
          mn = an(I({}, pn, { dataTransfer: 0 })),
          vn = an(I({}, fn, { relatedTarget: 0 })),
          gn = an(
            I({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = I({}, sn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          wn = an(I({}, sn, { data: 0 })),
          xn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          An = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          kn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = kn[e]) && !!t[e];
        }
        function Sn() {
          return En;
        }
        var Cn = I({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? An[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Sn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Pn = an(Cn),
          jn = an(
            I({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Nn = an(
            I({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Sn,
            })
          ),
          zn = an(
            I({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          On = I({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Ln = an(On),
          Bn = [9, 13, 27, 32],
          Dn = c && "CompositionEvent" in window,
          Tn = null;
        c && "documentMode" in document && (Tn = document.documentMode);
        var Fn = c && "TextEvent" in window && !Tn,
          In = c && (!Dn || (Tn && 8 < Tn && 11 >= Tn)),
          Un = String.fromCharCode(32),
          Mn = !1;
        function Rn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Bn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function _n(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Qn = !1;
        var Hn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Vn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Hn[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          Ce(r),
            0 < (t = Kr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Kn = null,
          qn = null;
        function Xn(e) {
          Ur(e, 0);
        }
        function Jn(e) {
          if (q(wa(e))) return e;
        }
        function Yn(e, t) {
          if ("change" === e) return t;
        }
        var Gn = !1;
        if (c) {
          var Zn;
          if (c) {
            var $n = "oninput" in document;
            if (!$n) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                ($n = "function" === typeof er.oninput);
            }
            Zn = $n;
          } else Zn = !1;
          Gn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Kn && (Kn.detachEvent("onpropertychange", nr), (qn = Kn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Jn(qn)) {
            var t = [];
            Wn(t, qn, e, xe(e)), Oe(Xn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), (Kn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Jn(qn);
        }
        function lr(e, t) {
          if ("click" === e) return Jn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Jn(t);
        }
        var ir =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ur(e, t) {
          if (ir(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !ir(e[a], t[a])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = sr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = X(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = X((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !e.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = cr(n, l));
                var o = cr(n, r);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  l > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          gr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == vr ||
            vr !== X(r) ||
            ("selectionStart" in (r = vr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && ur(yr, r)) ||
              ((yr = r),
              0 < (r = Kr(gr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        function xr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Ar = {
            animationend: xr("Animation", "AnimationEnd"),
            animationiteration: xr("Animation", "AnimationIteration"),
            animationstart: xr("Animation", "AnimationStart"),
            transitionend: xr("Transition", "TransitionEnd"),
          },
          kr = {},
          Er = {};
        function Sr(e) {
          if (kr[e]) return kr[e];
          if (!Ar[e]) return e;
          var t,
            n = Ar[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (kr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Ar.animationend.animation,
            delete Ar.animationiteration.animation,
            delete Ar.animationstart.animation),
          "TransitionEvent" in window || delete Ar.transitionend.transition);
        var Cr = Sr("animationend"),
          Pr = Sr("animationiteration"),
          jr = Sr("animationstart"),
          Nr = Sr("transitionend"),
          zr = new Map(),
          Or =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Lr(e, t) {
          zr.set(e, t), u(t, [e]);
        }
        for (var Br = 0; Br < Or.length; Br++) {
          var Dr = Or[Br];
          Lr(Dr.toLowerCase(), "on" + (Dr[0].toUpperCase() + Dr.slice(1)));
        }
        Lr(Cr, "onAnimationEnd"),
          Lr(Pr, "onAnimationIteration"),
          Lr(jr, "onAnimationStart"),
          Lr("dblclick", "onDoubleClick"),
          Lr("focusin", "onFocus"),
          Lr("focusout", "onBlur"),
          Lr(Nr, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Tr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Fr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Tr)
          );
        function Ir(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, i, u, s) {
              if ((_e.apply(this, arguments), Fe)) {
                if (!Fe) throw Error(l(198));
                var c = Ie;
                (Fe = !1), (Ie = null), Ue || ((Ue = !0), (Me = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ur(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var i = r[o],
                    u = i.instance,
                    s = i.currentTarget;
                  if (((i = i.listener), u !== l && a.isPropagationStopped()))
                    break e;
                  Ir(a, i, s), (l = u);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((u = (i = r[o]).instance),
                    (s = i.currentTarget),
                    (i = i.listener),
                    u !== l && a.isPropagationStopped())
                  )
                    break e;
                  Ir(a, i, s), (l = u);
                }
            }
          }
          if (Ue) throw ((e = Me), (Ue = !1), (Me = null), e);
        }
        function Mr(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function Rr(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var _r = "_reactListening" + Math.random().toString(36).slice(2);
        function Qr(e) {
          if (!e[_r]) {
            (e[_r] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Fr.has(t) || Rr(t, !1, e), Rr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[_r] || ((t[_r] = !0), Rr("selectionchange", !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var a = Wt;
              break;
            case 4:
              a = Kt;
              break;
            default:
              a = qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Be ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Vr(e, t, n, r, a) {
          var l = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var u = o.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = o.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== i; ) {
                  if (null === (o = ya(i))) return;
                  if (5 === (u = o.tag) || 6 === u) {
                    r = l = o;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Oe(function () {
            var r = l,
              a = xe(n),
              o = [];
            e: {
              var i = zr.get(e);
              if (void 0 !== i) {
                var u = cn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Pn;
                    break;
                  case "focusin":
                    (s = "focus"), (u = vn);
                    break;
                  case "focusout":
                    (s = "blur"), (u = vn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = vn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Nn;
                    break;
                  case Cr:
                  case Pr:
                  case jr:
                    u = gn;
                    break;
                  case Nr:
                    u = zn;
                    break;
                  case "scroll":
                    u = dn;
                    break;
                  case "wheel":
                    u = Ln;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = jn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== i ? i + "Capture" : null) : i;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== d &&
                        null != (m = Le(h, d)) &&
                        c.push(Wr(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((i = new u(i, s, null, n, a)),
                  o.push({ event: i, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!ya(s) && !s[ha])) &&
                  (u || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? ya(s)
                          : null) &&
                        (s !== (f = Qe(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = jn),
                    (m = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? i : wa(u)),
                  (p = null == s ? i : wa(s)),
                  ((i = new c(m, h + "leave", u, n, a)).target = f),
                  (i.relatedTarget = p),
                  (m = null),
                  ya(a) === r &&
                    (((c = new c(d, h + "enter", s, n, a)).target = p),
                    (c.relatedTarget = f),
                    (m = c)),
                  (f = m),
                  u && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = u; p; p = qr(p)) h++;
                    for (p = 0, m = d; m; m = qr(m)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (d = qr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = qr(c)), (d = qr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Xr(o, i, u, c, !1),
                  null !== s && null !== f && Xr(o, f, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (i = r ? wa(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === u && "file" === i.type)
              )
                var v = Yn;
              else if (Vn(i))
                if (Gn) v = or;
                else {
                  v = ar;
                  var g = rr;
                }
              else
                (u = i.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (v = lr);
              switch (
                (v && (v = v(e, r))
                  ? Wn(o, v, n, a)
                  : (g && g(e, i, r),
                    "focusout" === e &&
                      (g = i._wrapperState) &&
                      g.controlled &&
                      "number" === i.type &&
                      ee(i, "number", i.value)),
                (g = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Vn(g) || "true" === g.contentEditable) &&
                    ((vr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = vr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(o, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(o, n, a);
              }
              var y;
              if (Dn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Qn
                  ? Rn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (In &&
                  "ko" !== n.locale &&
                  (Qn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Qn && (y = en())
                    : ((Zt = "value" in (Gt = a) ? Gt.value : Gt.textContent),
                      (Qn = !0))),
                0 < (g = Kr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  o.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = _n(n)) && (b.data = y))),
                (y = Fn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return _n(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Mn = !0), Un);
                        case "textInput":
                          return (e = t.data) === Un && Mn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Qn)
                        return "compositionend" === e || (!Dn && Rn(e, t))
                          ? ((e = en()), ($t = Zt = Gt = null), (Qn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return In && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Kr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Ur(o, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Kr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            5 === a.tag &&
              null !== l &&
              ((a = l),
              null != (l = Le(e, n)) && r.unshift(Wr(e, l, a)),
              null != (l = Le(e, t)) && r.push(Wr(e, l, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Xr(e, t, n, r, a) {
          for (var l = t._reactName, o = []; null !== n && n !== r; ) {
            var i = n,
              u = i.alternate,
              s = i.stateNode;
            if (null !== u && u === r) break;
            5 === i.tag &&
              null !== s &&
              ((i = s),
              a
                ? null != (u = Le(n, l)) && o.unshift(Wr(n, u, i))
                : a || (null != (u = Le(n, l)) && o.push(Wr(n, u, i)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Jr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Gr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Jr, "\n")
            .replace(Yr, "");
        }
        function Zr(e, t, n) {
          if (((t = Gr(t)), Gr(e) !== t && n)) throw Error(l(425));
        }
        function $r() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          la = "function" === typeof Promise ? Promise : void 0,
          oa =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof la
              ? function (e) {
                  return la.resolve(null).then(e).catch(ia);
                }
              : ra;
        function ia(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ua(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Qt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Qt(t);
        }
        function sa(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          ma = "__reactEvents$" + fa,
          va = "__reactListeners$" + fa,
          ga = "__reactHandles$" + fa;
        function ya(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function xa(e) {
          return e[pa] || null;
        }
        var Aa = [],
          ka = -1;
        function Ea(e) {
          return { current: e };
        }
        function Sa(e) {
          0 > ka || ((e.current = Aa[ka]), (Aa[ka] = null), ka--);
        }
        function Ca(e, t) {
          ka++, (Aa[ka] = e.current), (e.current = t);
        }
        var Pa = {},
          ja = Ea(Pa),
          Na = Ea(!1),
          za = Pa;
        function Oa(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Pa;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            l = {};
          for (a in n) l[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          );
        }
        function La(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ba() {
          Sa(Na), Sa(ja);
        }
        function Da(e, t, n) {
          if (ja.current !== Pa) throw Error(l(168));
          Ca(ja, t), Ca(Na, n);
        }
        function Ta(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(l(108, H(e) || "Unknown", a));
          return I({}, n, r);
        }
        function Fa(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Pa),
            (za = ja.current),
            Ca(ja, e),
            Ca(Na, Na.current),
            !0
          );
        }
        function Ia(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          n
            ? ((e = Ta(e, t, za)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Sa(Na),
              Sa(ja),
              Ca(ja, e))
            : Sa(Na),
            Ca(Na, n);
        }
        var Ua = null,
          Ma = !1,
          Ra = !1;
        function _a(e) {
          null === Ua ? (Ua = [e]) : Ua.push(e);
        }
        function Qa() {
          if (!Ra && null !== Ua) {
            Ra = !0;
            var e = 0,
              t = bt;
            try {
              var n = Ua;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ua = null), (Ma = !1);
            } catch (a) {
              throw (null !== Ua && (Ua = Ua.slice(e + 1)), qe($e, Qa), a);
            } finally {
              (bt = t), (Ra = !1);
            }
          }
          return null;
        }
        var Ha = [],
          Va = 0,
          Wa = null,
          Ka = 0,
          qa = [],
          Xa = 0,
          Ja = null,
          Ya = 1,
          Ga = "";
        function Za(e, t) {
          (Ha[Va++] = Ka), (Ha[Va++] = Wa), (Wa = e), (Ka = t);
        }
        function $a(e, t, n) {
          (qa[Xa++] = Ya), (qa[Xa++] = Ga), (qa[Xa++] = Ja), (Ja = e);
          var r = Ya;
          e = Ga;
          var a = 32 - ot(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - ot(t) + a;
          if (30 < l) {
            var o = a - (a % 5);
            (l = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Ya = (1 << (32 - ot(t) + a)) | (n << a) | r),
              (Ga = l + e);
          } else (Ya = (1 << l) | (n << a) | r), (Ga = e);
        }
        function el(e) {
          null !== e.return && (Za(e, 1), $a(e, 1, 0));
        }
        function tl(e) {
          for (; e === Wa; )
            (Wa = Ha[--Va]), (Ha[Va] = null), (Ka = Ha[--Va]), (Ha[Va] = null);
          for (; e === Ja; )
            (Ja = qa[--Xa]),
              (qa[Xa] = null),
              (Ga = qa[--Xa]),
              (qa[Xa] = null),
              (Ya = qa[--Xa]),
              (qa[Xa] = null);
        }
        var nl = null,
          rl = null,
          al = !1,
          ll = null;
        function ol(e, t) {
          var n = Os(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function il(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (nl = e), (rl = sa(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (nl = e), (rl = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ja ? { id: Ya, overflow: Ga } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Os(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (nl = e),
                (rl = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ul(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function sl(e) {
          if (al) {
            var t = rl;
            if (t) {
              var n = t;
              if (!il(e, t)) {
                if (ul(e)) throw Error(l(418));
                t = sa(n.nextSibling);
                var r = nl;
                t && il(e, t)
                  ? ol(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e));
              }
            } else {
              if (ul(e)) throw Error(l(418));
              (e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e);
            }
          }
        }
        function cl(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          nl = e;
        }
        function fl(e) {
          if (e !== nl) return !1;
          if (!al) return cl(e), (al = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = rl))
          ) {
            if (ul(e)) throw (dl(), Error(l(418)));
            for (; t; ) ol(e, t), (t = sa(t.nextSibling));
          }
          if ((cl(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      rl = sa(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              rl = null;
            }
          } else rl = nl ? sa(e.stateNode.nextSibling) : null;
          return !0;
        }
        function dl() {
          for (var e = rl; e; ) e = sa(e.nextSibling);
        }
        function pl() {
          (rl = nl = null), (al = !1);
        }
        function hl(e) {
          null === ll ? (ll = [e]) : ll.push(e);
        }
        var ml = w.ReactCurrentBatchConfig;
        function vl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = I({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var gl = Ea(null),
          yl = null,
          bl = null,
          wl = null;
        function xl() {
          wl = bl = yl = null;
        }
        function Al(e) {
          var t = gl.current;
          Sa(gl), (e._currentValue = t);
        }
        function kl(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function El(e, t) {
          (yl = e),
            (wl = bl = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wi = !0), (e.firstContext = null));
        }
        function Sl(e) {
          var t = e._currentValue;
          if (wl !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === bl)
            ) {
              if (null === yl) throw Error(l(308));
              (bl = e), (yl.dependencies = { lanes: 0, firstContext: e });
            } else bl = bl.next = e;
          return t;
        }
        var Cl = null;
        function Pl(e) {
          null === Cl ? (Cl = [e]) : Cl.push(e);
        }
        function jl(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Pl(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Nl(e, r)
          );
        }
        function Nl(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var zl = !1;
        function Ol(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ll(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Bl(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Dl(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & ju))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Nl(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Pl(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Nl(e, n)
          );
        }
        function Tl(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Fl(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === l ? (a = l = o) : (l = l.next = o), (n = n.next);
              } while (null !== n);
              null === l ? (a = l = t) : (l = l.next = t);
            } else a = l = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Il(e, t, n, r) {
          var a = e.updateQueue;
          zl = !1;
          var l = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var u = i,
              s = u.next;
            (u.next = null), null === o ? (l = s) : (o.next = s), (o = u);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== l) {
            var f = a.baseState;
            for (o = 0, c = s = u = null, i = l; ; ) {
              var d = i.lane,
                p = i.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = i;
                  switch (((d = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = I({}, f, d);
                      break e;
                    case 2:
                      zl = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [i]) : d.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                  (o |= d);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (d = i).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (o |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === l && (a.shared.lanes = 0);
            (Fu |= o), (e.lanes = o), (e.memoizedState = f);
          }
        }
        function Ul(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(l(191, a));
                a.call(r);
              }
            }
        }
        var Ml = new r.Component().refs;
        function Rl(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : I({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var _l = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Qe(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = es(),
              a = ts(e),
              l = Bl(r, a);
            (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Dl(e, l, a)) && (ns(t, e, a, r), Tl(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = es(),
              a = ts(e),
              l = Bl(r, a);
            (l.tag = 1),
              (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Dl(e, l, a)) && (ns(t, e, a, r), Tl(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = es(),
              r = ts(e),
              a = Bl(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Dl(e, a, r)) && (ns(t, e, r, n), Tl(t, e, r));
          },
        };
        function Ql(e, t, n, r, a, l, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(a, l);
        }
        function Hl(e, t, n) {
          var r = !1,
            a = Pa,
            l = t.contextType;
          return (
            "object" === typeof l && null !== l
              ? (l = Sl(l))
              : ((a = La(t) ? za : ja.current),
                (l = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Oa(e, a)
                  : Pa)),
            (t = new t(n, l)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = _l),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            t
          );
        }
        function Vl(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && _l.enqueueReplaceState(t, t.state, null);
        }
        function Wl(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Ml), Ol(e);
          var l = t.contextType;
          "object" === typeof l && null !== l
            ? (a.context = Sl(l))
            : ((l = La(t) ? za : ja.current), (a.context = Oa(e, l))),
            (a.state = e.memoizedState),
            "function" === typeof (l = t.getDerivedStateFromProps) &&
              (Rl(e, t, l, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && _l.enqueueReplaceState(a, a.state, null),
              Il(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Kl(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(l(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(l(147, e));
              var a = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Ml && (t = a.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(l(284));
            if (!n._owner) throw Error(l(290, e));
          }
          return e;
        }
        function ql(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              l(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Xl(e) {
          return (0, e._init)(e._payload);
        }
        function Jl(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Bs(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Is(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var l = n.type;
            return l === k
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === l ||
                  ("object" === typeof l &&
                    null !== l &&
                    l.$$typeof === L &&
                    Xl(l) === t.type))
              ? (((r = a(t, n.props)).ref = Kl(e, t, n)), (r.return = e), r)
              : (((r = Ds(n.type, n.key, n.props, null, e.mode, r)).ref = Kl(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Us(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = Ts(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Is("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return (
                    ((n = Ds(t.type, t.key, t.props, null, e.mode, n)).ref = Kl(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case A:
                  return ((t = Us(t, e.mode, n)).return = e), t;
                case L:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || T(t))
                return ((t = Ts(t, e.mode, n, null)).return = e), t;
              ql(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case x:
                  return n.key === a ? s(e, t, n, r) : null;
                case A:
                  return n.key === a ? c(e, t, n, r) : null;
                case L:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || T(n)) return null !== a ? null : f(e, t, n, r, null);
              ql(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case A:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case L:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || T(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              ql(t, r);
            }
            return null;
          }
          function m(a, l, i, u) {
            for (
              var s = null, c = null, f = l, m = (l = 0), v = null;
              null !== f && m < i.length;
              m++
            ) {
              f.index > m ? ((v = f), (f = null)) : (v = f.sibling);
              var g = p(a, f, i[m], u);
              if (null === g) {
                null === f && (f = v);
                break;
              }
              e && f && null === g.alternate && t(a, f),
                (l = o(g, l, m)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g),
                (f = v);
            }
            if (m === i.length) return n(a, f), al && Za(a, m), s;
            if (null === f) {
              for (; m < i.length; m++)
                null !== (f = d(a, i[m], u)) &&
                  ((l = o(f, l, m)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return al && Za(a, m), s;
            }
            for (f = r(a, f); m < i.length; m++)
              null !== (v = h(f, a, m, i[m], u)) &&
                (e &&
                  null !== v.alternate &&
                  f.delete(null === v.key ? m : v.key),
                (l = o(v, l, m)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              al && Za(a, m),
              s
            );
          }
          function v(a, i, u, s) {
            var c = T(u);
            if ("function" !== typeof c) throw Error(l(150));
            if (null == (u = c.call(u))) throw Error(l(151));
            for (
              var f = (c = null), m = i, v = (i = 0), g = null, y = u.next();
              null !== m && !y.done;
              v++, y = u.next()
            ) {
              m.index > v ? ((g = m), (m = null)) : (g = m.sibling);
              var b = p(a, m, y.value, s);
              if (null === b) {
                null === m && (m = g);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (i = o(b, i, v)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (m = g);
            }
            if (y.done) return n(a, m), al && Za(a, v), c;
            if (null === m) {
              for (; !y.done; v++, y = u.next())
                null !== (y = d(a, y.value, s)) &&
                  ((i = o(y, i, v)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return al && Za(a, v), c;
            }
            for (m = r(a, m); !y.done; v++, y = u.next())
              null !== (y = h(m, a, v, y.value, s)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? v : y.key),
                (i = o(y, i, v)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              al && Za(a, v),
              c
            );
          }
          return function e(r, l, o, u) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === k &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case x:
                  e: {
                    for (var s = o.key, c = l; null !== c; ) {
                      if (c.key === s) {
                        if ((s = o.type) === k) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((l = a(c, o.props.children)).return = r),
                              (r = l);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ("object" === typeof s &&
                            null !== s &&
                            s.$$typeof === L &&
                            Xl(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((l = a(c, o.props)).ref = Kl(r, c, o)),
                            (l.return = r),
                            (r = l);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === k
                      ? (((l = Ts(o.props.children, r.mode, u, o.key)).return =
                          r),
                        (r = l))
                      : (((u = Ds(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          u
                        )).ref = Kl(r, l, o)),
                        (u.return = r),
                        (r = u));
                  }
                  return i(r);
                case A:
                  e: {
                    for (c = o.key; null !== l; ) {
                      if (l.key === c) {
                        if (
                          4 === l.tag &&
                          l.stateNode.containerInfo === o.containerInfo &&
                          l.stateNode.implementation === o.implementation
                        ) {
                          n(r, l.sibling),
                            ((l = a(l, o.children || [])).return = r),
                            (r = l);
                          break e;
                        }
                        n(r, l);
                        break;
                      }
                      t(r, l), (l = l.sibling);
                    }
                    ((l = Us(o, r.mode, u)).return = r), (r = l);
                  }
                  return i(r);
                case L:
                  return e(r, l, (c = o._init)(o._payload), u);
              }
              if (te(o)) return m(r, l, o, u);
              if (T(o)) return v(r, l, o, u);
              ql(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== l && 6 === l.tag
                  ? (n(r, l.sibling), ((l = a(l, o)).return = r), (r = l))
                  : (n(r, l), ((l = Is(o, r.mode, u)).return = r), (r = l)),
                i(r))
              : n(r, l);
          };
        }
        var Yl = Jl(!0),
          Gl = Jl(!1),
          Zl = {},
          $l = Ea(Zl),
          eo = Ea(Zl),
          to = Ea(Zl);
        function no(e) {
          if (e === Zl) throw Error(l(174));
          return e;
        }
        function ro(e, t) {
          switch ((Ca(to, t), Ca(eo, e), Ca($l, Zl), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Sa($l), Ca($l, t);
        }
        function ao() {
          Sa($l), Sa(eo), Sa(to);
        }
        function lo(e) {
          no(to.current);
          var t = no($l.current),
            n = ue(t, e.type);
          t !== n && (Ca(eo, e), Ca($l, n));
        }
        function oo(e) {
          eo.current === e && (Sa($l), Sa(eo));
        }
        var io = Ea(0);
        function uo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var so = [];
        function co() {
          for (var e = 0; e < so.length; e++)
            so[e]._workInProgressVersionPrimary = null;
          so.length = 0;
        }
        var fo = w.ReactCurrentDispatcher,
          po = w.ReactCurrentBatchConfig,
          ho = 0,
          mo = null,
          vo = null,
          go = null,
          yo = !1,
          bo = !1,
          wo = 0,
          xo = 0;
        function Ao() {
          throw Error(l(321));
        }
        function ko(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n])) return !1;
          return !0;
        }
        function Eo(e, t, n, r, a, o) {
          if (
            ((ho = o),
            (mo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fo.current = null === e || null === e.memoizedState ? ii : ui),
            (e = n(r, a)),
            bo)
          ) {
            o = 0;
            do {
              if (((bo = !1), (wo = 0), 25 <= o)) throw Error(l(301));
              (o += 1),
                (go = vo = null),
                (t.updateQueue = null),
                (fo.current = si),
                (e = n(r, a));
            } while (bo);
          }
          if (
            ((fo.current = oi),
            (t = null !== vo && null !== vo.next),
            (ho = 0),
            (go = vo = mo = null),
            (yo = !1),
            t)
          )
            throw Error(l(300));
          return e;
        }
        function So() {
          var e = 0 !== wo;
          return (wo = 0), e;
        }
        function Co() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === go ? (mo.memoizedState = go = e) : (go = go.next = e), go
          );
        }
        function Po() {
          if (null === vo) {
            var e = mo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = vo.next;
          var t = null === go ? mo.memoizedState : go.next;
          if (null !== t) (go = t), (vo = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (vo = e).memoizedState,
              baseState: vo.baseState,
              baseQueue: vo.baseQueue,
              queue: vo.queue,
              next: null,
            }),
              null === go ? (mo.memoizedState = go = e) : (go = go.next = e);
          }
          return go;
        }
        function jo(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function No(e) {
          var t = Po(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = vo,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var i = a.next;
              (a.next = o.next), (o.next = i);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (o = a.next), (r = r.baseState);
            var u = (i = null),
              s = null,
              c = o;
            do {
              var f = c.lane;
              if ((ho & f) === f)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((u = s = d), (i = r)) : (s = s.next = d),
                  (mo.lanes |= f),
                  (Fu |= f);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === s ? (i = r) : (s.next = u),
              ir(r, t.memoizedState) || (wi = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (o = a.lane), (mo.lanes |= o), (Fu |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function zo(e) {
          var t = Po(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              (o = e(o, i.action)), (i = i.next);
            } while (i !== a);
            ir(o, t.memoizedState) || (wi = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function Oo() {}
        function Lo(e, t) {
          var n = mo,
            r = Po(),
            a = t(),
            o = !ir(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (wi = !0)),
            (r = r.queue),
            Vo(To.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== go && 1 & go.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Mo(9, Do.bind(null, n, r, a, t), void 0, null),
              null === Nu)
            )
              throw Error(l(349));
            0 !== (30 & ho) || Bo(n, t, a);
          }
          return a;
        }
        function Bo(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = mo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Do(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Fo(t) && Io(e);
        }
        function To(e, t, n) {
          return n(function () {
            Fo(t) && Io(e);
          });
        }
        function Fo(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ir(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Io(e) {
          var t = Nl(e, 1);
          null !== t && ns(t, e, 1, -1);
        }
        function Uo(e) {
          var t = Co();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: jo,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ni.bind(null, mo, e)),
            [t.memoizedState, e]
          );
        }
        function Mo(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = mo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Ro() {
          return Po().memoizedState;
        }
        function _o(e, t, n, r) {
          var a = Co();
          (mo.flags |= e),
            (a.memoizedState = Mo(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Qo(e, t, n, r) {
          var a = Po();
          r = void 0 === r ? null : r;
          var l = void 0;
          if (null !== vo) {
            var o = vo.memoizedState;
            if (((l = o.destroy), null !== r && ko(r, o.deps)))
              return void (a.memoizedState = Mo(t, n, l, r));
          }
          (mo.flags |= e), (a.memoizedState = Mo(1 | t, n, l, r));
        }
        function Ho(e, t) {
          return _o(8390656, 8, e, t);
        }
        function Vo(e, t) {
          return Qo(2048, 8, e, t);
        }
        function Wo(e, t) {
          return Qo(4, 2, e, t);
        }
        function Ko(e, t) {
          return Qo(4, 4, e, t);
        }
        function qo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Xo(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Qo(4, 4, qo.bind(null, t, e), n)
          );
        }
        function Jo() {}
        function Yo(e, t) {
          var n = Po();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ko(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Go(e, t) {
          var n = Po();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ko(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Zo(e, t, n) {
          return 0 === (21 & ho)
            ? (e.baseState && ((e.baseState = !1), (wi = !0)),
              (e.memoizedState = n))
            : (ir(n, t) ||
                ((n = mt()), (mo.lanes |= n), (Fu |= n), (e.baseState = !0)),
              t);
        }
        function $o(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = po.transition;
          po.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (po.transition = r);
          }
        }
        function ei() {
          return Po().memoizedState;
        }
        function ti(e, t, n) {
          var r = ts(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ri(e))
          )
            ai(t, n);
          else if (null !== (n = jl(e, t, n, r))) {
            ns(n, e, r, es()), li(n, t, r);
          }
        }
        function ni(e, t, n) {
          var r = ts(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (ri(e)) ai(t, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  i = l(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, o))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((a.next = a), Pl(t))
                      : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (s) {}
            null !== (n = jl(e, t, a, r)) &&
              (ns(n, e, r, (a = es())), li(n, t, r));
          }
        }
        function ri(e) {
          var t = e.alternate;
          return e === mo || (null !== t && t === mo);
        }
        function ai(e, t) {
          bo = yo = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function li(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var oi = {
            readContext: Sl,
            useCallback: Ao,
            useContext: Ao,
            useEffect: Ao,
            useImperativeHandle: Ao,
            useInsertionEffect: Ao,
            useLayoutEffect: Ao,
            useMemo: Ao,
            useReducer: Ao,
            useRef: Ao,
            useState: Ao,
            useDebugValue: Ao,
            useDeferredValue: Ao,
            useTransition: Ao,
            useMutableSource: Ao,
            useSyncExternalStore: Ao,
            useId: Ao,
            unstable_isNewReconciler: !1,
          },
          ii = {
            readContext: Sl,
            useCallback: function (e, t) {
              return (Co().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Sl,
            useEffect: Ho,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                _o(4194308, 4, qo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return _o(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return _o(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Co();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Co();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = ti.bind(null, mo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Co().memoizedState = e);
            },
            useState: Uo,
            useDebugValue: Jo,
            useDeferredValue: function (e) {
              return (Co().memoizedState = e);
            },
            useTransition: function () {
              var e = Uo(!1),
                t = e[0];
              return (
                (e = $o.bind(null, e[1])), (Co().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = mo,
                a = Co();
              if (al) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === Nu)) throw Error(l(349));
                0 !== (30 & ho) || Bo(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                Ho(To.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Mo(9, Do.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Co(),
                t = Nu.identifierPrefix;
              if (al) {
                var n = Ga;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ya & ~(1 << (32 - ot(Ya) - 1))).toString(32) + n)),
                  0 < (n = wo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = xo++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ui = {
            readContext: Sl,
            useCallback: Yo,
            useContext: Sl,
            useEffect: Vo,
            useImperativeHandle: Xo,
            useInsertionEffect: Wo,
            useLayoutEffect: Ko,
            useMemo: Go,
            useReducer: No,
            useRef: Ro,
            useState: function () {
              return No(jo);
            },
            useDebugValue: Jo,
            useDeferredValue: function (e) {
              return Zo(Po(), vo.memoizedState, e);
            },
            useTransition: function () {
              return [No(jo)[0], Po().memoizedState];
            },
            useMutableSource: Oo,
            useSyncExternalStore: Lo,
            useId: ei,
            unstable_isNewReconciler: !1,
          },
          si = {
            readContext: Sl,
            useCallback: Yo,
            useContext: Sl,
            useEffect: Vo,
            useImperativeHandle: Xo,
            useInsertionEffect: Wo,
            useLayoutEffect: Ko,
            useMemo: Go,
            useReducer: zo,
            useRef: Ro,
            useState: function () {
              return zo(jo);
            },
            useDebugValue: Jo,
            useDeferredValue: function (e) {
              var t = Po();
              return null === vo
                ? (t.memoizedState = e)
                : Zo(t, vo.memoizedState, e);
            },
            useTransition: function () {
              return [zo(jo)[0], Po().memoizedState];
            },
            useMutableSource: Oo,
            useSyncExternalStore: Lo,
            useId: ei,
            unstable_isNewReconciler: !1,
          };
        function ci(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += _(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (l) {
            a = "\nError generating stack: " + l.message + "\n" + l.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function fi(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function di(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pi = "function" === typeof WeakMap ? WeakMap : Map;
        function hi(e, t, n) {
          ((n = Bl(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Vu || ((Vu = !0), (Wu = r)), di(0, t);
            }),
            n
          );
        }
        function mi(e, t, n) {
          (n = Bl(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                di(0, t);
              });
          }
          var l = e.stateNode;
          return (
            null !== l &&
              "function" === typeof l.componentDidCatch &&
              (n.callback = function () {
                di(0, t),
                  "function" !== typeof r &&
                    (null === Ku ? (Ku = new Set([this])) : Ku.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function vi(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pi();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Ss.bind(null, e, t, n)), t.then(e, e));
        }
        function gi(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yi(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Bl(-1, 1)).tag = 2), Dl(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bi = w.ReactCurrentOwner,
          wi = !1;
        function xi(e, t, n, r) {
          t.child = null === e ? Gl(t, null, n, r) : Yl(t, e.child, n, r);
        }
        function Ai(e, t, n, r, a) {
          n = n.render;
          var l = t.ref;
          return (
            El(t, a),
            (r = Eo(e, t, n, r, l, a)),
            (n = So()),
            null === e || wi
              ? (al && n && el(t), (t.flags |= 1), xi(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Vi(e, t, a))
          );
        }
        function ki(e, t, n, r, a) {
          if (null === e) {
            var l = n.type;
            return "function" !== typeof l ||
              Ls(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Ds(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), Ei(e, t, l, r, a));
          }
          if (((l = e.child), 0 === (e.lanes & a))) {
            var o = l.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(o, r) &&
              e.ref === t.ref
            )
              return Vi(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Bs(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Ei(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (ur(l, r) && e.ref === t.ref) {
              if (((wi = !1), (t.pendingProps = r = l), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Vi(e, t, a);
              0 !== (131072 & e.flags) && (wi = !0);
            }
          }
          return Pi(e, t, n, r, a);
        }
        function Si(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ca(Bu, Lu),
                (Lu |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== l ? l.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ca(Bu, Lu),
                  (Lu |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== l ? l.baseLanes : n),
                Ca(Bu, Lu),
                (Lu |= r);
            }
          else
            null !== l
              ? ((r = l.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ca(Bu, Lu),
              (Lu |= r);
          return xi(e, t, a, n), t.child;
        }
        function Ci(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Pi(e, t, n, r, a) {
          var l = La(n) ? za : ja.current;
          return (
            (l = Oa(t, l)),
            El(t, a),
            (n = Eo(e, t, n, r, l, a)),
            (r = So()),
            null === e || wi
              ? (al && r && el(t), (t.flags |= 1), xi(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Vi(e, t, a))
          );
        }
        function ji(e, t, n, r, a) {
          if (La(n)) {
            var l = !0;
            Fa(t);
          } else l = !1;
          if ((El(t, a), null === t.stateNode))
            Hi(e, t), Hl(t, n, r), Wl(t, n, r, a), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              i = t.memoizedProps;
            o.props = i;
            var u = o.context,
              s = n.contextType;
            "object" === typeof s && null !== s
              ? (s = Sl(s))
              : (s = Oa(t, (s = La(n) ? za : ja.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((i !== r || u !== s) && Vl(t, o, r, s)),
              (zl = !1);
            var d = t.memoizedState;
            (o.state = d),
              Il(t, r, o, a),
              (u = t.memoizedState),
              i !== r || d !== u || Na.current || zl
                ? ("function" === typeof c &&
                    (Rl(t, n, c, r), (u = t.memoizedState)),
                  (i = zl || Ql(t, n, i, r, d, u, s))
                    ? (f ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = s),
                  (r = i))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              Ll(e, t),
              (i = t.memoizedProps),
              (s = t.type === t.elementType ? i : vl(t.type, i)),
              (o.props = s),
              (f = t.pendingProps),
              (d = o.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = Sl(u))
                : (u = Oa(t, (u = La(n) ? za : ja.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((i !== f || d !== u) && Vl(t, o, r, u)),
              (zl = !1),
              (d = t.memoizedState),
              (o.state = d),
              Il(t, r, o, a);
            var h = t.memoizedState;
            i !== f || d !== h || Na.current || zl
              ? ("function" === typeof p &&
                  (Rl(t, n, p, r), (h = t.memoizedState)),
                (s = zl || Ql(t, n, s, r, d, h, u) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, u),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = u),
                (r = s))
              : ("function" !== typeof o.componentDidUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Ni(e, t, n, r, l, a);
        }
        function Ni(e, t, n, r, a, l) {
          Ci(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return a && Ia(t, n, !1), Vi(e, t, l);
          (r = t.stateNode), (bi.current = t);
          var i =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Yl(t, e.child, null, l)),
                (t.child = Yl(t, null, i, l)))
              : xi(e, t, i, l),
            (t.memoizedState = r.state),
            a && Ia(t, n, !0),
            t.child
          );
        }
        function zi(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Da(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Da(0, t.context, !1),
            ro(e, t.containerInfo);
        }
        function Oi(e, t, n, r, a) {
          return pl(), hl(a), (t.flags |= 256), xi(e, t, n, r), t.child;
        }
        var Li,
          Bi,
          Di,
          Ti = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Fi(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ii(e, t, n) {
          var r,
            a = t.pendingProps,
            o = io.current,
            i = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Ca(io, 1 & o),
            null === e)
          )
            return (
              sl(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = t.mode),
                      (i = t.child),
                      (u = { mode: "hidden", children: u }),
                      0 === (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = u))
                        : (i = Fs(u, a, 0, null)),
                      (e = Ts(e, a, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Fi(n)),
                      (t.memoizedState = Ti),
                      e)
                    : Ui(t, u))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, a, o, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Mi(e, t, i, (r = fi(Error(l(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (a = t.mode),
                    (r = Fs(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((o = Ts(o, a, i, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && Yl(t, e.child, null, i),
                    (t.child.memoizedState = Fi(i)),
                    (t.memoizedState = Ti),
                    o);
              if (0 === (1 & t.mode)) return Mi(e, t, i, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Mi(e, t, i, (r = fi((o = Error(l(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (i & e.childLanes)), wi || u)) {
                if (null !== (r = Nu)) {
                  switch (i & -i) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | i)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), Nl(e, a), ns(r, e, a, -1));
                }
                return ms(), Mi(e, t, i, (r = fi(Error(l(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Ps.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (rl = sa(a.nextSibling)),
                  (nl = t),
                  (al = !0),
                  (ll = null),
                  null !== e &&
                    ((qa[Xa++] = Ya),
                    (qa[Xa++] = Ga),
                    (qa[Xa++] = Ja),
                    (Ya = e.id),
                    (Ga = e.overflow),
                    (Ja = t)),
                  (t = Ui(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, u, a, r, o, n);
          if (i) {
            (i = a.fallback), (u = t.mode), (r = (o = e.child).sibling);
            var s = { mode: "hidden", children: a.children };
            return (
              0 === (1 & u) && t.child !== o
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = s),
                  (t.deletions = null))
                : ((a = Bs(o, s)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (i = Bs(r, i))
                : ((i = Ts(i, u, n, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Fi(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (i.memoizedState = u),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ti),
              a
            );
          }
          return (
            (e = (i = e.child).sibling),
            (a = Bs(i, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Ui(e, t) {
          return (
            ((t = Fs(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Mi(e, t, n, r) {
          return (
            null !== r && hl(r),
            Yl(t, e.child, null, n),
            ((e = Ui(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ri(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), kl(e.return, t, n);
        }
        function _i(e, t, n, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a));
        }
        function Qi(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((xi(e, t, r.children, n), 0 !== (2 & (r = io.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ri(e, n, t);
                else if (19 === e.tag) Ri(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ca(io, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === uo(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  _i(t, !1, a, n, l);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === uo(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                _i(t, !0, n, null, l);
                break;
              case "together":
                _i(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hi(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Vi(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Fu |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(l(153));
          if (null !== t.child) {
            for (
              n = Bs((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Bs(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Wi(e, t) {
          if (!al)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Ki(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function qi(e, t, n) {
          var r = t.pendingProps;
          switch ((tl(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Ki(t), null;
            case 1:
            case 17:
              return La(t.type) && Ba(), Ki(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ao(),
                Sa(Na),
                Sa(ja),
                co(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fl(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ll && (os(ll), (ll = null)))),
                Ki(t),
                null
              );
            case 5:
              oo(t);
              var a = no(to.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Bi(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return Ki(t), null;
                }
                if (((e = no($l.current)), fl(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Mr("cancel", r), Mr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Mr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Tr.length; a++) Mr(Tr[a], r);
                      break;
                    case "source":
                      Mr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Mr("error", r), Mr("load", r);
                      break;
                    case "details":
                      Mr("toggle", r);
                      break;
                    case "input":
                      Y(r, o), Mr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Mr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, o), Mr("invalid", r);
                  }
                  for (var u in (ye(n, o), (a = null), o))
                    if (o.hasOwnProperty(u)) {
                      var s = o[u];
                      "children" === u
                        ? "string" === typeof s
                          ? r.textContent !== s &&
                            (!0 !== o.suppressHydrationWarning &&
                              Zr(r.textContent, s, e),
                            (a = ["children", s]))
                          : "number" === typeof s &&
                            r.textContent !== "" + s &&
                            (!0 !== o.suppressHydrationWarning &&
                              Zr(r.textContent, s, e),
                            (a = ["children", "" + s]))
                        : i.hasOwnProperty(u) &&
                          null != s &&
                          "onScroll" === u &&
                          Mr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      K(r), $(r, o, !0);
                      break;
                    case "textarea":
                      K(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = $r);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ie(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Li(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case "dialog":
                        Mr("cancel", e), Mr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Mr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Tr.length; a++) Mr(Tr[a], e);
                        a = r;
                        break;
                      case "source":
                        Mr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Mr("error", e), Mr("load", e), (a = r);
                        break;
                      case "details":
                        Mr("toggle", e), (a = r);
                        break;
                      case "input":
                        Y(e, r), (a = J(e, r)), Mr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = I({}, r, { value: void 0 })),
                          Mr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Mr("invalid", e);
                    }
                    for (o in (ye(n, a), (s = a)))
                      if (s.hasOwnProperty(o)) {
                        var c = s[o];
                        "style" === o
                          ? ve(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === o
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (i.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && Mr("scroll", e)
                              : null != c && b(e, o, c, u));
                      }
                    switch (n) {
                      case "input":
                        K(e), $(e, r, !1);
                        break;
                      case "textarea":
                        K(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + V(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = $r);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Ki(t), null;
            case 6:
              if (e && null != t.stateNode) Di(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(l(166));
                if (((n = no(to.current)), no($l.current), fl(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (o = r.nodeValue !== n) && null !== (e = nl))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return Ki(t), null;
            case 13:
              if (
                (Sa(io),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  al &&
                  null !== rl &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  dl(), pl(), (t.flags |= 98560), (o = !1);
                else if (((o = fl(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(l(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(l(317));
                    o[da] = t;
                  } else
                    pl(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Ki(t), (o = !1);
                } else null !== ll && (os(ll), (ll = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & io.current)
                        ? 0 === Du && (Du = 3)
                        : ms())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Ki(t),
                  null);
            case 4:
              return (
                ao(), null === e && Qr(t.stateNode.containerInfo), Ki(t), null
              );
            case 10:
              return Al(t.type._context), Ki(t), null;
            case 19:
              if ((Sa(io), null === (o = t.memoizedState))) return Ki(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = o.rendering)))
                if (r) Wi(o, !1);
                else {
                  if (0 !== Du || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = uo(e))) {
                        for (
                          t.flags |= 128,
                            Wi(o, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (u = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = u.childLanes),
                                (o.lanes = u.lanes),
                                (o.child = u.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = u.memoizedProps),
                                (o.memoizedState = u.memoizedState),
                                (o.updateQueue = u.updateQueue),
                                (o.type = u.type),
                                (e = u.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ca(io, (1 & io.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Ge() > Qu &&
                    ((t.flags |= 128),
                    (r = !0),
                    Wi(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = uo(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Wi(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !u.alternate &&
                        !al)
                    )
                      return Ki(t), null;
                  } else
                    2 * Ge() - o.renderingStartTime > Qu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Wi(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = o.last) ? (n.sibling = u) : (t.child = u),
                    (o.last = u));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Ge()),
                  (t.sibling = null),
                  (n = io.current),
                  Ca(io, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Ki(t), null);
            case 22:
            case 23:
              return (
                fs(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Lu) &&
                    (Ki(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Ki(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(l(156, t.tag));
        }
        function Xi(e, t) {
          switch ((tl(t), t.tag)) {
            case 1:
              return (
                La(t.type) && Ba(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ao(),
                Sa(Na),
                Sa(ja),
                co(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return oo(t), null;
            case 13:
              if (
                (Sa(io),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(l(340));
                pl();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Sa(io), null;
            case 4:
              return ao(), null;
            case 10:
              return Al(t.type._context), null;
            case 22:
            case 23:
              return fs(), null;
            default:
              return null;
          }
        }
        (Li = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Bi = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), no($l.current);
              var l,
                o = null;
              switch (n) {
                case "input":
                  (a = J(e, a)), (r = J(e, r)), (o = []);
                  break;
                case "select":
                  (a = I({}, a, { value: void 0 })),
                    (r = I({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = $r);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var u = a[c];
                    for (l in u)
                      u.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (i.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((u = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ("style" === c)
                    if (u) {
                      for (l in u)
                        !u.hasOwnProperty(l) ||
                          (s && s.hasOwnProperty(l)) ||
                          (n || (n = {}), (n[l] = ""));
                      for (l in s)
                        s.hasOwnProperty(l) &&
                          u[l] !== s[l] &&
                          (n || (n = {}), (n[l] = s[l]));
                    } else n || (o || (o = []), o.push(c, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (o = o || []).push(c, s))
                      : "children" === c
                      ? ("string" !== typeof s && "number" !== typeof s) ||
                        (o = o || []).push(c, "" + s)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (i.hasOwnProperty(c)
                          ? (null != s && "onScroll" === c && Mr("scroll", e),
                            o || u === s || (o = []))
                          : (o = o || []).push(c, s));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Di = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Ji = !1,
          Yi = !1,
          Gi = "function" === typeof WeakSet ? WeakSet : Set,
          Zi = null;
        function $i(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Es(e, t, r);
              }
            else n.current = null;
        }
        function eu(e, t, n) {
          try {
            n();
          } catch (r) {
            Es(e, t, r);
          }
        }
        var tu = !1;
        function nu(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && eu(t, n, l);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function ru(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function au(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function lu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), lu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[ma],
              delete t[va],
              delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ou(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function iu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ou(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function uu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = $r));
          else if (4 !== r && null !== (e = e.child))
            for (uu(e, t, n), e = e.sibling; null !== e; )
              uu(e, t, n), (e = e.sibling);
        }
        function su(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; )
              su(e, t, n), (e = e.sibling);
        }
        var cu = null,
          fu = !1;
        function du(e, t, n) {
          for (n = n.child; null !== n; ) pu(e, t, n), (n = n.sibling);
        }
        function pu(e, t, n) {
          if (lt && "function" === typeof lt.onCommitFiberUnmount)
            try {
              lt.onCommitFiberUnmount(at, n);
            } catch (i) {}
          switch (n.tag) {
            case 5:
              Yi || $i(n, t);
            case 6:
              var r = cu,
                a = fu;
              (cu = null),
                du(e, t, n),
                (fu = a),
                null !== (cu = r) &&
                  (fu
                    ? ((e = cu),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cu.removeChild(n.stateNode));
              break;
            case 18:
              null !== cu &&
                (fu
                  ? ((e = cu),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, n)
                      : 1 === e.nodeType && ua(e, n),
                    Qt(e))
                  : ua(cu, n.stateNode));
              break;
            case 4:
              (r = cu),
                (a = fu),
                (cu = n.stateNode.containerInfo),
                (fu = !0),
                du(e, t, n),
                (cu = r),
                (fu = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Yi &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var l = a,
                    o = l.destroy;
                  (l = l.tag),
                    void 0 !== o &&
                      (0 !== (2 & l) || 0 !== (4 & l)) &&
                      eu(n, t, o),
                    (a = a.next);
                } while (a !== r);
              }
              du(e, t, n);
              break;
            case 1:
              if (
                !Yi &&
                ($i(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (i) {
                  Es(n, t, i);
                }
              du(e, t, n);
              break;
            case 21:
              du(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Yi = (r = Yi) || null !== n.memoizedState),
                  du(e, t, n),
                  (Yi = r))
                : du(e, t, n);
              break;
            default:
              du(e, t, n);
          }
        }
        function hu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Gi()),
              t.forEach(function (t) {
                var r = js.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function mu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var o = e,
                  i = t,
                  u = i;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (cu = u.stateNode), (fu = !1);
                      break e;
                    case 3:
                    case 4:
                      (cu = u.stateNode.containerInfo), (fu = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === cu) throw Error(l(160));
                pu(o, i, a), (cu = null), (fu = !1);
                var s = a.alternate;
                null !== s && (s.return = null), (a.return = null);
              } catch (c) {
                Es(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) vu(t, e), (t = t.sibling);
        }
        function vu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((mu(t, e), gu(e), 4 & r)) {
                try {
                  nu(3, e, e.return), ru(3, e);
                } catch (v) {
                  Es(e, e.return, v);
                }
                try {
                  nu(5, e, e.return);
                } catch (v) {
                  Es(e, e.return, v);
                }
              }
              break;
            case 1:
              mu(t, e), gu(e), 512 & r && null !== n && $i(n, n.return);
              break;
            case 5:
              if (
                (mu(t, e),
                gu(e),
                512 & r && null !== n && $i(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (v) {
                  Es(e, e.return, v);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : o,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === u &&
                      "radio" === o.type &&
                      null != o.name &&
                      G(a, o),
                      be(u, i);
                    var c = be(u, o);
                    for (i = 0; i < s.length; i += 2) {
                      var f = s[i],
                        d = s[i + 1];
                      "style" === f
                        ? ve(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : b(a, f, d, c);
                    }
                    switch (u) {
                      case "input":
                        Z(a, o);
                        break;
                      case "textarea":
                        le(a, o);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        null != h
                          ? ne(a, !!o.multiple, h, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(a, !!o.multiple, o.defaultValue, !0)
                              : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    a[pa] = o;
                  } catch (v) {
                    Es(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((mu(t, e), gu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (a = e.stateNode), (o = e.memoizedProps);
                try {
                  a.nodeValue = o;
                } catch (v) {
                  Es(e, e.return, v);
                }
              }
              break;
            case 3:
              if (
                (mu(t, e),
                gu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Qt(t.containerInfo);
                } catch (v) {
                  Es(e, e.return, v);
                }
              break;
            case 4:
            default:
              mu(t, e), gu(e);
              break;
            case 13:
              mu(t, e),
                gu(e),
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (_u = Ge())),
                4 & r && hu(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Yi = (c = Yi) || f), mu(t, e), (Yi = c))
                  : mu(t, e),
                gu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Zi = e, f = e.child; null !== f; ) {
                    for (d = Zi = f; null !== Zi; ) {
                      switch (((h = (p = Zi).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nu(4, p, p.return);
                          break;
                        case 1:
                          $i(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (v) {
                              Es(r, n, v);
                            }
                          }
                          break;
                        case 5:
                          $i(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            xu(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Zi = h)) : xu(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          c
                            ? "function" === typeof (o = a.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((u = d.stateNode),
                              (i =
                                void 0 !== (s = d.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty("display")
                                  ? s.display
                                  : null),
                              (u.style.display = me("display", i)));
                      } catch (v) {
                        Es(e, e.return, v);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (v) {
                        Es(e, e.return, v);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              mu(t, e), gu(e), 4 & r && hu(e);
            case 21:
          }
        }
        function gu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ou(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(l(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    su(e, iu(e), a);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  uu(e, iu(e), o);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (i) {
              Es(e, e.return, i);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function yu(e, t, n) {
          (Zi = e), bu(e, t, n);
        }
        function bu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zi; ) {
            var a = Zi,
              l = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Ji;
              if (!o) {
                var i = a.alternate,
                  u = (null !== i && null !== i.memoizedState) || Yi;
                i = Ji;
                var s = Yi;
                if (((Ji = o), (Yi = u) && !s))
                  for (Zi = a; null !== Zi; )
                    (u = (o = Zi).child),
                      22 === o.tag && null !== o.memoizedState
                        ? Au(a)
                        : null !== u
                        ? ((u.return = o), (Zi = u))
                        : Au(a);
                for (; null !== l; ) (Zi = l), bu(l, t, n), (l = l.sibling);
                (Zi = a), (Ji = i), (Yi = s);
              }
              wu(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== l
                ? ((l.return = a), (Zi = l))
                : wu(e);
          }
        }
        function wu(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yi || ru(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Yi)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : vl(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Ul(t, o, r);
                      break;
                    case 3:
                      var i = t.updateQueue;
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Ul(t, i, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var s = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            s.autoFocus && n.focus();
                            break;
                          case "img":
                            s.src && (n.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Qt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(l(163));
                  }
                Yi || (512 & t.flags && au(t));
              } catch (p) {
                Es(t, t.return, p);
              }
            }
            if (t === e) {
              Zi = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zi = n);
              break;
            }
            Zi = t.return;
          }
        }
        function xu(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            if (t === e) {
              Zi = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zi = n);
              break;
            }
            Zi = t.return;
          }
        }
        function Au(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    ru(4, t);
                  } catch (u) {
                    Es(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      Es(t, a, u);
                    }
                  }
                  var l = t.return;
                  try {
                    au(t);
                  } catch (u) {
                    Es(t, l, u);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    au(t);
                  } catch (u) {
                    Es(t, o, u);
                  }
              }
            } catch (u) {
              Es(t, t.return, u);
            }
            if (t === e) {
              Zi = null;
              break;
            }
            var i = t.sibling;
            if (null !== i) {
              (i.return = t.return), (Zi = i);
              break;
            }
            Zi = t.return;
          }
        }
        var ku,
          Eu = Math.ceil,
          Su = w.ReactCurrentDispatcher,
          Cu = w.ReactCurrentOwner,
          Pu = w.ReactCurrentBatchConfig,
          ju = 0,
          Nu = null,
          zu = null,
          Ou = 0,
          Lu = 0,
          Bu = Ea(0),
          Du = 0,
          Tu = null,
          Fu = 0,
          Iu = 0,
          Uu = 0,
          Mu = null,
          Ru = null,
          _u = 0,
          Qu = 1 / 0,
          Hu = null,
          Vu = !1,
          Wu = null,
          Ku = null,
          qu = !1,
          Xu = null,
          Ju = 0,
          Yu = 0,
          Gu = null,
          Zu = -1,
          $u = 0;
        function es() {
          return 0 !== (6 & ju) ? Ge() : -1 !== Zu ? Zu : (Zu = Ge());
        }
        function ts(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & ju) && 0 !== Ou
            ? Ou & -Ou
            : null !== ml.transition
            ? (0 === $u && ($u = mt()), $u)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function ns(e, t, n, r) {
          if (50 < Yu) throw ((Yu = 0), (Gu = null), Error(l(185)));
          gt(e, n, r),
            (0 !== (2 & ju) && e === Nu) ||
              (e === Nu && (0 === (2 & ju) && (Iu |= n), 4 === Du && is(e, Ou)),
              rs(e, r),
              1 === n &&
                0 === ju &&
                0 === (1 & t.mode) &&
                ((Qu = Ge() + 500), Ma && Qa()));
        }
        function rs(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;

            ) {
              var o = 31 - ot(l),
                i = 1 << o,
                u = a[o];
              -1 === u
                ? (0 !== (i & n) && 0 === (i & r)) || (a[o] = pt(i, t))
                : u <= t && (e.expiredLanes |= i),
                (l &= ~i);
            }
          })(e, t);
          var r = dt(e, e === Nu ? Ou : 0);
          if (0 === r)
            null !== n && Xe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Xe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ma = !0), _a(e);
                  })(us.bind(null, e))
                : _a(us.bind(null, e)),
                oa(function () {
                  0 === (6 & ju) && Qa();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = $e;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ns(n, as.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function as(e, t) {
          if (((Zu = -1), ($u = 0), 0 !== (6 & ju))) throw Error(l(327));
          var n = e.callbackNode;
          if (As() && e.callbackNode !== n) return null;
          var r = dt(e, e === Nu ? Ou : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vs(e, r);
          else {
            t = r;
            var a = ju;
            ju |= 2;
            var o = hs();
            for (
              (Nu === e && Ou === t) ||
              ((Hu = null), (Qu = Ge() + 500), ds(e, t));
              ;

            )
              try {
                ys();
                break;
              } catch (u) {
                ps(e, u);
              }
            xl(),
              (Su.current = o),
              (ju = a),
              null !== zu ? (t = 0) : ((Nu = null), (Ou = 0), (t = Du));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = ls(e, a))),
              1 === t)
            )
              throw ((n = Tu), ds(e, 0), is(e, r), rs(e, Ge()), n);
            if (6 === t) is(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              l = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ir(l(), a)) return !1;
                            } catch (i) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = vs(e, r)) &&
                    0 !== (o = ht(e)) &&
                    ((r = o), (t = ls(e, o))),
                  1 === t))
              )
                throw ((n = Tu), ds(e, 0), is(e, r), rs(e, Ge()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                case 5:
                  xs(e, Ru, Hu);
                  break;
                case 3:
                  if (
                    (is(e, r),
                    (130023424 & r) === r && 10 < (t = _u + 500 - Ge()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      es(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(xs.bind(null, e, Ru, Hu), t);
                    break;
                  }
                  xs(e, Ru, Hu);
                  break;
                case 4:
                  if ((is(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - ot(r);
                    (o = 1 << i), (i = t[i]) > a && (a = i), (r &= ~o);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ge() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Eu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(xs.bind(null, e, Ru, Hu), r);
                    break;
                  }
                  xs(e, Ru, Hu);
                  break;
                default:
                  throw Error(l(329));
              }
            }
          }
          return rs(e, Ge()), e.callbackNode === n ? as.bind(null, e) : null;
        }
        function ls(e, t) {
          var n = Mu;
          return (
            e.current.memoizedState.isDehydrated && (ds(e, t).flags |= 256),
            2 !== (e = vs(e, t)) && ((t = Ru), (Ru = n), null !== t && os(t)),
            e
          );
        }
        function os(e) {
          null === Ru ? (Ru = e) : Ru.push.apply(Ru, e);
        }
        function is(e, t) {
          for (
            t &= ~Uu,
              t &= ~Iu,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function us(e) {
          if (0 !== (6 & ju)) throw Error(l(327));
          As();
          var t = dt(e, 0);
          if (0 === (1 & t)) return rs(e, Ge()), null;
          var n = vs(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = ls(e, r)));
          }
          if (1 === n) throw ((n = Tu), ds(e, 0), is(e, t), rs(e, Ge()), n);
          if (6 === n) throw Error(l(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xs(e, Ru, Hu),
            rs(e, Ge()),
            null
          );
        }
        function ss(e, t) {
          var n = ju;
          ju |= 1;
          try {
            return e(t);
          } finally {
            0 === (ju = n) && ((Qu = Ge() + 500), Ma && Qa());
          }
        }
        function cs(e) {
          null !== Xu && 0 === Xu.tag && 0 === (6 & ju) && As();
          var t = ju;
          ju |= 1;
          var n = Pu.transition,
            r = bt;
          try {
            if (((Pu.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Pu.transition = n), 0 === (6 & (ju = t)) && Qa();
          }
        }
        function fs() {
          (Lu = Bu.current), Sa(Bu);
        }
        function ds(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== zu))
            for (n = zu.return; null !== n; ) {
              var r = n;
              switch ((tl(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ba();
                  break;
                case 3:
                  ao(), Sa(Na), Sa(ja), co();
                  break;
                case 5:
                  oo(r);
                  break;
                case 4:
                  ao();
                  break;
                case 13:
                case 19:
                  Sa(io);
                  break;
                case 10:
                  Al(r.type._context);
                  break;
                case 22:
                case 23:
                  fs();
              }
              n = n.return;
            }
          if (
            ((Nu = e),
            (zu = e = Bs(e.current, null)),
            (Ou = Lu = t),
            (Du = 0),
            (Tu = null),
            (Uu = Iu = Fu = 0),
            (Ru = Mu = null),
            null !== Cl)
          ) {
            for (t = 0; t < Cl.length; t++)
              if (null !== (r = (n = Cl[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  l = n.pending;
                if (null !== l) {
                  var o = l.next;
                  (l.next = a), (r.next = o);
                }
                n.pending = r;
              }
            Cl = null;
          }
          return e;
        }
        function ps(e, t) {
          for (;;) {
            var n = zu;
            try {
              if ((xl(), (fo.current = oi), yo)) {
                for (var r = mo.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                yo = !1;
              }
              if (
                ((ho = 0),
                (go = vo = mo = null),
                (bo = !1),
                (wo = 0),
                (Cu.current = null),
                null === n || null === n.return)
              ) {
                (Du = 1), (Tu = t), (zu = null);
                break;
              }
              e: {
                var o = e,
                  i = n.return,
                  u = n,
                  s = t;
                if (
                  ((t = Ou),
                  (u.flags |= 32768),
                  null !== s &&
                    "object" === typeof s &&
                    "function" === typeof s.then)
                ) {
                  var c = s,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = gi(i);
                  if (null !== h) {
                    (h.flags &= -257),
                      yi(h, i, u, 0, t),
                      1 & h.mode && vi(o, c, t),
                      (s = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var v = new Set();
                      v.add(s), (t.updateQueue = v);
                    } else m.add(s);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    vi(o, c, t), ms();
                    break e;
                  }
                  s = Error(l(426));
                } else if (al && 1 & u.mode) {
                  var g = gi(i);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      yi(g, i, u, 0, t),
                      hl(ci(s, u));
                    break e;
                  }
                }
                (o = s = ci(s, u)),
                  4 !== Du && (Du = 2),
                  null === Mu ? (Mu = [o]) : Mu.push(o),
                  (o = i);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Fl(o, hi(0, s, t));
                      break e;
                    case 1:
                      u = s;
                      var y = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Ku || !Ku.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Fl(o, mi(o, u, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              ws(n);
            } catch (w) {
              (t = w), zu === n && null !== n && (zu = n = n.return);
              continue;
            }
            break;
          }
        }
        function hs() {
          var e = Su.current;
          return (Su.current = oi), null === e ? oi : e;
        }
        function ms() {
          (0 !== Du && 3 !== Du && 2 !== Du) || (Du = 4),
            null === Nu ||
              (0 === (268435455 & Fu) && 0 === (268435455 & Iu)) ||
              is(Nu, Ou);
        }
        function vs(e, t) {
          var n = ju;
          ju |= 2;
          var r = hs();
          for ((Nu === e && Ou === t) || ((Hu = null), ds(e, t)); ; )
            try {
              gs();
              break;
            } catch (a) {
              ps(e, a);
            }
          if ((xl(), (ju = n), (Su.current = r), null !== zu))
            throw Error(l(261));
          return (Nu = null), (Ou = 0), Du;
        }
        function gs() {
          for (; null !== zu; ) bs(zu);
        }
        function ys() {
          for (; null !== zu && !Je(); ) bs(zu);
        }
        function bs(e) {
          var t = ku(e.alternate, e, Lu);
          (e.memoizedProps = e.pendingProps),
            null === t ? ws(e) : (zu = t),
            (Cu.current = null);
        }
        function ws(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = qi(n, t, Lu))) return void (zu = n);
            } else {
              if (null !== (n = Xi(n, t)))
                return (n.flags &= 32767), void (zu = n);
              if (null === e) return (Du = 6), void (zu = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (zu = t);
            zu = t = e;
          } while (null !== t);
          0 === Du && (Du = 5);
        }
        function xs(e, t, n) {
          var r = bt,
            a = Pu.transition;
          try {
            (Pu.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  As();
                } while (null !== Xu);
                if (0 !== (6 & ju)) throw Error(l(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(l(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - ot(n),
                        l = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                    }
                  })(e, o),
                  e === Nu && ((zu = Nu = null), (Ou = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qu ||
                    ((qu = !0),
                    Ns(tt, function () {
                      return As(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Pu.transition), (Pu.transition = null);
                  var i = bt;
                  bt = 1;
                  var u = ju;
                  (ju |= 4),
                    (Cu.current = null),
                    (function (e, t) {
                      if (((ea = Vt), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (x) {
                                n = null;
                                break e;
                              }
                              var i = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (u = i + a),
                                    d !== o ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (s = i + r),
                                    3 === d.nodeType &&
                                      (i += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === a && (u = i),
                                    p === o && ++f === r && (s = i),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === u || -1 === s
                                  ? null
                                  : { start: u, end: s };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Vt = !1,
                          Zi = t;
                        null !== Zi;

                      )
                        if (
                          ((e = (t = Zi).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zi = e);
                        else
                          for (; null !== Zi; ) {
                            t = Zi;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var v = m.memoizedProps,
                                        g = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? v
                                            : vl(t.type, v),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(l(163));
                                }
                            } catch (x) {
                              Es(t, t.return, x);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zi = e);
                              break;
                            }
                            Zi = t.return;
                          }
                      (m = tu), (tu = !1);
                    })(e, n),
                    vu(n, e),
                    hr(ta),
                    (Vt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    yu(n, e, a),
                    Ye(),
                    (ju = u),
                    (bt = i),
                    (Pu.transition = o);
                } else e.current = n;
                if (
                  (qu && ((qu = !1), (Xu = e), (Ju = a)),
                  (o = e.pendingLanes),
                  0 === o && (Ku = null),
                  (function (e) {
                    if (lt && "function" === typeof lt.onCommitFiberRoot)
                      try {
                        lt.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  rs(e, Ge()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((a = t[n]).value, {
                      componentStack: a.stack,
                      digest: a.digest,
                    });
                if (Vu) throw ((Vu = !1), (e = Wu), (Wu = null), e);
                0 !== (1 & Ju) && 0 !== e.tag && As(),
                  (o = e.pendingLanes),
                  0 !== (1 & o)
                    ? e === Gu
                      ? Yu++
                      : ((Yu = 0), (Gu = e))
                    : (Yu = 0),
                  Qa();
              })(e, t, n, r);
          } finally {
            (Pu.transition = a), (bt = r);
          }
          return null;
        }
        function As() {
          if (null !== Xu) {
            var e = wt(Ju),
              t = Pu.transition,
              n = bt;
            try {
              if (((Pu.transition = null), (bt = 16 > e ? 16 : e), null === Xu))
                var r = !1;
              else {
                if (((e = Xu), (Xu = null), (Ju = 0), 0 !== (6 & ju)))
                  throw Error(l(331));
                var a = ju;
                for (ju |= 4, Zi = e.current; null !== Zi; ) {
                  var o = Zi,
                    i = o.child;
                  if (0 !== (16 & Zi.flags)) {
                    var u = o.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (Zi = c; null !== Zi; ) {
                          var f = Zi;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nu(8, f, o);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Zi = d);
                          else
                            for (; null !== Zi; ) {
                              var p = (f = Zi).sibling,
                                h = f.return;
                              if ((lu(f), f === c)) {
                                Zi = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Zi = p);
                                break;
                              }
                              Zi = h;
                            }
                        }
                      }
                      var m = o.alternate;
                      if (null !== m) {
                        var v = m.child;
                        if (null !== v) {
                          m.child = null;
                          do {
                            var g = v.sibling;
                            (v.sibling = null), (v = g);
                          } while (null !== v);
                        }
                      }
                      Zi = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== i)
                    (i.return = o), (Zi = i);
                  else
                    e: for (; null !== Zi; ) {
                      if (0 !== (2048 & (o = Zi).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nu(9, o, o.return);
                        }
                      var y = o.sibling;
                      if (null !== y) {
                        (y.return = o.return), (Zi = y);
                        break e;
                      }
                      Zi = o.return;
                    }
                }
                var b = e.current;
                for (Zi = b; null !== Zi; ) {
                  var w = (i = Zi).child;
                  if (0 !== (2064 & i.subtreeFlags) && null !== w)
                    (w.return = i), (Zi = w);
                  else
                    e: for (i = b; null !== Zi; ) {
                      if (0 !== (2048 & (u = Zi).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(9, u);
                          }
                        } catch (A) {
                          Es(u, u.return, A);
                        }
                      if (u === i) {
                        Zi = null;
                        break e;
                      }
                      var x = u.sibling;
                      if (null !== x) {
                        (x.return = u.return), (Zi = x);
                        break e;
                      }
                      Zi = u.return;
                    }
                }
                if (
                  ((ju = a),
                  Qa(),
                  lt && "function" === typeof lt.onPostCommitFiberRoot)
                )
                  try {
                    lt.onPostCommitFiberRoot(at, e);
                  } catch (A) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Pu.transition = t);
            }
          }
          return !1;
        }
        function ks(e, t, n) {
          (e = Dl(e, (t = hi(0, (t = ci(n, t)), 1)), 1)),
            (t = es()),
            null !== e && (gt(e, 1, t), rs(e, t));
        }
        function Es(e, t, n) {
          if (3 === e.tag) ks(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                ks(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Ku || !Ku.has(r)))
                ) {
                  (t = Dl(t, (e = mi(t, (e = ci(n, e)), 1)), 1)),
                    (e = es()),
                    null !== t && (gt(t, 1, e), rs(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Ss(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = es()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Nu === e &&
              (Ou & n) === n &&
              (4 === Du ||
              (3 === Du && (130023424 & Ou) === Ou && 500 > Ge() - _u)
                ? ds(e, 0)
                : (Uu |= n)),
            rs(e, t);
        }
        function Cs(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = es();
          null !== (e = Nl(e, t)) && (gt(e, t, n), rs(e, n));
        }
        function Ps(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Cs(e, n);
        }
        function js(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(l(314));
          }
          null !== r && r.delete(t), Cs(e, n);
        }
        function Ns(e, t) {
          return qe(e, t);
        }
        function zs(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Os(e, t, n, r) {
          return new zs(e, t, n, r);
        }
        function Ls(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Bs(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Os(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Ds(e, t, n, r, a, o) {
          var i = 2;
          if (((r = e), "function" === typeof e)) Ls(e) && (i = 1);
          else if ("string" === typeof e) i = 5;
          else
            e: switch (e) {
              case k:
                return Ts(n.children, a, o, t);
              case E:
                (i = 8), (a |= 8);
                break;
              case S:
                return (
                  ((e = Os(12, n, t, 2 | a)).elementType = S), (e.lanes = o), e
                );
              case N:
                return (
                  ((e = Os(13, n, t, a)).elementType = N), (e.lanes = o), e
                );
              case z:
                return (
                  ((e = Os(19, n, t, a)).elementType = z), (e.lanes = o), e
                );
              case B:
                return Fs(n, a, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      i = 10;
                      break e;
                    case P:
                      i = 9;
                      break e;
                    case j:
                      i = 11;
                      break e;
                    case O:
                      i = 14;
                      break e;
                    case L:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Os(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Ts(e, t, n, r) {
          return ((e = Os(7, e, r, t)).lanes = n), e;
        }
        function Fs(e, t, n, r) {
          return (
            ((e = Os(22, e, r, t)).elementType = B),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Is(e, t, n) {
          return ((e = Os(6, e, null, t)).lanes = n), e;
        }
        function Us(e, t, n) {
          return (
            ((t = Os(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Ms(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Rs(e, t, n, r, a, l, o, i, u) {
          return (
            (e = new Ms(e, t, n, i, u)),
            1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
            (l = Os(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ol(l),
            e
          );
        }
        function _s(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: A,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Qs(e) {
          if (!e) return Pa;
          e: {
            if (Qe((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(l(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (La(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(l(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (La(n)) return Ta(e, n, t);
          }
          return t;
        }
        function Hs(e, t, n, r, a, l, o, i, u) {
          return (
            ((e = Rs(n, r, !0, e, 0, l, 0, i, u)).context = Qs(null)),
            (n = e.current),
            ((l = Bl((r = es()), (a = ts(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Dl(n, l, a),
            (e.current.lanes = a),
            gt(e, a, r),
            rs(e, r),
            e
          );
        }
        function Vs(e, t, n, r) {
          var a = t.current,
            l = es(),
            o = ts(a);
          return (
            (n = Qs(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Bl(l, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Dl(a, t, o)) && (ns(e, a, o, l), Tl(e, a, o)),
            o
          );
        }
        function Ws(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Ks(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qs(e, t) {
          Ks(e, t), (e = e.alternate) && Ks(e, t);
        }
        ku = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Na.current) wi = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        zi(t), pl();
                        break;
                      case 5:
                        lo(t);
                        break;
                      case 1:
                        La(t.type) && Fa(t);
                        break;
                      case 4:
                        ro(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ca(gl, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ca(io, 1 & io.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ii(e, t, n)
                            : (Ca(io, 1 & io.current),
                              null !== (e = Vi(e, t, n)) ? e.sibling : null);
                        Ca(io, 1 & io.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Qi(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ca(io, io.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Si(e, t, n);
                    }
                    return Vi(e, t, n);
                  })(e, t, n)
                );
              wi = 0 !== (131072 & e.flags);
            }
          else (wi = !1), al && 0 !== (1048576 & t.flags) && $a(t, Ka, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hi(e, t), (e = t.pendingProps);
              var a = Oa(t, ja.current);
              El(t, n), (a = Eo(null, t, r, e, a, n));
              var o = So();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    La(r) ? ((o = !0), Fa(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Ol(t),
                    (a.updater = _l),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Wl(t, r, e, n),
                    (t = Ni(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    al && o && el(t),
                    xi(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hi(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Ls(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === j) return 11;
                        if (e === O) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = vl(r, e)),
                  a)
                ) {
                  case 0:
                    t = Pi(null, t, r, e, n);
                    break e;
                  case 1:
                    t = ji(null, t, r, e, n);
                    break e;
                  case 11:
                    t = Ai(null, t, r, e, n);
                    break e;
                  case 14:
                    t = ki(null, t, r, vl(r.type, e), n);
                    break e;
                }
                throw Error(l(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Pi(e, t, r, (a = t.elementType === r ? a : vl(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                ji(e, t, r, (a = t.elementType === r ? a : vl(r, a)), n)
              );
            case 3:
              e: {
                if ((zi(t), null === e)) throw Error(l(387));
                (r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  Ll(e, t),
                  Il(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Oi(e, t, r, n, (a = ci(Error(l(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Oi(e, t, r, n, (a = ci(Error(l(424)), t)));
                    break e;
                  }
                  for (
                    rl = sa(t.stateNode.containerInfo.firstChild),
                      nl = t,
                      al = !0,
                      ll = null,
                      n = Gl(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pl(), r === a)) {
                    t = Vi(e, t, n);
                    break e;
                  }
                  xi(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                lo(t),
                null === e && sl(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (i = a.children),
                na(r, a)
                  ? (i = null)
                  : null !== o && na(r, o) && (t.flags |= 32),
                Ci(e, t),
                xi(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && sl(t), null;
            case 13:
              return Ii(e, t, n);
            case 4:
              return (
                ro(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Yl(t, null, r, n)) : xi(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ai(e, t, r, (a = t.elementType === r ? a : vl(r, a)), n)
              );
            case 7:
              return xi(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return xi(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (i = a.value),
                  Ca(gl, r._currentValue),
                  (r._currentValue = i),
                  null !== o)
                )
                  if (ir(o.value, i)) {
                    if (o.children === a.children && !Na.current) {
                      t = Vi(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var u = o.dependencies;
                      if (null !== u) {
                        i = o.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === o.tag) {
                              (s = Bl(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (s.next = s)
                                  : ((s.next = f.next), (f.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (o.lanes |= n),
                              null !== (s = o.alternate) && (s.lanes |= n),
                              kl(o.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === o.tag)
                        i = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (i = o.return)) throw Error(l(341));
                        (i.lanes |= n),
                          null !== (u = i.alternate) && (u.lanes |= n),
                          kl(i, n, t),
                          (i = o.sibling);
                      } else i = o.child;
                      if (null !== i) i.return = o;
                      else
                        for (i = o; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (o = i.sibling)) {
                            (o.return = i.return), (i = o);
                            break;
                          }
                          i = i.return;
                        }
                      o = i;
                    }
                xi(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                El(t, n),
                (r = r((a = Sl(a)))),
                (t.flags |= 1),
                xi(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = vl((r = t.type), t.pendingProps)),
                ki(e, t, r, (a = vl(r.type, a)), n)
              );
            case 15:
              return Ei(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : vl(r, a)),
                Hi(e, t),
                (t.tag = 1),
                La(r) ? ((e = !0), Fa(t)) : (e = !1),
                El(t, n),
                Hl(t, r, a),
                Wl(t, r, a, n),
                Ni(null, t, r, !0, e, n)
              );
            case 19:
              return Qi(e, t, n);
            case 22:
              return Si(e, t, n);
          }
          throw Error(l(156, t.tag));
        };
        var Xs =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Js(e) {
          this._internalRoot = e;
        }
        function Ys(e) {
          this._internalRoot = e;
        }
        function Gs(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function $s() {}
        function ec(e, t, n, r, a) {
          var l = n._reactRootContainer;
          if (l) {
            var o = l;
            if ("function" === typeof a) {
              var i = a;
              a = function () {
                var e = Ws(o);
                i.call(e);
              };
            }
            Vs(t, o, e, a);
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var l = r;
                  r = function () {
                    var e = Ws(o);
                    l.call(e);
                  };
                }
                var o = Hs(t, r, e, 0, null, !1, 0, "", $s);
                return (
                  (e._reactRootContainer = o),
                  (e[ha] = o.current),
                  Qr(8 === e.nodeType ? e.parentNode : e),
                  cs(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var i = r;
                r = function () {
                  var e = Ws(u);
                  i.call(e);
                };
              }
              var u = Rs(e, 0, !1, null, 0, !1, 0, "", $s);
              return (
                (e._reactRootContainer = u),
                (e[ha] = u.current),
                Qr(8 === e.nodeType ? e.parentNode : e),
                cs(function () {
                  Vs(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return Ws(o);
        }
        (Ys.prototype.render = Js.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(l(409));
            Vs(e, t, null, null);
          }),
          (Ys.prototype.unmount = Js.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cs(function () {
                  Vs(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Ys.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Bt.length && 0 !== t && t < Bt[n].priority;
                n++
              );
              Bt.splice(n, 0, e), 0 === n && It(e);
            }
          }),
          (xt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    rs(t, Ge()),
                    0 === (6 & ju) && ((Qu = Ge() + 500), Qa()));
                }
                break;
              case 13:
                cs(function () {
                  var t = Nl(e, 1);
                  if (null !== t) {
                    var n = es();
                    ns(t, e, 1, n);
                  }
                }),
                  qs(e, 1);
            }
          }),
          (At = function (e) {
            if (13 === e.tag) {
              var t = Nl(e, 134217728);
              if (null !== t) ns(t, e, 134217728, es());
              qs(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = ts(e),
                n = Nl(e, t);
              if (null !== n) ns(n, e, t, es());
              qs(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (St = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (Ae = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = xa(r);
                      if (!a) throw Error(l(90));
                      q(r), Z(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                le(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (je = ss),
          (Ne = cs);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, xa, Ce, Pe, ss],
          },
          nc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (lt = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Gs(t)) throw Error(l(200));
            return _s(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Gs(e)) throw Error(l(299));
            var n = !1,
              r = "",
              a = Xs;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Rs(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Qr(8 === e.nodeType ? e.parentNode : e),
              new Js(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(l(188));
              throw ((e = Object.keys(e).join(",")), Error(l(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cs(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zs(t)) throw Error(l(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Gs(e)) throw Error(l(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              o = "",
              i = Xs;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = Hs(t, null, e, 1, null != n ? n : null, a, 0, o, i)),
              (e[ha] = t.current),
              Qr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Ys(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zs(t)) throw Error(l(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zs(e)) throw Error(l(40));
            return (
              !!e._reactRootContainer &&
              (cs(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = ss),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zs(n)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternals) throw Error(l(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        "use strict";
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      302: function (e, t, n) {
        var r = n(983).w_;
        (e.exports.JPR = function (e) {
          return r({
            tag: "svg",
            attr: { viewBox: "0 0 512 512" },
            child: [
              {
                tag: "path",
                attr: {
                  d: "M463.55 272.13H400v-48.2q0-4.32-.27-8.47c29.57-27.88 32.25-64.63 32.27-103 0-8.61-6.64-16-15.25-16.41A16 16 0 00400 112c0 28-1.86 48.15-9.9 63.84-19.22-41.15-65.78-63.91-134.1-63.91-39.8 0-74.19 9.13-99.43 26.39-14.9 10.19-26.2 22.91-33.7 37.72C114 160.65 112 141 112 112.46c0-8.61-6.6-16-15.2-16.44A16 16 0 0080 112c0 37.63 2.61 73.73 32.44 101.63q-.43 5.06-.44 10.3v48.2H48.45c-8.61 0-16 6.62-16.43 15.23a16 16 0 0016 16.77h64V320a143.32 143.32 0 0010.39 53.69C96.74 396.64 80.18 422 80 463.34c0 8.74 6.62 16.3 15.36 16.65A16 16 0 00112 464c0-27.66 9.1-44.71 26.17-61.32A144.37 144.37 0 00220 459.42a16 16 0 0020-15.49V192.45c0-8.61 6.62-16 15.23-16.43A16 16 0 01272 192v251.93a16 16 0 0020 15.49 144.4 144.4 0 0081.82-56.74c17 16.54 26.09 33.52 26.17 60.95a16.27 16.27 0 0015.1 16.37A16 16 0 00432 464c0-41.68-16.6-67.23-42.39-90.31A143.32 143.32 0 00400 320v-15.87h64a16 16 0 0016-16.77c-.42-8.61-7.84-15.23-16.45-15.23z",
                },
              },
              {
                tag: "path",
                attr: {
                  d: "M321.39 104l.32.09c13.57 3.8 25.07-10.55 18.2-22.85A95.86 95.86 0 00256.21 32h-.42a95.87 95.87 0 00-84.19 50.13c-6.84 12.58 5.14 27 18.84 22.86 19.71-6 41.79-9.06 65.56-9.06 24.09 0 46.09 2.72 65.39 8.07z",
                },
              },
            ],
          })(e);
        }),
          (e.exports.JOq = function (e) {
            return r({
              tag: "svg",
              attr: { viewBox: "0 0 512 512" },
              child: [
                {
                  tag: "path",
                  attr: {
                    d: "M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z",
                  },
                },
              ],
            })(e);
          }),
          (e.exports.gXb = function (e) {
            return r({
              tag: "svg",
              attr: { viewBox: "0 0 512 512" },
              child: [
                {
                  tag: "path",
                  attr: {
                    d: "M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z",
                  },
                },
              ],
            })(e);
          });
      },
      983: function (e, t, n) {
        "use strict";
        n.d(t, {
          w_: function () {
            return s;
          },
        });
        var r = n(791),
          a = {
            color: void 0,
            size: void 0,
            className: void 0,
            style: void 0,
            attr: void 0,
          },
          l = r.createContext && r.createContext(a),
          o = function () {
            return (
              (o =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, a) &&
                        (e[a] = t[a]);
                  return e;
                }),
              o.apply(this, arguments)
            );
          },
          i = function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                t.indexOf(r) < 0 &&
                (n[r] = e[r]);
            if (
              null != e &&
              "function" === typeof Object.getOwnPropertySymbols
            ) {
              var a = 0;
              for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                t.indexOf(r[a]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                  (n[r[a]] = e[r[a]]);
            }
            return n;
          };
        function u(e) {
          return (
            e &&
            e.map(function (e, t) {
              return r.createElement(e.tag, o({ key: t }, e.attr), u(e.child));
            })
          );
        }
        function s(e) {
          return function (t) {
            return r.createElement(
              c,
              o({ attr: o({}, e.attr) }, t),
              u(e.child)
            );
          };
        }
        function c(e) {
          var t = function (t) {
            var n,
              a = e.attr,
              l = e.size,
              u = e.title,
              s = i(e, ["attr", "size", "title"]),
              c = l || t.size || "1em";
            return (
              t.className && (n = t.className),
              e.className && (n = (n ? n + " " : "") + e.className),
              r.createElement(
                "svg",
                o(
                  {
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0",
                  },
                  t.attr,
                  a,
                  s,
                  {
                    className: n,
                    style: o(
                      o({ color: e.color || t.color }, t.style),
                      e.style
                    ),
                    height: c,
                    width: c,
                    xmlns: "http://www.w3.org/2000/svg",
                  }
                ),
                u && r.createElement("title", null, u),
                e.children
              )
            );
          };
          return void 0 !== l
            ? r.createElement(l.Consumer, null, function (e) {
                return t(e);
              })
            : t(a);
        }
      },
      374: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = Symbol.for("react.element"),
          l = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            l = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !u.hasOwnProperty(r) && (l[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: s,
            ref: c,
            props: l,
            _owner: i.current,
          };
        }
        (t.Fragment = l), (t.jsx = s), (t.jsxs = s);
      },
      117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          v = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), m(w, g.prototype), (w.isPureReactComponent = !0);
        var x = Array.isArray,
          A = Object.prototype.hasOwnProperty,
          k = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function S(e, t, r) {
          var a,
            l = {},
            o = null,
            i = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              A.call(t, a) && !E.hasOwnProperty(a) && (l[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) l.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            l.children = s;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === l[a] && (l[a] = u[a]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: i,
            props: l,
            _owner: k.current,
          };
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var P = /\/+/g;
        function j(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function N(e, t, a, l, o) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (i) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (o = o((u = e))),
              (e = "" === l ? "." + j(u, 0) : l),
              x(o)
                ? ((a = ""),
                  null != e && (a = e.replace(P, "$&/") + "/"),
                  N(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (C(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (u && u.key === o.key)
                          ? ""
                          : ("" + o.key).replace(P, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((u = 0), (l = "" === l ? "." : l + ":"), x(e)))
            for (var s = 0; s < e.length; s++) {
              var c = l + j((i = e[s]), s);
              u += N(i, t, a, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), s = 0; !(i = e.next()).done; )
              u += N((i = i.value), t, a, (c = l + j(i, s++)), o);
          else if ("object" === i)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return u;
        }
        function z(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            N(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function O(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var L = { current: null },
          B = { transition: null },
          D = {
            ReactCurrentDispatcher: L,
            ReactCurrentBatchConfig: B,
            ReactCurrentOwner: k,
          };
        (t.Children = {
          map: z,
          forEach: function (e, t, n) {
            z(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              z(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              z(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = l),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              l = e.key,
              o = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (i = k.current)),
                void 0 !== t.key && (l = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in t)
                A.call(t, s) &&
                  !E.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              a.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: l,
              ref: o,
              props: a,
              _owner: i,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = S),
          (t.createFactory = function (e) {
            var t = S.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: O,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = B.transition;
            B.transition = {};
            try {
              e();
            } finally {
              B.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return L.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return L.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return L.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return L.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return L.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return L.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return L.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return L.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return L.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return L.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return L.current.useRef(e);
          }),
          (t.useState = function (e) {
            return L.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return L.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return L.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                s = i + 1,
                c = e[s];
              if (0 > l(u, n))
                s < a && 0 > l(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[i] = n), (r = i));
              else {
                if (!(s < a && 0 > l(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function l(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var i = Date,
            u = i.now();
          t.unstable_now = function () {
            return i.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          v = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function x(e) {
          if (((v = !1), w(e), !m))
            if (null !== r(s)) (m = !0), B(A);
            else {
              var t = r(c);
              null !== t && D(x, t.startTime - e);
            }
        }
        function A(e, n) {
          (m = !1), v && ((v = !1), y(C), (C = -1)), (h = !0);
          var l = p;
          try {
            for (
              w(n), d = r(s);
              null !== d && (!(d.expirationTime > n) || (e && !N()));

            ) {
              var o = d.callback;
              if ("function" === typeof o) {
                (d.callback = null), (p = d.priorityLevel);
                var i = o(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof i
                    ? (d.callback = i)
                    : d === r(s) && a(s),
                  w(n);
              } else a(s);
              d = r(s);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(c);
              null !== f && D(x, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = l), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          E = !1,
          S = null,
          C = -1,
          P = 5,
          j = -1;
        function N() {
          return !(t.unstable_now() - j < P);
        }
        function z() {
          if (null !== S) {
            var e = t.unstable_now();
            j = e;
            var n = !0;
            try {
              n = S(!0, e);
            } finally {
              n ? k() : ((E = !1), (S = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          k = function () {
            b(z);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var O = new MessageChannel(),
            L = O.port2;
          (O.port1.onmessage = z),
            (k = function () {
              L.postMessage(null);
            });
        } else
          k = function () {
            g(z, 0);
          };
        function B(e) {
          (S = e), E || ((E = !0), k());
        }
        function D(e, n) {
          C = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), B(A));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (P = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof l && null !== l
                ? (l = "number" === typeof (l = l.delay) && 0 < l ? o + l : o)
                : (l = o),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (i = l + i),
                sortIndex: -1,
              }),
              l > o
                ? ((e.sortIndex = l),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (v ? (y(C), (C = -1)) : (v = !0), D(x, l - o)))
                : ((e.sortIndex = i), n(s, e), m || h || ((m = !0), B(A))),
              e
            );
          }),
          (t.unstable_shouldYield = N),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var l = (t[r] = { exports: {} });
    return e[r](l, l.exports, n), l.exports;
  }
  !(function () {
    var e,
      t = Object.getPrototypeOf
        ? function (e) {
            return Object.getPrototypeOf(e);
          }
        : function (e) {
            return e.__proto__;
          };
    n.t = function (r, a) {
      if ((1 & a && (r = this(r)), 8 & a)) return r;
      if ("object" === typeof r && r) {
        if (4 & a && r.__esModule) return r;
        if (16 & a && "function" === typeof r.then) return r;
      }
      var l = Object.create(null);
      n.r(l);
      var o = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var i = 2 & a && r; "object" == typeof i && !~e.indexOf(i); i = t(i))
        Object.getOwnPropertyNames(i).forEach(function (e) {
          o[e] = function () {
            return r[e];
          };
        });
      return (
        (o.default = function () {
          return r;
        }),
        n.d(l, o),
        l
      );
    };
  })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      "use strict";
      var e,
        t = n(791),
        r = n.t(t, 2),
        a = n(250);
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function o(e, t) {
        if (e) {
          if ("string" === typeof e) return l(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? l(e, t)
              : void 0
          );
        }
      }
      function i(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                l,
                o,
                i = [],
                u = !0,
                s = !1;
              try {
                if (((l = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = l.call(n)).done) &&
                    (i.push(r.value), i.length !== t);
                    u = !0
                  );
              } catch (c) {
                (s = !0), (a = c);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((o = n.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          o(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function u(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return l(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          o(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e) {
        return (
          (c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          c(e)
        );
      }
      function f(e) {
        var t = (function (e, t) {
          if ("object" !== c(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== c(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === c(t) ? t : String(t);
      }
      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, f(r.key), r);
        }
      }
      function p(e, t, n) {
        return (
          t && d(e.prototype, t),
          n && d(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function h(e, t) {
        return (
          (h = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          h(e, t)
        );
      }
      function m(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && h(e, t);
      }
      function v(e) {
        return (
          (v = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          v(e)
        );
      }
      function g() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function y(e, t) {
        if (t && ("object" === c(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function b(e) {
        var t = g();
        return function () {
          var n,
            r = v(e);
          if (t) {
            var a = v(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return y(this, n);
        };
      }
      function w(e, t, n) {
        return (
          (w = g()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && h(a, n.prototype), a;
              }),
          w.apply(null, arguments)
        );
      }
      function x(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (x = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return w(e, arguments, v(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              h(r, e)
            );
          }),
          x(e)
        );
      }
      function A() {
        return (
          (A = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          A.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var k,
        E = "popstate";
      function S(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function C(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function P(e) {
        return { usr: e.state, key: e.key };
      }
      function j(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          A(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? z(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function N(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          l = e.hash,
          o = void 0 === l ? "" : l;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          o && "#" !== o && (n += "#" === o.charAt(0) ? o : "#" + o),
          n
        );
      }
      function z(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function O(e) {
        var t =
            "undefined" !== typeof window &&
            "undefined" !== typeof window.location &&
            "null" !== window.location.origin
              ? window.location.origin
              : window.location.href,
          n = "string" === typeof e ? e : N(e);
        return (
          S(
            t,
            "No window.location.(origin|href) available to create URL for href: " +
              n
          ),
          new URL(n, t)
        );
      }
      function L(t, n, r, a) {
        void 0 === a && (a = {});
        var l = a,
          o = l.window,
          i = void 0 === o ? document.defaultView : o,
          u = l.v5Compat,
          s = void 0 !== u && u,
          c = i.history,
          f = e.Pop,
          d = null;
        function p() {
          (f = e.Pop), d && d({ action: f, location: h.location });
        }
        var h = {
          get action() {
            return f;
          },
          get location() {
            return t(i, c);
          },
          listen: function (e) {
            if (d)
              throw new Error("A history only accepts one active listener");
            return (
              i.addEventListener(E, p),
              (d = e),
              function () {
                i.removeEventListener(E, p), (d = null);
              }
            );
          },
          createHref: function (e) {
            return n(i, e);
          },
          encodeLocation: function (e) {
            var t = O("string" === typeof e ? e : N(e));
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (t, n) {
            f = e.Push;
            var a = j(h.location, t, n);
            r && r(a, t);
            var l = P(a),
              o = h.createHref(a);
            try {
              c.pushState(l, "", o);
            } catch (u) {
              i.location.assign(o);
            }
            s && d && d({ action: f, location: h.location });
          },
          replace: function (t, n) {
            f = e.Replace;
            var a = j(h.location, t, n);
            r && r(a, t);
            var l = P(a),
              o = h.createHref(a);
            c.replaceState(l, "", o),
              s && d && d({ action: f, location: h.location });
          },
          go: function (e) {
            return c.go(e);
          },
        };
        return h;
      }
      function B(e, t, n) {
        void 0 === n && (n = "/");
        var r = _(("string" === typeof t ? z(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = D(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(a);
        for (var l = null, o = 0; null == l && o < a.length; ++o)
          l = U(a[o], R(r));
        return l;
      }
      function D(e, t, n, r) {
        return (
          void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = ""),
          e.forEach(function (e, a) {
            var l = {
              relativePath: e.path || "",
              caseSensitive: !0 === e.caseSensitive,
              childrenIndex: a,
              route: e,
            };
            l.relativePath.startsWith("/") &&
              (S(
                l.relativePath.startsWith(r),
                'Absolute route path "' +
                  l.relativePath +
                  '" nested under path "' +
                  r +
                  '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
              ),
              (l.relativePath = l.relativePath.slice(r.length)));
            var o = K([r, l.relativePath]),
              i = n.concat(l);
            e.children &&
              e.children.length > 0 &&
              (S(
                !0 !== e.index,
                'Index routes must not have child routes. Please remove all child routes from route path "' +
                  o +
                  '".'
              ),
              D(e.children, t, i, o)),
              (null != e.path || e.index) &&
                t.push({ path: o, score: I(o, e.index), routesMeta: i });
          }),
          t
        );
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(k || (k = {}));
      var T = /^:\w+$/,
        F = function (e) {
          return "*" === e;
        };
      function I(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(F) && (r += -2),
          t && (r += 2),
          n
            .filter(function (e) {
              return !F(e);
            })
            .reduce(function (e, t) {
              return e + (T.test(t) ? 3 : "" === t ? 1 : 10);
            }, r)
        );
      }
      function U(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", l = [], o = 0;
          o < n.length;
          ++o
        ) {
          var i = n[o],
            u = o === n.length - 1,
            s = "/" === a ? t : t.slice(a.length) || "/",
            c = M(
              { path: i.relativePath, caseSensitive: i.caseSensitive, end: u },
              s
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var f = i.route;
          l.push({
            params: r,
            pathname: K([a, c.pathname]),
            pathnameBase: q(K([a, c.pathnameBase])),
            route: f,
          }),
            "/" !== c.pathnameBase && (a = K([a, c.pathnameBase]));
        }
        return l;
      }
      function M(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            Q(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            var r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/:(\w+)/g, function (e, t) {
                    return r.push(t), "([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            var l = new RegExp(a, t ? void 0 : "i");
            return [l, r];
          })(e.path, e.caseSensitive, e.end),
          r = i(n, 2),
          a = r[0],
          l = r[1],
          o = t.match(a);
        if (!o) return null;
        var u = o[0],
          s = u.replace(/(.)\/+$/, "$1"),
          c = o.slice(1);
        return {
          params: l.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = c[n] || "";
              s = u.slice(0, u.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    Q(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ")."
                    ),
                    e
                  );
                }
              })(c[n] || "", t)),
              e
            );
          }, {}),
          pathname: u,
          pathnameBase: s,
          pattern: e,
        };
      }
      function R(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            Q(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function _(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function Q(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function H(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function V(e) {
        return e.filter(function (e, t) {
          return 0 === t || (e.route.path && e.route.path.length > 0);
        });
      }
      function W(e, t, n, r) {
        var a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = z(e))
            : (S(
                !(a = A({}, e)).pathname || !a.pathname.includes("?"),
                H("?", "pathname", "search", a)
              ),
              S(
                !a.pathname || !a.pathname.includes("#"),
                H("#", "pathname", "hash", a)
              ),
              S(
                !a.search || !a.search.includes("#"),
                H("#", "search", "hash", a)
              ));
        var l,
          o = "" === e || "" === a.pathname,
          i = o ? "/" : a.pathname;
        if (r || null == i) l = n;
        else {
          var u = t.length - 1;
          if (i.startsWith("..")) {
            for (var s = i.split("/"); ".." === s[0]; ) s.shift(), (u -= 1);
            a.pathname = s.join("/");
          }
          l = u >= 0 ? t[u] : "/";
        }
        var c = (function (e, t) {
            void 0 === t && (t = "/");
            var n = "string" === typeof e ? z(e) : e,
              r = n.pathname,
              a = n.search,
              l = void 0 === a ? "" : a,
              o = n.hash,
              i = void 0 === o ? "" : o,
              u = r
                ? r.startsWith("/")
                  ? r
                  : (function (e, t) {
                      var n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach(function (e) {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(r, t)
                : t;
            return { pathname: u, search: X(l), hash: J(i) };
          })(a, l),
          f = i && "/" !== i && i.endsWith("/"),
          d = (o || "." === i) && n.endsWith("/");
        return c.pathname.endsWith("/") || (!f && !d) || (c.pathname += "/"), c;
      }
      var K = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        q = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        X = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        J = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        },
        Y = (function (e) {
          m(n, e);
          var t = b(n);
          function n() {
            return s(this, n), t.apply(this, arguments);
          }
          return p(n);
        })(x(Error));
      var G = p(function e(t, n, r, a) {
        s(this, e),
          void 0 === a && (a = !1),
          (this.status = t),
          (this.statusText = n || ""),
          (this.internal = a),
          r instanceof Error
            ? ((this.data = r.toString()), (this.error = r))
            : (this.data = r);
      });
      function Z(e) {
        return e instanceof G;
      }
      var $ = ["post", "put", "patch", "delete"],
        ee = (new Set($), ["get"].concat($));
      new Set(ee),
        new Set([301, 302, 303, 307, 308]),
        new Set([307, 308]),
        "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          window.document.createElement;
      function te() {
        return (
          (te = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          te.apply(this, arguments)
        );
      }
      var ne =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        re = t.useState,
        ae = t.useEffect,
        le = t.useLayoutEffect,
        oe = t.useDebugValue;
      function ie(e) {
        var t = e.getSnapshot,
          n = e.value;
        try {
          var r = t();
          return !ne(n, r);
        } catch (a) {
          return !0;
        }
      }
      "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        window.document.createElement,
        r.useSyncExternalStore;
      var ue = t.createContext(null);
      var se = t.createContext(null);
      var ce = t.createContext(null);
      var fe = t.createContext(null);
      var de = t.createContext(null);
      var pe = t.createContext(null);
      var he = t.createContext({ outlet: null, matches: [] });
      var me = t.createContext(null);
      function ve() {
        return null != t.useContext(pe);
      }
      function ge() {
        return ve() || S(!1), t.useContext(pe).location;
      }
      function ye() {
        ve() || S(!1);
        var e = t.useContext(de),
          n = e.basename,
          r = e.navigator,
          a = t.useContext(he).matches,
          l = ge().pathname,
          o = JSON.stringify(
            V(a).map(function (e) {
              return e.pathnameBase;
            })
          ),
          i = t.useRef(!1);
        return (
          t.useEffect(function () {
            i.current = !0;
          }),
          t.useCallback(
            function (e, t) {
              if ((void 0 === t && (t = {}), i.current))
                if ("number" !== typeof e) {
                  var a = W(e, JSON.parse(o), l, "path" === t.relative);
                  "/" !== n &&
                    (a.pathname = "/" === a.pathname ? n : K([n, a.pathname])),
                    (t.replace ? r.replace : r.push)(a, t.state, t);
                } else r.go(e);
            },
            [n, r, o, l]
          )
        );
      }
      function be() {
        var e = (function () {
            var e,
              n = t.useContext(me),
              r = Se(xe.UseRouteError),
              a = t.useContext(he),
              l = a.matches[a.matches.length - 1];
            if (n) return n;
            return (
              a || S(!1),
              !l.route.id && S(!1),
              null == (e = r.errors) ? void 0 : e[l.route.id]
            );
          })(),
          n = Z(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = "rgba(200,200,200, 0.5)",
          l = { padding: "0.5rem", backgroundColor: a },
          o = { padding: "2px 4px", backgroundColor: a };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement("h2", null, "Unhandled Thrown Error!"),
          t.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? t.createElement("pre", { style: l }, r) : null,
          t.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"),
          t.createElement(
            "p",
            null,
            "You can provide a way better UX than this when your app throws errors by providing your own\xa0",
            t.createElement("code", { style: o }, "errorElement"),
            " props on\xa0",
            t.createElement("code", { style: o }, "<Route>")
          )
        );
      }
      var we,
        xe,
        Ae = (function (e) {
          m(r, e);
          var n = b(r);
          function r(e) {
            var t;
            return (
              s(this, r),
              ((t = n.call(this, e)).state = {
                location: e.location,
                error: e.error,
              }),
              t
            );
          }
          return (
            p(
              r,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.error(
                      "React Router caught the following error during render",
                      e,
                      t
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.error
                      ? t.createElement(me.Provider, {
                          value: this.state.error,
                          children: this.props.component,
                        })
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return t.location !== e.location
                      ? { error: e.error, location: e.location }
                      : { error: e.error || t.error, location: t.location };
                  },
                },
              ]
            ),
            r
          );
        })(t.Component);
      function ke(e) {
        var n = e.routeContext,
          r = e.match,
          a = e.children,
          l = t.useContext(ue);
        return (
          l &&
            r.route.errorElement &&
            (l._deepestRenderedBoundaryId = r.route.id),
          t.createElement(he.Provider, { value: n }, a)
        );
      }
      function Ee(e, n, r) {
        if ((void 0 === n && (n = []), null == e)) {
          if (null == r || !r.errors) return null;
          e = r.matches;
        }
        var a = e,
          l = null == r ? void 0 : r.errors;
        if (null != l) {
          var o = a.findIndex(function (e) {
            return e.route.id && (null == l ? void 0 : l[e.route.id]);
          });
          o >= 0 || S(!1), (a = a.slice(0, Math.min(a.length, o + 1)));
        }
        return a.reduceRight(function (e, o, i) {
          var u = o.route.id ? (null == l ? void 0 : l[o.route.id]) : null,
            s = r ? o.route.errorElement || t.createElement(be, null) : null,
            c = function () {
              return t.createElement(
                ke,
                {
                  match: o,
                  routeContext: {
                    outlet: e,
                    matches: n.concat(a.slice(0, i + 1)),
                  },
                },
                u ? s : void 0 !== o.route.element ? o.route.element : e
              );
            };
          return r && (o.route.errorElement || 0 === i)
            ? t.createElement(Ae, {
                location: r.location,
                component: s,
                error: u,
                children: c(),
              })
            : c();
        }, null);
      }
      function Se(e) {
        var n = t.useContext(ce);
        return n || S(!1), n;
      }
      !(function (e) {
        e.UseRevalidator = "useRevalidator";
      })(we || (we = {})),
        (function (e) {
          (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator");
        })(xe || (xe = {}));
      var Ce;
      function Pe(e) {
        S(!1);
      }
      function je(n) {
        var r = n.basename,
          a = void 0 === r ? "/" : r,
          l = n.children,
          o = void 0 === l ? null : l,
          i = n.location,
          u = n.navigationType,
          s = void 0 === u ? e.Pop : u,
          c = n.navigator,
          f = n.static,
          d = void 0 !== f && f;
        ve() && S(!1);
        var p = a.replace(/^\/*/, "/"),
          h = t.useMemo(
            function () {
              return { basename: p, navigator: c, static: d };
            },
            [p, c, d]
          );
        "string" === typeof i && (i = z(i));
        var m = i,
          v = m.pathname,
          g = void 0 === v ? "/" : v,
          y = m.search,
          b = void 0 === y ? "" : y,
          w = m.hash,
          x = void 0 === w ? "" : w,
          A = m.state,
          k = void 0 === A ? null : A,
          E = m.key,
          C = void 0 === E ? "default" : E,
          P = t.useMemo(
            function () {
              var e = _(g, p);
              return null == e
                ? null
                : { pathname: e, search: b, hash: x, state: k, key: C };
            },
            [p, g, b, x, k, C]
          );
        return null == P
          ? null
          : t.createElement(
              de.Provider,
              { value: h },
              t.createElement(pe.Provider, {
                children: o,
                value: { location: P, navigationType: s },
              })
            );
      }
      function Ne(n) {
        var r = n.children,
          a = n.location,
          l = t.useContext(se);
        return (function (n, r) {
          ve() || S(!1);
          var a,
            l = t.useContext(de).navigator,
            o = t.useContext(ce),
            i = t.useContext(he).matches,
            u = i[i.length - 1],
            s = u ? u.params : {},
            c = (u && u.pathname, u ? u.pathnameBase : "/"),
            f = (u && u.route, ge());
          if (r) {
            var d,
              p = "string" === typeof r ? z(r) : r;
            "/" === c ||
              (null == (d = p.pathname) ? void 0 : d.startsWith(c)) ||
              S(!1),
              (a = p);
          } else a = f;
          var h = a.pathname || "/",
            m = B(n, { pathname: "/" === c ? h : h.slice(c.length) || "/" }),
            v = Ee(
              m &&
                m.map(function (e) {
                  return Object.assign({}, e, {
                    params: Object.assign({}, s, e.params),
                    pathname: K([
                      c,
                      l.encodeLocation
                        ? l.encodeLocation(e.pathname).pathname
                        : e.pathname,
                    ]),
                    pathnameBase:
                      "/" === e.pathnameBase
                        ? c
                        : K([
                            c,
                            l.encodeLocation
                              ? l.encodeLocation(e.pathnameBase).pathname
                              : e.pathnameBase,
                          ]),
                  });
                }),
              i,
              o || void 0
            );
          return r && v
            ? t.createElement(
                pe.Provider,
                {
                  value: {
                    location: te(
                      {
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default",
                      },
                      a
                    ),
                    navigationType: e.Pop,
                  },
                },
                v
              )
            : v;
        })(l && !r ? l.router.routes : Oe(r), a);
      }
      !(function (e) {
        (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error");
      })(Ce || (Ce = {}));
      var ze = new Promise(function () {});
      t.Component;
      function Oe(e, n) {
        void 0 === n && (n = []);
        var r = [];
        return (
          t.Children.forEach(e, function (e, a) {
            if (t.isValidElement(e))
              if (e.type !== t.Fragment) {
                e.type !== Pe && S(!1),
                  e.props.index && e.props.children && S(!1);
                var l = [].concat(u(n), [a]),
                  o = {
                    id: e.props.id || l.join("-"),
                    caseSensitive: e.props.caseSensitive,
                    element: e.props.element,
                    index: e.props.index,
                    path: e.props.path,
                    loader: e.props.loader,
                    action: e.props.action,
                    errorElement: e.props.errorElement,
                    hasErrorBoundary: null != e.props.errorElement,
                    shouldRevalidate: e.props.shouldRevalidate,
                    handle: e.props.handle,
                  };
                e.props.children && (o.children = Oe(e.props.children, l)),
                  r.push(o);
              } else r.push.apply(r, Oe(e.props.children, n));
          }),
          r
        );
      }
      function Le(e) {
        var n,
          r = e.basename,
          a = e.children,
          l = e.window,
          o = t.useRef();
        null == o.current &&
          (o.current =
            (void 0 === (n = { window: l, v5Compat: !0 }) && (n = {}),
            L(
              function (e, t) {
                var n = z(e.location.hash.substr(1)),
                  r = n.pathname,
                  a = void 0 === r ? "/" : r,
                  l = n.search,
                  o = void 0 === l ? "" : l,
                  i = n.hash;
                return j(
                  "",
                  { pathname: a, search: o, hash: void 0 === i ? "" : i },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                var n = e.document.querySelector("base"),
                  r = "";
                if (n && n.getAttribute("href")) {
                  var a = e.location.href,
                    l = a.indexOf("#");
                  r = -1 === l ? a : a.slice(0, l);
                }
                return r + "#" + ("string" === typeof t ? t : N(t));
              },
              function (e, t) {
                C(
                  "/" === e.pathname.charAt(0),
                  "relative pathnames are not supported in hash history.push(" +
                    JSON.stringify(t) +
                    ")"
                );
              },
              n
            )));
        var u = o.current,
          s = i(t.useState({ action: u.action, location: u.location }), 2),
          c = s[0],
          f = s[1];
        return (
          t.useLayoutEffect(
            function () {
              return u.listen(f);
            },
            [u]
          ),
          t.createElement(je, {
            basename: r,
            children: a,
            location: c.location,
            navigationType: c.action,
            navigator: u,
          })
        );
      }
      var Be, De;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmitImpl = "useSubmitImpl"),
          (e.UseFetcher = "useFetcher");
      })(Be || (Be = {})),
        (function (e) {
          (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(De || (De = {}));
      var Te = n(983);
      function Fe(e) {
        return (0, Te.w_)({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M104 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 464a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56z",
              },
            },
          ],
        })(e);
      }
      function Ie(e) {
        return (0, Te.w_)({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                fill: "none",
                strokeLinecap: "round",
                strokeMiterlimit: "10",
                strokeWidth: "32",
                d: "M436.67 184.11a27.17 27.17 0 01-38.3 0l-22.48-22.49a27.15 27.15 0 010-38.29l50.89-50.89a.85.85 0 00-.26-1.38C393.68 57 351.09 64.15 324.05 91c-25.88 25.69-27.35 64.27-17.87 98a27 27 0 01-7.67 27.14l-173 160.76a40.76 40.76 0 1057.57 57.54l162.15-173.3a27 27 0 0126.77-7.7c33.46 8.94 71.49 7.26 97.07-17.94 27.49-27.08 33.42-74.94 20.1-102.33a.85.85 0 00-1.36-.22z",
              },
            },
            {
              tag: "path",
              attr: {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32",
                d: "M224 284c-17.48-17-25.49-24.91-31-30.29a18.24 18.24 0 01-3.33-21.35 20.76 20.76 0 013.5-4.62l15.68-15.29a18.66 18.66 0 015.63-3.87 18.11 18.11 0 0120 3.62c5.45 5.29 15.43 15 33.41 32.52m49.18 46.58c40.95 38.1 90.62 83.27 110 99.41a13.46 13.46 0 01.94 19.92L394.63 444a14 14 0 01-20.29-.76c-16.53-19.18-61.09-67.11-99.27-107",
              },
            },
            {
              tag: "path",
              attr: {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32",
                d: "M17.34 193.5l29.41-28.74a4.71 4.71 0 013.41-1.35 4.85 4.85 0 013.41 1.35h0a9.86 9.86 0 008.19 2.77c3.83-.42 7.92-1.6 10.57-4.12 6-5.8-.94-17.23 4.34-24.54a207 207 0 0119.78-22.6c6-5.88 29.84-28.32 69.9-44.45A107.31 107.31 0 01206.67 64c22.59 0 40 10 46.26 15.67a89.54 89.54 0 0110.28 11.64 78.92 78.92 0 00-9.21-2.77 68.82 68.82 0 00-20-1.26c-13.33 1.09-29.41 7.26-38 14-13.9 11-19.87 25.72-20.81 44.71-.68 14.12 2.72 22.1 36.1 55.49a6.6 6.6 0 01-.34 9.16l-18.22 18a6.88 6.88 0 01-9.54.09c-21.94-21.94-36.65-33.09-45-38.16s-15.07-6.5-18.3-6.85a30.85 30.85 0 00-18.27 3.87 11.39 11.39 0 00-2.64 2 14.14 14.14 0 00.42 20.08l1.71 1.6a4.63 4.63 0 010 6.64L71.73 246.6a4.71 4.71 0 01-3.41 1.4 4.86 4.86 0 01-3.41-1.35l-47.57-46.43a4.88 4.88 0 010-6.72z",
              },
            },
          ],
        })(e);
      }
      function Ue(e) {
        return (0, Te.w_)({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M480 48H32a16 16 0 00-16 16v320a16 16 0 0016 16h168v32h-72v32h256v-32h-72v-32h168a16 16 0 0016-16V64a16 16 0 00-16-16zm-20 36v216H52V84zM240.13 354.08a16 16 0 1113.79 13.79 16 16 0 01-13.79-13.79z",
              },
            },
          ],
        })(e);
      }
      function Me(e) {
        return (0, Te.w_)({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                fill: "none",
                strokeLinecap: "round",
                strokeMiterlimit: "10",
                strokeWidth: "48",
                d: "M88 152h336M88 256h336M88 360h336",
              },
            },
          ],
        })(e);
      }
      function Re(e) {
        return (0, Te.w_)({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z",
              },
            },
          ],
        })(e);
      }
      function _e(e) {
        return (0, Te.w_)({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32",
                d: "M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72",
              },
            },
          ],
        })(e);
      }
      function Qe(e) {
        return (0, Te.w_)({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "circle",
              attr: {
                cx: "128",
                cy: "256",
                r: "48",
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32",
              },
            },
            {
              tag: "circle",
              attr: {
                cx: "384",
                cy: "112",
                r: "48",
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32",
              },
            },
            {
              tag: "circle",
              attr: {
                cx: "384",
                cy: "400",
                r: "48",
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32",
              },
            },
            {
              tag: "path",
              attr: {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32",
                d: "M169.83 279.53l172.34 96.94m0-240.94l-172.34 96.94",
              },
            },
          ],
        })(e);
      }
      function He(e) {
        return (0, Te.w_)({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zm0 368a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zm113.14-321.14a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zm-368 0H48a22 22 0 010-44h48a22 22 0 010 44zm307.08 147.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z",
              },
            },
          ],
        })(e);
      }
      var Ve = n(184),
        We = function (e) {
          var n,
            r,
            a,
            l = e.toggleTheme,
            o = e.theme,
            u = i((0, t.useState)(!1), 2),
            s = u[0],
            c = u[1],
            f = (0, t.useRef)(null),
            d = (0, t.useRef)(null),
            p = ye(),
            h = ge(),
            m = function (e) {
              var t;
              document.getElementById(e) &&
                (null === (t = document.getElementById(e)) ||
                  void 0 === t ||
                  t.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "start",
                  }));
            },
            v = [
              {
                name: "About",
                link: "",
                action: function () {
                  "/" !== h.pathname && p("/"), m("section-about");
                },
              },
              {
                name: "Projects",
                link: "",
                action: function () {
                  "/" !== h.pathname && p("/"), m("section-projects");
                },
              },
              {
                name: "Skills",
                link: "",
                action: function () {
                  "/" !== h.pathname && p("/"), m("section-skills");
                },
              },
              {
                name: "Contact",
                link: "",
                action: function () {
                  "/" !== h.pathname && p("/"), p("/contact");
                },
              },
            ];
          return (
            (n = f),
            (r = function () {
              return c(!1);
            }),
            (a = d),
            (0, t.useEffect)(
              function () {
                function e(e) {
                  a
                    ? n.current &&
                      a.current &&
                      !n.current.contains(e.target) &&
                      !a.current.contains(e.target) &&
                      r()
                    : n.current && !n.current.contains(e.target) && r();
                }
                return (
                  document.addEventListener("mousedown", e),
                  function () {
                    document.removeEventListener("mousedown", e);
                  }
                );
              },
              [n, a, r]
            ),
            (0, Ve.jsxs)("div", {
              className:
                "w-screen flex h-[3.5rem] justify-end md:justify-center p-3 items-center fixed bg-white/30 dark:bg-gray-800/60 backdrop-blur-[3px] md:backdrop-blur-[5px] z-[100]",
              children: [
                (0, Ve.jsx)("ul", {
                  className:
                    "w-full lg:w-[30%] max-w-[400px] flex justify-between ",
                  id: "navbar-list",
                  children: v.map(function (e, t) {
                    return (0,
                    Ve.jsx)("li", { onClick: e.action, className: "font-Poppins cursor-pointer text-black dark:text-gray-200 font-medium hover:bg-gray-300/30 rounded-md py-1 px-4 transition duration-300 ease-in-out hover:rounded-lg", children: e.name }, t);
                  }),
                }),
                (0, Ve.jsx)("div", {
                  className:
                    "hover:bg-gray-100 dark:hover:bg-gray-600 p-3 rounded-full grid place-items-center cursor-pointer z-100 md:absolute right-[1rem] md:right-[3rem]",
                  onClick: l,
                  children:
                    "light" === o
                      ? (0, Ve.jsx)(He, {
                          className: "h-[1.3rem] w-[1.3rem] text-yellow-600",
                        })
                      : (0, Ve.jsx)(Re, {
                          className: "h-[1.3rem] w-[1.3rem] text-yellow-400",
                        }),
                }),
                (0, Ve.jsx)("div", {
                  tabIndex: 0,
                  onKeyUp: function () {
                    return c(function (e) {
                      return !e;
                    });
                  },
                  className:
                    "bg-gray-200 dark:bg-gray-700 rounded-md p-3 border-[1px] border-gray-300 dark:border-gray-500 ml-4 cursor-pointer z-100 md:hidden mr-0",
                  ref: f,
                  onClick: function () {
                    return c(function (e) {
                      return !e;
                    });
                  },
                  children: (0, Ve.jsx)(Me, {
                    className:
                      "w-[1.3rem] h-[1.3rem] text-gray-400 dark:text-white",
                  }),
                }),
                (0, Ve.jsx)("div", {
                  className:
                    "dark:bg-gray-700 bg-gray-100 rounded-md md:hidden absolute right-[1rem] top-[3.5rem]  cursor-pointer z-[10] border-[.01px] shadow-lg pt-[1px] dark:border-0 dark:shadow-depthBottom ".concat(
                      s ? "block" : "hidden"
                    ),
                  ref: d,
                  children: v.map(function (e, t) {
                    return (0,
                    Ve.jsx)("li", { onKeyUp: e.action, onClick: e.action, tabIndex: t + 1, className: "font-Poppins hover:bg-gray-200 dark:hover:bg-gray-600 text-start list-none cursor-pointer text-gray-700 dark:text-gray-200 font-medium px-4 transition duration-300 ease-in-out pr-[5rem] py-2 ".concat(t === v.length - 1 && "rounded-b-md", " ").concat(0 === t && "rounded-t-md"), children: e.name }, t);
                  }),
                }),
              ],
            })
          );
        };
      function Ke(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var qe = ["title", "titleId"];
      var Xe = t.forwardRef(function (e, n) {
          var r = e.title,
            a = e.titleId,
            l = Ke(e, qe);
          return t.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: n,
                "aria-labelledby": a,
              },
              l
            ),
            r ? t.createElement("title", { id: a }, r) : null,
            t.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
            })
          );
        }),
        Je = "https://www.github.com/https-sam",
        Ye = "https://www.linkedin.com/in/samgoto",
        Ge = { _origin: "https://api.emailjs.com" },
        Ze = function (e, t, n) {
          if (!e)
            throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
          if (!t)
            throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
          if (!n)
            throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
          return !0;
        },
        $e = p(function e(t) {
          s(this, e),
            (this.status = t ? t.status : 0),
            (this.text = t ? t.responseText : "Network Error");
        }),
        et = function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return new Promise(function (r, a) {
            var l = new XMLHttpRequest();
            l.addEventListener("load", function (e) {
              var t = e.target,
                n = new $e(t);
              200 === n.status || "OK" === n.text ? r(n) : a(n);
            }),
              l.addEventListener("error", function (e) {
                var t = e.target;
                a(new $e(t));
              }),
              l.open("POST", Ge._origin + e, !0),
              Object.keys(n).forEach(function (e) {
                l.setRequestHeader(e, n[e]);
              }),
              l.send(t);
          });
        },
        tt = function (e, t, n, r) {
          var a = r || Ge._userID,
            l = (function (e) {
              var t;
              if (
                !(t = "string" === typeof e ? document.querySelector(e) : e) ||
                "FORM" !== t.nodeName
              )
                throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
              return t;
            })(n);
          Ze(a, e, t);
          var o = new FormData(l);
          return (
            o.append("lib_version", "3.10.0"),
            o.append("service_id", e),
            o.append("template_id", t),
            o.append("user_id", a),
            et("/api/v1.0/email/send-form", o)
          );
        };
      function nt(e, t, n) {
        return (
          (t = f(t)) in e
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
      function rt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function at(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? rt(Object(n), !0).forEach(function (t) {
                nt(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : rt(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function lt(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = o(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var l,
          i = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (u = !0), (l = e);
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (u) throw l;
            }
          },
        };
      }
      function ot(e, t) {
        if (e in t) {
          for (
            var n = t[e],
              r = arguments.length,
              a = new Array(r > 2 ? r - 2 : 0),
              l = 2;
            l < r;
            l++
          )
            a[l - 2] = arguments[l];
          return "function" == typeof n ? n.apply(void 0, a) : n;
        }
        var o = new Error(
          'Tried to handle "'
            .concat(
              e,
              '" but there is no handler defined. Only defined handlers are: '
            )
            .concat(
              Object.keys(t)
                .map(function (e) {
                  return '"'.concat(e, '"');
                })
                .join(", "),
              "."
            )
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(o, ot), o);
      }
      var it,
        ut = ["static"],
        st = ["unmount"],
        ct = ["as", "children", "refName"],
        ft =
          (((it = ft || {})[(it.None = 0)] = "None"),
          (it[(it.RenderStrategy = 1)] = "RenderStrategy"),
          (it[(it.Static = 2)] = "Static"),
          it),
        dt = (function (e) {
          return (
            (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
          );
        })(dt || {});
      function pt(e) {
        var t = e.ourProps,
          n = e.theirProps,
          r = e.slot,
          a = e.defaultTag,
          l = e.features,
          o = e.visible,
          i = void 0 === o || o,
          u = e.name,
          s = vt(n, t);
        if (i) return ht(s, r, a, u);
        var c = null != l ? l : 0;
        if (2 & c) {
          var f = s.static,
            d = void 0 !== f && f,
            p = Ke(s, ut);
          if (d) return ht(p, r, a, u);
        }
        if (1 & c) {
          var h,
            m = s.unmount,
            v = void 0 === m || m,
            g = Ke(s, st);
          return ot(
            v ? 0 : 1,
            (nt((h = {}), 0, function () {
              return null;
            }),
            nt(h, 1, function () {
              return ht(
                at(at({}, g), {}, { hidden: !0, style: { display: "none" } }),
                r,
                a,
                u
              );
            }),
            h)
          );
        }
        return ht(s, r, a, u);
      }
      function ht(e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = arguments.length > 2 ? arguments[2] : void 0,
          a = arguments.length > 3 ? arguments[3] : void 0,
          l = bt(e, ["unmount", "static"]),
          o = l.as,
          u = void 0 === o ? r : o,
          s = l.children,
          c = l.refName,
          f = void 0 === c ? "ref" : c,
          d = Ke(l, ct),
          p = void 0 !== e.ref ? nt({}, f, e.ref) : {},
          h = "function" == typeof s ? s(n) : s;
        d.className &&
          "function" == typeof d.className &&
          (d.className = d.className(n));
        var m = {};
        if (n) {
          for (
            var v = !1, g = [], y = 0, b = Object.entries(n);
            y < b.length;
            y++
          ) {
            var w = i(b[y], 2),
              x = w[0],
              A = w[1];
            "boolean" == typeof A && (v = !0), !0 === A && g.push(x);
          }
          v && (m["data-headlessui-state"] = g.join(" "));
        }
        if (u === t.Fragment && Object.keys(yt(d)).length > 0) {
          if (!(0, t.isValidElement)(h) || (Array.isArray(h) && h.length > 1))
            throw new Error(
              [
                'Passing props on "Fragment"!',
                "",
                "The current component <".concat(
                  a,
                  ' /> is rendering a "Fragment".'
                ),
                "However we need to passthrough the following props:",
                Object.keys(d)
                  .map(function (e) {
                    return "  - ".concat(e);
                  })
                  .join("\n"),
                "",
                "You can apply a few solutions:",
                [
                  'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                  "Render a single element as the child so that we can forward the props onto that element.",
                ]
                  .map(function (e) {
                    return "  - ".concat(e);
                  })
                  .join("\n"),
              ].join("\n")
            );
          return (0, t.cloneElement)(
            h,
            Object.assign(
              {},
              vt(h.props, yt(bt(d, ["ref"]))),
              m,
              p,
              mt(h.ref, p.ref)
            )
          );
        }
        return (0, t.createElement)(
          u,
          Object.assign(
            {},
            bt(d, ["ref"]),
            u !== t.Fragment && p,
            u !== t.Fragment && m
          ),
          h
        );
      }
      function mt() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return {
          ref: t.every(function (e) {
            return null == e;
          })
            ? void 0
            : function (e) {
                var n,
                  r = lt(t);
                try {
                  for (r.s(); !(n = r.n()).done; ) {
                    var a = n.value;
                    null != a &&
                      ("function" == typeof a ? a(e) : (a.current = e));
                  }
                } catch (l) {
                  r.e(l);
                } finally {
                  r.f();
                }
              },
        };
      }
      function vt() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if (0 === t.length) return {};
        if (1 === t.length) return t[0];
        for (var r = {}, a = {}, l = 0, o = t; l < o.length; l++) {
          var i = o[l];
          for (var u in i)
            u.startsWith("on") && "function" == typeof i[u]
              ? (null != a[u] || (a[u] = []), a[u].push(i[u]))
              : (r[u] = i[u]);
        }
        if (r.disabled || r["aria-disabled"])
          return Object.assign(
            r,
            Object.fromEntries(
              Object.keys(a).map(function (e) {
                return [e, void 0];
              })
            )
          );
        var s = function (e) {
          Object.assign(
            r,
            nt({}, e, function (t) {
              for (
                var n = a[e],
                  r = arguments.length,
                  l = new Array(r > 1 ? r - 1 : 0),
                  o = 1;
                o < r;
                o++
              )
                l[o - 1] = arguments[o];
              var i,
                u = lt(n);
              try {
                for (u.s(); !(i = u.n()).done; ) {
                  var s = i.value;
                  if (
                    (t instanceof Event ||
                      (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                    t.defaultPrevented
                  )
                    return;
                  s.apply(void 0, [t].concat(l));
                }
              } catch (c) {
                u.e(c);
              } finally {
                u.f();
              }
            })
          );
        };
        for (var c in a) s(c);
        return r;
      }
      function gt(e) {
        var n;
        return Object.assign((0, t.forwardRef)(e), {
          displayName: null != (n = e.displayName) ? n : e.name,
        });
      }
      function yt(e) {
        var t = Object.assign({}, e);
        for (var n in t) void 0 === t[n] && delete t[n];
        return t;
      }
      function bt(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = Object.assign({}, e),
          a = lt(n);
        try {
          for (a.s(); !(t = a.n()).done; ) {
            var l = t.value;
            l in r && delete r[l];
          }
        } catch (o) {
          a.e(o);
        } finally {
          a.f();
        }
        return r;
      }
      var wt = (0, t.createContext)(null);
      wt.displayName = "OpenClosedContext";
      var xt = (function (e) {
        return (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e;
      })(xt || {});
      function At() {
        return (0, t.useContext)(wt);
      }
      function kt(e) {
        var n = e.value,
          r = e.children;
        return t.createElement(wt.Provider, { value: n }, r);
      }
      var Et =
        "undefined" == typeof window || "undefined" == typeof document
          ? t.useEffect
          : t.useLayoutEffect;
      function St() {
        var e = (0, t.useRef)(!1);
        return (
          Et(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1;
              }
            );
          }, []),
          e
        );
      }
      function Ct(e) {
        var n = (0, t.useRef)(e);
        return (
          Et(
            function () {
              n.current = e;
            },
            [e]
          ),
          n
        );
      }
      var Pt = { serverHandoffComplete: !1 };
      function jt() {
        var e = i((0, t.useState)(Pt.serverHandoffComplete), 2),
          n = e[0],
          r = e[1];
        return (
          (0, t.useEffect)(
            function () {
              !0 !== n && r(!0);
            },
            [n]
          ),
          (0, t.useEffect)(function () {
            !1 === Pt.serverHandoffComplete && (Pt.serverHandoffComplete = !0);
          }, []),
          n
        );
      }
      var Nt = function (e) {
          var n = Ct(e);
          return t.useCallback(
            function () {
              return n.current.apply(n, arguments);
            },
            [n]
          );
        },
        zt = Symbol();
      function Ot() {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
          n[r] = arguments[r];
        var a = (0, t.useRef)(n);
        (0, t.useEffect)(
          function () {
            a.current = n;
          },
          [n]
        );
        var l = Nt(function (e) {
          var t,
            n = lt(a.current);
          try {
            for (n.s(); !(t = n.n()).done; ) {
              var r = t.value;
              null != r && ("function" == typeof r ? r(e) : (r.current = e));
            }
          } catch (l) {
            n.e(l);
          } finally {
            n.f();
          }
        });
        return n.every(function (e) {
          return null == e || (null == e ? void 0 : e[zt]);
        })
          ? void 0
          : l;
      }
      function Lt() {
        Lt = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          l = a.iterator || "@@iterator",
          o = a.asyncIterator || "@@asyncIterator",
          i = a.toStringTag || "@@toStringTag";
        function u(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (N) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function s(e, t, n, a) {
          var l = t && t.prototype instanceof p ? t : p,
            o = Object.create(l.prototype),
            i = new C(a || []);
          return r(o, "_invoke", { value: A(e, n, i) }), o;
        }
        function f(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        e.wrap = s;
        var d = {};
        function p() {}
        function h() {}
        function m() {}
        var v = {};
        u(v, l, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          y = g && g(g(P([])));
        y && y !== t && n.call(y, l) && (v = y);
        var b = (m.prototype = p.prototype = Object.create(v));
        function w(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function x(e, t) {
          function a(r, l, o, i) {
            var u = f(e[r], e, l);
            if ("throw" !== u.type) {
              var s = u.arg,
                d = s.value;
              return d && "object" == c(d) && n.call(d, "__await")
                ? t.resolve(d.__await).then(
                    function (e) {
                      a("next", e, o, i);
                    },
                    function (e) {
                      a("throw", e, o, i);
                    }
                  )
                : t.resolve(d).then(
                    function (e) {
                      (s.value = e), o(s);
                    },
                    function (e) {
                      return a("throw", e, o, i);
                    }
                  );
            }
            i(u.arg);
          }
          var l;
          r(this, "_invoke", {
            value: function (e, n) {
              function r() {
                return new t(function (t, r) {
                  a(e, n, t, r);
                });
              }
              return (l = l ? l.then(r, r) : r());
            },
          });
        }
        function A(e, t, n) {
          var r = "suspendedStart";
          return function (a, l) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw l;
              return j();
            }
            for (n.method = a, n.arg = l; ; ) {
              var o = n.delegate;
              if (o) {
                var i = k(o, n);
                if (i) {
                  if (i === d) continue;
                  return i;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var u = f(e, t, n);
              if ("normal" === u.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), u.arg === d)
                )
                  continue;
                return { value: u.arg, done: n.done };
              }
              "throw" === u.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
            }
          };
        }
        function k(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                k(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var a = f(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), d
            );
          var l = a.arg;
          return l
            ? l.done
              ? ((t[e.resultName] = l.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : l
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              d);
        }
        function E(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function S(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function C(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(E, this),
            this.reset(!0);
        }
        function P(e) {
          if (e) {
            var t = e[l];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = m),
          r(b, "constructor", { value: m, configurable: !0 }),
          r(m, "constructor", { value: h, configurable: !0 }),
          (h.displayName = u(m, i, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), u(e, i, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          w(x.prototype),
          u(x.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = x),
          (e.async = function (t, n, r, a, l) {
            void 0 === l && (l = Promise);
            var o = new x(s(t, n, r, a), l);
            return e.isGeneratorFunction(n)
              ? o
              : o.next().then(function (e) {
                  return e.done ? e.value : o.next();
                });
          }),
          w(b),
          u(b, i, "Generator"),
          u(b, l, function () {
            return this;
          }),
          u(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = P),
          (C.prototype = {
            constructor: C,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(S),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (o.type = "throw"),
                  (o.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var l = this.tryEntries[a],
                  o = l.completion;
                if ("root" === l.tryLoc) return r("end");
                if (l.tryLoc <= this.prev) {
                  var i = n.call(l, "catchLoc"),
                    u = n.call(l, "finallyLoc");
                  if (i && u) {
                    if (this.prev < l.catchLoc) return r(l.catchLoc, !0);
                    if (this.prev < l.finallyLoc) return r(l.finallyLoc);
                  } else if (i) {
                    if (this.prev < l.catchLoc) return r(l.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < l.finallyLoc) return r(l.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var l = a;
                  break;
                }
              }
              l &&
                ("break" === e || "continue" === e) &&
                l.tryLoc <= t &&
                t <= l.finallyLoc &&
                (l = null);
              var o = l ? l.completion : {};
              return (
                (o.type = e),
                (o.arg = t),
                l
                  ? ((this.method = "next"), (this.next = l.finallyLoc), d)
                  : this.complete(o)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                d
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), S(n), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    S(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: P(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function Bt(e, t, n, r, a, l, o) {
        try {
          var i = e[l](o),
            u = i.value;
        } catch (s) {
          return void n(s);
        }
        i.done ? t(u) : Promise.resolve(u).then(r, a);
      }
      function Dt(e) {
        "function" == typeof queueMicrotask
          ? queueMicrotask(e)
          : Promise.resolve()
              .then(e)
              .catch(function (e) {
                return setTimeout(function () {
                  throw e;
                });
              });
      }
      function Tt() {
        var e = [],
          t = [],
          n = {
            enqueue: function (e) {
              t.push(e);
            },
            addEventListener: function (e, t, r, a) {
              return (
                e.addEventListener(t, r, a),
                n.add(function () {
                  return e.removeEventListener(t, r, a);
                })
              );
            },
            requestAnimationFrame: (function (e) {
              function t() {
                return e.apply(this, arguments);
              }
              return (
                (t.toString = function () {
                  return e.toString();
                }),
                t
              );
            })(function () {
              var e = requestAnimationFrame.apply(void 0, arguments);
              return n.add(function () {
                return cancelAnimationFrame(e);
              });
            }),
            nextFrame: function () {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              return n.requestAnimationFrame(function () {
                return n.requestAnimationFrame.apply(n, t);
              });
            },
            setTimeout: (function (e) {
              function t() {
                return e.apply(this, arguments);
              }
              return (
                (t.toString = function () {
                  return e.toString();
                }),
                t
              );
            })(function () {
              var e = setTimeout.apply(void 0, arguments);
              return n.add(function () {
                return clearTimeout(e);
              });
            }),
            microTask: function () {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              var a = { current: !0 };
              return (
                Dt(function () {
                  a.current && t[0]();
                }),
                n.add(function () {
                  a.current = !1;
                })
              );
            },
            add: function (t) {
              return (
                e.push(t),
                function () {
                  var n = e.indexOf(t);
                  n >= 0 && (0, i(e.splice(n, 1), 1)[0])();
                }
              );
            },
            dispose: function () {
              var t,
                n = lt(e.splice(0));
              try {
                for (n.s(); !(t = n.n()).done; ) {
                  (0, t.value)();
                }
              } catch (r) {
                n.e(r);
              } finally {
                n.f();
              }
            },
            workQueue: function () {
              return ((e = Lt().mark(function e() {
                var n, r, a;
                return Lt().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (n = lt(t.splice(0))), (e.prev = 1), n.s();
                        case 3:
                          if ((r = n.n()).done) {
                            e.next = 9;
                            break;
                          }
                          return (a = r.value), (e.next = 7), a();
                        case 7:
                          e.next = 3;
                          break;
                        case 9:
                          e.next = 14;
                          break;
                        case 11:
                          (e.prev = 11), (e.t0 = e.catch(1)), n.e(e.t0);
                        case 14:
                          return (e.prev = 14), n.f(), e.finish(14);
                        case 17:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 11, 14, 17]]
                );
              })),
              function () {
                var t = this,
                  n = arguments;
                return new Promise(function (r, a) {
                  var l = e.apply(t, n);
                  function o(e) {
                    Bt(l, r, a, o, i, "next", e);
                  }
                  function i(e) {
                    Bt(l, r, a, o, i, "throw", e);
                  }
                  o(void 0);
                });
              })();
              var e;
            },
          };
        return n;
      }
      function Ft(e) {
        for (
          var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
          a < n;
          a++
        )
          r[a - 1] = arguments[a];
        e && r.length > 0 && (t = e.classList).add.apply(t, r);
      }
      function It(e) {
        for (
          var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
          a < n;
          a++
        )
          r[a - 1] = arguments[a];
        e && r.length > 0 && (t = e.classList).remove.apply(t, r);
      }
      var Ut,
        Mt =
          (((Ut = Mt || {}).Ended = "ended"), (Ut.Cancelled = "cancelled"), Ut);
      function Rt(e, t, n, r) {
        var a = n ? "enter" : "leave",
          l = Tt(),
          o =
            void 0 !== r
              ? (function (e) {
                  var t = { called: !1 };
                  return function () {
                    if (!t.called)
                      return (t.called = !0), e.apply(void 0, arguments);
                  };
                })(r)
              : function () {};
        "enter" === a && (e.removeAttribute("hidden"), (e.style.display = ""));
        var s = ot(a, {
            enter: function () {
              return t.enter;
            },
            leave: function () {
              return t.leave;
            },
          }),
          c = ot(a, {
            enter: function () {
              return t.enterTo;
            },
            leave: function () {
              return t.leaveTo;
            },
          }),
          f = ot(a, {
            enter: function () {
              return t.enterFrom;
            },
            leave: function () {
              return t.leaveFrom;
            },
          });
        return (
          It.apply(
            void 0,
            [e].concat(
              u(t.enter),
              u(t.enterTo),
              u(t.enterFrom),
              u(t.leave),
              u(t.leaveFrom),
              u(t.leaveTo),
              u(t.entered)
            )
          ),
          Ft.apply(void 0, [e].concat(u(s), u(f))),
          l.nextFrame(function () {
            It.apply(void 0, [e].concat(u(f))),
              Ft.apply(void 0, [e].concat(u(c))),
              (function (e, t) {
                var n = Tt();
                if (!e) return n.dispose;
                var r = getComputedStyle(e),
                  a = [r.transitionDuration, r.transitionDelay].map(function (
                    e
                  ) {
                    var t = e
                        .split(",")
                        .filter(Boolean)
                        .map(function (e) {
                          return e.includes("ms")
                            ? parseFloat(e)
                            : 1e3 * parseFloat(e);
                        })
                        .sort(function (e, t) {
                          return t - e;
                        }),
                      n = i(t, 1)[0];
                    return void 0 === n ? 0 : n;
                  }),
                  l = i(a, 2);
                if (l[0] + l[1] !== 0) {
                  var o = [];
                  o.push(
                    n.addEventListener(e, "transitionrun", function (r) {
                      r.target === r.currentTarget &&
                        (o.splice(0).forEach(function (e) {
                          return e();
                        }),
                        o.push(
                          n.addEventListener(e, "transitionend", function (e) {
                            e.target === e.currentTarget &&
                              (t("ended"),
                              o.splice(0).forEach(function (e) {
                                return e();
                              }));
                          }),
                          n.addEventListener(
                            e,
                            "transitioncancel",
                            function (e) {
                              e.target === e.currentTarget &&
                                (t("cancelled"),
                                o.splice(0).forEach(function (e) {
                                  return e();
                                }));
                            }
                          )
                        ));
                    })
                  );
                } else t("ended");
                n.add(function () {
                  return t("cancelled");
                }),
                  n.dispose;
              })(e, function (n) {
                return (
                  "ended" === n &&
                    (It.apply(void 0, [e].concat(u(s))),
                    Ft.apply(void 0, [e].concat(u(t.entered)))),
                  o(n)
                );
              });
          }),
          l.dispose
        );
      }
      function _t() {
        var e = i((0, t.useState)(Tt), 1)[0];
        return (
          (0, t.useEffect)(
            function () {
              return function () {
                return e.dispose();
              };
            },
            [e]
          ),
          e
        );
      }
      function Qt(e) {
        var t = e.container,
          n = e.direction,
          r = e.classes,
          a = e.onStart,
          l = e.onStop,
          o = St(),
          i = _t(),
          u = Ct(n);
        Et(
          function () {
            var e = Tt();
            i.add(e.dispose);
            var n = t.current;
            if (n && "idle" !== u.current && o.current)
              return (
                e.dispose(),
                a.current(u.current),
                e.add(
                  Rt(n, r.current, "enter" === u.current, function (t) {
                    var n;
                    e.dispose(),
                      ot(
                        t,
                        (nt((n = {}), Mt.Ended, function () {
                          l.current(u.current);
                        }),
                        nt(n, Mt.Cancelled, function () {}),
                        n)
                      );
                  })
                ),
                e.dispose
              );
          },
          [n]
        );
      }
      var Ht = [
          "beforeEnter",
          "afterEnter",
          "beforeLeave",
          "afterLeave",
          "enter",
          "enterFrom",
          "enterTo",
          "entered",
          "leave",
          "leaveFrom",
          "leaveTo",
        ],
        Vt = ["show", "appear", "unmount"];
      function Wt() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return e.split(" ").filter(function (e) {
          return e.trim().length > 1;
        });
      }
      var Kt = (0, t.createContext)(null);
      Kt.displayName = "TransitionContext";
      var qt,
        Xt =
          (((qt = Xt || {}).Visible = "visible"), (qt.Hidden = "hidden"), qt);
      var Jt = (0, t.createContext)(null);
      function Yt(e) {
        return "children" in e
          ? Yt(e.children)
          : e.current
              .filter(function (e) {
                return null !== e.el.current;
              })
              .filter(function (e) {
                return "visible" === e.state;
              }).length > 0;
      }
      function Gt(e, n) {
        var r = Ct(e),
          a = (0, t.useRef)([]),
          l = St(),
          o = _t(),
          u = Nt(function (e) {
            var t,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : dt.Hidden,
              i = a.current.findIndex(function (t) {
                return t.el === e;
              });
            -1 !== i &&
              (ot(
                n,
                (nt((t = {}), dt.Unmount, function () {
                  a.current.splice(i, 1);
                }),
                nt(t, dt.Hidden, function () {
                  a.current[i].state = "hidden";
                }),
                t)
              ),
              o.microTask(function () {
                var e;
                !Yt(a) && l.current && (null == (e = r.current) || e.call(r));
              }));
          }),
          s = Nt(function (e) {
            var t = a.current.find(function (t) {
              return t.el === e;
            });
            return (
              t
                ? "visible" !== t.state && (t.state = "visible")
                : a.current.push({ el: e, state: "visible" }),
              function () {
                return u(e, dt.Unmount);
              }
            );
          }),
          c = (0, t.useRef)([]),
          f = (0, t.useRef)(Promise.resolve()),
          d = (0, t.useRef)({ enter: [], leave: [], idle: [] }),
          p = Nt(function (e, t, r) {
            c.current.splice(0),
              n &&
                (n.chains.current[t] = n.chains.current[t].filter(function (t) {
                  return i(t, 1)[0] !== e;
                })),
              null == n ||
                n.chains.current[t].push([
                  e,
                  new Promise(function (e) {
                    c.current.push(e);
                  }),
                ]),
              null == n ||
                n.chains.current[t].push([
                  e,
                  new Promise(function (e) {
                    Promise.all(
                      d.current[t].map(function (e) {
                        var t = i(e, 2);
                        t[0];
                        return t[1];
                      })
                    ).then(function () {
                      return e();
                    });
                  }),
                ]),
              "enter" === t
                ? (f.current = f.current
                    .then(function () {
                      return null == n ? void 0 : n.wait.current;
                    })
                    .then(function () {
                      return r(t);
                    }))
                : r(t);
          }),
          h = Nt(function (e, t, n) {
            Promise.all(
              d.current[t].splice(0).map(function (e) {
                var t = i(e, 2);
                t[0];
                return t[1];
              })
            )
              .then(function () {
                var e;
                null == (e = c.current.shift()) || e();
              })
              .then(function () {
                return n(t);
              });
          });
        return (0, t.useMemo)(
          function () {
            return {
              children: a,
              register: s,
              unregister: u,
              onStart: p,
              onStop: h,
              wait: f,
              chains: d,
            };
          },
          [s, u, a, p, h, d, f]
        );
      }
      function Zt() {}
      Jt.displayName = "NestingContext";
      var $t = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
      function en(e) {
        var t,
          n,
          r = {},
          a = lt($t);
        try {
          for (a.s(); !(n = a.n()).done; ) {
            var l = n.value;
            r[l] = null != (t = e[l]) ? t : Zt;
          }
        } catch (o) {
          a.e(o);
        } finally {
          a.f();
        }
        return r;
      }
      var tn = ft.RenderStrategy,
        nn = gt(function (e, n) {
          var r,
            a = e.beforeEnter,
            l = e.afterEnter,
            o = e.beforeLeave,
            u = e.afterLeave,
            s = e.enter,
            c = e.enterFrom,
            f = e.enterTo,
            d = e.entered,
            p = e.leave,
            h = e.leaveFrom,
            m = e.leaveTo,
            v = Ke(e, Ht),
            g = (0, t.useRef)(null),
            y = Ot(g, n),
            b = v.unmount ? dt.Unmount : dt.Hidden,
            w = (function () {
              var e = (0, t.useContext)(Kt);
              if (null === e)
                throw new Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return e;
            })(),
            x = w.show,
            A = w.appear,
            k = w.initial,
            E = i((0, t.useState)(x ? "visible" : "hidden"), 2),
            S = E[0],
            C = E[1],
            P = (function () {
              var e = (0, t.useContext)(Jt);
              if (null === e)
                throw new Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return e;
            })(),
            j = P.register,
            N = P.unregister,
            z = (0, t.useRef)(null);
          (0, t.useEffect)(
            function () {
              return j(g);
            },
            [j, g]
          ),
            (0, t.useEffect)(
              function () {
                var e;
                if (b === dt.Hidden && g.current)
                  return x && "visible" !== S
                    ? void C("visible")
                    : ot(
                        S,
                        (nt((e = {}), "hidden", function () {
                          return N(g);
                        }),
                        nt(e, "visible", function () {
                          return j(g);
                        }),
                        e)
                      );
              },
              [S, g, j, N, x, b]
            );
          var O = Ct({
              enter: Wt(s),
              enterFrom: Wt(c),
              enterTo: Wt(f),
              entered: Wt(d),
              leave: Wt(p),
              leaveFrom: Wt(h),
              leaveTo: Wt(m),
            }),
            L = (function (e) {
              var n = (0, t.useRef)(en(e));
              return (
                (0, t.useEffect)(
                  function () {
                    n.current = en(e);
                  },
                  [e]
                ),
                n
              );
            })({
              beforeEnter: a,
              afterEnter: l,
              beforeLeave: o,
              afterLeave: u,
            }),
            B = jt();
          (0, t.useEffect)(
            function () {
              if (B && "visible" === S && null === g.current)
                throw new Error(
                  "Did you forget to passthrough the `ref` to the actual DOM node?"
                );
            },
            [g, S, B]
          );
          var D = k && !A,
            T = !B || D || z.current === x ? "idle" : x ? "enter" : "leave",
            F = Nt(function (e) {
              return ot(e, {
                enter: function () {
                  return L.current.beforeEnter();
                },
                leave: function () {
                  return L.current.beforeLeave();
                },
                idle: function () {},
              });
            }),
            I = Nt(function (e) {
              return ot(e, {
                enter: function () {
                  return L.current.afterEnter();
                },
                leave: function () {
                  return L.current.afterLeave();
                },
                idle: function () {},
              });
            }),
            U = Gt(function () {
              C("hidden"), N(g);
            }, P);
          Qt({
            container: g,
            classes: O,
            direction: T,
            onStart: Ct(function (e) {
              U.onStart(g, e, F);
            }),
            onStop: Ct(function (e) {
              U.onStop(g, e, I), "leave" === e && !Yt(U) && (C("hidden"), N(g));
            }),
          }),
            (0, t.useEffect)(
              function () {
                !D || (b === dt.Hidden ? (z.current = null) : (z.current = x));
              },
              [x, D, S]
            );
          var M = v,
            R = { ref: y };
          return t.createElement(
            Jt.Provider,
            { value: U },
            t.createElement(
              kt,
              {
                value: ot(
                  S,
                  ((r = {}),
                  nt(r, "visible", xt.Open),
                  nt(r, "hidden", xt.Closed),
                  r)
                ),
              },
              pt({
                ourProps: R,
                theirProps: M,
                defaultTag: "div",
                features: tn,
                visible: "visible" === S,
                name: "Transition.Child",
              })
            )
          );
        }),
        rn = gt(function (e, n) {
          var r,
            a = e.show,
            l = e.appear,
            o = void 0 !== l && l,
            u = e.unmount,
            s = Ke(e, Vt),
            c = (0, t.useRef)(null),
            f = Ot(c, n);
          jt();
          var d = At();
          if (
            (void 0 === a &&
              null !== d &&
              (a = ot(d, (nt((r = {}), xt.Open, !0), nt(r, xt.Closed, !1), r))),
            ![!0, !1].includes(a))
          )
            throw new Error(
              "A <Transition /> is used but it is missing a `show={true | false}` prop."
            );
          var p = i((0, t.useState)(a ? "visible" : "hidden"), 2),
            h = p[0],
            m = p[1],
            v = Gt(function () {
              m("hidden");
            }),
            g = i((0, t.useState)(!0), 2),
            y = g[0],
            b = g[1],
            w = (0, t.useRef)([a]);
          Et(
            function () {
              !1 !== y &&
                w.current[w.current.length - 1] !== a &&
                (w.current.push(a), b(!1));
            },
            [w, a]
          );
          var x = (0, t.useMemo)(
            function () {
              return { show: a, appear: o, initial: y };
            },
            [a, o, y]
          );
          (0, t.useEffect)(
            function () {
              if (a) m("visible");
              else if (Yt(v)) {
                var e = c.current;
                if (!e) return;
                var t = e.getBoundingClientRect();
                0 === t.x &&
                  0 === t.y &&
                  0 === t.width &&
                  0 === t.height &&
                  m("hidden");
              } else m("hidden");
            },
            [a, v]
          );
          var A = { unmount: u };
          return t.createElement(
            Jt.Provider,
            { value: v },
            t.createElement(
              Kt.Provider,
              { value: x },
              pt({
                ourProps: at(
                  at({}, A),
                  {},
                  {
                    as: t.Fragment,
                    children: t.createElement(nn, at(at({ ref: f }, A), s)),
                  }
                ),
                theirProps: {},
                defaultTag: t.Fragment,
                features: tn,
                visible: "visible" === h,
                name: "Transition",
              })
            )
          );
        }),
        an = gt(function (e, n) {
          var r = null !== (0, t.useContext)(Kt),
            a = null !== At();
          return t.createElement(
            t.Fragment,
            null,
            !r && a
              ? t.createElement(rn, at({ ref: n }, e))
              : t.createElement(nn, at({ ref: n }, e))
          );
        }),
        ln = Object.assign(rn, { Child: an, Root: rn }),
        on = ["title", "titleId"];
      var un = t.forwardRef(function (e, n) {
          var r = e.title,
            a = e.titleId,
            l = Ke(e, on);
          return t.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: n,
                "aria-labelledby": a,
              },
              l
            ),
            r ? t.createElement("title", { id: a }, r) : null,
            t.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            })
          );
        }),
        sn = ["title", "titleId"];
      var cn = t.forwardRef(function (e, n) {
        var r = e.title,
          a = e.titleId,
          l = Ke(e, sn);
        return t.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              "aria-hidden": "true",
              ref: n,
              "aria-labelledby": a,
            },
            l
          ),
          r ? t.createElement("title", { id: a }, r) : null,
          t.createElement("path", {
            d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z",
          })
        );
      });
      function fn(e) {
        var n = e.title,
          r = e.text,
          a = i((0, t.useState)(!0), 2),
          l = a[0],
          o = a[1];
        return (
          (0, t.useEffect)(function () {
            setTimeout(function () {
              o(!1);
            }, 3e3);
          }, []),
          (0, Ve.jsx)(Ve.Fragment, {
            children: (0, Ve.jsx)("div", {
              "aria-live": "assertive",
              className:
                "pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 top-10",
              children: (0, Ve.jsx)("div", {
                className:
                  "flex w-full flex-col items-center space-y-4 sm:items-end",
                children: (0, Ve.jsx)(ln, {
                  show: l,
                  as: t.Fragment,
                  enter: "transform ease-out duration-300 transition",
                  enterFrom:
                    "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
                  enterTo: "translate-y-0 opacity-100 sm:translate-x-0",
                  leave: "transition ease-in duration-100",
                  leaveFrom: "opacity-100",
                  leaveTo: "opacity-0",
                  children: (0, Ve.jsx)("div", {
                    className:
                      "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",
                    children: (0, Ve.jsx)("div", {
                      className: "p-4",
                      children: (0, Ve.jsxs)("div", {
                        className: "flex items-start",
                        children: [
                          (0, Ve.jsx)("div", {
                            className: "flex-shrink-0",
                            children: (0, Ve.jsx)(un, {
                              className: "h-6 w-6 text-green-400",
                              "aria-hidden": "true",
                            }),
                          }),
                          (0, Ve.jsxs)("div", {
                            className: "ml-3 w-0 flex-1 pt-0.5",
                            children: [
                              (0, Ve.jsx)("p", {
                                className: "text-sm font-medium text-gray-900",
                                children: n,
                              }),
                              (0, Ve.jsx)("p", {
                                className: "mt-1 text-sm text-gray-500",
                                children: r,
                              }),
                            ],
                          }),
                          (0, Ve.jsx)("div", {
                            className: "ml-4 flex flex-shrink-0",
                            children: (0, Ve.jsxs)("button", {
                              type: "button",
                              className:
                                "inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                              onClick: function () {
                                o(!1);
                              },
                              children: [
                                (0, Ve.jsx)("span", {
                                  className: "sr-only",
                                  children: "Close",
                                }),
                                (0, Ve.jsx)(cn, {
                                  className: "h-5 w-5",
                                  "aria-hidden": "true",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            }),
          })
        );
      }
      function dn() {
        var e = (0, t.useRef)(null),
          n = i((0, t.useState)(!1), 2),
          r = n[0],
          a = n[1],
          l = i((0, t.useState)(!1), 2),
          o = (l[0], l[1]);
        return (0, Ve.jsx)("div", {
          className: "bg-white w-screen h-screen",
          children: (0, Ve.jsxs)("main", {
            className: "overflow-hidden",
            children: [
              (0, Ve.jsx)("div", {
                className: "bg-warm-gray-50",
                children: (0, Ve.jsx)("div", {
                  className: "py-24 lg:py-32",
                  children: (0, Ve.jsxs)("div", {
                    className:
                      "relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8",
                    children: [
                      (0, Ve.jsx)("h1", {
                        className:
                          "text-4xl font-bold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl",
                        children: "Get in touch",
                      }),
                      (0, Ve.jsx)("p", {
                        className: "mt-6 max-w-3xl text-xl text-warm-gray-500",
                        children:
                          "Interested in Working Together? Love to hear from you, get in touch \ud83d\udc4b.",
                      }),
                    ],
                  }),
                }),
              }),
              r &&
                (0, Ve.jsx)(fn, {
                  title: "Email Sent",
                  text: "Email has successfully sent",
                }),
              (0, Ve.jsxs)("section", {
                className: "relative bg-white",
                "aria-labelledby": "contact-heading",
                children: [
                  (0, Ve.jsx)("div", {
                    className: "absolute h-1/2 w-full bg-warm-gray-50",
                    "aria-hidden": "true",
                  }),
                  (0, Ve.jsx)("div", {
                    className:
                      "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                    children: (0, Ve.jsxs)("svg", {
                      className:
                        "absolute top-0 right-0 z-0 -translate-y-16 translate-x-1/2 transform sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72",
                      width: 404,
                      height: 384,
                      fill: "none",
                      viewBox: "0 0 404 384",
                      "aria-hidden": "true",
                      children: [
                        (0, Ve.jsx)("defs", {
                          children: (0, Ve.jsx)("pattern", {
                            id: "64e643ad-2176-4f86-b3d7-f2c5da3b6a6d",
                            x: 0,
                            y: 0,
                            width: 20,
                            height: 20,
                            patternUnits: "userSpaceOnUse",
                            children: (0, Ve.jsx)("rect", {
                              x: 0,
                              y: 0,
                              width: 4,
                              height: 4,
                              className: "text-warm-gray-200",
                              fill: "currentColor",
                            }),
                          }),
                        }),
                        (0, Ve.jsx)("rect", {
                          width: 404,
                          height: 384,
                          fill: "url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)",
                        }),
                      ],
                    }),
                  }),
                  (0, Ve.jsx)("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                    children: (0, Ve.jsxs)("div", {
                      className: "relative bg-white shadow-xl",
                      children: [
                        (0, Ve.jsx)("h2", {
                          id: "contact-heading",
                          className: "sr-only",
                          children: "Contact Me",
                        }),
                        (0, Ve.jsxs)("div", {
                          className: "grid grid-cols-1 lg:grid-cols-3",
                          children: [
                            (0, Ve.jsxs)("div", {
                              className:
                                "relative overflow-hidden bg-gradient-to-b from-teal-500 to-teal-600 py-10 px-6 sm:px-10 xl:p-12",
                              children: [
                                (0, Ve.jsx)("div", {
                                  className:
                                    "pointer-events-none absolute inset-0 sm:hidden",
                                  "aria-hidden": "true",
                                  children: (0, Ve.jsxs)("svg", {
                                    className: "absolute inset-0 h-full w-full",
                                    width: 343,
                                    height: 388,
                                    viewBox: "0 0 343 388",
                                    fill: "none",
                                    preserveAspectRatio: "xMidYMid slice",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                      (0, Ve.jsx)("path", {
                                        d: "M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z",
                                        fill: "url(#linear1)",
                                        fillOpacity: ".1",
                                      }),
                                      (0, Ve.jsx)("defs", {
                                        children: (0, Ve.jsxs)(
                                          "linearGradient",
                                          {
                                            id: "linear1",
                                            x1: "254.553",
                                            y1: "107.554",
                                            x2: "961.66",
                                            y2: "814.66",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [
                                              (0, Ve.jsx)("stop", {
                                                stopColor: "#fff",
                                              }),
                                              (0, Ve.jsx)("stop", {
                                                offset: 1,
                                                stopColor: "#fff",
                                                stopOpacity: 0,
                                              }),
                                            ],
                                          }
                                        ),
                                      }),
                                    ],
                                  }),
                                }),
                                (0, Ve.jsx)("div", {
                                  className:
                                    "pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden",
                                  "aria-hidden": "true",
                                  children: (0, Ve.jsxs)("svg", {
                                    className: "absolute inset-0 h-full w-full",
                                    width: 359,
                                    height: 339,
                                    viewBox: "0 0 359 339",
                                    fill: "none",
                                    preserveAspectRatio: "xMidYMid slice",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                      (0, Ve.jsx)("path", {
                                        d: "M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z",
                                        fill: "url(#linear2)",
                                        fillOpacity: ".1",
                                      }),
                                      (0, Ve.jsx)("defs", {
                                        children: (0, Ve.jsxs)(
                                          "linearGradient",
                                          {
                                            id: "linear2",
                                            x1: "192.553",
                                            y1: "28.553",
                                            x2: "899.66",
                                            y2: "735.66",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [
                                              (0, Ve.jsx)("stop", {
                                                stopColor: "#fff",
                                              }),
                                              (0, Ve.jsx)("stop", {
                                                offset: 1,
                                                stopColor: "#fff",
                                                stopOpacity: 0,
                                              }),
                                            ],
                                          }
                                        ),
                                      }),
                                    ],
                                  }),
                                }),
                                (0, Ve.jsx)("div", {
                                  className:
                                    "pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block",
                                  "aria-hidden": "true",
                                  children: (0, Ve.jsxs)("svg", {
                                    className: "absolute inset-0 h-full w-full",
                                    width: 160,
                                    height: 678,
                                    viewBox: "0 0 160 678",
                                    fill: "none",
                                    preserveAspectRatio: "xMidYMid slice",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                      (0, Ve.jsx)("path", {
                                        d: "M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z",
                                        fill: "url(#linear3)",
                                        fillOpacity: ".1",
                                      }),
                                      (0, Ve.jsx)("defs", {
                                        children: (0, Ve.jsxs)(
                                          "linearGradient",
                                          {
                                            id: "linear3",
                                            x1: "192.553",
                                            y1: "325.553",
                                            x2: "899.66",
                                            y2: "1032.66",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [
                                              (0, Ve.jsx)("stop", {
                                                stopColor: "#fff",
                                              }),
                                              (0, Ve.jsx)("stop", {
                                                offset: 1,
                                                stopColor: "#fff",
                                                stopOpacity: 0,
                                              }),
                                            ],
                                          }
                                        ),
                                      }),
                                    ],
                                  }),
                                }),
                                (0, Ve.jsx)("h3", {
                                  className: "text-lg font-medium text-white",
                                  children: "Contact information",
                                }),
                                (0, Ve.jsxs)("dl", {
                                  className: "mt-8 space-y-6",
                                  children: [
                                    (0, Ve.jsx)("dt", {
                                      children: (0, Ve.jsx)("span", {
                                        className: "sr-only",
                                        children: "Email",
                                      }),
                                    }),
                                    (0, Ve.jsxs)("dd", {
                                      className: "flex text-base text-teal-50",
                                      children: [
                                        (0, Ve.jsx)(Xe, {
                                          className:
                                            "h-6 w-6 flex-shrink-0 text-teal-200",
                                          "aria-hidden": "true",
                                        }),
                                        (0, Ve.jsx)("span", {
                                          className: "ml-3",
                                          children: "osgo1115@icloud.com",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, Ve.jsxs)("ul", {
                                  role: "list",
                                  className: "mt-8 flex space-x-12",
                                  children: [
                                    (0, Ve.jsx)("li", {
                                      children: (0, Ve.jsxs)("a", {
                                        className:
                                          "text-teal-200 hover:text-teal-100",
                                        href: Je,
                                        children: [
                                          (0, Ve.jsx)("span", {
                                            className: "sr-only",
                                            children: "GitHub",
                                          }),
                                          (0, Ve.jsx)("svg", {
                                            className: "h-7 w-7",
                                            "aria-hidden": "true",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: (0, Ve.jsx)("path", {
                                              fillRule: "evenodd",
                                              d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                                              clipRule: "evenodd",
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, Ve.jsx)("li", {
                                      children: (0, Ve.jsxs)("a", {
                                        className:
                                          "text-teal-200 hover:text-teal-100",
                                        href: Ye,
                                        children: [
                                          (0, Ve.jsx)("span", {
                                            className: "sr-only",
                                            children: "Linked In",
                                          }),
                                          (0, Ve.jsx)("svg", {
                                            className: "h-6 w-6 mt-[2px]",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            children: (0, Ve.jsx)("path", {
                                              fillRule: "evenodd",
                                              d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                                              clipRule: "evenodd",
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, Ve.jsxs)("div", {
                              className:
                                "py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12",
                              children: [
                                (0, Ve.jsx)("h3", {
                                  className:
                                    "text-lg font-medium text-warm-gray-900",
                                  children: "Send me a message",
                                }),
                                (0, Ve.jsxs)("form", {
                                  onSubmit: function (t) {
                                    t.preventDefault(),
                                      console.log(e.current),
                                      tt(
                                        "service_pyq4lvd",
                                        "template_993lc9i",
                                        e.current,
                                        "xgYZLfgdCCFEG-nz7"
                                      ).then(
                                        function (e) {
                                          a(!0),
                                            o(!1),
                                            setTimeout(function () {
                                              a(!1);
                                            }, 3e3);
                                        },
                                        function (e) {
                                          console.log(e.text);
                                        }
                                      );
                                  },
                                  className:
                                    "mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8",
                                  ref: e,
                                  children: [
                                    (0, Ve.jsxs)("div", {
                                      children: [
                                        (0, Ve.jsx)("label", {
                                          htmlFor: "first_name",
                                          className:
                                            "block text-sm font-medium text-warm-gray-900",
                                          children: "First name",
                                        }),
                                        (0, Ve.jsx)("div", {
                                          className: "mt-1",
                                          children: (0, Ve.jsx)("input", {
                                            required: !0,
                                            type: "text",
                                            name: "first_name",
                                            id: "first_name",
                                            autoComplete: "given-name",
                                            className:
                                              "block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, Ve.jsxs)("div", {
                                      children: [
                                        (0, Ve.jsx)("label", {
                                          htmlFor: "last_name",
                                          className:
                                            "block text-sm font-medium text-warm-gray-900",
                                          children: "Last name",
                                        }),
                                        (0, Ve.jsx)("div", {
                                          className: "mt-1",
                                          children: (0, Ve.jsx)("input", {
                                            required: !0,
                                            type: "text",
                                            name: "last_name",
                                            id: "last_name",
                                            autoComplete: "family-name",
                                            className:
                                              "block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, Ve.jsxs)("div", {
                                      children: [
                                        (0, Ve.jsx)("label", {
                                          htmlFor: "email",
                                          className:
                                            "block text-sm font-medium text-warm-gray-900",
                                          children: "Email",
                                        }),
                                        (0, Ve.jsx)("div", {
                                          className: "mt-1",
                                          children: (0, Ve.jsx)("input", {
                                            required: !0,
                                            id: "email",
                                            name: "email",
                                            type: "email",
                                            autoComplete: "email",
                                            className:
                                              "block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, Ve.jsxs)("div", {
                                      children: [
                                        (0, Ve.jsxs)("div", {
                                          className: "flex justify-between",
                                          children: [
                                            (0, Ve.jsx)("label", {
                                              htmlFor: "phone",
                                              className:
                                                "block text-sm font-medium text-warm-gray-900",
                                              children: "Phone",
                                            }),
                                            (0, Ve.jsx)("span", {
                                              id: "phone-optional",
                                              className:
                                                "text-sm text-warm-gray-500",
                                              children: "Optional",
                                            }),
                                          ],
                                        }),
                                        (0, Ve.jsx)("div", {
                                          className: "mt-1",
                                          children: (0, Ve.jsx)("input", {
                                            type: "text",
                                            name: "phone",
                                            id: "phone",
                                            autoComplete: "tel",
                                            className:
                                              "block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500",
                                            "aria-describedby":
                                              "phone-optional",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, Ve.jsxs)("div", {
                                      className: "sm:col-span-2",
                                      children: [
                                        (0, Ve.jsx)("div", {
                                          className: "flex justify-between",
                                          children: (0, Ve.jsx)("label", {
                                            htmlFor: "message",
                                            className:
                                              "block text-sm font-medium text-warm-gray-900",
                                            children: "Message",
                                          }),
                                        }),
                                        (0, Ve.jsx)("textarea", {
                                          required: !0,
                                          id: "message",
                                          name: "message",
                                          rows: 4,
                                          className:
                                            "mt-1 block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500",
                                        }),
                                      ],
                                    }),
                                    (0, Ve.jsx)("div", {
                                      className:
                                        "sm:col-span-2 sm:flex sm:justify-end",
                                      children: (0, Ve.jsx)("button", {
                                        type: "submit",
                                        className:
                                          "mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-teal-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto",
                                        children: "Submit",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var pn,
        hn = n(302),
        mn = n.p + "static/media/me.0b3f75e6754d2a20b3d3.png",
        vn = ["title", "titleId"];
      function gn() {
        return (
          (gn = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          gn.apply(this, arguments)
        );
      }
      function yn(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function bn(e, n) {
        var r = e.title,
          a = e.titleId,
          l = yn(e, vn);
        return t.createElement(
          "svg",
          gn(
            {
              width: "24px",
              height: "24px",
              strokeWidth: 1.5,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              color: "#000000",
              ref: n,
              "aria-labelledby": a,
            },
            l
          ),
          r ? t.createElement("title", { id: a }, r) : null,
          pn ||
            (pn = t.createElement("path", {
              d: "M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3",
              stroke: "",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }))
        );
      }
      var wn = t.forwardRef(bn),
        xn =
          (n.p,
          function (e) {
            var t = function () {
              return (0, Ve.jsxs)("a", {
                rel: "noreferrer",
                href: e.githubURI,
                target: "_blank",
                className:
                  "bg-black dark:bg-gray-100 py-1 px-3 rounded-md flex items-center gap-3 cursor-pointer z-10 transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg",
                children: [
                  (0, Ve.jsx)(wn, {
                    className:
                      "h-[1.5rem] w-[1.5rem] stroke-white  dark:stroke-gray-900",
                  }),
                  (0, Ve.jsx)("p", {
                    className: "text-white dark:text-black text-sm font-bold ",
                    children: "Github",
                  }),
                ],
              });
            };
            return (0, Ve.jsxs)("div", {
              className: "w-full z-10 flex",
              tabIndex: 1,
              children: [
                (0, Ve.jsx)("div", {
                  className: "hidden lg:block w-[30%] relative",
                  children: (0, Ve.jsxs)("div", {
                    className: "absolute right-0 top-[3rem]",
                    children: [
                      (0, Ve.jsx)("div", {
                        className:
                          "w-[300px] h-[1.5rem] bg-white dark:bg-gray-800",
                      }),
                      (0, Ve.jsx)("p", {
                        className:
                          "text-[1.5rem] font-semibold text-gray-100 mt-7",
                        children: e.date,
                      }),
                    ],
                  }),
                }),
                (0, Ve.jsxs)("div", {
                  className: "flex-1 h-fit relative flex",
                  children: [
                    (0, Ve.jsx)("div", {
                      className:
                        "w-[95%] h-full absolute right-0 border-t-[1px]",
                    }),
                    (0, Ve.jsxs)("div", {
                      className: "flex-1 mt-[3rem] flex flex-col",
                      children: [
                        (0, Ve.jsx)("p", {
                          className:
                            "text-2xl font-semibold ml-4 mb-2 text-gray-600 dark:text-gray-300 lg:hidden",
                          children: e.date,
                        }),
                        (0, Ve.jsxs)("div", {
                          className: "flex justify-between",
                          children: [
                            (0, Ve.jsx)("div", {
                              className: "flex-1 h-[1.5rem] bg-gray-600",
                            }),
                            (0, Ve.jsxs)("div", {
                              className: "flex items-center gap-5 mx-5 mt-3",
                              children: [
                                e.websiteURI &&
                                  (0, Ve.jsx)("a", {
                                    rel: "noreferrer",
                                    target: "_blank",
                                    href: e.websiteURI,
                                    className:
                                      "z-10 p-2 hover:bg-gray-100 dark:hover:bg-gray-600/30 rounded-full",
                                    children: (0, Ve.jsx)(_e, {
                                      className:
                                        "w-[1.5rem] h-[1.5rem] cursor-pointer dark:text-gray-100",
                                      tabIndex: 2,
                                    }),
                                  }),
                                e.githubURI && (0, Ve.jsx)(t, {}),
                              ],
                            }),
                          ],
                        }),
                        (0, Ve.jsx)("p", {
                          className:
                            "text-3xl font-semibold ml-4 dark:text-gray-200",
                          children: e.title,
                        }),
                        (0, Ve.jsxs)("div", {
                          className:
                            "flex-1 flex justify-between flex-col mt-7 pl-10 px-5",
                          children: [
                            (0, Ve.jsx)("div", {
                              className:
                                "font-Poppins font-sm mb-5 dark:text-gray-300",
                              children: e.description,
                            }),
                            (0, Ve.jsx)("p", {
                              className:
                                "mt-auto text-sm text-gray-700 my-5 dark:text-gray-500",
                              children: e.platform,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Ve.jsx)("a", {
                      href: e.websiteURI,
                      rel: "noreferrer",
                      target: "_blank",
                      className:
                        "w-[40%] h-full place-items-center hidden md:grid select-none cursor-pointer",
                      children: (0, Ve.jsx)("img", {
                        alt: "project preview",
                        src: e.image,
                        className:
                          " h-[20rem] shadow-md hover:opacity-75 -translate-y-5 object-cover rounded-lg mt-[3rem] transition duration-300 ease-in-out hover:-translate-y-8 hover:shadow-xl z-10",
                      }),
                    }),
                  ],
                }),
              ],
            });
          }),
        An = n.p + "static/media/algo.25a83139eae3cc74f3b2.png",
        kn = n.p + "static/media/ksab.68a4cf10f57deafda35c.png",
        En = n.p + "static/media/lucan.470f44d513965c005d31.png",
        Sn = n.p + "static/media/sudokusolver.f7922ef0a395006563e4.png",
        Cn = function () {
          var e = [
            {
              title: "Online Sudoku Solver",
              date: "December - 2022",
              description:
                "A website that solves 9x9 sudoku. A fun little side project.",
              platform: "Web App",
              websiteURI: "https://samssudokusolver.netlify.app",
              githubURI: "https://github.com/https-sam/sudokusolver",
              image: Sn,
            },
            {
              title: "KSAB",
              date: "May 2022 - Oct 2022",
              description:
                "A crossplatform Mobile application built for the Kuwait association at CU Boulder. Re-designed the whole UI / UX, migrated the existing features & the database, and implemented: fully functional chat system, events page, explore page, profile page, tutors page & improving the overall loading time by ~30% by caching some heavy data. Also designed and implemented a website for the app for users to be able to review tutors & a tutor sign up form.",
              platform: "Mobie / Web App",
              websiteURI: "https://kuwaitcu.netlify.app",
              githubURI: "",
              image: kn,
            },
            {
              title: "Algo Visualizer",
              date: "July 2022",
              description:
                "An interactive website that visualizes sorting algorithms. Built with React.js. The website is now used in CSCI 3104 (Algorithms) to demonstrate sorting algorithms. Features 6 different sorting algorithms that can be animated & configured as you like.",
              platform: "Web App",
              websiteURI: "https://algovisualizers.netlify.app",
              githubURI: "https://github.com/https-sam/algorithm-visualizer",
              image: An,
            },
            {
              title: "Interactive Showcase Website",
              date: "March 2022 - May 2022",
              description:
                "A website built for my client, designed to bring improvements to his books by allowing users to leave suggestions for any line of the books. Designed and implemented CMS (Content Management System) with Javascript from scratch, allowing the admin to edit of the contents of the website at any time.",
              platform: "Web App",
              websiteURI: "https://www.lucantranslation.com/book1",
              githubURI: "",
              image: En,
            },
          ];
          return (0, Ve.jsxs)("div", {
            className: " dark:bg-gray-800",
            id: "section-projects",
            children: [
              (0, Ve.jsxs)("div", {
                className:
                  "w-screen flex relative flex-col bg-white dark:bg-gray-800",
                children: [
                  (0, Ve.jsx)("h1", {
                    className:
                      "font-wideTitle text-[8vw] mb-5 ml-5 mt-10 md:text-[3.5rem] xl:text-[4rem] tracking-[2px] md:tracking-[4px] text-gray-800 lg:text-white dark:text-gray-200 z-10 select-none",
                    children: "Projects",
                  }),
                  (0, Ve.jsx)("div", {
                    className:
                      "hidden lg:block w-[30%] h-full bg-gray-600 absolute left-0",
                  }),
                  e.map(function (e, t) {
                    return (0, Ve.jsx)(xn, at({}, e), t);
                  }),
                ],
              }),
              (0, Ve.jsx)("div", {
                className: "grid place-items-center mt-10",
                children: (0, Ve.jsxs)("a", {
                  rel: "noreferrer",
                  target: "_blank",
                  href: Je,
                  className:
                    "bg-gray-600 shadow-md hover:shadow-xl dark:bg-gray-100 w-fit z-[1] rounded-[7px] px-4 py-2 cursor-pointer flex items-center gap-3 text-white dark:text-gray-800 font-Poppins transition duration-700 ease-in-out hover:-translate-y-1",
                  children: ["See More", (0, Ve.jsx)(Fe, {})],
                }),
              }),
            ],
          });
        },
        Pn = n.p + "static/media/node.55746a52ebe93450f209.png",
        jn = n.p + "static/media/typescript.01020bf72a8c4f1a889d.png",
        Nn = n.p + "static/media/mongo.25e861b553bfa699bbda.png",
        zn = n.p + "static/media/express.cca64e0f360897258ecb.png",
        On =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAC5VBMVEUAAADw2lPv3E/v3E7w20/u2U/YxkvKuUnMu0nXxUrax0zjz03o1E7fzEzGtkmtoUSVikB8dTxkYDhLSTU2NjEyMzBEQzJSTzVfWzhuaTqEez2bkEGxpEXIuEnj0Ey1pkWckUFrZTo5OjFlXziEfD2mmUPQvknu2U7LuknQv0qPhT9ZVjY0NTE8PDFmYTmRhz/EtUg0NTBPTDXAsEd6czxAPzI/PzJxajqom0OLgj5HRjQ3NzFrZjqsn0Ts2E6uoUVaVjc9PTKDej0zNDCXjUBHRTRhXDi5q0ZOTDTgzUyGfT46OjHv2k/Ds0eekkJCQTNybDtXVDZNSzTm0k6BeT3Vw0u3qEVFRDNMSjSHfj59djzq1k/byUteWjdbVzfey027rEZBQDLMvEmqnUQ1NTA7OzK/r0eek0I4ODG0pUWJgD6wokTt2U9LSDSIgD6ilkLIuEhKSDTEs0c4ODDSwUvr105DQjNGRTPZxkvn001SUDZTUTZJSDRvaTrq1k6hlUKYjkA4OTFYVTbiz01IRzOZjkHq1U7WxEteWTddWTeflELp1E5iXjikl0JxazpsZjndy0w+PjKTiUC3qUVQTTTFtUiil0N0bTpFQzPCskh4cDuqnETk0E2TikCUikCOhD/TwkrUwktgXDfl0U1qZDleWzhjXzjNvElcWDaAeD2lmENaVjbcyUxhXTjJuEmxo0VtZzndykzXxkuQhj95cjzhzk29rkd2bzt+dz1taDrHt0hpYzlnYjk/PjN4cjutoETbyEuAdzymmkOLgT/OvEp4cTuXjEGypUWSiEC6q0fPvUlwaTrRwEpWUjZ1bjujmEK8rUZpZDmHfz6PhD++rkd1bTu9r0ebj0FoYziCej2voUSglEJUUjWdkUGpnEN3cDtlYDjEtEiRh0C5qkanm0OFfT5WUzbBsUd/dj21p0aKgD98dDxRTjWrnkOMgz62qEaajkFzbTt7czyNhD9VUjbBskeqnkQwnTqOAAAABHRSTlMAIl5fV7bIqwAAFvFJREFUeNrtnXlgldWZxtX5EkEWFfhYgoCEssoWNKCAEXrDHpAdHKWCJIIQFFmCUcomAhqggIhCo6KALGJZFIqUTUFEqzjWqY7aTm1nKmN1Wp1O5++5CREI5N573rPc77s+z+//vOe97/nl3m855z2XXUYIIYQQQkC5/AoCx+UXCHCFR+C4ggJgQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAQInLf3KMqpVv6pGzeSPTgGCo1btq6+5tk7dev556tVv0LBRRuPrmjRNVhIUIABqNbs+o3mDTD8e9Vv8qGWr1u5zwRKgzZUS2rpIIa12uxva+4p06Nipc5rbkmAJkKVa+XK6WB+/9Y03ZYtSiNK12801HJYESwDlfz0nArS9pbt09s/So+etzi4PKUCSBMi5rZfe7J+l94+d/CChCRAJSoAauX1Mpr+cvv1clIQCxKa/rWEHDBxkPP1l3NAsz3pJsASQ1duSADVze1uZ/nIFBtsuCQVwLEDOkNutTX+UyNCr7JaEArgVoM0wm9NfRmau1cdDUALkyUo93HjAESNl9x1qNBxlsSYUwKEAo8c4mP4oHW6zVxMKEJuxZqPl3CG76ZDwz3faqgmUAK2TKcBd45xNf5Sf3G2pJhTAkQDjJ7icf9/vfo+dmkAJkCarcV2DoSbmu51/3y+410pNKIATASa5uPq/iMn32agJBXAgQN4U99Mfpd5UCzWBEqBQVuBpuuPcn5T5jxow2rwmFMC+AA8kaf59v8d445pACZCTFAGuS8Lv//cUTDetCQWIzYNag8yYmbz59/0JswxrAiXA7CQIkF6UzPn3/TkPmdWEAtgVoPjh5M6/7z9itlyQAsRmrsYQP032/Pv+UKNlQlACzHMuwPzkz7/vLzCpCQWwKUCrhUEIkGXyUBhKgDsdC5C2KIj5j14IPqpfEwoQm8XS+I8FM/++30i/JhTAngDVM2XxLXKzdk2gBFgiq2p3Yfhugc2/X7BUtyYUwJoAtd2tAEvMMt2lwhQgNn1k0R8PcP59/wnNmkAJUCKrqewbYHyg8+9nav4IQAlQU1ZT2TdAw2AF8JfrPRCkALGZI4k9OOD59/0VWjWhAJYEWBn0/Ps/06oJlADF7gRYVU8W2zqrh+jdB1CA2IwRhF4T8PwP1d0oQgHsCNDfZPbqDe/V4mct6jyivZak+5PaNaEAVgRooj35azOuHlV4LsGn1j0tt6B9RrF+TShAbJ5RjzxQb/brt7u09VPe+g2yl8qP1DapCQWwIsBYnelf/PPZVUcrfXa1cpCZz+UY1QRKgBGuBJilMf09no2zxbvG84rfAn03GtaEAsSmvnLgxvL5X1stfsgXXlQI0rWlcdswKAE2uRJgs3j+tyRs/5o3P+EGg5UWmgRQAAsCtFb/ya7gpSUKYafPiRujj4WdgRQgHkWqcbdK579BqVLcVdtih4hsH2GlJlAClDoSYIdw/heqXrkVx7wQ6GKrYySUADUcCTBSKMBjyhmXvFRlgPwMa93DKYAFAbbI4tYtVA3seTVfriLAMEv9gcqgABYEEF4DrpPkvPOZi/984QKBQAmBEqCpGwEelYXtIOvxV/uiu8FXbPYJpQDxuF0x7C9kYZ8WZv3EhX/ce4fljvEUwFyAXbKw0j6vrfue/9vde2zXBEoA4Xe1qgCTZGHF/d73FlT8ZdFE+zWhALGZoBj2VVHUbHneC8r/MPKai9MkoQTY50aA7aKodeR5L+kT/btp+53UhAKYC/BLUdRuGomv8NsfMFj1Ew8KYP5lLWsLI70JKKPw9YOuagIlwAA3AvxKFHVD0FWoDAUwF6CFKGrPoKtQGSgBarkR4JAo6sNBV6EyFCA2hxXDytYDDbJ/+KMJFMBcgEaysLYOe7EDBTAX4IgsrP4uHhdQgNh0VQybIQt7S9BlqASUAHe7EUD2KNjfEnQZKkEBYqP6EyA8IGKytTP/bEABzAUYLQvrW1nObQsoAVbJJkr1OUA1oQCLwnQjSAHMBRAuNfT9o0EX4gKgBNgjmyfVt4GedEv/6mNBV+I8FMCCAH1lcX2/jtmWbptQAAsCvCEVwL826FKcA0qAnY4EeFMsgH886Fp8DwWIjeqiUPnm0Cgjdbs7WwZKgLscCVCoc1BAz01Bl6McCmBBAOGSkAq6nAi6HmVACXBMNkPKewO953QE8Ot1Sgu6IhTAjgBPaQng+y8bdXizApQAV7kSIG2CpgGRleJ9QpahADYE8N7SFMD3C04G+3KQAlgR4G1tAaLD5JYEWBMKYEWAmgUGBvhFCxxt+1EASoCHZPOi3ifQ8zaYCOD72acGBFQTKAHSZbMi6BXsvWMmgO9P3vBuIDWhAHYESOtuaoAf6fhOACtFKIAdAbxnjQWIMnyItfZvqkAJsFc2HZITQ7wBk20Y4HfISE9uTSiAJQFMLwPPkfVrW01AlYASoLpLAd5rb8kA339/hUovaTtQgNiIzg30vN3WBPD9ouN3JakmFMCaAG3sfQVE6fFLZ01BKgElwFKnAninbQoQZVEyfgkoQGyEx8d76XZuBC6g6PhDrmtCAewJ4E2xLYDv53eb7rYmUAKMcixAyVz7Bvj+uNEuHxBSAIsCGL0VjsOwqe7WjlGA2HSXj9DNjQH+8A9my5NRAkqAF2RVXywfYV99Rwb43VfYPCbiPBTAqgDe6IgrA/z+R13sJYESYKN7Abz7nQng+w122b8cpACWBSjc4tAA/+XOtmtCAWIzV2uQVYtdGhA5bfklAQWwLYDXVnyQrIjM41ZXkFIA6wJ4/9LDqQH+3Oss1gRKgFmyQj+oO06zfLcG+B/a6zFDARwI4B3NcmxA7w9s3Q9ACfCerMrT9EdqNlM2lJxxs+zUhAI4EcDbX+DagIWTrHwJUAA3AnjVzDcKJKLnPgs1gRKgrazAdY0G2/eKcwOKxpvXhAK4EsCb/Rt37wUqyPrI+D0xBYjNWNPx/nWOawP8jqWGOVIAhwJ4pb91bkD/WWYpQgnQKtkCeN6urq4N6PqxUYIUwK0AXnpD1wbk7zDJjwLEZriVQdNyra8Wv4jIJwbpQQnwbhACeN6of3NsgEnnYQoQm/7WBh7tdI1AlE+1nwpSgGQI4BXf4fgF4UDdzKAEOBGYANHrD8e/A7maeUEJIPwG6GJ39M7jXAoQeVMvKygBhA+CLAvg5X023KEB+Xqn0UEJIHwbaFsAz8v5vI87Awra6qQEJYBwTaB9ATxv9kR33wJdRmgkRAGSK0D0W2BiF1cG7Na4GYQSQNgfwI0Anlc48XeODLhengyUAMIeQWvdZTJjpZNlo5PllwFQAgibRa91mcusAwsdGLBMvH8USgBhu3hXPwEVbBrSx74Bv5dmASWA8NxAwyVhiZn379YvBgZJu0pBCSA8PVx3a5iEjz+02l3Q9/8gTABKgLtltZT3CNJh6fHDNgVo30Y2PJQAtWS1FLWLN6B4xcMWDegoGxxKgH2yUqqfHGpK3v6e9n4JbhQNDSVAU1klDyczt+rHsy0JsFk0LpQApbJK9k5udjU/aGBFgMhGyahQAoyQVbIg6QnOaG5jM9EbkiGhBCiWFXJmACluPWLeXiRTcjA9lAAlskLWCyTJu36UaWrAzYLhKEBs2geU5oBOhm2mvhAMRgHiEMAxfmdp+vwgEwGy7lYfigLEwU13XiX2HDBZR/65+kAUIA6BHuw+63V9AZqrD0MB4hDkse5R+mmfP1GQozwIBYhDcIe6V+R7XHfd0B+Vx6AAcagRdMLeQc01xH9SHoECxMFGFy5DSjdrCfCh8gAUIA4Dgk44Sl6uznvCIuX4FCDkAnheM50GE3tUo1OA0Avg7dd4NvykanAKEIcQXAOU86T8odAC1dgUIAUE8H4vFuCAamgKkAoC5ImfCtZRDU0B4tA06ITPUUv6flD5rAMKEIdHg074PNcLU89SPWkUSgDhkrAQfQN4JUXC3FUXBkIJINwX4EuWVrnmeWHu/6EYF0qAvcIiqr9Tc4+ww5n/n4pxoQQQNonKDzrfStwuS76xYlgoAX4hq2EHw+HmWU1e2GSuk2JYKAHWy2pY32iw4k59atlM/jVZ8n9WDAslwHhZDU36A7SeGL1sf91m8tfIkr9JMSyUALtkNWygP9L6L8sjHLWY/FRZ8j9VDJuaAmiu1/5cVsMbdNN7aGhFhK477X3mfrLkDymGTUUBigdu1jPgVVkNX9RLr2a78+2fDtnbWnBGlvxmxbApKMCuOb4/X+sv/0tWQ8Hi6vPk3drnwhiTrH3s/bLkVa8/Uk6ApeVt17O1ntI2ktXwJo0hmjxeOUaPp2x98K9kya9UDJtiAuTkVpzKnKHz18tkNfyLeIBVBy5ZwFd/laWPPl+W/GnFsKklwP7+33++/BMafy7caPGYMPy8kwVVRFluaYPZFFnyRxTDppIAe56+4AP2kh+aWiJcX/tzWfj76tr6IqmSL2TJq35Fpo4AaZM6VPqE8surarIS+vdKgr/7UqwwEStPAwqFS0KeU4ybMgIc/PKiT1hwTBriTaEAL6iH3rc9ziauev0sfH7hY2xf9TTJFBGgNOPSAqvvfqnga1kJI8qbgwtXTIgbaeEM8wq8IRRA9QCZlBAgb2KV62F2CcNMk5VQeXfN+G8SherayrQExdJFgQcVA6eCAG1frPozTlDe/lLOPcISNlQLu7G5QqwxowxrcFKYvPKK5vALUNIp5taovqI7AeFzQLWl9cWd1DZuFW01KoJ4VbByl9PQC/BVvJt31VUPZeyUHtCgcP5K6x3KazUPq2/Zr4KVwtxVv75CL0B6z7gfMyK4DHhLWsN3EoZc/6Ug3OT/1i9DY2nuP5CdQTknE22LXDhdNVYT8S7rRK22zr30VSRyv+4i0xvlewNV7wJDLcAZhd65h6upxSoW9+FdHD/ghS99VdkmPc7jLPd2EI/kv6saPLwC1Nqg1Dc3W+3q6rS4hL+OF+6il76qdPhAY33AdRr9ATooHx4VVgFaP9BV9bMm/q32vL/Ka5gbJ9x7j8vjnWW59GC32R/pNIpSX40YUgHa9FL/sFlDEkXLE75JK6dznIAb9U/9y98uWit84n2tUVoqDxBKATZlyAq8Of479xq7NUrYO+5b3N9qC+D7mQOVlwgcG6nXOzyivgghjAJc/Yz0A2dPjPObN/pBnRrujptiW6MTXib/obZKHUZ9qtMdqIyfqBc7fAJsbKHzkYfFene7vo5eDRO025VfVFbmkZPp8QcY0XKL/uERgjOEwybAkna61m87dfCSJ8Ppk3RPZowkuGM7ZtzUP7Loo9oxHmUX1n62r8m5Ee0Fq9HDJsCfTWq6evnIB85s3FPW4bV41Jl1XxucwdMrUaLCJeZVU9DxVLPOe8+3JM7ZOf1v3x4ZNtMwbF9BwcMmQPV6VgprHOHbRInW1LqyiJFu1wfrvt+/bpHqnW8i1qWwAN52e3U1IJKeMNGPbZzv5ISFktY2oRNglfGPqw1eUsj0QNBJxmKkpN6hE8D7S9D1K0PlLeMIzU7ermkvWMsYRgFKpe2QHPCM0nu7Nro3LG6RbUoPnwDexKAr6Pvt1DIVbtZJErKVJyEUIK9h0CUcpNol+tqgM60CyZlx4RTAa2vlVtCA+1UzzdF6aumULOWVAOEVQLoNzjaZ6u/ranQJesIv5lNhrUMpwJ12jtHWZaAg1VHZQc94ZbpK29uGUgDvHvMTlPXpIDonYn2QqV6K4MjIMAvg5QZYwzWyVG8N0xPBL8RLzkIqQOvg7gT6SE8L/DboWT9PtrwpVUgF8FaNCaqIb4tzHRj0vJ9jqrzQYRXAGxzQveCv5Km2/i7oia/gfzTqHFoBpE39LLH6Ko1UZwu7dzhinM5h1+EVIJjHbLdppTpCb+2uXaZptSYOsQDzlie/iKqtlS6mlmSXoBtWv6eVeYgF8IpvSHYRv1yim+umLQHP/0JRR6PUEMDbtza5Rczeq59ryaFg5/9jzbxDLYB3bHEyi5jZ2STX2UcCnP9Mzf//sAvgLRX29TEh62+GyQ6R7+K2xKAz2kmHXABvT9LeC2UZNHCo4N4J5mnoMKaJfs5hF8B7VLBNNOD597z0bUHM/yKTUwlCL4BXnJSnLJM/s5Js4ZrkP8BcWWKScfgF8Ap/476IvbUvoi6mSZKXiPTINTuTIgUE8LyrXe8VmCZcRxWPkinJ/BLocqVhuikhgLfV7c1AHbunRLd9JWnzf6CmabKpIYA3QtjnV0JWO0sd/c+Rd1Tc4UCL4Ra6UKeIAJ7Xb46jKs4d7CDbmtfY2ugZm4VrdN7+XUzKCOCVHnGx9iqyfYSjdP9e4Hb+X0+8f1WF1BHA8/5o/5FAg/Xu0q11XNrgV8AXSk1mFEglAaK/rRY35UcZ01J+7oyE4iGOLl5fsfezlVICeF7Om2OtVbFgjfEldELSdi23/sOV383mVUuKCeB5hRP/10oZB2VYPds7NtU/6mNz+if8VXxUTlxSToAog4caP2qZ+21p8vJN6/eWpauB/A+P2rjyv5BUFMDzVn2i2/2rnIZvu/3tv5TZ/b7ONp7+bU+I9iypkZoCRDlxPOFJPVWz9lVpu147FM549XH9DrMFu1fY/er/npQVIMqoT+pIW7b3f/5EkBmX3pfRS/7zNXnZlP3zXKWUygJEmfePP9VR/H2duS3j/2YFnW+UOztf/10DVQsi03bnzrD9s1+JFBegnKVTb2n0TZxNugW/G3pqV1vd4zqcMLvVZ+2eXjYmzi3ioAabM3YclO5TlPNDEKCcwqXrb2088EijOovG1i3jm0XLDp3OODV/9NYaQacWm3mj/jF13TV3vLayeYsWixYt2tKiRc/vtv/9k5u/ulL11DdjfjACED0oADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAuVCAy/+JwHH5ZYQQQgghBJT/B+VAz83EUzqxAAAAAElFTkSuQmCC",
        Ln = n.p + "static/media/react.283bf42c605cfc49cf49.png",
        Bn = n.p + "static/media/next.48ddc8121a0fcb543d64.png",
        Dn = n.p + "static/media/flutter.2e31d94a009e134a4804.png",
        Tn = n.p + "static/media/rnative.81ed438b18e24116794d.png",
        Fn = n.p + "static/media/dart.de5f812a3d3884a6a4e8.png",
        In = n.p + "static/media/firebase.6ea3b0b39b97b0e49515.png",
        Un = n.p + "static/media/aws.3a5e158692fe819a37c7.png",
        Mn = n.p + "static/media/linux.2471a7083a54eca9f12a.png",
        Rn = n.p + "static/media/docker.1d3ff0b1550659e3203a.png",
        _n = n.p + "static/media/figma.72fbc535ebe253a5dbc4.png",
        Qn = n.p + "static/media/sql.01ca72463c71a46118f8.png",
        Hn = function (e) {
          var t = e.title,
            n = e.titleIcon,
            r = e.description,
            a = e.category,
            l = e.items;
          return (0, Ve.jsxs)("div", {
            className:
              "flex flex-col items-center justify-start gap-5 max-w-[30rem] bg-[#ffffff52] dark:bg-darkGray border-[1px] dark:border-none shadow-sm dark:shadow-shadowDownward rounded-[15px] p-4 py-8",
            children: [
              (0, Ve.jsx)("div", {
                className: "".concat(
                  "Backend" === t
                    ? "bg-yellow-500"
                    : "Frontend" === t
                    ? "bg-blue-600"
                    : "bg-green-500",
                  " hover:bg-purple-500 w-fit p-3 rounded-full z-[10] transition-all duration-400 ease-in-out"
                ),
                children: n,
              }),
              (0, Ve.jsx)("p", {
                className:
                  "font-semibold text-xl text-gray-700 dark:text-gray-100",
                children: t,
              }),
              (0, Ve.jsx)("p", {
                className:
                  "text-gray-700 dark:text-gray-100 font-Poppins text-center px-3",
                children: r,
              }),
              (0, Ve.jsxs)("div", {
                className:
                  "dark:border-[1px] dark:border-gray-700 relative w-[20rem] items-center h-fit flex-1 rounded-xl flex flex-col justify-around pr-5 py-4 pt-7 mt-8",
                children: [
                  (0, Ve.jsx)("p", {
                    className:
                      "bg-white dark:bg-darkGray font-semibold text-purple-500 absolute -top-4 ml-auto mr-auto left-0 right-0 w-fit px-3 text-[1.1rem]",
                    children: a,
                  }),
                  l.map(function (e, t) {
                    return (0,
                    Ve.jsxs)("div", { className: "flex gap-4 items-center mb-3 w-[10rem]", children: [(0, Ve.jsx)("img", { src: e.icon, className: "w-[40px] hover:-translate-y-1 transltion duration-300 ease-linear", alt: "skill icon" }), (0, Ve.jsx)("p", { className: "text-gray-700 dark:text-gray-100 font-Poppins ", children: e.name })] }, t);
                  }),
                ],
              }),
            ],
          });
        },
        Vn = function () {
          var e = [
            {
              title: "Backend",
              titleIcon: (0, Ve.jsx)(Qe, {
                className: "w-[1.5rem] h-[1.5rem] text-white",
              }),
              description:
                "I build reliable and scalable backend servers. Security is my main focus.",
              categoty: "Languages / Frameworks",
              items: [
                { name: "Node.js", icon: Pn },
                { name: "Express.js", icon: zn },
                { name: "Mongo DB", icon: Nn },
                { name: "SQL", icon: Qn },
                { name: "Firebase", icon: In },
                { name: "Javascript", icon: On },
                { name: "TypeScript", icon: jn },
              ],
            },
            {
              title: "Frontend",
              titleIcon: (0, Ve.jsx)(Ue, {
                className: "w-[1.5rem] h-[1.5rem] text-white",
              }),
              description:
                "I am passionate about UI / UX design. I create accesible, intuitive, and beatiful user interfaces.",
              categoty: "Languages / Frameworks",
              items: [
                { name: "React.js", icon: Ln },
                { name: "Next.js", icon: Bn },
                { name: "Flutter", icon: Dn },
                { name: "React Native", icon: Tn },
                { name: "TypeScript", icon: jn },
                { name: "Javascript", icon: On },
                { name: "Dart", icon: Fn },
              ],
            },
            {
              title: "Technology",
              titleIcon: (0, Ve.jsx)(Ie, {
                className: "w-[1.5rem] h-[1.5rem] text-white",
              }),
              description:
                "Technology / environment I am very confortable with.",
              categoty: "Tools / Environment",
              items: [
                {
                  name: "Git",
                  icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAX8AAAF/CAMAAACWmjlVAAAAM1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACjBUbJAAAAEHRSTlMA8DAQ0KDAQGCA4CCQUHCw+BUOAQAACLtJREFUeAHs0YNhRQEAwMBv4+0/bW0zxWWE3Oi3tl8vNsN548VuPx19Y1rOx8PdjntXvqvVZnikzcqZ72iyGJ5otnTny1sPz7Tz52ubHodnm009+sr9s+GFZluXkv1XjSc+BfsBBPsBBPsBZPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBtPt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7AP8BAAAgAAAEAIAABAEAIAAABACAAAD4N38BpPtncwBNV28BpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsB1PsB9PsB9PsB9PsB9Ps/DnDC3n0gWYoDURR9QgaE+7n/1c6Eb28yWnGJRG8FXed28W2J1s7ee21lBvDx+wOkun1ps96fGcDB7wjws+WtAAHC8fsDSGsLEIDn9wfQWgIE4Pn9AdRngC/4gQDLHiAAz29W5+HdJL8/gGqgAH7+GQDlRwMUOADPzwbIOxqA56cDLAYG4Pn5ADcZgOfnAxQwAM/PB1gNDMDz8wEaGIDn5wOsBgSIyG92ybMGBAjJn7I824wLwPPzDwDZgAAB+e2Sbx8gQEB+y9xrMD4Az1/k3GJAgHD8dso7AwKE47cu7woQIBy/rfKuGReA5+f9TwMCROO3Rd51AwJE4zdx/nwAnt8y588H4PltBf39AXh+3v9jQIBo/LZxzz/5ADy/dXmXDAgQjd8+cu4wAwJE47ck5y7jAvD8/AuwakCAePx2y7fduAA8P/8BQDIuAM/PX4AWIEBEfquaAUB+s2MGIPmtagYA+c2WGYDkt6YZAOQ3u2cAkt9smQFIfkt5BgD5zcoMwPDPADz/DMDzm+1LgAA0/3wayvP7144IAXh+/84cIADP71+qOUAAnt+/VXED+Pl5/yVAAD8/79+2AAH8/Ly/RQjg5+f9IwTw8/P+EQL4+Xn/CAH8/Lx/hAB+ft4/QgA/P+8fIYCfn/ePEMDPz/tHCODn5/0jBPDz8/4RAvj5ef8IAfz8vH+EAH5+3j9CAD8/7x8hgJ+f948QwM/P+wcIkIsF8H9iAIAf8H9wAIAf8H9wAIAf8PcFKLVv6/+7+tmAAAP4AX9ngHau+mrruQMBcrGI/rbJsaUOCQDwo/7+ADrOEQEAftbfH0BHGxAA4If9/QG0pQEBAH7Y3x9gKQMCAPywvz9AbgMCAPyAvyMAcDtbgB/wf1gAgB/w9wcY7JOOEef08v6jAqSRf8vcLYz/qADrwBN1FovjPyzAOe5Y5RbIf1iAvI86UWezQP7jAmyjrkB7JP+BAfYx91VcLZK/IwD8C1Df55/k2phHgPQ+//qUp0BVuux9/stTbueZpP4+/yQ95wLU3uf/eczbcHZrf5//LT3lJUCVvc9/1XPeBHqjf37O/ZzTG/31HH97of8u8n5607+F8/dv+ifjNv3LgKSBr//F/vGaTuM2n/+cuozbfP6/KRu3+fr3kD6v8+9y7h5xY8vLqM33P+9Xfv6eHnM78/zG75+YXXJtGXRXxTI//2UuP4fjYT2Cf8qP+A7u6fhgP4S/3U/49GvPjtfVMfx3ObaP+yFyeZe/df7J/+04giKMf8r01b9KQADa3/8a7DOAHwjA+vu/g3sN4AcD8P5pAW+cVCU2AO9vJWN//1gdkcP5W8kcPx+A97eSOX4+AO9vJXP8fADe39JKPPQCAWh//wvhbsP4+QC8v5VVv9haRvLzAXh/s/bTAsfHBvPzAXh/s7bpB7uaAfxAANzfLNXt0BfLV00G8AMBUP8vt7fe73W9e2+7mQH8QADAH1qVuADTv0pcgOlfJS7A9K8SF2D6V4kLMP2rxAWY/lXiAkz/KnEBpn+VuADTv0pcgOlfJS7A9K8SF2D6V4kLMP2rxAWY/lXiAkz/KnEBpn+VuADTv0pcgOlfJS7A9K8SF2D6V4kLMP2rxAWY/lUKHWDv2eEP8IcMkLrk+MImwB8ywCfrV1t3nj9wgHTpN8snzR84QDkcd0wG+IMGaNn7L+T5+QDxv79dpcABmuNfCPBHDVAydlInz88HSAt3Wg/Pzwe4gKPKaX4+gP+8niMB/GEDpEN/uw7whw3QkfPyeH4+gP/Azg3gDxrglGcJ4I8Z4JBnHeAPGaDItQPgDxnglm8F4I8Y4JBvJ8AfMMAu51aAP2CAj7wD+AMG6PJuB/jjBbjkXQP44wVY5d0J8vMBeP8O8McLIMSf5+cD8P48Px9gAf15fj7A6vcH+fkAvH8D+OMF6PKugPx8AP7njcDPByhybgH4IwbI8u0G+CMG2OTbh+PnA/A/dA7CzwfI8mwD+fkA/AWoAPwxA+xybAX5+QD8L0AD+KMG2DP435/n5wN08rNfnp8PsIBvffL8fICSwasPz88HqOBfv1RpBujs/XpngO3p/DPA5OcfAw6AP1wA/wkcVxrHPwOky3H8D8AfNoC1Qz/fto/mnwGsHg59gD9sAGtb1rc7+m6T3xHAt09fv7C/zmI2+V0B/Ev/tUcXBw5AARBCiUzc+q927bTufyJQAm/x1OlfCgjQKyCA+8cDuF+AgADuHw/gfgECArh/PID7BQgI4P7xAO4XICCA+8cDuF+AgADuHw/gfgECArh/PID7BQjcKID7BQgIcKP7BQgIcKP7BQgIcKP7BQjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjfzLZz91ebza9ivwChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmADhPxNgcfqwA/+brU/vt1ny39l0cXqn3YwB2fJNgWwZlE0zOT1rfpgxNAkOWTwizBe71ZYL7Q7H02m600+YOAAAAABJRU5ErkJggg==",
                },
                { name: "AWS", icon: Un },
                { name: "Unix", icon: Mn },
                { name: "Docker", icon: Rn },
                { name: "Figma", icon: _n },
              ],
            },
          ];
          return (0, Ve.jsxs)("div", {
            className: "pb-20",
            children: [
              (0, Ve.jsx)("h1", {
                className:
                  "font-wideTitle text-[8vw] mb-5 ml-8 md:ml-20 mt-10 md:text-[3.5rem] xl:text-[4rem] tracking-[2px] md:tracking-[4px] text-gray-800 dark:text-gray-200 z-10 select-none",
                id: "section-skills",
                children: "Skills",
              }),
              (0, Ve.jsx)("div", {
                className:
                  "flex gap-10 justify-center flex-wrap bg-white dark:bg-transparent mx-2 md:mx-10 py-10 rounded-[15px]  dark:border-none  dark:shadow-none",
                children: e.map(function (e, t) {
                  return (0,
                  Ve.jsx)(Hn, { title: e.title, titleIcon: e.titleIcon, description: e.description, category: e.categoty, items: e.items }, t);
                }),
              }),
            ],
          });
        },
        Wn = function (e) {
          var t = e.toggleTheme,
            n = e.theme;
          return (0, Ve.jsxs)("div", {
            className: "bg-white dark:bg-gray-800 relative ".concat(
              "dark" === n && "grid-background"
            ),
            children: [
              (0, Ve.jsxs)("div", {
                className:
                  "flex lg:px-10 flex-col lg:flex-row w-screen flex-wrap justify-center items-center pt-[5rem] lg:pt-13 mb-[4rem] md:mb-[8rem]",
                id: "section-about",
                children: [
                  (0, Ve.jsxs)("div", {
                    className:
                      "w-full lg:w-[70%] text-[10vw] lg:text-[6rem] text-center select-none mb-[3rem] px-1",
                    children: [
                      (0, Ve.jsx)("p", {
                        className:
                          "font-wideTitle text-[10vw] lg:text-[5.5rem] tracking-[10px] -mb-[.3em] text-black dark:text-gray-200",
                        children: "A CREATIVE",
                      }),
                      (0, Ve.jsxs)("div", {
                        className: "flex items-center gap-[10px] -mb-[.3em]",
                        children: [
                          (0, Ve.jsx)("span", {
                            className:
                              "font-wideTitle text-[10vw] lg:text-[5.5rem] text-black dark:text-gray-200",
                            children: "S",
                          }),
                          (0, Ve.jsx)(hn.JPR, {
                            className:
                              "text-green-600 animate-pulse z-[1] h-[5rem] inline cursor-pointer hover:text-purple-600",
                            onClick: t,
                          }),
                          (0, Ve.jsx)("span", {
                            className:
                              "font-wideTitle text-[10vw] lg:text-[5.5rem] tracking-[10px] text-black dark:text-gray-200",
                            children: "TFWARE",
                          }),
                        ],
                      }),
                      (0, Ve.jsx)("p", {
                        className:
                          "font-wideTitle text-[10vw] lg:text-[5.5rem] tracking-[10px] text-black dark:text-gray-200",
                        children: "DEVELOPER",
                      }),
                    ],
                  }),
                  (0, Ve.jsx)("div", {
                    className:
                      "flex items-center justify-center w-[50%] lg:w-[30%] select-none",
                    children: (0, Ve.jsx)("img", {
                      src: mn,
                      className:
                        "w-full hover:scale-[1.05] transition duration-300 ease-in-out z-[1]",
                      alt: "my avatar",
                    }),
                  }),
                  (0, Ve.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                      (0, Ve.jsxs)("div", {
                        className: "h-fit w-fit z-10 mb-[3rem] group",
                        children: [
                          (0, Ve.jsx)("div", {
                            id: "intro-shadow",
                            className:
                              "h-[4rem] -translate-x-3 group-hover:translate-y-0 group-hover:translate-x-0 translate-y-4 w-[0rem] md:w-[51.7rem] bg-gray-300 dark:bg-gray-900 absolute rounded-[5px] transition-transform duration-[1000ms] ease-in-out",
                          }),
                          (0, Ve.jsx)("div", {
                            id: "intro-container",
                            className:
                              "rounded-[5px] p-5 bg-gray-100 peer dark:bg-gray-700 relative hover:cursor-pointer shadow-lg group-hover:shadow-none transition-shadow duration-[1000ms]",
                            children: (0, Ve.jsxs)("p", {
                              className:
                                "text-gray-700 dark:text-gray-200 fon t-Poppins text-lg md:text-xl font-semibold px-3",
                              children: [
                                '"Hi, my name is ',
                                (0, Ve.jsx)("span", {
                                  className: "text-green-500",
                                  children: "Sam Goto",
                                }),
                                " ",
                                "and I'm a full stack software engineer & UI / UX designer\"",
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, Ve.jsxs)("div", {
                        className:
                          "flex flex-1 justify-center gap-[3rem] z-[1]",
                        children: [
                          (0, Ve.jsx)("a", {
                            href: Je,
                            rel: "noreferrer",
                            target: "_blank",
                            children: (0, Ve.jsx)(hn.JOq, {
                              className:
                                "w-[2rem] h-[2rem] text-gray-300 cursor-pointer hover:text-gray-500 dark:hover:text-gray-400",
                            }),
                          }),
                          (0, Ve.jsx)("a", {
                            href: Ye,
                            target: "_blank",
                            rel: "noreferrer",
                            children: (0, Ve.jsx)(hn.gXb, {
                              className:
                                "w-[2rem] h-[2rem] text-gray-300 cursor-pointer hover:text-gray-500 dark:hover:text-gray-400",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Ve.jsx)(Cn, {}),
              (0, Ve.jsx)(Vn, {}),
            ],
          });
        };
      var Kn = function () {
        var e = i(
            (0, t.useState)(function () {
              return "undefined" !== typeof localStorage &&
                localStorage.getItem("theme")
                ? localStorage.getItem("theme")
                : window.matchMedia &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
            }),
            2
          ),
          n = e[0],
          r = e[1];
        (0, t.useEffect)(function () {
          var e = document.documentElement;
          "light" === n ? e.classList.remove("dark") : e.classList.add("dark");
        });
        var a = function () {
          var e = "light" === n ? "dark" : "light";
          localStorage.setItem("theme", e), r(e);
        };
        return (0, Ve.jsx)(Le, {
          children: (0, Ve.jsxs)(Ne, {
            children: [
              (0, Ve.jsx)(Pe, {
                path: "/",
                element: (0, Ve.jsxs)(Ve.Fragment, {
                  children: [
                    (0, Ve.jsx)(We, { toggleTheme: a, theme: n }),
                    (0, Ve.jsx)(Wn, { toggleTheme: a, theme: n }),
                  ],
                }),
              }),
              (0, Ve.jsx)(Pe, {
                path: "/contact",
                element: (0, Ve.jsxs)("div", {
                  children: [
                    (0, Ve.jsx)(We, { toggleTheme: a, theme: n }),
                    (0, Ve.jsx)(dn, {}),
                  ],
                }),
              }),
            ],
          }),
        });
      };
      a.createRoot(document.getElementById("sam-mount-point")).render(
        (0, Ve.jsx)(t.StrictMode, { children: (0, Ve.jsx)(Kn, {}) })
      );
    })();
})();
//# sourceMappingURL=main.8155ad12.js.map

