const V2_ACCENTS=['var(--gold-500)','var(--navy-700)','var(--status-positive)','var(--navy-500)'];
const V2_TINTS=['var(--gold-050)','var(--navy-050)','var(--paper-alt)','var(--navy-050)'];
const WHY_CHOOSE_US=[
{icon:'VER',title:'Verified Expertise',description:'Qualified professionals across taxation, compliance, and corporate law.'},
{icon:'SEC',title:'Complete Confidentiality',description:'Your data is protected on dedicated, secure infrastructure.'},
{icon:'CMP',title:'Compliance-First Approach',description:'Proactive guidance to keep your business fully up to date.'},
{icon:'YRS',title:'7+ Years of Excellence',description:'A proven track record of serving businesses since 2017.'},
{icon:'PAN',title:'Pan-India Reach',description:'Serving clients across every state with consistent quality.'},
{icon:'500',title:'500+ Businesses Served',description:'Trusted by startups, SMEs, and established enterprises alike.'},
];
const CLIENTS=['SMND Developers','Farming India Pvt. Ltd.','Kesharvani Interiors','Gowebbly','Sher Bazzar','Vulmac Electrical','Bina Saree Center','Npk-knots Marine','Tirupati Vastralaya','Skyrise Traders','Seavision Maritime','Sensea Mercantile Academy','JP Electrical','Loknath Medical','RGV Agro Pvt. Ltd.'];
const CLIENT_ROWS=[CLIENTS.slice(0,5),CLIENTS.slice(5,10),CLIENTS.slice(10,15)];
const CLIENT_POS=[{l:8,t:22},{l:23,t:10},{l:41,t:14},{l:60,t:9},{l:77,t:15},{l:91,t:30},{l:7,t:46},{l:93,t:50},{l:9,t:70},{l:24,t:85},{l:42,t:88},{l:60,t:86},{l:77,t:80},{l:92,t:70},{l:50,t:5}];
const CLIENT_CARDS=[
{front:{name:'SMND Developers',domain:'smnddevelopers.in',sector:'Real Estate',ini:'SM',av:12},back:{name:'Skyrise Traders',domain:'skyrisetraders.com',sector:'Trading',ini:'ST',av:33}},
{front:{name:'Farming India',domain:'farmingindia.in',sector:'Agriculture',ini:'FI',av:8},back:{name:'RGV Agro',domain:'rgvagro.in',sector:'Agri-business',ini:'RA',av:52}},
{front:{name:'Kesharvani Interiors',domain:'kesharvani.in',sector:'Interiors',ini:'KI',av:23},back:{name:'Bina Saree Center',domain:'binasaree.in',sector:'Retail',ini:'BS',av:45}},
{front:{name:'Gowebbly',domain:'gowebbly.com',sector:'Technology',ini:'GW',av:15},back:{name:'Sensea Academy',domain:'senseamercantile.in',sector:'Education',ini:'SA',av:41}},
{front:{name:'Sher Bazzar',domain:'sherbazzar.in',sector:'Retail',ini:'SB',av:60},back:{name:'Tirupati Vastralaya',domain:'tirupativastra.in',sector:'Textiles',ini:'TV',av:29}},
{front:{name:'Vulmac Electrical',domain:'vulmac.in',sector:'Electrical',ini:'VE',av:3},back:{name:'JP Electrical',domain:'jpelectrical.in',sector:'Electrical',ini:'JP',av:56}},
{front:{name:'Npk-knots Marine',domain:'npkknots.in',sector:'Maritime',ini:'NM',av:11},back:{name:'Seavision Maritime',domain:'seavision.in',sector:'Maritime',ini:'SV',av:68}},
];
const TESTIMONIALS=[
{name:'Aman Mishra',meta:'2023 · Google Review',initials:'AM',av:13,quote:'We are very much satisfied with their services. Anish personally tracks all progress and provides on-time updates and solutions. Highly recommended for new businesses and startups.'},
{name:'Vaibhav Gupta',meta:'2023 · Google Review',initials:'VG',av:14,quote:'This firm outperforms each one of them by miles. Superb follow-up and assistance. Would recommend to all. Thanks Anish ji & team.'},
{name:'Ajay Choudhary',meta:'2022 · Google Review',initials:'AC',av:51,quote:'The practice is well organised and each member of staff is very helpful. Mr. Anish is very friendly, warm and highly experienced.'},
{name:'Wheelectric EV Kits',meta:'2023 · Google Review',initials:'WE',av:59,quote:'Valuable service and professional management. Very satisfied with the quality of compliance support provided by their team.'},
{name:'Sagar Gidwani',meta:'2024 · Google Review',initials:'SG',av:18,quote:'Documents ready within few days and the way things are explained in simple language is impressive. Highly recommended.'},
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
const HOME_CATEGORIES=[
{icon:'GST',title:'GST Compliance',description:'End-to-end GST from registration to refunds — filed accurately and on time, every cycle.',count:14,turnaround:'3–7 days',docs:'PAN, address proof, bank',services:['New GST registration','Monthly GSTR-1 & 3B filing','Annual return GSTR-9','Input tax credit reconciliation','GST refund applications','Notice & mismatch handling']},
{icon:'ITR',title:'Income Tax',description:'Returns, assessments and planning for individuals and businesses — maximum eligible refund.',count:11,turnaround:'2–5 days',docs:'Form 16, bank, investments',services:['ITR filing (all forms)','Capital gains computation','TDS/TCS returns','Scrutiny & assessment support','Advance tax planning','Notice response u/s 143']},
{icon:'INC',title:'Incorporation',description:'Launch your entity the right way — company, LLP or OPC with PAN, TAN and GST ready to go.',count:12,turnaround:'7–14 days',docs:'ID, address, photos',services:['Private Limited company','LLP formation','One Person Company','DIN & DSC procurement','Startup India registration','MOA & AOA drafting']},
{icon:'ROC',title:'Corporate Compliance',description:'Stay clean with the Registrar — every annual filing, resolution and record maintained.',count:10,turnaround:'Ongoing',docs:'Financials, registers',services:['Annual ROC returns','Board & AGM resolutions','Director appointments','Statutory register upkeep','Charge registration','Compliance calendar']},
{icon:'IBC',title:'Insolvency Advisory',description:'Navigate IBC with specialists — filings, resolution support and restructuring guidance.',count:6,turnaround:'Case-based',docs:'Debt records, filings',services:['IBC petition filing','Resolution professional support','Creditor claim management','Restructuring advisory','Liquidation assistance','NCLT representation']},
{icon:'DOC',title:'Documentation & Drafting',description:'Airtight legal documents and certifications — drafted, reviewed and statutorily sound.',count:9,turnaround:'2–4 days',docs:'Party details, terms',services:['Legal drafting','Statutory certifications','Affidavits & declarations','Record maintenance','Notarisation support','Deed preparation']},
{icon:'AGR',title:'Contracts & Agreements',description:'Protect every deal — vendor, employment and partnership agreements built to hold.',count:8,turnaround:'2–5 days',docs:'Party & scope details',services:['Vendor agreements','Employment contracts','Partnership deeds','NDAs & MOUs','Service agreements','Contract review']},
{icon:'ACC',title:'Accounting & Bookkeeping',description:'Clean books, on time — accounting, payroll and MIS with audit-ready records.',count:9,turnaround:'Monthly',docs:'Invoices, statements',services:['Monthly bookkeeping','Payroll processing','MIS reporting','Bank reconciliation','Audit support','Financial statements']},
];
const STEPS=[
{n:'01',t:'Share Requirements',d:'Tell us what you need — call, WhatsApp, or the form. We scope your business in one call.'},
{n:'02',t:'We Handle Everything',d:'Documents collected, filings prepared, authorities liaised — you get proactive updates at every step.'},
{n:'03',t:'Your Business is Compliant',d:'Certificates and filings confirmed and tracked — with reminders so nothing is ever missed.'},
];
function CountUpV2({to,suffix='',duration=1300}){
const [n,setN]=React.useState(0);
const ref=React.useRef(null);
const started=React.useRef(false);
React.useEffect(()=>{
const obs=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting&&!started.current){
started.current=true;
const start=performance.now();
const step=now=>{
const p=Math.min(1,(now-start)/duration);
setN(Math.floor(p*to));
if(p<1)requestAnimationFrame(step);else setN(to);
};
requestAnimationFrame(step);
}
});
},{threshold:.4});
if(ref.current)obs.observe(ref.current);
return ()=>obs.disconnect();
},[to,duration]);
return <span ref={ref}>{n}{suffix}</span>;
}
function EyebrowV2({children,light}){
return <div style={{display:'inline-flex',alignItems:'center',gap:8,padding:'6px 16px',borderRadius:'var(--radius-pill)',background:light?'rgba(255,255,255,.1)':'var(--navy-050)',fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'var(--tracking-widest)',textTransform:'uppercase',color:light?'var(--gold-400)':'var(--navy-700)'}}>{children}</div>;
}
function SectionHeadV2({eyebrow,title,sub,dark}){
return <div style={{textAlign:'center',marginBottom:48}}>
<EyebrowV2 light={dark}>{eyebrow}</EyebrowV2>
<h2 style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-3xl)',color:dark?'var(--white)':'var(--navy-900)',margin:'16px 0 0',letterSpacing:'var(--tracking-tight)'}}>{title}</h2>
{sub&&<p style={{fontFamily:'var(--font-body)',color:dark?'var(--navy-300)':'var(--ink-500)',margin:'10px auto 0',maxWidth:520}}>{sub}</p>}
</div>;
}
function NavBarHomeV2({go,active}){
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
function HeroCTAButtonV2({variant,children,onClick}){
const [hover,setHover]=React.useState(false);
const primary=variant==='primary';
return <button onClick={onClick} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{display:'inline-flex',alignItems:'center',gap:8,fontFamily:'var(--font-body)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-base)',padding:'14px 26px',borderRadius:'var(--radius-pill)',border:primary?'none':'1.5px solid var(--navy-900)',background:primary?'var(--gold-500)':(hover?'var(--navy-900)':'transparent'),color:primary?'var(--navy-950)':(hover?'var(--white)':'var(--navy-900)'),cursor:'pointer',boxShadow:primary&&hover?'0 12px 26px rgba(239,168,46,.4)':'none',transform:hover?'translateY(-2px)':'none',transition:'all .2s var(--ease-standard)'}}>
{children}<span style={{transition:'transform .2s',transform:hover?'translateX(4px)':'none',display:'inline-block'}}>→</span>
</button>;
}
function ServiceFinderV2({onSelect}){
const [q,setQ]=React.useState('');
const [active,setActive]=React.useState(0);
React.useEffect(()=>{setActive(0);},[q]);
const filtered=HOME_CATEGORIES.filter(cat=>cat.title.toLowerCase().includes(q.toLowerCase())).slice(0,4);
const c=filtered[active];
const realIndex=c?HOME_CATEGORIES.indexOf(c):0;
const accent=V2_ACCENTS[realIndex%4],tint=V2_TINTS[realIndex%4];
return <div style={{position:'relative',borderRadius:'var(--radius-xl)',background:'var(--white)',boxShadow:'var(--shadow-lg)',padding:26,display:'flex',flexDirection:'column',gap:14}}>
<div>
<div style={{fontFamily:'var(--font-mono)',fontSize:10,letterSpacing:'var(--tracking-widest)',textTransform:'uppercase',color:'var(--gold-600)',marginBottom:4}}>Quick Service Finder</div>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-lg)',color:'var(--navy-900)'}}>Not sure where to start?</div>
</div>
<div style={{display:'flex',alignItems:'center',gap:8,background:'var(--paper-alt)',borderRadius:'var(--radius-pill)',padding:'9px 14px'}}>
<span style={{fontSize:13,color:'var(--ink-300)'}}>⌕</span>
<input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search a service category…" style={{border:'none',background:'none',outline:'none',fontFamily:'var(--font-body)',fontSize:13,width:'100%',color:'var(--navy-900)'}}/>
</div>
{filtered.length>0?<React.Fragment>
<div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:8}}>
{filtered.map((cat,i)=>{const ri=HOME_CATEGORIES.indexOf(cat);return <button key={cat.icon} onClick={()=>setActive(i)} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:6,padding:'12px 4px',borderRadius:'var(--radius-md)',border:active===i?`2px solid ${V2_ACCENTS[ri%4]}`:'1px solid var(--ink-100)',background:active===i?V2_TINTS[ri%4]:'var(--white)',cursor:'pointer',transition:'all .2s'}}>
<span style={{width:30,height:30,borderRadius:'50%',background:active===i?V2_ACCENTS[ri%4]:'var(--paper-alt)',color:active===i?'var(--white)':'var(--ink-500)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-mono)',fontSize:9,fontWeight:'var(--weight-semibold)',transition:'all .2s'}}>{cat.icon}</span>
<span style={{fontFamily:'var(--font-body)',fontSize:10,color:'var(--navy-800)',textAlign:'center',lineHeight:1.2}}>{cat.title.split(' ')[0]}</span>
</button>;})}
</div>
<div key={active+q} style={{background:tint,borderRadius:'var(--radius-md)',padding:16,display:'flex',flexDirection:'column',gap:8,animation:'fade-in-up .35s var(--ease-standard)'}}>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-base)',color:'var(--navy-900)'}}>{c.title}</div>
<div style={{fontFamily:'var(--font-body)',fontSize:12,color:'var(--ink-500)',lineHeight:1.5}}>{c.description}</div>
<div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
<span style={{fontFamily:'var(--font-mono)',fontSize:11,color:accent,fontWeight:'var(--weight-semibold)'}}>{c.count} services</span>
<span onClick={onSelect} style={{fontFamily:'var(--font-body)',fontSize:12,fontWeight:'var(--weight-semibold)',color:accent,cursor:'pointer'}}>View →</span>
</div>
</div>
</React.Fragment>:<div style={{fontFamily:'var(--font-body)',fontSize:13,color:'var(--ink-500)',textAlign:'center',padding:'18px 0'}}>No matches — try a different term.</div>}
<div onClick={onSelect} style={{textAlign:'center',fontFamily:'var(--font-mono)',fontSize:11,color:'var(--ink-300)',cursor:'pointer'}}>or explore all 94 services →</div>
</div>;
}
function CategoryExplorerV2({categories,onSelect}){
const [active,setActive]=React.useState(0);
const c=categories[active];
const accent=V2_ACCENTS[active%4],tint=V2_TINTS[active%4];
return <div style={{display:'grid',gridTemplateColumns:'320px 1fr',background:'var(--white)',borderRadius:'var(--radius-xl)',overflow:'hidden',border:'1px solid var(--ink-100)',boxShadow:'var(--shadow-md)',minHeight:400}}>
<div style={{background:'var(--paper-alt)',padding:12,display:'flex',flexDirection:'column',gap:4,overflowY:'auto',borderRight:'1px solid var(--ink-100)'}}>
{categories.map((cat,i)=><button key={cat.title} onClick={()=>setActive(i)} style={{display:'flex',alignItems:'center',gap:12,padding:'13px 14px',borderRadius:'var(--radius-md)',border:'none',background:active===i?'var(--white)':'transparent',boxShadow:active===i?'var(--shadow-sm)':'none',cursor:'pointer',textAlign:'left',fontFamily:'var(--font-body)'}}>
<span style={{width:34,height:34,flexShrink:0,borderRadius:'var(--radius-md)',background:V2_TINTS[i%4],color:V2_ACCENTS[i%4],display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-mono)',fontSize:10,fontWeight:'var(--weight-semibold)'}}>{cat.icon}</span>
<span style={{fontSize:'var(--text-sm)',fontWeight:active===i?'var(--weight-semibold)':'var(--weight-medium)',color:active===i?'var(--navy-900)':'var(--ink-700)',flex:1}}>{cat.title}</span>
<span style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--ink-300)'}}>{cat.count}</span>
</button>)}
</div>
<div style={{padding:'40px 44px',display:'flex',flexDirection:'column',gap:16,position:'relative'}}>
<div style={{position:'absolute',top:0,right:0,width:160,height:160,background:tint,opacity:.55,borderRadius:'0 0 0 100%'}}/>
<div key={active} style={{position:'relative',display:'flex',flexDirection:'column',gap:16,animation:'fade-in-up .35s var(--ease-standard)'}}>
<div style={{display:'flex',alignItems:'center',gap:14}}>
<div style={{width:54,height:54,borderRadius:'var(--radius-lg)',background:tint,color:accent,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-mono)',fontSize:13,fontWeight:'var(--weight-semibold)'}}>{c.icon}</div>
<div>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-2xl)',color:'var(--navy-900)'}}>{c.title}</div>
<div style={{fontFamily:'var(--font-mono)',fontSize:12,color:accent,fontWeight:'var(--weight-semibold)'}}>{c.count} services in this module</div>
</div>
</div>
<div style={{fontFamily:'var(--font-body)',fontSize:'var(--text-base)',color:'var(--ink-500)',lineHeight:'var(--leading-base)',maxWidth:440}}>{c.description}</div>
<div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
<div style={{display:'flex',alignItems:'center',gap:8,background:'var(--paper-alt)',borderRadius:'var(--radius-md)',padding:'8px 14px'}}>
<span style={{fontFamily:'var(--font-mono)',fontSize:9,letterSpacing:'var(--tracking-wide)',textTransform:'uppercase',color:'var(--ink-300)'}}>Turnaround</span>
<span style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:13,color:'var(--navy-900)'}}>{c.turnaround}</span>
</div>
<div style={{display:'flex',alignItems:'center',gap:8,background:'var(--paper-alt)',borderRadius:'var(--radius-md)',padding:'8px 14px'}}>
<span style={{fontFamily:'var(--font-mono)',fontSize:9,letterSpacing:'var(--tracking-wide)',textTransform:'uppercase',color:'var(--ink-300)'}}>You'll need</span>
<span style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:13,color:'var(--navy-900)'}}>{c.docs}</span>
</div>
</div>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
{c.services.map((sv,si)=><div key={sv} style={{display:'flex',alignItems:'center',gap:10,padding:'10px 12px',borderRadius:'var(--radius-md)',background:'var(--white)',border:'1px solid var(--ink-100)',animation:`fade-in-up .35s var(--ease-standard) ${si*0.06}s both`}}>
<span style={{width:20,height:20,flexShrink:0,borderRadius:'50%',background:tint,color:accent,display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:700}}>✓</span>
<span style={{fontFamily:'var(--font-body)',fontSize:12.5,color:'var(--ink-700)'}}>{sv}</span>
</div>)}
</div>
<div><button onClick={onSelect} style={{fontFamily:'var(--font-body)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-sm)',padding:'12px 22px',borderRadius:'var(--radius-pill)',border:'none',background:accent,color:'var(--white)',cursor:'pointer'}}>View all {c.title} services →</button></div>
</div>
</div>
</div>;
}
function BotCharacterV2({hovered}){
const eyeCol='#f6a94e',eyeGlow=hovered?'#ffd27a':eyeCol;
return <svg viewBox="0 0 100 134" width="100%" height="100%" style={{overflow:'visible',animation:'botbob 4s ease-in-out infinite'}}>
<ellipse cx="50" cy="128" rx="30" ry="5" fill="rgba(15,42,66,.16)"/>
<rect x="24" y="118" width="24" height="13" rx="6" fill="#f3ddd0"/>
<rect x="52" y="118" width="24" height="13" rx="6" fill="#f3ddd0"/>
<rect x="30" y="96" width="15" height="26" rx="7" fill="#2a2d33"/>
<rect x="55" y="96" width="15" height="26" rx="7" fill="#2a2d33"/>
<g style={{transformOrigin:'16px 66px',transformBox:'fill-box',animation:hovered?'botarm 1.1s ease-in-out infinite':'botarm 2.8s ease-in-out infinite'}}>
<rect x="8" y="60" width="18" height="42" rx="9" fill="#7f8894"/>
<circle cx="17" cy="103" r="8" fill="#17191e"/>
</g>
<g style={{transformOrigin:'84px 66px',transformBox:'fill-box',animation:hovered?'wave .8s ease-in-out infinite':'wave 2.6s ease-in-out infinite'}}>
<rect x="74" y="60" width="18" height="42" rx="9" fill="#7f8894"/>
<circle cx="83" cy="103" r="8" fill="#17191e"/>
</g>
<path d="M22 104 q28 12 56 0 v-42 q0-20 -28 -20 t-28 20 z" fill="#8a929c"/>
<rect x="36" y="84" width="28" height="17" rx="8" fill="#79828d"/>
<path d="M24 66 q26 -30 52 0 q4 -34 -26 -34 t-26 34 z" fill="#8a929c"/>
<path d="M18 62 q32 -46 64 0 q6 -42 -32 -42 t-32 42 z" fill="#939ba5"/>
<rect x="28" y="20" width="44" height="46" rx="16" fill="#14171c"/>
<rect x="28" y="20" width="44" height="46" rx="16" fill="none" stroke="#2b2f37" strokeWidth="1.5"/>
<g style={{transformOrigin:'50px 42px',transformBox:'fill-box',animation:'botblink 4.5s ease-in-out infinite'}}>
<g style={{animation:'boteye 2s ease-in-out infinite',filter:`drop-shadow(0 0 5px ${eyeGlow})`}}>
<rect x="38" y="35" width="7" height="15" rx="3.5" fill={eyeGlow}/>
<rect x="55" y="35" width="7" height="15" rx="3.5" fill={eyeGlow}/>
</g>
</g>
<path d="M44 60 v11" stroke="#f2cdb8" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
<path d="M53 60 v11" stroke="#f2cdb8" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
<circle cx="44" cy="72" r="2" fill="#f2cdb8"/>
<circle cx="53" cy="72" r="2" fill="#f2cdb8"/>
</svg>;
}
function SocialIconV2({d,label}){
const [h,setH]=React.useState(false);
return <a href="#" aria-label={label} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{width:38,height:38,borderRadius:'50%',border:'1px solid '+(h?'var(--gold-500)':'rgba(255,255,255,.18)'),background:h?'var(--gold-500)':'transparent',display:'flex',alignItems:'center',justifyContent:'center',textDecoration:'none',transform:h?'translateY(-3px)':'none',transition:'all .18s var(--ease-standard)'}}>
<svg viewBox="0 0 24 24" width="17" height="17" fill={h?'var(--navy-950)':'var(--white)'}>{d}</svg>
</a>;
}
const SOCIALS=[
{label:'LinkedIn',d:<path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 002.48 2.5A2.5 2.5 0 007.5 6a2.5 2.5 0 00-2.52-2.5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05 4 0 4.74 2.6 4.74 6V21h-4v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-4z"/>},
{label:'Facebook',d:<path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z"/>},
{label:'Instagram',d:<path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 6.85A5.15 5.15 0 1017.15 12 5.15 5.15 0 0012 6.85zm0 8.5A3.35 3.35 0 1115.35 12 3.35 3.35 0 0112 15.35zm5.35-9.9a1.2 1.2 0 101.2 1.2 1.2 1.2 0 00-1.2-1.2z"/>},
{label:'X',d:<path d="M17.53 3H20l-5.6 6.4L21 21h-5.1l-4-5.2-4.6 5.2H4.8l6-6.85L3.4 3h5.24l3.62 4.78zM16.6 19.5h1.4L7.5 4.4H6z"/>},
{label:'YouTube',d:<path d="M21.6 7.2a2.5 2.5 0 00-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.83.43A2.5 2.5 0 002.4 7.2 26 26 0 002 12a26 26 0 00.4 4.8 2.5 2.5 0 001.77 1.77C5.75 19 12 19 12 19s6.25 0 7.83-.43a2.5 2.5 0 001.77-1.77A26 26 0 0022 12a26 26 0 00-.4-4.8zM10 15V9l5.2 3z"/>},
];
function CField({tag='input',children,...props}){
const [f,setF]=React.useState(false);
const T=tag;
return <T {...props} onFocus={()=>setF(true)} onBlur={()=>setF(false)} style={{fontFamily:'var(--font-body)',fontSize:14,padding:'12px 14px',borderRadius:'var(--radius-md)',border:'1.5px solid '+(f?'var(--gold-500)':'var(--ink-100)'),background:f?'var(--white)':'var(--paper-alt)',color:'var(--navy-900)',outline:'none',width:'100%',boxSizing:'border-box',boxShadow:f?'0 0 0 3px rgba(239,168,46,.16)':'none',transition:'all .15s',...(tag==='textarea'?{resize:'vertical'}:{})}}>{children}</T>;
}
function ContactSectionV2({go}){
const [sent,setSent]=React.useState(false);
const field={fontFamily:'var(--font-body)',fontSize:14,padding:'12px 14px',borderRadius:'var(--radius-md)',border:'1px solid var(--ink-100)',background:'var(--white)',color:'var(--navy-900)',outline:'none',width:'100%',boxSizing:'border-box'};
const METHODS=[
{k:'Call us',v:'+91 7890594600',href:'tel:+917890594600',d:<path d="M6.6 10.8a15.6 15.6 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1z"/>},
{k:'WhatsApp',v:'Chat instantly',href:'https://wa.me/917890594600',wa:true,d:<path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.09c-.24.68-1.42 1.32-1.95 1.36-.5.05-.99.24-3.32-.69-2.8-1.1-4.6-3.96-4.74-4.15-.14-.19-1.14-1.52-1.14-2.9 0-1.38.72-2.06.98-2.34.24-.26.53-.33.71-.33l.5.01c.16 0 .38-.06.59.45.24.58.81 2 .88 2.15.07.14.12.31.02.5-.28.55-.57.75-.79 1.02-.14.16-.29.34-.13.62.16.28.72 1.19 1.55 1.93 1.07.95 1.97 1.25 2.25 1.39.28.14.44.12.6-.07.19-.21.69-.8.87-1.08.19-.28.37-.23.62-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.32.07.12.07.66-.17 1.34z"/>},
{k:'Email us',v:'support@incomenfiling.com',href:'mailto:support@incomenfiling.com',d:<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm8 7L4 6.5V8l8 4.5L20 8V6.5z"/>},
];
return <section id="contact" style={{padding:'96px 32px',background:'var(--white)',position:'relative',overflow:'hidden'}}>
<div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(rgba(43,108,214,.16) 1px,transparent 1px)',backgroundSize:'26px 26px',opacity:.7}}/>
<div style={{position:'absolute',top:-120,left:'50%',transform:'translateX(-50%)',width:560,height:340,background:'radial-gradient(circle,rgba(239,168,46,.14),transparent 68%)'}}/>
<div style={{position:'relative',maxWidth:1060,margin:'0 auto'}}>
<div style={{textAlign:'center',marginBottom:44}}>
<EyebrowV2>Get In Touch</EyebrowV2>
<h2 style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-3xl)',color:'var(--navy-900)',margin:'16px 0 0',letterSpacing:'var(--tracking-tight)'}}>Let's start a conversation</h2>
<p style={{fontFamily:'var(--font-body)',color:'var(--ink-500)',margin:'10px auto 0',maxWidth:480}}>Tell us what you need — a real advisor replies, usually within a couple of hours.</p>
</div>
<div style={{display:'grid',gridTemplateColumns:'0.92fr 1.08fr',background:'var(--white)',borderRadius:'var(--radius-xl)',overflow:'hidden',border:'1px solid var(--ink-100)',boxShadow:'0 30px 60px rgba(15,42,66,.16)'}}>
<div style={{position:'relative',overflow:'hidden',background:'linear-gradient(155deg,var(--gold-300,#f7cf82),var(--gold-500) 52%,var(--gold-600,#d8901f))',padding:'34px 30px',display:'flex',flexDirection:'column',gap:20}}>
<div style={{position:'absolute',top:-70,right:-60,width:210,height:210,borderRadius:'50%',border:'22px solid rgba(15,42,66,.1)'}}/>
<div style={{position:'absolute',bottom:-80,left:-60,width:190,height:190,borderRadius:'50%',background:'rgba(255,255,255,.16)'}}/>
<div style={{position:'relative',display:'inline-flex',alignSelf:'flex-start',alignItems:'center',gap:7,background:'rgba(15,42,66,.14)',borderRadius:'var(--radius-pill)',padding:'6px 13px'}}>
<span style={{width:6,height:6,borderRadius:'50%',background:'var(--navy-950)',animation:'pulse-dot 2s infinite'}}/>
<span style={{fontFamily:'var(--font-mono)',fontSize:10,letterSpacing:'.05em',textTransform:'uppercase',color:'var(--navy-950)',fontWeight:'var(--weight-semibold)'}}>Replies in under 2 hours</span>
</div>
<div style={{position:'relative'}}>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-2xl)',color:'var(--navy-950)',lineHeight:1.15}}>We'd love to<br/>hear from you.</div>
<div style={{fontFamily:'var(--font-body)',fontSize:13,color:'rgba(15,42,66,.72)',marginTop:8,maxWidth:280}}>A quick question or a full compliance plan — reach us however suits you best.</div>
</div>
<div style={{position:'relative',display:'flex',flexDirection:'column',gap:10}}>
{METHODS.map(m=><a key={m.k} href={m.href} target={m.href.startsWith('http')?'_blank':undefined} rel="noreferrer" onMouseEnter={e=>{e.currentTarget.style.transform='translateX(4px)';e.currentTarget.style.boxShadow='var(--shadow-md)';}} onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='var(--shadow-sm)';}} style={{display:'flex',alignItems:'center',gap:13,padding:'12px 14px',borderRadius:'var(--radius-lg)',background:'var(--white)',boxShadow:'var(--shadow-sm)',textDecoration:'none',transition:'all .2s var(--ease-standard)'}}>
<span style={{width:38,height:38,flexShrink:0,borderRadius:'50%',background:m.wa?'var(--whatsapp-green)':'var(--navy-900)',display:'flex',alignItems:'center',justifyContent:'center'}}><svg viewBox="0 0 24 24" width="18" height="18" fill={m.wa?'var(--white)':'var(--gold-400)'}>{m.d}</svg></span>
<span style={{flex:1,minWidth:0}}>
<span style={{display:'block',fontFamily:'var(--font-mono)',fontSize:9,letterSpacing:'.05em',textTransform:'uppercase',color:'var(--gold-600,#c9820f)'}}>{m.k}</span>
<span style={{display:'block',fontFamily:'var(--font-body)',fontWeight:'var(--weight-semibold)',fontSize:13.5,color:'var(--navy-900)',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{m.v}</span>
</span>
<span style={{fontFamily:'var(--font-mono)',fontSize:15,color:'var(--ink-300)'}}>›</span>
</a>)}
</div>
<div style={{position:'relative',marginTop:'auto',display:'grid',gridTemplateColumns:'repeat(3,1fr)',paddingTop:18,borderTop:'1px solid rgba(15,42,66,.16)'}}>
{[['500+','Clients'],['4.9★','Rating'],['<2hr','Avg reply']].map((s,si)=><div key={s[1]} style={{textAlign:'center',borderLeft:si?'1px solid rgba(15,42,66,.16)':'none'}}>
<div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'var(--text-xl)',color:'var(--navy-950)'}}>{s[0]}</div>
<div style={{fontFamily:'var(--font-mono)',fontSize:9,letterSpacing:'.05em',textTransform:'uppercase',color:'rgba(15,42,66,.6)',marginTop:2}}>{s[1]}</div>
</div>)}
</div>
</div>
<div style={{padding:'34px 32px'}}>
{sent?<div style={{height:'100%',minHeight:300,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',gap:14}}>
<div style={{width:66,height:66,borderRadius:'50%',background:'var(--status-positive)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--white)',fontSize:32,fontWeight:700,animation:'pop-in .5s var(--ease-emphasized) both'}}>✓</div>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-xl)',color:'var(--navy-900)'}}>Thanks — we'll be in touch!</div>
<div style={{fontFamily:'var(--font-body)',fontSize:14,color:'var(--ink-500)',maxWidth:340}}>Our team typically responds within a few working hours. For anything urgent, message us on WhatsApp.</div>
<button onClick={()=>setSent(false)} style={{fontFamily:'var(--font-body)',fontWeight:'var(--weight-semibold)',fontSize:13,padding:'10px 20px',borderRadius:'var(--radius-pill)',border:'1px solid var(--ink-100)',background:'var(--white)',color:'var(--navy-800)',cursor:'pointer'}}>Send another →</button>
</div>:<React.Fragment>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-xl)',color:'var(--navy-900)',marginBottom:4}}>Send us a message</div>
<div style={{fontFamily:'var(--font-body)',fontSize:13,color:'var(--ink-500)',marginBottom:20}}>We'll get back with a clear next step — no obligation.</div>
<form onSubmit={e=>{e.preventDefault();setSent(true);}} style={{display:'flex',flexDirection:'column',gap:14}}>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
<CField required placeholder="Your name"/>
<CField required placeholder="Phone"/>
</div>
<CField required type="email" placeholder="Email address"/>
<CField tag="select" defaultValue=""><option value="" disabled>What do you need help with?</option>{HOME_CATEGORIES.map(c=><option key={c.title}>{c.title}</option>)}</CField>
<CField tag="textarea" rows="4" placeholder="Tell us a little about your requirement…"/>
<div style={{display:'flex',alignItems:'center',gap:14,flexWrap:'wrap'}}>
<HeroCTAButtonV2 variant="primary">Send Message</HeroCTAButtonV2>
<span style={{fontFamily:'var(--font-body)',fontSize:12,color:'var(--ink-300)'}}>or <a href="https://wa.me/917890594600" target="_blank" rel="noreferrer" style={{color:'var(--whatsapp-green)',fontWeight:'var(--weight-semibold)'}}>chat on WhatsApp</a></span>
</div>
</form>
</React.Fragment>}
</div>
</div>
</div>
</section>;
}
function FooterV2({go}){
const [email,setEmail]=React.useState('');
const [ok,setOk]=React.useState(false);
const links=[
{title:'Quick Links',items:[['Home','home'],['About','about'],['Services','services'],['Live Chat','chat'],['Contact','contact']]},
{title:'Services',items:HOME_CATEGORIES.map(c=>[c.title,'services'])},
];
return <footer style={{background:'var(--navy-950)',color:'var(--white)',padding:'64px 32px 26px',position:'relative',overflow:'hidden'}}>
<div style={{position:'absolute',top:-80,left:-40,width:260,height:260,borderRadius:'50%',background:'var(--gold-500)',opacity:.06}}/>
<div style={{maxWidth:'var(--container-max)',margin:'0 auto',position:'relative'}}>
<div style={{display:'grid',gridTemplateColumns:'1.4fr 1fr 1fr 1.2fr',gap:40,paddingBottom:40,borderBottom:'1px solid rgba(255,255,255,.1)'}}>
<div>
<div style={{display:'flex',alignItems:'center',gap:10,marginBottom:16}}>
<img src={(window.__resources&&window.__resources.logo)||"../../assets/logo.jpg"} alt="" style={{width:40,height:40,borderRadius:'50%'}}/>
<div>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-lg)',color:'var(--white)',lineHeight:1.1}}>Income N <span style={{color:'var(--gold-400)'}}>Filing</span></div>
<div style={{fontFamily:'var(--font-mono)',fontSize:10,color:'var(--navy-300)'}}>Established 2017</div>
</div>
</div>
<p style={{fontFamily:'var(--font-body)',fontSize:13,color:'var(--navy-300)',lineHeight:1.6,maxWidth:280,marginBottom:18}}>Simplifying compliance, empowering business — taxation, GST, incorporation and corporate law, handled end-to-end.</p>
<div style={{display:'flex',gap:10}}>
{SOCIALS.map(s=><SocialIconV2 key={s.label} d={s.d} label={s.label}/>)}
</div>
</div>
{links.map(col=><div key={col.title}>
<div style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'var(--tracking-widest)',textTransform:'uppercase',color:'var(--gold-400)',marginBottom:16}}>{col.title}</div>
<div style={{display:'flex',flexDirection:'column',gap:10}}>
{col.items.map(it=><a key={it[0]} href={`#${it[1]}`} onClick={e=>{e.preventDefault();go(it[1]);}} style={{fontFamily:'var(--font-body)',fontSize:13,color:'var(--navy-300)',textDecoration:'none',transition:'color .15s',width:'fit-content'}} onMouseEnter={e=>e.currentTarget.style.color='var(--white)'} onMouseLeave={e=>e.currentTarget.style.color='var(--navy-300)'}>{it[0]}</a>)}
</div>
</div>)}
<div>
<div style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'var(--tracking-widest)',textTransform:'uppercase',color:'var(--gold-400)',marginBottom:16}}>Stay Updated</div>
<p style={{fontFamily:'var(--font-body)',fontSize:13,color:'var(--navy-300)',lineHeight:1.5,marginBottom:14}}>Compliance deadlines & tips in your inbox.</p>
{ok?<div style={{fontFamily:'var(--font-body)',fontSize:13,color:'var(--status-positive)'}}>✓ Subscribed — thank you!</div>:<form onSubmit={e=>{e.preventDefault();if(email)setOk(true);}} style={{display:'flex',gap:8}}>
<input value={email} onChange={e=>setEmail(e.target.value)} type="email" required placeholder="Email address" style={{flex:1,minWidth:0,fontFamily:'var(--font-body)',fontSize:13,padding:'10px 12px',borderRadius:'var(--radius-md)',border:'1px solid rgba(255,255,255,.16)',background:'rgba(255,255,255,.05)',color:'var(--white)',outline:'none'}}/>
<button type="submit" style={{flexShrink:0,fontFamily:'var(--font-display)',fontWeight:700,fontSize:16,width:42,borderRadius:'var(--radius-md)',border:'none',background:'var(--gold-500)',color:'var(--navy-950)',cursor:'pointer'}}>→</button>
</form>}
<div style={{marginTop:18,fontFamily:'var(--font-mono)',fontSize:12,color:'var(--navy-300)'}}>☎ +91 7890594600</div>
<div style={{marginTop:6,fontFamily:'var(--font-mono)',fontSize:12,color:'var(--navy-300)'}}>✉ support@incomenfiling.com</div>
</div>
</div>
<div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,flexWrap:'wrap',paddingTop:22}}>
<div style={{fontFamily:'var(--font-body)',fontSize:12,color:'var(--navy-300)'}}>© {new Date().getFullYear()} Income N Filing. All rights reserved.</div>
<div style={{display:'flex',gap:22}}>
{['Privacy Policy','Terms of Service'].map(x=><a key={x} href="#" style={{fontFamily:'var(--font-body)',fontSize:12,color:'var(--navy-300)',textDecoration:'none'}}>{x}</a>)}
</div>
</div>
</div>
</footer>;
}
function ChatWidgetV2({go}){
const [open,setOpen]=React.useState(false);
const [botHover,setBotHover]=React.useState(false);
const QUICK=[
{label:'File my ITR',action:()=>go('contact')},
{label:'GST registration',action:()=>go('services')},
{label:'Talk to an advisor',action:()=>go('chat')},
];
return <div style={{position:'fixed',bottom:26,right:26,zIndex:90,display:'flex',flexDirection:'column',alignItems:'flex-end',gap:14}}>
{open&&<div style={{width:270,background:'var(--white)',borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow-lg)',border:'1px solid var(--ink-100)',overflow:'hidden',animation:'fade-in-up .25s var(--ease-standard)'}}>
<div style={{background:'var(--navy-900)',padding:'16px 18px',display:'flex',alignItems:'center',gap:12}}>
<div style={{position:'relative',width:38,height:38,borderRadius:'50%',background:'var(--gold-500)',display:'flex',alignItems:'center',justifyContent:'center'}}>
<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--navy-950)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="8" width="16" height="11" rx="3"/><path d="M12 8V4"/><circle cx="12" cy="3" r="1.4" fill="var(--navy-950)" stroke="none"/><circle cx="9" cy="13.5" r="1.1" fill="var(--navy-950)" stroke="none"/><circle cx="15" cy="13.5" r="1.1" fill="var(--navy-950)" stroke="none"/></svg>
</div>
<div>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:14,color:'var(--white)'}}>Filing Assistant</div>
<div style={{fontFamily:'var(--font-mono)',fontSize:10,color:'var(--status-positive)'}}>● Online now</div>
</div>
<button onClick={()=>setOpen(false)} style={{marginLeft:'auto',background:'none',border:'none',color:'var(--navy-300)',cursor:'pointer',fontSize:18,lineHeight:1}}>×</button>
</div>
<div style={{padding:'16px 16px 18px'}}>
<div style={{background:'var(--paper-alt)',borderRadius:'12px 12px 12px 4px',padding:'10px 14px',fontFamily:'var(--font-body)',fontSize:13,color:'var(--ink-700)',marginBottom:14}}>Hi! 👋 How can we help you today?</div>
<div style={{display:'flex',flexDirection:'column',gap:8}}>
{QUICK.map(q=><button key={q.label} onClick={()=>{q.action();setOpen(false);}} style={{textAlign:'left',fontFamily:'var(--font-body)',fontWeight:'var(--weight-medium)',fontSize:13,padding:'10px 14px',borderRadius:'var(--radius-md)',border:'1px solid var(--ink-100)',background:'var(--white)',color:'var(--navy-800)',cursor:'pointer',transition:'all .15s'}} onMouseEnter={e=>{e.currentTarget.style.background='var(--navy-050)';e.currentTarget.style.borderColor='var(--gold-400)';}} onMouseLeave={e=>{e.currentTarget.style.background='var(--white)';e.currentTarget.style.borderColor='var(--ink-100)';}}>{q.label} →</button>)}
</div>
<a href="https://wa.me/917890594600" target="_blank" rel="noreferrer" style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8,marginTop:14,fontFamily:'var(--font-body)',fontWeight:'var(--weight-semibold)',fontSize:13,padding:'11px',borderRadius:'var(--radius-md)',background:'var(--whatsapp-green)',color:'var(--white)',textDecoration:'none'}}>
<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.09c-.24.68-1.42 1.32-1.95 1.36-.5.05-.99.24-3.32-.69-2.8-1.1-4.6-3.96-4.74-4.15-.14-.19-1.14-1.52-1.14-2.9 0-1.38.72-2.06.98-2.34.24-.26.53-.33.71-.33l.5.01c.16 0 .38-.06.59.45.24.58.81 2 .88 2.15.07.14.12.31.02.5-.28.55-.57.75-.79 1.02-.14.16-.29.34-.13.62.16.28.72 1.19 1.55 1.93 1.07.95 1.97 1.25 2.25 1.39.28.14.44.12.6-.07.19-.21.69-.8.87-1.08.19-.28.37-.23.62-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.32.07.12.07.66-.17 1.34z"/></svg>
Chat on WhatsApp
</a>
</div>
</div>}
<a href="https://wa.me/917890594600" target="_blank" rel="noreferrer" title="WhatsApp us" style={{position:'relative',width:56,height:56,borderRadius:'50%',background:'var(--whatsapp-green)',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'var(--shadow-lg)',textDecoration:'none'}}>
<span style={{position:'absolute',inset:0,borderRadius:'50%',border:'2px solid var(--whatsapp-green)',animation:'pulse-ring 2s infinite'}}/>
<svg viewBox="0 0 24 24" width="30" height="30" fill="var(--white)"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.09c-.24.68-1.42 1.32-1.95 1.36-.5.05-.99.24-3.32-.69-2.8-1.1-4.6-3.96-4.74-4.15-.14-.19-1.14-1.52-1.14-2.9 0-1.38.72-2.06.98-2.34.24-.26.53-.33.71-.33l.5.01c.16 0 .38-.06.59.45.24.58.81 2 .88 2.15.07.14.12.31.02.5-.28.55-.57.75-.79 1.02-.14.16-.29.34-.13.62.16.28.72 1.19 1.55 1.93 1.07.95 1.97 1.25 2.25 1.39.28.14.44.12.6-.07.19-.21.69-.8.87-1.08.19-.28.37-.23.62-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.32.07.12.07.66-.17 1.34z"/></svg>
</a>
<button onClick={()=>setOpen(o=>!o)} onMouseEnter={()=>setBotHover(true)} onMouseLeave={()=>setBotHover(false)} title="Chat with our bot" style={{position:'relative',width:92,height:120,padding:0,background:'none',border:'none',cursor:'pointer',filter:'drop-shadow(0 12px 16px rgba(15,42,66,.28))',transition:'transform .2s',transform:botHover?'scale(1.06)':'none'}}>
{!open&&<span style={{position:'absolute',top:12,right:8,zIndex:2,width:20,height:20,borderRadius:'50%',background:'var(--gold-500)',color:'var(--navy-950)',fontFamily:'var(--font-display)',fontWeight:700,fontSize:11,display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'var(--shadow-sm)'}}>1</span>}
{!open&&<span style={{position:'absolute',top:-26,right:0,zIndex:2,whiteSpace:'nowrap',background:'var(--navy-900)',color:'var(--white)',fontFamily:'var(--font-body)',fontSize:11,fontWeight:'var(--weight-medium)',padding:'5px 11px',borderRadius:'var(--radius-pill)',boxShadow:'var(--shadow-md)'}}>Need help? 👋</span>}
<BotCharacterV2 hovered={botHover}/>
</button>
</div>;
}
function PortraitV2({seed=0,gender='men',size=40}){
const n=Math.abs(Math.round(seed))%99;
const src=`https://randomuser.me/api/portraits/${gender==='women'?'women':'men'}/${n}.jpg`;
return <img src={src} alt="" width={size} height={size} loading="lazy" style={{display:'block',width:size,height:size,objectFit:'cover',borderRadius:'50%'}}/>;
}
function AvatarV2({label,idx,size=40}){
const a1=V2_ACCENTS[idx%4],a2=V2_ACCENTS[(idx+2)%4];
const gid='av'+React.useId().replace(/[^a-z0-9]/gi,'');
return <svg width={size} height={size} viewBox="0 0 40 40" style={{display:'block'}}>
<defs><linearGradient id={gid} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={a1}/><stop offset="1" stopColor={a2}/></linearGradient></defs>
<circle cx="20" cy="20" r="20" fill={`url(#${gid})`}/>
<text x="20" y="21" textAnchor="middle" dominantBaseline="central" fontFamily="Poppins, Georgia, serif" fontWeight="700" fontSize="15" letterSpacing="0.5" fill="#ffffff">{label}</text>
</svg>;
}
function ReviewCardV2({t,i}){
const [h,setH]=React.useState(false);
return <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{width:290,flexShrink:0,background:'var(--white)',borderRadius:'var(--radius-lg)',border:'1px solid var(--ink-100)',boxShadow:h?'var(--shadow-md)':'var(--shadow-sm)',padding:'16px 18px',display:'flex',flexDirection:'column',gap:10,transform:h?'translateY(-4px)':'none',transition:'transform .25s var(--ease-standard),box-shadow .25s'}}>
<div style={{display:'flex',alignItems:'center',gap:10}}>
<div style={{width:36,height:36,flexShrink:0,borderRadius:'50%',overflow:'hidden',border:'2px solid var(--paper-alt)'}}><PortraitV2 seed={t.av} size={36}/></div>
<div style={{flex:1,minWidth:0}}>
<div style={{display:'flex',alignItems:'center',gap:5}}>
<span style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:13,color:'var(--navy-900)',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{t.name}</span>
<span style={{flexShrink:0,width:14,height:14,borderRadius:'50%',background:'var(--gold-500)',color:'var(--navy-950)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:9,fontWeight:700}}>✓</span>
</div>
<div style={{fontFamily:'var(--font-body)',fontSize:11,color:'var(--ink-300)'}}>@{t.initials.toLowerCase()}client</div>
</div>
<div style={{display:'flex',gap:1,color:'var(--gold-500)',fontSize:11,flexShrink:0}}>★★★★★</div>
</div>
<div style={{fontFamily:'var(--font-body)',fontSize:12.5,color:'var(--ink-700)',lineHeight:1.5,display:'-webkit-box',WebkitLineClamp:4,WebkitBoxOrient:'vertical',overflow:'hidden'}}>{t.quote}</div>
<div style={{display:'flex',alignItems:'center',gap:5,paddingTop:8,borderTop:'1px solid var(--ink-100)',fontFamily:'var(--font-mono)',fontSize:10,color:'var(--ink-300)'}}>
<span>{t.meta.split(' · ')[0]}</span><span>·</span><span style={{color:'var(--link)'}}>Google Review</span>
</div>
</div>;
}
function ReviewMarqueeV2(){
const [paused,setPaused]=React.useState(false);
const rows=[TESTIMONIALS,[...TESTIMONIALS].reverse()];
return <div style={{position:'relative',width:'100vw',marginLeft:'calc(50% - 50vw)',overflow:'hidden',padding:'12px 0'}}>
<div style={{position:'absolute',top:0,left:0,bottom:0,width:120,zIndex:3,pointerEvents:'none',background:'linear-gradient(90deg,var(--navy-050),transparent)'}}/>
<div style={{position:'absolute',top:0,right:0,bottom:0,width:120,zIndex:3,pointerEvents:'none',background:'linear-gradient(270deg,var(--navy-050),transparent)'}}/>
<div onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} style={{display:'flex',flexDirection:'column',gap:18}}>
{rows.map((row,ri)=><div key={ri} style={{display:'flex',gap:18,width:'max-content',animation:`ticker-scroll ${38+ri*10}s linear infinite`,animationDirection:ri===1?'reverse':'normal',animationPlayState:paused?'paused':'running'}}>
{[...row,...row].map((t,i)=><ReviewCardV2 key={ri+'-'+i} t={t} i={i}/>)}
</div>)}
</div>
</div>;
}
function StepVisualV2({step}){
if(step===0){
return <div style={{display:'flex',flexDirection:'column',gap:10}}>
<div style={{alignSelf:'flex-start',maxWidth:'80%',background:'rgba(255,255,255,.08)',border:'1px solid rgba(255,255,255,.1)',borderRadius:'14px 14px 14px 4px',padding:'10px 14px',fontFamily:'var(--font-body)',fontSize:13,color:'var(--white)',animation:'fade-in-up .4s var(--ease-standard) both'}}>Hi, I need GST registration for my new firm 👋</div>
<div style={{alignSelf:'flex-end',maxWidth:'80%',background:'var(--whatsapp-green)',borderRadius:'14px 14px 4px 14px',padding:'10px 14px',fontFamily:'var(--font-body)',fontSize:13,color:'var(--white)',animation:'fade-in-up .4s var(--ease-standard) .5s both'}}>Sure! Share your PAN & address proof — we’ll take it from here.</div>
<div style={{alignSelf:'flex-start',display:'flex',gap:4,padding:'10px 14px',background:'rgba(255,255,255,.08)',borderRadius:'14px 14px 14px 4px',animation:'fade-in-up .4s var(--ease-standard) 1s both'}}>
{[0,1,2].map(d=><span key={d} style={{width:6,height:6,borderRadius:'50%',background:'rgba(255,255,255,.6)',animation:`float-y 1s ease-in-out ${d*.15}s infinite`}}/>)}
</div>
</div>;
}
if(step===1){
const rows=[['GST registration',100],['Document verification',80],['Return preparation',55],['Authority filing',30]];
return <div style={{display:'flex',flexDirection:'column',gap:14}}>
{rows.map((r,i)=><div key={r[0]} style={{animation:`fade-in-up .4s var(--ease-standard) ${i*.12}s both`}}>
<div style={{display:'flex',justifyContent:'space-between',fontFamily:'var(--font-body)',fontSize:12,color:'var(--white)',marginBottom:6}}><span>{r[0]}</span><span style={{fontFamily:'var(--font-mono)',color:r[1]===100?'var(--status-positive)':'var(--gold-400)'}}>{r[1]===100?'✓ Done':r[1]+'%'}</span></div>
<div style={{height:6,borderRadius:999,background:'rgba(255,255,255,.1)',overflow:'hidden'}}><div style={{height:'100%',borderRadius:999,background:r[1]===100?'var(--status-positive)':'var(--gold-500)',width:r[1]+'%',animation:`grow-w 1s var(--ease-standard) ${i*.12}s both`}}/></div>
</div>)}
</div>;
}
return <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:16,padding:'8px 0'}}>
<div style={{position:'relative',width:80,height:80,borderRadius:'50%',background:'var(--status-positive)',display:'flex',alignItems:'center',justifyContent:'center',animation:'pop-in .5s var(--ease-emphasized) both'}}>
<span style={{color:'var(--white)',fontSize:38,fontWeight:700}}>✓</span>
<span style={{position:'absolute',inset:0,borderRadius:'50%',border:'2px solid var(--status-positive)',animation:'pulse-ring 2s infinite'}}/>
</div>
<div style={{background:'var(--white)',borderRadius:'var(--radius-md)',padding:'14px 20px',textAlign:'center',boxShadow:'var(--shadow-md)',animation:'fade-in-up .4s var(--ease-standard) .3s both'}}>
<div style={{fontFamily:'var(--font-mono)',fontSize:9,letterSpacing:'var(--tracking-widest)',textTransform:'uppercase',color:'var(--ink-300)'}}>Certificate Issued</div>
<div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:18,color:'var(--navy-900)',margin:'4px 0'}}>GSTIN 19ABCDE1234F1Z5</div>
<div style={{fontFamily:'var(--font-body)',fontSize:11,color:'var(--status-positive)'}}>● Active · Reminders on</div>
</div>
</div>;
}
function StepperV2(){
const [active,setActive]=React.useState(0);
const [paused,setPaused]=React.useState(false);
React.useEffect(()=>{if(paused)return;const id=setInterval(()=>setActive(a=>(a+1)%STEPS.length),3800);return ()=>clearInterval(id);},[paused]);
const icons=['SHARE','HANDLE','DONE'];
const s=STEPS[active];
return <div onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} style={{display:'grid',gridTemplateColumns:'minmax(0,340px) minmax(0,1fr)',gap:24,alignItems:'stretch'}}>
<div style={{display:'flex',flexDirection:'column',gap:12}}>
{STEPS.map((st,i)=><button key={st.n} onClick={()=>setActive(i)} style={{textAlign:'left',display:'flex',alignItems:'center',gap:16,padding:'18px 20px',borderRadius:'var(--radius-lg)',border:'1px solid '+(active===i?'var(--gold-400)':'var(--ink-100)'),background:active===i?'var(--white)':'transparent',boxShadow:active===i?'var(--shadow-md)':'none',cursor:'pointer',transition:'all .3s var(--ease-standard)',position:'relative',overflow:'hidden'}}>
<span style={{position:'absolute',left:0,top:0,bottom:0,width:4,background:'var(--gold-500)',transform:active===i?'scaleY(1)':'scaleY(0)',transformOrigin:'top',transition:'transform .3s'}}/>
<span style={{width:44,height:44,flexShrink:0,borderRadius:'50%',background:active===i?'var(--gold-500)':'var(--navy-050)',color:active===i?'var(--navy-950)':'var(--navy-700)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontWeight:700,fontSize:16,transition:'all .3s'}}>{st.n}</span>
<span>
<span style={{display:'block',fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-base)',color:active===i?'var(--navy-900)':'var(--ink-700)'}}>{st.t}</span>
<span style={{display:'block',fontFamily:'var(--font-mono)',fontSize:10,letterSpacing:'var(--tracking-widest)',textTransform:'uppercase',color:active===i?'var(--gold-600)':'var(--ink-300)',marginTop:4}}>{icons[i]}</span>
</span>
</button>)}
</div>
<div style={{position:'relative',borderRadius:'var(--radius-xl)',overflow:'hidden',background:'var(--white)',border:'1px solid var(--ink-100)',boxShadow:'var(--shadow-md)',padding:'32px 34px',display:'flex',flexDirection:'column',justifyContent:'center',minHeight:340}}>
<div style={{position:'absolute',top:0,right:0,width:200,height:200,background:'var(--gold-500)',opacity:.1,borderRadius:'0 0 0 100%'}}/>
<div key={active} style={{position:'relative',animation:'fade-in-up .4s var(--ease-standard)'}}>
<div style={{display:'flex',alignItems:'center',gap:14,marginBottom:16}}>
<span style={{width:48,height:48,flexShrink:0,borderRadius:'var(--radius-md)',background:'var(--gold-500)',color:'var(--navy-950)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontWeight:700,fontSize:20}}>{s.n}</span>
<div>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-2xl)',color:'var(--navy-900)',letterSpacing:'var(--tracking-tight)'}}>{s.t}</div>
<div style={{fontFamily:'var(--font-body)',fontSize:13,color:'var(--ink-500)',marginTop:2,maxWidth:420}}>{s.d}</div>
</div>
</div>
<div style={{background:'var(--navy-950)',borderRadius:'var(--radius-lg)',padding:'20px 22px',minHeight:180,display:'flex',flexDirection:'column',justifyContent:'center'}}>
<StepVisualV2 step={active}/>
</div>
</div>
<div style={{position:'relative',display:'flex',gap:8,marginTop:24}}>
{STEPS.map((_,i)=><button key={i} onClick={()=>setActive(i)} style={{width:active===i?30:10,height:6,borderRadius:999,border:'none',padding:0,background:active===i?'var(--gold-500)':'var(--ink-100)',cursor:'pointer',transition:'all .3s'}}/>)}
</div>
</div>
</div>;
}
function ClientFace({c,i,back}){
const accent=V2_ACCENTS[(i+(back?1:0))%4],tint=V2_TINTS[(i+(back?1:0))%4];
return <div style={{position:'absolute',inset:0,backfaceVisibility:'hidden',WebkitBackfaceVisibility:'hidden',transform:back?'rotateY(180deg)':'none',display:'flex',alignItems:'center',gap:13,padding:'14px 16px',background:'var(--white)',border:'1px solid var(--ink-100)',borderRadius:'var(--radius-lg)',boxSizing:'border-box',boxShadow:'var(--shadow-sm)',overflow:'hidden'}}>
<span style={{position:'absolute',left:0,top:0,bottom:0,width:4,background:accent}}/>
<div style={{position:'relative',flexShrink:0}}>
<div style={{width:48,height:48,borderRadius:'50%',overflow:'hidden',border:'2px solid '+accent}}><PortraitV2 seed={c.av} size={48}/></div>
<span style={{position:'absolute',right:-2,bottom:-2,width:16,height:16,borderRadius:'50%',background:accent,color:'var(--white)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:9,fontWeight:700,border:'2px solid var(--white)'}}>✓</span>
</div>
<div style={{minWidth:0,flex:1}}>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:14,color:'var(--navy-900)',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{c.name}</div>
<div style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--ink-300)',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{c.domain}</div>
<div style={{marginTop:4,display:'inline-block',fontFamily:'var(--font-body)',fontSize:10,fontWeight:'var(--weight-medium)',color:accent,background:tint,padding:'1px 8px',borderRadius:'var(--radius-pill)'}}>{c.sector}</div>
</div>
</div>;
}
function ClientFlipCard({card,i}){
const [hover,setHover]=React.useState(false);
return <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{width:250,height:92,perspective:1000,cursor:'default'}}>
<div style={{position:'relative',width:'100%',height:'100%',transformStyle:'preserve-3d',animation:`flip-card 9s ${i*0.7}s infinite`,animationPlayState:hover?'paused':'running',transition:'transform .3s',filter:hover?'drop-shadow(0 10px 20px rgba(15,42,66,.14))':'none'}}>
<ClientFace c={card.front} i={i}/>
<ClientFace c={card.back} i={i} back/>
</div>
</div>;
}
function ClientFlipGridV2(){
return <div style={{maxWidth:1000,margin:'0 auto',display:'flex',flexWrap:'wrap',gap:16,justifyContent:'center'}}>
{CLIENT_CARDS.map((card,i)=><ClientFlipCard key={i} card={card} i={i}/>)}
</div>;
}
function OfficeMapV2({contactChannels}={}){
const wrap=React.useRef(null);
const mapRef=React.useRef(null);
const [geo,setGeo]=React.useState(null);
const [sel,setSel]=React.useState(0);
const [hoverMetro,setHoverMetro]=React.useState(null);
const OFFICES=[
{city:'Kolkata',region:'West Bengal 700039',addr:'38M/1, New Ballygunge Rd, Kasba',phone:'+91 7890594600',lnglat:[88.3639,22.5726]},
{city:'Bhagalpur',region:'Bihar 812001',addr:'Opp. Dr. R N Jha Clinic, Near Head Post Office',phone:'+91 7890594600',lnglat:[86.9842,25.2445]},
];
const METROS=[
{city:'Delhi',lnglat:[77.209,28.6139]},{city:'Mumbai',lnglat:[72.8777,19.076]},
{city:'Bengaluru',lnglat:[77.5946,12.9716]},{city:'Chennai',lnglat:[80.2707,13.0827]},
{city:'Hyderabad',lnglat:[78.4867,17.385]},{city:'Ahmedabad',lnglat:[72.5714,23.0225]},
{city:'Pune',lnglat:[73.8567,18.5204]},{city:'Jaipur',lnglat:[75.7873,26.9124]},
];
React.useEffect(()=>{
let cancelled=false;
const w=wrap.current?wrap.current.clientWidth:620,h=468;
const arc=(a,b)=>{const mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2,dx=b[0]-a[0],dy=b[1]-a[1],nx=-dy,ny=dx,len=Math.hypot(nx,ny)||1;const k=0.22;return 'M'+a[0]+' '+a[1]+' Q'+(mx+nx/len*len*k)+' '+(my+ny/len*len*k)+' '+b[0]+' '+b[1];};
const fallback=()=>{
const offices=OFFICES.map((o,i)=>({...o,x:w*(0.52+i*0.06),y:h*(0.42+i*0.12)}));
setGeo({offices,metros:[],arcs:[]});
};
if(!window.d3||!window.topojson){fallback();return;}
window.d3.json((window.__resources&&window.__resources.atlas)||'https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json').then(topo=>{
if(cancelled)return;
const d3=window.d3,topojson=window.topojson;
const countries=topojson.feature(topo,topo.objects.countries);
const india=countries.features.find(f=>String(f.id)==='356');
if(!india){fallback();return;}
const proj=d3.geoMercator().fitExtent([[46,46],[w-46,h-46]],india);
const path=d3.geoPath(proj);
const others=countries.features.filter(f=>String(f.id)!=='356');
const svg='<svg viewBox="0 0 '+w+' '+h+'" width="'+w+'" height="'+h+'" style="display:block"><g>'+others.map(f=>'<path d="'+(path(f)||'')+'" fill="rgba(15,42,66,0.04)" stroke="rgba(15,42,66,0.1)" stroke-width="0.5"/>').join('')+'</g><path d="'+(path(india)||'')+'" fill="rgba(239,168,46,0.16)" stroke="#EFA82E" stroke-width="1.4"/></svg>';
if(mapRef.current)mapRef.current.innerHTML=svg;
const offices=OFFICES.map(o=>{const p=proj(o.lnglat);return {...o,x:p[0],y:p[1]};});
const metros=METROS.map(m=>{const p=proj(m.lnglat);return {...m,x:p[0],y:p[1]};});
const src=offices[0];
const arcs=metros.map(m=>arc([src.x,src.y],[m.x,m.y]));
setGeo({offices,metros,arcs});
}).catch(fallback);
return ()=>{cancelled=true;};
},[]);
const offices=geo?geo.offices:[];
const cur=offices[sel];
const mapsHref=cur?'https://www.google.com/maps/search/'+encodeURIComponent(cur.addr+', '+cur.region):'#';
return <div style={{display:'grid',gridTemplateColumns:'1.2fr 1fr',gap:16,alignItems:'stretch',height:470}}>
<div ref={wrap} style={{position:'relative',height:'100%',boxSizing:'border-box',borderRadius:'var(--radius-xl)',overflow:'hidden',background:'var(--white)',border:'1px solid var(--ink-100)',backgroundImage:'radial-gradient(var(--navy-050) 1.2px,transparent 1.2px)',backgroundSize:'24px 24px',boxShadow:'var(--shadow-md)'}}>
<div ref={mapRef} style={{position:'absolute',inset:0}}/>
{geo&&<svg style={{position:'absolute',inset:0,pointerEvents:'none',zIndex:2}} width="100%" height="100%">
{geo.arcs.map((d,i)=><g key={i}>
<path d={d} fill="none" stroke="var(--navy-300)" strokeWidth="1" strokeDasharray="3 6" opacity="0.5"/>
<circle r="2.6" fill="var(--gold-500)"><animateMotion dur={(3.5+i*0.4)+'s'} repeatCount="indefinite" path={d}/></circle>
</g>)}
{offices.length===2&&<line x1={offices[0].x} y1={offices[0].y} x2={offices[1].x} y2={offices[1].y} stroke="var(--gold-500)" strokeWidth="1.4" strokeDasharray="4 5" opacity="0.8"/>}
</svg>}
{geo&&geo.metros.map((m,i)=><div key={m.city} onMouseEnter={()=>setHoverMetro(i)} onMouseLeave={()=>setHoverMetro(null)} style={{position:'absolute',left:m.x,top:m.y,transform:'translate(-50%,-50%)',zIndex:3}}>
<span style={{display:'block',width:6,height:6,borderRadius:'50%',background:'var(--navy-400,#5b6b82)',cursor:'default'}}/>
<span style={{position:'absolute',left:'50%',top:11,transform:'translateX(-50%)',fontFamily:'var(--font-mono)',fontSize:9,color:hoverMetro===i?'var(--navy-900)':'var(--ink-300)',whiteSpace:'nowrap',transition:'color .2s'}}>{m.city}</span>
</div>)}
{offices.map((o,i)=><div key={o.city} onClick={()=>setSel(i)} style={{position:'absolute',left:o.x,top:o.y,transform:'translate(-50%,-50%)',zIndex:sel===i?6:5,cursor:'pointer'}}>
<span style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)',width:18,height:18,borderRadius:'50%',border:'2px solid var(--gold-500)',animation:'pulse-ring 2s infinite'}}/>
{sel===i&&<span style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)',width:58,height:58,borderRadius:'50%',background:'conic-gradient(from 0deg,transparent,rgba(239,168,46,.5))',animation:'spin-slow 3s linear infinite',WebkitMaskImage:'radial-gradient(circle,black 60%,transparent 61%)',maskImage:'radial-gradient(circle,black 60%,transparent 61%)'}}/>}
<span style={{position:'relative',display:'flex',alignItems:'center',justifyContent:'center',width:sel===i?22:16,height:sel===i?22:16,borderRadius:'50%',background:'var(--gold-500)',border:'2px solid var(--white)',boxShadow:'var(--shadow-md)',transition:'all .2s',fontSize:9,fontWeight:700,color:'var(--navy-950)'}}>{sel===i?'★':''}</span>
<span style={{position:'absolute',left:'50%',top:sel===i?26:20,transform:'translateX(-50%)',fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:12,color:'var(--navy-900)',whiteSpace:'nowrap',background:'var(--white)',padding:'2px 8px',borderRadius:'var(--radius-pill)',boxShadow:'var(--shadow-sm)'}}>{o.city}</span>
</div>)}
<div style={{position:'absolute',left:16,top:16,zIndex:7,display:'inline-flex',alignItems:'center',gap:7,background:'var(--white)',borderRadius:'var(--radius-pill)',padding:'6px 13px',boxShadow:'var(--shadow-sm)'}}>
<span style={{width:7,height:7,borderRadius:'50%',background:'var(--status-positive)',animation:'pulse-dot 2s infinite'}}/>
<span style={{fontFamily:'var(--font-mono)',fontSize:10,color:'var(--navy-800)',letterSpacing:'.04em'}}>Serving pan-India · 20+ metros</span>
</div>
</div>
<div style={{height:'100%',boxSizing:'border-box',borderRadius:'var(--radius-xl)',background:'var(--white)',border:'1px solid var(--ink-100)',display:'flex',flexDirection:'column',boxShadow:'var(--shadow-md)',position:'relative',overflow:'hidden'}}>
<div style={{position:'relative',padding:'20px 22px 18px',background:'linear-gradient(135deg,var(--gold-400,#f5c04e),var(--gold-600,#d8901f))',overflow:'hidden'}}>
<div style={{position:'absolute',top:-30,right:-20,width:120,height:120,borderRadius:'50%',border:'18px solid rgba(255,255,255,.16)'}}/>
<svg viewBox="0 0 24 24" width="22" height="22" fill="var(--navy-950)" style={{position:'absolute',right:20,bottom:16,opacity:.25}}><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z"/></svg>
<div style={{position:'relative',display:'flex',alignItems:'center',gap:8,marginBottom:8}}>
<span style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(15,42,66,.14)',borderRadius:'var(--radius-pill)',padding:'3px 10px',fontFamily:'var(--font-mono)',fontSize:9,letterSpacing:'.08em',textTransform:'uppercase',color:'var(--navy-950)',fontWeight:'var(--weight-semibold)'}}><span style={{width:6,height:6,borderRadius:'50%',background:'var(--navy-950)',animation:'pulse-dot 2s infinite'}}/>Open now</span>
</div>
<div style={{position:'relative',fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-2xl)',color:'var(--navy-950)',lineHeight:1.1}}>Visit or reach us</div>
<div style={{position:'relative',fontFamily:'var(--font-body)',fontSize:12.5,color:'rgba(15,42,66,.7)',marginTop:3}}>2 home offices · delivery pan-India</div>
</div>
<div style={{flex:1,padding:'16px 18px',display:'flex',flexDirection:'column',gap:10,overflowY:'auto'}}>
{offices.map((o,i)=><button key={o.city} onClick={()=>setSel(i)} style={{textAlign:'left',position:'relative',overflow:'hidden',borderRadius:'var(--radius-lg)',border:'1.5px solid '+(sel===i?'var(--gold-500)':'var(--ink-100)'),background:sel===i?'var(--navy-050)':'var(--white)',boxShadow:sel===i?'var(--shadow-sm)':'none',padding:'13px 15px',cursor:'pointer',transition:'all .25s var(--ease-standard)'}}>
<div style={{display:'flex',alignItems:'center',gap:11}}>
<span style={{position:'relative',width:34,height:34,flexShrink:0,borderRadius:'50%',background:sel===i?'var(--gold-500)':'var(--navy-050)',display:'flex',alignItems:'center',justifyContent:'center',transition:'all .25s'}}>
<svg viewBox="0 0 24 24" width="16" height="16" fill={sel===i?'var(--navy-950)':'var(--navy-500,#5b6b82)'}><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z"/></svg>
{sel===i&&<span style={{position:'absolute',inset:-4,borderRadius:'50%',border:'2px solid var(--gold-400)',animation:'pulse-ring 2s infinite'}}/>}
</span>
<div style={{flex:1,minWidth:0}}>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-base)',color:'var(--navy-900)'}}>{o.city}</div>
<div style={{fontFamily:'var(--font-mono)',fontSize:10.5,color:'var(--ink-300)'}}>{o.region}</div>
</div>
<span style={{fontFamily:'var(--font-mono)',fontSize:16,color:sel===i?'var(--gold-600)':'var(--ink-300)',transform:sel===i?'rotate(90deg)':'none',transition:'transform .25s'}}>›</span>
</div>
<div style={{overflow:'hidden',maxHeight:sel===i?130:0,opacity:sel===i?1:0,transition:'all .3s var(--ease-standard)'}}>
<div style={{fontFamily:'var(--font-body)',fontSize:12,color:'var(--ink-500)',lineHeight:1.5,margin:'12px 0 10px'}}>{o.addr}</div>
<div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
{!contactChannels&&<span style={{display:'inline-flex',alignItems:'center',gap:6,fontFamily:'var(--font-mono)',fontSize:11,color:'var(--navy-700)',background:'var(--paper-alt)',padding:'6px 11px',borderRadius:'var(--radius-pill)'}}><span>☎</span>{o.phone}</span>}
<a href={mapsHref} target="_blank" rel="noreferrer" style={{display:'inline-flex',alignItems:'center',gap:6,fontFamily:'var(--font-body)',fontWeight:'var(--weight-semibold)',fontSize:11,color:'var(--white)',background:'var(--navy-900)',padding:'6px 12px',borderRadius:'var(--radius-pill)',textDecoration:'none'}}>Directions →</a>
</div>
</div>
</button>)}
</div>
{contactChannels?<div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',borderTop:'1px solid var(--ink-100)'}}>
{contactChannels.map((c,ci)=><a key={c.key} href={c.href} target={c.key==='wa'?'_blank':undefined} rel="noreferrer" onMouseEnter={e=>e.currentTarget.style.background='var(--navy-050)'} onMouseLeave={e=>e.currentTarget.style.background='var(--white)'} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:7,padding:'15px 6px',textDecoration:'none',borderLeft:ci?'1px solid var(--ink-100)':'none',background:'var(--white)',transition:'background .15s'}}>
<span style={{width:36,height:36,borderRadius:11,background:c.accent,display:'flex',alignItems:'center',justifyContent:'center'}}><svg viewBox="0 0 24 24" width="19" height="19" fill="#fff">{c.icon}</svg></span>
<span style={{fontFamily:'var(--font-mono)',fontSize:9.5,letterSpacing:'.06em',textTransform:'uppercase',color:'var(--navy-800)',fontWeight:600}}>{c.footLabel||c.label}</span>
</a>)}
</div>:<div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',borderTop:'1px solid var(--ink-100)'}}>
{[['2','Offices'],['20+','Metros'],['All','States']].map((s,si)=><div key={s[1]} style={{textAlign:'center',padding:'14px 0',borderLeft:si?'1px solid var(--ink-100)':'none'}}>
<div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'var(--text-xl)',color:'var(--navy-900)'}}>{s[0]}</div>
<div style={{fontFamily:'var(--font-mono)',fontSize:9,letterSpacing:'.06em',textTransform:'uppercase',color:'var(--ink-300)'}}>{s[1]}</div>
</div>)}
</div>}
</div>
</div>;
}
const ABOUT_CHECKS=[
{icon:'M9 12l2 2 4-4',t:'Comprehensive Filings & Registrations'},
{icon:'M9 12l2 2 4-4',t:'Dedicated Tax & Compliance Advisors'},
{icon:'M9 12l2 2 4-4',t:'End-to-End Business Support'},
{icon:'M9 12l2 2 4-4',t:'Transparent, Fixed Pricing'},
];
const ABOUT_STATS=[{n:'2017',l:'Established'},{n:'500+',l:'Businesses served'},{n:'4.9★',l:'Google rating'}];
function AboutSectionV2({go}){
const [hovImg,setHovImg]=React.useState(false);
const HL=({c,children})=><span style={{color:c==='g'?'var(--gold-600)':'var(--navy-700)',fontWeight:'var(--weight-semibold)'}}>{children}</span>;
return <section id="about" style={{position:'relative',background:'var(--white)',padding:'100px 32px',overflow:'hidden'}}>
<div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(rgba(43,108,214,.13) 1px,transparent 1px)',backgroundSize:'26px 26px',WebkitMaskImage:'radial-gradient(120% 90% at 88% 30%,black,transparent 70%)',maskImage:'radial-gradient(120% 90% at 88% 30%,black,transparent 70%)',opacity:.6}}/>
<div style={{position:'absolute',top:-140,left:-120,width:520,height:520,borderRadius:'50%',background:'radial-gradient(circle,rgba(239,168,46,.12),transparent 66%)',pointerEvents:'none'}}/>
<div style={{position:'relative',maxWidth:'var(--container-max)',margin:'0 auto',display:'grid',gridTemplateColumns:'1.02fr .98fr',gap:64,alignItems:'center'}}>
<div>
<EyebrowV2>Who We Are</EyebrowV2>
<h2 style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-4xl)',color:'var(--navy-900)',margin:'18px 0 22px',letterSpacing:'var(--tracking-tight)',lineHeight:1.08}}>About Income N Filing</h2>
<p style={{fontFamily:'var(--font-body)',fontSize:'var(--text-base)',color:'var(--ink-500)',lineHeight:'var(--leading-lg)',margin:'0 0 16px',maxWidth:520}}><HL>Income N Filing</HL> is your trusted partner for business compliance and tax advisory. Since <HL c="g">2017</HL>, we have helped businesses confidently navigate the complexities of regulatory compliance.</p>
<p style={{fontFamily:'var(--font-body)',fontSize:'var(--text-base)',color:'var(--ink-500)',lineHeight:'var(--leading-lg)',margin:'0 0 16px',maxWidth:520}}>Our mission is to provide a <HL c="g">single, seamless solution</HL> for all your compliance, taxation, registrations, accounting, and legal needs — handled with precision and professionalism, so you can stay focused on growing your business.</p>
<p style={{fontFamily:'var(--font-body)',fontSize:'var(--text-base)',color:'var(--ink-500)',lineHeight:'var(--leading-lg)',margin:'0 0 28px',maxWidth:520}}>From <HL>new startups</HL> to <HL>established enterprises</HL>, we deliver tailored services across incorporation, statutory registrations, income tax filing, GST compliance, and corporate audits.</p>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginBottom:30}}>
{ABOUT_CHECKS.map(c=><div key={c.t} style={{display:'flex',alignItems:'center',gap:11,padding:'11px 13px',background:'var(--gold-050)',border:'1px solid var(--gold-100,#f6e2b8)',borderRadius:'var(--radius-md)'}}>
<span style={{flexShrink:0,width:26,height:26,borderRadius:'50%',background:'var(--gold-500)',display:'flex',alignItems:'center',justifyContent:'center'}}><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--navy-950)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d={c.icon}/></svg></span>
<span style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-medium)',fontSize:13.5,color:'var(--navy-900)',lineHeight:1.2}}>{c.t}</span>
</div>)}
</div>
<div style={{position:'relative',background:'linear-gradient(120deg,var(--navy-950),var(--navy-800,#1c3a5e))',borderRadius:'var(--radius-lg)',padding:'26px 30px',overflow:'hidden'}}>
<div style={{position:'absolute',top:-24,left:18,fontFamily:'Georgia,serif',fontSize:120,lineHeight:1,color:'var(--gold-500)',opacity:.18}}>“</div>
<div style={{position:'absolute',top:0,right:0,width:150,height:150,background:'radial-gradient(circle at 80% 20%,rgba(239,168,46,.22),transparent 62%)'}}/>
<p style={{position:'relative',fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-xl)',color:'var(--gold-400)',margin:0,lineHeight:1.35}}>When you get your business started with us, there is no looking back.</p>
<div style={{position:'relative',display:'flex',alignItems:'center',gap:8,marginTop:16}}><span style={{width:22,height:2,background:'var(--gold-500)'}}/><span style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.06em',textTransform:'uppercase',color:'var(--navy-200,#b9c6da)'}}>Anish · Founder</span></div>
</div>
</div>
<div style={{position:'relative',height:520}}>
<div style={{position:'absolute',right:12,top:24,bottom:24,width:'74%',borderRadius:'var(--radius-xl)',background:'linear-gradient(150deg,var(--navy-050),#dbe6fb)'}}/>
<div style={{position:'absolute',left:0,top:'50%',transform:'translateY(-50%)',width:210,height:210,borderRadius:'50%',border:'2px dashed var(--gold-300,#f5cf82)',animation:'spin-slow 40s linear infinite',pointerEvents:'none'}}/>
<div onMouseEnter={()=>setHovImg(true)} onMouseLeave={()=>setHovImg(false)} style={{position:'absolute',left:24,top:60,right:40,bottom:70,borderRadius:'var(--radius-xl)',overflow:'hidden',boxShadow:hovImg?'0 34px 60px rgba(15,42,66,.32)':'0 24px 46px rgba(15,42,66,.24)',transform:hovImg?'rotate(0deg) scale(1.01)':'rotate(-2.4deg)',transition:'transform .4s var(--ease-standard),box-shadow .4s',border:'6px solid var(--white)'}}>
<img src={(window.__resources&&window.__resources.aboutPhoto)||''} alt="Our office" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center'}}/>
<div style={{position:'absolute',left:0,right:0,bottom:0,height:90,background:'linear-gradient(transparent,rgba(15,42,66,.55))',pointerEvents:'none'}}/>
</div>
<div style={{position:'absolute',left:0,top:24,display:'inline-flex',alignItems:'center',gap:8,background:'var(--white)',borderRadius:'var(--radius-pill)',padding:'8px 15px',boxShadow:'var(--shadow-md)'}}><span style={{width:8,height:8,borderRadius:'50%',background:'var(--status-positive)',animation:'pulse-dot 2s infinite'}}/><span style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.05em',color:'var(--navy-800)'}}>7+ years · pan-India</span></div>
<div style={{position:'absolute',right:0,bottom:6,display:'flex',gap:0,background:'var(--white)',borderRadius:'var(--radius-lg)',boxShadow:'0 18px 40px rgba(15,42,66,.2)',overflow:'hidden'}}>
{ABOUT_STATS.map((s,i)=><div key={s.l} style={{padding:'14px 18px',textAlign:'center',borderLeft:i?'1px solid var(--ink-100)':'none'}}>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-2xl)',color:'var(--navy-900)',lineHeight:1}}>{s.n}</div>
<div style={{fontFamily:'var(--font-body)',fontSize:10.5,color:'var(--ink-500)',marginTop:4,whiteSpace:'nowrap'}}>{s.l}</div>
</div>)}
</div>
</div>
</div>
</section>;
}
function WhyIconV2({code,size=26}){
const p={fill:'none',stroke:'currentColor',strokeWidth:1.9,strokeLinecap:'round',strokeLinejoin:'round'};
const paths={
VER:<g {...p}><path d="M12 3l7 3v5c0 4.6-3.1 7.8-7 9-3.9-1.2-7-4.4-7-9V6z"/><path d="M9 12l2.2 2.2L15 10.4"/></g>,
SEC:<g {...p}><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/><path d="M12 15v2"/></g>,
CMP:<g {...p}><path d="M7 3h7l4 4v13.5a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5V3.5A.5.5 0 017 3z"/><path d="M14 3v4h4"/><path d="M8.5 14l2 2 4-4"/></g>,
YRS:<g {...p}><circle cx="12" cy="9" r="5"/><path d="M9.2 13.4L8 21l4-2.4L16 21l-1.2-7.6"/></g>,
PAN:<g {...p}><rect x="6" y="4" width="12" height="17" rx="1"/><path d="M6 21h12"/><path d="M9.5 8h1M13.5 8h1M9.5 12h1M13.5 12h1"/><path d="M10.5 21v-3h3v3"/></g>,
'500':<g {...p}><circle cx="9" cy="9" r="3"/><path d="M4 20c0-3 2.2-5 5-5s5 2 5 5"/><path d="M15.5 7.5a3 3 0 010 5.5"/><path d="M16 15c2.4.3 4 2.3 4 5"/></g>,
};
return <svg viewBox="0 0 24 24" width={size} height={size}>{paths[code]||paths.VER}</svg>;
}
function WhyCardV2({f,i}){
const [h,setH]=React.useState(false);
const [pos,setPos]=React.useState({x:50,y:0});
const onMove=e=>{const r=e.currentTarget.getBoundingClientRect();setPos({x:(e.clientX-r.left)/r.width*100,y:(e.clientY-r.top)/r.height*100});};
return <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} onMouseMove={onMove} style={{position:'relative',background:'var(--white)',borderRadius:'var(--radius-xl)',padding:'34px 26px 30px',border:'1px solid '+(h?'var(--gold-300,#f5cf82)':'var(--ink-100)'),overflow:'hidden',textAlign:'center',cursor:'default',transform:h?'translateY(-6px)':'none',boxShadow:h?'0 24px 46px rgba(15,42,66,.14)':'var(--shadow-sm)',transition:'transform .35s var(--ease-standard),box-shadow .35s,border-color .35s'}}>
<div style={{position:'absolute',inset:0,opacity:h?1:0,transition:'opacity .35s',background:`radial-gradient(280px circle at ${pos.x}% ${pos.y}%,rgba(239,168,46,.12),transparent 60%)`,pointerEvents:'none'}}/>
<div style={{position:'absolute',top:0,left:0,right:0,height:3,background:'linear-gradient(90deg,var(--gold-400),var(--gold-600,#d8901f))',transform:h?'scaleX(1)':'scaleX(0)',transformOrigin:'left',transition:'transform .4s var(--ease-standard)'}}/>
<span style={{position:'absolute',top:14,right:18,fontFamily:'var(--font-mono)',fontSize:12,fontWeight:700,color:h?'var(--gold-500)':'var(--ink-100)',transition:'color .35s'}}>{String(i+1).padStart(2,'0')}</span>
<div style={{position:'relative',width:58,height:58,margin:'0 auto 18px',borderRadius:'50%',background:h?'var(--gold-500)':'var(--navy-950)',color:h?'var(--navy-950)':'var(--gold-400)',display:'flex',alignItems:'center',justifyContent:'center',transition:'background .35s,color .35s',transform:h?'rotate(-6deg) scale(1.06)':'none'}}>
<WhyIconV2 code={f.icon}/>
{h&&<span style={{position:'absolute',inset:-5,borderRadius:'50%',border:'2px solid var(--gold-400)',animation:'pulse-ring 1.8s infinite'}}/>}
</div>
<div style={{position:'relative',fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-lg)',color:'var(--navy-900)',marginBottom:8}}>{f.title}</div>
<div style={{position:'relative',fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--ink-500)',lineHeight:'var(--leading-sm)',maxWidth:260,margin:'0 auto'}}>{f.description}</div>
</div>;
}
function HomeV2({go}){
const {Button,Accordion,OfficeCard,Footer}=window.IncomeNFilingComplianceOSDesignSystem_6fdb9e;

return <div style={{background:'var(--paper)'}}>
<ChatWidgetV2 go={go}/>
<NavBarHomeV2 go={go} active="home"/>

<section style={{position:'relative',background:'var(--white)'}}>
<div style={{position:'relative',maxWidth:'var(--container-max)',margin:'0 auto',display:'grid',gridTemplateColumns:'1.05fr .95fr',gap:60,alignItems:'center',padding:'72px 32px 80px'}}>
<div>
<EyebrowV2>All Systems Compliant · Since 2017</EyebrowV2>
<h1 style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-6xl)',color:'var(--navy-900)',margin:'20px 0 20px',letterSpacing:'var(--tracking-tight)',lineHeight:1.06}}>Business compliance,<br/>made <span style={{position:'relative',display:'inline-block'}}>effortless<svg viewBox="0 0 220 18" style={{position:'absolute',left:0,bottom:-10,width:'100%',height:18}}><path d="M2 13 C60 2, 160 2, 218 12" stroke="var(--gold-500)" strokeWidth="6" fill="none" strokeLinecap="round"/></svg></span>.</h1>
<p style={{fontFamily:'var(--font-body)',fontSize:'var(--text-lg)',color:'var(--ink-500)',maxWidth:460,lineHeight:'var(--leading-lg)',marginBottom:32}}>A dedicated team handling taxation, GST, incorporation, and corporate law — so your business stays compliant without the busywork.</p>
<div style={{display:'flex',gap:14,marginBottom:40}}>
<HeroCTAButtonV2 variant="primary" onClick={()=>go('contact')}>Book Free Consultation</HeroCTAButtonV2>
<HeroCTAButtonV2 variant="ghost" onClick={()=>go('services')}>Explore Services</HeroCTAButtonV2>
</div>
<div style={{display:'flex',gap:36}}>
<div><div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-3xl)',color:'var(--navy-900)'}}><CountUpV2 to={500} suffix="+"/></div><div style={{fontFamily:'var(--font-body)',fontSize:12,color:'var(--ink-500)'}}>Businesses served</div></div>
<div><div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-3xl)',color:'var(--navy-900)'}}><CountUpV2 to={7} suffix="+"/></div><div style={{fontFamily:'var(--font-body)',fontSize:12,color:'var(--ink-500)'}}>Years of excellence</div></div>
<div><div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-3xl)',color:'var(--navy-900)'}}><CountUpV2 to={94}/></div><div style={{fontFamily:'var(--font-body)',fontSize:12,color:'var(--ink-500)'}}>Services live</div></div>
</div>
</div>
<div style={{position:'relative',height:560,width:'100%'}}>
<div style={{position:'absolute',right:'2%',top:'50%',transform:'translateY(-50%)',width:520,height:520,borderRadius:'50%',background:'radial-gradient(circle at 45% 45%,rgba(239,168,46,.18),rgba(43,108,214,.10) 52%,transparent 72%)'}}/>
<div style={{position:'absolute',right:'-4%',top:'50%',transform:'translateY(-50%)',width:500,height:500,borderRadius:'50%',border:'2px dashed var(--gold-300,#f5cf82)',animation:'spin-slow 46s linear infinite',opacity:.7}}/>
<div style={{position:'absolute',right:'6%',top:'50%',transform:'translateY(-50%)',width:360,height:360,borderRadius:'50%',border:'1.5px solid rgba(43,108,214,.2)',animation:'spin-slow 32s linear infinite reverse'}}/>
<div style={{position:'absolute',left:'-4%',bottom:0,width:'52%',height:'98%',zIndex:2}}>
<img src={(window.__resources&&window.__resources.heroChar)||''} alt="Advisor" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'contain',objectPosition:'bottom center'}}/>
</div>
<div style={{position:'absolute',right:0,top:'8%',zIndex:4,width:'64%',minWidth:290}}>
<ServiceFinderV2 onSelect={()=>go('services')}/>
</div>
<div style={{position:'absolute',top:'2%',right:'6%',zIndex:5,display:'inline-flex',alignItems:'center',gap:6,background:'var(--white)',borderRadius:'var(--radius-pill)',padding:'6px 14px',boxShadow:'var(--shadow-md)'}}>
<span style={{width:7,height:7,borderRadius:'50%',background:'var(--status-positive)',animation:'pulse-dot 2s infinite'}}/>
<span style={{fontFamily:'var(--font-mono)',fontSize:10,color:'var(--navy-800)'}}>94 services live</span>
</div>
{[{icon:'GST',left:'34%',top:'-1%'},{icon:'ITR',right:'-3%',top:'20%'},{icon:'INC',left:'26%',bottom:'6%'},{icon:'ROC',right:'3%',bottom:'4%'}].map((b,i)=>{
const ac=V2_ACCENTS[i%4];
return <div key={b.icon} style={{position:'absolute',left:b.left,right:b.right,top:b.top,bottom:b.bottom,zIndex:5,width:60,height:60,borderRadius:'50%',background:'var(--white)',boxShadow:'var(--shadow-md)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-mono)',fontSize:12,fontWeight:'var(--weight-semibold)',letterSpacing:'.04em',color:ac,border:`2px solid ${ac}`,animation:'float-y 5s ease-in-out infinite',animationDelay:`${i*.35}s`}}>{b.icon}</div>;
})}
</div>
</div>
</section>

