import React from "react";
import { PageLoadProgressHandler } from "organism-react-progress";
import { ajaxDispatch } from "organism-react-ajax";
import { Button } from "react-atomic-molecule";

const PageLoadProgressHandlerExample = (props) => {
  let url =
    "https://raw.githubusercontent.com/react-atomic/react-atomic-ui/master/README.md";
  return (
    <div>
      <PageLoadProgressHandler ajax={true} />

      <Button
        onClick={() => {
          ajaxDispatch({
            type: "ajaxGet",
            params: {
              url: url,
              callback: (json, text, o) => {
                alert(text);
              },
            },
          });
        }}
      >
        Call Ajax
      </Button>
    </div>
  );
};

export default PageLoadProgressHandlerExample;
