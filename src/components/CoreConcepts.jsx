import CoreConcept from "./CoreConcept.jsx";
import Section from "./Section.jsx";
import { CORE_CONCEPTS } from "../data.js";

const CoreConcepts = () => {
  return (
    <Section id="core-concepts" title="Core Concepts">
        <ul>
          {CORE_CONCEPTS.map((item) => {
            return (
            <CoreConcept key={item.title} {...item} />
            )
          })}
        </ul>
    </Section>
  );
};

export default CoreConcepts;