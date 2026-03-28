# Realtime App: Multi-Environment CI/CD Pipeline

This project is a React (Next.js) web application integrated with a professional-grade, containerized Jenkins CI/CD pipeline. It features automated deployment across three independent environments.

## 🚀 Key Features

*   **Modern React App**: Built with Next.js 16+, featuring a responsive layout with 3-5 pages (Home, About, Contact) and dedicated components.
*   **Unit Tested**: Includes comprehensive unit tests using **Jest** and **React Testing Library**.
*   **Containerized Jenkins**: Jenkins runs in a Docker container and leverages the host's Docker engine for building and deploying.
*   **Multi-Environment Deployment**:
    *   **Development (DEV)**: Port `3001` - Automatically builds on every GitHub push.
    *   **Quality Assurance (QA)**: Port `3002` - Resets and deploys every day at 12:00 AM (Scheduled).
    *   **Production (PROD)**: Port `3003` - Manual deployment for final releases.

---

## 🛠️ How it Works

### 1. The Pipeline Logic (`Jenkinsfile`)
The system uses a single, intelligent `Jenkinsfile` that automatically determines its target environment:
*   **Automatic Detection**: It looks at the **Jenkins Job Name** first. If the name contains "QA" or "PROD", it configures the ports and container names correctly.
*   **Parameter Override**: If run manually, users can still select the environment via a Choice Parameter.
*   **Cleanup**: Before every deployment, it uses `docker rm -f` to cleanly remove stale containers without failing the build.

### 2. Containerization (`Dockerfile`)
We use a **Multi-Stage Docker Build** to ensure the production images are lightweight and secure:
*   **Builder Stage**: Installs dependencies and builds the Next.js production bundle.
*   **Runner Stage**: Copies only the necessary files (`.next`, `public`, `node_modules`) to a clean Alpine Linux image.

---

## 🔧 Infrastructure Setup

### Docker Socket Mounting
To allow Jenkins to manage Docker containers on your host, it is configured with:
- **Volume Mapping**: `-v /var/run/docker.sock:/var/run/docker.sock`
- **Permissions**: Internally, we granted permissions to the Jenkins user with `chmod 666 /var/run/docker.sock`.

### Jenkins Plugins
Required plugins for this setup:
- `Docker`, `NodeJS`, `Pipeline`, `GitHub Integration`.

---

## 📖 Deployment Guide

### Manual Deployment
1. Go to your Jenkins Job (e.g., `realtime-app-prod`).
2. Click **Build with Parameters**.
3. Select the environment (e.g., `PROD`).
4. Click **Build**.

### Automatic Deployment (DEV)
Simply push your changes to GitHub:
```bash
git add .
git commit -m "Your update"
git push
```
The **DEV** job will trigger instantly and update your app on port `3001`.

---

## 👤 Credits
Developed as part of the CICD Final Project.
**Developer:** Clyde Timothy
