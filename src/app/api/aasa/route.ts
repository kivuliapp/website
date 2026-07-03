import { NextResponse } from "next/server";

/**
 * Apple App Site Association — powers passkeys (webcredentials) for the Kivuli
 * iOS app. Apple fetches this over HTTPS, no redirects, as `application/json`,
 * from `https://kivuli.xyz/.well-known/apple-app-site-association` (see the
 * rewrite in `next.config.ts`).
 *
 * The app identifier is `<TeamID>.<bundleId>`. Set `APPLE_TEAM_ID` in the
 * deploy environment; the bundle id is `com.collinsadi.kivuli`.
 *
 * `force-dynamic` so the Team ID is read from the runtime env per request —
 * a static route would bake whatever `APPLE_TEAM_ID` was at build time.
 */
const BUNDLE_ID = "com.collinsadi.kivuli";

export const dynamic = "force-dynamic";

export function GET() {
  const teamId = process.env.APPLE_TEAM_ID ?? "TEAMID";
  return NextResponse.json(
    {
      applinks: { apps: [], details: [] },
      webcredentials: { apps: [`${teamId}.${BUNDLE_ID}`] },
    },
    { headers: { "content-type": "application/json" } },
  );
}
