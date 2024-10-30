/* eslint-disable react/prop-types */
import * as Toolbar from "@radix-ui/react-toolbar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

const Menubar = ({
  changeTheme,
  setFontSize,
  setFontLigatures,
  setMinimap,
}) => {
  const [activeTheme, setActiveTheme] = useState("light");

  const [activeFontSize, setActiveFontSize] = useState("14");
  const [showMinimap, setShowMinimap] = useState(true);
  const [showFontLigatures, setShowFontLigatures] = useState(false);

  const switchTheme = (theme) => {
    setActiveTheme(theme);
    changeTheme(theme);
  };

  const changeFontSize = (size) => {
    setActiveFontSize(size.toString());

    setFontSize(size);
  };

  const toggleMinimap = (value) => {
    setShowMinimap(value);

    setMinimap(value);
  };

  const toggleFontLigatures = (value) => {
    setShowFontLigatures(value);

    setFontLigatures(value);
  };

  return (
    <Toolbar.Root className="flex w-full flex-nowrap border-b border-light-platinum bg-light-white p-2 pl-4 text-lg dark:border-dark-charcoal dark:bg-dark-gunmetal lg:text-xs xl:text-xs 2xl:text-sm">
      {/* :::::::::::: LOGO :::::::::::: */}
      <Toolbar.Link
        className="flex-basis-auto flex-shrink-0 flex-grow-0"
        href="#"
        target="_blank"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-6 stroke-light-azureblue dark:stroke-dark-ferngreen lg:w-6 xl:w-7 2xl:w-7"
        >
          <path
            d="M16.4042 4.66146C14.8668 4.66146 11.7153 5.47511 11.4078 8.72974C11.1003 11.9844 8.46125 12.2556 7.18013 11.9844C8.33313 11.9844 10.716 12.4707 11.0235 15.7253C11.3309 18.9799 15.2512 19.7141 16.7885 19.7141M1.02721 10.7445C0.906675 10.0603 1.12508 8.72974 2.95243 8.72974C5.25844 8.72974 7.18013 8.72974 7.18013 10.7639C7.18013 12.798 7.56446 16.4595 5.64279 16.0527C3.72112 15.6458 1.03076 16.4595 1.03076 14.8322V10.7834C1.03076 10.77 1.02953 10.7576 1.02721 10.7445ZM16.8157 3.01471C16.6952 2.33055 16.9136 1 18.7409 1C21.0469 1 22.9686 1 22.9686 3.03414C22.9686 5.06828 23.353 8.72974 21.4313 8.32291C19.5096 7.91608 16.8193 8.72974 16.8193 7.10243V3.05367C16.8193 3.04027 16.818 3.02788 16.8157 3.01471ZM16.8157 17.6605C16.6952 16.9764 16.9136 15.6458 18.7409 15.6458C21.0469 15.6458 22.9686 15.6458 22.9686 17.68C22.9686 19.7141 23.353 23.3756 21.4313 22.9687C19.5096 22.5619 16.8193 23.3756 16.8193 21.7483V17.6995C16.8193 17.6861 16.818 17.6737 16.8157 17.6605Z"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg>
      </Toolbar.Link>
      <Toolbar.Separator className="mx-1 w-px bg-light-spacegray dark:bg-dark-frenchgray lg:mx-2.5" />

      {/* :::::::::::: COMPILE AND VISUALIZE BUTTONS :::::::::::: */}
      <div className="flex gap-2 lg:gap-3">
        <Toolbar.Button className="h-auto flex-shrink-0 flex-grow-0 items-center justify-center rounded-full bg-light-azureblue px-2.5 text-white hover:bg-light-cornflowerblue dark:bg-dark-ferngreen dark:hover:bg-dark-pigmentgreen lg:px-3 xl:px-4 2xl:px-5">
          Compile & Run
        </Toolbar.Button>
        <Toolbar.Button className="h-auto flex-shrink-0 flex-grow-0 items-center justify-center rounded-full bg-light-azureblue px-2.5 text-white hover:bg-light-cornflowerblue dark:bg-dark-ferngreen dark:hover:bg-dark-pigmentgreen lg:px-3 xl:px-4 2xl:px-5">
          Visualize
        </Toolbar.Button>
      </div>

      {/* :::::::::::: MYSTERY BAR :::::::::::: */}
      <div className="mx-64 flex h-auto flex-grow cursor-pointer items-center justify-center rounded-xl border-2 border-light-platinum py-1 text-center text-xs text-light-spacegray dark:border-dark-charcoal dark:text-dark-frenchgray lg:mx-20 xl:mx-20 2xl:mx-72">
        <span>CODE TRAILS</span>
      </div>

      {/* :::::::::::: DOWNLOAD AND UPLOAD BUTTONS :::::::::::: */}
      <div className="flex gap-0 lg:gap-0">
        <Toolbar.Button className="inline-flex h-auto flex-shrink-0 flex-grow-0 basis-auto items-center justify-center rounded-full rounded-r-none border border-light-platinum bg-light-azureblue px-2.5 text-white hover:bg-light-cornflowerblue dark:border-dark-charcoal dark:bg-dark-ferngreen dark:hover:bg-dark-pigmentgreen lg:px-3 xl:px-4 2xl:px-5">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </Toolbar.Button>
        <Toolbar.Button className="inline-flex h-auto flex-shrink-0 flex-grow-0 basis-auto items-center justify-center rounded-full rounded-l-none border border-light-platinum bg-light-azureblue px-2.5 text-white hover:bg-light-cornflowerblue dark:border-dark-charcoal dark:bg-dark-ferngreen dark:hover:bg-dark-pigmentgreen lg:px-3 xl:px-4 2xl:px-5">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.81825 1.18188C7.64251 1.00615 7.35759 1.00615 7.18185 1.18188L4.18185 4.18188C4.00611 4.35762 4.00611 4.64254 4.18185 4.81828C4.35759 4.99401 4.64251 4.99401 4.81825 4.81828L7.05005 2.58648V9.49996C7.05005 9.74849 7.25152 9.94996 7.50005 9.94996C7.74858 9.94996 7.95005 9.74849 7.95005 9.49996V2.58648L10.1819 4.81828C10.3576 4.99401 10.6425 4.99401 10.8182 4.81828C10.994 4.64254 10.994 4.35762 10.8182 4.18188L7.81825 1.18188ZM2.5 9.99997C2.77614 9.99997 3 10.2238 3 10.5V12C3 12.5538 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2238 12.2239 9.99997 12.5 9.99997C12.7761 9.99997 13 10.2238 13 10.5V12C13 13.104 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2238 2.22386 9.99997 2.5 9.99997Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </Toolbar.Button>
      </div>
      <Toolbar.Separator className="mx-1 w-px bg-light-spacegray dark:bg-dark-frenchgray lg:mx-2.5" />

      {/* :::::::::::: DROPDOWN MENU :::::::::::: */}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className="inline-flex items-center justify-center text-light-spacegray hover:text-light-cornflowerblue dark:text-dark-frenchgray dark:hover:text-dark-pigmentgreen"
            aria-label="Customise options"
          >
            Menu
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content className="min-w-36 rounded-md border border-light-spacegray bg-light-white p-[5px] dark:border-dark-frenchgray dark:bg-dark-gunmetal">
            <DropdownMenu.Item className="flex h-auto select-none items-center rounded-md py-1 pl-4 pr-2 text-sm text-light-spacegray data-[highlighted]:bg-light-cornflowerblue data-[highlighted]:text-light-white dark:text-dark-frenchgray dark:data-[highlighted]:bg-dark-ferngreen dark:data-[highlighted]:text-dark-frenchgray">
              Didn&apos;t think
            </DropdownMenu.Item>
            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger className="flex h-auto select-none items-center rounded-md py-1 pl-4 pr-2 text-sm text-light-spacegray data-[highlighted]:bg-light-cornflowerblue data-[highlighted]:text-light-white dark:text-dark-frenchgray dark:data-[highlighted]:bg-dark-ferngreen dark:data-[highlighted]:text-dark-frenchgray">
                Font Size
              </DropdownMenu.SubTrigger>
              <DropdownMenu.Portal>
                <DropdownMenu.SubContent className="min-w-36 rounded-md border border-light-spacegray bg-light-white p-[5px] dark:border-dark-frenchgray dark:bg-dark-gunmetal">
                  <DropdownMenu.RadioGroup
                    value={activeFontSize}
                    onValueChange={(value) =>
                      changeFontSize(parseInt(value, 10))
                    }
                  >
                    <DropdownMenu.RadioItem
                      className="flex h-auto select-none items-center rounded-md py-1 pl-4 pr-2 text-sm text-light-spacegray data-[highlighted]:bg-light-cornflowerblue data-[highlighted]:text-light-white dark:text-dark-frenchgray dark:data-[highlighted]:bg-dark-ferngreen dark:data-[highlighted]:text-dark-frenchgray"
                      value="14"
                    >
                      <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </DropdownMenu.ItemIndicator>
                      Small
                      <span className="ml-auto pl-1 data-[highlighted]:bg-light-cornflowerblue group-data-[highlighted]:text-light-white dark:text-dark-frenchgray dark:data-[highlighted]:bg-dark-ferngreen dark:data-[highlighted]:text-dark-frenchgray">
                        14px
                      </span>
                    </DropdownMenu.RadioItem>
                    <DropdownMenu.RadioItem
                      className="flex h-auto select-none items-center rounded-md py-1 pl-4 pr-2 text-sm text-light-spacegray data-[highlighted]:bg-light-cornflowerblue data-[highlighted]:text-light-white dark:text-dark-frenchgray dark:data-[highlighted]:bg-dark-ferngreen dark:data-[highlighted]:text-dark-frenchgray"
                      value="16"
                    >
                      <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </DropdownMenu.ItemIndicator>
                      Medium
                      <span className="ml-auto pl-1 data-[highlighted]:bg-light-cornflowerblue group-data-[highlighted]:text-light-white dark:text-dark-frenchgray dark:data-[highlighted]:bg-dark-ferngreen dark:data-[highlighted]:text-dark-frenchgray">
                        16px
                      </span>
                    </DropdownMenu.RadioItem>
                    <DropdownMenu.RadioItem
                      className="flex h-auto select-none items-center rounded-md py-1 pl-4 pr-2 text-sm text-light-spacegray data-[highlighted]:bg-light-cornflowerblue data-[highlighted]:text-light-white dark:text-dark-frenchgray dark:data-[highlighted]:bg-dark-ferngreen dark:data-[highlighted]:text-dark-frenchgray"
                      value="18"
                    >
                      <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </DropdownMenu.ItemIndicator>
                      Large
                      <span className="ml-auto pl-1 data-[highlighted]:bg-light-cornflowerblue group-data-[highlighted]:text-light-white dark:text-dark-frenchgray dark:data-[highlighted]:bg-dark-ferngreen dark:data-[highlighted]:text-dark-frenchgray">
                        18px
                      </span>
                    </DropdownMenu.RadioItem>
                    <DropdownMenu.RadioItem
                      className="flex h-auto select-none items-center rounded-md py-1 pl-4 pr-2 text-sm text-light-spacegray data-[highlighted]:bg-light-cornflowerblue data-[highlighted]:text-light-white dark:text-dark-frenchgray dark:data-[highlighted]:bg-dark-ferngreen dark:data-[highlighted]:text-dark-frenchgray"
                      value="20"
                    >
                      <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </DropdownMenu.ItemIndicator>
                      Extra Large
                      <span className="ml-auto pl-1 data-[highlighted]:bg-light-cornflowerblue group-data-[highlighted]:text-light-white dark:text-dark-frenchgray dark:data-[highlighted]:bg-dark-ferngreen dark:data-[highlighted]:text-dark-frenchgray">
                        20px
                      </span>
                    </DropdownMenu.RadioItem>
                  </DropdownMenu.RadioGroup>
                  <DropdownMenu.Separator className="m-1 h-px bg-light-spacegray dark:bg-dark-frenchgray" />
                  <DropdownMenu.Label className="pl-1 text-xs leading-6 text-light-cornflowerblue dark:text-dark-pigmentgreen">
                    Use Ctrl + Mouse Scroll to change the font size
                  </DropdownMenu.Label>
                </DropdownMenu.SubContent>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>
            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger className="flex h-auto select-none items-center rounded-md py-1 pl-4 pr-2 text-sm text-light-spacegray data-[highlighted]:bg-light-cornflowerblue data-[highlighted]:text-light-white dark:text-dark-frenchgray dark:data-[highlighted]:bg-dark-ferngreen dark:data-[highlighted]:text-dark-frenchgray">
                Theme
              </DropdownMenu.SubTrigger>
              <DropdownMenu.Portal>
                <DropdownMenu.SubContent className="min-w-36 rounded-md border border-light-spacegray bg-light-white p-[5px] dark:border-dark-frenchgray dark:bg-dark-gunmetal">
                  <DropdownMenu.RadioGroup
                    value={activeTheme}
                    onValueChange={(value) => switchTheme(value)}
                  >
                    <DropdownMenu.RadioItem
                      className="flex h-auto select-none items-center rounded-md py-1 pl-4 pr-2 text-sm text-light-spacegray data-[highlighted]:bg-light-cornflowerblue data-[highlighted]:text-light-white dark:text-dark-frenchgray dark:data-[highlighted]:bg-dark-ferngreen dark:data-[highlighted]:text-dark-frenchgray"
                      value="light"
                    >
                      <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </DropdownMenu.ItemIndicator>
                      Light
                    </DropdownMenu.RadioItem>
                    <DropdownMenu.RadioItem
                      className="flex h-auto select-none items-center rounded-md py-1 pl-4 pr-2 text-sm text-light-spacegray data-[highlighted]:bg-light-cornflowerblue data-[highlighted]:text-light-white dark:text-dark-frenchgray dark:data-[highlighted]:bg-dark-ferngreen dark:data-[highlighted]:text-dark-frenchgray"
                      value="dark"
                    >
                      <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </DropdownMenu.ItemIndicator>
                      Dark
                    </DropdownMenu.RadioItem>
                  </DropdownMenu.RadioGroup>
                </DropdownMenu.SubContent>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>
            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger className="flex h-auto select-none items-center rounded-md py-1 pl-4 pr-2 text-sm text-light-spacegray data-[highlighted]:bg-light-cornflowerblue data-[highlighted]:text-light-white dark:text-dark-frenchgray dark:data-[highlighted]:bg-dark-ferngreen dark:data-[highlighted]:text-dark-frenchgray">
                Code Examples
              </DropdownMenu.SubTrigger>
              <DropdownMenu.Portal>
                <DropdownMenu.SubContent className="min-w-36 rounded-md border border-light-spacegray bg-light-white p-[5px] dark:border-dark-frenchgray dark:bg-dark-gunmetal">
                  <DropdownMenu.Item className="flex h-auto select-none items-center rounded-md py-1 pl-4 pr-2 text-sm text-light-spacegray data-[highlighted]:bg-light-cornflowerblue data-[highlighted]:text-light-white dark:text-dark-frenchgray dark:data-[highlighted]:bg-dark-ferngreen dark:data-[highlighted]:text-dark-frenchgray">
                    Hello world
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="flex h-auto select-none items-center rounded-md py-1 pl-4 pr-2 text-sm text-light-spacegray data-[highlighted]:bg-light-cornflowerblue data-[highlighted]:text-light-white dark:text-dark-frenchgray dark:data-[highlighted]:bg-dark-ferngreen dark:data-[highlighted]:text-dark-frenchgray">
                    Pointers
                  </DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>
            <DropdownMenu.Separator className="m-1 h-px bg-light-spacegray dark:bg-dark-frenchgray" />
            <DropdownMenu.CheckboxItem
              className="flex h-auto select-none items-center rounded-md py-1 pl-4 pr-2 text-sm text-light-spacegray data-[highlighted]:bg-light-cornflowerblue data-[highlighted]:text-light-white dark:text-dark-frenchgray dark:data-[highlighted]:bg-dark-ferngreen dark:data-[highlighted]:text-dark-frenchgray"
              checked={showMinimap}
              onCheckedChange={(value) => toggleMinimap(value)}
            >
              <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </DropdownMenu.ItemIndicator>
              Show Minimap
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem
              className="flex h-auto select-none items-center rounded-md py-1 pl-4 pr-2 text-sm text-light-spacegray data-[highlighted]:bg-light-cornflowerblue data-[highlighted]:text-light-white dark:text-dark-frenchgray dark:data-[highlighted]:bg-dark-ferngreen dark:data-[highlighted]:text-dark-frenchgray"
              checked={showFontLigatures}
              onCheckedChange={(value) => toggleFontLigatures(value)}
            >
              <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </DropdownMenu.ItemIndicator>
              Font Ligatures
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.Separator className="m-1 h-px bg-light-spacegray dark:bg-dark-frenchgray" />
            <DropdownMenu.Item className="flex h-auto select-none items-center rounded-md py-1 pl-4 pr-2 text-sm text-light-spacegray data-[highlighted]:bg-light-cornflowerblue data-[highlighted]:text-light-white dark:text-dark-frenchgray dark:data-[highlighted]:bg-dark-ferngreen dark:data-[highlighted]:text-dark-frenchgray">
              About
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </Toolbar.Root>
  );
};

export default Menubar;
