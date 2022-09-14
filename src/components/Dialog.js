import React from 'react';
import './../App.css';

function Dialog({ name, tool, button }) {
      return (
        <div>
            <div className='main-card'>
                <div className='main-information-card'>
                <img className='main-image'></img>
                    <div className='main-data'>
                        <h3 className ='main-name-character'>{name}</h3>
                        <p className='main-status-character'>Episodes: {tool}</p> 
                    </div>
                </div>
            <button className='back-btn' onClick={button}>Go back</button>
            </div>
        </div>
      );
  }
  
Dialog.defaultProps = {
    name: "Designer",
    tool: "Adobe XD"
}

export default Dialog;
