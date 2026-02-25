export type MediaInfos = {
  data: {
    id: number;
    description: string;
    media: string;
    linkto: string;
    image: string;
    dl?: boolean;
  };
};

export default function Media({ data }: MediaInfos) {
  return (
    <div className="contact">
      {data.description}
      <div className="icon_n_media">
        <img src={data.image} alt="" />
              <span><a href={data.linkto} target="_blank" {...(data.dl ? {download:true} : {})}>{data.media}</a></span>
      </div>
    </div>
  );
}
