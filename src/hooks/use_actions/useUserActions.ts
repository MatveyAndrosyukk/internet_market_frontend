import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as UserActionCreators from "../../redux/action_creators/user"

export const useUserActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(UserActionCreators, dispatch)
}