"use client";

import { ReactNode } from "react";
import { SdkProvider } from "./sdk";

export function Providers({ children }: { children: ReactNode }) {
  return <SdkProvider>{children}</SdkProvider>;
}