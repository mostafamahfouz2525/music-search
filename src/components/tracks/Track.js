import React from 'react';
import {Link} from 'react-router-dom';

const  Track = (props)=> {

    const {track} = props;
    return (
        <div className="col-sm-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{track.artist_name}</h5>
                    <div className="card-text">
                        <strong> <i className="fa fa-play"></i> Track:{track.track_name} </strong>
                    </div>
                    <Link to={`lyrics/track/${track.commontrack_id}`} className="btn btn-dark mt-3 btn-block">
                        <i className="fa fa-eye"></i> View Lyrics {track.commontrack_id}
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default Track;