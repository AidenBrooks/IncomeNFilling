const WHY_CHOOSE_US=[
{icon:'VER',title:'Verified Expertise',description:'Qualified professionals across taxation, compliance, and corporate law.'},
{icon:'SEC',title:'Complete Confidentiality',description:'Your data is protected on dedicated, secure infrastructure.'},
{icon:'CMP',title:'Compliance-First Approach',description:'Proactive guidance to keep your business fully up to date.'},
{icon:'YRS',title:'7+ Years of Excellence',description:'A proven track record of serving businesses since 2017.'},
{icon:'PAN',title:'Pan-India Reach',description:'Serving clients across every state with consistent quality.'},
{icon:'500',title:'500+ Businesses Served',description:'Trusted by startups, SMEs, and established enterprises alike.'},
];
const WHY_CHOOSE_SERVICE=[
{icon:'ALL',title:'All-in-One Solution',description:'From incorporation to annual filings, every compliance need lives under one roof.'},
{icon:'TIM',title:'On-Time Delivery',description:'Deadlines matter — every service is deployed promptly and accurately.'},
{icon:'FRE',title:'Free Consultation',description:'Expert guidance on taxation, business setup, and regulatory queries at no cost.'},
{icon:'TLR',title:'Tailored Approach',description:'Solutions crafted around your specific structure, scale, and objectives.'},
{icon:'UPD',title:'Proactive Updates',description:'Stay informed at every step — you get status updates, never surprises.'},
{icon:'LNG',title:'Multilingual Support',description:'We communicate in the language you\u2019re most comfortable with.'},
{icon:'CON',title:'Data Confidentiality',description:'Stored on secure, dedicated infrastructure — privacy is non-negotiable.'},
];
const CLIENTS=['SMND Developers','Farming India Pvt. Ltd.','Kesharvani Interiors','Gowebbly','Sher Bazzar','Vulmac Electrical','Bina Saree Center','Npk-knots Marine','Tirupati Vastralaya','Skyrise Traders','Seavision Maritime','Sensea Mercantile Academy','JP Electrical','Loknath Medical','RGV Agro Pvt. Ltd.'];
const CLIENT_ROWS=[CLIENTS.slice(0,5),CLIENTS.slice(5,10),CLIENTS.slice(10,15)];
const TESTIMONIALS=[
{name:'Aman Mishra',meta:'2023 · Google Review',initials:'AM',quote:'We are very much satisfied with their services. Anish personally tracks all progress and provides on-time updates and solutions. Highly recommended for new businesses and startups.'},
{name:'Vaibhav Gupta',meta:'2023 · Google Review',initials:'VG',quote:'This firm outperforms each one of them by miles. Superb follow-up and assistance. Would recommend to all. Thanks Anish ji & team.'},
{name:'Ajay Choudhary',meta:'2022 · Google Review',initials:'AC',quote:'The practice is well organised and each member of staff is very helpful. Mr. Anish is very friendly, warm and highly experienced.'},
{name:'Wheelectric EV Kits',meta:'2023 · Google Review',initials:'WE',quote:'Valuable service and professional management. Very satisfied with the quality of compliance support provided by their team.'},
{name:'Sagar Gidwani',meta:'2024 · Google Review',initials:'SG',quote:'Documents ready within few days and the way things are explained in simple language is impressive. Highly recommended.'},
];
const FAQ=[
{question:'How long does company incorporation take?',answer:'Once your documents are complete, incorporation is completed within days — tracked from submission to certificate.'},
{question:'What documents are required for GST registration?',answer:'PAN, business address proof, and bank details — we confirm the exact list for your entity type on a free call.'},
{question:'Do you serve clients outside Bhagalpur and Kolkata?',answer:'Yes — every service is available pan-India, coordinated remotely with the same on-time delivery.'},
{question:'What is the cost of your services?',answer:'Discussed directly during your consultation — book a free session and we\u2019ll scope a plan for your business.'},
{question:'How is my confidential data protected?',answer:'Your data is stored on secure, dedicated infrastructure — privacy and trust are non-negotiable for us.'},
{question:'Can you handle tax notices and scrutiny assessments?',answer:'Yes — notice handling and scrutiny response are available as a standing service, not just an add-on.'},
{question:'What is the first step to get started?',answer:'Reach us on WhatsApp or the contact form below — we\u2019ll scope your requirement on a free call.'},
];
const CATEGORIES=[
{icon:'GST',title:'GST Compliance',description:'Registration, returns, reconciliation, refunds.',count:14},
{icon:'ITR',title:'Income Tax',description:'Filing, assessments, capital gains, TDS/TCS.',count:11},
{icon:'INC',title:'Incorporation',description:'Company, LLP, OPC formation & startup registration.',count:12},
{icon:'ROC',title:'Corporate Compliance',description:'ROC filings, annual returns, board resolutions.',count:10},
{icon:'IBC',title:'Insolvency Advisory',description:'IBC filings, resolution support, restructuring.',count:6},
{icon:'DOC',title:'Documentation & Drafting',description:'Legal drafting, certifications, statutory records.',count:9},
{icon:'AGR',title:'Contracts & Agreements',description:'Vendor, employment, and partnership agreements.',count:8},
{icon:'ACC',title:'Accounting & Bookkeeping',description:'Books, payroll, MIS and audit support.',count:9},
];
const STEPS=[
{n:'01',t:'Share Requirements',d:'Tell us what you need — call, WhatsApp, or the form. We scope your business in one call.'},
{n:'02',t:'We Handle Everything',d:'Documents collected, filings prepared, authorities liaised — you get proactive updates at every step.'},
{n:'03',t:'Your Business is Compliant',d:'Certificates and filings confirmed and tracked — with reminders so nothing is ever missed.'},
];
function SectionHeader({eyebrow,title}){
return <div style={{textAlign:'center',marginBottom:48}}>
<div style={{display:'inline-flex',alignItems:'center',gap:8,padding:'6px 16px',borderRadius:'var(--radius-pill)',background:'var(--white)',boxShadow:'var(--shadow-sm)',fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'var(--tracking-widest)',textTransform:'uppercase',color:'var(--navy-700)',marginBottom:18}}>{eyebrow}</div>
<h2 style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-3xl)',color:'var(--navy-900)',margin:0,letterSpacing:'var(--tracking-tight)'}}>{title}</h2>
</div>;
}
function CategoryCard({icon,title,description,count,featured,index,onClick}){
return <div onClick={onClick} style={{gridColumn:featured?'span 2':'span 1',background:featured?'linear-gradient(135deg,var(--navy-050),var(--gold-050))':'var(--white)',borderRadius:'var(--radius-xl)',padding:'var(--space-6)',display:'flex',flexDirection:'column',gap:12,boxShadow:'var(--shadow-sm)',cursor:'pointer',position:'relative',transition:'transform .25s var(--ease-standard),box-shadow .25s var(--ease-standard)'}}
onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-5px)';e.currentTarget.style.boxShadow='var(--shadow-lg)';}}
onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='var(--shadow-sm)';}}>
<div style={{position:'absolute',top:22,right:24,fontFamily:'var(--font-mono)',fontSize:11,color:'var(--ink-300)'}}>{String(index+1).padStart(2,'0')}</div>
<div style={{width:featured?56:44,height:featured?56:44,borderRadius:'var(--radius-md)',background:'var(--navy-900)',color:'var(--gold-400)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-mono)',fontSize:featured?12:10,fontWeight:'var(--weight-semibold)'}}>{icon}</div>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:featured?'var(--text-xl)':'var(--text-base)',color:'var(--navy-900)'}}>{title}</div>
<div style={{fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--ink-500)',lineHeight:'var(--leading-sm)',flex:1}}>{description}</div>
<div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:4}}>
<span style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--navy-700)',background:'var(--paper-alt)',padding:'4px 10px',borderRadius:'var(--radius-pill)'}}>{count} services</span>
<span style={{width:28,height:28,borderRadius:'50%',border:'1px solid var(--ink-100)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,color:'var(--navy-700)',transition:'background .2s,color .2s'}}>→</span>
</div>
</div>;
}
function FeatureTile({icon,title,description,accent}){
return <div style={{background:'var(--white)',borderRadius:'var(--radius-xl)',padding:'var(--space-6)',display:'flex',flexDirection:'column',gap:'var(--space-3)',boxShadow:'var(--shadow-sm)',transition:'box-shadow .25s,transform .25s'}}
onMouseEnter={e=>{e.currentTarget.style.boxShadow='var(--shadow-md)';e.currentTarget.style.transform='translateY(-3px)';}}
onMouseLeave={e=>{e.currentTarget.style.boxShadow='var(--shadow-sm)';e.currentTarget.style.transform='none';}}>
<div style={{width:44,height:44,borderRadius:'50%',background:accent||'var(--gold-100)',color:'var(--navy-900)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-mono)',fontSize:10,fontWeight:'var(--weight-semibold)'}}>{icon}</div>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-base)',color:'var(--navy-900)'}}>{title}</div>
<div style={{fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--ink-500)',lineHeight:'var(--leading-sm)'}}>{description}</div>
</div>;
}
function Home({go}){
const {Button,ModuleCard,OfficeCard,Accordion,NavBar,Footer}=window.IncomeNFilingComplianceOSDesignSystem_6fdb9e;
const TrustPill=({label})=><div style={{display:'inline-flex',alignItems:'center',gap:8,background:'var(--white)',borderRadius:'var(--radius-pill)',padding:'8px 16px',boxShadow:'var(--shadow-sm)'}}>
<span style={{width:7,height:7,borderRadius:'50%',background:'var(--status-positive)'}}/>
<span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-xs)',color:'var(--ink-700)',letterSpacing:'var(--tracking-wide)'}}>{label}</span>
</div>;

const stepRefs=React.useRef([]);
const [activeStep,setActiveStep]=React.useState(0);
React.useEffect(()=>{
const obs=new IntersectionObserver(entries=>{
entries.forEach(e=>{if(e.isIntersecting)setActiveStep(Number(e.target.dataset.idx));});
},{rootMargin:'-42% 0px -42% 0px',threshold:0});
stepRefs.current.forEach(el=>el&&obs.observe(el));
return ()=>obs.disconnect();
},[]);

return <div style={{background:'var(--paper-alt)'}}>
<NavBar logoSrc="../../assets/logo.jpg" items={[{label:'Home',href:'#home',active:true},{label:'About',href:'#about'},{label:'Services',href:'#services'},{label:'Live Chat',href:'#chat'},{label:'Contact',href:'#contact'}]}/>

<section style={{position:'relative',padding:'96px 32px 76px',overflow:'hidden'}}>
<div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(var(--ink-100) 1.5px,transparent 1.5px)',backgroundSize:'26px 26px',WebkitMaskImage:'radial-gradient(ellipse 60% 55% at 50% 30%,black,transparent)',maskImage:'radial-gradient(ellipse 60% 55% at 50% 30%,black,transparent)'}}/>
<div style={{position:'absolute',top:-140,left:'6%',width:420,height:420,borderRadius:'50%',background:'var(--gold-300)',filter:'blur(120px)',opacity:.4}}/>
<div style={{position:'absolute',bottom:-170,right:'4%',width:460,height:460,borderRadius:'50%',background:'var(--navy-300)',filter:'blur(130px)',opacity:.3}}/>
<div style={{position:'relative',maxWidth:'var(--container-max)',margin:'0 auto',display:'grid',gridTemplateColumns:'1.05fr .95fr',gap:64,alignItems:'center'}}>
<div>
<div style={{display:'inline-flex',alignItems:'center',gap:8,padding:'6px 16px',borderRadius:'var(--radius-pill)',background:'var(--white)',boxShadow:'var(--shadow-sm)',marginBottom:24}}>
<span style={{width:7,height:7,borderRadius:'50%',background:'var(--status-positive)',animation:'pulse-dot 2.2s infinite'}}/>
<span style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'var(--tracking-wide)',color:'var(--navy-700)'}}>ALL SYSTEMS COMPLIANT · SINCE 2017</span>
</div>
<h1 style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-6xl)',color:'var(--navy-900)',margin:'0 0 20px',letterSpacing:'var(--tracking-tight)',lineHeight:1.08}}>Business compliance,<br/>made <span style={{background:'linear-gradient(100deg,var(--gold-600),var(--gold-400))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>effortless</span>.</h1>
<p style={{fontFamily:'var(--font-body)',fontSize:'var(--text-lg)',color:'var(--ink-500)',maxWidth:460,lineHeight:'var(--leading-lg)',marginBottom:28}}>A dedicated team handling taxation, GST, incorporation, and corporate law — so your business stays compliant without the busywork.</p>
<div style={{display:'flex',gap:10,flexWrap:'wrap',marginBottom:32}}>
<TrustPill label="EXPERT PROFESSIONALS"/>
<TrustPill label="7+ YEARS OF EXCELLENCE"/>
<TrustPill label="500+ BUSINESSES SERVED"/>
</div>
<div style={{display:'flex',gap:14}}>
<Button variant="primary" onClick={()=>go('contact')}>Book Free Consultation</Button>
<Button variant="ghost" onClick={()=>go('services')}>Explore Services</Button>
</div>
</div>
<div style={{position:'relative',height:440}}>
<div style={{position:'absolute',inset:'20px 36px 36px 0',borderRadius:'var(--radius-xl)',background:'linear-gradient(155deg,var(--navy-800),var(--navy-950))',overflow:'hidden',boxShadow:'var(--shadow-lg)'}}>
<div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)',backgroundSize:'34px 34px'}}/>
<div style={{position:'absolute',width:220,height:220,borderRadius:'50%',background:'radial-gradient(circle,var(--gold-400),transparent 70%)',opacity:.4,top:-60,right:-60}}/>
<div style={{position:'absolute',bottom:32,left:32,right:32}}>
<div style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--navy-300)',letterSpacing:'var(--tracking-wide)',marginBottom:6}}>SERVICES LIVE</div>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:56,color:'var(--white)',lineHeight:1,marginBottom:18}}>94</div>
<div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
{CATEGORIES.slice(0,3).map(c=><span key={c.icon} style={{fontFamily:'var(--font-mono)',fontSize:10,letterSpacing:'var(--tracking-wide)',color:'var(--navy-300)',border:'1px solid rgba(255,255,255,.16)',borderRadius:'var(--radius-pill)',padding:'5px 12px'}}>{c.icon}</span>)}
</div>
</div>
</div>
<div style={{position:'absolute',top:0,right:0,width:186,background:'rgba(255,255,255,.9)',backdropFilter:'blur(8px)',borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow-md)',padding:16,animation:'float-y 5s ease-in-out infinite'}}>
<div style={{width:40,height:40,borderRadius:'50%',background:'var(--gold-100)',color:'var(--gold-600)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-mono)',fontSize:10,fontWeight:'var(--weight-semibold)',marginBottom:10}}>PAN</div>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-base)',color:'var(--navy-900)'}}>500+ Businesses</div>
<div style={{fontFamily:'var(--font-body)',fontSize:11,color:'var(--ink-500)'}}>Served pan-India</div>
</div>
<div style={{position:'absolute',bottom:8,left:-10,width:172,background:'rgba(255,255,255,.9)',backdropFilter:'blur(8px)',borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow-md)',padding:14,display:'flex',alignItems:'center',gap:10,animation:'float-y 6s ease-in-out infinite',animationDelay:'-2.4s'}}>
<div style={{width:36,height:36,flexShrink:0,borderRadius:'50%',background:'var(--navy-100)',color:'var(--navy-700)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-mono)',fontSize:10,fontWeight:'var(--weight-semibold)'}}>YRS</div>
<div><div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:13,color:'var(--navy-900)'}}>7+ Years</div><div style={{fontFamily:'var(--font-body)',fontSize:11,color:'var(--ink-500)'}}>of excellence</div></div>
</div>
<div style={{position:'absolute',top:'40%',right:'0%',width:64,height:64,borderRadius:'50%',border:'1px dashed var(--gold-400)',opacity:.55,animation:'spin-slow 16s linear infinite'}}/>
</div>
</div>
</section>

