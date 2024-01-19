import camiseta from '../../src/assets/categorias/camiseta.jpg'
import calcas from '../../src/assets/categorias/calca.jpg'
import bone from '../../src/assets/categorias/camiseta.jpg'
import headphones from '../../src/assets/categorias/headphones.jpg'
import tenis from '../../src/assets/categorias/tenis2.jpg'
import camisaStarWarsColecao from '../../src/assets/destaque/camiseta_star_wars.jpg'
import tenisColecao from '../../src/assets/destaque/tenis_preto.jpg'
import headphoneColecao from '../../src/assets/destaque/head_phone_preto.jpg'
import './ColecoesDestaque.css'
import { ButtonTemplate } from '../../src/button'
import { ProdutosEmAlta } from '../produtosEmAlta/ProdutosEmAlta'


export const ColecoesDestaque = () => {

    const colecoes = [{
        titulo: 'Novo drop Supreme',
        off: '30',
        image: camisaStarWarsColecao
    }, {
        titulo: 'Novo drop Supreme',
        off: '30',
        image: tenisColecao,
        class: 'tenis-colecao'
    }, {
        titulo: 'Novo drop Supreme',
        off: '30',
        image: headphoneColecao
    }]

    const categorias = [{
        titulo: '',
        image: camiseta
    }, {
        titulo: '',
        image: calcas,
    }, {
        titulo: '',
        image: bone
    }, {
        titulo: '',
        image: headphones,
    }, {
        titulo: '',
        image: tenis
    }]


    return (
        <div>
            <div className='mb-4' style={{ backgroundColor: '#f9f8fe' }}>

                <div className="container pt-4">
                    <h3>Coleções em destaque</h3>
                </div>

                <div className="container text-center">
                    <div className='row' style={{ gap: '12px' }}>
                        {colecoes.map((c, index) => {
                            return (
                                <div key={index} className={`card col ${c.class ? c.class : ''} `} style={{ backgroundImage: `url(${c.image})`, border: 'none' }}>
                                    <div className="off">{`${c.off}% OFF`}</div>
                                    <h3 className="titulo-card">{c.titulo}</h3>
                                    <ButtonTemplate nome='Comprar' />
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div >
                    <h3 className="colecoes-destaque text-center">Coleções em destaque</h3>

                    <div className="container text-center">
                        <div className="row justify-content-md-center" style={{ marginBottom: '123px' }}>
                            {categorias.map((c, index) => {
                                return (
                                    <div key={index} className="col-sm-2">
                                        <div className="circle">
                                            <img src={c.image} alt="" />
                                            <p className='mt-4'>{c.titulo}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <ProdutosEmAlta />
            </div>
        </div>
    )
}