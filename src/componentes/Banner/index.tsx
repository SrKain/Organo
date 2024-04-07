import './Banner.css'
import React from 'react';

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}

export default function Banner({ enderecoImagem, textoAlternativo }: BannerProps) {
    return (
        <header className="banner">
            {/* <img src=" /imagens/banner.png" alt="Banner da pagina Organo." /> */}
            <img src={enderecoImagem} alt={textoAlternativo} />
        </header>
    )
};