import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {



constructor(
  public userService: UserService,
  private router:Router
) { }

ngOnInit(): void {

}


onClick() {
  this.userService.logout()
    .then(response => {
      console.log("funciona");
      this.router.navigate(['/']);
    })
    .catch(error => console.log(error));
}



}