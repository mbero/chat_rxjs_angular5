import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: Observable<any[]>;
  //messages: Array<any>;
  constructor(private db: AngularFirestore) {
    //this.messages = new Array<any>();

    /*
     db.collection('Chat').valueChanges().subscribe(response =>{
      for(let currentMessage of response){
        this.messages.push(currentMessage);
      }  
      console.log(response);
     });
     */

    this.messages = db.collection('Chat').valueChanges();

  }
  ngOnInit() {

  }

  formSubmitHandler(event: any) {
    this.db.collection('Chat').add({ 'name': event.name });
  }




}
