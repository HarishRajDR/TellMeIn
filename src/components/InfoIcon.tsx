import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

type Prop = {
  objects: Array<{ name: string; length: number; colorClass: string }>;
  unit: string;
};

export default function MyPopover(props: Prop) {
  return (
    <div className="top-16 w-full max-w-sm px-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-full aspect-square bg-cyan-600 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <ClarityHelpInfoSolid />
            </Popover.Button>
            <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -right-1 bottom-16 z-10 mt-3 w-screen max-w-sm -translate-y-[38rem] transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-cyan-600 p-7 lg:grid-cols-2">
                    {props.objects.map((p) => {
                      return (
                        <div>
                          <h3 className="text-lg">{`${p.name}:`}</h3>
                          <h3 className="font-bold">{`${p.length}m`}</h3>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

function ClarityHelpInfoSolid() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 36 36"
    >
      <circle
        cx="20.75"
        cy="6"
        r="4"
        fill="#ffffff"
        className="clr-i-solid clr-i-solid-path-1"
      ></circle>
      <path
        fill="#ffffff"
        d="M24.84 26.23a1 1 0 0 0-1.4.29a16.6 16.6 0 0 1-3.51 3.77c-.33.25-1.56 1.2-2.08 1c-.36-.11-.15-.82-.08-1.12l.53-1.57c.22-.64 4.05-12 4.47-13.3c.62-1.9.35-3.77-2.48-3.32c-.77.08-8.58 1.09-8.72 1.1a1 1 0 0 0 .13 2s3-.39 3.33-.42a.88.88 0 0 1 .85.44a2.47 2.47 0 0 1-.07 1.71c-.26 1-4.37 12.58-4.5 13.25a2.78 2.78 0 0 0 1.18 3a5 5 0 0 0 3.08.83a8.53 8.53 0 0 0 3.09-.62c2.49-1 5.09-3.66 6.46-5.75a1 1 0 0 0-.28-1.29Z"
        className="clr-i-solid clr-i-solid-path-2"
      ></path>
      <path fill="none" d="M0 0h36v36H0z"></path>
    </svg>
  );
}
