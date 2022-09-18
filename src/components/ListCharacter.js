import '../App.css';
import React, { useState } from 'react';
import Dialog from './Dialog';
import listCharacterStyles from '../assets/css/listCharacterStyles';


function ListCharacter({ data }) {
  const { Container, Image, Card, InformationCard, NameCharacter, ButtonCharacter } = listCharacterStyles;
  const [displayContent, setDisplayContent] = useState(false);
  const [infos, setInfos] = useState('');

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
      <Container>
      { !displayContent && data.map(data => (
                    <Card key={data.id}>
                    <Image src={data.image} alt={data.name}></Image>
                    <InformationCard>
                      <NameCharacter>{data.name}</NameCharacter>
                      <p>Status: {data.status}</p>
                      <ButtonCharacter onClick={() => handleClick(data)}>See More</ButtonCharacter>
                    </InformationCard>
                  </Card>
              ))}
        </Container>
        {displayContent && <Dialog data={infos} closeDialog={() => setDisplayContent(false)} />}
    </div>
    
  )
  };


export default ListCharacter;
