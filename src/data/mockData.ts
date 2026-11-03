import { TradeSpecialty, PlumbingJob, Testimonial, FaqItem } from '../types';

export const TRADE_SPECIALTIES: TradeSpecialty[] = [
  {
    id: 'ts-1',
    slug: 'commercial-journeyman-plumber',
    title: 'Commercial Journeyman Plumber',
    category: 'commercial',
    shortDescription: 'Licensed journeymen specialized in multi-story rough-ins, copper domestic water manifolds, cast iron DWV, and commercial fixtures.',
    fullDescription: 'Our Commercial Journeyman Plumbers arrive fully licensed with 5+ years of verified on-site commercial experience. They read complex MEP drawings, execute precision copper pressing (ProPress) and brazing, install commercial flushometer fixtures, and handle high-density DWV stacks on high-rise office towers, schools, and civic developments.',
    image: '/src/assets/images/hero_plumbing_journeyman_1793747409684.jpg',
    certificationsRequired: ['State Journeyman Plumber License', 'OSHA 10 or OSHA 30', 'ProPress / MegaPress Certified'],
    toolsProvidedOrRequired: ['Standard hand tool loadout', 'Torpedo level & laser plumb', 'Cordless drill & impact set', 'Channel locks & pipe wrenches up to 18"'],
    typicalProjects: ['High-rise residential towers', 'Class-A commercial office campuses', 'University laboratory facilities', 'Airport concourse expansions'],
    payRangeHourly: '$42.00 - $54.00/hr',
    demandLevel: 'Critical Surge',
    codeStandards: ['Uniform Plumbing Code (UPC)', 'International Plumbing Code (IPC)', 'ASHRAE 188 Water Management']
  },
  {
    id: 'ts-2',
    slug: 'industrial-pipefitter-steamfitter',
    title: 'Industrial Pipefitter & Steamfitter',
    category: 'industrial',
    shortDescription: 'Precision mechanical fitters for high-pressure steam, hydronic chilled water loops, boiler plants, and flanged steel systems.',
    fullDescription: 'Industrial pipefitters and steamfitters specialize in laying out, fabricating, assembling, and maintaining heavy-wall carbon steel and alloy piping systems. Experienced with rigging, flange alignment, bevel preparation, valve assemblies, and hydrostatic pressure testing up to 1,500 PSI.',
    image: '/src/assets/images/trade_industrial_pipefitter_1793747410579.jpg',
    certificationsRequired: ['Journeyman Steamfitter Card', 'OSHA 30 Construction', 'NCCER Industrial Pipefitting', 'Rigging & Signaling Card'],
    toolsProvidedOrRequired: ['Flange alignment pins & wedges', 'Two-hole pins & centering head', 'Torpedo & 24" magnetic level', 'Heavy spud wrenches & chain tongs'],
    typicalProjects: ['Central utility plants & boiler rooms', 'Semiconductor fabrication clean facilities', 'Chemical processing facilities', 'District energy heating & cooling networks'],
    payRangeHourly: '$46.00 - $58.00/hr',
    demandLevel: 'High',
    codeStandards: ['ASME B31.1 Power Piping', 'ASME B31.3 Process Piping', 'AWS D10.12 Flange Standards']
  },
  {
    id: 'ts-3',
    slug: 'medgas-sanitary-piping',
    title: 'Medical Gas & Sanitary Piping Specialist',
    category: 'healthcare',
    shortDescription: 'ASSE 6010 certified installers for hospital oxygen lines, vacuum piping, nitrous oxide, and pharmaceutical orbital-welded loops.',
    fullDescription: 'Healthcare piping requires surgical cleanliness and zero margin for error. Our medical gas specialists maintain active ASSE 6010 installer credentials, brazing under continuous nitrogen purge according to NFPA 99. Also covers high-purity orbital stainless steel piping for biopharma cleanrooms.',
    image: '/src/assets/images/trade_medgas_sanitary_1793747410948.jpg',
    certificationsRequired: ['ASSE 6010 Medical Gas Installer', 'AWS B2.2 Brazer Qualification', 'NFPA 99 Healthcare Standards', 'OSHA 30'],
    toolsProvidedOrRequired: ['Nitrogen purge regulator & flowmeter', 'Orbital tube cutters & deburrers', 'High-purity oxy-acetylene braze tips', 'Digital pressure loggers'],
    typicalProjects: ['Level-1 trauma center surgical suites', 'Biotech cleanrooms & compounding labs', 'VA medical center overhauls', 'Veterinary surgical hospitals'],
    payRangeHourly: '$48.00 - $62.00/hr',
    demandLevel: 'Critical Surge',
    codeStandards: ['NFPA 99 Health Care Facilities Code', 'CGA G-4.1 Cleaning Specs', 'ASME BPE Bioprocessing Equipment']
  },
  {
    id: 'ts-4',
    slug: 'master-plumber-superintendent',
    title: 'Master Plumber & Mechanical Superintendent',
    category: 'management',
    shortDescription: 'Seasoned jobsite leaders, code signatories, and field superintendents overseeing MEP coordination, RFI management, and trade crews.',
    fullDescription: 'Providing executive field leadership for high-stakes plumbing packages. Manstaff Master Plumbers manage subcontractors, coordinate 3D BIM/Revit clashes with GC teams, interface with city building inspectors, and ensure job schedules stay on critical path with zero safety violations.',
    image: '/src/assets/images/hero_team_superintendent_1793747410406.jpg',
    certificationsRequired: ['State Master Plumber License', 'OSHA 510/30', 'Procore / PlanGrid Certified', 'First Aid & CPR'],
    toolsProvidedOrRequired: ['Rugged field tablet with BIM/Revit viewer', 'Survey laser & total station interface', 'Quality control pressure testing rigs'],
    typicalProjects: ['Mega-scale data center complexes', 'Hospital towers exceeding $150M MEP', 'Industrial battery manufacturing plants', 'Major metropolitan transit hubs'],
    payRangeHourly: '$58.00 - $75.00/hr',
    demandLevel: 'Year-round',
    codeStandards: ['ICC Building Codes', 'BIM LOD 400 MEP standards', 'ISO 9001 Quality Management']
  },
  {
    id: 'ts-5',
    slug: 'fire-protection-sprinkler-fitter',
    title: 'Fire Protection & Sprinkler Fitter',
    category: 'fire-protection',
    shortDescription: 'Certified wet and dry sprinkler system technicians, fire pump headers, standpipe installations, and backflow preventers.',
    fullDescription: 'Specialists in installing NFPA 13 life safety systems, grooved steel pipe couplings, pre-action sprinkler systems, and high-pressure fire pump assemblies for commercial warehouses, high-rises, and industrial facilities.',
    image: '/src/assets/images/trade_industrial_pipefitter_1793747410579.jpg',
    certificationsRequired: ['State Sprinkler Fitter License', 'NICET Level II Water-Based Systems', 'Victaulic Grooving Certified', 'OSHA 10'],
    toolsProvidedOrRequired: ['Roll groover setup', 'Heavy pipe threader dies', 'Beam clamps and hanger torque wrenches'],
    typicalProjects: ['Logistics distribution centers (ESFR)', 'Multi-family residential podiums', 'Chemical storage containment vaults'],
    payRangeHourly: '$44.00 - $55.00/hr',
    demandLevel: 'High',
    codeStandards: ['NFPA 13 Sprinkler Installation', 'NFPA 14 Standpipe Systems', 'NFPA 20 Fire Pumps']
  },
  {
    id: 'ts-6',
    slug: 'civil-underground-plumber',
    title: 'Civil Underground Utility Plumber',
    category: 'civil-utilities',
    shortDescription: 'Heavy-trench civil piping, ductile iron water mains, electrofusion HDPE, storm retention, and sewer tie-ins.',
    fullDescription: 'Operating from slab subgrade to the municipal main. Certified in trench safety, shoring boxes, laser pipe leveling, and electrofusion for natural gas and water services on massive master-planned infrastructure.',
    image: '/src/assets/images/hero_plumbing_journeyman_1793747409684.jpg',
    certificationsRequired: ['Journeyman Plumber / Utility Card', 'OSHA Competent Person (Trenching & Shoring)', 'HDPE Butt Fusion Certified'],
    toolsProvidedOrRequired: ['Laser pipe target', 'Trench safety harness and gas detector', 'Soil compaction verification tools'],
    typicalProjects: ['Municipal water main replacements', 'Commercial site civil utility packages', 'Airport apron underground utilities'],
    payRangeHourly: '$40.00 - $52.00/hr',
    demandLevel: 'Year-round',
    codeStandards: ['AWWA C600 Ductile Iron Specs', 'ASTM D3261 HDPE standards', 'OSHA 1926 Subpart P Trenching']
  }
];

