import React from 'react';
export function TestimonialCard({name,meta,quote,initials,rating=5}){
return <div style={{background:'var(--white)',border:'1px solid var(--ink-100)',borderRadius:'var(--radius-lg)',padding:'var(--space-6)',display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
<div style={{display:'flex',alignItems:'center',gap:12}}>
<div style={{width:40,height:40,borderRadius:'50%',background:'var(--navy-800)',color:'var(--gold-400)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-sm)'}}>{initials}</div>
<div>
<div style={{fontFamily:'var(--font-body)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-sm)',color:'var(--navy-900)'}}>{name}</div>
<div style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-xs)',color:'var(--ink-500)'}}>{meta}</div>
</div>
</div>
<div style={{color:'var(--gold-500)',fontSize:'var(--text-sm)',letterSpacing:2}}>{'★'.repeat(rating)}{'☆'.repeat(5-rating)}</div>
<div style={{fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--ink-700)',lineHeight:'var(--leading-sm)',fontStyle:'italic'}}>&ldquo;{quote}&rdquo;</div>
</div>;
}
