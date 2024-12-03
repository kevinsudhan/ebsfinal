import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Input, Select, Button, Card, Rate, Tag, Typography } from 'antd';
import { CreditCardOutlined, CheckCircleFilled, StarFilled, LeftOutlined, RightOutlined, Star, SafetyCertificateOutlined, GiftOutlined } from '@ant-design/icons';
import creditCardImg from '../../assets/images/services/credit-card.jpg';
import creditCardHeroImg from '../../assets/images/hero/creditcard.png';
import auCard from '../../assets/images/cards/AU.png';
import axisCard from '../../assets/images/cards/AXIS.png';
import hdfcCard from '../../assets/images/cards/HDFC.png';
import iciciCard from '../../assets/images/cards/ICICI.png';
import idfcCard from '../../assets/images/cards/IDFC.png';
import indusindCard from '../../assets/images/cards/INDUSIND.png';
import yesbankCard from '../../assets/images/cards/YESBANK.png';
import { typography, colors, effects, spacing, breakpoints } from '../../styles/theme';
import CardScroller from '../../components/CardScroller/CardScroller';
import Footer from '../../components/Footer/Footer';

const { Title, Text } = Typography;
const { Option } = Select;

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f7fa;
`;

const HeroSection = styled.section`
  padding: 60px 5%;
  background: linear-gradient(135deg, #0077b6 0%, #023e8a 100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 400px;
  margin-top: 0;
  padding-top: 100px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${creditCardImg}) no-repeat center center;
    background-size: cover;
    opacity: 0.1;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #0077b6 0%, #023e8a 100%);
    opacity: 0.85;
    z-index: 1;
  }

  /* Modern geometric shapes */
  .shape-1, .shape-2, .shape-3, .shape-4 {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
    backdrop-filter: blur(5px);
    z-index: 2;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .shape-1 {
    width: 300px;
    height: 300px;
    top: -100px;
    right: -50px;
    animation: float 15s ease-in-out infinite;
  }

  .shape-2 {
    width: 200px;
    height: 200px;
    bottom: -50px;
    left: -50px;
    animation: float 20s ease-in-out infinite reverse;
  }

  .shape-3 {
    width: 150px;
    height: 150px;
    top: 50%;
    left: 15%;
    animation: float 18s ease-in-out infinite 1s;
  }

  .shape-4 {
    width: 100px;
    height: 100px;
    bottom: 20%;
    right: 15%;
    animation: float 12s ease-in-out infinite 0.5s;
  }

  /* Animated lines */
  .line-1, .line-2 {
    position: absolute;
    width: 200px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    z-index: 2;
    transform: rotate(-45deg);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  }

  .line-1 {
    top: 20%;
    right: 10%;
    animation: moveLine 8s linear infinite;
  }

  .line-2 {
    bottom: 30%;
    left: 5%;
    animation: moveLine 12s linear infinite reverse;
  }

  /* Dot grid pattern */
  .dot-pattern {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px);
    background-size: 40px 40px;
    z-index: 2;
    opacity: 0.7;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }

  @keyframes moveLine {
    0% {
      transform: translateX(-100%) rotate(-45deg);
    }
    100% {
      transform: translateX(100%) rotate(-45deg);
    }
  }

  > * {
    position: relative;
    z-index: 3;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
    padding: 100px 5% 40px;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  max-width: 600px;
  color: ${colors.text.white};
  padding: 20px 40px;
  animation: fadeInUp 0.8s ease-out;

  h1 {
    font-family: ${typography.fontFamily.heading};
    font-size: ${typography.fontSize.hero.title};
    font-weight: ${typography.fontWeight.bold};
    line-height: ${typography.lineHeight.tight};
    margin-bottom: 1rem;
    background: linear-gradient(to right, #ffffff, #e0e0e0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      font-size: ${typography.fontSize.h1.tablet};
    }
  }

  p {
    font-family: ${typography.fontFamily.primary};
    font-size: ${typography.fontSize.hero.subtitle};
    line-height: ${typography.lineHeight.relaxed};
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      font-size: ${typography.fontSize.body.large};
    }
  }

  .feature-tags {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin-top: 1.5rem;
  }

  @media (max-width: 1024px) {
    padding: 20px;
    text-align: center;

    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.1rem;
    }
    .feature-tags {
      justify-content: center;
    }
  }
