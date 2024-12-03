import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
import './CardScroller.css';

import { typography, colors, effects, spacing, breakpoints } from '../../styles/theme';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const Title = styled.div`
  text-align: center;
  padding: 40px 0;

  h2 {
    font-family: ${typography.fontFamily.heading};
    font-size: ${typography.fontSize.h2.desktop};
    font-weight: ${typography.fontWeight.bold};
    background: linear-gradient(135deg, #0077b6 0%, #023e8a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 16px;
    position: relative;
    display: inline-block;
  }

  p {
    font-family: ${typography.fontFamily.primary};
    font-size: ${typography.fontSize.body.large};
    color: ${colors.text.secondary};
    line-height: ${typography.lineHeight.relaxed};
    max-width: 600px;
    margin: 0 auto;
  }
`;

interface CardScrollerProps {
    images: string[];
}

const CardScroller: React.FC<CardScrollerProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsRef = useRef<HTMLUListElement>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (!cardsRef.current || images.length === 0) return;
        
        const cards = gsap.utils.toArray<HTMLLIElement>('.cards li');
        gsap.set(cards, { xPercent: 400, opacity: 0, scale: 0.5, rotateY: 45, zIndex: -1 });

        // Show initial cards
        updateCardsVisibility(currentIndex);
    }, [images.length]);

    const updateCardsVisibility = (index: number) => {
        if (!cardsRef.current) return;
        setIsAnimating(true);

        const cards = gsap.utils.toArray<HTMLLIElement>('.cards li');
        const timeline = gsap.timeline({
            onComplete: () => setIsAnimating(false),
            defaults: {
                duration: 0.5,
                ease: "sine.inOut" // More bouncy effect
            }
        });

        // First set all cards to hidden state
        timeline.set(cards, { zIndex: -1 }, 0);

        cards.forEach((card, i) => {
            const position = (i - index + images.length) % images.length;
            
            if (position >= 0 && position <= 2) {
                // Calculate rotation - symmetric for left and right cards
                const rotation = position === 1 ? 0 : position === 0 ? -25 : 25;
                const xOffset = position === 1 ? 0 : position === 0 ? -100 : 100;
                
                // Card is visible
                timeline.to(card, {
                    xPercent: xOffset,
                    opacity: position === 1 ? 1 : 0.7,
                    scale: position === 1 ? 1.3 : 1,
                    rotateY: rotation,
                    zIndex: position === 1 ? 2 : 1,
                    ease: "power3.out",
                    immediateRender: false
                }, 0);

                // Add bounce effect only for center card
                if (position === 1) {
                    timeline.to(card, {
                        scale: 1.4,
                        duration: 0.2,
                        ease: "elastic.out(1, 0.5)"
                    }, 0.3).to(card, {
                        scale: 1.3,
                        duration: 0.2,
                        ease: "power2.inOut"
                    }, 0.5);
                }
            } else {
                // Card is hidden
                const isLeft = position < 0;
                timeline.set(card, {
                    opacity: 0,
                    immediateRender: true
                }, 0);
                timeline.to(card, {
                    xPercent: isLeft ? 0 : 0,
                    scale: 0,
                    rotateY: isLeft ? 0 : 0,
                    zIndex: -1,
                    immediateRender: false,
                    ease: "power2.inOut"
                }, 0);
            }
        });
    };

    const handlePrevClick = () => {
        if (isAnimating) return;
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
        updateCardsVisibility(newIndex);
    };

    const handleNextClick = () => {
        if (isAnimating) return;
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
        updateCardsVisibility(newIndex);
    };

    return (
        <div className="card-scroller-container">
            <Title>
                <h2>Best Credit Cards of 2024</h2>
                <p>Compare and choose from our curated selection of premium credit cards with exclusive benefits</p>
            </Title>
            <div className="cards-wrapper">
                <div className="gallery">
                    <ul className="cards" ref={cardsRef}>
                        {images.map((src, index) => (
                            <li key={index}>
                                <img src={src} alt={`Card ${index + 1}`} />
                            </li>
                        ))}
                    </ul>
                    <div className="actions">
                        <button className="prev" onClick={handlePrevClick}>
                            <LeftOutlined />
                        </button>
                        <button className="next" onClick={handleNextClick}>
                            <RightOutlined />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardScroller;
