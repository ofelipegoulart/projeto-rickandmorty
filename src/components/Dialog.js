import { render } from '@testing-library/react';
import React, { useState } from 'react';
import './../App.css';

function Dialog(props) {
    const data = props.data;
    const [episode,setEpisode] = useState([ ]);
    
    const getEpisodes = async () => {
        let i=0;
        let urllist=[]
        for(i;i< data.episode.length;i++){
            const response = await fetch(`${data.episode[i]}`)
            const json = await response.json()
            urllist.push(json.name + '; ');
          }
          setEpisode(urllist)
          
       }

      return (
        <div>
            <div className='main-card'>
                <div className='main-information-card'>
                    <img className='main-image' src={data.image}></img>
                        <div className='main-data'>
                            <h3 className ='main-name-character'>{data.name}</h3>
                            <p className='main-status-character'>Episodes: {episode}</p> 
                        {getEpisodes().urllist}
                        </div>
                </div>
                <button className='back-btn' onClick={props.closeDialog}>Go Back</button>
            </div>
        </div>
      );
  }

export default Dialog;