`;

const HeroImage = styled.div`
  flex: 1;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: floatAnimation 3s ease-in-out infinite;

  @keyframes floatAnimation {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  img {
    max-width: 90%;
    height: auto;
    filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.2));
    transform: perspective(1000px) rotateY(-15deg);
    transition: transform 0.3s ease;

    &:hover {
      transform: perspective(1000px) rotateY(-5deg) translateY(-10px);
    }
  }

  @media (max-width: 1024px) {
    max-width: 350px;
    margin: 0 auto;
    
    img {
      max-width: 85%;
      transform: perspective(1000px) rotateY(0deg);
      &:hover {
        transform: perspective(1000px) rotateY(0deg) translateY(-10px);
      }
    }
  }
`;

const FloatingElement = styled.div`
  position: absolute;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;

  ${FloatingElement}:nth-child(1) {
    width: 300px;
    height: 300px;
    top: -50px;
    left: -100px;
    animation: float 15s infinite linear;
  }

  ${FloatingElement}:nth-child(2) {
    width: 200px;
    height: 200px;
    top: 30%;
    right: -50px;
    animation: float 12s infinite linear reverse;
  }

  ${FloatingElement}:nth-child(3) {
    width: 150px;
    height: 150px;
    bottom: 10%;
    left: 20%;
    animation: float 10s infinite linear;
  }

  @keyframes float {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    50% {
      transform: translate(30px, 20px) rotate(180deg);
    }
    100% {
      transform: translate(0, 0) rotate(360deg);
    }
  }
`;

const ContentSection = styled.section`
  padding: 60px 5%;
  max-width: 1400px;
  margin: 0 auto;
`;

const PartnersSection = styled.section`
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  background: ${colors.background.primary};
  padding: 40px 0;
  overflow: hidden;
  position: relative;
`;

const PartnersTitleSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
  padding: 0 20px;

  h2 {
    font-family: ${typography.fontFamily.heading};
    font-size: ${typography.fontSize.h2.desktop};
    font-weight: ${typography.fontWeight.bold};
    color: ${colors.text.primary};
    margin-bottom: 12px;
    background: ${colors.primary.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-family: ${typography.fontFamily.primary};
    font-size: ${typography.fontSize.body.large};
    color: ${colors.text.secondary};
    line-height: ${typography.lineHeight.relaxed};
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.tablet}) {
    h2 {
      font-size: ${typography.fontSize.h2.tablet};
    }
    p {
      font-size: ${typography.fontSize.body.regular};
    }
  }
`;

const MarqueeWrapper = styled.div`
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 200px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, ${colors.background.primary}, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, ${colors.background.primary}, transparent);
  }
`;

const MarqueeContainer = styled.div`
  display: flex;
  gap: 60px;
  animation: scroll 35s linear infinite;
  padding: 30px 0;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  &:hover {
    animation-play-state: paused;
  }
`;

const BankLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  height: 80px;
  background: ${colors.background.white};
  border-radius: 16px;
  padding: 16px 32px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }
`;

const ApplicationSection = styled.section`
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  background: ${colors.background.primary};
  padding: 80px 0;
  display: flex;
  justify-content: center;
`;

const ApplicationContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 40px;
  display: flex;
  position: relative;
  background: ${colors.background.white};
  border-radius: 24px;
  overflow: hidden;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    margin: 0 20px;
  }
`;

const FormLeftSection = styled.div`
  width: 45%;
  background: linear-gradient(135deg, #0077b6 0%, #023e8a 100%);
  color: ${colors.text.white};
  padding: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -30%;
    right: -30%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -20%;
    left: -20%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%);
    border-radius: 50%;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  h3 {
    font-family: ${typography.fontFamily.heading};
    font-size: ${typography.fontSize.h3.desktop};
    font-weight: ${typography.fontWeight.bold};
    line-height: ${typography.lineHeight.tight};
    margin-bottom: 1.2rem;
  }

  p {
    font-family: ${typography.fontFamily.primary};
    font-size: ${typography.fontSize.body.regular};
    line-height: ${typography.lineHeight.relaxed};
    margin-bottom: 1.5rem;
    opacity: 0.9;
  }

  .benefits {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 0.8rem;
      font-size: ${typography.fontSize.body.small};
      line-height: ${typography.lineHeight.normal};

      .anticon {
        font-size: 1rem;
        color: #6dd5ed;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    padding: 40px;
    
    h3 {
      font-size: ${typography.fontSize.h3.tablet};
    }
  }
`;

