import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import {BigTextDirective, StrongTextDirective,HighlightDirective} from './../directives/big-text.directive';
import {DirectiveExampleComponent} from './directivespage.component';

@NgModule({
  imports: [

    RouterModule.forRoot([
      { path: 'directivespage', component: DirectiveExampleComponent },
    ]),
    SharedModule
  ],
  declarations: [
    DirectiveExampleComponent,
    BigTextDirective,
    StrongTextDirective,
    HighlightDirective,
  ],
  providers: [],
})
export class DirectivePageModule { }
