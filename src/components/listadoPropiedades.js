import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import usePropiedades from '../hooks/usePropiedades';
import PropiedadPreview from './propiedadPreview';
import styled from '@emotion/styled';
import useFiltro from '../hooks/useFiltro';


const PropiedadesCss = styled.ul`
    max-width: 1200px;
    width: 95%;
    margin: 4rem auto 0 auto;

    @media (min-width: 480px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 2rem;
        column-gap: 2rem;
    }
    @media (min-width: 768px){
        grid-template-columns: repeat(3, 1fr);
    }
`;


const ListadoPropiedades = () => {

    const resultado = usePropiedades();
    const [ propiedades ] = useState(resultado)
    const [ filtradas, guardarFiltradas ] = useState([])

    //usar filtrado de propiedades
    const { categoria, FiltroUI } = useFiltro();

    useEffect(() => {
        
        
        if(categoria === "--Filtrar--" || !categoria){
            guardarFiltradas(propiedades)
        }
        else{
            const filtro = propiedades.filter(propiedad=> propiedad.categorias.nombre === categoria);
            guardarFiltradas(filtro)
        }
    }, [categoria, propiedades])

    return ( 
        <>
        <h2
            css={css`
                margin-top: 5rem;
            `}
        >Nuestras Propiedades</h2>

        { FiltroUI() }

        <PropiedadesCss>
            {filtradas.map(propiedad=>(
                <PropiedadPreview 
                    key={propiedad.id}
                    propiedad={propiedad}
                />
            ))}
        </PropiedadesCss>
        </>
     );
}
 
export default ListadoPropiedades;