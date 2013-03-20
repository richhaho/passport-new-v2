import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {ApiResponseInterface} from "../../../interfaces/apiResponse.interface";
import {ApiService} from "../../../services/api.service";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-contactDetail',
  templateUrl: './contactDetail.component.html',
  styleUrls: ['./contactDetail.component.scss']
})
export class ContactDetailComponent implements OnInit{
  title = 'Passport';
  
  public currentDate: number =0;

  public contentWrapClass: string = 'content-wrapper';

  public spinnerColor: string = '#dc006b';

  private fetchingNotifications: boolean = false;

  public systemName: string = 'Passport';

  public unreadNotifications: number = 0;


  public notifications: any[] = []; /** @todo Make notificatons interface and workings */

  constructor(private toast: ToastrService,  private api: ApiService, public auth: AuthService ) {



  }

  ngOnInit(): void {

  }

  /**
   * @todo Make this work
   * @param notif
   */
  markNotificationRead(notif:any){

  }



  nowYear() : number {

    let date = new Date();
    return this.currentDate = date.getFullYear();;
  }


}
