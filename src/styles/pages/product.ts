import { styled } from "..";

export const ProductContainer = styled('main', {
   display: 'grid',
   gridTemplateColumns: '1fr 1fr',
   alignItems: 'stretch',
   justifyContent: "center",
   gap: '4rem',
   maxWidth: '73.75rem',
   margin: '0 auto' 

})

export const ImageContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '36rem',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',
    
    img: {
        objectFit: 'cover'
    }
})

export const ProductDetails = styled('div', {

    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: "$2xl",
        color: "$gray300"
    },

    span: {
        marginTop: '1rem',
        display: "block",
        fontSize: "$2xl",
        color: "$gray300"
    },

    p: {
        marginTop: '1.5rem',
        fontSize: "$md",
        lineHeight: 1.6,
        color: "$gray300"
    },

    button: {
        marginTop: "auto",
        backgroundColor: "$green500",
        border: 0,
        color: "$white",
        borderRadius: 8,
        padding: "1.25rem",
        cursor:"pointer",
        fontWeight: "bold",
        fontSize: "$md",
        transition: '0.3s',

        '&:hover': {
            backgroundColor: "$green300",
        }
    }

})