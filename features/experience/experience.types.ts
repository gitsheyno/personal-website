export interface Experience {
  id: string;
  img?: string;
  imageFit?: "cover" | "contain";
  company: string;
  location: string;
  position: string;
  period: string;
  color: string;
  achievements: string[];
  technologies: string[];
}
