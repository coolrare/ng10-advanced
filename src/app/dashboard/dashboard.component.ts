import { Component, OnInit } from '@angular/core';
import { chartAreaDemo } from '../chartAreaDemo';
import { chartPieDemo } from '../chartPieDemo';
import { Router } from '@angular/router';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    chartAreaDemo();
    chartPieDemo();
  }

  goColor(type: number, name: string) {
    // this.router.navigateByUrl('/utilities/color/' + type + '?name=' + name);
    // this.router.navigateByUrl(`/utilities/color/${type}?name=${name}`);

    // this.router.navigate(['/utilities/color/' + type]);
    this.router.navigate(['/utilities/color', type], {
      queryParams: {
        name,
        key: 123
      }
    });
    // this.router.navigate(['/utilities', 'color', type]);
    // this.router.navigate(['/', 'utilities', 'color', type]);
  }

}
