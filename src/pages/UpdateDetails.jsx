import { useLoaderData } from "react-router-dom";

const UpdateDetails = () => {
    const spot = useLoaderData();
    const handleUpdate = () => {

    }
    return (
        <div className="border-2 w-1/2 mx-auto p-2 my-10">
            <h1 className="text-center font-bold text-xl">Update Tourists Spot</h1>
            <form onSubmit={handleUpdate}>
                <div className="flex flex-col space-y-2 my-10">
                    <div className="flex gap-2 w-full ">
                        <div className="w-1/2  ">
                            <label className="font-medium pl-1">Tourists Spot Name</label> <br />
                            <input defaultValue={spot.spot_name} className="w-full p-2 my-2" placeholder="Enter Tourists Spot Name" type="text" name="spot_name" id="" />
                        </div>
                        <div className="w-1/2">
                            <label className="font-medium pl-1">Country Name</label> <br />
                            <input defaultValue={spot.country_name} className="w-full p-2 my-2" placeholder="Enter Country Name" type="text" name="country_name" id="" />
                        </div>
                    </div>
                    <div className="flex gap-2 w-full ">
                        <div className="w-1/2  ">
                            <label className="font-medium pl-1">Location</label> <br />
                            <input defaultValue={spot.location} className="w-full p-2 my-2" placeholder="Enter Location" type="text" name="location" id="" />
                        </div>
                        <div className="w-1/2">
                            <label className="font-medium pl-1">Seasonality</label> <br />
                            <input defaultValue={spot.season} className="w-full p-2 my-2" placeholder="Enter Season" type="text" name="season" id="" />
                        </div>
                    </div>
                    <div className="flex gap-2 w-full ">
                        <div className="w-1/2">
                            <label className="font-medium pl-1">Average Cost</label> <br />
                            <input defaultValue={spot.average_cost} className="w-full p-2 my-2" placeholder="Enter Average Cost" type="number" name="average_cost" id="" />
                        </div>
                        <div className="w-1/2">
                            <label className="font-medium pl-1">Travel Time</label> <br />
                            <input defaultValue={spot.travel_time} className="w-full p-2 my-2" placeholder="Enter Travel Time" type="number" name="travel_time" id="" />
                        </div>
                    </div>
                    <div className="flex gap-2 w-full ">
                        <div className="w-1/2">
                            <label className="font-medium pl-1">Total Visitors Per Year</label> <br />
                            <input defaultValue={spot.visitor} className="w-full p-2 my-2" placeholder="Enter Total Visitors Per Year" type="number" name="visitor" id="" />
                        </div>
                        <div className="w-1/2">
                            <label className="font-medium pl-1">Image</label> <br />
                            <input defaultValue={spot.photo} className="w-full p-2 my-2" placeholder="Enter Photo URL" type="text" name="photo" id="" />
                        </div>
                    </div>
                    <div className="flex gap-2 w-full ">
                        <div className="w-full">
                            <label className="font-medium pl-1">Short description</label> <br />
                            <input defaultValue={spot.description} className="w-full h-[100px] p-2 my-2" placeholder="Write something" type="text" name="description" id="" />
                        </div>
                    </div>
                    <input className="btn btn-success w-full" type="submit" value="Update" />
                </div>
            </form>
        </div>
    );
};

export default UpdateDetails;