import { useContext } from "react";
import { AuthContext } from "../Route/AuthProvider";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import './Home.css'



const Home = () => {

    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <>
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

        </>
    );
};

export default Home;