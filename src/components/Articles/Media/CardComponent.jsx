import React, { useState, useEffect } from "react";
import Slider from "../Blog/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Media.css';
import '../Blog/Blog.css';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAHfTtMp6QIkc8i-UlwcjjpYs6oWzH90NA",
    authDomain: "microfab-admin.firebaseapp.com",
    databaseURL: "https://microfab-admin-default-rtdb.firebaseio.com",
    projectId: "microfab-admin",
    storageBucket: "microfab-admin.appspot.com",
    messagingSenderId: "949509913271",
    appId: "1:949509913271:web:7fba49e66f7a592ce2ab32",
    measurementId: "G-B1KM0RLBQN",
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export default function CardComponent() {
    const [mediaData, setMediaData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const mediacardRef = ref(database, 'mediacard');
                const snapshot = await get(mediacardRef);
                const data = snapshot.val();

                if (data) {
                    const mediaArray = Object.keys(data).map(uid => ({ uid, ...data[uid] }));

                    // Sort the array based on the date in descending order
                    mediaArray.sort((a, b) => new Date(b.date) - new Date(a.date));

                    setMediaData(mediaArray);
                }
            } catch (error) {
                console.error("Error fetching media data:", error);
            }
        };

        fetchData();
    }, [database]);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        responsive: [
            // Your responsive settings
        ],
    };

    return (
        <div className="w-screen fg flex flex-col md:gap-5 gap-[100px] pb-10 -mb-24 -mx-4 overflow-x-auto">
            <Slider options={{ align: "center" }}>
                {mediaData.slice().reverse().map((mediaCard) => (
                    <div key={mediaCard.uid} className="flex-[0_0_90%] md:flex-[0_0_23%] mx-2">
                        <a href={mediaCard.link} target="_blank" rel="noopener noreferrer">
                            <div className="h-80 w-80 bg-white  rounded-lg my-40">
                                <div className="flex justify-center md:justify-end -mt-16 relative">
                                    <div style={{ height: '100%', width: '100%' }} className="relative">
                                        <img
                                            className="object-cover w-96 h-80 object-cover"
                                            src={mediaCard.img}
                                            alt={mediaCard.title}
                                        />
                                        <h3 className="text-xs h-12 w-full font-semibold text-white media77 absolute bottom-0 left-0 opacity-0 transition-opacity duration-300">Know More</h3>
                                        <a
                                            className="text-xs h-12 w-full font-semibold text-white media77 absolute bottom-0 left-0 opacity-0 transition-opacity duration-300"
                                            href={`${mediaCard.title}`}  // Add the appropriate protocol
                                            target="_blank"  // Optional: Opens the link in a new tab
                                            rel="noopener noreferrer"  // Recommended for security reasons when using target="_blank"
                                        ></a>


                                    </div>
                                </div>
                                <div>
                                    {/* Other content goes here */}
                                </div>
                            </div></a>
                    </div>
                ))}
            </Slider>
        </div>
    );
}