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
const WA='https://wa.me/917890594600';
const WA_BG='#e5ddd5',WA_HEAD='#075e54',WA_TEAL='#128c7e',WA_OUT='#dcf8c6',WA_TICK='#34b7f1';
const KB=[
{id:'gst',title:'GST Registration & Returns',emoji:'🧾',kw:['gst','goods and service','gstr','return','refund','e-way','einvoice','e-invoice','itc','input tax'],reply:'Sure! 🧾 We handle everything GST — new registration, monthly GSTR-1 & 3B, annual returns, reconciliation and refunds. What kind of business is it?'},
{id:'itr',title:'Income Tax / ITR Filing',emoji:'💰',kw:['itr','income tax','tax return','file tax','salary','capital gain','tds','tcs','form 16','advance tax'],reply:'Happy to help you file! 💰 We do all ITR types — salaried, capital gains, business and presumptive — plus TDS. What’s your main income source?'},
{id:'inc',title:'Company / LLP Incorporation',emoji:'🏢',kw:['company','incorporat','register a','pvt ltd','private limited','llp','opc','startup','partnership','proprietor','section 8'],reply:'Exciting! 🏢 We register Pvt Ltd, LLP, OPC and more — with PAN, TAN, DSC and GST all set up for you. Which type were you thinking of?'},
{id:'roc',title:'ROC & Corporate Compliance',emoji:'📋',kw:['roc','annual return','mgt','aoc','director','din','kyc','share transfer','board resolution','auditor'],reply:'We’ve got your ROC compliance covered 📋 — annual returns (MGT-7, AOC-4), director changes, DIR-3 KYC and more. What’s coming up for you?'},
{id:'acc',title:'Accounting & Bookkeeping',emoji:'📊',kw:['account','bookkeep','payroll','mis','ledger','balance sheet','reconcil','cfo','books'],reply:'Absolutely 📊 — monthly bookkeeping, payroll, MIS reports and audit support, even virtual CFO. Roughly how many transactions a month?'},
{id:'lic',title:'Licenses & Registrations',emoji:'📜',kw:['license','licence','msme','udyam','fssai','iec','import export','trade license','pf','esi','shop'],reply:'Yes! 📜 MSME/Udyam, FSSAI, IEC, PF/ESI, trade and shop licenses — all available. Which one do you need?'},
{id:'notice',title:'Tax Notices & Advisory',emoji:'🛡️',kw:['notice','scrutiny','assessment','appeal','advisory','nri','penalty','defective','demand'],reply:'Don’t worry — we handle this every day 🛡️. Income-tax & GST notices, scrutiny, appeals and NRI advisory. Do you have the notice with you?'},
];
function findKB(t){const s=t.toLowerCase();return KB.find(k=>k.kw.some(w=>s.includes(w)));}
function botReply(text){
const s=text.toLowerCase().trim();
if(/^(hi|hey|hello|good (morning|evening|afternoon)|namaste|hii?|start)\b/.test(s)||s==='')return{text:'Hello! 👋 Welcome to Income N Filing. How can we help you today? Just tap a topic or type your question 😊',chips:['GST registration','File my ITR','Start a company','I got a tax notice']};
if(/(price|cost|fee|charge|quote|how much|rate|kitna|kitne)/.test(s))return{text:'Great question! 😊 We don’t have fixed prices — every case is different, so we scope it on a free call and you only pay for what you need. Shall I set that up?',wa:true,chips:['Yes, book a free call','See all services']};
if(/(thank|thanks|thx|great|ok|okay|cool|got it|nice|good)/.test(s))return{text:'You’re most welcome! 🙏 Whenever you’re ready, tap the green button and our advisor will continue with you on WhatsApp.',wa:true};
if(/(human|advisor|agent|person|talk to|call|whatsapp|expert)/.test(s))return{text:'Of course! 👩‍💼 Our advisors usually reply within a few working hours. Let me connect you on WhatsApp.',wa:true,chips:['Chat on WhatsApp']};
const kb=findKB(s);
if(kb)return{text:kb.reply,service:kb,wa:true,chips:['Book a free call','Ask about something else']};
return{text:'Got it 👍 We help with GST, income tax, starting a company, accounting, licenses and tax notices. Pick one below or tell me in your own words!',chips:['GST registration','File my ITR','Start a company','Accounting help','Tax notice']};
}
function now(){const d=new Date();let h=d.getHours(),m=d.getMinutes();const ap=h>=12?'PM':'AM';h=h%12||12;return `${h}:${String(m).padStart(2,'0')} ${ap}`;}
const TILES=[
{emoji:'🧾',title:'GST Registration & Returns',sub:'New GSTIN, GSTR-1 & 3B, refunds',send:'GST registration'},
{emoji:'💰',title:'Income Tax / ITR Filing',sub:'Salaried, capital gains, business',send:'File my ITR'},
{emoji:'🏢',title:'Start a Company',sub:'Pvt Ltd, LLP, OPC — fully set up',send:'Start a company'},
{emoji:'🛡️',title:'I Got a Tax Notice',sub:'Scrutiny, appeals, advisory',send:'I got a tax notice'},
];
function LiveChatV2({go}){
const {Footer}=window.IncomeNFilingComplianceOSDesignSystem_6fdb9e;
const [msgs,setMsgs]=React.useState([{who:'bot',text:'Hi, I’m Ira — your compliance concierge. 👋 Tell me what you’re working on and I’ll point you to the right expert. Pick a topic to begin, or just type your question below.',tiles:true,t:now()}]);
const [typing,setTyping]=React.useState(false);
const [val,setVal]=React.useState('');
const scrollRef=React.useRef(null);
const timers=React.useRef([]);
React.useEffect(()=>{if(scrollRef.current)scrollRef.current.scrollTop=scrollRef.current.scrollHeight;},[msgs,typing]);
React.useEffect(()=>()=>timers.current.forEach(clearTimeout),[]);
const send=raw=>{const text=(raw??val).trim();if(!text)return;setVal('');setMsgs(m=>[...m,{who:'user',text,t:now()}]);setTyping(true);
const reply=botReply(text);
const tm=setTimeout(()=>{setTyping(false);setMsgs(m=>[...m,{who:'bot',...reply,t:now()}]);},900+Math.min(text.length*16,800));
timers.current.push(tm);};
const inputFocus=React.useRef(false);const[,force]=React.useState(0);
return <div style={{background:'var(--navy-050)',minHeight:'100vh',display:'flex',flexDirection:'column'}}>
<a href={WA} target="_blank" rel="noreferrer" style={{position:'fixed',bottom:26,right:26,width:58,height:58,borderRadius:'50%',background:'var(--whatsapp-green)',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'var(--shadow-lg)',zIndex:80,textDecoration:'none'}}>
<span style={{position:'absolute',inset:0,borderRadius:'50%',border:'2px solid var(--whatsapp-green)',animation:'pulse-ring 2s infinite'}}/>
<svg viewBox="0 0 24 24" width="30" height="30" fill="var(--white)" style={{position:'relative'}}><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.16c-.24.68-1.42 1.32-1.95 1.37-.5.05-.98.24-3.3-.69-2.78-1.1-4.55-3.94-4.69-4.13-.14-.19-1.13-1.5-1.13-2.86 0-1.36.71-2.03.96-2.31.24-.27.53-.34.71-.34.18 0 .35 0 .51.01.16.01.39-.06.6.46.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.17.28.75 1.24 1.61 2.01 1.11.99 2.05 1.3 2.33 1.44.28.14.45.12.61-.07.16-.19.7-.82.89-1.1.19-.28.37-.23.62-.14.25.09 1.61.76 1.89.9.28.14.46.21.53.32.07.11.07.65-.17 1.33z"/></svg>
</a>
<NavBarV2 go={go} active="chat"/>
<section style={{flex:1,padding:'44px 24px 64px'}}>
<div style={{maxWidth:680,margin:'0 auto'}}>
<div style={{textAlign:'center',marginBottom:26}}>
<div style={{display:'inline-flex',alignItems:'center',gap:8,padding:'6px 15px',borderRadius:'var(--radius-pill)',background:'var(--white)',border:'1px solid var(--ink-100)',fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.08em',textTransform:'uppercase',color:'var(--navy-700)',marginBottom:14}}><span style={{width:6,height:6,borderRadius:'50%',background:'var(--status-positive)',animation:'pulse-dot 2s infinite'}}/>Advisors online · replies in minutes</div>
<h1 style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-4xl)',color:'var(--navy-900)',margin:'0 0 8px',letterSpacing:'var(--tracking-tight)'}}>Meet Ira, your compliance concierge</h1>
<p style={{fontFamily:'var(--font-body)',fontSize:'var(--text-base)',color:'var(--ink-500)',margin:'0 auto',maxWidth:460}}>Ask anything about GST, tax, company setup or notices. Ira finds the right service in seconds — then a real advisor takes over.</p>
</div>
<div style={{borderRadius:22,overflow:'hidden',boxShadow:'0 30px 70px rgba(6,18,36,.32)',display:'flex',flexDirection:'column',height:620,border:'1px solid rgba(255,255,255,.5)',background:'var(--white)'}}>
<div style={{position:'relative',display:'flex',alignItems:'center',gap:14,padding:'18px 20px',background:'linear-gradient(135deg,var(--gold-400) 0%,var(--gold-500) 58%,#DA9A1E 100%)',overflow:'hidden'}}>
<div style={{position:'absolute',inset:0,background:'radial-gradient(130% 150% at 88% -30%,rgba(255,255,255,.5),transparent 55%)',pointerEvents:'none'}}/>
<div style={{position:'absolute',bottom:-40,left:-30,width:190,height:190,borderRadius:'50%',background:'radial-gradient(circle,rgba(11,31,58,.09),transparent 70%)',pointerEvents:'none'}}/>
<div style={{position:'absolute',top:0,left:0,right:0,height:'52%',background:'linear-gradient(180deg,rgba(255,255,255,.28),transparent)',pointerEvents:'none'}}/>
<div style={{position:'relative',width:50,height:50}}>
<span style={{position:'absolute',inset:-4,borderRadius:'50%',border:'2px solid rgba(11,31,58,.32)',animation:'pulse-ring 2.6s infinite'}}/>
<img src={(window.__resources&&window.__resources.logo)||"../../assets/logo.jpg"} alt="" style={{width:50,height:50,borderRadius:'50%',border:'2.5px solid rgba(11,31,58,.5)',boxShadow:'0 4px 12px rgba(11,31,58,.22)'}}/>
<span style={{position:'absolute',right:0,bottom:0,width:13,height:13,borderRadius:'50%',background:'var(--status-positive)',border:'2px solid var(--gold-500)'}}/>
</div>
<div style={{flex:1,minWidth:0,position:'relative'}}>
<div style={{display:'flex',alignItems:'center',gap:8}}>
<span style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:18,color:'var(--navy-950)',letterSpacing:'.01em'}}>Ira</span>
<span style={{fontFamily:'var(--font-mono)',fontSize:9.5,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--navy-900)',background:'rgba(11,31,58,.13)',padding:'3px 9px',borderRadius:'var(--radius-pill)'}}>✦ Concierge</span>
</div>
<div style={{fontFamily:'var(--font-body)',fontSize:12.5,color:'var(--navy-800)',display:'flex',alignItems:'center',gap:6,marginTop:2}}>{typing?'typing…':<><span style={{width:6,height:6,borderRadius:'50%',background:'var(--status-positive)',display:'inline-block'}}/>Online · replies in minutes</>}</div>
</div>
<a href={WA} target="_blank" rel="noreferrer" title="Talk on WhatsApp" style={{position:'relative',display:'inline-flex',alignItems:'center',justifyContent:'center',width:40,height:40,borderRadius:'50%',background:'var(--whatsapp-green)',border:'1.5px solid rgba(255,255,255,.55)',textDecoration:'none',boxShadow:'0 4px 12px rgba(37,211,102,.45)'}}><svg viewBox="0 0 24 24" width="20" height="20" fill="#fff"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.16c-.24.68-1.42 1.32-1.95 1.37-.5.05-.98.24-3.3-.69-2.78-1.1-4.55-3.94-4.69-4.13-.14-.19-1.13-1.5-1.13-2.86 0-1.36.71-2.03.96-2.31.24-.27.53-.34.71-.34.18 0 .35 0 .51.01.16.01.39-.06.6.46.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.17.28.75 1.24 1.61 2.01 1.11.99 2.05 1.3 2.33 1.44.28.14.45.12.61-.07.16-.19.7-.82.89-1.1.19-.28.37-.23.62-.14.25.09 1.61.76 1.89.9.28.14.46.21.53.32.07.11.07.65-.17 1.33z"/></svg></a>
</div>
<div ref={scrollRef} style={{flex:1,overflowY:'auto',padding:'20px 18px',display:'flex',flexDirection:'column',gap:13,background:'var(--navy-050)',backgroundImage:'radial-gradient(rgba(11,31,58,.04) 1.5px,transparent 1.5px)',backgroundSize:'22px 22px'}}>
{msgs.map((m,i)=><Bubble key={i} m={m} onChip={send}/>)}
{typing&&<div style={{alignSelf:'flex-start',display:'flex',alignItems:'flex-end',gap:9,animation:'fade-in-up .3s var(--ease-standard) both'}}>
<img src={(window.__resources&&window.__resources.logo)||"../../assets/logo.jpg"} alt="" style={{flexShrink:0,width:30,height:30,borderRadius:'50%',border:'1.5px solid var(--gold-500)',boxShadow:'0 2px 6px rgba(11,31,58,.12)'}}/>
<div style={{display:'flex',gap:6,alignItems:'center',background:'#fff',borderRadius:'16px 16px 16px 4px',padding:'15px 17px',boxShadow:'0 4px 16px rgba(11,31,58,.10)',border:'1px solid var(--ink-100)'}}>
{[0,1,2].map(d=><span key={d} style={{width:8,height:8,borderRadius:'50%',background:'linear-gradient(135deg,var(--gold-400),var(--gold-600))',animation:`typing-bounce 1.1s infinite ${d*.16}s`}}/>)}
</div>
</div>}
</div>
<div style={{display:'flex',alignItems:'center',gap:11,padding:'14px 16px',background:'var(--white)',borderTop:'1px solid var(--ink-100)'}}>
<div style={{flex:1,display:'flex',alignItems:'center',gap:10,background:'var(--white)',borderRadius:'var(--radius-pill)',padding:'12px 18px',border:'1.5px solid '+(inputFocus.current?'var(--gold-500)':'var(--ink-100)'),boxShadow:inputFocus.current?'0 0 0 4px rgba(212,167,71,.16),0 2px 8px rgba(11,31,58,.05)':'inset 0 1px 3px rgba(11,31,58,.05)',transition:'border-color .18s,box-shadow .18s'}}>
<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="var(--ink-300)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}><path d="M21.44 11.05l-9.19 9.19a5 5 0 01-7.07-7.07l9.19-9.19a3.5 3.5 0 014.95 4.95l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
<input value={val} onChange={e=>setVal(e.target.value)} onKeyDown={e=>{if(e.key==='Enter')send();}} onFocus={()=>{inputFocus.current=true;force(x=>x+1);}} onBlur={()=>{inputFocus.current=false;force(x=>x+1);}} placeholder="Type your question to Ira…" style={{flex:1,minWidth:0,border:'none',outline:'none',background:'none',fontFamily:'var(--font-body)',fontSize:14.5,color:'var(--navy-900)'}}/>
</div>
<button onClick={()=>send()} title="Send" onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px) scale(1.04)';e.currentTarget.style.boxShadow='0 8px 22px rgba(212,167,71,.5)';}} onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='0 4px 14px rgba(212,167,71,.42)';}} style={{flexShrink:0,width:48,height:48,borderRadius:15,border:'none',background:'linear-gradient(135deg,var(--gold-400),var(--gold-500))',color:'var(--navy-950)',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 4px 14px rgba(212,167,71,.42)',transition:'transform .18s var(--ease-standard),box-shadow .18s'}}><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg></button>
</div>
</div>
<div style={{textAlign:'center',fontFamily:'var(--font-body)',fontSize:12,color:'var(--ink-300)',marginTop:16}}>Guided by Ira · a real advisor continues with you on WhatsApp</div>
</div>
</section>
{React.createElement(window.FooterV2,{go})}
</div>;
}
function Bubble({m,onChip}){
const isUser=m.who==='user';
return <div style={{display:'flex',flexDirection:'column',alignItems:isUser?'flex-end':'flex-start',gap:9,animation:'fade-in-up .32s var(--ease-standard) both',width:'100%'}}>
<div style={{display:'flex',alignItems:'flex-end',gap:9,maxWidth:'86%',flexDirection:isUser?'row-reverse':'row'}}>
{!isUser&&<img src={(window.__resources&&window.__resources.logo)||"../../assets/logo.jpg"} alt="" style={{flexShrink:0,width:30,height:30,borderRadius:'50%',border:'1.5px solid var(--gold-500)',boxShadow:'0 2px 6px rgba(11,31,58,.12)'}}/>}
<div style={{position:'relative',background:isUser?'linear-gradient(135deg,var(--navy-800),var(--navy-900))':'var(--white)',borderRadius:isUser?'16px 16px 4px 16px':'16px 16px 16px 4px',padding:'11px 15px 8px',boxShadow:isUser?'0 4px 14px rgba(11,31,58,.22)':'0 2px 12px rgba(11,31,58,.08)',border:isUser?'none':'1px solid var(--ink-100)'}}>
<div style={{fontFamily:'var(--font-body)',fontSize:14.5,lineHeight:1.5,color:isUser?'rgba(255,255,255,.96)':'var(--navy-900)'}}>{m.text}</div>
{m.service&&<a href={WA} target="_blank" rel="noreferrer" style={{display:'flex',alignItems:'center',gap:12,textDecoration:'none',marginTop:10,background:'linear-gradient(135deg,var(--navy-050),var(--white))',border:'1px solid var(--gold-200)',borderRadius:12,padding:'11px 13px'}}>
<span style={{flexShrink:0,width:40,height:40,borderRadius:10,background:'linear-gradient(135deg,var(--navy-900),var(--navy-700))',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20}}>{m.service.emoji}</span>
<span style={{flex:1,minWidth:0}}>
<span style={{display:'block',fontFamily:'var(--font-mono)',fontSize:10,fontWeight:700,letterSpacing:'.06em',textTransform:'uppercase',color:'var(--gold-600)'}}>Recommended for you</span>
<span style={{display:'block',fontFamily:'var(--font-body)',fontWeight:'var(--weight-semibold)',fontSize:14,color:'var(--navy-900)'}}>{m.service.title}</span>
</span>
<span style={{flexShrink:0,color:'var(--gold-600)',fontSize:20}}>›</span>
</a>}
<div style={{textAlign:'right',marginTop:3,fontFamily:'var(--font-body)',fontSize:10,color:isUser?'rgba(255,255,255,.55)':'var(--ink-300)'}}>{m.t}</div>
</div>
</div>
{m.tiles&&<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:9,width:'100%',maxWidth:'92%',marginTop:2}}>
{TILES.map(t=><button key={t.title} onClick={()=>onChip(t.send)} onMouseEnter={e=>{const c=e.currentTarget;c.style.transform='translateY(-3px)';c.style.borderColor='var(--gold-500)';c.style.boxShadow='0 10px 24px rgba(11,31,58,.14)';}} onMouseLeave={e=>{const c=e.currentTarget;c.style.transform='none';c.style.borderColor='var(--ink-100)';c.style.boxShadow='0 2px 8px rgba(11,31,58,.06)';}} style={{textAlign:'left',display:'flex',flexDirection:'column',gap:6,padding:'13px 13px',borderRadius:14,border:'1px solid var(--ink-100)',background:'var(--white)',cursor:'pointer',boxShadow:'0 2px 8px rgba(11,31,58,.06)',transition:'all .18s var(--ease-standard)'}}>
<span style={{width:34,height:34,borderRadius:9,background:'linear-gradient(135deg,var(--navy-050),var(--gold-100))',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18}}>{t.emoji}</span>
<span style={{fontFamily:'var(--font-body)',fontWeight:'var(--weight-semibold)',fontSize:13,color:'var(--navy-900)',lineHeight:1.25}}>{t.title}</span>
<span style={{fontFamily:'var(--font-body)',fontSize:11,color:'var(--ink-400)',lineHeight:1.3}}>{t.sub}</span>
</button>)}
</div>}
{m.chips&&<div style={{display:'flex',flexWrap:'wrap',gap:8,justifyContent:isUser?'flex-end':'flex-start',maxWidth:'92%',paddingLeft:isUser?0:39}}>
{m.chips.map(ch=>{const isWA=/whatsapp|book|call/i.test(ch);if(isWA)return <a key={ch} href={WA} target="_blank" rel="noreferrer" style={{display:'inline-flex',alignItems:'center',gap:6,fontFamily:'var(--font-body)',fontSize:13,fontWeight:'var(--weight-semibold)',padding:'9px 17px',borderRadius:'var(--radius-pill)',background:'var(--whatsapp-green)',color:'#fff',textDecoration:'none',boxShadow:'0 3px 10px rgba(37,211,102,.32)'}}>{ch} ›</a>;
return <button key={ch} onClick={()=>onChip(ch)} onMouseEnter={e=>{e.currentTarget.style.background='var(--navy-900)';e.currentTarget.style.color='#fff';e.currentTarget.style.borderColor='var(--navy-900)';}} onMouseLeave={e=>{e.currentTarget.style.background='var(--white)';e.currentTarget.style.color='var(--navy-800)';e.currentTarget.style.borderColor='var(--gold-300)';}} style={{fontFamily:'var(--font-body)',fontSize:13,fontWeight:'var(--weight-medium)',padding:'9px 17px',borderRadius:'var(--radius-pill)',border:'1.5px solid var(--gold-300)',background:'var(--white)',color:'var(--navy-800)',cursor:'pointer',transition:'all .18s'}}>{ch}</button>;})}
</div>}
</div>;
}
Object.assign(window,{LiveChatV2});
