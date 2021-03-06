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
```feat/flipCard```

&nbsp;

#### For ```"type"``` :

* *```dev```* : For the general development of the application (this branch will be created to gather all the changes of the "feature" branch).

* *```feat```* : For the development of a new feature.

* *```fix```* : For fix a bug or problem.


#### For ```"target"``` :

* Name of the new feature or bug name resolved.

&nbsp;
&nbsp;


## Commit Method :

&nbsp;

### Structure :
*```"type":"subject"```*  
*```("issues")```*

### Example :
```ProjectsPage:add dark color in front card```  
```Fixes #45```

&nbsp;

#### For ```"type"``` :

* ```AllPages```

* ```HomePage``` */*

* ```ProjectsPage``` */Projects*

* ```ContactPage``` */Contact*

* ```404Page``` */page_not_found*

* ```MailSend``` *(Strategy of sending mails with the form of the contact page) .*

* ```Loading``` *(Loading between pages) .*

* ```ColorMode``` *(Dark Mode) .*

* ```GCP``` *(Strategy of deployment on Google Gloud Platfrom with Cloud Run) .*

* ```Docker``` *(Docker environment) .*

* ```Language``` *(Language selector) .*

* ```Navbar``` *(Navbar in all pages) .*

* ```CookieBanner``` *(Cookie Banner info at the bottom of the page) .*

* ```ShareButton``` *(Share Buttons) .*

* ```Config``` : *(Modification of the config files) .*

* ```Package``` : *(Add or remove package/dependencie) .*

* ```ESlint``` : *(ESlint syntax error) .*

* ```Test``` : *(Change test strategy with reactjs) .*

* ```CircleCi``` : *(Modification of circleci configuration files for unit tests) .*

* ```Github``` : *(Modification of configuration files for the Github repository) .*

* ```SEO``` : *(SEO improvement) .*

* ```Docs``` : *(Modification of the documentation) .*


#### For ```"subject"``` :

* Explanation of the modifications made *(short sentence in English).*


#### For ```"issues"``` (optional) :

* names of closed issues on GitHub.