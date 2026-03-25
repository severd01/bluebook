# UmpIQ Optional Login Setup

UmpIQ now supports optional login without changing the anonymous play flow.

## What it saves

- in-progress session state
- completed results state
- resume progress across visits/devices when signed in

## Setup

1. Create a Supabase project.
2. In Supabase SQL Editor, run:

   - `/Users/davidseverson/Desktop/Blue Book/supabase-schema.sql`

3. In Supabase Authentication:
   - enable the Google provider
   - set the site URL to `https://umpiq.com`
   - add redirect URLs:
     - `https://umpiq.com`
     - `https://umpiq.com/`
     - `https://umpiq.com/situations.html`
     - `https://umpiq.com/results.html`
     - `https://umpiq.com/feedback.html`
     - `https://umpiq.com/scenarios/**`
     - `http://localhost:8000/**`

4. In Google Cloud:
   - create or select a project
   - configure the OAuth consent screen
   - create an OAuth Client ID for a Web application
   - add Authorized JavaScript origins:
     - `https://umpiq.com`
     - `http://localhost:8000`
   - add Authorized redirect URIs:
     - `https://qoyzrqgegtggwcbxbypw.supabase.co/auth/v1/callback`

5. In Supabase Google provider settings:
   - paste the Google Client ID
   - paste the Google Client Secret

6. Fill in:

   - `/Users/davidseverson/Desktop/Blue Book/supabase-config.js`

   with:

   ```js
   window.UMPIQ_SUPABASE_CONFIG = {
     url: "YOUR_SUPABASE_URL",
     anonKey: "YOUR_SUPABASE_PUBLISHABLE_KEY",
   };
   ```

## Notes

- If `supabase-config.js` is left blank, the site continues to behave exactly as it does today.
- Login is optional. Anonymous users still play normally with local storage only.
