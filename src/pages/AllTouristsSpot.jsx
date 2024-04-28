import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CountryToSpotCard from "./CountryToSpotCard";


const AllTouristsSpot = () => {
    const spots = useLoaderData();
    const [place, setPlace] = useState(spots);
    const handleCost = () => {
        fetch('https://assignment-10-server-side-lake.vercel.app/sort')
            .then(res => res.json())
            .then(data => setPlace(data));
    }
    return (
        <div>
            <h1 className="text-center font-bold text-red-600 text-3xl my-5">All Tourists Spot</h1>
            <div className="flex items-center justify-center my-5">
                <details className="dropdown">
                    <summary className="m-1 btn bg-secondary text-xl">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={handleCost}><a>Average Cost</a></li>
                    </ul>
                </details>
            </div>
            <div className="container max-w-7xl p-6 mx-auto space-y-6 sm:space-y-12 mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        place?.map(country => <CountryToSpotCard key={country._id} country={country}></CountryToSpotCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllTouristsSpot;