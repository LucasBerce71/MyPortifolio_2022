import Image from 'next/image'
import { IoLogoCodepen, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  useColorModeValue,
  chakra
} from '@chakra-ui/react';

import { BioSection, BioYear } from '../components/bio';
import Paragraph from '../components/paragraph';
import Layout from '../components/layouts/article';
import Section from '../components/section';

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
});

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, welcome to my portfolio.
        <br />
        Dedicated to frontend development and passionate about solving big challenges.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Lucas Bercê
          </Heading>
          <p>Frontend engineer (HTML, CSS, JavaScript, TypeScript, React).</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/l2.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About my work
        </Heading>
        <Paragraph>
          I&apos;ve been a frontend engineer for 6 years, with experience in web,
          mobile and desktop frontend development, working most of my career with JavaScript.{' '}
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          My main experiences
        </Heading>

        <BioSection>
          <BioYear>2018</BioYear>
          Internship in systems development at CIT - Brasil;
        </BioSection>

        <BioSection>
          <BioYear>2019</BioYear>
          Frontend Engineer at ToiTech - Brasil;
        </BioSection>

        <BioSection>
          <BioYear>2020</BioYear>
          Frontend Engineer at AP INTERACTIVE - Brasil;
        </BioSection>

        <BioSection>
          <BioYear>2021</BioYear>
          Frontend Engineer at Topaz - Uruguay;
        </BioSection>

        <BioSection>
          <BioYear>2022</BioYear>
          Frontend Engineer at ConectCar - Brasil;
        </BioSection>

        <BioSection>
          <BioYear>2022</BioYear>
          Frontend Engineer at Corinthians - Brasil;
        </BioSection>

        <BioSection>
          <BioYear>2022</BioYear>
          Frontend Engineer at AP INTERACTIVE - Brasil;
        </BioSection>

        <BioSection>
          <BioYear>2023</BioYear>
          Frontend Engineer at NBA - United Stated;
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          My Networks
        </Heading>

        <SimpleGrid columns={[1, 2]} mt={2}>
          <Link
            href="https://github.com/LucasBerce71"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="ghost"
              colorScheme="blue"
              leftIcon={<IoLogoGithub />}
            >
              GitHub
            </Button>
          </Link>

          <Link
            href="linkedin.com/in/lucas-bercê-de-jesus-bb228416a"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="ghost"
              colorScheme="blue"
              leftIcon={<IoLogoLinkedin />}
            >
              Linkedin
            </Button>
          </Link>

          <Link
            href="https://codepen.io/lucasberce71"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="ghost"
              colorScheme="blue"
              leftIcon={<IoLogoCodepen />}
            >
              Codepen.io
            </Button>
          </Link>

          <Link
            href="https://twitter.com/LucasBerce71"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="ghost"
              colorScheme="blue"
              leftIcon={<IoLogoTwitter />}
            >
              Twiter
            </Button>
          </Link>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Home;

export { getServerSideProps } from '../components/chakra';
