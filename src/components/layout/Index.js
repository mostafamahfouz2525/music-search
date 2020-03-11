import React from 'react'
import Tracks from '../tracks/Tracks';
import Search from '../tracks/Search';

const Index = ()=> {
    return (
        <div className="text-center">
            <Search />
            <Tracks/>
        </div>
    )
}


export default Index;