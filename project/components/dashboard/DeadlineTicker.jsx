import React from 'react';
export function DeadlineTicker({items=[]}){
const loop=[...items,...items];
return <div style={{overflow:'hidden',background:'var(--navy-950)',borderTop:'1px solid var(--border-inverse)',borderBottom:'1px solid var(--border-inverse)',padding:'10px 0'}}>
<div style={{display:'flex',gap:40,width:'max-content',animation:'ticker-scroll 22s linear infinite'}}>
{loop.map((it,i)=><div key={i} style={{display:'flex',alignItems:'center',gap:8,fontFamily:'var(--font-mono)',fontSize:'var(--text-sm)',color:'var(--navy-300)',whiteSpace:'nowrap'}}>
<span style={{color:'var(--gold-400)'}}>▲</span>{it.label}<b style={{color:'var(--white)'}}>{it.date}</b>
</div>)}
</div>
</div>;
}
