function ServiceDetail({go}){
const {NavBar,Footer,Badge,CommandButton,Accordion,CommandOutputLine}=window.IncomeNFilingComplianceOSDesignSystem_6fdb9e;
const steps=[
{n:'01',t:'Share Your Documents',d:'Form-16, bank statements, and investment proofs — via WhatsApp or the form below.'},
{n:'02',t:'We Prepare & Verify',d:'Our advisors compute your liability, apply eligible deductions, and confirm with you.'},
{n:'03',t:'Filed & Deployed',d:'Return is e-filed and acknowledged — status updates to deployed, with a copy sent to you.'},
];
return <div style={{background:'var(--paper)',minHeight:'100vh'}}>
<NavBar logoSrc="../../assets/logo.jpg" items={[{label:'Home',href:'#home'},{label:'About',href:'#about'},{label:'Services',href:'#services'},{label:'Live Chat',href:'#chat'},{label:'Contact',href:'#contact'}]}/>
<section style={{padding:'56px 32px 40px',maxWidth:'var(--container-max)',margin:'0 auto'}}>
<div style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-xs)',color:'var(--ink-500)',marginBottom:14}}>services / income-tax / <span style={{color:'var(--navy-900)'}}>itr-filing</span></div>
<div style={{display:'flex',alignItems:'center',gap:14,marginBottom:10,flexWrap:'wrap'}}>
<h1 style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-4xl)',color:'var(--navy-900)',margin:0}}>ITR Filing</h1>
<Badge status="positive" pulse>available</Badge>
</div>
<p style={{fontFamily:'var(--font-body)',color:'var(--ink-500)',maxWidth:620,marginBottom:28}}>Income tax return filing for individuals, professionals, and businesses — computed accurately and filed on schedule, every year.</p>
<div style={{display:'flex',gap:14,marginBottom:48,flexWrap:'wrap'}}>
<CommandButton onClick={()=>go('chat')}>book</CommandButton>
<CommandOutputLine label="itr-filing" status="available"/>
</div>
<h2 style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-2xl)',color:'var(--navy-900)',marginBottom:24}}>Deployment process</h2>
<div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20,marginBottom:48}}>
{steps.map(s=><div key={s.n} style={{background:'var(--white)',border:'1px solid var(--ink-100)',borderRadius:'var(--radius-lg)',padding:'var(--space-6)'}}>
<div style={{fontFamily:'var(--font-mono)',color:'var(--gold-600)',fontSize:'var(--text-sm)',marginBottom:10}}>{s.n}</div>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-lg)',color:'var(--navy-900)',marginBottom:6}}>{s.t}</div>
<div style={{fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--ink-500)',lineHeight:'var(--leading-sm)'}}>{s.d}</div>
</div>)}
</div>
<h2 style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-2xl)',color:'var(--navy-900)',marginBottom:20}}>Frequently asked</h2>
<Accordion defaultOpenIndex={0} items={[
{question:'Who needs to file an ITR?',answer:'Anyone above the exemption threshold, plus professionals, freelancers, and businesses regardless of income.'},
{question:'Can you handle a delayed or notice case?',answer:'Yes — we handle belated returns and respond to scrutiny notices as part of this service.'},
]}/>
</section>
<Footer tagline="Simplifying Compliance. Empowering Business." columns={[{title:'Quick Links',links:[{label:'Home',href:'#home'},{label:'Services',href:'#services'},{label:'Contact',href:'#contact'}]}]} contact={{phone:'+91 7890594600',email:'support@incomenfiling.com',region:'Pan-India Services'}}/>
</div>;
}
Object.assign(window,{ServiceDetail});
