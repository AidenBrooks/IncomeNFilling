/* @ds-bundle: {"format":4,"namespace":"IncomeNFilingComplianceOSDesignSystem_6fdb9e","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CommandButton","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Textarea","sourcePath":"components/core/Textarea.jsx"},{"name":"DeadlineTicker","sourcePath":"components/dashboard/DeadlineTicker.jsx"},{"name":"ModuleCard","sourcePath":"components/dashboard/ModuleCard.jsx"},{"name":"OfficeCard","sourcePath":"components/dashboard/OfficeCard.jsx"},{"name":"StatBlock","sourcePath":"components/dashboard/StatBlock.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"TestimonialCard","sourcePath":"components/feedback/TestimonialCard.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"CommandOutputLine","sourcePath":"components/terminal/CommandOutputLine.jsx"},{"name":"TerminalSearch","sourcePath":"components/terminal/TerminalSearch.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"964452e4cc4e","components/core/Button.jsx":"68962e34d809","components/core/Input.jsx":"3c4c7a4bdb78","components/core/Select.jsx":"db9fd57d8929","components/core/Textarea.jsx":"ee5ee289317d","components/dashboard/DeadlineTicker.jsx":"5ef9a503b073","components/dashboard/ModuleCard.jsx":"9934c3ef629d","components/dashboard/OfficeCard.jsx":"438a0330014f","components/dashboard/StatBlock.jsx":"c73aa25dfafb","components/feedback/Accordion.jsx":"9b5a43fa6f49","components/feedback/TestimonialCard.jsx":"312244f87e0e","components/navigation/Footer.jsx":"bf62eef75428","components/navigation/NavBar.jsx":"be44ed4014ae","components/terminal/CommandOutputLine.jsx":"8b65e1c6d359","components/terminal/TerminalSearch.jsx":"3fe455609ff6","ui_kits/website/Contact.jsx":"4e60c5c4cd37","ui_kits/website/ContactV2.jsx":"9184667926ff","ui_kits/website/Home.jsx":"44ca9105af92","ui_kits/website/HomeV2.jsx":"778ad3e47601","ui_kits/website/LiveChat.jsx":"fa837ad85eab","ui_kits/website/LiveChatV2.jsx":"0a1f57357e29","ui_kits/website/ServiceDetail.jsx":"04e5cec2544b","ui_kits/website/ServiceDetailV2.jsx":"e0c2c88cc3fc","ui_kits/website/ServicesHub.jsx":"c603789b18df","ui_kits/website/ServicesHubV2.jsx":"34e49c0d1be0","ui_kits/website/image-slot.js":"d797f41b7d66"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.IncomeNFilingComplianceOSDesignSystem_6fdb9e = window.IncomeNFilingComplianceOSDesignSystem_6fdb9e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const TONE = {
  positive: {
    c: 'var(--status-positive)'
  },
  warning: {
    c: 'var(--status-warning)'
  },
  critical: {
    c: 'var(--status-critical)'
  },
  neutral: {
    c: 'var(--status-neutral)'
  }
};
function Badge({
  status = 'neutral',
  children,
  pulse = false
}) {
  const t = TONE[status] || TONE.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--paper-alt)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: t.c,
      animation: pulse ? 'pulse-dot 2s infinite' : 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const PALETTE = {
  primary: {
    bg: 'var(--gold-500)',
    color: 'var(--navy-900)',
    border: 'transparent',
    hoverBg: 'var(--gold-400)'
  },
  secondary: {
    bg: 'transparent',
    color: 'var(--white)',
    border: 'var(--border-inverse)',
    hoverBg: 'rgba(255,255,255,.08)'
  },
  ghost: {
    bg: 'transparent',
    color: 'var(--navy-800)',
    border: 'var(--ink-100)',
    hoverBg: 'var(--paper-alt)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  disabled,
  onClick,
  type = 'button',
  fullWidth
}) {
  if (variant === 'command') return /*#__PURE__*/React.createElement(CommandButton, {
    onClick: onClick,
    disabled: disabled
  }, children);
  const p = PALETTE[variant] || PALETTE.primary;
  const [hover, setHover] = React.useState(false);
  const pad = size === 'sm' ? '9px 16px' : '13px 24px';
  const fs = size === 'sm' ? 'var(--text-sm)' : 'var(--text-base)';
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      padding: pad,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: fs,
      borderRadius: 'var(--radius-pill)',
      border: `1px solid ${p.border}`,
      background: hover && !disabled ? p.hoverBg : p.bg,
      color: p.color,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      width: fullWidth ? '100%' : 'auto',
      transition: `background var(--duration-fast) var(--ease-standard)`
    }
  }, icon, children);
}
function CommandButton({
  children,
  onClick,
  disabled,
  href
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    type: href ? undefined : 'button',
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      background: 'var(--term-bg)',
      color: hover ? 'var(--term-green)' : 'var(--term-amber)',
      border: `1px solid ${hover ? 'var(--term-green)' : 'var(--term-border)'}`,
      borderRadius: 'var(--radius-sm)',
      padding: '10px 18px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      textDecoration: 'none',
      display: 'inline-block',
      transition: `all var(--duration-fast) var(--ease-standard)`
    }
  }, "[\xA0", children, "\xA0]");
}
Object.assign(__ds_scope, { Button, CommandButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
const base = {
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-base)',
  color: 'var(--navy-900)',
  background: 'var(--white)',
  border: '1px solid var(--ink-100)',
  borderRadius: 'var(--radius-md)',
  padding: '13px 16px',
  outline: 'none',
  transition: 'border-color var(--duration-fast) var(--ease-standard)'
};
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  required
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--ink-700)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--status-critical)'
    }
  }, " *")), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    required: required,
    style: base,
    onFocus: e => e.target.style.borderColor = 'var(--gold-500)',
    onBlur: e => e.target.style.borderColor = 'var(--ink-100)'
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select…'
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--ink-700)'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: value ? 'var(--navy-900)' : 'var(--ink-500)',
      background: 'var(--white)',
      border: '1px solid var(--ink-100)',
      borderRadius: 'var(--radius-md)',
      padding: '13px 16px',
      outline: 'none'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Textarea.jsx
try { (() => {
function Textarea({
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  required
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--ink-700)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--status-critical)'
    }
  }, " *")), /*#__PURE__*/React.createElement("textarea", {
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    rows: rows,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--navy-900)',
      background: 'var(--white)',
      border: '1px solid var(--ink-100)',
      borderRadius: 'var(--radius-md)',
      padding: '13px 16px',
      outline: 'none',
      resize: 'vertical'
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/DeadlineTicker.jsx
try { (() => {
function DeadlineTicker({
  items = []
}) {
  const loop = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      background: 'var(--navy-950)',
      borderTop: '1px solid var(--border-inverse)',
      borderBottom: '1px solid var(--border-inverse)',
      padding: '10px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      width: 'max-content',
      animation: 'ticker-scroll 22s linear infinite'
    }
  }, loop.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--navy-300)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-400)'
    }
  }, "\u25B2"), it.label, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--white)'
    }
  }, it.date)))));
}
Object.assign(__ds_scope, { DeadlineTicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/DeadlineTicker.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/ModuleCard.jsx
try { (() => {
function ModuleCard({
  icon,
  title,
  description,
  count,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--white)',
      border: '1px solid var(--ink-100)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transition: 'box-shadow var(--duration-base) var(--ease-standard),transform var(--duration-base) var(--ease-standard)',
      transform: hover ? 'translateY(-2px)' : 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--navy-900)',
      color: 'var(--gold-400)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, icon), typeof count === 'number' && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-500)',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, String(count).padStart(2, '0'), " MODULES")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--navy-900)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-500)',
      lineHeight: 'var(--leading-sm)'
    }
  }, description));
}
Object.assign(__ds_scope, { ModuleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/ModuleCard.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/OfficeCard.jsx
try { (() => {
function OfficeCard({
  city,
  region,
  address,
  live = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--ink-100)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: live ? 'var(--status-positive)' : 'var(--ink-300)',
      animation: live ? 'pulse-dot 2s infinite' : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-lg)',
      color: 'var(--navy-900)'
    }
  }, city), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: live ? 'var(--status-positive)' : 'var(--ink-300)',
      marginLeft: 'auto',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, live ? 'ONLINE' : 'OFFLINE')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-500)',
      lineHeight: 'var(--leading-sm)'
    }
  }, address), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-300)'
    }
  }, region));
}
Object.assign(__ds_scope, { OfficeCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/OfficeCard.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/StatBlock.jsx
try { (() => {
function StatBlock({
  label,
  value,
  status = 'neutral',
  inverse = false
}) {
  const DOT = {
    positive: 'var(--status-positive)',
    warning: 'var(--status-warning)',
    critical: 'var(--status-critical)',
    neutral: 'var(--ink-300)'
  }[status];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      padding: 'var(--space-5)',
      borderRadius: 'var(--radius-md)',
      background: inverse ? 'var(--navy-800)' : 'var(--white)',
      border: inverse ? '1px solid var(--border-inverse)' : '1px solid var(--ink-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: DOT
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: inverse ? 'var(--navy-300)' : 'var(--ink-500)'
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 'var(--weight-semibold)',
      color: inverse ? 'var(--white)' : 'var(--navy-900)'
    }
  }, value));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  defaultOpenIndex = -1
}) {
  const [open, setOpen] = React.useState(defaultOpenIndex);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        border: '1px solid var(--ink-100)',
        borderRadius: 'var(--radius-md)',
        background: 'var(--white)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        padding: '16px 20px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-base)',
        fontWeight: 'var(--weight-medium)',
        color: 'var(--navy-900)'
      }
    }, it.question, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        color: 'var(--gold-600)',
        transform: isOpen ? 'rotate(45deg)' : 'none',
        transition: 'transform var(--duration-fast) var(--ease-standard)'
      }
    }, "+")), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 20px 18px',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)',
        color: 'var(--ink-500)',
        lineHeight: 'var(--leading-sm)'
      }
    }, it.answer));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  name,
  meta,
  quote,
  initials,
  rating = 5
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--ink-100)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--navy-800)',
      color: 'var(--gold-400)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-sm)'
    }
  }, initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-sm)',
      color: 'var(--navy-900)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-500)'
    }
  }, meta))), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--gold-500)',
      fontSize: 'var(--text-sm)',
      letterSpacing: 2
    }
  }, '★'.repeat(rating), '☆'.repeat(5 - rating)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-700)',
      lineHeight: 'var(--leading-sm)',
      fontStyle: 'italic'
    }
  }, "\u201C", quote, "\u201D"));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  brandName = 'Income N Filing',
  tagline,
  columns = [],
  contact,
  year = 2026
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-900)',
      color: 'var(--navy-300)',
      fontFamily: 'var(--font-body)',
      padding: 'var(--space-16) var(--space-8) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 'var(--space-8)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-xl)',
      color: 'var(--white)'
    }
  }, brandName.split(' ').slice(0, -1).join(' '), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-400)'
    }
  }, brandName.split(' ').slice(-1))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-sm)',
      maxWidth: 320
    }
  }, tagline)), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--gold-400)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-sm)',
      marginBottom: 10
    }
  }, col.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || '#',
    style: {
      color: 'var(--navy-300)',
      fontSize: 'var(--text-sm)',
      textDecoration: 'none'
    }
  }, l.label))))), contact && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--gold-400)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-sm)',
      marginBottom: 10
    }
  }, "Get in Touch"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontSize: 'var(--text-sm)',
      fontFamily: 'var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement("span", null, contact.phone), /*#__PURE__*/React.createElement("span", null, contact.email), /*#__PURE__*/React.createElement("span", null, contact.region)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-inverse)',
      marginTop: 'var(--space-10)',
      paddingTop: 'var(--space-5)',
      maxWidth: 'var(--container-max)',
      margin: 'var(--space-10) auto 0',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--text-xs)',
      color: 'var(--navy-300)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", year, " ", brandName, ". All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Established 2017")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  logoSrc,
  brandName = 'Income N Filing',
  tagline = 'Established 2017',
  items = [],
  phone
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 32px',
      background: 'var(--white)',
      borderBottom: '1px solid var(--ink-100)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, logoSrc && /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "",
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      color: 'var(--navy-900)'
    }
  }, brandName.split(' ').slice(0, -1).join(' '), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-600)'
    }
  }, brandName.split(' ').slice(-1))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-500)'
    }
  }, tagline))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.label,
    href: it.href || '#',
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: it.active ? 'var(--gold-600)' : 'var(--navy-800)',
      textDecoration: 'none',
      borderBottom: it.active ? '2px solid var(--gold-600)' : '2px solid transparent',
      paddingBottom: 4
    }
  }, it.label))), phone && /*#__PURE__*/React.createElement("a", {
    href: `tel:${phone}`,
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--navy-700)',
      textDecoration: 'none',
      fontFamily: 'var(--font-mono)'
    }
  }, phone));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/terminal/CommandOutputLine.jsx
try { (() => {
function CommandOutputLine({
  label,
  status = 'available',
  onBook
}) {
  const STATUS_COLOR = {
    available: 'var(--term-green)',
    deployed: 'var(--term-green)',
    pending: 'var(--term-amber)'
  }[status] || 'var(--term-fg-dim)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      fontSize: 'var(--text-sm)',
      color: 'var(--term-fg)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "// ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--term-fg)'
    }
  }, label), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: STATUS_COLOR
    }
  }, status)), onBook && /*#__PURE__*/React.createElement("button", {
    onClick: onBook,
    style: {
      background: 'none',
      border: '1px solid var(--term-border)',
      borderRadius: 'var(--radius-sm)',
      color: 'var(--term-amber)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      padding: '4px 10px',
      cursor: 'pointer'
    }
  }, "[ book ]"));
}
Object.assign(__ds_scope, { CommandOutputLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/terminal/CommandOutputLine.jsx", error: String((e && e.message) || e) }); }

// components/terminal/TerminalSearch.jsx
try { (() => {
function TerminalSearch({
  value = '',
  onChange,
  placeholders = ['search gst registration'],
  children
}) {
  const [ph, setPh] = React.useState(0);
  React.useEffect(() => {
    if (value) return;
    const id = setInterval(() => setPh(p => (p + 1) % placeholders.length), 2600);
    return () => clearInterval(id);
  }, [value, placeholders.length]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--term-bg)',
      border: '1px solid var(--term-border)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-terminal)',
      fontFamily: 'var(--font-mono)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '10px 14px',
      borderBottom: '1px solid var(--term-border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--term-red)',
      opacity: .6
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--term-amber)',
      opacity: .6
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--term-green)',
      opacity: .6
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 10,
      fontSize: 'var(--text-xs)',
      color: 'var(--term-fg-dim)',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, "services://directory")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '16px 18px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--term-green)',
      fontSize: 'var(--text-lg)'
    }
  }, ">"), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: onChange,
    spellCheck: false,
    placeholder: placeholders[ph],
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--term-amber)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-lg)',
      caretColor: 'var(--term-green)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--term-green)',
      fontSize: 'var(--text-lg)',
      animation: 'blink-cursor 1s step-end infinite'
    }
  }, "_")), children && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--term-border)',
      padding: '14px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, children));
}
Object.assign(__ds_scope, { TerminalSearch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/terminal/TerminalSearch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
function Contact({
  go
}) {
  const {
    NavBar,
    Footer,
    Input,
    Select,
    Textarea,
    Button,
    OfficeCard,
    Badge
  } = window.IncomeNFilingComplianceOSDesignSystem_6fdb9e;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-950)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    logoSrc: "../../assets/logo.jpg",
    items: [{
      label: 'Home',
      href: '#home'
    }, {
      label: 'About',
      href: '#about'
    }, {
      label: 'Services',
      href: '#services'
    }, {
      label: 'Live Chat',
      href: '#chat'
    }, {
      label: 'Contact',
      href: '#contact',
      active: true
    }]
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 32px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--gold-400)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, "Reach Us"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-4xl)',
      margin: '0 0 8px'
    }
  }, "Get in Touch"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--navy-300)',
      margin: 0
    }
  }, "Let's discuss your compliance and business needs.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 28,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(OfficeCard, {
    city: "Kolkata",
    region: "West Bengal 700039",
    address: "38M/1, New Ballygunge Rd, Kasba",
    live: true
  }), /*#__PURE__*/React.createElement(OfficeCard, {
    city: "Bhagalpur",
    region: "Bihar",
    address: "Opposite Dr. R N Jha Clinic, Near Head Post Office",
    live: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-xl)',
      color: 'var(--navy-900)'
    }
  }, "Request a Free Consultation"), /*#__PURE__*/React.createElement(Input, {
    label: "Your Full Name",
    placeholder: "Jane Doe",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email Address",
    placeholder: "jane@company.com",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Select Service Category",
    options: ['GST', 'Income Tax', 'Incorporation', 'Corporate Compliance']
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Briefly describe your requirement",
    placeholder: "e.g. need GST registration for a new LLP",
    required: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true
  }, "Book Free Consultation")))), /*#__PURE__*/React.createElement(Footer, {
    tagline: "Simplifying Compliance. Empowering Business.",
    columns: [{
      title: 'Quick Links',
      links: [{
        label: 'Home',
        href: '#home'
      }, {
        label: 'Services',
        href: '#services'
      }, {
        label: 'Contact',
        href: '#contact'
      }]
    }],
    contact: {
      phone: '+91 7890594600',
      email: 'support@incomenfiling.com',
      region: 'Pan-India Services'
    }
  }));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactV2.jsx
