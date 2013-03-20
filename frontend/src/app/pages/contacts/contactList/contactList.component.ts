import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";



@Component({
  selector: 'app-contactList',
  templateUrl: './contactList.component.html',
  styleUrls: ['./contactList.component.scss']
})
export class ContactListComponent implements OnInit{
  title = 'Passport';

  public id: number = 1;

  public currentDate: number =0;

  public contentWrapClass: string = 'content-wrapper';

  public spinnerColor: string = '#dc006b';

  private fetchingNotifications: boolean = false;

  public systemName: string = 'Passport';

  public unreadNotifications: number = 0;


  public notifications: any[] = []; /** @todo Make notificatons interface and workings */

  constructor(private toast: ToastrService) {



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
