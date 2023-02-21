import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',

  marginLeft: 'auto',
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  minHeight: '41rem',
  width: '43.5rem',
  padding: '0.25rem',
  cursor: 'pointer',
  overflow: 'hidden',

  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },

  img: {
    objectFit: 'cover',
  },
})

export const FooterProduct = styled('footer', {
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',
  padding: '1.25rem',

  borderRadius: 6,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'rgba(0, 0, 0, 0.6)',

  transform: 'translateY(110%)',
  opacity: 0,
  transition: 'all 0.3s ease-in-out',
})

export const WrapperInfos = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',
})

export const NameProduct = styled('strong', {
  fontSize: '$lg',
  color: '$gray100',
  fontWeight: 'bold',
  textDecoration: 'none',
})

export const Price = styled('span', {
  fontSize: '$xl',
  fontWeight: 'bold',
  color: '$green300',
})
