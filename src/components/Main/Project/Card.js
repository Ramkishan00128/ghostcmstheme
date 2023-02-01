import React from 'react';
import { Image, VStack, Heading, Text, GridItem, Box } from '@chakra-ui/react';
const Card = ({ img }) => {
  return (
    <Box
      cursor={'pointer'}
      mx={{ sm: '2', lg: '4' }}
      mb={{ base: '6', sm: '6', lg: '12' }}
    >
      <GridItem w="full" bg="#FFFFFF" borderRadius={'40'}>
        <VStack p={{ base: '6', sm: '4', lg: '6' }}>
          <Image borderRadius={'40'} src={img} />
          <VStack>
            <Heading
              mx={'2'}
              textAlign={'start'}
              fontSize={{ base: '2xl', lg: '4xl' }}
              color={'#31274B'}
              children="Branding a Music & Podcast App"
            />
            <Text
              color={'gray.400'}
              children="Digital agencies are strategic and creative marketing agencies focused on user experience,..."
            />
          </VStack>
        </VStack>
      </GridItem>
    </Box>
  );
};

export default Card;
