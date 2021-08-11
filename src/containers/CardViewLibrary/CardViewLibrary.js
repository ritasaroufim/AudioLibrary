import React, { useState, useEffect } from 'react';
import CardView from '../../components/CardView/CardView';
// import cardViewJSONData from '../../cardViewData';
import classes from '../../components/CardView/CardView.css'
//import axios from '../../axios-albums';
import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Link } from 'react-router-dom';

const cardViewLibrary = () => {

  const [cardViewData, setcardViewData] = useState(null);
  const [showNbOfTracks, setshowNbOfTracks] = useState(true);
  const [selectedCardId, setselectedCardId] = useState(null);
  // state = {
  //   cardViewData: null,
  //   //showNbOfTracks: true,
  //   selectedCardId: null
  // }
  // const toggleDataHandler = () => {
  //   setshowNbOfTracks((prevState) => {
  //     return { ...prevState, showNbOfTracks: !prevState.showNbOfTracks }
  //   })
  // }

  const toggleDataHandler = () => {
    setshowNbOfTracks(!showNbOfTracks);
  }


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        setcardViewData(response.data)
        console.log(response.data);
      });
  },[])

  const cardViewSelectedHandler = (id) => {
    setselectedCardId(id);

  }
  
    //const { cardViewData } = this.state
    return (
      <div>
        <div>
          <button className={classes.btnToggle} onClick={toggleDataHandler}>Toggle Tracks</button>
        </div>
        <div>
          {
            cardViewData ? (
              cardViewData.map(album => (
                // console.log("map", album);
                (<Link to={'/' + album.id} key={album.id}>
                  <CardView
                    imageUrl={album.url}
                    name={album.title.slice(0,10)}
                    description={album.title.slice(0,30)}
                    nbOfTracks={showNbOfTracks ? album.albumId : null}
                    clicked={() => cardViewSelectedHandler(album.id)}
                  />
                </Link>)
              ))
            ) :
              (<Spinner />)
          }
        </div>
        {/* <div>
          <FullCard id={this.state.selectedCardId} />
        </div> */}
      </div>


    )
  

}

export default cardViewLibrary;