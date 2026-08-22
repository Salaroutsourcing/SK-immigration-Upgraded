/**
 * SK Immigration Services — Site Configuration
 * Edit this file to update brand details, analytics IDs, and contact info.
 */

export const SITE = {
  name: 'SK Immigration Services',
  legalName: 'SK Immigration Services (SMC-Private) Limited',
  tagline: 'Study, Work & Live Abroad — 100% Honest Guidance',
  description:
    'SK Immigration Services (SK Consultant) — Pakistan\'s trusted SECP-registered immigration consultancy for study visas, work permits, visit visas, Germany Ausbildung, Saudi Arabia work visa, and document attestation. Free consultation. CUIN 0304985.',
  url: 'https://immigration.salaroutsourcing.com',
  ogImage: '/assets/logo.png',
  logo: '/assets/logo.png',
};

export const CONTACT = {
  phone: '+923045999859',
  phoneFormatted: '+92 304 5999859',
  email: 'Services@salaroutsourcing.com',
  whatsappLink:
    'https://wa.me/923045999859?text=Hi%20SK%20Immigration%2C%20I%20need%20expert%20visa%20guidance.',
  whatsappB2BLink:
    'https://wa.me/923045999859?text=Hi%20SK%20Immigration%2C%20we%20want%20to%20hire%20manpower%20from%20Pakistan.',
  address: {
    street: 'Office No. 10, Alfazal Plaza 64C, Satellite Town',
    city: 'Rawalpindi',
    region: 'Punjab',
    postalCode: '46000',
    country: 'PK',
    full: 'Office No. 10, Alfazal Plaza 64C, Satellite Town, Rawalpindi, Punjab, Pakistan',
  },
  geo: {
    latitude: 33.6261,
    longitude: 73.0713,
  },
  hours: 'Mon–Sat: 10:00 AM – 7:00 PM',
};

export const BUSINESS = {
  cuin: '0304985',
  secpVerifyUrl: 'https://leap.secp.gov.pk/#/verify-company-info',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=SK+Immigration+Services+Alfazal+Plaza+Satellite+Town+Rawalpindi',
  googleReviewsUrl: 'https://share.google/hQzlV2rZbYtUzYZ9n',
  googleKgUrl: 'https://www.google.com/search?kgmid=/g/11zfnqjfgx',
};

export const SOCIAL = {
  instagram: 'https://www.instagram.com/skimmigrationonservices/',
  tiktok: 'https://www.tiktok.com/@skimmigrationservices/',
  facebook: 'https://www.facebook.com/skimmigrationservice',
  linkedin: 'https://www.linkedin.com/company/sk-immigration-service/',
  youtube: 'https://www.youtube.com/@SKImmigrationtips',
};

/** Google Tag Manager & Analytics — set to empty string to disable */
export const ANALYTICS = {
  gtmId: 'GTM-NFWDQ5XB',
  ga4Id: 'G-D0559366D6',
  /** Google AdSense publisher ID — leave empty to disable ads */
  adsenseId: 'ca-pub-5113459275916426',
};

export const NAVIGATION = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services/',
    children: [
      { label: 'Study Visa', href: '/services/#study-visa' },
      { label: 'Work Permit & Ausbildung', href: '/services/#work-permit' },
      { label: 'Saudi Work Visa', href: '/services/#saudi-visa' },
      { label: 'Visit Visa', href: '/services/#visit-visa' },
      { label: 'Document Attestation', href: '/services/#attestation' },
      { label: 'Visa Appointments', href: '/services/#appointments' },
    ],
  },
  { label: 'Guides', href: '/guides/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'About & Trust', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const FOOTER_LINKS = {
  services: [
    { label: 'Study Visa', href: '/services/#study-visa' },
    { label: 'Work Permit & Ausbildung', href: '/services/#work-permit' },
    { label: 'Saudi Work Visa Processing', href: '/services/#saudi-visa' },
    { label: 'Visit & Tourist Visa', href: '/services/#visit-visa' },
    { label: 'Document Attestation', href: '/services/#attestation' },
    { label: 'Visa Appointments', href: '/services/#appointments' },
  ],
  resources: [
    { label: 'Country Guides', href: '/guides/' },
    { label: 'Blog & Insights', href: '/blog/' },
    { label: 'About SK Immigration', href: '/about/' },
    { label: 'Verify SECP License', href: BUSINESS.secpVerifyUrl },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy/' },
    { label: 'Terms of Service', href: '/terms/' },
    { label: 'Contact Us', href: '/contact/' },
  ],
};
