import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  userName = '';
  check: boolean;
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allNewServer = true; }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    return this.serverCreationStatus = `Server was created! Name is  ${this.serverName}`;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  clearInput() {
    if (this.userName !== 'james') {
      this.userName = '';
    }
    return this.userName;
  }

  isEmpty() {
    if (this.userName === '') {
      this.check = true;
    } else {
      this.check = false;
    }
  }

}
