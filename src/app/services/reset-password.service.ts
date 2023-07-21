import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResetPassword } from '../models/reser-password.model';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  private baseUrl:string ="https://localhost:7150/api/User"
  constructor(private http:HttpClient) { }

  sendResetPasswordLink(email:string){
    return this.http.post<any>(`${this.baseUrl}/send-reset-email/${email}`,{})
  }
  resetPassword(resetPasswordObj:ResetPassword){
    return this.http.post<any>(`${this.baseUrl}/reset-password`,resetPasswordObj)
  }
}
