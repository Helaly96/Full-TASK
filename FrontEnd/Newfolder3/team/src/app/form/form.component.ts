import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup , Validators} from "@angular/forms";
import { RacingServicesService } from '../racing-services.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {





	x:any;
	inputValue:any;


changeListener($event) : void{
	this.readThis($event.target);
}

readThis(inputValue:any):void {
	var file:File = inputValue.files[0];
	var myReader:FileReader = new FileReader();
	if(file.size < 510000){
		myReader.readAsDataURL(file);
		myReader.onloadend = (e) => {
			var base64Image = myReader.result;
			//this.x = myReader.result;
			//console.log(base64Image);
			//this.x ["fileupload"]=base64Image;

		}
	}
}



   constructor(private pc: RacingServicesService) {


   }

  y=  {"name":"Helaly291","email":"zfaesu@gmail.com","mobile":"01012305294","national_id":"12345678910","faculty":"Engineering","major":"Electrical","minor":"Computer","expected_year":"2020","university":"AinShams","profilepic":"/media/21.jpg"}

   submitMe(f){

   // 	 console.log(f.value)
    //  this.pc.getData();
    let val = f.value

    this.pc.postData(f.value)
   }
  ngOnInit() {
    // this.pc.postData(this.y)
  }

}
