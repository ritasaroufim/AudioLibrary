import React from "react";
import classes from "./CardView.css"



const cardView = (props) => {
  return (
    // <div className={classes.Card} onClick={props.clicked}>
    //   <div className={classes.CardImg}>
    //     <img src={props.imageUrl} alt='img' />
    //   </div>
    //   <div><h2>{props.name}</h2></div>
    //   <div><p>{props.description}</p></div>
    //   {props.nbOfTracks && <div><p>{props.nbOfTracks}</p></div>}
    // </div>

    <div className={classes.Card}>
      <div className={classes.title}> {props.name}</div>
      <div className={classes.image}> <img src={props.imageUrl} /> </div>
      <div className={classes.description}> {props.description}</div>
      {props.nbOfTracks && <div className={classes.tracks}>{props.nbOfTracks}</div>}
    </div>

  );
}

export default cardView;
