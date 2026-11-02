CSE343 - WEB DEVELOPMENT - LAB 4: TODO APP
=========================================

WHAT THE APP DOES
- Add tasks by pressing Add or Enter.
- Check tasks as completed.
- Show All, Active, or Completed tasks.
- Double-click a task's text, then press Enter to save the change.
- Delete a task using the trash button.
- See how many tasks are unfinished.
- Clear completed tasks or clear all tasks.

HOW TO RUN
1. Open index.html in Chrome or another browser.
2. The app works immediately because app.js is already included.

FILES
- index.html  : structure of the page
- style.css   : styling to match the lab picture
- app.ts      : beginner-level TypeScript source code
- app.js      : generated JavaScript used by the browser
- tsconfig.json : TypeScript compiler settings from the lecture

IF YOU WANT TO COMPILE THE TYPESCRIPT YOURSELF
1. Open a terminal in this folder.
2. If TypeScript is not installed, use:
      npm install --save-dev typescript
3. Compile using:
      npx tsc
4. Refresh index.html in your browser.

LECTURE CONCEPTS USED
- Arrays and array methods: push(), filter(), forEach()
- JavaScript classes and constructors
- let / const and arrow functions (callbacks)
- Basic TypeScript types: string, boolean, number, arrays, function return types
- Basic HTML, CSS, and DOM events

No frameworks, APIs, databases, or other advanced tools are required.
Note: Tasks are stored in memory. Refreshing the page resets the list to the
2 sample items, since saving tasks across visits was not part of the lab image.
