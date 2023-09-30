import { IUser } from "./user.interface";
import User from "./user.model";

//4. Create instance

export const createUserToDB =  async (payload: IUser):Promise<IUser> => { 
    //creating a new user  
    const user = new User(payload); //User -> class, user -> instance
    await user.save();  //built in instance method, custom instance methods
    //custom instance method 3
    console.log(user.fullName());
    return user;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
    const users = await User.find();
    return users;
}

export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({id: payload}, {name:1, email: 1});
    return user;
}

//static 3
export const getAdminUsersFromDB = async () => {
    const admins = await User.getAdminUsers();
    return admins;
};