# Consent management status

Verified in the live AdSense Privacy & messaging interface on October 2, 2026.

- Google-certified CMP: AdSense Privacy & messaging (Google CMP ID 300)
- Message: `European regulations message - myiqscores.com`
- Site: `myiqscores.com`
- Status: Published
- Languages: English plus 31 additional languages
- User choices shown: Consent, Do not consent, Manage options
- Consent persistence and withdrawal: handled by Google's published message
- Site-side withdrawal entry point: `Privacy and cookie settings` in both site footers; it is only rendered after Google's `CONSENT_API_READY` callback and queues `showRevocationMessage`
- Consent Mode defaults: denied for EEA/UK/Switzerland and granted elsewhere in `index.html`
- AdSense loader: intentionally disabled pending approval, so the live message and withdrawal entry point will not load until the Google tag is enabled after approval
- AdSense message-level "Consent mode for advertising purposes" setting: Off at inspection time; do not change this account setting without owner review

Official implementation reference: https://developers.google.com/funding-choices/fc-api-docs
