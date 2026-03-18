"use client";

import { Amplify } from "aws-amplify";
import { useEffect } from "react";

type AmplifyOutputs = Record<string, unknown>;

export function ConfigureAmplifyClientSide() {
  useEffect(() => {
    let cancelled = false;

    async function configureAmplify() {
      try {
        const response = await fetch("/amplify_outputs.json", {
          cache: "no-store",
        });
        if (!response.ok) return;
        const outputs = (await response.json()) as AmplifyOutputs;
        if (cancelled) return;
        Amplify.configure(outputs);
      } catch {}
    }

    configureAmplify();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}

