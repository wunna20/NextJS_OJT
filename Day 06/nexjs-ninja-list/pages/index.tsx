
import NavBar from "../components/Navbar";
import Link from "next/link";
import Head from "next/head";
import style from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja | Home</title>
        <meta name="keywords" content="ninja" />
      </Head>
      <div>
        <h1 className={style.title}>Homepage</h1>
        <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus asperiores maiores similique adipisci. Accusantium enim delectus ea ab amet optio cum dolor, quae, cupiditate iure quam vel aperiam laborum non?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus asperiores maiores similique adipisci. Accusantium enim delectus ea ab amet optio cum dolor, quae, cupiditate iure quam vel aperiam laborum non?</p>
        <Link href="/ninjas" legacyBehavior><a className={style.btn}>See Ninjas List</a></Link>
      </div>
    </>
  )
}
