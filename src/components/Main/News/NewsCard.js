import React from 'react';
import {
  Image,
  VStack,
  Heading,
  Text,
  GridItem,
  Box,
  Circle,
  HStack,
} from '@chakra-ui/react';
import { RiFacebookCircleLine, RiTwitterLine } from 'react-icons/ri';
import { AiOutlineGithub } from 'react-icons/ai';
const NewsCard = ({ logo, name, img, description, newsHead }) => {
  return (
    <Box
      cursor={'pointer'}
      mx={{ sm: '2', lg: '4' }}
      mb={{ base: '6', sm: '6', lg: '12' }}
    >
      <GridItem w="full" bg="#FFFFFF" borderRadius={'30'}>
        <HStack px={'8'} pt="6">
          <Image borderRadius={'full'} h="10" w={'10'} src={logo} />
          <Text children={name} />
        </HStack>
        <VStack p={{ base: '6', sm: '4', lg: '6' }}>
          <Image borderRadius={'40'} h="80" w={'90'} src={img} />
          <VStack>
            <Heading
              textAlign={{ base: 'center' }}
              fontSize={{ base: '18', lg: '20' }}
              color={'#31274B'}
              children={newsHead}
            />
            <Text
              textAlign={{ base: 'center' }}
              fontSize={{ base: '14', lg: '16' }}
              color={'gray.400'}
              children="Digital agencies are strategic and creative marketing agencies focused on user experience,..."
            />
          </VStack>
        </VStack>
      </GridItem>
    </Box>
  );
};

export default NewsCard;
