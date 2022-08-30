import Head from "next/head";
import Image from "next/image";
import Topbar from "../components/TopBar";
import styled from "styled-components";
import styles from "../styles/Home.module.css"

import { useAuth } from "../firebase/UserAuthContext";
import { useRouter } from "next/router";

const Hero = styled.div`
  background-image: url("./bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - 50px);
  width: 100%;
  text-align: center;
`;
const HeroTitle = styled.h1`
  font-size: 3rem;
  line-height: 3.25rem;
  font-weight: 400;
  color: white;
  text-align: center;
  padding-top: 14%;
  width: 75%;
  margin: 0 auto;
  font-family: Georgia, Times, "Times New Roman", serif;
`;
const Button = styled.button`
  background-color: transparent;
  border: 1px solid white;
  cursor: pointer;
  padding: 10px 30px;
  margin-top: 40px;
  color: white;
`;

const Gallery = styled.div`
  color: black;
  padding-top: 150px;
`;

const GalleryTitle = styled.div`
  text-align: center;
  font-size: 36px;
  margin-bottom: 40px;
`;

const Home = () => {
  const auth = useAuth();
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Forest</title>
        <meta name="description" content="Explore national parks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Topbar />
        <div className={styles.hero}>
          <h1 className={styles['hero-title']}>
            Explore national parks with digital tours, ranger programs, trips
            ideas, and more with our chatbot!.
          </h1>
          <a href="https://t.me/wildhacks123_bot">
            <button className={styles.button}>
              Chat now!
            </button>
          </a>
        </div>
        <div id="pics" className={styles.gallery}>
          <div className={styles['gallery-title']}>National Parks of the World</div>

          <div className="gallery-wrapper">
            <div className="box1">
              <div className="cards-2022">
                <div className="cards-image-2022 cards-image1">
                  {/* <div className="transparent-2022"> */}
                  <span className="cards-text-2022">
                    Etosha National Park, Namibia
                  </span>
                  {/* </div> */}
                </div>
              </div>
              <div className="cards-2022">
                <div className="cards-image-2022 cards-image2">
                  <span className="cards-text-2022">
                    Grand Canyon National Park, United States of America
                  </span>
                </div>
              </div>
            </div>
            <div className="box2">
              <div className="cards-2022">
                <div className="cards-image-2022 cards-image3">
                  <span className="cards-text-2022">
                    Göreme National Park, Turkey
                  </span>
                </div>
              </div>
              <div className="cards-2022">
                <div className="cards-image-2022 cards-image4">
                  <span className="cards-text-2022">
                    Jim Corbett National Park, India
                  </span>
                </div>
              </div>
              <div className="cards-2022">
                <div className="cards-image-2022 cards-image5">
                  <span className="cards-text-2022">
                    Arcipelago di La Maddalena National Park, Italy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
