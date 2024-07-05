import Header from '../components/header';
import About from '../components/about';
import Interests from '../components/interest';
import ContactForm from '../components/contactform';
import styles from './index.module.css';

const Home = () => (
  <div className={styles.container}>
    <Header />
    <div className={styles.mainContent}>
      <div className={styles.leftColumn}>
        <About />
      </div>
      <div className={styles.rightColumn}>
        <Interests />
      </div>
    </div>
    <ContactForm />
  </div>
);

export default Home;