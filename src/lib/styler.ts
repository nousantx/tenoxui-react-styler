import { makeTenoxUI, MakeTenoxUIParams } from "@tenoxui/core";
import { useLayoutEffect, useMemo } from "react";

type Config = Partial<Omit<MakeTenoxUIParams, "element">>;

export type StylerConfig = Config & {
  elements?: string;
};

function styler(config: StylerConfig = {}) {
  const { elements = "", property = {}, values = {}, classes = {}, breakpoints = [] } = config;

  document.querySelectorAll(elements || "*[class]").forEach((element) => {
    const tenoxui = new makeTenoxUI({ element: element as HTMLElement, property, values, classes, breakpoints });
    tenoxui.useDOM();
  });
}

export { styler };
