import User from "./user.model";

export const createUserToDb = async () => {
    //Instance
    const user = await new User({
        id: "8000",
        role: "student",
        password: 'Jhakanaka',
        name: {
            firstName: "Mezba",
            lastName: "Abedin",
            middleName: "Partian",
        },
        gender: "male",
        email: "abc@gmailcom",
        contactNo: '011111111',
        emergencyContactNo: '233333333',
        presentAddress: 'Uganda',
        permanentAddress: "Usa",
    })
    await user.save();
    return user;
};