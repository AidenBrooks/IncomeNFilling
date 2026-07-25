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
function ServiceDetailV2({go}){
const {Footer,Badge,Button,Accordion}=window.IncomeNFilingComplianceOSDesignSystem_6fdb9e;
const steps=[
{n:'01',t:'Share Your Documents',d:'Form-16, bank statements, and investment proofs — via WhatsApp or the form below.'},
{n:'02',t:'We Prepare & Verify',d:'Our advisors compute your liability, apply eligible deductions, and confirm with you.'},
{n:'03',t:'Filed & Deployed',d:'Return is e-filed and acknowledged — status updates to deployed, with a copy sent to you.'},
];
const accents=['var(--gold-500)','var(--navy-700)','var(--status-positive)'];
return <div style={{background:'var(--paper)',minHeight:'100vh'}}>
<a href="https://wa.me/917890594600" target="_blank" rel="noreferrer" style={{position:'fixed',bottom:26,right:26,width:58,height:58,borderRadius:'50%',background:'var(--whatsapp-green)',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'var(--shadow-lg)',zIndex:80,textDecoration:'none'}}>
<span style={{position:'absolute',inset:0,borderRadius:'50%',border:'2px solid var(--whatsapp-green)',animation:'pulse-ring 2s infinite'}}/>
<span style={{position:'relative',fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:11,color:'var(--white)'}}>CHAT</span>
</a>
<NavBarV2 go={go} active="itr"/>
<section style={{padding:'56px 32px 90px',maxWidth:'var(--container-max)',margin:'0 auto'}}>
<div style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-xs)',color:'var(--ink-500)',marginBottom:16}}>services / income-tax / <span style={{color:'var(--navy-900)'}}>itr-filing</span></div>
<div style={{display:'grid',gridTemplateColumns:'1.5fr 1fr',gap:40,alignItems:'start'}}>
<div>
<div style={{display:'flex',alignItems:'center',gap:14,marginBottom:12,flexWrap:'wrap'}}>
<h1 style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-4xl)',color:'var(--navy-900)',margin:0}}>ITR Filing</h1>
<Badge status="positive" pulse>available</Badge>
</div>
<p style={{fontFamily:'var(--font-body)',color:'var(--ink-500)',maxWidth:560,marginBottom:40,fontSize:'var(--text-base)',lineHeight:'var(--leading-base)'}}>Income tax return filing for individuals, professionals, and businesses — computed accurately and filed on schedule, every year.</p>
<h2 style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-2xl)',color:'var(--navy-900)',marginBottom:24}}>How it's delivered</h2>
<div style={{display:'flex',flexDirection:'column',gap:14,marginBottom:48}}>
{steps.map((s,i)=><div key={s.n} style={{display:'flex',gap:18,background:'var(--white)',border:'1px solid var(--ink-100)',borderRadius:'var(--radius-lg)',padding:'20px 24px',borderLeft:`4px solid ${accents[i]}`}}>
<div style={{width:36,height:36,flexShrink:0,borderRadius:'50%',background:V2_TINT(accents[i]),color:accents[i],display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-mono)',fontWeight:'var(--weight-semibold)',fontSize:13}}>{s.n}</div>
<div>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-lg)',color:'var(--navy-900)',marginBottom:6}}>{s.t}</div>
<div style={{fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--ink-500)',lineHeight:'var(--leading-sm)'}}>{s.d}</div>
</div>
</div>)}
</div>
<h2 style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-2xl)',color:'var(--navy-900)',marginBottom:20}}>Frequently asked</h2>
<Accordion defaultOpenIndex={0} items={[
{question:'Who needs to file an ITR?',answer:'Anyone above the exemption threshold, plus professionals, freelancers, and businesses regardless of income.'},
{question:'Can you handle a delayed or notice case?',answer:'Yes — we handle belated returns and respond to scrutiny notices as part of this service.'},
]}/>
</div>
<div style={{position:'sticky',top:24,background:'var(--navy-900)',borderRadius:'var(--radius-xl)',padding:32,color:'var(--white)',overflow:'hidden'}}>
<div style={{position:'absolute',top:-40,right:-40,width:150,height:150,background:'var(--gold-500)',opacity:.15,borderRadius:'50%'}}/>
<div style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'var(--tracking-widest)',textTransform:'uppercase',color:'var(--gold-400)',marginBottom:10,position:'relative'}}>Get started</div>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-xl)',marginBottom:14,position:'relative'}}>Book your ITR filing</div>
<p style={{fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--navy-300)',lineHeight:'var(--leading-sm)',marginBottom:24,position:'relative'}}>Free consultation, no obligation. An advisor responds within the day.</p>
<Button variant="primary" fullWidth onClick={()=>go('chat')}>Chat With an Advisor</Button>
</div>
</div>
</section>
{React.createElement(window.FooterV2,{go})}
</div>;
}
function V2_TINT(c){
if(c==='var(--gold-500)')return 'var(--gold-050)';
if(c==='var(--status-positive)')return 'var(--paper-alt)';
return 'var(--navy-050)';
}
Object.assign(window,{ServiceDetailV2});
