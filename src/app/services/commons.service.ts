import { Injectable } from '@angular/core';

@Injectable()
export class CommonsService {

  constructor() {

  }


  checkIfURL(element: string): boolean {
    let isURL: boolean = false
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (element.match(regex)) {
      isURL = true;
    }
    return isURL;
  }

}
