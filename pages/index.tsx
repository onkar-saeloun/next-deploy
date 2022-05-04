import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1> Hello World</h1>
     {/* <Image
          // className={`object-cover border border-solid ${isFounder() ? 'cursor-pointer' : 'cursor-default'} grayscale`}

src={'https://image.shutterstock.com/image-photo/batsman-hitting-cricket-ball-tournament-260nw-11474998.jpg'}          // alt={name}
          width={200}
          height={200}
        /> */}
    </div>
  )
}

export default Home
