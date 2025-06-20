
export type UserInput = {
  email: string;
  name: string;
  password: string;
  gender: string;
  firstName:string,
  lastName:string,
  phone:string
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