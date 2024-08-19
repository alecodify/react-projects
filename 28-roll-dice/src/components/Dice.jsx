import styled from "styled-components";

const Dice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
    </DiceContainer>
  )
}

export default Dice

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;