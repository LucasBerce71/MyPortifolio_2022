import React, { memo } from 'react'

import { Container, Heading, SimpleGrid } from '@chakra-ui/react';

import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';

import CleanCode from "../public/images/books/cleanCode.jpg";
import UseJsHead from "../public/images/books/useJsHead.webp";
import JavaScriptPatterns from "../public/images/books/javascriptPatterns.jpg";
import AndroidForProgrammers from "../public/images/books/androidForProgrammers.jpg";
import CssRefactoring from "../public/images/books/cssRefactoring.jpg";
import ReactNative from "../public/images/books/reactNativeBook.webp";
import BuildingCareerInSoftware from "../public/images/books/buildingCareerInSoftware.jpeg";
import CssGrid from "../public/images/books/cssGrid.jpg";
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

export default memo(BookIRecomended)