
export interface Link {
  name: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  bio: string;
  avatar: string;
}

export interface PerfLinkData {
  profile: Profile;
  links: Link[];
}
