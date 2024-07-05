import { useEffect, useState } from 'react';
import styles from './Interests.module.css';

const Interests = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <aside className={`${styles.interests} card ${visible ? styles.visible : styles.hidden}`}>
      <h2>Mis intereses</h2>
      <ul>
        <li><i className="fas fa-laptop-code"></i> Tecnología</li>
        <li><i className="fas fa-camera"></i> Fotografía</li>
        <li><i className="fas fa-hiking"></i> Senderismo</li>
        <li><i className="fas fa-gamepad"></i> Videojuegos</li>
        <li><i className="fas fa-book"></i> Lectura de ciencia ficción</li>
        <li><i className="fas fa-code"></i> Proyectos de código abierto</li>
      </ul>
    </aside>
  );
};

export default Interests;