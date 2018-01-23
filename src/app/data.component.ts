import {SidebarService} from './data.service';

export class SidebarComponent {
  asideVisible: any;

  constructor(private sidebarService: SidebarService) {
    this.asideVisible = sidebarService.isSidebarVisible;
  }
}

