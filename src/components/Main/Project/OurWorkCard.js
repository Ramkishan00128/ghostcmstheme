import React from 'react';
import {
  Image,
  VStack,
  Heading,
  Text,
  GridItem,
  Box,
  Circle,
} from '@chakra-ui/react';
const OurWorkCard = ({ img, head, text }) => {
  return (
    <Box
      cursor={'pointer'}
      mx={{ sm: '2', lg: '4' }}
      mb={{ base: '6', sm: '6', lg: '12' }}
    >
      <GridItem w="full" bg="#F6F7F8" borderRadius={'20'}>
        <VStack p={{ base: '6', sm: '4', lg: '10' }}>
          <Circle>
            <Image
              _hover={{ transform: 'scale(1.5)' }}
              borderRadius={'full'}
              h="20"
              src={img}
            />
          </Circle>

          <VStack>
            <Heading
              textAlign={'center'}
              fontSize={{ base: '1xl', lg: '20' }}
              color={'#31274B'}
              children={head}
            />

            <Text
              fontSize={'16'}
              textAlign={'center'}
              color={'gray.500'}
              children={text}
            />
          </VStack>
        </VStack>
      </GridItem>
    </Box>
  );
};

export default OurWorkCard;
