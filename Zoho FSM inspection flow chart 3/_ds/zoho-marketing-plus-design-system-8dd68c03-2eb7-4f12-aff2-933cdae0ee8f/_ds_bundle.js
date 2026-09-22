/* @ds-bundle: {"format":3,"namespace":"ZohoMarketingPlusDesignSystem_8dd68c","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"e4fffcaaab1a","components/core/Badge.jsx":"ce66f0d9561b","components/core/Button.jsx":"925286be0456","components/core/Card.jsx":"9c58709e6f80","components/core/Input.jsx":"68ef70faced9","components/core/Tag.jsx":"8cea333522bd","ui_kits/marketing_plus/BudgetDashboard.jsx":"a86092107b7b","ui_kits/marketing_plus/Screens.jsx":"a41b18dba8e1","ui_kits/marketing_plus/Shell.jsx":"3975f0581c17"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ZohoMarketingPlusDesignSystem_8dd68c = window.ZohoMarketingPlusDesignSystem_8dd68c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Zoho Marketing Plus — Avatar
 * Circular user avatar from a photo or initials, with optional presence dot.
 * Sizes 16 / 20 / 24 / 32 / 40px.
 */
const SIZES = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 40
};
const INITIAL_BG = ["#2C66DD", "#0C8844", "#E65100", "#663399", "#C03E70", "#1470CC"];
function hashIndex(str, n) {
  let h = 0;
  for (let i = 0; i < (str || "").length; i++) h = h * 31 + str.charCodeAt(i) | 0;
  return Math.abs(h) % n;
}
function Avatar({
  src = null,
  name = "",
  size = "lg",
  status = null,
  // "online" | "away" | "busy" | null
  style = {},
  ...rest
}) {
  const px = SIZES[size] || SIZES.lg;
  const initials = (name || "").split(" ").filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join("");
  const bg = INITIAL_BG[hashIndex(name, INITIAL_BG.length)];
  const statusColor = {
    online: "var(--green-alert)",
    away: "var(--yellow-alert)",
    busy: "var(--red-alert)"
  }[status];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      flexShrink: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: px,
      height: px,
      borderRadius: "50%",
      overflow: "hidden",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: src ? "var(--grey-40)" : bg,
      color: "#fff",
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: Math.round(px * 0.42),
      lineHeight: 1,
      userSelect: "none"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials), statusColor && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: Math.max(7, Math.round(px * 0.28)),
      height: Math.max(7, Math.round(px * 0.28)),
      borderRadius: "50%",
      background: statusColor,
      border: "1.5px solid var(--white)"
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Zoho Marketing Plus — Badge
 * Small count / indicator. Numbers render in Inter (numeric face). Use `dot`
 * for a bare presence indicator.
 */
