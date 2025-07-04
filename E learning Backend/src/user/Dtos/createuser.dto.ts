export class createuserDto {
    fullName:string;
    passsword:string;
    email:string;
    role: 'STUDENT' |'INSTRUCTOR'| 'ADMIN';
}