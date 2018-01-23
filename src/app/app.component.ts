import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div class='container'>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" [routerLink]="['/welcome']" >Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" [routerLink]="['/products']">Product List</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" [routerLink]="['/aslan']">Aslan Test</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" [routerLink]="['/directivespage']">Directives Examples</a>
          </li>
        </ul>
      </div>
    </nav>
      
        
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
