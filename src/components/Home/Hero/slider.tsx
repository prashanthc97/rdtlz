'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { pricedeta } from '@/app/api/data';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const CardSlider = () => {
  const [prices, setPrices] = useState<Record<string, { usd: number }>>({});

  useEffect(() => {
    const fetchPrices = async () => {
      const ids = pricedeta.map(item => item.title.toLowerCase()).join(',');
      const response = await fetch(`/api/crypto-price?ids=${ids}&vs_currency=usd`);
      const data = await response.json();
      setPrices(data);
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1500,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return null
};

export default CardSlider;
