import React, { useState, useEffect } from 'react';
//import axios from '../../axios-albums';
import axios from 'axios';

import classes from '../CardView/CardView.css';
// import Spinner from '../UI/Spinner/Spinner';
import { Spinner } from 'react-bootstrap';


const fullCard = props => {

    const [loadedCard, setLoadedCard] = useState(null);

    useEffect(() => {
        console.log(props);
        if (props.match.params.id) {
            if (!loadedCard || (loadedCard && loadedCard.id !== props.id)) {
                axios.get('https://jsonplaceholder.typicode.com/photos/' + props.match.params.id)
                    .then(response => {
                        console.log(response);
                        setLoadedCard(response.data);
                    });
            }
        }
    }, [])

    let card = <Spinner animation="border" variant="info" />;

    if (loadedCard) {
        card = (
            <div className={classes.Card}>
                <h1 className={classes.title}>{loadedCard.title}</h1>
                <div className={classes.image}> <img src={loadedCard.url} alt="img" /> </div>
                <p className={classes.description}>{loadedCard.title}</p>
                <p className={classes.tracks}>{loadedCard.albumId}</p>
            </div>

        );
    }
    return card;




}
export default fullCard;