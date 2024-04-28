import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Route/AuthProvider";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import './Home.css'
import { useLoaderData } from "react-router-dom";
import ImageGrid from "./ImageGrid";
import CountryCard from "./CountryCard";



const Home = () => {
    const spots = useLoaderData();
    const { user } = useContext(AuthContext);
    const [country, setCountry] = useState([]);

    useEffect(() => {
        // https://assignment-10-server-side-c8uzqhnnh-shaheds-projects-5325f578.vercel.app
        fetch('http://localhost:5000/country')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])

    return (
        <>
            {/* Slider Section  */}
            <div>
                {/* Banner Banao hala Joldi */}
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide className="w-full min-h-[calc(100vh-136px)] first">
                        <div className="flex justify-between items-center min-h-screen px-1 md:px-32">
                            <div className="text-white font-bold space-y-3 w-1/2">
                                <h1 className="text-xl md:text-3xl uppercase">Rangamati</h1>
                                <h1 className="text-2xl md:text-6xl">Bangladesh</h1>
                                <p className="text-lg md:text-2xl">Renowned for its stunning natural beauty, with lush green hills, serene lakes, and picturesque landscapes</p>
                                <button className="btn btn-active btn-accent font-bold">Read More</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-full min-h-screen second">
                        <div className="flex justify-between items-center min-h-screen px-1 md:px-32">
                            <div className="text-white font-bold space-y-3 w-3/4">
                                <h1 className="text-xl md:text-3xl uppercase">Angkor Wat temple </h1>
                                <h1 className="text-2xl md:text-6xl">Cambodia</h1>
                                <p className="text-lg md:text-2xl">One of the most iconic and well-preserved archaeological sites in Southeast Asia and is renowned for its grandeur, architectural beauty, and historical significance.</p>
                                <button className="btn btn-active btn-accent font-bold">Read More</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-full min-h-screen third">
                        <div className="flex justify-between items-center min-h-screen px-1 md:px-32">
                            <div className="text-white font-bold space-y-3 w-3/4">
                                <h1 className="text-xl md:text-3xl uppercase">Bali</h1>
                                <h1 className="text-2xl md:text-6xl">Indonesia</h1>
                                <p className="text-lg md:text-2xl">Indonesian island known for its stunning beaches, lush landscapes, vibrant culture, and rich spiritual heritage. Located in the westernmost end of the Lesser Sunda Islands</p>
                                <button className="btn btn-active btn-accent font-bold">Read More</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-full min-h-screen fourth">
                        <div className="flex justify-between items-center min-h-screen px-1 md:px-32">
                            <div className="text-white font-bold space-y-3">
                                <h1 className="text-xl md:text-3xl">Penang</h1>
                                <h1 className="text-2xl md:text-6xl">Malaysia</h1>
                                <p className="text-lg md:text-2xl">Penang Island, often referred to as the "Pearl of the Orient," is the heart of the state and a popular tourist destination. George Town, the capital city of Penang, is a UNESCO World Heritage Site known for its well-preserved colonial architecture, vibrant street art, and bustling street markets.</p>
                                <button className="btn btn-active btn-accent font-bold">Read More</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    ...
                </Swiper>



            </div >
            {/* Tourist Spot Section  */}
            <div className="container max-w-7xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="mt-5 space-y-3">
                    <h1 className="text-center font-bold text-4xl">Popular Tourists Spots</h1>
                    <p className="text-center font-medium text-xl">Inviting travelers to explore, discover, and create cherished memories that will last a lifetime</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        spots?.slice(0, 6).map(spot => <ImageGrid key={spot._id} spot={spot}></ImageGrid>)
                    }
                </div>
            </div>
            {/* Country Card Section  */}
            <div className="container max-w-7xl p-6 mx-auto space-y-6 sm:space-y-12 mt-10">
                <h1 className="text-center text-5xl font-bold">Countries</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        country?.map(country => <CountryCard key={country._id} country={country}></CountryCard>)
                    }
                </div>
            </div>

            {/* Best Places to Visit */}
            <div>
                <section className="dark:bg-gray-100 dark:text-gray-800">
                    <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                        <h1 className="text-center font-semibold text-5xl">Best Places To Visit</h1>
                        <div rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                            <img src="https://i.ibb.co/WKrFBsq/Bali.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                            <div className="p-6 space-y-2 lg:col-span-5">
                                <h3 className="text-2xl font-semibold underline">Bali, Indonesia</h3>

                                <p> Bali boasts picturesque beaches with crystal-clear waters, perfect for swimming, surfing, and snorkeling. Some of the most famous beaches include Kuta, Seminyak, and Jimbaran. Inland, you'll find terraced rice paddies, dense jungles, and majestic volcanic peaks, including Mount Agung, the island's highest point.Balinese culture is deeply rooted in Hindu traditions, evident in its numerous temples, rituals, and ceremonies. The island is adorned with thousands of temples, each a testament to Bali's spiritual richness. Visitors can witness traditional dances like the Barong and Kecak, explore local markets, and participate in cultural festivals.</p>
                            </div>
                        </div>
                        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <div rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/n0ygM3f/Eifle-tower.jpg" />
                                <div className="p-3 space-y-2">
                                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Eiffel Tower, France</h3>
                                    <p>The Eiffel Tower is one of the most visited tourist attractions globally, drawing millions of visitors from around the world each year. Tourists can ascend the tower via elevators or stairs to enjoy stunning vistas of Paris, including famous landmarks such as the Arc de Triomphe, Notre-Dame Cathedral, and the Louvre Museum.</p>
                                </div>
                            </div>
                            <div rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/jZ73Gnf/sundarbans.jpg" />
                                <div className="p-3 space-y-2">
                                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Sundarban, Bangladesh</h3>
                                    <p> The Sundarbans is a biodiversity hotspot, supporting a remarkable array of flora and fauna. It is home to numerous species, including the Bengal tiger, which has adapted to the unique mangrove environment. Other wildlife found here includes saltwater crocodiles, spotted deer, wild boars, and various bird species such as herons, egrets, and kingfishers.</p>
                                </div>
                            </div>
                            <div rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/0fYPNx3/Nayagra.jpg" />
                                <div className="p-3 space-y-2">
                                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Niagara Falls, United States and Canada</h3>
                                    <p>Niagara Falls consists of three majestic waterfalls: the American Falls, the Bridal Veil Falls, and the Horseshoe Falls (also known as the Canadian Falls). The sight of millions of gallons of water cascading over the cliffs each minute is truly awe-inspiring, making it a must-see destination for travelers worldwide.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Contact Us Section */}
            <div>
                <section className="mt-10 py-10 dark:bg-gray-100 dark:text-gray-900">
                    <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                        <div className="py-6 md:py-0 md:px-6">
                            <h1 className="text-4xl font-bold">Get in touch</h1>
                            <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                            <div className="space-y-4 ">
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Level-4, 34, Awal Centre, Banani, Dhaka</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                    <span>Helpline: 01322901105</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <span>shahedcse14@gmail.com</span>
                                </p>
                            </div>
                        </div>
                        <form noValidate="" className="flex flex-col py-10 space-y-6 md:py-0 md:px-6">
                            <label className="block">
                                <span className="mb-1 text-xl font-medium">Full name</span>
                                <input type="text" placeholder="Enter Your Name" className="p-3 outline-none block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
                            </label>
                            <label className="block">
                                <span className="mb-1 text-xl font-medium">Email address</span>
                                <input type="email" placeholder="Enter Your Email" className="p-3 outline-none block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
                            </label>
                            <label className="block">
                                <span className="mb-1 text-xl font-medium">Message</span>
                                <textarea placeholder="Write Your Message" rows="4" className="p-3 outline-none block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
                            </label>
                            <button type="button" className="outline-none self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600">Submit</button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;