import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CensorService {

  constructor() { }

  public filtre(msg:string):String{
    var badWords = ["idiot","con"];
    for(let badWord of badWords ){
      msg = msg.replace(new RegExp(badWord, 'g'), "****");
    }
    return  msg;
  }

  public isContainsBadWord(msg:string):boolean{
      var oldMsg = msg;
      return this.filtre(msg) != oldMsg;
  }

}
