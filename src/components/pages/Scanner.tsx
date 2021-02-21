import Home from "./Home";
import { Link } from "react-router-dom";
import "../../stylesheets/Scanner.scss";

const Scanner = () => {
  return (
    <>
      <header>
        <h1>Take picture</h1>
        <p>Fit your ID card inside the frame.</p>
        <p>The picture will be taken automatically.</p>
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
