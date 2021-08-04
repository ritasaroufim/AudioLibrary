import React, { Component } from 'react';
import CardView from '../../components/CardView/CardView';
import cardViewData from '../../cardViewData';
import classes from '../../components/CardView/CardView.css'


class CardViewLibrary extends Component {
  state = {
    cardViewData,
    showNbOfTracks: true,
    selectedCardId: null

  }
  toggleDataHandler = () => {
    this.setState((prevState) => {
      return { ...prevState, showNbOfTracks: !prevState.showNbOfTracks }
    })
  }


  render() {
    return (
      <div>
        <div>
          <button className={classes.btnToggle} onClick={this.toggleDataHandler}>Toggle Tracks</button>
        </div>
        <div>
          {cardViewData.map((album) => {
            // console.log("map", album);
            return (

              <CardView
                key={album._id}
                imageUrl={album.imageUrl}
                name={album.name}
                description={album.description}
                nbOfTracks={this.state.showNbOfTracks ? album.nbOfTracks : null}
              />

            );
          })}
        </div>
      </div>


    )
  }

}

export default CardViewLibrary;