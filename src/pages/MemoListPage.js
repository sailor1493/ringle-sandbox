import { useState } from "react";
import { Accordion } from "@mui/material/Accordion";
import { AccordionSummary } from "@mui/material/AccordionSummary";
import { ExpandMoreIcon } from "@mui/icons-material/ExpandMore";

const MemoListPage = () => {
  // TODO: data fetch from local storage
  const [memoList, setMemoList] = useState(() => {
    const saved = localStorage.getItem("memoList");
    return JSON.parse(saved) || [];
  });

  const renderMemo = (x) => {
    return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panella-content"
          id="panella-header"
        />
      </Accordion>
    );
  };

  return (
    <>
      memo list page
      <br />
      {memoList.map((x) => {
        return (
          <>
            title: {x.title}
            <br />
            content: {x.content}
          </>
        );
      })}
    </>
  );
};

export default MemoListPage;
