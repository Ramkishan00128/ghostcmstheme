import React from 'react';
import { Heading, Box, Stack, VStack, Text, Image } from '@chakra-ui/react';
import Project from './Main/Project/Project';
import Team from './Main/Team/Team';
import TestimonialSection from './Main/Testimonial/TestimonialSection';

const Home = () => {
  return (
    <>
      <Box my={{ base: '30', md: 0, lg: '0' }}>
        <Stack
          mx={'8'}
          bg={'white'}
          direction={['column', 'row']}
          align={'center'}
          justify="center"
          h="100vh"
        >
          <VStack mx={'6'} align="flex-start">
            <Heading
              fontSize={{ base: '5xl', lg: '7xl' }}
              color={'#31274B'}
              children="We develop brands and lunch websites for businesses"
            />
            <Text
              fontWeight={'medium'}
              fontSize={{ base: '14', md: '16' }}
              color={'#AAAAAA'}
              children="Discover the most outstanding projects from creative design, to develop amazing websites"
            />
          </VStack>

          <Image
            display={{ base: 'none', md: 'block', lg: 'block' }}
            height={'100vh'}
            w="30rem"
            src="https://square.trexthemes.com/content/images/size/w2500/2022/09/cover.png"
          />
        </Stack>
      </Box>
      <Project />
      <Team />
      <TestimonialSection />
    </>
  );
};

export default Home;
