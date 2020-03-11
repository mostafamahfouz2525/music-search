import React, { Component } from 'react'
import axios from 'axios';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';
// import Moment from 'react-moment';



class Lyrics extends Component {

    state = {
        track:{},
        lyrics:{}
    }

    componentDidMount(){
        axios.get(`https://api.musixmatch.com/ws/1.1/track.get?commontrack_id=${this.props.match.params.id}&apikey=68e4509c802e275391050287480ec387`)
        .then(res=>{
            console.log(res.data)
            this.setState({
                track:res.data.message.body.track
                // track_list:[]
            })

            // console.log(this.state.track)
        })
        .catch(err=>console.log(err))
    }



    render()
    {
        const {track} = this.state;
        if(track === undefined || Object.keys(track).length === 0)
        {
            return <Spinner/>
        }else 
        {
            return (
                <React.Fragment>
                    <Link to="/" className="btn btn-info btn-md mb-4">Back</Link>
                    <div className="card">
                        <div className="card-header">
                            <h3>Track Name : {track.track_name}</h3>
                        </div>
                        <div className="card-body text-left">
                            <h4>Artist Name : {track.artist_name}</h4>
                        </div>

                        <ul className="list-group mt-3 text-left">
                            <li className="list-group-item">
                                <strong>Album Id : </strong> {track.album_id}
                            </li>
                            <li className="list-group-item">
                                <strong>Album Name : </strong> {track.album_name}
                            </li>

                            {/* <li className="list-group-item">
                             <strong>Release Date : </strong> <Moment format="MM/DD/YYYY">{track.updated_time} </Moment>  
                            </li> */}

                            
                        </ul>
                    </div>
                </React.Fragment>
            )
        }
        
    }
    
}


export default Lyrics;