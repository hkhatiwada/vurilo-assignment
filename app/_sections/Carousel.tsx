"use client";
import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "@mantine/carousel";

import Autoplay from "embla-carousel-autoplay";
import CarouselCard from "./CarouselCard";
import { Button, Loader } from "@mantine/core";
import { Add, Trash } from "iconsax-react";
import { fetchSlideInfo, SlideInfo } from "../_services/api";

const CarouselView = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [cart, setCart] = useState<SlideInfo[]>([]);
  const autoplay = useRef(Autoplay({ delay: 6000 }));

  const addToCart = (item: SlideInfo) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId: number) => {
    const updatedCart = cart.filter((item: SlideInfo) => item.id !== itemId);
    setCart(updatedCart);
  };

  const [slideData, setSlideData] = useState<SlideInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchSlideInfo()
      .then((response) => {
        setSlideData(response?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching slide info:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <Loader color="blue" />
      </div>
    );
  }

  return (
    <div className="bg-transparent mt-6">
      <Carousel
        plugins={[autoplay.current]}
        onSlideChange={(index) => {
          setActiveIdx(index);
        }}
        align="center"
        withControls={false}
        loop
        slideSize="80.333333%"
        slideGap="lg"
      >
        {slideData.map((data, index) => (
          <CarouselCard
            key={data.id}
            image={data.image ?? ""}
            name={data.name ?? ""}
            price={data.price || ""}
            highlighted={index === activeIdx}
          />
        ))}
      </Carousel>
      <div className="absolute -bottom-[10%] left-1/2 transform py-4 min-w-[20%] -translate-x-1/2 rounded-full backdrop-blur-3xl bg-gradient-to-r from-rose-600 via-green-500 to-rose-500 flex gap-16 justify-between items-center px-8">
        <div>
          <span className="text-lg text-white font-semibold">
            {slideData[activeIdx]?.name}
          </span>
          <br />
          <span className="text-xs text-white font-semibold">
            {slideData[activeIdx]?.price}
          </span>
        </div>
        <div>
          {cart.some((item) => item.id === slideData[activeIdx]?.id) ? (
            <Button
              size="sm"
              radius="xl"
              color="white"
              className="text-black"
              leftSection={<Trash size="16" color="#000000" />}
              onClick={() => removeFromCart(slideData[activeIdx]?.id)}
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              size="sm"
              radius="xl"
              color="white"
              className="text-black"
              leftSection={<Add size="16" color="#000000" />}
              onClick={() => addToCart(slideData[activeIdx])}
            >
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarouselView;
