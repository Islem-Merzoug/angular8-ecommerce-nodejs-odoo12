import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/contact.model';
import { ContactsService } from '../services/contacts.service';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  contactUsForm: FormGroup;
  contact: Contact;
  jsonContact;


  constructor(private formBuilder: FormBuilder, private contactsService: ContactsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactUsForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ''
    });
  }

  onSaveContact() {
    const name = this.contactUsForm.get('name').value;
    const email_from = this.contactUsForm.get('email').value;
    const message = this.contactUsForm.get('message').value;

    const newContact = new Contact(name, email_from);
    newContact.message = message;
    newContact.type = 'lead';
    console.log('newContact: ', newContact);

    // const newContact2 = new Contact('amine', 'i.merzoug16@gmailcom');


    this.sendContact(newContact);
  }

  sendContact(newContact: Contact) {
    this.contact = newContact;
    // this.jsonContact = JSON.stringify(this.contact);
    this.contactsService.postContact(this.contact);
    console.log(this.contact);
  }

}

