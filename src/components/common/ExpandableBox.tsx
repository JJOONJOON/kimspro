'use client'

import styled from '@emotion/styled'
import { ReactNode } from 'react'

interface Props {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: ReactNode
}

const Box = styled.div<{ isOpen: boolean }>`
  width: 100%;
  max-width: calc(100% - 10px);
  background: rgba(30, 42, 59, 0.95);
  border: 1px solid var(--gold);
  border-radius: 8px;
  overflow: hidden;
  margin: 0 auto 20px;
  box-shadow: 
    0 0 20px rgba(198, 160, 82, 0.1),
    inset 0 0 10px rgba(198, 160, 82, 0.1);
  box-sizing: border-box;
`

const Header = styled.div`
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    to right,
    rgba(198, 160, 82, 0.1),
    rgba(198, 160, 82, 0.05)
  );
  border-bottom: 1px solid var(--gold);
  
  &:hover {
    background: linear-gradient(
      to right,
      rgba(198, 160, 82, 0.2),
      rgba(198, 160, 82, 0.1)
    );
  }
`

const HeaderText = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: var(--gold);
  letter-spacing: 1px;
`

const Content = styled.div<{ isOpen: boolean }>`
  padding: ${props => props.isOpen ? '15px' : '0'};
  max-height: ${props => props.isOpen ? '500px' : '0'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  color: var(--white);
  
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  li {
    padding: 10px 0;
    border-bottom: 1px solid rgba(198, 160, 82, 0.2);
    
    &:last-child {
      border-bottom: none;
    }
  }
`

const Arrow = styled.span<{ isOpen: boolean }>`
  color: var(--gold);
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  transition: transform 0.3s ease;
  
  &::after {
    content: '▼';
  }
`

export function ExpandableBox({ title, isOpen, onToggle, children }: Props) {
  return (
    <Box isOpen={isOpen}>
      <Header onClick={onToggle}>
        <HeaderText>{title}</HeaderText>
        <Arrow isOpen={isOpen} />
      </Header>
      <Content isOpen={isOpen}>{children}</Content>
    </Box>
  )
}