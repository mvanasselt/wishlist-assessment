import React from "react";

export function Button({ onClick, children }) {
  return (
    <button
      onClick = { onClick}
      className="text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 flex gap-1 items-end w-fit"
      type="button"
    >
      {children}
    </button>
  );
}
