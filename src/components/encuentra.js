import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import { BackgroundImage } from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImagenBackground = styled(BackgroundImage)`
    height:300px;
`;

const Encuentra = () => {

    const { imagen } = useStaticQuery(graphql`
        query {
            imagen: file(relativePath: {eq: "encuentra.jpg"}){
                publicURL
            }
        }
    `)
    console.log(imagen)
    return ( 
        <ImagenBackground
        tag="section"
        fluid={imagen.publicURL}
        fadeIn="soft">

        </ImagenBackground>
     );
}
 
export default Encuentra;