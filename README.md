# Overview

The object-view component will allow you to javascript arrays and different JSON objects inside your application.

# Object viewer component

![objectViewer](https://github.com/b-fadwa/Qodly-object-viewer/blob/main/public/objectViewer.png)

# Datasource

| Name       | Type   | Required | Description                                     |
| ---------- | ------ | -------- | ----------------------------------------------- |
| datasource | object | Yes      | Will contain the object content to be displayed |

# Properties

| Name             | Type    | Default | Description                                                                             |
| ---------------- | ------- | ------- | --------------------------------------------------------------------------------------- |
| Theme            | string  | basic   | will contain the theme value by how the object will be viewed                           |
| Indent width     | number  | 0       | This value sets the indent-width for nested objects                                     |
| Collapse         | boolean | false   | When set to true, all object nodes will be collapsed by default.                        |
