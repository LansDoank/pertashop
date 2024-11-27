import Button from '../../Elements/Button/Index';
import './Index.css';

const Hero = (props) => {
  const {background} = props
  return (
    <section id="home">
      <h1> "Temukan Kesenangan Berbelanja di Pertashop!"</h1>
      <Button>Beli Sekarang</Button>
      <img src={background} />
    </section>
  );
};

export default Hero;