function Badge({
  children,
  tone = "accent",
  // "accent" | "neutral" | "danger" | "success"
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    accent: {
      background: "var(--accent)",
      color: "#fff"
    },
    neutral: {
      background: "var(--grey-50)",
      color: "var(--fg1)"
    },
    danger: {
      background: "var(--red-mandate)",
      color: "#fff"
    },
    success: {
      background: "var(--green-alert)",
      color: "#fff"
    }
  };
  const t = tones[tone] || tones.accent;
  if (dot) {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "inline-block",
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: t.background,
        ...style
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "num",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 18,
      height: 18,
      padding: "0 5px",
      borderRadius: "var(--radius-sm)",
      fontSize: 11,
      fontWeight: 600,
      lineHeight: 1,
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Zoho Marketing Plus — Button
 * Primary / secondary / tertiary / danger, in sm / md / lg, with optional
 * leading icon, loading spinner, dropdown caret and disabled state.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  icon = null,
  dropdown = false,
  type = "button",
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      height: 28,
      padding: "0 12px",
      fontSize: 12,
      gap: 6
    },
    md: {
      height: 32,
      padding: "0 14px",
      fontSize: 13,
      gap: 6
    },
    lg: {
      height: 36,
      padding: "0 16px",
      fontSize: 14,
      gap: 8
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "#fff",
      border: "1px solid transparent"
    },
    secondary: {
      background: "var(--white)",
      color: "var(--fg1)",
      border: "1px solid var(--border)"
    },
    tertiary: {
      background: "transparent",
      color: "var(--accent)",
      border: "1px solid transparent"
    },
    danger: {
      background: "var(--red-mandate)",
      color: "#fff",
      border: "1px solid transparent"
    }
  };
  const v = variants[variant] || variants.primary;
  const isDisabled = disabled || loading;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    fontFamily: "var(--font-ui)",
    fontWeight: 500,
    fontSize: s.fontSize,
    lineHeight: 1,
    borderRadius: "var(--radius-md)",
    cursor: isDisabled ? "not-allowed" : "pointer",
    transition: "background 150ms ease-out, border-color 150ms ease-out, color 150ms ease-out",
    whiteSpace: "nowrap",
    ...v,
    ...(isDisabled ? {
      background: "var(--grey-40)",
      color: "var(--grey-60)",
      border: "1px solid transparent"
    } : {}),
    ...style
  };
  const hoverEnter = e => {
    if (isDisabled) return;
    if (variant === "primary") e.currentTarget.style.background = "var(--accent-topbar)";else if (variant === "secondary") e.currentTarget.style.background = "var(--grey-20)";else if (variant === "tertiary") e.currentTarget.style.background = "var(--accent-10)";else if (variant === "danger") e.currentTarget.style.background = "#E01717";
  };
  const hoverLeave = e => {
    if (isDisabled) return;
    e.currentTarget.style.background = v.background;
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: isDisabled,
    style: base,
    onMouseEnter: hoverEnter,
    onMouseLeave: hoverLeave
  }, rest), loading && /*#__PURE__*/React.createElement("svg", {
    width: s.fontSize + 2,
    height: s.fontSize + 2,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      animation: "zmp-spin 0.7s linear infinite"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9",
    stroke: "currentColor",
    strokeOpacity: "0.35",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 0 0-9-9",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("style", null, "@keyframes zmp-spin{to{transform:rotate(360deg)}}")), !loading && icon, children, dropdown && /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      opacity: 0.8,
      marginLeft: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  })));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Zoho Marketing Plus — Card
 * White panel, 16px radius, hairline border, resting card shadow. Optional
 * header row (title + action) using the flush grey header treatment.
 */
function Card({
  children,
  title = null,
  action = null,
  padding = 20,
  hover = false,
  style = {},
  bodyStyle = {},
  ...rest
}) {
  const [raised, setRaised] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: hover ? () => setRaised(true) : undefined,
    onMouseLeave: hover ? () => setRaised(false) : undefined,
    style: {
      background: "var(--white)",
      border: "1px solid var(--grey-50)",
      borderRadius: "var(--radius-lg)",
      boxShadow: raised ? "var(--shadow-float)" : "var(--shadow-card)",
      transition: "box-shadow 150ms ease-out",
      overflow: "hidden",
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 20px",
      background: "var(--grey-20)",
      borderBottom: "1px solid var(--grey-40)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--fg1)",
      margin: 0
    }
  }, title), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center"
    }
  }, action)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding,
      ...bodyStyle
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Zoho Marketing Plus — Input
 * Labeled text field with sizes, optional leading icon, helper / error text.
 */
function Input({
  label = null,
  value,
  defaultValue,
  placeholder = "",
  size = "md",
  icon = null,
  error = null,
  helper = null,
  disabled = false,
  type = "text",
  style = {},
  ...rest
}) {
  const heights = {
    sm: 32,
    md: 36,
    lg: 40
  };
  const h = heights[size] || heights.md;
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? "var(--red-mandate)" : focus ? "var(--accent)" : "var(--border)";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-ui)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: "var(--fg2)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: h,
      padding: "0 12px",
      background: disabled ? "var(--grey-20)" : "var(--white)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus && !error ? "var(--shadow-focus)" : "none",
      transition: "border-color 150ms ease-out, box-shadow 150ms ease-out"
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--fg3)",
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 0,
      background: "transparent",
      fontFamily: "var(--font-ui)",
      fontSize: 14,
      color: "var(--fg1)"
    }
  }, rest))), (error || helper) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: error ? "var(--red-mandate)" : "var(--fg3)"
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Zoho Marketing Plus — Tag
 * Pill-shaped label across 7 color families and stroke / filled / filled-stroke
 * variants. Optional leading dot, icon, or remove (×) affordance.
 */
