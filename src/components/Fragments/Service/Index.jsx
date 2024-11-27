import Button from '../../Elements/Button/Index';
import './Index.css';

const Service = (props) => {
  const { title, src, desc, button} = props;
  return (
    <section id="service">
      <article className="service-container">
        <figure>
          <img src={src} />
        </figure>
        <div className="service-desc ">
          <h2>{title}</h2>
          <p>{desc}</p>
          <Button>{button}</Button>
        </div>
      </article>
    </section>
  );
};

export default Service;
