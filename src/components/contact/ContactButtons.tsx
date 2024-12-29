'use client'

import styled from '@emotion/styled'
import Image from 'next/image'

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: rgba(30, 42, 59, 0.95);
  border: 1px solid var(--gold);
  border-radius: 10px;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0;
  width: 100%;
  box-sizing: border-box;
`

const Title = styled.h2`
  color: var(--gold);
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  text-align: center;
  font-family: 'Playfair Display', serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`

const Subtitle = styled.p`
  color: var(--light-gold);
  font-size: 14px;
  margin: 0;
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  width: 100%;
  max-width: 450px;
  justify-content: space-between;
`

const Button = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 12px;
  border: 1px solid var(--light-gold);
  border-radius: 8px;
  background: linear-gradient(145deg, var(--gold), var(--dark-gold));
  color: white;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  justify-content: center;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(198, 160, 82, 0.3);
    background: linear-gradient(145deg, var(--dark-gold), var(--gold));
  }
`

const IconWrapper = styled.div`
  position: relative;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
`

interface ContactLink {
  platform: string
  url: string
}

interface Props {
  links: ContactLink[]
}

export const ContactButtons = ({ links }: Props) => {
  const handleClick = (url: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <ButtonGroup>
        {links.map((link, index) => (
          <Button
            key={index}
            href={link.url}
            onClick={handleClick(link.url)}
          >
            <IconWrapper>
              <Image src={`/icons/${link.platform.toLowerCase()}.jpg`} alt={link.platform} fill />
            </IconWrapper>
            {link.platform}
          </Button>
        ))}
      </ButtonGroup>
    </ContactContainer>
  )
}