try { (() => {
function NavBarV2({
  go,
  active
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const items = [{
    k: 'home',
    label: 'Home'
  }, {
    k: 'about',
    label: 'About'
  }, {
    k: 'services',
    label: 'Services'
  }, {
    k: 'testimonials',
    label: 'Testimonials'
  }, {
    k: 'chat',
    label: 'Live Chat'
  }, {
    k: 'contact',
    label: 'Contact'
  }];
  const [bookHover, setBookHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 60,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      alignItems: 'center',
      gap: 24,
      padding: '16px 32px',
      background: scrolled ? 'rgba(255,255,255,.62)' : 'var(--white)',
      backdropFilter: scrolled ? 'saturate(180%) blur(18px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(18px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,.55)' : '1px solid var(--ink-100)',
      boxShadow: scrolled ? '0 10px 34px rgba(11,31,58,.13)' : 'none',
      fontFamily: 'var(--font-body)',
      transition: 'background .28s ease,box-shadow .28s ease,backdrop-filter .28s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logo || "../../assets/logo.jpg",
    alt: "",
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      color: 'var(--navy-900)',
      lineHeight: 1.2
    }
  }, "Income N ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-600)'
    }
  }, "Filing")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-500)',
      lineHeight: 1.2
    }
  }, "Established 2017"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      justifyContent: 'center'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.k,
    href: `#${it.k}`,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: active === it.k ? 'var(--gold-600)' : 'var(--navy-800)',
      textDecoration: 'none',
      borderBottom: active === it.k ? '2px solid var(--gold-600)' : '2px solid transparent',
      paddingBottom: 4,
      lineHeight: 1.2
    }
  }, it.label))), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('contact'),
    onMouseEnter: () => setBookHover(true),
    onMouseLeave: () => setBookHover(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 13,
      padding: '11px 22px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: 'var(--gold-500)',
      color: 'var(--navy-950)',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transform: bookHover ? 'translateY(-2px)' : 'none',
      boxShadow: bookHover ? 'var(--shadow-md)' : 'none',
      transition: 'all .15s'
    }
  }, "Book Free Consultation"));
}
const CAT = ['GST', 'Income Tax', 'Incorporation', 'Corporate Compliance', 'Accounting', 'Licenses', 'Tax Notice'];
function ContactV2({
  go
}) {
  const [cat, setCat] = React.useState('');
  const [f, setF] = React.useState({
    name: '',
    email: '',
    phone: '',
    msg: ''
  });
  const [sent, setSent] = React.useState(false);
  const [copied, setCopied] = React.useState('');
  const set = (k, v) => setF(o => ({
    ...o,
    [k]: v
  }));
  const copy = (key, txt) => {
    try {
      navigator.clipboard.writeText(txt);
    } catch (e) {}
    setCopied(key);
    setTimeout(() => setCopied(''), 1600);
  };
  const iStyle = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-body)',
    fontSize: 14.5,
    padding: '13px 16px',
    borderRadius: 'var(--radius-md)',
    border: '1.5px solid var(--ink-100)',
    background: 'var(--navy-050)',
    color: 'var(--navy-900)',
    outline: 'none',
    transition: 'border-color .15s,box-shadow .15s'
  };
  const foc = e => {
    e.currentTarget.style.borderColor = 'var(--gold-500)';
    e.currentTarget.style.boxShadow = '0 0 0 4px rgba(212,167,71,.15)';
    e.currentTarget.style.background = 'var(--white)';
  };
  const blur = e => {
    e.currentTarget.style.borderColor = 'var(--ink-100)';
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.background = 'var(--navy-050)';
  };
  const submit = e => {
    e.preventDefault();
    setSent(true);
  };
  const Label = ({
    children
  }) => /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: 'var(--ink-500)'
    }
  }, children);
  const channels = [{
    key: 'call',
    label: 'Call us',
    footLabel: 'Call',
    val: '+91 78905 94600',
    href: 'tel:+917890594600',
    copyTxt: '+917890594600',
    accent: 'var(--gold-500)',
    icon: /*#__PURE__*/React.createElement("path", {
      d: "M6.6 10.8a15.6 15.6 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.2 2.2z"
    })
  }, {
    key: 'wa',
    label: 'WhatsApp',
    val: 'Chat with an advisor',
    href: 'https://wa.me/917890594600',
    accent: 'var(--whatsapp-green)',
    icon: /*#__PURE__*/React.createElement("path", {
      d: "M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.16c-.24.68-1.42 1.32-1.95 1.37-.5.05-.98.24-3.3-.69-2.78-1.1-4.55-3.94-4.69-4.13-.14-.19-1.13-1.5-1.13-2.86 0-1.36.71-2.03.96-2.31.24-.27.53-.34.71-.34h.51c.16.01.39-.06.6.46.24.58.82 2 .89 2.14.07.14.12.31.02.5-.44.86-.91 1-.55 1.56.86 1.24 1.51 1.67 2.62 2.23.28.14.45.12.61-.07.16-.19.7-.82.89-1.1.19-.28.37-.23.62-.14.25.09 1.61.76 1.89.9.28.14.46.21.53.32.07.11.07.65-.17 1.33z"
    })
  }, {
    key: 'email',
    label: 'Email',
    val: 'support@incomenfiling.com',
    href: 'mailto:support@incomenfiling.com',
    copyTxt: 'support@incomenfiling.com',
    accent: 'var(--navy-600)',
    icon: /*#__PURE__*/React.createElement("path", {
      d: "M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm9 7L4 7v1l8 5 8-5V7l-8 5z"
    })
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/917890594600",
    target: "_blank",
    rel: "noreferrer",
    style: {
      position: 'fixed',
      bottom: 26,
      right: 26,
      width: 58,
      height: 58,
      borderRadius: '50%',
      background: 'var(--whatsapp-green)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-lg)',
      zIndex: 80,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      border: '2px solid var(--whatsapp-green)',
      animation: 'pulse-ring 2s infinite'
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "30",
    height: "30",
    fill: "var(--white)",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.16c-.24.68-1.42 1.32-1.95 1.37-.5.05-.98.24-3.3-.69-2.78-1.1-4.55-3.94-4.69-4.13-.14-.19-1.13-1.5-1.13-2.86 0-1.36.71-2.03.96-2.31.24-.27.53-.34.71-.34.18 0 .35 0 .51.01.16.01.39-.06.6.46.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.17.28.75 1.24 1.61 2.01 1.11.99 2.05 1.3 2.33 1.44.28.14.45.12.61-.07.16-.19.7-.82.89-1.1.19-.28.37-.23.62-.14.25.09 1.61.76 1.89.9.28.14.46.21.53.32.07.11.07.65-.17 1.33z"
  }))), /*#__PURE__*/React.createElement(NavBarV2, {
    go: go,
    active: "contact"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(150deg,var(--navy-950) 0%,var(--navy-900) 55%,var(--navy-800) 100%)',
      padding: '70px 32px 128px',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -60,
      left: '8%',
      width: 200,
      height: 200,
      background: 'var(--gold-500)',
      opacity: .13,
      borderRadius: '40px',
      transform: 'rotate(-14deg)',
      animation: 'float-y 7s ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 10,
      right: '12%',
      width: 120,
      height: 120,
      border: '2px solid rgba(212,167,71,.25)',
      borderRadius: '26px',
      transform: 'rotate(18deg)',
      animation: 'float-y 5.5s ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(rgba(255,255,255,.05) 1px,transparent 1px)',
      backgroundSize: '26px 26px',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 720,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--gold-400)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      marginBottom: 16,
      background: 'rgba(212,167,71,.1)',
      border: '1px solid rgba(212,167,71,.25)',
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--status-positive)',
      animation: 'pulse-dot 2s infinite'
    }
  }), "We usually reply within minutes"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-5xl)',
      color: 'var(--white)',
      margin: '0 0 14px',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 1.08
    }
  }, "Let's start a ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-400)'
    }
  }, "conversation")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--navy-300)',
      margin: '0 auto',
      maxWidth: 520,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-lg)',
      lineHeight: 1.5
    }
  }, "Tell us what you're working on and the right advisor will take it from here \u2014 call, WhatsApp, email or drop by an office."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      justifyContent: 'center',
      marginTop: 26
    }
  }, [['1000+', 'businesses served'], ['2', 'offices, Pan-India'], ['9+', 'years of expertise']].map(s => /*#__PURE__*/React.createElement("div", {
    key: s[1],
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      background: 'rgba(255,255,255,.05)',
      border: '1px solid rgba(255,255,255,.1)',
      borderRadius: 'var(--radius-pill)',
      padding: '9px 18px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--gold-400)'
    }
  }, s[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'var(--navy-300)'
    }
  }, s[1])))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 32px 90px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      marginTop: -80,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 26
    }
  }, React.createElement(window.OfficeMapV2, {
    contactChannels: channels
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: '0 24px 55px rgba(11,31,58,.14)',
      padding: 'var(--space-8)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: 520
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 5,
      background: 'linear-gradient(90deg,var(--gold-400),var(--gold-600))'
    }
  }), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      minHeight: 460,
      animation: 'fade-in-up .4s var(--ease-standard) both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 88,
      height: 88,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: 'var(--gold-100)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: -8,
      borderRadius: '50%',
      border: '2px solid var(--gold-300)',
      animation: 'pulse-ring 2s infinite'
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "88",
    height: "88",
    fill: "none",
    stroke: "var(--gold-600)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-2xl)',
      color: 'var(--navy-900)',
      margin: '0 0 10px'
    }
  }, "Thanks", f.name ? ', ' + f.name.split(' ')[0] : '', "! \uD83C\uDF89"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--ink-500)',
      margin: '0 0 26px',
      maxWidth: 360,
      lineHeight: 1.55
    }
  }, "Your request", cat ? ' about ' + cat : '', " is in. An advisor from our team will reach out within a few working hours."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/917890594600",
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      padding: '12px 22px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--whatsapp-green)',
      color: '#fff',
      textDecoration: 'none',
      boxShadow: '0 4px 14px rgba(37,211,102,.32)'
    }
  }, "Continue on WhatsApp \u203A"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setSent(false);
      setF({
        name: '',
        email: '',
        phone: '',
        msg: ''
      });
      setCat('');
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      padding: '12px 22px',
      borderRadius: 'var(--radius-pill)',
      border: '1.5px solid var(--ink-100)',
      background: 'var(--white)',
      color: 'var(--navy-800)',
      cursor: 'pointer'
    }
  }, "Send another"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-xl)',
      color: 'var(--navy-900)'
    }
  }, "Request a free consultation"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--ink-500)',
      marginTop: 4
    }
  }, "No obligation \u2014 we'll scope it on a quick call.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Label, null, "What do you need help with?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, CAT.map(c => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: c,
    onClick: () => setCat(c),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      padding: '8px 15px',
      borderRadius: 'var(--radius-pill)',
      border: '1.5px solid ' + (cat === c ? 'var(--gold-500)' : 'var(--ink-100)'),
      background: cat === c ? 'var(--gold-050)' : 'var(--white)',
      color: cat === c ? 'var(--gold-600)' : 'var(--navy-700)',
      cursor: 'pointer',
      transition: 'all .15s'
    }
  }, cat === c ? '✓ ' : '', c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Label, null, "Full name"), /*#__PURE__*/React.createElement("input", {
    required: true,
    value: f.name,
    onChange: e => set('name', e.target.value),
    onFocus: foc,
    onBlur: blur,
    placeholder: "Jane Doe",
    style: iStyle
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Label, null, "Phone"), /*#__PURE__*/React.createElement("input", {
    value: f.phone,
    onChange: e => set('phone', e.target.value),
    onFocus: foc,
    onBlur: blur,
    placeholder: "+91 \u2026",
    style: iStyle
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Label, null, "Email address"), /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "email",
    value: f.email,
    onChange: e => set('email', e.target.value),
    onFocus: foc,
    onBlur: blur,
    placeholder: "jane@company.com",
    style: iStyle
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Label, null, "Briefly describe your requirement"), /*#__PURE__*/React.createElement("textarea", {
    value: f.msg,
    onChange: e => set('msg', e.target.value),
    onFocus: foc,
    onBlur: blur,
    rows: 3,
    placeholder: "e.g. need GST registration for a new LLP",
    style: {
      ...iStyle,
      resize: 'vertical',
      minHeight: 88
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 10px 26px rgba(212,167,71,.42)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = '0 4px 14px rgba(212,167,71,.32)';
    },
    style: {
      marginTop: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 9,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      padding: '15px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: 'linear-gradient(135deg,var(--gold-400),var(--gold-500))',
      color: 'var(--navy-950)',
      cursor: 'pointer',
      boxShadow: '0 4px 14px rgba(212,167,71,.32)',
      transition: 'transform .18s,box-shadow .18s'
    }
  }, "Book my free consultation", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--ink-300)'
    }
  }, "\uD83D\uDD12 Your details stay private \u2014 used only to contact you back."))))), React.createElement(window.FooterV2, {
    go
  }));
}
Object.assign(window, {
  ContactV2
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactV2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const WHY_CHOOSE_US = [{
  icon: 'VER',
  title: 'Verified Expertise',
  description: 'Qualified professionals across taxation, compliance, and corporate law.'
}, {
  icon: 'SEC',
  title: 'Complete Confidentiality',
  description: 'Your data is protected on dedicated, secure infrastructure.'
}, {
  icon: 'CMP',
  title: 'Compliance-First Approach',
  description: 'Proactive guidance to keep your business fully up to date.'
}, {
  icon: 'YRS',
  title: '7+ Years of Excellence',
  description: 'A proven track record of serving businesses since 2017.'
}, {
  icon: 'PAN',
  title: 'Pan-India Reach',
  description: 'Serving clients across every state with consistent quality.'
}, {
  icon: '500',
  title: '500+ Businesses Served',
  description: 'Trusted by startups, SMEs, and established enterprises alike.'
}];
const WHY_CHOOSE_SERVICE = [{
  icon: 'ALL',
  title: 'All-in-One Solution',
  description: 'From incorporation to annual filings, every compliance need lives under one roof.'
}, {
  icon: 'TIM',
  title: 'On-Time Delivery',
  description: 'Deadlines matter — every service is deployed promptly and accurately.'
}, {
  icon: 'FRE',
  title: 'Free Consultation',
  description: 'Expert guidance on taxation, business setup, and regulatory queries at no cost.'
}, {
  icon: 'TLR',
  title: 'Tailored Approach',
  description: 'Solutions crafted around your specific structure, scale, and objectives.'
}, {
  icon: 'UPD',
  title: 'Proactive Updates',
  description: 'Stay informed at every step — you get status updates, never surprises.'
}, {
  icon: 'LNG',
  title: 'Multilingual Support',
  description: 'We communicate in the language you\u2019re most comfortable with.'
}, {
  icon: 'CON',
  title: 'Data Confidentiality',
  description: 'Stored on secure, dedicated infrastructure — privacy is non-negotiable.'
}];
const CLIENTS = ['SMND Developers', 'Farming India Pvt. Ltd.', 'Kesharvani Interiors', 'Gowebbly', 'Sher Bazzar', 'Vulmac Electrical', 'Bina Saree Center', 'Npk-knots Marine', 'Tirupati Vastralaya', 'Skyrise Traders', 'Seavision Maritime', 'Sensea Mercantile Academy', 'JP Electrical', 'Loknath Medical', 'RGV Agro Pvt. Ltd.'];
const CLIENT_ROWS = [CLIENTS.slice(0, 5), CLIENTS.slice(5, 10), CLIENTS.slice(10, 15)];
const TESTIMONIALS = [{
  name: 'Aman Mishra',
  meta: '2023 · Google Review',
  initials: 'AM',
  quote: 'We are very much satisfied with their services. Anish personally tracks all progress and provides on-time updates and solutions. Highly recommended for new businesses and startups.'
}, {
  name: 'Vaibhav Gupta',
  meta: '2023 · Google Review',
  initials: 'VG',
  quote: 'This firm outperforms each one of them by miles. Superb follow-up and assistance. Would recommend to all. Thanks Anish ji & team.'
}, {
  name: 'Ajay Choudhary',
  meta: '2022 · Google Review',
  initials: 'AC',
  quote: 'The practice is well organised and each member of staff is very helpful. Mr. Anish is very friendly, warm and highly experienced.'
}, {
  name: 'Wheelectric EV Kits',
  meta: '2023 · Google Review',
  initials: 'WE',
  quote: 'Valuable service and professional management. Very satisfied with the quality of compliance support provided by their team.'
}, {
  name: 'Sagar Gidwani',
  meta: '2024 · Google Review',
  initials: 'SG',
  quote: 'Documents ready within few days and the way things are explained in simple language is impressive. Highly recommended.'
}];
const FAQ = [{
  question: 'How long does company incorporation take?',
  answer: 'Once your documents are complete, incorporation is completed within days — tracked from submission to certificate.'
}, {
  question: 'What documents are required for GST registration?',
  answer: 'PAN, business address proof, and bank details — we confirm the exact list for your entity type on a free call.'
}, {
  question: 'Do you serve clients outside Bhagalpur and Kolkata?',
  answer: 'Yes — every service is available pan-India, coordinated remotely with the same on-time delivery.'
}, {
  question: 'What is the cost of your services?',
  answer: 'Discussed directly during your consultation — book a free session and we\u2019ll scope a plan for your business.'
}, {
  question: 'How is my confidential data protected?',
  answer: 'Your data is stored on secure, dedicated infrastructure — privacy and trust are non-negotiable for us.'
}, {
  question: 'Can you handle tax notices and scrutiny assessments?',
  answer: 'Yes — notice handling and scrutiny response are available as a standing service, not just an add-on.'
}, {
  question: 'What is the first step to get started?',
  answer: 'Reach us on WhatsApp or the contact form below — we\u2019ll scope your requirement on a free call.'
}];
const CATEGORIES = [{
  icon: 'GST',
  title: 'GST Compliance',
  description: 'Registration, returns, reconciliation, refunds.',
  count: 14
}, {
  icon: 'ITR',
  title: 'Income Tax',
  description: 'Filing, assessments, capital gains, TDS/TCS.',
  count: 11
}, {
  icon: 'INC',
  title: 'Incorporation',
  description: 'Company, LLP, OPC formation & startup registration.',
  count: 12
}, {
  icon: 'ROC',
  title: 'Corporate Compliance',
  description: 'ROC filings, annual returns, board resolutions.',
  count: 10
}, {
  icon: 'IBC',
  title: 'Insolvency Advisory',
  description: 'IBC filings, resolution support, restructuring.',
  count: 6
}, {
  icon: 'DOC',
  title: 'Documentation & Drafting',
  description: 'Legal drafting, certifications, statutory records.',
  count: 9
}, {
  icon: 'AGR',
  title: 'Contracts & Agreements',
  description: 'Vendor, employment, and partnership agreements.',
  count: 8
}, {
  icon: 'ACC',
  title: 'Accounting & Bookkeeping',
  description: 'Books, payroll, MIS and audit support.',
  count: 9
}];
const STEPS = [{
  n: '01',
  t: 'Share Requirements',
  d: 'Tell us what you need — call, WhatsApp, or the form. We scope your business in one call.'
}, {
  n: '02',
  t: 'We Handle Everything',
  d: 'Documents collected, filings prepared, authorities liaised — you get proactive updates at every step.'
}, {
  n: '03',
  t: 'Your Business is Compliant',
  d: 'Certificates and filings confirmed and tracked — with reminders so nothing is ever missed.'
}];
function SectionHeader({
  eyebrow,
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 16px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--navy-700)',
      marginBottom: 18
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-3xl)',
      color: 'var(--navy-900)',
      margin: 0,
      letterSpacing: 'var(--tracking-tight)'
    }
  }, title));
}
function CategoryCard({
  icon,
  title,
  description,
  count,
  featured,
  index,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      gridColumn: featured ? 'span 2' : 'span 1',
      background: featured ? 'linear-gradient(135deg,var(--navy-050),var(--gold-050))' : 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      boxShadow: 'var(--shadow-sm)',
      cursor: 'pointer',
      position: 'relative',
      transition: 'transform .25s var(--ease-standard),box-shadow .25s var(--ease-standard)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 22,
      right: 24,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-300)'
    }
  }, String(index + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      width: featured ? 56 : 44,
      height: featured ? 56 : 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--navy-900)',
      color: 'var(--gold-400)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: featured ? 12 : 10,
      fontWeight: 'var(--weight-semibold)'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: featured ? 'var(--text-xl)' : 'var(--text-base)',
      color: 'var(--navy-900)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-500)',
      lineHeight: 'var(--leading-sm)',
      flex: 1
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--navy-700)',
      background: 'var(--paper-alt)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)'
    }
  }, count, " services"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      border: '1px solid var(--ink-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 14,
      color: 'var(--navy-700)',
      transition: 'background .2s,color .2s'
    }
  }, "\u2192")));
}
function FeatureTile({
  icon,
  title,
  description,
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'box-shadow .25s,transform .25s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      e.currentTarget.style.transform = 'translateY(-3px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      e.currentTarget.style.transform = 'none';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: accent || 'var(--gold-100)',
      color: 'var(--navy-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 'var(--weight-semibold)'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      color: 'var(--navy-900)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-500)',
      lineHeight: 'var(--leading-sm)'
    }
  }, description));
}
function Home({
  go
}) {
  const {
    Button,
    ModuleCard,
    OfficeCard,
    Accordion,
    NavBar,
    Footer
  } = window.IncomeNFilingComplianceOSDesignSystem_6fdb9e;
  const TrustPill = ({
    label
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--white)',
      borderRadius: 'var(--radius-pill)',
      padding: '8px 16px',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--status-positive)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-700)',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, label));
  const stepRefs = React.useRef([]);
  const [activeStep, setActiveStep] = React.useState(0);
  React.useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setActiveStep(Number(e.target.dataset.idx));
      });
    }, {
      rootMargin: '-42% 0px -42% 0px',
      threshold: 0
    });
    stepRefs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper-alt)'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    logoSrc: "../../assets/logo.jpg",
    items: [{
      label: 'Home',
      href: '#home',
      active: true
    }, {
      label: 'About',
      href: '#about'
    }, {
      label: 'Services',
      href: '#services'
    }, {
      label: 'Live Chat',
      href: '#chat'
    }, {
      label: 'Contact',
      href: '#contact'
    }]
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '96px 32px 76px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(var(--ink-100) 1.5px,transparent 1.5px)',
      backgroundSize: '26px 26px',
      WebkitMaskImage: 'radial-gradient(ellipse 60% 55% at 50% 30%,black,transparent)',
      maskImage: 'radial-gradient(ellipse 60% 55% at 50% 30%,black,transparent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -140,
      left: '6%',
      width: 420,
      height: 420,
      borderRadius: '50%',
      background: 'var(--gold-300)',
      filter: 'blur(120px)',
      opacity: .4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -170,
      right: '4%',
      width: 460,
      height: 460,
      borderRadius: '50%',
      background: 'var(--navy-300)',
      filter: 'blur(130px)',
      opacity: .3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 16px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--status-positive)',
      animation: 'pulse-dot 2.2s infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--navy-700)'
    }
  }, "ALL SYSTEMS COMPLIANT \xB7 SINCE 2017")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-6xl)',
      color: 'var(--navy-900)',
      margin: '0 0 20px',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 1.08
    }
  }, "Business compliance,", /*#__PURE__*/React.createElement("br", null), "made ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'linear-gradient(100deg,var(--gold-600),var(--gold-400))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    }
  }, "effortless"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-lg)',
      color: 'var(--ink-500)',
      maxWidth: 460,
      lineHeight: 'var(--leading-lg)',
      marginBottom: 28
    }
  }, "A dedicated team handling taxation, GST, incorporation, and corporate law \u2014 so your business stays compliant without the busywork."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(TrustPill, {
    label: "EXPERT PROFESSIONALS"
  }), /*#__PURE__*/React.createElement(TrustPill, {
    label: "7+ YEARS OF EXCELLENCE"
  }), /*#__PURE__*/React.createElement(TrustPill, {
    label: "500+ BUSINESSES SERVED"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go('contact')
  }, "Book Free Consultation"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go('services')
  }, "Explore Services"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 440
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '20px 36px 36px 0',
      borderRadius: 'var(--radius-xl)',
      background: 'linear-gradient(155deg,var(--navy-800),var(--navy-950))',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)',
      backgroundSize: '34px 34px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 220,
      height: 220,
      borderRadius: '50%',
      background: 'radial-gradient(circle,var(--gold-400),transparent 70%)',
      opacity: .4,
      top: -60,
      right: -60
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 32,
      left: 32,
      right: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--navy-300)',
      letterSpacing: 'var(--tracking-wide)',
      marginBottom: 6
    }
  }, "SERVICES LIVE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 56,
      color: 'var(--white)',
      lineHeight: 1,
      marginBottom: 18
    }
  }, "94"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, CATEGORIES.slice(0, 3).map(c => /*#__PURE__*/React.createElement("span", {
    key: c.icon,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--navy-300)',
      border: '1px solid rgba(255,255,255,.16)',
      borderRadius: 'var(--radius-pill)',
      padding: '5px 12px'
    }
  }, c.icon))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 186,
      background: 'rgba(255,255,255,.9)',
      backdropFilter: 'blur(8px)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      padding: 16,
      animation: 'float-y 5s ease-in-out infinite'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--gold-100)',
      color: 'var(--gold-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 'var(--weight-semibold)',
      marginBottom: 10
    }
  }, "PAN"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      color: 'var(--navy-900)'
    }
  }, "500+ Businesses"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--ink-500)'
    }
  }, "Served pan-India")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 8,
      left: -10,
      width: 172,
      background: 'rgba(255,255,255,.9)',
      backdropFilter: 'blur(8px)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      padding: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      animation: 'float-y 6s ease-in-out infinite',
      animationDelay: '-2.4s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      flexShrink: 0,
      borderRadius: '50%',
      background: 'var(--navy-100)',
      color: 'var(--navy-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 'var(--weight-semibold)'
    }
  }, "YRS"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 13,
      color: 'var(--navy-900)'
    }
  }, "7+ Years"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--ink-500)'
    }
  }, "of excellence"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '40%',
      right: '0%',
      width: 64,
      height: 64,
      borderRadius: '50%',
      border: '1px dashed var(--gold-400)',
      opacity: .55,
      animation: 'spin-slow 16s linear infinite'
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 32px 90px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-6)',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'var(--gold-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--gold-600)'
    }
  }, "500+"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-lg)',
      color: 'var(--navy-900)'
    }
  }, "Businesses Served"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-500)'
    }
  }, "Across every state"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-6)',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'var(--navy-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--navy-700)'
    }
  }, "7+"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-lg)',
      color: 'var(--navy-900)'
    }
  }, "Years of Excellence"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-500)'
    }
  }, "Serving since 2017"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-6)',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'var(--gold-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--gold-600)'
    }
  }, "94"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-lg)',
      color: 'var(--navy-900)'
    }
  }, "Services Live"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-500)'
    }
  }, "10 categories"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 32px 90px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Trust",
    title: "Why Businesses Choose Us"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, WHY_CHOOSE_US.map((f, i) => /*#__PURE__*/React.createElement(FeatureTile, _extends({
    key: f.title
  }, f, {
    accent: i % 2 ? 'var(--navy-100)' : 'var(--gold-100)'
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '20px 32px 110px',
      maxWidth: 920,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Simple Process",
    title: "How It Works"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 8,
      bottom: 8,
      width: 2,
      background: 'linear-gradient(var(--ink-100),var(--gold-400),var(--ink-100))',
      transform: 'translateX(-50%)'
    }
  }), STEPS.map((s, i) => {
    const active = activeStep === i;
    const iconRight = i % 2 === 1;
    const iconBlock = /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: iconRight ? 'row-reverse' : 'row',
        alignItems: 'center',
        gap: 14,
        justifyContent: iconRight ? 'flex-start' : 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 56,
        height: 56,
        flexShrink: 0,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--navy-900)',
        color: 'var(--gold-400)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--weight-semibold)',
        fontSize: 'var(--text-lg)',
        boxShadow: active ? 'var(--shadow-md)' : 'none',
        transition: 'box-shadow .4s'
      }
    }, s.n));
    const textBlock = /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: iconRight ? 'right' : 'left'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--weight-semibold)',
        fontSize: 'var(--text-xl)',
        color: 'var(--navy-900)',
        marginBottom: 8
      }
    }, s.t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)',
        color: 'var(--ink-500)',
        lineHeight: 'var(--leading-sm)'
      }
    }, s.d));
    return /*#__PURE__*/React.createElement("div", {
      key: s.n,
      "data-idx": i,
      ref: el => stepRefs.current[i] = el,
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 56px 1fr',
        alignItems: 'center',
        gap: 28,
        padding: '26px 28px',
        borderRadius: 'var(--radius-xl)',
        background: active ? 'var(--paper-alt)' : 'transparent',
        transition: 'background .5s var(--ease-standard)',
        marginBottom: 8
      }
    }, iconRight ? textBlock : iconBlock, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: active ? 26 : 12,
        height: active ? 26 : 12,
        borderRadius: active ? '50%' : 4,
        background: active ? 'linear-gradient(135deg,var(--gold-400),var(--navy-700))' : 'var(--white)',
        border: active ? 'none' : '1px solid var(--ink-100)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: active ? '0 0 0 6px var(--paper-alt),0 0 22px rgba(239,168,46,.4)' : 'none',
        transition: 'all .4s var(--ease-standard)'
      }
    }, active ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--navy-950)'
      }
    }) : null)), iconRight ? iconBlock : textBlock);
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '90px 32px 120px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Experience the Difference",
    title: "Why Choose Income N Filing?"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      padding: '20px 0 40px'
    }
  }, WHY_CHOOSE_SERVICE.map((f, i) => {
    const mid = (WHY_CHOOSE_SERVICE.length - 1) / 2;
    const off = i - mid;
    const rotate = off * 6;
    const rise = Math.abs(off) * 10;
    return /*#__PURE__*/React.createElement("div", {
      key: f.title,
      style: {
        width: 150,
        minHeight: 200,
        marginLeft: i === 0 ? 0 : -56,
        background: 'var(--white)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-md)',
        padding: 'var(--space-4)',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        transform: `rotate(${rotate}deg) translateY(${rise}px)`,
        transformOrigin: 'bottom center',
        transition: 'transform .25s var(--ease-standard)',
        cursor: 'default',
        position: 'relative',
        zIndex: i
      },
      onMouseEnter: e => {
        e.currentTarget.style.transform = 'rotate(0deg) translateY(-18px)';
        e.currentTarget.style.zIndex = 50;
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = `rotate(${rotate}deg) translateY(${rise}px)`;
        e.currentTarget.style.zIndex = i;
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 36,
        height: 36,
        borderRadius: '50%',
        background: i % 2 ? 'var(--navy-100)' : 'var(--gold-100)',
        color: 'var(--navy-900)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        fontWeight: 'var(--weight-semibold)'
      }
    }, f.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--weight-semibold)',
        fontSize: 'var(--text-sm)',
        color: 'var(--navy-900)'
      }
    }, f.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 11,
        color: 'var(--ink-500)',
        lineHeight: 1.5
      }
    }, f.description));
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 32px 90px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 28,
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 16px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--navy-700)',
      marginBottom: 14
    }
  }, "Modules"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-3xl)',
      color: 'var(--navy-900)',
      margin: 0
    }
  }, "Service Categories")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go('services')
  }, "View all 94 services")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gridAutoFlow: 'dense',
      gap: 16
    }
  }, CATEGORIES.map((c, i) => /*#__PURE__*/React.createElement(CategoryCard, _extends({
    key: c.title
  }, c, {
    index: i,
    featured: i === 0 || i === 4,
    onClick: () => go('services')
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 0 90px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "And Many More",
    title: "Our Clients"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      color: 'var(--ink-500)',
      marginTop: -24,
      marginBottom: 40
    }
  }, "Join our growing family of satisfied clients")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '60px 0',
      width: '100vw',
      marginLeft: 'calc(50% - 50vw)',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 2,
      pointerEvents: 'none',
      background: 'linear-gradient(90deg,var(--white),transparent 10%,transparent 90%,var(--white))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      zIndex: 3,
      width: 200,
      height: 200,
      borderRadius: '50%',
      background: 'var(--navy-950)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      boxShadow: '0 0 0 8px var(--white),0 0 90px 28px rgba(239,168,46,.4),0 0 150px 60px rgba(29,65,98,.25)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -16,
      borderRadius: '50%',
      border: '1px dashed var(--gold-300)',
      animation: 'spin-slow 22s linear infinite'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -4,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--gold-400)'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 30,
      color: 'var(--gold-400)'
    }
  }, "500+"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--navy-300)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      marginTop: 6
    }
  }, "Businesses", /*#__PURE__*/React.createElement("br", null), "Trust Us"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, CLIENT_ROWS.map((row, ri) => /*#__PURE__*/React.createElement("div", {
    key: ri,
    style: {
      display: 'flex',
      gap: 14,
      width: 'max-content',
      animation: `ticker-scroll ${28 + ri * 7}s linear infinite`,
      animationDirection: ri === 1 ? 'reverse' : 'normal'
    }
  }, [...row, ...row].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '15px 26px',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--paper-alt)',
      border: '1px solid var(--ink-100)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 13,
      color: 'var(--navy-800)',
      whiteSpace: 'nowrap'
    }
  }, c))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--white)',
      padding: '90px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Client Stories",
    title: "What Our Clients Say"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: -24,
      marginBottom: 36,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--gold-600)'
    }
  }, "\u2605\u2605\u2605\u2605\u2605 Rated 4.9/5 on Google Reviews")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 2,
      pointerEvents: 'none',
      background: 'linear-gradient(90deg,var(--white),transparent 8%,transparent 92%,var(--white))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      width: 'max-content',
      animation: 'ticker-scroll 42s linear infinite'
    }
  }, [...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 320,
      background: 'var(--paper-alt)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--navy-800)',
      color: 'var(--gold-400)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 14
    }
  }, t.initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 14,
      color: 'var(--navy-900)'
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-500)'
    }
  }, t.meta))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      color: 'var(--gold-300)',
      lineHeight: .6
    }
  }, "\"")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--ink-700)',
      lineHeight: 1.6
    }
  }, t.quote)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '90px 32px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Pan-India Compliance Services",
    title: "Our Office Locations"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(OfficeCard, {
    city: "Kolkata",
    region: "West Bengal 700039",
    address: "38M/1, New Ballygunge Rd, Kasba",
    live: true
  }), /*#__PURE__*/React.createElement(OfficeCard, {
    city: "Bhagalpur",
    region: "Bihar",
    address: "Opposite Dr. R N Jha Clinic, Near Head Post Office",
    live: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-900)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-8)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -60,
      right: -60,
      width: 200,
      height: 200,
      borderRadius: '50%',
      background: 'radial-gradient(circle,var(--gold-500),transparent 70%)',
      opacity: .35
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-xl)',
      color: 'var(--white)',
      marginBottom: 8,
      position: 'relative'
    }
  }, "Nationwide Compliance Services"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--gold-400)',
      marginBottom: 10,
      position: 'relative'
    }
  }, "We serve businesses across all states in India"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--navy-300)',
      margin: 0,
      position: 'relative'
    }
  }, "Whether you're in Delhi, Mumbai, Bangalore, Chennai, or any other city \u2014 every service is available with complete compliance support."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--white)',
      padding: '90px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Quick Answers",
    title: "Frequently Asked Questions"
  }), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpenIndex: 0,
    items: FAQ
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      background: 'linear-gradient(120deg,var(--navy-900),var(--navy-700))',
      borderRadius: 'var(--radius-xl)',
      padding: '64px 48px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -80,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 280,
      height: 280,
      borderRadius: '50%',
      background: 'radial-gradient(circle,var(--gold-400),transparent 70%)',
      opacity: .3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-4xl)',
      color: 'var(--white)',
      margin: '0 0 14px',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "Ready to simplify your compliance?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--navy-300)',
      fontSize: 'var(--text-base)',
      marginBottom: 32
    }
  }, "Connect with a real advisor over WhatsApp \u2014 no queue, no bots."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go('chat')
  }, "Chat With an Advisor")))), /*#__PURE__*/React.createElement(Footer, {
    tagline: "Simplifying Compliance. Empowering Business.",
    columns: [{
      title: 'Quick Links',
      links: [{
        label: 'Home',
        href: '#home'
      }, {
        label: 'Services',
        href: '#services'
      }, {
        label: 'Contact',
        href: '#contact'
      }]
    }],
    contact: {
      phone: '+91 7890594600',
      email: 'support@incomenfiling.com',
      region: 'Pan-India Services'
    }
  }));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeV2.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V2_ACCENTS = ['var(--gold-500)', 'var(--navy-700)', 'var(--status-positive)', 'var(--navy-500)'];
