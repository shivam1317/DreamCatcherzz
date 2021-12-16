import React from "react";
import PropTypes from "prop-types";


const YoutubeEmbed = () => (
  <div className="video-responsive mx-10 inline">
    <iframe
      width="600"
      height="400"
      src={`https://www.youtube.com/embed/kUoXzdj201k`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    /> 
  </div>
);



export default YoutubeEmbed;