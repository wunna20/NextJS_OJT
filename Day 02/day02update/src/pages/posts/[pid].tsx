import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const { pid } = router.query

    console.log('pid', pid)

    return <p>Post: {pid}</p>
}

export default Post