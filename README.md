# Artha Primitives

A collection of primitives used in the Artha language. Initially, I had added it to the Artha repo but I decided to establish it as a standalone repository so that I can create a documentation page for it and then import it into the systems that use it.

# Usage

The steps below demonstrate how to install the libraries, generate the documentatio, start the docusaurus server and build the docusaurus server.

### Install Libraries

```
npm run install:all
```
This command installs both the docusaurus packages and the artha-primitive packages.

### Generate Documentation

```
npm run generate-documentation
```
This command generates documentation for the primitives and places them in the docs folder in the docusaurus directory (called docs, so the path is ./docs/docs). It also vaidates the primitives using the schema and produces a report establishing the validity of the primitives.

### Start Documentation Server
```
npm run start
```
This command first generates the documentation and then starts the docusaurus server. The site can be found at url http://localhost:3000.

> [!NOTE]
> Currently, when the documentation is regenerated, after the first time, the server doesn't recompile with the new documentation until I restart the server. There are several reasons why this could be happening and I will investigate and remove this note once the issue has been addressed.

### Build Documentation
```
npm run build
```
This command regenerates the documentation and then builds the docusaurus server and saves the output in the `docs/build` folder. To serve the built site, please see the serve documentation below.

### Serve Built Documentation
```
npm run serve
```
This command serves the built documentation contained in the dist folder inside the docs folder. Eventually, I will deploy this to github pages.
