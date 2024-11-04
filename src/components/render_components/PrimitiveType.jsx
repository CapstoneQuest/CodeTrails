import * as Separator from "@radix-ui/react-separator";

/* eslint-disable react/prop-types */
const PrimitiveType = ({ dataType, name, value, address, showAddress }) => {
  return (
    <div className="flex w-max select-none items-center rounded-xl bg-light-azureblue p-2 text-light-white dark:bg-dark-ferngreen dark:text-dark-frenchgray">
      <div className="flex flex-col items-center">
        <span className="text-sm">{dataType}</span>
        <span className="text-3xl font-semibold">{name}</span>
        {showAddress && <span className="text-sm">{address}</span>}
      </div>
      <Separator.Root
        className="mx-3 bg-light-white data-[orientation=vertical]:h-4/5 data-[orientation=vertical]:w-px dark:bg-dark-frenchgray"
        decorative
        orientation="vertical"
      />
      <span className="text-3xl font-bold">{value}</span>
    </div>
  );
};

export default PrimitiveType;
