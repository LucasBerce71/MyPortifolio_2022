import React, { memo } from 'react';

import { Container, Heading, SimpleGrid } from '@chakra-ui/react';

import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';

import bookData from '../lib/mocks/bookData';

const BookIRecomended = () => {
  return (
    <Layout>
      <Container>
        <Heading
          as="h2"
          variant="page-title"
          textAlign="center"
        >
          Hello, in this area of my website, I recomended
          to you some books that I have read.
        </Heading>

        <Section delay={0.1}>
          <SimpleGrid
            columns={[1, 2, 2]}
            gap={6}
            mt={20}
          >
            {bookData?.map(book => (
              <GridItem
                key={book?.bookID}
                title={`${book?.bookName} (${book?.bookAuthor})`}
                thumbnail={book?.bookImage}
              />
            ))}
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default memo(BookIRecomended);