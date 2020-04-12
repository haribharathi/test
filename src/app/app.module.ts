import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule,MatFormFieldModule,MatInputModule } from '@angular/material';
import {} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ItemlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
