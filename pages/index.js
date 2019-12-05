// import Header from '../pages/comps/Header';
import Layout from './comps/MyLayout';
import Link from 'next/link';

const PostLink = props => (
    <li>
        {/* <Link href={`/post?title=${props.id}`} >
            <a>{props.title}</a>
        </Link> */}
        <Link href="/p/[id]" as ={`/p/${props.id}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)
export default function Blog(){
    return (
        <Layout>
            <h1>Blog</h1>
            <ul>
                <PostLink title="Hello Next.js" id="hello-next-js"/>
                <PostLink title="Learn Next.js is awesome" id="learn-next-js"/>
                <PostLink title="Deploy apps with Zeit" id="deploy-apps-with-zeit"/>
            </ul>
        </Layout>
    );
}
