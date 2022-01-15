import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tea-result',
  templateUrl: './tea-result.component.html',
  styleUrls: ['./tea-result.component.scss']
})
export class TeaResultComponent implements OnInit {
  id: number | undefined;
  constructor(private activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id']
    })
  }

}