<section style={{padding:'0 32px 90px',maxWidth:'var(--container-max)',margin:'0 auto'}}>
<div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
<div style={{background:'var(--white)',borderRadius:'var(--radius-xl)',padding:'var(--space-6)',boxShadow:'var(--shadow-sm)',display:'flex',alignItems:'center',gap:16}}>
<div style={{width:52,height:52,borderRadius:'50%',background:'var(--gold-100)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',color:'var(--gold-600)'}}>500+</div>
<div><div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-lg)',color:'var(--navy-900)'}}>Businesses Served</div><div style={{fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--ink-500)'}}>Across every state</div></div>
</div>
<div style={{background:'var(--white)',borderRadius:'var(--radius-xl)',padding:'var(--space-6)',boxShadow:'var(--shadow-sm)',display:'flex',alignItems:'center',gap:16}}>
<div style={{width:52,height:52,borderRadius:'50%',background:'var(--navy-100)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',color:'var(--navy-700)'}}>7+</div>
<div><div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-lg)',color:'var(--navy-900)'}}>Years of Excellence</div><div style={{fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--ink-500)'}}>Serving since 2017</div></div>
</div>
<div style={{background:'var(--white)',borderRadius:'var(--radius-xl)',padding:'var(--space-6)',boxShadow:'var(--shadow-sm)',display:'flex',alignItems:'center',gap:16}}>
<div style={{width:52,height:52,borderRadius:'50%',background:'var(--gold-100)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',color:'var(--gold-600)'}}>94</div>
<div><div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-lg)',color:'var(--navy-900)'}}>Services Live</div><div style={{fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--ink-500)'}}>10 categories</div></div>
</div>
</div>
</section>

