import styled from "styled-components";
import { useTypedSelector } from "../hooks/useTypeSelector";

const TotalNotes = () => {
  const { total } = useTypedSelector((store) => store);
  const { arch, active } = total;
  return (
    <Container>
        
      <div>
        <p>Random Thougth</p>
        <p>{active.random}</p>
        <p>{arch.random}</p>
      </div>
      <div>
        <p>Idea</p> <p>{active.idea}</p>
        <p>{arch.idea}</p>
      </div>
      <div>
        <p>Task</p>
        <p>{active.task}</p>
        <p>{arch.task}</p>
      </div>
      <div>
        <p>Quote</p>
        <p>{active.quote}</p>
        <p>{arch.quote}</p>
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const Header = styled.div`
    
`
export default TotalNotes;
