import { medias } from "../assets/mediasData"
import Media from "./Media";


export default function Presentation() {
  return (
    <div id="presentation">
      <div id="whoami">
        <h2>LECLERC Antony - Sorbonne Université</h2>

        <h3>
          Ingénieur Intelligence Artificielle · Ingénieur Machine Learning
        </h3>
        <p>
          Diplômé du Master ANDROIDE de Sorbonne Université avec spécialisation
          en machine learning avec Tensorflow / Pytorch, et la vision par
          ordinateur, je suis à la recherche d'une première opportunité
          professionnelle dans ces domaines.
        </p>
        <hr />
        <p>Spécialisé en apprentissage profond et en vision par ordinateur.</p>
        <p>
          Se forme actuellement en autodidacte sur les applications IA, les NLP
          et les LLM.
        </p>
        <div id="contact_links">
          {medias.map((item, index) => (
            <Media key={index} data={item}/>
          ))}
        </div>
      </div>
      <div id="codeblock">{`from mistralai import Mistral
        
        api_key = os.environ['API_KEY']
        client = Mistral(api_key=api_key)

        res = client.chat.complete(
          model='mistral-medium-latest',

        messages=[{"role":"user","content":"Salue pour moi les visiteurs du site d'Antony LECLERC, jeune diplômé de Sorbonne Université.}]
          max_tokens=200,
          temperature=1.5)
        
        ans = res.choices[0].message.content

        print(ans)

        >>> Bienvenue sur le portfolio d'Antony Leclerc, jeune diplômé de Sorbonne Université.
Découvrez son parcours, ses compétences et ses projets avec curiosité !
        `}</div>
    </div>
  );
}
