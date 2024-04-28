import { Link } from "react-router-dom";

const CountryCard = ({country}) => {
    return (
        <Link to={`/countryToSpot/${country._id}`} className="w-96 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img src={country.photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-1 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide ">{country.name}</h2>
                    <p className="dark:text-gray-800">{country.description}</p>
                </div>
            </div>
        </Link>
    );
};

export default CountryCard;