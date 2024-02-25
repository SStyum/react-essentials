import { useState } from 'react';

import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import Header from "./components/Header";
import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

function App() {

  const [tabContent, setTabContent] = useState();

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

  const EXAMPLES = {
    components: {
      title: 'Components',
      description:
        'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
      code: `
  function Welcome() {
    return <h1>Hello, World!</h1>;
  }`,
    },
    jsx: {
      title: 'JSX',
      description:
        'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
      code: `
  <div>
    <h1>Welcome {userName}</h1>
    <p>Time to learn React!</p>
  </div>`,
    },
    props: {
      title: 'Props',
      description:
        'Components accept arbitrary inputs called props. They are like function arguments.',
      code: `
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }`,
    },
    state: {
      title: 'State',
      description:
        'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
      code: `
  function Counter() {
    const [isVisible, setIsVisible] = useState(false);
  
    function handleClick() {
      setIsVisible(true);
    }
  
    return (
      <div>
        <button onClick={handleClick}>Show Details</button>
        {isVisible && <p>Amazing details!</p>}
      </div>
    );
  }`,
    },
  };

  const handleSelect = (selectedButton) => {
    setTabContent(selectedButton);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((item) => {
            return (
            <CoreConcept key={item.title} {...item} />
            )
          })}
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')} isSelected={tabContent === "components"}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')} isSelected={tabContent === "jsx"}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')} isSelected={tabContent === "props"}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')} isSelected={tabContent === "state"}>State</TabButton>
          </menu>
          {tabContent ? (<div id="tab-content">
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>
                {EXAMPLES[tabContent].code}
              </code>
            </pre>
          </div>) : <p>Please select a topic.</p>}
        </section>
      </main>
    </div>
  );
}

export default App;
