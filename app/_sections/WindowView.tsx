"use client";
import React, { useEffect, useState } from "react";
import CarouselView from "./Carousel";
import { ActionIcon, Button, Dialog, Group, Input, Text } from "@mantine/core";
import { Copy, FilterSearch, Menu, SearchNormal } from "iconsax-react";
import { useDisclosure } from "@mantine/hooks";

const WindowView = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [localStorage.getItem("cart")?.length]);
  return (
    <div className="w-full">
      <Dialog
        opened={opened}
        withCloseButton
        onClose={close}
        size="lg"
        radius="md"
      >
        <Text size="sm" mb="xs" fw={500}>
          Checkout{" "}
        </Text>

        <Group align="flex-end">
          <Button onClick={close}>Buy</Button>
        </Group>
      </Dialog>
      <div className="absolute top-4 left-10 flex justify-between items-center w-[90%] ">
        <div className="flex gap-2">
          <ActionIcon
            variant="light"
            size="lg"
            radius={"xl"}
            aria-label="Gallery"
            onClick={toggle}
          >
            <FilterSearch size="20" color="#000000" />{" "}
          </ActionIcon>

          <ActionIcon
            variant="light"
            size="lg"
            aria-label="Settings"
            radius={"xl"}
          >
            <Menu size="20" color="#000000" />{" "}
          </ActionIcon>

          <ActionIcon
            variant="light"
            size="lg"
            aria-label="Likes"
            radius={"xl"}
          >
            <Copy size="20" color="#000000" />{" "}
          </ActionIcon>
        </div>
        <div>
          <Input
            rightSectionPointerEvents="all"
            mt="md"
            variant="filled"
            size="xs"
            radius={"xl"}
            rightSection={
              <SearchNormal size="16" color="#000000" aria-label="Search" />
            }
          />
        </div>
      </div>
      <CarouselView />
    </div>
  );
};

export default WindowView;
