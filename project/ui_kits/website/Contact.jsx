function Contact({go}){
const {NavBar,Footer,Input,Select,Textarea,Button,OfficeCard,Badge}=window.IncomeNFilingComplianceOSDesignSystem_6fdb9e;
return <div style={{background:'var(--navy-950)',minHeight:'100vh'}}>
<NavBar logoSrc="../../assets/logo.jpg" items={[{label:'Home',href:'#home'},{label:'About',href:'#about'},{label:'Services',href:'#services'},{label:'Live Chat',href:'#chat'},{label:'Contact',href:'#contact',active:true}]}/>
<section style={{padding:'64px 32px',maxWidth:'var(--container-max)',margin:'0 auto',color:'var(--white)'}}>
<div style={{textAlign:'center',marginBottom:44}}>
<div style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-xs)',color:'var(--gold-400)',letterSpacing:'var(--tracking-widest)',textTransform:'uppercase',marginBottom:8}}>Reach Us</div>
<h1 style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-4xl)',margin:'0 0 8px'}}>Get in Touch</h1>
<p style={{color:'var(--navy-300)',margin:0}}>Let's discuss your compliance and business needs.</p>
</div>
<div style={{display:'grid',gridTemplateColumns:'1fr 1.2fr',gap:28,marginBottom:44}}>
<div style={{display:'flex',flexDirection:'column',gap:14}}>
<OfficeCard city="Kolkata" region="West Bengal 700039" address="38M/1, New Ballygunge Rd, Kasba" live/>
<OfficeCard city="Bhagalpur" region="Bihar" address="Opposite Dr. R N Jha Clinic, Near Head Post Office" live/>
</div>
<div style={{background:'var(--white)',borderRadius:'var(--radius-lg)',padding:'var(--space-8)',display:'flex',flexDirection:'column',gap:16}}>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-xl)',color:'var(--navy-900)'}}>Request a Free Consultation</div>
<Input label="Your Full Name" placeholder="Jane Doe" required/>
<Input label="Email Address" placeholder="jane@company.com" required/>
<Select label="Select Service Category" options={['GST','Income Tax','Incorporation','Corporate Compliance']}/>
<Textarea label="Briefly describe your requirement" placeholder="e.g. need GST registration for a new LLP" required/>
<Button variant="primary" fullWidth>Book Free Consultation</Button>
</div>
</div>
</section>
<Footer tagline="Simplifying Compliance. Empowering Business." columns={[{title:'Quick Links',links:[{label:'Home',href:'#home'},{label:'Services',href:'#services'},{label:'Contact',href:'#contact'}]}]} contact={{phone:'+91 7890594600',email:'support@incomenfiling.com',region:'Pan-India Services'}}/>
</div>;
}
Object.assign(window,{Contact});
