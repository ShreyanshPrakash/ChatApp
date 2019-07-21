import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatAppService } from './../chat-app.service';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.scss']
})
export class ChatAppComponent implements OnInit {

  socket: any;
  message: any;
  userName: any;
  chatRoom: any;

  constructor( private chatService: ChatAppService) { }

  ngOnInit() {
    this.chatService.receive().subscribe((data: any) => {
      console.log("receive "+ JSON.stringify(data));
      this.chatRoom = document.getElementsByClassName('chatRoom')[0];
      this.chatRoom.innerHTML += data.handle + " : " +data.message+ '<br>'; 
    });
    let d = new Date();
    console.log("date "+d.getDate());
    console.log("Day "+d.getDay());
    console.log("Yerar "+d.getFullYear());
    console.log("Month "+d.getMonth());
    console.log("Time "+d.getTime());
    console.log("timeZXone "+d.getTimezoneOffset());
  }

  send(){
    this.message = (<HTMLInputElement>document.getElementById('message')).value;
    this.userName = (<HTMLInputElement>document.getElementById('userName')).value;
    this.chatRoom = document.getElementsByClassName('chatRoom')[0];

    if(this.message){
      this.chatRoom.innerHTML += this.userName + " : " +this.message+ '<br>'; 
      this.chatService.send(this.message,this.userName);
      this.message = '';
    }
  }
}
