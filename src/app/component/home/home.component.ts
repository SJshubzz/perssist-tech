import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private userServices: UserAuthService, private router: Router) {}
  ngOnInit(): void {
    this.userServices.checkToken().subscribe(
      (Response: any) => {
        this.router.navigate(['seller-home']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
