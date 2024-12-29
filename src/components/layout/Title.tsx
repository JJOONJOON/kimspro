import styled from '@emotion/styled'

export const TitleBox = styled.div`
  width: calc(100% - 30px);
  padding: 25px 20px 30px;
  text-align: center;
  background: linear-gradient(to bottom, #1E2A3B, #2C3E50);
  border: 2px solid var(--gold);
  position: relative;
  margin: 20px auto 0;
  max-width: 450px;
  box-sizing: border-box;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      to right,
      transparent,
      var(--gold),
      transparent
    );
    left: 0;
  }
  
  &::before { top: 5px; }
  &::after { bottom: 5px; }
`

export const TitleText = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 38px;
  font-weight: 700;
  color: var(--white);
  margin: 0 0 15px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 
    0 0 10px var(--gold),
    2px 2px 0 var(--dark-gold);
  padding: 0 10px;
`

export const Catchphrase = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  color: var(--light-gold);
  margin: 0;
  letter-spacing: 0.5px;
  font-weight: 400;
  line-height: 1.6;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  
  span {
    display: block;
    position: relative;
    padding: 0 25px;
    
    &::before,
    &::after {
      content: '♦';
      color: var(--gold);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    
    &::before {
      left: 0;
    }
    
    &::after {
      right: 0;
    }
  }
`