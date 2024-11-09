/* eslint-disable react/prop-types */
import * as Separator from "@radix-ui/react-separator";

const ObjectType = ({ dataType, name, members, address, showAddress }) => {
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
      <div className="flex w-max flex-col items-start gap-2 rounded-xl bg-light-white p-1 text-light-azureblue dark:bg-dark-frenchgray dark:text-dark-ferngreen">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex w-max select-none items-center rounded-xl bg-light-azureblue p-2 text-light-white dark:bg-dark-ferngreen dark:text-dark-frenchgray"
          >
            <div className="flex flex-col items-center">
              <span className="text-sm">{member[1]}</span>
              <span className="text-3xl font-semibold">{member[2]}</span>
              <span className="text-xs">{member[0]}</span>
            </div>
            <Separator.Root
              className="mx-3 bg-light-white data-[orientation=vertical]:h-12 data-[orientation=vertical]:w-px dark:bg-dark-frenchgray"
              decorative
              orientation="vertical"
            />
            {Array.isArray(member[3]) ? (
              <div className="flex items-center gap-2">
                {member[3].map((value, index) => (
                  <div
                    key={index}
                    className="flex w-max flex-col items-center rounded-lg bg-light-white p-1 text-light-azureblue dark:bg-dark-frenchgray dark:text-dark-ferngreen"
                  >
                    <span className="text-xs underline">{index}</span>
                    <span className="text-3xl font-bold">{value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <span className="text-3xl font-bold">{member[3]}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ObjectType;
