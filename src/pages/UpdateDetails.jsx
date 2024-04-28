import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateDetails = () => {
    const spot = useLoaderData();
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const spot_name = form.spot_name.value;
        const country_name = form.country_name.value;
        const location = form.location.value;
        const season = form.season.value;
        const average_cost = form.average_cost.value;
        const travel_time = form.travel_time.value;
        const visitor = form.visitor.value;
        const photo = form.photo.value;
        const description = form.description.value;
        form.reset();
        const SpotDetails = {
            spot_name, country_name, location, season
            , average_cost, travel_time, visitor, photo, description
        };
        console.log(SpotDetails);
        fetch(` https://assignment-10-server-side-dyd4q8yv5-shaheds-projects-5325f578.vercel.app/spots/${spot._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(SpotDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "tourist spot updated successfully!",
                        icon: "success"
                    });
                }
            })
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