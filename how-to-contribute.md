# How to Contribute to the Curriculum

## 🔱 What is Forking?

Forking is **copying someone else's GitHub repository** to your own account so you can make changes **without affecting the original**.

---

## 🚀 Getting Started

### 🛠️ 1. Fork the Repo

#### ✅ Steps:

1. Go to [https://github.com/SIMITClubAdmin/ITCamp-Frontendamentals](https://github.com/SIMITClubAdmin/ITCamp-Frontendamentals)
2. Click the **"Fork"** button (top-right of the page)
3. Click the **"Create Fork"** button

Now, you'll have a copy like:
`https://github.com/your-username/ITCamp-Frontendamentals`

---

### 💻 2. Clone Your Fork Locally

Open your terminal and changt the GitHub repository URL to your fork:

```
git clone https://github.com/your-username/ITCamp-Frontendamentals.git
cd ITCamp-Frontendamentals
```

---

## 🔂 Typical Workflow

Once you've set things up, here's the usual cycle:

### 🔄 1. Keep Your Fork Updated

Before working on anything, make sure your fork is up to date!

1. Go to **your fork** on GitHub
2. Click the **"Sync fork"** button (usually near the top)
3. Click **"Update branch"**

GitHub will automatically fetch and merge changes from the original repo.

### 📝 2. Make Changes

Stage all files

```bash
git add .
git commit -m "Your message here"
```

---

### 🚀 3. Push Changes to Your Fork

```bash
git push origin main
# or git push origin <your-branch-name> if using branches
```

---

### 📦 4. Create a Pull Request (PR)

1. Go to your fork on GitHub
2. Click **“Contribute” > “Open pull request”**
3. Fill in the title, description, and submit it

---
