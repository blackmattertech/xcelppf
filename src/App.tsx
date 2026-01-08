import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { WhatIsIt } from './components/WhatIsIt';
import { Solutions } from './components/Solutions';
import { Features } from './components/Features';
import { TechStack } from './components/TechStack';
import { Integrations } from './components/Integrations';
import { Metrics } from './components/Metrics';
import { Flowchart } from './components/Flowchart';
import { Commercials } from './components/Commercials';
import { FinalCTA } from './components/FinalCTA';
import { StickyBottomBar } from './components/StickyBottomBar';

export default function App() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen text-white overflow-x-hidden">
      <Hero />
      <Problems />
      <WhatIsIt />
      <Solutions />
      <Features />
      <TechStack />
      <Integrations />
      <Metrics />
      <Flowchart />
      <Commercials />
      <FinalCTA />
      <StickyBottomBar />
    </div>
  );
}
