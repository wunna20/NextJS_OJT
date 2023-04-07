import { GetStaticProps, InferGetStaticPropsType, GetServerSideProps, InferGetServerSidePropsType } from 'next';

type Post = {
    id: number
    title: string;
    description: string;
    price: number;
};

type Props = {
    posts: Post[];
};

export default function Post({ posts }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    return (
        <>
            <h1>Post</h1>

            <ul>
                {posts.map((post: Post, index) => (
                    <div key={index}>
                        <li>Title: {post.title}</li>
                        <li>Description: {post.description}</li>
                        <li>Price: {post.price}</li>
                    </div>
                ))}
            </ul>
        </>
    )
}


// export const getStaticProps: GetStaticProps<Props> = async () => {
//     const res = await fetch('https://fakestoreapi.com/products')
//     const data = await res.json()
//     console.log('posts')

//     return {
//         props: {
//             posts: data,
//         },
//     }

// }

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    console.log('posts')

    return {
        props: {
            posts: data,
        },
    }

}

