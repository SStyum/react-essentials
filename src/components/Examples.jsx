import { useState } from "react";

import { EXAMPLES } from "../data";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx"
import Tabs from "./Tabs.jsx";

const Examples = () => {

    const [selectedTopic, setSelectedTopic] = useState();

    const handleSelect = (selectedButton) => {
      setSelectedTopic(selectedButton);
    };

    return (
        <Section id="examples" title="Examples">
            <Tabs 
            buttons={
                <>
                    <TabButton onSelect={() => handleSelect('components')} isSelected={selectedTopic === "components"}>Components</TabButton>
                    <TabButton onSelect={() => handleSelect('jsx')} isSelected={selectedTopic === "jsx"}>JSX</TabButton>
                    <TabButton onSelect={() => handleSelect('props')} isSelected={selectedTopic === "props"}>Props</TabButton>
                    <TabButton onSelect={() => handleSelect('state')} isSelected={selectedTopic === "state"}>State</TabButton>
                </>
            }>
            {selectedTopic ? (<div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                    {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>) : <p>Please select a topic.</p>}
            </Tabs>
      </Section>
    );
  };
  
  export default Examples;