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
            <div >Go to project dashboard and click on the project that you've just created</div>
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
            <div>After that, you will see tabs of the project</div>
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
            <div>Overview : is the details of your project (access your application with the url here)</div>
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
            <div>Resource : showing your code within the project</div>
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
            <div>Activities : showing you your logs of each build</div>
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
            <div>Report : list down all of your vulnerabilities</div>
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
            <div>Setting : place for editing your project</div>
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
