function NavBarV2({go,active}){
const [scrolled,setScrolled]=React.useState(false);
React.useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>8);window.addEventListener('scroll',onScroll,{passive:true});onScroll();return ()=>window.removeEventListener('scroll',onScroll);},[]);
const items=[{k:'home',label:'Home'},{k:'about',label:'About'},{k:'services',label:'Services'},{k:'testimonials',label:'Testimonials'},{k:'chat',label:'Live Chat'},{k:'contact',label:'Contact'}];
const [bookHover,setBookHover]=React.useState(false);
return <nav style={{position:'sticky',top:0,zIndex:60,display:'grid',gridTemplateColumns:'auto 1fr auto',alignItems:'center',gap:24,padding:'16px 32px',background:scrolled?'rgba(255,255,255,.62)':'var(--white)',backdropFilter:scrolled?'saturate(180%) blur(18px)':'none',WebkitBackdropFilter:scrolled?'saturate(180%) blur(18px)':'none',borderBottom:scrolled?'1px solid rgba(255,255,255,.55)':'1px solid var(--ink-100)',boxShadow:scrolled?'0 10px 34px rgba(11,31,58,.13)':'none',fontFamily:'var(--font-body)',transition:'background .28s ease,box-shadow .28s ease,backdrop-filter .28s ease'}}>
<div style={{display:'flex',alignItems:'center',gap:10}}>
<img src={(window.__resources&&window.__resources.logo)||"../../assets/logo.jpg"} alt="" style={{width:36,height:36,borderRadius:'50%'}}/>
<div>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-base)',color:'var(--navy-900)',lineHeight:1.2}}>Income N <span style={{color:'var(--gold-600)'}}>Filing</span></div>
<div style={{fontSize:10,color:'var(--ink-500)',lineHeight:1.2}}>Established 2017</div>
</div>
</div>
<div style={{display:'flex',gap:28,justifyContent:'center'}}>
{items.map(it=><a key={it.k} href={`#${it.k}`} style={{fontSize:'var(--text-sm)',fontWeight:'var(--weight-medium)',color:active===it.k?'var(--gold-600)':'var(--navy-800)',textDecoration:'none',borderBottom:active===it.k?'2px solid var(--gold-600)':'2px solid transparent',paddingBottom:4,lineHeight:1.2}}>{it.label}</a>)}
</div>
<button onClick={()=>go('contact')} onMouseEnter={()=>setBookHover(true)} onMouseLeave={()=>setBookHover(false)} style={{fontFamily:'var(--font-body)',fontWeight:'var(--weight-semibold)',fontSize:13,padding:'11px 22px',borderRadius:'var(--radius-pill)',border:'none',background:'var(--gold-500)',color:'var(--navy-950)',cursor:'pointer',whiteSpace:'nowrap',transform:bookHover?'translateY(-2px)':'none',boxShadow:bookHover?'var(--shadow-md)':'none',transition:'all .15s'}}>Book Free Consultation</button>
</nav>;
}
const CAT=['GST','Income Tax','Incorporation','Corporate Compliance','Accounting','Licenses','Tax Notice'];
function ContactV2({go}){
const [cat,setCat]=React.useState('');
const [f,setF]=React.useState({name:'',email:'',phone:'',msg:''});
const [sent,setSent]=React.useState(false);
const [copied,setCopied]=React.useState('');
const set=(k,v)=>setF(o=>({...o,[k]:v}));
const copy=(key,txt)=>{try{navigator.clipboard.writeText(txt);}catch(e){}setCopied(key);setTimeout(()=>setCopied(''),1600);};
const iStyle={width:'100%',boxSizing:'border-box',fontFamily:'var(--font-body)',fontSize:14.5,padding:'13px 16px',borderRadius:'var(--radius-md)',border:'1.5px solid var(--ink-100)',background:'var(--navy-050)',color:'var(--navy-900)',outline:'none',transition:'border-color .15s,box-shadow .15s'};
const foc=e=>{e.currentTarget.style.borderColor='var(--gold-500)';e.currentTarget.style.boxShadow='0 0 0 4px rgba(212,167,71,.15)';e.currentTarget.style.background='var(--white)';};
const blur=e=>{e.currentTarget.style.borderColor='var(--ink-100)';e.currentTarget.style.boxShadow='none';e.currentTarget.style.background='var(--navy-050)';};
const submit=e=>{e.preventDefault();setSent(true);};
const Label=({children})=><label style={{fontFamily:'var(--font-mono)',fontSize:11,fontWeight:600,letterSpacing:'.05em',textTransform:'uppercase',color:'var(--ink-500)'}}>{children}</label>;
const channels=[
{key:'call',label:'Call us',footLabel:'Call',val:'+91 78905 94600',href:'tel:+917890594600',copyTxt:'+917890594600',accent:'var(--gold-500)',icon:<path d="M6.6 10.8a15.6 15.6 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.2 2.2z"/>},
{key:'wa',label:'WhatsApp',val:'Chat with an advisor',href:'https://wa.me/917890594600',accent:'var(--whatsapp-green)',icon:<path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.16c-.24.68-1.42 1.32-1.95 1.37-.5.05-.98.24-3.3-.69-2.78-1.1-4.55-3.94-4.69-4.13-.14-.19-1.13-1.5-1.13-2.86 0-1.36.71-2.03.96-2.31.24-.27.53-.34.71-.34h.51c.16.01.39-.06.6.46.24.58.82 2 .89 2.14.07.14.12.31.02.5-.44.86-.91 1-.55 1.56.86 1.24 1.51 1.67 2.62 2.23.28.14.45.12.61-.07.16-.19.7-.82.89-1.1.19-.28.37-.23.62-.14.25.09 1.61.76 1.89.9.28.14.46.21.53.32.07.11.07.65-.17 1.33z"/>},
{key:'email',label:'Email',val:'support@incomenfiling.com',href:'mailto:support@incomenfiling.com',copyTxt:'support@incomenfiling.com',accent:'var(--navy-600)',icon:<path d="M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm9 7L4 7v1l8 5 8-5V7l-8 5z"/>},
];
return <div style={{background:'var(--paper)',minHeight:'100vh'}}>
<a href="https://wa.me/917890594600" target="_blank" rel="noreferrer" style={{position:'fixed',bottom:26,right:26,width:58,height:58,borderRadius:'50%',background:'var(--whatsapp-green)',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'var(--shadow-lg)',zIndex:80,textDecoration:'none'}}>
<span style={{position:'absolute',inset:0,borderRadius:'50%',border:'2px solid var(--whatsapp-green)',animation:'pulse-ring 2s infinite'}}/>
<svg viewBox="0 0 24 24" width="30" height="30" fill="var(--white)" style={{position:'relative'}}><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.16c-.24.68-1.42 1.32-1.95 1.37-.5.05-.98.24-3.3-.69-2.78-1.1-4.55-3.94-4.69-4.13-.14-.19-1.13-1.5-1.13-2.86 0-1.36.71-2.03.96-2.31.24-.27.53-.34.71-.34.18 0 .35 0 .51.01.16.01.39-.06.6.46.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.17.28.75 1.24 1.61 2.01 1.11.99 2.05 1.3 2.33 1.44.28.14.45.12.61-.07.16-.19.7-.82.89-1.1.19-.28.37-.23.62-.14.25.09 1.61.76 1.89.9.28.14.46.21.53.32.07.11.07.65-.17 1.33z"/></svg>
</a>
<NavBarV2 go={go} active="contact"/>
<section style={{background:'linear-gradient(150deg,var(--navy-950) 0%,var(--navy-900) 55%,var(--navy-800) 100%)',padding:'70px 32px 128px',position:'relative',overflow:'hidden',textAlign:'center'}}>
<div style={{position:'absolute',top:-60,left:'8%',width:200,height:200,background:'var(--gold-500)',opacity:.13,borderRadius:'40px',transform:'rotate(-14deg)',animation:'float-y 7s ease-in-out infinite'}}/>
<div style={{position:'absolute',bottom:10,right:'12%',width:120,height:120,border:'2px solid rgba(212,167,71,.25)',borderRadius:'26px',transform:'rotate(18deg)',animation:'float-y 5.5s ease-in-out infinite'}}/>
<div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(rgba(255,255,255,.05) 1px,transparent 1px)',backgroundSize:'26px 26px',pointerEvents:'none'}}/>
<div style={{position:'relative',maxWidth:720,margin:'0 auto'}}>
<div style={{display:'inline-flex',alignItems:'center',gap:8,fontFamily:'var(--font-mono)',fontSize:11,color:'var(--gold-400)',letterSpacing:'.14em',textTransform:'uppercase',marginBottom:16,background:'rgba(212,167,71,.1)',border:'1px solid rgba(212,167,71,.25)',padding:'6px 14px',borderRadius:'var(--radius-pill)'}}><span style={{width:6,height:6,borderRadius:'50%',background:'var(--status-positive)',animation:'pulse-dot 2s infinite'}}/>We usually reply within minutes</div>
<h1 style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-5xl)',color:'var(--white)',margin:'0 0 14px',letterSpacing:'var(--tracking-tight)',lineHeight:1.08}}>Let's start a <span style={{color:'var(--gold-400)'}}>conversation</span></h1>
<p style={{color:'var(--navy-300)',margin:'0 auto',maxWidth:520,fontFamily:'var(--font-body)',fontSize:'var(--text-lg)',lineHeight:1.5}}>Tell us what you're working on and the right advisor will take it from here — call, WhatsApp, email or drop by an office.</p>
<div style={{display:'flex',flexWrap:'wrap',gap:12,justifyContent:'center',marginTop:26}}>
{[['1000+','businesses served'],['2','offices, Pan-India'],['9+','years of expertise']].map(s=><div key={s[1]} style={{display:'flex',alignItems:'baseline',gap:8,background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.1)',borderRadius:'var(--radius-pill)',padding:'9px 18px'}}><span style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:18,color:'var(--gold-400)'}}>{s[0]}</span><span style={{fontFamily:'var(--font-body)',fontSize:12.5,color:'var(--navy-300)'}}>{s[1]}</span></div>)}
</div>
</div>
</section>
<section style={{padding:'0 32px 90px',maxWidth:'var(--container-max)',margin:'0 auto',marginTop:-80,position:'relative'}}>
<div style={{marginBottom:26}}>{React.createElement(window.OfficeMapV2,{contactChannels:channels})}</div>
<div style={{maxWidth:820,margin:'0 auto'}}>
<div style={{background:'var(--white)',borderRadius:'var(--radius-xl)',boxShadow:'0 24px 55px rgba(11,31,58,.14)',padding:'var(--space-8)',position:'relative',overflow:'hidden',minHeight:520}}>
<div style={{position:'absolute',top:0,left:0,right:0,height:5,background:'linear-gradient(90deg,var(--gold-400),var(--gold-600))'}}/>
{sent?<div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',minHeight:460,animation:'fade-in-up .4s var(--ease-standard) both'}}>
<div style={{position:'relative',width:88,height:88,marginBottom:22}}>
<span style={{position:'absolute',inset:0,borderRadius:'50%',background:'var(--gold-100)'}}/>
<span style={{position:'absolute',inset:-8,borderRadius:'50%',border:'2px solid var(--gold-300)',animation:'pulse-ring 2s infinite'}}/>
<svg viewBox="0 0 24 24" width="88" height="88" fill="none" stroke="var(--gold-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{position:'relative'}}><path d="M20 6L9 17l-5-5"/></svg>
</div>
<h3 style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-2xl)',color:'var(--navy-900)',margin:'0 0 10px'}}>Thanks{f.name?', '+f.name.split(' ')[0]:''}! 🎉</h3>
<p style={{fontFamily:'var(--font-body)',fontSize:'var(--text-base)',color:'var(--ink-500)',margin:'0 0 26px',maxWidth:360,lineHeight:1.55}}>Your request{cat?' about '+cat:''} is in. An advisor from our team will reach out within a few working hours.</p>
<div style={{display:'flex',gap:12,flexWrap:'wrap',justifyContent:'center'}}>
<a href="https://wa.me/917890594600" target="_blank" rel="noreferrer" style={{display:'inline-flex',alignItems:'center',gap:8,fontFamily:'var(--font-body)',fontWeight:600,fontSize:14,padding:'12px 22px',borderRadius:'var(--radius-pill)',background:'var(--whatsapp-green)',color:'#fff',textDecoration:'none',boxShadow:'0 4px 14px rgba(37,211,102,.32)'}}>Continue on WhatsApp ›</a>
<button onClick={()=>{setSent(false);setF({name:'',email:'',phone:'',msg:''});setCat('');}} style={{fontFamily:'var(--font-body)',fontWeight:600,fontSize:14,padding:'12px 22px',borderRadius:'var(--radius-pill)',border:'1.5px solid var(--ink-100)',background:'var(--white)',color:'var(--navy-800)',cursor:'pointer'}}>Send another</button>
</div>
</div>:<form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:16}}>
<div>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-xl)',color:'var(--navy-900)'}}>Request a free consultation</div>
<div style={{fontFamily:'var(--font-body)',fontSize:13.5,color:'var(--ink-500)',marginTop:4}}>No obligation — we'll scope it on a quick call.</div>
</div>
<div style={{display:'flex',flexDirection:'column',gap:7}}>
<Label>What do you need help with?</Label>
<div style={{display:'flex',flexWrap:'wrap',gap:8}}>
{CAT.map(c=><button type="button" key={c} onClick={()=>setCat(c)} style={{fontFamily:'var(--font-body)',fontSize:13,fontWeight:600,padding:'8px 15px',borderRadius:'var(--radius-pill)',border:'1.5px solid '+(cat===c?'var(--gold-500)':'var(--ink-100)'),background:cat===c?'var(--gold-050)':'var(--white)',color:cat===c?'var(--gold-600)':'var(--navy-700)',cursor:'pointer',transition:'all .15s'}}>{cat===c?'✓ ':''}{c}</button>)}
</div>
</div>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
<div style={{display:'flex',flexDirection:'column',gap:7}}><Label>Full name</Label><input required value={f.name} onChange={e=>set('name',e.target.value)} onFocus={foc} onBlur={blur} placeholder="Jane Doe" style={iStyle}/></div>
<div style={{display:'flex',flexDirection:'column',gap:7}}><Label>Phone</Label><input value={f.phone} onChange={e=>set('phone',e.target.value)} onFocus={foc} onBlur={blur} placeholder="+91 …" style={iStyle}/></div>
</div>
<div style={{display:'flex',flexDirection:'column',gap:7}}><Label>Email address</Label><input required type="email" value={f.email} onChange={e=>set('email',e.target.value)} onFocus={foc} onBlur={blur} placeholder="jane@company.com" style={iStyle}/></div>
<div style={{display:'flex',flexDirection:'column',gap:7}}><Label>Briefly describe your requirement</Label><textarea value={f.msg} onChange={e=>set('msg',e.target.value)} onFocus={foc} onBlur={blur} rows={3} placeholder="e.g. need GST registration for a new LLP" style={{...iStyle,resize:'vertical',minHeight:88}}/></div>
<button type="submit" onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 10px 26px rgba(212,167,71,.42)';}} onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='0 4px 14px rgba(212,167,71,.32)';}} style={{marginTop:4,display:'flex',alignItems:'center',justifyContent:'center',gap:9,fontFamily:'var(--font-body)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-base)',padding:'15px',borderRadius:'var(--radius-pill)',border:'none',background:'linear-gradient(135deg,var(--gold-400),var(--gold-500))',color:'var(--navy-950)',cursor:'pointer',boxShadow:'0 4px 14px rgba(212,167,71,.32)',transition:'transform .18s,box-shadow .18s'}}>Book my free consultation<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>
<div style={{textAlign:'center',fontFamily:'var(--font-body)',fontSize:12,color:'var(--ink-300)'}}>🔒 Your details stay private — used only to contact you back.</div>
</form>}
</div>
</div>
</section>
{React.createElement(window.FooterV2,{go})}
</div>;
}
Object.assign(window,{ContactV2});
