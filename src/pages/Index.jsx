import React, { useState } from "react";
import { Box, Button, Flex, Heading, Image, Input, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, SimpleGrid, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentPage, setCurrentPage] = useState(1);

  const renderVehicles = () => {
    switch (currentPage) {
      case 1:
        return (
          <>
            <VehicleCard name="BMW" image="https://images.unsplash.com/photo-1580273916550-e323be2ae537?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxCTVclMjBjYXJ8ZW58MHx8fHwxNzExMzU2ODUyfDA&ixlib=rb-4.0.3&q=80&w=1080" price="KES 10,000/day" />
            <VehicleCard name="Range Rover" image="https://images.unsplash.com/photo-1549632891-a0bea6d0355b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxSYW5nZSUyMFJvdmVyfGVufDB8fHx8MTcxMTM1Njg1Mnww&ixlib=rb-4.0.3&q=80&w=1080" price="KES 15,000/day" />
            <VehicleCard name="Audi" image="https://images.unsplash.com/photo-1541348263662-e068662d82af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBdWRpJTIwY2FyfGVufDB8fHx8MTcxMTM1Njg1M3ww&ixlib=rb-4.0.3&q=80&w=1080" price="KES 8,000/day" />
            <VehicleCard name="Mercedes" image="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxNZXJjZWRlcyUyMGNhcnxlbnwwfHx8fDE3MTEzNTY4NTN8MA&ixlib=rb-4.0.3&q=80&w=1080" price="KES 12,000/day" />
          </>
        );
      case 2:
        return (
          <>
            <VehicleCard name="Yamaha" image="https://images.unsplash.com/photo-1678206064529-1475d5654291?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxZYW1haGElMjBtb3RvcmJpa2V8ZW58MHx8fHwxNzExMzU2ODU0fDA&ixlib=rb-4.0.3&q=80&w=1080" price="KES 2,000/day" />
            <VehicleCard name="Harley Davidson" image="https://images.unsplash.com/photo-1558980664-2506fca6bfc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxIYXJsZXklMjBEYXZpZHNvbiUyMG1vdG9yYmlrZXxlbnwwfHx8fDE3MTEzNTY4NTR8MA&ixlib=rb-4.0.3&q=80&w=1080" price="KES 5,000/day" />
          </>
        );
      case 3:
        return (
          <>
            <VehicleCard name="Coaster Bus" image="https://images.unsplash.com/photo-1633465237346-b688dbb498bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxDb2FzdGVyJTIwYnVzfGVufDB8fHx8MTcxMTM1Njg1NXww&ixlib=rb-4.0.3&q=80&w=1080" price="KES 20,000/day" />
            <VehicleCard name="Minibus" image="https://images.unsplash.com/photo-1559050695-edde77c73609?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxNaW5pYnVzfGVufDB8fHx8MTcxMTM1Njg1NXww&ixlib=rb-4.0.3&q=80&w=1080" price="KES 15,000/day" />
          </>
        );
      case 4:
        return (
          <>
            <VehicleCard name="Cessna" image="https://images.unsplash.com/photo-1527354372664-ae0112ab2c41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxDZXNzbmElMjBwbGFuZXxlbnwwfHx8fDE3MTEzNTY4NTV8MA&ixlib=rb-4.0.3&q=80&w=1080" price="KES 100,000/hour" />
            <VehicleCard name="Yacht" image="https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxZYWNodHxlbnwwfHx8fDE3MTEzNTY4NTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" price="KES 200,000/day" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxTaHBpbnMlMjBsb2dvfGVufDB8fHx8MTcxMTM1Njg1Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Shpins Logo" />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input placeholder="Email" />
              <Input placeholder="Password" type="password" />
              <Button colorScheme="blue">Login</Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Flex direction="column" align="center" justify="center" minHeight="100vh" bg="gray.100">
        <Heading as="h1" size="2xl" mb={8}>
          Welcome to Shpins
        </Heading>
        <Text fontSize="xl" mb={8}>
          Your premier vehicle rental service in Kenya
        </Text>

        <Flex justify="center" mb={8}>
          <Button colorScheme="blue" mr={4} onClick={() => setCurrentPage(1)} isActive={currentPage === 1}>
            Cars
          </Button>
          <Button colorScheme="blue" mr={4} onClick={() => setCurrentPage(2)} isActive={currentPage === 2}>
            Motorbikes
          </Button>
          <Button colorScheme="blue" mr={4} onClick={() => setCurrentPage(3)} isActive={currentPage === 3}>
            Buses
          </Button>
          <Button colorScheme="blue" onClick={() => setCurrentPage(4)} isActive={currentPage === 4}>
            Planes & Yachts
          </Button>
        </Flex>

        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {renderVehicles()}
        </SimpleGrid>

        <Flex mt={8}>
          <Link href="#" mr={4}>
            <FaFacebook size={24} />
          </Link>
          <Link href="#" mr={4}>
            <FaTwitter size={24} />
          </Link>
          <Link href="#">
            <FaInstagram size={24} />
          </Link>
        </Flex>

        <Button mt={8} onClick={onOpen}>
          Login
        </Button>
      </Flex>
    </Box>
  );
};

const VehicleCard = ({ name, image, price }) => (
  <Box borderWidth={1} borderRadius="lg" p={4}>
    <Image src={image} alt={name} mb={4} />
    <Heading as="h3" size="md" mb={2}>
      {name}
    </Heading>
    <Text>{price}</Text>
  </Box>
);

export default Index;
