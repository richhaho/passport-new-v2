import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";



@Component({
  selector: 'app-supplierList',
  templateUrl: './supplierList.component.html',
  styleUrls: ['./supplierList.component.scss']
})
export class SupplierListComponent implements OnInit{
 
  public id: number = 1;
  constructor() {}

  ngOnInit(): void {}
}
