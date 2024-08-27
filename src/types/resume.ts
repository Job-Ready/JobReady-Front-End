export interface Resume {
  id: string;
  fullname: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  portfolio: string;
  country: string;
  repos: string[];
  workExperiences: Array<WorkExperience>;
  projects: Array<Project>;
  education: Array<Education>;
  languages: Language[];
  skills: Skill[];
  last_change: string;
};

export interface WorkExperience {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Project {
  projectName: string;
  description: string;
  link?: string;
}

export interface Education {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface Language {
  languageName: string;
  level: string;
}

export interface Skill {
  skillName: string;
}