<section style={{padding:'0 32px 90px',maxWidth:'var(--container-max)',margin:'0 auto'}}>
<SectionHeader eyebrow="Trust" title="Why Businesses Choose Us"/>
<div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
{WHY_CHOOSE_US.map((f,i)=><FeatureTile key={f.title} {...f} accent={i%2?'var(--navy-100)':'var(--gold-100)'}/>)}
</div>
</section>

<section style={{padding:'20px 32px 110px',maxWidth:920,margin:'0 auto'}}>
<SectionHeader eyebrow="Simple Process" title="How It Works"/>
<div style={{position:'relative'}}>
<div style={{position:'absolute',left:'50%',top:8,bottom:8,width:2,background:'linear-gradient(var(--ink-100),var(--gold-400),var(--ink-100))',transform:'translateX(-50%)'}}/>
{STEPS.map((s,i)=>{
const active=activeStep===i;
const iconRight=i%2===1;
const iconBlock=<div style={{display:'flex',flexDirection:iconRight?'row-reverse':'row',alignItems:'center',gap:14,justifyContent:iconRight?'flex-start':'flex-end'}}>
<div style={{width:56,height:56,flexShrink:0,borderRadius:'var(--radius-lg)',background:'var(--navy-900)',color:'var(--gold-400)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-lg)',boxShadow:active?'var(--shadow-md)':'none',transition:'box-shadow .4s'}}>{s.n}</div>
</div>;
const textBlock=<div style={{textAlign:iconRight?'right':'left'}}>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-xl)',color:'var(--navy-900)',marginBottom:8}}>{s.t}</div>
<div style={{fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--ink-500)',lineHeight:'var(--leading-sm)'}}>{s.d}</div>
</div>;
return <div key={s.n} data-idx={i} ref={el=>stepRefs.current[i]=el} style={{display:'grid',gridTemplateColumns:'1fr 56px 1fr',alignItems:'center',gap:28,padding:'26px 28px',borderRadius:'var(--radius-xl)',background:active?'var(--paper-alt)':'transparent',transition:'background .5s var(--ease-standard)',marginBottom:8}}>
{iconRight?textBlock:iconBlock}
<div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
<div style={{width:active?26:12,height:active?26:12,borderRadius:active?'50%':4,background:active?'linear-gradient(135deg,var(--gold-400),var(--navy-700))':'var(--white)',border:active?'none':'1px solid var(--ink-100)',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:active?'0 0 0 6px var(--paper-alt),0 0 22px rgba(239,168,46,.4)':'none',transition:'all .4s var(--ease-standard)'}}>
{active?<span style={{width:8,height:8,borderRadius:'50%',background:'var(--navy-950)'}}/>:null}
</div>
</div>
{iconRight?iconBlock:textBlock}
</div>;
})}
</div>
</section>

