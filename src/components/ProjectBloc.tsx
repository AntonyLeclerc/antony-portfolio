import { useState } from "react";
import CurrentProject from "./CurrentProject";
import ProjectsGrid from "./ProjectsGrid";


export type ProjectData = {
  id?: number;
  name?: string;
  context?: string;
  location?: string;
  website?: string;
  exemple?: string;
  desc: string[];
  stack: string[];
  image?: string; // path to img
};

export default function ProjetBloc() {
  const [currProj, setCurrProj] = useState<ProjectData | null>(null);
  
  return (
    <div id="project_bloc">
      <h2>Mes projets :</h2>
      <hr />
      <CurrentProject data={currProj} />
      <hr />
      <ProjectsGrid setCurrProj={setCurrProj} currProjId={currProj?.id} />
    </div>
  );
}
