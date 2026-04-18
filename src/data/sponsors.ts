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
];
