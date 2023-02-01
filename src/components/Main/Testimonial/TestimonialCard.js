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

import News from '../News/News';

const TestimonialCard = ({ img, name, description, position }) => {
  return (
    <>
      <Box
        cursor={'pointer'}
        mx={{ sm: '2', lg: '4' }}
        mb={{ base: '6', sm: '6', lg: '12' }}
      >
        <GridItem w="full" bg="#F6F7F8" borderRadius={'20'}>
          <Box mx={'4'} p={{ base: '6', sm: '4', lg: '6' }}>
            <Text
              mb={'4'}
              fontSize={{ base: '14', lg: '16' }}
              textAlign={'start'}
              color={'gray.500'}
              children={description}
            />
            <HStack justify={'flex-start'} gap="4">
              <Circle>
                <Image borderRadius={'50%'} h="16" w="16" src={img} />
              </Circle>
              <Box>
                <Heading fontSize={{ sm: '15', lg: '16' }} children={name} />
                <Text fontSize={{ base: '12', md: '14' }} children={position} />
              </Box>
            </HStack>
          </Box>
        </GridItem>
      </Box>
    </>
  );
};

export default TestimonialCard;
