# ApplyDynamicActions

_ApplyDynamicActions, is a small tool, apply events to DOM elements to manipulate classes of any element of the DOM, in a simple way, using only attributes or few lines of code.._
<!-- _Acá va un párrafo que describa lo que es el proyecto_ -->

Sometimes we want to change, remove or add a class to an element, by clicking on it or on another.

With this little tool, it is done using only data-attributes.
It is also possible to do it with some lines of js in a much more simplified way.


## Starting 🚀

_To use it you only need to import the module where you need it, add the data-attributes, or add the config by js, and start it._

<!-- _Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._ -->

See **Deployment** to know how to deploy the project.


### Pre-requirements 📋

_There are not pre requirements_


### Installation 🔧

_Just install the last version_

```
npm install @teyostudios/apply-dynamic-actions --save
```

## Deployment 📦

_Import in your js_
```
import DynamicActions from @teyostudios/apply-dynamic-actions;
```

If you prefer a shorter name
```
import DynamicActions as customName from @teyostudios/apply-dynamic-actions;
```

_There are just 2 functions:_
- addElement : to add element configs, before to start it. (optional) 
- start : to add all the events to the elements. 

### Add Element
There are 3 options to add actions: 
1. By data-attributes

The data attributes are: 
  - data-ts-action: "add|remove|toggle".
  - data-ts-class: classname.
  - data-ts-eventName: eventName (by default "click").
  - data-ts-container-query: "query for document.querySelector".

Problem: Only can add 1 action to an element. 

2. Add by data-ts-config as a JSON text
[
  {
    tsAction: "add|remove|toggle",
    tsClass: classname,
    tsEventName: eventName (by default "click"),
    tsContainerQuery: "query for document.querySelector"
  },
  {
    tsAction: "add|remove|toggle",
    tsClass: classname,
    tsEventName: eventName (by default "click"),
    tsContainerQuery: "query for document.querySelector"
  }, 
  ...
}
Ej: data-ts-config='[{"tsAction": "toggle", "tsClass": "hidde-panel", "tsContainerQuery": "main > .content"}]'


3. Add by js: (in js not use the "ts")
  ```
  DynamicActions.addElement({
    el: document.querySelector("main > .content .info-panel > .action"),
    action: "toggle",
    class: "hidde-panel",
    eventName: "click",
    containerQuery: "main > .content"
  });
  ```
    

### Start
When we want to start the functionality of the code, we add:

```
DynamicActions.start();
```

## Build With 🛠️

_PureJs_

<!-- * [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - El framework web usado
* [Maven](https://maven.apache.org/) - Manejador de dependencias
* [ROME](https://rometools.github.io/rome/) - Usado para generar RSS -->

<!-- ## Contributing 🖇️

Please read the [CONTRIBUTING.md](https://github.com/TeyoStudios/sync-event-listener/blob/master/CONTRIBUTING.md) for details of our code of conduct, and the process for sending us pull requests. -->


<!-- ## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki) -->

## Versioned 📌

We use [SemVer](http://semver.org/) for versioning. For all available versions, loot at the [tags in this repository](https://github.com/teyostudios/apply-dynamic-actions/tags)

## authors ✒️

* **Diego Martín** - *Development* - [ElionTDA](https://github.com/ElionTDA)

<!-- También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto.  -->

## Licence 📄

This project is under the MIT licence - see the file [LICENSE.md](LICENSE.md) for more details. 

## If you liked it and it was useful 🎁

* Tell others about this project 📢
* Invite to a coffee ☕ or a beer 🍺. 
* Give thanks 🤓.

---
⌨️ with ❤️ by [TeyoStudios](https://github.com/TeyoStudios) 😊