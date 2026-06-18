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

export interface ButtonComponentProps {
  text: string;
  normal?: boolean;
  href?: string;
  hidden?: boolean;
  blank?: boolean;
  type?: "button" | "submit" | "reset";
  active?: boolean;
  onClick?: () => void;
  download?: string;
}

export interface BlogSingTopBannerComponentProps {
  category?: string;
  title?: string;
  excerpt?: string;
  author?: string;
  createdAt?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactBody {
  name?: string;
  email?: string;
  message?: string;
  recaptchaToken?: string;
}

export interface ConfirmParams {
  toName: string;
  toEmail: string;
  messagePreview: string;
}

export interface AdminParams {
  fromName: string;
  fromEmail: string;
  message: string;
  sentAt: string;
}
