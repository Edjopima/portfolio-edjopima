import React, {useState} from "react";
import '../../styles/buttons.scss';
import styles from './ContactForm.module.scss';

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
//   const handleSubmit = () => {
//     if ( name === '' || email === '' || subject === '' || message === '' ){
//         setError('all fields are required');
//     } else{
//         setError('');
//         setMessageStatus('Sending...');
//         fetch('https://portfolio-server-nodemailer.herokuapp.com/sendMail', {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({
//                 name,
//                 email,
//                 subject,
//                 message
//             })
//         })
//         .then(response => response.json())
//         .then(data=>setMessageStatus('message sent'))
//         .catch(error => console.error('error'));
//     }
// }
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
      <span className={styles.error}>{error}</span>
    <div className={styles.ContactForm}>
      <div className="flex w-full">
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div className="flex w-full">
        <input placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)} />
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