import React from 'react';
export function CommandOutputLine({label,status='available',onBook}){
const STATUS_COLOR={available:'var(--term-green)',deployed:'var(--term-green)',pending:'var(--term-amber)'}[status]||'var(--term-fg-dim)';
return <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,fontSize:'var(--text-sm)',color:'var(--term-fg)'}}>
<span>// <span style={{color:'var(--term-fg)'}}>{label}</span> <span style={{color:STATUS_COLOR}}>{status}</span></span>
{onBook&&<button onClick={onBook} style={{background:'none',border:'1px solid var(--term-border)',borderRadius:'var(--radius-sm)',color:'var(--term-amber)',fontFamily:'var(--font-mono)',fontSize:'var(--text-xs)',padding:'4px 10px',cursor:'pointer'}}>[ book ]</button>}
</div>;
}