const FormContainer = styled.div`
  width: 55%;
  padding: 50px;
  position: relative;
  overflow: hidden;
  background: ${colors.background.white};

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: ${colors.primary.gradient};
    opacity: 0.03;
    border-radius: 50%;
    transform: rotate(-15deg);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -50%;
    left: -50%;
    width: 100%;
    height: 100%;
    background: ${colors.primary.gradient};
    opacity: 0.03;
    border-radius: 50%;
    transform: rotate(15deg);
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    padding: 40px;
  }
`;

const StyledForm = styled(Form)`
  .form-header {
    text-align: center;
    margin-bottom: 30px;

    h3 {
      font-family: ${typography.fontFamily.heading};
      font-size: ${typography.fontSize.h4.desktop};
      font-weight: ${typography.fontWeight.bold};
      color: ${colors.text.primary};
      margin-bottom: 8px;
    }

    p {
      font-family: ${typography.fontFamily.primary};
      font-size: ${typography.fontSize.body.small};
      color: ${colors.text.secondary};
      line-height: ${typography.lineHeight.relaxed};
    }
  }

  .ant-form-item {
    margin-bottom: 20px;
  }

  .ant-input,
  .ant-select-selector {
    height: 45px !important;
    border-radius: 12px !important;
    border: 2px solid rgba(0, 0, 0, 0.08) !important;
    padding: 0 16px !important;
    font-size: ${typography.fontSize.body.small} !important;

    &:hover {
      border-color: rgba(33, 147, 176, 0.3) !important;
    }

    &:focus {
      border-color: ${colors.primary.start} !important;
    }
  }

  .ant-select-selection-item,
  .ant-select-selection-placeholder {
    line-height: 41px !important;
  }

  .ant-btn {
    height: 45px;
    border-radius: 12px;
    font-size: ${typography.fontSize.body.regular};
  }

  .ant-form-item-label {
    padding-bottom: 4px;
    
    label {
      font-size: ${typography.fontSize.body.small};
      height: auto;
    }
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-weight: 600;
  background: linear-gradient(135deg, #0077b6 0%, #023e8a 100%);
  border: none;
  margin-top: 20px;

  &:hover {
    background: linear-gradient(135deg, #023e8a 0%, #0077b6 100%);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 119, 182, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const FeatureTag = styled(Tag)`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.fontSize.tag.regular};
  background: ${effects.glassmorphism.background} !important;
  border: ${effects.glassmorphism.border} !important;
  backdrop-filter: ${effects.glassmorphism.backdropFilter};
  padding: 10px 20px !important;
  border-radius: 20px !important;
  color: white !important;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  
  .anticon {
    color: white !important;
    font-size: 1.1rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.25) !important;
    transform: translateY(-2px);
  }
