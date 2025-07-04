export interface User {
    id:number;
    fullName:string;
    email:string;
    password:string;
    role:string;
    status:string;
    created_at:Date;
    updated_at:Date;
    isVerified:boolean;

}