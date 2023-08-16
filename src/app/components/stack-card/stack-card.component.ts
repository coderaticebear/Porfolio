import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stack-card',
  templateUrl: './stack-card.component.html',
  styleUrls: ['./stack-card.component.css']
})
export class StackCardComponent {
  @Input() title = '';
  @Input() description='';
}
