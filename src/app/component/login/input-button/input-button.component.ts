import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.css']
})
export class InputButtonComponent implements OnInit {
  DataList:any
  constructor(private router: Router) { }

  ngOnInit(): void {
  }



  getAlert(){
    this.DataList = "a@com"
    localStorage.setItem("cri", this.DataList)
    this.router.navigate(['/land']);
    


  }

  
}
