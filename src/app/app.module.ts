import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketModule } from "./modules/market/market.module";
import { SharedModule } from './modules/shared/shared.module';
import { CoreModule } from './modules/core/core.module';
import { Route, RouterModule, Routes } from '@angular/router';
import { EmailValidator } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    MarketModule,
   
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
