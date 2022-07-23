import { v4 as uuid } from "uuid";

export class BrandModel {
      public brandId: string;
      public brandName: string;
      constructor(brand: BrandModel) {
            this.brandId = uuid();
            this.brandName = brand.brandName;
      }
}