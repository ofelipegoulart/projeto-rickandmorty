import '../App.css';
import React, { Component, useEffect, useState, setState } from 'react';
import Dialog from './Dialog';
import { isVisible } from '@testing-library/user-event/dist/utils';

function ListCharacter({ data }) {
  const [displayContent, setDisplayContent] = useState(false);
  const [infos, setInfos] = useState('');

  const componentDidMount = () => {
    this.prevFetchCharacters();
    this.nextFetchCharacters();
  }

  const handleClick = async (data) => {
    setInfos({
      name: data.name,
      image: data.image,
      episode: data.episode
    });
    setDisplayContent(true);
  }

  return (
    <div>
      <div className='wrapper'>
      { !displayContent && data.map(data => (
                    <div className='card' key={data.id}>
                    <img className='image' src={data.image}></img>
                    <div className='information-card'>
                      <h3 className ='name-character'>{data.name}</h3>
                      <p className='status-character'>Status: {data.status}</p>
                      <button className='btn-character' onClick={() => handleClick(data)}>See More</button>
                    </div>
                  </div>
              ))}
        </div>
      {displayContent && <Dialog data={infos} closeDialog={() => setDisplayContent(false)} />}
    </div>
    
  )
  };


export default ListCharacter;
