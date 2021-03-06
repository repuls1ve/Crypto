import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() sidebarFolded!: boolean 
  @Output() onSidebarToggle = new EventEmitter()

  constructor(public media: MediaObserver) {}

  toggleSidebar() {
    this.onSidebarToggle.emit()
  }
}
