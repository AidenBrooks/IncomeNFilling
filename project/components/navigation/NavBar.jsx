import React from 'react';
export function NavBar({logoSrc,brandName='Income N Filing',tagline='Established 2017',items=[],phone}){
return <nav style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px 32px',background:'var(--white)',borderBottom:'1px solid var(--ink-100)',fontFamily:'var(--font-body)'}}>
<div style={{display:'flex',alignItems:'center',gap:12}}>
{logoSrc&&<img src={logoSrc} alt="" style={{width:36,height:36,borderRadius:'50%'}}/>}
<div>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-base)',color:'var(--navy-900)'}}>{brandName.split(' ').slice(0,-1).join(' ')} <span style={{color:'var(--gold-600)'}}>{brandName.split(' ').slice(-1)}</span></div>
<div style={{fontSize:'var(--text-xs)',color:'var(--ink-500)'}}>{tagline}</div>
</div>
</div>
<div style={{display:'flex',gap:28}}>
{items.map(it=><a key={it.label} href={it.href||'#'} style={{fontSize:'var(--text-sm)',fontWeight:'var(--weight-medium)',color:it.active?'var(--gold-600)':'var(--navy-800)',textDecoration:'none',borderBottom:it.active?'2px solid var(--gold-600)':'2px solid transparent',paddingBottom:4}}>{it.label}</a>)}
</div>
{phone&&<a href={`tel:${phone}`} style={{fontSize:'var(--text-sm)',color:'var(--navy-700)',textDecoration:'none',fontFamily:'var(--font-mono)'}}>{phone}</a>}
</nav>;
}