const V2_TINTS = ['var(--gold-050)', 'var(--navy-050)', 'var(--paper-alt)', 'var(--navy-050)'];
const WHY_CHOOSE_US = [{
  icon: 'VER',
  title: 'Verified Expertise',
  description: 'Qualified professionals across taxation, compliance, and corporate law.'
}, {
  icon: 'SEC',
  title: 'Complete Confidentiality',
  description: 'Your data is protected on dedicated, secure infrastructure.'
}, {
  icon: 'CMP',
  title: 'Compliance-First Approach',
  description: 'Proactive guidance to keep your business fully up to date.'
}, {
  icon: 'YRS',
  title: '7+ Years of Excellence',
  description: 'A proven track record of serving businesses since 2017.'
}, {
  icon: 'PAN',
  title: 'Pan-India Reach',
  description: 'Serving clients across every state with consistent quality.'
}, {
  icon: '500',
  title: '500+ Businesses Served',
  description: 'Trusted by startups, SMEs, and established enterprises alike.'
}];
const CLIENTS = ['SMND Developers', 'Farming India Pvt. Ltd.', 'Kesharvani Interiors', 'Gowebbly', 'Sher Bazzar', 'Vulmac Electrical', 'Bina Saree Center', 'Npk-knots Marine', 'Tirupati Vastralaya', 'Skyrise Traders', 'Seavision Maritime', 'Sensea Mercantile Academy', 'JP Electrical', 'Loknath Medical', 'RGV Agro Pvt. Ltd.'];
const CLIENT_ROWS = [CLIENTS.slice(0, 5), CLIENTS.slice(5, 10), CLIENTS.slice(10, 15)];
const CLIENT_POS = [{
  l: 8,
  t: 22
}, {
  l: 23,
  t: 10
}, {
  l: 41,
  t: 14
}, {
  l: 60,
  t: 9
}, {
  l: 77,
  t: 15
}, {
  l: 91,
  t: 30
}, {
  l: 7,
  t: 46
}, {
  l: 93,
  t: 50
}, {
  l: 9,
  t: 70
}, {
  l: 24,
  t: 85
}, {
  l: 42,
  t: 88
}, {
  l: 60,
  t: 86
}, {
  l: 77,
  t: 80
}, {
  l: 92,
  t: 70
}, {
  l: 50,
  t: 5
}];
const CLIENT_CARDS = [{
  front: {
    name: 'SMND Developers',
    domain: 'smnddevelopers.in',
    sector: 'Real Estate',
    ini: 'SM',
    av: 12
  },
  back: {
    name: 'Skyrise Traders',
    domain: 'skyrisetraders.com',
    sector: 'Trading',
    ini: 'ST',
    av: 33
  }
}, {
  front: {
    name: 'Farming India',
    domain: 'farmingindia.in',
    sector: 'Agriculture',
    ini: 'FI',
    av: 8
  },
  back: {
    name: 'RGV Agro',
    domain: 'rgvagro.in',
    sector: 'Agri-business',
    ini: 'RA',
    av: 52
  }
}, {
  front: {
    name: 'Kesharvani Interiors',
    domain: 'kesharvani.in',
    sector: 'Interiors',
    ini: 'KI',
    av: 23
  },
  back: {
    name: 'Bina Saree Center',
    domain: 'binasaree.in',
    sector: 'Retail',
    ini: 'BS',
    av: 45
  }
}, {
  front: {
    name: 'Gowebbly',
    domain: 'gowebbly.com',
    sector: 'Technology',
    ini: 'GW',
    av: 15
  },
  back: {
    name: 'Sensea Academy',
    domain: 'senseamercantile.in',
    sector: 'Education',
    ini: 'SA',
    av: 41
  }
}, {
  front: {
    name: 'Sher Bazzar',
    domain: 'sherbazzar.in',
    sector: 'Retail',
    ini: 'SB',
    av: 60
  },
  back: {
    name: 'Tirupati Vastralaya',
    domain: 'tirupativastra.in',
    sector: 'Textiles',
    ini: 'TV',
    av: 29
  }
}, {
  front: {
    name: 'Vulmac Electrical',
    domain: 'vulmac.in',
    sector: 'Electrical',
    ini: 'VE',
    av: 3
  },
  back: {
    name: 'JP Electrical',
    domain: 'jpelectrical.in',
    sector: 'Electrical',
    ini: 'JP',
    av: 56
  }
}, {
  front: {
    name: 'Npk-knots Marine',
    domain: 'npkknots.in',
    sector: 'Maritime',
    ini: 'NM',
    av: 11
  },
  back: {
    name: 'Seavision Maritime',
    domain: 'seavision.in',
    sector: 'Maritime',
    ini: 'SV',
    av: 68
  }
}];
const TESTIMONIALS = [{
  name: 'Aman Mishra',
  meta: '2023 · Google Review',
  initials: 'AM',
  av: 13,
  quote: 'We are very much satisfied with their services. Anish personally tracks all progress and provides on-time updates and solutions. Highly recommended for new businesses and startups.'
}, {
  name: 'Vaibhav Gupta',
  meta: '2023 · Google Review',
  initials: 'VG',
  av: 14,
  quote: 'This firm outperforms each one of them by miles. Superb follow-up and assistance. Would recommend to all. Thanks Anish ji & team.'
}, {
  name: 'Ajay Choudhary',
  meta: '2022 · Google Review',
  initials: 'AC',
  av: 51,
  quote: 'The practice is well organised and each member of staff is very helpful. Mr. Anish is very friendly, warm and highly experienced.'
}, {
  name: 'Wheelectric EV Kits',
  meta: '2023 · Google Review',
  initials: 'WE',
  av: 59,
  quote: 'Valuable service and professional management. Very satisfied with the quality of compliance support provided by their team.'
}, {
  name: 'Sagar Gidwani',
  meta: '2024 · Google Review',
  initials: 'SG',
  av: 18,
  quote: 'Documents ready within few days and the way things are explained in simple language is impressive. Highly recommended.'
}];
const FAQ = [{
  question: 'How long does company incorporation take?',
  answer: 'Once your documents are complete, incorporation is completed within days — tracked from submission to certificate.'
}, {
  question: 'What documents are required for GST registration?',
  answer: 'PAN, business address proof, and bank details — we confirm the exact list for your entity type on a free call.'
}, {
  question: 'Do you serve clients outside Bhagalpur and Kolkata?',
  answer: 'Yes — every service is available pan-India, coordinated remotely with the same on-time delivery.'
}, {
  question: 'What is the cost of your services?',
  answer: 'Discussed directly during your consultation — book a free session and we\u2019ll scope a plan for your business.'
}, {
  question: 'How is my confidential data protected?',
  answer: 'Your data is stored on secure, dedicated infrastructure — privacy and trust are non-negotiable for us.'
}, {
  question: 'Can you handle tax notices and scrutiny assessments?',
  answer: 'Yes — notice handling and scrutiny response are available as a standing service, not just an add-on.'
}, {
  question: 'What is the first step to get started?',
  answer: 'Reach us on WhatsApp or the contact form below — we\u2019ll scope your requirement on a free call.'
}];
const HOME_CATEGORIES = [{
  icon: 'GST',
  title: 'GST Compliance',
  description: 'End-to-end GST from registration to refunds — filed accurately and on time, every cycle.',
  count: 14,
  turnaround: '3–7 days',
  docs: 'PAN, address proof, bank',
  services: ['New GST registration', 'Monthly GSTR-1 & 3B filing', 'Annual return GSTR-9', 'Input tax credit reconciliation', 'GST refund applications', 'Notice & mismatch handling']
}, {
  icon: 'ITR',
  title: 'Income Tax',
  description: 'Returns, assessments and planning for individuals and businesses — maximum eligible refund.',
  count: 11,
  turnaround: '2–5 days',
  docs: 'Form 16, bank, investments',
  services: ['ITR filing (all forms)', 'Capital gains computation', 'TDS/TCS returns', 'Scrutiny & assessment support', 'Advance tax planning', 'Notice response u/s 143']
}, {
  icon: 'INC',
  title: 'Incorporation',
  description: 'Launch your entity the right way — company, LLP or OPC with PAN, TAN and GST ready to go.',
  count: 12,
  turnaround: '7–14 days',
  docs: 'ID, address, photos',
  services: ['Private Limited company', 'LLP formation', 'One Person Company', 'DIN & DSC procurement', 'Startup India registration', 'MOA & AOA drafting']
}, {
  icon: 'ROC',
  title: 'Corporate Compliance',
  description: 'Stay clean with the Registrar — every annual filing, resolution and record maintained.',
  count: 10,
  turnaround: 'Ongoing',
  docs: 'Financials, registers',
  services: ['Annual ROC returns', 'Board & AGM resolutions', 'Director appointments', 'Statutory register upkeep', 'Charge registration', 'Compliance calendar']
}, {
  icon: 'IBC',
  title: 'Insolvency Advisory',
  description: 'Navigate IBC with specialists — filings, resolution support and restructuring guidance.',
  count: 6,
  turnaround: 'Case-based',
  docs: 'Debt records, filings',
  services: ['IBC petition filing', 'Resolution professional support', 'Creditor claim management', 'Restructuring advisory', 'Liquidation assistance', 'NCLT representation']
}, {
  icon: 'DOC',
  title: 'Documentation & Drafting',
  description: 'Airtight legal documents and certifications — drafted, reviewed and statutorily sound.',
  count: 9,
  turnaround: '2–4 days',
  docs: 'Party details, terms',
  services: ['Legal drafting', 'Statutory certifications', 'Affidavits & declarations', 'Record maintenance', 'Notarisation support', 'Deed preparation']
}, {
  icon: 'AGR',
  title: 'Contracts & Agreements',
  description: 'Protect every deal — vendor, employment and partnership agreements built to hold.',
  count: 8,
  turnaround: '2–5 days',
  docs: 'Party & scope details',
  services: ['Vendor agreements', 'Employment contracts', 'Partnership deeds', 'NDAs & MOUs', 'Service agreements', 'Contract review']
}, {
  icon: 'ACC',
  title: 'Accounting & Bookkeeping',
  description: 'Clean books, on time — accounting, payroll and MIS with audit-ready records.',
  count: 9,
  turnaround: 'Monthly',
  docs: 'Invoices, statements',
  services: ['Monthly bookkeeping', 'Payroll processing', 'MIS reporting', 'Bank reconciliation', 'Audit support', 'Financial statements']
}];
const STEPS = [{
  n: '01',
  t: 'Share Requirements',
  d: 'Tell us what you need — call, WhatsApp, or the form. We scope your business in one call.'
}, {
  n: '02',
  t: 'We Handle Everything',
  d: 'Documents collected, filings prepared, authorities liaised — you get proactive updates at every step.'
}, {
  n: '03',
  t: 'Your Business is Compliant',
  d: 'Certificates and filings confirmed and tracked — with reminders so nothing is ever missed.'
}];
function CountUpV2({
  to,
  suffix = '',
  duration = 1300
}) {
  const [n, setN] = React.useState(0);
  const ref = React.useRef(null);
  const started = React.useRef(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = now => {
            const p = Math.min(1, (now - start) / duration);
            setN(Math.floor(p * to));
            if (p < 1) requestAnimationFrame(step);else setN(to);
          };
          requestAnimationFrame(step);
        }
      });
    }, {
      threshold: .4
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to, duration]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, n, suffix);
}
function EyebrowV2({
  children,
  light
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 16px',
      borderRadius: 'var(--radius-pill)',
      background: light ? 'rgba(255,255,255,.1)' : 'var(--navy-050)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: light ? 'var(--gold-400)' : 'var(--navy-700)'
    }
  }, children);
}
function SectionHeadV2({
  eyebrow,
  title,
  sub,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(EyebrowV2, {
    light: dark
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-3xl)',
      color: dark ? 'var(--white)' : 'var(--navy-900)',
      margin: '16px 0 0',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: dark ? 'var(--navy-300)' : 'var(--ink-500)',
      margin: '10px auto 0',
      maxWidth: 520
    }
  }, sub));
}
function NavBarHomeV2({
  go,
  active
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const items = [{
    k: 'home',
    label: 'Home'
  }, {
    k: 'about',
    label: 'About'
  }, {
    k: 'services',
    label: 'Services'
  }, {
    k: 'testimonials',
    label: 'Testimonials'
  }, {
    k: 'chat',
    label: 'Live Chat'
  }, {
    k: 'contact',
    label: 'Contact'
  }];
  const [bookHover, setBookHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 60,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      alignItems: 'center',
      gap: 24,
      padding: '16px 32px',
      background: scrolled ? 'rgba(255,255,255,.62)' : 'var(--white)',
      backdropFilter: scrolled ? 'saturate(180%) blur(18px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(18px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,.55)' : '1px solid var(--ink-100)',
      boxShadow: scrolled ? '0 10px 34px rgba(11,31,58,.13)' : 'none',
      fontFamily: 'var(--font-body)',
      transition: 'background .28s ease,box-shadow .28s ease,backdrop-filter .28s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logo || "../../assets/logo.jpg",
    alt: "",
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      color: 'var(--navy-900)',
      lineHeight: 1.2
    }
  }, "Income N ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-600)'
    }
  }, "Filing")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-500)',
      lineHeight: 1.2
    }
  }, "Established 2017"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      justifyContent: 'center'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.k,
    href: `#${it.k}`,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: active === it.k ? 'var(--gold-600)' : 'var(--navy-800)',
      textDecoration: 'none',
      borderBottom: active === it.k ? '2px solid var(--gold-600)' : '2px solid transparent',
      paddingBottom: 4,
      lineHeight: 1.2
    }
  }, it.label))), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('contact'),
    onMouseEnter: () => setBookHover(true),
    onMouseLeave: () => setBookHover(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 13,
      padding: '11px 22px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: 'var(--gold-500)',
      color: 'var(--navy-950)',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transform: bookHover ? 'translateY(-2px)' : 'none',
      boxShadow: bookHover ? 'var(--shadow-md)' : 'none',
      transition: 'all .15s'
    }
  }, "Book Free Consultation"));
}
function HeroCTAButtonV2({
  variant,
  children,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const primary = variant === 'primary';
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      padding: '14px 26px',
      borderRadius: 'var(--radius-pill)',
      border: primary ? 'none' : '1.5px solid var(--navy-900)',
      background: primary ? 'var(--gold-500)' : hover ? 'var(--navy-900)' : 'transparent',
      color: primary ? 'var(--navy-950)' : hover ? 'var(--white)' : 'var(--navy-900)',
      cursor: 'pointer',
      boxShadow: primary && hover ? '0 12px 26px rgba(239,168,46,.4)' : 'none',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'all .2s var(--ease-standard)'
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      transition: 'transform .2s',
      transform: hover ? 'translateX(4px)' : 'none',
      display: 'inline-block'
    }
  }, "\u2192"));
}
function ServiceFinderV2({
  onSelect
}) {
  const [q, setQ] = React.useState('');
  const [active, setActive] = React.useState(0);
  React.useEffect(() => {
    setActive(0);
  }, [q]);
  const filtered = HOME_CATEGORIES.filter(cat => cat.title.toLowerCase().includes(q.toLowerCase())).slice(0, 4);
  const c = filtered[active];
  const realIndex = c ? HOME_CATEGORIES.indexOf(c) : 0;
  const accent = V2_ACCENTS[realIndex % 4],
    tint = V2_TINTS[realIndex % 4];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-lg)',
      padding: 26,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--gold-600)',
      marginBottom: 4
    }
  }, "Quick Service Finder"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-lg)',
      color: 'var(--navy-900)'
    }
  }, "Not sure where to start?")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--paper-alt)',
      borderRadius: 'var(--radius-pill)',
      padding: '9px 14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--ink-300)'
    }
  }, "\u2315"), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search a service category\u2026",
    style: {
      border: 'none',
      background: 'none',
      outline: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      width: '100%',
      color: 'var(--navy-900)'
    }
  })), filtered.length > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 8
    }
  }, filtered.map((cat, i) => {
    const ri = HOME_CATEGORIES.indexOf(cat);
    return /*#__PURE__*/React.createElement("button", {
      key: cat.icon,
      onClick: () => setActive(i),
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        padding: '12px 4px',
        borderRadius: 'var(--radius-md)',
        border: active === i ? `2px solid ${V2_ACCENTS[ri % 4]}` : '1px solid var(--ink-100)',
        background: active === i ? V2_TINTS[ri % 4] : 'var(--white)',
        cursor: 'pointer',
        transition: 'all .2s'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        background: active === i ? V2_ACCENTS[ri % 4] : 'var(--paper-alt)',
        color: active === i ? 'var(--white)' : 'var(--ink-500)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: 9,
        fontWeight: 'var(--weight-semibold)',
        transition: 'all .2s'
      }
    }, cat.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 10,
        color: 'var(--navy-800)',
        textAlign: 'center',
        lineHeight: 1.2
      }
    }, cat.title.split(' ')[0]));
  })), /*#__PURE__*/React.createElement("div", {
    key: active + q,
    style: {
      background: tint,
      borderRadius: 'var(--radius-md)',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      animation: 'fade-in-up .35s var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      color: 'var(--navy-900)'
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--ink-500)',
      lineHeight: 1.5
    }
  }, c.description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: accent,
      fontWeight: 'var(--weight-semibold)'
    }
  }, c.count, " services"), /*#__PURE__*/React.createElement("span", {
    onClick: onSelect,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 'var(--weight-semibold)',
      color: accent,
      cursor: 'pointer'
    }
  }, "View \u2192")))) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--ink-500)',
      textAlign: 'center',
      padding: '18px 0'
    }
  }, "No matches \u2014 try a different term."), /*#__PURE__*/React.createElement("div", {
    onClick: onSelect,
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-300)',
      cursor: 'pointer'
    }
  }, "or explore all 94 services \u2192"));
}
function CategoryExplorerV2({
  categories,
  onSelect
}) {
  const [active, setActive] = React.useState(0);
  const c = categories[active];
  const accent = V2_ACCENTS[active % 4],
    tint = V2_TINTS[active % 4];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '320px 1fr',
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      border: '1px solid var(--ink-100)',
      boxShadow: 'var(--shadow-md)',
      minHeight: 400
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper-alt)',
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      overflowY: 'auto',
      borderRight: '1px solid var(--ink-100)'
    }
  }, categories.map((cat, i) => /*#__PURE__*/React.createElement("button", {
    key: cat.title,
    onClick: () => setActive(i),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '13px 14px',
      borderRadius: 'var(--radius-md)',
      border: 'none',
      background: active === i ? 'var(--white)' : 'transparent',
      boxShadow: active === i ? 'var(--shadow-sm)' : 'none',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      flexShrink: 0,
      borderRadius: 'var(--radius-md)',
      background: V2_TINTS[i % 4],
      color: V2_ACCENTS[i % 4],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 'var(--weight-semibold)'
    }
  }, cat.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: active === i ? 'var(--weight-semibold)' : 'var(--weight-medium)',
      color: active === i ? 'var(--navy-900)' : 'var(--ink-700)',
      flex: 1
    }
  }, cat.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-300)'
    }
  }, cat.count)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 44px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 160,
      height: 160,
      background: tint,
      opacity: .55,
      borderRadius: '0 0 0 100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    key: active,
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      animation: 'fade-in-up .35s var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 54,
      height: 54,
      borderRadius: 'var(--radius-lg)',
      background: tint,
      color: accent,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 'var(--weight-semibold)'
    }
  }, c.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-2xl)',
      color: 'var(--navy-900)'
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: accent,
      fontWeight: 'var(--weight-semibold)'
    }
  }, c.count, " services in this module"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--ink-500)',
      lineHeight: 'var(--leading-base)',
      maxWidth: 440
    }
  }, c.description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--paper-alt)',
      borderRadius: 'var(--radius-md)',
      padding: '8px 14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--ink-300)'
    }
  }, "Turnaround"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 13,
      color: 'var(--navy-900)'
    }
  }, c.turnaround)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--paper-alt)',
      borderRadius: 'var(--radius-md)',
      padding: '8px 14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--ink-300)'
    }
  }, "You'll need"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 13,
      color: 'var(--navy-900)'
    }
  }, c.docs))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, c.services.map((sv, si) => /*#__PURE__*/React.createElement("div", {
    key: sv,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 12px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--white)',
      border: '1px solid var(--ink-100)',
      animation: `fade-in-up .35s var(--ease-standard) ${si * 0.06}s both`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flexShrink: 0,
      borderRadius: '50%',
      background: tint,
      color: accent,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      fontWeight: 700
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'var(--ink-700)'
    }
  }, sv)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: onSelect,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-sm)',
      padding: '12px 22px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: accent,
      color: 'var(--white)',
      cursor: 'pointer'
    }
  }, "View all ", c.title, " services \u2192")))));
}
function BotCharacterV2({
  hovered
}) {
  const eyeCol = '#f6a94e',
    eyeGlow = hovered ? '#ffd27a' : eyeCol;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 134",
    width: "100%",
    height: "100%",
    style: {
      overflow: 'visible',
      animation: 'botbob 4s ease-in-out infinite'
    }
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "128",
    rx: "30",
    ry: "5",
    fill: "rgba(15,42,66,.16)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "24",
    y: "118",
    width: "24",
    height: "13",
    rx: "6",
    fill: "#f3ddd0"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "52",
    y: "118",
    width: "24",
    height: "13",
    rx: "6",
    fill: "#f3ddd0"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "30",
    y: "96",
    width: "15",
    height: "26",
    rx: "7",
    fill: "#2a2d33"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "55",
    y: "96",
    width: "15",
    height: "26",
    rx: "7",
    fill: "#2a2d33"
  }), /*#__PURE__*/React.createElement("g", {
    style: {
      transformOrigin: '16px 66px',
      transformBox: 'fill-box',
      animation: hovered ? 'botarm 1.1s ease-in-out infinite' : 'botarm 2.8s ease-in-out infinite'
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "60",
    width: "18",
    height: "42",
    rx: "9",
    fill: "#7f8894"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "103",
    r: "8",
    fill: "#17191e"
  })), /*#__PURE__*/React.createElement("g", {
    style: {
      transformOrigin: '84px 66px',
      transformBox: 'fill-box',
      animation: hovered ? 'wave .8s ease-in-out infinite' : 'wave 2.6s ease-in-out infinite'
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "74",
    y: "60",
    width: "18",
    height: "42",
    rx: "9",
    fill: "#7f8894"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "83",
    cy: "103",
    r: "8",
    fill: "#17191e"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M22 104 q28 12 56 0 v-42 q0-20 -28 -20 t-28 20 z",
    fill: "#8a929c"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "36",
    y: "84",
    width: "28",
    height: "17",
    rx: "8",
    fill: "#79828d"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24 66 q26 -30 52 0 q4 -34 -26 -34 t-26 34 z",
    fill: "#8a929c"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 62 q32 -46 64 0 q6 -42 -32 -42 t-32 42 z",
    fill: "#939ba5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "28",
    y: "20",
    width: "44",
    height: "46",
    rx: "16",
    fill: "#14171c"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "28",
    y: "20",
    width: "44",
    height: "46",
    rx: "16",
    fill: "none",
    stroke: "#2b2f37",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("g", {
    style: {
      transformOrigin: '50px 42px',
      transformBox: 'fill-box',
      animation: 'botblink 4.5s ease-in-out infinite'
    }
  }, /*#__PURE__*/React.createElement("g", {
    style: {
      animation: 'boteye 2s ease-in-out infinite',
      filter: `drop-shadow(0 0 5px ${eyeGlow})`
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "38",
    y: "35",
    width: "7",
    height: "15",
    rx: "3.5",
    fill: eyeGlow
  }), /*#__PURE__*/React.createElement("rect", {
    x: "55",
    y: "35",
    width: "7",
    height: "15",
    rx: "3.5",
    fill: eyeGlow
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M44 60 v11",
    stroke: "#f2cdb8",
    strokeWidth: "2.2",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M53 60 v11",
    stroke: "#f2cdb8",
    strokeWidth: "2.2",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "44",
    cy: "72",
    r: "2",
    fill: "#f2cdb8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "53",
    cy: "72",
    r: "2",
    fill: "#f2cdb8"
  }));
}
function SocialIconV2({
  d,
  label
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": label,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      border: '1px solid ' + (h ? 'var(--gold-500)' : 'rgba(255,255,255,.18)'),
      background: h ? 'var(--gold-500)' : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      transform: h ? 'translateY(-3px)' : 'none',
      transition: 'all .18s var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "17",
    height: "17",
    fill: h ? 'var(--navy-950)' : 'var(--white)'
  }, d));
}
const SOCIALS = [{
  label: 'LinkedIn',
  d: /*#__PURE__*/React.createElement("path", {
    d: "M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 002.48 2.5A2.5 2.5 0 007.5 6a2.5 2.5 0 00-2.52-2.5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05 4 0 4.74 2.6 4.74 6V21h-4v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-4z"
  })
}, {
  label: 'Facebook',
  d: /*#__PURE__*/React.createElement("path", {
    d: "M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z"
  })
}, {
  label: 'Instagram',
  d: /*#__PURE__*/React.createElement("path", {
    d: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 6.85A5.15 5.15 0 1017.15 12 5.15 5.15 0 0012 6.85zm0 8.5A3.35 3.35 0 1115.35 12 3.35 3.35 0 0112 15.35zm5.35-9.9a1.2 1.2 0 101.2 1.2 1.2 1.2 0 00-1.2-1.2z"
  })
}, {
  label: 'X',
  d: /*#__PURE__*/React.createElement("path", {
    d: "M17.53 3H20l-5.6 6.4L21 21h-5.1l-4-5.2-4.6 5.2H4.8l6-6.85L3.4 3h5.24l3.62 4.78zM16.6 19.5h1.4L7.5 4.4H6z"
  })
}, {
  label: 'YouTube',
  d: /*#__PURE__*/React.createElement("path", {
    d: "M21.6 7.2a2.5 2.5 0 00-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.83.43A2.5 2.5 0 002.4 7.2 26 26 0 002 12a26 26 0 00.4 4.8 2.5 2.5 0 001.77 1.77C5.75 19 12 19 12 19s6.25 0 7.83-.43a2.5 2.5 0 001.77-1.77A26 26 0 0022 12a26 26 0 00-.4-4.8zM10 15V9l5.2 3z"
  })
}];
function CField({
  tag = 'input',
  children,
  ...props
}) {
  const [f, setF] = React.useState(false);
  const T = tag;
  return /*#__PURE__*/React.createElement(T, _extends({}, props, {
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      padding: '12px 14px',
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid ' + (f ? 'var(--gold-500)' : 'var(--ink-100)'),
      background: f ? 'var(--white)' : 'var(--paper-alt)',
      color: 'var(--navy-900)',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box',
      boxShadow: f ? '0 0 0 3px rgba(239,168,46,.16)' : 'none',
      transition: 'all .15s',
      ...(tag === 'textarea' ? {
        resize: 'vertical'
      } : {})
    }
  }), children);
}
function ContactSectionV2({
  go
}) {
  const [sent, setSent] = React.useState(false);
  const field = {
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    padding: '12px 14px',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--ink-100)',
    background: 'var(--white)',
    color: 'var(--navy-900)',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box'
  };
  const METHODS = [{
    k: 'Call us',
    v: '+91 7890594600',
    href: 'tel:+917890594600',
    d: /*#__PURE__*/React.createElement("path", {
      d: "M6.6 10.8a15.6 15.6 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1z"
    })
  }, {
    k: 'WhatsApp',
    v: 'Chat instantly',
    href: 'https://wa.me/917890594600',
    wa: true,
    d: /*#__PURE__*/React.createElement("path", {
      d: "M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.09c-.24.68-1.42 1.32-1.95 1.36-.5.05-.99.24-3.32-.69-2.8-1.1-4.6-3.96-4.74-4.15-.14-.19-1.14-1.52-1.14-2.9 0-1.38.72-2.06.98-2.34.24-.26.53-.33.71-.33l.5.01c.16 0 .38-.06.59.45.24.58.81 2 .88 2.15.07.14.12.31.02.5-.28.55-.57.75-.79 1.02-.14.16-.29.34-.13.62.16.28.72 1.19 1.55 1.93 1.07.95 1.97 1.25 2.25 1.39.28.14.44.12.6-.07.19-.21.69-.8.87-1.08.19-.28.37-.23.62-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.32.07.12.07.66-.17 1.34z"
    })
  }, {
    k: 'Email us',
    v: 'support@incomenfiling.com',
    href: 'mailto:support@incomenfiling.com',
    d: /*#__PURE__*/React.createElement("path", {
      d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm8 7L4 6.5V8l8 4.5L20 8V6.5z"
    })
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      padding: '96px 32px',
      background: 'var(--white)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(rgba(43,108,214,.16) 1px,transparent 1px)',
      backgroundSize: '26px 26px',
      opacity: .7
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -120,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 560,
      height: 340,
      background: 'radial-gradient(circle,rgba(239,168,46,.14),transparent 68%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1060,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(EyebrowV2, null, "Get In Touch"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-3xl)',
      color: 'var(--navy-900)',
      margin: '16px 0 0',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "Let's start a conversation"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--ink-500)',
      margin: '10px auto 0',
      maxWidth: 480
    }
  }, "Tell us what you need \u2014 a real advisor replies, usually within a couple of hours.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.92fr 1.08fr',
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      border: '1px solid var(--ink-100)',
      boxShadow: '0 30px 60px rgba(15,42,66,.16)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(155deg,var(--gold-300,#f7cf82),var(--gold-500) 52%,var(--gold-600,#d8901f))',
      padding: '34px 30px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -70,
      right: -60,
      width: 210,
      height: 210,
      borderRadius: '50%',
      border: '22px solid rgba(15,42,66,.1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -80,
      left: -60,
      width: 190,
      height: 190,
      borderRadius: '50%',
      background: 'rgba(255,255,255,.16)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignSelf: 'flex-start',
      alignItems: 'center',
      gap: 7,
      background: 'rgba(15,42,66,.14)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 13px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--navy-950)',
      animation: 'pulse-dot 2s infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: 'var(--navy-950)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, "Replies in under 2 hours")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-2xl)',
      color: 'var(--navy-950)',
      lineHeight: 1.15
    }
  }, "We'd love to", /*#__PURE__*/React.createElement("br", null), "hear from you."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'rgba(15,42,66,.72)',
      marginTop: 8,
      maxWidth: 280
    }
  }, "A quick question or a full compliance plan \u2014 reach us however suits you best.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, METHODS.map(m => /*#__PURE__*/React.createElement("a", {
    key: m.k,
    href: m.href,
    target: m.href.startsWith('http') ? '_blank' : undefined,
    rel: "noreferrer",
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateX(4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      padding: '12px 14px',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      textDecoration: 'none',
      transition: 'all .2s var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      flexShrink: 0,
      borderRadius: '50%',
      background: m.wa ? 'var(--whatsapp-green)' : 'var(--navy-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: m.wa ? 'var(--white)' : 'var(--gold-400)'
  }, m.d)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: 'var(--gold-600,#c9820f)'
    }
  }, m.k), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 13.5,
      color: 'var(--navy-900)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, m.v)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      color: 'var(--ink-300)'
    }
  }, "\u203A")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 'auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      paddingTop: 18,
      borderTop: '1px solid rgba(15,42,66,.16)'
    }
  }, [['500+', 'Clients'], ['4.9★', 'Rating'], ['<2hr', 'Avg reply']].map((s, si) => /*#__PURE__*/React.createElement("div", {
    key: s[1],
    style: {
      textAlign: 'center',
      borderLeft: si ? '1px solid rgba(15,42,66,.16)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-xl)',
      color: 'var(--navy-950)'
    }
  }, s[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: 'rgba(15,42,66,.6)',
      marginTop: 2
    }
  }, s[1]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '34px 32px'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      minHeight: 300,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 66,
      height: 66,
      borderRadius: '50%',
      background: 'var(--status-positive)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--white)',
      fontSize: 32,
      fontWeight: 700,
      animation: 'pop-in .5s var(--ease-emphasized) both'
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-xl)',
      color: 'var(--navy-900)'
    }
  }, "Thanks \u2014 we'll be in touch!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--ink-500)',
      maxWidth: 340
    }
  }, "Our team typically responds within a few working hours. For anything urgent, message us on WhatsApp."), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSent(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 13,
      padding: '10px 20px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--ink-100)',
      background: 'var(--white)',
      color: 'var(--navy-800)',
      cursor: 'pointer'
    }
  }, "Send another \u2192")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-xl)',
      color: 'var(--navy-900)',
      marginBottom: 4
    }
  }, "Send us a message"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--ink-500)',
      marginBottom: 20
    }
  }, "We'll get back with a clear next step \u2014 no obligation."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(CField, {
    required: true,
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(CField, {
    required: true,
    placeholder: "Phone"
  })), /*#__PURE__*/React.createElement(CField, {
    required: true,
    type: "email",
    placeholder: "Email address"
  }), /*#__PURE__*/React.createElement(CField, {
    tag: "select",
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "What do you need help with?"), HOME_CATEGORIES.map(c => /*#__PURE__*/React.createElement("option", {
    key: c.title
  }, c.title))), /*#__PURE__*/React.createElement(CField, {
    tag: "textarea",
    rows: "4",
    placeholder: "Tell us a little about your requirement\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(HeroCTAButtonV2, {
    variant: "primary"
  }, "Send Message"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--ink-300)'
    }
  }, "or ", /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/917890594600",
    target: "_blank",
    rel: "noreferrer",
    style: {
      color: 'var(--whatsapp-green)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, "chat on WhatsApp")))))))));
}
function FooterV2({
  go
}) {
  const [email, setEmail] = React.useState('');
  const [ok, setOk] = React.useState(false);
  const links = [{
    title: 'Quick Links',
    items: [['Home', 'home'], ['About', 'about'], ['Services', 'services'], ['Live Chat', 'chat'], ['Contact', 'contact']]
  }, {
    title: 'Services',
    items: HOME_CATEGORIES.map(c => [c.title, 'services'])
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-950)',
      color: 'var(--white)',
      padding: '64px 32px 26px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -80,
      left: -40,
      width: 260,
      height: 260,
      borderRadius: '50%',
      background: 'var(--gold-500)',
      opacity: .06
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
      gap: 40,
      paddingBottom: 40,
      borderBottom: '1px solid rgba(255,255,255,.1)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logo || "../../assets/logo.jpg",
    alt: "",
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-lg)',
      color: 'var(--white)',
      lineHeight: 1.1
    }
  }, "Income N ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-400)'
    }
  }, "Filing")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--navy-300)'
    }
  }, "Established 2017"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--navy-300)',
      lineHeight: 1.6,
      maxWidth: 280,
      marginBottom: 18
    }
  }, "Simplifying compliance, empowering business \u2014 taxation, GST, incorporation and corporate law, handled end-to-end."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, SOCIALS.map(s => /*#__PURE__*/React.createElement(SocialIconV2, {
    key: s.label,
    d: s.d,
    label: s.label
  })))), links.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      marginBottom: 16
    }
  }, col.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, col.items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it[0],
    href: `#${it[1]}`,
    onClick: e => {
      e.preventDefault();
      go(it[1]);
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--navy-300)',
      textDecoration: 'none',
      transition: 'color .15s',
      width: 'fit-content'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--white)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--navy-300)'
  }, it[0]))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      marginBottom: 16
    }
  }, "Stay Updated"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--navy-300)',
      lineHeight: 1.5,
      marginBottom: 14
    }
  }, "Compliance deadlines & tips in your inbox."), ok ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--status-positive)'
    }
  }, "\u2713 Subscribed \u2014 thank you!") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      if (email) setOk(true);
    },
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: email,
    onChange: e => setEmail(e.target.value),
    type: "email",
    required: true,
    placeholder: "Email address",
    style: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      padding: '10px 12px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid rgba(255,255,255,.16)',
      background: 'rgba(255,255,255,.05)',
      color: 'var(--white)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      flexShrink: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      width: 42,
      borderRadius: 'var(--radius-md)',
      border: 'none',
      background: 'var(--gold-500)',
      color: 'var(--navy-950)',
      cursor: 'pointer'
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--navy-300)'
    }
  }, "\u260E +91 7890594600"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--navy-300)'
    }
  }, "\u2709 support@incomenfiling.com"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      flexWrap: 'wrap',
      paddingTop: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--navy-300)'
    }
  }, "\xA9 ", new Date().getFullYear(), " Income N Filing. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22
    }
  }, ['Privacy Policy', 'Terms of Service'].map(x => /*#__PURE__*/React.createElement("a", {
    key: x,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--navy-300)',
      textDecoration: 'none'
    }
  }, x))))));
}
function ChatWidgetV2({
  go
}) {
  const [open, setOpen] = React.useState(false);
  const [botHover, setBotHover] = React.useState(false);
  const QUICK = [{
    label: 'File my ITR',
    action: () => go('contact')
  }, {
    label: 'GST registration',
    action: () => go('services')
  }, {
    label: 'Talk to an advisor',
    action: () => go('chat')
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 26,
      right: 26,
      zIndex: 90,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 14
    }
  }, open && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 270,
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid var(--ink-100)',
      overflow: 'hidden',
      animation: 'fade-in-up .25s var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-900)',
      padding: '16px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: 'var(--gold-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "20",
    height: "20",
    fill: "none",
    stroke: "var(--navy-950)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "8",
    width: "16",
    height: "11",
    rx: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8V4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "3",
    r: "1.4",
    fill: "var(--navy-950)",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "13.5",
    r: "1.1",
    fill: "var(--navy-950)",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "13.5",
    r: "1.1",
    fill: "var(--navy-950)",
    stroke: "none"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 14,
      color: 'var(--white)'
    }
  }, "Filing Assistant"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--status-positive)'
    }
  }, "\u25CF Online now")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(false),
    style: {
      marginLeft: 'auto',
      background: 'none',
      border: 'none',
      color: 'var(--navy-300)',
      cursor: 'pointer',
      fontSize: 18,
      lineHeight: 1
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper-alt)',
      borderRadius: '12px 12px 12px 4px',
      padding: '10px 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--ink-700)',
      marginBottom: 14
    }
  }, "Hi! \uD83D\uDC4B How can we help you today?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, QUICK.map(q => /*#__PURE__*/React.createElement("button", {
    key: q.label,
    onClick: () => {
      q.action();
      setOpen(false);
    },
    style: {
      textAlign: 'left',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 13,
      padding: '10px 14px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--ink-100)',
      background: 'var(--white)',
      color: 'var(--navy-800)',
      cursor: 'pointer',
      transition: 'all .15s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--navy-050)';
      e.currentTarget.style.borderColor = 'var(--gold-400)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'var(--white)';
      e.currentTarget.style.borderColor = 'var(--ink-100)';
    }
  }, q.label, " \u2192"))), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/917890594600",
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      marginTop: 14,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 13,
      padding: '11px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--whatsapp-green)',
      color: 'var(--white)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "17",
    height: "17",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.09c-.24.68-1.42 1.32-1.95 1.36-.5.05-.99.24-3.32-.69-2.8-1.1-4.6-3.96-4.74-4.15-.14-.19-1.14-1.52-1.14-2.9 0-1.38.72-2.06.98-2.34.24-.26.53-.33.71-.33l.5.01c.16 0 .38-.06.59.45.24.58.81 2 .88 2.15.07.14.12.31.02.5-.28.55-.57.75-.79 1.02-.14.16-.29.34-.13.62.16.28.72 1.19 1.55 1.93 1.07.95 1.97 1.25 2.25 1.39.28.14.44.12.6-.07.19-.21.69-.8.87-1.08.19-.28.37-.23.62-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.32.07.12.07.66-.17 1.34z"
  })), "Chat on WhatsApp"))), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/917890594600",
    target: "_blank",
    rel: "noreferrer",
    title: "WhatsApp us",
    style: {
      position: 'relative',
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--whatsapp-green)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-lg)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      border: '2px solid var(--whatsapp-green)',
      animation: 'pulse-ring 2s infinite'
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "30",
    height: "30",
    fill: "var(--white)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.09c-.24.68-1.42 1.32-1.95 1.36-.5.05-.99.24-3.32-.69-2.8-1.1-4.6-3.96-4.74-4.15-.14-.19-1.14-1.52-1.14-2.9 0-1.38.72-2.06.98-2.34.24-.26.53-.33.71-.33l.5.01c.16 0 .38-.06.59.45.24.58.81 2 .88 2.15.07.14.12.31.02.5-.28.55-.57.75-.79 1.02-.14.16-.29.34-.13.62.16.28.72 1.19 1.55 1.93 1.07.95 1.97 1.25 2.25 1.39.28.14.44.12.6-.07.19-.21.69-.8.87-1.08.19-.28.37-.23.62-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.32.07.12.07.66-.17 1.34z"
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    onMouseEnter: () => setBotHover(true),
    onMouseLeave: () => setBotHover(false),
    title: "Chat with our bot",
    style: {
      position: 'relative',
      width: 92,
      height: 120,
      padding: 0,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      filter: 'drop-shadow(0 12px 16px rgba(15,42,66,.28))',
      transition: 'transform .2s',
      transform: botHover ? 'scale(1.06)' : 'none'
    }
  }, !open && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      right: 8,
      zIndex: 2,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--gold-500)',
      color: 'var(--navy-950)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 11,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-sm)'
    }
  }, "1"), !open && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -26,
      right: 0,
      zIndex: 2,
      whiteSpace: 'nowrap',
      background: 'var(--navy-900)',
      color: 'var(--white)',
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 'var(--weight-medium)',
      padding: '5px 11px',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-md)'
    }
  }, "Need help? \uD83D\uDC4B"), /*#__PURE__*/React.createElement(BotCharacterV2, {
    hovered: botHover
  })));
}
function PortraitV2({
  seed = 0,
  gender = 'men',
  size = 40
}) {
  const n = Math.abs(Math.round(seed)) % 99;
  const src = `https://randomuser.me/api/portraits/${gender === 'women' ? 'women' : 'men'}/${n}.jpg`;
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    width: size,
    height: size,
    loading: "lazy",
    style: {
      display: 'block',
      width: size,
      height: size,
      objectFit: 'cover',
      borderRadius: '50%'
    }
  });
}
function AvatarV2({
  label,
  idx,
  size = 40
}) {
  const a1 = V2_ACCENTS[idx % 4],
    a2 = V2_ACCENTS[(idx + 2) % 4];
  const gid = 'av' + React.useId().replace(/[^a-z0-9]/gi, '');
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 40 40",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: gid,
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: a1
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: a2
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "20",
    r: "20",
    fill: `url(#${gid})`
  }), /*#__PURE__*/React.createElement("text", {
    x: "20",
    y: "21",
    textAnchor: "middle",
    dominantBaseline: "central",
    fontFamily: "Poppins, Georgia, serif",
    fontWeight: "700",
    fontSize: "15",
    letterSpacing: "0.5",
    fill: "#ffffff"
  }, label));
}
function ReviewCardV2({
  t,
  i
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: 290,
      flexShrink: 0,
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--ink-100)',
      boxShadow: h ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      padding: '16px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      transform: h ? 'translateY(-4px)' : 'none',
      transition: 'transform .25s var(--ease-standard),box-shadow .25s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      flexShrink: 0,
      borderRadius: '50%',
      overflow: 'hidden',
      border: '2px solid var(--paper-alt)'
    }
  }, /*#__PURE__*/React.createElement(PortraitV2, {
    seed: t.av,
    size: 36
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 13,
      color: 'var(--navy-900)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, t.name), /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: 'var(--gold-500)',
      color: 'var(--navy-950)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 9,
      fontWeight: 700
    }
  }, "\u2713")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--ink-300)'
    }
  }, "@", t.initials.toLowerCase(), "client")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 1,
      color: 'var(--gold-500)',
      fontSize: 11,
      flexShrink: 0
    }
  }, "\u2605\u2605\u2605\u2605\u2605")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'var(--ink-700)',
      lineHeight: 1.5,
      display: '-webkit-box',
      WebkitLineClamp: 4,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, t.quote), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      paddingTop: 8,
      borderTop: '1px solid var(--ink-100)',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--ink-300)'
    }
  }, /*#__PURE__*/React.createElement("span", null, t.meta.split(' · ')[0]), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--link)'
    }
  }, "Google Review")));
}
function ReviewMarqueeV2() {
  const [paused, setPaused] = React.useState(false);
  const rows = [TESTIMONIALS, [...TESTIMONIALS].reverse()];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100vw',
      marginLeft: 'calc(50% - 50vw)',
      overflow: 'hidden',
      padding: '12px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      width: 120,
      zIndex: 3,
      pointerEvents: 'none',
      background: 'linear-gradient(90deg,var(--navy-050),transparent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: 120,
      zIndex: 3,
      pointerEvents: 'none',
      background: 'linear-gradient(270deg,var(--navy-050),transparent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, rows.map((row, ri) => /*#__PURE__*/React.createElement("div", {
    key: ri,
    style: {
      display: 'flex',
      gap: 18,
      width: 'max-content',
      animation: `ticker-scroll ${38 + ri * 10}s linear infinite`,
      animationDirection: ri === 1 ? 'reverse' : 'normal',
      animationPlayState: paused ? 'paused' : 'running'
    }
  }, [...row, ...row].map((t, i) => /*#__PURE__*/React.createElement(ReviewCardV2, {
    key: ri + '-' + i,
    t: t,
    i: i
  }))))));
}
function StepVisualV2({
  step
}) {
  if (step === 0) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        alignSelf: 'flex-start',
        maxWidth: '80%',
        background: 'rgba(255,255,255,.08)',
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: '14px 14px 14px 4px',
        padding: '10px 14px',
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        color: 'var(--white)',
        animation: 'fade-in-up .4s var(--ease-standard) both'
      }
    }, "Hi, I need GST registration for my new firm \uD83D\uDC4B"), /*#__PURE__*/React.createElement("div", {
      style: {
        alignSelf: 'flex-end',
        maxWidth: '80%',
        background: 'var(--whatsapp-green)',
        borderRadius: '14px 14px 4px 14px',
        padding: '10px 14px',
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        color: 'var(--white)',
        animation: 'fade-in-up .4s var(--ease-standard) .5s both'
      }
    }, "Sure! Share your PAN & address proof \u2014 we\u2019ll take it from here."), /*#__PURE__*/React.createElement("div", {
      style: {
        alignSelf: 'flex-start',
        display: 'flex',
        gap: 4,
        padding: '10px 14px',
        background: 'rgba(255,255,255,.08)',
        borderRadius: '14px 14px 14px 4px',
        animation: 'fade-in-up .4s var(--ease-standard) 1s both'
      }
    }, [0, 1, 2].map(d => /*#__PURE__*/React.createElement("span", {
      key: d,
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: 'rgba(255,255,255,.6)',
        animation: `float-y 1s ease-in-out ${d * .15}s infinite`
      }
    }))));
  }
  if (step === 1) {
    const rows = [['GST registration', 100], ['Document verification', 80], ['Return preparation', 55], ['Authority filing', 30]];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
      key: r[0],
      style: {
        animation: `fade-in-up .4s var(--ease-standard) ${i * .12}s both`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'var(--font-body)',
        fontSize: 12,
        color: 'var(--white)',
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", null, r[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        color: r[1] === 100 ? 'var(--status-positive)' : 'var(--gold-400)'
      }
    }, r[1] === 100 ? '✓ Done' : r[1] + '%')), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        borderRadius: 999,
        background: 'rgba(255,255,255,.1)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        borderRadius: 999,
        background: r[1] === 100 ? 'var(--status-positive)' : 'var(--gold-500)',
        width: r[1] + '%',
        animation: `grow-w 1s var(--ease-standard) ${i * .12}s both`
      }
    })))));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 80,
      height: 80,
      borderRadius: '50%',
      background: 'var(--status-positive)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'pop-in .5s var(--ease-emphasized) both'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--white)',
      fontSize: 38,
      fontWeight: 700
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      border: '2px solid var(--status-positive)',
      animation: 'pulse-ring 2s infinite'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 20px',
      textAlign: 'center',
      boxShadow: 'var(--shadow-md)',
      animation: 'fade-in-up .4s var(--ease-standard) .3s both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--ink-300)'
    }
  }, "Certificate Issued"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--navy-900)',
      margin: '4px 0'
    }
  }, "GSTIN 19ABCDE1234F1Z5"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--status-positive)'
    }
  }, "\u25CF Active \xB7 Reminders on")));
}
function StepperV2() {
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive(a => (a + 1) % STEPS.length), 3800);
    return () => clearInterval(id);
  }, [paused]);
  const icons = ['SHARE', 'HANDLE', 'DONE'];
  const s = STEPS[active];
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,340px) minmax(0,1fr)',
      gap: 24,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, STEPS.map((st, i) => /*#__PURE__*/React.createElement("button", {
    key: st.n,
    onClick: () => setActive(i),
    style: {
      textAlign: 'left',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '18px 20px',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid ' + (active === i ? 'var(--gold-400)' : 'var(--ink-100)'),
      background: active === i ? 'var(--white)' : 'transparent',
      boxShadow: active === i ? 'var(--shadow-md)' : 'none',
      cursor: 'pointer',
      transition: 'all .3s var(--ease-standard)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 4,
      background: 'var(--gold-500)',
      transform: active === i ? 'scaleY(1)' : 'scaleY(0)',
      transformOrigin: 'top',
      transition: 'transform .3s'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      flexShrink: 0,
      borderRadius: '50%',
      background: active === i ? 'var(--gold-500)' : 'var(--navy-050)',
      color: active === i ? 'var(--navy-950)' : 'var(--navy-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      transition: 'all .3s'
    }
  }, st.n), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      color: active === i ? 'var(--navy-900)' : 'var(--ink-700)'
    }
  }, st.t), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: active === i ? 'var(--gold-600)' : 'var(--ink-300)',
      marginTop: 4
    }
  }, icons[i]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: 'var(--white)',
      border: '1px solid var(--ink-100)',
      boxShadow: 'var(--shadow-md)',
      padding: '32px 34px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: 340
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 200,
      height: 200,
      background: 'var(--gold-500)',
      opacity: .1,
      borderRadius: '0 0 0 100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    key: active,
    style: {
      position: 'relative',
      animation: 'fade-in-up .4s var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      flexShrink: 0,
      borderRadius: 'var(--radius-md)',
      background: 'var(--gold-500)',
      color: 'var(--navy-950)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20
    }
  }, s.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-2xl)',
      color: 'var(--navy-900)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, s.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--ink-500)',
      marginTop: 2,
      maxWidth: 420
    }
  }, s.d))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-950)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px 22px',
      minHeight: 180,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(StepVisualV2, {
    step: active
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      gap: 8,
      marginTop: 24
    }
  }, STEPS.map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setActive(i),
    style: {
      width: active === i ? 30 : 10,
      height: 6,
      borderRadius: 999,
      border: 'none',
      padding: 0,
      background: active === i ? 'var(--gold-500)' : 'var(--ink-100)',
      cursor: 'pointer',
      transition: 'all .3s'
    }
  })))));
}
function ClientFace({
  c,
  i,
  back
}) {
  const accent = V2_ACCENTS[(i + (back ? 1 : 0)) % 4],
    tint = V2_TINTS[(i + (back ? 1 : 0)) % 4];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
      transform: back ? 'rotateY(180deg)' : 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      padding: '14px 16px',
      background: 'var(--white)',
      border: '1px solid var(--ink-100)',
      borderRadius: 'var(--radius-lg)',
      boxSizing: 'border-box',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 4,
      background: accent
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      overflow: 'hidden',
      border: '2px solid ' + accent
    }
  }, /*#__PURE__*/React.createElement(PortraitV2, {
    seed: c.av,
    size: 48
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -2,
      bottom: -2,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: accent,
      color: 'var(--white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 9,
      fontWeight: 700,
      border: '2px solid var(--white)'
    }
  }, "\u2713")), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 14,
      color: 'var(--navy-900)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-300)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, c.domain), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      display: 'inline-block',
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      fontWeight: 'var(--weight-medium)',
      color: accent,
      background: tint,
      padding: '1px 8px',
      borderRadius: 'var(--radius-pill)'
    }
  }, c.sector)));
}
function ClientFlipCard({
  card,
  i
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 250,
      height: 92,
      perspective: 1000,
      cursor: 'default'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      transformStyle: 'preserve-3d',
      animation: `flip-card 9s ${i * 0.7}s infinite`,
      animationPlayState: hover ? 'paused' : 'running',
      transition: 'transform .3s',
      filter: hover ? 'drop-shadow(0 10px 20px rgba(15,42,66,.14))' : 'none'
    }
  }, /*#__PURE__*/React.createElement(ClientFace, {
    c: card.front,
    i: i
  }), /*#__PURE__*/React.createElement(ClientFace, {
    c: card.back,
    i: i,
    back: true
  })));
}
function ClientFlipGridV2() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16,
      justifyContent: 'center'
    }
  }, CLIENT_CARDS.map((card, i) => /*#__PURE__*/React.createElement(ClientFlipCard, {
    key: i,
    card: card,
    i: i
  })));
}
function OfficeMapV2({
  contactChannels
} = {}) {
  const wrap = React.useRef(null);
  const mapRef = React.useRef(null);
  const [geo, setGeo] = React.useState(null);
  const [sel, setSel] = React.useState(0);
  const [hoverMetro, setHoverMetro] = React.useState(null);
  const OFFICES = [{
    city: 'Kolkata',
    region: 'West Bengal 700039',
    addr: '38M/1, New Ballygunge Rd, Kasba',
    phone: '+91 7890594600',
    lnglat: [88.3639, 22.5726]
  }, {
    city: 'Bhagalpur',
    region: 'Bihar 812001',
    addr: 'Opp. Dr. R N Jha Clinic, Near Head Post Office',
    phone: '+91 7890594600',
    lnglat: [86.9842, 25.2445]
  }];
  const METROS = [{
    city: 'Delhi',
    lnglat: [77.209, 28.6139]
  }, {
    city: 'Mumbai',
    lnglat: [72.8777, 19.076]
  }, {
    city: 'Bengaluru',
    lnglat: [77.5946, 12.9716]
  }, {
    city: 'Chennai',
    lnglat: [80.2707, 13.0827]
  }, {
    city: 'Hyderabad',
    lnglat: [78.4867, 17.385]
  }, {
    city: 'Ahmedabad',
    lnglat: [72.5714, 23.0225]
  }, {
    city: 'Pune',
    lnglat: [73.8567, 18.5204]
  }, {
    city: 'Jaipur',
    lnglat: [75.7873, 26.9124]
  }];
  React.useEffect(() => {
    let cancelled = false;
    const w = wrap.current ? wrap.current.clientWidth : 620,
      h = 468;
    const arc = (a, b) => {
      const mx = (a[0] + b[0]) / 2,
        my = (a[1] + b[1]) / 2,
        dx = b[0] - a[0],
        dy = b[1] - a[1],
        nx = -dy,
        ny = dx,
        len = Math.hypot(nx, ny) || 1;
      const k = 0.22;
      return 'M' + a[0] + ' ' + a[1] + ' Q' + (mx + nx / len * len * k) + ' ' + (my + ny / len * len * k) + ' ' + b[0] + ' ' + b[1];
    };
    const fallback = () => {
      const offices = OFFICES.map((o, i) => ({
        ...o,
        x: w * (0.52 + i * 0.06),
        y: h * (0.42 + i * 0.12)
      }));
      setGeo({
        offices,
        metros: [],
        arcs: []
      });
    };
    if (!window.d3 || !window.topojson) {
      fallback();
      return;
    }
    window.d3.json(window.__resources && window.__resources.atlas || 'https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json').then(topo => {
      if (cancelled) return;
      const d3 = window.d3,
        topojson = window.topojson;
      const countries = topojson.feature(topo, topo.objects.countries);
      const india = countries.features.find(f => String(f.id) === '356');
      if (!india) {
        fallback();
        return;
      }
      const proj = d3.geoMercator().fitExtent([[46, 46], [w - 46, h - 46]], india);
      const path = d3.geoPath(proj);
      const others = countries.features.filter(f => String(f.id) !== '356');
      const svg = '<svg viewBox="0 0 ' + w + ' ' + h + '" width="' + w + '" height="' + h + '" style="display:block"><g>' + others.map(f => '<path d="' + (path(f) || '') + '" fill="rgba(15,42,66,0.04)" stroke="rgba(15,42,66,0.1)" stroke-width="0.5"/>').join('') + '</g><path d="' + (path(india) || '') + '" fill="rgba(239,168,46,0.16)" stroke="#EFA82E" stroke-width="1.4"/></svg>';
      if (mapRef.current) mapRef.current.innerHTML = svg;
      const offices = OFFICES.map(o => {
        const p = proj(o.lnglat);
        return {
          ...o,
          x: p[0],
          y: p[1]
        };
      });
      const metros = METROS.map(m => {
        const p = proj(m.lnglat);
        return {
          ...m,
          x: p[0],
          y: p[1]
        };
      });
      const src = offices[0];
      const arcs = metros.map(m => arc([src.x, src.y], [m.x, m.y]));
      setGeo({
        offices,
        metros,
        arcs
      });
    }).catch(fallback);
    return () => {
      cancelled = true;
    };
  }, []);
  const offices = geo ? geo.offices : [];
  const cur = offices[sel];
  const mapsHref = cur ? 'https://www.google.com/maps/search/' + encodeURIComponent(cur.addr + ', ' + cur.region) : '#';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 16,
      alignItems: 'stretch',
      height: 470
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: wrap,
    style: {
      position: 'relative',
      height: '100%',
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: 'var(--white)',
      border: '1px solid var(--ink-100)',
      backgroundImage: 'radial-gradient(var(--navy-050) 1.2px,transparent 1.2px)',
      backgroundSize: '24px 24px',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: mapRef,
    style: {
      position: 'absolute',
      inset: 0
    }
  }), geo && /*#__PURE__*/React.createElement("svg", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 2
    },
    width: "100%",
    height: "100%"
  }, geo.arcs.map((d, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: "var(--navy-300)",
    strokeWidth: "1",
    strokeDasharray: "3 6",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "2.6",
    fill: "var(--gold-500)"
  }, /*#__PURE__*/React.createElement("animateMotion", {
    dur: 3.5 + i * 0.4 + 's',
    repeatCount: "indefinite",
    path: d
  })))), offices.length === 2 && /*#__PURE__*/React.createElement("line", {
    x1: offices[0].x,
    y1: offices[0].y,
    x2: offices[1].x,
    y2: offices[1].y,
    stroke: "var(--gold-500)",
    strokeWidth: "1.4",
    strokeDasharray: "4 5",
    opacity: "0.8"
  })), geo && geo.metros.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: m.city,
    onMouseEnter: () => setHoverMetro(i),
    onMouseLeave: () => setHoverMetro(null),
    style: {
      position: 'absolute',
      left: m.x,
      top: m.y,
      transform: 'translate(-50%,-50%)',
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--navy-400,#5b6b82)',
      cursor: 'default'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 11,
      transform: 'translateX(-50%)',
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      color: hoverMetro === i ? 'var(--navy-900)' : 'var(--ink-300)',
      whiteSpace: 'nowrap',
      transition: 'color .2s'
    }
  }, m.city))), offices.map((o, i) => /*#__PURE__*/React.createElement("div", {
    key: o.city,
    onClick: () => setSel(i),
    style: {
      position: 'absolute',
      left: o.x,
      top: o.y,
      transform: 'translate(-50%,-50%)',
      zIndex: sel === i ? 6 : 5,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      width: 18,
      height: 18,
      borderRadius: '50%',
      border: '2px solid var(--gold-500)',
      animation: 'pulse-ring 2s infinite'
    }
  }), sel === i && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      width: 58,
      height: 58,
      borderRadius: '50%',
      background: 'conic-gradient(from 0deg,transparent,rgba(239,168,46,.5))',
      animation: 'spin-slow 3s linear infinite',
      WebkitMaskImage: 'radial-gradient(circle,black 60%,transparent 61%)',
      maskImage: 'radial-gradient(circle,black 60%,transparent 61%)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: sel === i ? 22 : 16,
      height: sel === i ? 22 : 16,
      borderRadius: '50%',
      background: 'var(--gold-500)',
      border: '2px solid var(--white)',
      boxShadow: 'var(--shadow-md)',
      transition: 'all .2s',
      fontSize: 9,
      fontWeight: 700,
      color: 'var(--navy-950)'
    }
  }, sel === i ? '★' : ''), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      top: sel === i ? 26 : 20,
      transform: 'translateX(-50%)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 12,
      color: 'var(--navy-900)',
      whiteSpace: 'nowrap',
      background: 'var(--white)',
      padding: '2px 8px',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, o.city))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      top: 16,
      zIndex: 7,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      background: 'var(--white)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 13px',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--status-positive)',
      animation: 'pulse-dot 2s infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--navy-800)',
      letterSpacing: '.04em'
    }
  }, "Serving pan-India \xB7 20+ metros"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-xl)',
      background: 'var(--white)',
      border: '1px solid var(--ink-100)',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--shadow-md)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '20px 22px 18px',
      background: 'linear-gradient(135deg,var(--gold-400,#f5c04e),var(--gold-600,#d8901f))',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -30,
      right: -20,
      width: 120,
      height: 120,
      borderRadius: '50%',
      border: '18px solid rgba(255,255,255,.16)'
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "22",
    height: "22",
    fill: "var(--navy-950)",
    style: {
      position: 'absolute',
      right: 20,
      bottom: 16,
      opacity: .25
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'rgba(15,42,66,.14)',
      borderRadius: 'var(--radius-pill)',
      padding: '3px 10px',
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--navy-950)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--navy-950)',
      animation: 'pulse-dot 2s infinite'
    }
  }), "Open now")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-2xl)',
      color: 'var(--navy-950)',
      lineHeight: 1.1
    }
  }, "Visit or reach us"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'rgba(15,42,66,.7)',
      marginTop: 3
    }
  }, "2 home offices \xB7 delivery pan-India")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '16px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      overflowY: 'auto'
    }
  }, offices.map((o, i) => /*#__PURE__*/React.createElement("button", {
    key: o.city,
    onClick: () => setSel(i),
    style: {
      textAlign: 'left',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-lg)',
      border: '1.5px solid ' + (sel === i ? 'var(--gold-500)' : 'var(--ink-100)'),
      background: sel === i ? 'var(--navy-050)' : 'var(--white)',
      boxShadow: sel === i ? 'var(--shadow-sm)' : 'none',
      padding: '13px 15px',
      cursor: 'pointer',
      transition: 'all .25s var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 34,
      height: 34,
      flexShrink: 0,
      borderRadius: '50%',
      background: sel === i ? 'var(--gold-500)' : 'var(--navy-050)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all .25s'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: sel === i ? 'var(--navy-950)' : 'var(--navy-500,#5b6b82)'
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z"
  })), sel === i && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: -4,
      borderRadius: '50%',
      border: '2px solid var(--gold-400)',
      animation: 'pulse-ring 2s infinite'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      color: 'var(--navy-900)'
    }
  }, o.city), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      color: 'var(--ink-300)'
    }
  }, o.region)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 16,
      color: sel === i ? 'var(--gold-600)' : 'var(--ink-300)',
      transform: sel === i ? 'rotate(90deg)' : 'none',
      transition: 'transform .25s'
    }
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      maxHeight: sel === i ? 130 : 0,
      opacity: sel === i ? 1 : 0,
      transition: 'all .3s var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--ink-500)',
      lineHeight: 1.5,
      margin: '12px 0 10px'
    }
  }, o.addr), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, !contactChannels && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--navy-700)',
      background: 'var(--paper-alt)',
      padding: '6px 11px',
      borderRadius: 'var(--radius-pill)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u260E"), o.phone), /*#__PURE__*/React.createElement("a", {
    href: mapsHref,
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 11,
      color: 'var(--white)',
      background: 'var(--navy-900)',
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none'
    }
  }, "Directions \u2192")))))), contactChannels ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      borderTop: '1px solid var(--ink-100)'
    }
  }, contactChannels.map((c, ci) => /*#__PURE__*/React.createElement("a", {
    key: c.key,
    href: c.href,
    target: c.key === 'wa' ? '_blank' : undefined,
    rel: "noreferrer",
    onMouseEnter: e => e.currentTarget.style.background = 'var(--navy-050)',
    onMouseLeave: e => e.currentTarget.style.background = 'var(--white)',
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 7,
      padding: '15px 6px',
      textDecoration: 'none',
      borderLeft: ci ? '1px solid var(--ink-100)' : 'none',
      background: 'var(--white)',
      transition: 'background .15s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 11,
      background: c.accent,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "19",
    height: "19",
    fill: "#fff"
  }, c.icon)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9.5,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--navy-800)',
      fontWeight: 600
    }
  }, c.footLabel || c.label)))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      borderTop: '1px solid var(--ink-100)'
    }
  }, [['2', 'Offices'], ['20+', 'Metros'], ['All', 'States']].map((s, si) => /*#__PURE__*/React.createElement("div", {
    key: s[1],
    style: {
      textAlign: 'center',
      padding: '14px 0',
      borderLeft: si ? '1px solid var(--ink-100)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-xl)',
      color: 'var(--navy-900)'
    }
  }, s[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--ink-300)'
    }
  }, s[1]))))));
}
const ABOUT_CHECKS = [{
  icon: 'M9 12l2 2 4-4',
  t: 'Comprehensive Filings & Registrations'
}, {
  icon: 'M9 12l2 2 4-4',
  t: 'Dedicated Tax & Compliance Advisors'
}, {
  icon: 'M9 12l2 2 4-4',
  t: 'End-to-End Business Support'
}, {
  icon: 'M9 12l2 2 4-4',
  t: 'Transparent, Fixed Pricing'
}];
const ABOUT_STATS = [{
  n: '2017',
  l: 'Established'
}, {
  n: '500+',
  l: 'Businesses served'
}, {
  n: '4.9★',
  l: 'Google rating'
}];
function AboutSectionV2({
  go
}) {
  const [hovImg, setHovImg] = React.useState(false);
  const HL = ({
    c,
    children
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      color: c === 'g' ? 'var(--gold-600)' : 'var(--navy-700)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, children);
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      position: 'relative',
      background: 'var(--white)',
      padding: '100px 32px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(rgba(43,108,214,.13) 1px,transparent 1px)',
      backgroundSize: '26px 26px',
      WebkitMaskImage: 'radial-gradient(120% 90% at 88% 30%,black,transparent 70%)',
      maskImage: 'radial-gradient(120% 90% at 88% 30%,black,transparent 70%)',
      opacity: .6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -140,
      left: -120,
      width: 520,
      height: 520,
      borderRadius: '50%',
      background: 'radial-gradient(circle,rgba(239,168,46,.12),transparent 66%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.02fr .98fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EyebrowV2, null, "Who We Are"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-4xl)',
      color: 'var(--navy-900)',
      margin: '18px 0 22px',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 1.08
    }
  }, "About Income N Filing"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--ink-500)',
      lineHeight: 'var(--leading-lg)',
      margin: '0 0 16px',
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(HL, null, "Income N Filing"), " is your trusted partner for business compliance and tax advisory. Since ", /*#__PURE__*/React.createElement(HL, {
    c: "g"
  }, "2017"), ", we have helped businesses confidently navigate the complexities of regulatory compliance."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--ink-500)',
      lineHeight: 'var(--leading-lg)',
      margin: '0 0 16px',
      maxWidth: 520
    }
  }, "Our mission is to provide a ", /*#__PURE__*/React.createElement(HL, {
    c: "g"
  }, "single, seamless solution"), " for all your compliance, taxation, registrations, accounting, and legal needs \u2014 handled with precision and professionalism, so you can stay focused on growing your business."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--ink-500)',
      lineHeight: 'var(--leading-lg)',
      margin: '0 0 28px',
      maxWidth: 520
    }
  }, "From ", /*#__PURE__*/React.createElement(HL, null, "new startups"), " to ", /*#__PURE__*/React.createElement(HL, null, "established enterprises"), ", we deliver tailored services across incorporation, statutory registrations, income tax filing, GST compliance, and corporate audits."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      marginBottom: 30
    }
  }, ABOUT_CHECKS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '11px 13px',
      background: 'var(--gold-050)',
      border: '1px solid var(--gold-100,#f6e2b8)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: 'var(--gold-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "14",
    height: "14",
    fill: "none",
    stroke: "var(--navy-950)",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: c.icon
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 13.5,
      color: 'var(--navy-900)',
      lineHeight: 1.2
    }
  }, c.t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'linear-gradient(120deg,var(--navy-950),var(--navy-800,#1c3a5e))',
      borderRadius: 'var(--radius-lg)',
      padding: '26px 30px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -24,
      left: 18,
      fontFamily: 'Georgia,serif',
      fontSize: 120,
      lineHeight: 1,
      color: 'var(--gold-500)',
      opacity: .18
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 150,
      height: 150,
      background: 'radial-gradient(circle at 80% 20%,rgba(239,168,46,.22),transparent 62%)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-xl)',
      color: 'var(--gold-400)',
      margin: 0,
      lineHeight: 1.35
    }
  }, "When you get your business started with us, there is no looking back."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 2,
      background: 'var(--gold-500)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--navy-200,#b9c6da)'
    }
  }, "Anish \xB7 Founder")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 520
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 12,
      top: 24,
      bottom: 24,
      width: '74%',
      borderRadius: 'var(--radius-xl)',
      background: 'linear-gradient(150deg,var(--navy-050),#dbe6fb)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 210,
      height: 210,
      borderRadius: '50%',
      border: '2px dashed var(--gold-300,#f5cf82)',
      animation: 'spin-slow 40s linear infinite',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHovImg(true),
    onMouseLeave: () => setHovImg(false),
    style: {
      position: 'absolute',
      left: 24,
      top: 60,
      right: 40,
      bottom: 70,
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: hovImg ? '0 34px 60px rgba(15,42,66,.32)' : '0 24px 46px rgba(15,42,66,.24)',
      transform: hovImg ? 'rotate(0deg) scale(1.01)' : 'rotate(-2.4deg)',
      transition: 'transform .4s var(--ease-standard),box-shadow .4s',
      border: '6px solid var(--white)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.aboutPhoto || '',
    alt: "Our office",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 90,
      background: 'linear-gradient(transparent,rgba(15,42,66,.55))',
      pointerEvents: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 24,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--white)',
      borderRadius: 'var(--radius-pill)',
      padding: '8px 15px',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--status-positive)',
      animation: 'pulse-dot 2s infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.05em',
      color: 'var(--navy-800)'
    }
  }, "7+ years \xB7 pan-India")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      bottom: 6,
      display: 'flex',
      gap: 0,
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: '0 18px 40px rgba(15,42,66,.2)',
      overflow: 'hidden'
    }
  }, ABOUT_STATS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    style: {
      padding: '14px 18px',
      textAlign: 'center',
      borderLeft: i ? '1px solid var(--ink-100)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-2xl)',
      color: 'var(--navy-900)',
      lineHeight: 1
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10.5,
      color: 'var(--ink-500)',
      marginTop: 4,
      whiteSpace: 'nowrap'
    }
  }, s.l)))))));
}
function WhyIconV2({
  code,
  size = 26
}) {
  const p = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.9,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  const paths = {
    VER: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("path", {
      d: "M12 3l7 3v5c0 4.6-3.1 7.8-7 9-3.9-1.2-7-4.4-7-9V6z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 12l2.2 2.2L15 10.4"
    })),
    SEC: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "11",
      width: "14",
      height: "9",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 11V8a4 4 0 018 0v3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 15v2"
    })),
    CMP: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("path", {
      d: "M7 3h7l4 4v13.5a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5V3.5A.5.5 0 017 3z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 3v4h4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8.5 14l2 2 4-4"
    })),
    YRS: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "9",
      r: "5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.2 13.4L8 21l4-2.4L16 21l-1.2-7.6"
    })),
    PAN: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("rect", {
      x: "6",
      y: "4",
      width: "12",
      height: "17",
      rx: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 21h12"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.5 8h1M13.5 8h1M9.5 12h1M13.5 12h1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.5 21v-3h3v3"
    })),
    '500': /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "9",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 20c0-3 2.2-5 5-5s5 2 5 5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.5 7.5a3 3 0 010 5.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 15c2.4.3 4 2.3 4 5"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: size,
    height: size
  }, paths[code] || paths.VER);
}
function WhyCardV2({
  f,
  i
}) {
  const [h, setH] = React.useState(false);
  const [pos, setPos] = React.useState({
    x: 50,
    y: 0
  });
  const onMove = e => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({
      x: (e.clientX - r.left) / r.width * 100,
      y: (e.clientY - r.top) / r.height * 100
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    onMouseMove: onMove,
    style: {
      position: 'relative',
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      padding: '34px 26px 30px',
      border: '1px solid ' + (h ? 'var(--gold-300,#f5cf82)' : 'var(--ink-100)'),
      overflow: 'hidden',
      textAlign: 'center',
      cursor: 'default',
      transform: h ? 'translateY(-6px)' : 'none',
      boxShadow: h ? '0 24px 46px rgba(15,42,66,.14)' : 'var(--shadow-sm)',
      transition: 'transform .35s var(--ease-standard),box-shadow .35s,border-color .35s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: h ? 1 : 0,
      transition: 'opacity .35s',
      background: `radial-gradient(280px circle at ${pos.x}% ${pos.y}%,rgba(239,168,46,.12),transparent 60%)`,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: 'linear-gradient(90deg,var(--gold-400),var(--gold-600,#d8901f))',
      transform: h ? 'scaleX(1)' : 'scaleX(0)',
      transformOrigin: 'left',
      transition: 'transform .4s var(--ease-standard)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 14,
      right: 18,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      color: h ? 'var(--gold-500)' : 'var(--ink-100)',
      transition: 'color .35s'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 58,
      height: 58,
      margin: '0 auto 18px',
      borderRadius: '50%',
      background: h ? 'var(--gold-500)' : 'var(--navy-950)',
      color: h ? 'var(--navy-950)' : 'var(--gold-400)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .35s,color .35s',
      transform: h ? 'rotate(-6deg) scale(1.06)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(WhyIconV2, {
    code: f.icon
  }), h && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: -5,
      borderRadius: '50%',
      border: '2px solid var(--gold-400)',
      animation: 'pulse-ring 1.8s infinite'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-lg)',
      color: 'var(--navy-900)',
      marginBottom: 8
    }
  }, f.title), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-500)',
      lineHeight: 'var(--leading-sm)',
      maxWidth: 260,
      margin: '0 auto'
    }
  }, f.description));
}
function HomeV2({
  go
}) {
  const {
    Button,
    Accordion,
    OfficeCard,
    Footer
  } = window.IncomeNFilingComplianceOSDesignSystem_6fdb9e;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement(ChatWidgetV2, {
    go: go
  }), /*#__PURE__*/React.createElement(NavBarHomeV2, {
    go: go,
    active: "home"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 60,
      alignItems: 'center',
      padding: '72px 32px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EyebrowV2, null, "All Systems Compliant \xB7 Since 2017"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-6xl)',
      color: 'var(--navy-900)',
      margin: '20px 0 20px',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 1.06
    }
  }, "Business compliance,", /*#__PURE__*/React.createElement("br", null), "made ", /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, "effortless", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 220 18",
    style: {
      position: 'absolute',
      left: 0,
      bottom: -10,
      width: '100%',
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 13 C60 2, 160 2, 218 12",
    stroke: "var(--gold-500)",
    strokeWidth: "6",
    fill: "none",
    strokeLinecap: "round"
  }))), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-lg)',
      color: 'var(--ink-500)',
      maxWidth: 460,
      lineHeight: 'var(--leading-lg)',
      marginBottom: 32
    }
  }, "A dedicated team handling taxation, GST, incorporation, and corporate law \u2014 so your business stays compliant without the busywork."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(HeroCTAButtonV2, {
    variant: "primary",
    onClick: () => go('contact')
  }, "Book Free Consultation"), /*#__PURE__*/React.createElement(HeroCTAButtonV2, {
    variant: "ghost",
    onClick: () => go('services')
  }, "Explore Services")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-3xl)',
      color: 'var(--navy-900)'
    }
  }, /*#__PURE__*/React.createElement(CountUpV2, {
    to: 500,
    suffix: "+"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--ink-500)'
    }
  }, "Businesses served")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-3xl)',
      color: 'var(--navy-900)'
    }
  }, /*#__PURE__*/React.createElement(CountUpV2, {
    to: 7,
    suffix: "+"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--ink-500)'
    }
  }, "Years of excellence")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-3xl)',
      color: 'var(--navy-900)'
    }
  }, /*#__PURE__*/React.createElement(CountUpV2, {
    to: 94
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--ink-500)'
    }
  }, "Services live")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 560,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '2%',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 520,
      height: 520,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 45% 45%,rgba(239,168,46,.18),rgba(43,108,214,.10) 52%,transparent 72%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '-4%',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 500,
      height: 500,
      borderRadius: '50%',
      border: '2px dashed var(--gold-300,#f5cf82)',
      animation: 'spin-slow 46s linear infinite',
      opacity: .7
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '6%',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 360,
      height: 360,
      borderRadius: '50%',
      border: '1.5px solid rgba(43,108,214,.2)',
      animation: 'spin-slow 32s linear infinite reverse'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '-4%',
      bottom: 0,
      width: '52%',
      height: '98%',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.heroChar || '',
    alt: "Advisor",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      objectPosition: 'bottom center'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: '8%',
      zIndex: 4,
      width: '64%',
      minWidth: 290
    }
  }, /*#__PURE__*/React.createElement(ServiceFinderV2, {
    onSelect: () => go('services')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '2%',
      right: '6%',
      zIndex: 5,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'var(--white)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 14px',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--status-positive)',
      animation: 'pulse-dot 2s infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--navy-800)'
    }
  }, "94 services live")), [{
    icon: 'GST',
    left: '34%',
    top: '-1%'
  }, {
    icon: 'ITR',
    right: '-3%',
    top: '20%'
  }, {
    icon: 'INC',
    left: '26%',
    bottom: '6%'
  }, {
    icon: 'ROC',
    right: '3%',
    bottom: '4%'
  }].map((b, i) => {
    const ac = V2_ACCENTS[i % 4];
    return /*#__PURE__*/React.createElement("div", {
      key: b.icon,
      style: {
        position: 'absolute',
        left: b.left,
        right: b.right,
        top: b.top,
        bottom: b.bottom,
        zIndex: 5,
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: 'var(--white)',
        boxShadow: 'var(--shadow-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: '.04em',
        color: ac,
        border: `2px solid ${ac}`,
        animation: 'float-y 5s ease-in-out infinite',
        animationDelay: `${i * .35}s`
      }
    }, b.icon);
  })))), /*#__PURE__*/React.createElement(AboutSectionV2, {
    go: go
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '90px 32px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 32,
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EyebrowV2, null, "Modules"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-3xl)',
      color: 'var(--navy-900)',
      margin: '16px 0 0'
    }
  }, "Service Categories")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go('services')
  }, "View all 94 services")), /*#__PURE__*/React.createElement(CategoryExplorerV2, {
    categories: HOME_CATEGORIES,
    onSelect: () => go('services')
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--paper-alt)',
      padding: '90px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeadV2, {
    eyebrow: "Simple Process",
    title: "How It Works",
    sub: "Three steps between not compliant and fully covered \u2014 hover or tap to explore."
  }), /*#__PURE__*/React.createElement(StepperV2, null))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '86px 32px 96px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(rgba(43,108,214,.11) 1px,transparent 1px)',
      backgroundSize: '28px 28px',
      WebkitMaskImage: 'radial-gradient(120% 80% at 50% 0%,black,transparent 72%)',
      maskImage: 'radial-gradient(120% 80% at 50% 0%,black,transparent 72%)',
      opacity: .55
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeadV2, {
    eyebrow: "Why Us",
    title: "Why Businesses Choose Us",
    sub: "Professional, secure, and dependable compliance services \u2014 hover any card to explore."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, WHY_CHOOSE_US.map((f, i) => /*#__PURE__*/React.createElement(WhyCardV2, {
    key: f.title,
    f: f,
    i: i
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 32px 90px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeadV2, {
    eyebrow: "And Many More",
    title: "Our Clients",
    sub: "As a client, it matters who handles your compliance \u2014 here's who trusts us. Watch the cards flip, hover to hold."
  }), /*#__PURE__*/React.createElement(ClientFlipGridV2, null))), /*#__PURE__*/React.createElement("section", {
    id: "testimonials",
    style: {
      background: 'var(--navy-050)',
      padding: '90px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeadV2, {
    eyebrow: "Client Stories",
    title: "What Our Clients Say",
    sub: "\u2605\u2605\u2605\u2605\u2605 Rated 4.9/5 on Google Reviews \u2014 hover to pause and read."
  })), /*#__PURE__*/React.createElement(ReviewMarqueeV2, null)), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '90px 32px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeadV2, {
    eyebrow: "Pan-India Compliance Services",
    title: "Our Office Locations",
    sub: "Two home offices in Kolkata & Bhagalpur, delivering to 20+ metros \u2014 click a pin to explore."
  }), /*#__PURE__*/React.createElement(OfficeMapV2, null)), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--white)',
      padding: '90px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeadV2, {
    eyebrow: "Quick Answers",
    title: "Frequently Asked Questions"
  }), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpenIndex: 0,
    items: FAQ
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px 32px 90px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      minHeight: 340,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      background: 'linear-gradient(115deg,var(--navy-050) 46%,#dbe6fb)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '22%',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 520,
      height: 520,
      borderRadius: '50%',
      border: '60px solid rgba(43,108,214,.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '52px 20px 52px 56px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-4xl)',
      color: 'var(--navy-900)',
      margin: 0,
      lineHeight: 1.12,
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "File ITR in Minutes", /*#__PURE__*/React.createElement("br", null), "with ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--navy-600,#2b6cd6)'
    }
  }, "100% Accuracy")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-lg)',
      color: 'var(--ink-500)',
      margin: 0
    }
  }, "Maximum Tax Refund, Guaranteed."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroCTAButtonV2, {
    variant: "primary",
    onClick: () => go('contact')
  }, "Start Filing Now")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      padding: '12px 18px',
      boxShadow: 'var(--shadow-sm)',
      maxWidth: 400
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
      paddingRight: 14,
      borderRight: '1px solid var(--ink-100)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 'var(--radius-sm,6px)',
      background: 'var(--navy-050)',
      color: 'var(--navy-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 13
    }
  }, "\uD83D\uDEE1"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 8,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--navy-700)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, "Notice", /*#__PURE__*/React.createElement("br", null), "Protect")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--ink-500)',
      lineHeight: 1.5
    }
  }, "Received a notice? ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--navy-900)'
    }
  }, "We Handle It Free."), /*#__PURE__*/React.createElement("br", null), "Computation Error? ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--navy-900)'
    }
  }, "100% Refund.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 340
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.itrChar || '',
    alt: "ITR refund",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center'
    }
  })))), /*#__PURE__*/React.createElement(ContactSectionV2, {
    go: go
  }), /*#__PURE__*/React.createElement(FooterV2, {
    go: go
  }));
}
Object.assign(window, {
  HomeV2,
  FooterV2,
  OfficeMapV2
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeV2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LiveChat.jsx
try { (() => {
function LiveChat({
  go
}) {
  const {
    NavBar,
    Footer,
    CommandButton
  } = window.IncomeNFilingComplianceOSDesignSystem_6fdb9e;
  const LOG = [{
    who: 'sys',
    text: 'session opened · route: whatsapp'
  }, {
    who: 'bot',
    text: 'Hi — what do you need help with today?'
  }, {
    who: 'user',
    text: 'need gst registration for a new llp'
  }, {
    who: 'bot',
    text: 'gst-registration → status: available. Continue on WhatsApp to book a slot with an advisor.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    logoSrc: "../../assets/logo.jpg",
    items: [{
      label: 'Home',
      href: '#home'
    }, {
      label: 'About',
      href: '#about'
    }, {
      label: 'Services',
      href: '#services'
    }, {
      label: 'Live Chat',
      href: '#chat',
      active: true
    }, {
      label: 'Contact',
      href: '#contact'
    }]
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '48px 24px',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      width: '100%',
      textAlign: 'center',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-3xl)',
      color: 'var(--navy-900)',
      margin: '0 0 8px'
    }
  }, "Live Chat"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-500)',
      margin: 0
    }
  }, "A terminal front-end to our team \u2014 every session routes to a real advisor on WhatsApp.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 640,
      background: 'var(--term-bg)',
      border: '1px solid var(--term-border)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-terminal)',
      fontFamily: 'var(--font-mono)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '10px 14px',
      borderBottom: '1px solid var(--term-border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--term-red)',
      opacity: .6
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--term-amber)',
      opacity: .6
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--term-green)',
      opacity: .6
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 10,
      fontSize: 'var(--text-xs)',
      color: 'var(--term-fg-dim)'
    }
  }, "chat://income-n-filing")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      minHeight: 220
    }
  }, LOG.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: 'var(--text-sm)',
      color: m.who === 'sys' ? 'var(--term-fg-dim)' : m.who === 'user' ? 'var(--term-amber)' : 'var(--term-fg)'
    }
  }, m.who === 'sys' ? '// ' : m.who === 'user' ? 'you $ ' : 'infn $ ', m.text)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--term-green)'
    }
  }, "_", /*#__PURE__*/React.createElement("span", {
    style: {
      animation: 'blink-cursor 1s step-end infinite'
    }
  }, "_"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--term-border)',
      padding: '14px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--term-fg-dim)'
    }
  }, "not a staffed live backend \u2014 continues on WhatsApp"), /*#__PURE__*/React.createElement(CommandButton, {
    onClick: () => window.open('https://wa.me/917890594600', '_blank')
  }, "continue on whatsapp")))), /*#__PURE__*/React.createElement(Footer, {
    tagline: "Simplifying Compliance. Empowering Business.",
    columns: [{
      title: 'Quick Links',
      links: [{
        label: 'Home',
        href: '#home'
      }, {
        label: 'Services',
        href: '#services'
      }, {
        label: 'Contact',
        href: '#contact'
      }]
    }],
    contact: {
      phone: '+91 7890594600',
      email: 'support@incomenfiling.com',
      region: 'Pan-India Services'
    }
  }));
}
Object.assign(window, {
  LiveChat
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LiveChat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LiveChatV2.jsx
try { (() => {
function NavBarV2({
  go,
  active
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const items = [{
    k: 'home',
    label: 'Home'
  }, {
    k: 'about',
    label: 'About'
  }, {
    k: 'services',
    label: 'Services'
  }, {
    k: 'testimonials',
    label: 'Testimonials'
  }, {
    k: 'chat',
    label: 'Live Chat'
  }, {
    k: 'contact',
    label: 'Contact'
  }];
  const [bookHover, setBookHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 60,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      alignItems: 'center',
      gap: 24,
      padding: '16px 32px',
      background: scrolled ? 'rgba(255,255,255,.62)' : 'var(--white)',
      backdropFilter: scrolled ? 'saturate(180%) blur(18px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(18px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,.55)' : '1px solid var(--ink-100)',
      boxShadow: scrolled ? '0 10px 34px rgba(11,31,58,.13)' : 'none',
      fontFamily: 'var(--font-body)',
      transition: 'background .28s ease,box-shadow .28s ease,backdrop-filter .28s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logo || "../../assets/logo.jpg",
    alt: "",
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      color: 'var(--navy-900)',
      lineHeight: 1.2
    }
  }, "Income N ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-600)'
    }
  }, "Filing")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-500)',
      lineHeight: 1.2
    }
  }, "Established 2017"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      justifyContent: 'center'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.k,
    href: `#${it.k}`,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: active === it.k ? 'var(--gold-600)' : 'var(--navy-800)',
      textDecoration: 'none',
      borderBottom: active === it.k ? '2px solid var(--gold-600)' : '2px solid transparent',
      paddingBottom: 4,
      lineHeight: 1.2
    }
  }, it.label))), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('contact'),
    onMouseEnter: () => setBookHover(true),
    onMouseLeave: () => setBookHover(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 13,
      padding: '11px 22px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: 'var(--gold-500)',
      color: 'var(--navy-950)',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transform: bookHover ? 'translateY(-2px)' : 'none',
      boxShadow: bookHover ? 'var(--shadow-md)' : 'none',
      transition: 'all .15s'
    }
  }, "Book Free Consultation"));
}
const WA = 'https://wa.me/917890594600';
const WA_BG = '#e5ddd5',
  WA_HEAD = '#075e54',
  WA_TEAL = '#128c7e',
  WA_OUT = '#dcf8c6',
  WA_TICK = '#34b7f1';
