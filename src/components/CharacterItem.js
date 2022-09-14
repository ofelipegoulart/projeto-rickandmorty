import '../App.css';
import API from '../API';
import React, { Component } from 'react';

const CharacterItem = ({name, image, status, button}) => {
    return (
        <div className='card'>
                <img className='image' src={image}></img>
                    <div className='information-card'>
                        <h3 className ='name-character'>{name}</h3>
                        <p className='status-character'>Status: {status}</p>
                        <button className='btn-character' onClick={button}>See more</button>
                    </div>
            </div>
      )
};

export default CharacterItem

{/*  */}