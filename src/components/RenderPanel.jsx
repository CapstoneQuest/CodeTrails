/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import PrimitiveType from "./render_components/PrimitiveType";
import ArrayType from "./render_components/ArrayType";
import PrimitiveHeap from "./render_components/PrimitiveHeap";
import ObjectHeap from "./render_components/ObjectHeap";
import ObjectType from "./render_components/ObjectType";

const RenderPanel = ({
  closePanel,
  setProgress,
  traceResult,
  setCurrentLine,
}) => {
  const [step, setStep] = useState(0);
  const [showAddresses, setShowAddresses] = useState(false);

  const primitiveRegex = /^(int|float|char|double|long|short|bool|void)$/;
  const objectRegex = /^[a-zA-Z][a-zA-Z0-9_]*$/;
  const pointerRegex = /^[a-zA-Z_][a-zA-Z0-9_]*\s*\*+$/;
  const referenceRegex = /^[a-zA-Z_][a-zA-Z0-9_]*\s*\&+$/;
  const arrayRegex = /^[a-zA-Z_][a-zA-Z0-9_]* \[(\d+)\]$/;

  useEffect(() => {
    if (traceResult[step]) {
      setCurrentLine(parseInt(traceResult[step].line));
    }
  }, [step]);

  return (
    <div className="flex h-full w-3/5 flex-col border-l border-l-light-platinum dark:border-l-dark-charcoal">
      <div className="flex justify-between border-b border-b-light-platinum px-4 py-1 text-light-cornflowerblue dark:border-b-dark-charcoal dark:text-dark-pigmentgreen">
        <span className="text-xl font-bold">Visualization</span>
        {/* :::::::::::: VISUALIZATION TOOLBAR :::::::::::: */}
        <div className="border-1 mx-64 flex h-auto items-center justify-center rounded-xl border border-light-azureblue p-4 py-px dark:border-dark-pigmentgreen">
          {/* :::::::::::: FIRST STEP :::::::::::: */}
          <button
            onClick={() => setStep(0)}
            className="inline-flex h-auto items-center justify-center rounded-full bg-transparent px-2 hover:bg-light-cornflowerblue hover:text-light-white hover:outline-0 dark:hover:bg-dark-pigmentgreen"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                stroke="currentColor"
                strokeWidth="1"
              ></path>
            </svg>
          </button>
          {/* :::::::::::: PREVIOUS STEP :::::::::::: */}
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            className="inline-flex h-auto items-center justify-center rounded-full bg-transparent px-2 hover:bg-light-cornflowerblue hover:text-light-white hover:outline-0 dark:hover:bg-dark-pigmentgreen"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                stroke="currentColor"
                strokeWidth="1"
              ></path>
            </svg>
          </button>
          {/* :::::::::::: SHOW MEMEORY ADDRESS :::::::::::: */}
          <button
            onClick={() => setShowAddresses(!showAddresses)}
            className="inline-flex h-auto items-center justify-center rounded-full bg-transparent px-2 hover:bg-light-cornflowerblue hover:text-light-white hover:outline-0 dark:hover:bg-dark-pigmentgreen"
          >
            {showAddresses ? (
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  stroke="currentColor"
                  strokeWidth="0.7"
                ></path>
              </svg>
            ) : (
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  stroke="currentColor"
                  strokeWidth="0.7"
                ></path>
              </svg>
            )}
          </button>
          {/* :::::::::::: NEXT STEP :::::::::::: */}
          <button
            onClick={() => setStep(Math.min(traceResult.length - 1, step + 1))}
            className="inline-flex h-auto items-center justify-center rounded-full bg-transparent px-2 hover:bg-light-cornflowerblue hover:text-light-white hover:outline-0 dark:hover:bg-dark-pigmentgreen"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                stroke="currentColor"
                strokeWidth="1"
              ></path>
            </svg>
          </button>
          {/* :::::::::::: LAST STEP :::::::::::: */}
          <button
            onClick={() => setStep(traceResult.length - 1)}
            className="inline-flex h-auto items-center justify-center rounded-full bg-transparent px-2 hover:bg-light-cornflowerblue hover:text-light-white hover:outline-0 dark:hover:bg-dark-pigmentgreen"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                stroke="currentColor"
                strokeWidth="1"
              ></path>
            </svg>
          </button>
        </div>
        <button
          onClick={() => {
            closePanel(null);
            setProgress(0);
          }}
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
              stroke="currentColor"
              strokeWidth="1"
            ></path>
          </svg>
        </button>
      </div>
      <div className="relative flex-1">
        <div className="absolute inset-0 overflow-y-auto border-b border-b-light-platinum bg-light-white dark:border-b-dark-charcoal dark:bg-dark-gunmetal">
          <div className="whitespace-pre-wrap p-5 font-mono">
            <div className="flex justify-between gap-20">
              <div className="flex flex-col gap-3">
                <h2 className="text-right">Stack</h2>
                {traceResult[step].stack_frames.map((frame, frameIndex) => (
                  <div
                    key={frameIndex}
                    className="flex flex-col gap-2 rounded-lg bg-light-platinum p-2 dark:bg-dark-charcoal"
                  >
                    <h2>
                      {frame.function}
                      {"()"}
                    </h2>
                    {frame.local_variables.map((variable, varIndex) =>
                      primitiveRegex.test(variable.data_type) ? (
                        <PrimitiveType
                          key={varIndex}
                          dataType={variable.data_type}
                          name={variable.name}
                          value={variable.value}
                          address={variable.address}
                          showAddress={showAddresses}
                        />
                      ) : arrayRegex.test(variable.data_type) ? (
                        <ArrayType
                          key={varIndex}
                          dataType={variable.data_type}
                          name={variable.name}
                          values={variable.value}
                          address={variable.address}
                          showAddress={showAddresses}
                        />
                      ) : pointerRegex.test(variable.data_type) ? (
                        <PrimitiveType
                          key={varIndex}
                          dataType={variable.data_type}
                          name={variable.name}
                          value={variable.value}
                          address={variable.address}
                          showAddress={showAddresses}
                        />
                      ) : objectRegex.test(variable.data_type) ? (
                        <ObjectType
                          key={varIndex}
                          dataType={variable.data_type}
                          name={variable.name}
                          members={variable.value}
                          address={variable.address}
                          showAddress={showAddresses}
                        />
                      ) : referenceRegex.test(variable.data_type) ? (
                        <PrimitiveType
                          key={varIndex}
                          dataType={variable.data_type}
                          name={variable.name}
                          value={variable.value}
                          address={variable.address}
                          showAddress={showAddresses}
                        />
                      ) : (
                        <></>
                      )
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-left">Heap</h2>
                {Object.entries(traceResult[step].heap).map(
                  ([address, data], heapIndex) => (
                    <div
                      key={heapIndex}
                      className="flex flex-col gap-2 rounded-lg bg-light-platinum p-2 dark:bg-dark-charcoal"
                    >
                      {primitiveRegex.test(data[0]) ? (
                        <PrimitiveHeap
                          dataType={data[0]}
                          name={""}
                          value={data[1][2]}
                          address={address}
                          showAddress={showAddresses}
                        />
                      ) : objectRegex.test(data[0]) ? (
                        <ObjectHeap
                          dataType={data[0]}
                          name={""}
                          members={data[1]}
                          address={address}
                          showAddress={showAddresses}
                        />
                      ) : (
                        <></>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderPanel;
