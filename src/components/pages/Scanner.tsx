import { Link } from "react-router-dom";
import Webcam from "react-webcam";
import React, { useRef, useState, useCallback } from "react";

import "../../stylesheets/Scanner.scss";

interface ScannerProps {
  title: string;
}

const videoConstraints = {
  width: 300,
  height: 300,
  facingMode: "user",
};

const Scanner = (props: ScannerProps) => {
  /*
  const [imgSrc, setImgSrc] = useState(null);

  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
  */

  return (
    <>
      <header>
        <h1>Take picture</h1>
        <p>{props.title}</p>
        <p>Fit your ID card inside the frame.</p>
        <p>The picture will be taken automatically.</p>
        {/* <button onClick={capture}>Sacar foto</button> */}
        {/* {imgSrc && <img src={imgSrc} alt="" title=""/>} */}
        <div>
          <Webcam
            audio={false}
            videoConstraints={videoConstraints}
            screenshotFormat="image/jpeg"
          />
        </div>
      </header>
      <main>
        <section>
          Picture
          <Link to="/">
            <button type="button">Cancel</button>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Scanner;
