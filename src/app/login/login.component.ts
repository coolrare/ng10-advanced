import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  data: any = {
    email: 'doggy.huang@gmail.com',
    password: '123123',
    rememberMe: true
  };

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';

    // setTimeout(() => {
    //   localStorage.setItem('token', 'JWT');
    //   const ret = this.route.snapshot.queryParamMap.get('ret');
    //   this.router.navigateByUrl(ret);
    // }, 3000);
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

  doSubmit(): void {
    // this.http.post('/save', this.data).subscribe(result => {
    // });
  }

}
