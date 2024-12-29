'use client'

import { useState } from 'react'
import { Container } from '@/components/layout/Container'
import { TitleBox, TitleText, Catchphrase } from '@/components/layout/Title'
import { ImageSlider } from '@/components/slider/ImageSlider'
import { ExpandableBox } from '@/components/common/ExpandableBox'
import { ContactButtons } from '@/components/contact/ContactButtons'
import { MediaItem } from '@/types/media'
import { AboutSection } from '@/components/info/AboutSection'

export default function Home() {
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const [isFaqOpen, setIsFaqOpen] = useState(false)

  const media: MediaItem[] = [
    { type: 'image', src: '/images/poker1.jpg', alt: 'Poker Room 1' },
    { type: 'image', src: '/images/poker2.jpg', alt: 'Poker Room 2' },
    { type: 'video', src: '/images/poker3.mp4', alt: 'Poker Room Video1' },
    { type: 'video', src: '/images/poker4.mp4', alt: 'Poker Room Video2' },
    { type: 'video', src: '/images/poker5.mp4', alt: 'Poker Room Video3' },
  ]

  const contactLinks = [
    { platform: 'WhatsApp', url: 'https://wa.me/821054555332' },
    { platform: 'Instagram', url: 'https://instagram.com/icanu495' },
    { platform: 'Telegram', url: 'https://t.me/+T91lpFmixGI4ODBl' },
  ]

  return (
    <Container>
      <TitleBox>
        <TitleText>
          Kim&apos;s Poker Room
        </TitleText>
        <Catchphrase>
          <span>Enjoy Safe and</span>
          <span>Friendly Poker Community</span>
        </Catchphrase>
      </TitleBox>
      
      <ContactButtons links={contactLinks} />
      
      <ImageSlider media={media} />
      
      <AboutSection />
      
   
      
      <ExpandableBox
        title="Korean poker information and tips for foreigners"
        isOpen={isInfoOpen}
        onToggle={() => setIsInfoOpen(!isInfoOpen)}
      >
        <p>Welcome to Kim's Poker Room!</p>
        <p>Here are some important tips for playing poker in Korea:</p>
        <ul>
          <li></li>
          <li>Games are available 24/7</li>
          <li>Multiple stake levels available</li>
          <li>Professional dealers and secure environment</li>
          <li>English-speaking staff available</li>
        </ul>
      </ExpandableBox>

      <ExpandableBox
        title="Frequently Asked Questions"
        isOpen={isFaqOpen}
        onToggle={() => setIsFaqOpen(!isFaqOpen)}
      >
        <ul>
          <li>
            <strong>Q: What games are available?</strong>
            <p>A: We offer Texas Hold'em and Omaha games.</p>
          </li>
          <li>
            <strong>Q: What are the operating hours?</strong>
            <p>A: We are open 24/7.</p>
          </li>
          <li>
            <strong>Q: Do you accept foreign players?</strong>
            <p>A: Yes, we welcome players from all countries.</p>
          </li>
          <li>
            <strong>Q: What is the minimum buy-in?</strong>
            <p>A: Minimum buy-in varies by game. Please contact us for details.</p>
          </li>
        </ul>
      </ExpandableBox>
    </Container>
  )
}