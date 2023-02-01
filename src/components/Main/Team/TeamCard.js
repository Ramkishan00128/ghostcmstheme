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
const TeamCard = ({ img, head, text }) => {
  return (
    <Box
      cursor={'pointer'}
      mx={{ sm: '2', lg: '4' }}
      mb={{ base: '6', sm: '6', lg: '12' }}
    >
      <GridItem w="full" bg="#FFFFFF" borderRadius={'20'}>
        <VStack p={{ base: '6', sm: '4', lg: '10' }}>
          <Circle>
            <Image borderRadius={'50%'} h="20" w="24" src={img} />
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
          <HStack fontSize={'20'}>
            <RiFacebookCircleLine />
            <RiTwitterLine />
            <AiOutlineGithub />
          </HStack>
        </VStack>
      </GridItem>
    </Box>
  );
};

export default TeamCard;
