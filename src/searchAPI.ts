import { useState } from "react";
import axios from "axios";

export type Result = {
  id: string;
  question: string;
};

const useNeuralSearch = () => {
  const [results, setResults] = useState<Result[]>(null);
  const [loading, setLoading] = useState(false);

  const search = (query: string) => {
    const config = {
      alias: "WHO",
      apiKey: "e3f2a32283d4c82fc021c9da7e6bc0f9",
      experienceKey: "who-answers",
      businessId: "3176091",
      verticalKey: "faqs",
      locale: "en"
    };

    setLoading(true);
    setResults([]);
    axios
      .get(`https://liveapi.yext.com/v2/accounts/me/answers/vertical/query`, {
        params: {
          api_key: config.apiKey,
          experienceKey: config.experienceKey,
          locale: config.locale,
          verticalKey: config.verticalKey,
          v: "20200101",
          input: query
        }
      })
      .then((results) => {        
        setLoading(false);
        setResults(
          results.data.response.results.map((r) => {
            return {
              id: r.data.id,
              question: r.data.name
            };
          })
        );
      });
  };
  return {
    search,
    loading,
    results
  };
};

const useKeywordSearch = () => {
  const [results, setResults] = useState<Result[]>(null);
  const [loading, setLoading] = useState(false);

  const search = (query: string) => {
    const config = {
      alias: "WHO",
      apiKey: "e3f2a32283d4c82fc021c9da7e6bc0f9",
      experienceKey: "who-answers",
      businessId: "3176091",
      verticalKey: "faqs",
      locale: "en"
    };

    setLoading(true);

    axios
      .get(`https://liveapi.yext.com/v2/accounts/me/answers/vertical/query`, {
        params: {
          api_key: config.apiKey,
          experienceKey: config.experienceKey,
          locale: config.locale,
          verticalKey: config.verticalKey,
          v: "20200101",
          input: query
        }
      })
      .then((results) => {        
        setLoading(false);
        setResults(
          results.data.response.results.map((r) => {
            return {
              id: r.data.id,
              question: r.data.name
            };
          })
        );
      });
  };
  return {
    search,
    loading,
    results
  };
};

export { useNeuralSearch, useKeywordSearch };
