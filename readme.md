# nighter.se

## Description

Private homepage that is intended to be smal and give a presentation about me. 
Idé is that site will be lightweight and have the most data in seperate providers.
Code in github and pictures from flickr and so on. 

Webserver is express with nodejs and application will be packaged in a docker container.

Now application can run without an operatingsystem under a unikernel. Check appendix 
"Run site under unikernel" to try that out.

### Installation 

   ```sh
   $ docker build -t nighter/nighter.se .
   $ docker run -p 8080:8080 -d nighter/nighter.se
   ```

### Run site under unikernel

  ```sh
  $ apt-get install qemu-kvm genisoimage
  $ cd unikernel
  $ make
  ```
