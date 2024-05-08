# **v1.0.0 (2024-05-08)**

First release of the `better-nice-select` component. better-nice-select is the successor to the (bootstrap-nice-select component)[https://github.com/kevingostomski/bootstrap-nice-select] and is changing much of the UI design and some features it provided in the old release. All peerDependencies got removed, it is now rewritten in Typescript for a more robust and maintainable code, to improve the speed of development, and make the code more scalable. In addition, it can now be used without Bootstrap or a font library like Fontawesome! The main features and changes are the following:

- Rewritten in Typescript and generating output to Javascript
- Modern looking scrollable select list option
- Fully skinnable, CSS built with SASS 
- Changes of UI Design to make it look less childish and more like a actual UI component built-into the browser or system
- (Localization)[https://github.com/kevingostomski/better-nice-select/tree/main/src/ts/locale]
- Get data in JSON format using AJAX/Fetch and have them searchable via functionName or a callback function
- Allow users to type in new options and add it on the fly via tagging option
- Setting own icons option to override preexisting ones
- Custom events `inserted` and `removed`  to add custom logic after the event listeners
- Added typeahead and autocomplete functionality