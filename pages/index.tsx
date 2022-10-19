import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/main.module.scss';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>test</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </Head>

            <main className={styles.main}>
                <h1>Test</h1>
                <h2>Test</h2>
                <h3>Test</h3>
                <h4>Test</h4>
                <h5>Test</h5>
                <body>
                    Test
                    <div className="body-sm">Test</div>
                    <div className="body-xs">Test</div>
                </body>
            </main>
        </div>
    )
}

export default Home
