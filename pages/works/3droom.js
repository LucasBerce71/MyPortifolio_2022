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
  <Layout title="amembo">
    <Container>
      <Title>
        3D Room <Badge>2022</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/3droom.png" alt="icon" />
      </Center>
      <P>
        The 3D Room is a project developed with HTML, and CSS.
      </P>

      <P style={{ marginTop: 30 }}>
        Technologies used:
      </P>

      <UnorderedList ml={4} my={4}>
        <ListItem>HTML</ListItem>
        <ListItem>CSS</ListItem>
        <ListItem>SASS</ListItem>
        <ListItem>PUG</ListItem>
      </UnorderedList>

      <List my={4}>
        <ListItem>
          <Meta>Codepen:</Meta>
          <Link href="https://codepen.io/lucasberce71/pen/wvmJLWv" target="_blank">
            code link here
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Gthub:</Meta>
          <span>
            coming soon
          </span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
