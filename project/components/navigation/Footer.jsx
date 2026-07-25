import React from 'react';
export function Footer({brandName='Income N Filing',tagline,columns=[],contact,year=2026}){
return <footer style={{background:'var(--navy-900)',color:'var(--navy-300)',fontFamily:'var(--font-body)',padding:'var(--space-16) var(--space-8) var(--space-6)'}}>
<div style={{display:'grid',gridTemplateColumns:'1.4fr 1fr 1fr',gap:'var(--space-8)',maxWidth:'var(--container-max)',margin:'0 auto'}}>
<div>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-xl)',color:'var(--white)'}}>{brandName.split(' ').slice(0,-1).join(' ')} <span style={{color:'var(--gold-400)'}}>{brandName.split(' ').slice(-1)}</span></div>
<p style={{fontSize:'var(--text-sm)',lineHeight:'var(--leading-sm)',maxWidth:320}}>{tagline}</p>
</div>
{columns.map(col=><div key={col.title}>
<div style={{color:'var(--gold-400)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-sm)',marginBottom:10}}>{col.title}</div>
<div style={{display:'flex',flexDirection:'column',gap:8}}>{col.links.map(l=><a key={l.label} href={l.href||'#'} style={{color:'var(--navy-300)',fontSize:'var(--text-sm)',textDecoration:'none'}}>{l.label}</a>)}</div>
</div>)}
{contact&&<div>
<div style={{color:'var(--gold-400)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-sm)',marginBottom:10}}>Get in Touch</div>
<div style={{display:'flex',flexDirection:'column',gap:8,fontSize:'var(--text-sm)',fontFamily:'var(--font-mono)'}}>
<span>{contact.phone}</span><span>{contact.email}</span><span>{contact.region}</span>
</div>
</div>}
</div>
<div style={{borderTop:'1px solid var(--border-inverse)',marginTop:'var(--space-10)',paddingTop:'var(--space-5)',maxWidth:'var(--container-max)',margin:'var(--space-10) auto 0',display:'flex',justifyContent:'space-between',fontSize:'var(--text-xs)',color:'var(--navy-300)'}}>
<span>© {year} {brandName}. All rights reserved.</span><span>Established 2017</span>
</div>
</footer>;
}
