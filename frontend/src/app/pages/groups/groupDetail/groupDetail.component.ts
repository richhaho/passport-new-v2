import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";



@Component({
  selector: 'app-groupDetail',
  templateUrl: './groupDetail.component.html',
  styleUrls: ['./groupDetail.component.scss']
})
export class GroupDetailComponent implements OnInit{

  public id: number = 1;

  constructor() {}

  ngOnInit(): void {}

}
