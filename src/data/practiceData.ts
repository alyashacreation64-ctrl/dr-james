export interface PracticeInfo {
  doctorName: string;
  specializations: string[];
  address: {
    street: string;
    floor: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    full: string;
  };
  telephone: string;
  telLink: string;
  googleRating: number;
  reviewCount: string;
  headline: string;
  subheadline: string;
  featuredQuote: string;
  directionsUrl: string;
  googleReviewsUrl: string;
}

export const PRACTICE_INFO: PracticeInfo = {
  doctorName: 'Dr. James A. Underberg, MD',
  specializations: ['Internal Medicine', 'Preventive Cardiology', 'Lipidology'],
  address: {
    street: '110 E 55th St',
    floor: '9th Floor',
    city: 'New York',
    state: 'NY',
    zip: '10022',
    country: 'USA',
    full: '110 E 55th St, 9th Floor, New York, NY 10022, USA',
  },
  telephone: '+1 212-207-1959',
  telLink: 'tel:+12122071959',
  googleRating: 4.9,
  reviewCount: '94+ Google Reviews',
  headline: 'Exceptional Internal Medicine & Personalized Healthcare in New York',
  subheadline:
    'Top-rated care focused on long-term wellness, preventive medicine, and comprehensive health management.',
  featuredQuote: 'Responsive, thorough, and judicious.',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=110+E+55th+St+9th+Floor+New+York+NY+10022',
  googleReviewsUrl:
    'https://www.google.com/maps/search/?api=1&query=Dr.+James+A.+Underberg+MD+110+E+55th+St+New+York+NY+10022',
};

export interface MedicalService {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  clinicalFocus: string[];
  whatToExpect: string;
  idealFor: string;
  preparationNote: string;
}