export const MOCK_JOBS: PlumbingJob[] = [
  {
    id: 'job-101',
    title: 'Lead Commercial Journeyman Plumber (High-Rise)',
    slug: 'lead-commercial-journeyman-plumber-austin',
    tradeSpecialty: 'Commercial Journeyman Plumber',
    category: 'commercial',
    location: 'Austin, TX',
    city: 'Austin',
    state: 'TX',
    payRateHourly: '$48.50 - $52.00',
    perDiemDaily: '$125 / day',
    duration: '9 Months (Full Project Duration)',
    hoursPerWeek: '50 - 58 hrs',
    overtimeAvailable: true,
    startDate: 'Immediate (Within 7 Days)',
    description: 'We are deploying a 12-man journeyman plumbing crew for a 38-story mixed-use tower in downtown Austin. The package entails cast iron no-hub DWV stacks, domestic booster pump manifolds, Uponor PEX risers, and high-efficiency commercial fixtures.',
    requirements: [
      'Valid Texas TSBPE Journeyman Plumber License or reciprocal state license',
      'Minimum 4 years commercial multi-story rough-in experience',
      'OSHA 10 or 30 construction safety card',
      'Own standard hand tools and cordless drill kit'
    ],
    responsibilities: [
      'Rough-in vertical DWV stacks and horizontal waste branches per isometric drawings',
      'Install domestic water copper mains using ProPress and brazing',
      'Pressure-test DWV with water head / air test per Austin city inspector checklist',
      'Work collaboratively under field superintendent guidance'
    ],
    benefits: [
      'Weekly direct deposit payroll every Friday',
      '$125 per diem for non-local travelers (7 days/week)',
      'Medical, dental, and prescription drug coverage after 30 days',
      'Overtime paid at 1.5x after 40 hours'
    ],
    urgent: true,
    postedDate: '2 days ago'
  },
  {
    id: 'job-102',
    title: 'Industrial Pipefitter / Steamfitter - Clean Energy Facility',
    slug: 'industrial-pipefitter-steamfitter-columbus',
    tradeSpecialty: 'Industrial Pipefitter & Steamfitter',
    category: 'industrial',
    location: 'Columbus, OH',
    city: 'Columbus',
    state: 'OH',
    payRateHourly: '$50.00 - $56.00',
    perDiemDaily: '$140 / day',
    duration: '14 Months',
    hoursPerWeek: '60 hrs (6x10s schedule)',
    overtimeAvailable: true,
    startDate: 'Next Monday',
    description: 'High-earning surge project for certified industrial pipefitters on a major battery mega-factory. Scope involves schedule 40/80 carbon steel cooling loops, flanged chilled water manifolds, and heavy dual-containment process chemical piping.',
    requirements: [
      'Documented 5+ years industrial pipefitting or steamfitting experience',
      'Ability to pass hands-on pipe take-off and rolling offset test in mock shop',
      'OSHA 30 certified',
      'Clean 10-panel background check for secure facility credentialing'
    ],
    responsibilities: [
      'Measure, bevel, and fit carbon steel pipes for GTAW / SMAW pipe welders',
      'Rig and align valves up to 16-inch diameters with crane operators',
      'Bolt and torque flanges according to calibrated ASME torque sequence',
      'Hydrostatic testing and line sign-off'
    ],
    benefits: [
      'Guaranteed 60-hour work weeks (20 hours of overtime weekly)',
      'Travel mobilization bonus ($500 paid on first paycheck)',
      'Full comprehensive contractor insurance package',
      'Ongoing placement opportunities upon project conclusion'
    ],
    urgent: true,
    postedDate: '1 day ago'
  },
  {
    id: 'job-103',
    title: 'ASSE 6010 Certified Medical Gas Plumber',
    slug: 'asse-6010-medgas-plumber-denver',
    tradeSpecialty: 'Medical Gas & Sanitary Piping Specialist',
    category: 'healthcare',
    location: 'Denver, CO',
    city: 'Denver',
    state: 'CO',
    payRateHourly: '$52.00 - $58.00',
    perDiemDaily: '$130 / day',
    duration: '6 Months',
    hoursPerWeek: '40 - 48 hrs',
    overtimeAvailable: true,
    startDate: 'Two Weeks',
    description: 'Specialized healthcare expansion in the Denver medical corridor. Installing certified vacuum, oxygen, nitrous oxide, and medical air medical gas systems for 16 new surgical suites.',
    requirements: [
      'Active ASSE 6010 Medical Gas Installer certification',
      'AWS B2.2 brazer qualification (continuous nitrogen purge tested)',
      'Colorado Journeyman Plumber License or verified compact eligibility',
      'Demonstrated hospital cleanroom etiquette'
    ],
    responsibilities: [
      'Cut and clean Type L / K degreased copper lines',
      'Purge copper with oil-free dry nitrogen during silver brazing (BCuP-5)',
      'Label lines and install zone valve boxes and alarm panels',
      'Participate in third-party verifier standing 24-hr pressure tests'
    ],
    benefits: [
      'Premium medical gas specialty wage differential',
      'Tool allowance for specialty brazing tips and cutters',
      'Retirement 401(k) with company contribution match',
      'Safe, indoor, climate-controlled work environment'
    ],
    urgent: false,
    postedDate: '4 days ago'
  },
  {
    id: 'job-104',
    title: 'Master Plumber Mechanical Superintendent',
    slug: 'master-plumber-superintendent-chicago',
    tradeSpecialty: 'Master Plumber & Mechanical Superintendent',
    category: 'management',
    location: 'Chicago, IL',
    city: 'Chicago',
    state: 'IL',
    payRateHourly: '$62.00 - $72.00',
    perDiemDaily: '$150 / day (if traveling)',
    duration: '18 Months',
    hoursPerWeek: '45 - 50 hrs',
    overtimeAvailable: false,
    startDate: 'Flexible (Within 3 Weeks)',
    description: 'Looking for a veteran field superintendent to manage a 30-technician mechanical plumbing package for a major pharmaceutical logistics hub. Direct reporting to Project Executive and GC leadership.',
    requirements: [
      'Licensed Master Plumber (Illinois or Midwest reciprocal)',
      'Minimum 8 years commercial supervisory / general foreman experience',
      'Proficiency in Procore, Bluebeam Revu, and BIM 360',
      'Superior communication and inspection management track record'
    ],
    responsibilities: [
      'Coordinate daily field manpower schedules and lookahead charts',
      'Review submittals, RFIs, and resolve spatial clashes with duct & electrical crews',
      'Manage City of Chicago plumbing inspectors and municipal sign-offs',
      'Lead weekly tool-box safety talks and maintain zero-incident jobsite culture'
    ],
    benefits: [
      'Company truck allowance or provided fleet vehicle with fuel card',
      'Quarterly milestone performance bonuses',
      'Full family healthcare coverage',
      'Direct path to Regional Operations Director'
    ],
    urgent: false,
    postedDate: '5 days ago'
  },
  {
    id: 'job-105',
    title: 'Fire Protection Sprinkler Fitter - Logistics Hub',
    slug: 'fire-protection-sprinkler-fitter-phoenix',
    tradeSpecialty: 'Fire Protection & Sprinkler Fitter',
    category: 'fire-protection',
    location: 'Phoenix, AZ',
    city: 'Phoenix',
    state: 'AZ',
    payRateHourly: '$44.00 - $49.00',
    perDiemDaily: '$110 / day',
    duration: '5 Months',
    hoursPerWeek: '50 hrs',
    overtimeAvailable: true,
    startDate: 'Immediate',
    description: 'Rapid install of ESFR roof sprinkler grid and riser assemblies across a 1.2M sq. ft. e-commerce distribution hub in Buckeye/Phoenix.',
    requirements: [
      'Minimum 3 years experience with grooved piping (Victaulic)',
      'Comfortable operating 40ft scissor and boom lifts (Aerial certification)',
      'Valid Journeyman Sprinkler Fitter card',
      'Pass pre-employment drug screening'
    ],
    responsibilities: [
      'Hang and brace schedule 10 and 40 pipe at ceiling height',
      'Assemble grooved couplings and install quick-response sprinkler heads',
      'Flow test risers and assist with backflow double check assembly commissioning'
    ],
    benefits: [
      'Weekly pay with mobile paycheck stubs',
      'Lift certification renewal covered by Manstaff',
      'Health insurance options'
    ],
    urgent: true,
    postedDate: 'Just now'
  },
  {
    id: 'job-106',
    title: 'Underground Civil Utilities Plumber (Site Wet Utilities)',
    slug: 'underground-civil-utilities-plumber-salt-lake',
    tradeSpecialty: 'Civil Underground Utility Plumber',
    category: 'civil-utilities',
    location: 'Salt Lake City, UT',
    city: 'Salt Lake City',
    state: 'UT',
    payRateHourly: '$42.00 - $48.00',
    perDiemDaily: '$120 / day',
    duration: '8 Months',
    hoursPerWeek: '45 - 55 hrs',
    overtimeAvailable: true,
    startDate: 'Next Monday',
    description: 'Installation of 8" to 16" ductile iron water transmission mains, HDPE electrofusion gas laterals, and deep sanitary gravity sewer lines for a new industrial business park.',
    requirements: [
      'Valid plumbing license or state utility contractor license',
      'Competent person trench shoring training',
      'Experience reading civil engineering plan and profile sheets'
    ],
    responsibilities: [
      'Set pipe lasers and verify strict bedding slopes for gravity sewer lines',
      'Join mechanical joint (MJ) and push-on ductile iron pipe with meg lugs',
      'Perform hydrostatic pressure testing and chlorination flushing'
    ],
    benefits: [
      'Solid year-round earthwork contract with no winter shutdowns',
      'Per diem paid 7 days',
      'Safety boot and gear allowance'
    ],
    urgent: false,
    postedDate: '3 days ago'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'When our data center project in Texas suddenly needed 28 certified commercial journeymen on 5 days notice, traditional local staffing agencies fell flat. Manstaff Plumbing mobilized vetted plumbers from four states, fully credentialed and safety-cleared. They kept our mechanical completion date right on schedule.',
    author: 'Marcus Vance',
    role: 'Vice President of Mechanical Operations',
    organization: 'Apex Mechanical Contractors',
    location: 'Dallas, TX',
    type: 'contractor',
    metric: '+28 Certified Plumbers Mobilized in 5 Days'
  },
  {
    id: 'test-2',
    quote: 'As a licensed journeyman, Manstaff Plumbing has been the most professional staffing partner I have worked for in 15 years in the trade. Direct deposit is always on time, per diem is paid weekly without chasing receipts, and the jobs are major commercial jobs that respect true craftsmanship.',
    author: 'David H. Mueller',
    role: 'Journeyman Pipefitter & MedGas Brazer',
    organization: 'Manstaff Field Tradesman',
    location: 'Denver, CO',
    type: 'plumber',
    metric: '$114,000+ Annual Earnings with Per Diem'
  },
  {
    id: 'test-3',
    quote: 'Their vetting process is real. We did not get warm bodies; we got plumbers who could read our BIM isometrics on their iPads and produce zero leak callbacks on over 14,000 feet of copper domestic risers.',
    author: 'Elena Rostova',
    role: 'Senior Project Manager',
    organization: 'Turner-Vance Infrastructure Joint Venture',
    location: 'Chicago, IL',
    type: 'contractor',
    metric: 'Zero Hydrostatic Leak Callbacks'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'employers',
    question: 'How quickly can Manstaff Plumbing mobilize a commercial plumbing crew?',
    answer: 'For standard emergency or surge requests of 2 to 10 plumbers, we typically confirm and mobilize dispatch within 48 to 72 hours. For major planned projects requiring 20 to 50+ tradespeople, we deploy dedicated recruitment coordinators 2 to 3 weeks prior to rough-in kick-off.'
  },
  {
    id: 'faq-2',
    category: 'employers',
    question: 'How are Manstaff plumbers vetted before stepping foot on our jobsite?',
    answer: 'Every candidate undergoes our proprietary 4-step verification: (1) Primary source state board license validation; (2) Hands-on or verified code proficiency screening (UPC/IPC/ASME); (3) OSHA 10/30 safety credential audit; and (4) 10-panel drug screening and criminal background verification.'
  },
  {
    id: 'faq-3',
    category: 'employers',
    question: 'What happens if a dispatched plumber does not meet our production standards?',
    answer: 'We provide an unconditional 8-Hour Workmanship Guarantee. If any tradesperson does not meet your expectations within their first shift, notify your dedicated Manstaff account director immediately. You will not be billed for that shift and a replacement craftsman will be dispatched.'
  },
  {
    id: 'faq-4',
    category: 'plumbers',
    question: 'What is the compensation structure for traveling journeymen plumbers?',
    answer: 'Our traveling journeymen earn competitive hourly rates ($42.00 - $62.00/hour depending on trade specialty and location) plus non-taxable daily per diem (typically $110 - $150/day paid 7 days per week on approved assignments). Overtime is paid at time-and-a-half after 40 hours.'
  },
  {
    id: 'faq-5',
    category: 'licensing',
    question: 'Does Manstaff Plumbing assist with state license reciprocity and travel visas?',
    answer: 'Yes! Echoing our European journeyman international roots, our licensing coordinators assist qualified tradespeople with interstate license reciprocity filings, state exam prep, and cross-border mobility logistics where applicable.'
  },
  {
    id: 'faq-6',
    category: 'payroll',
    question: 'How does payroll and insurance work for contractor clients?',
    answer: 'Manstaff Plumbing acts as the employer of record for all contingent tradespeople. We handle W-2 payroll processing, state and federal withholdings, statutory worker compensation insurance with high-limit policy coverage, and general liability insurance. Contractors receive one transparent, itemized weekly invoice.'
  }
];

