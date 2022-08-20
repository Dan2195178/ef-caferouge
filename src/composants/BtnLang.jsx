import './BtnLang.scss';

export default function BtnLang({onClick, classe, lang, setLang}) {

    
    return (
        <button onClick={onClick} className={`BtnLang ${classe}`}>{lang}  </button>
    );
}