import { Component } from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { RacingServicesService } from './racing-services.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  
}
