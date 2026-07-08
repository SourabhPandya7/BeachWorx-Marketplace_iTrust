import { Product } from '../types';

export const productsData: Product[] = [
  {
    id: 'vault-health',
    name: 'Vault Health Insurance Partnership',
    category: 'health',
    headline: 'Enterprise Health Plans for 1 to 1,000 Employees',
    shortDescription: 'In partnership with VAULT, we offer customized group health solutions with tier-1 networks, stable premiums, and streamlined administration typically reserved for major corporations.',
    benefits: [
      'Available for groups from a single employee (1099/Sole Prop) up to 1,000+ employees',
      'Lower premiums (average 15-22% savings) through large group underwriting pools',
      'Includes telemedicine, mental health counseling, and wellness incentives',
      'Deductible credit matches and flexible plan structures (HSA, PPO, EPO)',
      'Simplified onboarding with dedicated Gallagher Affinity customer support'
    ],
    ctaText: 'Get a Vault Quote',
    iconName: 'ShieldPlus',
    priority: 'High',
    expansionIdeas: 'National roll-out with multi-state employer pools, state-specific compliance routing, and automated digital health-risk assessments.',
    vaultSpecific: true
  },
  {
    id: 'gi-perm-life-ltc',
    name: 'Guaranteed Issue Permanent Life with LTC Rider',
    category: 'insurance',
    headline: 'Wealth Protection + Long-Term Care without Medical Exams',
    shortDescription: 'Build cash value and secure permanent life coverage combined with a Long-Term Care (LTC) rider, guaranteed to be issued regardless of pre-existing health conditions.',
    benefits: [
      'Guaranteed acceptance—no physical exams, needles, or health questionnaires',
      'LTC Rider covers nursing home, assisted living, and home healthcare costs',
      'Stable level premiums that never increase over time',
      'Tax-free death benefit combined with cash value accumulation'
    ],
    ctaText: 'Apply in 3 Minutes',
    iconName: 'HeartPulse',
    priority: 'High',
    expansionIdeas: 'Expand limits with executive carve-outs and multi-family office coordination.'
  },
  {
    id: 'gi-term-life',
    name: 'Guaranteed Issue Term Life',
    category: 'insurance',
    headline: 'Essential Life Protection for You and Your Team',
    shortDescription: 'High-limit term life coverage designed to secure your family\'s financial future, featuring guaranteed acceptance and streamlined payroll deduction integration.',
    benefits: [
      'Guaranteed issue up to $150,000 for all active members and employees',
      'Term lengths of 10, 15, or 20 years available',
      'Portability options—keep your coverage even if you change businesses',
      'Direct billing integration through automated ACH or payroll deduct'
    ],
    ctaText: 'Select Term Policy',
    iconName: 'ShieldAlert',
    priority: 'High',
    expansionIdeas: 'Integrate with automated annual auto-increases tied to CPI/inflation.'
  },
  {
    id: 'gi-disability',
    name: 'Guaranteed Issue Disability Income',
    category: 'insurance',
    headline: 'Protect Your Paycheck from Unforeseen Disruptions',
    shortDescription: 'Replace up to 60% of your earnings if you are unable to work due to illness or injury. Guaranteed acceptance bypasses standard rigorous underwriting.',
    benefits: [
      'Guaranteed issue—no physical exams or medical underwriting required',
      'Covers both short-term (up to 26 weeks) and long-term (up to age 67) disabilities',
      'Own-occupation definition of disability tailored for specialized business owners',
      'Partial disability benefits support gradual return-to-work phases'
    ],
    ctaText: 'Secure Income Stream',
    iconName: 'TrendingUp',
    priority: 'High',
    expansionIdeas: 'Add high-limit optional buy-up riders for highly compensated executives.'
  },
  {
    id: 'med-prof-disability',
    name: 'Medical Professional Disability Programs',
    category: 'insurance',
    headline: 'Own-Occupation Coverage Specially Crafted for Healthcare Providers',
    shortDescription: 'Custom high-limit disability policies designed for physicians, dentists, and healthcare practitioners, protecting your specific medical specialty.',
    benefits: [
      'Specialty-specific own-occupation definition ensures full payout if you can\'t perform your specific procedures',
      'Coverage limits up to $25,000/month to protect high earning capacities',
      'Student loan repayment assistance riders included',
      'Future purchase options let you increase coverage without medical re-checks'
    ],
    ctaText: 'Request Medical Specialist Quote',
    iconName: 'Stethoscope',
    priority: 'High',
    expansionIdeas: 'Partner with regional medical societies and practice management consultants.'
  },
  {
    id: 'rx-savings',
    name: 'Prescription Savings Network',
    category: 'health',
    headline: 'Save Up to 85% on Brand Name & Generic Medications',
    shortDescription: 'An exclusive prescription savings program that integrates seamlessly with your existing health plan or works standalone to dramatically lower prescription drug costs.',
    benefits: [
      'Accepted at over 65,000 pharmacies nationwide (CVS, Walgreens, Walmart, etc.)',
      'Covers family members and pets at no additional fee',
      'Includes home delivery option with additional bulk discounts',
      'Transparent search tool lets you find the lowest local price instantly'
    ],
    ctaText: 'Get Free Rx Card',
    iconName: 'Pills',
    priority: 'Medium',
    expansionIdeas: 'Bundle with local co-working spaces and community chambers as a free lead-gen tool.'
  },
  {
    id: 'glp1-programs',
    name: 'GLP-1 Weight Management Programs',
    category: 'health',
    headline: 'Comprehensive, Clinically Supervised Weight Loss Support',
    shortDescription: 'Unlock member-exclusive pricing and prioritized access to FDA-approved GLP-1 wellness programs, complete with professional clinical coaching and lab support.',
    benefits: [
      'Exclusive member pricing on consultations and doctor-prescribed medications',
      'Includes personal registered dietitian coaching and lifestyle guides',
      'Direct coordination with primary care physicians',
      'Access to partner compound pharmacies for highly reliable medication supply'
    ],
    ctaText: 'Schedule Consultation',
    iconName: 'Sparkles',
    priority: 'High',
    expansionIdeas: 'Integrate directly into employer self-funded health plans to lower long-term metabolic health risks.'
  },
  {
    id: 'cyber-insurance',
    name: 'Cyber Liability & Data Breach Insurance',
    category: 'insurance',
    headline: 'Insure Against Cyber Extortion, Phishing, and Ransomware',
    shortDescription: 'Protect your small or mid-sized business from the astronomical costs associated with data breaches, regulatory fines, legal defense, and cyber-extortion.',
    benefits: [
      'Covers digital forensics, public relations recovery, and credit monitoring for clients',
      'Includes coverage for social engineering and fraudulent funds transfer (phishing)',
      'Access to 24/7 rapid incident response hotlines',
      'Assistance with complex state-by-state data breach notification laws'
    ],
    ctaText: 'Get Cyber Coverage',
    iconName: 'Laptop',
    priority: 'High',
    expansionIdeas: 'Bundle with automatic cybersecurity vulnerability scans for all active members.'
  },
  {
    id: 'workplace-violence',
    name: 'Workplace Violence Protection',
    category: 'insurance',
    headline: 'Proactive Prevention, Critical Response & Recovery Insurance',
    shortDescription: 'A highly specialized coverage program designed to help business owners prevent, survive, and recover from tragic workplace violence incidents.',
    benefits: [
      'Business interruption insurance covering physical closures and loss of reputation',
      'Covers immediate crisis management consultants, public relations, and security guards',
      'Provides trauma counseling for all employees, contractors, and their families',
      'Includes legal liability protection and physical property repair'
    ],
    ctaText: 'Protect Your Workplace',
    iconName: 'Shield',
    priority: 'Medium',
    expansionIdeas: 'Launch mandatory certified manager trainings to earn dynamic premium discounts.'
  },
  {
    id: 'section-125-pcmp',
    name: 'Section 125 / PCMP / Flex Shield',
    category: 'finance',
    headline: 'Save Hundreds in FICA Taxes While Boosting Employee Benefits',
    shortDescription: 'Implement IRS Section 125 Pre-Tax Premium Compensation Plans (PCMP) to reduce payroll tax burdens for the employer while delivering cash-back wellness incentives to staff.',
    benefits: [
      'Average business payroll tax savings of $573 per participating employee per year',
      'Employees receive zero-net-cost supplemental health, disability, and life coverages',
      'Includes built-in wellness coaching, telemedicine, and mental health portals',
      'Fully automated integration with major payroll providers (ADP, Gusto, QuickBooks)'
    ],
    ctaText: 'Calculate FICA Savings',
    iconName: 'Percent',
    priority: 'High',
    expansionIdeas: 'White-label regional payroll bureaus to auto-enroll small businesses.'
  },
  {
    id: 'financial-planning',
    name: 'Corporate Financial Planning',
    category: 'finance',
    headline: 'Strategic Wealth Management for Partners and Key Personnel',
    shortDescription: 'Receive elite, unbiased fiduciary financial planning and wealth advisory services, tailored explicitly to the needs of founders, partners, and high-value team members.',
    benefits: [
      'Fee-only fiduciary financial planners (no high-commission product pitching)',
      'Custom investment portfolio design, tax strategy, and retirement forecasting',
      'Key-person retention planning and executive deferred compensation structures',
      'Free financial wellness workshops and initial audits for all members'
    ],
    ctaText: 'Book Advisory Session',
    iconName: 'Calculator',
    priority: 'Medium',
    expansionIdeas: 'Integrate automated robo-advisor options for entry-level employees.'
  },
  {
    id: 'rssa',
    name: 'Registered Social Security Analyst (RSSA) Audit',
    category: 'finance',
    headline: 'Maximize Your Lifetime Social Security Benefits',
    shortDescription: 'Filing rules are highly complex. Our certified RSSA analysts examine your business structure, earnings, and personal details to maximize your total lifetime Social Security payout.',
    benefits: [
      'On average, optimized filing strategies unlock $100,000+ in extra lifetime benefits',
      'Custom analysis of spousal benefits, divorce rules, and business transition timing',
      'Detailed, personalized filing roadmaps showing exact months to claim',
      'Crucial planning for self-employed and high-net-worth business owners'
    ],
    ctaText: 'Claim Your RSSA Audit',
    iconName: 'Briefcase',
    priority: 'Medium',
    expansionIdeas: 'Conduct regional seminars and webinars for members approaching age 60.'
  },
  {
    id: 'robert-lashly',
    name: 'Lashly Wealth Advisory Products',
    category: 'finance',
    headline: 'Elite Specialized Asset Protection and Tax Mitigation',
    shortDescription: 'In partnership with specialized advisor Robert Lashly, gain access to advanced tax planning, corporate trust structures, and robust private wealth asset protection strategies.',
    benefits: [
      'Comprehensive high-net-worth tax minimization strategies',
      'Asset-protection trusts designed to insulate personal wealth from business litigation',
      'Private placement insurance and multi-generational wealth preservation programs',
      'Direct, direct-access consulting with premier financial architects'
    ],
    ctaText: 'Inquire Confidentially',
    iconName: 'Coins',
    priority: 'Medium',
    expansionIdeas: 'Develop a private, invitation-only founders circle within BeachWorx.'
  },
  {
    id: 'business-consulting',
    name: 'Enterprise Growth & Business Consulting',
    category: 'business',
    headline: 'Accelerate Growth, Improve Margins & Refine Operations',
    shortDescription: 'Gain direct advisory access to Fortune 500 strategic consultants. We evaluate your business models, margins, marketing channels, and systems to scale profitability.',
    benefits: [
      'One-on-one business operational audits and performance benchmarking',
      'Pricing strategy, customer acquisition cost (CAC) reduction, and margin engineering',
      'Technology stack optimization (CRM, ERP, Billing, Automation)',
      'Assistance with capital raising, debt restructuring, and SBA loan preparation'
    ],
    ctaText: 'Schedule Business Audit',
    iconName: 'Compass',
    priority: 'Medium',
    expansionIdeas: 'Structure weekly mastermind groups directly inside the BeachWorx Florida coast locations.'
  },
  {
    id: 'employee-benefits',
    name: 'Gallagher Affinity Employee Benefits Suite',
    category: 'insurance',
    headline: 'Fortune 500 Benefits Programs for Local Employers',
    shortDescription: 'Leverage the immense buying power of Gallagher Affinity. Access premier dental, vision, life, short-term disability, and wellness plans for your team without high administrative overhead.',
    benefits: [
      'Large group rates and streamlined compliance management (ACA, COBRA)',
      'Online benefits portal for rapid employee self-enrollment and administration',
      'Customized plan designs matching your payroll capacity',
      'Dedicated claims resolution team so you don\'t have to deal with insurers'
    ],
    ctaText: 'Review Benefits Suite',
    iconName: 'Building',
    priority: 'High',
    expansionIdeas: 'Integrate directly into regional professional employment organizations (PEOs).'
  },
  {
    id: 'payroll-solutions',
    name: 'Integrated Payroll & HR Solutions',
    category: 'business',
    headline: 'Automated Payroll, Tax Filing & HR Compliance',
    shortDescription: 'Streamline payroll administration and secure HR compliance with preferred pricing. Fully integrated with your marketplace benefits for automated deductions.',
    benefits: [
      'Automated local, state, and federal payroll tax filings and reporting',
      'Seamless automated billing of association membership dues and insurance premiums',
      'Direct-deposit, digital paystubs, and intuitive mobile employee portals',
      'Access to certified HR professionals for compliance and handbook creation'
    ],
    ctaText: 'Connect Your Payroll',
    iconName: 'CheckSquare',
    priority: 'High',
    expansionIdeas: 'Launch a co-branded payroll product directly servicing co-working members.'
  },
  {
    id: 'legal-services',
    name: 'Small Business LegalShield Program',
    category: 'business',
    headline: 'On-Demand Legal Advice & Contract Review',
    shortDescription: 'Stop paying astronomical hourly legal fees. Get immediate, unlimited advice and professional contract reviews from top-rated local business attorneys for one low flat monthly fee.',
    benefits: [
      'Unlimited phone consultations on any business legal matter (leasing, disputes, hiring)',
      'Professional contract, lease, and document review (up to 15 pages per document)',
      'Attorney-drafted letters and phone calls on your behalf to resolve payment disputes',
      'Comprehensive assistance with trademarks, LLC formation, and compliance audits'
    ],
    ctaText: 'Activate Legal Plan',
    iconName: 'Scale',
    priority: 'Medium',
    expansionIdeas: 'Develop industry-specific legal document templates for Floridian coastal businesses.'
  },
  {
    id: 'identity-protection',
    name: 'Proactive Corporate Identity Protection',
    category: 'business',
    headline: 'Protect Your Personal Credit and Business Reputation',
    shortDescription: 'Advanced 24/7 monitoring and full-service identity restoration services for business owners, partners, and employees, protecting you from modern digital fraud.',
    benefits: [
      'Continuous monitoring of credit profiles, dark web leaks, and business domain registrations',
      'Up to $1 Million in identity theft insurance for legal defense and lost wages',
      'Certified recovery experts handle 100% of the restoration process on your behalf',
      'Protects your business credit files and banking login vulnerabilities'
    ],
    ctaText: 'Secure Your Identity',
    iconName: 'UserCheck',
    priority: 'Low',
    expansionIdeas: 'Offer as a complimentary benefit for premium enterprise-tier association members.'
  },
  {
    id: 'telemedicine',
    name: 'On-Demand Telemedicine Portal',
    category: 'health',
    headline: '24/7 Virtual Medical Care for You and Your Entire Household',
    shortDescription: 'Connect with a board-certified physician in minutes for diagnostics, treatment plans, and prescription refills, straight from your smartphone or computer.',
    benefits: [
      'Unlimited consultations with $0 co-pays for all participating employees',
      'Covers cold, flu, skin rashes, sinus infections, allergies, and minor injuries',
      'Avoid crowded urgent care clinics and long ER waiting periods',
      'Fully compliant, private, and secure virtual environment'
    ],
    ctaText: 'Access Virtual Care',
    iconName: 'Monitor',
    priority: 'High',
    expansionIdeas: 'Deploy automated telemedicine kiosks physically inside BeachWorx Florida hubs.'
  },
  {
    id: 'mental-health',
    name: 'Comprehensive Mental Health Support',
    category: 'health',
    headline: 'Professional Virtual Therapy & Employee Assistance (EAP)',
    shortDescription: 'Confidential, on-demand support from licensed mental health professionals, helping your team manage anxiety, stress, depression, and personal challenges.',
    benefits: [
      'Direct, private matching with licensed clinical therapists and family counselors',
      'Unlimited digital self-guided Cognitive Behavioral Therapy (CBT) modules',
      'Immediate crisis assistance and stress-management toolkits',
      'Confidential employer reporting ensures complete privacy and zero stigma'
    ],
    ctaText: 'Enable Mental Wellness',
    iconName: 'Smile',
    priority: 'High',
    expansionIdeas: 'Add weekly stress-management workshops and guided meditation classes.'
  },
  {
    id: 'pet-insurance',
    name: 'Preferred Group Pet Insurance',
    category: 'health',
    headline: 'Comprehensive Veterinary Protection for Your Furry Team Members',
    shortDescription: 'Save on veterinary care with exclusive group rates. Covers accidents, illnesses, surgeries, and prescriptions for cats and dogs, with up to 90% reimbursement.',
    benefits: [
      'Up to 10% discount on standard retail rates for all active association members',
      'Use any licensed vet, specialist, or emergency clinic worldwide',
      'Intuitive mobile claim submission—just take a photo of the invoice',
      'Covers hereditary conditions, cancer treatments, and dental accidents'
    ],
    ctaText: 'Get Custom Pet Quote',
    iconName: 'Heart',
    priority: 'Low',
    expansionIdeas: 'Integrate custom beach-safety pet guidelines for Northwest Florida region.'
  },
  {
    id: 'dental-vision',
    name: 'Association Group Dental & Vision',
    category: 'health',
    headline: 'Premier Preventive Care & Optical Coverage',
    shortDescription: 'High-limit dental and vision benefits featuring rich preventive care allowances, low deductibles, and an expansive national network of dentists and optometrists.',
    benefits: [
      'Dental covers 100% of cleanings and x-rays, 80% of fillings, and 50% of crowns/root canals',
      'Vision covers annual comprehensive exams and provides a generous $150 frame allowance',
      'Extensive networks including top local clinics in Destin and Panama City Beach',
      'No waiting periods for preventive care—coverage starts on day one'
    ],
    ctaText: 'Add Dental & Vision',
    iconName: 'Eye',
    priority: 'High',
    expansionIdeas: 'Launch a direct mobile dentist clinic that visits the BeachWorx parking lot quarterly.'
  },
  {
    id: 'critical-illness',
    name: 'Group Critical Illness Insurance',
    category: 'insurance',
    headline: 'Lump-Sum Cash Payouts for Life-Changing Health Events',
    shortDescription: 'Receive a lump-sum cash benefit directly to your bank account if you are diagnosed with a major covered illness, such as cancer, stroke, or heart attack.',
    benefits: [
      'Cash payout paid directly to you, NOT the hospital, to use as you see fit',
      'Perfect for covering high deductibles, rent, travel, or childcare during recovery',
      'Includes a wellness incentive payment for completing annual standard physicals',
      'Guaranteed issue options for active co-working and association members'
    ],
    ctaText: 'Request Cash Security',
    iconName: 'AlertCircle',
    priority: 'Medium',
    expansionIdeas: 'Incorporate into comprehensive lifestyle protector suites.'
  },
  {
    id: 'accident-insurance',
    name: 'Accident Expense Insurance',
    category: 'insurance',
    headline: 'Instant Financial Relief for Accidental Injuries',
    shortDescription: 'Offset out-of-pocket medical costs after an accident. Pays fixed cash benefits directly to you for fractures, dislocations, concussions, and emergency room visits.',
    benefits: [
      'Over 50 specific accidental event payouts covered under one low-cost plan',
      'Complements existing high-deductible health plans beautifully',
      'No restriction on how you spend your cash benefit payouts',
      'Covers sports injuries, home accidents, and motor vehicle incidents'
    ],
    ctaText: 'Add Accident Coverage',
    iconName: 'Activity',
    priority: 'Medium',
    expansionIdeas: 'Partner with local youth sports leagues and marine recreation programs.'
  },
  {
    id: 'hospital-indemnity',
    name: 'Hospital Indemnity Cover',
    category: 'insurance',
    headline: 'Cash Benefits for Inpatient Hospital Stays',
    shortDescription: 'Hospital stays are incredibly expensive. This program pays you a fixed cash benefit for every single day you are confined to a hospital, starting on day one.',
    benefits: [
      'Lump-sum admission benefit plus daily confinement payouts',
      'No network restrictions—benefits are paid regardless of which hospital you choose',
      'Includes specialized intensive care unit (ICU) bonus multipliers',
      'Pre-existing condition waivers apply for established association cohorts'
    ],
    ctaText: 'Protect Against Hospital Bills',
    iconName: 'Building2',
    priority: 'Medium',
    expansionIdeas: 'Tailor specifically as a maternity support plan for self-employed mothers.'
  },
  {
    id: 'long-term-care',
    name: 'Comprehensive Long-Term Care Insurance',
    category: 'insurance',
    headline: 'Protect Your Lifetime Savings from Nursing Care Costs',
    shortDescription: 'Plan ahead for your golden years. This specialized long-term care policy ensures you can afford high-quality assisted living, home nursing, and adult day care services.',
    benefits: [
      'Insulates your retirement accounts and home equity from being drained by nursing costs',
      'Covers professional home health aides, physical therapy, and home modifications',
      'Features compound inflation protection options to keep pace with healthcare costs',
      'Enables you to receive high-quality care in the comfort of your own home'
    ],
    ctaText: 'Consult LTC Specialist',
    iconName: 'Users',
    priority: 'Low',
    expansionIdeas: 'Develop strategic partnerships with regional estate planning law firms.'
  },
  {
    id: 'business-continuation',
    name: 'Business Continuation Planning',
    category: 'business',
    headline: 'Keep Your Business Running Even in a Partner Emergency',
    shortDescription: 'In coordination with legal and financial architects, establish custom corporate agreements and funding structures to ensure your business remains operational if a co-owner departs.',
    benefits: [
      'Custom drafting and funding of standard Key Person and Buy-Sell agreements',
      'Ensures your business survives the sudden death, disability, or exit of a partner',
      'Protects minority shareholders and provides clear liquidity rules for heirs',
      'Saves tens of thousands of dollars in legal fees through pre-negotiated legal suites'
    ],
    ctaText: 'Protect Your Partnership',
    iconName: 'CalendarRange',
    priority: 'High',
    expansionIdeas: 'Provide automated buy-sell agreement review templates on the portal.'
  },
  {
    id: 'succession-planning',
    name: 'Business Succession Planning',
    category: 'business',
    headline: 'Engineer a High-Value, Tax-Efficient Business Exit',
    shortDescription: 'Design your ultimate exit strategy. Whether passing the business to children, selling to partners, or executing a strategic acquisition, we structure the transfer to minimize taxes.',
    benefits: [
      'Comprehensive valuations and step-by-step estate transition architectures',
      'Structures sales to minimize capital gains and corporate transfer taxes',
      'Helps prepare management teams for seamless operational handover',
      'Includes Employee Stock Ownership Plan (ESOP) feasibility studies'
    ],
    ctaText: 'Design Exit Strategy',
    iconName: 'Key',
    priority: 'Medium',
    expansionIdeas: 'Partner with regional mergers and acquisitions (M&A) brokerage firms.'
  }
];
