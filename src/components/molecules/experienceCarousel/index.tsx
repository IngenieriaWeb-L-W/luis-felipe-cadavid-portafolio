'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Badge, { BadgeProps } from '@components/atoms/badge';

interface ExperienceCarouselProps {
    data: {
        id: number;
        icon: BadgeProps;
        title: string;
        text?: string;
    }[];
    onClick: (id: number) => void;
}

const ExperienceCarousel: React.FC<ExperienceCarouselProps> = ({ data, onClick }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {data.map((item, index) => (
                <div key={index} className="px-2" onClick={() => onClick(item.id)}>
                    <Badge {...item.icon} />
                    <p className="text-center">{item.title}</p>
                </div>
            ))}
        </Slider>
    );
};

export default ExperienceCarousel;
