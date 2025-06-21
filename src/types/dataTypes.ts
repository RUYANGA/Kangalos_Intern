import { AddCollege } from "../controllers/Admin/colleges";

export type UserInput = {
  email: string;
  name: string;
  password: string;
  gender: string;
  firstName:string,
  lastName:string,
  phone:string,
  dateOfBirth:Date
};

export type ResendOtpInput={
    email:string
}

 export type VerifyInput={
    email:string,
    otp:string
}

 export type LoginInput={
    email:string,
    password:string
}

export type FogetEmail={
    email:string
};

export type UniversityInput={
    name:string,
    description:string,
    location:string
}

export type AddCollege={
    name:string,
    description:string,
    location:string,
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    gender:string,
    phone:string,
    dateOfBirth:Date,
    jobTitle:string


}

export type AddSchool={
    name:string,
    description:string,
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    gender:string,
    phone:string,
    dateOfBirth:Date,
    jobTitle:string
}

interface ValidationErrorPayload {
  errors: {
    message: string;
    field?: string;
    in?: string;
    value?: unknown;
  }[];
}