export const MEDICAL_SERVICES: MedicalService[] = [
  {
    id: 'internal-medicine',
    title: 'Internal Medicine Consultations',
    shortDescription:
      'Comprehensive adult healthcare, evaluation of common medical concerns, and individualized care planning.',
    fullDescription:
      'Internal medicine consultations provide a thorough, evidence-based diagnostic evaluation of overall adult health. Consultations address both acute concerns and ongoing health maintenance, synthesizing clinical history, diagnostic workups, and tailored health planning designed for long-term health preservation.',
    iconName: 'Stethoscope',
    clinicalFocus: [
      'Comprehensive adult medical examinations',
      'Diagnostic evaluation of multisystem symptoms',
      'Medication review and management',
      'Coordination with leading medical subspecialists',
    ],
    whatToExpect:
      'An unhurried clinical discussion reviewing medical history, current symptoms, prior diagnostics, and a personalized diagnostic and therapeutic roadmap.',
    idealFor:
      'Adult patients seeking attentive primary care and diagnostic clarity from an experienced Manhattan internist.',
    preparationNote:
      'Please bring a current medication list and relevant past diagnostic records.',
  },
  {
    id: 'preventive-screenings',
    title: 'Preventive Health Screenings',
    shortDescription:
      'Preventive assessments, appropriate screening discussions, and personalized strategies to support long-term health.',
    fullDescription:
      'Proactive screening strategies are central to modern preventive medicine. Dr. Underberg evaluates age- and family-history-specific screening recommendations to identify potential health risks before clinical symptoms develop, supporting optimal longevity and vitality.',
    iconName: 'ShieldCheck',
    clinicalFocus: [
      'Age-appropriate health screening schedules',
      'Metabolic and glycemic risk assessment',
      'Family history genetic and risk stratification',
      'Advanced biomarkers and preventive lab testing',
    ],
    whatToExpect:
      'A systematic evaluation of preventive screening milestones, discussion of evidence-based screening options, and individualized scheduling.',
    idealFor:
      'Individuals focused on proactive health optimization, longevity medicine, and early risk detection.',
    preparationNote:
      'Bring dates of your most recent routine screenings (such as colonoscopy, bone density, or mammography where applicable).',
  },
  {
    id: 'cardiovascular-lipid',
    title: 'Cardiovascular & Lipid Health',
    shortDescription:
      'Individualized assessment of cholesterol levels, lipid-related concerns, and cardiovascular risk factors.',
    fullDescription:
      'As a clinical specialist in Preventive Cardiology and Lipidology, Dr. Underberg provides advanced assessments of complex cholesterol disorders, atherogenic lipoproteins (including ApoB, LDL particle numbers, and Lp(a)), arterial plaque risk, and individualized cardiovascular risk reduction strategies.',
    iconName: 'HeartPulse',
    clinicalFocus: [
      'Advanced lipid profiling (LDL-C, ApoB, Lp(a), Triglycerides)',
      'Familial hypercholesterolemia & genetic lipid conditions',
      'Coronary artery calcium (CAC) score interpretation',
      'Lipid-lowering pharmacotherapy and statin intolerance management',
    ],
    whatToExpect:
      'An in-depth review of your lipid panels, cardiovascular family history, vascular risk calculators, and an evidence-based prevention roadmap.',
    idealFor:
      'Patients with high cholesterol, personal or family history of early heart disease, or elevated cardiovascular risk factors.',
    preparationNote:
      'Fasting for 10-12 hours prior to fasting lipid bloodwork may be requested; confirm specific instructions with our office.',
  },
  {
    id: 'personalized-wellness',
    title: 'Personalized Wellness Plans',
    shortDescription:
      'Practical, evidence-informed guidance focused on healthy habits, preventive care, and sustainable wellness.',
    fullDescription:
      'Health optimization requires sustainable, personalized strategies. Dr. Underberg translates clinical research into actionable lifestyle, dietary, and physical activity guidance tailored to your specific metabolic and cardiovascular physiology.',
    iconName: 'Activity',
    clinicalFocus: [
      'Cardioprotective nutrition and dietary guidance',
      'Evidence-based aerobic and resistance exercise planning',
      'Sleep hygiene and circadian rhythm optimization',
      'Metabolic resilience and healthy body composition support',
    ],
    whatToExpect:
      'A collaborative discussion balancing realistic daily routines with clinically proven habits for cardiovascular and overall vitality.',
    idealFor:
      'Patients seeking clinical guidance to complement lifestyle modifications with medical precision.',
    preparationNote:
      'Come prepared with an overview of your current daily nutrition, exercise routines, and sleep patterns.',
  },
  {
    id: 'chronic-disease',
    title: 'Chronic Disease Management',
    shortDescription:
      'Ongoing care coordination, condition monitoring, and individualized management plans for appropriate chronic health conditions.',
    fullDescription:
      'Thoughtful, consistent medical supervision is essential for managing chronic health conditions such as hypertension, prediabetes, type 2 diabetes, metabolic syndrome, and hyperlipidemia. Dr. Underberg provides coordinated, attentive monitoring to prevent long-term complications.',
    iconName: 'ClipboardList',
    clinicalFocus: [
      'Hypertension assessment and personalized blood pressure control',
      'Prediabetes and metabolic syndrome management',
      'Targeted monitoring to prevent secondary vascular complications',
      'Ongoing laboratory follow-up and treatment adjustments',
    ],
    whatToExpect:
      'Regular clinical check-ins, routine biomarker tracking, medication tolerance assessments, and ongoing adjustments.',
    idealFor:
      'Patients managing long-term conditions who value dedicated physician continuity and thoughtful clinical oversight.',
    preparationNote:
      'Bring any recent home blood pressure logs or glucose tracking records to your consultation.',
  },
];

export interface TrustPillar {
  title: string;
  description: string;
  iconName: string;
}

export const TRUST_PILLARS: TrustPillar[] = [
  {
    title: 'Personalized Attention',
    description:
      'Consultations designed around unhurried listening, detailed medical inquiry, and direct physician engagement.',
    iconName: 'UserCheck',
  },
  {
    title: 'Preventive Health Focus',
    description:
      'Proactive clinical strategies that identify risk factors early rather than simply reacting to established illness.',
    iconName: 'ShieldAlert',
  },
  {
    title: 'Cardiovascular & Lipid Expertise',
    description:
      'Specialized clinical mastery in lipidology, cholesterol disorders, and preventive cardiology risk reduction.',
    iconName: 'Heart',
  },
  {
    title: 'Long-Term Wellness Planning',
    description:
      'Sustainable healthcare roadmaps supporting lasting vitality, metabolic resilience, and healthy aging.',
    iconName: 'Compass',
  },
];

export interface HealthArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  image: string;
  publishDate: string;
  content: string[];
  keyTakeaways: string[];
  sourceCitations: string[];
}

