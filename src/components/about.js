import { useEffect, useState } from 'react';
import styles from './About.module.css';

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className={`${styles.about} card ${visible ? styles.visible : styles.hidden}`}>
      <h2>Sobre mí</h2>
      <p>Hola, soy John Doe, un desarrollador de software con más de 3 años de experiencia en la industria. He trabajado en diversos proyectos, desde aplicaciones móviles hasta plataformas web a gran escala. Actualmente, soy desarrollador principal en Garzon, donde lidero el equipo de sistemas. En mi tiempo libre, disfruto explorando nuevas tecnologías, contribuyendo a proyectos de código abierto y jugando videojuegos. Mis hobbies incluyen la fotografía, el senderismo y la lectura de ciencia ficción.</p>
    </section>
  );
};

export default About;