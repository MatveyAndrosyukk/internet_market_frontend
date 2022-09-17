import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as DishesActionCreators from "../../redux/action_creators/dishes";

export const useDishesActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(DishesActionCreators, dispatch)
}