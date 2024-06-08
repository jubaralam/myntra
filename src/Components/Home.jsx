import {
  Container,
  SimpleGrid,
  Heading,
  Box,
  Card,
  CardBody,
  Image,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

import { categories } from "../data";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container maxW="xl" centerContent margin="50">
      <Box>
        <Heading as="h1" size="3xl" margin="25">
          Shop By Category
        </Heading>
      </Box>

      <SimpleGrid columns={4} spacing={30}>
        {categories?.map((category) => {
          return (
            <>
              <Card
                maxW="sm"
                width="200px"
                key={category.url}
                onClick={() => navigate(category.url)}
                centerContent
                className="card"
              >
                <CardBody>
                  <Image
                    src={category.poster}
                    alt={category.categoryName}
                    borderRadius="lg"
                    height="300px"
                    width="200px"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{category.categoryName}</Heading>
                  </Stack>
                </CardBody>
              </Card>
            </>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default Home;
