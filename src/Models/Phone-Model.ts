import { v4 as uuid } from "uuid";

export class PhoneModel {
      public phoneId: string;
      public brandId: string;
      public name: string;
      public description: string;
      public rating: number;
      public price: number;
      public picture: string;

      constructor(phone: PhoneModel) {
            this.phoneId = uuid();
            this.brandId = phone.brandId;
            this.name = phone.name;
            this.description = phone.description;
            this.rating = phone.rating;
            this.price = phone.price;
            this.picture = phone.picture;
      }
}


