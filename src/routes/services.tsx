import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/data/projects';
import { ServicesSection,Process,ContactBand } from '@/components/studio/sections';
import kitchen from '@/assets/real-modular-kitchen.jpg';
export const Route=createFileRoute('/services')({head:()=>pageHead('Our expertise','Residential interiors, modular solutions, bespoke woodwork and ambient lighting. Your View brings every design discipline into one considered vision.'),component:Services});
function Services(){return <><div className="container page-heading"><span className="eyebrow section-label">Our expertise</span><h1>From the whole<br/>to the smallest detail.</h1><p>A complete design perspective, tailored to your space. Thoughtful at every scale and considered at every stage.</p></div><img className="project-detail-image" src={kitchen} alt="Custom modular kitchen installation with slate grey and white acrylic cabinetry" width={1536} height={1024} fetchPriority="high"/><ServicesSection expanded/><Process/><ContactBand/></>}
