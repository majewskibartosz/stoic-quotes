/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import useRequest from '../hooks/useRequest'
import getRandomIntInclusive from '../utils/getRandomIntInclusive'

const Container = styled.div`
  width: 500px;
  height: auto;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  color: rgba(255, 255, 255, 0.9);
  z-index: 1;
  text-shadow: 2px 3px 4px rgba(0, 0, 0, 0.3);
`

const Text = styled.div`
  padding-bottom: 5px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: calc(10px + 1vmin);
  line-height: 1.1;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-18px);
  }
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

const renderQuote = ({ author, text }) => {
  return (
    <div key={author + text}>
      <p>"{text}"</p>
      <Link
        href={`https://en.wikipedia.org/wiki/${author}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {author || 'Unknown'}
      </Link>
    </div>
  )
}

const Quotes = () => {
  const { data: quotes, loading, error } = useRequest(url)

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>There was an error!</Text>

  return (
    <Container>
      <Text>
        {loading && <p>Loading...</p>}
        {error && <p>There was an error!</p>}
        {quotes && renderQuote(quotes[getRandomIntInclusive(1, quotes.length)])}
      </Text>
    </Container>
  )
}

export default Quotes
