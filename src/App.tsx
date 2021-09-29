import './assets/styles/global.css';
import { Divider } from './components/Divider';

import {
  HeroSection,
  Description,
  NewslleterSection,
  FeatureDemoSection,
  PrinciplesSection,
  ComingSoonSection,
  FooterSection,
} from './sections';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Description />
      <Divider />
      <NewslleterSection />
      <Divider />
      <FeatureDemoSection />
      <Divider />
      <PrinciplesSection />
      <Divider />
      <ComingSoonSection />
      <FooterSection />
    </div>
  );
}

export default App;
