import { AiFillDelete } from "react-icons/ai";
import { IoMdArchive } from "react-icons/io";
import styled from "styled-components";

const SummaryTableHeader = () => {
  return (
    <Header>
      <div>
        <h4>Category</h4>
      </div>
      <div>
        <h4>Active</h4>
      </div>
      <div>
        <h4>Archieve</h4>
      </div>
      
    </Header>
  );
};

const Header = styled.div`
  border-radius: 5px;
  background-color: #747474;
  display: flex;
  flex-direction: row;
  height:35px;
  margin-bottom:10px;
  div {
    justify-content: flex-start;
    display: flex;
    align-items: center;
    align-content: space-around;
    padding-left:10px;
    
    width: 33%;
  }
  
`;

export default SummaryTableHeader;