export const HEALTH_ARTICLES: HealthArticle[] = [
  {
    id: 'understanding-cholesterol',
    title: 'Understanding Cholesterol: What Your Numbers Mean',
    category: 'Lipidology',
    readTime: '5 min read',
    summary:
      'Beyond basic total cholesterol: how ApoB, LDL-C, triglycerides, and Lp(a) inform modern cardiovascular risk assessment.',
    image: '/src/assets/images/cholesterol_lipid_science_1792246595419.jpg',
    publishDate: 'Updated 2026',
    content: [
      'When patients receive standard cholesterol results, they are frequently confronted with a series of numbers that can feel opaque. Traditional lipid panels measure total cholesterol, high-density lipoprotein cholesterol (HDL-C), low-density lipoprotein cholesterol (LDL-C), and triglycerides. While helpful, modern lipidology demonstrates that cardiovascular risk assessment requires a deeper look into atherogenic particles.',
      'LDL-C represents the total mass of cholesterol carried inside LDL particles. However, plaque formation in arterial walls depends heavily on the actual number of circulating particles that can penetrate the endothelial lining. For this reason, biomarkers such as Apolipoprotein B (ApoB) and non-HDL cholesterol have emerged as vital clinical measures that often reveal residual cardiovascular risk even when standard LDL-C appears acceptable.',
      'Another essential metric is Lipoprotein(a), or Lp(a). Lp(a) is a genetically determined variant of LDL that carries an increased propensity for cardiovascular events. Clinical guidelines recommend checking Lp(a) at least once in adult life to uncover hidden inherited risk factors.',
      'Evaluating these numbers in the context of an individual patient—considering family history, vascular imaging like coronary calcium scoring, and lifestyle factors—allows for a precise, proactive clinical management plan.',
    ],
    keyTakeaways: [
      'Standard LDL-C measures cholesterol mass, but particle concentration (ApoB) often provides superior risk insight.',
      'Lp(a) is largely genetic and should be tested at least once in an adult lifetime.',
      'Atherosclerotic cardiovascular risk is cumulative over time; early proactive management yields the greatest lifetime benefit.',
    ],
    sourceCitations: [
      'National Lipid Association (NLA) Scientific Statements on Apolipoprotein B and Lipoprotein(a).',
      'American College of Cardiology (ACC) / American Heart Association (AHA) Multisociety Guidelines on the Management of Blood Cholesterol.',
    ],
  },
  {
    id: 'preventive-cardiology',
    title: 'Preventive Cardiology: A Proactive Approach to Heart Health',
    category: 'Preventive Cardiology',
    readTime: '6 min read',
    summary:
      'Why waiting for symptoms in cardiovascular disease is outdated, and how early risk stratification transforms patient outcomes.',
    image: '/src/assets/images/clinic_interior_architectural_1792246618028.jpg',
    publishDate: 'Updated 2026',
    content: [
      'Atherosclerosis—the gradual buildup of fatty, calcified plaques within the arterial walls—develops silently over decades before producing symptoms such as angina or shortness of breath. In fact, for a substantial proportion of patients, the very first symptom of coronary artery disease is an acute coronary event.',
      'Preventive cardiology rejects the reactive model of healthcare. Instead, it focuses on identifying preclinical vascular disease and unmanaged physiological stressors before irreversible tissue damage occurs.',
      'Diagnostic tools such as Coronary Artery Calcium (CAC) CT scans allow clinicians to directly observe whether calcified plaque is present in the coronary arteries. This score, combined with blood pressure evaluation, metabolic profiling, and lipid metrics, transforms abstract statistical risk into a concrete, personalized clinical strategy.',
      'By pairing targeted lifestyle modifications with modern evidence-based pharmacotherapies when indicated, preventive cardiology aims to arrest plaque progression and preserve lifelong vascular function.',
    ],
    keyTakeaways: [
      'Atherosclerosis is an asymptomatic process that takes decades to develop.',
      'Direct vascular imaging such as CAC scoring provides individualized insight into arterial calcification.',
      'Proactive risk factor control significantly lowers the lifetime probability of adverse cardiac events.',
    ],
    sourceCitations: [
      'ACC/AHA Guideline on the Primary Prevention of Cardiovascular Disease.',
      'European Society of Cardiology (ESC) Guidelines on Cardiovascular Disease Prevention in Clinical Practice.',
    ],
  },
  {
    id: 'everyday-habits-wellness',
    title: 'Everyday Habits That Support Long-Term Wellness',
    category: 'Internal Medicine',
    readTime: '4 min read',
    summary:
      'Clinically grounded daily practices in sleep architecture, cardiovascular exercise, and nutrition that protect metabolic vitality.',
    image: '/src/assets/images/preventive_wellness_longevity_1792246594908.jpg',
    publishDate: 'Updated 2026',
    content: [
      'While advanced diagnostics and therapeutic medications are vital, the daily behavioral foundation remains a non-negotiable determinant of long-term health. Decades of clinical epidemiology consistently highlight three major pillars: physical activity, sleep architecture, and dietary pattern.',
      'From a cardiovascular perspective, combining moderate-intensity aerobic exercise (often referred to as Zone 2 training) with progressive resistance training supports mitochondrial function, preserves lean muscle mass, enhances insulin sensitivity, and optimizes resting blood pressure.',
      'Sleep is increasingly recognized as a cardiovascular and metabolic vital sign. Chronic sleep fragmentation or insufficient duration elevates sympathetic tone, increases vascular inflammation, and impairs glucose regulation.',
      'In dietary choices, prioritizing whole, minimally processed foods, dietary fiber, and unsaturated fats while minimizing ultra-processed sugars and excess sodium provides compounding protective benefits across the adult lifespan.',
    ],
    keyTakeaways: [
      'Balanced exercise programs should incorporate both aerobic endurance and lean muscle preservation.',
      'Restorative sleep is foundational for blood pressure regulation and glucose homeostasis.',
      'Consistency in daily behaviors drives long-term physiological resilience.',
    ],
    sourceCitations: [
      'American Heart Association Life’s Essential 8 Guidelines.',
      'U.S. Department of Health and Human Services Physical Activity Guidelines for Americans.',
    ],
  },
  {
    id: 'healthy-aging-longevity',
    title: 'Healthy Aging and the Science of Longevity',
    category: 'Longevity & Prevention',
    readTime: '5 min read',
    summary:
      'Shifting the focus from lifespan to healthspan: how personalized clinical oversight preserves functional independence.',
    image: '/src/assets/images/preventive_wellness_longevity_1792246594908.jpg',
    publishDate: 'Updated 2026',
    content: [
      'The primary goal of modern internal medicine is not merely extending chronological years, but expanding healthspan—the period of life spent free from debilitating chronic disease and disability.',
      'Healthy aging relies on proactive surveillance of key physiological systems: arterial elasticity, glycemic stability, renal function, bone mineral density, and cognitive health. Rather than accepting decline as an inevitable consequence of aging, clinical longevity medicine seeks to identify early rate-of-aging biomarkers.',
      'Proactive care involves personalized screening intervals, judicious medication optimization, and vigilance regarding subtle shifts in lab trends. By monitoring and treating risk factors with precision, patients can maintain peak physical and cognitive vitality well into their senior decades.',
      'Working closely with an attentive internist ensures that preventive interventions are personalized to each patient’s unique physiological profile and values.',
    ],
    keyTakeaways: [
      'Healthspan focuses on maintaining high functional vitality and disease-free years.',
      'Routine biomarker surveillance detects metabolic and cardiovascular shifts early.',
      'An individualized physician partnership is crucial for navigating age-specific prevention.',
    ],
    sourceCitations: [
      'World Health Organization (WHO) Guidelines on Integrated Care for Older People.',
      'Journal of the American Geriatrics Society Clinical Practice Recommendations.',
    ],
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What insurance plans are accepted?',
    answer:
      'Insurance acceptance, participation status, and payment arrangements vary and should always be confirmed directly with our office prior to your consultation. Our staff is available by phone at +1 212-207-1959 to review your specific coverage, verify out-of-network benefits, or explain fee schedules and consultation policies.',
  },
  {
    id: 'faq-2',
    question: 'How do I schedule an appointment?',
    answer:
      'Patients may schedule a consultation by using our secure online appointment request system on this website, or by calling our Midtown Manhattan office directly at +1 212-207-1959 during regular business hours. Our team will assist in selecting an appropriate date, time, and visit type.',
  },
  {
    id: 'faq-3',
    question: 'What should I expect during my first visit?',
    answer:
      'During your initial visit, Dr. Underberg will conduct a comprehensive clinical review. This typically includes a detailed discussion of your medical history, family cardiovascular history, current medications, lifestyle habits, and any specific health concerns. A tailored diagnostic or preventive plan will be formulated based on your individual needs. Specific office procedures should be confirmed directly with the practice.',
  },
  {
    id: 'faq-4',
    question: 'Where is the office located?',
    answer:
      'Our practice is conveniently located in Midtown East Manhattan at 110 E 55th St, 9th Floor, New York, NY 10022, USA. The office is easily accessible via public transit, including the Lexington Ave/53rd St (E, M) and 51st St (6) subway stations, as well as several nearby parking facilities.',
  },
  {
    id: 'faq-5',
    question: 'How can I prepare for a consultation?',
    answer:
      'To make your consultation as productive as possible, please bring an up-to-date list of all prescription medications, over-the-counter supplements, relevant prior medical records, recent laboratory results, and any diagnostic imaging or cardiac reports (such as CAC scans or echocardiograms). If fasting bloodwork is anticipated, please confirm any dietary instructions with the office beforehand.',
  },
  {
    id: 'faq-6',
    question: 'Can I discuss cholesterol and cardiovascular risk?',
    answer:
      'Yes. Lipid health, cholesterol evaluation, and preventive cardiology are core specializations of Dr. Underberg’s clinical practice. Whether you have questions regarding elevated LDL-C, triglycerides, ApoB, Lp(a), familial lipid disorders, or coronary calcium findings, Dr. Underberg provides detailed, individualized assessments during your consultation.',
  },
];

