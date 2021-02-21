import { Link } from "react-router-dom";
import Webcam from "react-webcam";
import React, { useState, useCallback, useRef } from "react";
import "../../stylesheets/Scanner.scss";

const videoConstraints = {
  facingMode: "user",
};

const Scanner = () => {
  // state
  const [imgSrc, setImgSrc] = useState(null);
  const webcamRef= useRef<any>(null);
  const capture = useCallback(() => {
      const imageSrc = webcamRef.current?.getScreenshot();
      setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <>
      <main>
        <section className="scanner">
          <h1 className="scanner__title">Take picture</h1>
          <p className="scanner__text">
            Fit your ID card inside the frame. The picture will be taken automatically.
          </p>
          <button onClick={capture}>Sacar foto</button>
          {imgSrc && <img src={imgSrc} alt="" title="" width="200px"/>}
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
