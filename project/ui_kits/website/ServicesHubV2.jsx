
const V2_ACCENTS=['var(--gold-500)','var(--navy-700)','var(--status-positive)','var(--navy-500)'];
const V2_TINTS=['var(--gold-050)','var(--navy-050)','var(--paper-alt)','var(--navy-050)'];
const CATEGORIES=[
{icon:'INC',title:'Incorporation & Registrations',description:'Company, LLP, OPC formation and startup registrations.',count:12,group:'Corporate',services:['Private Limited Company','LLP Registration','One Person Company','Partnership Firm','Sole Proprietorship','Section 8 (NGO)','Producer Company','Startup India Registration','DPIIT Recognition','Digital Signature (DSC)','Director DIN','Nidhi Company']},
{icon:'GST',title:'GST Compliance',description:'Registration, returns, reconciliation, refunds.',count:14,group:'Taxation',services:['GST Registration','GSTR-1 Filing','GSTR-3B Filing','GSTR-9 Annual Return','GST Reconciliation','Input Tax Credit Claim','GST Refund','LUT Filing','E-Way Bill','E-Invoicing Setup','GST Amendment','GST Cancellation','Composition Scheme','GST Notice Reply']},
{icon:'ITR',title:'Income Tax',description:'Filing, assessments, capital gains, TDS/TCS.',count:11,group:'Taxation',services:['ITR-1 (Salaried)','ITR-2 (Capital Gains)','ITR-3 (Business)','ITR-4 (Presumptive)','TDS Return Filing','TCS Return','Form 15CA / 15CB','Advance Tax','Capital Gains Computation','Tax Assessment Support','Income Tax Notice']},
{icon:'ROC',title:'Corporate Compliance',description:'ROC filings, annual returns, board resolutions.',count:10,group:'Corporate',services:['Annual Return (MGT-7)','Financial Statements (AOC-4)','Board Resolutions','Director Appointment','Director Resignation','Share Transfer','Registered Office Change','Auditor Appointment (ADT-1)','DIR-3 KYC','Charge Registration']},
{icon:'IBC',title:'Insolvency Advisory',description:'IBC filings, resolution support, restructuring.',count:6,group:'Advisory',services:['IBC Filing','Resolution Plan Support','Corporate Restructuring','Liquidation Advisory','Creditor Claim Filing','Insolvency Documentation']},
{icon:'DOC',title:'Documentation & Drafting',description:'Legal drafting, certifications, statutory records.',count:9,group:'Legal & Docs',services:['Legal Notice Drafting','Affidavit Drafting','Power of Attorney','Board Minutes','Statutory Registers','CA / CS Certification','NDA Drafting','Declaration Drafting','Compliance Certificate']},
{icon:'AGR',title:'Contracts & Agreements',description:'Vendor, employment, and partnership agreements.',count:8,group:'Legal & Docs',services:['Vendor Agreement','Employment Contract','Partnership Deed','Shareholder Agreement','Service Agreement','Lease Agreement','Franchise Agreement','MoU Drafting']},
{icon:'ACC',title:'Accounting & Bookkeeping',description:'Books, payroll, MIS and audit support.',count:9,group:'Finance',services:['Monthly Bookkeeping','Payroll Processing','MIS Reports','Bank Reconciliation','Accounts Payable / Receivable','Financial Statement Prep','Audit Support','Inventory Accounting','Virtual CFO']},
{icon:'LIC',title:'Licenses & Registrations',description:'Trade, labour, MSME and sector licenses.',count:8,group:'Corporate',services:['MSME / Udyam','Trade License','Shop & Establishment','FSSAI License','Import Export Code (IEC)','PF Registration','ESI Registration','Professional Tax']},
{icon:'ADV',title:'Advisory & Notices',description:'Tax notice handling, scrutiny, NRI advisory.',count:7,group:'Advisory',services:['Income Tax Notice Handling','GST Scrutiny','Tax Planning','NRI Advisory','Assessment Representation','Appeal Filing','Compliance Advisory']},
];
const GROUPS=['Taxation','Corporate','Legal & Docs','Finance','Advisory'];
const GROUP_ACCENT={Taxation:'var(--gold-500)',Corporate:'var(--navy-700)',['Legal & Docs']:'var(--navy-500)',Finance:'var(--status-positive)',Advisory:'var(--gold-600)'};
const GROUP_TINT={Taxation:'var(--gold-050)',Corporate:'var(--navy-050)',['Legal & Docs']:'var(--navy-050)',Finance:'var(--paper-alt)',Advisory:'var(--gold-050)'};
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
function ServiceIconV2({code,size=26}){
const p={fill:'none',stroke:'currentColor',strokeWidth:1.9,strokeLinecap:'round',strokeLinejoin:'round'};
const paths={
INC:<g {...p}><path d="M4 21h16"/><path d="M6 21V6l6-3 6 3v15"/><path d="M9.5 9h1M13.5 9h1M9.5 13h1M13.5 13h1"/><path d="M10.5 21v-3h3v3"/></g>,
GST:<g {...p}><circle cx="12" cy="12" r="8.5"/><path d="M8.5 15.5L15.5 8.5"/><circle cx="9.6" cy="9.6" r="1.3"/><circle cx="14.4" cy="14.4" r="1.3"/></g>,
ITR:<g {...p}><path d="M7 3h7l4 4v13.5a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5V3.5A.5.5 0 017 3z"/><path d="M14 3v4h4"/><path d="M9 12h6M9 15h6M9 9h2"/></g>,
ROC:<g {...p}><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/></g>,
IBC:<g {...p}><path d="M4 20h16"/><path d="M6 20V9l6-4 6 4v11"/><path d="M15 14l-6 4M9 14l6 4"/></g>,
DOC:<g {...p}><path d="M7 3h7l4 4v14H6V4a1 1 0 011-1z"/><path d="M14 3v4h4"/><path d="M9 13l1.5 1.5L13 12"/><path d="M9 17h6"/></g>,
AGR:<g {...p}><path d="M8 5h8v14a2 2 0 01-2 2H10a2 2 0 01-2-2z"/><path d="M11 3h2v2h-2z"/><path d="M10 10h4M10 13h4M10 16h2"/></g>,
ACC:<g {...p}><rect x="5" y="4" width="14" height="16" rx="1.5"/><path d="M8 4v16"/><path d="M11 8h5M11 12h5M11 16h3"/></g>,
LIC:<g {...p}><circle cx="12" cy="10" r="5"/><path d="M9.5 14l-1 7 3.5-2 3.5 2-1-7"/><path d="M10 10l1.4 1.4L14 8.8"/></g>,
ADV:<g {...p}><path d="M12 3a6 6 0 016 6c0 4-3 5-3 8H9c0-3-3-4-3-8a6 6 0 016-6z"/><path d="M9 20h6M10 22h4"/></g>,
};
return <svg viewBox="0 0 24 24" width={size} height={size}>{paths[code]||paths.DOC}</svg>;
}
function ServiceCardV2({c,i,selCount,onClick}){
const [h,setH]=React.useState(false);
const ac=GROUP_ACCENT[c.group]||'var(--gold-500)';
const tint=GROUP_TINT[c.group]||'var(--gold-050)';
const preview=c.services.slice(0,3);
const more=c.count-preview.length;
const notch={position:'absolute',width:22,height:22,borderRadius:'50%',background:'var(--paper)',left:'calc(100% - 96px)',transform:'translateX(-50%)',zIndex:6};
return <div onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{position:'relative',borderRadius:'var(--radius-lg)',cursor:'pointer',overflow:'hidden',display:'flex',minHeight:252,boxShadow:h?'0 26px 50px rgba(15,42,66,.18)':'var(--shadow-sm)',transform:h?'translateY(-6px)':'none',transition:'box-shadow .4s var(--ease-standard),transform .4s var(--ease-standard)',filter:'drop-shadow(0 0 0 transparent)',animation:`fade-in-up .4s var(--ease-standard) ${i*0.04}s both`}}>
<span aria-hidden style={{...notch,top:-11}}/>
<span aria-hidden style={{...notch,bottom:-11}}/>
<span aria-hidden style={{position:'absolute',top:12,bottom:12,left:'calc(100% - 96px)',borderLeft:'2px dashed var(--ink-100)',zIndex:5}}/>
<div style={{position:'relative',flex:1,background:'var(--white)',border:'1px solid '+(h?ac:'var(--ink-100)'),borderRight:'none',borderRadius:'var(--radius-lg) 0 0 var(--radius-lg)',display:'flex',flexDirection:'column',padding:'20px 22px',transition:'border-color .3s',overflow:'hidden'}}>
<div style={{display:'flex',alignItems:'center',justifyContent:'space-between',fontFamily:'var(--font-mono)',fontSize:9.5,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--ink-300)',marginBottom:16}}>
<span>File No. {String(i+1).padStart(2,'0')}</span>
<span style={{display:'inline-flex',alignItems:'center',gap:5,color:ac,fontWeight:'var(--weight-semibold)'}}><span style={{width:5,height:5,borderRadius:'50%',background:ac}}/>{c.group}</span>
</div>
<div style={{marginBottom:12}}>
<div style={{width:50,height:50,borderRadius:13,background:h?ac:tint,color:h?'var(--white)':ac,display:'flex',alignItems:'center',justifyContent:'center',transition:'background .35s,color .35s',marginBottom:12}}><ServiceIconV2 code={c.icon} size={24}/></div>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-lg)',color:'var(--navy-900)',lineHeight:1.2,overflowWrap:'break-word',textWrap:'balance'}}>{c.title}</div>
</div>
<div style={{fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--ink-500)',lineHeight:'var(--leading-sm)'}}>{c.description}</div>
<div style={{overflow:'hidden',maxHeight:h?70:0,opacity:h?1:0,transition:'max-height .45s var(--ease-standard),opacity .3s',marginTop:h?12:0}}>
<div style={{display:'flex',flexWrap:'wrap',gap:6}}>
{preview.map((s,j)=><span key={s} style={{fontFamily:'var(--font-body)',fontSize:10.5,fontWeight:'var(--weight-medium)',padding:'4px 9px',borderRadius:'var(--radius-pill)',background:tint,color:'var(--navy-800)',border:'1px solid '+ac+'33',transform:h?'translateY(0)':'translateY(6px)',transition:`transform .3s ${0.05+j*0.05}s`}}>{s}</span>)}
{more>0&&<span style={{fontFamily:'var(--font-mono)',fontSize:10.5,fontWeight:700,padding:'4px 9px',borderRadius:'var(--radius-pill)',background:'var(--navy-950)',color:'var(--white)'}}>+{more}</span>}
</div>
</div>
<div style={{marginTop:'auto',paddingTop:14,fontFamily:'var(--font-body)',fontSize:12,fontWeight:'var(--weight-semibold)',color:h?ac:'var(--ink-500)',transition:'color .3s',display:'inline-flex',alignItems:'center',gap:7}}>Choose services<span style={{display:'inline-block',transform:h?'translateX(4px)':'none',transition:'transform .3s'}}>→</span></div>
</div>
<div style={{position:'relative',width:96,flexShrink:0,background:`linear-gradient(165deg,${ac},var(--navy-950))`,borderRadius:'0 var(--radius-lg) var(--radius-lg) 0',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between',padding:'20px 0',overflow:'hidden'}}>
<div aria-hidden style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(rgba(255,255,255,.14) 1px,transparent 1px)',backgroundSize:'12px 12px',opacity:.4}}/>
<div style={{position:'relative',fontFamily:'var(--font-mono)',fontSize:9,letterSpacing:'.3em',textTransform:'uppercase',color:'rgba(255,255,255,.7)',writingMode:'vertical-rl',transform:'rotate(180deg)'}}>Services</div>
<div style={{position:'relative',textAlign:'center',lineHeight:1}}>
<div style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:40,color:'var(--white)',letterSpacing:'-.02em'}}>{selCount>0?selCount:c.count}</div>
<div style={{fontFamily:'var(--font-mono)',fontSize:8.5,letterSpacing:'.1em',textTransform:'uppercase',color:selCount>0?'#7fe6a6':'rgba(255,255,255,.6)',marginTop:4}}>{selCount>0?'picked':'total'}</div>
</div>
<div style={{position:'relative',width:36,height:36,borderRadius:'50%',background:'var(--white)',color:'var(--navy-950)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:17,transition:'transform .3s',transform:h?'scale(1.12)':'none'}}>→</div>
</div>
</div>;
}
function ServicePickerV2({startCat,selected,setSelected,onClose,go}){
const [active,setActive]=React.useState(startCat);
const [mounted,setMounted]=React.useState(false);
React.useEffect(()=>{setMounted(true);document.body.style.overflow='hidden';return ()=>{document.body.style.overflow='';};},[]);
React.useEffect(()=>{const onKey=e=>{if(e.key==='Escape')onClose();};window.addEventListener('keydown',onKey);return ()=>window.removeEventListener('keydown',onKey);},[onClose]);
const cat=CATEGORIES[active];
const ac=GROUP_ACCENT[cat.group]||'var(--gold-500)';
const toggle=name=>setSelected(s=>{const n={...s};if(n[name])delete n[name];else n[name]=true;return n;});
const catSel=i=>CATEGORIES[i].services.filter(s=>selected[s]).length;
const totalSel=Object.keys(selected).length;
const allOn=cat.services.every(s=>selected[s]);
const toggleAll=()=>setSelected(s=>{const n={...s};if(allOn)cat.services.forEach(x=>delete n[x]);else cat.services.forEach(x=>{n[x]=true;});return n;});
return <div onClick={onClose} style={{position:'fixed',inset:0,zIndex:200,background:'rgba(10,22,40,.55)',backdropFilter:'blur(4px)',display:'flex',alignItems:'center',justifyContent:'center',padding:'28px',opacity:mounted?1:0,transition:'opacity .25s'}}>
<div onClick={e=>e.stopPropagation()} style={{width:'min(1040px,100%)',height:'min(680px,92vh)',background:'var(--white)',borderRadius:'var(--radius-xl)',overflow:'hidden',display:'grid',gridTemplateColumns:'270px 1fr',boxShadow:'0 40px 90px rgba(6,18,36,.5)',transform:mounted?'scale(1)':'scale(.95)',transition:'transform .28s var(--ease-standard)',fontFamily:'var(--font-body)'}}>
<div style={{background:'var(--navy-950)',display:'flex',flexDirection:'column',overflow:'hidden'}}>
<div style={{padding:'22px 22px 16px',borderBottom:'1px solid rgba(255,255,255,.08)'}}>
<div style={{fontFamily:'var(--font-mono)',fontSize:10,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--gold-400)',marginBottom:6}}>All Modules</div>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-lg)',color:'var(--white)'}}>Pick your services</div>
</div>
<div style={{flex:1,overflowY:'auto',padding:'10px 12px'}}>
{CATEGORIES.map((m,i)=>{const on=i===active;const mac=GROUP_ACCENT[m.group]||'var(--gold-500)';const sc=catSel(i);return <button key={m.title} onClick={()=>setActive(i)} style={{width:'100%',display:'flex',alignItems:'center',gap:11,padding:'11px 12px',marginBottom:4,borderRadius:'var(--radius-md)',border:'none',cursor:'pointer',textAlign:'left',background:on?'rgba(255,255,255,.1)':'transparent',transition:'background .18s'}}>
<span style={{flexShrink:0,width:34,height:34,borderRadius:'var(--radius-sm)',background:on?mac:'rgba(255,255,255,.08)',color:'var(--white)',display:'flex',alignItems:'center',justifyContent:'center'}}><ServiceIconV2 code={m.icon} size={18}/></span>
<span style={{flex:1,minWidth:0,fontSize:13,fontWeight:on?'var(--weight-semibold)':'var(--weight-medium)',color:on?'var(--white)':'var(--navy-300)',lineHeight:1.25}}>{m.title}</span>
{sc>0&&<span style={{flexShrink:0,fontFamily:'var(--font-mono)',fontSize:10,fontWeight:700,padding:'2px 7px',borderRadius:'var(--radius-pill)',background:'var(--status-positive)',color:'var(--white)'}}>{sc}</span>}
</button>;})}
</div>
</div>
<div style={{display:'flex',flexDirection:'column',overflow:'hidden'}}>
<div style={{position:'relative',padding:'22px 26px',borderBottom:'1px solid var(--ink-100)',display:'flex',alignItems:'flex-start',gap:14}}>
<span style={{flexShrink:0,width:48,height:48,borderRadius:'var(--radius-md)',background:`linear-gradient(135deg,${ac},var(--navy-950))`,color:'var(--white)',display:'flex',alignItems:'center',justifyContent:'center'}}><ServiceIconV2 code={cat.icon} size={24}/></span>
<div style={{flex:1}}>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-xl)',color:'var(--navy-900)'}}>{cat.title}</div>
<div style={{fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--ink-500)',marginTop:2}}>{cat.description} · <b style={{color:ac}}>{cat.services.length} services</b></div>
</div>
<button onClick={toggleAll} style={{flexShrink:0,fontFamily:'var(--font-body)',fontSize:12,fontWeight:'var(--weight-semibold)',padding:'8px 14px',borderRadius:'var(--radius-pill)',border:'1px solid '+ac,background:allOn?ac:'var(--white)',color:allOn?'var(--white)':ac,cursor:'pointer',whiteSpace:'nowrap'}}>{allOn?'Deselect all':'Select all'}</button>
<button onClick={onClose} style={{flexShrink:0,width:34,height:34,borderRadius:'50%',border:'1px solid var(--ink-100)',background:'var(--white)',color:'var(--ink-500)',cursor:'pointer',fontSize:18,lineHeight:1}}>×</button>
</div>
<div style={{flex:1,overflowY:'auto',padding:'20px 26px',background:'var(--paper)'}}>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
{cat.services.map(s=>{const on=!!selected[s];return <button key={s} onClick={()=>toggle(s)} style={{display:'flex',alignItems:'center',gap:11,padding:'13px 15px',borderRadius:'var(--radius-md)',border:'1.5px solid '+(on?ac:'var(--ink-100)'),background:on?GROUP_TINT[cat.group]:'var(--white)',cursor:'pointer',textAlign:'left',transition:'all .18s'}}>
<span style={{flexShrink:0,width:22,height:22,borderRadius:'var(--radius-sm)',border:'2px solid '+(on?ac:'var(--ink-100)'),background:on?ac:'var(--white)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--white)',fontSize:13,transition:'all .18s'}}>{on?'✓':''}</span>
<span style={{fontFamily:'var(--font-body)',fontSize:13.5,fontWeight:'var(--weight-medium)',color:on?'var(--navy-900)':'var(--navy-800)'}}>{s}</span>
</button>;})}
</div>
</div>
<div style={{padding:'16px 26px',borderTop:'1px solid var(--ink-100)',background:'var(--white)',display:'flex',alignItems:'center',justifyContent:'space-between',gap:14,flexWrap:'wrap'}}>
<div style={{fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--ink-500)'}}>{totalSel>0?<span><b style={{fontFamily:'var(--font-display)',fontSize:18,color:'var(--navy-900)'}}>{totalSel}</b> service{totalSel>1?'s':''} selected across modules</span>:<span>Select the services you need — then request a quote.</span>}</div>
<div style={{display:'flex',gap:10}}>
{totalSel>0&&<button onClick={()=>setSelected({})} style={{fontFamily:'var(--font-body)',fontSize:13,fontWeight:'var(--weight-semibold)',padding:'11px 18px',borderRadius:'var(--radius-pill)',border:'1px solid var(--ink-100)',background:'var(--white)',color:'var(--ink-500)',cursor:'pointer'}}>Clear</button>}
<button onClick={()=>{onClose();go('contact');}} disabled={totalSel===0} style={{fontFamily:'var(--font-body)',fontWeight:'var(--weight-semibold)',fontSize:13,padding:'11px 24px',borderRadius:'var(--radius-pill)',border:'none',background:totalSel?'var(--gold-500)':'var(--ink-100)',color:totalSel?'var(--navy-950)':'var(--ink-300)',cursor:totalSel?'pointer':'not-allowed',transition:'all .2s'}}>Request {totalSel||''} selected →</button>
</div>
</div>
</div>
</div>
</div>;
}
function ServicesHubV2({go}){
const {Footer}=window.IncomeNFilingComplianceOSDesignSystem_6fdb9e;
const [q,setQ]=React.useState('');
const [grp,setGrp]=React.useState('All');
const [sort,setSort]=React.useState('recommended');
const [focus,setFocus]=React.useState(false);
const [picker,setPicker]=React.useState(null);
const [selected,setSelected]=React.useState({});
let filtered=CATEGORIES.filter(c=>(grp==='All'||c.group===grp)&&(c.title.toLowerCase().includes(q.toLowerCase())||c.description.toLowerCase().includes(q.toLowerCase())||c.group.toLowerCase().includes(q.toLowerCase())||c.services.some(s=>s.toLowerCase().includes(q.toLowerCase()))));
if(sort==='most')filtered=[...filtered].sort((a,b)=>b.count-a.count);
if(sort==='az')filtered=[...filtered].sort((a,b)=>a.title.localeCompare(b.title));
const total=CATEGORIES.reduce((n,c)=>n+c.count,0);
const shown=filtered.reduce((n,c)=>n+c.count,0);
const chips=['All',...GROUPS];
const suggestions=['GST','Income Tax','Incorporation','Accounting'];
const catSelCount=c=>c.services.filter(s=>selected[s]).length;
const totalSel=Object.keys(selected).length;
return <div style={{background:'var(--paper)',minHeight:'100vh'}}>
<a href="https://wa.me/917890594600" target="_blank" rel="noreferrer" style={{position:'fixed',bottom:26,right:26,width:58,height:58,borderRadius:'50%',background:'var(--whatsapp-green)',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'var(--shadow-lg)',zIndex:80,textDecoration:'none'}}>
<span style={{position:'absolute',inset:0,borderRadius:'50%',border:'2px solid var(--whatsapp-green)',animation:'pulse-ring 2s infinite'}}/>
<svg viewBox="0 0 24 24" width="30" height="30" fill="var(--white)"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.16c-.24.68-1.42 1.32-1.95 1.37-.5.05-.98.24-3.3-.69-2.78-1.1-4.55-3.94-4.69-4.13-.14-.19-1.13-1.5-1.13-2.86 0-1.36.71-2.03.96-2.31.24-.27.53-.34.71-.34.18 0 .35 0 .51.01.16.01.39-.06.6.46.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.17.28.75 1.24 1.61 2.01 1.11.99 2.05 1.3 2.33 1.44.28.14.45.12.61-.07.16-.19.7-.82.89-1.1.19-.28.37-.23.62-.14.25.09 1.61.76 1.89.9.28.14.46.21.53.32.07.11.07.65-.17 1.33z"/></svg>
</a>
<NavBarV2 go={go} active="services"/>
<section style={{background:'linear-gradient(150deg,var(--navy-950) 40%,var(--navy-800,#1c3a5e))',padding:'66px 32px 120px',position:'relative',overflow:'hidden'}}>
<div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(rgba(255,255,255,.06) 1px,transparent 1px)',backgroundSize:'26px 26px',opacity:.6}}/>
<div style={{position:'absolute',top:-70,right:'6%',width:280,height:280,background:'var(--gold-500)',opacity:.16,borderRadius:'46px',transform:'rotate(18deg)'}}/>
<div style={{position:'absolute',bottom:-90,left:'-4%',width:320,height:320,borderRadius:'50%',border:'2px dashed rgba(255,255,255,.12)',animation:'spin-slow 50s linear infinite'}}/>
<div style={{maxWidth:'var(--container-max)',margin:'0 auto',position:'relative'}}>
<div style={{display:'inline-flex',alignItems:'center',gap:8,padding:'6px 16px',borderRadius:'var(--radius-pill)',background:'rgba(255,255,255,.08)',fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'var(--tracking-widest)',textTransform:'uppercase',color:'var(--gold-400)',marginBottom:20}}><span style={{width:6,height:6,borderRadius:'50%',background:'var(--status-positive)',animation:'pulse-dot 2s infinite'}}/>Services Directory</div>
<h1 style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-5xl)',color:'var(--white)',margin:'0 0 12px',letterSpacing:'var(--tracking-tight)',lineHeight:1.08}}>Find the right service<br/>in <span style={{color:'var(--gold-400)'}}>seconds</span>.</h1>
<p style={{fontFamily:'var(--font-body)',color:'var(--navy-300)',margin:'0 0 30px',maxWidth:560,fontSize:'var(--text-lg)'}}>All <b style={{color:'var(--white)'}}>{total} services</b> across <b style={{color:'var(--white)'}}>{CATEGORIES.length} modules</b> — search, filter, and jump straight to what your business needs.</p>
<div style={{maxWidth:660,position:'relative'}}>
<div style={{display:'flex',alignItems:'center',gap:12,background:'var(--white)',borderRadius:'var(--radius-pill)',padding:'8px 8px 8px 22px',boxShadow:focus?'0 0 0 4px rgba(239,168,46,.35),var(--shadow-lg)':'var(--shadow-lg)',transition:'box-shadow .25s'}}>
<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--ink-300)" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.2-3.2"/></svg>
<input value={q} onChange={e=>setQ(e.target.value)} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} placeholder="Search 94 services — try “GST refund” or “company registration”" style={{flex:1,minWidth:0,border:'none',outline:'none',background:'none',fontFamily:'var(--font-body)',fontSize:'var(--text-base)',color:'var(--navy-900)'}}/>
{q&&<button onClick={()=>setQ('')} style={{flexShrink:0,width:32,height:32,borderRadius:'50%',border:'none',background:'var(--paper-alt)',color:'var(--ink-500)',cursor:'pointer',fontSize:15}}>×</button>}
<span style={{flexShrink:0,fontFamily:'var(--font-mono)',fontSize:12,fontWeight:700,color:'var(--navy-950)',background:'var(--gold-500)',borderRadius:'var(--radius-pill)',padding:'9px 16px'}}>{filtered.length} found</span>
</div>
<div style={{display:'flex',alignItems:'center',gap:8,marginTop:16,flexWrap:'wrap'}}>
<span style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.06em',textTransform:'uppercase',color:'var(--navy-300)'}}>Popular:</span>
{suggestions.map(s=><button key={s} onClick={()=>setQ(s)} style={{fontFamily:'var(--font-body)',fontSize:12,fontWeight:'var(--weight-medium)',padding:'5px 13px',borderRadius:'var(--radius-pill)',border:'1px solid rgba(255,255,255,.22)',background:'rgba(255,255,255,.06)',color:'var(--white)',cursor:'pointer'}}>{s}</button>)}
</div>
</div>
</div>
</section>
<section style={{padding:'0 32px 96px',maxWidth:'var(--container-max)',margin:'0 auto',marginTop:-64}}>
<div style={{position:'sticky',top:78,zIndex:40,background:'var(--white)',borderRadius:'var(--radius-xl)',boxShadow:'var(--shadow-md)',border:'1px solid var(--ink-100)',padding:'14px 18px',marginBottom:30,display:'flex',alignItems:'center',gap:14,flexWrap:'wrap'}}>
<div style={{display:'flex',alignItems:'center',gap:8,flexWrap:'wrap',flex:1,minWidth:0}}>
{chips.map(ch=>{const n=ch==='All'?CATEGORIES.length:CATEGORIES.filter(c=>c.group===ch).length;const on=grp===ch;const ac=ch==='All'?'var(--navy-900)':(GROUP_ACCENT[ch]||'var(--gold-500)');return <button key={ch} onClick={()=>setGrp(ch)} style={{display:'inline-flex',alignItems:'center',gap:7,fontFamily:'var(--font-body)',fontSize:13,fontWeight:'var(--weight-medium)',padding:'8px 14px',borderRadius:'var(--radius-pill)',border:'1px solid '+(on?ac:'var(--ink-100)'),background:on?ac:'var(--white)',color:on?'var(--white)':'var(--navy-800)',cursor:'pointer',transition:'all .2s'}}>{ch}<span style={{fontFamily:'var(--font-mono)',fontSize:10,padding:'1px 6px',borderRadius:'var(--radius-pill)',background:on?'rgba(255,255,255,.2)':'var(--paper-alt)',color:on?'var(--white)':'var(--ink-500)'}}>{n}</span></button>;})}
</div>
<div style={{display:'flex',alignItems:'center',gap:8,flexShrink:0}}>
<span style={{fontFamily:'var(--font-mono)',fontSize:10,letterSpacing:'.06em',textTransform:'uppercase',color:'var(--ink-300)'}}>Sort</span>
<select value={sort} onChange={e=>setSort(e.target.value)} style={{fontFamily:'var(--font-body)',fontSize:13,padding:'8px 12px',borderRadius:'var(--radius-md)',border:'1px solid var(--ink-100)',background:'var(--white)',color:'var(--navy-900)',cursor:'pointer',outline:'none'}}>
<option value="recommended">Recommended</option>
<option value="most">Most services</option>
<option value="az">A – Z</option>
</select>
</div>
</div>
<div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:20,flexWrap:'wrap',gap:8}}>
<span style={{fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--ink-500)'}}>Showing <b style={{color:'var(--navy-900)'}}>{filtered.length}</b> {grp==='All'?'modules':grp+' modules'}{q&&<span> for “<b style={{color:'var(--navy-900)'}}>{q}</b>”</span>} · <b style={{color:'var(--navy-900)'}}>{shown}</b> services</span>
{(grp!=='All'||q)&&<button onClick={()=>{setGrp('All');setQ('');}} style={{fontFamily:'var(--font-body)',fontSize:12,fontWeight:'var(--weight-semibold)',color:'var(--gold-600)',background:'none',border:'none',cursor:'pointer'}}>Clear filters ×</button>}
</div>
{filtered.length>0?<div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:20}}>
{filtered.map((c,i)=><ServiceCardV2 key={c.title} c={c} i={i} selCount={catSelCount(c)} onClick={()=>setPicker(CATEGORIES.indexOf(c))}/>)}
</div>:<div style={{textAlign:'center',padding:'70px 20px',background:'var(--white)',borderRadius:'var(--radius-xl)',border:'1px dashed var(--ink-100)'}}>
<div style={{width:64,height:64,margin:'0 auto 16px',borderRadius:'50%',background:'var(--paper-alt)',display:'flex',alignItems:'center',justifyContent:'center'}}><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--ink-300)" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.2-3.2"/></svg></div>
<div style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-lg)',color:'var(--navy-900)',marginBottom:6}}>No services match your search</div>
<div style={{fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',color:'var(--ink-500)',marginBottom:18}}>Try a different term or clear the filters.</div>
<button onClick={()=>{setGrp('All');setQ('');}} style={{fontFamily:'var(--font-body)',fontWeight:'var(--weight-semibold)',fontSize:13,padding:'11px 22px',borderRadius:'var(--radius-pill)',border:'none',background:'var(--gold-500)',color:'var(--navy-950)',cursor:'pointer'}}>Reset search</button>
</div>}
</section>
{totalSel>0&&picker===null&&<div style={{position:'fixed',bottom:26,left:'50%',transform:'translateX(-50%)',zIndex:85,display:'flex',alignItems:'center',gap:16,background:'var(--navy-950)',color:'var(--white)',borderRadius:'var(--radius-pill)',padding:'12px 14px 12px 22px',boxShadow:'0 20px 50px rgba(6,18,36,.4)',fontFamily:'var(--font-body)'}}>
<span style={{fontSize:14}}><b style={{fontFamily:'var(--font-display)',fontSize:17}}>{totalSel}</b> service{totalSel>1?'s':''} selected</span>
<button onClick={()=>go('contact')} style={{fontFamily:'var(--font-body)',fontWeight:'var(--weight-semibold)',fontSize:13,padding:'10px 20px',borderRadius:'var(--radius-pill)',border:'none',background:'var(--gold-500)',color:'var(--navy-950)',cursor:'pointer'}}>Request quote →</button>
<button onClick={()=>setSelected({})} style={{width:30,height:30,borderRadius:'50%',border:'1px solid rgba(255,255,255,.2)',background:'transparent',color:'var(--navy-300)',cursor:'pointer',fontSize:16,lineHeight:1}}>×</button>
</div>}
{picker!==null&&<ServicePickerV2 startCat={picker} selected={selected} setSelected={setSelected} onClose={()=>setPicker(null)} go={go}/>}
{React.createElement(window.FooterV2,{go})}
</div>;
}
Object.assign(window,{ServicesHubV2});
