import '../App.css';
import React, { Component, useEffect, useState } from 'react';

function ListCharacter({ data }) {
/*  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [episode, setEpisodes] = useState("");

  useEffect(() => {
    const fetchName = (id) => 
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(name => {
        console.log(name);
        setName(name.name);
      });
      fetchName(id);
  }, [id])

  useEffect(() => {
    const fetchImage = (id) => 
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(image => {
        console.log(image);
        setImage(image.image);
      });
      fetchImage(id);
  }, [id])

  useEffect(() => {
    const fetchEpisodes = (id) => 
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(episode => {
        console.log(episode);
        setEpisodes(episode.episode);
      });
      fetchEpisodes(id);
  }, [id])
*/

  return (
    <div className='wrapper'>
        {data.map(data => (
              <div className='card' key={data.id}>
              <img className='image' src={data.image}></img>
              <div className='information-card'>
                <h3 className ='name-character'>{data.name}</h3>
                <p className='status-character'>Status: {data.status}</p>
                <button className='btn-character'>See More</button>
              </div>
            </div>
        ))}
        </div>
  )
}

export default ListCharacter;
