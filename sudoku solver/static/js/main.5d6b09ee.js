/*! For license information please see main.5d6b09ee.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      463: function (e, t, n) {
        var r = n(791),
          a = n(296);
        function o(e) {
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
        var l = new Set(),
          i = {};
        function u(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var s = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          v = {};
        function h(e, t, n, r, a, o, l) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = l);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new h(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new h(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new h(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new h(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new h(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new h(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = m.hasOwnProperty(t) ? m[t] : null;
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
                    !!f.call(v, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (v[e] = !0) : ((p[e] = !0), !1)))
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
            m[t] = new h(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              m[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            m[t] = new h(
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
            m[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new h(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          P = Symbol.for("react.provider"),
          N = Symbol.for("react.context"),
          _ = Symbol.for("react.forward_ref"),
          T = Symbol.for("react.suspense"),
          O = Symbol.for("react.suspense_list"),
          j = Symbol.for("react.memo"),
          L = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var R = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var F = Symbol.iterator;
        function z(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (F && e[F]) || e["@@iterator"])
            ? e
            : null;
        }
        var M,
          I = Object.assign;
        function D(e) {
          if (void 0 === M)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              M = (t && t[1]) || "";
            }
          return "\n" + M + e;
        }
        var A = !1;
        function U(e, t) {
          if (!e || A) return "";
          A = !0;
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
                } catch (c) {
                  var r = c;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (c) {
                  r = c;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (c) {
                r = c;
              }
              e();
            }
          } catch (c) {
            if (c && r && "string" === typeof c.stack) {
              for (
                var a = c.stack.split("\n"),
                  o = r.stack.split("\n"),
                  l = a.length - 1,
                  i = o.length - 1;
                1 <= l && 0 <= i && a[l] !== o[i];

              )
                i--;
              for (; 1 <= l && 0 <= i; l--, i--)
                if (a[l] !== o[i]) {
                  if (1 !== l || 1 !== i)
                    do {
                      if ((l--, 0 > --i || a[l] !== o[i])) {
                        var u = "\n" + a[l].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= l && 0 <= i);
                  break;
                }
            }
          } finally {
            (A = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? D(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return D(e.type);
            case 16:
              return D("Lazy");
            case 13:
              return D("Suspense");
            case 19:
              return D("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = U(e.type, !1));
            case 11:
              return (e = U(e.type.render, !1));
            case 1:
              return (e = U(e.type, !0));
            default:
              return "";
          }
        }
        function H(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case k:
              return "Portal";
            case C:
              return "Profiler";
            case E:
              return "StrictMode";
            case T:
              return "Suspense";
            case O:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case N:
                return (e.displayName || "Context") + ".Consumer";
              case P:
                return (e._context.displayName || "Context") + ".Provider";
              case _:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case j:
                return null !== (t = e.displayName || null)
                  ? t
                  : H(e.type) || "Memo";
              case L:
                (t = e._payload), (e = e._init);
                try {
                  return H(e(t));
                } catch (n) {}
            }
          return null;
        }
        function $(e) {
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
              return H(t);
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
        function W(e) {
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
        function V(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = V(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
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
            e && (r = V(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function K(e) {
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
        function G(e, t) {
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
          (n = W(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Z(e, t) {
          X(e, t);
          var n = W(t.value),
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
              ee(e, t.type, W(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
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
          ("number" === t && K(e.ownerDocument) === e) ||
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
            for (n = "" + W(n), t = null, a = 0; a < e.length; a++) {
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
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
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
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: W(n) };
        }
        function oe(e, t) {
          var n = W(t.value),
            r = W(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function le(e) {
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
        var ce,
          se,
          fe =
            ((se = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ce = ce || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ce.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return se(e, t);
                  });
                }
              : se);
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
          ve = ["Webkit", "ms", "Moz", "O"];
        function he(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function me(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = he(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          ve.forEach(function (t) {
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
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
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
        var ke = null,
          Se = null,
          Ee = null;
        function Ce(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof ke) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = xa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Pe(e) {
          Se ? (Ee ? Ee.push(e) : (Ee = [e])) : (Se = e);
        }
        function Ne() {
          if (Se) {
            var e = Se,
              t = Ee;
            if (((Ee = Se = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function _e(e, t) {
          return e(t);
        }
        function Te() {}
        var Oe = !1;
        function je(e, t, n) {
          if (Oe) return e(t, n);
          Oe = !0;
          try {
            return _e(e, t, n);
          } finally {
            (Oe = !1), (null !== Se || null !== Ee) && (Te(), Ne());
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
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Re = !1;
        if (s)
          try {
            var Fe = {};
            Object.defineProperty(Fe, "passive", {
              get: function () {
                Re = !0;
              },
            }),
              window.addEventListener("test", Fe, Fe),
              window.removeEventListener("test", Fe, Fe);
          } catch (se) {
            Re = !1;
          }
        function ze(e, t, n, r, a, o, l, i, u) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (s) {
            this.onError(s);
          }
        }
        var Me = !1,
          Ie = null,
          De = !1,
          Ae = null,
          Ue = {
            onError: function (e) {
              (Me = !0), (Ie = e);
            },
          };
        function Be(e, t, n, r, a, o, l, i, u) {
          (Me = !1), (Ie = null), ze.apply(Ue, arguments);
        }
        function He(e) {
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
        function $e(e) {
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
        function We(e) {
          if (He(e) !== e) throw Error(o(188));
        }
        function Ve(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = He(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var l = a.alternate;
                if (null === l) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === l.child) {
                  for (l = a.child; l; ) {
                    if (l === n) return We(a), e;
                    if (l === r) return We(a), t;
                    l = l.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = l);
                else {
                  for (var i = !1, u = a.child; u; ) {
                    if (u === n) {
                      (i = !0), (n = a), (r = l);
                      break;
                    }
                    if (u === r) {
                      (i = !0), (r = a), (n = l);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!i) {
                    for (u = l.child; u; ) {
                      if (u === n) {
                        (i = !0), (n = l), (r = a);
                        break;
                      }
                      if (u === r) {
                        (i = !0), (r = l), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!i) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Ke = a.unstable_cancelCallback,
          Ge = a.unstable_shouldYield,
          Ye = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Ze = a.unstable_getCurrentPriorityLevel,
          Je = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var lt = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((it(e) / ut) | 0)) | 0;
              },
          it = Math.log,
          ut = Math.LN2;
        var ct = 64,
          st = 4194304;
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
            o = e.pingedLanes,
            l = 268435455 & n;
          if (0 !== l) {
            var i = l & ~a;
            0 !== i ? (r = ft(i)) : 0 !== (o &= l) && (r = ft(o));
          } else 0 !== (l = n & ~a) ? (r = ft(l)) : 0 !== o && (r = ft(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - lt(t))), (r |= e[n]), (t &= ~a);
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
        function vt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function ht() {
          var e = ct;
          return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e;
        }
        function mt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - lt(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - lt(n),
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
          kt,
          St,
          Et,
          Ct,
          Pt = !1,
          Nt = [],
          _t = null,
          Tt = null,
          Ot = null,
          jt = new Map(),
          Lt = new Map(),
          Rt = [],
          Ft =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function zt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              _t = null;
              break;
            case "dragenter":
            case "dragleave":
              Tt = null;
              break;
            case "mouseover":
            case "mouseout":
              Ot = null;
              break;
            case "pointerover":
            case "pointerout":
              jt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Lt.delete(t.pointerId);
          }
        }
        function Mt(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function It(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = He(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = $e(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      St(n);
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
        function Dt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function At(e, t, n) {
          Dt(e) && n.delete(t);
        }
        function Ut() {
          (Pt = !1),
            null !== _t && Dt(_t) && (_t = null),
            null !== Tt && Dt(Tt) && (Tt = null),
            null !== Ot && Dt(Ot) && (Ot = null),
            jt.forEach(At),
            Lt.forEach(At);
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Pt ||
              ((Pt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Ut)));
        }
        function Ht(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < Nt.length) {
            Bt(Nt[0], e);
            for (var n = 1; n < Nt.length; n++) {
              var r = Nt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== _t && Bt(_t, e),
              null !== Tt && Bt(Tt, e),
              null !== Ot && Bt(Ot, e),
              jt.forEach(t),
              Lt.forEach(t),
              n = 0;
            n < Rt.length;
            n++
          )
            (r = Rt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Rt.length && null === (n = Rt[0]).blockedOn; )
            It(n), null === n.blockedOn && Rt.shift();
        }
        var $t = w.ReactCurrentBatchConfig,
          Wt = !0;
        function Vt(e, t, n, r) {
          var a = bt,
            o = $t.transition;
          $t.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = a), ($t.transition = o);
          }
        }
        function Qt(e, t, n, r) {
          var a = bt,
            o = $t.transition;
          $t.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = a), ($t.transition = o);
          }
        }
        function qt(e, t, n, r) {
          if (Wt) {
            var a = Gt(e, t, n, r);
            if (null === a) Wr(e, t, r, Kt, n), zt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (_t = Mt(_t, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Tt = Mt(Tt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Ot = Mt(Ot, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return jt.set(o, Mt(jt.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Lt.set(o, Mt(Lt.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((zt(e, r), 4 & t && -1 < Ft.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && xt(o),
                  null === (o = Gt(e, t, n, r)) && Wr(e, t, r, Kt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Wr(e, t, r, null, n);
          }
        }
        var Kt = null;
        function Gt(e, t, n, r) {
          if (((Kt = null), null !== (e = ya((e = xe(r))))))
            if (null === (t = He(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = $e(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Kt = e), null;
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
                case Je:
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
        var Xt = null,
          Zt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Zt,
            r = n.length,
            a = "value" in Xt ? Xt.value : Xt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var l = r - e;
          for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
          return (Jt = a.slice(e, 1 < t ? 1 - t : void 0));
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
          function t(t, n, r, a, o) {
            for (var l in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]));
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
        var on,
          ln,
          un,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          sn = an(cn),
          fn = I({}, cn, { view: 0, detail: 0 }),
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
            getModifierState: Cn,
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
                      ? ((on = e.screenX - un.screenX),
                        (ln = e.screenY - un.screenY))
                      : (ln = on = 0),
                    (un = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          vn = an(pn),
          hn = an(I({}, pn, { dataTransfer: 0 })),
          mn = an(I({}, fn, { relatedTarget: 0 })),
          gn = an(
            I({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = I({}, cn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          wn = an(I({}, cn, { data: 0 })),
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
          kn = {
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
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function Cn() {
          return En;
        }
        var Pn = I({}, fn, {
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
                ? kn[e.keyCode] || "Unidentified"
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
            getModifierState: Cn,
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
          Nn = an(Pn),
          _n = an(
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
          Tn = an(
            I({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          On = an(
            I({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          jn = I({}, pn, {
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
          Ln = an(jn),
          Rn = [9, 13, 27, 32],
          Fn = s && "CompositionEvent" in window,
          zn = null;
        s && "documentMode" in document && (zn = document.documentMode);
        var Mn = s && "TextEvent" in window && !zn,
          In = s && (!Fn || (zn && 8 < zn && 11 >= zn)),
          Dn = String.fromCharCode(32),
          An = !1;
        function Un(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Rn.indexOf(t.keyCode);
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
        function Bn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Hn = !1;
        var $n = {
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
        function Wn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!$n[e.type] : "textarea" === t;
        }
        function Vn(e, t, n, r) {
          Pe(r),
            0 < (t = Qr(t, "onChange")).length &&
              ((n = new sn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Qn = null,
          qn = null;
        function Kn(e) {
          Dr(e, 0);
        }
        function Gn(e) {
          if (q(wa(e))) return e;
        }
        function Yn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (s) {
          var Zn;
          if (s) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Jn = "function" === typeof er.oninput);
            }
            Zn = Jn;
          } else Zn = !1;
          Xn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Qn && (Qn.detachEvent("onpropertychange", nr), (qn = Qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Gn(qn)) {
            var t = [];
            Vn(t, qn, e, xe(e)), je(Kn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), (Qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Gn(qn);
        }
        function or(e, t) {
          if ("click" === e) return Gn(t);
        }
        function lr(e, t) {
          if ("input" === e || "change" === e) return Gn(t);
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
        function cr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function sr(e, t) {
          var n,
            r = cr(e);
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
            r = cr(r);
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
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = K((e = t.contentWindow).document);
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
        function vr(e) {
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
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = sr(n, o));
                var l = sr(n, r);
                a &&
                  l &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== l.node ||
                    e.focusOffset !== l.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(l.node, l.offset))
                    : (t.setEnd(l.node, l.offset), e.addRange(t)));
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
        var hr = s && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
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
            null == mr ||
            mr !== K(r) ||
            ("selectionStart" in (r = mr) && pr(r)
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
              0 < (r = Qr(gr, "onSelect")).length &&
                ((t = new sn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
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
        var kr = {
            animationend: xr("Animation", "AnimationEnd"),
            animationiteration: xr("Animation", "AnimationIteration"),
            animationstart: xr("Animation", "AnimationStart"),
            transitionend: xr("Transition", "TransitionEnd"),
          },
          Sr = {},
          Er = {};
        function Cr(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (Sr[e] = n[t]);
          return e;
        }
        s &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Pr = Cr("animationend"),
          Nr = Cr("animationiteration"),
          _r = Cr("animationstart"),
          Tr = Cr("transitionend"),
          Or = new Map(),
          jr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Lr(e, t) {
          Or.set(e, t), u(t, [e]);
        }
        for (var Rr = 0; Rr < jr.length; Rr++) {
          var Fr = jr[Rr];
          Lr(Fr.toLowerCase(), "on" + (Fr[0].toUpperCase() + Fr.slice(1)));
        }
        Lr(Pr, "onAnimationEnd"),
          Lr(Nr, "onAnimationIteration"),
          Lr(_r, "onAnimationStart"),
          Lr("dblclick", "onDoubleClick"),
          Lr("focusin", "onFocus"),
          Lr("focusout", "onBlur"),
          Lr(Tr, "onTransitionEnd"),
          c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
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
        var zr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Mr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(zr)
          );
        function Ir(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, l, i, u, c) {
              if ((Be.apply(this, arguments), Me)) {
                if (!Me) throw Error(o(198));
                var s = Ie;
                (Me = !1), (Ie = null), De || ((De = !0), (Ae = s));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Dr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                  var i = r[l],
                    u = i.instance,
                    c = i.currentTarget;
                  if (((i = i.listener), u !== o && a.isPropagationStopped()))
                    break e;
                  Ir(a, i, c), (o = u);
                }
              else
                for (l = 0; l < r.length; l++) {
                  if (
                    ((u = (i = r[l]).instance),
                    (c = i.currentTarget),
                    (i = i.listener),
                    u !== o && a.isPropagationStopped())
                  )
                    break e;
                  Ir(a, i, c), (o = u);
                }
            }
          }
          if (De) throw ((e = Ae), (De = !1), (Ae = null), e);
        }
        function Ar(e, t) {
          var n = t[ha];
          void 0 === n && (n = t[ha] = new Set());
          var r = e + "__bubble";
          n.has(r) || ($r(t, e, 2, !1), n.add(r));
        }
        function Ur(e, t, n) {
          var r = 0;
          t && (r |= 4), $r(n, e, r, t);
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function Hr(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              l.forEach(function (t) {
                "selectionchange" !== t &&
                  (Mr.has(t) || Ur(t, !1, e), Ur(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), Ur("selectionchange", !1, t));
          }
        }
        function $r(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var a = Vt;
              break;
            case 4:
              a = Qt;
              break;
            default:
              a = qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Re ||
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
        function Wr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var l = r.tag;
              if (3 === l || 4 === l) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === l)
                  for (l = r.return; null !== l; ) {
                    var u = l.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = l.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    l = l.return;
                  }
                for (; null !== i; ) {
                  if (null === (l = ya(i))) return;
                  if (5 === (u = l.tag) || 6 === u) {
                    r = o = l;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          je(function () {
            var r = o,
              a = xe(n),
              l = [];
            e: {
              var i = Or.get(e);
              if (void 0 !== i) {
                var u = sn,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Nn;
                    break;
                  case "focusin":
                    (c = "focus"), (u = mn);
                    break;
                  case "focusout":
                    (c = "blur"), (u = mn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = mn;
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
                    u = vn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = hn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Tn;
                    break;
                  case Pr:
                  case Nr:
                  case _r:
                    u = gn;
                    break;
                  case Tr:
                    u = On;
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
                    u = _n;
                }
                var s = 0 !== (4 & t),
                  f = !s && "scroll" === e,
                  d = s ? (null !== i ? i + "Capture" : null) : i;
                s = [];
                for (var p, v = r; null !== v; ) {
                  var h = (p = v).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== h &&
                      ((p = h),
                      null !== d &&
                        null != (h = Le(v, d)) &&
                        s.push(Vr(v, h, p))),
                    f)
                  )
                    break;
                  v = v.return;
                }
                0 < s.length &&
                  ((i = new u(i, c, null, n, a)),
                  l.push({ event: i, listeners: s }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!ya(c) && !c[va])) &&
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
                        (c = (c = n.relatedTarget || n.toElement)
                          ? ya(c)
                          : null) &&
                        (c !== (f = He(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((u = null), (c = r)),
                  u !== c))
              ) {
                if (
                  ((s = vn),
                  (h = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (v = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((s = _n),
                    (h = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (v = "pointer")),
                  (f = null == u ? i : wa(u)),
                  (p = null == c ? i : wa(c)),
                  ((i = new s(h, v + "leave", u, n, a)).target = f),
                  (i.relatedTarget = p),
                  (h = null),
                  ya(a) === r &&
                    (((s = new s(d, v + "enter", c, n, a)).target = p),
                    (s.relatedTarget = f),
                    (h = s)),
                  (f = h),
                  u && c)
                )
                  e: {
                    for (d = c, v = 0, p = s = u; p; p = qr(p)) v++;
                    for (p = 0, h = d; h; h = qr(h)) p++;
                    for (; 0 < v - p; ) (s = qr(s)), v--;
                    for (; 0 < p - v; ) (d = qr(d)), p--;
                    for (; v--; ) {
                      if (s === d || (null !== d && s === d.alternate)) break e;
                      (s = qr(s)), (d = qr(d));
                    }
                    s = null;
                  }
                else s = null;
                null !== u && Kr(l, i, u, s, !1),
                  null !== c && null !== f && Kr(l, f, c, s, !0);
              }
              if (
                "select" ===
                  (u =
                    (i = r ? wa(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === u && "file" === i.type)
              )
                var m = Yn;
              else if (Wn(i))
                if (Xn) m = lr;
                else {
                  m = ar;
                  var g = rr;
                }
              else
                (u = i.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (m = or);
              switch (
                (m && (m = m(e, r))
                  ? Vn(l, m, n, a)
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
                  (Wn(g) || "true" === g.contentEditable) &&
                    ((mr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = mr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(l, n, a);
                  break;
                case "selectionchange":
                  if (hr) break;
                case "keydown":
                case "keyup":
                  wr(l, n, a);
              }
              var y;
              if (Fn)
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
                Hn
                  ? Un(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (In &&
                  "ko" !== n.locale &&
                  (Hn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Hn && (y = en())
                    : ((Zt = "value" in (Xt = a) ? Xt.value : Xt.textContent),
                      (Hn = !0))),
                0 < (g = Qr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  l.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Bn(n)) && (b.data = y))),
                (y = Mn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Bn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((An = !0), Dn);
                        case "textInput":
                          return (e = t.data) === Dn && An ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Hn)
                        return "compositionend" === e || (!Fn && Un(e, t))
                          ? ((e = en()), (Jt = Zt = Xt = null), (Hn = !1), e)
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
                  0 < (r = Qr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  l.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Dr(l, t);
          });
        }
        function Vr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Le(e, n)) && r.unshift(Vr(e, o, a)),
              null != (o = Le(e, t)) && r.push(Vr(e, o, a))),
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
        function Kr(e, t, n, r, a) {
          for (var o = t._reactName, l = []; null !== n && n !== r; ) {
            var i = n,
              u = i.alternate,
              c = i.stateNode;
            if (null !== u && u === r) break;
            5 === i.tag &&
              null !== c &&
              ((i = c),
              a
                ? null != (u = Le(n, o)) && l.unshift(Vr(n, u, i))
                : a || (null != (u = Le(n, o)) && l.push(Vr(n, u, i)))),
              (n = n.return);
          }
          0 !== l.length && e.push({ event: t, listeners: l });
        }
        var Gr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Gr, "\n")
            .replace(Yr, "");
        }
        function Zr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(o(425));
        }
        function Jr() {}
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
          oa = "function" === typeof Promise ? Promise : void 0,
          la =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(ia);
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
                if (0 === r) return e.removeChild(a), void Ht(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Ht(t);
        }
        function ca(e) {
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
        function sa(e) {
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
          va = "__reactContainer$" + fa,
          ha = "__reactEvents$" + fa,
          ma = "__reactListeners$" + fa,
          ga = "__reactHandles$" + fa;
        function ya(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[va] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = sa(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = sa(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[va]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function xa(e) {
          return e[pa] || null;
        }
        var ka = [],
          Sa = -1;
        function Ea(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > Sa || ((e.current = ka[Sa]), (ka[Sa] = null), Sa--);
        }
        function Pa(e, t) {
          Sa++, (ka[Sa] = e.current), (e.current = t);
        }
        var Na = {},
          _a = Ea(Na),
          Ta = Ea(!1),
          Oa = Na;
        function ja(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Na;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function La(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ra() {
          Ca(Ta), Ca(_a);
        }
        function Fa(e, t, n) {
          if (_a.current !== Na) throw Error(o(168));
          Pa(_a, t), Pa(Ta, n);
        }
        function za(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, $(e) || "Unknown", a));
          return I({}, n, r);
        }
        function Ma(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Na),
            (Oa = _a.current),
            Pa(_a, e),
            Pa(Ta, Ta.current),
            !0
          );
        }
        function Ia(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = za(e, t, Oa)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(Ta),
              Ca(_a),
              Pa(_a, e))
            : Ca(Ta),
            Pa(Ta, n);
        }
        var Da = null,
          Aa = !1,
          Ua = !1;
        function Ba(e) {
          null === Da ? (Da = [e]) : Da.push(e);
        }
        function Ha() {
          if (!Ua && null !== Da) {
            Ua = !0;
            var e = 0,
              t = bt;
            try {
              var n = Da;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Da = null), (Aa = !1);
            } catch (a) {
              throw (null !== Da && (Da = Da.slice(e + 1)), qe(Je, Ha), a);
            } finally {
              (bt = t), (Ua = !1);
            }
          }
          return null;
        }
        var $a = [],
          Wa = 0,
          Va = null,
          Qa = 0,
          qa = [],
          Ka = 0,
          Ga = null,
          Ya = 1,
          Xa = "";
        function Za(e, t) {
          ($a[Wa++] = Qa), ($a[Wa++] = Va), (Va = e), (Qa = t);
        }
        function Ja(e, t, n) {
          (qa[Ka++] = Ya), (qa[Ka++] = Xa), (qa[Ka++] = Ga), (Ga = e);
          var r = Ya;
          e = Xa;
          var a = 32 - lt(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - lt(t) + a;
          if (30 < o) {
            var l = a - (a % 5);
            (o = (r & ((1 << l) - 1)).toString(32)),
              (r >>= l),
              (a -= l),
              (Ya = (1 << (32 - lt(t) + a)) | (n << a) | r),
              (Xa = o + e);
          } else (Ya = (1 << o) | (n << a) | r), (Xa = e);
        }
        function eo(e) {
          null !== e.return && (Za(e, 1), Ja(e, 1, 0));
        }
        function to(e) {
          for (; e === Va; )
            (Va = $a[--Wa]), ($a[Wa] = null), (Qa = $a[--Wa]), ($a[Wa] = null);
          for (; e === Ga; )
            (Ga = qa[--Ka]),
              (qa[Ka] = null),
              (Xa = qa[--Ka]),
              (qa[Ka] = null),
              (Ya = qa[--Ka]),
              (qa[Ka] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function lo(e, t) {
          var n = jc(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function io(e, t) {
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
                ((e.stateNode = t), (no = e), (ro = ca(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ga ? { id: Ya, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = jc(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function uo(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function co(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!io(e, t)) {
                if (uo(e)) throw Error(o(418));
                t = ca(n.nextSibling);
                var r = no;
                t && io(e, t)
                  ? lo(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (uo(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function so(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return so(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (uo(e)) throw (po(), Error(o(418)));
            for (; t; ) lo(e, t), (t = ca(t.nextSibling));
          }
          if ((so(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = ca(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? ca(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = ca(e.nextSibling);
        }
        function vo() {
          (ro = no = null), (ao = !1);
        }
        function ho(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var mo = w.ReactCurrentBatchConfig;
        function go(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = I({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var yo = Ea(null),
          bo = null,
          wo = null,
          xo = null;
        function ko() {
          xo = wo = bo = null;
        }
        function So(e) {
          var t = yo.current;
          Ca(yo), (e._currentValue = t);
        }
        function Eo(e, t, n) {
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
        function Co(e, t) {
          (bo = e),
            (xo = wo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wi = !0), (e.firstContext = null));
        }
        function Po(e) {
          var t = e._currentValue;
          if (xo !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wo)
            ) {
              if (null === bo) throw Error(o(308));
              (wo = e), (bo.dependencies = { lanes: 0, firstContext: e });
            } else wo = wo.next = e;
          return t;
        }
        var No = null;
        function _o(e) {
          null === No ? (No = [e]) : No.push(e);
        }
        function To(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), _o(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Oo(e, r)
          );
        }
        function Oo(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var jo = !1;
        function Lo(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ro(e, t) {
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
        function Fo(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function zo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & _u))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Oo(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), _o(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Oo(e, n)
          );
        }
        function Mo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Io(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var l = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = l) : (o = o.next = l), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
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
        function Do(e, t, n, r) {
          var a = e.updateQueue;
          jo = !1;
          var o = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var u = i,
              c = u.next;
            (u.next = null), null === l ? (o = c) : (l.next = c), (l = u);
            var s = e.alternate;
            null !== s &&
              (i = (s = s.updateQueue).lastBaseUpdate) !== l &&
              (null === i ? (s.firstBaseUpdate = c) : (i.next = c),
              (s.lastBaseUpdate = u));
          }
          if (null !== o) {
            var f = a.baseState;
            for (l = 0, s = c = u = null, i = o; ; ) {
              var d = i.lane,
                p = i.eventTime;
              if ((r & d) === d) {
                null !== s &&
                  (s = s.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var v = e,
                    h = i;
                  switch (((d = t), (p = n), h.tag)) {
                    case 1:
                      if ("function" === typeof (v = h.payload)) {
                        f = v.call(p, f, d);
                        break e;
                      }
                      f = v;
                      break e;
                    case 3:
                      v.flags = (-65537 & v.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (v = h.payload)
                              ? v.call(p, f, d)
                              : v) ||
                        void 0 === d
                      )
                        break e;
                      f = I({}, f, d);
                      break e;
                    case 2:
                      jo = !0;
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
                  null === s ? ((c = s = p), (u = f)) : (s = s.next = p),
                  (l |= d);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (d = i).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === s && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = c),
              (a.lastBaseUpdate = s),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (l |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (Mu |= l), (e.lanes = l), (e.memoizedState = f);
          }
        }
        function Ao(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Uo = new r.Component().refs;
        function Bo(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : I({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Ho = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && He(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ec(),
              a = tc(e),
              o = Fo(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = zo(e, o, a)) && (nc(t, e, a, r), Mo(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ec(),
              a = tc(e),
              o = Fo(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = zo(e, o, a)) && (nc(t, e, a, r), Mo(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ec(),
              r = tc(e),
              a = Fo(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = zo(e, a, r)) && (nc(t, e, r, n), Mo(t, e, r));
          },
        };
        function $o(e, t, n, r, a, o, l) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, l)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(a, o);
        }
        function Wo(e, t, n) {
          var r = !1,
            a = Na,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Po(o))
              : ((a = La(t) ? Oa : _a.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? ja(e, a)
                  : Na)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Ho),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function Vo(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Ho.enqueueReplaceState(t, t.state, null);
        }
        function Qo(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Uo), Lo(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = Po(o))
            : ((o = La(t) ? Oa : _a.current), (a.context = ja(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (Bo(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Ho.enqueueReplaceState(a, a.state, null),
              Do(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function qo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                l = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === l
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Uo && (t = a.refs = {}),
                      null === e ? delete t[l] : (t[l] = e);
                  }),
                  (t._stringRef = l),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function Ko(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Go(e) {
          return (0, e._init)(e._payload);
        }
        function Yo(e) {
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
            return ((e = Rc(e, t)).index = 0), (e.sibling = null), e;
          }
          function l(t, n, r) {
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
              ? (((t = Ic(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var o = n.type;
            return o === S
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === L &&
                    Go(o) === t.type))
              ? (((r = a(t, n.props)).ref = qo(e, t, n)), (r.return = e), r)
              : (((r = Fc(n.type, n.key, n.props, null, e.mode, r)).ref = qo(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function s(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Dc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = zc(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Ic("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return (
                    ((n = Fc(t.type, t.key, t.props, null, e.mode, n)).ref = qo(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Dc(t, e.mode, n)).return = e), t;
                case L:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || z(t))
                return ((t = zc(t, e.mode, n, null)).return = e), t;
              Ko(e, t);
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
                  return n.key === a ? c(e, t, n, r) : null;
                case k:
                  return n.key === a ? s(e, t, n, r) : null;
                case L:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || z(n)) return null !== a ? null : f(e, t, n, r, null);
              Ko(e, n);
            }
            return null;
          }
          function v(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case L:
                  return v(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || z(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              Ko(t, r);
            }
            return null;
          }
          function h(a, o, i, u) {
            for (
              var c = null, s = null, f = o, h = (o = 0), m = null;
              null !== f && h < i.length;
              h++
            ) {
              f.index > h ? ((m = f), (f = null)) : (m = f.sibling);
              var g = p(a, f, i[h], u);
              if (null === g) {
                null === f && (f = m);
                break;
              }
              e && f && null === g.alternate && t(a, f),
                (o = l(g, o, h)),
                null === s ? (c = g) : (s.sibling = g),
                (s = g),
                (f = m);
            }
            if (h === i.length) return n(a, f), ao && Za(a, h), c;
            if (null === f) {
              for (; h < i.length; h++)
                null !== (f = d(a, i[h], u)) &&
                  ((o = l(f, o, h)),
                  null === s ? (c = f) : (s.sibling = f),
                  (s = f));
              return ao && Za(a, h), c;
            }
            for (f = r(a, f); h < i.length; h++)
              null !== (m = v(f, a, h, i[h], u)) &&
                (e &&
                  null !== m.alternate &&
                  f.delete(null === m.key ? h : m.key),
                (o = l(m, o, h)),
                null === s ? (c = m) : (s.sibling = m),
                (s = m));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Za(a, h),
              c
            );
          }
          function m(a, i, u, c) {
            var s = z(u);
            if ("function" !== typeof s) throw Error(o(150));
            if (null == (u = s.call(u))) throw Error(o(151));
            for (
              var f = (s = null), h = i, m = (i = 0), g = null, y = u.next();
              null !== h && !y.done;
              m++, y = u.next()
            ) {
              h.index > m ? ((g = h), (h = null)) : (g = h.sibling);
              var b = p(a, h, y.value, c);
              if (null === b) {
                null === h && (h = g);
                break;
              }
              e && h && null === b.alternate && t(a, h),
                (i = l(b, i, m)),
                null === f ? (s = b) : (f.sibling = b),
                (f = b),
                (h = g);
            }
            if (y.done) return n(a, h), ao && Za(a, m), s;
            if (null === h) {
              for (; !y.done; m++, y = u.next())
                null !== (y = d(a, y.value, c)) &&
                  ((i = l(y, i, m)),
                  null === f ? (s = y) : (f.sibling = y),
                  (f = y));
              return ao && Za(a, m), s;
            }
            for (h = r(a, h); !y.done; m++, y = u.next())
              null !== (y = v(h, a, m, y.value, c)) &&
                (e &&
                  null !== y.alternate &&
                  h.delete(null === y.key ? m : y.key),
                (i = l(y, i, m)),
                null === f ? (s = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                h.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Za(a, m),
              s
            );
          }
          return function e(r, o, l, u) {
            if (
              ("object" === typeof l &&
                null !== l &&
                l.type === S &&
                null === l.key &&
                (l = l.props.children),
              "object" === typeof l && null !== l)
            ) {
              switch (l.$$typeof) {
                case x:
                  e: {
                    for (var c = l.key, s = o; null !== s; ) {
                      if (s.key === c) {
                        if ((c = l.type) === S) {
                          if (7 === s.tag) {
                            n(r, s.sibling),
                              ((o = a(s, l.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          s.elementType === c ||
                          ("object" === typeof c &&
                            null !== c &&
                            c.$$typeof === L &&
                            Go(c) === s.type)
                        ) {
                          n(r, s.sibling),
                            ((o = a(s, l.props)).ref = qo(r, s, l)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, s);
                        break;
                      }
                      t(r, s), (s = s.sibling);
                    }
                    l.type === S
                      ? (((o = zc(l.props.children, r.mode, u, l.key)).return =
                          r),
                        (r = o))
                      : (((u = Fc(
                          l.type,
                          l.key,
                          l.props,
                          null,
                          r.mode,
                          u
                        )).ref = qo(r, o, l)),
                        (u.return = r),
                        (r = u));
                  }
                  return i(r);
                case k:
                  e: {
                    for (s = l.key; null !== o; ) {
                      if (o.key === s) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === l.containerInfo &&
                          o.stateNode.implementation === l.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, l.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Dc(l, r.mode, u)).return = r), (r = o);
                  }
                  return i(r);
                case L:
                  return e(r, o, (s = l._init)(l._payload), u);
              }
              if (te(l)) return h(r, o, l, u);
              if (z(l)) return m(r, o, l, u);
              Ko(r, l);
            }
            return ("string" === typeof l && "" !== l) || "number" === typeof l
              ? ((l = "" + l),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, l)).return = r), (r = o))
                  : (n(r, o), ((o = Ic(l, r.mode, u)).return = r), (r = o)),
                i(r))
              : n(r, o);
          };
        }
        var Xo = Yo(!0),
          Zo = Yo(!1),
          Jo = {},
          el = Ea(Jo),
          tl = Ea(Jo),
          nl = Ea(Jo);
        function rl(e) {
          if (e === Jo) throw Error(o(174));
          return e;
        }
        function al(e, t) {
          switch ((Pa(nl, t), Pa(tl, e), Pa(el, Jo), (e = t.nodeType))) {
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
          Ca(el), Pa(el, t);
        }
        function ol() {
          Ca(el), Ca(tl), Ca(nl);
        }
        function ll(e) {
          rl(nl.current);
          var t = rl(el.current),
            n = ue(t, e.type);
          t !== n && (Pa(tl, e), Pa(el, n));
        }
        function il(e) {
          tl.current === e && (Ca(el), Ca(tl));
        }
        var ul = Ea(0);
        function cl(e) {
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
        var sl = [];
        function fl() {
          for (var e = 0; e < sl.length; e++)
            sl[e]._workInProgressVersionPrimary = null;
          sl.length = 0;
        }
        var dl = w.ReactCurrentDispatcher,
          pl = w.ReactCurrentBatchConfig,
          vl = 0,
          hl = null,
          ml = null,
          gl = null,
          yl = !1,
          bl = !1,
          wl = 0,
          xl = 0;
        function kl() {
          throw Error(o(321));
        }
        function Sl(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n])) return !1;
          return !0;
        }
        function El(e, t, n, r, a, l) {
          if (
            ((vl = l),
            (hl = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (dl.current = null === e || null === e.memoizedState ? ii : ui),
            (e = n(r, a)),
            bl)
          ) {
            l = 0;
            do {
              if (((bl = !1), (wl = 0), 25 <= l)) throw Error(o(301));
              (l += 1),
                (gl = ml = null),
                (t.updateQueue = null),
                (dl.current = ci),
                (e = n(r, a));
            } while (bl);
          }
          if (
            ((dl.current = li),
            (t = null !== ml && null !== ml.next),
            (vl = 0),
            (gl = ml = hl = null),
            (yl = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function Cl() {
          var e = 0 !== wl;
          return (wl = 0), e;
        }
        function Pl() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === gl ? (hl.memoizedState = gl = e) : (gl = gl.next = e), gl
          );
        }
        function Nl() {
          if (null === ml) {
            var e = hl.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ml.next;
          var t = null === gl ? hl.memoizedState : gl.next;
          if (null !== t) (gl = t), (ml = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (ml = e).memoizedState,
              baseState: ml.baseState,
              baseQueue: ml.baseQueue,
              queue: ml.queue,
              next: null,
            }),
              null === gl ? (hl.memoizedState = gl = e) : (gl = gl.next = e);
          }
          return gl;
        }
        function _l(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Tl(e) {
          var t = Nl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = ml,
            a = r.baseQueue,
            l = n.pending;
          if (null !== l) {
            if (null !== a) {
              var i = a.next;
              (a.next = l.next), (l.next = i);
            }
            (r.baseQueue = a = l), (n.pending = null);
          }
          if (null !== a) {
            (l = a.next), (r = r.baseState);
            var u = (i = null),
              c = null,
              s = l;
            do {
              var f = s.lane;
              if ((vl & f) === f)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: s.action,
                      hasEagerState: s.hasEagerState,
                      eagerState: s.eagerState,
                      next: null,
                    }),
                  (r = s.hasEagerState ? s.eagerState : e(r, s.action));
              else {
                var d = {
                  lane: f,
                  action: s.action,
                  hasEagerState: s.hasEagerState,
                  eagerState: s.eagerState,
                  next: null,
                };
                null === c ? ((u = c = d), (i = r)) : (c = c.next = d),
                  (hl.lanes |= f),
                  (Mu |= f);
              }
              s = s.next;
            } while (null !== s && s !== l);
            null === c ? (i = r) : (c.next = u),
              ir(r, t.memoizedState) || (wi = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = c),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (l = a.lane), (hl.lanes |= l), (Mu |= l), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ol(e) {
          var t = Nl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            l = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              (l = e(l, i.action)), (i = i.next);
            } while (i !== a);
            ir(l, t.memoizedState) || (wi = !0),
              (t.memoizedState = l),
              null === t.baseQueue && (t.baseState = l),
              (n.lastRenderedState = l);
          }
          return [l, r];
        }
        function jl() {}
        function Ll(e, t) {
          var n = hl,
            r = Nl(),
            a = t(),
            l = !ir(r.memoizedState, a);
          if (
            (l && ((r.memoizedState = a), (wi = !0)),
            (r = r.queue),
            Wl(zl.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              l ||
              (null !== gl && 1 & gl.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Al(9, Fl.bind(null, n, r, a, t), void 0, null),
              null === Tu)
            )
              throw Error(o(349));
            0 !== (30 & vl) || Rl(n, t, a);
          }
          return a;
        }
        function Rl(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = hl.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (hl.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Fl(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ml(t) && Il(e);
        }
        function zl(e, t, n) {
          return n(function () {
            Ml(t) && Il(e);
          });
        }
        function Ml(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ir(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Il(e) {
          var t = Oo(e, 1);
          null !== t && nc(t, e, 1, -1);
        }
        function Dl(e) {
          var t = Pl();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: _l,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ni.bind(null, hl, e)),
            [t.memoizedState, e]
          );
        }
        function Al(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = hl.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (hl.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Ul() {
          return Nl().memoizedState;
        }
        function Bl(e, t, n, r) {
          var a = Pl();
          (hl.flags |= e),
            (a.memoizedState = Al(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Hl(e, t, n, r) {
          var a = Nl();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== ml) {
            var l = ml.memoizedState;
            if (((o = l.destroy), null !== r && Sl(r, l.deps)))
              return void (a.memoizedState = Al(t, n, o, r));
          }
          (hl.flags |= e), (a.memoizedState = Al(1 | t, n, o, r));
        }
        function $l(e, t) {
          return Bl(8390656, 8, e, t);
        }
        function Wl(e, t) {
          return Hl(2048, 8, e, t);
        }
        function Vl(e, t) {
          return Hl(4, 2, e, t);
        }
        function Ql(e, t) {
          return Hl(4, 4, e, t);
        }
        function ql(e, t) {
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
        function Kl(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Hl(4, 4, ql.bind(null, t, e), n)
          );
        }
        function Gl() {}
        function Yl(e, t) {
          var n = Nl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Sl(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Xl(e, t) {
          var n = Nl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Sl(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Zl(e, t, n) {
          return 0 === (21 & vl)
            ? (e.baseState && ((e.baseState = !1), (wi = !0)),
              (e.memoizedState = n))
            : (ir(n, t) ||
                ((n = ht()), (hl.lanes |= n), (Mu |= n), (e.baseState = !0)),
              t);
        }
        function Jl(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pl.transition;
          pl.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pl.transition = r);
          }
        }
        function ei() {
          return Nl().memoizedState;
        }
        function ti(e, t, n) {
          var r = tc(e);
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
          else if (null !== (n = To(e, t, n, r))) {
            nc(n, e, r, ec()), oi(n, t, r);
          }
        }
        function ni(e, t, n) {
          var r = tc(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (ri(e)) ai(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  i = o(l, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, l))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((a.next = a), _o(t))
                      : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (c) {}
            null !== (n = To(e, t, a, r)) &&
              (nc(n, e, r, (a = ec())), oi(n, t, r));
          }
        }
        function ri(e) {
          var t = e.alternate;
          return e === hl || (null !== t && t === hl);
        }
        function ai(e, t) {
          bl = yl = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function oi(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var li = {
            readContext: Po,
            useCallback: kl,
            useContext: kl,
            useEffect: kl,
            useImperativeHandle: kl,
            useInsertionEffect: kl,
            useLayoutEffect: kl,
            useMemo: kl,
            useReducer: kl,
            useRef: kl,
            useState: kl,
            useDebugValue: kl,
            useDeferredValue: kl,
            useTransition: kl,
            useMutableSource: kl,
            useSyncExternalStore: kl,
            useId: kl,
            unstable_isNewReconciler: !1,
          },
          ii = {
            readContext: Po,
            useCallback: function (e, t) {
              return (Pl().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Po,
            useEffect: $l,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Bl(4194308, 4, ql.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Bl(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Bl(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Pl();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Pl();
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
                (e = e.dispatch = ti.bind(null, hl, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Pl().memoizedState = e);
            },
            useState: Dl,
            useDebugValue: Gl,
            useDeferredValue: function (e) {
              return (Pl().memoizedState = e);
            },
            useTransition: function () {
              var e = Dl(!1),
                t = e[0];
              return (
                (e = Jl.bind(null, e[1])), (Pl().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = hl,
                a = Pl();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Tu)) throw Error(o(349));
                0 !== (30 & vl) || Rl(r, t, n);
              }
              a.memoizedState = n;
              var l = { value: n, getSnapshot: t };
              return (
                (a.queue = l),
                $l(zl.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                Al(9, Fl.bind(null, r, l, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Pl(),
                t = Tu.identifierPrefix;
              if (ao) {
                var n = Xa;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ya & ~(1 << (32 - lt(Ya) - 1))).toString(32) + n)),
                  0 < (n = wl++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = xl++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ui = {
            readContext: Po,
            useCallback: Yl,
            useContext: Po,
            useEffect: Wl,
            useImperativeHandle: Kl,
            useInsertionEffect: Vl,
            useLayoutEffect: Ql,
            useMemo: Xl,
            useReducer: Tl,
            useRef: Ul,
            useState: function () {
              return Tl(_l);
            },
            useDebugValue: Gl,
            useDeferredValue: function (e) {
              return Zl(Nl(), ml.memoizedState, e);
            },
            useTransition: function () {
              return [Tl(_l)[0], Nl().memoizedState];
            },
            useMutableSource: jl,
            useSyncExternalStore: Ll,
            useId: ei,
            unstable_isNewReconciler: !1,
          },
          ci = {
            readContext: Po,
            useCallback: Yl,
            useContext: Po,
            useEffect: Wl,
            useImperativeHandle: Kl,
            useInsertionEffect: Vl,
            useLayoutEffect: Ql,
            useMemo: Xl,
            useReducer: Ol,
            useRef: Ul,
            useState: function () {
              return Ol(_l);
            },
            useDebugValue: Gl,
            useDeferredValue: function (e) {
              var t = Nl();
              return null === ml
                ? (t.memoizedState = e)
                : Zl(t, ml.memoizedState, e);
            },
            useTransition: function () {
              return [Ol(_l)[0], Nl().memoizedState];
            },
            useMutableSource: jl,
            useSyncExternalStore: Ll,
            useId: ei,
            unstable_isNewReconciler: !1,
          };
        function si(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += B(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
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
        function vi(e, t, n) {
          ((n = Fo(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Wu || ((Wu = !0), (Vu = r)), di(0, t);
            }),
            n
          );
        }
        function hi(e, t, n) {
          (n = Fo(-1, n)).tag = 3;
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
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                di(0, t),
                  "function" !== typeof r &&
                    (null === Qu ? (Qu = new Set([this])) : Qu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function mi(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pi();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Cc.bind(null, e, t, n)), t.then(e, e));
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
                      : (((t = Fo(-1, 1)).tag = 2), zo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bi = w.ReactCurrentOwner,
          wi = !1;
        function xi(e, t, n, r) {
          t.child = null === e ? Zo(t, null, n, r) : Xo(t, e.child, n, r);
        }
        function ki(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            Co(t, a),
            (r = El(e, t, n, r, o, a)),
            (n = Cl()),
            null === e || wi
              ? (ao && n && eo(t), (t.flags |= 1), xi(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wi(e, t, a))
          );
        }
        function Si(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Lc(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Fc(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Ei(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var l = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(l, r) &&
              e.ref === t.ref
            )
              return Wi(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Rc(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Ei(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (ur(o, r) && e.ref === t.ref) {
              if (((wi = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Wi(e, t, a);
              0 !== (131072 & e.flags) && (wi = !0);
            }
          }
          return Ni(e, t, n, r, a);
        }
        function Ci(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Pa(Ru, Lu),
                (Lu |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Pa(Ru, Lu),
                  (Lu |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Pa(Ru, Lu),
                (Lu |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Pa(Ru, Lu),
              (Lu |= r);
          return xi(e, t, a, n), t.child;
        }
        function Pi(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ni(e, t, n, r, a) {
          var o = La(n) ? Oa : _a.current;
          return (
            (o = ja(t, o)),
            Co(t, a),
            (n = El(e, t, n, r, o, a)),
            (r = Cl()),
            null === e || wi
              ? (ao && r && eo(t), (t.flags |= 1), xi(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wi(e, t, a))
          );
        }
        function _i(e, t, n, r, a) {
          if (La(n)) {
            var o = !0;
            Ma(t);
          } else o = !1;
          if ((Co(t, a), null === t.stateNode))
            $i(e, t), Wo(t, n, r), Qo(t, n, r, a), (r = !0);
          else if (null === e) {
            var l = t.stateNode,
              i = t.memoizedProps;
            l.props = i;
            var u = l.context,
              c = n.contextType;
            "object" === typeof c && null !== c
              ? (c = Po(c))
              : (c = ja(t, (c = La(n) ? Oa : _a.current)));
            var s = n.getDerivedStateFromProps,
              f =
                "function" === typeof s ||
                "function" === typeof l.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((i !== r || u !== c) && Vo(t, l, r, c)),
              (jo = !1);
            var d = t.memoizedState;
            (l.state = d),
              Do(t, r, l, a),
              (u = t.memoizedState),
              i !== r || d !== u || Ta.current || jo
                ? ("function" === typeof s &&
                    (Bo(t, n, s, r), (u = t.memoizedState)),
                  (i = jo || $o(t, n, i, r, d, u, c))
                    ? (f ||
                        ("function" !== typeof l.UNSAFE_componentWillMount &&
                          "function" !== typeof l.componentWillMount) ||
                        ("function" === typeof l.componentWillMount &&
                          l.componentWillMount(),
                        "function" === typeof l.UNSAFE_componentWillMount &&
                          l.UNSAFE_componentWillMount()),
                      "function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (l.props = r),
                  (l.state = u),
                  (l.context = c),
                  (r = i))
                : ("function" === typeof l.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (l = t.stateNode),
              Ro(e, t),
              (i = t.memoizedProps),
              (c = t.type === t.elementType ? i : go(t.type, i)),
              (l.props = c),
              (f = t.pendingProps),
              (d = l.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = Po(u))
                : (u = ja(t, (u = La(n) ? Oa : _a.current)));
            var p = n.getDerivedStateFromProps;
            (s =
              "function" === typeof p ||
              "function" === typeof l.getSnapshotBeforeUpdate) ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((i !== f || d !== u) && Vo(t, l, r, u)),
              (jo = !1),
              (d = t.memoizedState),
              (l.state = d),
              Do(t, r, l, a);
            var v = t.memoizedState;
            i !== f || d !== v || Ta.current || jo
              ? ("function" === typeof p &&
                  (Bo(t, n, p, r), (v = t.memoizedState)),
                (c = jo || $o(t, n, c, r, d, v, u) || !1)
                  ? (s ||
                      ("function" !== typeof l.UNSAFE_componentWillUpdate &&
                        "function" !== typeof l.componentWillUpdate) ||
                      ("function" === typeof l.componentWillUpdate &&
                        l.componentWillUpdate(r, v, u),
                      "function" === typeof l.UNSAFE_componentWillUpdate &&
                        l.UNSAFE_componentWillUpdate(r, v, u)),
                    "function" === typeof l.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof l.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof l.componentDidUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof l.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = v)),
                (l.props = r),
                (l.state = v),
                (l.context = u),
                (r = c))
              : ("function" !== typeof l.componentDidUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof l.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Ti(e, t, n, r, o, a);
        }
        function Ti(e, t, n, r, a, o) {
          Pi(e, t);
          var l = 0 !== (128 & t.flags);
          if (!r && !l) return a && Ia(t, n, !1), Wi(e, t, o);
          (r = t.stateNode), (bi.current = t);
          var i =
            l && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && l
              ? ((t.child = Xo(t, e.child, null, o)),
                (t.child = Xo(t, null, i, o)))
              : xi(e, t, i, o),
            (t.memoizedState = r.state),
            a && Ia(t, n, !0),
            t.child
          );
        }
        function Oi(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Fa(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Fa(0, t.context, !1),
            al(e, t.containerInfo);
        }
        function ji(e, t, n, r, a) {
          return vo(), ho(a), (t.flags |= 256), xi(e, t, n, r), t.child;
        }
        var Li,
          Ri,
          Fi,
          zi = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Mi(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ii(e, t, n) {
          var r,
            a = t.pendingProps,
            l = ul.current,
            i = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & l)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (l |= 1),
            Pa(ul, 1 & l),
            null === e)
          )
            return (
              co(t),
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
                        : (i = Mc(u, a, 0, null)),
                      (e = zc(e, a, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Mi(n)),
                      (t.memoizedState = zi),
                      e)
                    : Di(t, u))
            );
          if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
            return (function (e, t, n, r, a, l, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ai(e, t, i, (r = fi(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((l = r.fallback),
                    (a = t.mode),
                    (r = Mc(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((l = zc(l, a, i, null)).flags |= 2),
                    (r.return = t),
                    (l.return = t),
                    (r.sibling = l),
                    (t.child = r),
                    0 !== (1 & t.mode) && Xo(t, e.child, null, i),
                    (t.child.memoizedState = Mi(i)),
                    (t.memoizedState = zi),
                    l);
              if (0 === (1 & t.mode)) return Ai(e, t, i, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Ai(e, t, i, (r = fi((l = Error(o(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (i & e.childLanes)), wi || u)) {
                if (null !== (r = Tu)) {
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
                    a !== l.retryLane &&
                    ((l.retryLane = a), Oo(e, a), nc(r, e, a, -1));
                }
                return hc(), Ai(e, t, i, (r = fi(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Nc.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = l.treeContext),
                  (ro = ca(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((qa[Ka++] = Ya),
                    (qa[Ka++] = Xa),
                    (qa[Ka++] = Ga),
                    (Ya = e.id),
                    (Xa = e.overflow),
                    (Ga = t)),
                  (t = Di(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, u, a, r, l, n);
          if (i) {
            (i = a.fallback), (u = t.mode), (r = (l = e.child).sibling);
            var c = { mode: "hidden", children: a.children };
            return (
              0 === (1 & u) && t.child !== l
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = c),
                  (t.deletions = null))
                : ((a = Rc(l, c)).subtreeFlags = 14680064 & l.subtreeFlags),
              null !== r
                ? (i = Rc(r, i))
                : ((i = zc(i, u, n, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Mi(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (i.memoizedState = u),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = zi),
              a
            );
          }
          return (
            (e = (i = e.child).sibling),
            (a = Rc(i, { mode: "visible", children: a.children })),
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
        function Di(e, t) {
          return (
            ((t = Mc(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Ai(e, t, n, r) {
          return (
            null !== r && ho(r),
            Xo(t, e.child, null, n),
            ((e = Di(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ui(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Eo(e.return, t, n);
        }
        function Bi(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Hi(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((xi(e, t, r.children, n), 0 !== (2 & (r = ul.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ui(e, n, t);
                else if (19 === e.tag) Ui(e, n, t);
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
          if ((Pa(ul, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === cl(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Bi(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === cl(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Bi(t, !0, n, null, o);
                break;
              case "together":
                Bi(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function $i(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Wi(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Mu |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Rc((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Rc(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Vi(e, t) {
          if (!ao)
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
        function Qi(e) {
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
          switch ((to(t), t.tag)) {
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
              return Qi(t), null;
            case 1:
            case 17:
              return La(t.type) && Ra(), Qi(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ol(),
                Ca(Ta),
                Ca(_a),
                fl(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (lc(oo), (oo = null)))),
                Qi(t),
                null
              );
            case 5:
              il(t);
              var a = rl(nl.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ri(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Qi(t), null;
                }
                if (((e = rl(el.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = l), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ar("cancel", r), Ar("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ar("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < zr.length; a++) Ar(zr[a], r);
                      break;
                    case "source":
                      Ar("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ar("error", r), Ar("load", r);
                      break;
                    case "details":
                      Ar("toggle", r);
                      break;
                    case "input":
                      Y(r, l), Ar("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }),
                        Ar("invalid", r);
                      break;
                    case "textarea":
                      ae(r, l), Ar("invalid", r);
                  }
                  for (var u in (ye(n, l), (a = null), l))
                    if (l.hasOwnProperty(u)) {
                      var c = l[u];
                      "children" === u
                        ? "string" === typeof c
                          ? r.textContent !== c &&
                            (!0 !== l.suppressHydrationWarning &&
                              Zr(r.textContent, c, e),
                            (a = ["children", c]))
                          : "number" === typeof c &&
                            r.textContent !== "" + c &&
                            (!0 !== l.suppressHydrationWarning &&
                              Zr(r.textContent, c, e),
                            (a = ["children", "" + c]))
                        : i.hasOwnProperty(u) &&
                          null != c &&
                          "onScroll" === u &&
                          Ar("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Q(r), J(r, l, !0);
                      break;
                    case "textarea":
                      Q(r), le(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof l.onClick && (r.onclick = Jr);
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
                        Ar("cancel", e), Ar("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ar("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < zr.length; a++) Ar(zr[a], e);
                        a = r;
                        break;
                      case "source":
                        Ar("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ar("error", e), Ar("load", e), (a = r);
                        break;
                      case "details":
                        Ar("toggle", e), (a = r);
                        break;
                      case "input":
                        Y(e, r), (a = G(e, r)), Ar("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = I({}, r, { value: void 0 })),
                          Ar("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Ar("invalid", e);
                    }
                    for (l in (ye(n, a), (c = a)))
                      if (c.hasOwnProperty(l)) {
                        var s = c[l];
                        "style" === l
                          ? me(e, s)
                          : "dangerouslySetInnerHTML" === l
                          ? null != (s = s ? s.__html : void 0) && fe(e, s)
                          : "children" === l
                          ? "string" === typeof s
                            ? ("textarea" !== n || "" !== s) && de(e, s)
                            : "number" === typeof s && de(e, "" + s)
                          : "suppressContentEditableWarning" !== l &&
                            "suppressHydrationWarning" !== l &&
                            "autoFocus" !== l &&
                            (i.hasOwnProperty(l)
                              ? null != s && "onScroll" === l && Ar("scroll", e)
                              : null != s && b(e, l, s, u));
                      }
                    switch (n) {
                      case "input":
                        Q(e), J(e, r, !1);
                        break;
                      case "textarea":
                        Q(e), le(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + W(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (l = r.value)
                            ? ne(e, !!r.multiple, l, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Jr);
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
              return Qi(t), null;
            case 6:
              if (e && null != t.stateNode) Fi(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = rl(nl.current)), rl(el.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (l = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  l && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return Qi(t), null;
            case 13:
              if (
                (Ca(ul),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), vo(), (t.flags |= 98560), (l = !1);
                else if (((l = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!l) throw Error(o(318));
                    if (
                      !(l =
                        null !== (l = t.memoizedState) ? l.dehydrated : null)
                    )
                      throw Error(o(317));
                    l[da] = t;
                  } else
                    vo(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Qi(t), (l = !1);
                } else null !== oo && (lc(oo), (oo = null)), (l = !0);
                if (!l) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ul.current)
                        ? 0 === Fu && (Fu = 3)
                        : hc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Qi(t),
                  null);
            case 4:
              return (
                ol(), null === e && Hr(t.stateNode.containerInfo), Qi(t), null
              );
            case 10:
              return So(t.type._context), Qi(t), null;
            case 19:
              if ((Ca(ul), null === (l = t.memoizedState))) return Qi(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = l.rendering)))
                if (r) Vi(l, !1);
                else {
                  if (0 !== Fu || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = cl(e))) {
                        for (
                          t.flags |= 128,
                            Vi(l, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 14680066),
                            null === (u = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.subtreeFlags = 0),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = u.childLanes),
                                (l.lanes = u.lanes),
                                (l.child = u.child),
                                (l.subtreeFlags = 0),
                                (l.deletions = null),
                                (l.memoizedProps = u.memoizedProps),
                                (l.memoizedState = u.memoizedState),
                                (l.updateQueue = u.updateQueue),
                                (l.type = u.type),
                                (e = u.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Pa(ul, (1 & ul.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== l.tail &&
                    Xe() > Hu &&
                    ((t.flags |= 128),
                    (r = !0),
                    Vi(l, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = cl(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Vi(l, !0),
                      null === l.tail &&
                        "hidden" === l.tailMode &&
                        !u.alternate &&
                        !ao)
                    )
                      return Qi(t), null;
                  } else
                    2 * Xe() - l.renderingStartTime > Hu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Vi(l, !1),
                      (t.lanes = 4194304));
                l.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = l.last) ? (n.sibling = u) : (t.child = u),
                    (l.last = u));
              }
              return null !== l.tail
                ? ((t = l.tail),
                  (l.rendering = t),
                  (l.tail = t.sibling),
                  (l.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = ul.current),
                  Pa(ul, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Qi(t), null);
            case 22:
            case 23:
              return (
                fc(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Lu) &&
                    (Qi(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Qi(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Ki(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                La(t.type) && Ra(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ol(),
                Ca(Ta),
                Ca(_a),
                fl(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return il(t), null;
            case 13:
              if (
                (Ca(ul),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                vo();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ca(ul), null;
            case 4:
              return ol(), null;
            case 10:
              return So(t.type._context), null;
            case 22:
            case 23:
              return fc(), null;
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
          (Ri = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), rl(el.current);
              var o,
                l = null;
              switch (n) {
                case "input":
                  (a = G(e, a)), (r = G(e, r)), (l = []);
                  break;
                case "select":
                  (a = I({}, a, { value: void 0 })),
                    (r = I({}, r, { value: void 0 })),
                    (l = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (l = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (s in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(s) && a.hasOwnProperty(s) && null != a[s])
                  if ("style" === s) {
                    var u = a[s];
                    for (o in u)
                      u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== s &&
                      "children" !== s &&
                      "suppressContentEditableWarning" !== s &&
                      "suppressHydrationWarning" !== s &&
                      "autoFocus" !== s &&
                      (i.hasOwnProperty(s)
                        ? l || (l = [])
                        : (l = l || []).push(s, null));
              for (s in r) {
                var c = r[s];
                if (
                  ((u = null != a ? a[s] : void 0),
                  r.hasOwnProperty(s) && c !== u && (null != c || null != u))
                )
                  if ("style" === s)
                    if (u) {
                      for (o in u)
                        !u.hasOwnProperty(o) ||
                          (c && c.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in c)
                        c.hasOwnProperty(o) &&
                          u[o] !== c[o] &&
                          (n || (n = {}), (n[o] = c[o]));
                    } else n || (l || (l = []), l.push(s, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === s
                      ? ((c = c ? c.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != c && u !== c && (l = l || []).push(s, c))
                      : "children" === s
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                        (l = l || []).push(s, "" + c)
                      : "suppressContentEditableWarning" !== s &&
                        "suppressHydrationWarning" !== s &&
                        (i.hasOwnProperty(s)
                          ? (null != c && "onScroll" === s && Ar("scroll", e),
                            l || u === c || (l = []))
                          : (l = l || []).push(s, c));
              }
              n && (l = l || []).push("style", n);
              var s = l;
              (t.updateQueue = s) && (t.flags |= 4);
            }
          }),
          (Fi = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Gi = !1,
          Yi = !1,
          Xi = "function" === typeof WeakSet ? WeakSet : Set,
          Zi = null;
        function Ji(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Ec(e, t, r);
              }
            else n.current = null;
        }
        function eu(e, t, n) {
          try {
            n();
          } catch (r) {
            Ec(e, t, r);
          }
        }
        var tu = !1;
        function nu(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && eu(t, n, o);
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
        function ou(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), ou(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[ha],
              delete t[ma],
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
        function lu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function iu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || lu(e.return)) return null;
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
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (uu(e, t, n), e = e.sibling; null !== e; )
              uu(e, t, n), (e = e.sibling);
        }
        function cu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e; )
              cu(e, t, n), (e = e.sibling);
        }
        var su = null,
          fu = !1;
        function du(e, t, n) {
          for (n = n.child; null !== n; ) pu(e, t, n), (n = n.sibling);
        }
        function pu(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (i) {}
          switch (n.tag) {
            case 5:
              Yi || Ji(n, t);
            case 6:
              var r = su,
                a = fu;
              (su = null),
                du(e, t, n),
                (fu = a),
                null !== (su = r) &&
                  (fu
                    ? ((e = su),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : su.removeChild(n.stateNode));
              break;
            case 18:
              null !== su &&
                (fu
                  ? ((e = su),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, n)
                      : 1 === e.nodeType && ua(e, n),
                    Ht(e))
                  : ua(su, n.stateNode));
              break;
            case 4:
              (r = su),
                (a = fu),
                (su = n.stateNode.containerInfo),
                (fu = !0),
                du(e, t, n),
                (su = r),
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
                  var o = a,
                    l = o.destroy;
                  (o = o.tag),
                    void 0 !== l &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      eu(n, t, l),
                    (a = a.next);
                } while (a !== r);
              }
              du(e, t, n);
              break;
            case 1:
              if (
                !Yi &&
                (Ji(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (i) {
                  Ec(n, t, i);
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
        function vu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xi()),
              t.forEach(function (t) {
                var r = _c.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function hu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var l = e,
                  i = t,
                  u = i;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (su = u.stateNode), (fu = !1);
                      break e;
                    case 3:
                    case 4:
                      (su = u.stateNode.containerInfo), (fu = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === su) throw Error(o(160));
                pu(l, i, a), (su = null), (fu = !1);
                var c = a.alternate;
                null !== c && (c.return = null), (a.return = null);
              } catch (s) {
                Ec(a, t, s);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) mu(t, e), (t = t.sibling);
        }
        function mu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((hu(t, e), gu(e), 4 & r)) {
                try {
                  nu(3, e, e.return), ru(3, e);
                } catch (m) {
                  Ec(e, e.return, m);
                }
                try {
                  nu(5, e, e.return);
                } catch (m) {
                  Ec(e, e.return, m);
                }
              }
              break;
            case 1:
              hu(t, e), gu(e), 512 & r && null !== n && Ji(n, n.return);
              break;
            case 5:
              if (
                (hu(t, e),
                gu(e),
                512 & r && null !== n && Ji(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (m) {
                  Ec(e, e.return, m);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var l = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : l,
                  u = e.type,
                  c = e.updateQueue;
                if (((e.updateQueue = null), null !== c))
                  try {
                    "input" === u &&
                      "radio" === l.type &&
                      null != l.name &&
                      X(a, l),
                      be(u, i);
                    var s = be(u, l);
                    for (i = 0; i < c.length; i += 2) {
                      var f = c[i],
                        d = c[i + 1];
                      "style" === f
                        ? me(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : b(a, f, d, s);
                    }
                    switch (u) {
                      case "input":
                        Z(a, l);
                        break;
                      case "textarea":
                        oe(a, l);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!l.multiple;
                        var v = l.value;
                        null != v
                          ? ne(a, !!l.multiple, v, !1)
                          : p !== !!l.multiple &&
                            (null != l.defaultValue
                              ? ne(a, !!l.multiple, l.defaultValue, !0)
                              : ne(a, !!l.multiple, l.multiple ? [] : "", !1));
                    }
                    a[pa] = l;
                  } catch (m) {
                    Ec(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((hu(t, e), gu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (l = e.memoizedProps);
                try {
                  a.nodeValue = l;
                } catch (m) {
                  Ec(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                (hu(t, e),
                gu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ht(t.containerInfo);
                } catch (m) {
                  Ec(e, e.return, m);
                }
              break;
            case 4:
            default:
              hu(t, e), gu(e);
              break;
            case 13:
              hu(t, e),
                gu(e),
                8192 & (a = e.child).flags &&
                  ((l = null !== a.memoizedState),
                  (a.stateNode.isHidden = l),
                  !l ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Bu = Xe())),
                4 & r && vu(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Yi = (s = Yi) || f), hu(t, e), (Yi = s))
                  : hu(t, e),
                gu(e),
                8192 & r)
              ) {
                if (
                  ((s = null !== e.memoizedState),
                  (e.stateNode.isHidden = s) && !f && 0 !== (1 & e.mode))
                )
                  for (Zi = e, f = e.child; null !== f; ) {
                    for (d = Zi = f; null !== Zi; ) {
                      switch (((v = (p = Zi).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nu(4, p, p.return);
                          break;
                        case 1:
                          Ji(p, p.return);
                          var h = p.stateNode;
                          if ("function" === typeof h.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (h.props = t.memoizedProps),
                                (h.state = t.memoizedState),
                                h.componentWillUnmount();
                            } catch (m) {
                              Ec(r, n, m);
                            }
                          }
                          break;
                        case 5:
                          Ji(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            xu(d);
                            continue;
                          }
                      }
                      null !== v ? ((v.return = p), (Zi = v)) : xu(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          s
                            ? "function" === typeof (l = a.style).setProperty
                              ? l.setProperty("display", "none", "important")
                              : (l.display = "none")
                            : ((u = d.stateNode),
                              (i =
                                void 0 !== (c = d.memoizedProps.style) &&
                                null !== c &&
                                c.hasOwnProperty("display")
                                  ? c.display
                                  : null),
                              (u.style.display = he("display", i)));
                      } catch (m) {
                        Ec(e, e.return, m);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = s ? "" : d.memoizedProps;
                      } catch (m) {
                        Ec(e, e.return, m);
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
              hu(t, e), gu(e), 4 & r && vu(e);
            case 21:
          }
        }
        function gu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (lu(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    cu(e, iu(e), a);
                  break;
                case 3:
                case 4:
                  var l = r.stateNode.containerInfo;
                  uu(e, iu(e), l);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (i) {
              Ec(e, e.return, i);
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
              o = a.child;
            if (22 === a.tag && r) {
              var l = null !== a.memoizedState || Gi;
              if (!l) {
                var i = a.alternate,
                  u = (null !== i && null !== i.memoizedState) || Yi;
                i = Gi;
                var c = Yi;
                if (((Gi = l), (Yi = u) && !c))
                  for (Zi = a; null !== Zi; )
                    (u = (l = Zi).child),
                      22 === l.tag && null !== l.memoizedState
                        ? ku(a)
                        : null !== u
                        ? ((u.return = l), (Zi = u))
                        : ku(a);
                for (; null !== o; ) (Zi = o), bu(o, t, n), (o = o.sibling);
                (Zi = a), (Gi = i), (Yi = c);
              }
              wu(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Zi = o))
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
                              : go(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var l = t.updateQueue;
                      null !== l && Ao(t, l, r);
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
                        Ao(t, i, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var c = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            c.autoFocus && n.focus();
                            break;
                          case "img":
                            c.src && (n.src = c.src);
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
                        var s = t.alternate;
                        if (null !== s) {
                          var f = s.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Ht(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Yi || (512 & t.flags && au(t));
              } catch (p) {
                Ec(t, t.return, p);
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
        function ku(e) {
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
                    Ec(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      Ec(t, a, u);
                    }
                  }
                  var o = t.return;
                  try {
                    au(t);
                  } catch (u) {
                    Ec(t, o, u);
                  }
                  break;
                case 5:
                  var l = t.return;
                  try {
                    au(t);
                  } catch (u) {
                    Ec(t, l, u);
                  }
              }
            } catch (u) {
              Ec(t, t.return, u);
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
        var Su,
          Eu = Math.ceil,
          Cu = w.ReactCurrentDispatcher,
          Pu = w.ReactCurrentOwner,
          Nu = w.ReactCurrentBatchConfig,
          _u = 0,
          Tu = null,
          Ou = null,
          ju = 0,
          Lu = 0,
          Ru = Ea(0),
          Fu = 0,
          zu = null,
          Mu = 0,
          Iu = 0,
          Du = 0,
          Au = null,
          Uu = null,
          Bu = 0,
          Hu = 1 / 0,
          $u = null,
          Wu = !1,
          Vu = null,
          Qu = null,
          qu = !1,
          Ku = null,
          Gu = 0,
          Yu = 0,
          Xu = null,
          Zu = -1,
          Ju = 0;
        function ec() {
          return 0 !== (6 & _u) ? Xe() : -1 !== Zu ? Zu : (Zu = Xe());
        }
        function tc(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & _u) && 0 !== ju
            ? ju & -ju
            : null !== mo.transition
            ? (0 === Ju && (Ju = ht()), Ju)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function nc(e, t, n, r) {
          if (50 < Yu) throw ((Yu = 0), (Xu = null), Error(o(185)));
          gt(e, n, r),
            (0 !== (2 & _u) && e === Tu) ||
              (e === Tu && (0 === (2 & _u) && (Iu |= n), 4 === Fu && ic(e, ju)),
              rc(e, r),
              1 === n &&
                0 === _u &&
                0 === (1 & t.mode) &&
                ((Hu = Xe() + 500), Aa && Ha()));
        }
        function rc(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var l = 31 - lt(o),
                i = 1 << l,
                u = a[l];
              -1 === u
                ? (0 !== (i & n) && 0 === (i & r)) || (a[l] = pt(i, t))
                : u <= t && (e.expiredLanes |= i),
                (o &= ~i);
            }
          })(e, t);
          var r = dt(e, e === Tu ? ju : 0);
          if (0 === r)
            null !== n && Ke(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ke(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Aa = !0), Ba(e);
                  })(uc.bind(null, e))
                : Ba(uc.bind(null, e)),
                la(function () {
                  0 === (6 & _u) && Ha();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Je;
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
              n = Tc(n, ac.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ac(e, t) {
          if (((Zu = -1), (Ju = 0), 0 !== (6 & _u))) throw Error(o(327));
          var n = e.callbackNode;
          if (kc() && e.callbackNode !== n) return null;
          var r = dt(e, e === Tu ? ju : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = mc(e, r);
          else {
            t = r;
            var a = _u;
            _u |= 2;
            var l = vc();
            for (
              (Tu === e && ju === t) ||
              (($u = null), (Hu = Xe() + 500), dc(e, t));
              ;

            )
              try {
                yc();
                break;
              } catch (u) {
                pc(e, u);
              }
            ko(),
              (Cu.current = l),
              (_u = a),
              null !== Ou ? (t = 0) : ((Tu = null), (ju = 0), (t = Fu));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = vt(e)) && ((r = a), (t = oc(e, a))),
              1 === t)
            )
              throw ((n = zu), dc(e, 0), ic(e, r), rc(e, Xe()), n);
            if (6 === t) ic(e, r);
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
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ir(o(), a)) return !1;
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
                  (2 === (t = mc(e, r)) &&
                    0 !== (l = vt(e)) &&
                    ((r = l), (t = oc(e, l))),
                  1 === t))
              )
                throw ((n = zu), dc(e, 0), ic(e, r), rc(e, Xe()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  xc(e, Uu, $u);
                  break;
                case 3:
                  if (
                    (ic(e, r),
                    (130023424 & r) === r && 10 < (t = Bu + 500 - Xe()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      ec(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(xc.bind(null, e, Uu, $u), t);
                    break;
                  }
                  xc(e, Uu, $u);
                  break;
                case 4:
                  if ((ic(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - lt(r);
                    (l = 1 << i), (i = t[i]) > a && (a = i), (r &= ~l);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
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
                    e.timeoutHandle = ra(xc.bind(null, e, Uu, $u), r);
                    break;
                  }
                  xc(e, Uu, $u);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return rc(e, Xe()), e.callbackNode === n ? ac.bind(null, e) : null;
        }
        function oc(e, t) {
          var n = Au;
          return (
            e.current.memoizedState.isDehydrated && (dc(e, t).flags |= 256),
            2 !== (e = mc(e, t)) && ((t = Uu), (Uu = n), null !== t && lc(t)),
            e
          );
        }
        function lc(e) {
          null === Uu ? (Uu = e) : Uu.push.apply(Uu, e);
        }
        function ic(e, t) {
          for (
            t &= ~Du,
              t &= ~Iu,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - lt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function uc(e) {
          if (0 !== (6 & _u)) throw Error(o(327));
          kc();
          var t = dt(e, 0);
          if (0 === (1 & t)) return rc(e, Xe()), null;
          var n = mc(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = vt(e);
            0 !== r && ((t = r), (n = oc(e, r)));
          }
          if (1 === n) throw ((n = zu), dc(e, 0), ic(e, t), rc(e, Xe()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xc(e, Uu, $u),
            rc(e, Xe()),
            null
          );
        }
        function cc(e, t) {
          var n = _u;
          _u |= 1;
          try {
            return e(t);
          } finally {
            0 === (_u = n) && ((Hu = Xe() + 500), Aa && Ha());
          }
        }
        function sc(e) {
          null !== Ku && 0 === Ku.tag && 0 === (6 & _u) && kc();
          var t = _u;
          _u |= 1;
          var n = Nu.transition,
            r = bt;
          try {
            if (((Nu.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Nu.transition = n), 0 === (6 & (_u = t)) && Ha();
          }
        }
        function fc() {
          (Lu = Ru.current), Ca(Ru);
        }
        function dc(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ou))
            for (n = Ou.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ra();
                  break;
                case 3:
                  ol(), Ca(Ta), Ca(_a), fl();
                  break;
                case 5:
                  il(r);
                  break;
                case 4:
                  ol();
                  break;
                case 13:
                case 19:
                  Ca(ul);
                  break;
                case 10:
                  So(r.type._context);
                  break;
                case 22:
                case 23:
                  fc();
              }
              n = n.return;
            }
          if (
            ((Tu = e),
            (Ou = e = Rc(e.current, null)),
            (ju = Lu = t),
            (Fu = 0),
            (zu = null),
            (Du = Iu = Mu = 0),
            (Uu = Au = null),
            null !== No)
          ) {
            for (t = 0; t < No.length; t++)
              if (null !== (r = (n = No[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var l = o.next;
                  (o.next = a), (r.next = l);
                }
                n.pending = r;
              }
            No = null;
          }
          return e;
        }
        function pc(e, t) {
          for (;;) {
            var n = Ou;
            try {
              if ((ko(), (dl.current = li), yl)) {
                for (var r = hl.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                yl = !1;
              }
              if (
                ((vl = 0),
                (gl = ml = hl = null),
                (bl = !1),
                (wl = 0),
                (Pu.current = null),
                null === n || null === n.return)
              ) {
                (Fu = 1), (zu = t), (Ou = null);
                break;
              }
              e: {
                var l = e,
                  i = n.return,
                  u = n,
                  c = t;
                if (
                  ((t = ju),
                  (u.flags |= 32768),
                  null !== c &&
                    "object" === typeof c &&
                    "function" === typeof c.then)
                ) {
                  var s = c,
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
                  var v = gi(i);
                  if (null !== v) {
                    (v.flags &= -257),
                      yi(v, i, u, 0, t),
                      1 & v.mode && mi(l, s, t),
                      (c = s);
                    var h = (t = v).updateQueue;
                    if (null === h) {
                      var m = new Set();
                      m.add(c), (t.updateQueue = m);
                    } else h.add(c);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    mi(l, s, t), hc();
                    break e;
                  }
                  c = Error(o(426));
                } else if (ao && 1 & u.mode) {
                  var g = gi(i);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      yi(g, i, u, 0, t),
                      ho(si(c, u));
                    break e;
                  }
                }
                (l = c = si(c, u)),
                  4 !== Fu && (Fu = 2),
                  null === Au ? (Au = [l]) : Au.push(l),
                  (l = i);
                do {
                  switch (l.tag) {
                    case 3:
                      (l.flags |= 65536),
                        (t &= -t),
                        (l.lanes |= t),
                        Io(l, vi(0, c, t));
                      break e;
                    case 1:
                      u = c;
                      var y = l.type,
                        b = l.stateNode;
                      if (
                        0 === (128 & l.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Qu || !Qu.has(b))))
                      ) {
                        (l.flags |= 65536),
                          (t &= -t),
                          (l.lanes |= t),
                          Io(l, hi(l, u, t));
                        break e;
                      }
                  }
                  l = l.return;
                } while (null !== l);
              }
              wc(n);
            } catch (w) {
              (t = w), Ou === n && null !== n && (Ou = n = n.return);
              continue;
            }
            break;
          }
        }
        function vc() {
          var e = Cu.current;
          return (Cu.current = li), null === e ? li : e;
        }
        function hc() {
          (0 !== Fu && 3 !== Fu && 2 !== Fu) || (Fu = 4),
            null === Tu ||
              (0 === (268435455 & Mu) && 0 === (268435455 & Iu)) ||
              ic(Tu, ju);
        }
        function mc(e, t) {
          var n = _u;
          _u |= 2;
          var r = vc();
          for ((Tu === e && ju === t) || (($u = null), dc(e, t)); ; )
            try {
              gc();
              break;
            } catch (a) {
              pc(e, a);
            }
          if ((ko(), (_u = n), (Cu.current = r), null !== Ou))
            throw Error(o(261));
          return (Tu = null), (ju = 0), Fu;
        }
        function gc() {
          for (; null !== Ou; ) bc(Ou);
        }
        function yc() {
          for (; null !== Ou && !Ge(); ) bc(Ou);
        }
        function bc(e) {
          var t = Su(e.alternate, e, Lu);
          (e.memoizedProps = e.pendingProps),
            null === t ? wc(e) : (Ou = t),
            (Pu.current = null);
        }
        function wc(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = qi(n, t, Lu))) return void (Ou = n);
            } else {
              if (null !== (n = Ki(n, t)))
                return (n.flags &= 32767), void (Ou = n);
              if (null === e) return (Fu = 6), void (Ou = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ou = t);
            Ou = t = e;
          } while (null !== t);
          0 === Fu && (Fu = 5);
        }
        function xc(e, t, n) {
          var r = bt,
            a = Nu.transition;
          try {
            (Nu.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  kc();
                } while (null !== Ku);
                if (0 !== (6 & _u)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var l = n.lanes | n.childLanes;
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
                      var a = 31 - lt(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, l),
                  e === Tu && ((Ou = Tu = null), (ju = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qu ||
                    ((qu = !0),
                    Tc(tt, function () {
                      return kc(), null;
                    })),
                  (l = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || l)
                ) {
                  (l = Nu.transition), (Nu.transition = null);
                  var i = bt;
                  bt = 1;
                  var u = _u;
                  (_u |= 4),
                    (Pu.current = null),
                    (function (e, t) {
                      if (((ea = Wt), pr((e = dr())))) {
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
                                l = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, l.nodeType;
                              } catch (x) {
                                n = null;
                                break e;
                              }
                              var i = 0,
                                u = -1,
                                c = -1,
                                s = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var v;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (u = i + a),
                                    d !== l ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (c = i + r),
                                    3 === d.nodeType &&
                                      (i += d.nodeValue.length),
                                    null !== (v = d.firstChild);

                                )
                                  (p = d), (d = v);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++s === a && (u = i),
                                    p === l && ++f === r && (c = i),
                                    null !== (v = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = v;
                              }
                              n =
                                -1 === u || -1 === c
                                  ? null
                                  : { start: u, end: c };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Wt = !1,
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
                              var h = t.alternate;
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
                                    if (null !== h) {
                                      var m = h.memoizedProps,
                                        g = h.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : go(t.type, m),
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
                                    throw Error(o(163));
                                }
                            } catch (x) {
                              Ec(t, t.return, x);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zi = e);
                              break;
                            }
                            Zi = t.return;
                          }
                      (h = tu), (tu = !1);
                    })(e, n),
                    mu(n, e),
                    vr(ta),
                    (Wt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    yu(n, e, a),
                    Ye(),
                    (_u = u),
                    (bt = i),
                    (Nu.transition = l);
                } else e.current = n;
                if (
                  (qu && ((qu = !1), (Ku = e), (Gu = a)),
                  (l = e.pendingLanes),
                  0 === l && (Qu = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  rc(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((a = t[n]).value, {
                      componentStack: a.stack,
                      digest: a.digest,
                    });
                if (Wu) throw ((Wu = !1), (e = Vu), (Vu = null), e);
                0 !== (1 & Gu) && 0 !== e.tag && kc(),
                  (l = e.pendingLanes),
                  0 !== (1 & l)
                    ? e === Xu
                      ? Yu++
                      : ((Yu = 0), (Xu = e))
                    : (Yu = 0),
                  Ha();
              })(e, t, n, r);
          } finally {
            (Nu.transition = a), (bt = r);
          }
          return null;
        }
        function kc() {
          if (null !== Ku) {
            var e = wt(Gu),
              t = Nu.transition,
              n = bt;
            try {
              if (((Nu.transition = null), (bt = 16 > e ? 16 : e), null === Ku))
                var r = !1;
              else {
                if (((e = Ku), (Ku = null), (Gu = 0), 0 !== (6 & _u)))
                  throw Error(o(331));
                var a = _u;
                for (_u |= 4, Zi = e.current; null !== Zi; ) {
                  var l = Zi,
                    i = l.child;
                  if (0 !== (16 & Zi.flags)) {
                    var u = l.deletions;
                    if (null !== u) {
                      for (var c = 0; c < u.length; c++) {
                        var s = u[c];
                        for (Zi = s; null !== Zi; ) {
                          var f = Zi;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nu(8, f, l);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Zi = d);
                          else
                            for (; null !== Zi; ) {
                              var p = (f = Zi).sibling,
                                v = f.return;
                              if ((ou(f), f === s)) {
                                Zi = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = v), (Zi = p);
                                break;
                              }
                              Zi = v;
                            }
                        }
                      }
                      var h = l.alternate;
                      if (null !== h) {
                        var m = h.child;
                        if (null !== m) {
                          h.child = null;
                          do {
                            var g = m.sibling;
                            (m.sibling = null), (m = g);
                          } while (null !== m);
                        }
                      }
                      Zi = l;
                    }
                  }
                  if (0 !== (2064 & l.subtreeFlags) && null !== i)
                    (i.return = l), (Zi = i);
                  else
                    e: for (; null !== Zi; ) {
                      if (0 !== (2048 & (l = Zi).flags))
                        switch (l.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nu(9, l, l.return);
                        }
                      var y = l.sibling;
                      if (null !== y) {
                        (y.return = l.return), (Zi = y);
                        break e;
                      }
                      Zi = l.return;
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
                        } catch (k) {
                          Ec(u, u.return, k);
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
                  ((_u = a),
                  Ha(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Nu.transition = t);
            }
          }
          return !1;
        }
        function Sc(e, t, n) {
          (e = zo(e, (t = vi(0, (t = si(n, t)), 1)), 1)),
            (t = ec()),
            null !== e && (gt(e, 1, t), rc(e, t));
        }
        function Ec(e, t, n) {
          if (3 === e.tag) Sc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Sc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Qu || !Qu.has(r)))
                ) {
                  (t = zo(t, (e = hi(t, (e = si(n, e)), 1)), 1)),
                    (e = ec()),
                    null !== t && (gt(t, 1, e), rc(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cc(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ec()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Tu === e &&
              (ju & n) === n &&
              (4 === Fu ||
              (3 === Fu && (130023424 & ju) === ju && 500 > Xe() - Bu)
                ? dc(e, 0)
                : (Du |= n)),
            rc(e, t);
        }
        function Pc(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = st), 0 === (130023424 & (st <<= 1)) && (st = 4194304)));
          var n = ec();
          null !== (e = Oo(e, t)) && (gt(e, t, n), rc(e, n));
        }
        function Nc(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Pc(e, n);
        }
        function _c(e, t) {
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
              throw Error(o(314));
          }
          null !== r && r.delete(t), Pc(e, n);
        }
        function Tc(e, t) {
          return qe(e, t);
        }
        function Oc(e, t, n, r) {
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
        function jc(e, t, n, r) {
          return new Oc(e, t, n, r);
        }
        function Lc(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Rc(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = jc(e.tag, t, e.key, e.mode)).elementType =
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
        function Fc(e, t, n, r, a, l) {
          var i = 2;
          if (((r = e), "function" === typeof e)) Lc(e) && (i = 1);
          else if ("string" === typeof e) i = 5;
          else
            e: switch (e) {
              case S:
                return zc(n.children, a, l, t);
              case E:
                (i = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = jc(12, n, t, 2 | a)).elementType = C), (e.lanes = l), e
                );
              case T:
                return (
                  ((e = jc(13, n, t, a)).elementType = T), (e.lanes = l), e
                );
              case O:
                return (
                  ((e = jc(19, n, t, a)).elementType = O), (e.lanes = l), e
                );
              case R:
                return Mc(n, a, l, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case P:
                      i = 10;
                      break e;
                    case N:
                      i = 9;
                      break e;
                    case _:
                      i = 11;
                      break e;
                    case j:
                      i = 14;
                      break e;
                    case L:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = jc(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = l),
            t
          );
        }
        function zc(e, t, n, r) {
          return ((e = jc(7, e, r, t)).lanes = n), e;
        }
        function Mc(e, t, n, r) {
          return (
            ((e = jc(22, e, r, t)).elementType = R),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Ic(e, t, n) {
          return ((e = jc(6, e, null, t)).lanes = n), e;
        }
        function Dc(e, t, n) {
          return (
            ((t = jc(
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
        function Ac(e, t, n, r, a) {
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
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Uc(e, t, n, r, a, o, l, i, u) {
          return (
            (e = new Ac(e, t, n, i, u)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = jc(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Lo(o),
            e
          );
        }
        function Bc(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: k,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Hc(e) {
          if (!e) return Na;
          e: {
            if (He((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
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
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (La(n)) return za(e, n, t);
          }
          return t;
        }
        function $c(e, t, n, r, a, o, l, i, u) {
          return (
            ((e = Uc(n, r, !0, e, 0, o, 0, i, u)).context = Hc(null)),
            (n = e.current),
            ((o = Fo((r = ec()), (a = tc(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            zo(n, o, a),
            (e.current.lanes = a),
            gt(e, a, r),
            rc(e, r),
            e
          );
        }
        function Wc(e, t, n, r) {
          var a = t.current,
            o = ec(),
            l = tc(a);
          return (
            (n = Hc(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Fo(o, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = zo(a, t, l)) && (nc(e, a, l, o), Mo(e, a, l)),
            l
          );
        }
        function Vc(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qc(e, t) {
          Qc(e, t), (e = e.alternate) && Qc(e, t);
        }
        Su = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ta.current) wi = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Oi(t), vo();
                        break;
                      case 5:
                        ll(t);
                        break;
                      case 1:
                        La(t.type) && Ma(t);
                        break;
                      case 4:
                        al(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Pa(yo, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Pa(ul, 1 & ul.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ii(e, t, n)
                            : (Pa(ul, 1 & ul.current),
                              null !== (e = Wi(e, t, n)) ? e.sibling : null);
                        Pa(ul, 1 & ul.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Hi(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Pa(ul, ul.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Ci(e, t, n);
                    }
                    return Wi(e, t, n);
                  })(e, t, n)
                );
              wi = 0 !== (131072 & e.flags);
            }
          else (wi = !1), ao && 0 !== (1048576 & t.flags) && Ja(t, Qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              $i(e, t), (e = t.pendingProps);
              var a = ja(t, _a.current);
              Co(t, n), (a = El(null, t, r, e, a, n));
              var l = Cl();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    La(r) ? ((l = !0), Ma(t)) : (l = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Lo(t),
                    (a.updater = Ho),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Qo(t, r, e, n),
                    (t = Ti(null, t, r, !0, l, n)))
                  : ((t.tag = 0),
                    ao && l && eo(t),
                    xi(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  ($i(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Lc(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === _) return 11;
                        if (e === j) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = go(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ni(null, t, r, e, n);
                    break e;
                  case 1:
                    t = _i(null, t, r, e, n);
                    break e;
                  case 11:
                    t = ki(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Si(null, t, r, go(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ni(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                _i(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              );
            case 3:
              e: {
                if ((Oi(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (l = t.memoizedState).element),
                  Ro(e, t),
                  Do(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), l.isDehydrated)) {
                  if (
                    ((l = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = l),
                    (t.memoizedState = l),
                    256 & t.flags)
                  ) {
                    t = ji(e, t, r, n, (a = si(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = ji(e, t, r, n, (a = si(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = ca(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = Zo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((vo(), r === a)) {
                    t = Wi(e, t, n);
                    break e;
                  }
                  xi(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ll(t),
                null === e && co(t),
                (r = t.type),
                (a = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (i = a.children),
                na(r, a)
                  ? (i = null)
                  : null !== l && na(r, l) && (t.flags |= 32),
                Pi(e, t),
                xi(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && co(t), null;
            case 13:
              return Ii(e, t, n);
            case 4:
              return (
                al(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xo(t, null, r, n)) : xi(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                ki(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
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
                  (l = t.memoizedProps),
                  (i = a.value),
                  Pa(yo, r._currentValue),
                  (r._currentValue = i),
                  null !== l)
                )
                  if (ir(l.value, i)) {
                    if (l.children === a.children && !Ta.current) {
                      t = Wi(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (l = t.child) && (l.return = t);
                      null !== l;

                    ) {
                      var u = l.dependencies;
                      if (null !== u) {
                        i = l.child;
                        for (var c = u.firstContext; null !== c; ) {
                          if (c.context === r) {
                            if (1 === l.tag) {
                              (c = Fo(-1, n & -n)).tag = 2;
                              var s = l.updateQueue;
                              if (null !== s) {
                                var f = (s = s.shared).pending;
                                null === f
                                  ? (c.next = c)
                                  : ((c.next = f.next), (f.next = c)),
                                  (s.pending = c);
                              }
                            }
                            (l.lanes |= n),
                              null !== (c = l.alternate) && (c.lanes |= n),
                              Eo(l.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === l.tag)
                        i = l.type === t.type ? null : l.child;
                      else if (18 === l.tag) {
                        if (null === (i = l.return)) throw Error(o(341));
                        (i.lanes |= n),
                          null !== (u = i.alternate) && (u.lanes |= n),
                          Eo(i, n, t),
                          (i = l.sibling);
                      } else i = l.child;
                      if (null !== i) i.return = l;
                      else
                        for (i = l; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (l = i.sibling)) {
                            (l.return = i.return), (i = l);
                            break;
                          }
                          i = i.return;
                        }
                      l = i;
                    }
                xi(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Co(t, n),
                (r = r((a = Po(a)))),
                (t.flags |= 1),
                xi(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = go((r = t.type), t.pendingProps)),
                Si(e, t, r, (a = go(r.type, a)), n)
              );
            case 15:
              return Ei(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : go(r, a)),
                $i(e, t),
                (t.tag = 1),
                La(r) ? ((e = !0), Ma(t)) : (e = !1),
                Co(t, n),
                Wo(t, r, a),
                Qo(t, r, a, n),
                Ti(null, t, r, !0, e, n)
              );
            case 19:
              return Hi(e, t, n);
            case 22:
              return Ci(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Kc =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Gc(e) {
          this._internalRoot = e;
        }
        function Yc(e) {
          this._internalRoot = e;
        }
        function Xc(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Jc() {}
        function es(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var l = o;
            if ("function" === typeof a) {
              var i = a;
              a = function () {
                var e = Vc(l);
                i.call(e);
              };
            }
            Wc(t, l, e, a);
          } else
            l = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Vc(l);
                    o.call(e);
                  };
                }
                var l = $c(t, r, e, 0, null, !1, 0, "", Jc);
                return (
                  (e._reactRootContainer = l),
                  (e[va] = l.current),
                  Hr(8 === e.nodeType ? e.parentNode : e),
                  sc(),
                  l
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var i = r;
                r = function () {
                  var e = Vc(u);
                  i.call(e);
                };
              }
              var u = Uc(e, 0, !1, null, 0, !1, 0, "", Jc);
              return (
                (e._reactRootContainer = u),
                (e[va] = u.current),
                Hr(8 === e.nodeType ? e.parentNode : e),
                sc(function () {
                  Wc(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return Vc(l);
        }
        (Yc.prototype.render = Gc.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Wc(e, t, null, null);
          }),
          (Yc.prototype.unmount = Gc.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                sc(function () {
                  Wc(null, e, null, null);
                }),
                  (t[va] = null);
              }
            }),
          (Yc.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Rt.length && 0 !== t && t < Rt[n].priority;
                n++
              );
              Rt.splice(n, 0, e), 0 === n && It(e);
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
                    rc(t, Xe()),
                    0 === (6 & _u) && ((Hu = Xe() + 500), Ha()));
                }
                break;
              case 13:
                sc(function () {
                  var t = Oo(e, 1);
                  if (null !== t) {
                    var n = ec();
                    nc(t, e, 1, n);
                  }
                }),
                  qc(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Oo(e, 134217728);
              if (null !== t) nc(t, e, 134217728, ec());
              qc(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = tc(e),
                n = Oo(e, t);
              if (null !== n) nc(n, e, t, ec());
              qc(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
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
                      if (!a) throw Error(o(90));
                      q(r), Z(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (_e = cc),
          (Te = sc);
        var ts = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, xa, Pe, Ne, cc],
          },
          ns = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rs = {
            bundleType: ns.bundleType,
            version: ns.version,
            rendererPackageName: ns.rendererPackageName,
            rendererConfig: ns.rendererConfig,
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
              return null === (e = Ve(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              ns.findFiberByHostInstance ||
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
          var as = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!as.isDisabled && as.supportsFiber)
            try {
              (at = as.inject(rs)), (ot = as);
            } catch (se) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ts),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xc(t)) throw Error(o(200));
            return Bc(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xc(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = Kc;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Uc(e, 1, !1, null, 0, n, 0, r, a)),
              (e[va] = t.current),
              Hr(8 === e.nodeType ? e.parentNode : e),
              new Gc(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = Ve(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return sc(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zc(t)) throw Error(o(200));
            return es(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xc(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              l = "",
              i = Kc;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = $c(t, null, e, 1, null != n ? n : null, a, 0, l, i)),
              (e[va] = t.current),
              Hr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Yc(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zc(t)) throw Error(o(200));
            return es(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zc(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (sc(function () {
                es(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[va] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cc),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zc(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return es(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
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
      374: function (e, t, n) {
        var r = n(791),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          l = Object.prototype.hasOwnProperty,
          i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(e, t, n) {
          var r,
            o = {},
            c = null,
            s = null;
          for (r in (void 0 !== n && (c = "" + n),
          void 0 !== t.key && (c = "" + t.key),
          void 0 !== t.ref && (s = t.ref),
          t))
            l.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: c,
            ref: s,
            props: o,
            _owner: i.current,
          };
        }
        (t.Fragment = o), (t.jsx = c), (t.jsxs = c);
      },
      117: function (e, t) {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          s = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var v = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          m = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || v);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || v);
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
        (w.constructor = b), h(w, g.prototype), (w.isPureReactComponent = !0);
        var x = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            o = {},
            l = null,
            i = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (l = "" + t.key),
            t))
              k.call(t, a) && !E.hasOwnProperty(a) && (o[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) o.children = r;
          else if (1 < u) {
            for (var c = Array(u), s = 0; s < u; s++) c[s] = arguments[s + 2];
            o.children = c;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === o[a] && (o[a] = u[a]);
          return {
            $$typeof: n,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: S.current,
          };
        }
        function P(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var N = /\/+/g;
        function _(e, t) {
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
        function T(e, t, a, o, l) {
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
              (l = l((u = e))),
              (e = "" === o ? "." + _(u, 0) : o),
              x(l)
                ? ((a = ""),
                  null != e && (a = e.replace(N, "$&/") + "/"),
                  T(l, t, a, "", function (e) {
                    return e;
                  }))
                : null != l &&
                  (P(l) &&
                    (l = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      l,
                      a +
                        (!l.key || (u && u.key === l.key)
                          ? ""
                          : ("" + l.key).replace(N, "$&/") + "/") +
                        e
                    )),
                  t.push(l)),
              1
            );
          if (((u = 0), (o = "" === o ? "." : o + ":"), x(e)))
            for (var c = 0; c < e.length; c++) {
              var s = o + _((i = e[c]), c);
              u += T(i, t, a, s, l);
            }
          else if (
            ((s = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof s)
          )
            for (e = s.call(e), c = 0; !(i = e.next()).done; )
              u += T((i = i.value), t, a, (s = o + _(i, c++)), l);
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
        function O(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            T(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function j(e) {
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
          R = { transition: null },
          F = {
            ReactCurrentDispatcher: L,
            ReactCurrentBatchConfig: R,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: O,
          forEach: function (e, t, n) {
            O(
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
              O(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              O(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!P(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = l),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = s),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = h({}, e.props),
              o = e.key,
              l = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (i = S.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (c in t)
                k.call(t, c) &&
                  !E.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = r;
            else if (1 < c) {
              u = Array(c);
              for (var s = 0; s < c; s++) u[s] = arguments[s + 2];
              a.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: l,
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
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = P),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: j,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = R.transition;
            R.transition = {};
            try {
              e();
            } finally {
              R.transition = t;
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
        e.exports = n(117);
      },
      184: function (e, t, n) {
        e.exports = n(374);
      },
      813: function (e, t) {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
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
            e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                c = i + 1,
                s = e[c];
              if (0 > o(u, n))
                c < a && 0 > o(s, u)
                  ? ((e[r] = s), (e[c] = n), (r = c))
                  : ((e[r] = u), (e[i] = n), (r = i));
              else {
                if (!(c < a && 0 > o(s, n))) break e;
                (e[r] = s), (e[c] = n), (r = c);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var l = performance;
          t.unstable_now = function () {
            return l.now();
          };
        } else {
          var i = Date,
            u = i.now();
          t.unstable_now = function () {
            return i.now() - u;
          };
        }
        var c = [],
          s = [],
          f = 1,
          d = null,
          p = 3,
          v = !1,
          h = !1,
          m = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(s); null !== t; ) {
            if (null === t.callback) a(s);
            else {
              if (!(t.startTime <= e)) break;
              a(s), (t.sortIndex = t.expirationTime), n(c, t);
            }
            t = r(s);
          }
        }
        function x(e) {
          if (((m = !1), w(e), !h))
            if (null !== r(c)) (h = !0), R(k);
            else {
              var t = r(s);
              null !== t && F(x, t.startTime - e);
            }
        }
        function k(e, n) {
          (h = !1), m && ((m = !1), y(P), (P = -1)), (v = !0);
          var o = p;
          try {
            for (
              w(n), d = r(c);
              null !== d && (!(d.expirationTime > n) || (e && !T()));

            ) {
              var l = d.callback;
              if ("function" === typeof l) {
                (d.callback = null), (p = d.priorityLevel);
                var i = l(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof i
                    ? (d.callback = i)
                    : d === r(c) && a(c),
                  w(n);
              } else a(c);
              d = r(c);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(s);
              null !== f && F(x, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = o), (v = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          E = !1,
          C = null,
          P = -1,
          N = 5,
          _ = -1;
        function T() {
          return !(t.unstable_now() - _ < N);
        }
        function O() {
          if (null !== C) {
            var e = t.unstable_now();
            _ = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? S() : ((E = !1), (C = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(O);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var j = new MessageChannel(),
            L = j.port2;
          (j.port1.onmessage = O),
            (S = function () {
              L.postMessage(null);
            });
        } else
          S = function () {
            g(O, 0);
          };
        function R(e) {
          (C = e), E || ((E = !0), S());
        }
        function F(e, n) {
          P = g(function () {
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
            h || v || ((h = !0), R(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (N = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(c);
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
          (t.unstable_scheduleCallback = function (e, a, o) {
            var l = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? l + o : l)
                : (o = l),
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
                startTime: o,
                expirationTime: (i = o + i),
                sortIndex: -1,
              }),
              o > l
                ? ((e.sortIndex = o),
                  n(s, e),
                  null === r(c) &&
                    e === r(s) &&
                    (m ? (y(P), (P = -1)) : (m = !0), F(x, o - l)))
                : ((e.sortIndex = i), n(c, e), h || v || ((h = !0), R(k))),
              e
            );
          }),
          (t.unstable_shouldYield = T),
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
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.m = e),
    (function () {
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
        var o = Object.create(null);
        n.r(o);
        var l = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var i = 2 & a && r;
          "object" == typeof i && !~e.indexOf(i);
          i = t(i)
        )
          Object.getOwnPropertyNames(i).forEach(function (e) {
            l[e] = function () {
              return r[e];
            };
          });
        return (
          (l.default = function () {
            return r;
          }),
          n.d(o, l),
          o
        );
      };
    })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = function (e) {
      return Promise.all(
        Object.keys(n.f).reduce(function (t, r) {
          return n.f[r](e, t), t;
        }, [])
      );
    }),
    (n.u = function (e) {
      return "static/js/" + e + ".cfd8ccb6.chunk.js";
    }),
    (n.miniCssF = function (e) {}),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = {},
        t = "color:";
      n.l = function (r, a, o, l) {
        if (e[r]) e[r].push(a);
        else {
          var i, u;
          if (void 0 !== o)
            for (
              var c = document.getElementsByTagName("script"), s = 0;
              s < c.length;
              s++
            ) {
              var f = c[s];
              if (
                f.getAttribute("src") == r ||
                f.getAttribute("data-webpack") == t + o
              ) {
                i = f;
                break;
              }
            }
          i ||
            ((u = !0),
            ((i = document.createElement("script")).charset = "utf-8"),
            (i.timeout = 120),
            n.nc && i.setAttribute("nonce", n.nc),
            i.setAttribute("data-webpack", t + o),
            (i.src = r)),
            (e[r] = [a]);
          var d = function (t, n) {
              (i.onerror = i.onload = null), clearTimeout(p);
              var a = e[r];
              if (
                (delete e[r],
                i.parentNode && i.parentNode.removeChild(i),
                a &&
                  a.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: i }),
              12e4
            );
          (i.onerror = d.bind(null, i.onerror)),
            (i.onload = d.bind(null, i.onload)),
            u && document.head.appendChild(i);
        }
      };
    })(),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      var e = { 179: 0 };
      n.f.j = function (t, r) {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var o = new Promise(function (n, r) {
              a = e[t] = [n, r];
            });
            r.push((a[2] = o));
            var l = n.p + n.u(t),
              i = new Error();
            n.l(
              l,
              function (r) {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    l = r && r.target && r.target.src;
                  (i.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + l + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = o),
                    (i.request = l),
                    a[1](i);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = function (t, r) {
          var a,
            o,
            l = r[0],
            i = r[1],
            u = r[2],
            c = 0;
          if (
            l.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (a in i) n.o(i, a) && (n.m[a] = i[a]);
            if (u) u(n);
          }
          for (t && t(r); c < l.length; c++)
            (o = l[c]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        r = (self.webpackChunkcolor = self.webpackChunkcolor || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (function () {
      var e,
        t = n(791),
        r = n.t(t, 2),
        a = n(250);
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function l(e, t) {
        if (e) {
          if ("string" === typeof e) return o(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? o(e, t)
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
                o,
                l,
                i = [],
                u = !0,
                c = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (i.push(r.value), i.length !== t);
                    u = !0
                  );
              } catch (s) {
                (c = !0), (a = s);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((l = n.return()), Object(l) !== l)
                  )
                    return;
                } finally {
                  if (c) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          l(e, t) ||
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
            if (Array.isArray(e)) return o(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          l(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e) {
        return (
          (s =
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
          s(e)
        );
      }
      function f(e) {
        var t = (function (e, t) {
          if ("object" !== s(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== s(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === s(t) ? t : String(t);
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
      function v(e, t) {
        return (
          (v = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          v(e, t)
        );
      }
      function h(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && v(e, t);
      }
      function m(e) {
        return (
          (m = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          m(e)
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
        } catch (At) {
          return !1;
        }
      }
      function y(e, t) {
        if (t && ("object" === s(t) || "function" === typeof t)) return t;
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
            r = m(e);
          if (t) {
            var a = m(this).constructor;
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
                return n && v(a, n.prototype), a;
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
              return w(e, arguments, m(this).constructor);
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
              v(r, e)
            );
          }),
          x(e)
        );
      }
      function k() {
        return (
          (k = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          k.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var S,
        E = "popstate";
      function C(e) {
        return { usr: e.state, key: e.key };
      }
      function P(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          k(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? _(t) : t,
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
          o = e.hash,
          l = void 0 === o ? "" : o;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          l && "#" !== l && (n += "#" === l.charAt(0) ? l : "#" + l),
          n
        );
      }
      function _(e) {
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
      function T(e) {
        var t =
            "undefined" !== typeof window &&
            "undefined" !== typeof window.location &&
            "null" !== window.location.origin
              ? window.location.origin
              : "unknown://unknown",
          n = "string" === typeof e ? e : N(e);
        return new URL(n, t);
      }
      function O(t, n, r, a) {
        void 0 === a && (a = {});
        var o = a,
          l = o.window,
          i = void 0 === l ? document.defaultView : l,
          u = o.v5Compat,
          c = void 0 !== u && u,
          s = i.history,
          f = e.Pop,
          d = null;
        function p() {
          (f = e.Pop), d && d({ action: f, location: v.location });
        }
        var v = {
          get action() {
            return f;
          },
          get location() {
            return t(i, s);
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
            var t = T("string" === typeof e ? e : N(e));
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (t, n) {
            f = e.Push;
            var a = P(v.location, t, n);
            r && r(a, t);
            var o = C(a),
              l = v.createHref(a);
            try {
              s.pushState(o, "", l);
            } catch (u) {
              i.location.assign(l);
            }
            c && d && d({ action: f, location: v.location });
          },
          replace: function (t, n) {
            f = e.Replace;
            var a = P(v.location, t, n);
            r && r(a, t);
            var o = C(a),
              l = v.createHref(a);
            s.replaceState(o, "", l),
              c && d && d({ action: f, location: v.location });
          },
          go: function (e) {
            return s.go(e);
          },
        };
        return v;
      }
      function j(e, t, n) {
        void 0 === n && (n = "/");
        var r = A(("string" === typeof t ? _(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = L(e);
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
        for (var o = null, l = 0; null == o && l < a.length; ++l)
          o = M(a[l], D(r));
        return o;
      }
      function L(e, t, n, r) {
        return (
          void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = ""),
          e.forEach(function (e, a) {
            var o = {
              relativePath: e.path || "",
              caseSensitive: !0 === e.caseSensitive,
              childrenIndex: a,
              route: e,
            };
            o.relativePath.startsWith("/") &&
              (U(
                o.relativePath.startsWith(r),
                'Absolute route path "' +
                  o.relativePath +
                  '" nested under path "' +
                  r +
                  '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
              ),
              (o.relativePath = o.relativePath.slice(r.length)));
            var l = H([r, o.relativePath]),
              i = n.concat(o);
            e.children &&
              e.children.length > 0 &&
              (U(
                !0 !== e.index,
                'Index routes must not have child routes. Please remove all child routes from route path "' +
                  l +
                  '".'
              ),
              L(e.children, t, i, l)),
              (null != e.path || e.index) &&
                t.push({ path: l, score: z(l, e.index), routesMeta: i });
          }),
          t
        );
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(S || (S = {}));
      var R = /^:\w+$/,
        F = function (e) {
          return "*" === e;
        };
      function z(e, t) {
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
              return e + (R.test(t) ? 3 : "" === t ? 1 : 10);
            }, r)
        );
      }
      function M(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", o = [], l = 0;
          l < n.length;
          ++l
        ) {
          var i = n[l],
            u = l === n.length - 1,
            c = "/" === a ? t : t.slice(a.length) || "/",
            s = I(
              { path: i.relativePath, caseSensitive: i.caseSensitive, end: u },
              c
            );
          if (!s) return null;
          Object.assign(r, s.params);
          var f = i.route;
          o.push({
            params: r,
            pathname: H([a, s.pathname]),
            pathnameBase: $(H([a, s.pathnameBase])),
            route: f,
          }),
            "/" !== s.pathnameBase && (a = H([a, s.pathnameBase]));
        }
        return o;
      }
      function I(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            B(
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
            var o = new RegExp(a, t ? void 0 : "i");
            return [o, r];
          })(e.path, e.caseSensitive, e.end),
          r = i(n, 2),
          a = r[0],
          o = r[1],
          l = t.match(a);
        if (!l) return null;
        var u = l[0],
          c = u.replace(/(.)\/+$/, "$1"),
          s = l.slice(1);
        return {
          params: o.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = s[n] || "";
              c = u.slice(0, u.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    B(
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
              })(s[n] || "", t)),
              e
            );
          }, {}),
          pathname: u,
          pathnameBase: c,
          pattern: e,
        };
      }
      function D(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            B(
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
      function A(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function U(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function B(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (At) {}
        }
      }
      var H = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        $ = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        W = (function (e) {
          h(n, e);
          var t = b(n);
          function n() {
            return c(this, n), t.apply(this, arguments);
          }
          return p(n);
        })(x(Error));
      var V = p(function e(t, n, r, a) {
        c(this, e),
          void 0 === a && (a = !1),
          (this.status = t),
          (this.statusText = n || ""),
          (this.internal = a),
          r instanceof Error
            ? ((this.data = r.toString()), (this.error = r))
            : (this.data = r);
      });
      function Q(e) {
        return e instanceof V;
      }
      var q = ["post", "put", "patch", "delete"],
        K = (new Set(q), ["get"].concat(q));
      new Set(K),
        new Set([301, 302, 303, 307, 308]),
        new Set([307, 308]),
        "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          window.document.createElement;
      function G() {
        return (
          (G = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          G.apply(this, arguments)
        );
      }
      var Y =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        X = t.useState,
        Z = t.useEffect,
        J = t.useLayoutEffect,
        ee = t.useDebugValue;
      function te(e) {
        var t = e.getSnapshot,
          n = e.value;
        try {
          var r = t();
          return !Y(n, r);
        } catch (a) {
          return !0;
        }
      }
      "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        window.document.createElement,
        r.useSyncExternalStore;
      var ne = t.createContext(null);
      var re = t.createContext(null);
      var ae = t.createContext(null);
      var oe = t.createContext(null);
      var le = t.createContext(null);
      var ie = t.createContext(null);
      var ue = t.createContext({ outlet: null, matches: [] });
      var ce = t.createContext(null);
      function se() {
        return null != t.useContext(ie);
      }
      function fe() {
        return se() || U(!1), t.useContext(ie).location;
      }
      function de() {
        var e = (function () {
            var e,
              n = t.useContext(ce),
              r = ye(ve.UseRouteError),
              a = t.useContext(ue),
              o = a.matches[a.matches.length - 1];
            if (n) return n;
            return (
              a || U(!1),
              !o.route.id && U(!1),
              null == (e = r.errors) ? void 0 : e[o.route.id]
            );
          })(),
          n = Q(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = "rgba(200,200,200, 0.5)",
          o = { padding: "0.5rem", backgroundColor: a },
          l = { padding: "2px 4px", backgroundColor: a };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement("h2", null, "Unhandled Thrown Error!"),
          t.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? t.createElement("pre", { style: o }, r) : null,
          t.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"),
          t.createElement(
            "p",
            null,
            "You can provide a way better UX than this when your app throws errors by providing your own\xa0",
            t.createElement("code", { style: l }, "errorElement"),
            " props on\xa0",
            t.createElement("code", { style: l }, "<Route>")
          )
        );
      }
      var pe,
        ve,
        he = (function (e) {
          h(r, e);
          var n = b(r);
          function r(e) {
            var t;
            return (
              c(this, r),
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
                      ? t.createElement(ce.Provider, {
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
      function me(e) {
        var n = e.routeContext,
          r = e.match,
          a = e.children,
          o = t.useContext(ne);
        return (
          o &&
            r.route.errorElement &&
            (o._deepestRenderedBoundaryId = r.route.id),
          t.createElement(ue.Provider, { value: n }, a)
        );
      }
      function ge(e, n, r) {
        if ((void 0 === n && (n = []), null == e)) {
          if (null == r || !r.errors) return null;
          e = r.matches;
        }
        var a = e,
          o = null == r ? void 0 : r.errors;
        if (null != o) {
          var l = a.findIndex(function (e) {
            return e.route.id && (null == o ? void 0 : o[e.route.id]);
          });
          l >= 0 || U(!1), (a = a.slice(0, Math.min(a.length, l + 1)));
        }
        return a.reduceRight(function (e, l, i) {
          var u = l.route.id ? (null == o ? void 0 : o[l.route.id]) : null,
            c = r ? l.route.errorElement || t.createElement(de, null) : null,
            s = function () {
              return t.createElement(
                me,
                {
                  match: l,
                  routeContext: {
                    outlet: e,
                    matches: n.concat(a.slice(0, i + 1)),
                  },
                },
                u ? c : void 0 !== l.route.element ? l.route.element : e
              );
            };
          return r && (l.route.errorElement || 0 === i)
            ? t.createElement(he, {
                location: r.location,
                component: c,
                error: u,
                children: s(),
              })
            : s();
        }, null);
      }
      function ye(e) {
        var n = t.useContext(ae);
        return n || U(!1), n;
      }
      !(function (e) {
        e.UseRevalidator = "useRevalidator";
      })(pe || (pe = {})),
        (function (e) {
          (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator");
        })(ve || (ve = {}));
      var be;
      function we(e) {
        U(!1);
      }
      function xe(n) {
        var r = n.basename,
          a = void 0 === r ? "/" : r,
          o = n.children,
          l = void 0 === o ? null : o,
          i = n.location,
          u = n.navigationType,
          c = void 0 === u ? e.Pop : u,
          s = n.navigator,
          f = n.static,
          d = void 0 !== f && f;
        se() && U(!1);
        var p = a.replace(/^\/*/, "/"),
          v = t.useMemo(
            function () {
              return { basename: p, navigator: s, static: d };
            },
            [p, s, d]
          );
        "string" === typeof i && (i = _(i));
        var h = i,
          m = h.pathname,
          g = void 0 === m ? "/" : m,
          y = h.search,
          b = void 0 === y ? "" : y,
          w = h.hash,
          x = void 0 === w ? "" : w,
          k = h.state,
          S = void 0 === k ? null : k,
          E = h.key,
          C = void 0 === E ? "default" : E,
          P = t.useMemo(
            function () {
              var e = A(g, p);
              return null == e
                ? null
                : { pathname: e, search: b, hash: x, state: S, key: C };
            },
            [p, g, b, x, S, C]
          );
        return null == P
          ? null
          : t.createElement(
              le.Provider,
              { value: v },
              t.createElement(ie.Provider, {
                children: l,
                value: { location: P, navigationType: c },
              })
            );
      }
      function ke(n) {
        var r = n.children,
          a = n.location,
          o = t.useContext(re);
        return (function (n, r) {
          se() || U(!1);
          var a,
            o = t.useContext(le).navigator,
            l = t.useContext(ae),
            i = t.useContext(ue).matches,
            u = i[i.length - 1],
            c = u ? u.params : {},
            s = (u && u.pathname, u ? u.pathnameBase : "/"),
            f = (u && u.route, fe());
          if (r) {
            var d,
              p = "string" === typeof r ? _(r) : r;
            "/" === s ||
              (null == (d = p.pathname) ? void 0 : d.startsWith(s)) ||
              U(!1),
              (a = p);
          } else a = f;
          var v = a.pathname || "/",
            h = j(n, { pathname: "/" === s ? v : v.slice(s.length) || "/" }),
            m = ge(
              h &&
                h.map(function (e) {
                  return Object.assign({}, e, {
                    params: Object.assign({}, c, e.params),
                    pathname: H([
                      s,
                      o.encodeLocation
                        ? o.encodeLocation(e.pathname).pathname
                        : e.pathname,
                    ]),
                    pathnameBase:
                      "/" === e.pathnameBase
                        ? s
                        : H([
                            s,
                            o.encodeLocation
                              ? o.encodeLocation(e.pathnameBase).pathname
                              : e.pathnameBase,
                          ]),
                  });
                }),
              i,
              l || void 0
            );
          return r && m
            ? t.createElement(
                ie.Provider,
                {
                  value: {
                    location: G(
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
                m
              )
            : m;
        })(o && !r ? o.router.routes : Ee(r), a);
      }
      !(function (e) {
        (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error");
      })(be || (be = {}));
      var Se = new Promise(function () {});
      t.Component;
      function Ee(e, n) {
        void 0 === n && (n = []);
        var r = [];
        return (
          t.Children.forEach(e, function (e, a) {
            if (t.isValidElement(e))
              if (e.type !== t.Fragment) {
                e.type !== we && U(!1),
                  e.props.index && e.props.children && U(!1);
                var o = [].concat(u(n), [a]),
                  l = {
                    id: e.props.id || o.join("-"),
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
                e.props.children && (l.children = Ee(e.props.children, o)),
                  r.push(l);
              } else r.push.apply(r, Ee(e.props.children, n));
          }),
          r
        );
      }
      function Ce(e) {
        var n,
          r = e.basename,
          a = e.children,
          o = e.window,
          l = t.useRef();
        null == l.current &&
          (l.current =
            (void 0 === (n = { window: o, v5Compat: !0 }) && (n = {}),
            O(
              function (e, t) {
                var n = e.location;
                return P(
                  "",
                  { pathname: n.pathname, search: n.search, hash: n.hash },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : N(t);
              },
              null,
              n
            )));
        var u = l.current,
          c = i(t.useState({ action: u.action, location: u.location }), 2),
          s = c[0],
          f = c[1];
        return (
          t.useLayoutEffect(
            function () {
              return u.listen(f);
            },
            [u]
          ),
          t.createElement(xe, {
            basename: r,
            children: a,
            location: s.location,
            navigationType: s.action,
            navigator: u,
          })
        );
      }
      var Pe, Ne;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmitImpl = "useSubmitImpl"),
          (e.UseFetcher = "useFetcher");
      })(Pe || (Pe = {})),
        (function (e) {
          (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(Ne || (Ne = {}));
      function _e(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = l(e)) ||
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
        var o,
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
            (u = !0), (o = e);
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (u) throw o;
            }
          },
        };
      }
      function Te(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Oe(e, t, n) {
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
      function je(e, t) {
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
      function Le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? je(Object(n), !0).forEach(function (t) {
                Oe(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : je(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Re(e, t) {
        if (e in t) {
          for (
            var n = t[e],
              r = arguments.length,
              a = new Array(r > 2 ? r - 2 : 0),
              o = 2;
            o < r;
            o++
          )
            a[o - 2] = arguments[o];
          return "function" == typeof n ? n.apply(void 0, a) : n;
        }
        var l = new Error(
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
        throw (Error.captureStackTrace && Error.captureStackTrace(l, Re), l);
      }
      var Fe = ["static"],
        ze = ["unmount"],
        Me = ["as", "children", "refName"],
        Ie = (function (e) {
          return (
            (e[(e.None = 0)] = "None"),
            (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
            (e[(e.Static = 2)] = "Static"),
            e
          );
        })(Ie || {}),
        De = (function (e) {
          return (
            (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
          );
        })(De || {});
      function Ae(e) {
        var t = e.ourProps,
          n = e.theirProps,
          r = e.slot,
          a = e.defaultTag,
          o = e.features,
          l = e.visible,
          i = void 0 === l || l,
          u = e.name,
          c = He(n, t);
        if (i) return Ue(c, r, a, u);
        var s = null != o ? o : 0;
        if (2 & s) {
          var f = c.static,
            d = void 0 !== f && f,
            p = Te(c, Fe);
          if (d) return Ue(p, r, a, u);
        }
        if (1 & s) {
          var v,
            h = c.unmount,
            m = void 0 === h || h,
            g = Te(c, ze);
          return Re(
            m ? 0 : 1,
            (Oe((v = {}), 0, function () {
              return null;
            }),
            Oe(v, 1, function () {
              return Ue(
                Le(Le({}, g), {}, { hidden: !0, style: { display: "none" } }),
                r,
                a,
                u
              );
            }),
            v)
          );
        }
        return Ue(c, r, a, u);
      }
      function Ue(e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = arguments.length > 2 ? arguments[2] : void 0,
          a = arguments.length > 3 ? arguments[3] : void 0,
          o = Ve(e, ["unmount", "static"]),
          l = o.as,
          u = void 0 === l ? r : l,
          c = o.children,
          s = o.refName,
          f = void 0 === s ? "ref" : s,
          d = Te(o, Me),
          p = void 0 !== e.ref ? Oe({}, f, e.ref) : {},
          v = "function" == typeof c ? c(n) : c;
        d.className &&
          "function" == typeof d.className &&
          (d.className = d.className(n));
        var h = {};
        if (n) {
          for (
            var m = !1, g = [], y = 0, b = Object.entries(n);
            y < b.length;
            y++
          ) {
            var w = i(b[y], 2),
              x = w[0],
              k = w[1];
            "boolean" == typeof k && (m = !0), !0 === k && g.push(x);
          }
          m && (h["data-headlessui-state"] = g.join(" "));
        }
        if (u === t.Fragment && Object.keys(We(d)).length > 0) {
          if (!(0, t.isValidElement)(v) || (Array.isArray(v) && v.length > 1))
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
            v,
            Object.assign(
              {},
              He(v.props, We(Ve(d, ["ref"]))),
              h,
              p,
              Be(v.ref, p.ref)
            )
          );
        }
        return (0, t.createElement)(
          u,
          Object.assign(
            {},
            Ve(d, ["ref"]),
            u !== t.Fragment && p,
            u !== t.Fragment && h
          ),
          v
        );
      }
      function Be() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return {
          ref: t.every(function (e) {
            return null == e;
          })
            ? void 0
            : function (e) {
                var n,
                  r = _e(t);
                try {
                  for (r.s(); !(n = r.n()).done; ) {
                    var a = n.value;
                    null != a &&
                      ("function" == typeof a ? a(e) : (a.current = e));
                  }
                } catch (o) {
                  r.e(o);
                } finally {
                  r.f();
                }
              },
        };
      }
      function He() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if (0 === t.length) return {};
        if (1 === t.length) return t[0];
        for (var r = {}, a = {}, o = 0, l = t; o < l.length; o++) {
          var i = l[o];
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
        var c = function (e) {
          Object.assign(
            r,
            Oe({}, e, function (t) {
              for (
                var n = a[e],
                  r = arguments.length,
                  o = new Array(r > 1 ? r - 1 : 0),
                  l = 1;
                l < r;
                l++
              )
                o[l - 1] = arguments[l];
              var i,
                u = _e(n);
              try {
                for (u.s(); !(i = u.n()).done; ) {
                  var c = i.value;
                  if (
                    (t instanceof Event ||
                      (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                    t.defaultPrevented
                  )
                    return;
                  c.apply(void 0, [t].concat(o));
                }
              } catch (s) {
                u.e(s);
              } finally {
                u.f();
              }
            })
          );
        };
        for (var s in a) c(s);
        return r;
      }
      function $e(e) {
        var n;
        return Object.assign((0, t.forwardRef)(e), {
          displayName: null != (n = e.displayName) ? n : e.name,
        });
      }
      function We(e) {
        var t = Object.assign({}, e);
        for (var n in t) void 0 === t[n] && delete t[n];
        return t;
      }
      function Ve(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = Object.assign({}, e),
          a = _e(n);
        try {
          for (a.s(); !(t = a.n()).done; ) {
            var o = t.value;
            o in r && delete r[o];
          }
        } catch (l) {
          a.e(l);
        } finally {
          a.f();
        }
        return r;
      }
      var Qe = "undefined" == typeof window || "undefined" == typeof document,
        qe = Qe ? t.useEffect : t.useLayoutEffect;
      function Ke(e) {
        var n = (0, t.useRef)(e);
        return (
          qe(
            function () {
              n.current = e;
            },
            [e]
          ),
          n
        );
      }
      var Ge = function (e) {
          var n = Ke(e);
          return t.useCallback(
            function () {
              return n.current.apply(n, arguments);
            },
            [n]
          );
        },
        Ye = Symbol();
      function Xe(e) {
        var t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return Object.assign(e, Oe({}, Ye, t));
      }
      function Ze() {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
          n[r] = arguments[r];
        var a = (0, t.useRef)(n);
        (0, t.useEffect)(
          function () {
            a.current = n;
          },
          [n]
        );
        var o = Ge(function (e) {
          var t,
            n = _e(a.current);
          try {
            for (n.s(); !(t = n.n()).done; ) {
              var r = t.value;
              null != r && ("function" == typeof r ? r(e) : (r.current = e));
            }
          } catch (o) {
            n.e(o);
          } finally {
            n.f();
          }
        });
        return n.every(function (e) {
          return null == e || (null == e ? void 0 : e[Ye]);
        })
          ? void 0
          : o;
      }
      var Je = (function (e) {
        return (
          (e.Space = " "),
          (e.Enter = "Enter"),
          (e.Escape = "Escape"),
          (e.Backspace = "Backspace"),
          (e.Delete = "Delete"),
          (e.ArrowLeft = "ArrowLeft"),
          (e.ArrowUp = "ArrowUp"),
          (e.ArrowRight = "ArrowRight"),
          (e.ArrowDown = "ArrowDown"),
          (e.Home = "Home"),
          (e.End = "End"),
          (e.PageUp = "PageUp"),
          (e.PageDown = "PageDown"),
          (e.Tab = "Tab"),
          e
        );
      })(Je || {});
      function et(e) {
        for (
          var t = e.parentElement, n = null;
          t && !(t instanceof HTMLFieldSetElement);

        )
          t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
        var r = "" === (null == t ? void 0 : t.getAttribute("disabled"));
        return (
          (!r ||
            !(function (e) {
              if (!e) return !1;
              for (var t = e.previousElementSibling; null !== t; ) {
                if (t instanceof HTMLLegendElement) return !1;
                t = t.previousElementSibling;
              }
              return !0;
            })(n)) &&
          r
        );
      }
      var tt,
        nt = { serverHandoffComplete: !1 };
      function rt() {
        var e = i((0, t.useState)(nt.serverHandoffComplete), 2),
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
            !1 === nt.serverHandoffComplete && (nt.serverHandoffComplete = !0);
          }, []),
          n
        );
      }
      var at = 0;
      function ot() {
        return ++at;
      }
      var lt =
          null != (tt = t.useId)
            ? tt
            : function () {
                var e = rt(),
                  n = i(t.useState(e ? ot : null), 2),
                  r = n[0],
                  a = n[1];
                return (
                  qe(
                    function () {
                      null === r && a(ot());
                    },
                    [r]
                  ),
                  null != r ? "" + r : void 0
                );
              },
        it = ["features"],
        ut = (function (e) {
          return (
            (e[(e.None = 1)] = "None"),
            (e[(e.Focusable = 2)] = "Focusable"),
            (e[(e.Hidden = 4)] = "Hidden"),
            e
          );
        })(ut || {}),
        ct = $e(function (e, t) {
          var n = e.features,
            r = void 0 === n ? 1 : n,
            a = Te(e, it);
          return Ae({
            ourProps: {
              ref: t,
              "aria-hidden": 2 === (2 & r) || void 0,
              style: Le(
                {
                  position: "fixed",
                  top: 1,
                  left: 1,
                  width: 1,
                  height: 0,
                  padding: 0,
                  margin: -1,
                  overflow: "hidden",
                  clip: "rect(0, 0, 0, 0)",
                  whiteSpace: "nowrap",
                  borderWidth: "0",
                },
                4 === (4 & r) && 2 !== (2 & r) && { display: "none" }
              ),
            },
            theirProps: a,
            slot: {},
            defaultTag: "div",
            name: "Hidden",
          });
        });
      function st(e) {
        return Qe
          ? null
          : e instanceof Node
          ? e.ownerDocument
          : null != e &&
            e.hasOwnProperty("current") &&
            e.current instanceof Node
          ? e.current.ownerDocument
          : document;
      }
      var ft,
        dt = [
          "[contentEditable=true]",
          "[tabindex]",
          "a[href]",
          "area[href]",
          "button:not([disabled])",
          "iframe",
          "input:not([disabled])",
          "select:not([disabled])",
          "textarea:not([disabled])",
        ]
          .map(function (e) {
            return "".concat(e, ":not([tabindex='-1'])");
          })
          .join(","),
        pt =
          (((ft = pt || {})[(ft.First = 1)] = "First"),
          (ft[(ft.Previous = 2)] = "Previous"),
          (ft[(ft.Next = 4)] = "Next"),
          (ft[(ft.Last = 8)] = "Last"),
          (ft[(ft.WrapAround = 16)] = "WrapAround"),
          (ft[(ft.NoScroll = 32)] = "NoScroll"),
          ft),
        vt = (function (e) {
          return (
            (e[(e.Error = 0)] = "Error"),
            (e[(e.Overflow = 1)] = "Overflow"),
            (e[(e.Success = 2)] = "Success"),
            (e[(e.Underflow = 3)] = "Underflow"),
            e
          );
        })(vt || {}),
        ht = (function (e) {
          return (
            (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
          );
        })(ht || {});
      function mt() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : document.body;
        return null == e ? [] : Array.from(e.querySelectorAll(dt));
      }
      var gt = (function (e) {
        return (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e;
      })(gt || {});
      function yt(e) {
        var t,
          n,
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (
          e !== (null == (n = st(e)) ? void 0 : n.body) &&
          Re(
            r,
            (Oe((t = {}), 0, function () {
              return e.matches(dt);
            }),
            Oe(t, 1, function () {
              for (var t = e; null !== t; ) {
                if (t.matches(dt)) return !0;
                t = t.parentElement;
              }
              return !1;
            }),
            t)
          )
        );
      }
      function bt(e) {
        null == e || e.focus({ preventScroll: !0 });
      }
      var wt = ["textarea", "input"].join(",");
      function xt(e) {
        var t, n;
        return (
          null !=
            (n =
              null == (t = null == e ? void 0 : e.matches)
                ? void 0
                : t.call(e, wt)) && n
        );
      }
      function kt(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : function (e) {
                return e;
              };
        return e.slice().sort(function (e, n) {
          var r = t(e),
            a = t(n);
          if (null === r || null === a) return 0;
          var o = r.compareDocumentPosition(a);
          return o & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : o & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : 0;
        });
      }
      function St(e, t) {
        var n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null,
          a = Array.isArray(e)
            ? e.length > 0
              ? e[0].ownerDocument
              : document
            : e.ownerDocument,
          o = Array.isArray(e) ? (n ? kt(e) : e) : mt(e);
        r = null != r ? r : a.activeElement;
        var l,
          i = (function () {
            if (5 & t) return 1;
            if (10 & t) return -1;
            throw new Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          u = (function () {
            if (1 & t) return 0;
            if (2 & t) return Math.max(0, o.indexOf(r)) - 1;
            if (4 & t) return Math.max(0, o.indexOf(r)) + 1;
            if (8 & t) return o.length - 1;
            throw new Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          c = 32 & t ? { preventScroll: !0 } : {},
          s = 0,
          f = o.length;
        do {
          if (s >= f || s + f <= 0) return 0;
          var d = u + s;
          if (16 & t) d = (d + f) % f;
          else {
            if (d < 0) return 3;
            if (d >= f) return 1;
          }
          null == (l = o[d]) || l.focus(c), (s += i);
        } while (l !== a.activeElement);
        return (
          6 & t && xt(l) && l.select(),
          l.hasAttribute("tabindex") || l.setAttribute("tabindex", "0"),
          2
        );
      }
      var Et = (function (e) {
        return (
          (e[(e.Forwards = 0)] = "Forwards"),
          (e[(e.Backwards = 1)] = "Backwards"),
          e
        );
      })(Et || {});
      function Ct() {
        var e = (0, t.useRef)(0);
        return (
          (function (e, n, r) {
            var a = Ke(n);
            (0, t.useEffect)(
              function () {
                function t(e) {
                  a.current(e);
                }
                return (
                  window.addEventListener(e, t, r),
                  function () {
                    return window.removeEventListener(e, t, r);
                  }
                );
              },
              [e, r]
            );
          })(
            "keydown",
            function (t) {
              "Tab" === t.key && (e.current = t.shiftKey ? 1 : 0);
            },
            !0
          ),
          e
        );
      }
      function Pt() {
        var e = (0, t.useRef)(!1);
        return (
          qe(function () {
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
      function Nt() {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
          n[r] = arguments[r];
        return (0, t.useMemo)(function () {
          return st.apply(void 0, n);
        }, [].concat(n));
      }
      function _t(e, n, r, a) {
        var o = Ke(r);
        (0, t.useEffect)(
          function () {
            function t(e) {
              o.current(e);
            }
            return (
              (e = null != e ? e : window).addEventListener(n, t, a),
              function () {
                return e.removeEventListener(n, t, a);
              }
            );
          },
          [e, n, a]
        );
      }
      function Tt(e) {
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
      function Ot(e, n) {
        var r = (0, t.useRef)([]),
          a = Ge(e);
        (0, t.useEffect)(function () {
          var e,
            t = u(r.current),
            o = _e(n.entries());
          try {
            for (o.s(); !(e = o.n()).done; ) {
              var l = i(e.value, 2),
                c = l[0],
                s = l[1];
              if (r.current[c] !== s) {
                var f = a(n, t);
                return (r.current = n), f;
              }
            }
          } catch (d) {
            o.e(d);
          } finally {
            o.f();
          }
        }, [a].concat(u(n)));
      }
      var jt = ["initialFocus", "containers", "features"],
        Lt = (function (e) {
          return (
            (e[(e.None = 1)] = "None"),
            (e[(e.InitialFocus = 2)] = "InitialFocus"),
            (e[(e.TabLock = 4)] = "TabLock"),
            (e[(e.FocusLock = 8)] = "FocusLock"),
            (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
            (e[(e.All = 30)] = "All"),
            e
          );
        })(Lt || {}),
        Rt = Object.assign(
          $e(function (e, n) {
            var r = (0, t.useRef)(null),
              a = Ze(r, n),
              o = e.initialFocus,
              l = e.containers,
              i = e.features,
              u = void 0 === i ? 30 : i,
              c = Te(e, jt);
            rt() || (u = 1);
            var s = Nt(r);
            !(function (e, n) {
              var r = e.ownerDocument,
                a = (0, t.useRef)(null);
              _t(
                null == r ? void 0 : r.defaultView,
                "focusout",
                function (e) {
                  !n || a.current || (a.current = e.target);
                },
                !0
              ),
                Ot(
                  function () {
                    n ||
                      ((null == r ? void 0 : r.activeElement) ===
                        (null == r ? void 0 : r.body) && bt(a.current),
                      (a.current = null));
                  },
                  [n]
                );
              var o = (0, t.useRef)(!1);
              (0, t.useEffect)(function () {
                return (
                  (o.current = !1),
                  function () {
                    (o.current = !0),
                      Tt(function () {
                        !o.current || (bt(a.current), (a.current = null));
                      });
                  }
                );
              }, []);
            })({ ownerDocument: s }, Boolean(16 & u));
            var f = (function (e, n) {
              var r = e.ownerDocument,
                a = e.container,
                o = e.initialFocus,
                l = (0, t.useRef)(null),
                i = Pt();
              return (
                Ot(
                  function () {
                    if (n) {
                      var e = a.current;
                      !e ||
                        Tt(function () {
                          if (i.current) {
                            var t = null == r ? void 0 : r.activeElement;
                            if (null != o && o.current) {
                              if ((null == o ? void 0 : o.current) === t)
                                return void (l.current = t);
                            } else if (e.contains(t))
                              return void (l.current = t);
                            null != o && o.current
                              ? bt(o.current)
                              : St(e, pt.First) === vt.Error &&
                                console.warn(
                                  "There are no focusable elements inside the <FocusTrap />"
                                ),
                              (l.current =
                                null == r ? void 0 : r.activeElement);
                          }
                        });
                    }
                  },
                  [n]
                ),
                l
              );
            })(
              { ownerDocument: s, container: r, initialFocus: o },
              Boolean(2 & u)
            );
            !(function (e, t) {
              var n = e.ownerDocument,
                r = e.container,
                a = e.containers,
                o = e.previousActiveElement,
                l = Pt();
              _t(
                null == n ? void 0 : n.defaultView,
                "focus",
                function (e) {
                  if (t && l.current) {
                    var n = new Set(null == a ? void 0 : a.current);
                    n.add(r);
                    var i = o.current;
                    if (i) {
                      var u = e.target;
                      u && u instanceof HTMLElement
                        ? (function (e, t) {
                            var n,
                              r,
                              a = _e(e);
                            try {
                              for (a.s(); !(r = a.n()).done; ) {
                                if (
                                  null != (n = r.value.current) &&
                                  n.contains(t)
                                )
                                  return !0;
                              }
                            } catch (o) {
                              a.e(o);
                            } finally {
                              a.f();
                            }
                            return !1;
                          })(n, u)
                          ? ((o.current = u), bt(u))
                          : (e.preventDefault(), e.stopPropagation(), bt(i))
                        : bt(o.current);
                    }
                  }
                },
                !0
              );
            })(
              {
                ownerDocument: s,
                container: r,
                containers: l,
                previousActiveElement: f,
              },
              Boolean(8 & u)
            );
            var d = Ct(),
              p = Ge(function () {
                var e,
                  t = r.current;
                !t ||
                  Re(
                    d.current,
                    (Oe((e = {}), Et.Forwards, function () {
                      return St(t, pt.First);
                    }),
                    Oe(e, Et.Backwards, function () {
                      return St(t, pt.Last);
                    }),
                    e)
                  );
              }),
              v = { ref: a };
            return t.createElement(
              t.Fragment,
              null,
              Boolean(4 & u) &&
                t.createElement(ct, {
                  as: "button",
                  type: "button",
                  onFocus: p,
                  features: ut.Focusable,
                }),
              Ae({
                ourProps: v,
                theirProps: c,
                defaultTag: "div",
                name: "FocusTrap",
              }),
              Boolean(4 & u) &&
                t.createElement(ct, {
                  as: "button",
                  type: "button",
                  onFocus: p,
                  features: ut.Focusable,
                })
            );
          }),
          { features: Lt }
        );
      var Ft = new Set(),
        zt = new Map();
      function Mt(e) {
        e.setAttribute("aria-hidden", "true"), (e.inert = !0);
      }
      function It(e) {
        var t = zt.get(e);
        !t ||
          (null === t["aria-hidden"]
            ? e.removeAttribute("aria-hidden")
            : e.setAttribute("aria-hidden", t["aria-hidden"]),
          (e.inert = t.inert));
      }
      var Dt = n(164),
        At = (0, t.createContext)(!1);
      function Ut() {
        return (0, t.useContext)(At);
      }
      function Bt(e) {
        return t.createElement(At.Provider, { value: e.force }, e.children);
      }
      var Ht = ["target"];
      var $t = t.Fragment,
        Wt = $e(function (e, n) {
          var r = e,
            a = (0, t.useRef)(null),
            o = Ze(
              Xe(function (e) {
                a.current = e;
              }),
              n
            ),
            l = Nt(a),
            u = (function (e) {
              var n = Ut(),
                r = (0, t.useContext)(Qt),
                a = Nt(e),
                o = (0, t.useState)(function () {
                  if ((!n && null !== r) || Qe) return null;
                  var e =
                    null == a
                      ? void 0
                      : a.getElementById("headlessui-portal-root");
                  if (e) return e;
                  if (null === a) return null;
                  var t = a.createElement("div");
                  return (
                    t.setAttribute("id", "headlessui-portal-root"),
                    a.body.appendChild(t)
                  );
                }),
                l = i(o, 2),
                u = l[0],
                c = l[1];
              return (
                (0, t.useEffect)(
                  function () {
                    null !== u &&
                      ((null != a && a.body.contains(u)) ||
                        null == a ||
                        a.body.appendChild(u));
                  },
                  [u, a]
                ),
                (0, t.useEffect)(
                  function () {
                    n || (null !== r && c(r.current));
                  },
                  [r, c, n]
                ),
                u
              );
            })(a),
            c = (0, t.useState)(function () {
              var e;
              return Qe
                ? null
                : null != (e = null == l ? void 0 : l.createElement("div"))
                ? e
                : null;
            }),
            s = i(c, 1)[0],
            f = rt(),
            d = (0, t.useRef)(!1);
          return (
            qe(
              function () {
                if (((d.current = !1), u && s))
                  return (
                    u.contains(s) ||
                      (s.setAttribute("data-headlessui-portal", ""),
                      u.appendChild(s)),
                    function () {
                      (d.current = !0),
                        Tt(function () {
                          var e;
                          !d.current ||
                            !u ||
                            !s ||
                            (u.removeChild(s),
                            u.childNodes.length <= 0 &&
                              (null == (e = u.parentElement) ||
                                e.removeChild(u)));
                        });
                    }
                  );
              },
              [u, s]
            ),
            f && u && s
              ? (0, Dt.createPortal)(
                  Ae({
                    ourProps: { ref: o },
                    theirProps: r,
                    defaultTag: $t,
                    name: "Portal",
                  }),
                  s
                )
              : null
          );
        }),
        Vt = t.Fragment,
        Qt = (0, t.createContext)(null),
        qt = $e(function (e, n) {
          var r = e.target,
            a = Te(e, Ht),
            o = { ref: Ze(n) };
          return t.createElement(
            Qt.Provider,
            { value: r },
            Ae({
              ourProps: o,
              theirProps: a,
              defaultTag: Vt,
              name: "Popover.Group",
            })
          );
        }),
        Kt = Object.assign(Wt, { Group: qt }),
        Gt = (0, t.createContext)(null);
      function Yt() {
        var e = (0, t.useContext)(Gt);
        if (null === e) {
          var n = new Error(
            "You used a <Description /> component, but it is not inside a relevant parent."
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(n, Yt), n);
        }
        return e;
      }
      function Xt() {
        var e = i((0, t.useState)([]), 2),
          n = e[0],
          r = e[1];
        return [
          n.length > 0 ? n.join(" ") : void 0,
          (0, t.useMemo)(
            function () {
              return function (e) {
                var n = Ge(function (e) {
                    return (
                      r(function (t) {
                        return [].concat(u(t), [e]);
                      }),
                      function () {
                        return r(function (t) {
                          var n = t.slice(),
                            r = n.indexOf(e);
                          return -1 !== r && n.splice(r, 1), n;
                        });
                      }
                    );
                  }),
                  a = (0, t.useMemo)(
                    function () {
                      return {
                        register: n,
                        slot: e.slot,
                        name: e.name,
                        props: e.props,
                      };
                    },
                    [n, e.slot, e.name, e.props]
                  );
                return t.createElement(Gt.Provider, { value: a }, e.children);
              };
            },
            [r]
          ),
        ];
      }
      var Zt = $e(function (e, t) {
          var n = Yt(),
            r = "headlessui-description-".concat(lt()),
            a = Ze(t);
          qe(
            function () {
              return n.register(r);
            },
            [r, n.register]
          );
          var o = e;
          return Ae({
            ourProps: Le(Le({ ref: a }, n.props), {}, { id: r }),
            theirProps: o,
            slot: n.slot || {},
            defaultTag: "p",
            name: n.name || "Description",
          });
        }),
        Jt = (0, t.createContext)(null);
      Jt.displayName = "OpenClosedContext";
      var en = (function (e) {
        return (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e;
      })(en || {});
      function tn() {
        return (0, t.useContext)(Jt);
      }
      function nn(e) {
        var n = e.value,
          r = e.children;
        return t.createElement(Jt.Provider, { value: n }, r);
      }
      var rn = (0, t.createContext)(function () {});
      rn.displayName = "StackContext";
      var an = (function (e) {
        return (e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e;
      })(an || {});
      function on(e) {
        var n = e.children,
          r = e.onUpdate,
          a = e.type,
          o = e.element,
          l = e.enabled,
          i = (0, t.useContext)(rn),
          u = Ge(function () {
            null == r || r.apply(void 0, arguments), i.apply(void 0, arguments);
          });
        return (
          qe(
            function () {
              var e = void 0 === l || !0 === l;
              return (
                e && u(0, a, o),
                function () {
                  e && u(1, a, o);
                }
              );
            },
            [u, a, o, l]
          ),
          t.createElement(rn.Provider, { value: u }, n)
        );
      }
      function ln(e, n, r) {
        var a = Ke(n);
        (0, t.useEffect)(
          function () {
            function t(e) {
              a.current(e);
            }
            return (
              document.addEventListener(e, t, r),
              function () {
                return document.removeEventListener(e, t, r);
              }
            );
          },
          [e, r]
        );
      }
      function un(e, n) {
        var r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          a = (0, t.useRef)(!1);
        function o(t, r) {
          if (a.current && !t.defaultPrevented) {
            var o = (function e(t) {
                return "function" == typeof t
                  ? e(t())
                  : Array.isArray(t) || t instanceof Set
                  ? t
                  : [t];
              })(e),
              l = r(t);
            if (null !== l && l.getRootNode().contains(l)) {
              var i,
                u = _e(o);
              try {
                for (u.s(); !(i = u.n()).done; ) {
                  var c = i.value;
                  if (null !== c) {
                    var s = c instanceof HTMLElement ? c : c.current;
                    if (null != s && s.contains(l)) return;
                  }
                }
              } catch (f) {
                u.e(f);
              } finally {
                u.f();
              }
              return (
                !yt(l, gt.Loose) && -1 !== l.tabIndex && t.preventDefault(),
                n(t, l)
              );
            }
          }
        }
        (0, t.useEffect)(
          function () {
            requestAnimationFrame(function () {
              a.current = r;
            });
          },
          [r]
        );
        var l = (0, t.useRef)(null);
        ln(
          "mousedown",
          function (e) {
            var t, n;
            a.current &&
              (l.current =
                (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                  ? void 0
                  : n[0]) || e.target);
          },
          !0
        ),
          ln(
            "click",
            function (e) {
              !l.current ||
                (o(e, function () {
                  return l.current;
                }),
                (l.current = null));
            },
            !0
          ),
          ln(
            "blur",
            function (e) {
              return o(e, function () {
                return window.document.activeElement instanceof
                  HTMLIFrameElement
                  ? window.document.activeElement
                  : null;
              });
            },
            !0
          );
      }
      function cn() {
        cn = function () {
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
          o = a.iterator || "@@iterator",
          l = a.asyncIterator || "@@asyncIterator",
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
        } catch (T) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function c(e, t, n, a) {
          var o = t && t.prototype instanceof p ? t : p,
            l = Object.create(o.prototype),
            i = new P(a || []);
          return r(l, "_invoke", { value: k(e, n, i) }), l;
        }
        function f(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (T) {
            return { type: "throw", arg: T };
          }
        }
        e.wrap = c;
        var d = {};
        function p() {}
        function v() {}
        function h() {}
        var m = {};
        u(m, o, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          y = g && g(g(N([])));
        y && y !== t && n.call(y, o) && (m = y);
        var b = (h.prototype = p.prototype = Object.create(m));
        function w(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function x(e, t) {
          function a(r, o, l, i) {
            var u = f(e[r], e, o);
            if ("throw" !== u.type) {
              var c = u.arg,
                d = c.value;
              return d && "object" == s(d) && n.call(d, "__await")
                ? t.resolve(d.__await).then(
                    function (e) {
                      a("next", e, l, i);
                    },
                    function (e) {
                      a("throw", e, l, i);
                    }
                  )
                : t.resolve(d).then(
                    function (e) {
                      (c.value = e), l(c);
                    },
                    function (e) {
                      return a("throw", e, l, i);
                    }
                  );
            }
            i(u.arg);
          }
          var o;
          r(this, "_invoke", {
            value: function (e, n) {
              function r() {
                return new t(function (t, r) {
                  a(e, n, t, r);
                });
              }
              return (o = o ? o.then(r, r) : r());
            },
          });
        }
        function k(e, t, n) {
          var r = "suspendedStart";
          return function (a, o) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw o;
              return _();
            }
            for (n.method = a, n.arg = o; ; ) {
              var l = n.delegate;
              if (l) {
                var i = S(l, n);
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
        function S(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                S(e, t),
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
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : o
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
        function C(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function P(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(E, this),
            this.reset(!0);
        }
        function N(e) {
          if (e) {
            var t = e[o];
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
          return { next: _ };
        }
        function _() {
          return { value: void 0, done: !0 };
        }
        return (
          (v.prototype = h),
          r(b, "constructor", { value: h, configurable: !0 }),
          r(h, "constructor", { value: v, configurable: !0 }),
          (v.displayName = u(h, i, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === v || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, h)
                : ((e.__proto__ = h), u(e, i, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          w(x.prototype),
          u(x.prototype, l, function () {
            return this;
          }),
          (e.AsyncIterator = x),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var l = new x(c(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? l
              : l.next().then(function (e) {
                  return e.done ? e.value : l.next();
                });
          }),
          w(b),
          u(b, i, "Generator"),
          u(b, o, function () {
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
          (e.values = N),
          (P.prototype = {
            constructor: P,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(C),
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
                  (l.type = "throw"),
                  (l.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  l = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var i = n.call(o, "catchLoc"),
                    u = n.call(o, "finallyLoc");
                  if (i && u) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (i) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
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
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var l = o ? o.completion : {};
              return (
                (l.type = e),
                (l.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), d)
                  : this.complete(l)
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
                  return this.complete(n.completion, n.afterLoc), C(n), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    C(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: N(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function sn(e, t, n, r, a, o, l) {
        try {
          var i = e[o](l),
            u = i.value;
        } catch (c) {
          return void n(c);
        }
        i.done ? t(u) : Promise.resolve(u).then(r, a);
      }
      function fn() {
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
                Tt(function () {
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
                n = _e(e.splice(0));
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
              return ((e = cn().mark(function e() {
                var n, r, a;
                return cn().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (n = _e(t.splice(0))), (e.prev = 1), n.s();
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
                  var o = e.apply(t, n);
                  function l(e) {
                    sn(o, r, a, l, i, "next", e);
                  }
                  function i(e) {
                    sn(o, r, a, l, i, "throw", e);
                  }
                  l(void 0);
                });
              })();
              var e;
            },
          };
        return n;
      }
      var dn = ["open", "onClose", "initialFocus", "__demoMode"],
        pn = (function (e) {
          return (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e;
        })(pn || {}),
        vn = (function (e) {
          return (e[(e.SetTitleId = 0)] = "SetTitleId"), e;
        })(vn || {}),
        hn = Oe({}, 0, function (e, t) {
          return e.titleId === t.id ? e : Le(Le({}, e), {}, { titleId: t.id });
        }),
        mn = (0, t.createContext)(null);
      function gn(e) {
        var n = (0, t.useContext)(mn);
        if (null === n) {
          var r = new Error(
            "<".concat(e, " /> is missing a parent <Dialog /> component.")
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(r, gn), r);
        }
        return n;
      }
      function yn(e, n) {
        (0, t.useEffect)(
          function () {
            var t;
            if (n && e) {
              var r = fn(),
                a = e.documentElement,
                o =
                  (null != (t = e.defaultView) ? t : window).innerWidth -
                  a.clientWidth;
              if ((u(a, "overflow", "hidden"), o > 0)) {
                var l = a.clientWidth - a.offsetWidth;
                u(a, "paddingRight", "".concat(o - l, "px"));
              }
              if (
                /iPhone/gi.test(window.navigator.platform) ||
                (/Mac/gi.test(window.navigator.platform) &&
                  window.navigator.maxTouchPoints > 0)
              ) {
                var i = window.pageYOffset;
                u(a, "position", "fixed"),
                  u(a, "marginTop", "-".concat(i, "px")),
                  u(a, "width", "100%"),
                  r.add(function () {
                    return window.scrollTo(0, i);
                  });
              }
              return r.dispose;
            }
            function u(e, t, n) {
              var a = e.style.getPropertyValue(t);
              return (
                Object.assign(e.style, Oe({}, t, n)),
                r.add(function () {
                  Object.assign(e.style, Oe({}, t, a));
                })
              );
            }
          },
          [e, n]
        );
      }
      function bn(e, t) {
        return Re(t.type, hn, e, t);
      }
      mn.displayName = "DialogContext";
      var wn = Ie.RenderStrategy | Ie.Static,
        xn = $e(function (e, n) {
          var r,
            a = e.open,
            o = e.onClose,
            l = e.initialFocus,
            c = e.__demoMode,
            s = void 0 !== c && c,
            f = Te(e, dn),
            d = i((0, t.useState)(0), 2),
            p = d[0],
            v = d[1],
            h = tn();
          void 0 === a &&
            null !== h &&
            (a = Re(h, (Oe((r = {}), en.Open, !0), Oe(r, en.Closed, !1), r)));
          var m = (0, t.useRef)(new Set()),
            g = (0, t.useRef)(null),
            y = Ze(g, n),
            b = (0, t.useRef)(null),
            w = Nt(g),
            x = e.hasOwnProperty("open") || null !== h,
            k = e.hasOwnProperty("onClose");
          if (!x && !k)
            throw new Error(
              "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
            );
          if (!x)
            throw new Error(
              "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
            );
          if (!k)
            throw new Error(
              "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
            );
          if ("boolean" != typeof a)
            throw new Error(
              "You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: ".concat(
                a
              )
            );
          if ("function" != typeof o)
            throw new Error(
              "You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: ".concat(
                o
              )
            );
          var S = a ? 0 : 1,
            E = i(
              (0, t.useReducer)(bn, {
                titleId: null,
                descriptionId: null,
                panelRef: (0, t.createRef)(),
              }),
              2
            ),
            C = E[0],
            P = E[1],
            N = Ge(function () {
              return o(!1);
            }),
            _ = Ge(function (e) {
              return P({ type: 0, id: e });
            }),
            T = !!rt() && !s && 0 === S,
            O = p > 1,
            j = null !== (0, t.useContext)(mn),
            L = O ? "parent" : "leaf";
          (function (e) {
            var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            qe(
              function () {
                if (t && e.current) {
                  var n = e.current,
                    r = st(n);
                  if (r) {
                    Ft.add(n);
                    var a,
                      o = _e(zt.keys());
                    try {
                      for (o.s(); !(a = o.n()).done; ) {
                        var l = a.value;
                        l.contains(n) && (It(l), zt.delete(l));
                      }
                    } catch (i) {
                      o.e(i);
                    } finally {
                      o.f();
                    }
                    return (
                      r.querySelectorAll("body > *").forEach(function (e) {
                        if (e instanceof HTMLElement) {
                          var t,
                            n = _e(Ft);
                          try {
                            for (n.s(); !(t = n.n()).done; ) {
                              var r = t.value;
                              if (e.contains(r)) return;
                            }
                          } catch (i) {
                            n.e(i);
                          } finally {
                            n.f();
                          }
                          1 === Ft.size &&
                            (zt.set(e, {
                              "aria-hidden": e.getAttribute("aria-hidden"),
                              inert: e.inert,
                            }),
                            Mt(e));
                        }
                      }),
                      function () {
                        if ((Ft.delete(n), Ft.size > 0))
                          r.querySelectorAll("body > *").forEach(function (e) {
                            if (e instanceof HTMLElement && !zt.has(e)) {
                              var t,
                                n = _e(Ft);
                              try {
                                for (n.s(); !(t = n.n()).done; ) {
                                  var r = t.value;
                                  if (e.contains(r)) return;
                                }
                              } catch (i) {
                                n.e(i);
                              } finally {
                                n.f();
                              }
                              zt.set(e, {
                                "aria-hidden": e.getAttribute("aria-hidden"),
                                inert: e.inert,
                              }),
                                Mt(e);
                            }
                          });
                        else {
                          var e,
                            t = _e(zt.keys());
                          try {
                            for (t.s(); !(e = t.n()).done; ) {
                              var a = e.value;
                              It(a), zt.delete(a);
                            }
                          } catch (i) {
                            t.e(i);
                          } finally {
                            t.f();
                          }
                        }
                      }
                    );
                  }
                }
              },
              [t]
            );
          })(g, !!O && T),
            un(
              function () {
                var e, t;
                return [].concat(
                  u(
                    Array.from(
                      null !=
                        (e =
                          null == w
                            ? void 0
                            : w.querySelectorAll(
                                "body > *, [data-headlessui-portal]"
                              ))
                        ? e
                        : []
                    ).filter(function (e) {
                      return !(
                        !(e instanceof HTMLElement) ||
                        e.contains(b.current) ||
                        (C.panelRef.current && e.contains(C.panelRef.current))
                      );
                    })
                  ),
                  [null != (t = C.panelRef.current) ? t : g.current]
                );
              },
              N,
              T && !O
            ),
            _t(null == w ? void 0 : w.defaultView, "keydown", function (e) {
              e.defaultPrevented ||
                (e.key === Je.Escape &&
                  0 === S &&
                  (O || (e.preventDefault(), e.stopPropagation(), N())));
            }),
            yn(w, 0 === S && !j),
            (0, t.useEffect)(
              function () {
                if (0 === S && g.current) {
                  var e = new IntersectionObserver(function (e) {
                    var t,
                      n = _e(e);
                    try {
                      for (n.s(); !(t = n.n()).done; ) {
                        var r = t.value;
                        0 === r.boundingClientRect.x &&
                          0 === r.boundingClientRect.y &&
                          0 === r.boundingClientRect.width &&
                          0 === r.boundingClientRect.height &&
                          N();
                      }
                    } catch (a) {
                      n.e(a);
                    } finally {
                      n.f();
                    }
                  });
                  return (
                    e.observe(g.current),
                    function () {
                      return e.disconnect();
                    }
                  );
                }
              },
              [S, g, N]
            );
          var R = i(Xt(), 2),
            F = R[0],
            z = R[1],
            M = "headlessui-dialog-".concat(lt()),
            I = (0, t.useMemo)(
              function () {
                return [{ dialogState: S, close: N, setTitleId: _ }, C];
              },
              [S, C, N, _]
            ),
            D = (0, t.useMemo)(
              function () {
                return { open: 0 === S };
              },
              [S]
            ),
            A = {
              ref: y,
              id: M,
              role: "dialog",
              "aria-modal": 0 === S || void 0,
              "aria-labelledby": C.titleId,
              "aria-describedby": F,
            };
          return t.createElement(
            on,
            {
              type: "Dialog",
              enabled: 0 === S,
              element: g,
              onUpdate: Ge(function (e, t, n) {
                var r;
                "Dialog" === t &&
                  Re(
                    e,
                    (Oe((r = {}), an.Add, function () {
                      m.current.add(n),
                        v(function (e) {
                          return e + 1;
                        });
                    }),
                    Oe(r, an.Remove, function () {
                      m.current.add(n),
                        v(function (e) {
                          return e - 1;
                        });
                    }),
                    r)
                  );
              }),
            },
            t.createElement(
              Bt,
              { force: !0 },
              t.createElement(
                Kt,
                null,
                t.createElement(
                  mn.Provider,
                  { value: I },
                  t.createElement(
                    Kt.Group,
                    { target: g },
                    t.createElement(
                      Bt,
                      { force: !1 },
                      t.createElement(
                        z,
                        { slot: D, name: "Dialog.Description" },
                        t.createElement(
                          Rt,
                          {
                            initialFocus: l,
                            containers: m,
                            features: T
                              ? Re(L, {
                                  parent: Rt.features.RestoreFocus,
                                  leaf:
                                    Rt.features.All & ~Rt.features.FocusLock,
                                })
                              : Rt.features.None,
                          },
                          Ae({
                            ourProps: A,
                            theirProps: f,
                            slot: D,
                            defaultTag: "div",
                            features: wn,
                            visible: 0 === S,
                            name: "Dialog",
                          })
                        )
                      )
                    )
                  )
                )
              )
            ),
            t.createElement(ct, { features: ut.Hidden, ref: b })
          );
        }),
        kn = $e(function (e, n) {
          var r = i(gn("Dialog.Overlay"), 1)[0],
            a = r.dialogState,
            o = r.close,
            l = Ze(n),
            u = "headlessui-dialog-overlay-".concat(lt()),
            c = Ge(function (e) {
              if (e.target === e.currentTarget) {
                if (et(e.currentTarget)) return e.preventDefault();
                e.preventDefault(), e.stopPropagation(), o();
              }
            });
          return Ae({
            ourProps: { ref: l, id: u, "aria-hidden": !0, onClick: c },
            theirProps: e,
            slot: (0, t.useMemo)(
              function () {
                return { open: 0 === a };
              },
              [a]
            ),
            defaultTag: "div",
            name: "Dialog.Overlay",
          });
        }),
        Sn = $e(function (e, n) {
          var r = i(gn("Dialog.Backdrop"), 2),
            a = r[0].dialogState,
            o = r[1],
            l = Ze(n),
            u = "headlessui-dialog-backdrop-".concat(lt());
          (0, t.useEffect)(
            function () {
              if (null === o.panelRef.current)
                throw new Error(
                  "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
                );
            },
            [o.panelRef]
          );
          var c = (0, t.useMemo)(
            function () {
              return { open: 0 === a };
            },
            [a]
          );
          return t.createElement(
            Bt,
            { force: !0 },
            t.createElement(
              Kt,
              null,
              Ae({
                ourProps: { ref: l, id: u, "aria-hidden": !0 },
                theirProps: e,
                slot: c,
                defaultTag: "div",
                name: "Dialog.Backdrop",
              })
            )
          );
        }),
        En = $e(function (e, n) {
          var r = i(gn("Dialog.Panel"), 2),
            a = r[0].dialogState,
            o = Ze(n, r[1].panelRef),
            l = "headlessui-dialog-panel-".concat(lt()),
            u = (0, t.useMemo)(
              function () {
                return { open: 0 === a };
              },
              [a]
            ),
            c = Ge(function (e) {
              e.stopPropagation();
            });
          return Ae({
            ourProps: { ref: o, id: l, onClick: c },
            theirProps: e,
            slot: u,
            defaultTag: "div",
            name: "Dialog.Panel",
          });
        }),
        Cn = $e(function (e, n) {
          var r = i(gn("Dialog.Title"), 1)[0],
            a = r.dialogState,
            o = r.setTitleId,
            l = "headlessui-dialog-title-".concat(lt()),
            u = Ze(n);
          (0, t.useEffect)(
            function () {
              return (
                o(l),
                function () {
                  return o(null);
                }
              );
            },
            [l, o]
          );
          var c = (0, t.useMemo)(
            function () {
              return { open: 0 === a };
            },
            [a]
          );
          return Ae({
            ourProps: { ref: u, id: l },
            theirProps: e,
            slot: c,
            defaultTag: "h2",
            name: "Dialog.Title",
          });
        }),
        Pn = Object.assign(xn, {
          Backdrop: Sn,
          Panel: En,
          Overlay: kn,
          Title: Cn,
          Description: Zt,
        }),
        Nn = ["title", "titleId"];
      var _n = t.forwardRef(function (e, n) {
          var r = e.title,
            a = e.titleId,
            o = Te(e, Nn);
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
              o
            ),
            r ? t.createElement("title", { id: a }, r) : null,
            t.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
            })
          );
        }),
        Tn = ["title", "titleId"];
      var On = t.forwardRef(function (e, n) {
          var r = e.title,
            a = e.titleId,
            o = Te(e, Tn);
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
              o
            ),
            r ? t.createElement("title", { id: a }, r) : null,
            t.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M6 18L18 6M6 6l12 12",
            })
          );
        }),
        jn = n.p + "static/media/icon.e5b71c9e1a116ed7b6cc.png";
      function Ln(e) {
        var t;
        if (e.type) return e.type;
        var n = null != (t = e.as) ? t : "button";
        return "string" == typeof n && "button" === n.toLowerCase()
          ? "button"
          : void 0;
      }
      var Rn,
        Fn = ["focus"],
        zn = (function (e) {
          return (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e;
        })(zn || {}),
        Mn = (function (e) {
          return (
            (e[(e.TogglePopover = 0)] = "TogglePopover"),
            (e[(e.ClosePopover = 1)] = "ClosePopover"),
            (e[(e.SetButton = 2)] = "SetButton"),
            (e[(e.SetButtonId = 3)] = "SetButtonId"),
            (e[(e.SetPanel = 4)] = "SetPanel"),
            (e[(e.SetPanelId = 5)] = "SetPanelId"),
            e
          );
        })(Mn || {}),
        In =
          (Oe((Rn = {}), 0, function (e) {
            var t;
            return Le(
              Le({}, e),
              {},
              {
                popoverState: Re(
                  e.popoverState,
                  ((t = {}), Oe(t, 0, 1), Oe(t, 1, 0), t)
                ),
              }
            );
          }),
          Oe(Rn, 1, function (e) {
            return 1 === e.popoverState
              ? e
              : Le(Le({}, e), {}, { popoverState: 1 });
          }),
          Oe(Rn, 2, function (e, t) {
            return e.button === t.button
              ? e
              : Le(Le({}, e), {}, { button: t.button });
          }),
          Oe(Rn, 3, function (e, t) {
            return e.buttonId === t.buttonId
              ? e
              : Le(Le({}, e), {}, { buttonId: t.buttonId });
          }),
          Oe(Rn, 4, function (e, t) {
            return e.panel === t.panel
              ? e
              : Le(Le({}, e), {}, { panel: t.panel });
          }),
          Oe(Rn, 5, function (e, t) {
            return e.panelId === t.panelId
              ? e
              : Le(Le({}, e), {}, { panelId: t.panelId });
          }),
          Rn),
        Dn = (0, t.createContext)(null);
      function An(e) {
        var n = (0, t.useContext)(Dn);
        if (null === n) {
          var r = new Error(
            "<".concat(e, " /> is missing a parent <Popover /> component.")
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(r, An), r);
        }
        return n;
      }
      Dn.displayName = "PopoverContext";
      var Un = (0, t.createContext)(null);
      function Bn(e) {
        var n = (0, t.useContext)(Un);
        if (null === n) {
          var r = new Error(
            "<".concat(e, " /> is missing a parent <Popover /> component.")
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(r, Bn), r);
        }
        return n;
      }
      Un.displayName = "PopoverAPIContext";
      var Hn = (0, t.createContext)(null);
      function $n() {
        return (0, t.useContext)(Hn);
      }
      Hn.displayName = "PopoverGroupContext";
      var Wn = (0, t.createContext)(null);
      function Vn(e, t) {
        return Re(t.type, In, e, t);
      }
      Wn.displayName = "PopoverPanelContext";
      var Qn = $e(function (e, n) {
          var r,
            a,
            o = "headlessui-popover-button-".concat(lt()),
            l = "headlessui-popover-panel-".concat(lt()),
            u = (0, t.useRef)(null),
            c = Ze(
              n,
              Xe(function (e) {
                u.current = e;
              })
            ),
            s = (0, t.useReducer)(Vn, {
              popoverState: 1,
              button: null,
              buttonId: o,
              panel: null,
              panelId: l,
              beforePanelSentinel: (0, t.createRef)(),
              afterPanelSentinel: (0, t.createRef)(),
            }),
            f = i(s, 2),
            d = f[0],
            p = d.popoverState,
            v = d.button,
            h = d.panel,
            m = d.beforePanelSentinel,
            g = d.afterPanelSentinel,
            y = f[1],
            b = Nt(null != (a = u.current) ? a : v);
          (0, t.useEffect)(
            function () {
              return y({ type: 3, buttonId: o });
            },
            [o, y]
          ),
            (0, t.useEffect)(
              function () {
                return y({ type: 5, panelId: l });
              },
              [l, y]
            );
          var w = (0, t.useMemo)(
              function () {
                if (!v || !h) return !1;
                var e,
                  t = _e(document.querySelectorAll("body > *"));
                try {
                  for (t.s(); !(e = t.n()).done; ) {
                    var n = e.value;
                    if (
                      Number(null == n ? void 0 : n.contains(v)) ^
                      Number(null == n ? void 0 : n.contains(h))
                    )
                      return !0;
                  }
                } catch (c) {
                  t.e(c);
                } finally {
                  t.f();
                }
                var r = mt(),
                  a = r.indexOf(v),
                  o = (a + r.length - 1) % r.length,
                  l = (a + 1) % r.length,
                  i = r[o],
                  u = r[l];
                return !h.contains(i) && !h.contains(u);
              },
              [v, h]
            ),
            x = (0, t.useMemo)(
              function () {
                return {
                  buttonId: o,
                  panelId: l,
                  close: function () {
                    return y({ type: 1 });
                  },
                };
              },
              [o, l, y]
            ),
            k = $n(),
            S = null == k ? void 0 : k.registerPopover,
            E = Ge(function () {
              var e;
              return null !=
                (e = null == k ? void 0 : k.isFocusWithinPopoverGroup())
                ? e
                : (null == b ? void 0 : b.activeElement) &&
                    ((null == v ? void 0 : v.contains(b.activeElement)) ||
                      (null == h ? void 0 : h.contains(b.activeElement)));
            });
          (0, t.useEffect)(
            function () {
              return null == S ? void 0 : S(x);
            },
            [S, x]
          ),
            _t(
              null == b ? void 0 : b.defaultView,
              "focus",
              function (e) {
                var t, n, r, a;
                0 === p &&
                  (E() ||
                    !v ||
                    !h ||
                    (null !=
                      (n = null == (t = m.current) ? void 0 : t.contains) &&
                      n.call(t, e.target)) ||
                    (null !=
                      (a = null == (r = g.current) ? void 0 : r.contains) &&
                      a.call(r, e.target)) ||
                    y({ type: 1 }));
              },
              !0
            ),
            un(
              [v, h],
              function (e, t) {
                y({ type: 1 }),
                  yt(t, gt.Loose) ||
                    (e.preventDefault(), null == v || v.focus());
              },
              0 === p
            );
          var C = Ge(function (e) {
              y({ type: 1 });
              var t = e
                ? e instanceof HTMLElement
                  ? e
                  : "current" in e && e.current instanceof HTMLElement
                  ? e.current
                  : v
                : v;
              null == t || t.focus();
            }),
            P = (0, t.useMemo)(
              function () {
                return { close: C, isPortalled: w };
              },
              [C, w]
            ),
            N = (0, t.useMemo)(
              function () {
                return { open: 0 === p, close: C };
              },
              [p, C]
            ),
            _ = e,
            T = { ref: c };
          return t.createElement(
            Dn.Provider,
            { value: s },
            t.createElement(
              Un.Provider,
              { value: P },
              t.createElement(
                nn,
                {
                  value: Re(
                    p,
                    ((r = {}), Oe(r, 0, en.Open), Oe(r, 1, en.Closed), r)
                  ),
                },
                Ae({
                  ourProps: T,
                  theirProps: _,
                  slot: N,
                  defaultTag: "div",
                  name: "Popover",
                })
              )
            )
          );
        }),
        qn = $e(function (e, n) {
          var r = i(An("Popover.Button"), 2),
            a = r[0],
            o = r[1],
            l = Bn("Popover.Button").isPortalled,
            u = (0, t.useRef)(null),
            c = "headlessui-focus-sentinel-".concat(lt()),
            s = $n(),
            f = null == s ? void 0 : s.closeOthers,
            d = (0, t.useContext)(Wn),
            p = null !== d && d === a.panelId,
            v = Ze(
              u,
              n,
              p
                ? null
                : function (e) {
                    return e && o({ type: 2, button: e });
                  }
            ),
            h = Ze(u, n),
            m = Nt(u),
            g = Ge(function (e) {
              var t, n, r;
              if (p) {
                if (1 === a.popoverState) return;
                switch (e.key) {
                  case Je.Space:
                  case Je.Enter:
                    e.preventDefault(),
                      null == (n = (t = e.target).click) || n.call(t),
                      o({ type: 1 }),
                      null == (r = a.button) || r.focus();
                }
              } else
                switch (e.key) {
                  case Je.Space:
                  case Je.Enter:
                    e.preventDefault(),
                      e.stopPropagation(),
                      1 === a.popoverState && (null == f || f(a.buttonId)),
                      o({ type: 0 });
                    break;
                  case Je.Escape:
                    if (0 !== a.popoverState)
                      return null == f ? void 0 : f(a.buttonId);
                    if (
                      !u.current ||
                      ((null == m ? void 0 : m.activeElement) &&
                        !u.current.contains(m.activeElement))
                    )
                      return;
                    e.preventDefault(), e.stopPropagation(), o({ type: 1 });
                }
            }),
            y = Ge(function (e) {
              p || (e.key === Je.Space && e.preventDefault());
            }),
            b = Ge(function (t) {
              var n, r;
              et(t.currentTarget) ||
                e.disabled ||
                (p
                  ? (o({ type: 1 }), null == (n = a.button) || n.focus())
                  : (t.preventDefault(),
                    t.stopPropagation(),
                    1 === a.popoverState && (null == f || f(a.buttonId)),
                    o({ type: 0 }),
                    null == (r = a.button) || r.focus()));
            }),
            w = Ge(function (e) {
              e.preventDefault(), e.stopPropagation();
            }),
            x = 0 === a.popoverState,
            k = (0, t.useMemo)(
              function () {
                return { open: x };
              },
              [x]
            ),
            S = (function (e, n) {
              var r = i(
                  (0, t.useState)(function () {
                    return Ln(e);
                  }),
                  2
                ),
                a = r[0],
                o = r[1];
              return (
                qe(
                  function () {
                    o(Ln(e));
                  },
                  [e.type, e.as]
                ),
                qe(
                  function () {
                    a ||
                      !n.current ||
                      (n.current instanceof HTMLButtonElement &&
                        !n.current.hasAttribute("type") &&
                        o("button"));
                  },
                  [a, n]
                ),
                a
              );
            })(e, u),
            E = e,
            C = p
              ? { ref: h, type: S, onKeyDown: g, onClick: b }
              : {
                  ref: v,
                  id: a.buttonId,
                  type: S,
                  "aria-expanded": e.disabled ? void 0 : 0 === a.popoverState,
                  "aria-controls": a.panel ? a.panelId : void 0,
                  onKeyDown: g,
                  onKeyUp: y,
                  onClick: b,
                  onMouseDown: w,
                },
            P = Ct(),
            N = Ge(function () {
              var e = a.panel;
              e &&
                (function () {
                  var t;
                  Re(
                    P.current,
                    (Oe((t = {}), Et.Forwards, function () {
                      return St(e, pt.First);
                    }),
                    Oe(t, Et.Backwards, function () {
                      return St(e, pt.Last);
                    }),
                    t)
                  );
                })();
            });
          return t.createElement(
            t.Fragment,
            null,
            Ae({
              ourProps: C,
              theirProps: E,
              slot: k,
              defaultTag: "button",
              name: "Popover.Button",
            }),
            x &&
              !p &&
              l &&
              t.createElement(ct, {
                id: c,
                features: ut.Focusable,
                as: "button",
                type: "button",
                onFocus: N,
              })
          );
        }),
        Kn = Ie.RenderStrategy | Ie.Static,
        Gn = $e(function (e, n) {
          var r = i(An("Popover.Overlay"), 2),
            a = r[0].popoverState,
            o = r[1],
            l = Ze(n),
            u = "headlessui-popover-overlay-".concat(lt()),
            c = tn(),
            s = null !== c ? c === en.Open : 0 === a,
            f = Ge(function (e) {
              if (et(e.currentTarget)) return e.preventDefault();
              o({ type: 1 });
            });
          return Ae({
            ourProps: { ref: l, id: u, "aria-hidden": !0, onClick: f },
            theirProps: e,
            slot: (0, t.useMemo)(
              function () {
                return { open: 0 === a };
              },
              [a]
            ),
            defaultTag: "div",
            features: Kn,
            visible: s,
            name: "Popover.Overlay",
          });
        }),
        Yn = Ie.RenderStrategy | Ie.Static,
        Xn = $e(function (e, n) {
          var r = e.focus,
            a = void 0 !== r && r,
            o = Te(e, Fn),
            l = i(An("Popover.Panel"), 2),
            c = l[0],
            s = l[1],
            f = Bn("Popover.Panel"),
            d = f.close,
            p = f.isPortalled,
            v = "headlessui-focus-sentinel-before-".concat(lt()),
            h = "headlessui-focus-sentinel-after-".concat(lt()),
            m = (0, t.useRef)(null),
            g = Ze(m, n, function (e) {
              s({ type: 4, panel: e });
            }),
            y = Nt(m),
            b = tn(),
            w = null !== b ? b === en.Open : 0 === c.popoverState,
            x = Ge(function (e) {
              var t;
              if (e.key === Je.Escape) {
                if (
                  0 !== c.popoverState ||
                  !m.current ||
                  ((null == y ? void 0 : y.activeElement) &&
                    !m.current.contains(y.activeElement))
                )
                  return;
                e.preventDefault(),
                  e.stopPropagation(),
                  s({ type: 1 }),
                  null == (t = c.button) || t.focus();
              }
            });
          (0, t.useEffect)(
            function () {
              var t;
              e.static ||
                (1 === c.popoverState &&
                  (null == (t = e.unmount) || t) &&
                  s({ type: 4, panel: null }));
            },
            [c.popoverState, e.unmount, e.static, s]
          ),
            (0, t.useEffect)(
              function () {
                if (a && 0 === c.popoverState && m.current) {
                  var e = null == y ? void 0 : y.activeElement;
                  m.current.contains(e) || St(m.current, pt.First);
                }
              },
              [a, m, c.popoverState]
            );
          var k = (0, t.useMemo)(
              function () {
                return { open: 0 === c.popoverState, close: d };
              },
              [c, d]
            ),
            S = {
              ref: g,
              id: c.panelId,
              onKeyDown: x,
              onBlur:
                a && 0 === c.popoverState
                  ? function (e) {
                      var t,
                        n,
                        r,
                        a,
                        o,
                        l = e.relatedTarget;
                      !l ||
                        !m.current ||
                        (null != (t = m.current) && t.contains(l)) ||
                        (s({ type: 1 }),
                        ((null ==
                        (r =
                          null == (n = c.beforePanelSentinel.current)
                            ? void 0
                            : n.contains)
                          ? void 0
                          : r.call(n, l)) ||
                          (null ==
                          (o =
                            null == (a = c.afterPanelSentinel.current)
                              ? void 0
                              : a.contains)
                            ? void 0
                            : o.call(a, l))) &&
                          l.focus({ preventScroll: !0 }));
                    }
                  : void 0,
              tabIndex: -1,
            },
            E = Ct(),
            C = Ge(function () {
              var e = m.current;
              e &&
                (function () {
                  var t;
                  Re(
                    E.current,
                    (Oe((t = {}), Et.Forwards, function () {
                      St(e, pt.First);
                    }),
                    Oe(t, Et.Backwards, function () {
                      var e;
                      null == (e = c.button) || e.focus({ preventScroll: !0 });
                    }),
                    t)
                  );
                })();
            }),
            P = Ge(function () {
              var e = m.current;
              e &&
                (function () {
                  var t;
                  Re(
                    E.current,
                    (Oe((t = {}), Et.Forwards, function () {
                      var e, t, n;
                      if (c.button) {
                        var r,
                          a = mt(),
                          o = a.indexOf(c.button),
                          l = a.slice(0, o + 1),
                          i = [].concat(u(a.slice(o + 1)), u(l)),
                          s = _e(i.slice());
                        try {
                          for (s.s(); !(r = s.n()).done; ) {
                            var f = r.value;
                            if (
                              (null ==
                              (t =
                                null == (e = null == f ? void 0 : f.id)
                                  ? void 0
                                  : e.startsWith)
                                ? void 0
                                : t.call(e, "headlessui-focus-sentinel-")) ||
                              (null == (n = c.panel) ? void 0 : n.contains(f))
                            ) {
                              var d = i.indexOf(f);
                              -1 !== d && i.splice(d, 1);
                            }
                          }
                        } catch (p) {
                          s.e(p);
                        } finally {
                          s.f();
                        }
                        St(i, pt.First, !1);
                      }
                    }),
                    Oe(t, Et.Backwards, function () {
                      return St(e, pt.Last);
                    }),
                    t)
                  );
                })();
            });
          return t.createElement(
            Wn.Provider,
            { value: c.panelId },
            w &&
              p &&
              t.createElement(ct, {
                id: v,
                ref: c.beforePanelSentinel,
                features: ut.Focusable,
                as: "button",
                type: "button",
                onFocus: C,
              }),
            Ae({
              ourProps: S,
              theirProps: o,
              slot: k,
              defaultTag: "div",
              features: Yn,
              visible: w,
              name: "Popover.Panel",
            }),
            w &&
              p &&
              t.createElement(ct, {
                id: h,
                ref: c.afterPanelSentinel,
                features: ut.Focusable,
                as: "button",
                type: "button",
                onFocus: P,
              })
          );
        }),
        Zn = $e(function (e, n) {
          var r = (0, t.useRef)(null),
            a = Ze(r, n),
            o = i((0, t.useState)([]), 2),
            l = o[0],
            c = o[1],
            s = Ge(function (e) {
              c(function (t) {
                var n = t.indexOf(e);
                if (-1 !== n) {
                  var r = t.slice();
                  return r.splice(n, 1), r;
                }
                return t;
              });
            }),
            f = Ge(function (e) {
              return (
                c(function (t) {
                  return [].concat(u(t), [e]);
                }),
                function () {
                  return s(e);
                }
              );
            }),
            d = Ge(function () {
              var e,
                t = st(r);
              if (!t) return !1;
              var n = t.activeElement;
              return (
                !(null == (e = r.current) || !e.contains(n)) ||
                l.some(function (e) {
                  var r, a;
                  return (
                    (null == (r = t.getElementById(e.buttonId))
                      ? void 0
                      : r.contains(n)) ||
                    (null == (a = t.getElementById(e.panelId))
                      ? void 0
                      : a.contains(n))
                  );
                })
              );
            }),
            p = Ge(function (e) {
              var t,
                n = _e(l);
              try {
                for (n.s(); !(t = n.n()).done; ) {
                  var r = t.value;
                  r.buttonId !== e && r.close();
                }
              } catch (a) {
                n.e(a);
              } finally {
                n.f();
              }
            }),
            v = (0, t.useMemo)(
              function () {
                return {
                  registerPopover: f,
                  unregisterPopover: s,
                  isFocusWithinPopoverGroup: d,
                  closeOthers: p,
                };
              },
              [f, s, d, p]
            ),
            h = (0, t.useMemo)(function () {
              return {};
            }, []),
            m = e,
            g = { ref: a };
          return t.createElement(
            Hn.Provider,
            { value: v },
            Ae({
              ourProps: g,
              theirProps: m,
              slot: h,
              defaultTag: "div",
              name: "Popover.Group",
            })
          );
        }),
        Jn = Object.assign(Qn, {
          Button: qn,
          Overlay: Gn,
          Panel: Xn,
          Group: Zn,
        });
      function er(e) {
        for (
          var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
          a < n;
          a++
        )
          r[a - 1] = arguments[a];
        e && r.length > 0 && (t = e.classList).add.apply(t, r);
      }
      function tr(e) {
        for (
          var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
          a < n;
          a++
        )
          r[a - 1] = arguments[a];
        e && r.length > 0 && (t = e.classList).remove.apply(t, r);
      }
      var nr = (function (e) {
        return (e.Ended = "ended"), (e.Cancelled = "cancelled"), e;
      })(nr || {});
      function rr(e, t, n, r) {
        var a = n ? "enter" : "leave",
          o = fn(),
          l =
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
        var c = Re(a, {
            enter: function () {
              return t.enter;
            },
            leave: function () {
              return t.leave;
            },
          }),
          s = Re(a, {
            enter: function () {
              return t.enterTo;
            },
            leave: function () {
              return t.leaveTo;
            },
          }),
          f = Re(a, {
            enter: function () {
              return t.enterFrom;
            },
            leave: function () {
              return t.leaveFrom;
            },
          });
        return (
          tr.apply(
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
          er.apply(void 0, [e].concat(u(c), u(f))),
          o.nextFrame(function () {
            tr.apply(void 0, [e].concat(u(f))),
              er.apply(void 0, [e].concat(u(s))),
              (function (e, t) {
                var n = fn();
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
                  o = i(a, 2);
                if (o[0] + o[1] !== 0) {
                  var l = [];
                  l.push(
                    n.addEventListener(e, "transitionrun", function (r) {
                      r.target === r.currentTarget &&
                        (l.splice(0).forEach(function (e) {
                          return e();
                        }),
                        l.push(
                          n.addEventListener(e, "transitionend", function (e) {
                            e.target === e.currentTarget &&
                              (t("ended"),
                              l.splice(0).forEach(function (e) {
                                return e();
                              }));
                          }),
                          n.addEventListener(
                            e,
                            "transitioncancel",
                            function (e) {
                              e.target === e.currentTarget &&
                                (t("cancelled"),
                                l.splice(0).forEach(function (e) {
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
                    (tr.apply(void 0, [e].concat(u(c))),
                    er.apply(void 0, [e].concat(u(t.entered)))),
                  l(n)
                );
              });
          }),
          o.dispose
        );
      }
      function ar() {
        var e = i((0, t.useState)(fn), 1)[0];
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
      function or(e) {
        var t = e.container,
          n = e.direction,
          r = e.classes,
          a = e.onStart,
          o = e.onStop,
          l = Pt(),
          i = ar(),
          u = Ke(n);
        qe(
          function () {
            var e = fn();
            i.add(e.dispose);
            var n = t.current;
            if (n && "idle" !== u.current && l.current)
              return (
                e.dispose(),
                a.current(u.current),
                e.add(
                  rr(n, r.current, "enter" === u.current, function (t) {
                    var n;
                    e.dispose(),
                      Re(
                        t,
                        (Oe((n = {}), nr.Ended, function () {
                          o.current(u.current);
                        }),
                        Oe(n, nr.Cancelled, function () {}),
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
      var lr = [
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
        ir = ["show", "appear", "unmount"];
      function ur() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return e.split(" ").filter(function (e) {
          return e.trim().length > 1;
        });
      }
      var cr = (0, t.createContext)(null);
      cr.displayName = "TransitionContext";
      var sr = (function (e) {
        return (e.Visible = "visible"), (e.Hidden = "hidden"), e;
      })(sr || {});
      var fr = (0, t.createContext)(null);
      function dr(e) {
        return "children" in e
          ? dr(e.children)
          : e.current
              .filter(function (e) {
                return null !== e.el.current;
              })
              .filter(function (e) {
                return "visible" === e.state;
              }).length > 0;
      }
      function pr(e, n) {
        var r = Ke(e),
          a = (0, t.useRef)([]),
          o = Pt(),
          l = ar(),
          u = Ge(function (e) {
            var t,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : De.Hidden,
              i = a.current.findIndex(function (t) {
                return t.el === e;
              });
            -1 !== i &&
              (Re(
                n,
                (Oe((t = {}), De.Unmount, function () {
                  a.current.splice(i, 1);
                }),
                Oe(t, De.Hidden, function () {
                  a.current[i].state = "hidden";
                }),
                t)
              ),
              l.microTask(function () {
                var e;
                !dr(a) && o.current && (null == (e = r.current) || e.call(r));
              }));
          }),
          c = Ge(function (e) {
            var t = a.current.find(function (t) {
              return t.el === e;
            });
            return (
              t
                ? "visible" !== t.state && (t.state = "visible")
                : a.current.push({ el: e, state: "visible" }),
              function () {
                return u(e, De.Unmount);
              }
            );
          }),
          s = (0, t.useRef)([]),
          f = (0, t.useRef)(Promise.resolve()),
          d = (0, t.useRef)({ enter: [], leave: [], idle: [] }),
          p = Ge(function (e, t, r) {
            s.current.splice(0),
              n &&
                (n.chains.current[t] = n.chains.current[t].filter(function (t) {
                  return i(t, 1)[0] !== e;
                })),
              null == n ||
                n.chains.current[t].push([
                  e,
                  new Promise(function (e) {
                    s.current.push(e);
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
          v = Ge(function (e, t, n) {
            Promise.all(
              d.current[t].splice(0).map(function (e) {
                var t = i(e, 2);
                t[0];
                return t[1];
              })
            )
              .then(function () {
                var e;
                null == (e = s.current.shift()) || e();
              })
              .then(function () {
                return n(t);
              });
          });
        return (0, t.useMemo)(
          function () {
            return {
              children: a,
              register: c,
              unregister: u,
              onStart: p,
              onStop: v,
              wait: f,
              chains: d,
            };
          },
          [c, u, a, p, v, d, f]
        );
      }
      function vr() {}
      fr.displayName = "NestingContext";
      var hr = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
      function mr(e) {
        var t,
          n,
          r = {},
          a = _e(hr);
        try {
          for (a.s(); !(n = a.n()).done; ) {
            var o = n.value;
            r[o] = null != (t = e[o]) ? t : vr;
          }
        } catch (l) {
          a.e(l);
        } finally {
          a.f();
        }
        return r;
      }
      var gr = Ie.RenderStrategy,
        yr = $e(function (e, n) {
          var r,
            a = e.beforeEnter,
            o = e.afterEnter,
            l = e.beforeLeave,
            u = e.afterLeave,
            c = e.enter,
            s = e.enterFrom,
            f = e.enterTo,
            d = e.entered,
            p = e.leave,
            v = e.leaveFrom,
            h = e.leaveTo,
            m = Te(e, lr),
            g = (0, t.useRef)(null),
            y = Ze(g, n),
            b = m.unmount ? De.Unmount : De.Hidden,
            w = (function () {
              var e = (0, t.useContext)(cr);
              if (null === e)
                throw new Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return e;
            })(),
            x = w.show,
            k = w.appear,
            S = w.initial,
            E = i((0, t.useState)(x ? "visible" : "hidden"), 2),
            C = E[0],
            P = E[1],
            N = (function () {
              var e = (0, t.useContext)(fr);
              if (null === e)
                throw new Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return e;
            })(),
            _ = N.register,
            T = N.unregister,
            O = (0, t.useRef)(null);
          (0, t.useEffect)(
            function () {
              return _(g);
            },
            [_, g]
          ),
            (0, t.useEffect)(
              function () {
                var e;
                if (b === De.Hidden && g.current)
                  return x && "visible" !== C
                    ? void P("visible")
                    : Re(
                        C,
                        (Oe((e = {}), "hidden", function () {
                          return T(g);
                        }),
                        Oe(e, "visible", function () {
                          return _(g);
                        }),
                        e)
                      );
              },
              [C, g, _, T, x, b]
            );
          var j = Ke({
              enter: ur(c),
              enterFrom: ur(s),
              enterTo: ur(f),
              entered: ur(d),
              leave: ur(p),
              leaveFrom: ur(v),
              leaveTo: ur(h),
            }),
            L = (function (e) {
              var n = (0, t.useRef)(mr(e));
              return (
                (0, t.useEffect)(
                  function () {
                    n.current = mr(e);
                  },
                  [e]
                ),
                n
              );
            })({
              beforeEnter: a,
              afterEnter: o,
              beforeLeave: l,
              afterLeave: u,
            }),
            R = rt();
          (0, t.useEffect)(
            function () {
              if (R && "visible" === C && null === g.current)
                throw new Error(
                  "Did you forget to passthrough the `ref` to the actual DOM node?"
                );
            },
            [g, C, R]
          );
          var F = S && !k,
            z = !R || F || O.current === x ? "idle" : x ? "enter" : "leave",
            M = Ge(function (e) {
              return Re(e, {
                enter: function () {
                  return L.current.beforeEnter();
                },
                leave: function () {
                  return L.current.beforeLeave();
                },
                idle: function () {},
              });
            }),
            I = Ge(function (e) {
              return Re(e, {
                enter: function () {
                  return L.current.afterEnter();
                },
                leave: function () {
                  return L.current.afterLeave();
                },
                idle: function () {},
              });
            }),
            D = pr(function () {
              P("hidden"), T(g);
            }, N);
          or({
            container: g,
            classes: j,
            direction: z,
            onStart: Ke(function (e) {
              D.onStart(g, e, M);
            }),
            onStop: Ke(function (e) {
              D.onStop(g, e, I), "leave" === e && !dr(D) && (P("hidden"), T(g));
            }),
          }),
            (0, t.useEffect)(
              function () {
                !F || (b === De.Hidden ? (O.current = null) : (O.current = x));
              },
              [x, F, C]
            );
          var A = m,
            U = { ref: y };
          return t.createElement(
            fr.Provider,
            { value: D },
            t.createElement(
              nn,
              {
                value: Re(
                  C,
                  ((r = {}),
                  Oe(r, "visible", en.Open),
                  Oe(r, "hidden", en.Closed),
                  r)
                ),
              },
              Ae({
                ourProps: U,
                theirProps: A,
                defaultTag: "div",
                features: gr,
                visible: "visible" === C,
                name: "Transition.Child",
              })
            )
          );
        }),
        br = $e(function (e, n) {
          var r,
            a = e.show,
            o = e.appear,
            l = void 0 !== o && o,
            u = e.unmount,
            c = Te(e, ir),
            s = (0, t.useRef)(null),
            f = Ze(s, n);
          rt();
          var d = tn();
          if (
            (void 0 === a &&
              null !== d &&
              (a = Re(d, (Oe((r = {}), en.Open, !0), Oe(r, en.Closed, !1), r))),
            ![!0, !1].includes(a))
          )
            throw new Error(
              "A <Transition /> is used but it is missing a `show={true | false}` prop."
            );
          var p = i((0, t.useState)(a ? "visible" : "hidden"), 2),
            v = p[0],
            h = p[1],
            m = pr(function () {
              h("hidden");
            }),
            g = i((0, t.useState)(!0), 2),
            y = g[0],
            b = g[1],
            w = (0, t.useRef)([a]);
          qe(
            function () {
              !1 !== y &&
                w.current[w.current.length - 1] !== a &&
                (w.current.push(a), b(!1));
            },
            [w, a]
          );
          var x = (0, t.useMemo)(
            function () {
              return { show: a, appear: l, initial: y };
            },
            [a, l, y]
          );
          (0, t.useEffect)(
            function () {
              if (a) h("visible");
              else if (dr(m)) {
                var e = s.current;
                if (!e) return;
                var t = e.getBoundingClientRect();
                0 === t.x &&
                  0 === t.y &&
                  0 === t.width &&
                  0 === t.height &&
                  h("hidden");
              } else h("hidden");
            },
            [a, m]
          );
          var k = { unmount: u };
          return t.createElement(
            fr.Provider,
            { value: m },
            t.createElement(
              cr.Provider,
              { value: x },
              Ae({
                ourProps: Le(
                  Le({}, k),
                  {},
                  {
                    as: t.Fragment,
                    children: t.createElement(yr, Le(Le({ ref: f }, k), c)),
                  }
                ),
                theirProps: {},
                defaultTag: t.Fragment,
                features: gr,
                visible: "visible" === v,
                name: "Transition",
              })
            )
          );
        }),
        wr = $e(function (e, n) {
          var r = null !== (0, t.useContext)(cr),
            a = null !== tn();
          return t.createElement(
            t.Fragment,
            null,
            !r && a
              ? t.createElement(br, Le({ ref: n }, e))
              : t.createElement(yr, Le({ ref: n }, e))
          );
        }),
        xr = Object.assign(br, { Child: wr, Root: br }),
        kr = ["title", "titleId"];
      var Sr = t.forwardRef(function (e, n) {
          var r = e.title,
            a = e.titleId,
            o = Te(e, kr);
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
              o
            ),
            r ? t.createElement("title", { id: a }, r) : null,
            t.createElement("path", {
              fillRule: "evenodd",
              d: "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",
              clipRule: "evenodd",
            })
          );
        }),
        Er = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        Cr = t.createContext && t.createContext(Er),
        Pr = function () {
          return (
            (Pr =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var a in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            Pr.apply(this, arguments)
          );
        },
        Nr = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        };
      function _r(e) {
        return (
          e &&
          e.map(function (e, n) {
            return t.createElement(e.tag, Pr({ key: n }, e.attr), _r(e.child));
          })
        );
      }
      function Tr(e) {
        return function (n) {
          return t.createElement(
            Or,
            Pr({ attr: Pr({}, e.attr) }, n),
            _r(e.child)
          );
        };
      }
      function Or(e) {
        var n = function (n) {
          var r,
            a = e.attr,
            o = e.size,
            l = e.title,
            i = Nr(e, ["attr", "size", "title"]),
            u = o || n.size || "1em";
          return (
            n.className && (r = n.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            t.createElement(
              "svg",
              Pr(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                n.attr,
                a,
                i,
                {
                  className: r,
                  style: Pr(
                    Pr({ color: e.color || n.color }, n.style),
                    e.style
                  ),
                  height: u,
                  width: u,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              l && t.createElement("title", null, l),
              e.children
            )
          );
        };
        return void 0 !== Cr
          ? t.createElement(Cr.Consumer, null, function (e) {
              return n(e);
            })
          : n(Er);
      }
      function jr(e) {
        return Tr({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                fill: "none",
                strokeMiterlimit: "10",
                strokeWidth: "32",
                d: "M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z",
              },
            },
            {
              tag: "path",
              attr: {
                fill: "none",
                strokeMiterlimit: "10",
                strokeWidth: "32",
                d: "M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z",
              },
            },
            {
              tag: "path",
              attr: {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32",
                d: "M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34m0 277.34c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34",
              },
            },
            {
              tag: "path",
              attr: {
                fill: "none",
                strokeMiterlimit: "10",
                strokeWidth: "32",
                d: "M256 48v416m208-208H48",
              },
            },
          ],
        })(e);
      }
      function Lr(e) {
        return Tr({
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
      }
      var Rr,
        Fr = n.p + "static/media/me.0b3f75e6754d2a20b3d3.png",
        zr = "https://github.com/https-sam/sudokusolver",
        Mr = "https://www.samgoto.com",
        Ir = n(184);
      function Dr() {
        var e = i((0, t.useState)(!1), 2),
          n = e[0],
          r = e[1],
          a = i((0, t.useState)([]), 2),
          o = a[0],
          l = a[1],
          c = function () {
            var e,
              t = _e(o);
            try {
              for (t.s(); !(e = t.n()).done; ) {
                var n = e.value;
                clearTimeout(n);
              }
            } catch (a) {
              t.e(a);
            } finally {
              t.f();
            }
            r(!0);
          },
          s = [
            { link: zr, icon: (0, Ir.jsx)(Lr, { size: "30" }) },
            { link: Mr, icon: (0, Ir.jsx)(jr, { size: "30" }) },
          ];
        return (0, Ir.jsx)("div", {
          className: "w-full max-w-sm z-[1]",
          children: (0, Ir.jsx)(Jn, {
            className: "relative",
            children: function (e) {
              var a = e.open;
              return (0, Ir.jsxs)(Ir.Fragment, {
                children: [
                  (0, Ir.jsxs)(Jn.Button, {
                    className: "\n                ".concat(
                      a ? "" : "text-opacity-90",
                      "\n                group inline-flex items-center rounded-md bg-black px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none"
                    ),
                    onMouseEnter: c,
                    onMouseLeave: function () {
                      l(
                        [].concat(u(o), [
                          setTimeout(function () {
                            r(!1);
                          }, 200),
                        ])
                      );
                    },
                    children: [
                      (0, Ir.jsx)("span", { children: "About me" }),
                      (0, Ir.jsx)(Sr, {
                        className: "".concat(
                          a ? "" : "text-opacity-70",
                          "\n                  ml-2 h-5 w-5 text-white transition duration-150 ease-in-out group-hover:text-opacity-80"
                        ),
                        "aria-hidden": "true",
                      }),
                    ],
                  }),
                  (0, Ir.jsx)(xr, {
                    as: t.Fragment,
                    enter: "transition ease-out duration-200",
                    enterFrom: "opacity-0 translate-y-1",
                    enterTo: "opacity-100 translate-y-0",
                    leave: "transition ease-in duration-150",
                    leaveFrom: "opacity-100 translate-y-0",
                    leaveTo: "opacity-0 translate-y-1",
                    show: n,
                    children: (0, Ir.jsx)(Jn.Panel, {
                      className:
                        "absolute left-1/2 z-10 mt-3 w-[calc(50vw)] max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl",
                      children: (0, Ir.jsxs)("div", {
                        className:
                          "overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white flex",
                        onMouseEnter: c,
                        onMouseLeave: function () {
                          l(
                            [].concat(u(o), [
                              setTimeout(function () {
                                r(!1);
                              }, 200),
                            ])
                          );
                        },
                        children: [
                          (0, Ir.jsx)("section", {
                            className: "w-[50%]",
                            children: (0, Ir.jsx)("img", {
                              src: Fr,
                              className: "w-[30rem] bg-yellow-300",
                            }),
                          }),
                          (0, Ir.jsxs)("section", {
                            className: "w-[50%] p-5",
                            children: [
                              (0, Ir.jsx)("h1", {
                                className: "text-[2rem] font-extrabold",
                                children: "Hey!",
                              }),
                              (0, Ir.jsxs)("p", {
                                className: "text-gray-400 font-normal mt-5",
                                children: [
                                  "Thank you for visiting my website. I hope you're having fun \ud83d\ude01. My name is Osamu, I am a software engineer who loves to code and design.",
                                  " ",
                                ],
                              }),
                              (0, Ir.jsxs)("section", {
                                className: "grid place-items-center",
                                children: [
                                  (0, Ir.jsx)("p", {
                                    className: "font-semibold mt-10",
                                    children: "Find me on",
                                  }),
                                  (0, Ir.jsx)("div", {
                                    className: "flex mt-5 gap-3",
                                    children: s.map(function (e, t) {
                                      return (0,
                                      Ir.jsx)("a", { href: e.link, target: "_blank", className: "border-[2px] border-gray-200 p-1 rounded-lg hover:bg-gray-100", children: e.icon }, t);
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              });
            },
          }),
        });
      }
      !(function (e) {
        (e[(e.Pending = 0)] = "Pending"),
          (e[(e.Fulfilled = 1)] = "Fulfilled"),
          (e[(e.Rejected = 2)] = "Rejected");
      })(Rr || (Rr = {}));
      var Ar = (function (e) {
          h(n, e);
          var t = b(n);
          function n(e) {
            var r;
            return (
              c(this, n), ((r = t.call(this, e)).stack = "(in promise) err"), r
            );
          }
          return p(n);
        })(x(Error)),
        Ur = (function () {
          function e(t) {
            c(this, e),
              (this.thenCallbacks = []),
              (this.catchCallbacks = []),
              (this.value = null),
              (this.state = Rr.Pending);
            try {
              t(this.onResolve.bind(this), this.onReject.bind(this));
            } catch (At) {
              this.onReject(At);
            }
          }
          return (
            p(
              e,
              [
                {
                  key: "executeCallbacks",
                  value: function () {
                    var e = this;
                    this.state === Rr.Fulfilled
                      ? this.thenCallbacks.forEach(function (t) {
                          return t(e.value);
                        })
                      : this.state === Rr.Rejected &&
                        this.catchCallbacks.forEach(function (t) {
                          return t(e.value);
                        });
                  },
                },
                {
                  key: "onResolve",
                  value: function (t) {
                    var n = this;
                    queueMicrotask(function () {
                      n.state === Rr.Pending &&
                        (t instanceof e
                          ? t.then(n.onResolve.bind(n), n.onReject.bind(n))
                          : ((n.value = t),
                            (n.state = Rr.Fulfilled),
                            n.executeCallbacks(),
                            (n.thenCallbacks.length = 0)));
                    });
                  },
                },
                {
                  key: "onReject",
                  value: function (t) {
                    var n = this;
                    queueMicrotask(function () {
                      if (n.state === Rr.Pending)
                        if (t instanceof e)
                          t.then(n.onResolve.bind(n), n.onReject.bind(n));
                        else {
                          if (0 === n.catchCallbacks.length) throw new Ar(t);
                          (n.value = t),
                            (n.state = Rr.Rejected),
                            n.executeCallbacks(),
                            (n.catchCallbacks.length = 0);
                        }
                    });
                  },
                },
                {
                  key: "then",
                  value: function (t, n) {
                    var r = this;
                    return new e(function (e, a) {
                      r.thenCallbacks.push(function (n) {
                        if (void 0 !== t)
                          try {
                            e(t(n));
                          } catch (At) {
                            a(At);
                          }
                        else e(n);
                      }),
                        r.catchCallbacks.push(function (t) {
                          if (void 0 !== n)
                            try {
                              e(n(t));
                            } catch (At) {
                              a(At);
                            }
                          else a(t);
                        }),
                        r.executeCallbacks();
                    });
                  },
                },
                {
                  key: "catch",
                  value: function (e) {
                    return this.then(void 0, e);
                  },
                },
                {
                  key: "finally",
                  value: function (e) {
                    return this.then(
                      function (t) {
                        return e(), t;
                      },
                      function (t) {
                        throw (e(), t);
                      }
                    );
                  },
                },
              ],
              [
                {
                  key: "resolve",
                  value: function (t) {
                    return new e(function (e) {
                      e(t);
                    });
                  },
                },
                {
                  key: "reject",
                  value: function (t) {
                    return new e(function (e, n) {
                      n(t);
                    });
                  },
                },
                {
                  key: "any",
                  value: function (t) {
                    var n = [],
                      r = 0;
                    return new e(function (e, a) {
                      for (
                        var o = function (o) {
                            t[o].then(e).catch(function (e) {
                              (n[o] = e),
                                ++r === t.length - 1 &&
                                  a(new Error("All Promises rejected"));
                            });
                          },
                          l = 0;
                        l < t.length;
                        l++
                      )
                        o(l);
                    });
                  },
                },
                {
                  key: "race",
                  value: function (t) {
                    return new e(function (e, n) {
                      t.forEach(function (t) {
                        t.then(e).catch(n);
                      });
                    });
                  },
                },
                {
                  key: "allSettled",
                  value: function (t) {
                    var n = [],
                      r = 0;
                    return new e(function (e) {
                      for (
                        var a = function (a) {
                            t[a]
                              .then(function (e) {
                                n[a] = { status: Rr.Fulfilled, val: e };
                              })
                              .catch(function (e) {
                                n[a] = { status: Rr.Rejected, reason: e };
                              })
                              .finally(function () {
                                ++r === t.length - 1 && e(n);
                              });
                          },
                          o = 0;
                        o < t.length;
                        o++
                      )
                        a(o);
                    });
                  },
                },
                {
                  key: "all",
                  value: function (t) {
                    var n = [],
                      r = 0;
                    return new e(function (e, a) {
                      for (
                        var o = function (o) {
                            t[o]
                              .then(function (a) {
                                r++, (n[o] = a), r === t.length - 1 && e(n);
                              })
                              .catch(a);
                          },
                          l = 0;
                        l < t.length;
                        l++
                      )
                        o(l);
                    });
                  },
                },
              ]
            ),
            e
          );
        })(),
        Br = Ur,
        Hr = function e(t) {
          for (var n = 0; n < 9; n++)
            for (var r = 0; r < 9; r++)
              if ("" === t[n][r]) {
                for (var a = "1"; +a <= 9; ) {
                  if ($r(n, r, t, a)) {
                    if (((t[n][r] = a), e(t))) return t;
                    t[n][r] = "";
                  }
                  a = (+a + 1).toString();
                }
                return !1;
              }
          return t;
        },
        $r = function (e, t, n, r) {
          for (var a = 0; a < 9; a++) if (n[e][a] === r) return !1;
          for (var o = 0; o < 9; o++) if (n[o][t] === r) return !1;
          for (var l = 3 * ~~(e / 3), i = 3 * ~~(t / 3), u = 0; u < 3; u++)
            for (var c = 0; c < 3; c++) if (n[l + u][i + c] === r) return !1;
          return !0;
        },
        Wr = function (e) {
          return Hr(e);
        },
        Vr = function (e) {
          var n = e.odd,
            r = e.i,
            a = i((0, t.useState)(""), 2),
            o = a[0],
            l = a[1];
          return (0, Ir.jsx)("input", {
            id: "cell-".concat(r),
            type: "text",
            value: o,
            maxLength: 1,
            onChange: function (e) {
              var t = e.target.value.replace(/[^1-9]/g, "");
              l(t);
            },
            pattern: "[0-9]{1}",
            className:
              "w-[40px] h-[40px] text-center border-[1px] focus:outline-none font-semibold text-gray-600 ".concat(
                n && "bg-[#f0f0f0]"
              ),
          });
        },
        Qr = function () {
          var e = [],
            n = i((0, t.useState)(!1), 2),
            r = n[0],
            a = n[1];
          function o() {
            var e = i((0, t.useState)(!1), 2),
              n = e[0],
              o = e[1];
            function l() {
              o(!1),
                setTimeout(function () {
                  a(!1);
                }, 300);
            }
            return (
              (0, t.useEffect)(
                function () {
                  r && o(!0);
                },
                [r]
              ),
              (0, Ir.jsx)(Ir.Fragment, {
                children: (0, Ir.jsx)(xr, {
                  appear: n,
                  show: n,
                  as: t.Fragment,
                  children: (0, Ir.jsxs)(Pn, {
                    as: "div",
                    className: "relative z-10",
                    onClose: l,
                    children: [
                      (0, Ir.jsx)(xr.Child, {
                        as: t.Fragment,
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "ease-in duration-200",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: (0, Ir.jsx)("div", {
                          className: "fixed inset-0 bg-black bg-opacity-25",
                        }),
                      }),
                      (0, Ir.jsx)("div", {
                        className: "fixed inset-0 overflow-y-auto",
                        children: (0, Ir.jsx)("div", {
                          className:
                            "flex min-h-full items-center justify-center p-4 text-center",
                          children: (0, Ir.jsx)(xr.Child, {
                            as: t.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: (0, Ir.jsxs)(Pn.Panel, {
                              className:
                                "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                              children: [
                                (0, Ir.jsx)(Pn.Title, {
                                  as: "h3",
                                  className:
                                    "text-lg font-medium leading-6 text-gray-900",
                                  children: "Oops.. Invalid Sudoku",
                                }),
                                (0, Ir.jsx)("div", {
                                  className: "mt-2",
                                  children: (0, Ir.jsx)("p", {
                                    className: "text-sm text-gray-500",
                                    children: (0, Ir.jsxs)("div", {
                                      className: "mt-2",
                                      children: [
                                        (0, Ir.jsx)("h1", {
                                          className: "mb-1",
                                          children: "Remember that . . . ",
                                        }),
                                        (0, Ir.jsxs)("p", {
                                          className: "text-sm text-gray-500",
                                          children: [
                                            "1) Each row must contain the digits 1-9 without repetition. ",
                                            (0, Ir.jsx)("br", {}),
                                            " 2) Each column must contain the digits 1-9 without repetition.",
                                            (0, Ir.jsx)("br", {}),
                                            " 3) Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.",
                                            (0, Ir.jsx)("br", {}),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                                (0, Ir.jsx)("div", {
                                  className: "mt-4",
                                  children: (0, Ir.jsx)("button", {
                                    type: "button",
                                    className:
                                      "inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                                    onClick: l,
                                    children: "Got it",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              })
            );
          }
          return (0, Ir.jsxs)(Ir.Fragment, {
            children: [
              (0, Ir.jsx)("div", {
                className:
                  "grid grid-cols-9 w-fit rounded-lg border-[1px] overflow-hidden",
                id: "solver-board",
                children: Array.from(Array(81), function (e, t) {
                  return (0, Ir.jsx)(Vr, { odd: t % 2 == 1, i: t }, t);
                }),
              }),
              (0, Ir.jsx)("button", {
                className:
                  "w-[20rem] h-[2.3rem] rounded-md text-white font-semibold bg-indigo-600 hover:bg-indigo-700 mt-10",
                onClick: function () {
                  !(function () {
                    e = [];
                    for (
                      var t = 0,
                        n = document.getElementById("solver-board"),
                        r = 0;
                      r < 9;
                      r++
                    ) {
                      for (var a = [], o = 0; o < 9; o++)
                        a.push(
                          (null === n || void 0 === n ? void 0 : n.children[t])
                            .value
                        ),
                          t++;
                      e.push(a);
                    }
                  })();
                  var t = new Br(function (t, n) {
                    !(function (e) {
                      for (var t = 0; t < 9; t++)
                        for (
                          var n = new Set(),
                            r = new Set(),
                            a = new Set(),
                            o = 0;
                          o < 9;
                          o++
                        ) {
                          var l = e[t][o],
                            i = e[o][t],
                            u =
                              e[3 * Math.floor(t / 3) + Math.floor(o / 3)][
                                (t % 3) * 3 + (o % 3)
                              ];
                          if ("" != l) {
                            if (n.has(l)) return !1;
                            n.add(l);
                          }
                          if ("" != i) {
                            if (r.has(i)) return !1;
                            r.add(i);
                          }
                          if ("" != u) {
                            if (a.has(u)) return !1;
                            a.add(u);
                          }
                        }
                      return !0;
                    })(e)
                      ? (a(!0), n("The Entered sudoku grid is invalid!"))
                      : t(Wr(e));
                  });
                  t.then(function (e) {
                    console.log(e),
                      (function (e) {
                        var t = 0,
                          n = document.getElementById("solver-board"),
                          r =
                            null === n || void 0 === n ? void 0 : n.childNodes;
                        if (r)
                          for (var a = 0; a < 9; a++)
                            for (var o = 0; o < 9; o++)
                              (r[t].value = e[a][o]), t++;
                      })(e);
                  }).catch(function (e) {
                    console.log(e);
                  });
                },
                children: "Solve",
              }),
              (0, Ir.jsx)("button", {
                className:
                  "w-[20rem] h-[2.3rem] rounded-md text-white font-semibold bg-gray-300 hover:bg-gray-400 mt-3",
                onClick: function () {
                  var e = 0,
                    t = document.getElementById("solver-board"),
                    n = null === t || void 0 === t ? void 0 : t.childNodes;
                  if (n)
                    for (var r = 0; r < 9; r++)
                      for (var a = 0; a < 9; a++) (n[e].value = ""), e++;
                },
                children: "Reset",
              }),
              (0, Ir.jsx)(o, {}),
            ],
          });
        },
        qr = [
          { name: "Sudoku Solver", href: "/" },
          { name: "About me", href: Mr },
        ];
      function Kr() {
        var e = i((0, t.useState)(!1), 2),
          n = e[0],
          r = e[1];
        return (0, Ir.jsxs)("div", {
          className: "isolate bg-white",
          children: [
            (0, Ir.jsx)("div", {
              className:
                "absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]",
              children: (0, Ir.jsxs)("svg", {
                className:
                  "relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]",
                viewBox: "0 0 1155 678",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, Ir.jsx)("path", {
                    fill: "url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)",
                    fillOpacity: ".3",
                    d: "M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z",
                  }),
                  (0, Ir.jsx)("defs", {
                    children: (0, Ir.jsxs)("linearGradient", {
                      id: "45de2b6b-92d5-4d68-a6a0-9b9b2abad533",
                      x1: "1155.49",
                      x2: "-78.208",
                      y1: ".177",
                      y2: "474.645",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, Ir.jsx)("stop", { stopColor: "#00b4d8" }),
                        (0, Ir.jsx)("stop", {
                          offset: 1,
                          stopColor: "#00b4d8",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, Ir.jsx)("div", {
              className: "px-6 pt-6 lg:px-8",
              children: (0, Ir.jsxs)("div", {
                children: [
                  (0, Ir.jsxs)("nav", {
                    className: "flex h-9 items-center justify-between",
                    "aria-label": "Global",
                    children: [
                      (0, Ir.jsx)("div", {
                        className: "flex lg:min-w-0 lg:flex-1",
                        "aria-label": "Global",
                        children: (0, Ir.jsx)("a", {
                          href: "#",
                          className: "-m-1.5 p-1.5 bg-indigo-600 rounded-lg",
                          children: (0, Ir.jsx)("img", {
                            className: "h-8",
                            src: jn,
                            alt: "",
                          }),
                        }),
                      }),
                      (0, Ir.jsx)("div", {
                        className: "flex lg:hidden",
                        children: (0, Ir.jsxs)("button", {
                          type: "button",
                          className:
                            "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",
                          onClick: function () {
                            return r(!0);
                          },
                          children: [
                            (0, Ir.jsx)("span", {
                              className: "sr-only",
                              children: "Open main menu",
                            }),
                            (0, Ir.jsx)(_n, {
                              className: "h-6 w-6",
                              "aria-hidden": "true",
                            }),
                          ],
                        }),
                      }),
                      (0, Ir.jsxs)("div", {
                        className:
                          "hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12",
                        children: [
                          (0, Ir.jsx)(
                            "a",
                            {
                              href: "/",
                              className:
                                "font-semibold text-gray-900 hover:text-gray-900 mt-[6px]",
                              children: "Sudoku Solver",
                            },
                            "Sudoku Solver"
                          ),
                          (0, Ir.jsx)(
                            "div",
                            {
                              className:
                                "font-semibold text-gray-900 hover:text-gray-900",
                              children: (0, Ir.jsx)(Dr, {}),
                            },
                            "About me"
                          ),
                        ],
                      }),
                      (0, Ir.jsx)("div", {
                        className:
                          "hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end",
                        children: (0, Ir.jsx)("a", {
                          href: zr,
                          className:
                            "inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 hover:bg-gray-100/50",
                          children: "Code",
                        }),
                      }),
                    ],
                  }),
                  (0, Ir.jsx)(Pn, {
                    as: "div",
                    open: n,
                    onClose: r,
                    children: (0, Ir.jsxs)(Pn.Panel, {
                      className:
                        "fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden",
                      children: [
                        (0, Ir.jsxs)("div", {
                          className: "flex h-9 items-center justify-between",
                          children: [
                            (0, Ir.jsx)("div", {
                              className: "flex",
                              children: (0, Ir.jsx)("a", {
                                href: "#",
                                className:
                                  "-m-1.5 p-1.5 bg-indigo-600 rounded-lg",
                                children: (0, Ir.jsx)("img", {
                                  className: "h-8",
                                  src: jn,
                                  alt: "",
                                }),
                              }),
                            }),
                            (0, Ir.jsx)("div", {
                              className: "flex",
                              children: (0, Ir.jsxs)("button", {
                                type: "button",
                                className:
                                  "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",
                                onClick: function () {
                                  return r(!1);
                                },
                                children: [
                                  (0, Ir.jsx)("span", {
                                    className: "sr-only",
                                    children: "Close menu",
                                  }),
                                  (0, Ir.jsx)(On, {
                                    className: "h-6 w-6",
                                    "aria-hidden": "true",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, Ir.jsx)("div", {
                          className: "mt-6 flow-root",
                          children: (0, Ir.jsxs)("div", {
                            className: "-my-6 divide-y divide-gray-500/10",
                            children: [
                              (0, Ir.jsx)("div", {
                                className: "space-y-2 py-6",
                                children: qr.map(function (e) {
                                  return (0,
                                  Ir.jsx)("a", { href: e.href, className: "-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10", children: e.name }, e.name);
                                }),
                              }),
                              (0, Ir.jsx)("div", {
                                className: "py-6",
                                children: (0, Ir.jsx)("a", {
                                  href: zr,
                                  className:
                                    "-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10",
                                  children: "Code",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, Ir.jsx)("main", {
              className: "",
              children: (0, Ir.jsx)("div", {
                className: "relative px-6 lg:px-8",
                children: (0, Ir.jsx)("div", {
                  className: "mx-auto max-w-3xl sm:pt-10 sm:pb-10",
                  children: (0, Ir.jsxs)("div", {
                    children: [
                      (0, Ir.jsx)("h1", {
                        className: "mb-5 text-[3rem] font-semibold",
                        children: "Sudoku Solver",
                      }),
                      (0, Ir.jsx)("div", {
                        className: "sm:mb-8 sm:flex sm:justify-center",
                        children: (0, Ir.jsx)("div", {
                          className:
                            "relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20",
                          children: (0, Ir.jsxs)("span", {
                            className: "text-gray-600",
                            children: [
                              "The code is available on github",
                              " ",
                              (0, Ir.jsxs)("a", {
                                href: zr,
                                className: "font-semibold text-indigo-600",
                                children: [
                                  (0, Ir.jsx)("span", {
                                    className: "absolute inset-0",
                                    "aria-hidden": "true",
                                  }),
                                  "See code ",
                                  (0, Ir.jsx)("span", {
                                    "aria-hidden": "true",
                                    children: "\u2192",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, Ir.jsxs)("div", {
                        children: [
                          (0, Ir.jsx)("p", {
                            className:
                              "mt-6 text-lg leading-8 text-gray-600 sm:text-center",
                            children:
                              "To get started, enter a number in one or more cells and click the solve button!",
                          }),
                          (0, Ir.jsx)("div", {
                            className:
                              "mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 grid place-items-center pt-[2rem]",
                            children: (0, Ir.jsx)(Qr, {}),
                          }),
                        ],
                      }),
                      (0, Ir.jsx)("div", {
                        className:
                          "absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]",
                        children: (0, Ir.jsxs)("svg", {
                          className:
                            "relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]",
                          viewBox: "0 0 1155 678",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, Ir.jsx)("path", {
                              fill: "url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)",
                              fillOpacity: ".3",
                              d: "M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z",
                            }),
                            (0, Ir.jsx)("defs", {
                              children: (0, Ir.jsxs)("linearGradient", {
                                id: "ecb5b0c9-546c-4772-8c71-4d3f06d544bc",
                                x1: "1155.49",
                                x2: "-78.208",
                                y1: ".177",
                                y2: "474.645",
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                  (0, Ir.jsx)("stop", { stopColor: "#00b4d8" }),
                                  (0, Ir.jsx)("stop", {
                                    offset: 1,
                                    stopColor: "#00b4d8",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      }
      var Gr = function () {
          return (0, Ir.jsx)("div", {
            className: "App",
            children: (0, Ir.jsx)(Ce, {
              children: (0, Ir.jsx)(ke, {
                children: (0, Ir.jsx)(we, {
                  path: "/",
                  element: (0, Ir.jsx)(Kr, {}),
                }),
              }),
            }),
          });
        },
        Yr = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(787)
              .then(n.bind(n, 787))
              .then(function (t) {
                var n = t.getCLS,
                  r = t.getFID,
                  a = t.getFCP,
                  o = t.getLCP,
                  l = t.getTTFB;
                n(e), r(e), a(e), o(e), l(e);
              });
        };
      a
        .createRoot(document.getElementById("mountpoint"))
        .render((0, Ir.jsx)(Gr, {})),
        Yr();
    })();
})();
//# sourceMappingURL=main.5d6b09ee.js.map

