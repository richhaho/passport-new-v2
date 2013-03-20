import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";



@Component({
  selector: 'app-bookingList',
  templateUrl: './bookingList.component.html',
  styleUrls: ['./bookingList.component.scss']
})
export class BookingListComponent implements OnInit{
  
  public id: number = 1;

  public chartBarOptions: any = {
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['jkjfd','dfdfd']
  }

  public chartBarData = [
    { y: '2006', a: 100, b: 90 },
    { y: '2007', a: 75,  b: 65 },
    { y: '2008', a: 50,  b: 40 },
    { y: '2009', a: 75,  b: 65 },
    { y: '2010', a: 50,  b: 40 },
    { y: '2011', a: 75,  b: 65 },
    { y: '2012', a: 100, b: 90 }
  ];
  constructor() {}

  ngOnInit(): void {
  }
}
