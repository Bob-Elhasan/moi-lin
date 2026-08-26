import Header from './components/Header';
import Hero from './components/Hero';
import ProofBar from './components/ProofBar';
import StoryInstinct from './components/StoryInstinct';
import StoryCommitment from './components/StoryCommitment';
import NameSection from './components/NameSection';
import CategoryTiles from './components/CategoryTiles';
import Pillars from './components/Pillars';
import StoryHorizon from './components/StoryHorizon';
import ServiceStrip from './components/ServiceStrip';
import Collection from './components/Collection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import StickyMobileCta from './components/StickyMobileCta';
import StitchSeam from './components/StitchSeam';
import { useScrollState } from './hooks/useScroll';

export default function App() {
  const { condensed, pastGrid, progress } = useScrollState();

  return (
    <>
      <Header condensed={condensed} progress={progress} />
      <Hero />
      <ProofBar surface="ecru" />
      <StoryInstinct />
      <StitchSeam background="var(--chocolate)" />
      <StoryCommitment />
      <StitchSeam background="var(--ecru)" />
      <NameSection />
      <StitchSeam background="var(--ivory)" />
      <CategoryTiles />
      <StitchSeam background="var(--ecru)" />
      <Pillars />
      <StitchSeam background="var(--chocolate)" />
      <StoryHorizon />
      <StitchSeam background="var(--ivory)" />
      <ServiceStrip />
      <Collection />
      <StitchSeam background="var(--chocolate)" />
      <Newsletter />
      <Footer />
      <StickyMobileCta visible={pastGrid} />
    </>
  );
}
