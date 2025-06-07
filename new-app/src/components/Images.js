import { useState, useEffect } from "react";
function Images(props) {

    const [dailyImg, setDailyImg] = useState({});
    const [roverPhoto, setRoverPhoto] = useState({});

    useEffect(() => {
        const fetchRoverPhotos = async () => {
            const roverPhotoResponse = await fetch('NASA_URLs.marsRoverPhoto').then(response => response.json());
            setRoverPhoto(roverPhotoResponse);
        };

        fetchRoverPhotos();

        // TASK - React 1 week 3 
        // fetch the extra data for NASA_URLs.astronomyPicOfTheDay and save it to the dailyImg state variable
        // assumption
        // 1. data object has type defined
        setDailyImg({ src: '', alt: 'alter', type: 'video' })
        // 2. you don't have a type defined
        // fx. helper function that reads the extension
    }, []);
    return <div>
        {dailyImg.type === 'video' ?
            <video src={dailyImg.src} alt={dailyImg.alt} /> :
            <img src={dailyImg.src} alt={dailyImg.alt} />}



    </div>
}

function isVideo(url) {
    return url.find('mp4')
}