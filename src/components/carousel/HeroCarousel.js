import React, { useState,useRef,useEffect } from 'react'
import classes from './HeroCarousel.module.css'
// import { MdArrowForwardIos } from 'react-icons/md';
// import { MdArrowBackIos } from 'react-icons/md';
const slides = [
    {url:"https://video.wixstatic.com/video/11062b_d709906efd694f14a91f3da1774cdbba/720p/mp4/file.mp4"},
    {url: "https://static.wixstatic.com/media/11062b_cbc1493bfd2c427aab945fcb2672f8ff~mv2.jpg/v1/fill/w_1141,h_428,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_cbc1493bfd2c427aab945fcb2672f8ff~mv2.jpg"},
    {url: "https://static.wixstatic.com/media/ead566_f3c3e4c17f2b4801a87ceffc781ad87e~mv2.jpg/v1/fill/w_1141,h_428,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ead566_f3c3e4c17f2b4801a87ceffc781ad87e~mv2.jpg"}
];
const delay = 3000;

const content = [
    {
        cont: <>
            <h1 className={classes.videoH1}>Join the Revoulution.</h1>
            <h2 className={classes.videoH2}>Make it Possible.</h2>
        </>
    },
    {
        cont: <div className={classes.secondImage}>
            <h1 className={classes.living}>LIVING</h1>
            <h1 className={classes.sustainably}>SUSTAINABLY</h1>
            <h2 className={classes.secondH2}>Shouldn't be Expensive</h2>
        </div>
    },
    {
        cont: <div className={classes.thirdImage}>
            <h1 className={classes.become}>BECOME</h1>
            <h1 className={classes.sustainable}>Sustainable</h1>
            <button className={classes.startButton}>Start Today</button>
        </div>
    }
];

function HeroCarousel() {
    const [index,setIndex] = useState(0);
    const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  // const goBack = ()=>{
  //   setIndex((prevIndex) =>
  //         prevIndex === 0 ? slides.length - 1 : prevIndex - 1)
  //   resetTimeout();
  // }
  // const goNext = ()=>{
  //   setIndex((prevIndex) =>
  //         prevIndex === slides.length - 1 ? 0 : prevIndex + 1)
  //   resetTimeout();
  // }

  return (
    <div className={classes.heroContainer}>
        {/* <button className={classes.backArrow} onClick={goBack}><MdArrowBackIos /></button>
        <button className={classes.nextArrow} onClick={goNext}><MdArrowForwardIos /></button> */}
        {index === 0 ? <><video className={classes.backgroundVideo} src={slides[index].url} autoPlay loop muted />
            {content[index].cont}
        </>
         : <div style={{backgroundImage: `url(${slides[index].url})`}} className={classes.imageCarousel}>{content[index].cont}</div>}   
    </div>
    // <div className={classes.heroContainer}>
    //   <div style={{backgroundImage: `url(${slides[1].url})`}} className={classes.imageCarousel}>{content[1].cont}</div>
    // </div>
  )
}

export default HeroCarousel