const KB = [{
  id: 'gst',
  title: 'GST Registration & Returns',
  emoji: '🧾',
  kw: ['gst', 'goods and service', 'gstr', 'return', 'refund', 'e-way', 'einvoice', 'e-invoice', 'itc', 'input tax'],
  reply: 'Sure! 🧾 We handle everything GST — new registration, monthly GSTR-1 & 3B, annual returns, reconciliation and refunds. What kind of business is it?'
}, {
  id: 'itr',
  title: 'Income Tax / ITR Filing',
  emoji: '💰',
  kw: ['itr', 'income tax', 'tax return', 'file tax', 'salary', 'capital gain', 'tds', 'tcs', 'form 16', 'advance tax'],
  reply: 'Happy to help you file! 💰 We do all ITR types — salaried, capital gains, business and presumptive — plus TDS. What’s your main income source?'
}, {
  id: 'inc',
  title: 'Company / LLP Incorporation',
  emoji: '🏢',
  kw: ['company', 'incorporat', 'register a', 'pvt ltd', 'private limited', 'llp', 'opc', 'startup', 'partnership', 'proprietor', 'section 8'],
  reply: 'Exciting! 🏢 We register Pvt Ltd, LLP, OPC and more — with PAN, TAN, DSC and GST all set up for you. Which type were you thinking of?'
}, {
  id: 'roc',
  title: 'ROC & Corporate Compliance',
  emoji: '📋',
  kw: ['roc', 'annual return', 'mgt', 'aoc', 'director', 'din', 'kyc', 'share transfer', 'board resolution', 'auditor'],
  reply: 'We’ve got your ROC compliance covered 📋 — annual returns (MGT-7, AOC-4), director changes, DIR-3 KYC and more. What’s coming up for you?'
}, {
  id: 'acc',
  title: 'Accounting & Bookkeeping',
  emoji: '📊',
  kw: ['account', 'bookkeep', 'payroll', 'mis', 'ledger', 'balance sheet', 'reconcil', 'cfo', 'books'],
  reply: 'Absolutely 📊 — monthly bookkeeping, payroll, MIS reports and audit support, even virtual CFO. Roughly how many transactions a month?'
}, {
  id: 'lic',
  title: 'Licenses & Registrations',
  emoji: '📜',
  kw: ['license', 'licence', 'msme', 'udyam', 'fssai', 'iec', 'import export', 'trade license', 'pf', 'esi', 'shop'],
  reply: 'Yes! 📜 MSME/Udyam, FSSAI, IEC, PF/ESI, trade and shop licenses — all available. Which one do you need?'
}, {
  id: 'notice',
  title: 'Tax Notices & Advisory',
  emoji: '🛡️',
  kw: ['notice', 'scrutiny', 'assessment', 'appeal', 'advisory', 'nri', 'penalty', 'defective', 'demand'],
  reply: 'Don’t worry — we handle this every day 🛡️. Income-tax & GST notices, scrutiny, appeals and NRI advisory. Do you have the notice with you?'
}];
function findKB(t) {
  const s = t.toLowerCase();
  return KB.find(k => k.kw.some(w => s.includes(w)));
}
function botReply(text) {
  const s = text.toLowerCase().trim();
  if (/^(hi|hey|hello|good (morning|evening|afternoon)|namaste|hii?|start)\b/.test(s) || s === '') return {
    text: 'Hello! 👋 Welcome to Income N Filing. How can we help you today? Just tap a topic or type your question 😊',
    chips: ['GST registration', 'File my ITR', 'Start a company', 'I got a tax notice']
  };
  if (/(price|cost|fee|charge|quote|how much|rate|kitna|kitne)/.test(s)) return {
    text: 'Great question! 😊 We don’t have fixed prices — every case is different, so we scope it on a free call and you only pay for what you need. Shall I set that up?',
    wa: true,
    chips: ['Yes, book a free call', 'See all services']
  };
  if (/(thank|thanks|thx|great|ok|okay|cool|got it|nice|good)/.test(s)) return {
    text: 'You’re most welcome! 🙏 Whenever you’re ready, tap the green button and our advisor will continue with you on WhatsApp.',
    wa: true
  };
  if (/(human|advisor|agent|person|talk to|call|whatsapp|expert)/.test(s)) return {
    text: 'Of course! 👩‍💼 Our advisors usually reply within a few working hours. Let me connect you on WhatsApp.',
    wa: true,
    chips: ['Chat on WhatsApp']
  };
  const kb = findKB(s);
  if (kb) return {
    text: kb.reply,
    service: kb,
    wa: true,
    chips: ['Book a free call', 'Ask about something else']
  };
  return {
    text: 'Got it 👍 We help with GST, income tax, starting a company, accounting, licenses and tax notices. Pick one below or tell me in your own words!',
    chips: ['GST registration', 'File my ITR', 'Start a company', 'Accounting help', 'Tax notice']
  };
}
function now() {
  const d = new Date();
  let h = d.getHours(),
    m = d.getMinutes();
  const ap = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${h}:${String(m).padStart(2, '0')} ${ap}`;
}
const TILES = [{
  emoji: '🧾',
  title: 'GST Registration & Returns',
  sub: 'New GSTIN, GSTR-1 & 3B, refunds',
  send: 'GST registration'
}, {
  emoji: '💰',
  title: 'Income Tax / ITR Filing',
  sub: 'Salaried, capital gains, business',
  send: 'File my ITR'
}, {
  emoji: '🏢',
  title: 'Start a Company',
  sub: 'Pvt Ltd, LLP, OPC — fully set up',
  send: 'Start a company'
}, {
  emoji: '🛡️',
  title: 'I Got a Tax Notice',
  sub: 'Scrutiny, appeals, advisory',
  send: 'I got a tax notice'
}];
function LiveChatV2({
  go
}) {
  const {
    Footer
  } = window.IncomeNFilingComplianceOSDesignSystem_6fdb9e;
  const [msgs, setMsgs] = React.useState([{
    who: 'bot',
    text: 'Hi, I’m Ira — your compliance concierge. 👋 Tell me what you’re working on and I’ll point you to the right expert. Pick a topic to begin, or just type your question below.',
    tiles: true,
    t: now()
  }]);
  const [typing, setTyping] = React.useState(false);
  const [val, setVal] = React.useState('');
  const scrollRef = React.useRef(null);
  const timers = React.useRef([]);
  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [msgs, typing]);
  React.useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const send = raw => {
    const text = (raw ?? val).trim();
    if (!text) return;
    setVal('');
    setMsgs(m => [...m, {
      who: 'user',
      text,
      t: now()
    }]);
    setTyping(true);
    const reply = botReply(text);
    const tm = setTimeout(() => {
      setTyping(false);
      setMsgs(m => [...m, {
        who: 'bot',
        ...reply,
        t: now()
      }]);
    }, 900 + Math.min(text.length * 16, 800));
    timers.current.push(tm);
  };
  const inputFocus = React.useRef(false);
  const [, force] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-050)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: WA,
    target: "_blank",
    rel: "noreferrer",
    style: {
      position: 'fixed',
      bottom: 26,
      right: 26,
      width: 58,
      height: 58,
      borderRadius: '50%',
      background: 'var(--whatsapp-green)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-lg)',
      zIndex: 80,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      border: '2px solid var(--whatsapp-green)',
      animation: 'pulse-ring 2s infinite'
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "30",
    height: "30",
    fill: "var(--white)",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.16c-.24.68-1.42 1.32-1.95 1.37-.5.05-.98.24-3.3-.69-2.78-1.1-4.55-3.94-4.69-4.13-.14-.19-1.13-1.5-1.13-2.86 0-1.36.71-2.03.96-2.31.24-.27.53-.34.71-.34.18 0 .35 0 .51.01.16.01.39-.06.6.46.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.17.28.75 1.24 1.61 2.01 1.11.99 2.05 1.3 2.33 1.44.28.14.45.12.61-.07.16-.19.7-.82.89-1.1.19-.28.37-.23.62-.14.25.09 1.61.76 1.89.9.28.14.46.21.53.32.07.11.07.65-.17 1.33z"
  }))), /*#__PURE__*/React.createElement(NavBarV2, {
    go: go,
    active: "chat"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      flex: 1,
      padding: '44px 24px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 15px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--white)',
      border: '1px solid var(--ink-100)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--navy-700)',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--status-positive)',
      animation: 'pulse-dot 2s infinite'
    }
  }), "Advisors online \xB7 replies in minutes"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-4xl)',
      color: 'var(--navy-900)',
      margin: '0 0 8px',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "Meet Ira, your compliance concierge"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--ink-500)',
      margin: '0 auto',
      maxWidth: 460
    }
  }, "Ask anything about GST, tax, company setup or notices. Ira finds the right service in seconds \u2014 then a real advisor takes over.")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 22,
      overflow: 'hidden',
      boxShadow: '0 30px 70px rgba(6,18,36,.32)',
      display: 'flex',
      flexDirection: 'column',
      height: 620,
      border: '1px solid rgba(255,255,255,.5)',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '18px 20px',
      background: 'linear-gradient(135deg,var(--gold-400) 0%,var(--gold-500) 58%,#DA9A1E 100%)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(130% 150% at 88% -30%,rgba(255,255,255,.5),transparent 55%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -40,
      left: -30,
      width: 190,
      height: 190,
      borderRadius: '50%',
      background: 'radial-gradient(circle,rgba(11,31,58,.09),transparent 70%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '52%',
      background: 'linear-gradient(180deg,rgba(255,255,255,.28),transparent)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 50,
      height: 50
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: -4,
      borderRadius: '50%',
      border: '2px solid rgba(11,31,58,.32)',
      animation: 'pulse-ring 2.6s infinite'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logo || "../../assets/logo.jpg",
    alt: "",
    style: {
      width: 50,
      height: 50,
      borderRadius: '50%',
      border: '2.5px solid rgba(11,31,58,.5)',
      boxShadow: '0 4px 12px rgba(11,31,58,.22)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: 13,
      height: 13,
      borderRadius: '50%',
      background: 'var(--status-positive)',
      border: '2px solid var(--gold-500)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 18,
      color: 'var(--navy-950)',
      letterSpacing: '.01em'
    }
  }, "Ira"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9.5,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--navy-900)',
      background: 'rgba(11,31,58,.13)',
      padding: '3px 9px',
      borderRadius: 'var(--radius-pill)'
    }
  }, "\u2726 Concierge")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'var(--navy-800)',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 2
    }
  }, typing ? 'typing…' : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--status-positive)',
      display: 'inline-block'
    }
  }), "Online \xB7 replies in minutes"))), /*#__PURE__*/React.createElement("a", {
    href: WA,
    target: "_blank",
    rel: "noreferrer",
    title: "Talk on WhatsApp",
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--whatsapp-green)',
      border: '1.5px solid rgba(255,255,255,.55)',
      textDecoration: 'none',
      boxShadow: '0 4px 12px rgba(37,211,102,.45)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "20",
    height: "20",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.16c-.24.68-1.42 1.32-1.95 1.37-.5.05-.98.24-3.3-.69-2.78-1.1-4.55-3.94-4.69-4.13-.14-.19-1.13-1.5-1.13-2.86 0-1.36.71-2.03.96-2.31.24-.27.53-.34.71-.34.18 0 .35 0 .51.01.16.01.39-.06.6.46.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.17.28.75 1.24 1.61 2.01 1.11.99 2.05 1.3 2.33 1.44.28.14.45.12.61-.07.16-.19.7-.82.89-1.1.19-.28.37-.23.62-.14.25.09 1.61.76 1.89.9.28.14.46.21.53.32.07.11.07.65-.17 1.33z"
  })))), /*#__PURE__*/React.createElement("div", {
    ref: scrollRef,
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '20px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      background: 'var(--navy-050)',
      backgroundImage: 'radial-gradient(rgba(11,31,58,.04) 1.5px,transparent 1.5px)',
      backgroundSize: '22px 22px'
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement(Bubble, {
    key: i,
    m: m,
    onChip: send
  })), typing && /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'flex-start',
      display: 'flex',
      alignItems: 'flex-end',
      gap: 9,
      animation: 'fade-in-up .3s var(--ease-standard) both'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logo || "../../assets/logo.jpg",
    alt: "",
    style: {
      flexShrink: 0,
      width: 30,
      height: 30,
      borderRadius: '50%',
      border: '1.5px solid var(--gold-500)',
      boxShadow: '0 2px 6px rgba(11,31,58,.12)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      background: '#fff',
      borderRadius: '16px 16px 16px 4px',
      padding: '15px 17px',
      boxShadow: '0 4px 16px rgba(11,31,58,.10)',
      border: '1px solid var(--ink-100)'
    }
  }, [0, 1, 2].map(d => /*#__PURE__*/React.createElement("span", {
    key: d,
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'linear-gradient(135deg,var(--gold-400),var(--gold-600))',
      animation: `typing-bounce 1.1s infinite ${d * .16}s`
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '14px 16px',
      background: 'var(--white)',
      borderTop: '1px solid var(--ink-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--white)',
      borderRadius: 'var(--radius-pill)',
      padding: '12px 18px',
      border: '1.5px solid ' + (inputFocus.current ? 'var(--gold-500)' : 'var(--ink-100)'),
      boxShadow: inputFocus.current ? '0 0 0 4px rgba(212,167,71,.16),0 2px 8px rgba(11,31,58,.05)' : 'inset 0 1px 3px rgba(11,31,58,.05)',
      transition: 'border-color .18s,box-shadow .18s'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "19",
    height: "19",
    fill: "none",
    stroke: "var(--ink-300)",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21.44 11.05l-9.19 9.19a5 5 0 01-7.07-7.07l9.19-9.19a3.5 3.5 0 014.95 4.95l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"
  })), /*#__PURE__*/React.createElement("input", {
    value: val,
    onChange: e => setVal(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') send();
    },
    onFocus: () => {
      inputFocus.current = true;
      force(x => x + 1);
    },
    onBlur: () => {
      inputFocus.current = false;
      force(x => x + 1);
    },
    placeholder: "Type your question to Ira\u2026",
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      color: 'var(--navy-900)'
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => send(),
    title: "Send",
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)';
      e.currentTarget.style.boxShadow = '0 8px 22px rgba(212,167,71,.5)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = '0 4px 14px rgba(212,167,71,.42)';
    },
    style: {
      flexShrink: 0,
      width: 48,
      height: 48,
      borderRadius: 15,
      border: 'none',
      background: 'linear-gradient(135deg,var(--gold-400),var(--gold-500))',
      color: 'var(--navy-950)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 14px rgba(212,167,71,.42)',
      transition: 'transform .18s var(--ease-standard),box-shadow .18s'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "21",
    height: "21",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 2L11 13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 2l-7 20-4-9-9-4 20-7z"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--ink-300)',
      marginTop: 16
    }
  }, "Guided by Ira \xB7 a real advisor continues with you on WhatsApp"))), React.createElement(window.FooterV2, {
    go
  }));
}
function Bubble({
  m,
  onChip
}) {
  const isUser = m.who === 'user';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: isUser ? 'flex-end' : 'flex-start',
      gap: 9,
      animation: 'fade-in-up .32s var(--ease-standard) both',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 9,
      maxWidth: '86%',
      flexDirection: isUser ? 'row-reverse' : 'row'
    }
  }, !isUser && /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logo || "../../assets/logo.jpg",
    alt: "",
    style: {
      flexShrink: 0,
      width: 30,
      height: 30,
      borderRadius: '50%',
      border: '1.5px solid var(--gold-500)',
      boxShadow: '0 2px 6px rgba(11,31,58,.12)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: isUser ? 'linear-gradient(135deg,var(--navy-800),var(--navy-900))' : 'var(--white)',
      borderRadius: isUser ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
      padding: '11px 15px 8px',
      boxShadow: isUser ? '0 4px 14px rgba(11,31,58,.22)' : '0 2px 12px rgba(11,31,58,.08)',
      border: isUser ? 'none' : '1px solid var(--ink-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.5,
      color: isUser ? 'rgba(255,255,255,.96)' : 'var(--navy-900)'
    }
  }, m.text), m.service && /*#__PURE__*/React.createElement("a", {
    href: WA,
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      textDecoration: 'none',
      marginTop: 10,
      background: 'linear-gradient(135deg,var(--navy-050),var(--white))',
      border: '1px solid var(--gold-200)',
      borderRadius: 12,
      padding: '11px 13px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 40,
      height: 40,
      borderRadius: 10,
      background: 'linear-gradient(135deg,var(--navy-900),var(--navy-700))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20
    }
  }, m.service.emoji), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--gold-600)'
    }
  }, "Recommended for you"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 14,
      color: 'var(--navy-900)'
    }
  }, m.service.title)), /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      color: 'var(--gold-600)',
      fontSize: 20
    }
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      marginTop: 3,
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      color: isUser ? 'rgba(255,255,255,.55)' : 'var(--ink-300)'
    }
  }, m.t))), m.tiles && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 9,
      width: '100%',
      maxWidth: '92%',
      marginTop: 2
    }
  }, TILES.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.title,
    onClick: () => onChip(t.send),
    onMouseEnter: e => {
      const c = e.currentTarget;
      c.style.transform = 'translateY(-3px)';
      c.style.borderColor = 'var(--gold-500)';
      c.style.boxShadow = '0 10px 24px rgba(11,31,58,.14)';
    },
    onMouseLeave: e => {
      const c = e.currentTarget;
      c.style.transform = 'none';
      c.style.borderColor = 'var(--ink-100)';
      c.style.boxShadow = '0 2px 8px rgba(11,31,58,.06)';
    },
    style: {
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      padding: '13px 13px',
      borderRadius: 14,
      border: '1px solid var(--ink-100)',
      background: 'var(--white)',
      cursor: 'pointer',
      boxShadow: '0 2px 8px rgba(11,31,58,.06)',
      transition: 'all .18s var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 9,
      background: 'linear-gradient(135deg,var(--navy-050),var(--gold-100))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18
    }
  }, t.emoji), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 13,
      color: 'var(--navy-900)',
      lineHeight: 1.25
    }
  }, t.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--ink-400)',
      lineHeight: 1.3
    }
  }, t.sub)))), m.chips && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      justifyContent: isUser ? 'flex-end' : 'flex-start',
      maxWidth: '92%',
      paddingLeft: isUser ? 0 : 39
    }
  }, m.chips.map(ch => {
    const isWA = /whatsapp|book|call/i.test(ch);
    if (isWA) return /*#__PURE__*/React.createElement("a", {
      key: ch,
      href: WA,
      target: "_blank",
      rel: "noreferrer",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        fontWeight: 'var(--weight-semibold)',
        padding: '9px 17px',
        borderRadius: 'var(--radius-pill)',
        background: 'var(--whatsapp-green)',
        color: '#fff',
        textDecoration: 'none',
        boxShadow: '0 3px 10px rgba(37,211,102,.32)'
      }
    }, ch, " \u203A");
    return /*#__PURE__*/React.createElement("button", {
      key: ch,
      onClick: () => onChip(ch),
      onMouseEnter: e => {
        e.currentTarget.style.background = 'var(--navy-900)';
        e.currentTarget.style.color = '#fff';
        e.currentTarget.style.borderColor = 'var(--navy-900)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'var(--white)';
        e.currentTarget.style.color = 'var(--navy-800)';
        e.currentTarget.style.borderColor = 'var(--gold-300)';
      },
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        fontWeight: 'var(--weight-medium)',
        padding: '9px 17px',
        borderRadius: 'var(--radius-pill)',
        border: '1.5px solid var(--gold-300)',
        background: 'var(--white)',
        color: 'var(--navy-800)',
        cursor: 'pointer',
        transition: 'all .18s'
      }
    }, ch);
  })));
}
Object.assign(window, {
  LiveChatV2
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LiveChatV2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServiceDetail.jsx
try { (() => {
function ServiceDetail({
  go
}) {
  const {
    NavBar,
    Footer,
    Badge,
    CommandButton,
    Accordion,
    CommandOutputLine
  } = window.IncomeNFilingComplianceOSDesignSystem_6fdb9e;
  const steps = [{
    n: '01',
    t: 'Share Your Documents',
    d: 'Form-16, bank statements, and investment proofs — via WhatsApp or the form below.'
  }, {
    n: '02',
    t: 'We Prepare & Verify',
    d: 'Our advisors compute your liability, apply eligible deductions, and confirm with you.'
  }, {
    n: '03',
    t: 'Filed & Deployed',
    d: 'Return is e-filed and acknowledged — status updates to deployed, with a copy sent to you.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    logoSrc: "../../assets/logo.jpg",
    items: [{
      label: 'Home',
      href: '#home'
    }, {
      label: 'About',
      href: '#about'
    }, {
      label: 'Services',
      href: '#services'
    }, {
      label: 'Live Chat',
      href: '#chat'
    }, {
      label: 'Contact',
      href: '#contact'
    }]
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px 32px 40px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-500)',
      marginBottom: 14
    }
  }, "services / income-tax / ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--navy-900)'
    }
  }, "itr-filing")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-4xl)',
      color: 'var(--navy-900)',
      margin: 0
    }
  }, "ITR Filing"), /*#__PURE__*/React.createElement(Badge, {
    status: "positive",
    pulse: true
  }, "available")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--ink-500)',
      maxWidth: 620,
      marginBottom: 28
    }
  }, "Income tax return filing for individuals, professionals, and businesses \u2014 computed accurately and filed on schedule, every year."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginBottom: 48,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(CommandButton, {
    onClick: () => go('chat')
  }, "book"), /*#__PURE__*/React.createElement(CommandOutputLine, {
    label: "itr-filing",
    status: "available"
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-2xl)',
      color: 'var(--navy-900)',
      marginBottom: 24
    }
  }, "Deployment process"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20,
      marginBottom: 48
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      background: 'var(--white)',
      border: '1px solid var(--ink-100)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--gold-600)',
      fontSize: 'var(--text-sm)',
      marginBottom: 10
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-lg)',
      color: 'var(--navy-900)',
      marginBottom: 6
    }
  }, s.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-500)',
      lineHeight: 'var(--leading-sm)'
    }
  }, s.d)))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-2xl)',
      color: 'var(--navy-900)',
      marginBottom: 20
    }
  }, "Frequently asked"), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpenIndex: 0,
    items: [{
      question: 'Who needs to file an ITR?',
      answer: 'Anyone above the exemption threshold, plus professionals, freelancers, and businesses regardless of income.'
    }, {
      question: 'Can you handle a delayed or notice case?',
      answer: 'Yes — we handle belated returns and respond to scrutiny notices as part of this service.'
    }]
  })), /*#__PURE__*/React.createElement(Footer, {
    tagline: "Simplifying Compliance. Empowering Business.",
    columns: [{
      title: 'Quick Links',
      links: [{
        label: 'Home',
        href: '#home'
      }, {
        label: 'Services',
        href: '#services'
      }, {
        label: 'Contact',
        href: '#contact'
      }]
    }],
    contact: {
      phone: '+91 7890594600',
      email: 'support@incomenfiling.com',
      region: 'Pan-India Services'
    }
  }));
}
Object.assign(window, {
  ServiceDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServiceDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServiceDetailV2.jsx
try { (() => {
function NavBarV2({
  go,
  active
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const items = [{
    k: 'home',
    label: 'Home'
  }, {
    k: 'about',
    label: 'About'
  }, {
    k: 'services',
    label: 'Services'
  }, {
    k: 'testimonials',
    label: 'Testimonials'
  }, {
    k: 'chat',
    label: 'Live Chat'
  }, {
    k: 'contact',
    label: 'Contact'
  }];
  const [bookHover, setBookHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 60,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      alignItems: 'center',
      gap: 24,
      padding: '16px 32px',
      background: scrolled ? 'rgba(255,255,255,.62)' : 'var(--white)',
      backdropFilter: scrolled ? 'saturate(180%) blur(18px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(18px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,.55)' : '1px solid var(--ink-100)',
      boxShadow: scrolled ? '0 10px 34px rgba(11,31,58,.13)' : 'none',
      fontFamily: 'var(--font-body)',
      transition: 'background .28s ease,box-shadow .28s ease,backdrop-filter .28s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logo || "../../assets/logo.jpg",
    alt: "",
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      color: 'var(--navy-900)',
      lineHeight: 1.2
    }
  }, "Income N ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-600)'
    }
  }, "Filing")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-500)',
      lineHeight: 1.2
    }
  }, "Established 2017"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      justifyContent: 'center'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.k,
    href: `#${it.k}`,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: active === it.k ? 'var(--gold-600)' : 'var(--navy-800)',
      textDecoration: 'none',
      borderBottom: active === it.k ? '2px solid var(--gold-600)' : '2px solid transparent',
      paddingBottom: 4,
      lineHeight: 1.2
    }
  }, it.label))), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('contact'),
    onMouseEnter: () => setBookHover(true),
    onMouseLeave: () => setBookHover(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 13,
      padding: '11px 22px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: 'var(--gold-500)',
      color: 'var(--navy-950)',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transform: bookHover ? 'translateY(-2px)' : 'none',
      boxShadow: bookHover ? 'var(--shadow-md)' : 'none',
      transition: 'all .15s'
    }
  }, "Book Free Consultation"));
}
function ServiceDetailV2({
  go
}) {
  const {
    Footer,
    Badge,
    Button,
    Accordion
  } = window.IncomeNFilingComplianceOSDesignSystem_6fdb9e;
  const steps = [{
    n: '01',
    t: 'Share Your Documents',
    d: 'Form-16, bank statements, and investment proofs — via WhatsApp or the form below.'
  }, {
    n: '02',
    t: 'We Prepare & Verify',
    d: 'Our advisors compute your liability, apply eligible deductions, and confirm with you.'
  }, {
    n: '03',
    t: 'Filed & Deployed',
    d: 'Return is e-filed and acknowledged — status updates to deployed, with a copy sent to you.'
  }];
  const accents = ['var(--gold-500)', 'var(--navy-700)', 'var(--status-positive)'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/917890594600",
    target: "_blank",
    rel: "noreferrer",
    style: {
      position: 'fixed',
      bottom: 26,
      right: 26,
      width: 58,
      height: 58,
      borderRadius: '50%',
      background: 'var(--whatsapp-green)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-lg)',
      zIndex: 80,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      border: '2px solid var(--whatsapp-green)',
      animation: 'pulse-ring 2s infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 11,
      color: 'var(--white)'
    }
  }, "CHAT")), /*#__PURE__*/React.createElement(NavBarV2, {
    go: go,
    active: "itr"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px 32px 90px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-500)',
      marginBottom: 16
    }
  }, "services / income-tax / ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--navy-900)'
    }
  }, "itr-filing")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-4xl)',
      color: 'var(--navy-900)',
      margin: 0
    }
  }, "ITR Filing"), /*#__PURE__*/React.createElement(Badge, {
    status: "positive",
    pulse: true
  }, "available")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--ink-500)',
      maxWidth: 560,
      marginBottom: 40,
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-base)'
    }
  }, "Income tax return filing for individuals, professionals, and businesses \u2014 computed accurately and filed on schedule, every year."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-2xl)',
      color: 'var(--navy-900)',
      marginBottom: 24
    }
  }, "How it's delivered"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginBottom: 48
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      display: 'flex',
      gap: 18,
      background: 'var(--white)',
      border: '1px solid var(--ink-100)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px 24px',
      borderLeft: `4px solid ${accents[i]}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      flexShrink: 0,
      borderRadius: '50%',
      background: V2_TINT(accents[i]),
      color: accents[i],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 13
    }
  }, s.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-lg)',
      color: 'var(--navy-900)',
      marginBottom: 6
    }
  }, s.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-500)',
      lineHeight: 'var(--leading-sm)'
    }
  }, s.d))))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-2xl)',
      color: 'var(--navy-900)',
      marginBottom: 20
    }
  }, "Frequently asked"), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpenIndex: 0,
    items: [{
      question: 'Who needs to file an ITR?',
      answer: 'Anyone above the exemption threshold, plus professionals, freelancers, and businesses regardless of income.'
    }, {
      question: 'Can you handle a delayed or notice case?',
      answer: 'Yes — we handle belated returns and respond to scrutiny notices as part of this service.'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 24,
      background: 'var(--navy-900)',
      borderRadius: 'var(--radius-xl)',
      padding: 32,
      color: 'var(--white)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -40,
      right: -40,
      width: 150,
      height: 150,
      background: 'var(--gold-500)',
      opacity: .15,
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      marginBottom: 10,
      position: 'relative'
    }
  }, "Get started"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-xl)',
      marginBottom: 14,
      position: 'relative'
    }
  }, "Book your ITR filing"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--navy-300)',
      lineHeight: 'var(--leading-sm)',
      marginBottom: 24,
      position: 'relative'
    }
  }, "Free consultation, no obligation. An advisor responds within the day."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    onClick: () => go('chat')
  }, "Chat With an Advisor")))), React.createElement(window.FooterV2, {
    go
  }));
}
function V2_TINT(c) {
  if (c === 'var(--gold-500)') return 'var(--gold-050)';
  if (c === 'var(--status-positive)') return 'var(--paper-alt)';
  return 'var(--navy-050)';
}
Object.assign(window, {
  ServiceDetailV2
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServiceDetailV2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesHub.jsx
try { (() => {
const CATEGORIES = [{
  icon: 'INC',
  title: 'Incorporation & Registrations',
  description: 'Company, LLP, OPC formation and startup registrations.',
  count: 12
}, {
  icon: 'GST',
  title: 'GST Compliance',
  description: 'Registration, returns, reconciliation, refunds.',
  count: 14
}, {
  icon: 'ITR',
  title: 'Income Tax',
  description: 'Filing, assessments, capital gains, TDS/TCS.',
  count: 11
}, {
  icon: 'ROC',
  title: 'Corporate Compliance',
  description: 'ROC filings, annual returns, board resolutions.',
  count: 10
}, {
  icon: 'IBC',
  title: 'Insolvency Advisory',
  description: 'IBC filings, resolution support, restructuring.',
  count: 6
}, {
  icon: 'DOC',
  title: 'Documentation & Drafting',
  description: 'Legal drafting, certifications, statutory records.',
  count: 9
}, {
  icon: 'AGR',
  title: 'Contracts & Agreements',
  description: 'Vendor, employment, and partnership agreements.',
  count: 8
}, {
  icon: 'ACC',
  title: 'Accounting & Bookkeeping',
  description: 'Books, payroll, MIS and audit support.',
  count: 9
}, {
  icon: 'LIC',
  title: 'Licenses & Registrations',
  description: 'Trade, labour, MSME and sector licenses.',
  count: 8
}, {
  icon: 'ADV',
  title: 'Advisory & Notices',
  description: 'Tax notice handling, scrutiny, NRI advisory.',
  count: 7
}];
function ServicesHub({
  go
}) {
  const {
    NavBar,
    Footer,
    TerminalSearch,
    ModuleCard,
    Badge,
    StatBlock
  } = window.IncomeNFilingComplianceOSDesignSystem_6fdb9e;
  const [q, setQ] = React.useState('');
  const filtered = CATEGORIES.filter(c => c.title.toLowerCase().includes(q.toLowerCase()));
  const total = CATEGORIES.reduce((n, c) => n + c.count, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    logoSrc: "../../assets/logo.jpg",
    items: [{
      label: 'Home',
      href: '#home'
    }, {
      label: 'About',
      href: '#about'
    }, {
      label: 'Services',
      href: '#services',
      active: true
    }, {
      label: 'Live Chat',
      href: '#chat'
    }, {
      label: 'Contact',
      href: '#contact'
    }]
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy-900)',
      padding: '22px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--status-positive)',
      animation: 'pulse-dot 2s infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--navy-300)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase'
    }
  }, "directory-index \xB7 ", total, " services live across ", CATEGORIES.length, " modules")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--navy-300)'
    }
  }, "last sync: just now"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px 32px 24px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--gold-600)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, "Services Directory"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-4xl)',
      color: 'var(--navy-900)',
      margin: '0 0 8px'
    }
  }, "94 services, 10 modules"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--ink-500)',
      margin: '0 0 24px',
      maxWidth: 560
    }
  }, "Every compliance service we run, indexed and searchable \u2014 like querying a live directory."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 520,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(TerminalSearch, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholders: ['search category…']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, filtered.map(c => /*#__PURE__*/React.createElement(ModuleCard, {
    key: c.title,
    icon: c.icon,
    title: c.title,
    description: c.description,
    count: c.count,
    onClick: () => go('itr')
  })))), /*#__PURE__*/React.createElement(Footer, {
    tagline: "Simplifying Compliance. Empowering Business.",
    columns: [{
      title: 'Quick Links',
      links: [{
        label: 'Home',
        href: '#home'
      }, {
        label: 'Services',
        href: '#services'
      }, {
        label: 'Contact',
        href: '#contact'
      }]
    }],
    contact: {
      phone: '+91 7890594600',
      email: 'support@incomenfiling.com',
      region: 'Pan-India Services'
    }
  }));
}
Object.assign(window, {
  ServicesHub
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesHub.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesHubV2.jsx
try { (() => {
const V2_ACCENTS = ['var(--gold-500)', 'var(--navy-700)', 'var(--status-positive)', 'var(--navy-500)'];
const V2_TINTS = ['var(--gold-050)', 'var(--navy-050)', 'var(--paper-alt)', 'var(--navy-050)'];
const CATEGORIES = [{
  icon: 'INC',
  title: 'Incorporation & Registrations',
  description: 'Company, LLP, OPC formation and startup registrations.',
  count: 12,
  group: 'Corporate',
  services: ['Private Limited Company', 'LLP Registration', 'One Person Company', 'Partnership Firm', 'Sole Proprietorship', 'Section 8 (NGO)', 'Producer Company', 'Startup India Registration', 'DPIIT Recognition', 'Digital Signature (DSC)', 'Director DIN', 'Nidhi Company']
}, {
  icon: 'GST',
  title: 'GST Compliance',
  description: 'Registration, returns, reconciliation, refunds.',
  count: 14,
  group: 'Taxation',
  services: ['GST Registration', 'GSTR-1 Filing', 'GSTR-3B Filing', 'GSTR-9 Annual Return', 'GST Reconciliation', 'Input Tax Credit Claim', 'GST Refund', 'LUT Filing', 'E-Way Bill', 'E-Invoicing Setup', 'GST Amendment', 'GST Cancellation', 'Composition Scheme', 'GST Notice Reply']
}, {
  icon: 'ITR',
  title: 'Income Tax',
  description: 'Filing, assessments, capital gains, TDS/TCS.',
  count: 11,
  group: 'Taxation',
  services: ['ITR-1 (Salaried)', 'ITR-2 (Capital Gains)', 'ITR-3 (Business)', 'ITR-4 (Presumptive)', 'TDS Return Filing', 'TCS Return', 'Form 15CA / 15CB', 'Advance Tax', 'Capital Gains Computation', 'Tax Assessment Support', 'Income Tax Notice']
}, {
  icon: 'ROC',
  title: 'Corporate Compliance',
  description: 'ROC filings, annual returns, board resolutions.',
  count: 10,
  group: 'Corporate',
  services: ['Annual Return (MGT-7)', 'Financial Statements (AOC-4)', 'Board Resolutions', 'Director Appointment', 'Director Resignation', 'Share Transfer', 'Registered Office Change', 'Auditor Appointment (ADT-1)', 'DIR-3 KYC', 'Charge Registration']
}, {
  icon: 'IBC',
  title: 'Insolvency Advisory',
  description: 'IBC filings, resolution support, restructuring.',
  count: 6,
  group: 'Advisory',
  services: ['IBC Filing', 'Resolution Plan Support', 'Corporate Restructuring', 'Liquidation Advisory', 'Creditor Claim Filing', 'Insolvency Documentation']
}, {
  icon: 'DOC',
  title: 'Documentation & Drafting',
  description: 'Legal drafting, certifications, statutory records.',
  count: 9,
  group: 'Legal & Docs',
  services: ['Legal Notice Drafting', 'Affidavit Drafting', 'Power of Attorney', 'Board Minutes', 'Statutory Registers', 'CA / CS Certification', 'NDA Drafting', 'Declaration Drafting', 'Compliance Certificate']
}, {
  icon: 'AGR',
  title: 'Contracts & Agreements',
  description: 'Vendor, employment, and partnership agreements.',
  count: 8,
  group: 'Legal & Docs',
  services: ['Vendor Agreement', 'Employment Contract', 'Partnership Deed', 'Shareholder Agreement', 'Service Agreement', 'Lease Agreement', 'Franchise Agreement', 'MoU Drafting']
}, {
  icon: 'ACC',
  title: 'Accounting & Bookkeeping',
  description: 'Books, payroll, MIS and audit support.',
  count: 9,
  group: 'Finance',
  services: ['Monthly Bookkeeping', 'Payroll Processing', 'MIS Reports', 'Bank Reconciliation', 'Accounts Payable / Receivable', 'Financial Statement Prep', 'Audit Support', 'Inventory Accounting', 'Virtual CFO']
}, {
  icon: 'LIC',
  title: 'Licenses & Registrations',
  description: 'Trade, labour, MSME and sector licenses.',
  count: 8,
  group: 'Corporate',
  services: ['MSME / Udyam', 'Trade License', 'Shop & Establishment', 'FSSAI License', 'Import Export Code (IEC)', 'PF Registration', 'ESI Registration', 'Professional Tax']
}, {
  icon: 'ADV',
  title: 'Advisory & Notices',
  description: 'Tax notice handling, scrutiny, NRI advisory.',
  count: 7,
  group: 'Advisory',
  services: ['Income Tax Notice Handling', 'GST Scrutiny', 'Tax Planning', 'NRI Advisory', 'Assessment Representation', 'Appeal Filing', 'Compliance Advisory']
}];
const GROUPS = ['Taxation', 'Corporate', 'Legal & Docs', 'Finance', 'Advisory'];
const GROUP_ACCENT = {
  Taxation: 'var(--gold-500)',
  Corporate: 'var(--navy-700)',
  ['Legal & Docs']: 'var(--navy-500)',
  Finance: 'var(--status-positive)',
  Advisory: 'var(--gold-600)'
};
const GROUP_TINT = {
  Taxation: 'var(--gold-050)',
  Corporate: 'var(--navy-050)',
  ['Legal & Docs']: 'var(--navy-050)',
  Finance: 'var(--paper-alt)',
  Advisory: 'var(--gold-050)'
};
function NavBarV2({
  go,
  active
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const items = [{
    k: 'home',
    label: 'Home'
  }, {
    k: 'about',
    label: 'About'
  }, {
    k: 'services',
    label: 'Services'
  }, {
    k: 'testimonials',
    label: 'Testimonials'
  }, {
    k: 'chat',
    label: 'Live Chat'
  }, {
    k: 'contact',
    label: 'Contact'
  }];
  const [bookHover, setBookHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 60,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      alignItems: 'center',
      gap: 24,
      padding: '16px 32px',
      background: scrolled ? 'rgba(255,255,255,.62)' : 'var(--white)',
      backdropFilter: scrolled ? 'saturate(180%) blur(18px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(18px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,.55)' : '1px solid var(--ink-100)',
      boxShadow: scrolled ? '0 10px 34px rgba(11,31,58,.13)' : 'none',
      fontFamily: 'var(--font-body)',
      transition: 'background .28s ease,box-shadow .28s ease,backdrop-filter .28s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logo || "../../assets/logo.jpg",
    alt: "",
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      color: 'var(--navy-900)',
      lineHeight: 1.2
    }
  }, "Income N ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-600)'
    }
  }, "Filing")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-500)',
      lineHeight: 1.2
    }
  }, "Established 2017"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      justifyContent: 'center'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.k,
    href: `#${it.k}`,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: active === it.k ? 'var(--gold-600)' : 'var(--navy-800)',
      textDecoration: 'none',
      borderBottom: active === it.k ? '2px solid var(--gold-600)' : '2px solid transparent',
      paddingBottom: 4,
      lineHeight: 1.2
    }
  }, it.label))), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('contact'),
    onMouseEnter: () => setBookHover(true),
    onMouseLeave: () => setBookHover(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 13,
      padding: '11px 22px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: 'var(--gold-500)',
      color: 'var(--navy-950)',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transform: bookHover ? 'translateY(-2px)' : 'none',
      boxShadow: bookHover ? 'var(--shadow-md)' : 'none',
      transition: 'all .15s'
    }
  }, "Book Free Consultation"));
}
function ServiceIconV2({
  code,
  size = 26
}) {
  const p = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.9,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  const paths = {
    INC: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("path", {
      d: "M4 21h16"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 21V6l6-3 6 3v15"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.5 9h1M13.5 9h1M9.5 13h1M13.5 13h1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.5 21v-3h3v3"
    })),
    GST: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "8.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8.5 15.5L15.5 8.5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9.6",
      cy: "9.6",
      r: "1.3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "14.4",
      cy: "14.4",
      r: "1.3"
    })),
    ITR: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("path", {
      d: "M7 3h7l4 4v13.5a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5V3.5A.5.5 0 017 3z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 3v4h4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 12h6M9 15h6M9 9h2"
    })),
    ROC: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"
    })),
    IBC: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("path", {
      d: "M4 20h16"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 20V9l6-4 6 4v11"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15 14l-6 4M9 14l6 4"
    })),
    DOC: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("path", {
      d: "M7 3h7l4 4v14H6V4a1 1 0 011-1z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 3v4h4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 13l1.5 1.5L13 12"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 17h6"
    })),
    AGR: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("path", {
      d: "M8 5h8v14a2 2 0 01-2 2H10a2 2 0 01-2-2z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M11 3h2v2h-2z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 10h4M10 13h4M10 16h2"
    })),
    ACC: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "4",
      width: "14",
      height: "16",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 4v16"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M11 8h5M11 12h5M11 16h3"
    })),
    LIC: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.5 14l-1 7 3.5-2 3.5 2-1-7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 10l1.4 1.4L14 8.8"
    })),
    ADV: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("path", {
      d: "M12 3a6 6 0 016 6c0 4-3 5-3 8H9c0-3-3-4-3-8a6 6 0 016-6z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 20h6M10 22h4"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: size,
    height: size
  }, paths[code] || paths.DOC);
}
function ServiceCardV2({
  c,
  i,
  selCount,
  onClick
}) {
  const [h, setH] = React.useState(false);
  const ac = GROUP_ACCENT[c.group] || 'var(--gold-500)';
  const tint = GROUP_TINT[c.group] || 'var(--gold-050)';
  const preview = c.services.slice(0, 3);
  const more = c.count - preview.length;
  const notch = {
    position: 'absolute',
    width: 22,
    height: 22,
    borderRadius: '50%',
    background: 'var(--paper)',
    left: 'calc(100% - 96px)',
    transform: 'translateX(-50%)',
    zIndex: 6
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      cursor: 'pointer',
      overflow: 'hidden',
      display: 'flex',
      minHeight: 252,
      boxShadow: h ? '0 26px 50px rgba(15,42,66,.18)' : 'var(--shadow-sm)',
      transform: h ? 'translateY(-6px)' : 'none',
      transition: 'box-shadow .4s var(--ease-standard),transform .4s var(--ease-standard)',
      filter: 'drop-shadow(0 0 0 transparent)',
      animation: `fade-in-up .4s var(--ease-standard) ${i * 0.04}s both`
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      ...notch,
      top: -11
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      ...notch,
      bottom: -11
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      top: 12,
      bottom: 12,
      left: 'calc(100% - 96px)',
      borderLeft: '2px dashed var(--ink-100)',
      zIndex: 5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      background: 'var(--white)',
      border: '1px solid ' + (h ? ac : 'var(--ink-100)'),
      borderRight: 'none',
      borderRadius: 'var(--radius-lg) 0 0 var(--radius-lg)',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 22px',
      transition: 'border-color .3s',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 9.5,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-300)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", null, "File No. ", String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      color: ac,
      fontWeight: 'var(--weight-semibold)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: ac
    }
  }), c.group)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 50,
      height: 50,
      borderRadius: 13,
      background: h ? ac : tint,
      color: h ? 'var(--white)' : ac,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .35s,color .35s',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(ServiceIconV2, {
    code: c.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-lg)',
      color: 'var(--navy-900)',
      lineHeight: 1.2,
      overflowWrap: 'break-word',
      textWrap: 'balance'
    }
  }, c.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-500)',
      lineHeight: 'var(--leading-sm)'
    }
  }, c.description), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      maxHeight: h ? 70 : 0,
      opacity: h ? 1 : 0,
      transition: 'max-height .45s var(--ease-standard),opacity .3s',
      marginTop: h ? 12 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, preview.map((s, j) => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10.5,
      fontWeight: 'var(--weight-medium)',
      padding: '4px 9px',
      borderRadius: 'var(--radius-pill)',
      background: tint,
      color: 'var(--navy-800)',
      border: '1px solid ' + ac + '33',
      transform: h ? 'translateY(0)' : 'translateY(6px)',
      transition: `transform .3s ${0.05 + j * 0.05}s`
    }
  }, s)), more > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      fontWeight: 700,
      padding: '4px 9px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--navy-950)',
      color: 'var(--white)'
    }
  }, "+", more))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 14,
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 'var(--weight-semibold)',
      color: h ? ac : 'var(--ink-500)',
      transition: 'color .3s',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, "Choose services", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      transform: h ? 'translateX(4px)' : 'none',
      transition: 'transform .3s'
    }
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 96,
      flexShrink: 0,
      background: `linear-gradient(165deg,${ac},var(--navy-950))`,
      borderRadius: '0 var(--radius-lg) var(--radius-lg) 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 0',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(rgba(255,255,255,.14) 1px,transparent 1px)',
      backgroundSize: '12px 12px',
      opacity: .4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      letterSpacing: '.3em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.7)',
      writingMode: 'vertical-rl',
      transform: 'rotate(180deg)'
    }
  }, "Services"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 40,
      color: 'var(--white)',
      letterSpacing: '-.02em'
    }
  }, selCount > 0 ? selCount : c.count), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 8.5,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: selCount > 0 ? '#7fe6a6' : 'rgba(255,255,255,.6)',
      marginTop: 4
    }
  }, selCount > 0 ? 'picked' : 'total')), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'var(--white)',
      color: 'var(--navy-950)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 17,
      transition: 'transform .3s',
      transform: h ? 'scale(1.12)' : 'none'
    }
  }, "\u2192")));
}
function ServicePickerV2({
  startCat,
  selected,
  setSelected,
  onClose,
  go
}) {
  const [active, setActive] = React.useState(startCat);
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  const cat = CATEGORIES[active];
  const ac = GROUP_ACCENT[cat.group] || 'var(--gold-500)';
  const toggle = name => setSelected(s => {
    const n = {
      ...s
    };
    if (n[name]) delete n[name];else n[name] = true;
    return n;
  });
  const catSel = i => CATEGORIES[i].services.filter(s => selected[s]).length;
  const totalSel = Object.keys(selected).length;
  const allOn = cat.services.every(s => selected[s]);
  const toggleAll = () => setSelected(s => {
    const n = {
      ...s
    };
    if (allOn) cat.services.forEach(x => delete n[x]);else cat.services.forEach(x => {
      n[x] = true;
    });
    return n;
  });
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      background: 'rgba(10,22,40,.55)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '28px',
      opacity: mounted ? 1 : 0,
      transition: 'opacity .25s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(1040px,100%)',
      height: 'min(680px,92vh)',
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: '270px 1fr',
      boxShadow: '0 40px 90px rgba(6,18,36,.5)',
      transform: mounted ? 'scale(1)' : 'scale(.95)',
      transition: 'transform .28s var(--ease-standard)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-950)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 22px 16px',
      borderBottom: '1px solid rgba(255,255,255,.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      marginBottom: 6
    }
  }, "All Modules"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-lg)',
      color: 'var(--white)'
    }
  }, "Pick your services")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '10px 12px'
    }
  }, CATEGORIES.map((m, i) => {
    const on = i === active;
    const mac = GROUP_ACCENT[m.group] || 'var(--gold-500)';
    const sc = catSel(i);
    return /*#__PURE__*/React.createElement("button", {
      key: m.title,
      onClick: () => setActive(i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        padding: '11px 12px',
        marginBottom: 4,
        borderRadius: 'var(--radius-md)',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        background: on ? 'rgba(255,255,255,.1)' : 'transparent',
        transition: 'background .18s'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        width: 34,
        height: 34,
        borderRadius: 'var(--radius-sm)',
        background: on ? mac : 'rgba(255,255,255,.08)',
        color: 'var(--white)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(ServiceIconV2, {
      code: m.icon,
      size: 18
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0,
        fontSize: 13,
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        color: on ? 'var(--white)' : 'var(--navy-300)',
        lineHeight: 1.25
      }
    }, m.title), sc > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        fontWeight: 700,
        padding: '2px 7px',
        borderRadius: 'var(--radius-pill)',
        background: 'var(--status-positive)',
        color: 'var(--white)'
      }
    }, sc));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '22px 26px',
      borderBottom: '1px solid var(--ink-100)',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: `linear-gradient(135deg,${ac},var(--navy-950))`,
      color: 'var(--white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(ServiceIconV2, {
    code: cat.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-xl)',
      color: 'var(--navy-900)'
    }
  }, cat.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-500)',
      marginTop: 2
    }
  }, cat.description, " \xB7 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: ac
    }
  }, cat.services.length, " services"))), /*#__PURE__*/React.createElement("button", {
    onClick: toggleAll,
    style: {
      flexShrink: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 'var(--weight-semibold)',
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + ac,
      background: allOn ? ac : 'var(--white)',
      color: allOn ? 'var(--white)' : ac,
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, allOn ? 'Deselect all' : 'Select all'), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      flexShrink: 0,
      width: 34,
      height: 34,
      borderRadius: '50%',
      border: '1px solid var(--ink-100)',
      background: 'var(--white)',
      color: 'var(--ink-500)',
      cursor: 'pointer',
      fontSize: 18,
      lineHeight: 1
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '20px 26px',
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, cat.services.map(s => {
    const on = !!selected[s];
    return /*#__PURE__*/React.createElement("button", {
      key: s,
      onClick: () => toggle(s),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        padding: '13px 15px',
        borderRadius: 'var(--radius-md)',
        border: '1.5px solid ' + (on ? ac : 'var(--ink-100)'),
        background: on ? GROUP_TINT[cat.group] : 'var(--white)',
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'all .18s'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        width: 22,
        height: 22,
        borderRadius: 'var(--radius-sm)',
        border: '2px solid ' + (on ? ac : 'var(--ink-100)'),
        background: on ? ac : 'var(--white)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--white)',
        fontSize: 13,
        transition: 'all .18s'
      }
    }, on ? '✓' : ''), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 13.5,
        fontWeight: 'var(--weight-medium)',
        color: on ? 'var(--navy-900)' : 'var(--navy-800)'
      }
    }, s));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 26px',
      borderTop: '1px solid var(--ink-100)',
      background: 'var(--white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-500)'
    }
  }, totalSel > 0 ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      color: 'var(--navy-900)'
    }
  }, totalSel), " service", totalSel > 1 ? 's' : '', " selected across modules") : /*#__PURE__*/React.createElement("span", null, "Select the services you need \u2014 then request a quote.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, totalSel > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: () => setSelected({}),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 'var(--weight-semibold)',
      padding: '11px 18px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--ink-100)',
      background: 'var(--white)',
      color: 'var(--ink-500)',
      cursor: 'pointer'
    }
  }, "Clear"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      onClose();
      go('contact');
    },
    disabled: totalSel === 0,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 13,
      padding: '11px 24px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: totalSel ? 'var(--gold-500)' : 'var(--ink-100)',
      color: totalSel ? 'var(--navy-950)' : 'var(--ink-300)',
      cursor: totalSel ? 'pointer' : 'not-allowed',
      transition: 'all .2s'
    }
  }, "Request ", totalSel || '', " selected \u2192"))))));
}
function ServicesHubV2({
  go
}) {
  const {
    Footer
  } = window.IncomeNFilingComplianceOSDesignSystem_6fdb9e;
  const [q, setQ] = React.useState('');
  const [grp, setGrp] = React.useState('All');
  const [sort, setSort] = React.useState('recommended');
  const [focus, setFocus] = React.useState(false);
  const [picker, setPicker] = React.useState(null);
  const [selected, setSelected] = React.useState({});
  let filtered = CATEGORIES.filter(c => (grp === 'All' || c.group === grp) && (c.title.toLowerCase().includes(q.toLowerCase()) || c.description.toLowerCase().includes(q.toLowerCase()) || c.group.toLowerCase().includes(q.toLowerCase()) || c.services.some(s => s.toLowerCase().includes(q.toLowerCase()))));
  if (sort === 'most') filtered = [...filtered].sort((a, b) => b.count - a.count);
  if (sort === 'az') filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
  const total = CATEGORIES.reduce((n, c) => n + c.count, 0);
  const shown = filtered.reduce((n, c) => n + c.count, 0);
  const chips = ['All', ...GROUPS];
  const suggestions = ['GST', 'Income Tax', 'Incorporation', 'Accounting'];
  const catSelCount = c => c.services.filter(s => selected[s]).length;
  const totalSel = Object.keys(selected).length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/917890594600",
    target: "_blank",
    rel: "noreferrer",
    style: {
      position: 'fixed',
      bottom: 26,
      right: 26,
      width: 58,
      height: 58,
      borderRadius: '50%',
      background: 'var(--whatsapp-green)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-lg)',
      zIndex: 80,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      border: '2px solid var(--whatsapp-green)',
      animation: 'pulse-ring 2s infinite'
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "30",
    height: "30",
    fill: "var(--white)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.16c-.24.68-1.42 1.32-1.95 1.37-.5.05-.98.24-3.3-.69-2.78-1.1-4.55-3.94-4.69-4.13-.14-.19-1.13-1.5-1.13-2.86 0-1.36.71-2.03.96-2.31.24-.27.53-.34.71-.34.18 0 .35 0 .51.01.16.01.39-.06.6.46.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.17.28.75 1.24 1.61 2.01 1.11.99 2.05 1.3 2.33 1.44.28.14.45.12.61-.07.16-.19.7-.82.89-1.1.19-.28.37-.23.62-.14.25.09 1.61.76 1.89.9.28.14.46.21.53.32.07.11.07.65-.17 1.33z"
  }))), /*#__PURE__*/React.createElement(NavBarV2, {
    go: go,
    active: "services"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(150deg,var(--navy-950) 40%,var(--navy-800,#1c3a5e))',
      padding: '66px 32px 120px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(rgba(255,255,255,.06) 1px,transparent 1px)',
      backgroundSize: '26px 26px',
      opacity: .6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -70,
      right: '6%',
      width: 280,
      height: 280,
      background: 'var(--gold-500)',
      opacity: .16,
      borderRadius: '46px',
      transform: 'rotate(18deg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -90,
      left: '-4%',
      width: 320,
      height: 320,
      borderRadius: '50%',
      border: '2px dashed rgba(255,255,255,.12)',
      animation: 'spin-slow 50s linear infinite'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 16px',
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(255,255,255,.08)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--status-positive)',
      animation: 'pulse-dot 2s infinite'
    }
  }), "Services Directory"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-5xl)',
      color: 'var(--white)',
      margin: '0 0 12px',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 1.08
    }
  }, "Find the right service", /*#__PURE__*/React.createElement("br", null), "in ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-400)'
    }
  }, "seconds"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--navy-300)',
      margin: '0 0 30px',
      maxWidth: 560,
      fontSize: 'var(--text-lg)'
    }
  }, "All ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--white)'
    }
  }, total, " services"), " across ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--white)'
    }
  }, CATEGORIES.length, " modules"), " \u2014 search, filter, and jump straight to what your business needs."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 660,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--white)',
      borderRadius: 'var(--radius-pill)',
      padding: '8px 8px 8px 22px',
      boxShadow: focus ? '0 0 0 4px rgba(239,168,46,.35),var(--shadow-lg)' : 'var(--shadow-lg)',
      transition: 'box-shadow .25s'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "22",
    height: "22",
    fill: "none",
    stroke: "var(--ink-300)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 20l-3.2-3.2"
  })), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    placeholder: "Search 94 services \u2014 try \u201CGST refund\u201D or \u201Ccompany registration\u201D",
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--navy-900)'
    }
  }), q && /*#__PURE__*/React.createElement("button", {
    onClick: () => setQ(''),
    style: {
      flexShrink: 0,
      width: 32,
      height: 32,
      borderRadius: '50%',
      border: 'none',
      background: 'var(--paper-alt)',
      color: 'var(--ink-500)',
      cursor: 'pointer',
      fontSize: 15
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--navy-950)',
      background: 'var(--gold-500)',
      borderRadius: 'var(--radius-pill)',
      padding: '9px 16px'
    }
  }, filtered.length, " found")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--navy-300)'
    }
  }, "Popular:"), suggestions.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setQ(s),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 'var(--weight-medium)',
      padding: '5px 13px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid rgba(255,255,255,.22)',
      background: 'rgba(255,255,255,.06)',
      color: 'var(--white)',
      cursor: 'pointer'
    }
  }, s)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 32px 96px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      marginTop: -64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 78,
      zIndex: 40,
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-md)',
      border: '1px solid var(--ink-100)',
      padding: '14px 18px',
      marginBottom: 30,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap',
      flex: 1,
      minWidth: 0
    }
  }, chips.map(ch => {
    const n = ch === 'All' ? CATEGORIES.length : CATEGORIES.filter(c => c.group === ch).length;
    const on = grp === ch;
    const ac = ch === 'All' ? 'var(--navy-900)' : GROUP_ACCENT[ch] || 'var(--gold-500)';
    return /*#__PURE__*/React.createElement("button", {
      key: ch,
      onClick: () => setGrp(ch),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        fontWeight: 'var(--weight-medium)',
        padding: '8px 14px',
        borderRadius: 'var(--radius-pill)',
        border: '1px solid ' + (on ? ac : 'var(--ink-100)'),
        background: on ? ac : 'var(--white)',
        color: on ? 'var(--white)' : 'var(--navy-800)',
        cursor: 'pointer',
        transition: 'all .2s'
      }
    }, ch, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        padding: '1px 6px',
        borderRadius: 'var(--radius-pill)',
        background: on ? 'rgba(255,255,255,.2)' : 'var(--paper-alt)',
        color: on ? 'var(--white)' : 'var(--ink-500)'
      }
    }, n));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--ink-300)'
    }
  }, "Sort"), /*#__PURE__*/React.createElement("select", {
    value: sort,
    onChange: e => setSort(e.target.value),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      padding: '8px 12px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--ink-100)',
      background: 'var(--white)',
      color: 'var(--navy-900)',
      cursor: 'pointer',
      outline: 'none'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "recommended"
  }, "Recommended"), /*#__PURE__*/React.createElement("option", {
    value: "most"
  }, "Most services"), /*#__PURE__*/React.createElement("option", {
    value: "az"
  }, "A \u2013 Z")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
      flexWrap: 'wrap',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-500)'
    }
  }, "Showing ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--navy-900)'
    }
  }, filtered.length), " ", grp === 'All' ? 'modules' : grp + ' modules', q && /*#__PURE__*/React.createElement("span", null, " for \u201C", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--navy-900)'
    }
  }, q), "\u201D"), " \xB7 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--navy-900)'
    }
  }, shown), " services"), (grp !== 'All' || q) && /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setGrp('All');
      setQ('');
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--gold-600)',
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }, "Clear filters \xD7")), filtered.length > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 20
    }
  }, filtered.map((c, i) => /*#__PURE__*/React.createElement(ServiceCardV2, {
    key: c.title,
    c: c,
    i: i,
    selCount: catSelCount(c),
    onClick: () => setPicker(CATEGORIES.indexOf(c))
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '70px 20px',
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      border: '1px dashed var(--ink-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      margin: '0 auto 16px',
      borderRadius: '50%',
      background: 'var(--paper-alt)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "28",
    height: "28",
    fill: "none",
    stroke: "var(--ink-300)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 20l-3.2-3.2"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-lg)',
      color: 'var(--navy-900)',
      marginBottom: 6
    }
  }, "No services match your search"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-500)',
      marginBottom: 18
    }
  }, "Try a different term or clear the filters."), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setGrp('All');
      setQ('');
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 13,
      padding: '11px 22px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: 'var(--gold-500)',
      color: 'var(--navy-950)',
      cursor: 'pointer'
    }
  }, "Reset search"))), totalSel > 0 && picker === null && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 26,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 85,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      background: 'var(--navy-950)',
      color: 'var(--white)',
      borderRadius: 'var(--radius-pill)',
      padding: '12px 14px 12px 22px',
      boxShadow: '0 20px 50px rgba(6,18,36,.4)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17
    }
  }, totalSel), " service", totalSel > 1 ? 's' : '', " selected"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('contact'),
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 13,
      padding: '10px 20px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: 'var(--gold-500)',
      color: 'var(--navy-950)',
      cursor: 'pointer'
    }
  }, "Request quote \u2192"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSelected({}),
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,.2)',
      background: 'transparent',
      color: 'var(--navy-300)',
      cursor: 'pointer',
      fontSize: 16,
      lineHeight: 1
    }
  }, "\xD7")), picker !== null && /*#__PURE__*/React.createElement(ServicePickerV2, {
    startCat: picker,
    selected: selected,
    setSelected: setSelected,
    onClose: () => setPicker(null),
    go: go
  }), React.createElement(window.FooterV2, {
    go
  }));
}
Object.assign(window, {
  ServicesHubV2
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesHubV2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/image-slot.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CommandButton = __ds_scope.CommandButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.DeadlineTicker = __ds_scope.DeadlineTicker;

__ds_ns.ModuleCard = __ds_scope.ModuleCard;

__ds_ns.OfficeCard = __ds_scope.OfficeCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.CommandOutputLine = __ds_scope.CommandOutputLine;

__ds_ns.TerminalSearch = __ds_scope.TerminalSearch;

})();
