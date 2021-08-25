import React, { useState, useEffect } from 'react';
import axios from '../../axios-albums';

// import Spinner from '../UI/Spinner/Spinner';
//import { Spinner } from 'react-bootstrap';
import Songs from '../Songs/Songs';
import Pagination from '../Pagination/Pagination';


const fullCard = props => {

    const [loadedCard, setLoadedCard] = useState(null);
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [songsPerPage] = useState(10);

    useEffect(() => {
        console.log(props);
        if (props.match.params.id) {
            if (!loadedCard || (loadedCard && loadedCard.id !== props.id)) {
                axios.get('/photos/' + props.match.params.id)
                    .then(response => {
                        console.log(response);
                        setLoadedCard(response.data);
                    });
            }
        }
    }, []);

    useEffect(() => {
        const fetchSongs = async () => {
            setLoading(true);
            const res = await axios.get('/posts');
            setSongs(res.data);
            setLoading(false);
        };

        fetchSongs();
    }, []);

    // let card = <Spinner animation="border" variant="info" />;

    // if (loadedCard) {
    //     card = (
    //         <div className={classes.Card}>
    //             <h1 className={classes.title}>{loadedCard.title}</h1>
    //             <div className={classes.image}> <img src={loadedCard.url} alt="img" /> </div>
    //             <p className={classes.description}>{loadedCard.title}</p>
    //             <p className={classes.tracks}>{loadedCard.albumId}</p>
    //         </div>

    //     );
    // }
    // return card;

    // Get current songs
    const indexOfLastSong = currentPage * songsPerPage;
    const indexOfFirstSong = indexOfLastSong - songsPerPage;
    const currentSongs = songs.slice(indexOfFirstSong, indexOfLastSong);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);



    return (
        <React.Fragment>
            <div>
                <div className='container mt-5'>
                    <h1 className='text-primary mb-3'>My Songs</h1>
                    <Songs songs={currentSongs} loading={loading} />
                    <Pagination
                        songsPerPage={songsPerPage}
                        totalSongs={songs.length}
                        paginate={paginate}
                    />
                </div>
            </div>
        </React.Fragment>
    );




}
export default fullCard;

