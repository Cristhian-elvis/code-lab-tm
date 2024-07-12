import {Component, Input} from '@angular/core';
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [
    TitleCasePipe
  ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export default class InfoComponent {
  @Input() course: string = ''
}
