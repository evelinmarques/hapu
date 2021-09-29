import { DESCRIPTION } from './constants';
import './styles.css';

export function Description() {
  return (
    <section id="description">
      <div className="container">
        <div className="description-content">
          <img
            className="description-image-content"
            src={DESCRIPTION.image}
            alt="nanny information selected on the map"
          />

          <div className="description-text-content">
            <h2>{DESCRIPTION.title}</h2>
            <p>{DESCRIPTION.description}</p>

            <a href="/">{DESCRIPTION.link}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
