/* @flow */
import React, { useState, useEffect } from 'react';
import type { SlateNode } from 'slate-rte';
import SlateRTE, { extractText, deserializeHTMLString, parseAsHTML, getBackgroundColor } from 'slate-rte';
import { Card, Button } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import swal from 'sweetalert';
import _ from 'lodash';
import PDFPreview from './PDFPreview';
import type { SlateContentItem } from './SlateTypes';
// $FlowFixMe
import 'bootstrap/dist/css/bootstrap.min.css';

const fileToBase64 = (file) => (
  new Promise(resolve => {
    const reader = new FileReader();
    // Read file content on file loaded event
    reader.onload = (event) => {
      // $FlowFixMe
      resolve(event.target.result);
    };

    // Convert data to base64
    reader.readAsDataURL(file);
  }));

const SAMPLE_DATA = [
  {
    text: null,
    type: 'background-color',
    borderColor: null,
    color: '#34495e',
    children: [
      {
        text: '',
      },
    ],
  },
  {
    type: 'center-align',
    children: [
      {
        bold: true,
        text: 'QDASH SCORE',
        'font-size': {
          value: 18,
        },
        'text-color': {
          color: '#ffffff',
        },
        'font-weight': {
          value: 300,
        },
      },
    ],
  },
  {
    type: 'center-align',
    children: [
      {
        bold: true,
        text: '',
        'font-size': {
          value: 22,
        },
        'text-color': {
          color: '#ffffff',
        },
        'font-weight': {
          value: 300,
        },
      },
      {
        text: null,
        type: 'variable',
        children: [
          {
            bold: true,
            text: '',
            variable: {
              variableName: 'qdash_score',
            },
            'font-size': {
              value: 22,
            },
            'text-color': {
              color: '#ffffff',
            },
            'font-weight': {
              value: 300,
            },
          },
        ],
        variableName: 'qdash_score',
      },
      {
        text: '',
      },
    ],
  },
  {
    type: 'center-align',
    children: [
      {
        text: '[0 till 100]',
        'font-size': {
          value: 16,
        },
        'text-color': {
          color: '#ffffff',
        },
      },
    ],
  },
  {
    type: 'center-align',
    children: [
      {
        text: '',
        'font-size': {
          value: 16,
        },
        'text-color': {
          color: '#ffffff',
        },
      },
    ],
  },
  {
    type: 'center-align',
    children: [
      {
        text: 'The higher the score, the worse the QoL',
        'font-size': {
          value: 14,
        },
        'text-color': {
          color: '#ffffff',
        },
      },
    ],
  },
];

