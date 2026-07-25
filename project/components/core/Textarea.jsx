import React from 'react';
export function Textarea({label,placeholder,value,onChange,rows=4,required}){
return <label style={{display:'flex',flexDirection:'column',gap:6,fontFamily:'var(--font-body)'}}>
{label&&<span style={{fontSize:'var(--text-sm)',fontWeight:'var(--weight-medium)',color:'var(--ink-700)'}}>{label}{required&&<span style={{color:'var(--status-critical)'}}> *</span>}</span>}
<textarea placeholder={placeholder} value={value} onChange={onChange} rows={rows} style={{width:'100%',boxSizing:'border-box',fontFamily:'var(--font-body)',fontSize:'var(--text-base)',color:'var(--navy-900)',background:'var(--white)',border:'1px solid var(--ink-100)',borderRadius:'var(--radius-md)',padding:'13px 16px',outline:'none',resize:'vertical'}}/>
</label>;
}
