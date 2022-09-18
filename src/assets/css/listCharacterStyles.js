import styled from 'styled-components';

const Container = styled.div`
    display:grid;
    place-items:center;
    margin: 20px auto;

    @media (max-width: 768px) {
        max-width:100%;
        grid-template-columns: 1fr;
    }

    @media (min-width: 768px) {
        width:90%;
        grid-template-columns: 1fr 1fr;
    }
`;

const Image = styled.img`
    width:208px;
    height:214px;
    border-radius: 10px 0px 0px 10px;
`;

const InformationCard = styled.div`
    padding:30px;
`;

const NameCharacter = styled.h3`
    width:100%;
    text-transform:uppercase;
    color:#F9B798;
    font-size:20px;
    font-weight: 400;
`;

const ButtonCharacter = styled.button`
    border:none;
    border-radius:10px;
    width:90px;
    height:20%;
    background-color:#D8BCB5;
    position:relative;
    top:90px;
`;

const Card = styled.div`
    display:flex;
    width:578px;
    height:214px;
    border-radius:10px;
    margin-bottom:20px;
    background-color: #392C21;
    color:#FFF;

@media (max-width: 768px) {
    margin-left:auto;
    margin-right:auto;
    }
`;

export default {
  Container,
  Image,
  Card,
  InformationCard,
  NameCharacter,
  ButtonCharacter
}