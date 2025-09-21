YouTrack App

This is a custom YouTrack frontend app built with React and JetBrains Ring UI.
It integrates into your YouTrack instance and provides project listing and management functionality.

📦 Prerequisites

Before getting started, make sure you have:

Node.js
 (recommended v18+)

npm

🚀 Installation & Development

Clone the repository:

git clone <repo-url>
cd youtrack-app


Install dependencies:

npm install
-------------

npm run build

The output will be in the dist/ folder.
This content should be packaged and uploaded into YouTrack as a custom app
.

🔌 Configure in YouTrack

Log in as an admin to your YouTrack instance.

Navigate to Settings → Custom Apps.

Add a new app:

Choose Upload App and upload a ZIP file containing the dist/ folder contents.

Once installed, the app will appear in the menu or as a UI extension.
