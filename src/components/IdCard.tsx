import "../stylesheets/Header.scss";
import emptyIDCard from "../images/ID-empty-card.svg";
import { Link } from "react-router-dom";

interface IdCardProps {
  handleScanner: any
}  

const IdCard = (props: IdCardProps) => {

  const handleScanner = () => {
    props.handleScanner();
  };

  return (
    <main className="App-main">
      <section>
        <h2>Scan your ID</h2>
        <p>Take a picture. It may take some time to validate your personal information.</p>
        <img src={emptyIDCard} alt="Empty ID card" title="Empty ID card"/>
        <Link to="/scanner">
          <button type="button" onClick={handleScanner}>Take picture</button>
        </Link>
      </section>
    </main>
  );
};

export default IdCard;
