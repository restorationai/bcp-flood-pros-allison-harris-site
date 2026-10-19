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
  dbaName: "",
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
  sameAsUrls: ["https://maps.google.com/maps?cid=17807975968942681996"] as string[],
  // GBP rating fields — synced from the live Google Business Profile by
  // scripts/sync_brand_reviews.py; never hand-edited (real ratings only).
  gbpRatingValue: "4.9",
  gbpReviewCount: "558",
  gbpReviews: [
    { author: "Janean", rating: 5, text: "Very responsive & willing to check whatever was a concern. Didn’t try to push anything unnecessary. Trustworthy.", when: "August 2026" },
    { author: "A.J.", rating: 5, text: "Jared Decker and Team are exceptional! They’ve been in business a long time and for good reason. They do exactly what they say they will do! Honest, fair, and super involved in the community are part of their fabric. Can’t recommend them enough. If you need an awesome restoration company, they are…", when: "August 2026" },
    { author: "Bonny", rating: 5, text: "FIX was incredibly helpful and professional when we had a leak in our home. I called and they were able to get someone out same day who was really kind and very knowledgeable. He explained in good detail what our issue was and told us about the options available without even plugging his business…", when: "August 2026" },
    { author: "Kelly", rating: 5, text: "We had a foundation flood and used FIX for the second time in a few years. Floods suck, but FIX makes the cleanup and restoration seem so much more manageable and less frustrating. The team killed it. I worked closely with Braxton who led the majority of the work. He was very professional, helped…", when: "May 2026" },
    { author: "Morgan", rating: 5, text: "Called Fix to come help with water leak bubble we saw in the ceiling. We have a rental property and they were able to arrive and talk with me over the phone while they diagnosed the problem. They were quick to come out and found the source of the leak and quickly got solutions. I love that they…", when: "March 2026" },
    { author: "Becky", rating: 5, text: "They take great care of their customers! They are nice to work with! It’s awesome to work with a friendly, professional company that’s does such high quality work! I trust them!", when: "March 2026" },
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
