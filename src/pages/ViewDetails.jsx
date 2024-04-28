import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const spot = useLoaderData();
    return (
        <>
            <div className="max-w-6xl mx-auto min-h-[calc(100vh-136px)] bg-base-200 flex flex-col md:flex-row justify-center items-center p-2 gap-5">
                <div className="w-full rounded-lg">
                    <img className="rounded-lg" src={spot.photo} alt="" />
                </div>
                <div className="w-full space-y-2">
                    <h1 className="font-bold text-3xl">{spot.spot_name}, {spot.country_name}</h1>
                    <h1 className="font-bold text-xl">Location : {spot.location}</h1>
                    <h1 className="font-medium text-lg">Average Cost : {spot.average_cost}</h1>
                    <h1 className="font-medium text-lg">Visitor Per Year : {spot.visitor}</h1>
                    <p className="font-medium">{spot.description}</p>
                </div>
            </div>

        </>
    );
};

export default ViewDetails;