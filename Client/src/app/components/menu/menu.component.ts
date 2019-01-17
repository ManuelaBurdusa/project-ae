import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }
  user_name: any = '';
  activeComponent: any;

  ngOnInit() {
    this.user_name = localStorage.getItem('user_name');
  }
  menuItems = [
    { name: 'Employee Management', route: '/employees' },
    { name: 'Projects', route: '/projects' },
    { name: 'Users', route: '/users' }]

  redirectTo(dest) {
    this.activeComponent = dest;
    this.router.navigateByUrl(dest);
  }
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
