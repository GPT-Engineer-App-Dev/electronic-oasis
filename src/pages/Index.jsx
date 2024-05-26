import { Box, Container, VStack, Text, Heading, Grid, GridItem, Image, Link, Flex, Spacer, HStack, Button, Input, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaSearch } from "react-icons/fa";

const Index = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState(0);

  const products = [
    { id: 1, name: "Product 1", price: 299.99, brand: "Brand A", rating: 4, image: "https://via.placeholder.com/240" },
    { id: 2, name: "Product 2", price: 399.99, brand: "Brand B", rating: 5, image: "https://via.placeholder.com/240" },
    { id: 3, name: "Product 3", price: 499.99, brand: "Brand A", rating: 3, image: "https://via.placeholder.com/240" },
    { id: 4, name: "Product 4", price: 599.99, brand: "Brand C", rating: 4, image: "https://via.placeholder.com/240" },
  ];

  const filteredProducts = products.filter(product => {
    return (
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      (brand === "" || product.brand.toLowerCase().includes(brand.toLowerCase())) &&
      product.rating >= rating
    );
  });
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} align="center">
        <Heading size="md">ElectroShop</Heading>
        <InputGroup maxW="400px" mr={4}>
          <Input placeholder="Search for products..." />
          <InputRightElement>
            <IconButton
              aria-label="Search"
              icon={<FaSearch />}
              onClick={() => console.log("Search button clicked")}
            />
          </InputRightElement>
        </InputGroup>
        <Spacer />
        <HStack spacing={8}>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" p={10} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={6}>Your one-stop shop for all things electronics</Text>
        <Button colorScheme="blue" size="lg">Shop Now</Button>
      </Box>

      {/* Filter Section */}
      <Box as="section" p={10}>
        <Heading size="lg" mb={6}>Filter Products</Heading>
        <VStack spacing={4} align="start">
          <Box>
            <Text>Price Range</Text>
            <InputGroup>
              <Input
                type="number"
                placeholder="Min"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
              />
              <InputRightElement>-</InputRightElement>
              <Input
                type="number"
                placeholder="Max"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              />
            </InputGroup>
          </Box>
          <Box>
            <Text>Brand</Text>
            <Input
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </Box>
          <Box>
            <Text>Rating</Text>
            <Input
              type="number"
              placeholder="Rating"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
            />
          </Box>
          <Button onClick={() => console.log("Filters applied")}>Apply Filters</Button>
        </VStack>
      </Box>

      {/* Product Grid */}
      <Box as="section" p={10}>
        <Heading size="lg" mb={6}>Featured Products</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
          {filteredProducts.map(product => (
            <GridItem key={product.id}>
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={product.image} alt={product.name} />
                <Box p={4}>
                  <Heading size="md">{product.name}</Heading>
                  <Text mt={2}>${product.price}</Text>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" p={10} textAlign="center">
        <VStack spacing={4}>
          <HStack spacing={8}>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Contact Us</Link>
          </HStack>
          <HStack spacing={4}>
            <Link href="#"><FaFacebook size="24px" /></Link>
            <Link href="#"><FaTwitter size="24px" /></Link>
            <Link href="#"><FaInstagram size="24px" /></Link>
          </HStack>
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;