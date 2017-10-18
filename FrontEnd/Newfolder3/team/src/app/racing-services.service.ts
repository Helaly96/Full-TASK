import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RacingServicesService {
	// x:any;

  constructor(private http:Http) { }
    getData ()
   {

    return this.http.get('http://127.0.0.1:8000/applicant').map((res) => res.json());

   }
 	postData(x){
		// console.log("a7a")
      // console.log(x)


  		return this.http.post('http://127.0.0.1:8000/applicant/',x).subscribe(res =>{
        console.log(res)
      })

    // return this.http.post('http://127.0.0.1:8000/applicant/',x)
		// .map((res) => res.json()
   }

  }
