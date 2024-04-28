import { Link } from "react-router-dom";


const CountryToSpotCard = ({ country }) => {
    return (
        <div className="w-96 bg-base-100 shadow-xl rounded-t-0">
            <figure><img className="rounded-t-0" src={country.photo} /></figure>
            <div className="p-2 flex flex-col">
                <h2 className="card-title mt-2 font-bold">{country.spot_name}, {country.country_name}</h2>
                <h3 className="font-medium text-lg">Location : {country.location}</h3>
                <div className="flex justify-between items-center">
                    <h3 className="font-medium">Average Cost : {country.average_cost} tk</h3>
                    <h3 className="font-medium">Seasonality : {country.season}</h3>
                </div>
                <div className="flex justify-between items-center">
                    <h3 className="font-medium">Travel Time : {country.travel_time} </h3>
                    <h3 className="font-medium">Visitor Per Year : {country.visitor}</h3>
                </div>
                <p className="">
                    {country.description.length > 200 ? country.description.slice(0, 200) : country.description}
                </p>
                <Link to={`/details/${country._id}`} className="btn btn-secondary my-3">View Details</Link>
            </div>
        </div>
    );
};

export default CountryToSpotCard;