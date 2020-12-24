//////////////////////////////////////////////////////////////////////////////////////////
//Deployment Overview

	//We're going to deploy our apps online
	//In create-react-app is a command that will build out or project
		//Deployment Bundle: index.html, bundle.js, image.jpg, index.css
			//We've been running create react app in the development mode, all we need to do reploy
			//is to publish the files in the deployment bundle

			//Deployment Target: takes these files and posts them

			//Whenever use types in our domain, will hit server that will always contain the index.html file

			//There will be additional script tags that will make use of some other js/css files

			//We do not need a virtual machine ( like dev server ) to deploy react apps.
				//We aren't executing any code on any server when we post these apps...
					//Only thing we're posting are the deployment bundle static files..
						//remember this when we're deploying apps, costs a lot less than deploying node.js/apis
							//this method is either very cheap or free!





//////////////////////////////////////////////////////////////////////////////////////////
//Deployment with Vercel

	//We're going to deploy Youtube App
		//The deployment process is identical for any project using create-react-app

	//Vercel Deployment
		//Signup at vercel.com
		//Install the Vercel CLI
		//Run 'vercel' in our project directory

	//After you signup for a vercel account to go project directory in terminal
		//run: npm install vercel
		//run: vercel login
			//enter email associated with github.com
				//now find email and verify
					//now run: vercel
						//hit 'enter' for all questions except last one, type N

	//Now we want to make a change to the label, go into project and make change:
		//Now we want to redeploy
			//Go to root directory of project in terminal
				//run: vercel --prod




//////////////////////////////////////////////////////////////////////////////////////////
//Deployment with Netflify

	//Create a github repo for your project
	//Commit changes to your project locally
	//Link your project to the new repo
	//Push your code to github
	//Sign up for an account at netlify.com
	//Link your github account, select the repo you want to deploy

		//THIS DID NOT WORK FOR YOU - TRY TO FIGURE OUT WHY...
			//YOU NEEDED TO REFACTOR THE EXPORT DEFAULT TO NOT THROW A WARNING
				//THE CI INTERFACE FOR THIS DEPLOYMENT BUILD INTERPRETS ALL WARNINGS AS ERRORS
				//AND FAILS THE BUILD

	//To redeploy w/ changes:
		//in terminal's project directory:
			//git add .
			//git commit -m "some comment"
			//git push origin master
				//netlify will detect that repo is edited and will automatically build w/ new changes

