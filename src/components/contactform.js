import { useEffect, useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000); // Oculta la notificación después de 3 segundos
    }
  };

  return (
    <section className={`${styles.contact} card ${visible ? styles.visible : styles.hidden}`}>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Nombre:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Mensaje:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {success && <div className={styles.success}>¡Mensaje enviado con éxito!</div>}
    </section>
  );
};

export default ContactForm;