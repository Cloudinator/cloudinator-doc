// Example from https://beta.reactjs.org/learn

import { Fragment, useState } from 'react'
import styles from './counters.module.css'
import Image from 'next/image'


function MyButton() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }

    return (
        <>
            <div className={styles.text}>1. Log in to AutomateX Cloud with your AutomateX account</div>
            <div className={styles.container}>
                <div className={styles.counter}>
                    <Image
                        width={800}
                        height={500}
                        src="/images/cloudinator-logo.jpg"
                        alt=" "
                        unoptimized={true}
                    />
                </div>
            </div>

            <div className={styles.text}>2. Then, you will be able to upload and create any files as you want </div>
            <div className={styles.container}>
                <div className={styles.counter}>
                    <Image
                        width={800}
                        height={500}
                        src="/images/cloudinator-logo.jpg"
                        alt=" "
                        unoptimized={true}
                    />
                </div>
            </div>

            <div className={styles.text}>3. Edit your profile with "Cloud User Setting"</div>
            <div className={styles.container}>
                <div className={styles.counter}>
                    <Image
                        width={800}
                        height={500}
                        src="/images/cloudinator-logo.jpg"
                        alt=" "
                        unoptimized={true}
                    />
                </div>
            </div>
        </>
    )
}


export default function MyApp() {
    return <MyButton />
}