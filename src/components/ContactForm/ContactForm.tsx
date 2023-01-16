import React, {useState} from "react";
import '../../styles/buttons.scss';
import styles from './ContactForm.module.scss';

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    console.log('====================================');
    console.log('Sending message');
    console.log(name, email, message);
    console.log('====================================');
  };

  return (
    <div className={styles.Container}>
      <h1>Let's talk</h1>
      <span>Complete this form and i'll answer as soon as possible</span>
    <div className={styles.ContactForm}>
      <div className="flex w-full">
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div className="flex w-full">
        <input placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />
      </div>
        <button className="primary" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ContactForm;