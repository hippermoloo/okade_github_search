import { AxiosResponse } from "axios";
import http from "../httpService";
import { AllUserDto } from "./dto/allUserDto";
import { UserDto } from "./dto/userDto";

class UserService {

    public async getAllUsers(): Promise<AllUserDto[]> {
        let result: AxiosResponse = await http.get('users');
        return result.data.result;
    }

    public async getUsers(username:string): Promise<UserDto> {
        let result: AxiosResponse = await http.get(`users/${username}`);
        return result.data.result;
    }
}

export default UserService;