import './Card.css';

export default function Card({ capa, logo, titulo, ano, nota }) {
    let Tiponota
    if(nota == 7 ){
        Tiponota = 'Nota-Media'
    }
    else if(7 < nota && nota <= 10){
        Tiponota = 'Nota-Maxima'
    }
    else {
        Tiponota = 'Nota-Baixa'
    }
    
    return <div className="card">
        <div className="thumbnail">
            <img width={300} height={150} src={capa} alt="" />
            <img width={200} height={50} src={logo} alt="" />
        </div>
        <div className="conteudo">
            <div className="conteudo-principal">
                <div className="titulo">{titulo}</div>
                <div className="ano">{ano}</div>
            </div>
            <div className='conteudo-extra'>
                <div className={'nota ' + Tiponota}>{nota}</div>
            </div>
        </div>
    </div>

}

