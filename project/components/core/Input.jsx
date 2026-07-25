import React from 'react';
const base={width:'100%',boxSizing:'border-box',fontFamily:'var(--font-body)',fontSize:'var(--text-base)',color:'var(--navy-900)',background:'var(--white)',border:'1px solid var(--ink-100)',borderRadius:'var(--radius-md)',padding:'13px 16px',outline:'none',transition:'border-color var(--duration-fast) var(--ease-standard)'};
export function Input({label,placeholder,value,onChange,type='text',required}){
return <label style={{display:'flex',flexDirection:'column',gap:6,fontFamily:'var(--font-body)'}}>
{label&&<span style={{fontSize:'var(--text-sm)',fontWeight:'var(--weight-medium)',color:'var(--ink-700)'}}>{label}{required&&<span style={{color:'var(--status-critical)'}}> *</span>}</span>}
<input type={type} placeholder={placeholder} value={value} onChange={onChange} required={required} style={base}
onFocus={e=>e.target.style.borderColor='var(--gold-500)'} onBlur={e=>e.target.style.borderColor='var(--ink-100)'}/>
</label>;
}
