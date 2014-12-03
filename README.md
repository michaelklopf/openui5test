A sample web application to start a simple OpenUI5 app.

Including
===
Node.js webserver  
Based on express web framework  
Using npm with package.json to install node.js dependencies  
Using bower with bower.json to install front-end dependencies  
Gulp is taking content from views and static, processing it, and placing the files in a folder called dist  
Download OpenUI5 runtime from here https://sap.github.io/openui5/download.html and place the contents in the folder static/ui5  

What to do to get started
===
Download code as zip file, or clone it, depending on your knowledge.  

Unpack the zip to a place that fits your needs.  

Use the OS X Terminal, Linux Console, or Cygwin/PowerShell and navigate to your folder.  
```cd /Users/yourname/yourdevfolder/sapui5app```

Enter the commands that follow in the project folder which includes the app.js file.  

Create a .env file in the project folder for secret stuff. You can enter the following command in your console:  
```touch .env```

Add this to your .env, fill out the values as you wish:  
>PORT=9999  
>SECRETAUTH=makelotsofrandomnumbersandcharshere  
>SESSIONKEY=dothatheretoo

You need to install node first. After that you can install the dependencies like this:  
```npm install```

It automatically knows to load the dependencies described in package.json.  

So you have bower now and can execute the following command to load the other dependencies:  
```bower install```

It looks into bower.json to load jQuery.  

Start the webserver with typing the following into the console:  
```node app.js```

In your browser, you can reach the application via:  
>http://localhost:9999
