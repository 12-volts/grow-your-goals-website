import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white border border-earth-beige-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
        <div>
          <h1 className="text-3xl font-extrabold text-earth-brown-600 tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-earth-brown-400 mt-2">Last Updated: September 20, 2026</p>
        </div>

        <hr className="border-earth-beige-200" />

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-earth-brown-600">1. Overview</h2>
          <p className="text-earth-brown-500 leading-relaxed text-sm">
            Grow Your Goals ("we," "our," or "the app") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information when you use our mobile application and website. Our primary goal is to provide a gamified productivity experience while keeping your data secure and transparent.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-earth-brown-600">2. Information Collection & Use</h2>
          <p className="text-earth-brown-500 leading-relaxed text-sm">
            We collect information to provide and improve our services, as well as to support the ongoing development of the app through advertising.
          </p>
          <ul className="list-disc pl-5 text-sm text-earth-brown-500 space-y-2">
            <li><strong>Personal Data:</strong> If you choose to sign in, we collect your email address and profile identifiers via Firebase Authentication.</li>
            <li><strong>App Progress:</strong> Your goals, tasks, plant growth, gold, and EXP balances are stored locally or synced to your account.</li>
            <li><strong>Technical Identifiers:</strong> We collect IP addresses, device models, operating system versions, and Advertising IDs (such as Google GAID) to assist in app functionality and ad delivery.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-earth-brown-600">3. Third-Party Services</h2>
          <p className="text-earth-brown-500 leading-relaxed text-sm">
            The app utilizes trusted third-party services that may collect information used to identify you:
          </p>
          <div className="bg-earth-beige-50 border border-earth-beige-200 p-6 rounded-2xl space-y-4">
            <div>
              <h4 className="font-bold text-earth-brown-600 text-sm">Google Firebase (Analytics, Crashlytics, Auth)</h4>
              <p className="text-xs text-earth-brown-500 mt-1">Used to track app usage patterns, monitor technical crashes for bug fixing, and manage secure user sign-ins. Data is handled according to Firebase Security Rules.</p>
            </div>
            <div>
              <h4 className="font-bold text-earth-brown-600 text-sm">Google AdMob</h4>
              <p className="text-xs text-earth-brown-500 mt-1">Used to serve advertisements. AdMob may use device identifiers to provide personalized ads. Users who do not sign in with a Google account receive default, non-targeted ads.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-earth-brown-600">4. GDPR & CCPA Compliance</h2>
          <p className="text-earth-brown-500 leading-relaxed text-sm">
            <strong>EU/EEA Users (GDPR):</strong> We rely on your explicit consent for personalized advertising and data processing. You have the right to access, rectify, or erase your data at any time. We use the Google User Messaging Platform (UMP) to manage your consent preferences.
          </p>
          <p className="text-earth-brown-500 leading-relaxed text-sm">
            <strong>US Users (CCPA/CPRA):</strong> You have the right to opt-out of the "sale" or "sharing" of your personal information. You can manage these settings directly within the app's settings or your device's privacy menu.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-earth-brown-600">5. Children's Privacy (COPPA)</h2>
          <p className="text-earth-brown-500 leading-relaxed text-sm">
            Grow Your Goals is not primarily directed to children under 13. We do not knowingly collect personally identifiable information from children under 13. If we discover a child under 13 has provided us with personal information, we immediately delete this from our servers. We implement "child-directed" flags for AdMob and Firebase when applicable to ensure compliance with COPPA.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-earth-brown-600">6. Data Retention</h2>
          <p className="text-earth-brown-500 leading-relaxed text-sm">
            We retain your data as long as your account is active or as needed to provide you with services. If you delete your account or purge the app data locally, your information is removed from our active systems.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-earth-brown-600">7. Security</h2>
          <p className="text-earth-brown-500 leading-relaxed text-sm">
            We use industry-standard encryption and Firebase Security Rules to ensure that your data is only accessible to you. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-earth-brown-600">8. Contact Us</h2>
          <p className="text-earth-brown-500 leading-relaxed text-sm">
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us via our official website: <a href="https://growyourgoals.ie" className="text-earth-moss-500 underline font-semibold hover:text-earth-moss-600">growyourgoals.ie</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
