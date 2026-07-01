import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * True only after the client has mounted (false during SSR and first paint),
 * without a setState-in-effect. Use to gate client-only UI to avoid hydration
 * mismatches.
 */
export function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
