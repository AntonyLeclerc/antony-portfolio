import Project from "./Project";
import type { ProjectData } from "./ProjectBloc";
import { projects } from "../assets/projectsData";

type ProjectsGridProps = {
  setCurrProj: (proj: ProjectData | null) => void;
  currProjId?: number;
};

export default function ProjectsGrid({
  setCurrProj,
  currProjId,
}: ProjectsGridProps) {
  return (
    <div id="proj_grid">
      {projects.map((item, index) => (
        <Project
          key={index}
          project={item}
          onSelect={setCurrProj}
          currProjId={currProjId}
        />
      ))}
    </div>
  );
}
