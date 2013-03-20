import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";



@Component({
  selector: 'app-groupList',
  templateUrl: './groupList.component.html',
  styleUrls: ['./groupList.component.scss']
})
export class GroupListComponent implements OnInit{

  public id: number = 1;
  constructor() {}

  ngOnInit(): void {}

}
