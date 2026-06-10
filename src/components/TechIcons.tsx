import React from "react";
import {
  Atom,
  Terminal,
  Database,
  Cloud,
  Cpu,
  Workflow,
  Layers,
  Shield,
  FileCode,
  Code2,
  GitBranch,
  GraduationCap,
  Landmark,
  TrendingUp,
  FileText,
  Sparkles,
  Zap,
  Settings,
  Building2,
  Briefcase,
  Code,
  Boxes,
  Wrench,
  Presentation,
  ShieldCheck,
  BookOpen,
  FolderDot
} from "lucide-react";

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-3 h-3" }) => {
  const normalized = name.toLowerCase().trim();

  // Mapping tech keyword/names to specific Lucide icons
  if (normalized.includes("docker") || normalized.includes("container")) {
    return <Boxes className={className} />;
  }
  if (normalized.includes("azure") || normalized.includes("aws") || normalized.includes("cloud")) {
    return <Cloud className={className} />;
  }
  if (normalized.includes("jenkins") || normalized.includes("pipeline") || normalized.includes("github actions") || normalized.includes("workflow")) {
    return <Workflow className={className} />;
  }
  if (normalized.includes("terraform") || normalized.includes("iac")) {
    return <Wrench className={className} />;
  }
  if (normalized.includes("bash") || normalized.includes("cli") || normalized.includes("script")) {
    return <Terminal className={className} />;
  }
  if (normalized.includes("angular")) {
    return <Layers className={className} />;
  }
  if (normalized.includes("react")) {
    return <Atom className={className} />;
  }
  if (normalized.includes("typescript")) {
    return <FileCode className={className} />;
  }
  if (normalized.includes("javascript")) {
    return <Code className={className} />;
  }
  if (normalized.includes("django")) {
    return <Cpu className={className} />;
  }
  if (normalized.includes("node") || normalized.includes("express")) {
    return <Cpu className={className} />;
  }
  if (normalized.includes("mysql") || normalized.includes("postgres") || normalized.includes("database") || normalized.includes("sql")) {
    return <Database className={className} />;
  }
  if (normalized.includes("oauth") || normalized.includes("security") || normalized.includes("compliance")) {
    return <Shield className={className} />;
  }
  if (normalized.includes("resume") || normalized.includes("ats") || normalized.includes("pdf")) {
    return <FileText className={className} />;
  }
  if (normalized.includes("pedagogy") || normalized.includes("math") || normalized.includes("model") || normalized.includes("whiteboard")) {
    return <Presentation className={className} />;
  }
  if (normalized.includes("bank") || normalized.includes("portal") || normalized.includes("financial")) {
    return <Landmark className={className} />;
  }
  if (normalized.includes("git")) {
    return <GitBranch className={className} />;
  }
  if (normalized.includes("vite") || normalized.includes("startup")) {
    return <Zap className={className} />;
  }

  // Default fallback if no specific keyword matches
  return <Code2 className={className} />;
};

interface CompanyLogoProps {
  type: "freelance" | "startup" | "education" | "enterprise" | "banking";
  className?: string;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({ type, className = "w-4 h-4" }) => {
  switch (type) {
    case "freelance":
      return <Cpu className={`${className} text-emerald-600`} />;
    case "startup":
      return <Sparkles className={`${className} text-amber-500`} />;
    case "enterprise":
      return <Building2 className={`${className} text-blue-600`} />;
    case "education":
      return <GraduationCap className={`${className} text-indigo-600`} />;
    case "banking":
      return <Landmark className={`${className} text-rose-600`} />;
    default:
      return <Briefcase className={`${className} text-slate-500`} />;
  }
};
