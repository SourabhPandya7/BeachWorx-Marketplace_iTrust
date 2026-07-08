import { StrategicTopic } from '../types';

export const strategicTopics: StrategicTopic[] = [
  {
    id: 'executive-summary',
    title: 'Executive Summary',
    category: 'corporate',
    content: 'BeachWorx Marketplace is a revolutionary membership-driven benefits, insurance, and financial marketplace designed specifically for small businesses, freelancers, sole proprietors, and independent employers. Independent businesses normally pay full retail prices for healthcare, disability coverage, financial services, and legal protection. By structuring members into a cohesive, NAIC-compliant business association under the risk-management umbrella of Gallagher Affinity, we wield the scale and collective buying power of a Fortune 500 company. The pilot program launches in Destin, Florida, with a captured audience of 1,200–1,500 active BeachWorx member businesses, before rapidly scaling across Northwest Florida (Panama City Beach) and eventually franchising nationwide.',
    bullets: [
      'Value Proposition: "Enterprise-level benefits and buying power typically reserved for corporate giants, accessible to independent companies through a single association membership."',
      'Strategic Advantage: Zero-underwriting guaranteed-issue policies, reduced FICA tax solutions (Section 125/PCMP), and group underwriting discounts.',
      'Pilot Partners: BeachWorx (Destin co-working & business hub) and VAULT (for high-performance group health plans ranging from 1 to 1,000 employees).',
      'Structural Architecture: Gallagher Affinity serving as the structural backend and broker-of-record to guarantee NAIC compliance and premium support.'
    ]
  },
  {
    id: 'sitemap',
    title: 'Platform Sitemap',
    category: 'architecture',
    content: 'The information architecture is optimized for conversion, routing diverse traffic (1099 contractors, sole proprietors, medical clinics, hospitality owners, and regional employers) to high-converting product silos, self-service calculators, or the unified association sign-up.',
    bullets: [
      '1.0 Home (The Primary Brand Showcase & Costco-meets-Fintech Hub)',
      '2.0 About (The Association Mission, Founders Circle, and Gallagher Partnership)',
      '3.0 How It Works (Association Mechanics, Dues structure, and Enrollment Flow)',
      '4.0 Marketplace Directory (Categorized browse: Health, Insurance, Finance, Business Tools)',
      '  4.1 VAULT Health Hub (Employers of 1 to 1,000 employees)',
      '  4.2 Life & Income Protection Hub (Guaranteed Issue Permanent Life, Term Life, Disability)',
      '  4.3 Financial Wellness (Section 125, Corporate Fiduciary Planning, RSSA Audits)',
      '  4.4 Professional & Retail Business Suite (Cyber, Payroll, LegalShield, Succession Planning)',
      '5.0 Member Pricing & Dues Calculator (Interactive tiers based on employee headcount)',
      '6.0 Interactive Member Portal & Dashboard (Active benefits tracker, claims, concierge chat)',
      '7.0 Strategic Resources (SEO-optimized blog, compliance legal disclaimers, partner logos)',
      '8.0 Interactive Checkout & Enrollment Flow (ACH authorization, payroll integration setup)',
      '9.0 Partner Network Portal (For local vendors, brokers, and BeachWorx affiliates)'
    ]
  },
  {
    id: 'technical-architecture',
    title: 'Technical Architecture & Automated Billing',
    category: 'architecture',
    content: 'To handle automated, payroll-integrated billing, association dues tracking, and secure insurance enrollment under the hood, the system is designed with a modern, modular API-first structure.',
    bullets: [
      'Identity Management: Firebase Auth (integrated with OAuth) provides multi-tenant authentication for Employer Administrators, Employees, and Partner Agents.',
      'Dues & Commission Engine: Automated ledger-backed billing systems charge monthly association dues via ACH/Plaid, separating dues from insurance premiums.',
      'Payroll Integration: Bidirectional sync with major payroll bureaus (ADP, Gusto, QuickBooks, Paycheque) automatically handles Section 125 FICA pre-tax deductions and auto-adjusts employee enrollments during onboarding.',
      'Broker API Bridges: Secure XML/JSON data transfers to Gallagher Affinity underwriting systems and VAULT health platform to trigger rapid enrollment and issue policies.',
      'Database Ledger: Highly durable cloud Firestore tracks active employer rosters, individual employee elections, and financial transaction logs.'
    ]
  },
  {
    id: 'crm-hubspot',
    title: 'CRM & HubSpot Implementation',
    category: 'marketing',
    content: 'HubSpot serves as our core customer relationship engine, automating tracking from the moment a small business calculates their potential FICA savings to the automated onboarding of their first employee.',
    bullets: [
      'Lead Scoring: Score prospects based on headcount, selected benefits of interest, and engagement with the Pricing Calculator (high scores trigger direct outreach).',
      'HubSpot Pipeline Stages: 1. New Lead -> 2. Calculator Engaged -> 3. Consultation Booked -> 4. Proposal Generated -> 5. Association Enrolled -> 6. Employee Onboarding -> 7. Fully Active.',
      'Custom Contact Properties: Store key business details (Employee Headcount, Current Health Broker, Active Payroll Provider, Target Launch Date, and Association Dues Tier).',
      'Transactional Automated Emails: Instantly dispatch quote details, FICA savings reports, and personalized Gallagher broker assignments directly from HubSpot APIs.'
    ]
  },
  {
    id: 'seo-strategy',
    title: 'SEO Strategy & Blog Topics',
    category: 'marketing',
    content: 'Our SEO program targets highly intentful long-tail keywords used by small business owners and HR managers searching for alternative, affordable benefit structures in Florida.',
    bullets: [
      'Primary Focus Keywords: "Affordable healthcare Destin FL", "Section 125 plan Florida small business", "Guaranteed issue disability independent contractor", "BeachWorx business benefits", "Association health plans Florida Panhandle"',
      'Blog Idea 1: "How Northwest Florida Small Businesses are Saving $500+ Per Employee in FICA Taxes Using Section 125"',
      'Blog Idea 2: "The 1099 Guide to Getting Guaranteed Issue Disability and Life Insurance in Florida"',
      'Blog Idea 3: "Why traditional health insurance models are failing Florida coastal employers (and how VAULT changes the game)"',
      'Blog Idea 4: "Succession planning for Florida retail and hospitality owners: Preparing your business for the next generation"'
    ]
  },
  {
    id: 'email-funnels',
    title: 'Lead Generation & Onboarding Sequences',
    category: 'marketing',
    content: 'We use automated email flows to move prospects through the marketing funnel, from cold awareness to fully integrated association member status.',
    bullets: [
      'Email Drip 1: "The Small Business Tax Secret" (Focuses on FICA savings and Section 125, sent on Day 1 to leads who used the calculator).',
      'Email Drip 2: "Enterprise Perks on a Main Street Budget" (Explores Gallagher partnership and multi-product buying power, sent on Day 3).',
      'Email Drip 3: "The VAULT Advantage" (Deep-dive into health plan coverage, tier-1 networks, and employer-level advantages, sent on Day 5).',
      'Member Onboarding Sequence: Day 1: "Welcome to the BeachWorx Buying Group" (How to log in and invite team). Day 3: "Setting up your Payroll Sync" (Step-by-step integration). Day 7: "Accessing your Telemedicine and Rx Perks" (Immediate win benefits).',
      'Partner Onboarding Sequence: Pre-approved local service providers receive localized instruction guides, asset packs, and integration API credentials to register their exclusive discounts.'
    ]
  },
  {
    id: 'sales-presentation',
    title: 'Sales Presentation Outline',
    category: 'operations',
    content: 'Designed to enroll local business owners and employers into the association during live presentations at BeachWorx.',
    bullets: [
      'Slide 1: Title Slide—"Enterprise Power for Main Street: Introducing the BeachWorx Marketplace"',
      'Slide 2: The Problem—"The Retail Tax: Why small businesses pay up to 40% more for benefits and insurance than multi-billion dollar conglomerates."',
      'Slide 3: The Secret Formula—"How Association Buying Groups (NAIC Compliant) pool risk and buying power under Gallagher Affinity."',
      'Slide 4: Product Showcase—"From VAULT Group Health plans (1-1000 employees) to Guaranteed Issue Disability and Life—No Medical Exams required."',
      'Slide 5: The FICA Calculator—"How our Section 125/PCMP program pays for your association membership dues and returns cash back to your bottom line."',
      'Slide 6: Case Study—"How a local Destin marine charter saved $18,400 annually on health benefits while adding dental, vision, and mental health services."',
      'Slide 7: CTA—"Calculate your dues, authorize your payroll link, and unlock your enterprise perks today."'
    ]
  },
  {
    id: 'investor-presentation',
    title: 'Investor Presentation Outline',
    category: 'corporate',
    content: 'Tailored for pitching the BeachWorx Marketplace business model to venture capital and institutional health-tech investors.',
    bullets: [
      'Slide 1: Executive Slide—"BeachWorx Marketplace: Disrupting the $20B Small Business Benefits Distribution Space"',
      'Slide 2: Market Opportunity—"Over 30 Million small businesses and 1099 contractors are locked out of high-quality group health and voluntary benefits pools."',
      'Slide 3: The Moat—"Exclusive pilot partnership with BeachWorx co-working networks combined with the structural powerhouse of Gallagher Affinity."',
      'Slide 4: Recurring Revenue Engine—"Multiple revenue streams: Monthly association membership dues, recurring insurance commissions, partner marketing fees, and premium payroll SaaS integrations."',
      'Slide 5: Unit Economics—"CAC of $120 per employer through captured co-working networks, with a customer lifetime value (LTV) exceeding $4,500 over 5 years."',
      'Slide 6: Scaling Blueprint—"Destin Florida pilot -> PCB expansion -> State chapter rollouts -> Franchise white-labeling for other major co-working ecosystems nationwide."'
    ]
  },
  {
    id: 'future-roadmap',
    title: 'Future Roadmap & National Scaling',
    category: 'corporate',
    content: 'BeachWorx Marketplace is built to scale from a single Floridian coastal city into a nationally recognized decentralized business association.',
    bullets: [
      'Phase 1: Destin Pilot (Q3 2026)—Deploy core platform with BeachWorx, integrate local payroll setups, achieve 35% member penetration among active businesses.',
      'Phase 2: Northwest Florida Expansion (Q1 2027)—Roll out to Panama City Beach, Miramar Beach, and Pensacola. Form alliances with local coastal chambers.',
      'Phase 3: State-Level Chapters (Q3 2027)—Establish Florida Business Association chapters, implement automated regulatory state compliance routing.',
      'Phase 4: National White-Labeling (Q2 2028)—Package the software, licensing frameworks, and Gallagher Affinity underwriting contracts into a franchise-ready PEO-alternative product for co-working networks nationwide.'
    ]
  },
  {
    id: 'mobile- chatbot',
    title: 'Mobile-First & AI Chatbot Specs',
    category: 'architecture',
    content: 'Ensuring seamless responsiveness and instant AI-driven member assistance on the beach or in the office.',
    bullets: [
      'Mobile-First Layout: Sticky action button navigation, card-based swipe gestures for product comparison, and streamlined native camera uploads for business tax ID verification.',
      'AI Chatbot (BeachWorx Concierge): Built with Gemini 2.5 Flash, providing instant, compliant answers to member questions regarding deductible match procedures, network searches, and Section 125 FICA savings estimates.',
      'Chatbot Triggers: Automatically engages when a user spends more than 45 seconds on the VAULT health insurance application page to offer instant expert coordination.'
    ]
  }
];
