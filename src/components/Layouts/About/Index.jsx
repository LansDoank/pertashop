import Button from '../../Elements/Button/Index';
import './Index.css';

const About = (props) => {
  const { src,title } = props;
  return (
    <section id="about">
      <h1>{title}</h1>
      <span>.</span>
      <article className="about-container">
        <figure>
          <img src={src} />
        </figure>
        <div className="about-desc">
          <p>
            Kami adalah platform belanja online yang berdedikasi untuk memberikan pengalaman berbelanja yang menyenangkan, praktis, dan aman bagi pelanggan kami. Dengan komitmen kami untuk menyediakan produk berkualitas dan layanan terbaik,
            Pertashop menjadi destinasi utama bagi mereka yang mencari kepuasan dalam berbelanja secara online.
          </p>
          <Button>Lihat Selengkapnya</Button>
        </div>
      </article>
    </section>
  );
};

export default About;
