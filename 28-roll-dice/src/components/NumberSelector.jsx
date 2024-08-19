import styled from "styled-components";

const NumberSelector = ({ error, setError, selectedNumber, setSelectedNumber }) => {
  const array = [1, 2, 3, 4, 5, 6];

  const handler = (value) => {
    setSelectedNumber(value);
    setError("");
  }

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {array.map((value, i) => (
          <Box key={i} isSelected={value === selectedNumber} onClick={() => handler(value)} >{value}</Box>
        ))}
      </div>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
    flex-wrap: wrap; 
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .error {
    color: red;
  }

  @media (max-width: 768px) {
    align-items: center;

    .flex {
      gap: 10px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    .flex {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
    p {
      font-size: 10px;
    }
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  cursor: pointer;

  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    height: 48px;
    width: 48px;
    font-size: 18px;
  }
`;