import { useState } from "react";
import { useLoaderData } from "react-router-dom";


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
            <h1 className="text-center font-bold text-red-600 text-3xl my-5">All Tourists Spot Pages</h1>
            <div className="flex items-center justify-center my-5">
                <details className="dropdown">
                    <summary className="m-1 btn bg-secondary text-xl">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={handleCost}><a>Average Cost</a></li>
                    </ul>
                </details>
            </div>
            <div className="text-center font-bold text-xl">
                <h1 className="text-red-600 underline"> Total Spots : {spots.length} </h1>
                {
                    place.map(spot => <li className="my-2"
                        key={spot._id}>Spot Name : {spot.spot_name}
                        Average Cost : {spot.average_cost}
                        User Email  : {spot.email}</li>)
                }

            </div>


        </div>
    );
};

export default AllTouristsSpot;