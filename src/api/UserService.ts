import {IUser, UserAction, UserActionTypes} from "../types/user";
import axios from "axios";
import {Dispatch} from "redux";

export default class UserService {
    static async findUserByEmail(email: string) {
        try {
            const response = await axios.get<IUser>('https://internet-market-ma.herokuapp.com/users/email', {
                params: {
                    email
                }
            })
            return response.data
        } catch (e) {
            console.log("Find user by email method failed!")
        }
    }

    static async saveUser(signUpRequest: any) {
        try {
            await axios.post<IUser>('https://internet-market-ma.herokuapp.com/auth/signUp', signUpRequest)
        } catch (e) {
            console.log("Save user method failed!")
        }
    }
}