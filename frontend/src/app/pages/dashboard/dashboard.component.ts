import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {ApiResponseInterface} from "../../interfaces/apiResponse.interface";
import {ApiService} from "../../services/api.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  title = 'Passport';

  public currentDate: number =0;

  public contentWrapClass: string = 'content-wrapper';

  public spinnerColor: string = '#dc006b';

  private fetchingNotifications: boolean = false;

  public systemName: string = 'Passport';

  public unreadNotifications: number = 0;

  public chartAreaOptions: any = {
    xkey: 'y',
    ykeys: ['a', 'b', 'c'],
    labels: ['jkjfd','dfdfd']
  }

  public chartAreaData = [
    { y: '2006', a: 100, b: 90 },
    { y: '2007', a: 75,  b: 65 },
    { y: '2008', a: 50,  b: 40 },
    { y: '2009', a: 75,  b: 65 },
    { y: '2010', a: 50,  b: 40 },
    { y: '2011', a: 75,  b: 65 },
    { y: '2012', a: 100, b: 90 }
  ];

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
