"use client";
import Carousel from "react-multi-carousel";
import wagon from "../public/wagon.png";
import calories from "../public/caleries.png";
import knime from "../public/knime2.png";
import chatbot from "../public/chatbot.png";
import events from "../public/events.png";
import { FaCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface Portfolio {
  image: string;
  description: {
    name: string;
    title: string;
  };
  link: string[];
}


const portfolioData : Portfolio[] = [
  {
    image:"/knime2.png",
    description:{
      name:"KNIME",
      title:"open-source analytics platform"
    },
    link:[
      "https://www.knime.com/downloads","https://github.com/orgs/knime/repositories"
    ]
  },
  {
    image:"/events.png",
    description:{
      name:"EventGalore",
      title:"effortlessly organize your events with a touch of flair and precision, making every gathering a grand affair."
    },
    link:[
      "https://events-eta-mauve.vercel.app/signin","https://github.com/gitsheyno/rsvp"
    ]
  },
  {
    image:"/chatbot.png",
    description:{
      name:"Minimal ChatBot",
      title:"Chat with AI and upload files with your prompts for seamless interactions."
    },
    link:[
      "https://chatbot-lovat-sigma.vercel.app/","https://github.com/gitsheyno/chatbot"
    ]
  },
  {
    image:"/wagon.png",
    description:{
      name:"Wagon",
      title:"Discover the fastest and most convenient train connections, saving you valuable time effortlessly."
    },
    link:[
      "https://app.wagondash.com/login","https://app.wagondash.com/login"
    ]
  },
  {
    image:"/learnly.png",
    description:{
      name:"Learnly",
      title:"effortlessly find your tutor, Or become a tutor."
    },
    link:[
      "https://learnly-iota.vercel.app/","https://github.com/gitsheyno/Learnly"
    ]
  },
]
export default function Project() {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      partialVisible
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {portfolioData.map((item,index)=>(
            <Card
            key ={index}
            sx={{
              maxWidth: 300,
              margin: "0 1rem",
              height: "400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ backgroundColor: "silver", aspectRatio: "3/2" }}
              src={item.image}
              alt=""
              width={350}
              height={200}
            />
            <CardContent sx={{ paddingBottom: 0 }}>
              <Typography gutterBottom variant="h5" component="div">
                {item.description.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {item.description.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <Link className="text-2xl" href={item.link[0]}>
                  <CgWebsite />
                </Link>
              </Button>
              <Button size="small">
                <Link className="text-2xl" href={item.link[1]}>
                  <FaCode />
                </Link>
              </Button>
            </CardActions>                                               
          </Card>
      ))}
    </Carousel>
  );
}
