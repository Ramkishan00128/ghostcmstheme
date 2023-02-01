import {
  Box,
  Heading,
  Input,
  InputGroup,
  Text,
  VStack,
  Button,
  InputRightElement,
  HStack,
  Flex,
  Avatar,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { RiFacebookCircleLine, RiTwitterLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import img from '../../assets/logoipsum-223.svg';

const Footer = () => {
  const [current, setCurrent] = useState('');
  const links = [
    { name: 'Sign Up', url: '/register' },
    { name: 'Sign In', url: '/Login' },
    { name: 'Contact', url: '/contact' },

    { name: 'About', url: '/about' },
  ];
  return (
    <>
      <Box>
        <VStack gap={'4'}>
          <Heading
            textAlign={{ base: 'center' }}
            children="Sign up to our newsletters"
          />
          <Text
            textAlign={{ base: 'center' }}
            children="Subscribe now to get notified about excluive stories from the writing every week!"
          />
          <InputGroup w={{ base: '60', md: '2xl' }}>
            <Input
              type="text"
              placeholder="Email Adress                                                                                                                                                                                                                               "
            />
            <InputRightElement
              w="20"
              children={
                <Button
                  py={'1'}
                  _hover={{ bg: '#ff1a75', transition: '.5s all' }}
                  bg="#31274B"
                  color={'white'}
                  fontSize="10"
                  fontWeight={'bold'}
                >
                  SUBSCRIBE
                </Button>
              }
            />
          </InputGroup>
        </VStack>
        <Flex
          direction={{ base: 'column', md: 'column', lg: 'row' }}
          justifyContent="space-between"
          alignItems={'center'}
          mx={'16'}
          my="20"
          gap={'4'}
        >
          <HStack
            fontSize={{ base: '12', lg: '16' }}
            gap={{ base: '6', md: '4', lg: '10' }}
          >
            {links.map(link => (
              <Link
                textDecoration="none"
                to={link.url}
                key={link.name}
                className={link.name.toLowerCase === current ? 'active' : ''}
                onClick={() => setCurrent(link.name)}
              >
                {link.name}
              </Link>
            ))}
          </HStack>
          <VStack>
            <Box>
              <Flex mx={'4'} alignItems="center">
                <Avatar src={img} />
                <Text
                  color={'blue.900'}
                  fontSize={{ sm: '2xl' }}
                  fontWeight="bold"
                  children="Ghost"
                  mb={'2'}
                />
              </Flex>
              <Text
                color={'gray.400'}
                fontSize={'14'}
                children="@Ghost - Publisted with Ghost"
              />
            </Box>
          </VStack>
          <HStack gap={'10'} fontSize={'20'} cursor="pointer">
            <RiFacebookCircleLine />
            <RiTwitterLine />
            <AiOutlineGithub />
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
