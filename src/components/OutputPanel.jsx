/* eslint-disable react/prop-types */
import * as ScrollArea from "@radix-ui/react-scroll-area";

const TAGS = Array.from({ length: 15 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

const OutputPanel = ({ setShowOutputPanel }) => {
  return (
    <div className="flex-shrink-1 h-1/2 w-full overflow-hidden">
      <div className="flex justify-between border-b border-b-light-platinum px-4 py-1 text-light-cornflowerblue dark:border-b-dark-charcoal dark:text-dark-pigmentgreen">
        <span className="text-xl font-bold">Output</span>
        <button
          onClick={() => setShowOutputPanel(false)}
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
      <ScrollArea.Root className="size-full overflow-hidden border-b border-b-light-platinum bg-light-white px-4 dark:border-b-dark-charcoal dark:bg-dark-gunmetal">
        <ScrollArea.Viewport className="size-full">
          <div className="px-5 py-[15px]">
            <div className="text-violet11 text-[15px] font-medium leading-[18px]">
              Tags
            </div>
            {TAGS.map((tag) => (
              <div
                className="border-t-mauve6 text-mauve12 mt-2.5 border-t pt-2.5 text-[13px] leading-[18px]"
                key={tag}
              >
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex touch-none select-none bg-transparent p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
          orientation="vertical"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-full bg-light-cornflowerblue before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-11 before:min-w-11 before:-translate-x-1/2 before:-translate-y-1/2 dark:bg-dark-pigmentgreen" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </div>
  );
};

export default OutputPanel;
