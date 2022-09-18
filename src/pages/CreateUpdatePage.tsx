import { useLocation } from "react-router-dom";
import CreateUpdateForm from "../components/CreateOrUpdateNote";
import MyForm from "../components/CreateOrUpdateNote";


const CreateUpdatePage = () => {
  let location = useLocation();

  return(
    <CreateUpdateForm/>
  );
};

export default CreateUpdatePage;
