import { faBoxesPacking, faMedal, faTruck, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import './AboutExtras.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutExtras = () => {
  return (
    <section className="about-extras-section">
      <div className="about-extras-container">
        <div className="extras-card">
          <FontAwesomeIcon icon={faBoxesPacking} />
          <h3 className="extras-title">Free Shipping</h3>
          <p className="extras-text">Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among.</p>
        </div>

        <div className="extras-card">
          <FontAwesomeIcon icon={faTruckFast} />
          <h3 className="extras-title">Fast Delivery</h3>
          <p className="extras-text">Parlors waiting so against me no. Wishing calling is warrant settled was lucky.</p>
        </div>

        <div className="extras-card">
          <FontAwesomeIcon icon={faMedal} />
          <h3 className="extras-title">100% Quality Guarantee</h3>
          <p className="extras-text">Unaffected at ye of compliment alteration to. Place voice no arises along to.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutExtras;
