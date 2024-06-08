import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { allProducts } from "../data";
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
const ProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [reletedCategory, setReletedCategory] = useState("");
  const [reletedProduct, setReletedProduct] = useState([]);
  const [product, setProduct] = useState([]);
  const filterProductById = () => {
    const product = allProducts.filter((product) => {
      if (product.id == id) {
        setReletedCategory(product.category);
        return product;
      }
    });
    setProduct(product);
  };
  const findReletedProduct = () => {
    const reletedProduct = allProducts.filter((product) => {
      if (product.category == reletedCategory) {
        return product;
      }
    });
    setReletedProduct(reletedProduct);
  };

  useEffect(() => {
    filterProductById();
  }, [id]);
  useEffect(() => {
    findReletedProduct();
  }, [id, product, reletedCategory]);
  return (
    <div>
      {product?.map((product) => {
        return (
          <div key={product.id} className="container">
            <div className="left">
              <img src={product.image} alt="" />
            </div>
            <div className="right">
              <h1>{product.title}</h1>
              <h1>${product.price}</h1>
              <p>{product.description}</p>
              <div className="rating">
                <div>
                  <span>Rating: </span>
                  <span>{product.rating.rate}</span>
                </div>
                <div>
                  <span>Review: </span>
                  <span>{product.rating.count}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <Container maxW="xl" centerContent margin="50">
        <Heading margin={20}>Related Products</Heading>
        <SimpleGrid columns={4} spacing={30}>
          {reletedProduct?.map((product) => {
            return (
              <>
                <Card
                  maxW="sm"
                  width="200px"
                  key={product.url}
                  onClick={() => navigate(`/product/${product.id}`)}
                  centerContent
                  className="card"
                >
                  <CardBody>
                    <Image
                      src={product.image}
                      alt={product.title}
                      borderRadius="lg"
                      height="300px"
                      width="200px"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{product.title}</Heading>
                      <Heading size="md">${product.price}</Heading>
                    </Stack>
                  </CardBody>
                </Card>
              </>
            );
          })}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default ProductPage;
