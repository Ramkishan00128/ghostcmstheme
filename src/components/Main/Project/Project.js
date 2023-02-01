import React from 'react';
import {
  Heading,
  Box,
  Stack,
  VStack,
  Text,
  Image,
  Flex,
  HStack,
  Grid,
  GridItem,
  CardBody,
} from '@chakra-ui/react';
import { BsArrowRight } from 'react-icons/bs';
import Card from './Card';
import OurWork from './OurWork';

const Project = () => {
  return (
    <>
      <Box bg={'#F6F7F8'}>
        <Flex
          cursor={'pointer'}
          fontSize={'12'}
          fontWeight="bold"
          color={'gray.400'}
          justifyContent={'space-between'}
          mx="10"
        >
          <Text my={'10'} children="OUR RECENT PROJECTS" />
          <HStack>
            <Text my={'10'} children="DISCOVER MORE" />
            <BsArrowRight color="gray.200" />
          </HStack>
        </Flex>
        <Heading
          mx="10"
          children="We build successful, lasting, profitable projects"
        />
        <Grid
          my={'8'}
          templateColumns={{ sm: ['repeat(2, 1fr)'], md: ['repeat(3, 1fr)'] }}
          gap={3}
          mx="8"
        >
          <Card img="https://square.trexthemes.com/content/images/size/w2500/2022/09/p9.png" />
          <Card img="https://square.trexthemes.com/content/images/size/w2500/2022/09/p8.jpg" />
          <Card img="https://square.trexthemes.com/content/images/size/w2500/2022/09/p5.jpg" />
        </Grid>
      </Box>
      <OurWork />
    </>
  );
};

export default Project;
