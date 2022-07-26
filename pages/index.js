import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoCodepen, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import thumbGithub from '../public/images/links/github.png'
import thumbLinkedin from '../public/images/links/linkedin.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

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
            Lucas Bercê de Jesus
          </Heading>
          <p>Sênior Frontend engineer (HTML, CSS, JavaScript, TypeScript, React, Electron)</p>
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
              src="/images/lucas.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I&apos;ve been a frontend engineer for 5 years, with experience in web,
          mobile and desktop frontend development, working most of my career with JavaScript.{' '}
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Osasco, Brasil.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Beginning of the technical course in systems development (Technological Institute of Barueri);
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Internship in systems development at CIT (Innovation and technology center) company - Brasil;
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Graduated in the technical course of systems development (Technological Institute of Barueri);
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Júnior Frontend Engineer at ToiTech - Brasil;
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Júnior Frontend Engineer at AP INTERACTIVE - Brasil;
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Mid level Frontend Engineer at Topaz - Uruguay;
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Graduated from the faculty of systems analysis and development at Universidade Paulista
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Sênior Frontend Engineer at Iterative - Brasil;
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Sênior Frontend Engineer at ConectCar - Brasil;
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Sênior Frontend Engineer at AP INTERACTIVE - Brasil;
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Sênior Frontend Engineer at Sport Clube Corinthians Paulista - Brasil;
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Soccer, {' '}
          Football, {' '}
          <Link href="https://www.corinthians.com.br/" target="_blank">
            Corinthians
          </Link>
          , Basketball, {' '}
          and a lot of code.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
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
                @LucasBerce71 in GitHub
              </Button>
            </Link>
          </ListItem>
          <ListItem>
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
                @lucasbercedejesus in Linkedin
              </Button>
            </Link>
          </ListItem>
          <ListItem>
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
                @lucasberce71 in Codepen.io
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6} mt={2}>
          <GridItem
            href="https://www.github.com/LucasBerce71"
            title="My Github"
            thumbnail={thumbGithub}
          />
          <GridItem
            href="https://linkedin.com/in/lucas-bercê-de-jesus-bb228416a"
            title="My Linkedin"
            thumbnail={thumbLinkedin}
          />
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
