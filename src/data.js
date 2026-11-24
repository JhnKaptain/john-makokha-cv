// Files in public/ are served under the site's folder (/john-makokha-cv/),
// so paths are built from BASE_URL instead of starting with "/".
const asset = path => import.meta.env.BASE_URL + path;

export const profile = {
  name: "JOHN MAKOKHA",
  title: "Electrical & Electronic Engineer",
  phone: "+254 741 924 396",
  email: "engineermakokha7@gmail.com",
  photo: asset("profile.jpg"),
  cv: asset("John_Makokha_CV.pdf"),      // PDF made from the Word CV
  cvWord: asset("John_Makokha_CV.docx")  // the editable Word version
};

export const summary =
  "A dedicated and skilled Electrical and Electronic Engineer with a strong passion for innovative technology and practical problem-solving. Possessing a solid foundation in circuit design, power systems, embedded systems, and electronic device integration, I am committed to applying my technical expertise to real-world engineering challenges.";

export const education = [
  {
    school: "Technical University of Mombasa",
    degree: "Bachelor of Science in Electrical and Electronic Engineering",
    location: "Mombasa, Kenya",
    logo: asset("logos/tum.png")
  },
  {
    school: "Matunda S.A Secondary School",
    degree: "Kenya Certificate of Secondary Education (KCSE)",
    location: "Kakamega, Kenya",
    logo: asset("logos/matunda.png")
  }
];

export const skills = [
  "Hydraulic systems: rotating head, BOP controls, TDS pumps, power & casing tongs, winches",
  "Generator sets, industrial compressors, mud pumps and mud tank pumps",
  "Electrical installations (residential, commercial, industrial)",
  "Motor control (D.O.L, Star-Delta, Reverse starters)",
  "Power metering: postpaid, prepaid, SME, smart meters",
  "Alarm & security systems (CCTV, fire alarms, access control, electric fences)",
  "Fiber-optic ducting and cable installation",
  "HVAC & appliance servicing",
  "Diagnostic tools: clamp meters, milliammeters, phase testers",
  "MS Office & technical documentation"
];

export const work = [
  {
    // Brief for now; to be expanded from the GDC work report.
    company: "Geothermal Development Company (GDC)",
    role: "Rig Equipment Maintenance",
    period: "2026",
    bullets: [
      "Operated, repaired and maintained rig hydraulic systems: rotating head, BOP control systems, top drive (TDS) hydraulic pumps, power and casing tongs, and winches",
      "Ran, repaired and maintained generator sets and industrial compressor systems",
      "Repaired and maintained mud pumps and mud tank pumps",
      "Repaired, monitored and maintained lighting systems",
      "Kept inventories and maintenance logs, and supported office work"
    ],
    logo: asset("logos/gdc.png")
  },
  {
    company: "Texas Alarms (K) Ltd",
    role: "Electrical Systems Technician",
    period: "Feb 2024 – Mar 2025",
    bullets: [
      "Installed and serviced automatic alarms, fire alarm systems, electric fences, CCTV and access control",
      "Fault diagnosis and DVR upgrades, client training"
    ],
    logo: asset("logos/texas-alarms.png")
  },
  {
    company: "Kenya Power and Lighting Co. Ltd (KPLC)",
    role: "Electrical Engineer Intern",
    period: "Jan – Apr 2023",
    bullets: [
      "Installed and read SME and Smart meters, inspections and accuracy testing",
      "Anti-tampering measures and troubleshooting"
    ],
    logo: asset("logos/kplc.png")
  },
  {
    company: "Genergy Electrical Ltd",
    role: "Electrical Engineer Intern",
    period: "Jan – Mar 2022",
    bullets: [
      "Electrical installations; motor control; HVAC servicing; lamp repairs"
    ],
    logo: asset("logos/genergy.png")
  },
  {
    company: "BOCOM Fibre Ltd",
    role: "Fiber Optic Technician Assistant",
    period: "May – Dec 2020",
    bullets: ["Ducted and installed network cables; assisted in fiber testing"],
    logo: asset("logos/bocom.png")
  },
  {
    company: "County Government of Mombasa",
    role: "Electrical Engineer Intern",
    period: "May – Jul 2019",
    bullets: ["Diagnosed street lighting faults; installed wiring systems"],
    logo: asset("logos/mombasa-county.png")
  }
];

export const referees = [
  {
    name: "Eric Rop",
    role: "Electrician, Geothermal Development Company (GDC)",
    phone: "0722978552"
  },
  {
    name: "Diana Magodawa",
    role: "Engineer, Equipment Maintenance, Geothermal Development Company (GDC)",
    phone: "0700719419"
  },
  {
    name: "Thomas Waweu",
    role: "Texas Alarms (K) Ltd",
    phone: "0757424808"
  },
  {
    name: "John Mboko",
    role: "Supervisor Kenya Power and Lighting Co.",
    phone: "0722790204"
  },
  {
    name: "Richard Tande",
    role: "Genergy Electrical Ltd",
    phone: "0714570616"
  },
  {
    name: "Brian Okida",
    role: "Supervisor BOCOM Fibre Limited",
    phone: "0799695113"
  }
];
