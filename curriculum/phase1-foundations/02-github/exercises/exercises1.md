# 🧪 Exercise 1: GitHub → Local

## Goal
Fork and pull the [ITC curriculum repository](https://github.com/SIMITClub/ITCamp-Frontendamentals), then push changes.  
> You can use **VS Code Source Control** or **Git commands in the terminal**, whichever you prefer.

## Steps

1. On GitHub (ITC account), open the [ITC curriculum repository](https://github.com/SIMITClub/ITCamp-Frontendamentals) and click **Fork**.  
   > Tip: Follow the ITC GitHub account and star the repo.
   <img width="1470" height="774" alt="image" src="https://github.com/user-attachments/assets/06fc56e9-21cf-428b-8943-27017f3d765d" />

2. On GitHub (your own account), open **your** forked repository and copy the repository link.

3. In VS Code, navigate to the directory where you want to place the curriculum code.

4. Open the terminal in VS Code (or use your preferred Git client) and run:

   ```bash
   git clone <your-curriculum-repo-link>
   # Make sure the URL points to your fork, not the ITC account
   ```

5. Navigate to the curriculum directory
   ```bash
   cd ITCamp-Frontendamentals
   ```
   
6. Change the content in `hello.txt` under `starter` folder into your name.

   ```bash
   Hello, my name is <change it into your name>
   ```

7. **Commit and push** your changes using either VS Code Source Control or Git commands.

   ```bash
   git add .
   git commit -m "change name"
   git push
   ```
   
8. On GitHub, verify that your updates appear in your forked repository.  
> Note: The ITC repository will remain unchanged.

9. **⚔️ Optional Challenge:** If you finish early, copy your Lesson 1 code, place it in the `lesson 1` folder, and push it to your GitHub repository using your preferred method.
