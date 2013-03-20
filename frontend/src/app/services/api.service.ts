import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponseInterface} from "../interfaces/apiResponse.interface";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /**
   * @var string
   */
  public url: string = environment.apiUrl; //'http://api.webuyanyhouse.local:8080/';





  /**
   *
   * @param httpClient
   */
  constructor(private httpClient: HttpClient) { }


  /**
   *
   * @param endpoint
   * @param headers
   * @return Observable<any>
   */
  get(endpoint: string, headers: object = {}) : Observable<ApiResponseInterface> {

    //const basicHeaders: object = {
      //'Authorization' : 'Basic ' + this.apiKey
    //};

    //const httpHeaders = new HttpHeaders({...basicHeaders, ...headers});

    //const call = this.httpClient.get<ApiResponseInterface>(this.url + endpoint, {headers: httpHeaders});
    const call = this.httpClient.get<ApiResponseInterface>(this.url + endpoint, {});


    return call;


  }


  /**
   *
   * @param endpoint
   * @param data
   * @param headers
   */
  post(endpoint: string, data: object = {}, headers: object = {}) : Observable<ApiResponseInterface> {

    /*const basicHeaders: object = {
      'Authorization' : 'Basic ' + this.apiKey,
      'Accept' : 'application/json',
      'Content-Type':  'application/json'
  };

    const httpHeaders = new HttpHeaders({...basicHeaders, ...headers});*/

    const call = this.httpClient.post<ApiResponseInterface>(this.url + endpoint, data,{});


    return call;
  }



  /**
   *
   */
  getBaseUrl(): string{
    return this.url;
  }


}
