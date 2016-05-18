# nighter.se

## Description

This is my private homepage that is intended to be smal and give a presentation about me. 
The idé is for it to be lightweight and have the most data in seperate providers.
Host code in github and pictures from flickr and so on. 

Webserver is express with nodejs and application will be packaged in a docker container.

### Installation

   $ docker build -t nighter/nighter.se .
   $ docker run -p 8080:8080 -d nighter/nighter.se
