# Portfolio
&nbsp;

## Continuous Integration Status Badge with CircleCi on ```master``` branch :

[![CircleCI](https://circleci.com/gh/yoanndelattre/Portfolio/tree/master.svg?style=svg)](https://circleci.com/gh/yoanndelattre/Portfolio/tree/master)

&nbsp;

## Continuous Integration Status Badge with CircleCi on ```dev``` branch :

[![CircleCI](https://circleci.com/gh/yoanndelattre/Portfolio/tree/dev.svg?style=svg)](https://circleci.com/gh/yoanndelattre/Portfolio/tree/dev)

&nbsp;

## Development URL server with Netlify (sync with ```dev``` branch) :

[![Netlify Status](https://api.netlify.com/api/v1/badges/749084b0-af57-4589-8bad-7469abd2a3c6/deploy-status)](https://beta.yoanndelattre.com)

Link dev server -> https://beta.yoanndelattre.com

&nbsp;
&nbsp;

## Branch Method :


### Structure : 
*```"type"/"target"```*

### Example : 
```feature/flipCard```

&nbsp;

#### For ```"type"``` :

* *```dev```* : For the general development of the application (this branch is created rather at the beginning of the project or for the development of the next version of the application).

* *```feature```* : For the development of a new feature.

&nbsp;

#### For ```"target"``` :

* Name of the new feature or bug name resolved (```feature/LoginPage```).



&nbsp;  
&nbsp;

## Commit Method :

### Structure : 
*```"type"("scope"):"subject"```*      
*```("issues")```*

### Example : 
```feat(ProjectsPage):add dark color in front card```  
```Fixes #45```

&nbsp;

#### For ```"type"``` : 

* *```build```* : Modification of the build system (for example modification of the *package.json* file).

* *```docs```* : Modification of the documentation (for example modification of the file *README<i></i>.md*) .

* *```feat```* : Adding a new feature (usually in the ```feature``` branch) .

* *```fix```* : Bug fix .

* *```test```* : Change test strategy with reactjs .

* *```perf```* : Performance improvement.

* *```refactor```* : Change of the code which does not change the functioning (delete of spaces for example) .

* *```issue```* : Github issue.

&nbsp;     
    
#### For ```"scope"``` (optional) :

* ```HomePage```

* ```ProjectsPage```

* ```ContactPage```

* ```404Page```

* ```SendMail``` *(Strategy of sending mails in the form of the contact page).*

* ```Loading``` *(Loading between pages).*

* ```ColorMode``` *(Dark Mode).*

* ```GCP``` *(Strategy of deployment on Google Gloud Platfrom).*

* ```Skaffold``` *(Skaffold development environment).*

* ```Docker``` *(Docker development environment).*

* ```Language``` *(Language selector).*

* ```CookieBanner``` *(Cookie Banner info at the bottom of the page).*

#### For ```"subject"``` :

* Explanation of the modifications made *(short sentence in English).*


#### For ```"issues"``` (optional) :

* names of closed issues on GitHub.
