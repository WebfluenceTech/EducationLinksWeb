export const COMPANY = {
  name: 'Education Links',
  tagline: 'Adding to your future',
  established: 2009,
  whatsapp: '+923004895357',
  email: 'info@educationlinkspk.com',
  website: 'educationlinkspk.com',
  social: {
    facebook: 'https://www.facebook.com/educationlinkspk',
    instagram: 'https://www.instagram.com/educationlinkspk/',
    tiktok: 'https://tiktok.com/@EducationLinks-Pakistan',
    youtube: 'https://youtube.com/@EducationLinks-Pakistan',
  },
};

export const OFFICES = [

  {
    name: 'Head Office, Lahore',
    address: 'Office No. 606, 6th Floor, Siddique Trade Center, Main Boulevard, Block H Gulberg III, Lahore',
    mapUrl: 'https://maps.app.goo.gl/hT5WXXKwPFDE9tqA9',
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.7378287218658!2d74.35045217621611!3d31.53135984659796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919059ef03d848f%3A0xe2c6829d2767d189!2sEducation%20Links!5e0!3m2!1sen!2s!4v1776949598525!5m2!1sen!2s',
  },

  {
    name: 'Sialkot Branch',
    address: 'Jawad Centre, Office C-11, Second Floor, Defence Road, Sialkot',
    mapUrl: 'https://maps.app.goo.gl/nkpsyQjkwW2Xaa7R9',
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.1626181905067!2d74.49872417624411!3d32.49508249833997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eeb7014539879%3A0x4cd1850b753c178a!2sEducation%20Links%20Sialkot%20Branch!5e0!3m2!1sen!2s!4v1776949624657!5m2!1sen!2s',
  },

];

export const DESTINATIONS = [
  { name: 'Ireland', flag: '\u{1F1EE}\u{1F1EA}', region: 'Europe', universities: 11 },
  { name: 'Finland', flag: '\u{1F1EB}\u{1F1EE}', region: 'Europe', universities: 13 },
  { name: 'Sweden', flag: '\u{1F1F8}\u{1F1EA}', region: 'Europe', universities: 9 },
  { name: 'Belgium', flag: '\u{1F1E7}\u{1F1EA}', region: 'Europe', universities: 4 },
  { name: 'Denmark', flag: '\u{1F1E9}\u{1F1F0}', region: 'Europe', universities: 3 },
  { name: 'Cyprus', flag: '\u{1F1E8}\u{1F1FE}', region: 'Europe', universities: 4 },
  { name: 'Dubai', flag: '\u{1F1E6}\u{1F1EA}', region: 'Middle East', universities: 2 },
  { name: 'South Korea', flag: '\u{1F1F0}\u{1F1F7}', region: 'Asia', universities: 4 },
];

export const DESTINATION_IMAGES: Record<string, string> = {
  Ireland:       'https://images.pexels.com/photos/2382681/pexels-photo-2382681.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
  Finland:       'https://images.pexels.com/photos/1544376/pexels-photo-1544376.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
  Sweden:        'https://images.pexels.com/photos/1534411/pexels-photo-1534411.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
  Belgium:       'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
  Denmark:       'https://images.pexels.com/photos/416024/pexels-photo-416024.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
  Cyprus:        'https://images.pexels.com/photos/2949132/pexels-photo-2949132.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
  Dubai:         'https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
  'South Korea': 'https://images.pexels.com/photos/373290/pexels-photo-373290.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
};

export const TESTIMONIALS = [
  {
    name: 'Ayesha Khan',
    destination: 'Australia',
    quote: 'Education Links guided me every step of the way, from choosing the right university to securing my visa. I am now studying at a top university in Australia and living my dream!',
    rating: 5,
  },
  {
    name: 'Ali Raza',
    destination: 'United Kingdom',
    quote: 'The team at Education Links found the best program within my budget. Their expertise and dedication helped me pursue my Master\'s degree in the UK. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Sara Malik',
    destination: 'Canada',
    quote: 'What seemed like an overwhelming process became smooth and manageable with Education Links. I am now enrolled at a top Canadian university thanks to their incredible support.',
    rating: 5,
  },
];

