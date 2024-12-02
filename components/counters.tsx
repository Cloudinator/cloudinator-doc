// Example from https://beta.reactjs.org/learn

import { useState } from 'react'
import styles from './counters.module.css'
import Image from 'next/image'
import Link from 'next/link'


function MyButton() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }
    return (
        <>
            <div className={styles.container}>
                <span className={styles.text}>Deploy Frontend</span>
                <div className={styles.counter}>
                    <Link href={'/deployment/frontend'}>
                        <Image
                            width={800}
                            height={500}
                            src="/images/cloudinator-logo.jpg"
                            alt=""
                            unoptimized={true}
                        />
                    </Link>
                </div>

                <span className={styles.text}>Deploy Backend</span>
                <div className={styles.counter}>
                    <div>
                        <Link href={'/deployment/backend'}>
                            <Image
                                width={800}
                                height={500}
                                src="/images/cloudinator-logo.jpg"
                                alt=""
                                unoptimized={true}
                            />
                        </Link>
                    </div>
                </div>

                <span className={styles.text}>Deploy Database</span>
                <div className={styles.counter}>
                    <div>
                        <Link href={'/deployment/database'}>
                            <Image
                                width={800}
                                height={500}
                                src="/images/cloudinator-logo.jpg"
                                alt=""
                                unoptimized={true}
                            />
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}


export default function MyApp() {
    return <MyButton />
}