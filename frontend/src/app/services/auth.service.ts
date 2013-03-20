import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UserInterface} from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authKey = '1000040C097563627DKKJH34A9CACB61';

  private loggedInUser: UserInterface = null;


  /**
   *
   * @param api
   * @param router
   * @param http
   */
  constructor( private api: ApiService, private router: Router,private http: HttpClient ) {

    this.getLoggedInUserFromStorage();

    //console.log(this.loggedInUser);
  }

  getLoggedInUserFromStorage() : void{

    this.loggedInUser = <UserInterface>JSON.parse(localStorage.getItem(this.authKey + 'loggedInUser'));
  }

  /**
   *
   */
  getLoggedInUser() : UserInterface|null{

    return this.loggedInUser;
  }

  getToken() : string|null{

    this.getLoggedInUserFromStorage();

    return this.loggedInUser.csfrToken;

  }

  /**
   *
   * @param user
   * @param updateActiveSession
   */
  setUserToStorage(user: UserInterface, updateActiveSession: boolean = true) : void{

    localStorage.setItem(this.authKey + 'loggedInUser',JSON.stringify(user));

    if(updateActiveSession){
      this.getLoggedInUserFromStorage();
    }
  }

  /**
   *
   */
  isUserLoggedIn() : boolean{

    this.getLoggedInUserFromStorage();

    if(this.loggedInUser){
      return true;
    }

    return false;

  }

  /**
   *
   * @param email
   */
  setLoggedIn(email: string) : void{


    localStorage.setItem(this.authKey + 'loggedInUser',email);

    this.getLoggedInUserFromStorage();
  }


  logOut(): void{
    localStorage.removeItem(this.authKey + 'loggedInUser');

    this.loggedInUser = null;

    this.router.navigateByUrl('/login');

  }

  hasRole(role: string) : boolean{

    const userData = this.getLoggedInUser();

    return userData.roles.indexOf(role) !== -1;
  }


}