<section style={{padding:'90px 32px 120px',maxWidth:'var(--container-max)',margin:'0 auto',overflow:'visible'}}>
<SectionHeader eyebrow="Experience the Difference" title="Why Choose Income N Filing?"/>
<div style={{display:'flex',justifyContent:'center',padding:'20px 0 40px'}}>
{WHY_CHOOSE_SERVICE.map((f,i)=>{
const mid=(WHY_CHOOSE_SERVICE.length-1)/2;
const off=i-mid;
const rotate=off*6;
const rise=Math.abs(off)*10;
return <div key={f.title} style={{width:150,minHeight:200,marginLeft:i===0?0:-56,background:'var(--white)',borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow-md)',padding:'var(--space-4)',display:'flex',flexDirection:'column',gap:10,transform:`rotate(${rotate}deg) translateY(${rise}px)`,transformOrigin:'bottom center',transition:'transform .25s var(--ease-standard)',cursor:'default',position:'relative',zIndex:i}}
onMouseEnter={e=>{e.currentTarget.style.transform='rotate(0deg) translateY(-18px)';e.currentTarget.style.zIndex=50;}}
onMouseLeave={e=>{e.currentTarget.style.transform=`rotate(${rotate}deg) translateY(${rise}px)`;e.currentTarget.style.zIndex=i;}}>
<div style={{width:36,height:36,borderRadius:'50%',background:i%2?'var(--navy-100)':'var(--gold-100)',color:'var(--navy-900)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-mono)',fontSize:10,fontWeight:'var(--weight-semibold)'}}>{f.icon}</div>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-sm)',color:'var(--navy-900)'}}>{f.title}</div>
<div style={{fontFamily:'var(--font-body)',fontSize:11,color:'var(--ink-500)',lineHeight:1.5}}>{f.description}</div>
</div>;
})}
</div>
</section>

