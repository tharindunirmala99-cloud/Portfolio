/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: "DevOps & Cloud" | "Full-Stack Development" | "Automation" | "Site Reliability Engineering";
  image: string;
  role: string;
  impact: string;
  stack: string[];
  challenge?: string;
  solution?: string;
  github?: string;
  demo?: string;
  isFeatured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  duration: string;
  bulletPoints: string[];
  techStack: string[];
  trainings?: string[];
  logoType: "freelance" | "startup" | "education" | "enterprise" | "banking";
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  year: string;
}

export interface Award {
  id: string;
  title: string;
  categoryName: string;
}

export interface Publication {
  id: string;
  title: string;
  overview: string;
  year: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  bulletPoints: string[];
  iconName: string;
}

export interface StatItem {
  value: string;
  label: string;
  metricDetails: string;
  impact: string;
}
