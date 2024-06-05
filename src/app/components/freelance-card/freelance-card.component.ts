import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Freelance } from '../../../freelances-example';

@Component({
  selector: 'app-freelance-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './freelance-card.component.html',
  styleUrl: './freelance-card.component.css'
})
export class FreelanceCardComponent {
  @Input() freelance: Freelance | undefined;
}
