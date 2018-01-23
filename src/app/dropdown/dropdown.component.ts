import { Component , Input} from '@angular/core';



@Component({
  selector: 'dropdown',
  template: './dropdown.component.html'
})
export class AutosuggestComponent {

  @Input() viewModel: string[];
  @Input() isOpenAA: boolean = false;
}