<section style={{padding:'0 32px 90px',maxWidth:'var(--container-max)',margin:'0 auto'}}>
<div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',marginBottom:28,flexWrap:'wrap',gap:12}}>
<div>
<div style={{display:'inline-flex',alignItems:'center',gap:8,padding:'6px 16px',borderRadius:'var(--radius-pill)',background:'var(--white)',boxShadow:'var(--shadow-sm)',fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'var(--tracking-widest)',textTransform:'uppercase',color:'var(--navy-700)',marginBottom:14}}>Modules</div>
<h2 style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-3xl)',color:'var(--navy-900)',margin:0}}>Service Categories</h2>
</div>
<Button variant="ghost" onClick={()=>go('services')}>View all 94 services</Button>
</div>
<div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gridAutoFlow:'dense',gap:16}}>
{CATEGORIES.map((c,i)=><CategoryCard key={c.title} {...c} index={i} featured={i===0||i===4} onClick={()=>go('services')}/>)}
</div>
</section>

<section style={{padding:'0 0 90px'}}>
<div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'0 32px'}}>
<SectionHeader eyebrow="And Many More" title="Our Clients"/>
<p style={{textAlign:'center',fontFamily:'var(--font-body)',color:'var(--ink-500)',marginTop:-24,marginBottom:40}}>Join our growing family of satisfied clients</p>
</div>
<div style={{position:'relative',overflow:'hidden',padding:'60px 0',width:'100vw',marginLeft:'calc(50% - 50vw)',background:'var(--white)'}}>
<div style={{position:'absolute',inset:0,zIndex:2,pointerEvents:'none',background:'linear-gradient(90deg,var(--white),transparent 10%,transparent 90%,var(--white))'}}/>
<div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',zIndex:3,width:200,height:200,borderRadius:'50%',background:'var(--navy-950)',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',boxShadow:'0 0 0 8px var(--white),0 0 90px 28px rgba(239,168,46,.4),0 0 150px 60px rgba(29,65,98,.25)'}}>
<div style={{position:'absolute',inset:-16,borderRadius:'50%',border:'1px dashed var(--gold-300)',animation:'spin-slow 22s linear infinite'}}>
<span style={{position:'absolute',top:-4,left:'50%',transform:'translateX(-50%)',width:8,height:8,borderRadius:'50%',background:'var(--gold-400)'}}/>
</div>
<div>
<div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:30,color:'var(--gold-400)'}}>500+</div>
<div style={{fontFamily:'var(--font-mono)',fontSize:10,color:'var(--navy-300)',letterSpacing:'var(--tracking-wide)',textTransform:'uppercase',marginTop:6}}>Businesses<br/>Trust Us</div>
</div>
</div>
<div style={{display:'flex',flexDirection:'column',gap:16}}>
{CLIENT_ROWS.map((row,ri)=><div key={ri} style={{display:'flex',gap:14,width:'max-content',animation:`ticker-scroll ${28+ri*7}s linear infinite`,animationDirection:ri===1?'reverse':'normal'}}>
{[...row,...row].map((c,i)=><div key={i} style={{padding:'15px 26px',borderRadius:'var(--radius-lg)',background:'var(--paper-alt)',border:'1px solid var(--ink-100)',fontFamily:'var(--font-body)',fontWeight:'var(--weight-medium)',fontSize:13,color:'var(--navy-800)',whiteSpace:'nowrap'}}>{c}</div>)}
</div>)}
</div>
</div>
</section>

