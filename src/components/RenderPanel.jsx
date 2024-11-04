import { useState } from "react";
import PrimitiveType from "./render_components/PrimitiveType";

const trace = [
  {
    function: "main",
    heap: {},
    line: 14,
    stack_frames: [
      {
        function: "main",
        locals_variables: [
          {
            address: "0x7fffffffdd3c",
            data_type: "int",
            name: "first_number",
            value: "32767",
          },
          {
            address: "0x7fffffffdd38",
            data_type: "int",
            name: "second_number",
            value: "-135568572",
          },
          {
            address: "0x7fffffffdd34",
            data_type: "int",
            name: "sum",
            value: "32767",
          },
        ],
      },
    ],
    stdout: "",
  },
  {
    function: "main",
    heap: {},
    line: 15,
    stack_frames: [
      {
        function: "main",
        locals_variables: [
          {
            address: "0x7fffffffdd3c",
            data_type: "int",
            name: "first_number",
            value: "70",
          },
          {
            address: "0x7fffffffdd38",
            data_type: "int",
            name: "second_number",
            value: "-135568572",
          },
          {
            address: "0x7fffffffdd34",
            data_type: "int",
            name: "sum",
            value: "32767",
          },
        ],
      },
    ],
    stdout: "",
  },
  {
    function: "main",
    heap: {},
    line: 17,
    stack_frames: [
      {
        function: "main",
        locals_variables: [
          {
            address: "0x7fffffffdd3c",
            data_type: "int",
            name: "first_number",
            value: "70",
          },
          {
            address: "0x7fffffffdd38",
            data_type: "int",
            name: "second_number",
            value: "30",
          },
          {
            address: "0x7fffffffdd34",
            data_type: "int",
            name: "sum",
            value: "32767",
          },
        ],
      },
    ],
    stdout: "",
  },
  {
    function: "add",
    heap: {},
    line: 6,
    stack_frames: [
      {
        function: "add",
        locals_variables: [
          {
            address: "0x7fffffffdd0c",
            data_type: "int",
            name: "a",
            value: "70",
          },
          {
            address: "0x7fffffffdd08",
            data_type: "int",
            name: "b",
            value: "30",
          },
          {
            address: "0x7fffffffdd1c",
            data_type: "int",
            name: "num1",
            value: "32767",
          },
          {
            address: "0x7fffffffdd18",
            data_type: "int",
            name: "num2",
            value: "-135568854",
          },
        ],
      },
      {
        function: "main",
        locals_variables: [
          {
            address: "0x7fffffffdd3c",
            data_type: "int",
            name: "first_number",
            value: "70",
          },
          {
            address: "0x7fffffffdd38",
            data_type: "int",
            name: "second_number",
            value: "30",
          },
          {
            address: "0x7fffffffdd34",
            data_type: "int",
            name: "sum",
            value: "32767",
          },
        ],
      },
    ],
    stdout: "",
  },
  {
    function: "add",
    heap: {},
    line: 7,
    stack_frames: [
      {
        function: "add",
        locals_variables: [
          {
            address: "0x7fffffffdd0c",
            data_type: "int",
            name: "a",
            value: "70",
          },
          {
            address: "0x7fffffffdd08",
            data_type: "int",
            name: "b",
            value: "30",
          },
          {
            address: "0x7fffffffdd1c",
            data_type: "int",
            name: "num1",
            value: "70",
          },
          {
            address: "0x7fffffffdd18",
            data_type: "int",
            name: "num2",
            value: "-135568854",
          },
        ],
      },
      {
        function: "main",
        locals_variables: [
          {
            address: "0x7fffffffdd3c",
            data_type: "int",
            name: "first_number",
            value: "70",
          },
          {
            address: "0x7fffffffdd38",
            data_type: "int",
            name: "second_number",
            value: "30",
          },
          {
            address: "0x7fffffffdd34",
            data_type: "int",
            name: "sum",
            value: "32767",
          },
        ],
      },
    ],
    stdout: "",
  },
  {
    function: "add",
    heap: {},
    line: 8,
    stack_frames: [
      {
        function: "add",
        locals_variables: [
          {
            address: "0x7fffffffdd0c",
            data_type: "int",
            name: "a",
            value: "70",
          },
          {
            address: "0x7fffffffdd08",
            data_type: "int",
            name: "b",
            value: "30",
          },
          {
            address: "0x7fffffffdd1c",
            data_type: "int",
            name: "num1",
            value: "70",
          },
          {
            address: "0x7fffffffdd18",
            data_type: "int",
            name: "num2",
            value: "30",
          },
        ],
      },
      {
        function: "main",
        locals_variables: [
          {
            address: "0x7fffffffdd3c",
            data_type: "int",
            name: "first_number",
            value: "70",
          },
          {
            address: "0x7fffffffdd38",
            data_type: "int",
            name: "second_number",
            value: "30",
          },
          {
            address: "0x7fffffffdd34",
            data_type: "int",
            name: "sum",
            value: "32767",
          },
        ],
      },
    ],
    stdout: "",
  },
  {
    function: "add",
    heap: {},
    line: 9,
    stack_frames: [
      {
        function: "add",
        locals_variables: [
          {
            address: "0x7fffffffdd0c",
            data_type: "int",
            name: "a",
            value: "70",
          },
          {
            address: "0x7fffffffdd08",
            data_type: "int",
            name: "b",
            value: "30",
          },
          {
            address: "0x7fffffffdd1c",
            data_type: "int",
            name: "num1",
            value: "70",
          },
          {
            address: "0x7fffffffdd18",
            data_type: "int",
            name: "num2",
            value: "30",
          },
        ],
      },
      {
        function: "main",
        locals_variables: [
          {
            address: "0x7fffffffdd3c",
            data_type: "int",
            name: "first_number",
            value: "70",
          },
          {
            address: "0x7fffffffdd38",
            data_type: "int",
            name: "second_number",
            value: "30",
          },
          {
            address: "0x7fffffffdd34",
            data_type: "int",
            name: "sum",
            value: "32767",
          },
        ],
      },
    ],
    stdout: "",
  },
  {
    function: "main",
    heap: {},
    line: 19,
    stack_frames: [
      {
        function: "main",
        locals_variables: [
          {
            address: "0x7fffffffdd3c",
            data_type: "int",
            name: "first_number",
            value: "70",
          },
          {
            address: "0x7fffffffdd38",
            data_type: "int",
            name: "second_number",
            value: "30",
          },
          {
            address: "0x7fffffffdd34",
            data_type: "int",
            name: "sum",
            value: "100",
          },
        ],
      },
    ],
    stdout: "",
  },
  {
    function: "main",
    heap: {},
    line: 21,
    stack_frames: [
      {
        function: "main",
        locals_variables: [
          {
            address: "0x7fffffffdd3c",
            data_type: "int",
            name: "first_number",
            value: "70",
          },
          {
            address: "0x7fffffffdd38",
            data_type: "int",
            name: "second_number",
            value: "30",
          },
          {
            address: "0x7fffffffdd34",
            data_type: "int",
            name: "sum",
            value: "100",
          },
        ],
      },
    ],
    stdout: "sum of 70 and 30 is: 100\n",
  },
];

