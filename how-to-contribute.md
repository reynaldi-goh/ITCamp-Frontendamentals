# How to Contribute to the Curriculum

## 🔱 What is Forking?

Forking is **copying someone else's GitHub repository** to your own account so you can make changes **without affecting the original**.

---

## 🚀 Getting Started

## 🛠️ 1. Fork the Repo

### ✅ Steps:

1. Go to [https://github.com/SIMITClubAdmin/ITCamp-Frontendamentals](https://github.com/SIMITClubAdmin/ITCamp-Frontendamentals)
2. Click the **"Fork"** button (top-right of the page)
3. Click the **"Create Fork"** button

Now, you'll have a copy like:
`https://github.com/your-username/ITCamp-Frontendamentals`

---

## 💻 2. Clone Your Fork Locally

Open your terminal:

```
git clone https://github.com/your-username/ITCamp-Frontendamentals.git
```
```
cd ITCamp-Frontendamentals
```

---

## 🌊 3. Add the Original Repo as "Upstream"

```
git remote add upstream https://github.com/SIMITClubAdmin/ITCamp-Frontendamentals.git
```

Check remotes:

```
git remote -v
```

You should see both `origin` (your fork) and `upstream` (the original repo).

---
## 🔂 Typical Workflow
Once you've set things up, here's the usual cycle:

### 📝 1. Make Changes

Stage all files
```bash
git add .
```

Commit
```bash
git commit -m "Your message here"
```

---

### 🚀 2. Push Changes to Your Fork

```bash
git push origin main
# or git push origin <your-branch-name> if using branches
```

---

### 📦 6. Create a Pull Request (PR)

1. Go to your fork on GitHub
2. Click **“Contribute” > “Open pull request”**
3. Fill in the title, description, and submit it

---

### 🔄 7. Keep Your Fork Updated

To sync your fork with the original project:
(use this before you start working or after some time to get the latest updates)

```bash
git fetch upstream
```
```bash
git checkout main
```
```bash
git merge upstream/main
```
resolve conflicts if any
```bash
git push origin main
```

---
