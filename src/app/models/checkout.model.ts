export class Checkout {
    // constructor(public name: string, public email_from: string) {
    // }
    constructor(public full_name: string,
                public address_line_1: string,
                public address_line_2: string,
                public city: string,
                public region: string,
                public zip: string, 
                public phone_number: string,
                public cart: Array<any>){

    }

}
