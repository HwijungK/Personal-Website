import {intro} from '../data/intro';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <nav className="header-section-link-container">
        <a className="header-section-link" href="#about">About</a>
        <a className="header-section-link" href="#experiences">Experiences</a>
        <a className="header-section-link" href="#projects">Projects</a>
      </nav>
      <div className="header-contact-section">
        {intro.links.map((contact) => {
          return <a key={contact.name} href={contact.link} target="_blank" rel="noopener noreferrer">
            {contact.imgSrc ? <img className="header-contact-logo" src={contact.imgSrc} alt={contact.name} /> : <>{contact.name}</>}
          </a>
        })}
      </div>
    </header>
  )
}
