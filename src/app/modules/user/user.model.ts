import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

//custom instance method
// type UserModel = Model<IUser, {}, IUserMethods>

//2. Creating schema using interface
//custom instance method
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
    id: {type: String, required: true, unique: true},
    role: {type: String, required: true},
    password: {type: String, required: true},
    name: {
        firstName: {
            type: String,
            required: true,
        },
        middleName: {
            type: String,
        },
        lastName: {
            type: String,
            required: true,
        },
    },
    dateOfBirth: {type: String},
    gender: {type: String, enum: ['male', 'female']},
    email: {type: String, required: true},
    contactNo: {type: String, required: true},
    emergencyContactNo: {type: String, required: true},
    presentAddress: {type: String, required: true},
    permanentAddress: {type: String, required: true},

});

//custom instance method 2
userSchema.method('fullName', function fullName(){
    return this.name.firstName + ' ' + this.name.lastName;
});

//static 2
userSchema.static('getAdminUsers', async function getAdminUsers() {
    const admins = await this.find({role: 'admin'});
    return admins;
});

//3. create model
//custom instance method
const User = model<IUser, UserModel>('User', userSchema);

export default User;

//instance methods --> instance  er method
//class -> instance methods -> instance methods
