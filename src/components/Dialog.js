import React from 'react';
import './../App.css';

function Dialog({ data }) {

      return (
        <div>
            <div className='main-card'>
                <div className='main-information-card'>
                    <img className='main-image' src={data.image} alt={data.name}></img>
                        <div className='main-data'>
                            <h3 className ='main-name-character'>{data.name}</h3>
                            <p className='main-status-character'>Episodes: {data.episodes}</p> 
                        </div>
                </div>
                <button className='back-btn'>Go Back</button>
            </div>
        </div>
      );
  }
  
Dialog.defaultProps = {
    name: "Designer",
    tool: "Adobe XD"
}

export default Dialog;
