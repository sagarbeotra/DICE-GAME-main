import styled from "styled-components";
const Rolldice = ({currentDice,RollDice}) => {
    
  return (
    <DiceContainer>
        <div className="dice" onClick={RollDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt={`dice ${currentDice}`} />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}
const DiceContainer=styled.div`
   margin-top:48px;
   display:flex;
   flex-direction:column;
   align-items: center;
   .dice{
    cursor:pointer;
   }
   p{
    font-size:24px;
   }
`;
export default Rolldice
