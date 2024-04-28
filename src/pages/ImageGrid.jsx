import { Link } from "react-router-dom";

const ImageGrid = ({ spot }) => {
    return (
        <div className="sm:w-96 md:w-80 lg:w-96 bg-base-100 shadow-xl rounded-t-0">
            <figure><img className="rounded-t-0" src={spot.photo} /></figure>
            <div className="p-2 flex flex-col">
                <h2 className="card-title my-2">{spot.spot_name}, {spot.country_name}</h2>
                <p className="">
                    {spot.description.length > 200 ? spot.description.slice(0, 200) : spot.description}
                </p>
                <Link state={spot.spot_name} to={`/details/${spot._id}`} className="btn btn-secondary my-3">View Details</Link>
            </div>
        </div>
    );
};

export default ImageGrid;