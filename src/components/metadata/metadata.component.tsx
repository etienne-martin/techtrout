import type { FC } from "react";

interface MetadataProps {
  dateIso8601: string;
}

export const Metadata: FC<MetadataProps> = ({ dateIso8601 }) => {
  return (
    <div className="uppercase flex items-center text-xs -mx-4 sm:-mx-0 pl-4 sm:pl-0">
      {new Date(dateIso8601)
        .toLocaleString("en-US", {
          timeZone: "UTC",
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
        /**
         * In Safari, `toLocaleString` doesn't output the same thing as node.js so we normalize
         * the string to prevent mismatch between the server and client renders
         */
        .replaceAll(" at ", ", ")}
      <span className="h-px bg-black flex-grow ml-4" />
    </div>
  );
};
