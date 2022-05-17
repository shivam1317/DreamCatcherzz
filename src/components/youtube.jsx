import React from "react";

const YoutubeEmbed = () => (
  <div className="inline lg:w-3/4 w-full lg:p-1">
    <iframe
      className="w-full h-60 lg:h-96 "
      src={`https://www.youtube.com/embed/N_Rv4JoraF8`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Dreamcatcherzz youtube "
    />
  </div>
);

export default YoutubeEmbed;