export const FEATURED_UNIVERSITIES = [
  { name: 'University College Dublin', domain: 'ucd.ie' },
  { name: 'Dublin City University', domain: 'dcu.ie', logoUrl: 'https://www.dcu.ie/sites/default/files/dcu_logo_web_0.png' },
  { name: 'Metropolia University of Applied Sciences', domain: 'metropolia.fi', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Metropolia-logo.svg' },
  { name: 'LUT University', domain: 'lut.fi', logoUrl: 'https://www.freelogovectors.net/wp-content/uploads/2021/04/lut-university-logo-freelogovectors.net_.png' },
  { name: 'University of Turku', domain: 'utu.fi' },
  { name: 'Halmstad University', domain: 'hh.se', logoUrl: 'https://www.hh.se/images/18.4ad3d9ee1656d0f05ef643a3/1550842090193/hh-logo.svg' },
  { name: 'University West', domain: 'hv.se', logoUrl: 'https://www.hv.se/assets/img/framework/hv-logo-small-new.png' },
  { name: 'Uppsala Universitet', domain: 'uu.se', logoUrl: 'https://www.uu.se/images/18.17dda5f1791cdbd287d9b55/1622452923523/uu-logo-red.svg' },
  { name: 'University of Borås', domain: 'hb.se', logoUrl: 'https://www.hb.se/globalassets/vektorbilder/logotyper-desktop/hb_logo.png' },
  { name: 'Neapolis University Pafos', domain: 'nup.ac.cy' },
];

export const PARTNER_UNIVERSITIES = [
  // Ireland
  { name: 'National College of Ireland', domain: 'ncirl.ie', logoUrl: 'https://www.ncirl.ie/Portals/_default/Skins/NCIRL/Images/logo-NCI.png' },
  { name: 'Dublin City University', domain: 'dcu.ie', logoUrl: 'https://www.dcu.ie/sites/default/files/dcu_logo_web_0.png' },
  { name: 'University College Dublin', domain: 'ucd.ie' },
  { name: 'Dublin Business School', domain: 'dbs.ie' },
  { name: 'TU Dublin', domain: 'tudublin.ie', logoUrl: 'https://www.tudublin.ie/media/images/TUDublin-Email-182x100.png' },
  { name: 'Atlantic Technological University', domain: 'atu.ie' },
  { name: 'Griffith College', domain: 'griffith.ie' },
  { name: 'TUS – Technological University of the Shannon', domain: 'tus.ie' },
  { name: 'Independent College Dublin', domain: 'independentcollege.ie', logoUrl: 'https://www.educationinireland.com/resource/blob/176718/b8adc23e4d5552b05c9072bb08e61bd6/logo-data.png' },
  { name: 'IBDI', domain: 'ibdi.ie', logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBzf4TzmBF_NSH_IoqOO9NEHJBLneFuXF3_qsVk6MMow&s=10' },
  { name: 'University College Cork', domain: 'ucc.ie' },
  // South Korea
  { name: 'Kangwon National University', domain: 'kangwon.ac.kr' },
  { name: 'Inha University', domain: 'inha.ac.kr' },
  { name: 'Catholic Kwandong University', domain: 'cku.ac.kr' },
  { name: 'Kyungdong University', domain: 'kduniv.ac.kr' },
  // Finland
  { name: 'Metropolia University of Applied Sciences', domain: 'metropolia.fi', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Metropolia-logo.svg' },
  { name: 'University of Vaasa', domain: 'uwasa.fi' },
  { name: 'Karelia University of Applied Sciences', domain: 'karelia.fi' },
  { name: 'LAB University of Applied Sciences', domain: 'lab.fi' },
  { name: 'Turku University of Applied Sciences', domain: 'turkuamk.fi' },
  { name: 'University of Turku', domain: 'utu.fi' },
  { name: 'LUT University', domain: 'lut.fi', logoUrl: 'https://www.freelogovectors.net/wp-content/uploads/2021/04/lut-university-logo-freelogovectors.net_.png' },
  { name: 'XAMK – South-Eastern Finland UAS', domain: 'xamk.fi', logoUrl: 'https://www.xamk.fi/app/uploads/sites/2/2024/02/xamklogo_tiivis-320x126.png' },
  { name: 'SEAMK – Seinäjoki UAS', domain: 'seamk.fi' },
  { name: 'SAMK – Satakunta UAS', domain: 'samk.fi' },
  { name: 'Tampere University', domain: 'tuni.fi' },
  { name: 'University of Oulu', domain: 'oulu.fi' },
  { name: 'Helsingin yliopisto', domain: 'helsinki.fi', logoUrl: 'https://cdn.worldvectorlogo.com/logos/university-of-helsinki-1.svg' },
  // Denmark
  { name: 'University of Copenhagen', domain: 'ku.dk' },
  { name: 'University of Southern Denmark', domain: 'sdu.dk', logoUrl: 'https://sdunet.dk/-/media/sdunet/billeder/servicesider/kommunikation/2025/sdu-logo-730x250.png' },
  { name: 'Technical University of Denmark', domain: 'dtu.dk', logoUrl: 'https://www.freelogovectors.net/wp-content/uploads/2019/01/dtu-logo.png' },
  // Sweden
  { name: 'University West', domain: 'hv.se', logoUrl: 'https://www.hv.se/assets/img/framework/hv-logo-small-new.png' },
  { name: 'Blekinge Institute of Technology', domain: 'bth.se', logoUrl: 'https://www.thenaturalstep.de/wp-content/uploads/partner-logo-Blekinge-BTH.jpg' },
  { name: 'University of Skövde', domain: 'his.se', logoUrl: 'https://www.interaliamag.org/wp-content/uploads/2017/03/University-of-Skovde-logo.jpg' },
  { name: 'Halmstad University', domain: 'hh.se', logoUrl: 'https://www.hh.se/images/18.4ad3d9ee1656d0f05ef643a3/1550842090193/hh-logo.svg' },
  { name: 'Uppsala Universitet', domain: 'uu.se', logoUrl: 'https://www.uu.se/images/18.17dda5f1791cdbd287d9b55/1622452923523/uu-logo-red.svg' },
  { name: 'Swedish University of Agricultural Sciences', domain: 'slu.se', logoUrl: 'https://www.freelogovectors.net/wp-content/uploads/2021/04/swedish-university-of-agricultural-sciences-logo-freelogovectors.net_.png' },
  { name: 'Linnaeus University', domain: 'lnu.se', logoUrl: 'https://imes.vse.cz/wp-content/uploads/2017/09/linnaeus-university-logo.png' },
  { name: 'University of Borås', domain: 'hb.se', logoUrl: 'https://www.hb.se/globalassets/vektorbilder/logotyper-desktop/hb_logo.png' },
  { name: 'Luleå Tekniska Universitet', domain: 'ltu.se', logoUrl: 'https://www.ltu.se/images/18.1d2806cb1877920d9533733/1689843491541/LTU-logo.svg' },
  // Belgium
  { name: 'UCLL University of Applied Sciences', domain: 'ucll.be' },
  { name: 'Thomas More University of Applied Sciences', domain: 'thomasmore.be' },
  { name: 'KdG University of Applied Sciences and Arts', domain: 'kdg.be' },
  { name: 'UBI Business School', domain: 'ubi.edu' },
  // Cyprus
  { name: 'Neapolis University Pafos', domain: 'nup.ac.cy' },
  { name: 'UCLan Cyprus', domain: 'uclancyprus.ac.cy' },
  { name: 'Cyprus International University', domain: 'ciu.edu.tr' },
  { name: 'American University of Cyprus', domain: 'aucy.ac.cy', logoUrl: 'https://aucy.ac.cy/images/AUCY_logo.png' },
  // Dubai
  { name: 'Rochester Institute of Technology Dubai', domain: 'ritdubai.ae', logoUrl: 'https://logowik.com/content/uploads/images/rit-rochester-institute-of-technology-dubai8826.logowik.com.webp' },
  { name: 'Middlesex University Dubai', domain: 'mdx.ac.ae' },
];

export const UNIVERSITIES_BY_COUNTRY: Record<string, { name: string; domain: string; logoUrl?: string }[]> = {
  Ireland: [
    { name: 'National College of Ireland', domain: 'ncirl.ie', logoUrl: 'https://www.ncirl.ie/Portals/_default/Skins/NCIRL/Images/logo-NCI.png' },
    { name: 'Dublin City University', domain: 'dcu.ie', logoUrl: 'https://www.dcu.ie/sites/default/files/dcu_logo_web_0.png' },
    { name: 'University College Dublin', domain: 'ucd.ie' },
    { name: 'Dublin Business School', domain: 'dbs.ie' },
    { name: 'TU Dublin', domain: 'tudublin.ie', logoUrl: 'https://www.tudublin.ie/media/images/TUDublin-Email-182x100.png' },
    { name: 'Atlantic Technological University', domain: 'atu.ie' },
    { name: 'Griffith College', domain: 'griffith.ie' },
    { name: 'TUS – Technological University of the Shannon', domain: 'tus.ie' },
    { name: 'Independent College Dublin', domain: 'independentcollege.ie', logoUrl: 'https://www.educationinireland.com/resource/blob/176718/b8adc23e4d5552b05c9072bb08e61bd6/logo-data.png' },
    { name: 'IBDI', domain: 'ibdi.ie', logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBzf4TzmBF_NSH_IoqOO9NEHJBLneFuXF3_qsVk6MMow&s=10' },
    { name: 'University College Cork', domain: 'ucc.ie' },
  ],
  'South Korea': [
    { name: 'Kangwon National University', domain: 'kangwon.ac.kr' },
    { name: 'Inha University', domain: 'inha.ac.kr' },
    { name: 'Catholic Kwandong University', domain: 'cku.ac.kr' },
    { name: 'Kyungdong University', domain: 'kduniv.ac.kr' },
  ],
  Finland: [
    { name: 'Metropolia University of Applied Sciences', domain: 'metropolia.fi', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Metropolia-logo.svg' },
    { name: 'University of Vaasa', domain: 'uwasa.fi' },
    { name: 'Karelia University of Applied Sciences', domain: 'karelia.fi' },
    { name: 'LAB University of Applied Sciences', domain: 'lab.fi' },
    { name: 'Turku University of Applied Sciences', domain: 'turkuamk.fi' },
    { name: 'University of Turku', domain: 'utu.fi' },
    { name: 'LUT University', domain: 'lut.fi', logoUrl: 'https://www.freelogovectors.net/wp-content/uploads/2021/04/lut-university-logo-freelogovectors.net_.png' },
    { name: 'XAMK – South-Eastern Finland UAS', domain: 'xamk.fi', logoUrl: 'https://www.xamk.fi/app/uploads/sites/2/2024/02/xamklogo_tiivis-320x126.png' },
    { name: 'SEAMK – Seinäjoki UAS', domain: 'seamk.fi' },
    { name: 'SAMK – Satakunta UAS', domain: 'samk.fi' },
    { name: 'Tampere University', domain: 'tuni.fi' },
    { name: 'University of Oulu', domain: 'oulu.fi' },
    { name: 'Helsingin yliopisto', domain: 'helsinki.fi', logoUrl: 'https://cdn.worldvectorlogo.com/logos/university-of-helsinki-1.svg' },
  ],
  Denmark: [
    { name: 'University of Copenhagen', domain: 'ku.dk' },
    { name: 'University of Southern Denmark', domain: 'sdu.dk', logoUrl: 'https://sdunet.dk/-/media/sdunet/billeder/servicesider/kommunikation/2025/sdu-logo-730x250.png' },
    { name: 'Technical University of Denmark', domain: 'dtu.dk', logoUrl: 'https://www.freelogovectors.net/wp-content/uploads/2019/01/dtu-logo.png' },
  ],
  Sweden: [
    { name: 'University West', domain: 'hv.se', logoUrl: 'https://www.hv.se/assets/img/framework/hv-logo-small-new.png' },
    { name: 'Blekinge Institute of Technology', domain: 'bth.se', logoUrl: 'https://www.thenaturalstep.de/wp-content/uploads/partner-logo-Blekinge-BTH.jpg' },
    { name: 'University of Skövde', domain: 'his.se', logoUrl: 'https://www.interaliamag.org/wp-content/uploads/2017/03/University-of-Skovde-logo.jpg' },
    { name: 'Halmstad University', domain: 'hh.se', logoUrl: 'https://www.hh.se/images/18.4ad3d9ee1656d0f05ef643a3/1550842090193/hh-logo.svg' },
    { name: 'Uppsala Universitet', domain: 'uu.se', logoUrl: 'https://www.uu.se/images/18.17dda5f1791cdbd287d9b55/1622452923523/uu-logo-red.svg' },
    { name: 'Swedish University of Agricultural Sciences', domain: 'slu.se', logoUrl: 'https://www.freelogovectors.net/wp-content/uploads/2021/04/swedish-university-of-agricultural-sciences-logo-freelogovectors.net_.png' },
    { name: 'Linnaeus University', domain: 'lnu.se', logoUrl: 'https://imes.vse.cz/wp-content/uploads/2017/09/linnaeus-university-logo.png' },
    { name: 'University of Borås', domain: 'hb.se', logoUrl: 'https://www.hb.se/globalassets/vektorbilder/logotyper-desktop/hb_logo.png' },
    { name: 'Luleå Tekniska Universitet', domain: 'ltu.se', logoUrl: 'https://www.ltu.se/images/18.1d2806cb1877920d9533733/1689843491541/LTU-logo.svg' },
  ],
  Belgium: [
    { name: 'UCLL University of Applied Sciences', domain: 'ucll.be' },
    { name: 'Thomas More University of Applied Sciences', domain: 'thomasmore.be' },
    { name: 'KdG University of Applied Sciences and Arts', domain: 'kdg.be' },
    { name: 'UBI Business School', domain: 'ubi.edu' },
  ],
  Cyprus: [
    { name: 'Neapolis University Pafos', domain: 'nup.ac.cy' },
    { name: 'UCLan Cyprus', domain: 'uclancyprus.ac.cy' },
    { name: 'Cyprus International University', domain: 'ciu.edu.tr' },
    { name: 'American University of Cyprus', domain: 'aucy.ac.cy', logoUrl: 'https://aucy.ac.cy/images/AUCY_logo.png' },
  ],
  Dubai: [
    { name: 'Rochester Institute of Technology Dubai', domain: 'ritdubai.ae', logoUrl: 'https://logowik.com/content/uploads/images/rit-rochester-institute-of-technology-dubai8826.logowik.com.webp' },
    { name: 'Middlesex University Dubai', domain: 'mdx.ac.ae' },
  ],
};

export const STUDY_FIELDS = [
  'Engineering', 'Business & Management', 'Computer Science & IT',
  'Law', 'Health Sciences', 'Arts & Humanities',
];

export const EDUCATION_LEVELS = [
  'Matric / O-Levels', 'Intermediate / A-Levels', 'Bachelor\'s Degree',
  'Master\'s Degree', 'MPhil', 'Other',
];

export const STUDY_LEVELS = ['Bachelor', 'Master', 'PhD'];

export const INTAKES = ['Fall 2026', 'Spring 2027', 'Fall 2027', 'Spring 2028'];
