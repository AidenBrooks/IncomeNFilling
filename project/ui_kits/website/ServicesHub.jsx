const CATEGORIES=[
{icon:'INC',title:'Incorporation & Registrations',description:'Company, LLP, OPC formation and startup registrations.',count:12},
{icon:'GST',title:'GST Compliance',description:'Registration, returns, reconciliation, refunds.',count:14},
{icon:'ITR',title:'Income Tax',description:'Filing, assessments, capital gains, TDS/TCS.',count:11},
{icon:'ROC',title:'Corporate Compliance',description:'ROC filings, annual returns, board resolutions.',count:10},
{icon:'IBC',title:'Insolvency Advisory',description:'IBC filings, resolution support, restructuring.',count:6},
{icon:'DOC',title:'Documentation & Drafting',description:'Legal drafting, certifications, statutory records.',count:9},
{icon:'AGR',title:'Contracts & Agreements',description:'Vendor, employment, and partnership agreements.',count:8},
{icon:'ACC',title:'Accounting & Bookkeeping',description:'Books, payroll, MIS and audit support.',count:9},
{icon:'LIC',title:'Licenses & Registrations',description:'Trade, labour, MSME and sector licenses.',count:8},
{icon:'ADV',title:'Advisory & Notices',description:'Tax notice handling, scrutiny, NRI advisory.',count:7},
];
function ServicesHub({go}){
const {NavBar,Footer,TerminalSearch,ModuleCard,Badge,StatBlock}=window.IncomeNFilingComplianceOSDesignSystem_6fdb9e;
const [q,setQ]=React.useState('');
const filtered=CATEGORIES.filter(c=>c.title.toLowerCase().includes(q.toLowerCase()));
const total=CATEGORIES.reduce((n,c)=>n+c.count,0);
return <div style={{background:'var(--paper)',minHeight:'100vh'}}>
<NavBar logoSrc="../../assets/logo.jpg" items={[{label:'Home',href:'#home'},{label:'About',href:'#about'},{label:'Services',href:'#services',active:true},{label:'Live Chat',href:'#chat'},{label:'Contact',href:'#contact'}]}/>
<section style={{background:'var(--navy-900)',padding:'22px 32px'}}>
<div style={{maxWidth:'var(--container-max)',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:16}}>
<div style={{display:'flex',alignItems:'center',gap:8}}>
<span style={{width:8,height:8,borderRadius:'50%',background:'var(--status-positive)',animation:'pulse-dot 2s infinite'}}/>
<span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-xs)',color:'var(--navy-300)',letterSpacing:'var(--tracking-widest)',textTransform:'uppercase'}}>directory-index · {total} services live across {CATEGORIES.length} modules</span>
</div>
<span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-xs)',color:'var(--navy-300)'}}>last sync: just now</span>
</div>
</section>
<section style={{padding:'56px 32px 24px',maxWidth:'var(--container-max)',margin:'0 auto'}}>
<div style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-xs)',color:'var(--gold-600)',letterSpacing:'var(--tracking-widest)',textTransform:'uppercase',marginBottom:8}}>Services Directory</div>
<h1 style={{fontFamily:'var(--font-display)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-4xl)',color:'var(--navy-900)',margin:'0 0 8px'}}>94 services, 10 modules</h1>
<p style={{fontFamily:'var(--font-body)',color:'var(--ink-500)',margin:'0 0 24px',maxWidth:560}}>Every compliance service we run, indexed and searchable — like querying a live directory.</p>
<div style={{maxWidth:520,marginBottom:36}}>
<TerminalSearch value={q} onChange={e=>setQ(e.target.value)} placeholders={['search category…']}/>
</div>
<div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
{filtered.map(c=><ModuleCard key={c.title} icon={c.icon} title={c.title} description={c.description} count={c.count} onClick={()=>go('itr')}/>)}
</div>
</section>
<Footer tagline="Simplifying Compliance. Empowering Business." columns={[{title:'Quick Links',links:[{label:'Home',href:'#home'},{label:'Services',href:'#services'},{label:'Contact',href:'#contact'}]}]} contact={{phone:'+91 7890594600',email:'support@incomenfiling.com',region:'Pan-India Services'}}/>
</div>;
}
Object.assign(window,{ServicesHub});
