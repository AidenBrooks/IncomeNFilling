import React from 'react';
export function TerminalSearch({value='',onChange,placeholders=['search gst registration'],children}){
const [ph,setPh]=React.useState(0);
React.useEffect(()=>{
if(value) return;
const id=setInterval(()=>setPh(p=>(p+1)%placeholders.length),2600);
return ()=>clearInterval(id);
},[value,placeholders.length]);
return <div style={{background:'var(--term-bg)',border:'1px solid var(--term-border)',borderRadius:'var(--radius-md)',boxShadow:'var(--shadow-terminal)',fontFamily:'var(--font-mono)',overflow:'hidden'}}>
<div style={{display:'flex',alignItems:'center',gap:6,padding:'10px 14px',borderBottom:'1px solid var(--term-border)'}}>
<span style={{width:9,height:9,borderRadius:'50%',background:'var(--term-red)',opacity:.6}}/>
<span style={{width:9,height:9,borderRadius:'50%',background:'var(--term-amber)',opacity:.6}}/>
<span style={{width:9,height:9,borderRadius:'50%',background:'var(--term-green)',opacity:.6}}/>
<span style={{marginLeft:10,fontSize:'var(--text-xs)',color:'var(--term-fg-dim)',letterSpacing:'var(--tracking-wide)'}}>services://directory</span>
</div>
<div style={{display:'flex',alignItems:'center',gap:10,padding:'16px 18px'}}>
<span style={{color:'var(--term-green)',fontSize:'var(--text-lg)'}}>&gt;</span>
<input value={value} onChange={onChange} spellCheck={false}
placeholder={placeholders[ph]}
style={{flex:1,background:'transparent',border:'none',outline:'none',color:'var(--term-amber)',fontFamily:'var(--font-mono)',fontSize:'var(--text-lg)',caretColor:'var(--term-green)'}}/>
<span style={{color:'var(--term-green)',fontSize:'var(--text-lg)',animation:'blink-cursor 1s step-end infinite'}}>_</span>
</div>
{children&&<div style={{borderTop:'1px solid var(--term-border)',padding:'14px 18px',display:'flex',flexDirection:'column',gap:8}}>{children}</div>}
</div>;
}
