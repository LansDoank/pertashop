import Service from '../../Fragments/Service/Index';
import service1 from '../../../img/markus-winkler-Q6uqw_Hjye8-unsplash.jpg';
import service2 from '../../../img/tamanna-rumee-Wt33T42JNCM-unsplash.jpg';
import service3 from '../../../img/ben-sweet-2LowviVHZ-E-unsplash.jpg';
import service4 from '../../../img/maksym-tymchyk-jm70AzcV5AQ-unsplash.jpg';
import service5 from '../../../img/berkeley-communications-WEDDt-u3q3o-unsplash.jpg';
import './Index.css';
import Button from '../../Elements/Button/Index';

const Services = () => {
  return (
    <section id="services">
      <h1>Services</h1>
      <span>.</span>
      <Service
        src={service1}
        title="Pembelian Produk Online"
        desc="Platform untuk membeli berbagai macam produk secara online, mulai dari pakaian, aksesoris, elektronik, kosmetik, dan banyak lagi.
        Penawaran berbagai kategori produk yang mudah diakses oleh pengguna."
        button="Belanja Sekarang"
      />
      <section id="service" className='service-background'>
        <article id="service-container" className="service-container">
          <figure>
            <img src={service2} />
          </figure>
          <div className="service-desc ">
            <h2>Promosi dan Diskon</h2>
            <p>Informasi tentang penawaran promosi dan diskon khusus untuk produk tertentu atau seluruh toko. Penawaran kupon diskon atau kode promo untuk pengguna yang berlangganan newsletter atau menjadi anggota.</p>
            <Button>Dapatkan Diskon</Button>
          </div>
        </article>
      </section>
      <Service
        src={service3}
        title="Pengaturan Akun Pengguna"
        desc="Fasilitas untuk membuat dan mengelola akun pengguna.
        Penyimpanan riwayat pembelian dan pengaturan preferensi pengguna."
        button="Pengaturan Akun"
      />
      <section id="service" className='service-background'>
        <article id="service-container" className="service-container">
          <figure>
            <img src={service4} />
          </figure>
          <div className="service-desc ">
            <h2>Pengiriman dan Pelacakan Pesanan</h2>
            <p>Informasi tentang proses pengiriman produk, termasuk estimasi waktu pengiriman dan biaya. Fitur pelacakan pesanan untuk memantau status pengiriman.</p>
            <Button>Lacak Pengiriman</Button>
          </div>
        </article>
      </section>
      <Service
        src={service5}
        title="Layanan Pelanggan"
        desc="Akses untuk menghubungi tim layanan pelanggan Pertashop melalui email, telepon, atau live chat.
        FAQ (Frequently Asked Questions) untuk menjawab pertanyaan umum pengguna."
        button="Hubungi Sekarang"
      />
    </section>
  );
};

export default Services;
