import React from 'react';
export function Select({label,options=[],value,onChange,placeholder='Select…'}){
return <label style={{display:'flex',flexDirection:'column',gap:6,fontFamily:'var(--font-body)'}}>
{label&&<span style={{fontSize:'var(--text-sm)',fontWeight:'var(--weight-medium)',color:'var(--ink-700)'}}>{label}</span>}
<select value={value} onChange={onChange} style={{width:'100%',boxSizing:'border-box',fontFamily:'var(--font-body)',fontSize:'var(--text-base)',color:value?'var(--navy-900)':'var(--ink-500)',background:'var(--white)',border:'1px solid var(--ink-100)',borderRadius:'var(--radius-md)',padding:'13px 16px',outline:'none'}}>
<option value="">{placeholder}</option>
{options.map(o=><option key={o} value={o}>{o}</option>)}
</select>
</label>;
}
