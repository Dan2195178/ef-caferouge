import './Appli.scss';
import logo from '../images/logo.png';
import Menu from './Menu';
// On importe les textes statiques pour la localisation (l12n)
import l12n from '../localisation/textes-statiques.json';

export default function Appli() {
  return (
    <div className="Appli">
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h3>Café rouge</h3>
          {/* Consultez le fichier "localisation/textes-statiques.json" */}
          <h5>{l12n.entete.amorce['fr']}</h5>
        </div>
      </header>
      <Menu l12n={l12n} />
      <footer>
        <div className="adresse">{l12n.p2p.adresse['fr']}</div>
        <div className="tel">+1 (321) 987 6543</div>
        <div className="choix-langue">
          <span>fr</span>
          &bull;
          <span>en</span>
        </div>
      </footer>
    </div>
  );
}
