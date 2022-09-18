import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as ActionsCreators from '../store/actions/note'
export const useActions = () =>{
    const dispatch = useDispatch()
    return bindActionCreators(ActionsCreators , dispatch)
}