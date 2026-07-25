import React from 'react';
export function Accordion({items=[],defaultOpenIndex=-1}){
const [open,setOpen]=React.useState(defaultOpenIndex);
return <div style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
{items.map((it,i)=>{
const isOpen=open===i;
return <div key={i} style={{border:'1px solid var(--ink-100)',borderRadius:'var(--radius-md)',background:'var(--white)',overflow:'hidden'}}>
<button onClick={()=>setOpen(isOpen?-1:i)} style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,padding:'16px 20px',background:'none',border:'none',cursor:'pointer',textAlign:'left',fontFamily:'var(--font-body)',fontSize:'var(--text-base)',fontWeight:'var(--weight-medium)',color:'var(--navy-900)'}}>
{it.question}
<span style={{fontFamily:'var(--font-mono)',color:'var(--gold-600)',transform:isOpen?'rotate(45deg)':'none',transition:'transform var(--duration-fast) var(--ease-standard)'}}>+</span>
</button>
{isOpen&&<div style={{padding:'0 20px 18px',fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--ink-500)',lineHeight:'var(--leading-sm)'}}>{it.answer}</div>}
</div>;
})}
</div>;
}
