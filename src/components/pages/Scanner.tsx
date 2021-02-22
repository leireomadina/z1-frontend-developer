import { Link } from "react-router-dom";
import Webcam from "react-webcam";
import React, { useCallback, useRef, useEffect } from "react";
import "../../stylesheets/Scanner.scss";

const videoConstraints = {
  facingMode: "user",
};

interface ScannerProps {
  imgSrc: string;
  setImgSrc: any;
  handleScanner: any;
}

const Scanner = (props: ScannerProps) => {
  const { imgSrc, setImgSrc } = props;
  const webcamRef = useRef<any>(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    props.handleScanner(imageSrc);
  }, [webcamRef, setImgSrc]);

  useEffect((): any => {
    setTimeout(() => {
      capture();
    }, 2000);
  }, []);

  return (
    <>
      <main>
        <section className="scanner">
          <h1 className="scanner__title">Take picture</h1>
          <p className="scanner__text">
            Fit your ID card inside the frame. The picture will be taken
            automatically.
          </p>
          {imgSrc && <img src={imgSrc} alt="User cam result" title="User cam result"/>}
          <div className="scanner__video-container">
            <Webcam
              audio={false}
              videoConstraints={videoConstraints}
              screenshotFormat="image/jpeg"
              className="scanner__video"
              ref={webcamRef}
            />
          </div>
          <Link to="/">
            <button type="button" className="scanner__btn">
              Cancel
            </button>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Scanner;