export const STAFFING_PACKAGES = [
  {
    name: 'Rapid Surge Crew',
    tagline: 'Ideal for meeting tight schedule deadlines & inspection milestones',
    idealFor: 'Contractors facing critical path deadlines, unexpected headcount drop, or accelerated schedules.',
    crewSize: '2 - 12 Journeymen',
    dispatchTime: '48 - 72 Hours',
    features: [
      'Pre-vetted licensed commercial journeymen',
      'Immediate state board license validation',
      'OSHA safety credential verification',
      '8-Hour Workmanship Guarantee',
      'Weekly itemized consolidated billing',
      'Dedicated 24/7 field dispatcher'
    ],
    recommended: true
  },
  {
    name: 'Long-Term Core Staffing',
    tagline: 'Sustained manpower for 6 to 24 month commercial construction',
    idealFor: 'Full-phase multi-story projects, hospitals, university additions, and industrial plants.',
    crewSize: '10 - 50+ Journeymen & Leads',
    dispatchTime: '1 - 2 Weeks',
    features: [
      'Mix of Journeymen, Pipefitters & Foremen',
      'Dedicated on-site lead coordinator',
      'Per-diem management & logistics handling',
      'BIM & blueprint coordination assistance',
      'Replacement pipeline guarantee',
      'Volume billing discount tier'
    ],
    recommended: false
  },
  {
    name: 'Direct Hire & Executive Search',
    tagline: 'Permanent placement for Master Plumbers & Superintendents',
    idealFor: 'Mechanical contractors seeking permanent superintendents, estimators, or qualifying master plumbers.',
    crewSize: 'Key Individuals',
    dispatchTime: 'Tailored Search',
    features: [
      'Confidential executive headhunting',
      'In-depth leadership & code review',
      '90-Day direct hire retention warranty',
      'Salary negotiation mediation',
      'Permanent payroll transition support'
    ],
    recommended: false
  }
];
