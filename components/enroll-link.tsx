"use client";

import { isRegistrationOpen } from "@/lib/countdown";
import { openNotifyPopup } from "@/components/notify-popup";

// Plain <a> to the Google Form; before registration opens, clicks show the notify popup instead.
export function EnrollLink(props: React.ComponentProps<"a">) {
  return (
    <a
      {...props}
      onClick={(e) => {
        if (!isRegistrationOpen()) {
          e.preventDefault();
          openNotifyPopup();
        }
      }}
    />
  );
}
