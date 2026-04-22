export interface EventCoordinator {
  name: string;
  phone: string;
  email?: string;
}

export interface EventData {
  title: string;
  category: string;
  description: string;
  date: string;
  teamSize: string;
  minTeam: number;
  maxTeam: number;
  image: string;
  rulebookUrl?: string;
  coordinators?: EventCoordinator[];
}

type RawEventData = Omit<EventData, "image">;

const rawEvents: RawEventData[] = [
  {
    title: "GreenHack: Code for Impact",
    category: "Hackathon",
    description: "A 24-hour hackathon focused on sustainability. Build innovative software solutions to tackle global environmental challenges and reduce carbon footprints.",
    date: "May 1–2 (Day 1–2)",
    teamSize: "4–6 members",
    minTeam: 4,
    maxTeam: 6,
    rulebookUrl: "https://drive.google.com/open?id=142oi_QH7YplUB89zhBhLwAFBhqYKahNZ",
    coordinators: [
      { name: "Kritesh Purohit", phone: "+91 7505753608", email: "kriteshpurohit151021@gmail.com" },
      { name: "Ayush Joshi",     phone: "+91 9068883799" },
    ],
  },
  {
    title: "AlgoRhythm",
    category: "DSA Problem Solving",
    description: "Test your analytical thinking and coding speed! Compete against top programmers to solve complex Data Structures and Algorithms problems under strict time constraints.",
    date: "May 2 (Day 2)",
    teamSize: "Solo (1 member)",
    minTeam: 1,
    maxTeam: 1,
    rulebookUrl: "https://drive.google.com/open?id=1LKBdnXY13xYWwVQA23wo-PHkLY26vGU4",
    coordinators: [
      { name: "Utsav Kashyap", phone: "+91 8755051637", email: "utsav.mlr@gmail.com" },
      { name: "Saket Kandari", phone: "+91 7668877496", email: "saket12kandari@gmail.com" },
    ],
  },
  {
    title: "AI Foresight",
    category: "ML Bot + Prediction Model",
    description: "Dive into the world of Machine Learning! Build, train, and optimize ML bots and predictive models to analyze complex datasets and solve real-world industry challenges.",
    date: "May 1 (Day 1)",
    teamSize: "1–4 members",
    minTeam: 1,
    maxTeam: 4,
    rulebookUrl: "https://drive.google.com/open?id=1ZF4XY_Vpgjbzi0VJXedNhoKgoWX2x0IO",
    coordinators: [
      { name: "Jiyanshi Batra", phone: "+91 8445021974", email: "jiyanshibatra753@gmail.com" },
    ],
  },
  {
    title: "BridgeIt",
    category: "Bridge Making",
    description: "Put your civil engineering skills to the test. Design and construct structurally sound, weight-bearing bridges using limited materials and race against time.",
    date: "May 1 (Day 1)",
    teamSize: "4–6 members (branch-wise)",
    minTeam: 4,
    maxTeam: 6,
    rulebookUrl: "https://drive.google.com/open?id=1MMKuKclmf2Fbmn4wBgaV5qub2f9XjgxH",
    coordinators: [
      { name: "Abhay Kumar",           phone: "+91 9325517255", email: "abhaykumar969040@gmail.com" },
      { name: "Yuvraj Singh Makhloga", phone: "+91 7088305386", email: "yuvrajmak4280@gmail.com" },
    ],
  },
  {
    title: "TechScape Hunt",
    category: "Treasure Hunt",
    description: "An exhilarating campus-wide treasure hunt with a tech twist! Decipher intricate technical puzzles, crack codes, and unlock hidden clues to claim the ultimate prize.",
    date: "May 1 (Day 1)",
    teamSize: "2–5 members (same branch)",
    minTeam: 2,
    maxTeam: 5,
    rulebookUrl: "https://drive.google.com/open?id=1Q4S0EX34m1A98AIwOLh6_dMBdfL3VZjo",
    coordinators: [
      { name: "Gaurav Pal", phone: "+91 8439051108", email: "spandangbpiet@gmail.com" },
    ],
  },
  {
    title: "GeoCraft Arena",
    category: "Terrain Manipulator Challenge",
    description: "Design mechanisms and robots capable of navigating and manipulating challenging simulated terrains. Speed, adaptability, and precision are the keys to victory!",
    date: "May 2 (Day 2)",
    teamSize: "1–6 members",
    minTeam: 1,
    maxTeam: 6,
    rulebookUrl: "https://drive.google.com/open?id=1ylT1-M35l92pXgryOpy1jpRKyp-zRuQQ",
    coordinators: [
      { name: "Anmol Dimri", phone: "+91 9389640540", email: "anmol.dimri29@gmail.com" },
    ],
  },
  {
    title: "NetRunnerz",
    category: "Robo Soccer",
    description: "The ultimate robotic sports event! Design, build, and program agile robots to compete in an intense, high-speed game of mechanical soccer.",
    date: "May 1 (Day 1)",
    teamSize: "3–6 members (branch-wise)",
    minTeam: 3,
    maxTeam: 6,
    rulebookUrl: "https://drive.google.com/open?id=1cTEwJ5eKv1o9puWYiy4CTuR57FSbshUJ",
    coordinators: [
      { name: "Sujal Singh Bisht", phone: "+91 8218204560", email: "sb1743816@gmail.com" },
      { name: "Shivam Saklani",    phone: "+91 7060571056", email: "shivamsaklani004@gmail.com" },
    ],
  },
  {
    title: "EcoInnovate",
    category: "Innovation For Sustainable Future",
    description: "A pitching and innovation challenge. Present your hardware or software prototypes aimed at promoting green energy, sustainability, and ecological preservation.",
    date: "May 2–3 (Day 2–3)",
    teamSize: "4–8 members",
    minTeam: 4,
    maxTeam: 8,
    rulebookUrl: "https://drive.google.com/open?id=15IkRZIyas-majx2q01FfaMm6JIOh0Rcj",
    coordinators: [
      { name: "Jiyanshi Batra",        phone: "+91 8445021974", email: "jiyanshibatra753@gmail.com" },
      { name: "Anubhav Dimri",         phone: "+91 7817832297", email: "dimrianubhav123@gmail.com" },
      { name: "Abhay Kumar",           phone: "+91 9325517255", email: "abhaykumar969040@gmail.com" },
      { name: "Yuvraj Singh Makhloga", phone: "+91 7088305386", email: "yuvrajmak4280@gmail.com" },
    ],
  },
  {
    title: "DesignForge",
    category: "Design Event",
    description: "Unleash your creativity! A UI/UX and product design competition where you wireframe, prototype, and build stunning user experiences to delight users.",
    date: "May 1–2 (Day 1–2)",
    teamSize: "Solo (1 member)",
    minTeam: 1,
    maxTeam: 1,
    rulebookUrl: "https://drive.google.com/open?id=1fjTak93t28bBDSRHxOc-6C-rlCRDpIkm",
    coordinators: [
      { name: "Yashpreet Singh", phone: "+91 6398150951", email: "singhyashpreet22@gmail.com" },
      { name: "Kriti Uniyal",    phone: "+91 7983173102", email: "kritiuniyal28@gmail.com" },
      { name: "Paras Dhiman",    phone: "+91 9548088962", email: "prsdhiman015@gmail.com" },
    ],
  },
  {
    title: "Circuit Chase",
    category: "Line Following Robot",
    description: "Construct autonomous robots built for speed and precision. Compete to navigate complex line-tracks with sharp turns and intersections in the fastest time possible.",
    date: "May 1 (Day 1)",
    teamSize: "3–6 members (branch-wise)",
    minTeam: 3,
    maxTeam: 6,
    rulebookUrl: "https://drive.google.com/open?id=10fs3mQpKnMuDn2bxMHNip7bQ5B27PkCN",
    coordinators: [
      { name: "Anubhav Dimri", phone: "+91 7817832297", email: "dimrianubhav123@gmail.com" },
    ],
  },
  {
    title: "WALL-E",
    category: "Graffiti",
    description: "Express your creativity through the art of graffiti! Participants will create stunning murals and street-art inspired designs that blend technology with artistic expression.",
    date: "May 3 (Day 3)",
    teamSize: "1–10 members",
    minTeam: 1,
    maxTeam: 10,
    rulebookUrl: "https://drive.google.com/open?id=1ZQIqp7JXJ0fjJcZbtNVNDZ_iznd3AIJ7",
    coordinators: [
      { name: "Shambhavi",              phone: "+91 7983690435", email: "spandangbpiet@gmail.com" },
      { name: "Manas Kiran S. Rathore", phone: "+91 8533830880", email: "spandangbpiet@gmail.com" },
      { name: "Abhay Kumar",            phone: "+91 9325517255", email: "spandangbpiet@gmail.com" },
      { name: "Yuvraj Singh Makhloga",  phone: "+91 7088305386", email: "spandangbpiet@gmail.com" },
    ],
  },
  // ── New events ───────────────────────────────────────────────────────────────
  {
    title: "Wiki Run",
    category: "Knowledge Speed Run",
    description: "Race through the web of knowledge! Navigate a chain of Wikipedia articles from a given start page to the target page using only hyperlinks — fastest fingers win.",
    date: "May 2 (Day 2)",
    teamSize: "Solo (1 member)",
    minTeam: 1,
    maxTeam: 1,
    rulebookUrl: "https://drive.google.com/open?id=1NX2yXDRZqWBkyYVCg7Aw0Ys1H9LXMxIn",
    coordinators: [
      { name: "Ojasvi Arora",       phone: "+91 8791042614", email: "ojasviarora9926@gmail.com" },
      { name: "Priyanshu Nautiyal", phone: "+91 9520213423", email: "priyanshu.nauti.0017@gmail.com" },
      { name: "Rahul Joshi",        phone: "+91 7983524131", email: "rahuljoshi190114@gmail.com" },
    ],
  },
  {
    title: "ABSURDUX",
    category: "UX Design Challenge",
    description: "Design under delightfully impossible constraints! ABSURDUX challenges you to craft user interfaces that are creative, functional, and hilariously unconventional.",
    date: "May 1 (Day 1)",
    teamSize: "2–3 members",
    minTeam: 2,
    maxTeam: 3,
    rulebookUrl: "https://drive.google.com/open?id=1ERIWSVx8Tzm9GPRaIkjuj2qYbWvYMIH4",
    coordinators: [
      { name: "Ansh Dhamija", phone: "+91 7300595088", email: "dhamijaansh27@gmail.com" },
    ],
  },
  {
    title: "ElectroManiac",
    category: "Electronics Challenge",
    description: "Put your electronics knowledge to the ultimate test! Build, debug, and optimize circuits in this high-voltage hands-on challenge that separates amateurs from engineers.",
    date: "May 2 (Day 2)",
    teamSize: "3–4 members",
    minTeam: 3,
    maxTeam: 4,
    rulebookUrl: "https://drive.google.com/open?id=1i2xuFrFQeSii9RNCV_-AgbB8XYrOTTj1",
    coordinators: [
      { name: "Ojasvi Thapa", phone: "+91 9149356184", email: "ojthapa10@gmail.com" },
    ],
  },
];

// ── Image map ─────────────────────────────────────────────────────────────────
// Existing events use local /event/*.webp assets.
// New events without local assets use Unsplash images directly.
const imageMap: Record<string, string> = {
  "GreenHack: Code for Impact": "/event/GreenHack.webp",
  "AlgoRhythm":                 "/event/AlgoRhythm.webp",
  "AI Foresight":               "/event/AI-Foresight.webp",
  "BridgeIt":                   "/event/BridgeIt.webp",
  "TechScape Hunt":             "/event/TechScape Hunt.webp",
  "GeoCraft Arena":             "/event/GeoCraftArena.webp",
  "NetRunnerz":                 "/event/NetRunnerz.webp",
  "EcoInnovate":                "/event/EcoInnovate.webp",
  "DesignForge":                "/event/DesignForge.webp",
  "Circuit Chase":              "/event/Circuit Chase.webp",
  "WALL-E":                     "/event/WALL-E.webp",
  // New events — Unsplash images
  "Wiki Run":      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&auto=format&fit=crop&q=80",
  "ABSURDUX":      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80",
  "ElectroManiac": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
};

export const events: EventData[] = rawEvents.map(event => ({
  ...event,
  image: imageMap[event.title] ?? "/event/placeholder.webp",
}));