const App = () => {
  const [value, setValue] = useState<Array<SlateNode>>(SAMPLE_DATA);
  const [fileMapping, setFileMapping] = useState({});
  const variables = {
    'qdash_score': '2',
    'foo': '3',
    'bar': '4',
  };
  const onFileLoad = async ({ id }) => ({ url: fileMapping[id] });

  const [showAll, setShowAll] = useState(false);

  const [htmlValue, setHTMLValue] = useState(null);
  useEffect(() => {
    const fetchHTML = (async () => {
      setHTMLValue(await parseAsHTML(value, variables, onFileLoad));
    });
    fetchHTML();
  }, [JSON.stringify(value), value, variables, onFileLoad]);

  const deserializedValue = (() => {
    try {
      return htmlValue ? deserializeHTMLString(htmlValue) : null;
    } catch (e) {
      console.log(e);
      return [];
    }
  })();
  console.log({
    text: extractText(value, variables),
    textNewLines: extractText(value, variables, true),
  })
  return (
    <div className="bg-light h-100 p-4 pb-5">
      <Button onClick={() => { setShowAll(!showAll) }}>
        Toggle All Views
      </Button>
      <div
        className="pt-1 mx-4 rounded-pill w-25"
        style={{
          backgroundColor: getBackgroundColor(value),
        }}
      />
      <div>{extractText(value, variables)}</div>
      <div className="m-3 text-large text-center font-weight-light">
        Editable
      </div>
      <Card className="m-3 shadow-sm">
        <SlateRTE
          mode="Edit"
          onFileLoad={onFileLoad}
          variables={variables}
          toolbarClassName="w-50"
          uploadFile={async (file, progress) => {

            // progress is a callback to update progress indicator
            // file contains file to uploaded
            // returns url of image from server

            // simulate an upload
            await new Promise(r => setTimeout(r, 100));
            await progress(30);
            await new Promise(r => setTimeout(r, 100));
            await progress(50);
            await new Promise(r => setTimeout(r, 100));
            await progress(70);
            await new Promise(r => setTimeout(r, 100));

            // $FlowFixMe
            const [extension]: [string] = file.name.match(/\.[0-9a-z]+$/i);
            if (extension === '.mp4') {
              return {
                type: 'URL',
                url: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
              };
            }
            const uploadFileDirectly = await swal(
              `How would you like to upload file?`,
              {
                dangerMode: true,
                buttons: ['Upload File Id', 'Upload File Directly'],
              },
            );
            const fileData = await fileToBase64(file);
            const saveFileData = () => {
              const fileId = uuid();
              setFileMapping((fileMapping) => ({
                ...fileMapping,
                [fileId]: fileData,
              }));
              return fileId;
            };
            return uploadFileDirectly
              ? {
                type: 'URL',
                url: fileData,
              } : {
                type: 'Image ID',
                id: saveFileData(),
              };
          }}
          value={_.cloneDeep(value)}
          setValue={setValue}
        />
      </Card>
      <div className="m-3 text-large text-center font-weight-light">
        Read Only
      </div>
      <Card className="m-3 shadow-sm">
        <SlateRTE variables={variables} onFileLoad={onFileLoad} mode="Read-Only" value={value} />
      </Card>
      {showAll && (
        <>
          <div className="m-3 text-large text-center font-weight-light">
            Editable with Adjusted Font Size
          </div>
          <Card className="m-3 shadow-sm">
            <SlateRTE variables={variables} onFileLoad={onFileLoad} options={{ defaultFontSizePx: 30 }} mode="Edit" value={_.cloneDeep(value)} setValue={setValue} />
          </Card>
          <div className="d-flex align-items-center w-100">
            <div className="w-100">
              <div className="m-3 text-large text-center font-weight-light">
                Minimal Read Only
              </div>
              <Card className="m-3 shadow-sm">
                <SlateRTE variables={variables} onFileLoad={onFileLoad} mode="Minimal Read-Only" value={value} />
              </Card>
            </div>
            <div className="w-100">
              <div className="m-3 text-large text-center font-weight-light">
                Minimal PDF
              </div>
              <PDFPreview variables={variables} onFileLoad={onFileLoad} value={value} mode="Minimal PDF" />
            </div>
          </div>
          <div className="d-flex align-items-center w-100">
            <div className="w-100">
              <div className="m-3 text-large text-center font-weight-light">
                PDF
              </div>
              <PDFPreview variables={variables} onFileLoad={onFileLoad} value={value} mode="PDF" />
            </div>
            <div className="w-100">
              <div className="m-3 text-large text-center font-weight-light">
                PDF (adjusted Font size)
              </div>
              <PDFPreview variables={variables} onFileLoad={onFileLoad} defaultFontSize={30} value={value} mode="PDF" />
            </div>
          </div>
          <div className="m-3 text-large text-center font-weight-light">
            HTML Parse Testing
          </div>
          <code className="m-3 card p-4 shadow-sm">{htmlValue}</code>
          <Card className="m-3 shadow-sm">
            {deserializedValue && (<SlateRTE variables={variables} onFileLoad={onFileLoad} mode="Read-Only" value={deserializedValue} />)}
            {deserializedValue == null && (<div>Loading...</div>)}
          </Card>
          <div className="m-3 text-large text-center font-weight-light">
            JSON (Converted to HTML and back to Slate)
          </div>
          <div>{JSON.stringify(deserializedValue)}</div>
          <div className="m-3 text-large text-center font-weight-light">
            JSON (Directly from Slate)
          </div>
          <div className="mt-3">{JSON.stringify(value)}</div>
        </>
      )}
    </div>
  );
}


export default App;
