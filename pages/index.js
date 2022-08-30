import Head from "next/head";
import Image from "next/image";
import Topbar from "../components/TopBar";
import styles from "../styles/Home.module.css"

import { useAuth } from "../firebase/UserAuthContext";
import { useRouter } from "next/router";

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
