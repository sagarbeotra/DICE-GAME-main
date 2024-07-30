import styled from "styled-components";
import { Button } from "../styled/Button";
const StartGame = ({toggle}) => {
    return (
        <Container>
            <div><img src="/images/dice.png" alt="dice" /></div>
            <div className="content">
                <h1>DICE GAME</h1>
                <div className="btn">
                    <Button onClick={toggle}>Play Now</Button>
                </div>

            </div>
        </Container>
    )
}
export default StartGame
const Container = styled.div`
    max-width:1180px;
    margin:0 auto;
    display:flex;
    height:100vh;
    align-items:center;
    .content{
        h1{
            font-size:96px;
        }
    }
    .btn{
        display:flex;
        justify-content:end;
    }
`;

