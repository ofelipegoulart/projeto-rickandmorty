import React from 'react';
import './../App.css';

function Dialog({ image, name, episodes, button }) {

      return (
        <div>
            <div className='main-card'>
                <div className='main-information-card'>
                    <img className='main-image' src={image} alt={name}></img>
                        <div className='main-data'>
                            <h3 className ='main-name-character'>{name}</h3>
                            <p className='main-status-character'>Episodes: {episodes}</p> 
                        </div>
                </div>
                <button className='back-btn'>Go back</button>
            </div>
        </div>
      );
  }
  
Dialog.defaultProps = {
    name: "Designer",
    tool: "Adobe XD"
}

export default Dialog;
