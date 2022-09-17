import {IDish} from "../types/dish";
import axios from "axios";

export default class DishesService {
    static async addDish(dish: IDish) {
        try {
            const response = await axios.post<IDish>('https://internet-market-ma.herokuapp.com/dishes', dish)
            console.log(response.data)
        } catch (e) {
            console.log('Add dish method failed!')
        }
    }
}