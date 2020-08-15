import React from "react";
import { Result } from "./searchAPI";
import { FaChevronDown } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";

type Props = {
  title: string;
  results?: Result[];
  loading: boolean;
};
const SearchResultSet: React.FC<Props> = ({ title, results, loading }) => {
  return (
    <div className="px-2 w-full mb-8">
      <div className="flex-grow text-center text-sm uppercase text-gray-700 font-bold tracking-wider  border-b ml-2">
        {title}
      </div>
      {results &&
        !loading &&
        results
          .filter((r, index) => index < 5)
          .map(r => {
            return (
              <div
                key={r.id}
                className="px-2 py-2 border-b flex items-center hover:bg-gray-200"
              >
                <div className="flex-grow">{r.question}</div>
                <FaChevronDown className="text-gray-500 ml-2 flex-none" />
              </div>
            );
          })}
      {results && !loading && results.length === 0 && (
        <div className="italic text-gray-600 text-center mt-2">No results</div>
      )}
      {loading && (
        <div className="text-center py-16 text-blue-400">
          <ClipLoader />
        </div>
      )}
    </div>
  );
};

export default SearchResultSet;
