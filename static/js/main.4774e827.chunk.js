(this["webpackJsonpcssg-edu-team"]=this["webpackJsonpcssg-edu-team"]||[]).push([[0],{134:function(e,t,n){},135:function(e,t,n){"use strict";n.r(t);var o=n(0),a=(n(1),n(49)),i=n.n(a),s=n(13),r=n(2),c=function(){return Object(o.jsxs)("div",{className:"masthead",children:[Object(o.jsx)(s.b,{to:"/",children:Object(o.jsx)("h1",{className:"site-title",children:"CSSG Education Team"})}),Object(o.jsx)("div",{children:[{name:"Lessons",path:"/lessons"},{name:"Hall of Fame",path:"/hall-of-fame"}].map((function(e){var t=e.name,n=e.path;return Object(o.jsx)(s.b,{to:n,children:Object(o.jsx)("li",{className:"nav-item",children:t})})}))})]})},l=function(){return Object(o.jsx)("div",{className:"footer",children:Object(o.jsxs)("footer",{children:["\xa9 ",(new Date).getFullYear()," - Chiazo & Ron"]})})},h=n(23),u=n.n(h),d="# Lesson 3: Start Fetching Data Asynchronously\n\nWelcome to week 3! The goals for you are as follows:\n\n- build a simple app utilizing an endpoint ([here is an example](https://cssg-edu-team.github.io/endpoint-app/))\n- start learning about http via Axios\n- continue handling user input\n- continue using a CSS framework (Bootstrap)\n- continue learning about React Hooks (useEffect) & asyncronous calls\n\n**Sat, Feb 20 Recap:**\n\n- [Presentation Link](https://docs.google.com/presentation/d/1weIZ8i2Twn4Sr7L8FsYXE216a5y8Tyj72aoF3aJxhXA/edit?usp=sharing)\n- [Recorded zoom video](https://unc.zoom.us/rec/share/VIITeh4SYlMCkaB6eIfW9d2vCbnyajqHRo77aamsOYsc2GDMqjvT1MUBIIaFIQ6h.Ft-E5ZRr6yh8og8N) (Passcode: K02%MrhJ) \n\n## Setting up your repo\n\n1. Navigate to [this link](https://github.com/cssg-edu-team/endpoint-app) to access the endpoint app's repo and click the **fork** button in the top right corner.\n2. Choose your personal github account as the destination for the repo.\n3. Once done, click the **code** tab button and then click the green **code** button. Make sure the https option is selected and click the clipboard icon to copy the repository link.\n4. Open visual studio code (or any code editor you have), click **View** in the top menu bar, then click **Command Palette**. In the pop up, search for **Git: Clone** and paste the link to the repo that you copied. Press enter on your keyboard and choose a location on your computer to store the repository locally. Once you're done, open the repo in a new window!\n\n## Setting up the app\n\n1. Inside the repo, click **View** in the top menu bar again, but this time select **terminal** (or you can press COMMAND + j)\n2. VERY IMPORTANT: enter the following command and paste your copied url at the end: **git remote add myrepo _url_**. For example, I would enter: **git remote add myrepo https://github.com/chiazo/endpoint-app**\n3. run the following command: **npm run install**\n4. next, open the **package.json** file. Change the line saying **homepage** & replace **cssg-edu-team** with your github username. For example, mine would look like this: \"homepage\": \"http://chiazo.github.io/endpoint-app\" because **chiazo** is my github username! :)\n5. follow the commented instructions in the code!\n\n## Background Info + Resources\n\n### Axios & Data Fetching\n\nWe are now moving on to some very real world applications: how do we grab and handle data from the internet or (later on) a database? Essentially, we use **endpoints**, which are urls pointing to data we can grab. Look at endpoints as the center of data transfers: we can get data from them and also send data their way! For now, we will focus on the former.\n\nIn this case, Axios is a module that facilitates this process. We can use its **get()** method, passing in an endpoint string and any other necessary arguments to easily fetch data. For example: **axios.get(\"https://www.google.com\")** would try to grab any info stored on the Google homepage, which would just be html. As you can imagine, being able to use any URL on the internet as an endpoint could create some security risks. However, not all endpoints are created equal! You might need a specially generated API key to access certain data on the internet, or pass specific Headers / Arguments to get the right type of information back. For now, we're going to handle free APIs without a need for an API Key. To learn more about APIs, check [this out](https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/).\n\nAny function that calls axios will need to be declared as asynchronus. For now, think of this as JavaScript saying: \"hmm, I have no idea how long it will take to do what this function wants, so I'm going to pause a bit to make sure it's done before I continue on to the next line of code.\" This is a major oversimplification of what's happening and if you want to go into more depth on Promises, async functions and threads, check out [this tutorial](https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff).\n\nAs a result, 2 things need to happen to make fetching data work:\n\n1. declare your function with the **async** keyword\n2. add a **then(fxn)** and **catch(fxn)** block [each block takes a _function_ as an argument]\n\n- we can declare a function as async in 2 ways: **async function fxn_name()** or **const fxn_name = async () => {}**\n- we need the **then()** block so that JavaScript knows what to do if axios successfully grabs the data and the **catch()** block so it knows what to do if an error occurs (for example: you don't have the right credentials, the url is invalid, the API is broken).\n\nThus a proper call to axios in our async function might look like this:\n**axios.get(`url`).then((response) => {console.log(response.data)}).catch((e) => console.log(e))**.\nThis will print the data stored in our response if it succeeds or print the error if it fails.\n\n### Ternary Expressions & Template Literals\n\nNow that we're fetching data and might have different possible data ending up on our page, we want to make our code & React elements as flexible as possible. As such, we'll be making use of the following tools:\n\n1. **Ternary Expressions**: a simplified if / else statement \u2014 (boolean ? ifTrue : ifFalse)\n2. **Template Literals**: using backticks instead of double quotes to insert  a variable inside of a string \u2014 `hi ${chiazo}`\n\nHere's an example of both.\n\n- **Ternary Expressions**: Assume we have a state variable **name**, with a default value of _null_. While the data is being fetched, we want to make sure our page has something to display. We can use a ternary to add conditional react elements:\n  **{ name ? <div>{name}</div> : <h3>No name available.</h3>}** This code checks if name is not null; if so, it displays its value in a div tag. Otherwise, it adds a header saying no name is available.\n- **Template literal**: Assume we have an endpoint that takes in a parameter called **count**. In our app, we want to make our function that calls axios have a parameter so that we can change how many results we fetch (aka the count). If the endpoint style is like so: _https://www.google.com/count=[COUNT]_, we could make a **url** variable like so with backticks: **const url=`https://www.google.com/count=${input}`**. In this scenario, **input** is the parameter passed into our function that allows the url to easily change, without needing separate url variables.\n\n### React Hooks (useEffect)\n\nLast but not least, we're on to a key part of handling async data calls in React, [useEffect](https://reactjs.org/docs/hooks-intro.html). Last week we saw the basic hook, **useState**.\n\nIf we are fetching data that changes the way the page looks in anyway, we want to use both **useEffect** and **useState**. In this case, **useEffect** will update the page if any changes occur to our state variables. This won't work if you define a regular variable such as **let num = 10**. Always make a state variable for data that is being fetched and rendered onto your page!\n\nIf I wanted to keep track of a string called **name**, the convention is as follows:\n**const [name, setName] = useState(null)**.\n\nNow if I wanted to fetch a name from an endpoint using an async function called **getName**, I would want to call it inside of **useEffect** like so:\n\n**useEffect(() => { if(!name) { getName(setName) }}, [name])**\n\nA couple things are happening here:\n\n- useEffect takes in a function and an optional second parameter (an array containing any state variable it's monitoring). If you don't pass in a 2nd argument or pass in an empty array, useEffect will run every time the page is rendered (which can be costly)\n- the passed in function is checking if the **name** state variable is null\n- if so, it calls the async function, getName & passes it the setName function\n- it's nice to pass the setName function so you can directly update the **name** variable when the axios call succeeds (this would occur in the **then()** block)\n- useEffect is monitoring the **name** state variable, so it can call the inner function any time **name** changes\n\n## Deploy your Endpoint App!\n\n1. enter **git status** in your terminal to see any changes you made.\n2. enter **git add .**\n3. now enter **git commit -m** and in the blank space leave a brief message explaining what you changed in quotation marks.\n4. now we're going to upload our changes to github. enter the command **git push myrepo master**.\n5. The final step!!! Run the command **npm run deploy**. This will publish your website to github pages. Check it out using the following link: https://[your-github-username].github.io/endpoint-app\n\n# What's next?\n\nIn the following week, make the endpoint app your own! At minimum, you should grab data from an endpoint (using the Avatar endpoint is not allowed!) and map that data onto a page in react. Look at the Bootstrap documentation to figure out how to add elements so you can handle user input! Here is a [website](https://apilist.fun/) you can [browse](https://github.com/public-apis/public-apis) for some free APIS.\n\nIf you want a challenge:\n\n- Add the ability for a user to input an endpoint parameter (so the page updates with the info they desire) w/ Bootstrap\n  - ex: Allow a user to specify the number of characters fetched\n- Display both images and text, using Boostrap Grid\n",p=function(){return Object(o.jsx)("div",{className:"home",children:Object(o.jsx)("div",{id:"content",children:Object(o.jsx)(u.a,{source:d})})})},m=function(){return Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)("h1",{children:"Hall of Fame (Spring 2021)"}),Object(o.jsxs)("div",{id:"content",children:[Object(o.jsx)("div",{id:"portfolios",children:Object(o.jsx)("h2",{children:"Portfolios"})}),Object(o.jsx)("div",{id:"todo-apps",children:Object(o.jsx)("h2",{children:"Todo Apps"})}),Object(o.jsx)("div",{id:"endpoint-apps",children:Object(o.jsx)("h2",{children:"Endpoint Apps"})})]})]})},g=function(){return Object(o.jsx)("div",{className:"home",children:Object(o.jsx)("div",{id:"content",children:[{path:"/lesson-one",name:"Lesson 1: Deploy Your Own React Site + Learn Git"},{path:"/lesson-two",name:"Lesson 2: Build a To Do App"},{path:"/lesson-three",name:"Lesson 3: Start Fetching Data Asynchronously"}].map((function(e){var t=e.path,n=e.name;return Object(o.jsx)(s.b,{to:t,children:Object(o.jsx)("li",{children:n})})}))})})},y=function(e){var t=e.lesson;return Object(o.jsx)("div",{className:"home",children:Object(o.jsxs)("div",{id:"content",children:[Object(o.jsx)(u.a,{source:t}),Object(o.jsx)("hr",{})]})})},b=(n(134),function(){return Object(o.jsx)("div",{className:"main",children:Object(o.jsxs)(s.a,{children:[Object(o.jsx)(c,{}),Object(o.jsxs)("div",{children:[Object(o.jsx)(r.a,{exact:!0,path:"/",component:p}),Object(o.jsx)(r.a,{path:"/lessons",component:g}),Object(o.jsx)(r.a,{path:"/hall-of-fame",component:m}),Object(o.jsx)(r.a,{path:"/lesson-one",children:Object(o.jsx)(y,{lesson:"# Lesson 1: Deploy Your Own React Site + Learn Git\n\nWelcome to your first week on the CSSG education team! We're super excited to have you here :)\nThe goals for you this week are as follows:\n\n- set up your own website on github pages using react\n- get comfortable with git\n- play around with customizing your site (font, css, info, etc)\n\n**Sat, Feb 6th recap**:\n- [Presentation Link](https://docs.google.com/presentation/d/1NdJ7YkG0gI1Y_6fuSNYmAz_eMBrlkNwAqs-E_RvkiOY/edit?usp=sharing)\n- [Recorded zoom video](https://unc.zoom.us/rec/share/TWcz4SirF7QXMxlsDc_zuk0j1clwYltHOrixitCyKf5E1BUZzUSZuXLpZacKTv2q.h69RCLWCeDhWwPE4) (passcode: @bGG5G$m) \n\n## Setting up your repo\n\nRequirements:\n\n- npm\n- [node.js](https://nodejs.org/en/)\n- [git](https://git-scm.com/)\n- [visual studio code](https://code.visualstudio.com/) or any code editor your comfortable with\n\nFor those of you who didn't know, github allows you to host a website and all your projects for free. For example, [my personal site](https://chiazo.github.io) is completely handled through Github & runs on [Jekyll](https://jekyllrb.com/). Our goal here is for you to fork this repo and deploy it on your own github.\n\n1. Create a github account & log in!\n2. Navigate to [this link](https://github.com/cssg-edu-team/cssg-edu-team.github.io) to access this site's repo and click the **fork** button in the top right corner. Forking is a way of copying a github repo while still being able to receive any updates made to it.\n3. Choose your personal github account as the destination for the repo.\n4. You will be redirected to the new repo on your account. Click the **settings** tab button and rename the repository name as follows: **[insert-your-github-username].github.io**. For example, my repository name will become: **chiazo.github.io** because **chiazo** is my username on github!\n5. Once done, click the **code** tab button and then click the green **code** button. Make sure the https option is selected and click the clipboard icon to copy the repository link.\n6. Open visual studio code (or any code editor you have), click **View** in the top menu bar, then click **Command Palette**. In the pop up, search for **Git: Clone** and paste the link to the repo that you copied. Press enter on your keyboard and choose a location on your computer to store the repository locally. Once you're done, open the repo in a new window!\n7. If your github isn't connected to visual studio code, click **View** in the top menu bar, then click **Command Palette**. In the pop up, search for **Github Pull Requests: Sign in to Github** and follow the instructions.\n\n## Setting up the app\n\n1. Inside the repo, click **View** in the top menu bar again, but this time select **terminal** (or you can press COMMAND + j)\n2. VERY IMPORTANT: enter the following command and paste your copied url at the end: **git remote add myrepo _url_**. For example, I would enter: **git remote add myrepo https://github.com/chiazo/chiazo.github.io.git**\n3. run the following command: **npm install**\n4. next, open the **package.json** file. This is a super important file for web developers. Here is where you'll define some basics about the app and also see all the commands you can run in the **scripts** section. But first, change the line saying **homepage** & replace **cssg-edu-team** with your github username. For example, mine would look like this: \"homepage\": \"http://chiazo.github.io/\" because (again) **chiazo** is my github username! :)\n5. from there, you can also change the line saying \"name\" to be something other than **cssg-edu-team**. Once you're done, open your terminal so we can begin checking out some git commands!!!\n6. To see live changes to the app, run **npm run start** in the terminal!\n\n## Git Basics + Deploying!\n\nHere are a couple git commands I use all the time & that you'll soon be familiar with:\n\n- git pull origin master\n- git status\n- git add .\n- git commit -m \"[insert message here]\"\n- git log\n- git checkout -b [insert_branch_name]\n\nGit is basically a tool to see any changes you made, make copies of your work so you can go back if you make a mistake, and save changes you made on your computer so they're online and safe. For now, our goal is to save the changes you made (to your package.json file) and upload it to github.\n\n1. enter in **git status** in your terminal to see any new changes you made.\n2. enter either **git add .** (this will add every single change you've made to the \"stage\" so it can be ready to be uploaded) or type **git add package.json** to specifically add this 1 file to the stage\n3. now enter **git commit -m** and in the blank space leave a brief message explaining what you changed in quotation marks. Here's an example: git commit -m \"renamed app in package.json file\"\n4. now we're going to upload our changes to github. enter the command **git push myrepo master**. This is saying _upload my locally saved files from the **master** branch to the online repo nicknamed **myrepo**_. If you'll remember from above, we nicknamed our repo **myrepo**! Always use this command to upload your changes (writing only git push will probably be denied)\n5. Run the command **npm run deploy**. This will publish your website to github pages. Check it out using the following link: https://[your-github-username].github.io\n6. The final step!!! Go to your repo's settings, scroll down to nearly the bottom and under the Github Pages header, change source to **gh-pages**. Save! \n\n# What's next?\n\nIn the following week, make the website you're own! Change the css + add information about you and come to optional office hours to learn more about the app's setup.\n\nYour tasks:\n\n- Edit at least 2 files and upload those changes to github (tell us about you!)\n- Find 2 personal sites with super cool designs (in your opinion) from software engineers / designers / people in the tech world. We'll be using this as inspo to learn about CSS in the future! Use [https://www.bestfolios.com/](https://www.bestfolios.com/) as a starting place!\n"})}),Object(o.jsx)(r.a,{path:"/lesson-two",children:Object(o.jsx)(y,{lesson:"# Lesson 2: Build a To Do App\n\nWelcome to week 2! The goals for you are as follows:\n\n- build a simple to do app ([here is the finished product](https://cssg-edu-team.github.io/todo-app/))\n- start learning about components and props\n- figure out how to use a CSS framework (Bootstrap)\n- begin learning about React Hooks (useState) & event handling\n\n**Sat, Feb 13th recap**:\n- [Presentation Link](https://drive.google.com/file/d/1F05H71cQuH0P7jS7y_fZV6YfoSnCmZHr/view?usp=sharing)\n- [Recorded zoom video](https://unc.zoom.us/rec/share/LhKh2nQnwGEC1Yvt7Bm5cZQNBubQvjS5oqDVLwgIAbETahPcpqgNjnKzEDMGAWq-.B4EyFglM74XP-ZCA) (passcode: t@JSFp8&) \n\n## Setting up your repo\n\n1. Navigate to [this link](https://github.com/cssg-edu-team/todo-app) to access the todo app's repo and click the **fork** button in the top right corner.\n2. Choose your personal github account as the destination for the repo.\n3. Once done, click the **code** tab button and then click the green **code** button. Make sure the https option is selected and click the clipboard icon to copy the repository link.\n4. Open visual studio code (or any code editor you have), click **View** in the top menu bar, then click **Command Palette**. In the pop up, search for **Git: Clone** and paste the link to the repo that you copied. Press enter on your keyboard and choose a location on your computer to store the repository locally. Once you're done, open the repo in a new window!\n\n## Setting up the app\n\n1. Inside the repo, click **View** in the top menu bar again, but this time select **terminal** (or you can press COMMAND + j)\n2. VERY IMPORTANT: enter the following command and paste your copied url at the end: **git remote add myrepo _url_**. For example, I would enter: **git remote add myrepo https://github.com/chiazo/todo-app**\n3. run the following command: **npm run install**\n4. next, open the **package.json** file. Change the line saying **homepage** & replace **cssg-edu-team** with your github username. For example, mine would look like this: \"homepage\": \"http://chiazo.github.io/todo-app\" because **chiazo** is my github username! :)\n5. follow the commented instructions in the code!\n\n## Background Info + Resources\n### Functional Components\nReact is all about functions inside of functions. For this todo app, we have two functional components.\n1. **App** -> this will contain the input field to add tasks & is essentially our home page\n2. **Task** -> this will contain information about each individual task & will be contained within our App component\n\nA common theme you will see is that some of our functions and data will be defined in the parent component (App) and passed down to the child component (Task). Most importantly, this will allow you to handle data at the top level, in one spot instead of inside each separate child class.\n\nIn our case, you will define two functions in the App class:\n1. **handleInput**: takes in an **event** parameter & saves event.target.value as currTask\n2. **addTask**: takes in no parameters and adds the task typed in to the existing array of tasks\n\nFind more info [here](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html)!\n\n### Props & Event Handling\nBecause components are essentially functions, you can pass them parameters. These parameters are known as **props**.\nEvery prop you pass will be stored in object of **prop**erties, that you can access inside the class itself. Here's an example:\n\n**<Task name=\"Clean my room\"/>** corresponds to\n **const Task = ({ name }) => {}**\n\nWhen you add the curly braces around parameters, you can instantly treat the object properties as variables. In this case I could easily write this inside the Task class:\n**console.log(name)** which would print **Clean my room** in Chrome's console.\n\nYou can pass direct values, variables or functions as props. In the case of variables or functions, you'd pass them like so, using curly braces:\n**<Task name={my_name}/>** \n\nA special prop for elements like **<Button>** is _**onClick**_. Any function passed to  _**onClick**_ will run every time a button is clicked, which is helpful for us! ex: **<Button onClick={() => {console.log(\"HI\")}}>Click Me</Button>** will print *HI* everytime you click this button.\n\n### CSS Frameworks (Boostrap)\nSo while doing your own CSS from scratch is fun, it can be tedious. Luckily CSS frameworks are prebuilt, stylish components that you can insert into your code directly.\n\nWe'll be using [Boostrap React](https://react-bootstrap.github.io/components/alerts/) components. Follow the examples in the code to import different elements; you'll notice that instead of normal html like **<button></button>**\nyou'll be capitalizing the name of these elements like so: **<Button></Button>**.\n\n### React Hooks\nLast but not least, we're on to a key part of handling data in React, [hooks](https://reactjs.org/docs/hooks-intro.html). We'll start off with the most basic hook, **useState**.\nReact stores local information in it's _state_. This allows it to keep track of data that may change so it can update only the parts of your app related to this info, instead of updating the entire page.\n\nIf I wanted to keep track of a string called **name**, the convention is as follows:\n**const [name, setName] = useState(\"\")**. This creates a variable called **name** and a function that can update this value called **setName**. On the right of the equal sign, the value passed to useState is an empty string, which becomes **name**'s default value. This default value could be anything: **null**, a string, an object or even an array.\n\nIf I wanted to update name, I would insert this line of code somewhere in my App: **setName(\"chiazo\")**. If I wanted to display name's value on my page, I could do this:\n**return (<div>{name}</div>)**. As you can see, inside our return function, we wrap variables with curly braces!\n\n## Deploy your Todo App!\n\n1. enter **git status** in your terminal to see any changes you made.\n2. enter **git add .**\n3. now enter **git commit -m** and in the blank space leave a brief message explaining what you changed in quotation marks.\n4. now we're going to upload our changes to github. enter the command **git push myrepo master**.\n5. The final step!!! Run the command **npm run deploy**. This will publish your website to github pages. Check it out using the following link: https://[your-github-username].github.io/todo-app\n\n# What's next?\n\nIn the following week, make the todo app your own! At minimum, you should be able to click the Add button and see a new task be added to the list. Look at the Bootstrap documentation to figure out how to add elements like Buttons!\n\nIf you want a challenge:\n\n- Add the ability to delete a task (using a delete button)\n- Add the ability to edit a task (using an edit button)\n- Implement two other elements from Bootstrap (ex: Cards, Alerts, etc)"})}),Object(o.jsx)(r.a,{path:"/lesson-three",children:Object(o.jsx)(y,{lesson:d})})]}),Object(o.jsx)(l,{})]})})});i.a.render(Object(o.jsx)(b,{}),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.4774e827.chunk.js.map