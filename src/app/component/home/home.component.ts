import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private userService: UserAuthService,
    private router: Router,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.userService.checkToken().subscribe(
      (response: any) => {
        this.router.navigate(['dashboard']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
