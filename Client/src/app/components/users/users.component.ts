import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users: any;
  selectedUser: any = {};
  modalForEdit: boolean = false;
  newUser: any = {};
  displayedColumns: string[] = ['user_name', 'user_email', 'phone_number', 'role', 'edit', 'delete'];

  dataSource: any;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.verify();
    this.getUsers();
  }

  verify() {
    if (localStorage.getItem('user_name') == undefined) {
      this.router.navigateByUrl('/login')
    }
  }
  showEditModal(user) {
    this.selectedUser = user;
    this.modalForEdit = true;
  }

  showAddModal() {
    this.modalForEdit = false;
    this.selectedUser = this.newUser;
  }

  getUsers() {
    this.usersService.getUsers().then((usersArray) => {
      this.users = usersArray;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.sort = this.sort;
    })
  }

  updateUserInfo() {
    this.usersService.updateUser(this.selectedUser).then((resp) => {
      console.log(resp);
      this.getUsers();
      this.selectedUser = {};
    })
  }

  addUser() {

    this.usersService.addUser(this.newUser).then((response) => {
      this.getUsers()
    })
  }

  deleteUser(user) {
    let index = this.users.indexOf(user);
    this.users = this.users.splice(index, 1);
    this.usersService.deleteUser(user.id_user).then((response) => {
      this.getUsers();
    })

  }

}
