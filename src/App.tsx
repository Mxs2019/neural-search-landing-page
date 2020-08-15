import React from "react";
import "./styles.css";
import RotatingComparisons from "./RotatingComparisons";
import Demo from "./Demo";
import VectorCanvas from "./VectorCanvas";
import CallToAction from "./CallToAction";

export default function App() {
  return (
    <>
      <div className="bg-blue-600 py-2">
        <div className="text-white max-w-3xl mx-auto text-center px-4 font-medium tracking-wide">
          Answers Neural Search is Coming Soon!
        </div>
      </div>
      <div className="text-gray-800 pt-4 text-lg">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl mb-1 font-bold">Answers Neural Search</h1>

          <h2 className="text-2xl mb-2 font-medium">
            The Problem with Keyword Search
          </h2>
          <p className="mb-4">
            A good search engine needs to understand a user's intent and then
            return the most relevant results. Modern search engines (e.g.
            Google, Bing, DuckDuckGo) are really good at this but most site
            search technologies skip a key step. Instead of trying to understand
            a user’s intent, they look at the words in the search term and use
            that to compare to the results. This is called{" "}
            <span className="font-bold">Keyword Search</span> and it’s been
            around for 20+ years.
          </p>
          <p className="mb-4">
            This type of search strategy has a major flaw - humans use different
            words to often describe the same thing. For example consider the
            following examples:
          </p>
          <RotatingComparisons />
          <p className="mb-4">
            These examples all mean the exact same thing but don’t share any
            words in common. A keyword based approach will fail when trying to
            compare these two searches. Keyword based systems will often employ
            techniques like TF/IDF, synonyms, stemming and lemmatization to fix
            the issues but these hacks are time consuming, error prone and still
            doesn’t get to the intent of a user's search term.
          </p>
          <h2 className="text-2xl mb-2 font-medium mt-8">
            Introducing Neural Search
          </h2>
          <p className="mb-4">
            That’s why Yext Answers does things differently. To search through
            FAQs in the Knowledge Graph, Yext Answers uses a break-through
            technique called <span className="font-bold">Neural Search</span>.
            Neural Search uses the users’ intent rather than their words to find
            the most relevant search results.
          </p>
          <p className="mb-4">
            Rather than us telling you why it’s better - just try it out for
            yourself. Try some searches on FAQ and see which approach performs
            best!
          </p>
        </div>
        <Demo />
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl mb-2 font-medium mt-8">
            How Neural Search works
          </h2>
          <p className="mb-4">
            Neural Search embeds the search term and the FAQs in vector space
            and then finds the closests vector. This embedding process uses an
            fine-tuned version of{" "}
            <a
              className="text-blue-700 underline"
              href="https://towardsdatascience.com/bert-explained-state-of-the-art-language-model-for-nlp-f8b21a9b6270"
            >
              BERT
            </a>{" "}
            in order to embed text with similar intent near each other. You can
            visualize this process in 2D through the diagram below:
          </p>
          <VectorCanvas />
          <p className="mb-4">
            Instead of looking for overlapping kewyords, with neural search you
            measure the distance between the user's query and the FAQ. The
            closer the FAQ, the closer the intent and better the match. Neural
            Search calculates the distance to every FAQ and then sorts the FAQs
            based on that distance.
          </p>
        </div>
        <CallToAction />
      </div>
    </>
  );
}