<AboutSectionV2 go={go}/>

<section style={{padding:'90px 32px',maxWidth:'var(--container-max)',margin:'0 auto'}}>
<div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',marginBottom:32,flexWrap:'wrap',gap:12}}>
<div>
<EyebrowV2>Modules</EyebrowV2>
<h2 style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-3xl)',color:'var(--navy-900)',margin:'16px 0 0'}}>Service Categories</h2>
</div>
<Button variant="ghost" onClick={()=>go('services')}>View all 94 services</Button>
</div>
<CategoryExplorerV2 categories={HOME_CATEGORIES} onSelect={()=>go('services')}/>
</section>

<section style={{position:'relative',background:'var(--paper-alt)',padding:'90px 32px'}}>
<div style={{maxWidth:'var(--container-max)',margin:'0 auto'}}>
<SectionHeadV2 eyebrow="Simple Process" title="How It Works" sub="Three steps between not compliant and fully covered — hover or tap to explore."/>
<StepperV2/>
</div>
</section>

<section style={{position:'relative',padding:'86px 32px 96px',overflow:'hidden'}}>
<div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(rgba(43,108,214,.11) 1px,transparent 1px)',backgroundSize:'28px 28px',WebkitMaskImage:'radial-gradient(120% 80% at 50% 0%,black,transparent 72%)',maskImage:'radial-gradient(120% 80% at 50% 0%,black,transparent 72%)',opacity:.55}}/>
<div style={{position:'relative',maxWidth:'var(--container-max)',margin:'0 auto'}}>
<SectionHeadV2 eyebrow="Why Us" title="Why Businesses Choose Us" sub="Professional, secure, and dependable compliance services — hover any card to explore."/>
<div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
{WHY_CHOOSE_US.map((f,i)=><WhyCardV2 key={f.title} f={f} i={i}/>)}
</div>
</div>
</section>

