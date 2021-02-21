import "../stylesheets/Header.scss";
import emptyIDCard from "../images/ID-empty-card.svg";

const IdCard = () => {
  return (
    <main className="App-main">
      <section>
        <h2>Scan your ID</h2>
        <p>Take a picture. It may take some time to validate your personal information.</p>
        <img src={emptyIDCard} alt="Empty ID card" title="Empty ID card"/>
        <button type="button">Take picture</button>
      </section>
    </main>
  );
};

export default IdCard;
