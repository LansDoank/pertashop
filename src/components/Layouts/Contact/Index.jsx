import './Index.css';
import contactImg from '../../../img/Pertashop3.png'
import tel from '../../../img/telephone.png'
import email from '../../../img/mail.png'
import locate from '../../../img/maps.png'

const Contact = () => {
  return (
    <section id="contact">
      <article className='contact-desc'>
        <h1>Contact Us</h1>
        <div className="contact-icon">
          <img src={tel} />
          <h2>0812345678</h2>
        </div>
        <div className="contact-icon">
          <img src={email} />
          <h2>pertashop123@gmail.com</h2>
        </div>
        <div className="contact-icon">
          <img src={locate} />
          <h2>Jln Raya.Jakarta123</h2>
        </div>
      </article>
      <figure className='contact-img'>
        <img src={contactImg} alt="" />
      </figure>
    </section>
  );
};

export default Contact;
