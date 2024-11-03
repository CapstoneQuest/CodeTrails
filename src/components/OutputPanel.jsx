/* eslint-disable react/prop-types */
const OutputPanel = ({ closePanel, outputContent }) => {
  const [outContent, setOutContent] = outputContent;

  function closeAndResetPanel() {
    closePanel(null);

    setOutContent({
      stdout: null,
      stderr: null,
      exit_code: null,
      status: null,
      time: null,
    });
  }

  return (
    <div className="flex h-1/2 w-full flex-col border-b border-t border-b-light-platinum border-t-light-platinum dark:border-b-dark-charcoal dark:border-t-dark-charcoal">
      <div className="flex justify-between border-b border-b-light-platinum px-4 py-1 text-light-cornflowerblue dark:border-b-dark-charcoal dark:text-dark-pigmentgreen">
        <span className="text-xl font-bold">Output</span>
        <button
          onClick={closeAndResetPanel}
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
        <div className="absolute inset-0 overflow-y-auto bg-light-white dark:bg-dark-gunmetal">
          <div
            className={`${outContent.exit_code !== 0 ? "text-red-600" : ""} whitespace-pre-wrap p-5 font-mono`}
          >
            {outContent.exit_code === 0 ? outContent.stdout : outContent.stderr}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutputPanel;
