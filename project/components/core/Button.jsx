import React from 'react';
const PALETTE = {
primary:{bg:'var(--gold-500)',color:'var(--navy-900)',border:'transparent',hoverBg:'var(--gold-400)'},
secondary:{bg:'transparent',color:'var(--white)',border:'var(--border-inverse)',hoverBg:'rgba(255,255,255,.08)'},
ghost:{bg:'transparent',color:'var(--navy-800)',border:'var(--ink-100)',hoverBg:'var(--paper-alt)'},
};
export function Button({children,variant='primary',size='md',icon,disabled,onClick,type='button',fullWidth}){
if(variant==='command') return <CommandButton onClick={onClick} disabled={disabled}>{children}</CommandButton>;
const p=PALETTE[variant]||PALETTE.primary;
const [hover,setHover]=React.useState(false);
const pad=size==='sm'?'9px 16px':'13px 24px';
const fs=size==='sm'?'var(--text-sm)':'var(--text-base)';
return <button type={type} disabled={disabled} onClick={onClick}
onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
style={{display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8,padding:pad,fontFamily:'var(--font-body)',fontWeight:'var(--weight-semibold)',fontSize:fs,borderRadius:'var(--radius-pill)',border:`1px solid ${p.border}`,background:hover&&!disabled?p.hoverBg:p.bg,color:p.color,cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1,width:fullWidth?'100%':'auto',transition:`background var(--duration-fast) var(--ease-standard)`}}>
{icon}{children}
</button>;
}
export function CommandButton({children,onClick,disabled,href}){
const [hover,setHover]=React.useState(false);
const Tag=href?'a':'button';
return <Tag href={href} type={href?undefined:'button'} onClick={onClick} disabled={disabled}
onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-sm)',fontWeight:'var(--weight-medium)',background:'var(--term-bg)',color:hover?'var(--term-green)':'var(--term-amber)',border:`1px solid ${hover?'var(--term-green)':'var(--term-border)'}`,borderRadius:'var(--radius-sm)',padding:'10px 18px',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1,textDecoration:'none',display:'inline-block',transition:`all var(--duration-fast) var(--ease-standard)`}}>
[&nbsp;{children}&nbsp;]
</Tag>;
}
