# create-realsuite-web-component
Realsuite-web component boilerplate project


index.js aka entry point is in the root of the project

getting started:
- git clone this repo
```
$cd {project folder}
```
```
$yarn
```
```
$npm build
```
```
$npm start
```
application should come up on port 8989

## Note if you get address in use error when you start your project it 
means you have another project running on port 9000 (default)
- set a custom port number on startup:
```
npm run start -- --port <portnumber>
```