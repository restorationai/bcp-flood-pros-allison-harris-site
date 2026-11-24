// Brand config — hydrated at scaffold time by build_site.py from
// plan-input.json and the client record. All {{TOKENS}} are replaced
// by the scaffold step; this file should not be hand-edited after that.

export const brand = {
  slug: "bcp-flood-pros-allison-harris",
  displayName: "FIX Restoration",
  shortName: "FIX Restoration",
  legalName: "FIX Restoration",
  // Registered DBA / trade name — filled by rename_site_sync.py the moment
  // the state approves the client's DBA filing (empty until then). When set,
  // the footer carries the "[legal] doing business as [DBA]" line and schema
  // declares it as the business name, so Google/BrightLocal find the new
  // name corroborated on the site before and during the GBP rename.
  dbaName: "FIX Restoration - 24/7 Emergency Plumbing, Water & Fire Damage Restoration",
  domain: "fixofutah.com",
  canonicalUrl: "https://fixofutah.com",
  phone: "(801) 930-9750",
  phoneRaw: "+18019309750",
  hideMobileHeaderCall: false,
  // Sitewide call-tracking number (2026-08-24). When BOTH fields are set,
  // a tiny inline script in BaseLayout swaps every visible phone mention
  // and tel: link to this number AFTER the page renders. The HTML source,
  // the JSON-LD in schema.ts, and anything crawlers/citation-checkers read
  // keep the canonical NAP number above — humans dial the tracked line,
  // Google sees consistent NAP. Empty = feature off (default at scaffold;
  // filled by the call-tracking provisioning step).
  trackingPhone: "(385) 480-0281",
  trackingPhoneRaw: "+13854800281",
  email: "scott.noland@gofloodpros.com",
  hours: "24/7",
  // AVAILABILITY 24/7 (Santino 2026-11-21, scripts/availability.py): calls are
  // answered 24/7 (the AI receptionist), every trade, default true; false only
  // when the client said not to. Separate from the emergency-SERVICE rule
  // (emergency_policy.py, the `hours` gate above). openingHoursSpec = the
  // schema hours (scripts/schema_hours.py): 24/7 when available, else the
  // real Google hours, else none.
  available247: true,
  openingHoursSpec: [{"days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59"}] as { days: string[]; opens: string; closes: string }[],
  foundedYear: "2012",
  primaryCity: "American Fork",
  primaryState: "UT",
  // primaryCity/primaryState = the #1 MARKETING city (headlines, coverage
  // copy). addressCity/addressState = where the business PHYSICALLY is.
  // They are usually the same and often diverge (DISS: Farrell PA office,
  // Youngstown OH target) — only the address pair may go in a PostalAddress.
  addressCity: "American Fork",
  addressState: "UT",
  streetAddress: "250 W Main St",
  postalCode: "84003",
  lat: "40.3768064",
  lng: "-111.7959146",
  placeId: "",
  googleCid: "",
  imagesBase: "https://images.fixofutah.com",
  googleMapsApiKey: "",
  // Analytics — set post-scaffold (scripts/analytics_set.py / create_ga4.py); no-op if empty
  ga4MeasurementId: "",
  clarityProjectId: "",
  logoUrl: "/images/logo.webp",
  licenseNumbers: [] as string[],
  licenseAuthority: "",
  // State license-verification page — the footer links the license number here.
  licenseLookupUrl: "",
  licenseType: "",
  // Operator-confirmed "licensed & insured" attestation from plan-input.json —
  // lets the TrustStrip show the badge before a license number is on file.
  licensedInsuredAttested: true as boolean,
  certifications: [] as string[],
  trustBadges: ["Licensed & Insured", "Locally Owned & Operated"] as string[],
  jobPhotos: [] as string[],
  sameAsUrls: ["https://maps.google.com/maps?cid=17807975968942681996", "https://www.houzz.com/professionals/environmental-services-and-restoration/fix-restoration-pfvwus-pf~919903784"] as string[],
  // GBP rating fields — synced from the live Google Business Profile by
  // scripts/sync_brand_reviews.py; never hand-edited (real ratings only).
  gbpRatingValue: "4.9",
  gbpReviewCount: "557",
  gbpReviews: [
    { author: "Ron", rating: 5, text: "I am so grateful that he saved all my files on my laptop. My Florida hero!", when: "November 2026" },
    { author: "Craig", rating: 5, text: "We had a leak in our bathroom that created an issue in the basement ceiling below. These guys did a great job with a quick repair and fantastic customer service! You’ll love their work!", when: "November 2026" },
    { author: "Todd", rating: 5, text: "We feel this is the best company with amazing team and crew. We are a construction company and will only do business with Flood Impact Specialists", when: "November 2026" },
    { author: "Kelly", rating: 5, text: "FIX has helped us with two different flooding mitigations and have been great to work with.", when: "November 2026" },
    { author: "Harrell", rating: 5, text: "Very rapid and thorough response! Easy to work with!", when: "November 2026" },
    { author: "Tonya", rating: 5, text: "We had a water issue in our basement. I was leaving town the next day. Fix was the quickest company to respond!", when: "November 2026" },
  ] as { author: string; rating: number; text: string; when: string }[],
  tagline: "24/7 restoration services in American Fork, UT.",
  ctaLabel: "24/7 Emergency Line",
  // Vertical trade-identity copy — resolved at scaffold time from
  // templates/{vertical}/vertical-tokens.json (see scripts/verticals.py).
  // Components must use these instead of hardcoding a trade phrase.
  // vertical gates layout too: restoration is call-first, so the homepage
  // hero renders NO estimate form there (Santino 2026-09-11).
  vertical: "restoration",
  tradeNoun: "restoration",
  specialistPhrase: "Damage Restoration Specialists",
  announcementSuffix: "24/7 Emergency Response",
  homeAboutBlurb: "FIX Restoration serves American Fork and the surrounding UT area with professional damage restoration for homes and businesses. From the first emergency call to the final walkthrough, our team manages the entire recovery — and we answer the phone 24/7, so help is on the way the moment something goes wrong.",
} as const;

export const entityId = `${brand.canonicalUrl}/#identity`;
