import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isErrorAlert=false
  isAlert=false
  alertMsg='Please enter correct email or password'
  userList=[
    {linkId:1,linkName:'shubham'},
    {linkId:2,linkName:'suraj'},
  ]
}
