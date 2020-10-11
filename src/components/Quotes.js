/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import useRequest from '../hooks/useRequest'

const Container = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  margin-bottom: 0px;
  color: rgba(255, 255, 255, 0.9);
  z-index: 1;
  text-shadow: 2px 3px 4px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-18px);
  }
`

const Text = styled.div`
  width: 100%;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: calc(10px + 1vmin);
  line-height: 1.1;
`

const Link = styled.a`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: calc(8px + 1vmin);

  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 0.5s, opacity 0.3s;

  ${Container}:hover & {
    visibility: visible;
    opacity: 0.8;
    transition: visibility 0s linear 0s, opacity 0.3s;
  }
`

const url = 'https://type.fit/api/quotes'

const renderQuote = ({ author, text }) => (
  <div key={author}>
    <p>"{text}"</p>
    <Link
      href={`https://en.wikipedia.org/wiki/${author}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {author}
    </Link>
  </div>
)

const Quotes = () => {
  const { data: quotes, loading, error } = useRequest(url)

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>There was an error!</Text>

  return (
    <Container>
      <Text>{quotes.map(renderQuote)}</Text>
    </Container>
  )
}

export default Quotes
