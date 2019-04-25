# Portfolio
&nbsp;
&nbsp;

## Development URL server (sync with "dev" branch) :

https://beta.yoanndelattre.com

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

* *```hotfix```* : For quick fixes (one or two commit).


#### For ```"target"``` :

* Name of the new feature or bug name resolved (```hotfix/FailLogin```).



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

* *```fix```* : Bug fix (usually in the ```hotfix``` branch) .

* ```perf``` : Performance improvement.

* ```refactor``` : Change of the code which does not change the functioning (delete of spaces for example) .      
     
    
#### For ```"scope"``` (optional) :

* ```HomePage```

* ```ProjectsPage```

* ```ContactPage```

* ```SystemSendMail``` *(Strategy of sending mails in the form of the contact page).*

* ```SystemLoading``` *(loading between pages).*

* ```ColorMode``` *(Dark Mode).*


#### For ```"subject"``` :

* Explanation of the modifications made *(short sentence in English).*


#### For ```"issues"``` (optional) :

* names of closed issues on GitHub.
