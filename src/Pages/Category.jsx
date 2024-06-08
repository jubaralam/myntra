import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {  Container, SimpleGrid, Box } from "@chakra-ui/react";
import ProductCard from "../Components/ProductCard";
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import { allProducts } from "../data";

const Category = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const filterData = () => {
    setLoader(true);

    try {
      const filteredData = allProducts.filter(
        (product) =>
          product.category.toLowerCase() == categoryName.toLowerCase()
      );
      console.log(filteredData);
      setLoader(false);
      setProducts(filteredData);
    } catch (error) {
      setLoader(false);
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    filterData();
  }, [categoryName,products]);

  if (loader) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }
  



  // const categoriesSet = new Set();

  // allProducts.forEach(product => {
  //     categoriesSet.add(product.category);
  // });
  
  // const uniqueCategories = [...categoriesSet];
  return (
    <Container maxW="lg" centerContent>
      <Box>{categoryName}</Box>

      <SimpleGrid columns={4} spacing={15} className="homepage">
       
          {products?.map((product) => {
            return <ProductCard {...product} key={product.id} />;
          })}
        
      </SimpleGrid>
    </Container>
  );
};

export default Category;
