import { Box, Flex, Grid, Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import TestimonialSection from '../Testimonial/TestimonialSection';

import TeamCard from './TeamCard';

const head = ['Calvin Glisson', 'Nirmal Arbeit', 'Sybil Lamb', 'Tasha Herrera'];
const description = [
  'These motivational stories prove that with a little hard work, any amount of...',
  'These motivational stories prove that with a little hard work, any amount of...',
  'These motivational stories prove that with a little hard work, any amount of...',
  'These motivational stories prove that with a little hard work, any amount of...',
];
const img = [
  'https://square.trexthemes.com/content/images/size/w600/2022/09/u1.jpg',
  'https://square.trexthemes.com/content/images/size/w600/2022/09/u3.jpg',
  'https://square.trexthemes.com/content/images/size/w600/2022/09/u2.jpg',
  'https://square.trexthemes.com/content/images/size/w600/2022/09/u4.jpg',
];

const Team = () => {
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
            <BsArrowRight color="gray" />
          </HStack>
        </Flex>
        <Heading
          mx="10"
          children="What we can do for your business and your projects"
        />

        <Grid
          my={'8'}
          templateColumns={{ sm: ['repeat(2, 1fr)'], md: ['repeat(4, 1fr)'] }}
          gap={4}
          mx="8"
        >
          {head.map((head, i) => (
            <TeamCard key={i} head={head} text={description[i]} img={img[i]} />
          ))}{' '}
        </Grid>
      </Box>
    </>
  );
};

export default Team;
