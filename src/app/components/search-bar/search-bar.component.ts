import { FormsModule } from '@angular/forms';
import { Component, input,  model,  output } from '@angular/core';


@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  search = model<string>('Initial');
  
  searchButtonClicked = output({alias: 'submit'});

  searchClick() {
    this.searchButtonClicked.emit();
  }

 


}
