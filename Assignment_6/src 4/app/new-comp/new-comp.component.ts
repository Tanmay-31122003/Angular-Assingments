import { Component } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  standalone: true,
  imports: [],
  templateUrl: './new-comp.component.html',
  styleUrl: './new-comp.component.css'
})
export class NewCompComponent 
{
  public str : string = "Marvellous Infosystem";

  public Upper()
  {
    this.str = this.str.toUpperCase();
  }
  public Lower()
  {
    this.str = this.str.toLowerCase();
  }

}
