import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    username = "";
    buttonDisabled = true;
  constructor() {

  }

  ngOnInit() {
  }

  onClearInput(){
    this.username = "";
    this.buttonDisabled = true;
  }
  onUpdateUsername(event: any){
    this.username = event.target.value;
    if(this.username==""){
        this.buttonDisabled = true;
    }else {
    this.buttonDisabled = false;
  }
  }

}
