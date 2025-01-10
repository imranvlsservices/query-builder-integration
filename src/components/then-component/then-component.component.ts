import { Component, Input, OnInit } from '@angular/core';
import { ThenElseBlock } from '../../dto/rule-engin-dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-then-component',
  imports: [CommonModule],
  templateUrl: './then-component.component.html',
  styleUrl: './then-component.component.scss'
})
export class ThenComponentComponent implements OnInit {

  @Input() thenElseBlock!: ThenElseBlock; // Input property

  ngOnInit(): void {

  }

}
