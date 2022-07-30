import { PhoneModel } from "../Models/Phone-Model";
import brandsList from "../Utils/DB/brands.json";
import phonesList from "../Utils/DB/phones.json";


class PhoneServices {


      public async getAllPhones(): Promise<PhoneModel[]> {
            return phonesList;
      }

      public async getAllBrands() {
            return brandsList;
      }

      public async getPhonesByBrandId(brandId: string): Promise<PhoneModel[]>{
            const phones = phonesList.filter(p => p.brandId === brandId);
            return phones;
      }

      public async addToCart(phone: PhoneModel): Promise<void>{
            
      }


}
const phonesServices = new PhoneServices();
export default phonesServices;

