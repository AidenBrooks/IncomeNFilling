import React from 'react';
export function ModuleCard({icon,title,description,count,onClick}){
const [hover,setHover]=React.useState(false);
return <div onClick={onClick} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
style={{background:'var(--white)',border:'1px solid var(--ink-100)',borderRadius:'var(--radius-lg)',padding:'var(--space-6)',cursor:onClick?'pointer':'default',boxShadow:hover?'var(--shadow-md)':'var(--shadow-sm)',transition:'box-shadow var(--duration-base) var(--ease-standard),transform var(--duration-base) var(--ease-standard)',transform:hover?'translateY(-2px)':'none',display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
<div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
<div style={{width:44,height:44,borderRadius:'var(--radius-md)',background:'var(--navy-900)',color:'var(--gold-400)',display:'flex',alignItems:'center',justifyContent:'center'}}>{icon}</div>
{typeof count==='number'&&<span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-xs)',color:'var(--ink-500)',letterSpacing:'var(--tracking-wide)'}}>{String(count).padStart(2,'0')} MODULES</span>}
</div>
<div style={{fontFamily:'var(--font-display)',fontSize:'var(--text-xl)',fontWeight:'var(--weight-semibold)',color:'var(--navy-900)'}}>{title}</div>
<div style={{fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--ink-500)',lineHeight:'var(--leading-sm)'}}>{description}</div>
</div>;
}
