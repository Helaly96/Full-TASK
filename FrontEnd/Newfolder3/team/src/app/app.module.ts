import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { RacingServicesService } from './racing-services.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        { path:'form' , component:FormComponent},
        { path:'table' , component:TableComponent}
      ])
  ],
  providers: [RacingServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