<section style={{padding:'80px 32px 90px'}}>
<div style={{maxWidth:'var(--container-max)',margin:'0 auto'}}>
<SectionHeadV2 eyebrow="And Many More" title="Our Clients" sub="As a client, it matters who handles your compliance — here's who trusts us. Watch the cards flip, hover to hold."/>
<ClientFlipGridV2/>
</div>
</section>

<section id="testimonials" style={{background:'var(--navy-050)',padding:'90px 0'}}>
<div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'0 32px'}}>
<SectionHeadV2 eyebrow="Client Stories" title="What Our Clients Say" sub="★★★★★ Rated 4.9/5 on Google Reviews — hover to pause and read."/>
</div>
<ReviewMarqueeV2/>
</section>

<section style={{padding:'90px 32px',maxWidth:'var(--container-max)',margin:'0 auto'}}>
<SectionHeadV2 eyebrow="Pan-India Compliance Services" title="Our Office Locations" sub="Two home offices in Kolkata & Bhagalpur, delivering to 20+ metros — click a pin to explore."/>
<OfficeMapV2/>
</section>

<section style={{background:'var(--white)',padding:'90px 32px'}}>
<div style={{maxWidth:760,margin:'0 auto'}}>
<SectionHeadV2 eyebrow="Quick Answers" title="Frequently Asked Questions"/>
<Accordion defaultOpenIndex={0} items={FAQ}/>
</div>
</section>

