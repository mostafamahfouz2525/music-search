import React, { Component } from 'react';

import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Track from './Track';

class Tracks extends Component {

  
    render()
    {
        return (
            <Consumer>
                {value=>{
                    const {track_list} = value;
                    const {heading} = value
                    if(track_list=== undefined || track_list.length === 0)
                    {
                        return <Spinner/>
                    }else 
                    {   
                        return (

                            <div className="row">
                                <h1 className="col-sm-12">{heading}</h1>

                               {track_list.map((item,index)=>(
                                    <Track track={item.track}  key={index} />
                               ))}
                            </div>
                        )
                    }
                }}
            </Consumer>
        )
    }
    
}


export default Tracks;