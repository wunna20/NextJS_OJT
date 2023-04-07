import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '@/components/layout';
import { useRouter } from 'next/router'

export default function secondPost() {

    // const router = useRouter()
    // const { secondPost } = router.query

    // console.log('pid', secondPost)

    return (
        <>
            <Layout>
                <Head>
                    <title>Second Post</title>
                </Head>

                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                        console.log(`script loaded correctly, window.FB has been populated`)
                    }
                />

                <h1>Post</h1>

                <h2>
                    <Link href="/posts/firstPost">Back to home</Link>
                </h2>

                <Image
                    src="/images/test.png"
                    height={144}
                    width={144}
                    alt="Your Name"
                />
            </Layout>

        </>
    )
}