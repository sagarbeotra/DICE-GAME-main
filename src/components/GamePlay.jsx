import NumberSelector from "./NumberSelector";
import Rolldice from "./Rolldice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { useState } from "react";
import { Button } from "../styled/Button";
import { OutlineButton } from "../styled/Button";
import Rules from "./Rules";
const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error,setError]=useState("");
  const [showRules,setShowRules]=useState(false);
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const RollDice = () => {
    if(!selectedNumber){
      setError("You have not selected any number");
      return ;
    }
    const randomNum = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNum);
    if(selectedNumber==randomNum){
      setScore((prev)=>prev+randomNum);
    }
    else{
      setScore((prev)=>prev-2);
    }
    setSelectedNumber(undefined);
  };
  const ResetScore=()=>{
    setScore(0);
  }
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <Rolldice currentDice={currentDice} RollDice={RollDice} />
      <div className="btns">
        <OutlineButton onClick={ResetScore}>Reset Score</OutlineButton>
        <Button onClick={()=>setShowRules((prev)=>!(prev))}>{showRules ? "Hide":"Show"} Rules</Button>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
  );
};
const MainContainer = styled.main`
  padding-top: 30px;
  .top_section {
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: end;
  }
  .btns{
    margin-top:40px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    gap:24px;
  }
`;
export default GamePlay;