<section style={{padding:'40px 32px 90px'}}>
<div style={{maxWidth:'var(--container-max)',margin:'0 auto',position:'relative',borderRadius:'var(--radius-xl)',overflow:'hidden',minHeight:340,display:'grid',gridTemplateColumns:'1fr 1fr',background:'linear-gradient(115deg,var(--navy-050) 46%,#dbe6fb)'}}>
<div style={{position:'absolute',right:'22%',top:'50%',transform:'translateY(-50%)',width:520,height:520,borderRadius:'50%',border:'60px solid rgba(43,108,214,.06)',pointerEvents:'none'}}/>
<div style={{position:'relative',zIndex:2,padding:'52px 20px 52px 56px',display:'flex',flexDirection:'column',justifyContent:'center',gap:18}}>
<h2 style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-4xl)',color:'var(--navy-900)',margin:0,lineHeight:1.12,letterSpacing:'var(--tracking-tight)'}}>File ITR in Minutes<br/>with <span style={{color:'var(--navy-600,#2b6cd6)'}}>100% Accuracy</span></h2>
<p style={{fontFamily:'var(--font-body)',fontSize:'var(--text-lg)',color:'var(--ink-500)',margin:0}}>Maximum Tax Refund, Guaranteed.</p>
<div><HeroCTAButtonV2 variant="primary" onClick={()=>go('contact')}>Start Filing Now</HeroCTAButtonV2></div>
<div style={{display:'flex',alignItems:'center',gap:14,background:'var(--white)',borderRadius:'var(--radius-lg)',padding:'12px 18px',boxShadow:'var(--shadow-sm)',maxWidth:400}}>
<div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:3,paddingRight:14,borderRight:'1px solid var(--ink-100)'}}>
<span style={{width:26,height:26,borderRadius:'var(--radius-sm,6px)',background:'var(--navy-050)',color:'var(--navy-700)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:13}}>🛡</span>
<span style={{fontFamily:'var(--font-mono)',fontSize:8,letterSpacing:'.06em',textTransform:'uppercase',color:'var(--navy-700)',fontWeight:'var(--weight-semibold)'}}>Notice<br/>Protect</span>
</div>
<div style={{fontFamily:'var(--font-body)',fontSize:12,color:'var(--ink-500)',lineHeight:1.5}}>Received a notice? <strong style={{color:'var(--navy-900)'}}>We Handle It Free.</strong><br/>Computation Error? <strong style={{color:'var(--navy-900)'}}>100% Refund.</strong></div>
</div>
</div>
<div style={{position:'relative',minHeight:340}}>
<img src={(window.__resources&&window.__resources.itrChar)||''} alt="ITR refund" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center'}}/>
</div>
</div>
</section>

<ContactSectionV2 go={go}/>

<FooterV2 go={go}/>
</div>;
}
Object.assign(window,{HomeV2,FooterV2,OfficeMapV2});
