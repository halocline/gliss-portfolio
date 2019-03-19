## About

Code portfolio showcasing example projects.

Portfolio App is Node/React using Material-UI UI components.

## Deployment on Google App Engine

### Build & Deploy

```
#!bash
$ cd [project root directory]
$ npm run build
$ cd /build
$ gcloud app deploy ../app.yml

```

### Preview & Monitor Logs

```
#!bash
$ gcloud app browse # opens app in default browser
$ gcloud app logs tail -s default

```
