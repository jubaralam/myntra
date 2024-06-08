import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Container,
    Divider,
    Image,
    Stack, 
    Heading, Text,Button, ButtonGroup
  } from "@chakra-ui/react";
import { useNavigate, useParams } from 'react-router-dom';
const ProductCard = ({image, title, price, id}) => {
 
const navigate = useNavigate()
  return (
    <Card maxW="sm"  width="250" height="400" className="card" 
    onClick={()=> navigate(`/product/${id}`)}
     >
            <CardBody>
              <Image
                src={image}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                // height="200px"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{title}</Heading>
                <Text>
                 
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  ${price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="outline" colorScheme="blue">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
      
      
  )
}

export default ProductCard