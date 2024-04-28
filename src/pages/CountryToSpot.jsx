import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CountryToSpotCard from "./CountryToSpotCard";

const CountryToSpot = () => {

    const country = useLoaderData();
    const [spot, setSpot] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/getByCountryName/${country.name}`)
            .then(res => res.json())
            .then(data => setSpot(data));
    }, [])
    console.log(country);
    return (
        <div >
            <div className=" container max-w-7xl p-6 mx-auto space-y-6 sm:space-y-12 mt-10">
                <h1 className="text-center text-5xl font-bold">{country.name} Tourist Spots </h1>
                <div className="min-h-[(100vh-136px)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        spot?.map(country => <CountryToSpotCard key={country._id} country={country}></CountryToSpotCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default CountryToSpot;