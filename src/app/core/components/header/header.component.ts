import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input({required : true}) userImage :string =''
  navList = ["Home" , "TV Shows" , "News & Popular" , "My List" , "Browse My Language"]
}
