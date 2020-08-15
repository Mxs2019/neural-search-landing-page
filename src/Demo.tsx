import React, { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import { useNeuralSearch, useKeywordSearch } from "./searchAPI";
import SearchResultSet from "./SearchResultSet";

type Props = {};
const Demo: React.FC<Props> = () => {
  const [query, setQuery] = useState("");
  const neuralSearch = useNeuralSearch();
  const keywordSearch = useKeywordSearch();

  const suggestions = [
    "is there a vaccine on the way?",
    "can I still go golfing?",
    "what surfaces do I need to disenfect",
    "does HIV cause complications?"
  ];

  const runSearch = (query: string) => {
    setQuery(query);
    neuralSearch.search(query);
    keywordSearch.search(query);
  };

  useEffect(() => {
    runSearch(suggestions[0]);
    //@ts-ignore
  }, []);

  return (
    <div
      className="bg-gray-100 py-4"
      style={{ boxShadow: "inset 0 0 9px 1px rgb(0 0 0 / 4%)" }}
    >
      <div className="text-center text-gray-600 uppercase mx-4 py-1 mb-4 text-sm tracking-wider font-bold">
        Keyword Search vs. Neural Search Demo
      </div>
      <div className="max-w-6xl mx-auto">
        <form
          onSubmit={e => {
            e.preventDefault();
            runSearch(query);
          }}
          className="px-4"
        >
          <div className="max-w-lg border rounded-full py-2 pl-6 pr-3 hover:shadow focus-within:shadow-lg flex items-center mx-auto bg-white">
            <input
              onChange={e => setQuery(e.target.value)}
              value={query}
              placeholder="Enter a question..."
              className="outline-none flex-grow text-lg"
            />
            <MdSearch className="text-3xl text-blue-500" />
          </div>
          <div className="flex flex-wrap mt-4 justify-center">
            {suggestions.map(s => {
              return (
                <div
                  key={s}
                  onClick={() => runSearch(s)}
                  className="mr-4 px-4 py-2 border rounded-full hover:bg-white cursor-pointer mb-2 flex text-sm items-center"
                >
                  <MdSearch className="text-gray-500 text-lg" />
                  {s}
                </div>
              );
            })}
          </div>
        </form>
        <div className="flex mt-8 flex-col md:flex-row">
          <SearchResultSet title="Keyword Search" {...keywordSearch} />
          <SearchResultSet title="Neural Search" {...neuralSearch} />
        </div>
      </div>
    </div>
  );
};

export default Demo;
