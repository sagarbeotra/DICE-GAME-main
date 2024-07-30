import styled from "styled-components"
export const Button = styled.button`
   background-color: black;
   color: white;
   min-width:220px;
   height:44px;
   padding: 10px 0;
   border-radius: 5px;
   font-size: 16px;
   border:1px solid transparent;
   transition:0.4s background ease-in;
   cursor: pointer;

   &:hover{
    background-color: white;
    color:black;
    border:1px solid black;
    transition: 0.3s background ease-in;
   }
`;
export const OutlineButton = styled(Button)`
border:1px solid black;
   background-color: white;
   color:black;
   &:hover{
    background-color: black;
    color:white;
    border:1px solid transparent;
   }
`;