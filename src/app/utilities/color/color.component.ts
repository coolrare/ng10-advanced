import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  name = '';
  type = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.type = +this.route.snapshot.paramMap.get('type');
    // this.type = this.route.snapshot.params['type'];

    this.route.paramMap.subscribe(params => {
      console.log(params.get('type'));
      if (params.get('type') !== null) {
        this.type = +params.get('type');
      }
    });

    this.name = this.route.snapshot.queryParamMap.get('name');

    this.route.queryParamMap.subscribe(params => {
      console.log(params.get('name'));
      if (params.get('name') !== null) {
        this.name = params.get('name');
      }
    });

  }

}
