import React from 'react';
export function StatBlock({label,value,status='neutral',inverse=false}){
const DOT={positive:'var(--status-positive)',warning:'var(--status-warning)',critical:'var(--status-critical)',neutral:'var(--ink-300)'}[status];
return <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)',padding:'var(--space-5)',borderRadius:'var(--radius-md)',background:inverse?'var(--navy-800)':'var(--white)',border:inverse?'1px solid var(--border-inverse)':'1px solid var(--ink-100)'}}>
<div style={{display:'flex',alignItems:'center',gap:7}}>
<span style={{width:7,height:7,borderRadius:'50%',background:DOT}}/>
<span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-xs)',letterSpacing:'var(--tracking-widest)',textTransform:'uppercase',color:inverse?'var(--navy-300)':'var(--ink-500)'}}>{label}</span>
</div>
<div style={{fontFamily:'var(--font-display)',fontSize:'var(--text-4xl)',fontWeight:'var(--weight-semibold)',color:inverse?'var(--white)':'var(--navy-900)'}}>{value}</div>
</div>;
}
