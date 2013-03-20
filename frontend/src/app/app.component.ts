import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ApiService} from "./services/api.service";
import {ApiResponseInterface} from "./interfaces/apiResponse.interface";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Passport';

  public currentDate: number =0;

  public contentWrapClass: string = 'content-wrapper';

  public spinnerColor: string = '#dc006b';

  private fetchingNotifications: boolean = false;

  public systemName: string = 'Passport';

  public unreadNotifications: number = 0;


  public notifications: any[] = []; /** @todo Make notificatons interface and workings */

  constructor(
    private toast: ToastrService,  
    private api: ApiService, 
    private modalService: NgbModal, 
    public auth: AuthService
  ) {



  }

  ngOnInit(): void {
    this.nowYear();
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
