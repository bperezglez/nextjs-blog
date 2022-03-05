import Head from 'next/head'
import dynamic from 'next/dynamic'
import Layout from '../../components/layout'
import Viewport from '../../components/viewport'

import { getAllProjectsIds, getProjectData } from '../../lib/projects'

import utilStyles from '../../styles/utils.module.css'

export default function Project({ projectData }) {
  const DynamicLazyComponent = dynamic(() => import('../../modules/projects/fi-pay'))
  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{projectData.title}</h1>
        <div className={utilStyles.lightText}>
        </div>
        <Viewport>
          <DynamicLazyComponent />
        </Viewport>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllProjectsIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id)
  return {
    props: {
      projectData,
    }
  }
}