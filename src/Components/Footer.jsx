import {
  Box,
  Flex,
  Text,
  Link,
  Link as ChakraLink,
  Container,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { categories, items } from "../data";
categories
const Footer = () => {
  return (
    <Container maxW="lg" centerContent margin={50}>
      <Box bg="gray.200" p={4}>
        <Flex
          justify="space-between"
          align="center"
          flexWrap="wrap"
          color="gray.600"
        >
          <Flex direction="column" mr={8}>
            <Text fontWeight="bold">ONLINE SHOPPING</Text>
            <Link>Men</Link>
            <Link>Women</Link>
            <Link>Kids</Link>
            <Link>Home & Living</Link>
            <Link>Beauty</Link>
            <Link>Gift Cards</Link>
            <Link>Myntra Insider</Link>
          </Flex>
          <Flex direction="column" mr={8}>
            <Text fontWeight="bold">USEFUL LINKS</Text>
            <Link>Blog</Link>
            <Link>Careers</Link>
            <Link>Site Map</Link>
            <Link>Corporate Information</Link>
            <Link>Whitehat</Link>
            <Link>Cleartrip</Link>
            <Link>POPULAR SEARCHES</Link>
          </Flex>
          <Flex direction="column" mr={8}>
            <Text fontWeight="bold">CUSTOMER POLICIES</Text>
            <Link>Contact Us</Link>
            <Link>FAQ</Link>
            <Link>Terms Of Use</Link>
            <Link>Track Orders</Link>
            <Link>Shipping</Link>
            <Link>Cancellation</Link>
            <Link>Returns</Link>
            <Link>Privacy policy</Link>
            <Link>Grievance Officer</Link>
          </Flex>
          <Flex direction="column" mr={8}>
            <Text fontWeight="bold">EXPERIENCE MYNTRA APP ON MOBILE</Text>
            <Link>GET IT ON Google Play</Link>
            <Link>GET IT ON the App Store</Link>
          </Flex>
          <Flex direction="column">
            <Text fontWeight="bold">
              100% ORIGINAL guarantee for all products at myntra.com Return
              within 14 days of receiving your order
            </Text>
            <Box margin="20">
              {categories.map((item) => {
                return (
                  <ChakraLink
                    as={RouterLink}
                    key={item.url}
                    to={item.url}
                    margin={10}
                  >
                    {item.categoryName}
                  </ChakraLink>
                );
              })}
            </Box>
            <Text>In case of any concern, Contact us</Text>
            <Text>
              &copy; 2024 www.myntra.com. All rights reserved. A Flipkart
              company
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Footer;
