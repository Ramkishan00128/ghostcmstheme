import { Box, Flex, Grid, Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import NewsCard from './NewsCard';

const News = () => {
  const Name = [
    'Calvin Glisson',
    'Calvin Glisson & Tasha Herrera',
    'Wayne Terry',
  ];
  const NewsHead = [
    'Are you a “team of learners,” or do you learn as a team?',
    'Are you a “team of learners,” or do you learn as a team?',
    'So, Should You Be Bringing Your Cat To Work?',
  ];
  const description = [
    'These motivational stories prove that with a little hard work, any amount of business success is...',
    'These motivational stories prove that with a little hard work, any amount of business success is...',
    'These motivational stories prove that with a little hard work, any amount of business success is...',
  ];
  const img = [
    'https://square.trexthemes.com/content/images/size/w2500/2022/09/a9.png',
    'https://square.trexthemes.com/content/images/size/w2500/2022/09/aa1.jpg',

    'https://square.trexthemes.com/content/images/size/w2500/2022/09/a10.jpg',
  ];

  const logo = [
    '	https://square.trexthemes.com/content/images/size/w600/2022/09/u1.jpg',
    'https://square.trexthemes.com/content/images/size/w600/2022/09/u4.jpg',
    'https://square.trexthemes.com/content/images/size/w600/2022/09/u4.jpg',
  ];
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
          <Text my={'10'} children="OUR RECENT NEWS" />
          <HStack>
            <Text my={'10'} children="DISCOVER MORE" />
            <BsArrowRight color="gray" />
          </HStack>
        </Flex>
        <Heading
          mx="10"
          children="Discover our latest stories, Tutorials and How to learning posts"
        />
        <Grid
          my={'8'}
          templateColumns={{ sm: ['repeat(1, 1fr)'], md: ['repeat(3, 1fr)'] }}
          gap={4}
          mx="8"
        >
          {Name.map((name, i) => (
            <NewsCard
              name={name}
              img={img[i]}
              description={description[i]}
              newsHead={NewsHead[i]}
              logo={logo[i]}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default News;
