const AddTouristsSpot = () => {
    const handleUpdate = e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.user_name.value;
        const email = form.user_email.value;
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
        const SpotDetails = {name, email, spot_name, country_name, location,season
        , average_cost, travel_time, visitor, photo, description};
        console.log(SpotDetails);
    }
    return (
        <div>
            <div>
                <div className="border-2 w-1/2 mx-auto p-2 my-10">
                    <h1 className="text-center font-bold text-xl">Add Tourists Spot</h1>
                    <form onSubmit={handleUpdate}>
                        <div className="flex flex-col space-y-2 my-10">
                            <div className="flex gap-2 w-full ">
                                <div className="w-1/2  ">
                                    <label className="font-medium pl-1">User Name</label> <br />
                                    <input className="w-full p-2 my-2" placeholder="Enter User Name" type="text" name="user_name" id="" />
                                </div>
                                <div className="w-1/2">
                                    <label className="font-medium pl-1">User Email</label> <br />
                                    <input  className="w-full p-2 my-2" placeholder="Enter User Email" type="email" name="user_email" id="" />
                                </div>
                            </div>
                            <div className="flex gap-2 w-full ">
                                <div className="w-1/2  ">
                                    <label className="font-medium pl-1">Tourists Spot Name</label> <br />
                                    <input  className="w-full p-2 my-2" placeholder="Enter Tourists Spot Name" type="text" name="spot_name" id="" />
                                </div>
                                <div className="w-1/2">
                                    <label className="font-medium pl-1">Country Name</label> <br />
                                    <input className="w-full p-2 my-2" placeholder="Enter Country Name" type="text" name="country_name" id="" />
                                </div>
                            </div>
                            <div className="flex gap-2 w-full ">
                                <div className="w-1/2  ">
                                    <label className="font-medium pl-1">Location</label> <br />
                                    <input className="w-full p-2 my-2" placeholder="Enter Location" type="text" name="location" id="" />
                                </div>
                                <div className="w-1/2">
                                    <label className="font-medium pl-1">Seasonality</label> <br />
                                    <input  className="w-full p-2 my-2" placeholder="Enter Season" type="text" name="season" id="" />
                                </div>
                            </div>
                            <div className="flex gap-2 w-full ">
                            <div className="w-1/2">
                                    <label className="font-medium pl-1">Average Cost</label> <br />
                                    <input className="w-full p-2 my-2" placeholder="Enter Average Cost" type="number" name="average_cost" id="" />
                                </div>
                                <div className="w-1/2">
                                    <label className="font-medium pl-1">Travel Time</label> <br />
                                    <input className="w-full p-2 my-2" placeholder="Enter Travel Time" type="number" name="travel_time" id="" />
                                </div>
                            </div>
                            <div className="flex gap-2 w-full ">
                            <div className="w-1/2">
                                    <label className="font-medium pl-1">Total Visitors Per Year</label> <br />
                                    <input className="w-full p-2 my-2" placeholder="Enter Total Visitors Per Year" type="number" name="visitor" id="" />
                                </div>
                                <div className="w-1/2">
                                    <label className="font-medium pl-1">Image</label> <br />
                                    <input className="w-full p-2 my-2" placeholder="Enter Photo URL" type="text" name="photo" id="" />
                                </div>
                            </div>
                            <div className="flex gap-2 w-full ">
                            <div className="w-full">
                                    <label className="font-medium pl-1">Short description</label> <br />
                                    <input className="w-full h-[100px] p-2 my-2" placeholder="Write something" type="text" name="description" id="" />
                                </div>
                            </div>
                            <input className="btn btn-secondary w-full" type="submit" value="Add" />
                        </div>
                    </form>
                </div>




            </div>
        </div>
    );
};

export default AddTouristsSpot;