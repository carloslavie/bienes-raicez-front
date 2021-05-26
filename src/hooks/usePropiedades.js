import { graphql, useStaticQuery } from 'gatsby';

const usePropiedades = () => {
    const datos = useStaticQuery(graphql`
    query {
        allStrapiPropiedades {
          nodes {
            agentes {
              email
              nombre
              telefono
            }
            categorias {
              nombre
            }
            descripcion
            estacionamiento
            habitaciones
            id
            nombre
            precio
            wc
            imagen {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
      
    `)
    
    return datos.allStrapiPropiedades.nodes.map(propiedad=>({
        nombre: propiedad.nombre,
        descripcion: propiedad.descripcion,
        imagen: propiedad.imagen,
        id: propiedad.id,
        wc: propiedad.wc,
        estacionamiento: propiedad.estacionamiento,
        habitaciones: propiedad.habitaciones,
        precio: propiedad.precio,
        categorias: propiedad.categorias,
        agentes: propiedad.agentes,

    }))
}

export default usePropiedades;
