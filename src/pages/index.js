import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import TopSection from '../components/TopSection/TopSection';
import About from '../components/About';
import Project from '../components/Project/Project';
import Timeline from '../components/Timeline/Timeline';
export default function Home() {
  return (
    <Layout>
        <Section grid>
          <TopSection />
        </Section>
          <About />
          <Timeline />
          <Project />
    </Layout>
  )
}
