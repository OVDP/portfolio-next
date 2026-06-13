export interface Project {
  id: number;
  name: string;
  description: string;
  tools: string[];
  startdate: string;
  enddate: string;
  repo: string;
  demo: string;
  image: { src: string }[];
}
