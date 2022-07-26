import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Pokemon Card">
    <Container>
      <Title>
        Pokémon Card <Badge>2022</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/pokemon-card.png" alt="icon" />
      </Center>
      <P>
        The pokémon card project was developed with the consumption of the pokémon public api the Poke API.
      </P>

      <P style={{ marginTop: 30 }}>
        Technologies used:
      </P>

      <UnorderedList ml={4} my={4}>
        <ListItem>HTML</ListItem>
        <ListItem>CSS</ListItem>
        <ListItem>SASS</ListItem>
        <ListItem>JavaScript</ListItem>
        <ListItem>AJAX</ListItem>
      </UnorderedList>

      <List my={4}>
        <ListItem>
          <Meta>Codepen:</Meta>
          <Link href="https://codepen.io/lucasberce71/pen/gOemNMN" target="_blank">
            code link here
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Gthub:</Meta>
          <span>coming soon</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
