import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tea } from './Tea';
import { teas } from './teas';

@Component({
  selector: 'app-tea-result',
  templateUrl: './tea-result.component.html',
  styleUrls: ['./tea-result.component.scss']
})
export class TeaResultComponent implements OnInit {
  id!: number;
  tea: Tea | undefined;

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id']
    })

    this.tea = teas[this.id-1];
  }

}
