import { styled, keyframes } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  justifyContent: 'center',
  gap: '4rem',
  maxWidth: '73.75rem',
  margin: '0 auto',
  overflowY: 'auto',
  '@laptopM': {
    gridTemplateColumns: '25rem 25rem',
  },
  '@tabletL': {
    gridTemplateColumns: '18rem 18rem',
  },
  '@tabletM': {
    width: '100%',
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gridTemplateColumns: '',
  },
  '@tabletS': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gridTemplateColumns: '',
  },
  '@mobileL': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gridTemplateColumns: '',
  },
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

  '@tabletL': {
    height: '30rem',
  },

  '@tabletS': {
    marginTop: '10rem',
    height: '30rem',
  },

  '@mobileL': {
    marginTop: '10rem',
    height: '30rem',
  },

  img: {
    objectFit: 'cover',
  },
})

export const ProductDetails = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  '@tabletL': {
    alignItems: 'center',
    justifyContent: 'center',
  },

  '@tabletS': {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '@mobileL': {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const NameProduct = styled('h1', {
  fontSize: '$2xl',
  color: '$gray300',

  '@tabletM': {
    textAlign: 'center',
    fontSize: '$xl',
  },
  '@tabletS': {
    textAlign: 'center',
    fontSize: '$xl',
  },
  '@mobileL': {
    textAlign: 'center',
  },
})

export const Price = styled('span', {
  marginTop: '1rem',
  display: 'block',
  fontSize: '$2xl',
  color: '$gray300',

  '@tabletM': {
    textAlign: 'center',
    fontSize: '$xl',
  },
  '@tabletS': {
    textAlign: 'center',
    fontSize: '$xl',
  },
  '@mobileL': {
    textAlign: 'center',
  },
})

export const Description = styled('p', {
  marginTop: '1.5rem',
  fontSize: '$md',
  lineHeight: 1.6,
  color: '$gray300',

  '@tabletM': {
    textAlign: 'center',
    fontSize: '1rem',
  },
  '@tabletS': {
    textAlign: 'center',
    fontSize: '1rem',
  },
  '@mobileL': {
    textAlign: 'center',
    fontSize: '1rem',
  },
})

export const BtnAddCart = styled('button', {
  marginTop: 'auto',
  backgroundColor: '$green500',
  border: 0,
  color: '$white',
  borderRadius: 8,
  padding: '1.25rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '$md',
  transition: '0.3s',

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
})

// spinner loading

const keyFrameSninner = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const ContainerSpinner = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Spinner = styled('div', {
  display: 'inline-block',
  width: 80,
  height: 80,

  '&:after': {
    content: ' ',
    display: 'block',
    width: 64,
    height: 64,
    margin: 8,
    borderRadius: '50%',
    border: '6px solid $green500',
    borderColor: '$green500 transparent $green500 transparent',
    animation: `${keyFrameSninner} 1.2s infinite`,
  },

  animation: `${keyFrameSninner}`,
})
