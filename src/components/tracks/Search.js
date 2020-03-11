import React, { Component } from 'react';
import axios from  'axios';
import {Consumer} from '../../context';

class Search extends Component {

    state={
        trackTitle:''
    }

    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    findTrack = (dispatch,e) =>{
        e.preventDefault();

        axios.get(`http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=68e4509c802e275391050287480ec387`)
        .then(res=>{
            
            dispatch({
                type:'SEARCH_TRACKS',
                payload:res.data.message.body.track_list
            })
         
        })
        .catch(err=>console.log(err))

        
    }

    render() {
        return(
        <Consumer>

            {
                value => {
                    const {dispatch} = value;
                    return(
                        <div className="card card-body mb-4 p-4">
                            <h1 className="display-4 text-center">
                                <i className="fa fa-music"></i> Search For A Song
                            </h1>
                            <p className="lead text-center">Get The Lyrics For Any Song</p>
                            <form onSubmit={this.findTrack.bind(this,dispatch)}>
                                <div className="form-group">
                                    <input type="text" onChange={this.handleChange} name="trackTitle" value={this.state.trackTitle} className="form-control form-control-lg" placeholder="Song Title ...." />
                                </div>
                                <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">Get Track Lyrics</button>
                            </form>
                        </div>
                    )
                }
            }
        </Consumer>
        );

    }
}


export default Search