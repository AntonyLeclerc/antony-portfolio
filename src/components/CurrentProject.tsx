import type { ProjectData } from "./ProjectBloc";
import TechTag from "./TechTag";

type CurrentProjProps = {
  data: ProjectData | null;
};

export default function CurrentProject({ data }: CurrentProjProps) {
  if (!data) return <div>Selectionnez un projet à afficher.</div>;

  return (
    <div id="current_project">
      <div id="descriptive_text">
        <h2>
          {data.context} - <a href={data.website} target="_blank">{data.location}</a>
        </h2>
        {data.desc.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
              
        {data.exemple && <h4>Un exemple <a href={data.exemple}>ici</a></h4>}
        <hr />
        Stack utilisée :
        <div id="technos_proj">
          {data.stack.map((item, index) => (
            <TechTag value={item} key={index} />
          ))}
        </div>
      </div>
      <img id="descriptive_image" src={data.image} alt={data.context} />
    </div>
  );
}