`;

const creditCards = [
  {
    id: 1,
    name: 'IRCTC RuPay Credit Card',
    image: '/images/cards/irctc.png',
    rating: 4.0,
    reviews: 1250,
    joiningFee: '₹500 + GST',
    features: [
      'Travel rewards on IRCTC bookings',
      'Complimentary lounge access',
      'Fuel surcharge waiver'
    ],
    categories: ['top', 'travel', 'rewards']
  },
  {
    id: 2,
    name: 'IDFC FIRST SWYP Credit Card',
    image: '/images/cards/idfc.png',
    rating: 5.0,
    reviews: 850,
    joiningFee: '₹499 + GST',
    features: [
      '1000 Reward Points on 1st EMI conversion',
      'Zero forex markup',
      'Movie ticket discounts'
    ],
    categories: ['top', 'movie', 'dining', 'shopping']
  },
  {
    id: 3,
    name: 'Axis Bank ACE Credit Card',
    image: '/images/cards/ace.png',
    rating: 4.5,
    reviews: 2100,
    joiningFee: 'NIL',
    features: [
      '5% cashback on bill payments',
      'Welcome bonus 2000 points',
      'Movie ticket BOGO offers'
    ],
    categories: ['top', 'movie', 'rewards', 'shopping']
  },
  {
    id: 4,
    name: 'HDFC Diners Club Black',
    image: '/images/cards/diners.png',
    rating: 4.8,
    reviews: 3200,
    joiningFee: '₹10000 + GST',
    features: [
      'Unlimited airport lounge access',
      'Golf privileges',
      '10X rewards on dining'
    ],
    categories: ['top', 'travel', 'dining', 'lounge']
  }
];

const bankLogos = [
  { src: '/images/partners/hdfc.jpg', name: 'HDFC Bank' },
  { src: '/images/partners/icici.jpg', name: 'ICICI Bank' },
  { src: '/images/partners/axis.jpg.png', name: 'Axis Bank' },
  { src: '/images/partners/kotak.jpg', name: 'Kotak Bank' },
  { src: '/images/partners/idfc.jpg', name: 'IDFC Bank' },
  { src: '/images/partners/yes.png', name: 'Yes Bank' },
  { src: '/images/partners/au.jpg', name: 'AU Bank' },
  { src: '/images/partners/federal.png', name: 'Federal Bank' }
];

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: ${spacing.xxl};
  padding-top: ${spacing.xxl};

  h2 {
    font-family: ${typography.fontFamily.heading};
    font-size: ${typography.fontSize.h2.desktop};
    font-weight: ${typography.fontWeight.bold};
    line-height: 1.2;
    background: linear-gradient(135deg, #2193b0, #6dd5ed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: ${spacing.md};

    @media (max-width: ${breakpoints.tablet}) {
      font-size: ${typography.fontSize.h2.tablet};
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: ${typography.fontSize.h2.mobile};
    }
  }

  p {
    font-family: ${typography.fontFamily.primary};
    font-size: ${typography.fontSize.body.large};
    color: ${colors.text.secondary};
    max-width: 600px;
    margin: 0 auto;
    line-height: ${typography.lineHeight.relaxed};

    @media (max-width: ${breakpoints.mobile}) {
      font-size: ${typography.fontSize.body.regular};
    }
  }
`;

