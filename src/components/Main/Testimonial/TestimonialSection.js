import { Box, Flex, Grid, Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import News from '../News/News';
import TestimonialCard from './TestimonialCard';

const Name = ['Miyasaki Ume', 'Friedrich Schmidt', 'Wayne Terry'];
const Position = [
  'Founder of T-Rex Themes',
  'CEO & Father',
  'Co-Founder of Square',
];
const description = [
  'Its is a long established fact that a reader will be distracted by the readable content of a page  when looking  at its layout.',
  'Its is a long established fact that a reader will be distracted by the readable content of a page  when looking  at its layout.',
  'Its is a long established fact that a reader will be distracted by the readable content of a page  when looking  at its layout.',
];
const img = [
  'https://square.trexthemes.com/content/images/size/w600/2022/09/c1.jpg',
  'https://square.trexthemes.com/content/images/size/w600/2022/09/c2.jpg',
  '	https://square.trexthemes.com/content/images/size/w600/2022/09/c3.jpg',
];

const TestimonialSection = () => {
  return (
    <>
      <Box bg={'#FFFFFF'}>
        <Flex
          cursor={'pointer'}
          fontSize={'12'}
          fontWeight="bold"
          color={'gray.400'}
          justifyContent={'space-between'}
          mx="10"
        >
          <Text my={'10'} children="FIND OUT MORE" />
          <HStack fontSize={'20'}>
            <BsArrowLeft />
            <BsArrowRight color="gray" />
          </HStack>
        </Flex>
        <Heading
          mx="10"
          children="What we can do for your business and your projects"
        />

        <Grid
          my={'8'}
          templateColumns={{ sm: ['repeat(1, 1fr)'], md: ['repeat(3, 1fr)'] }}
          gap={4}
          mx="8"
        >
          {Name.map((name, i) => (
            <TestimonialCard
              key={i}
              name={name}
              description={description[i]}
              position={Position[i]}
              img={img[i]}
            />
          ))}{' '}
        </Grid>
      </Box>
      <News />
    </>
  );
};

export default TestimonialSection;
