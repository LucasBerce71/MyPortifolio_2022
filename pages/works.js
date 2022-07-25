import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbGitSearch from '../public/images/works/gitsearch.png'
import thumbPokemonCard from '../public/images/works/pokemon-card.png'
import thumbPikachu from '../public/images/works/pikachu.png'
import thumb3dRoom from '../public/images/works/3droom.png'
import thumbTechDocz from '../public/images/works/techdocz.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="gitsearch" title="GitSearch" thumbnail={thumbGitSearch}>
            GitSearch is a project that was developed during Rocketseat Bootcamp GoStack 9 using React JS, Styled Components, 
            and consuming the Github REST API.
            The project is a SPA where it is possible to search for any existing repository on github, and save them being 
            able to view their details and open issues.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="pokemoncard"
            title="Pokémon Card"
            thumbnail={thumbPokemonCard}
          >
            The pokémon card is a project developed with HTML, CSS and JavaScript.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="pikachu"
            title="Pikachu animated"
            thumbnail={thumbPikachu}
          >
            Project developed with HTML, and CSS.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="3droom" thumbnail={thumb3dRoom} title="3D Room">
            The 3D Room is a project developed with HTML, and CSS.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="techdocz" thumbnail={thumbTechDocz} title="Tech Docz">
            TechDocz is an open source desktop application for consulting documentation from the world of software development.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
