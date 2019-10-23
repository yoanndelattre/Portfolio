# Portfolio
&nbsp;

## Continuous Integration Status Badge with CircleCi on ```master``` branch :

[![CircleCI](https://circleci.com/gh/yoanndelattre/Portfolio/tree/master.svg?style=svg)](https://circleci.com/gh/yoanndelattre/Portfolio/tree/master)

&nbsp;
&nbsp;


## Branch Method :

&nbsp;

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

&nbsp;

### Structure : 
*```"type"("scope"):"subject"```*      
*```("issues")```*

### Example : 
```feat(ProjectsPage):add dark color in front card```  
```Fixes #45```

&nbsp;

#### For ```"type"``` : 

* ```docs``` : Modification of the documentation (for example modification of the file *README<i></i>.md*) .

* ```feat``` : Adding a new feature (usually in the ```feature``` branch) .

* ```fix``` : Bug fix .

* ```simplification``` : Simplification of a method or code in general .

* ```test``` : Change test strategy with reactjs .

* ```refactor``` : Change of the code which does not change the functioning (for example delete of spaces) .

* ```issue``` : Github issue.

    
#### For ```"scope"``` (optional) :

* ```HomePage``` */*

* ```ProjectsPage``` */Projects*

* ```ContactPage``` */Contact*

* ```404Page``` */page_not_found*

* ```MailSend``` *(Strategy of sending mails with the form of the contact page).*

* ```Loading``` *(Loading between pages).*

* ```ColorMode``` *(Dark Mode).*

* ```GCP``` *(Strategy of deployment on Google Gloud Platfrom with Cloud Run).*

* ```Skaffold``` *(Skaffold development environment).*

* ```Docker``` *(Docker environment).*

* ```Language``` *(Language selector).*

* ```CookieBanner``` *(Cookie Banner info at the bottom of the page).*

* ```Config``` : Modification of the config files (for example modification of the *package.json* file) .

* ```CircleCi``` : Modification of circleci configuration files for unit tests .


#### For ```"subject"``` :

* Explanation of the modifications made *(short sentence in English).*


#### For ```"issues"``` (optional) :

* names of closed issues on GitHub.