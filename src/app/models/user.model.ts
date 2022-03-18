import { EnterpriseModel } from "./enterprise.model";

export class UserModel{
    id?:string;
    userName?:string;
    enterprise?:EnterpriseModel;
}