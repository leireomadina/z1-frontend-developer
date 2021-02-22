import "../stylesheets/IdCard.scss";
import emptyIDCard from "../images/ID-empty-card.svg";
import { Link } from "react-router-dom";

interface IdCardProps {
  openScanner: any;
}

const IdCard = (props: IdCardProps) => {
  const openScanner = () => {
    props.openScanner();
  };

  return (
    <main className="home-main">
      <section className="id-card">
        <h2 className="id-card__title">Scan your ID</h2>
        <p className="id-card__text">
          Take a picture. It may take some time to validate your personal
          information.
        </p>
        <div className="id-card__img-container">
          <img
            src={emptyIDCard}
            alt="Empty ID card"
            title="Empty ID card"
            className="id-card__image"
          />
          <Link to="/scanner">
            <button
              type="button"
              onClick={props.openScanner}
              className="id-card__btn"
            >
              Take picture
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default IdCard;
