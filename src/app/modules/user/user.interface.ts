export  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
        firstName: string,
        lastName: string,
        middleName?: string,
    };
    dateOfBirth: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
}