import React from "react";
import classes from "./CardView.css"



const cardView = ({name, imageUrl,description,nbOfTracks, clicked}) => {
  return (
    <div className={classes.Card} onClick={clicked}>
      <div className={classes.title}> {name}</div>
      <div className={classes.image}> <img src={imageUrl} alt="img" /> </div>
      <div className={classes.description}> {description}</div>
      {nbOfTracks && <div className={classes.tracks}>{nbOfTracks}</div>}
    </div>

  );
}

export default cardView;
