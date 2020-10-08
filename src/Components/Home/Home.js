import React from "react";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/cca5afcd-1c5c-4522-810c-a3a4677d98a5.jpg?im_w=960"
          title="Farm stay Villa"
          description="Experience living in an Indian farm including pets & livestock. The farm is a developing food forest too."
          price="3,086/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/8a39b72f-6b32-44ec-9937-0303a484ac10.jpg?im_w=960"
          title="LUXURIOUS VILLA"
          description="our luxurious villa is built with fusion design & has a 14000 sq ft lawn."
          price="15,286/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/cb2281bf-2f2a-428c-a13e-ab089ba19619.jpg?im_w=960"
          title="Luxury and Traditional villa"
          description="The highlight spot is an open center courtyard with designed pillars and mural painted wall."
          price="3,300/ night"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/53d5c031-1184-4d38-ab9b-b6a94c06b7b7.jpg?im_w=960"
          title="Exclusive Beach Villa "
          description="This is an Exotic Beach House having fantastic sea views from The Living, Dining & from the Bedrooms."
          price="29,286/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/921c9dfb-53e0-4615-b2ae-1b1f7078a7ec.jpg?im_w=960"
          title="Beach resort Mangalore"
          description="You will get a mesmerizing sea view from the balcony of the bedroom which will make you relaxed."
          price="5,000/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/d9505dd6-8d28-4521-adb5-cff1641c2f75.jpg?im_w=960"
          title="Serenity-Vagamon-Kuttikanam"
          description="A tropical hillside retreat resting on Kuttikkanam Hills. A 2 bed room fully furnished villa."
          price="6,000/ night"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/80d03de5-beac-46bf-bccc-6fd966631e83.jpg?im_w=720"
          title="Ashirvad farm stay"
          description="A farmhouse inside the coconut farm, its a Kerala styled house with three bedroom and kitchen."
          price="5,929/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/ff34926a-564d-44d0-a23a-3c3f78dd601f.jpg?im_w=720"
          title="Bamboo Cottage "
          description="In the rural hinterlands of Mysore, offering the peace, calm and quiet that one often needs."
          price="1,850/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/b587d314-19df-4c66-88d4-4a716e020170.jpg?im_w=960"
          title="Moidoo’s Maison"
          description="Contemporary villa with the best views! breakfast provided on request"
          price="6,399/ night"
        />
      </div>
    </div>
  );
}

export default Home;
