import * as React from 'react';
import { Typography, Chip, Button, Box } from '@mui/material';
import MediaCard from '../Components/Food/FoodCard';
import Chocolateria from '../Components/Food/assets/Chocolatería San Ginés.jpg';
import EatMyTrip from '../Components/Food/assets/EatMyTrip.jpg';
import FrutasProhibitas from '../Components/Food/assets/Frutas Prohibidas.jpg';
import Mars from '../Components/Food/assets/Mars l Vermut Madrid.jpg';
import Arcade from '../Components/Food/assets/NEXT LEVEL Arcade Bar.jpg';
import OvejaNegraVegana from '../Components/Food/assets/Oveja Negra Vegana.jpg';
import PanyPepinillos from '../Components/Food/assets/Pan y Pepinillos Café.jpg';
import RedBar from '../Components/Food/assets/Red Bar.jpg';
import TabernaAlmeria from '../Components/Food/assets/Taberna Almería.jpg';
import UPMCafeteria from '../Components/Food/assets/UPM Cafeteria.jpg';
import Alchemy from '../Components/Food/assets/ALCHEMY.jpg';
import FlowerCafe from '../Components/Food/assets/Salon Des Fleurs.jpg'
import useDocumentTitle from '../useDocumentTitle';


export default function Food() {
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  useDocumentTitle('Food and Drink Spots - Madrid Memories');


  const cardsData = [
    {
      image: PanyPepinillos,
      title: "Pan y Pepinillos Café",
      text: "This is a cute little café, we liked the coffee a lot. The cake was a little sweet and the seating area was a little tiny and not too comfortable. So maybe better for take away:) ",
      onShare: "https://www.google.de/maps/place/Pan+y+Pepinillos+Caf%C3%A9/@40.4227979,-3.7033123,18z/data=!4m6!3m5!1s0xd42291f33904c91:0xfae3e60ad6bb45a4!8m2!3d40.4237639!4d-3.7027066!16s%2Fg%2F11sh06lrw1?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D", 
      rating: 4,
      category: "Café"
    },
    {
      image: FrutasProhibitas,
      title: "Frutas Prohibidas",
      text: "Vegan brunch place even offering eggs and bacon. Perfect for vegans, but food was a little cold and quite expensive so you can probably find a better brunch place for non-vegans.",
      onShare: "https://google.de/maps/place/Frutas+Prohibidas/@40.4274672,-3.7129243,17z/data=!3m1!4b1!4m6!3m5!1s0xd42293cb2eb9f0b:0x4a2c9ef6c6763af!8m2!3d40.4274672!4d-3.7103494!16s%2Fg%2F11gj74yvn7?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D",
      rating: 3.5,
      category: "Brunch"
    },
    {
      image: EatMyTrip,
      title: "EatMyTrip",
      text: "Reaaaaaally tasty brunch place with great enviornment. Only downsides: salty selelction without liquid egg is not too big and it's kinda expensive.",
      onShare: "https://www.google.de/maps/place/EatMyTrip+Brunch+%26+Dinner+Madrid/@40.4285831,-3.7064755,17z/data=!3m1!4b1!4m6!3m5!1s0xd42291cb2220caf:0x2a223fd4fff00ce6!8m2!3d40.4285831!4d-3.7039006!16s%2Fg%2F11q99p1g1g?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D", 
      rating: 4.5,
      category: "Brunch"
    },
    {
      image: OvejaNegraVegana,
      title: "Oveja Negra Vegana",
      text: "Vegan tapas place with a good selection and an adequate price. However, everything tasted a little smokey. Still a recommendation for vegans:)",
      onShare: "https://www.google.de/maps/place/Oveja+Negra+Vegana/@40.4093818,-3.7012741,18z/data=!4m10!1m2!2m1!1svegan+tapas!3m6!1s0xd42262ba2fbad75:0xf6dd1bc40ff70169!8m2!3d40.4093818!4d-3.6999866!15sCgt2ZWdhbiB0YXBhcyImUiQvZ2VvL3R5cGUvZXN0YWJsaXNobWVudC9zZXJ2ZXNfdmVnYW5aDSILdmVnYW4gdGFwYXOSARB2ZWdhbl9yZXN0YXVyYW504AEA!16s%2Fg%2F12hyf2gh8?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D", 
      rating: 4,
      category: "Tapas"
    },
    {
      image: Chocolateria,
      title: "San Ginés",
      text: "24/7 churros con chocolate!!! Close to Plaza Mayor and a must visit - if the line is long don't go to the main location to get the ticket.",
      onShare: "https://www.google.de/maps/place/Chocolater%C3%ADa+San+Gin%C3%A9s/@40.416741,-3.7167162,15z/data=!3m1!5s0xd42287ebf5505bb:0x541b62d761c1c1f7!4m10!1m2!2m1!1sChocolater%C3%ADa+San+Gin%C3%A9s!3m6!1s0xd42287ebe5ee41d:0x6895d6342c12c3d5!8m2!3d40.4167407!4d-3.7069176!15sChhDaG9jb2xhdGVyw61hIFNhbiBHaW7DqXMiA4gBAVoaIhhjaG9jb2xhdGVyw61hIHNhbiBnaW7DqXOSAQ5jaG9jb2xhdGVfc2hvcOABAA!16s%2Fm%2F076v5k5?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D", 
      rating: 5,
      category: "Chocolatería"
    },
    {
      image: TabernaAlmeria,
      title: "Taberna Almería",
      text: "Tapas bar with with a wide variety of toast, that fill you up, amazing garlic potatoes and really good vermouth.",
      onShare: "https://www.google.de/maps/place/Taberna+Almer%C3%ADa/@40.4108844,-3.7130444,19z/data=!4m10!1m2!2m1!1sTapas!3m6!1s0xd4227d791e3d613:0x2f928f3d8fbf32ed!8m2!3d40.4108844!4d-3.7124007!15sCgVUYXBhc1oHIgV0YXBhc5IBCXRhcGFzX2JhcuABAA!16s%2Fg%2F1tj53xg2?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D", 
      rating: 5,
      category: "Tapas"
    },
    {
      image: RedBar,
      title: "Red Bar",
      text: "Bar with board games and a lot of space. However, the games are not really complete and a little sticky.",
      onShare: "https://www.google.de/maps/place/Red+Bar/@40.42581,-3.7044876,18z/data=!4m10!1m2!2m1!1sgame+bar!3m6!1s0xd4228627dd28aad:0x368e026dad7b75f3!8m2!3d40.4257484!4d-3.7031875!15sCghnYW1lIGJhcloKIghnYW1lIGJhcpIBA2JhcuABAA!16s%2Fg%2F12lk26tc7?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D", 
      rating: 4,
      category: "Bar"
    },
    {
      image: Arcade,
      title: "NEXT LEVEL",
      text: "Arcade Game Bar where you only have to get drinks and then can play for free! - they close the doors if too many people are inside.",
      onShare: "https://www.google.de/maps/place/NEXT+LEVEL+Arcade+Bar+~Arg%C3%BCelles~/@40.4314914,-3.7157785,18z/data=!4m10!1m2!2m1!1sgame+bar!3m6!1s0xd4229b851e41b59:0xa5aa235dcbe77d3!8m2!3d40.4314914!4d-3.7137186!15sCghnYW1lIGJhcloKIghnYW1lIGJhcpIBA2JhcuABAA!16s%2Fg%2F11k9kh5ckq?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D", 
      rating: 5,
      category: "Bar"
    },
    {
      image: FlowerCafe,
      title: "Salon Des Fleurs",
      text: "Flower shop which doubles as a Café. Coffee is medium, cake is way too sweet, but ambiente is suuuuper cozy.",
      onShare: "https://www.google.de/maps/place/Salon+Des+Fleurs/@40.4392208,-3.7156252,16.38z/data=!4m6!3m5!1s0xd42285ab07247af:0x9679024b3f404763!8m2!3d40.4422788!4d-3.7124212!16s%2Fg%2F11b6zyr799?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D", 
      rating: 3.5,
      category: "Café"
    },
    {
      image: Alchemy,
      title: "ALCHEMY",
      text: "Really good coffee and matcha! Seating is a little weird.",
      onShare: "https://www.google.de/maps/place/ALCHEMY+Specialty+Coffee/@40.4114892,-3.7103238,17z/data=!3m1!4b1!4m6!3m5!1s0xd42272c97c5243b:0xc2fc6cdf6a924289!8m2!3d40.4114892!4d-3.7077489!16s%2Fg%2F11tj5_4hx_?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D", 
      rating: 5,
      category: "Café"
    },
    {
      image: UPMCafeteria,
      title: "UPM Cafeteria",
      text: "Cafeteria in the basement of the UPM. Pan y tomate for only 1.10€ and really nice staff!:)",
      onShare: "https://www.google.de/maps/place/Universidad+Polit%C3%A9cnica+de+Madrid/@40.4050099,-3.8401627,19z/data=!4m10!1m2!2m1!1sCafeteria+UPM!3m6!1s0xd4185f258e5eec5:0xdf7b007bb6904fa5!8m2!3d40.4050099!4d-3.839519!15sCg1DYWZldGVyaWEgVVBNWg8iDWNhZmV0ZXJpYSB1cG2SARFwdWJsaWNfdW5pdmVyc2l0eZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOU05rOVBWbU5CRUFF4AEA-gEECAAQEg!16s%2Fg%2F11bbmj447q?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D", 
      rating: 4,
      category: "Cafeteria"
    },
    {
      image: Mars,
      title: "Mars | Vermut Madrid",
      text: "Really good Vermut, central location and enough space to also go with a bigger group. ",
      onShare: "https://www.google.de/maps/place/Mars+l+Vermut+Madrid/@40.4141679,-3.7012948,17z/data=!3m1!4b1!4m6!3m5!1s0xd42292d101e7363:0x42895092a2457b8e!8m2!3d40.4141679!4d-3.6987199!16s%2Fg%2F11h022yfpd?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D", 
      rating: 4.5,
      category: "Bar"
    },
  ];

  // Filter the cards based on the selected category
  const filteredCards = selectedCategory
    ? cardsData.filter((card) => card.category === selectedCategory)
    : cardsData;

  // Unique categories for the filter options
  const uniqueCategories = Array.from(new Set(cardsData.map((card) => card.category)));

  return (
    <div style={{ marginBottom: '4rem' }}>
      <Typography variant="h1"  sx={{
          marginTop: '4rem',
          marginLeft: '3rem',
          marginRight: '3rem',
          fontSize: '3.75rem',
          fontWeight: 500,
          lineHeight: 1.2,
          textAlign: 'left',
        }}>
        Food and Drink Spots
      </Typography>
      <Typography variant="body1" align="left" gutterBottom style={{ marginTop: "1rem", marginLeft: "3rem", marginRight: '3rem', marginBottom: '2rem',  }}>
        Here you can find some of the culinary spots that we visited in Madrid together with our thoughts on it. Have fun to try them out yourself!:D If you are looking for something specific, use the round gray filters labeled "Filter for ..." to find it faster. The content will change dynamically when a filter button is pressed. 
      </Typography>
  
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'left',
          marginLeft: '3rem',
          marginTop: '1rem',
          gap: 2,
          mb: 3,
          flexWrap: 'wrap',
        }}
      >

        {uniqueCategories.map((category) => (
          <Chip
            key={category}
            label={`Filter for ${category}`}
            onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
            color={selectedCategory === category ? 'primary' : 'default'}
            clickable
            role="button"
            aria-pressed={selectedCategory === category}
            aria-describedby="filter-instructions" // Associates the chip with the instructions
          />
        ))}
        <Button
          variant="outlined"
          onClick={() => setSelectedCategory(null)}
          aria-label="Clear all filters"
        >
          Clear Filter
        </Button>
      </Box>


      {/* Cards */}
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {filteredCards.map((card, index) => (
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
    </div>
  );
}
