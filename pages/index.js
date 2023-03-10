import Head from 'next/head'
import styles from '@/styles/Home.module.css'



function changePosition(e, color) {
  let left = parseFloat(e.target.style.left);
  let top = parseFloat(e.target.style.top);
  let randomLeft = getChangableRandom(left);
  let randomTop = getChangableRandom(top);
  e.target.style.left = `${randomLeft}%`;
  e.target.style.top = `${randomTop}%`;
}
const getRandom = () => {
  return Math.ceil(Math.random() * 100)
}
const getChangableRandom = (checkValue) => {
  let random = getRandom();
  // console.log("checkValue", checkValue, random);
  // while (!(random < checkValue + coefficents && random > checkValue - coefficents)) {
  //   random = getRandom()
  // }
  return random;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>


        <p>Would you like to go on a date with me?</p>
        <div className={styles.center}>
          <div className={styles.center}>
            <button id="noButton"
              className={styles.button_negative}
              onMouseEnter={(e) => changeBackground(e, "red")}
              onMouseLeave={(e) => changeBackground(e, "dodgerblue")}
            >No</button>

          </div>
          <div className={styles.center}>

            <button id="yesButton"
              className={styles.button_negative}
            // onMouseEnter={(e) => changePosition(e)}
            // onMouseLeave={(e) => changePosition(e)}
            >Yes</button>
          </div>
        </div>
        <div className={styles.fullView}>
          <div
            className={styles.button_wrapper}
            style={{ top: '1px', left: '1px' }}
            onMouseEnter={(e) => changePosition(e)}
            onClick={(e) => changePosition(e)}
          >
            <button id="noButton"
              className={styles.button_negative}
              onClick={() => {
                alert('Like you are my Type')
              }}
            >No</button>
          </div>

          <button id="yesButton"

            className={styles.button_positive}
            style={{ top: '1px', right: '1px' }}
            onMouseEnter={(e) => changePosition(e)}
            onClick={() => {
              alert('See you tonight')
            }}
          >Yes</button>
        </div>
      </main>
    </>
  )
}
