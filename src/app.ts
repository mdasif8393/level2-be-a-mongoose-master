import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';

const app:Application = express();

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req:Request, res:Response, next: NextFunction) => {

    //inserting a test data to mongodb

    /* 
    Step1: Interface
    Step2: Schema
    Step3: Model
    Step4: Database Query on Model
    */

    // res.send('Hello World!');
    // next();

    //1. creating an interface

    interface IUser{
        id: string;
        role: "student";
        password: string;
        name: {
            firstName: string;
            middleName?: string;
            lastName: string;
        };
        dateOfBirth?: string;
        gender: "male" | "female";
        email?: string;
        contactNo: string;
        emergencyContactNo: string;
        presentAddress: string;
        permanentAddress: string;
    }

    //2. Creating schema using interface
    const userSchema = new Schema<IUser>({
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
        email: String,
        contactNo: {type: String, required: true},
        emergencyContactNo: {type: String, required: true},
        presentAddress: {type: String, required: true},
        permanentAddress: {type: String, required: true},
 
    });

    //3. create model
    const User = model<IUser>('User', userSchema);

    //4. Create instance
    const createUserToDB =  async () => {
        const user = new User({
            id: 779,
            role: "student",
            password: 'Jhakanaka',
            name: {
                firstName: "Mejba",
                middleName: "Abedin",
                lastName: "Partian"
            },
            
            gender: "male",
            email: 'abc@gmail.com',
            contactNo: "017777",
            emergencyContactNo: "0188888",
            presentAddress: "Uganda",
            permanentAddress: "USA",
        });
        await user.save();
        console.log(user);
    };
    createUserToDB();

});

export default app;