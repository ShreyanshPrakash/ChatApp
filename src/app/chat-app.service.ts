import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatAppService {

  socket: any;

  constructor() { 
    this.socket = io();
  }

  send(message,userName){
    this.socket.emit('chatApp', {
      message: message,
      handle: userName
    });
  }

  receive(){ 
    return Observable.create((observer) => {
      this.socket.on('chatApp', (message) => {
          observer.next(message);
      }, error => {
        console.log("socket error "+ error);
      });
    }, error => {
      console.log("Observable error "+ error);
    });
  }

}
