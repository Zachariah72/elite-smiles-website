# Mabawa digital platform upgrade

## Goal
Turn the current brochure-style pages into a connected, database-backed platform for engagement, support, opportunities, events, stories, projects, and administration. Preserve the existing membership-card system and authentic Mabawa content.

## Public experience
- Rebuild **Get Involved** as a sectioned hub with volunteer, membership-interest, partnership, skills, notification, opportunity, project-support, and event flows.
- Add a searchable/filterable **Opportunities Portal** with empty states, detail pages, internal or external applications, deadline-based closure, and no fabricated listings.
- Add **Support Our Work** with KES one-time/monthly/custom pledges, administrator-configured payment instructions, project support, in-kind donations, corporate support, verified impact, and contact details. No payment will be presented as completed without a configured gateway.
- Upgrade **News & Stories** into a searchable newsroom with featured content, article pages, categories, drafts/scheduling support, related stories, and sharing controls. Empty areas will clearly state when no verified stories exist.
- Expand **About Us** with the supplied vision, mission, values, programs, administrator-managed timeline, leadership, verified impact, partners, and final calls to action.
- Add project and event detail/registration paths where needed, while reusing current authentic photos, projects, programs, and leadership information.
- Update navigation, footer, homepage calls to action, and all relevant buttons so every destination works. Replace Abigail's old address everywhere with `mabawaupliftfoundation@gmail.com`.
- Add Privacy Policy and Terms pages plus visible Volunteer and Opportunities links in the footer.

## Forms and data
- Store volunteer applications, opportunity applications, membership interest, partnership requests, project support, shared expertise, notification subscriptions, event registrations, donation intentions, in-kind offers, and contact submissions in Lovable Cloud.
- Add optional CV/document upload with safe file restrictions and private access for administrators.
- Add confirmation states for every successful submission, validation, duplicate-subscription handling, and unsubscribe links/actions.
- Keep public content administrator-managed: opportunities, projects, events, stories, authors/categories, announcements, timeline entries, leadership, partners, verified statistics, and payment methods.

## Protected administration
- Expand the existing authenticated admin area with overview counts and focused management tabs.
- Administrators can create, edit, publish, close, or remove opportunities; review/export applications and requests; manage events and registrations; manage projects, stories, announcements, subscribers, impact figures, partners, leadership, timeline, and payment instructions.
- Ordinary visitors remain blocked through both page access checks and database policies.
- CSV exports will be generated in the browser for authorized administrators.

## Technical details
- Add normalized tables with timestamps, statuses, validation constraints, explicit grants, row-level security, admin policies using the existing server-validated role function, and narrowly scoped anonymous insert/read policies.
- Public reads expose only published/active records; private applicant/contact data remains admin-only.
- Opportunity status is derived from publication state and deadline, so expired opportunities automatically close to visitors and reject applications.
- Use the existing design tokens, form controls, notifications, routing, authentication, and Mabawa green/brown/natural palette.
- Update generated database types through the supported backend workflow, then connect typed React data hooks and reusable form/content components.

## Verification
- Check builds and database security policies.
- Exercise public submissions, opportunity filtering and expiry, event registration, unsubscribe, article/detail navigation, and payment-instruction empty states.
- Sign in as an authorized administrator and verify content creation, review, status changes, and export.
- Review the main flows at mobile and desktop sizes, ensuring no dead controls or broken links remain.

## Limitation
Live M-Pesa, card, or bank transactions will remain unavailable until Mabawa supplies and configures a payment provider. The page will support administrator-controlled payment instructions and record support intentions without creating fake transactions.
