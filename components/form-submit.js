"use client";

import { useFormStatus } from "react-dom";

export default function FormSubmit() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <span>Creating post...</span>
      ) : (
        <>
          <button type="reset">Reset</button>
          <button>Create Post</button>
        </>
      )}
    </>
  );
}
