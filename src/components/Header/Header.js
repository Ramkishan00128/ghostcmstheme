import {
  Avatar,
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Input,
  Link,
  Text,
  useDisclosure,
  VStack,
  Divider,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import '../../style.css';
import logo from '../../assets/logoipsum-223.svg';
import { FiSearch } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const [current, setCurrent] = useState('home');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const links = [
    { name: 'Home', url: '/' },
    { name: 'Project', url: '/project' },
    { name: 'Team', url: '/team' },
    { name: 'Resources', url: '/resource' },
    { name: 'About', url: '/about' },
  ];
  const btnRef = React.useRef();

  return (
    <>
      <Box>
        <Text bg={'#D8FB52'} textAlign={'center'} py={'2.5'}>
          A new Ghost theme to showcase your projects is available now{' '}
          <Link
            fontWeight={'bold'}
            _hover={{ textDecoration: 'underline', color: '' }}
          >
            READ MORE
          </Link>
        </Text>
        <Flex
          bg={'white'}
          w={'full'}
          h="20"
          justifyContent={'space-between'}
          alignItems="center"
        >
          <Box alignItems={'center'} w="20%" h="10">
            <Flex mx={'4'}>
              <Avatar src={logo} />
              <Text
                color={'blue.900'}
                fontSize={'3xl'}
                fontWeight="bold"
                children="Ghost"
              />
            </Flex>
          </Box>
          <Flex w={'70%'} justifyContent="space-between">
            <Flex
              visibility={{ base: 'hidden', lg: 'visible' }}
              className="navbar"
              w={'50%'}
              justifyContent="space-between"
              alignItems={'center'}
            >
              {links.map(link => (
                <a
                  textDecoration="none"
                  href={link.url}
                  key={link.name}
                  className={link.name.toLowerCase === current ? 'active' : ''}
                  onClick={() => setCurrent(link.name)}
                >
                  {link.name}
                </a>
              ))}
            </Flex>

            <Flex mx={'1'} w={'40%'}>
              <Button
                position={'absolute'}
                right={'1'}
                visibility={{ lg: 'hidden' }}
                ref={btnRef}
                variant="ghost"
                onClick={onOpen}
              >
                <GiHamburgerMenu fontSize={'50'} />
              </Button>

              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader color={'#ff1a75'}>GHOST CMS THEME</DrawerHeader>
                  <HStack mx={'4'}>
                    <Input
                      _focus={{ outline: 'none' }}
                      placeholder="Search here.."
                    />
                  </HStack>

                  <DrawerBody>
                    <VStack my={'4'} spacing={'4 '} alignItems={'center'}>
                      {links.map(link => (
                        <a
                          onClose={onClose}
                          href={link.url}
                          key={link.name}
                          className={
                            link.name.toLowerCase === current ? 'active' : ''
                          }
                          onClick={() => setCurrent(link.name.toLowerCase)}
                        >
                          {link.name}
                        </a>
                      ))}
                    </VStack>
                  </DrawerBody>

                  <DrawerFooter></DrawerFooter>
                </DrawerContent>
              </Drawer>

              <Input
                display={{ base: 'none', lg: 'block' }}
                position={'relative'}
                type="search"
                placeholder="Search..."
                variant="flushed"
                _focus={{ outline: 'white' }}
              />
              <Button
                display={{ base: 'none', lg: 'block' }}
                ml={'-4'}
                my="2px"
                mr={'4'}
                colorScheme={'yellow'}
              >
                <Center>
                  <FiSearch fontSize={'25'} color="white" />
                </Center>
              </Button>
              <Button
                display={{ base: 'none', lg: 'block' }}
                _hover={{ bg: '#ff1a75' }}
                mr={'2'}
                w={'72'}
                bg="#31274B"
                color={'white'}
              >
                <Center>Get In Touch</Center>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Divider />
    </>
  );
};

export default Header;
