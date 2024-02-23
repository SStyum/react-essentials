import { useState } from 'react';

import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import Header from "./components/Header";
import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

function App() {

  const CORE_CONCEPTS = [
    {
      image: componentsImg,
      title: 'Components',
      description:
        'The core UI building block - compose the user interface by combining multiple components.',
    },
    {
      image: jsxImg,
      title: 'JSX',
      description:
        'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
    },
    {
      image: propsImg,
      title: 'Props',
      description:
        'Make components configurable (and therefore reusable) by passing input data to them.',
    },
    {
      image: stateImg,
      title: 'State',
      description:
        'React-managed data which, when changed, causes the component to re-render & the UI to update.',
    },
  ];

  const handleSelect = (selectedButton) => {
    setTabContent(selectedButton);
  };

  const [tabContent, setTabContent] = useState('Please select a concept to view.')

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((item) => {
            return (
            <CoreConcept key={item.title} title={item.title} description={item.description} image={item.image} />
            )
          })}
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
