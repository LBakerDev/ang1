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

  constructor() {
    setTimeout(() => {
      this.allNewServer = true; }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    return this.serverCreationStatus = 'Server was created';
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

}
