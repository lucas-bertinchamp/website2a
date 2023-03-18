import Footer from "/components/Footer.js";
import Head from "next/head";
import Header from "../components/Header.js";
import styles from "../styles/Home.module.css";
import Image from "next/image.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
        ></link>
      </Head>

      <Header></Header>

      <div className={styles.main_title_box}>
        <div className={styles.main_image}></div>
        <h1 className={styles.main_title}>
          Apprentissage par renforcement et contrôle de la marche du robot
        </h1>
      </div>

      <div className={styles.first_title_box}>
        <h2 className={styles.first_title}>
          L&apos;apprentissage par renforcement, une branche de
          l&apos;intelligence artificielle
        </h2>

        <div className={styles.cards_box}>
          <div className={styles.little_cards_box}>
            <div className={`card ${styles.card}`}>
              <Image
                src="/rl_principle.png"
                className={`card-Image-top ${styles.card_image1}`}
                alt="..."
                width={200}
                height={200}
              />
              <div className="card-body">
                <p className="card-text">
                  Une méthode d&apos;apprentissage basée sur{" "}
                  <b>l&apos;expérience </b>
                  grâce à <b>l&apos;interaction</b> entre un agent et son
                  <b> environnement.</b>
                </p>
              </div>
            </div>

            <div className={`card ${styles.card}`}>
              <Image
                src="/carrot.png"
                className={`card-Image-top ${styles.card_image2}`}
                alt="..."
                width={200}
                height={200}
              />
              <div className="card-body">
                <p className="card-text">
                  Le système de <b>récompense</b> : Un point clé de
                  l&apos;apprentissage par renforcement.
                </p>
              </div>
            </div>

            <div className={`card ${styles.card}`}>
              <Image
                src="/reseau.png"
                className={`card-Image-top ${styles.card_image3}`}
                alt="..."
                width={200}
                height={200}
              />
              <div className="card-body">
                <p className="card-text">
                  De nombreux <b>algorithmes d&apos;apprentissage</b> qui
                  permettent
                  <b> d&apos;adapter les actions</b> de l&apos;agent à son
                  environnement.
                </p>
              </div>
            </div>

            <div className={`card ${styles.card}`}>
              <Image
                src="/application.png"
                className={`card-Image-top ${styles.card_image4}`}
                alt="..."
                width={200}
                height={200}
              />
              <div className="card-body">
                <p className="card-text">
                  Des applications diverses dans de nombreux domaines comme{" "}
                  <b>la robotique, l&apos;automobile, le jeu vidéo etc.</b>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.big_card_box}>
            <div className={styles.big_card}>
              <div className={styles.robot_image_box}>
                <Image
                  src="/robot.png"
                  width={500}
                  height={500}
                  className={styles.robot_image}
                />
              </div>
              <div className={styles.big_card_text}>
                <h2>Unitree GO1</h2>
                <p>
                  Développé par <b>Unitree Robotics</b>, le robot Unitree GO1
                  est un robot quadrupède à 12 degrés de liberté. Il est équipé
                  de <b>12 moteurs</b>. Il est capable de marcher, de sauter et
                  de courir et est également capable de se relever s&apos;il
                  tombe.
                  <br />
                  <br />
                  Le robot Unitree GO1 est utilisé dans le cadre de ce projet
                  pour tester les{" "}
                  <b>algorithmes d&apos;apprentissage par renforcement.</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.second_title_box}>
        <div className={styles.gallery_title}>
          <h2>Galerie d&apos;images</h2>
        </div>

        <div className={styles.carousel_box}>
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image
                  src="/poomme.jpg"
                  className="d-block w-100"
                  alt="..."
                  width={200}
                  height={200}
                />
              </div>
              <div className="carousel-item">
                <video
                  src="unitree_go1.mp4"
                  controls
                  autoPlay
                  width="900"
                  height="400"
                ></video>
              </div>
              <div className="carousel-item">
                <Image
                  src="/poomme.jpg"
                  className="d-block w-100"
                  alt="..."
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"
        async
      ></script>
      <Footer></Footer>
    </>
  );
}