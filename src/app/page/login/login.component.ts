
declare var google : any;
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  private router = inject(Router)

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:
        '215432081816-ko6dhqs2s12ib6ma5r64075r3sesig4i.apps.googleusercontent.com',
      callback: (resp: any) => this.handleLogin(resp)
    });

    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 350,
    });
  }


  private decodeToken(token : string){
    return JSON.parse(atob(token.split('.')[1]))
  }

  handleLogin( response : any){

    if(response){
      ///decode token
      const payload = this.decodeToken(response.credential)


      ///store it in session
      sessionStorage.setItem("loggedInUser", JSON.stringify(payload))
      /// navigate to home/browse
      this.router.navigate(['browse'])
  

    }
  }


}
