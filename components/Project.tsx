"use client";
import Carousel from "react-multi-carousel";
import wagon from "../public/wagon.png";
import calories from "../public/caleries.png";
import knime from "../public/knime2.png";
import chatbot from "../public/chatbot.png";
import events from "../public/events.png"
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
      {/* <Card sx={{ maxWidth: 345 , margin:"0 1rem" }}>
      <CardMedia
         sx={{ height: 200 }}
        image="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> */}
      <Card
        sx={{
          maxWidth: 345,
          margin: "0 1rem",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Image
          style={{ backgroundColor: "silver", aspectRatio: "3/2" }}
          src={wagon}
          alt=""
          width={350}
          height={200}
        />
        <CardContent sx={{ paddingBottom: 0 }}>
          <Typography gutterBottom variant="h5" component="div">
            Wagon
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Discover the fastest and most convenient train connections, saving
            you valuable time effortlessly.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link href="https://app.wagondash.com/login">Visit</Link>
          </Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          maxWidth: 345,
          margin: "0 1rem",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Image
          style={{ backgroundColor: "silver", aspectRatio: "3/2" }}
          src={knime}
          alt=""
          width={350}
          height={200}
        />
        <CardContent sx={{ paddingBottom: 0, height: "200px" }}>
          <Typography gutterBottom variant="h5" component="div">
            KNIME
          </Typography>
          <Typography variant="body2" color="text.secondary">
            open-source analytics platform
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link href="https://www.knime.com/downloads">Visit</Link>
          </Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          maxWidth: 345,
          margin: "0 1rem",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Image
          style={{ backgroundColor: "silver", aspectRatio: "3/2" }}
          src={calories}
          alt=""
          width={450}
          height={200}
        />
        <CardContent sx={{ paddingBottom: 0, height: "200px" }}>
          <Typography gutterBottom variant="h5" component="div">
            Low-Carb-Diet
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Find the best recipes, tailored diet plans, and track your calories
            with visualizations to achieve your goals effortlessly.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link href="https://low-carb-diet-tan.vercel.app/">Visit</Link>
          </Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          maxWidth: 345,
          margin: "0 1rem",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Image
          style={{ backgroundColor: "silver", aspectRatio: "3/2" }}
          src={chatbot}
          alt=""
          width={450}
          height={200}
        />
        <CardContent sx={{ paddingBottom: 0, height: "200px" }}>
          <Typography gutterBottom variant="h5" component="div">
            Minimal ChatBot
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Chat with AI and upload files with your prompts for seamless
            interactions.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link href="https://chatbot-lovat-sigma.vercel.app/">Visit</Link>
          </Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          maxWidth: 345,
          margin: "0 1rem",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Image
          style={{ backgroundColor: "silver", aspectRatio: "3/2" }}
          src={events}
          alt=""
          width={450}
          height={200}
        />
        <CardContent sx={{ paddingBottom: 0, height: "200px" }}>
          <Typography gutterBottom variant="h5" component="div">
          EventGalore
          </Typography>
          <Typography variant="body2" color="text.secondary">
          effortlessly organize your events with a touch of flair and precision, making every gathering a grand affair.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link href="https://events-eta-mauve.vercel.app/">Visit</Link>
          </Button>
        </CardActions>
      </Card>
    </Carousel>
  );
}
