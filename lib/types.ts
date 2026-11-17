// Domain types for the Ibroad Education public catalogue.
// These mirror the MongoDB collections described in the Architecture &
// Design Plan; the data in lib/data.ts is SAMPLE data standing in for them.

export type Country = {
  code: string; // 'uk', 'au', ...
  name: string;
  flag: string; // emoji
  image?: string;
  blurb: string;
  popular: string[]; // popular course fields
};

export type University = {
  id: string;
  name: string;
  country: string; // country code
  countryName: string;
  city: string;
  mono: string; // 2-letter monogram for the logo block
  image?: string;
  established: number;
  featured: boolean;
  desc: string;
  website: string;
  reqs: string[];
};

export type Course = {
  id: string;
  title: string;
  uni: string; // university id
  field: string;
  level: "Bachelor" | "Master" | "PhD" | "Diploma";
  duration: string;
  fee: number; // USD / year
  intake: string;
  desc: string;
  image?: string;
  reqs: string[];
};

export type ServiceIcon = "compass" | "doc" | "visa" | "plane";

export type Service = {
  icon: ServiceIcon;
  title: string;
  desc: string;
};

export type Testimonial = {
  name: string;
  initials: string;
  avatar?: string;
  role: string;
  text: string;
};

export type Settings = {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
};
