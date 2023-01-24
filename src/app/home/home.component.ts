import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dialogref:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialogref.open(LoginComponent,({
      minWidth: '80vw', 
      minHeight: '75vh', 
      disableClose: false
    }))
  }
}
