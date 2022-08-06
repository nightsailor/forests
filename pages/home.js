import Head from 'next/head'
import Image from 'next/image'
import Topbar from '../components/TopBar'
import styled from 'styled-components';

const Hero = styled.div`
  background-image: url('./bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - 50px);
  width: 100%;
  text-align: center;
`
const HeroTitle = styled.h1`
  font-size: 48px;
  color: white;
  text-align: center;
  padding-top: 14%;
  width: 75%;
  margin: 0 auto;
`
const Button = styled.button`
  background-color: transparent;
  border: 1px solid white;
  cursor: pointer;
  padding: 10px 30px;
  margin-top: 30px;
  color: white;
`

const Gallery = styled.div`
  color: black;
  margin-top: 50px;
`

const Home2 = () => {
  return (
    <div>
      <Head>
        <title>Forest</title>
        <meta name="description" content="Explore national parks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Topbar />
        <Hero>
          <HeroTitle>Explore national parks with digital tours, ranger programs, Trips Ideas, and more.</HeroTitle>
          <a href="#pics">
            <Button>Find out more</Button>
          </a>
        </Hero>
        <Gallery id="pics">
            <p>text</p>
        </Gallery>
      </div>
    </div>
  )
}

export default Home2
