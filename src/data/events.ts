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
    category: "Coding",
    description: "A 36-hour hackathon focused on sustainability. Build innovative software solutions to tackle global environmental challenges and reduce carbon footprints.",
    date: "May 8–9 (Day 1–2)",
    teamSize: "4–6 members",
    minTeam: 4,
    maxTeam: 6,
    rulebookUrl: "https://drive.google.com/open?id=1qwmJbHsx1voS4wc9Mkk0inL9eaK5NAYx",
    coordinators: [
      { name: "Kritesh Purohit", phone: "+91 7505753608", email: "kriteshpurohit151021@gmail.com" },
    ],
  },
  {
    title: "AlgoRhythm",
    category: "Coding",
    description: "Test your analytical thinking and coding speed! Compete against top programmers to solve complex Data Structures and Algorithms problems under strict time constraints.",
    date: "May 9 (Day 2)",
    teamSize: "Solo (1 member)",
    minTeam: 1,
    maxTeam: 1,
    rulebookUrl: "https://drive.google.com/open?id=1dufDiJ2xsi2J0OOdR1y26pP5Qg-oYu5G",
    coordinators: [
      { name: "Utsav Kashyap", phone: "+91 8755051637", email: "utsav.mlr@gmail.com" },
      { name: "Saket Kandari", phone: "+91 7668877496", email: "saket12kandari@gmail.com" },
    ],
  },
  {
    title: "AI Foresight",
    category: "Coding",
    description: "Dive into the world of Machine Learning! Build, train, and optimize ML bots and predictive models to analyze complex datasets and solve real-world industry challenges.",
    date: "May 9 (Day 2)",
    teamSize: "1–4 members",
    minTeam: 1,
    maxTeam: 4,
    rulebookUrl: "https://drive.google.com/open?id=1dadAv2YLav7_Fj6F-ARKD7SkamXuiqK4",
    coordinators: [
      { name: "Jiyanshi Batra", phone: "+91 8445021974", email: "jiyanshibatra753@gmail.com" },
      { name: "Vaibhav Pokhriyal", phone: "+91 8266894170", email: "vpokhriyal35@gmail.com" },
      { name: "Rahul Joshi", phone: "+91 7983524131", email: "rahuljoshi190114@gmail.com" },
    ],
  },
  {
    title: "BridgeIt",
    category: "Innovation",
    description: "Put your civil engineering skills to the test. Design and construct structurally sound, weight-bearing bridges using limited materials and race against time.",
    date: "May 9 (Day 2)",
    teamSize: "4–6 members (branch-wise)",
    minTeam: 4,
    maxTeam: 6,
    rulebookUrl: "https://drive.google.com/open?id=1zmY_qzSZJluIwHAEHhyTtH2YYUyLAUM5",
    coordinators: [
      { name: "Abhay Kumar", phone: "+91 9325517255", email: "abhaykumar969040@gmail.com" },
      { name: "Yuvraj Singh Makhloga", phone: "+91 7088305386", email: "yuvrajmak4280@gmail.com" },
    ],
  },
  {
    title: "TechScape Hunt",
    category: "Fun Tech",
    description: "An exhilarating campus-wide treasure hunt with a tech twist! Decipher intricate technical puzzles, crack codes, and unlock hidden clues to claim the ultimate prize.",
    date: "May 8 (Day 1)",
    teamSize: "2–5 members (same branch)",
    minTeam: 2,
    maxTeam: 5,
    rulebookUrl: "https://drive.google.com/open?id=1wYzzgR-wjM7yrEf-pKNGZOex8DpNMigX",
    coordinators: [
      { name: "Ashlesh Ranjan", phone: "+91 9411135530" },
    ],
  },
  {
    title: "GeoCraft Arena",
    category: "Robotics",
    description: "Design mechanisms and robots capable of navigating and manipulating challenging simulated terrains. Speed, adaptability, and precision are the keys to victory!",
    date: "May 10 (Day 3)",
    teamSize: "1–6 members",
    minTeam: 1,
    maxTeam: 6,
    rulebookUrl: "https://drive.google.com/open?id=1hnd_KN2qZQf8npiVt43KTlcdAKjfH7Ra",
    coordinators: [
      { name: "Anmol Dimri", phone: "+91 9389640540", email: "anmol.dimri29@gmail.com" },
    ],
  },
  {
    title: "NetRunnerz",
    category: "Robo Soccer",
    description: "The ultimate robotic sports event! Design, build, and program agile robots to compete in an intense, high-speed game of mechanical soccer.",
    date: "May 9 (Day 2)",
    teamSize: "3–6 members (branch-wise)",
    minTeam: 3,
    maxTeam: 6,
    rulebookUrl: "https://drive.google.com/open?id=1BJaeb_YNc8iAdYlwgwGtrspl5XnC4ThO",
    coordinators: [
      { name: "Sujal Singh Bisht", phone: "+91 8218204560", email: "sb1743816@gmail.com" },
      { name: "Shivam Saklani", phone: "+91 7060571056", email: "shivamsaklani004@gmail.com" },
    ],
  },
  {
    title: "EcoInnovate",
    category: "Innovation",
    description: "A pitching and innovation challenge. Present your hardware or software prototypes aimed at promoting green energy, sustainability, and ecological preservation.",
    date: "May 9 (Day 2)",
    teamSize: "4–8 members",
    minTeam: 4,
    maxTeam: 8,
    rulebookUrl: "https://drive.google.com/open?id=15kqepUmPgIfsu4dLbM7CEBP8aK0RBL8F",
    coordinators: [
      { name: "Jiyanshi Batra", phone: "+91 8445021974", email: "jiyanshibatra753@gmail.com" },
      { name: "Anubhav Dimri", phone: "+91 7817832297", email: "dimrianubhav123@gmail.com" },
      { name: "Abhay Kumar", phone: "+91 9325517255", email: "abhaykumar969040@gmail.com" },
      { name: "Yuvraj Singh Makhloga", phone: "+91 7088305386", email: "yuvrajmak4280@gmail.com" },
    ],
  },
  {
    title: "DesignForge",
    category: "Design",
    description: "Unleash your creativity! A UI/UX and product design competition where you wireframe, prototype, and build stunning user experiences to delight users.",
    date: "May 8 (Day 1)",
    teamSize: "Solo (1 member)",
    minTeam: 1,
    maxTeam: 1,
    rulebookUrl: "https://drive.google.com/open?id=19P--i0nPau2irG2-Qc5TKaWRyWs_YxIp",
    coordinators: [
      { name: "Yashpreet Singh", phone: "+91 6398150951", email: "singhyashpreet22@gmail.com" },
      { name: "Kriti Uniyal", phone: "+91 7983173102", email: "kritiuniyal28@gmail.com" },
      { name: "Paras Dhiman", phone: "+91 9548088962", email: "prsdhiman015@gmail.com" },
    ],
  },
  {
    title: "Circuit Chase",
    category: "Robotics",
    description: "Construct autonomous robots built for speed and precision. Compete to navigate complex line-tracks with sharp turns and intersections in the fastest time possible.",
    date: "May 8 (Day 1)",
    teamSize: "3–6 members (branch-wise)",
    minTeam: 3,
    maxTeam: 6,
    rulebookUrl: "https://drive.google.com/open?id=1e4E2iFZauYiITHIv73CSBb9ueOIDonzk",
    coordinators: [
      { name: "Anubhav Dimri", phone: "+91 7817832297", email: "dimrianubhav123@gmail.com" },
    ],
  },
  {
    title: "WALL-E",
    category: "Graffiti",
    description: "Express your creativity through the art of graffiti! Participants will create stunning murals and street-art inspired designs that blend technology with artistic expression.",
    date: "May 10 (Day 3)",
    teamSize: "1–10 members",
    minTeam: 1,
    maxTeam: 10,
    rulebookUrl: "https://drive.google.com/open?id=1ApBv6kz7IyVIhiO_Wkwr0sG_sOis3MVK",
    coordinators: [
      { name: "Shambhavi", phone: "+91 7983690435", email: "spandangbpiet@gmail.com" },
      { name: "Manas Kiran S. Rathore", phone: "+91 8533830880", email: "spandangbpiet@gmail.com" },
      { name: "Abhay Kumar", phone: "+91 9325517255", email: "spandangbpiet@gmail.com" },
      { name: "Yuvraj Singh Makhloga", phone: "+91 7088305386", email: "spandangbpiet@gmail.com" },
    ],
  },
  // ── New events ───────────────────────────────────────────────────────────────
  {
    title: "Wiki Run",
    category: "Knowledge Speed Run",
    description: "Race through the web of knowledge! Navigate a chain of Wikipedia articles from a given start page to the target page using only hyperlinks — fastest fingers win.",
    date: "May 8 (Day 1)",
    teamSize: "Solo (1 member)",
    minTeam: 1,
    maxTeam: 1,
    rulebookUrl: "https://drive.google.com/open?id=1QM0UpRE3BrTw4GHPIWwOeg49xqQhgkBd",
    coordinators: [
      { name: "Nitesh Singh Bisht", phone: "+91 7300595088", email: "dhamijaansh27@gmail.com" },
    ],
  },
  {
    title: "AbsurdUx",
    category: "UX Design Challenge",
    description: "Design under delightfully impossible constraints! AbsurdUx challenges you to craft user interfaces that are creative, functional, and hilariously unconventional.",
    date: "May 10 (Day 3)",
    teamSize: "2–3 members",
    minTeam: 2,
    maxTeam: 3,
    rulebookUrl: "https://drive.google.com/open?id=1QFoUA2-acDS4XCqKzrwH8OjQjgrwzh91",
    coordinators: [
      { name: "Paras Dhiman", phone: "+91 9548088962", email: "prsdhiman015@gmail.com" },
    ],
  },
  {
    title: "ElectroManiac",
    category: "Electronics Challenge",
    description: "Put your electronics knowledge to the ultimate test! Build, debug, and optimize circuits in this high-voltage hands-on challenge that separates amateurs from engineers.",
    date: "May 8-9 (Day 1-2)",
    teamSize: "3–4 members",
    minTeam: 3,
    maxTeam: 4,
    rulebookUrl: "https://drive.google.com/open?id=1-fG6Xl7IPs6YZqKNxf6LZm3d4AdAwdpf",
    coordinators: [
      { name: "Aakriti", phone: "+91 8532001073" },
      { name: "Jiyanshi", phone: "+91 8445021974" },
      { name: "Paras Dhiman", phone: "+91 9548088962" },
    ],
  },
];

export const events: EventData[] = rawEvents.map(event => {
  const filename = event.title.replace(/:/g, '');
  return {
    ...event,
    image: `/event/${filename}.webp`,
  };
});
