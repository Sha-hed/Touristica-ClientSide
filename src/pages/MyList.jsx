import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Route/AuthProvider";
import { Link } from "react-router-dom";


const MyList = () => {
    const { user } = useContext(AuthContext);
    const [myList, setMyList] = useState([]);
    useEffect(() => {
        fetch(`https://assignment-10-server-side-lake.vercel.app/mySpots/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyList(data))
    }, [])
    return (
        <div className="min-h-[calc(100vh-136px)]  text-center font-bold text-xl space-y-5">
            <div className="overflow-x-auto">
                <table className="table table-zebra w-3/4 mx-auto mt-10 text-center">
                    {/* head */}
                    <thead>
                        <tr className="font-bold text-lg text-black bg-gray-300 rounded-lg">
                            <th className="border-2"></th>
                            <th className="border-2">Name</th>
                            <th className="border-2">Country</th>
                            <th className="border-2">Average Cost</th>
                            <th className="border-2">Total Visitor Per Year</th>
                            <th className="border-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myList?.map((mine, id) => <tr key={mine._id}>
                                <th>{id + 1}</th>
                                <th>{mine.spot_name}</th>
                                <th>{mine.country_name}</th>
                                <th>{mine.average_cost}</th>
                                <th>{mine.visitor}</th>
                                <th className="flex space-x-3">
                                    <Link to={`/update/${mine._id}`} className="btn btn-success">Update</Link>
                                    <Link className="btn btn-error">Delete</Link>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

            <div>

            </div>

        </div>
    );
};

export default MyList;