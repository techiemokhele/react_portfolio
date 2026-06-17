export interface FetchOptions {
  page?: number;
  per_page?: number;
  tag?: string;
  tags?: string;
  username?: string;
  state?: string;
  top?: boolean | number;
}

export interface Experience {
  id: number;
  companyName: string;
  companyLogo: string;
  position: string;
  location: string;
  employmentType?: string;
  startDate: string;
  endDate: string;
  duties: string | string[];
  skills: string[];
  onsite: boolean;
}

export interface Qualification {
  id: number;
  schoolName: string;
  schoolLogo: string;
  qualification: string;
  course: string;
  location: string;
  startDate: string;
  endDate: string;
  duties: string;
  skills: string[];
}

export interface Project {
  id: number;
  projectName: string;
  projectThumbnail: string;
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
  type: string;
  languages: string[];
}

export interface SearchResult {
  id: string | number;
  title: string;
  subtitle?: string;
  preview?: string;
  category: string;
  categoryLabel: string;
  href: string;
  domId?: string;
}

export type GroupedResults = Record<string, SearchResult[]>;

export interface BlogPost {
  id: string | number;
  category: string;
  image: string;
  authorPicture: string;
  author: string;
  createdAt: string;
  title: string;
  excerpt: string;
  readTime?: string;
  slug?: string;
  originalTitle?: string;
  originalExcerpt?: string;
  isTranslated?: boolean;
  fullDescription?: string;
  originalDescription?: string;
  comments?: number;
  reactions?: number;
}
