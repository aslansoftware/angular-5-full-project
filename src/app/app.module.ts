import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {AutosuggestComponent } from './dropdown/dropdown.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import {AslanModule} from './aslan/aslan.module';
import {DirectivePageModule} from "./directivespage/directivespage.module";
import { AslanNewsComponent } from './aslan-news/aslan-news.component';
import { PizzasListComponent } from './pizzas-list/pizzas-list.component';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import { FormsModule } from '@angular/forms';


import {SidebarService} from './data.service';
// my pipe
import { CapitalizePipe } from './pipes/capitalize.pipe'; // import our pipe here

// Mesarument pipe
// import { MesaurementPipe } from './pipes/mesaurement.pipe'; // import our pipe here


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AslanNewsComponent,
    PizzasListComponent,
    PizzaFormComponent,
    CapitalizePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
        { path: 'welcome', component: WelcomeComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full'},
        { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    ProductModule,
    AslanModule,
    DirectivePageModule,
    FormsModule,
  ],
  providers: [SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
