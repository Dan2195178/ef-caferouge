import './Appli.scss';
import { useEffect, useState } from 'react';
import logo from '../images/logo.png';
import Menu from './Menu';
// On importe les textes statiques pour la localisation (l12n)
import l12n from '../localisation/textes-statiques.json';


export default function Appli() {
  
  const [lang, setLang] = useState(
    () => JSON.parse(window.localStorage.getItem('local-lang')) || 'fr'
  );
  useEffect(()=>{
    window.localStorage.setItem('local-lang', JSON.stringify(lang));
  });

  return (
    <div className="Appli">
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h3>Café rouge</h3>
          {/* Consultez le fichier "localisation/textes-statiques.json" */}
          <h5>{l12n.entete.amorce[lang]}</h5>
        </div>
      </header>
      <Menu l12n={l12n} lang={lang} setLang={setLang} />
      <footer>
        <div className="adresse">{l12n.p2p.adresse[lang]}</div>
        <div className="tel">+1 (321) 987 6543</div>
        <div className="choix-langue">
          <span onClick={() => setLang("fr")} >fr</span>
          &bull;
          <span onClick={() => setLang("en")} >en</span>
        </div>
      </footer>
    </div>
  );
}
