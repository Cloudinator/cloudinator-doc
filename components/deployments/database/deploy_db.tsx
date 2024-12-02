// Example from https://beta.reactjs.org/learn

import { useState } from 'react'
import styles from '../../counters.module.css'
import Image from 'next/image'


function MyButton() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }
    return (
        <>
            <div>1. Choose the database: </div>
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
            <div>2. Enter the required information</div>
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
            <div>3. Copy the important information to connect to your database</div>
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
