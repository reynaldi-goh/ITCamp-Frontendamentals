# 🧪 Exercise 3: Merge Conflict

## Goal
Practice resolving a merge conflict.  
> You can use **VS Code Source Control** or **Git commands in the terminal**, whichever you prefer.

## Steps

1. Change your `hello.txt` content on **main branch** into just this line:

   ```bash
   Welcome to ITCamp!!!
   ```

2. Merge your new branch you made on Exercise 2 into your current(main) branch:

   ```bash
   git merge <your-branch-name> 
   ```

   > This will create a **merge conflict**, since both your main branch and your new branch edited the same file `hello.txt` differently.
   
3. Resolve the merge conflict. Edit the file so that both changes are kept:

   ```bash
   Welcome to ITCamp!!!
   Hello, my name is <your name>
   I love <something you love>
   ```

4. Stage and commit the resolved file:

   ```bash
   git add .
   git commit -m "Resolve merge conflict in hello.txt"
   ```

5. Push the updated branch to your GitHub fork:

   ```bash
   git push origin main
   ```

✅ You’ve successfully resolved a merge conflict!
