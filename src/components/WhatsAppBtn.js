import { contactInfo } from '../data/contact';

export default function WhatsAppBtn() {
  return (
    <a
      href={`https://wa.me/${contactInfo.whatsapp}?text=Hi! I'm interested in your tour packages.`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-btn"
      title="Chat on WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
}