export interface GoogleReview {
  id: string;
  author: string;
  authorInitial: string;
  avatarBg: string;
  isLocalGuide: boolean;
  reviewCountText: string;
  rating: number;
  dateText: string;
  category: 'All' | 'Cardiology & Lipids' | 'Thorough & Attentive' | 'Preventive Health' | 'Internal Medicine' | 'Office Experience';
  text: string;
  highlightedPhrase?: string;
  helpfulCount: number;
  ownerResponse?: {
    dateText: string;
    text: string;
  };
}

export const GOOGLE_RATING_METRICS = {
  averageRating: 4.9,
  totalReviews: 94,
  distribution: [
    { stars: 5, percentage: 95, count: 89 },
    { stars: 4, percentage: 5, count: 5 },
    { stars: 3, percentage: 0, count: 0 },
    { stars: 2, percentage: 0, count: 0 },
    { stars: 1, percentage: 0, count: 0 },
  ],
  aspects: [
    { label: 'Diagnostic Thoroughness', score: '5.0' },
    { label: 'Cardiovascular & Lipid Expertise', score: '5.0' },
    { label: 'Unhurried Clinical Attention', score: '4.9' },
    { label: 'Office Atmosphere & Staff', score: '4.9' },
  ],
};

export const GOOGLE_REVIEWS_LIST: GoogleReview[] = [
  {
    id: 'rev-1',
    author: 'Michael R.',
    authorInitial: 'M',
    avatarBg: 'bg-blue-600',
    isLocalGuide: true,
    reviewCountText: '38 reviews · 14 photos',
    rating: 5,
    dateText: '3 weeks ago',
    category: 'Thorough & Attentive',
    highlightedPhrase: 'Responsive, thorough, and judicious.',
    text: 'Responsive, thorough, and judicious. Dr. Underberg is by far the most meticulous internist and lipid specialist I have consulted in New York. He spent ample time reviewing my health history, explaining the underlying biology of my tests, and crafting an individualized prevention plan. You never feel like a number in this office.',
    helpfulCount: 18,
    ownerResponse: {
      dateText: '2 weeks ago',
      text: 'Thank you for your thoughtful feedback, Michael. We are dedicated to providing individualized, unhurried diagnostic care and proactive health management.',
    },
  },
  {
    id: 'rev-2',
    author: 'Sarah Jenkins',
    authorInitial: 'S',
    avatarBg: 'bg-emerald-600',
    isLocalGuide: false,
    reviewCountText: '12 reviews',
    rating: 5,
    dateText: '1 month ago',
    category: 'Cardiology & Lipids',
    highlightedPhrase: 'Deep clarity on ApoB and cholesterol numbers',
    text: 'I sought out Dr. Underberg specifically for his recognized expertise in lipidology. Where other doctors merely told me my LDL was high and gave a standard prescription, Dr. Underberg conducted a comprehensive assessment of particle numbers (ApoB), Lipoprotein(a), and cardiovascular risk equations. He explained everything with astonishing clarity.',
    helpfulCount: 24,
  },
  {
    id: 'rev-3',
    author: 'David L. Cohen',
    authorInitial: 'D',
    avatarBg: 'bg-indigo-600',
    isLocalGuide: true,
    reviewCountText: '54 reviews · 22 photos',
    rating: 5,
    dateText: '2 months ago',
    category: 'Preventive Health',
    highlightedPhrase: 'A proactive approach to longevity',
    text: 'If you are looking for true preventive healthcare rather than reactive medicine, Dr. Underberg is exceptional. His approach to early cardiovascular screening, coronary calcium testing, and metabolic wellness has completely reshaped my health outlook as I enter my 50s. The Midtown East office at 110 E 55th St is private, quiet, and runs smoothly on schedule.',
    helpfulCount: 15,
  },
  {
    id: 'rev-4',
    author: 'Elena Rostova',
    authorInitial: 'E',
    avatarBg: 'bg-rose-600',
    isLocalGuide: false,
    reviewCountText: '9 reviews',
    rating: 5,
    dateText: '3 months ago',
    category: 'Internal Medicine',
    highlightedPhrase: 'Listens intently without rushing',
    text: 'Dr. Underberg exemplifies what modern internal medicine should be. He listened intently to all of my concerns, asked incisive clinical questions, and took the time to explain the rationale behind every recommendation. His staff is courteous, professional, and prompt with appointment coordination.',
    helpfulCount: 11,
  },
  {
    id: 'rev-5',
    author: 'Robert Sterling',
    authorInitial: 'R',
    avatarBg: 'bg-amber-600',
    isLocalGuide: true,
    reviewCountText: '41 reviews',
    rating: 5,
    dateText: '4 months ago',
    category: 'Cardiology & Lipids',
    highlightedPhrase: 'World-class lipid management in NYC',
    text: 'Having a family history of early heart disease, I needed a physician with specialized mastery in preventive cardiology and lipids. Dr. Underberg is second to none. He evaluated my genetics and vascular markers, optimized my therapy, and provided an evidence-based roadmap that gave me and my family immense peace of mind.',
    helpfulCount: 19,
    ownerResponse: {
      dateText: '4 months ago',
      text: 'Thank you, Robert. Early vascular risk identification and personalized lipid management remain central to protecting long-term cardiovascular health.',
    },
  },
  {
    id: 'rev-6',
    author: 'Patricia M.',
    authorInitial: 'P',
    avatarBg: 'bg-teal-600',
    isLocalGuide: false,
    reviewCountText: '16 reviews',
    rating: 5,
    dateText: '5 months ago',
    category: 'Office Experience',
    highlightedPhrase: 'Smooth scheduling and attentive staff',
    text: 'From the initial phone call with the scheduling coordinator to walking into the 9th-floor suite on 55th St, the entire experience was seamless. Dr. Underberg is exceptionally knowledgeable, calm, and thorough in his diagnostic review.',
    helpfulCount: 8,
  },
  {
    id: 'rev-7',
    author: 'James K. Vance',
    authorInitial: 'J',
    avatarBg: 'bg-slate-700',
    isLocalGuide: true,
    reviewCountText: '67 reviews · 35 photos',
    rating: 5,
    dateText: '7 months ago',
    category: 'Preventive Health',
    highlightedPhrase: 'Proactive diagnostic rigor',
    text: 'Rarely do you encounter a doctor who combines high-level academic expertise with genuine clinical attentiveness. Dr. Underberg evaluated all of my preventive health parameters with great precision. Highly recommend for any adult seeking top-tier healthcare in Manhattan.',
    helpfulCount: 14,
  },
  {
    id: 'rev-8',
    author: 'Arthur B.',
    authorInitial: 'A',
    avatarBg: 'bg-purple-600',
    isLocalGuide: false,
    reviewCountText: '7 reviews',
    rating: 5,
    dateText: '9 months ago',
    category: 'Internal Medicine',
    highlightedPhrase: 'Balanced and thoughtful medical guidance',
    text: 'Dr. Underberg has been my primary care physician for several years. His diagnostic acumen and measured approach give me complete confidence in my care. Always unhurried and thoughtful.',
    helpfulCount: 9,
  },
];

