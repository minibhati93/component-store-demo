import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { StoreService } from './store.service';

@NgModule({
  declarations: [AppComponent, CarListComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [StoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
