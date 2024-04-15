
import './Footer.css'

const Footer = () => {
    const redes = [
        {
            rede:'Facebook',
            imagem: '/imagens/fb.png',
            link: 'https://facebook.com'
        },
        {
            rede:'Twiter',
            imagem: '/imagens/tw.png',
            link: 'https://x.com'
        },
        {
            rede:'Instagram',
            imagem: '/imagens/ig.png',
            link: 'https://instagram.com'
        }
    ]

    return(
        <section className='rodape' style={{backgroundImage: 'url("./imagens/fundo.png")'}}>
            <div>
                {redes.map(item => <a key={item.rede} href={item.link}><img  src={item.imagem} alt={item.rede}></img></a>)}
            </div>
            <div className='logo'>
                <a href='#'><img src='/imagens/logo.png' alt='logo da Organo'/></a>
            </div>
            <div>
                <h1>Desenvolvido por Kauan Iasin.</h1>
            </div>
        </section>
    )
}

export default Footer;