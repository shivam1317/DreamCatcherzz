import React from "react";

const YoutubeEmbed = () => (
  <div className="inline lg:w-1/2 md:w-full p-10 lg:p-1">
    <iframe
      className="w-full lg:h-80 md:h-60 rounded-xl "
      src={`https://www.youtube.com/embed/N_Rv4JoraF8`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
