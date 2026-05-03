import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = process.env.REACT_APP_WHATSAPP_NUMBER || '91XXXXXXXXXX';
const DEFAULT_MESSAGE = encodeURIComponent(
  'Hi KBytes! I have a project inquiry and would like to discuss further.'
);

const WhatsAppFloat = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`;

  return (
    <a
      href={href}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-float-icon" />
      <span className="whatsapp-float-label">Chat with us</span>
    </a>
  );
};

export default WhatsAppFloat;
