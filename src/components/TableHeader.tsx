import { AiFillDelete } from "react-icons/ai";
import { IoMdArchive } from "react-icons/io";
import styled from "styled-components";

const TableHeader = () => {
  return (
    <Header>
      <div>
        <h4>Name</h4>
      </div>
      <div>
        <h4>CteatedAt</h4>
      </div>
      <div>
        <h4>Category</h4>
      </div>
      <div>
        <h4>Cotent</h4>
      </div>
      <div>
        <h4>Dates</h4>
      </div>
      <div className="buttons">
        <h4>
          <IoMdArchive />
          <AiFillDelete />
        </h4>
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
    
    width: 20%;
  }
  .buttons{
    
    justify-content: center;
  }
`;

export default TableHeader;
