import Loading from "Components/Layout-Area/Loading/Loading";
import { BrandModel } from "Models/Brand-Model";
import { SyntheticEvent, useEffect, useState } from "react";
import { PhoneModel } from "../../../Models/Phone-Model";
import phonesServices from "../../../Services/PhoneServices";
import PhoneCard from "../../Cards/PhoneCard/PhoneCard";
import "./HomePage.css";

function HomePage(): JSX.Element {

    const [phones, setPhones] = useState<PhoneModel[]>();
    const [brands, setBrands] = useState<BrandModel[]>();

    const getData = async () => {
        const phones = await phonesServices.getAllPhones();
        setPhones(phones);

        const brands = await phonesServices.getAllBrands();
        setBrands(brands);

    }

    useEffect(() => {

        getData();

    }, []);


    //Get phones by brandId - Selected value.
    async function getNewPhoneList(e: SyntheticEvent) {
        const brandId = (e.target as HTMLInputElement).value;
        const phones = await phonesServices.getPhonesByBrandId(brandId);
        setPhones(phones);

        //if brandId is "0" get all phones.
        if (brandId === "0") {
            setPhones(await phonesServices.getAllPhones());
        }
    }


    async function searchBox(e: SyntheticEvent) {
        //search input value.
        const searchInput = (e.target as HTMLInputElement).value;

        //set first letter to upper case.
        const searchInputFirstLetterUpperCase = searchInput.charAt(0).toUpperCase() + searchInput.slice(1);

        //find the current input box value with the upper case change
        const phones = await phonesServices.getAllPhones();
        setPhones(phones.filter(phone => phone.name.includes(searchInputFirstLetterUpperCase)));

        //if the search input is empty, get all phones.
        if (searchInput === " ") {
            setPhones(await phonesServices.getAllPhones());
        }

    }

    return (
        <div className="HomePage">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-6">
                        <select className="form-select form-select-sm" onChange={getNewPhoneList}>
                            <option defaultValue="" disabled>Select Brand...</option>
                            <option value={"0"}>Any</option>
                            {brands?.map(b => <option key={b.brandId} value={b.brandId}>{b.brandName}</option>)}
                        </select>
                    </div>

                    <div className="col-6">
                        <div className="mb-3">
                            <input type="text" placeholder="Search Phone..." className="form-control form-control-sm" onChange={searchBox} />
                        </div>
                    </div>
                </div>


                <div className="row">

                    {phones === undefined && <Loading />}

                    {brands?.map(brand =>
                        <div key={brand.brandId} className="list">
                            <h1 className="brandTitle">{brand.brandName}</h1>
                            {phones?.map(phone =>
                                phone.brandId === brand.brandId &&
                                <PhoneCard key={phone.phoneId} phone={phone} />
                            )}
                        </div>
                    )}

                </div>

            </div>
        </div>
    );
}

export default HomePage;
