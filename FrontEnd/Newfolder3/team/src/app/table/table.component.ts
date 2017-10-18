import { Component, OnInit } from '@angular/core';
import { RacingServicesService } from '../racing-services.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  result:any;
    constructor(private pc: RacingServicesService) {}


    ngOnInit() {

       this.pc.getData().subscribe( (res) => {
       this.result = res;
       console.log(this.result)

    })

}

}