const PALETTE = {
  grey: {
    fg: "#545E6F",
    fill: "#ECEEF1",
    stroke: "#D9DDE3",
    dot: "#6C7A96"
  },
  red: {
    fg: "#CC3929",
    fill: "#FBECEA",
    stroke: "#F2C9C3",
    dot: "#CC3929"
  },
  yellow: {
    fg: "#B26A1E",
    fill: "#FBF1E6",
    stroke: "#F0DcBc",
    dot: "#EFAB1F"
  },
  green: {
    fg: "#0C8844",
    fill: "#E6F4EC",
    stroke: "#BfE3CD",
    dot: "#0C8844"
  },
  blue: {
    fg: "#2C66DD",
    fill: "#E9F0FD",
    stroke: "#C7D8F7",
    dot: "#2C66DD"
  },
  purple: {
    fg: "#663399",
    fill: "#F0EAF6",
    stroke: "#D8C7EA",
    dot: "#663399"
  },
  pink: {
    fg: "#C03E70",
    fill: "#FBEAF1",
    stroke: "#F0C9D8",
    dot: "#C03E70"
  }
};
function Tag({
  children,
  color = "grey",
  variant = "filled",
  dot = false,
  icon = null,
  onRemove = null,
  size = "md",
  style = {},
  ...rest
}) {
  const p = PALETTE[color] || PALETTE.grey;
  const dims = size === "sm" ? {
    height: 20,
    padding: "0 8px",
    fontSize: 11,
    gap: 5
  } : {
    height: 24,
    padding: "0 10px",
    fontSize: 12,
    gap: 6
  };
  const skin = {
    filled: {
      background: p.fill,
      color: p.fg,
      border: "1px solid transparent"
    },
    stroke: {
      background: "transparent",
      color: p.fg,
      border: `1px solid ${p.stroke}`
    },
    "filled-stroke": {
      background: p.fill,
      color: p.fg,
      border: `1px solid ${p.stroke}`
    }
  }[variant] || {
    background: p.fill,
    color: p.fg,
    border: "1px solid transparent"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: dims.gap,
      height: dims.height,
      padding: dims.padding,
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: dims.fontSize,
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...skin,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: p.dot,
      flexShrink: 0
    }
  }), icon, children, onRemove && /*#__PURE__*/React.createElement("svg", {
    onClick: onRemove,
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    style: {
      cursor: "pointer",
      opacity: 0.7,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_plus/BudgetDashboard.jsx
try { (() => {
// Marketing Plus — Budget Board tab. Composes DS Card / Tag / Button. Numbers in Inter (.num).
const NS_B = window.ZohoMarketingPlusDesignSystem_8dd68c || {};
const fmt = n => "$" + n.toLocaleString("en-US");
const fmtK = n => n >= 1000 ? "$" + (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + "K" : "$" + n;
const CH = [{
  name: "Paid Search",
  color: "#2C66DD",
  allocated: 320000,
  spent: 248400
}, {
  name: "Social Media",
  color: "#663399",
  allocated: 240000,
  spent: 161200
}, {
  name: "Content",
  color: "#0C8844",
  allocated: 190000,
  spent: 121800
}, {
  name: "Events",
  color: "#E65100",
  allocated: 180000,
  spent: 96500
}, {
  name: "Email",
  color: "#1470CC",
  allocated: 140000,
  spent: 88300
}, {
  name: "PR & Comms",
  color: "#EA3D3D",
  allocated: 130000,
  spent: 26200
}];
const MONTHS = [{
  m: "Jan",
  plan: 96,
  act: 88
}, {
  m: "Feb",
  plan: 100,
  act: 94
}, {
  m: "Mar",
  plan: 110,
  act: 121
}, {
  m: "Apr",
  plan: 104,
  act: 99
}, {
  m: "May",
  plan: 112,
  act: 108
}, {
  m: "Jun",
  plan: 118,
  act: 96
}, {
  m: "Jul",
  plan: 120,
  act: 0
}, {
  m: "Aug",
  plan: 116,
  act: 0
}];
const Kpi = ({
  label,
  value,
  sub,
  subColor = "var(--fg3)",
  accent
}) => {
  const {
    Card
  } = NS_B;
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: accent
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      color: "var(--fg3)",
      textTransform: "uppercase",
      letterSpacing: "0.04em"
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    className: "num",
    style: {
      fontSize: 28,
      fontWeight: 700,
      color: "var(--fg1)",
      marginTop: 10,
      letterSpacing: "-0.01em"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: subColor,
      marginTop: 4
    }
  }, sub));
  return Card ? /*#__PURE__*/React.createElement(Card, {
    padding: 18,
    style: {
      flex: 1,
      minWidth: 0
    }
  }, inner) : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 18,
      border: "1px solid var(--grey-50)",
      borderRadius: 16
    }
  }, inner);
};
const Donut = () => {
  const total = CH.reduce((s, c) => s + c.allocated, 0);
  const r = 58,
    C = 2 * Math.PI * r;
  let offset = 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 150,
      height: 150,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "150",
    height: "150",
    viewBox: "0 0 150 150"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "rotate(-90 75 75)"
  }, CH.map((c, i) => {
    const dash = c.allocated / total * C;
    const seg = /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: "75",
      cy: "75",
      r: r,
      fill: "none",
      stroke: c.color,
      strokeWidth: "18",
      strokeDasharray: `${dash} ${C - dash}`,
      strokeDashoffset: -offset
    });
    offset += dash;
    return seg;
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "num",
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: "var(--fg1)"
    }
  }, fmtK(total)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--fg3)"
    }
  }, "Allocated"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "10px 14px"
    }
  }, CH.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.name,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 3,
      background: c.color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--fg2)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, c.name), /*#__PURE__*/React.createElement("span", {
    className: "num",
    style: {
      fontSize: 12,
      color: "var(--fg1)",
      fontWeight: 600,
      marginLeft: "auto"
    }
  }, Math.round(c.allocated / total * 100), "%")))));
};
const Bars = () => {
  const max = 130;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 14,
      height: 200,
      padding: "0 4px"
    }
  }, MONTHS.map(mo => /*#__PURE__*/React.createElement("div", {
    key: mo.m,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 4,
      height: 168,
      width: "100%",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "38%",
      maxWidth: 16,
      height: `${mo.plan / max * 100}%`,
      background: "var(--blue-40)",
      borderRadius: "3px 3px 0 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "38%",
      maxWidth: 16,
      height: `${mo.act / max * 100}%`,
      background: "var(--blue-primary)",
      borderRadius: "3px 3px 0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--fg3)"
    }
  }, mo.m)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      marginTop: 14,
      paddingLeft: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12,
      color: "var(--fg2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 2,
      background: "var(--blue-40)"
    }
  }), "Planned"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12,
      color: "var(--fg2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 2,
      background: "var(--blue-primary)"
    }
  }), "Actual")));
};
const StatusTag = ({
  pct
}) => {
  const {
    Tag
  } = NS_B;
  let color = "green",
    label = "On track";
  if (pct >= 90) {
    color = "red";
    label = "Over risk";
  } else if (pct >= 75) {
    color = "yellow";
    label = "Watch";
  }
  return Tag ? /*#__PURE__*/React.createElement(Tag, {
    color: color,
    dot: true,
    size: "sm"
  }, label) : /*#__PURE__*/React.createElement("span", null, label);
};
const BudgetTable = () => {
  const GT = "1.4fr 1fr 1fr 1fr 1.6fr 0.9fr";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: GT,
      padding: "0 4px 12px",
      fontSize: 10.5,
      fontWeight: 600,
      color: "var(--fg3)",
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      borderBottom: "1px solid var(--grey-50)",
      minWidth: 720
    }
  }, /*#__PURE__*/React.createElement("div", null, "Channel"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, "Allocated"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, "Spent"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, "Remaining"), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 20
    }
  }, "Utilization"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, "Status")), CH.map(c => {
    const rem = c.allocated - c.spent;
    const pct = Math.round(c.spent / c.allocated * 100);
    return /*#__PURE__*/React.createElement("div", {
      key: c.name,
      style: {
        display: "grid",
        gridTemplateColumns: GT,
        padding: "14px 4px",
        alignItems: "center",
        borderBottom: "1px solid var(--grey-40)",
        fontSize: 13,
        minWidth: 720
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: 3,
        background: c.color,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500,
        color: "var(--fg1)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, c.name)), /*#__PURE__*/React.createElement("div", {
      className: "num",
      style: {
        textAlign: "right",
        color: "var(--fg1)"
      }
    }, fmt(c.allocated)), /*#__PURE__*/React.createElement("div", {
      className: "num",
      style: {
        textAlign: "right",
        color: "var(--fg1)"
      }
    }, fmt(c.spent)), /*#__PURE__*/React.createElement("div", {
      className: "num",
      style: {
        textAlign: "right",
        color: rem < c.allocated * 0.1 ? "var(--red-primary)" : "var(--green-primary)"
      }
    }, fmt(rem)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        paddingLeft: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 6,
        borderRadius: 9999,
        background: "var(--grey-40)",
        overflow: "hidden",
        minWidth: 60
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${pct}%`,
        height: "100%",
        borderRadius: 9999,
        background: c.color
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "num",
      style: {
        fontSize: 12,
        color: "var(--fg2)",
        width: 34,
        textAlign: "right"
      }
    }, pct, "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement(StatusTag, {
      pct: pct
    })));
  }));
};
const BudgetDashboard = () => {
  const {
    Card,
    Button
  } = NS_B;
  const totalAlloc = CH.reduce((s, c) => s + c.allocated, 0);
  const totalSpent = CH.reduce((s, c) => s + c.spent, 0);
  const committed = 186000;
  const remaining = totalAlloc - totalSpent - committed;
  const pctSpent = Math.round(totalSpent / totalAlloc * 100);
  const Panel = ({
    title,
    action,
    children,
    style
  }) => Card ? /*#__PURE__*/React.createElement(Card, {
    title: title,
    action: action,
    style: style
  }, children) : /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("h3", null, title), children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 28px 40px",
      background: "var(--grey-20)",
      minHeight: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 12,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: "var(--fg1)",
      margin: 0
    }
  }, "Marketing Budget"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--fg3)",
      marginTop: 4
    }
  }, "Fiscal year 2026 \xB7 Q1\u2013Q2 actuals, Q3\u2013Q4 planned")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), Button ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    dropdown: true
  }, "FY 2026"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Export"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Add budget")) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Kpi, {
    label: "Total budget",
    accent: "#2C66DD",
    value: fmt(totalAlloc),
    sub: "Approved for FY 2026"
  }), /*#__PURE__*/React.createElement(Kpi, {
    label: "Spent to date",
    accent: "#0C8844",
    value: fmt(totalSpent),
    sub: `${pctSpent}% of total budget`,
    subColor: "var(--green-primary)"
  }), /*#__PURE__*/React.createElement(Kpi, {
    label: "Committed",
    accent: "#F49630",
    value: fmt(committed),
    sub: "POs & pending invoices"
  }), /*#__PURE__*/React.createElement(Kpi, {
    label: "Remaining",
    accent: "#663399",
    value: fmt(remaining),
    sub: `${Math.round(remaining / totalAlloc * 100)}% available`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gap: 16,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Spend over time",
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "var(--fg3)"
      }
    }, "Monthly \xB7 $ thousands")
  }, /*#__PURE__*/React.createElement(Bars, null)), /*#__PURE__*/React.createElement(Panel, {
    title: "Allocation by channel"
  }, /*#__PURE__*/React.createElement(Donut, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Budget by channel",
    action: /*#__PURE__*/React.createElement("a", {
      className: "link",
      style: {
        fontSize: 13
      }
    }, "View all")
  }, /*#__PURE__*/React.createElement(BudgetTable, null))));
};
Object.assign(window, {
  BudgetDashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_plus/BudgetDashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_plus/Screens.jsx
try { (() => {
// Marketing Plus — Marketing Projects list page. Mirrors the real Zylker Hospital view.
const NS_S = window.ZohoMarketingPlusDesignSystem_8dd68c || {};
const PROJECTS = [{
  mo: "MAR",
  day: "30",
  yr: "2026",
  dot: "#42AD4B",
  title: "Discover the Future of Health: Our Latest…",
  loc: "Global",
  obj: "Brand Awareness",
  type: "Content Marketing",
  owner: "John Olliver",
  av: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces"
}, {
  mo: "JAN",
  day: "31",
  yr: "2026",
  dot: "#EA3D3D",
  title: "Healthy Start: Lead Generation",
  loc: "Global",
  obj: "Lead Generation",
  type: "Digital Marketing",
  owner: "Quinn Rivers",
  av: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=faces"
}, {
  mo: "JUN",
  day: "01",
  yr: "2024",
  dot: "#FF4081",
  title: "Patients Testimonial Campaign",
  loc: "Global",
  obj: "Lead Generation",
  type: "Content Marketing",
  owner: "Fatima Aiza",
  av: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=faces"
}, {
  mo: "MAY",
  day: "31",
  yr: "2024",
  dot: "#9C27B0",
  title: "Social Media Fitness Challenge",
  loc: "Global",
  obj: "Brand Awareness",
  type: "Social Media Marketing",
  owner: "Fatima Aiza",
  av: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=faces"
}, {
  mo: "MAY",
  day: "30",
  yr: "2024",
  dot: "#2C66DD",
  title: "Seniors Health and Wellness Program",
  loc: "Global",
  obj: "Lead Generation",
  type: "Digital Marketing",
  owner: "Fatima Aiza",
  av: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=faces"
}, {
  mo: "MAY",
  day: "17",
  yr: "2024",
  dot: "#EFAB1F",
  title: "Women's Health Awareness Month",
  loc: "Global",
  obj: "User Education",
  type: "Digital Marketing",
  owner: "Fatima Aiza",
  av: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=faces"
}, {
  mo: "MAY",
  day: "23",
  yr: "2024",
  dot: "#42AD4B",
  title: "Healthy Living Expo",
  loc: "Global",
  obj: "Brand Awareness",
  type: "Event Marketing",
  owner: null
}, {
  mo: "MAY",
  day: "11",
  yr: "2024",
  dot: "#42AD4B",
  title: "Cardiovascular Health Webinar Campaign",
  loc: "Hyderabad",
  obj: "User Education",
  type: "Event Marketing",
  owner: null
}];
const COLS = "78px minmax(0,2.4fr) 1.1fr 1.2fr 1.1fr";
function PinIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#9AA3B2",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 22s7-8 7-13a7 7 0 10-14 0c0 5 7 13 7 13z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "2.5"
  }));
}
const ProjectList = () => {
  const {
    Avatar,
    Button
  } = NS_S;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 28px 0",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      color: "var(--fg1)",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, "All ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg3)",
      fontSize: 11
    }
  }, "\u25BE")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 50,
      height: 34,
      border: "1px solid var(--grey-50)",
      background: "var(--grey-20)",
      borderRadius: 6,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 3,
      cursor: "pointer",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--fg3)",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 6h16M7 12h10M10 18h4"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg3)",
      fontSize: 10
    }
  }, "\u25BE")), Button ? /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    dropdown: true
  }, "Create Project") : /*#__PURE__*/React.createElement("button", null, "Create Project")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: COLS,
      padding: "11px 0",
      fontSize: 11,
      fontWeight: 600,
      color: "var(--fg1)",
      textTransform: "uppercase",
      letterSpacing: "0.03em",
      background: "var(--grey-20)",
      borderBottom: "1px solid var(--grey-40)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      paddingLeft: 20
    }
  }, "NAME & LOCATION", /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--fg3)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4.5-4.5"
  }))), /*#__PURE__*/React.createElement("div", null, "OBJECTIVE"), /*#__PURE__*/React.createElement("div", null, "TYPE"), /*#__PURE__*/React.createElement("div", null, "OWNER")), PROJECTS.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: COLS,
      padding: "16px 0",
      alignItems: "center",
      fontSize: 14,
      color: "var(--fg1)",
      borderBottom: "1px solid var(--grey-40)",
      cursor: "pointer",
      minHeight: 62
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--grey-10)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      lineHeight: 1.18,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: "var(--fg2)",
      letterSpacing: "0.04em"
    }
  }, r.mo), /*#__PURE__*/React.createElement("div", {
    className: "num",
    style: {
      fontSize: 22,
      fontWeight: 500,
      color: "var(--blue-primary)",
      lineHeight: 1.05
    }
  }, r.day), /*#__PURE__*/React.createElement("div", {
    className: "num",
    style: {
      fontSize: 10,
      color: "var(--fg3)"
    }
  }, r.yr)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      minWidth: 0,
      paddingLeft: 4,
      borderLeft: "1px solid var(--grey-40)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: r.dot,
      flexShrink: 0,
      marginLeft: 8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: "var(--fg1)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, r.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--fg3)",
      marginTop: 3,
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(PinIcon, null), r.loc))), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--fg2)"
    }
  }, r.obj), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--fg2)"
    }
  }, r.type), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      minWidth: 0
    }
  }, r.owner ? /*#__PURE__*/React.createElement(React.Fragment, null, Avatar ? /*#__PURE__*/React.createElement(Avatar, {
    src: r.av,
    name: r.owner,
    size: "lg"
  }) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg1)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, r.owner)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      border: "1.5px dashed var(--grey-50)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--grey-60)",
    strokeWidth: "1.7",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "3.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 20a7 7 0 0114 0"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg3)"
    }
  }, "Unassigned"))))));
};
Object.assign(window, {
  ProjectList
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_plus/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_plus/Shell.jsx
try { (() => {
// Marketing Plus app shell — dark module rail + slate topbar + Cliq footer.
// Composes DS primitives (Avatar) from the compiled bundle namespace.
const NS = window.ZohoMarketingPlusDesignSystem_8dd68c || {};
const {
  Avatar
} = NS;

// 1.6px-stroke line glyphs, matching Zoho's in-house product-icon style.
const ICON = {
  hamburger: "M3 6h18M3 12h18M3 18h18",
  home: "M3 11l9-8 9 8v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z",
  brand: "M12 3l2.4 5.3L20 9l-4 4 1 6-5-2.8L7 19l1-6-4-4 5.6-.7z",
  campaigns: "M3 11l14-5-4 13-3-6z",
  social: "M9 17V7l11-3v11M9 17a3 3 0 11-6 0 3 3 0 016 0zm11-3a3 3 0 11-6 0 3 3 0 016 0z",
  automation: "M5 7h9a4 4 0 010 8H8M5 7l3-3M5 7l3 3M19 17H10a4 4 0 010-8",
  pagesense: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z M12 9a3 3 0 100 6 3 3 0 000-6z",
  analytics: "M4 19V5M4 19h16M8 16v-5M12 16V8M16 16v-3M20 16v-7",
  more: "DOTS",
  calendar: "M4 6h16v15H4zM4 10h16M8 3v4M16 3v4",
  recent: "M12 8v5l3 2M3 12a9 9 0 1 0 2-5.6M3 4v3h3",
  star: "M12 3l2.4 5.3L20 9l-4 4 1 6-5-2.8L7 19l1-6-4-4 5.6-.7z"
};
const SIDE_TOP = [{
  id: "home",
  label: "Home",
  icon: "home"
}, {
  id: "brand",
  label: "Brand Studio",
  icon: "brand"
}, {
  id: "campaigns",
  label: "Campaigns",
  icon: "campaigns",
  dot: "#F49630"
}, {
  id: "social",
  label: "Social",
  icon: "social",
  dot: "#F49630"
}, {
  id: "automation",
  label: "Marketing\nAutomation",
  icon: "automation"
}, {
  id: "pagesense",
  label: "PageSense",
  icon: "pagesense"
}, {
  id: "analytics",
  label: "Analytics",
  icon: "analytics"
}, {
  id: "more",
  label: "",
  icon: "more"
}];
const SIDE_BOT = [{
  id: "mcal",
  label: "Marketing\nCalendar",
  icon: "calendar"
}, {
  id: "recent",
  label: "Recent Items",
  icon: "recent"
}, {
  id: "fav",
  label: "Favorites",
  icon: "star"
}];
function Glyph({
  name,
  size = 19
}) {
  if (name === "more" || ICON[name] === "DOTS") {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "#C4C7CC"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "5",
      cy: "12",
      r: "1.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "1.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "19",
      cy: "12",
      r: "1.6"
    }));
  }
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#C4C7CC",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: ICON[name]
  }));
}
function SideItem({
  it,
  on,
  onSelect
}) {
  const [hover, setHover] = React.useState(false);
  const tileBg = on ? "var(--blue-primary)" : hover ? "#2E2E2E" : "transparent";
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => onSelect && onSelect(it.id),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      margin: "3px 6px",
      padding: "5px 2px 6px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 5,
      cursor: "pointer",
      color: on ? "#fff" : "#C4C7CC",
      fontSize: 9.5,
      fontWeight: 500,
      lineHeight: 1.18,
      textAlign: "center",
      whiteSpace: "pre-line"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 36,
      borderRadius: 9,
      background: tileBg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background 120ms ease-out"
    }
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: it.icon
  }), it.dot && !on && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 4,
      right: 5,
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: it.dot,
      border: "1.5px solid #181818"
    }
  })), it.label && /*#__PURE__*/React.createElement("span", null, it.label));
}
const Sidebar = ({
  selected = "brand",
  onSelect = () => {}
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: 72,
    background: "#181818",
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    minHeight: "100vh",
    position: "sticky",
    top: 0,
    alignSelf: "flex-start"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    height: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#C4C7CC",
  strokeWidth: "1.7",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M4 6h16M4 12h16M4 18h16"
}))), SIDE_TOP.map(it => /*#__PURE__*/React.createElement(SideItem, {
  key: it.id,
  it: it,
  on: selected === it.id,
  onSelect: onSelect
})), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1
  }
}), SIDE_BOT.map(it => /*#__PURE__*/React.createElement(SideItem, {
  key: it.id,
  it: it,
  on: selected === it.id,
  onSelect: onSelect
})), /*#__PURE__*/React.createElement("div", {
  style: {
    height: 8
  }
}));
const Topbar = ({
  tab = "projects",
  onTab = () => {}
}) => {
  const tabs = [{
    id: "projects",
    label: "Marketing Projects"
  }, {
    id: "calendar",
    label: "Calendar"
  }, {
    id: "assets",
    label: "Brand Assets"
  }, {
    id: "budget",
    label: "Budget Board"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 48,
      background: "#34425C",
      color: "#fff",
      display: "flex",
      alignItems: "stretch",
      flexShrink: 0,
      fontSize: 14,
      minWidth: 0,
      paddingRight: 18,
      position: "sticky",
      top: 0,
      zIndex: 5
    }
  }, tabs.map(t => {
    const on = tab === t.id;
    return /*#__PURE__*/React.createElement("div", {
      key: t.id,
      onClick: () => onTab(t.id),
      style: {
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        color: on ? "#fff" : "#AEB9CE",
        fontWeight: on ? 600 : 500,
        boxShadow: on ? "inset 0 -2px 0 #fff" : "none",
        whiteSpace: "nowrap"
      }
    }, t.label);
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      cursor: "pointer",
      fontSize: 14,
      fontWeight: 500
    }
  }, "Zylker Hospital ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      opacity: 0.8
    }
  }, "\u25BE")), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 01-3.4 0"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 01-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1A1.7 1.7 0 004.6 9a1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 012.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 012.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"
  })), Avatar ? /*#__PURE__*/React.createElement(Avatar, {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=faces",
    name: "You",
    size: "lg",
    status: "online"
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: "50%",
      background: "#5B6B86"
    }
  })));
};
const CliqFooter = () => /*#__PURE__*/React.createElement("div", {
  style: {
    height: 40,
    borderTop: "1px solid var(--grey-40)",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    fontSize: 12,
    color: "var(--fg3)",
    flexShrink: 0,
    minWidth: 0
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    borderRight: "1px solid var(--grey-40)",
    height: "100%",
    flexShrink: 0
  }
}, [{
  lbl: "Chats",
  d: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
}, {
  lbl: "Channels",
  d: "M9 17V7l12-4v14M9 17a3 3 0 11-6 0 3 3 0 016 0zm12-3a3 3 0 11-6 0 3 3 0 016 0z"
}, {
  lbl: "Contacts",
  d: "M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z"
}].map(t => /*#__PURE__*/React.createElement("div", {
  key: t.lbl,
  style: {
    width: 64,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 2
  }
}, /*#__PURE__*/React.createElement("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "var(--fg3)",
  strokeWidth: "1.7",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: t.d
})), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 9
  }
}, t.lbl)))), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "0 14px",
    flex: 1,
    color: "var(--grey-60)",
    minWidth: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }
}, "Here is your Smart Chat (Ctrl+Space)"), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "0 16px",
    display: "flex",
    alignItems: "center",
    gap: 14,
    color: "var(--fg3)",
    flexShrink: 0
  }
}, /*#__PURE__*/React.createElement("span", null, "Ask Zia"), /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "var(--fg3)",
  strokeWidth: "1.7",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M9 18V5l12-2v13M9 18a3 3 0 11-6 0 3 3 0 016 0zm12-3a3 3 0 11-6 0 3 3 0 016 0z"
}))));
Object.assign(window, {
  Sidebar,
  Topbar,
  CliqFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_plus/Shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

})();
