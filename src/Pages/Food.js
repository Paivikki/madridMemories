// Food.js
import * as React from 'react';
import { Typography } from '@mui/material';
import MediaCard from '../Components/Food/FoodCard';


export default function Food() {
  const cardsData = [
    {
      image: "https://www.tomacafe.es/wp-content/uploads/2020/01/toma-cafe.jpg",
      title: "Toma Café",
      text: "A popular spot for coffee enthusiasts, known for its specialty brews.",
      rating: 4.5,
      category: "Cafe",
      onShare: () => window.open("https://www.google.com/maps/search/?api=1&query=Toma+Café+Madrid", "_blank"),
      onLearnMore: () => window.open("http://www.tomacafe.es/", "_blank"),
    },
    {
      image: "https://media-cdn.tripadvisor.com/media/photo-s/0e/3b/0e/5e/hanso-cafe.jpg",
      title: "HanSo Café",
      text: "Modern café offering a variety of coffee and pastries in a cozy setting.",
      rating: 4.7,
      category: "Cafe",
      onShare: () => window.open("https://www.google.com/maps/search/?api=1&query=HanSo+Café+Madrid", "_blank"),
      onLearnMore: () => window.open("https://www.facebook.com/hansocafe/", "_blank"),
    },
    {
      image: "https://media-cdn.tripadvisor.com/media/photo-s/15/1a/4e/5e/hola-coffee.jpg",
      title: "Hola Coffee",
      text: "Specialty coffee shop with a minimalist design and high-quality beans.",
      rating: 4.6,
      category: "Cafe",
      onShare: () => window.open("https://www.google.com/maps/search/?api=1&query=Hola+Coffee+Madrid", "_blank"),
      onLearnMore: () => window.open("https://holacoffee.es/", "_blank"),
    },
    {
      image: "https://www.mision.cafe/wp-content/uploads/2019/01/mision-cafe.jpg",
      title: "Misión Café",
      text: "Trendy café known for its excellent coffee and brunch options.",
      rating: 4.8,
      category: "Cafe",
      onShare: () => window.open("https://www.google.com/maps/search/?api=1&query=Misión+Café+Madrid", "_blank"),
      onLearnMore: () => window.open("https://misioncafe.com/", "_blank"),
    },
    {
      image: "https://federalcafe.es/wp-content/uploads/2019/02/federal-cafe-madrid.jpg",
      title: "Federal Café",
      text: "Australian-style café offering a relaxed atmosphere and diverse menu.",
      rating: 4.4,
      category: "Cafe",
      onShare: () => window.open("https://www.google.com/maps/search/?api=1&query=Federal+Café+Madrid", "_blank"),
      onLearnMore: () => window.open("https://federalcafe.es/", "_blank"),
    },
    {
      image: "https://www.restaurantelamaruca.com/wp-content/uploads/2018/06/la-maruca.jpg",
      title: "La Maruca",
      text: "Restaurant serving traditional Spanish cuisine with a modern twist.",
      rating: 4.5,
      category: "Restaurant",
      onShare: () => window.open("https://www.google.com/maps/search/?api=1&query=La+Maruca+Madrid", "_blank"),
      onLearnMore: () => window.open("https://www.restaurantelamaruca.com/", "_blank"),
    },
    {
      image: "http://www.casalucio.es/images/casa-lucio.jpg",
      title: "Casa Lucio",
      text: "Historic restaurant famous for its classic Spanish dishes and ambiance.",
      rating: 4.6,
      category: "Restaurant",
      onShare: () => window.open("https://www.google.com/maps/search/?api=1&query=Casa+Lucio+Madrid", "_blank"),
      onLearnMore: () => window.open("http://www.casalucio.es/", "_blank"),
    },
    {
      image: "https://www.botin.es/wp-content/uploads/2019/01/botin.jpg",
      title: "Botín",
      text: "Recognized as the world's oldest restaurant, offering traditional Castilian cuisine.",
      rating: 4.7,
      category: "Restaurant",
      onShare: () => window.open("https://www.google.com/maps/search/?api=1&query=Botín+Madrid", "_blank"),
      onLearnMore: () => window.open("https://www.botin.es/", "_blank"),
    },
    {
      image: "https://www.ovenmozzarellabar.com/wp-content/uploads/2018/05/oven-mozzarella-bar.jpg",
      title: "Oven Mozzarella Bar",
      text: "Italian restaurant specializing in fresh mozzarella and authentic pizzas.",
      rating: 4.3,
      category: "Restaurant",
      onShare: () => window.open("https://www.google.com/maps/search/?api=1&query=Oven+Mozzarella+Bar+Madrid", "_blank"),
      onLearnMore: () => window.open("https://www.ovenmozzarellabar.com/", "_blank"),
    },
    {
      image: "http://www.trattoriapulcinella.com/images/trattoria-pulcinella.jpg",
      title: "Trattoria Pulcinella",
      text: "Cozy Italian eatery known for its Neapolitan dishes and warm atmosphere.",
      rating: 4.4,
      category: "Restaurant",
      onShare: () => window.open("https://www.google.com/maps/search/?api=1&query=Trattoria+Pulcinella+Madrid", "_blank"),
      onLearnMore: () => window.open("http://www.trattoriapulcinella.com/", "_blank"),
    },
    {
      image: "https://elcluballard.com/wp-content/uploads/2019/02/el-club-allard.jpg",
      title: "El Club Allard",
      text: "Fine dining restaurant offering innovative tasting menus in an elegant setting.",
      rating: 4.8,
      category: "Restaurant",
      onShare: () => window.open("https://www.google.com/maps/search/?api=1&query=El+Club+Allard+Madrid", "_blank"),
      onLearnMore: () => window.open("https://elcluballard.com/", "_blank"),
    },
  ];

  return (
    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
      {cardsData.map((card, index) => (
        <MediaCard
          key={index}
          image={card.image}
          title={card.title}
          text={card.text}
          onShare={card.onShare}
          onLearnMore={card.onLearnMore}
          rating={card.rating}
          category={card.category}
        />
      ))}
    </div>
  );
}
