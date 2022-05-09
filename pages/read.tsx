import type { GetStaticProps, NextPage } from 'next'
import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css'

const Read: NextPage = () => {
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
      setLoading(false);
    fetch('/api/readFile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((data) => {
          console.log(data)
      }).catch((err) => {
          console.log(err)
      })
  }, []);

  
  return (
    <>
    {loading ? <h2>Loading</h2> : (
    <div className={styles.container}>
      <h1> Hello world</h1>
    </div>
    )}
    </>
  )
}

export default Read
