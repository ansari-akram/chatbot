import { Injectable, Inject } from '@angular/core';

import { HttpClient } from '@angular/common/http'
// import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

declare const myTest: any;

@Injectable({
  providedIn: 'root'
})

export class Message {
  constructor(@Inject(String) public content: string, @Inject(String) public sentBy: string) {}
}

@Injectable()
export class ChatService {
  
  // user!: string;
  // umsg!: string;
  readonly WDUrl = "https://eu-gb.functions.appdomain.cloud/api/v1/web/sohailkst10%40gmail.com_dev/default/Translator_both.json";

  conversation = new BehaviorSubject<Message[]>([]);

  constructor(private http:HttpClient) { }

  // talk(val: any) {
      // return this.http.post(this.WDUrl, val);
    // }
  sendMessage(val: any){
    return this.http.post(this.WDUrl, val);
  }

  // Adds message to the source
  update(msg: Message) {
    this.conversation.next([msg]);
  }

  // Sends and receives messages
  converse(msg: any, speak: boolean, voiceOf: string) {
    console.log('msg ===',msg);
    let umsg = JSON.parse(JSON.stringify(msg))
        const speech = umsg.text;
    const userMessage = new Message(speech, 'user');

    // this.user = 'red';

    this.update(userMessage);
    console.log('full msg ===',umsg);
    console.log('User text =====',userMessage);

    // this.user = 'blue';

  //   return this.client.textRequest(msg).then(res => {
  //     const speech = res.result.fullfillment,speech;
  //     const botMessage = new Message(speech, 'bot');
  //     this.update(botMessage);
  //   });
  // }
    
    return this.http.post(this.WDUrl, msg)
      .subscribe(res => { console.log('response ====', res);
        let myObj = JSON.parse(JSON.stringify(res))

        const speech = myObj.message;
        // const sesVal = myObj.session;

        if (speak == true) {
          myTest(speech, voiceOf);
        };

        console.log('All values ==', speak, voiceOf)

        const botMessage = new Message(speech, 'bot');
        this.update(botMessage);

      });
  }
}


// let myObj = JSON.parse(myString);


// return this.http.post(this.WDUrl, msg)
// .subscribe(res => {
//   const speech = res.toString();
//   const botMessage = new Message(speech, 'bot');
//   this.update(botMessage);


// this.someMethod().subscribe(data => this.data = data);