<section style={{background:'var(--white)',padding:'90px 0'}}>
<div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'0 32px'}}>
<SectionHeader eyebrow="Client Stories" title="What Our Clients Say"/>
<div style={{textAlign:'center',marginTop:-24,marginBottom:36,fontFamily:'var(--font-mono)',fontSize:'var(--text-sm)',color:'var(--gold-600)'}}>★★★★★ Rated 4.9/5 on Google Reviews</div>
</div>
<div style={{position:'relative',overflow:'hidden'}}>
<div style={{position:'absolute',inset:0,zIndex:2,pointerEvents:'none',background:'linear-gradient(90deg,var(--white),transparent 8%,transparent 92%,var(--white))'}}/>
<div style={{display:'flex',gap:20,width:'max-content',animation:'ticker-scroll 42s linear infinite'}}>
{[...TESTIMONIALS,...TESTIMONIALS].map((t,i)=><div key={i} style={{width:320,background:'var(--paper-alt)',borderRadius:'var(--radius-xl)',padding:'var(--space-6)',display:'flex',flexDirection:'column',gap:14,flexShrink:0}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
<div style={{display:'flex',alignItems:'center',gap:12}}>
<div style={{width:44,height:44,borderRadius:'50%',background:'var(--navy-800)',color:'var(--gold-400)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:14}}>{t.initials}</div>
<div><div style={{fontFamily:'var(--font-body)',fontWeight:'var(--weight-semibold)',fontSize:14,color:'var(--navy-900)'}}>{t.name}</div><div style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--ink-500)'}}>{t.meta}</div></div>
</div>
<div style={{fontFamily:'var(--font-display)',fontSize:34,color:'var(--gold-300)',lineHeight:.6}}>"</div>
</div>
<div style={{fontFamily:'var(--font-body)',fontSize:13,color:'var(--ink-700)',lineHeight:1.6}}>{t.quote}</div>
</div>)}
</div>
</div>
</section>

<section style={{padding:'90px 32px',maxWidth:'var(--container-max)',margin:'0 auto'}}>
<SectionHeader eyebrow="Pan-India Compliance Services" title="Our Office Locations"/>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:20}}>
<OfficeCard city="Kolkata" region="West Bengal 700039" address="38M/1, New Ballygunge Rd, Kasba" live/>
<OfficeCard city="Bhagalpur" region="Bihar" address="Opposite Dr. R N Jha Clinic, Near Head Post Office" live/>
</div>
<div style={{background:'var(--navy-900)',borderRadius:'var(--radius-xl)',padding:'var(--space-8)',textAlign:'center',position:'relative',overflow:'hidden'}}>
<div style={{position:'absolute',top:-60,right:-60,width:200,height:200,borderRadius:'50%',background:'radial-gradient(circle,var(--gold-500),transparent 70%)',opacity:.35}}/>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-xl)',color:'var(--white)',marginBottom:8,position:'relative'}}>Nationwide Compliance Services</div>
<div style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-sm)',color:'var(--gold-400)',marginBottom:10,position:'relative'}}>We serve businesses across all states in India</div>
<p style={{fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--navy-300)',margin:0,position:'relative'}}>Whether you're in Delhi, Mumbai, Bangalore, Chennai, or any other city — every service is available with complete compliance support.</p>
</div>
</section>

<section style={{background:'var(--white)',padding:'90px 32px'}}>
<div style={{maxWidth:760,margin:'0 auto'}}>
<SectionHeader eyebrow="Quick Answers" title="Frequently Asked Questions"/>
<Accordion defaultOpenIndex={0} items={FAQ}/>
</div>
</section>

<section style={{padding:'80px 32px'}}>
<div style={{maxWidth:'var(--container-max)',margin:'0 auto',background:'linear-gradient(120deg,var(--navy-900),var(--navy-700))',borderRadius:'var(--radius-xl)',padding:'64px 48px',textAlign:'center',position:'relative',overflow:'hidden'}}>
<div style={{position:'absolute',bottom:-80,left:'50%',transform:'translateX(-50%)',width:280,height:280,borderRadius:'50%',background:'radial-gradient(circle,var(--gold-400),transparent 70%)',opacity:.3}}/>
<div style={{position:'relative'}}>
<h2 style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-4xl)',color:'var(--white)',margin:'0 0 14px',letterSpacing:'var(--tracking-tight)'}}>Ready to simplify your compliance?</h2>
<p style={{fontFamily:'var(--font-body)',color:'var(--navy-300)',fontSize:'var(--text-base)',marginBottom:32}}>Connect with a real advisor over WhatsApp — no queue, no bots.</p>
<Button variant="primary" onClick={()=>go('chat')}>Chat With an Advisor</Button>
</div>
</div>
</section>

<Footer tagline="Simplifying Compliance. Empowering Business." columns={[{title:'Quick Links',links:[{label:'Home',href:'#home'},{label:'Services',href:'#services'},{label:'Contact',href:'#contact'}]}]} contact={{phone:'+91 7890594600',email:'support@incomenfiling.com',region:'Pan-India Services'}}/>
</div>;
}
Object.assign(window,{Home});
