import React, { useState } from 'react';
import './../App.css';

function Dialog(props) {
    const data = props.data;
    
    // Criar iteração dos episodios aqui;

      return (
        <div>
            <div className='main-card'>
                <div className='main-information-card'>
                    <img className='main-image' src={data.image}></img>
                        <div className='main-data'>
                            <h3 className ='main-name-character'>{data.name}</h3>
                            <p className='main-status-character'>Episodes:</p> 
                        </div>
                </div>
                <button className='back-btn' onClick={props.closeDialog}>Go Back</button>
            </div>
        </div>
      );
  }

export default Dialog;