/* eslint-disable react/prop-types */
const RenderPanel = ({ closePanel }) => {
  const [step, setStep] = useState(0);
  const [showAddresses, setShowAddresses] = useState(false)

  return (
    <div className="flex h-full w-3/5 flex-col border-l border-l-light-platinum dark:border-l-dark-charcoal">
      <div className="flex justify-between border-b border-b-light-platinum px-4 py-1 text-light-cornflowerblue dark:border-b-dark-charcoal dark:text-dark-pigmentgreen">
        <span className="text-xl font-bold">Visualization</span>
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          className="inline-flex h-auto items-center justify-center rounded-full bg-transparent px-4 hover:bg-light-cornflowerblue hover:text-light-white hover:outline-0 dark:hover:bg-dark-pigmentgreen"
        >
          Previous Step
        </button>
        <button
          onClick={() => setStep(Math.min(trace.length - 1, step + 1))}
          className="inline-flex h-auto items-center justify-center rounded-full bg-transparent px-4 hover:bg-light-cornflowerblue hover:text-light-white hover:outline-0 dark:hover:bg-dark-pigmentgreen"
        >
          Next Step
        </button>
        <button
          onClick={() => setShowAddresses(!showAddresses)}
          className="inline-flex h-auto items-center justify-center rounded-full bg-transparent px-4 hover:bg-light-cornflowerblue hover:text-light-white hover:outline-0 dark:hover:bg-dark-pigmentgreen"
        >
          {showAddresses ? "Hide Memory Addresses" : "Show Memory Addresses"}
        </button>
        <button
          onClick={() => closePanel(null)}
          className="inline-flex h-auto items-center justify-center rounded-full bg-transparent px-4 hover:bg-light-cornflowerblue hover:text-light-white hover:outline-0 dark:hover:bg-dark-pigmentgreen"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div className="relative flex-1">
        <div className="absolute inset-0 overflow-y-auto border-b border-b-light-platinum bg-light-white dark:border-b-dark-charcoal dark:bg-dark-gunmetal">
          <div className="whitespace-pre-wrap p-5 font-mono">
            <div className="flex justify-between gap-8">
              <div className="flex flex-col gap-3">
                <h2 className="text-center">Stack</h2>
                {trace[step].stack_frames.map((frame, frameIndex) => (
                  <div
                    key={frameIndex}
                    className="flex flex-col gap-2 rounded-lg bg-light-platinum p-2 dark:bg-dark-charcoal"
                  >
                    <h2>{frame.function}</h2>
                    {frame.locals_variables.map((variable, varIndex) => (
                      <PrimitiveType
                        key={varIndex}
                        dataType={variable.data_type}
                        name={variable.name}
                        value={variable.value}
                        address={variable.address}
                        showAddress={showAddresses}
                      />
                    ))}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderPanel;
