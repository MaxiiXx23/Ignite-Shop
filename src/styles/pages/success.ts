import { styled } from '..'

export const SuccessContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: '30rem',

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    lineHeight: 1.4,
    maxHeight: '35rem',
    textAlign: 'center',
    marginTop: '2rem',
  },

  a: {
    marginTop: '5.5rem',
    display: 'block',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',

    transition: '0.3s',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const WrapperImagesProducts = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  marginTop: '4rem',
  marginLeft: '2rem',
})

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '8.75rem',
  height: '8.75rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  marginLeft: -50,
  img: {
    objectFit: 'cover',
  },
})
