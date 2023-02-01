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
  Center,
} from '@chakra-ui/react';
import { BsArrowRight } from 'react-icons/bs';

import OurWorkCard from './OurWorkCard';
import Team from '../Team/Team';

const OurWork = () => {
  const head = [
    'SEO Consultancy',
    'Competitor Analysis',
    'Social Marketing',
    'Design & Development',
  ];
  const description = [
    'We help to optimize your website. The practice of optimizing a website for SEO...',
    'A competitive analysis is a strategy that involves researching major competitors...',
    'Social marketing is an approach that uses marketing tools to bring social change...',
    'The design and development process should examine all the potential risks...',
  ];
  const img = [
    'https://square.trexthemes.com/content/images/size/w600/2022/09/mesh-53-1--1.png',
    'https://square.trexthemes.com/content/images/size/w600/2022/09/mesh-271.png',
    'https://square.trexthemes.com/content/images/size/w600/2022/09/mesh-140.png',
    'https://square.trexthemes.com/content/images/size/w600/2022/09/mesh-679.png',
  ];
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
            <OurWorkCard
              key={i}
              head={head}
              text={description[i]}
              img={img[i]}
            />
          ))}
        </Grid>
        <Text
          my={'8'}
          mx={{ base: '2', md: '2' }}
          fontWeight={'bold'}
          fontSize={'2xl'}
          textAlign={'center'}
          children="Trusted by 2K customers and teams around the world"
        />
        <Stack
          direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
          align="center"
          justify={'center'}
          spacing={{ base: '12', sm: '12', md: '12  ' }}
          mb="12"
        >
          <Image
            h={{ base: '10', lg: '7' }}
            w={{ base: '28' }}
            src="https://square.trexthemes.com/content/images/size/w600/2022/09/ghost-logo-dark.png"
          />

          <Image
            h={{ base: '10', lg: '7' }}
            w={{ base: '28' }}
            src="	https://square.trexthemes.com/content/images/size/w600/2022/09/GitHub-Emblem.png"
          />
          <Image
            h={{ base: '10', lg: '7' }}
            w={{ base: '28' }}
            src="https://square.trexthemes.com/content/images/size/w600/2022/09/kindpng_1718071.png"
          />
          <Image
            h={{ base: '10', lg: '7' }}
            w={{ base: '28' }}
            src="https://square.trexthemes.com/content/images/size/w600/2022/09/nodejs-logo-black-and-white.png"
          />
          <Image
            h={{ base: '5', lg: '7' }}
            w={{ base: '28' }}
            src="https://square.trexthemes.com/content/images/size/w600/2022/09/Tailwind_CSS_logo.svg.png"
          />
        </Stack>
      </Box>
    </>
  );
};

export default OurWork;
