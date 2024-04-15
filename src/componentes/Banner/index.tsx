import './Banner.css'

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}

export default function Banner({ enderecoImagem, textoAlternativo }: BannerProps) {
    return (
        <header className="banner">
            <img src={enderecoImagem} alt={textoAlternativo} />
        </header>
    )
};