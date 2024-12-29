import styled from '@emotion/styled'

const AboutContainer = styled.div`
  width: 100%;
  padding: 20px 15px;
  background: rgba(30, 42, 59, 0.95);
  border: 1px solid var(--gold);
  border-radius: 8px;
  box-shadow: 
    0 0 20px rgba(198, 160, 82, 0.1),
    inset 0 0 10px rgba(198, 160, 82, 0.1);
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: calc(100% - 10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--gold),
      transparent
    );
  }
`

const AboutTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: var(--gold);
  margin: 0 0 20px;
  text-align: center;
  letter-spacing: 1px;
`

const AboutContent = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: var(--white);

  p {
    margin-bottom: 15px;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    margin-bottom: 15px;
  }

  li {
    padding: 12px 0;
    border-bottom: 1px solid rgba(198, 160, 82, 0.2);
    display: flex;
    align-items: center;
    
    &:last-child {
      border-bottom: none;
    }

    &::before {
      content: '♦';
      color: var(--gold);
      margin-right: 10px;
    }
  }
`

export const AboutSection = () => {
  return (
    <AboutContainer>
      <AboutTitle>What is Kim's Poker Room Seoul Korea?</AboutTitle>
      <AboutContent>
        <p>Kim's Poker Room is Seoul's premier destination for poker enthusiasts, offering:</p>
        <ul>

            <li>We provide legal information about playing holdem in Korea</li>
          <li>We are a long-established poker room</li>
          <li>Premium Location Gangnam in Seoul</li>
          <li>Professional Texas Hold'em Games and Omaha</li>
          <li>International-Friendly Environment</li>
          <li>English-Speaking Staff</li>
          <li>Safe and Secure Gaming Space</li>
          <li>24/7 Operation</li>
        </ul>
        <p>
          Located in the heart of Seoul, we provide a sophisticated gaming 
          experience with multiple stake levels suitable for both beginners 
          and experienced players.
        </p>
      </AboutContent>
    </AboutContainer>
  )
}