# Portfolio
&nbsp;

## Continuous Integration Status Badge with CircleCi on ```master``` branch :

[![CircleCI](https://circleci.com/gh/yoanndelattre/Portfolio/tree/master.svg?style=svg)](https://circleci.com/gh/yoanndelattre/Portfolio/tree/master)

&nbsp;
&nbsp;


## Branch Method :

### Structure : 
*```"type"/"target"```*

### Example : 
```feature/flipCard```

&nbsp;

#### For ```"type"``` :

* *```dev```* : For the general development of the application (this branch is created for the development of the next version of the application).

* *```feature```* : For the development of a new feature (this branch will then merge with the ```dev``` branch).


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

    
#### For ```"scope"``` (optional) :

* ```HomePage``` */*

* ```ProjectsPage``` */Projects*

* ```ContactPage``` */Contact*

* ```404Page``` */page_not_found*

* ```MailSend``` *(Strategy of sending mails in the form of the contact page).*

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