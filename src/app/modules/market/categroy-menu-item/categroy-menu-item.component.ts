import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-categroy-menu-item',
  templateUrl: './categroy-menu-item.component.html',
  styleUrl: './categroy-menu-item.component.css'
})
export class CategroyMenuItemComponent {
    @Input() categoryName!: string;
    @Output() selected = new EventEmitter<string>();

    onSelected() {
      this.selected.emit(this.categoryName);
    }
}
