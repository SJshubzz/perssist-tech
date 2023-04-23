import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/seller';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  sellers: any | Seller[];
  constructor(private AuthServiceService: AuthServiceService) {}
  ngOnInit(): void {
    this.getSeller();
  }
  private getSeller() {
    this.AuthServiceService.getSellerList().subscribe((data) => {
      this.sellers = data;
    });
  }
}
