import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [tagline, setTagline] = useState('Desarrollador de software apasionado por la tecnología y la innovación.');
  const [visible, setVisible] = useState(true);
  const taglines = [
    'Desarrollador de software apasionado por la tecnología y la innovación.',
    'Ingeniero de software enfocado en soluciones innovadoras.',
    'Programador con amor por la tecnología y la creatividad.',
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        index = (index + 1) % taglines.length;
        setTagline(taglines[index]);
        setVisible(true);
      }, 500);      // Duración de la transición de desvanecimiento
    }, 3000);        // Duración entre cambios de tagline

    return () => clearInterval(interval);
  }, []);

  return (
    <header className={`${styles.header} card`}>
      <img src="/profile.jpg" alt="Imagen de Perfil" className={styles.profileImg} />
      <div className={styles.info}>
        <h1 className={styles.username}>John Doe</h1>
        <p className={`${styles.tagline} ${visible ? styles.visible : styles.hidden}`}>{tagline}</p>
      </div>
    </header>
  );
};

export default Header;