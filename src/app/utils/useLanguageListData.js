"use client";
import { useEffect, useState } from "react";

const useLanguageListData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();
  const [languageListData, setLanguageListData] = useState([]);

  const fetchlanguageListData = async () => {
    try {
      setIsLoading(true);
      const languageListResponse = await fetch(`/api/language-list`);
      const languageListData = await languageListResponse.json();
      setLanguageListData(languageListData);
      setIsLoading(false);
    } catch (error) {
      setLanguageListData([]);
      setIsError(true);
      setError(error instanceof Error ? error : new Error("No Language Data"));
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchlanguageListData();
  }, []);
  return { isLoading, isError, error, languageListData };
};

export default useLanguageListData;
