import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

    baseUrl = "https://reqres.in/api/"; 

  constructor() { }
}
