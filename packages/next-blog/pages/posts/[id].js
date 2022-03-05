import Head from 'next/head'
import Date from '../../components/date'
import Layout from '../../components/layout'
import { getAllPostsIds, getPostData } from '../../lib/posts'

import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData, data }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <h2>dato del servidor {data}</h2>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostsIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const data = await fetch('http://192.168.1.57:8000/users').then(res => res.text())
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
      data,
    }
  }
}