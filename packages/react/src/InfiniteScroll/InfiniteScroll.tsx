// @ts-nocheck
import React, { useCallback, useState, useRef, useEffect } from 'react';

const fetchData = async (query, pageNumber, controller) => {
  try {
    const response = await fetch(
      'https://openlibrary.org/search.json?' +
        new URLSearchParams({
          q: query,
          page: pageNumber,
        }),
      { signal: controller.signal }
    );
    const result = await response.json();
    return result.docs;
  } catch (error) {
    throw error;
  }
};

export default function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const controllerRef = useRef(null);
  const pageNumberRef = useRef(1);
  // const observerRef = useRef(null);

  // const lastElementObserver = useCallback((domNode) => {
  //   // remove the existing observer first
  //   if (observerRef.current) observerRef.current.disconnect();

  //   // create a new observer
  //   observerRef.current = new IntersectionObserver((entries) => {
  //     if (entries[0].isIntersecting) {
  //       pageNumberRef.current+=1;
  //       getData(query, pageNumberRef.current);
  //     }
  //   });

  //   // attach this observer
  //   if (domNode) {
  //     observerRef.current.observe(domNode)
  //   }
  // },[query]);

  useEffect(() => {
    getData(query, pageNumberRef.current);
  }, [query]);

  // useEffect(() => {
  //   return () => {
  //     if (controllerRef.current) controllerRef.current.abort();
  //     if (observerRef.current) observerRef.current.disconnect();
  //   };
  // }, []);

  const handleInputChange = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const getData = useCallback(async (query, page) => {
    // remove any existing request
    if (controllerRef.current) controllerRef.current.abort();

    // create new request
    controllerRef.current = new AbortController();

    try {
      const newData = await fetchData(query, page, controllerRef.current);
      setData((prevData) => [...prevData, ...newData]);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <input type="text" value={query} onChange={handleInputChange} />
      <div>
        <ul>
          {data.map(({ title }, idx) => {
            if (idx === data.length - 1) {
              return <li key={idx}>{title}</li>;
            }
            return <li key={idx}>{title}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
