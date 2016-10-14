gm-front
========

gulp, bower and typings should be installed globally.
after clone:

    npm install
    bower install
    typings install

Tasks
-----

Run app 

    gulp serve 

build jar

    gulp jar
    
install jar to the local maven repository as io2010.gm:gm:0.0.1-SNAPSHOT

    gulp jar_install
    
deploy jar to a remote repository: see https://www.npmjs.com/package/gulp-maven-deploy


Details
-------

gm front was created by running

    yo gulp-angular


for maven integration see https://www.npmjs.com/package/gulp-maven-deploy    

    npm install gulp-maven-deploy gulp-zip --save-dev


gm-backend
==========

Backend depends on io2010.gm:gm:0.0.1-SNAPSHOT , run gulp jar_install from the other project first.
 
start project

    ./gradlew appRun

build war

    ./gradlew build
