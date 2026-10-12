import { Link, useRouterState } from '@tanstack/react-router';
import { useState, type ReactNode } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import companyLogo from '@/assets/your-view-logo.png';
import { CONTACT_CONFIG } from '@/config/contact';
const nav = [{to:'/projects',label:'Projects'},{to:'/services',label:'Services'},{to:'/studio',label:'The studio'},{to:'/contact',label:'Contact'}] as const;
export function Wordmark() { return <span className="company-logo"><img src={companyLogo} alt="Your View Home Interiors" width={555} height={450}/></span>; }
export function SiteShell({children}:{children:ReactNode}) {
 const path=useRouterState({select:s=>s.location.pathname}); const [open,setOpen]=useState(false);
 return <><a className="skip-link" href="#main">Skip to content</a><header className={`site-header ${path==='/'?'':'inner'}`}><div className="container header-row"><Link to="/" aria-label="Your View Home Interiors home" onClick={()=>setOpen(false)}><Wordmark/></Link><nav className="desktop-nav" aria-label="Main navigation">{nav.map(n=><Link key={n.to} to={n.to}>{n.label}</Link>)}</nav><Button asChild variant={path==='/'?'inverse':'studio'} className="header-cta"><Link to="/contact">Private consultation <ArrowUpRight/></Link></Button><Button variant="ghost" size="icon" className="menu-toggle" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</Button></div>{open&&<nav className="mobile-nav" aria-label="Mobile navigation">{nav.map(n=><Link key={n.to} to={n.to} onClick={()=>setOpen(false)}>{n.label}</Link>)}</nav>}</header><main id="main">{children}</main><footer className="site-footer"><div className="container"><div className="footer-top"><div className="footer-brand"><Link to="/" aria-label="Your View Home Interiors home"><Wordmark/></Link><a href={`mailto:${CONTACT_CONFIG.recipientEmail}`} className="footer-email">{CONTACT_CONFIG.recipientEmail}</a></div><nav className="footer-nav" aria-label="Footer navigation">{nav.map(n=><Link key={n.to} to={n.to}>{n.label}</Link>)}</nav></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Your View Home Interiors</span><span>Considered spaces. Lasting impressions.</span></div></div></footer></>;
}
