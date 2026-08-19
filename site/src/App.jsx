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
import { useScrollState } from './hooks/useScroll';

export default function App() {
  const { condensed, pastGrid } = useScrollState();

  return (
    <>
      <Header condensed={condensed} />
      <Hero />
      <ProofBar surface="ecru" />
      <StoryInstinct />
      <StoryCommitment />
      <NameSection />
      <CategoryTiles />
      <Pillars />
      <StoryHorizon />
      <ServiceStrip />
      <Collection />
      <Newsletter />
      <Footer />
      <StickyMobileCta visible={pastGrid} />
    </>
  );
}
