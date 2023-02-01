import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import introvideo from '../assets/videos/intro.mp4';
import termAndCondition from '../assets/docs/termsAndCondition';
import me from '../assets/images/me.jpg';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar src={me} boxSize={['40', '48']} />
      <Text children=" Co-Founder" opacity="0.7" />
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Ramkishan" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children={
          'Hi, I am a Self Educated Full Stack Devloper , I have a one year Experience in MERN Devlopement and I work on many Project'
        }
      />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      autoPlay={true}
      muted
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={introvideo}
    ></video>
  </Box>
);

const TandC = ({ termAndCondition }) => (
  <Box>
    <Heading
      size={'md'}
      children={'Terms & Condition'}
      textAlign={['center', 'left']}
      my={'4'}
    />

    <Box h={'sm'} p="4" overflowY={'scroll'}>
      <Text
        textAlign={['center', 'left']}
        letterSpacing="widest"
        fontFamily={'heading'}
      >
        {termAndCondition}
      </Text>
      <Heading
        my={'4'}
        size={'xs'}
        children="Refund  application only within 7 Days"
      />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'} my="24">
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />

      <Stack m={'8'} direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
          Square is an independent publication launched in September 2022 by
          Maria Lopiz. If you subscribe today, you'll get full access to the
          website as well as email newsletters about new content when it's
          available. Your subscription makes this site possible, and allows
          Square to continue to exist. Thank you! Access
        </Text>

        <Link to="/">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Landing Page
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />

      <TandC termAndCondition={termAndCondition} />

      <VStack my="4" p="4" align={'flex-start'} gap="8">
        <Box>
          <Heading
            size={'xs'}
            fontFamily="sans-serif"
            textTransform={'uppercase'}
            children="Access all areas"
          />
          <Text
            color={'gray'}
            children="By signing up, you'll get access to the full archive of everything that's been published before and everything that's still to come. Your very own private library."
          />
        </Box>
        <Box>
          <Heading
            size={'xs'}
            fontFamily="sans-serif"
            textTransform={'uppercase'}
            children="Fresh content, delivered"
          />
          <Text
            color={'gray'}
            children="Stay up to date with new content sent straight to your inbox! No more worrying about whether you missed something because of a pesky algorithm or news feed."
          />
        </Box>
        <Box>
          <Heading
            size={'xs'}
            fontFamily="sans-serif"
            textTransform={'uppercase'}
            children="Meet people like you"
          />
          <Text
            color={'gray'}
            children="Join a community of other subscribers who share the same interests."
          />
        </Box>
        <Divider />
        <Box>
          <Heading
            size={'xs'}
            fontFamily="sans-serif"
            textTransform={'uppercase'}
            children="Start your own thing"
          />
          <Text
            color={'gray'}
            children="Enjoying the experience? Get started for free and set up your very own subscription business using Ghost, the same platform that powers this website."
          />
        </Box>
      </VStack>
    </Container>
  );
};

export default About;
