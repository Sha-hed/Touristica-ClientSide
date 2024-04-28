import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Route/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyList = () => {
    const { user } = useContext(AuthContext);
    const [myList, setMyList] = useState([]);
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/spots/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(() => {
                        const newList = myList?.filter(spot => spot._id !== id);
                        setMyList(newList);
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    useEffect(() => {
        fetch(`http://localhost:5000/mySpots/${user?.email}`)
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
                            <th className="border-2">Image</th>
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
                                <th>
                                    <div className="avatar">
                                        <div className="w-20 h-16 rounded-xl">
                                            <img src={mine.photo} />
                                        </div>
                                    </div>
                                </th>
                                <th>{mine.spot_name}</th>
                                <th>{mine.country_name}</th>
                                <th>{mine.average_cost}</th>
                                <th>{mine.visitor}</th>
                                <th className="flex space-x-3">
                                    <Link to={`/update/${mine._id}`} className="btn btn-success">Update</Link>
                                    <Link onClick={() => handleDelete(mine._id)} className="btn btn-error">Delete</Link>
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