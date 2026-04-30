export interface Sponsor {
  name: string;
  logo: string;       // initials fallback
  logoImage?: string; // path to image in /public/sponsors/
  website: string;
  tagline: string;
}

export const sponsors: Sponsor[] = [
  {
    name: "PETA India",
    logo: "PI",
    logoImage: "/sponsors/PetaIndia.png",
    website: "https://www.petaindia.com/",
    tagline: "Animals are not ours to experiment on, eat, wear, use for entertainment, or abuse in any other way.",
  },
  {
    name: "Quadra Security",
    logo: "QS",
    logoImage: "/sponsors/quadra-security-sponser.jpeg",
    website: "https://www.quadrasecurity.com/",
    tagline: "Providing comprehensive cybersecurity, physical security, and risk management solutions for individuals and organizations.",
  },
  {
    name: "Dev Bhoomi Blood Bank",
    logo: "DB",
    logoImage: "/sponsors/dev-bhoomi-blood-bank-sponser.jpeg",
    website: "https://www.devbhoomibloodbank.com/",
    tagline: "A trusted 24/7 fully equipped facility in Dehradun dedicated to ensuring blood availability and saving lives.",
  },
];
