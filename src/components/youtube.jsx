import React from "react";

const YoutubeEmbed = () => (
  <div className="video-responsive inline lg:w-1/2 md:w-full">
    <iframe
      className="w-full h-80 rounded-xl"
      src={`https://www.youtube.com/embed/kUoXzdj201k`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
