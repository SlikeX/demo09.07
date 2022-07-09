import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { FirstComponent } from './main/first/first.component';
import { SecondComponent } from './main/second/second.component';
import { ThirdComponent } from './main/third/third.component';
import { CardComponent } from './main/second/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
