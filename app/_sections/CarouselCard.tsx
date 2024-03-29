import { Button, Card, Container, Stack, Text } from "@mantine/core";
import Image, { StaticImageData } from "next/image";
import React from "react";
interface CarouselCardProps {
  name: string;
  image: StaticImageData;
  price: string;
  highlighted: boolean;
}
const CarouselCard: React.FC<CarouselCardProps> = ({
  name,
  image,
  price,
  highlighted,
}) => {
  const cardStyles = {
    transform: highlighted ? "scale(1)" : "scale(0.9)",
    transition: "opacity 0.3s, transform 0.8s",
  };
  return (
    <Card
      shadow="box-shadow: 20px 20px 46px 0px #0000000D"
      className="flex w-full flex-col gap-[32px] justify-center  bg-transparent items-center max-w-[588px]"
      style={{
        maxWidth: 400,
        margin: "auto",
        paddingTop: highlighted ? "40px" : "0",
        ...cardStyles,
      }}
    >
      <Container className="px-4">
        <Image
          src={image}
          width={100}
          alt={name}
          style={{
            transform: highlighted ? "scale(2)" : "scale(1)",
          }}
        />
      </Container>
      <Stack align="center">
        {highlighted ? (
          //   <Button>Add to Cart</Button>
          <p></p>
        ) : (
          <>
            <span className=" text-center lg:text-[20px] text-[14px] pt-16 font-semibold text-white">
              {name}
            </span>
            <span className="lg:text-[14px] text-[8px] text-center font-semibold text-white">
              {price}
            </span>
          </>
        )}
      </Stack>
    </Card>
  );
};

export default CarouselCard;
