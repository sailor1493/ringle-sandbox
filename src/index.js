import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateMemoPage from "./pages/CreateMemoPage";
import MemoListPage from "./pages/MemoListPage";
import MemoPage from "./pages/MemoPage";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CreateMemoPage />} />
      <Route path="/createMemo" element={<CreateMemoPage />} />
      <Route path="/memoList" element={<MemoListPage />} />
      <Route path="/memo/:id" element={<MemoPage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
