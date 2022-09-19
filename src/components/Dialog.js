import React, { useState } from 'react';
import '../assets/css/App.css';
import dialogStyles from '../assets/css/dialogStyles';

function Dialog(props) {
    const data = props.data;
    const [episode,setEpisode] = useState([ ]);
    const { MainCard, InformationCard, Image, ContainerCard, NameCharacter, BackButton } = dialogStyles;
    
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
            <MainCard>
                <InformationCard>
                    <Image src={data.image} alt={data.name}></Image>
                        <ContainerCard>
                            <NameCharacter>{data.name}</NameCharacter>
                            <p>Episodes: {episode}</p> 
                        {getEpisodes().urllist}                    
                        </ContainerCard>
                        
                </InformationCard>
                <BackButton onClick={props.closeDialog}>Go Back</BackButton>
            </MainCard>
      );
  }

export default Dialog;
