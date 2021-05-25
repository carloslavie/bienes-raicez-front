import React from 'react';
import Layout from '../components/layout';
import useInicio from '../hooks/useInicio';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import Encuentra from '../components/encuentra';


const ImagenBackground = styled(BackgroundImage)`
    height: 600px;

`;

const Index = () => {

    const inicio = useInicio();

    const { nombre, contenido, imagen } = inicio[0];

    return ( 
        <Layout>
            <ImagenBackground
                tag="section"
                fluid={imagen.localFile.childImageSharp.gatsbyImageData.images.fallback}
                fadeIn="soft"
                style={{
                    overflow: 'hidden',                   
                    higligth:"#222222", 
                    shadow:"#192550", 
                    opacity:30,
                }}
                
            >
                <div 
                    css={css`
                    color: #FFF;
                    height: 100%;
                    max-width: 1200px;
                    display: flex;
                    margin: 0 auto;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    `}
                >
                    <h1
                        css={css`
                            font-size: 2rem;
                            margin: 0;
                            max-width: 800px;
                            @media(min-width:992px){
                                font-size: 4rem;
                            }
                        `}
                    >Venta de casas y departamentos exclusivos</h1>
                </div>
            </ImagenBackground>
            <main>
                <div
                    css={css `
                        max-width: 800px;
                        margin: 0 auto;
                    `}
                >
                    <h1>{nombre}</h1>
                    <p 
                        css={css`
                            text-align: center;
                        `}>{contenido}</p>
                </div>
            </main>

            <Encuentra/>
            
        </Layout>
     );
}
 
export default Index;

