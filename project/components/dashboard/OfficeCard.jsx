import React from 'react';
export function OfficeCard({city,region,address,live=true}){
return <div style={{background:'var(--white)',border:'1px solid var(--ink-100)',borderRadius:'var(--radius-lg)',padding:'var(--space-5)',display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
<div style={{display:'flex',alignItems:'center',gap:9}}>
<span style={{width:8,height:8,borderRadius:'50%',background:live?'var(--status-positive)':'var(--ink-300)',animation:live?'pulse-dot 2s infinite':'none'}}/>
<span style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-lg)',color:'var(--navy-900)'}}>{city}</span>
<span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-xs)',color:live?'var(--status-positive)':'var(--ink-300)',marginLeft:'auto',letterSpacing:'var(--tracking-wide)'}}>{live?'ONLINE':'OFFLINE'}</span>
</div>
<div style={{fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--ink-500)',lineHeight:'var(--leading-sm)'}}>{address}</div>
<div style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-xs)',color:'var(--ink-300)'}}>{region}</div>
</div>;
}
