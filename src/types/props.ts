import type React from "react";
import type { BlogPost } from "@/types";

export interface HighlightTextProps {
  text: string;
  term: string;
  className?: string;
}

export interface PageBannerProps {
  label: string;
  title: React.ReactNode;
  description: string;
  primaryCta?: { text: string; href: string; external?: boolean };
  secondaryCta?: { text: string; href: string; external?: boolean };
}

export interface BlogCardComponentProps extends Partial<BlogPost> {
  onClick?: () => void;
}

export interface ExperienceComponentProps {
  id: number;
  companyName: string;
  companyLogo: string;
  position: string;
  location: string;
  employmentType?: string;
  startDate: string;
  endDate: string;
  duties: string | string[];
  skills?: string[];
  onsite: boolean;
  index: number;
}

export interface EducationComponentProps {
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
  index: number;
}

export interface ProjectComponentProps {
  id?: number;
  domId?: string;
  projectName: string;
  projectThumbnail: string;
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
  type: string;
  languages: string[];
  index?: number;
  searchTerm?: string;
}
