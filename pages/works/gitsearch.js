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
  <Layout title="GitSearch">
    <Container>
      <Title>
        GitSearch <Badge>2020</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/gitsearch.png" alt="icon" />
      </Center>
      <P>
        GitSearch is a project that was developed during Rocketseat Bootcamp GoStack 9 using React JS, Styled Components,
        and consuming the Github REST API.
        The project is a SPA where it is possible to search for any existing repository on github, and save them being
        able to view their details and open issues.
      </P>

      <P style={{ marginTop: 30 }}>
        Technologies used:
      </P>

      <UnorderedList ml={4} my={4}>
        <ListItem>HTML</ListItem>
        <ListItem>CSS</ListItem>
        <ListItem>JavaScript</ListItem>
        <ListItem>React JS</ListItem>
        <ListItem>React Router DOM</ListItem>
        <ListItem>React Icons</ListItem>
        <ListItem>Styled Components</ListItem>
        <ListItem>ESlint</ListItem>
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
          <Link href="https://github.com/LucasBerce71/GitSearch" target="_blank">
            github code link here
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
