const InsertCountries = () => {
    const docs = [
        { name: "cake", healthy: false },
        { name: "lettuce", healthy: true },
        { name: "donut", healthy: false }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.country_name.value;
        const photo = e.target.country_photo.value;
        const description = e.target.country_description.value;
        const user = { name, photo, description }
        fetch('  https://assignment-10-server-side-lake.vercel.app/insertCountry', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-2 my-10">
                    <div className="flex gap-2 w-full ">
                        <div className="w-full">
                            <label className="font-medium pl-1">Country Name</label> <br />
                            <input className="w-full p-2 my-2" placeholder="Enter Country Name" type="text" name="country_name" id="" />
                        </div>
                    </div>
                    <div className="flex gap-2 w-full ">
                        <div className="w-full">
                            <label className="font-medium pl-1">Photo Deooo</label> <br />
                            <input className="w-full p-2 my-2" placeholder="Enter Photo URL" type="text" name="country_photo" id="" />
                        </div>
                    </div>
                    <div className="flex gap-2 w-full ">
                        <div className="w-full">
                            <label className="font-medium pl-1">Short description</label> <br />
                            <input className="w-full h-[100px] p-2 my-2" placeholder="Write something" type="text" name="country_description" id="" />
                        </div>
                    </div>
                    <input className="btn btn-secondary w-full" type="submit" value="Add" />
                </div>
            </form>

        </div>
    );
};
export default InsertCountries;