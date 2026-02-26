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
        <img src={project.image} alt={project.context} />

        {typeof project.name === "object" ? ( // Assuming object is forced to be string[]
          project.name.map((item, index) => <span key={index}>{item}</span>)
        ) : (
            <span>{project.name}</span>
        )}
      </div>
    </div>
  );
}
