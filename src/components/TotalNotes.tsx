import styled from "styled-components";
import { useTypedSelector } from "../hooks/useTypeSelector";

const TotalNotes = () => {
  const { total } = useTypedSelector((store) => store);
  const { arch, active } = total;
  return (
    <Container>
      <div className="row">
        <div>
          <h5>Random Thougth</h5>
        </div>
        <div>
          <p>{active.random}</p>
        </div>
        <div>
          <p>{arch.random}</p>
        </div>
      </div>
      <div className="row">
        <div>
          <h5>Idea</h5>
        </div>{" "}
        <div>
          <p>{active.idea}</p>
        </div>
        <div>
          <p>{arch.idea}</p>
        </div>
      </div>
      <div className="row">
        <div>
          <h5>Task</h5>
        </div>
        <div>
          <p>{active.task}</p>
        </div>
        <div>
          <p>{arch.task}</p>
        </div>
      </div>
      <div className="row">
        <div>
          <h5>Quote</h5>
        </div>
        <div>
          <p>{active.quote}</p>
        </div>
        <div>
          <p>{arch.quote}</p>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .row {
    margin-bottom: 5px;
    background-color: #c3ceefc8;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div {
      justify-content: flex-start;
      display: flex;
      align-items: center;
      align-content: space-around;
      padding-left: 10px;
      width: 33%;
    }
  }
`;

export default TotalNotes;
