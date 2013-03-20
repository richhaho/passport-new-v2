export interface UserInterface {
    id: number;
    email: string;
    displayName: string;
    username: string;
    fname: string;
    lname: string;
    csfrToken: string;
    roles: string[];
    createdDateTime:string;
    active: boolean;
}