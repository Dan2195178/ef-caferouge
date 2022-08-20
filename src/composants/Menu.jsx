import './Menu.scss';
import menuIconPlats from '../images/menu_icon_plats.png';
import Plat from './Plat';
import { bdFirestore } from '../firebase/init';
import { collection, getDocs, orderBy , query} from 'firebase/firestore';
import { useEffect, useState } from 'react';


export default function Menu({ l12n, lang }) {

  const [plats, setPlats] = useState([]);

  useEffect(() =>
    () => getDocs(query(collection(bdFirestore, "plats"),orderBy('prix','asc'))).then(
      qs => setPlats(qs.docs.map(doc => ({ id: doc.id, ...doc.data() })))
   ), []);
  return (
    <div className="Menu">
      <div className="titre">
        <img alt={l12n.menu.entrees[lang]} src={menuIconPlats} />
        <p>{l12n.menu.entrees[lang]}</p>
      </div>
      {plats.map(
        pla =>
          <Plat key={pla.id} nom={(lang === 'en') ? pla.nom_en : pla.nom} prix={pla.prix} />
      )
      }

    </div>
  );
}