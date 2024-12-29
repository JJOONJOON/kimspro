'use client'

import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { MediaItem } from '@/types/media'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Slider = dynamic(() => import('react-slick'), {
  ssr: false,
})

const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
`

interface SliderSettings {
  dots: boolean
  infinite: boolean
  speed: number
  slidesToShow: number
  slidesToScroll: number
  autoplay: boolean
  arrows: boolean
  autoplaySpeed: number
  pauseOnHover: boolean
  adaptiveHeight: boolean
}

const StyledSlider = styled(Slider)<SliderSettings>`
  height: 100%;
  
  .slick-list,
  .slick-track,
  .slick-slide > div {
    height: 100%;
  }
`

const StyledImageDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const StyledVideoDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

interface ImageSliderProps {
  media: MediaItem[]
}

export const ImageSlider = ({ media }: ImageSliderProps) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    adaptiveHeight: true  // 이 옵션 추가
  }

  return (
    <ImageContainer>
      <StyledSlider {...sliderSettings}>
        {media.map((item, index) => (
          item.type === 'image' ? (
            <StyledImageDiv key={index}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                style={{ 
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%'
                }}
                sizes="(max-width: 480px) 100vw"
                priority={index === 0}
                unoptimized // 이 옵션 추가
              />
            </StyledImageDiv>
          ) : (
            <StyledVideoDiv key={index}>
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </StyledVideoDiv>
          )
        ))}
      </StyledSlider>
    </ImageContainer>
  )
}