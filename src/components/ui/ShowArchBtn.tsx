import styled from "styled-components";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypeSelector";

const ShowArchBtn = () => {
  const { changeVisibility } = useActions();
  const { showActive } = useTypedSelector((state) => state);
  return (
    <Button onClick={() => changeVisibility()}>
      {" "}
      {showActive ? "Show Archieved" : "Show Active"}
    </Button>
  );
};
export default ShowArchBtn;

const Button = styled.button`
  width: 120px;
  height: 35px;
  background-color: #1b0d4f;
  color: #fff;
  border-radius: 3px;
`;
