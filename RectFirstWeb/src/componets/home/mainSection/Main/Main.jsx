import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faPlayCircle } from "@fortawesome/free-solid-svg-icons";

function Main() {
  return (
    <section className="main-section">
      <div className="main-inner">
        <div className="main-inner-section-1">
          <span className="tag-line-1">
            <FontAwesomeIcon icon={faGear} /> Working for your success
          </span>
          <h2 className="main-section-heading">
            Maecenas Vitae Consectetur Led <span> Vestibulum Ante</span>
          </h2>
          <p className="main-section-info">
            Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
            Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
            magna.
          </p>
          <div className="main-section-btn">
            <button className="classic-btn">Get Started</button>
            <button className="classic-btn-transperant">
              <FontAwesomeIcon icon={faPlayCircle} /> play video
            </button>
          </div>
        </div>
        <div className="main-inner-section-2">
          <img src="illustration-1.webp" alt="img-1" />
        </div>
      </div>
    </section>
    
  );
}

export default Main;
