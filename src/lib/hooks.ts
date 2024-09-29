import { useLayoutEffect, useMemo } from "react";
import { styler, type StylerConfig } from "./styler";

function useStyler(config: StylerConfig = {}, deps: any[] = []) {
  const memoizedConfig = useMemo(() => config, [JSON.stringify(config)]);

  useLayoutEffect(() => {
    styler(memoizedConfig);
  }, [memoizedConfig, ...deps]);
}

export { useStyler };
