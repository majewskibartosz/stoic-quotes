/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import getRandomIntInclusive from './getRandomIntInclusive'

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

const Quote = () => {
  const [quotes, setQuotes] = useState({ quotes: [] })
  const API_URL = 'https://type.fit/api/quotes'

  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await fetch(API_URL)
      const json = await response.json()
      setQuotes({ quotes: json })
    }
    fetchQuotes()
  }, [])

  const displayQuote = () => {
    const listedQuote = quotes.quotes.map((quote) => (
      <div key={quote.id}>
        <p>"{quote.text}"</p>
        <Link
          href={`https://en.wikipedia.org/wiki/${quote.author}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {quote.author}
        </Link>
      </div>
    ))

    return listedQuote[getRandomIntInclusive(1, quotes.quotes.length)]
  }

  return (
    <Container>
      <Text>{displayQuote()}</Text>
    </Container>
  )
}
export default Quote
