# Lawyer Management

## General
At its core, **Larx** provides a robust directory to organize and manage your firm's internal legal team. The **Lawyer** entity represents the legal professionals who hold the mandate to manage case files, review compliance documents, and communicate directly with clients. Through the Lawyer Management dashboard, firm administrators can onboard new attorneys, monitor their active workloads, and update their operational parameters. This centralized control ensures your legal team is properly provisioned while strictly upholding data security boundaries.

Below you will find context and instructions on how to handle the complete lifecycle of a lawyer profile, from system onboarding to case-level dossier assignments.

---

## Create new lawyer
A new lawyer profile can be registered in your application within seconds. Larx utilizes a guided setup wizard to safely initialize the attorney account. The creation process will prompt you for essential identity and firm alignment criteria across a series of structured steps.

### Creation process (Wizard)
- **Full Name:** The legal name of the attorney as it should appear across dossiers and correspondence.
- **Professional Email Address:** The primary inbox used for system authentication and automated dossier updates.
- **Role / Title Designation:** The professional tier or organizational classification of the lawyer within the firm network.
- **Avatar (Optional):** You can optionally upload a profile picture to personalize the attorney's dashboard and chat avatar.

*System Background Trigger:* Once you complete the onboarding steps, the system automatically dispatches an activation email containing a secure token to the lawyer. Clicking this link takes them to a validation page where they can set up their private credentials and gain immediate access to their assigned law firm dashboard.

---

## Amend details of a lawyer
If a lawyer's organizational status shifts or their contact information changes, you can modify their record post-creation. Navigate to the lawyer's directory file and select the edit action in the upper right corner of your screen. This will load the profile modification screen, allowing you to update:
- Full Legal Name
- Professional Email Address
- System Role/Title Tier
- Profile Avatar Image

---

## Delete lawyer
When an attorney leaves your firm network or changes organizations, you can remove their system credentials permanently. Access the lawyer's profile, click the edit trigger, and select the destructive **Delete Action**. After confirming the security warning layout, the system executes the following cleanup:
- The primary lawyer profile is deleted from the central user database repository.
- **Automated Access Cleanup:** The lawyer is instantly stripped of visibility and access privileges across all active dossiers they were assigned to.
- They lose the ability to log into the application or view historical documentation, though their past messages and log signatures inside case chats remain preserved for file audit integrity.

---

## Add lawyer to a dossier
To assign an attorney to a specific legal matter, you can link them directly to the target folder pathway. This can be executed right from the lawyer's profile view or within the specific dossier dashboard. Launch the "Add to Dossier" action modal, select the destination dossier from your active list, and confirm. This action immediately grants the lawyer complete folder visibility, enabling them to upload documents, modify indices, and interact with client representatives inside the secure chat module.

---

## Remove lawyer from a dossier
If a lawyer concludes their duties on a case or needs to be reassigned, you can revoke their folder permissions instantly. Select the destination file within their active workspace grid and launch the detachment prompt. 

*Security isolation cascade:* Confirming this action cuts their connection immediately. The lawyer loses folder visibility, document management rights, update notifications, and access to the chat stream for that specific dossier. Because this operates on a *per-dossier basis*, removing them here has zero impact on any other dossiers they are currently managing.

