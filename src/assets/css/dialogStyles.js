import styled from 'styled-components';

const MainCard = styled.div`
    width:90%;
    margin: 20px auto;
    border-radius:10px;
    background-color: #392C21;
    color:#FFF;
    

    @media (max-width: 768px) {
        width:95%;
        font-size:12px;
        height:32rem;
        overflow:scroll;
    }

    @media (min-width: 768px) {
        height:25rem;
    }
`;

const InformationCard = styled.div`
    display:flex;

    @media (max-width: 768px) {
        width:100%;
        height:75%;
    }

    @media (min-width: 768px) {
        width:90%;
        height:80%;
    }
`;

const Image = styled.img`
    @media (max-width: 768px) {
        width:340px;
        border-radius: 10px 0px 0px 0px;
    }

    @media (min-width: 768px) {
        width:510px;
        height:400px;
        border-radius: 10px 0px 0px 10px;
    }
`;

const ContainerCard = styled.div`
    display:flex;
    flex-direction:column;
    padding: 30px 30px;
    width:100%;

    @media (max-width: 768px) {
        height:75%;
    }

    @media (min-width: 768px) {
        height:85%;
    }
`;

const NameCharacter = styled.h3`
    width:100%;
    text-transform:uppercase;
    color:#F9B798;
    font-weight: 400;

    @media (max-width: 768px) {
    font-size:22px;
    }

    @media (min-width: 768px) {
    font-size:28px;
    }
`;

const BackButton = styled.button`
    border:none;
    float:right;
    margin: auto 20px;
    border-radius:10px;
    background-color:#D8BCB5;
    text-align:center;

    @media (max-width: 768px) {
    width:80px;
    height:40px;
    }

    @media (min-width: 768px) {
    width:70px;
    height:50px;
    }
`;

export default {
    MainCard,
    InformationCard,
    Image,
    ContainerCard,
    NameCharacter,
    BackButton
}