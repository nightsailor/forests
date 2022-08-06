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
  font-size: 3rem;
  line-height: 3.25rem;
  font-weight: 400;
  color: white;
  text-align: center;
  padding-top: 14%;
  width: 75%;
  margin: 0 auto;
  font-family: Georgia,Times,'Times New Roman',serif;
`
const Button = styled.button`
  background-color: transparent;
  border: 1px solid white;
  cursor: pointer;
  padding: 10px 30px;
  margin-top: 40px;
  color: white;
`

const Gallery = styled.div`
  color: black;
  padding-top: 150px;
`

const GalleryTitle = styled.div`
  text-align: center;
  font-size: 36px;
  margin-bottom: 40px;
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
          <GalleryTitle>National Parks of the World</GalleryTitle>
        
        <div className="gallery-wrapper">
          <style global jsx>{`
            .box1{
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 10px;
              padding: 5px;
            }
            .box2{
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 10px;
              padding: 0 5px;
            }
            .cards-2022 {
              height: 400px;
              overflow: hidden;
              width:100%;
            }
            .cards-image-2022  {
              background-size: cover;
              background-repeat: no-repeat;
              background-position: 50% 50%;
              background-position: center;
              height: 100%;
              width: 100%;

              text-align: center;
              margin-bottom: 0;
              position: relative;
            }
            .cards-image-2022:hover {
              background-color: rgba(15, 191, 97, 0.1);
            }
            .cards-image1 {
              background-image: url('https://tourscanner.com/blog/wp-content/uploads/2020/04/Etosha-National-Park-Namibia.jpg');
            }
            .cards-image2 {
              background-image: url('https://tourscanner.com/blog/wp-content/uploads/2020/04/Grand-Canyon-National-Park-United-States-of-America.jpg');
            }
            .cards-image3 {
              background-image: url('https://tourscanner.com/blog/wp-content/uploads/2020/04/G%C3%B6reme-National-Park-Turkey.jpg');
            }
            .cards-image4 {
              background-image: url('https://tourscanner.com/blog/wp-content/uploads/2020/04/Jim-Corbett-National-Park-India.jpg');
            }
            .cards-image5 {
              background-image: url('https://tourscanner.com/blog/wp-content/uploads/2020/04/Arcipelago-di-La-Maddalena-National-Park-Italy.jpg');
            }
            .cards-text-2022 {
              verticle-align: middle;
              position: absolute;
              bottom: 10px;
              left: 0;
              right: 0;
              font-size: 36px;
              color: white;
            }
          `}</style>
          <div className="box1">
            <div className="cards-2022">
              <div className="cards-image-2022 cards-image1">
                <span className="cards-text-2022">Etosha National Park, Namibia</span>
              </div>
            </div>
            <div className="cards-2022">
              <div className="cards-image-2022 cards-image2">
                <span className="cards-text-2022">Grand Canyon National Park, United States of America</span>
              </div>
            </div>
          </div>
          <div className="box2">
            <div className="cards-2022">
              <div className="cards-image-2022 cards-image3">
                <span className="cards-text-2022">Göreme National Park, Turkey</span>
              </div>
            </div>
            <div className="cards-2022">
              <div className="cards-image-2022 cards-image4">
                <span className="cards-text-2022">Jim Corbett National Park, India</span>
              </div>
            </div>
            <div className="cards-2022">
              <div className="cards-image-2022 cards-image5">
                <span className="cards-text-2022">Arcipelago di La Maddalena National Park, Italy</span>
              </div>
            </div>
          </div>
        </div>
        
        </Gallery>
      </div>
    </div>
  )
}

export default Home2
