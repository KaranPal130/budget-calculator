import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem('', NaN);
  @Output() formSubmit : EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  
  isNewItem!:boolean

  constructor() { 
  }

  ngOnInit(){
    if(this.item) {
      //if item has a value
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
    }
  }

  onSubmit(form: NgForm){
    this.formSubmit.emit(form.value);
    form.reset();
  }
}
