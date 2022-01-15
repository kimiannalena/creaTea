import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { teas } from '../tea-result/teas';
import { Tea } from '../tea-result/Tea';

@Component({
  selector: 'app-tea-finder',
  templateUrl: './tea-finder.component.html',
  styleUrls: ['./tea-finder.component.scss']
})
export class TeaFinderComponent implements OnInit {
  teas: Tea[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.teas = teas;
  }

  showResult(teaID: number) {
    let chosenTea: Tea | undefined = this.getTea(teaID);
    this.router.navigate(['tee', chosenTea?.id])
  }

  getTea(id: number): Tea | undefined {
    return teas.find(tea => tea.id = id);
  }
}
