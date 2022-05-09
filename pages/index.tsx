import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    // setTimeout(() => {
      setLoading(false);
    // }, 1000);
  }, []);

  const handleCreateFile = () => {
    fetch('/api/createFile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'createFile': 'file'}),
    })
  };
  
  return (
    <>
    {loading ? <h2>Loading</h2> : (
    <div className={styles.container}>
      <h1> CreateFile</h1>
      <button onClick={handleCreateFile}> onClickCreateFile </button>
     {/* <Image
          // className={`object-cover border border-solid ${isFounder() ? 'cursor-pointer' : 'cursor-default'} grayscale`}
          src={'https://media.istockphoto.com/photos/lens-image-dslr-manhattan-downtown-city-new-york-hand-picture-id901169654?b=1&k=20&m=901169654&s=170667a&w=0&h=0SkF_wRuG7RqWhvmV0QM0xpIbZDYXokJMS_oEQs0S9U='}          // alt={name}
          width={200}
          height={200}
          priority
        />
        Image without priority
        <Image
          // className={`object-cover border border-solid ${isFounder() ? 'cursor-pointer' : 'cursor-default'} grayscale`}
          src={'https://media.istockphoto.com/photos/lens-image-dslr-manhattan-downtown-city-new-york-hand-picture-id901169654?b=1&k=20&m=901169654&s=170667a&w=0&h=0SkF_wRuG7RqWhvmV0QM0xpIbZDYXokJMS_oEQs0S9U='}          // alt={name}
          width={200}
          height={200}
        /> */}
    </div>
    )}
    </>
  )
}

export default Home
