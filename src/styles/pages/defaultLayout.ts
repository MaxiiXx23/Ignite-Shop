import { styled } from '..'

export const Container = styled('main', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '100vh',

  overflow: 'hidden',
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',

  padding: '2rem 0',
  maxWidth: '73.75rem',
  margin: '0 auto',

  variants: {
    spacing: {
      center: {
        justifyContent: 'center',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
  },

  '@laptopM': {
    width: '90%',
  },
})

export const ShoppingCartContainer = styled('button', {
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.75rem',
  borderRadius: 6,
  boxShadow: 'none',
  border: 0,
  cursor: 'pointer',

  variants: {
    colorVariant: {
      gray: {
        backgroundColor: '$gray800',
        color: '$gray400',
      },
      green: {
        backgroundColor: '$green500',
        color: '$white',
      },
    },
  },
})

export const CountCartContainer = styled('div', {
  width: '2rem',
  height: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  position: 'absolute',
  borderRadius: '50%',
  backgroundColor: '$gray900',
  marginTop: -40,
  right: -12,
})

export const WrapperNumber = styled('div', {
  width: '1.5rem',
  height: '1.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.5rem',
  borderRadius: '50%',
  backgroundColor: '$green500',

  strong: {
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$white',
  },
})

// Menu Drawer

// const animationDrawer = keyframes({
//   '0%': { transform: 'translateX(100%)' },
//   '100%': { transform: 'translateX(0%)' },
// })

export const ContainerMenuDrawer = styled('div', {
  height: '100%',
  width: '30rem',
  padding: '1.5rem 1.5rem 3rem 1.5rem',
  backgroundColor: '$gray800',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  zIndex: 1,
  position: 'absolute',
  right: 0,

  // animation: `${animationDrawer} 1s ease-out`,

  '@tabletM': {
    width: '100%',
  },
})

export const WrapperBtnClose = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  flexDirection: 'row',
})

export const BtnClose = styled('button', {
  backgroundColor: 'transparent',
  border: 0,
  boxShadow: 'none',
  cursor: 'pointer',
  color: '$gray400',
})

export const WrapperTitle = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '1.5rem',
})

export const TitleMenuDrawer = styled('strong', {
  fontSize: '$lg',
  lineHeight: 1.6,
  color: '$gray100',
  textAlign: 'left',
})

export const Content = styled('div', {
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  flexDirection: 'column',
  padding: '1.5rem',
})

export const ListProducts = styled('ul', {
  height: '21.625rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  gap: '1.5rem',

  listStyleType: 'none',

  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: 1,
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: 6,
    backgroundColor: '$gray100',
  },
})

export const Item = styled('li', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  gap: '1.25rem',
})

export const WrapperImage = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  img: {
    objectFit: 'cover',
  },
})

export const ContainerInfos = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '0.5rem',
})

export const NameProduct = styled('span', {
  fontSize: '$md',
  lineHeight: 1.6,
  color: '$gray300',

  '@mobileM': {
    fontSize: '0.75rem',
  },
})

export const Price = styled('strong', {
  fontSize: '$md',
  lineHeight: 1.6,
  color: '$gray100',
  '@mobileM': {
    fontSize: '1rem',
  },
})

export const BtnRemove = styled('strong', {
  fontSize: '1rem',
  lineHeight: 1.6,
  color: '$green500',
  cursor: 'pointer',

  transition: '0.3s',

  '&:hover': {
    color: '$green300',
  },
})

export const ContainerDetailsCart = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
})

export const WrapperQuantity = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
})

export const WrapperTotalValue = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
})

export const TextQuantity = styled('span', {
  fontSize: '1rem',
  lineHeight: 1.6,
  color: '$gray100',
})

export const TextQuantityItems = styled('span', {
  fontSize: '$md',
  lineHeight: 1.6,
  color: '$gray300',
})

export const TextTotalValue = styled('strong', {
  fontSize: '$md',
  lineHeight: 1.6,
  color: '$gray100',
})

export const TotalValue = styled('strong', {
  fontSize: '$xl',
  lineHeight: 1.4,
  color: '$gray100',

  '@mobileM': {
    fontSize: '$lg',
  },
})

export const ButtonConfirm = styled('button', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.25rem 0rem',
  marginTop: '3.375rem',
  border: 0,
  borderRadius: 8,
  boxShadow: 'none',
  cursor: 'pointer',
  color: '$white',
  fontSize: '$md',
  lineHeight: 1.6,

  backgroundColor: '$green500',
  transition: '0.3s',

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
})
