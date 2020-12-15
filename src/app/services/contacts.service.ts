import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Contact } from '../models/contact.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ContactsService {
    constructor(private httpclient: HttpClient) {  }

    baseurl: string = "http://localhost:3000/";

    contact: Contact;
    jsonContacts;

    postContact(data: any) {
        return this.httpclient.post(this.baseurl + 'createLead', data, {responseType: 'text'})
        .subscribe(
        (val) => {
          console.log('POST call successful value returned in body', val);
        },
        response => {
          console.log('POST call in error', response);
        },
        () => {
          console.log('The POST observable is now completed.');
        });
    }

}
