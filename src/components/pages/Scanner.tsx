import { Link } from "react-router-dom";
import Webcam from "react-webcam";
import React, { useCallback, useRef, useEffect } from "react";
import "../../stylesheets/Scanner.scss";

const videoConstraints = {
  facingMode: "user",
};

interface ScannerProps {
  imgSrc: string;
  setImgSrc: any,
  handleScanner: any;
}

const Scanner = (props: ScannerProps) => {

  const webcamRef= useRef<any>(null);

  // useEffect(() => {
   
  // }, 1500);

  const capture = useCallback(() => {
      const imageSrc = webcamRef.current?.getScreenshot();
      props.handleScanner(imageSrc);
  }, [webcamRef, props.setImgSrc]);


  return (
    <>
      <main>
        <section className="scanner">
          <h1 className="scanner__title">Take picture</h1>
          <p className="scanner__text">
            Fit your ID card inside the frame. The picture will be taken automatically.
          </p>
          <button onClick={capture}>Sacar foto</button>
          {props.imgSrc && <img src={props.imgSrc} alt="" title="" width="200px"/>}
          <div className="scanner__video-container">
            <Webcam
              audio={false}
              videoConstraints={videoConstraints}
              screenshotFormat="image/jpeg"
              className="scanner__video"
              ref={webcamRef}
            />
          </div>
          <p className="scanner__text">
            Room lightning is too low.
          </p>
          <Link to="/">
            <button type="button" className="scanner__btn">Cancel</button>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Scanner;
