import styled from 'styled-components';

const HeaderDiv = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;  
    display: -webkit-flex; 
    display: flex;         
`;

const FooterDiv = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;  
    display: -webkit-flex;
    display:flex;
    justify-content: space-between;
    padding:20px;
`;

const Title = styled.h1`
    padding:20px;
    color: #7C3E1D;
    font-size:36px;

    @media (max-width: 768px) {
        width:70%;
    }

  @media (min-width: 768px) {
        width:80%;
    }
`;

const PannelPagination = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;  
    display: -webkit-flex;
    display:flex;
    margin:5px auto;

    @media (max-width: 768px) {
    justify-content:space-between;
    width:18%;
    }

    @media (min-width: 768px) {
    justify-content:space-around;
    width:10%;
    }
    @media (min-width:1599px) {
    width:8%;
    }
    @media (min-width:1899px) {
    width:5%;
    }
`;

const BtnPagination = styled.div`
    margin:10px;
    padding:auto;
    border:none;
    border-radius:10px;
    align-items: center;
    background-color: #D8BCB5;
    font-size:16px;
    text-align:center;

    @media (max-width: 768px) {
    width:70%;
    height:70%;
    }
  @media (min-width: 768px) {
    width:60%;
    height:60%;
    }
`;

export default {
  HeaderDiv,
  FooterDiv,
  Title,
  PannelPagination,
  BtnPagination
}