const CreditCards: React.FC = () => {
  const [form] = Form.useForm();
  const [activeFilter, setActiveFilter] = useState('top');
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { src: auCard, alt: "AU Bank Credit Card" },
    { src: axisCard, alt: "Axis Bank Credit Card" },
    { src: hdfcCard, alt: "HDFC Bank Credit Card" },
    { src: iciciCard, alt: "ICICI Bank Credit Card" },
    { src: idfcCard, alt: "IDFC Bank Credit Card" },
    { src: indusindCard, alt: "IndusInd Bank Credit Card" },
    { src: yesbankCard, alt: "Yes Bank Credit Card" },
  ];

  const filters = [
    { id: 'top', label: 'Top Cards' },
    { id: 'travel', label: 'Travel' },
    { id: 'shopping', label: 'Shopping' },
    { id: 'fuel', label: 'Fuel' },
    { id: 'movie', label: 'Movie' },
    { id: 'dining', label: 'Dining' },
    { id: 'lounge', label: 'Lounge Access' },
    { id: 'rewards', label: 'Rewards' }
  ];

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % cards.length;
      visibleCards.push(cards[index]);
    }
    return visibleCards;
  };

  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <PageContainer>
      <HeroSection>
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <div className="shape-3"></div>
        <div className="shape-4"></div>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="dot-pattern"></div>
        <HeroContent>
          <Title level={1}>
            Transform Your Spending with Premium Credit Cards
          </Title>
          <Text style={{ color: 'white', fontSize: '1.2rem', display: 'block', marginBottom: '1.5rem' }}>
            Discover exclusive rewards, cashback, and privileges. Apply now and elevate your financial journey with EBS Finance.
          </Text>
          <div className="feature-tags">
            <FeatureTag icon={<StarFilled />}>
              Instant Approval
            </FeatureTag>
            <FeatureTag icon={<CheckCircleFilled />}>
              Zero Annual Fee*
            </FeatureTag>
            <FeatureTag icon={<CreditCardOutlined />}>
              5% Cashback
            </FeatureTag>
          </div>
        </HeroContent>
        <HeroImage>
          <img src={creditCardHeroImg} alt="Premium Credit Cards" />
        </HeroImage>
      </HeroSection>

      <ContentSection>
        <PartnersSection>
          <PartnersTitleSection>
            <h2>Our Banking Partners</h2>
            <p>We collaborate with India's leading banks to bring you exclusive credit card offers with unmatched benefits</p>
          </PartnersTitleSection>
          
          <MarqueeWrapper>
            <MarqueeContainer>
              {[...Array(2)].map((_, setIndex) => (
                <React.Fragment key={setIndex}>
                  {bankLogos.map((logo, index) => (
                    <BankLogo key={`${setIndex}-${index}`}>
                      <img src={logo.src} alt={logo.name} />
                    </BankLogo>
                  ))}
                </React.Fragment>
              ))}
            </MarqueeContainer>
          </MarqueeWrapper>
        </PartnersSection>

        <ApplicationSection>
          <ApplicationContainer>
            <FormLeftSection>
              <h3>Why Choose Our Credit Cards?</h3>
              <p>Experience a world of exclusive benefits and rewards with our premium credit card offerings.</p>
              <ul className="benefits">
                <li>
                  <CheckCircleFilled /> Instant approval with minimal documentation
                </li>
                <li>
                  <CheckCircleFilled /> Up to 5% cashback on all your purchases
                </li>
                <li>
                  <CheckCircleFilled /> Complimentary airport lounge access
                </li>
                <li>
                  <CheckCircleFilled /> Zero annual fee for the first year
                </li>
                <li>
                  <CheckCircleFilled /> 24/7 concierge services
                </li>
                <li>
                  <CheckCircleFilled /> Comprehensive fraud protection
                </li>
              </ul>
            </FormLeftSection>

            <FormContainer>
              <StyledForm
                form={form}
                layout="vertical"
                onFinish={onFinish}
              >
                <div className="form-header">
                  <h3>Get Started Today</h3>
                  <p>Fill in your details below and we'll process your application instantly</p>
                </div>

                <Form.Item
                  label="Full Name"
                  name="fullName"
                  rules={[{ required: true, message: 'Please enter your full name' }]}
                >
                  <Input placeholder="Enter your full name" size="large" />
                </Form.Item>

                <Form.Item
                  label="Mobile Number"
                  name="mobile"
                  rules={[
                    { required: true, message: 'Please enter your mobile number' },
                    { pattern: /^[0-9]{10}$/, message: 'Please enter a valid 10-digit mobile number' }
                  ]}
                >
                  <Input 
                    placeholder="Enter your 10-digit mobile number" 
                    size="large"
                    maxLength={10}
                  />
                </Form.Item>

                <Form.Item
                  label="Email Address"
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email address' }
                  ]}
                >
                  <Input placeholder="Enter your email address" size="large" />
                </Form.Item>

                <Form.Item
                  label="Employment Type"
                  name="employmentType"
                  rules={[{ required: true, message: 'Please select your employment type' }]}
                >
                  <Select placeholder="Select your employment type" size="large">
                    <Option value="salaried">Salaried</Option>
                    <Option value="self-employed">Self Employed</Option>
                    <Option value="business">Business Owner</Option>
                    <Option value="professional">Professional</Option>
                  </Select>
                </Form.Item>

                <Form.Item>
                  <SubmitButton type="primary" htmlType="submit" block size="large">
                    Submit Application
                  </SubmitButton>
                </Form.Item>
              </StyledForm>
            </FormContainer>
          </ApplicationContainer>
        </ApplicationSection>

        <section>
          <CardScroller images={[
            auCard,
            axisCard,
            hdfcCard,
            iciciCard,
            idfcCard,
            indusindCard,
            yesbankCard
          ]} />
        </section>
      </ContentSection>
      <Footer />
    </PageContainer>
  );
};

export default CreditCards;
