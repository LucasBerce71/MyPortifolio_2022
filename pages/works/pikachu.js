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
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Pikachu">
    <Container>
      <Title>
        Pikachu <Badge>2022</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/pikachu.png" alt="icon" />
      </Center>
      <P>
        In the pikachu project I used nothing less than just HTML and CSS to create the animation in the pikachu look.
      </P>

      <P style={{ marginTop: 30 }}>
        Technologies used:
      </P>

      <UnorderedList ml={4} my={4}>
        <ListItem>HTML</ListItem>
        <ListItem>CSS</ListItem>
        <ListItem>SASS</ListItem>
      </UnorderedList>

      <List my={4}>
        <ListItem>
          <Meta>Codepen:</Meta>
          <Link href="https://codepen.io/lucasberce71/pen/yLKMdNa" target="_blank">
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
