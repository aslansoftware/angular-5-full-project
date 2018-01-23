import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SidebarService {
  isSidebarVisible: any = 'kakaka';

  sidebarVisibilityChange: Subject<any> = new Subject<any>();

  constructor()  {
    this.sidebarVisibilityChange.subscribe((value) => {
      this.isSidebarVisible = value;
    });
  }

  toggleSidebarVisibilty(newNumber: any) {
    console.log("newNumberrrr ::: ", newNumber);
    this.sidebarVisibilityChange.next(newNumber);
  }
}
