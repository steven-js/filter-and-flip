import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SortedArray from '../components/SortedArray'
import { Flipper } from 'react-flip-toolkit'


const originalArray = [
  { id: "aghew", title: "1", bodyCopy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", category: "one", image: '/imgs/1.gif' },
  { id: "harwe", title: "2", bodyCopy: "ulla quis mauris arcu. Donec ac euismod and keiba leia", category: "two" },
  { id: "ntrty", title: "3", bodyCopy: "Morbi lacinia sollicitudin leo quis fermentum", category: "three" },
  { id: "iowet", title: "2", bodyCopy: "Morbi elit risus, bibendum vitae commodo viverra, interdum", category: "two" },
  { id: "no8dsw", title: "2", bodyCopy: "Pellentesque in purus vitae ante lacinia egestas", category: "two" },
  { id: "sery", title: "3", bodyCopy: "Aliquam finibus suscipit tincidunt integer", category: "three" },
  { id: "biruw", title: "1", bodyCopy: "Praesent vitae placerat enim. Nunc lobortis turpis vitae finibus vehicula", category: "one" },
  { id: "soiuer", title: "3", bodyCopy: "Integer lobortis magna ac imperdiet accumsan duis", category: "three" },
  { id: "agh6ew", title: "1", bodyCopy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", category: "one" },
  { id: "haarwe", title: "2", bodyCopy: "ulla quis mauris arcu. Donec ac euismod and keiba leia", category: "two" },
  { id: "ntrvty", title: "3", bodyCopy: "Morbi lacinia sollicitudin leo quis fermentum", category: "three" },
  { id: "iow2et", title: "2", bodyCopy: "Morbi elit risus, bibendum vitae commodo viverra, interdum", category: "two" },
  { id: "no8udsw", title: "2", bodyCopy: "Pellentesque in purus vitae ante lacinia egestas", category: "two" },
]


export default function Home() {
  const [categorySelect, setCategorySelect] = useState('all')

  // Category buttons
  const allCats = []
  var uniqueCats = []
  for (let i = 0; i < originalArray?.length; i++) {
    const { category } = originalArray[i]
    allCats.push(category)
    uniqueCats = [...new Set(allCats)]
  }

  // Filter array
  const sortedArray = []

  if (categorySelect === "all") {
    sortedArray.push(originalArray)
  } else {
    for (let i = 0; i < originalArray?.length; i++) {
      const { category } = originalArray[i]
      if (category === categorySelect) {
        sortedArray.push(originalArray[i])
      }
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Filter and Flip</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Filter and Flip
        </h1>


        <div className={styles.filter}>
          {uniqueCats && uniqueCats.map((s) => {

            return (
              <button
                type="button"
                key={s}
                value={s}
                onClick={(e) => { setCategorySelect(e.target.value) }}
              >
                {s}
              </button>
            )
          })}
          <button
            type="button"
            key={'all'}
            value={'all'}
            onClick={(e) => { setCategorySelect(e.target.value) }}
          >
            ALL
          </button>
        </div>

        <div className={styles.grid}>
          <Flipper flipKey={sortedArray[0].id} >
            <SortedArray data={categorySelect === "all" ? sortedArray[0] : sortedArray} />
          </Flipper>

        </div>
      </main>

    </div>
  )
}