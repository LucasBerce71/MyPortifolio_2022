import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbFrontinsampa from '../public/images/contents/frontinsampa.jpeg'
import thumbReactSuspense from '../public/images/contents/react-suspense.png'
import thumbMySetup from '../public/images/contents/setup.jpeg'
import thumbBatmanAnimated from '../public/images/contents/batman-app-animation.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Frontinsampa 2022"
            thumbnail={thumbFrontinsampa}
            href="https://www.linkedin.com/feed/update/urn:li:share:6955628974353825794?utm_source=linkedin_share&utm_medium=member_desktop_share&utm_content=post"
          />
          <GridItem
            title="React Suspense component"
            thumbnail={thumbReactSuspense}
            href="https://www.linkedin.com/posts/lucas-berc%C3%AA-de-jesus-bb228416a_o-react-adicionou-um-componente-chamado-activity-6917639466031419392-cwYU?utm_source=linkedin_share&utm_medium=member_desktop_web"
          />
          <GridItem
            title="My Setup"
            thumbnail={thumbMySetup}
            href="https://www.linkedin.com/posts/lucas-berc%C3%AA-de-jesus-bb228416a_e-esse-aqui-%C3%A9-o-meu-querido-setup-meu-cantinho-activity-6892270028243492864-QmcJ?utm_source=linkedin_share&utm_medium=member_desktop_web"
          />
          <GridItem
            title="Batman app animation"
            thumbnail={thumbBatmanAnimated}
            href="https://www.linkedin.com/posts/lucas-berc%C3%AA-de-jesus-bb228416a_hoje-resolvi-brincar-um-pouco-com-anima%C3%A7%C3%B5es-activity-6830304656976044032-ROjA?utm_source=linkedin_share&utm_medium=member_desktop_web"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
