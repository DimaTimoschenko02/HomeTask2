import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypeSelector";


const CreateNoteBtn = () =>{
    const navigate = useNavigate()
    return(
        <Button onClick={() => navigate('/note')}> Create</Button>
    )
}
export default CreateNoteBtn

const Button = styled.button`
width: 120px;
height: 35px;
background-color: #008e05;
color: #fff;
border-radius: 3px;
`;