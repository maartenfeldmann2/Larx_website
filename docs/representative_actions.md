# Representative Actions

## General
The **Representative** role represents the critical client-side personnel who act on behalf of the corporate or individual client entities you serve. Larx treats representatives as external collaborative partners. Granting them controlled visibility allows them to track case updates, review uploaded documentation, and consult directly with your legal team. Through the Representative Actions dashboard, administrators can create new client user profiles, keep their contact metadata accurate, and carefully control which case folders they are allowed to look into.

Below you will find context and instructions on how to onboard client representatives and manage their precise access permissions across your application environment.

---

## Create new representative
A new client contact person can be onboarded and assigned a representative profile within seconds. Larx provides a guided workflow to register the representative and safely map them to their primary parent client company or file.

### Creation process (Wizard)
- **Full Name:** The complete name of the person acting as the client contact.
- **Professional Email Address:** The unique email used for secure login routing and dossier email updates.
- **Parent Client Assignment:** The specific company or individual client profile this representative is legally authorized to act for.
- **Avatar (Optional):** An optional profile picture upload to easily identify the contact person inside collaboration chat modules.

*System Background Trigger:* Saving this setup triggers an automated onboarding email containing a secure validation link sent to the representative's inbox. Following this path routes them to a verification portal to set up their private login credentials. Once verified, they gain entry to the application, their global client file, and any dossiers specifically assigned to them.

---

## Amend details of a representative
You can update a representative's contact records at any time to preserve folder directory accuracy. Navigate to the specific representative file and select the edit details button to open the modification control pane. You can adjust the following information:
- Full Legal Name
- Professional Email Address
- Associated Parent Client File
- Profile Avatar Image

---

## Delete a representative
If a corporate representative leaves a client's employment or their authorization is revoked, you can delete their user profile. Select the representative from your directory, click edit, and choose the destructive **Delete Action**. Upon completing the confirmation prompt, the application executes the following cascade:
- The representative's user credentials are deleted from the repository.
- The user is completely decoupled from the parent client company profile.
- **Instant Revocation Trigger:** They are systematically stripped of all access permissions across every underlying case dossier, instantly terminating their file visibility and folder access.

---

## Add representative to a dossier
To grant a representative visibility over an active legal matter, you must explicitly assign them to that workspace. Open the representative profile dashboard and trigger the "Add to Dossier" action modal. Select the target folder from the menu list and confirm. 

*Security Parameter:* The selection dropdown strictly displays active dossiers belonging to that representative's **assigned parent client profile**. Once attached, they gain immediate document reading privileges, file upload capabilities, and access to the secure internal case chat.

---

## Remove representative from a dossier
To revoke a representative's visibility over a specific legal matter without altering their global client relationship, use the removal command within the folder view. Choose the contact profile from the folder's active representatives grid and launch the removal modal. 

*Access Revocation Cascade:* Confirming the action cuts their connection to that case file instantly. The representative can no longer view case details, download indexed files, or read chat logs for that dossier. Removing them from this folder does not affect their active access configurations on any other dossiers belonging to that client.
