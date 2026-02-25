import type { ProjectData } from "./ProjectBloc";

type Projet = {
  project: ProjectData;
  onSelect: (proj: ProjectData | null) => void;
  currProjId?: number;
};

export default function Project({ project, onSelect, currProjId }: Projet) {
  return (
    <div
      className="projet"
      onClick={() => {
        currProjId === project.id ? onSelect(null) : onSelect(project);
      }}
    >
      <div className="vignette">
        <img src={project.image} alt={project.name} />
        <span>{project.name}</span>
      </div>
    </div>
  );
}
