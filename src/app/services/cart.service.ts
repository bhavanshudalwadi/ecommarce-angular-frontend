import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient, private authService: AuthService, private router: Router) { }

  getCart() {
    if(this.authService.authToken) {
      return this.httpClient.get(
        `${environment.apiBaseURL}/products`,
        this.authService.commonHeadersWithAuth
      );
    }else {
      this.router.navigateByUrl('/login')
      return null
    }
  }
}
