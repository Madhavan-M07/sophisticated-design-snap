import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { pageHead,projects } from '@/data/projects';
import { ProjectGrid, ContactBand } from '@/components/studio/sections';
export const Route=createFileRoute('/projects/')({head:()=>pageHead('Selected projects','Explore Your View’s residential and commercial interior design studies. A portfolio defined by natural materials, proportion and light.'),component:Projects});
function Projects(){const [filter,setFilter]=useState('All projects'); return <><div className="container"><div className="page-heading"><span className="eyebrow section-label">Our portfolio</span><h1>A considered collection.</h1><p>Distinct spaces. A shared sensibility. Explore our design studies in residential and commercial interiors.</p></div><div className="filter-row" aria-label="Filter projects">{['All projects','Residential','Commercial'].map(f=><Button variant="ghost" className={`filter-button ${filter===f?'selected':''}`} aria-pressed={filter===f} onClick={()=>setFilter(f)} key={f}>{f}</Button>)}</div><ProjectGrid items={projects.filter(p=>filter==='All projects'||p.category===filter)}/><div className="section"/></div><ContactBand/></>}
