import { createRoot } from "react-dom/client";
import React from "react";
// import AutoIncrementCounter from "./Auto-Increment-Counter/AutoIncrementCounter";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<InfiniteScroll/>);
} else {
  console.error("Element with id 'root' not found in the DOM.");
}
