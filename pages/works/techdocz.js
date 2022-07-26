import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="TechDocz">
    <Container>
      <Title>
        TechDocs <Badge>2021</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/techdocz.png" alt="icon" />
      </Center>
      <P>
        TechDocz is an open source desktop application for consulting documentation from the world of software development.
      </P>

      <P style={{ marginTop: 30 }}>
        Technologies used:
      </P>

      <UnorderedList ml={4} my={4}>
        <ListItem>HTML</ListItem>
        <ListItem>CSS</ListItem>
        <ListItem>JavaScript</ListItem>
        <ListItem>TypeScript</ListItem>
        <ListItem>React JS</ListItem>
        <ListItem>Electron</ListItem>
        <ListItem>ESLint</ListItem>
        <ListItem>Prettier</ListItem>
      </UnorderedList>

      <List my={4}>
        <ListItem>
          <Meta>Codepen:</Meta>
          <span>
            coming soon
          </span>
        </ListItem>
        <ListItem>
          <Meta>Gthub:</Meta>
          <Link href="https://github.com/LucasBerce71/TechDocz" target="_blank">
            github code link here
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
