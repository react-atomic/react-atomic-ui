import React from 'react';
import {PageLoadProgressHandler} from 'organism-react-progress';
import {ajaxDispatch} from 'organism-react-ajax';
import {Button} from 'react-atomic-molecule';
import {download} from 'ajax-save';

const AjaxDownloadExample = props => {
  const url =
    'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg';
  return (
    <Button
      onClick={() => {
        ajaxDispatch('ajaxGet', {
          responseType: 'blob',
          url,
          callback: (json, text, o) => {
            download(o.body, url.split('/').splice(-1)[0]);
          },
        });
      }}>
      Ajax Download
    </Button>
  );
};

export default AjaxDownloadExample;
