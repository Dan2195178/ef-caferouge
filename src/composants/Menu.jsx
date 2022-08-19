import './Menu.scss';
import menuIconPlats from '../images/menu_icon_plats.png';
import Plat from './Plat';

export default function Menu({l12n}) {
  return (
    <div className="Menu">
      <div className="titre">
        <img alt={l12n.menu.entrees['fr']} src={menuIconPlats} />
        <p>{l12n.menu.entrees['fr']}</p>
      </div>
        <Plat nom="Rouleau de printemps, smoked-meat de MTL et crevettes" prix="12" />
        <Plat nom="Rouleaux impériaux de M. Wu (porc ou végé)" prix="7" />
        <Plat nom="Salade de papaye épicée" prix="9" />
    </div>
  );
}