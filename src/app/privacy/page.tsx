import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white border border-earth-beige-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
        <div>
          <h1 className="text-3xl font-extrabold text-earth-brown-600 tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-earth-brown-400 mt-2">Last Updated: September 13, 2026</p>
        </div>

        <hr className="border-earth-beige-200" />

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-earth-brown-600">1. Data Storage & Processing</h2>
          <p className="text-earth-brown-500 leading-relaxed text-sm">
            Grow Your Goals values your personal privacy. All application settings, goals, logs, habits, and gamification balances (Gold, EXP, levels) are processed directly on your device locally or synced securely to your authenticated cloud account if you choose to sign in via Firebase Authentication.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-earth-brown-600">2. Google AdMob Integration</h2>
          <p className="text-earth-brown-500 leading-relaxed text-sm">
            We integrate Google AdMob to serve advertisements within the application to support ongoing software maintenance. AdMob may collect and process device identifiers or basic telemetry to serve relevant ads according to standard network protocols.
          </p>
          <div className="bg-earth-beige-50 border border-earth-beige-200 p-4 rounded-xl text-sm text-earth-brown-600">
            <strong className="text-earth-brown-600 font-semibold block mb-1">Note on Anonymous Usage & Non-Targeted Ads:</strong>
            Users who browse or use the app without linking a Google account or signing in will receive default, non-targeted advertisements. Personal details or custom goal text are never transmitted to third parties for ad-targeting profiling.
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-earth-brown-600">3. Security</h2>
          <p className="text-earth-brown-500 leading-relaxed text-sm">
            When authenticated, your cloud syncing parameters adhere strictly to Firebase Security Rules, ensuring that only your validated user identity (`uid`) possesses read or write permissions for your individual sub-collections.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-earth-brown-600">4. Contact & Domain</h2>
          <p className="text-earth-brown-500 leading-relaxed text-sm">
            For questions regarding this privacy document or app behaviors, please reach out to us at our official web domain: <a href="https://growyourgoals.ie" className="text-earth-moss-500 underline font-semibold hover:text-earth-moss-600">growyourgoals.ie</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
