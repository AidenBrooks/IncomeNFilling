function LiveChat({go}){
const {NavBar,Footer,CommandButton}=window.IncomeNFilingComplianceOSDesignSystem_6fdb9e;
const LOG=[
{who:'sys',text:'session opened · route: whatsapp'},
{who:'bot',text:'Hi — what do you need help with today?'},
{who:'user',text:'need gst registration for a new llp'},
{who:'bot',text:'gst-registration → status: available. Continue on WhatsApp to book a slot with an advisor.'},
];
return <div style={{background:'var(--paper)',minHeight:'100vh',display:'flex',flexDirection:'column'}}>
<NavBar logoSrc="../../assets/logo.jpg" items={[{label:'Home',href:'#home'},{label:'About',href:'#about'},{label:'Services',href:'#services'},{label:'Live Chat',href:'#chat',active:true},{label:'Contact',href:'#contact'}]}/>
<section style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',padding:'48px 24px',gap:16}}>
<div style={{maxWidth:640,width:'100%',textAlign:'center',marginBottom:8}}>
<h1 style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-3xl)',color:'var(--navy-900)',margin:'0 0 8px'}}>Live Chat</h1>
<p style={{fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--ink-500)',margin:0}}>A terminal front-end to our team — every session routes to a real advisor on WhatsApp.</p>
</div>
<div style={{width:'100%',maxWidth:640,background:'var(--term-bg)',border:'1px solid var(--term-border)',borderRadius:'var(--radius-md)',boxShadow:'var(--shadow-terminal)',fontFamily:'var(--font-mono)',overflow:'hidden'}}>
<div style={{display:'flex',alignItems:'center',gap:6,padding:'10px 14px',borderBottom:'1px solid var(--term-border)'}}>
<span style={{width:9,height:9,borderRadius:'50%',background:'var(--term-red)',opacity:.6}}/>
<span style={{width:9,height:9,borderRadius:'50%',background:'var(--term-amber)',opacity:.6}}/>
<span style={{width:9,height:9,borderRadius:'50%',background:'var(--term-green)',opacity:.6}}/>
<span style={{marginLeft:10,fontSize:'var(--text-xs)',color:'var(--term-fg-dim)'}}>chat://income-n-filing</span>
</div>
<div style={{padding:'18px 20px',display:'flex',flexDirection:'column',gap:12,minHeight:220}}>
{LOG.map((m,i)=><div key={i} style={{fontSize:'var(--text-sm)',color:m.who==='sys'?'var(--term-fg-dim)':m.who==='user'?'var(--term-amber)':'var(--term-fg)'}}>
{m.who==='sys'?'// ':m.who==='user'?'you $ ':'infn $ '}{m.text}
</div>)}
<div style={{fontSize:'var(--text-sm)',color:'var(--term-green)'}}>_<span style={{animation:'blink-cursor 1s step-end infinite'}}>_</span></div>
</div>
<div style={{borderTop:'1px solid var(--term-border)',padding:'14px 20px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
<span style={{fontSize:'var(--text-xs)',color:'var(--term-fg-dim)'}}>not a staffed live backend — continues on WhatsApp</span>
<CommandButton onClick={()=>window.open('https://wa.me/917890594600','_blank')}>continue on whatsapp</CommandButton>
</div>
</div>
</section>
<Footer tagline="Simplifying Compliance. Empowering Business." columns={[{title:'Quick Links',links:[{label:'Home',href:'#home'},{label:'Services',href:'#services'},{label:'Contact',href:'#contact'}]}]} contact={{phone:'+91 7890594600',email:'support@incomenfiling.com',region:'Pan-India Services'}}/>
</div>;
}
Object.assign(window,{LiveChat});
