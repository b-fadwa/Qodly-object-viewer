# Overview

The object-view component , built using the react-json-view library, will allow you to javascript arrays and different JSON objects inside your application.

# Object viewer component

![objectViewer](https://github.com/b-fadwa/Qodly-object-viewer/blob/main/public/objectViewer.png)

# Datasource

| Name       | Type   | Required | Description                                     |
| ---------- | ------ | -------- | ----------------------------------------------- |
| datasource | object | Yes      | Will contain the object content to be displayed |

# Properties

| Name                          | Type    | Default | Description                                                                                                                        |
| ----------------------------- | ------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Root Name                     | string  | root    | will contain the root node's name of the whole object.                                                                             |
| Theme                         | string  | basic   | will contain the theme value by how the object will be viewed.                                                                      |
| Indent width                  | number  | 0       | This value sets the indent-width for nested objects.                                                                                |
| Collapse                      | boolean | false   | When set to true, all object nodes will be collapsed by default.                                                                   |
| Icon Style                    | string  | circle  | This value refers to the icon of the collapse/expand icons. There are three values for that : circle , triangle, square.            |
| Display Data Types            | boolean | false   | When set to true, each value will be preceeded by its type.                                                                         |
| Collapse Strings after length | number  | 100     | Strings will be collapsed and cutted of by that given length, and clicking on that collapsed text will make the whole text visible. |
| Group Arrays After Length     | number  | 5       | Arrays will be grouped by the count of this given value.                                                                            |
| Display Object Size           | boolean | false   | When set to true, the objects/arrays sizes will successed by their size ( n items).                                                 |
| Sort Keys                     | boolean | false   | When set to true, the object keys will be ordered.                                                                                  |
| Enable Clipboard              | boolean | false   | When set to true, a clipboard icon will be visible and will allow the user to copy the object's contents to clipboard.              |
| Quotes On Keys                | boolean | false   | When set to true, the object's keys will be envelopped by "".                                                                       |
