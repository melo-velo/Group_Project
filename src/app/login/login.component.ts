import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  isAuthenticated = false;

  constructor(public oktaAuth: OktaAuthService) {
    // subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }
  async ngOnInit(): Promise<void> {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

  async login(): Promise<void> {
    await this.oktaAuth.signInWithRedirect();
  }
}

