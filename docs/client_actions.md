# Client Actions
## Create new client
## Amend client
## Add Representative
# Representative Authorization Matrix

The **Representative Assignment Wizard** manages critical cross-resource linkages within the system ecosystem. This specialized procedure bridges **Client Records** and external **Representatives (Agents)**, managing data isolation tiers and information visibility safeguards across your firm.

::: warning SECURITY & AUDIT COMPLIANCE NOTICE
Executing this process fundamentally alters database access permissions. Attaching a representative to a client automatically propagates **full, unrestricted data visibility privileges** over all legal dossiers, document stores, and background filings bound to that client record. Firm administrators must vet identity credentials prior to commitment.
:::

## Operational Lifecycle Flow

The procedure is structured as a single-session responsive wizard designed to maintain operational compliance across mobile environments and desktop control rooms.

### Step 1: Client Selection Triage
*This view initializes dynamically if the wizard is launched from a global dashboard index.*
* **Objective**: Establish the anchor legal target for data propagation.
* **Input Parameter**: A searchable query linked directly to index tables.
* **System Logic**: Selecting an anchor instance automatically pulls down downstream relational structures (associated law offices and operational statuses) while clearing stale staging memory variables.

### Step 2: Representative Evaluation and Matching
* **Objective**: Evaluate current access states and choose candidate accounts for assignment.
* **Analytical Interface**: 
  * Displays verified entity names.
  * Isolates the specific managing legal firm block.
  * Generates a structural loop tracking all personnel currently possessing read/write indicators for this profile.
* **Authorization Selection**: A database-filtered collection listing candidate accounts. For defensive stability, users already matching the data-link signature are systematically excluded to prevent redundant data processing.

### Step 3: Access Control Confirmation
* **Objective**: Conduct a pre-flight compliance check before applying changes to the database.
* **Summary Validation**: Aggregates target file paths and outputs the definitive operational payload size.
* **Commit Resolution**: Clicking the finish button updates the underlying database tables, dispatches isolated backend event queues (`RepAttachedToClientEvent`), fires persistent screen notifications, and performs a route change to return focus to the client's file page.

## Remove Representative