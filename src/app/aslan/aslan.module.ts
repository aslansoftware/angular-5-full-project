import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { AslanComponent } from './aslan.component';
import { AslanService } from './aslan.service';
import {MyFilterPipe} from './aslan.pipe';
// Mesarument pipe



@NgModule({
  imports: [

    RouterModule.forRoot([
      { path: 'aslan', component: AslanComponent },
    ]),
    SharedModule,
  ],
  declarations: [
    AslanComponent,
    MyFilterPipe,
  ],
  providers: [
    AslanService,
  ],
})
export class AslanModule { }
