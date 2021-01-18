const DynamicActions = () =>  {
  let elements = [];
  let order = {};

  // let defaultOptions = {
  //     el: null,
  //     action: null,
  //     class: null,
  //     eventName: "click",
  //     containerQuery: null
  // };
  
  /**
   * Process the elements found in the DOM that have the data-ts-action attribute
   */
  const _processData = () => {
    let actionEls = document.querySelectorAll("[data-ts-action], [data-ts-config]");

    actionEls.forEach(el => {
      let newEl = {};
      let size = null;

      // The configuration is in the dataConfig
      let config = el.dataset.tsConfig ?? [];
      config = JSON.parse(config);
      config.forEach(conf => {
        newEl = {
          el: el,
          action: conf.tsAction ?? null,
          class: conf.tsClass ?? null,
          eventName: conf.tsEventName ?? "click",
          containerQuery: conf.tsContainerQuery ?? null
        }

        size = elements.push(newEl);
        order[el] ? order[el].push(size - 1) : order[el] = [size - 1];
      });

      if(el.dataset.tsAction) {
          // The configuration is in the DOM Element
          newEl = {
              el: el, 
              action: el.dataset.tsAction ?? null,
              class: el.dataset.tsClass ?? "",
              eventName: el.dataset.tsEventName ?? "click",
              containerQuery: el.dataset.tsContainerQuery
          }
          size = elements.push(newEl);
          order[el] ? order[el].push(size - 1) : order[el] = [size - 1]
      };
    });
  } 

  /** 
   * Add an elementConfig from js.
   */
  const addElement = (elConfig) => {
    let size = elements.push(elConfig);
    order[elConfig.el] ? order[elConfig.el].push(size - 1) : order[elConfig.el] = [size - 1]
  }

  /**
   * Start the script with the elements added or found in the DOM. 
   */
  const start = () => {
    _processData();

    elements.forEach(el => {
      el.el.addEventListener(el.eventName, _onEventDispatch);
    });
  }

  /**
   * Event triggered function
   */
  const _onEventDispatch = (event) => {
    let target = event.currentTarget;
    let indexes = order[target];

    indexes.forEach(index => {
        let config = elements[index];
        
        let action = config.action;
        let containerQuery = config.containerQuery;
        let className = config.class;
        
        let containers = document.querySelectorAll(containerQuery);
        if(containers.length == 0) {
          containers = [target];
      };

      containers.forEach((container) => {
          if (action && container && className) {
              switch(action) {
                  case "add": 
                      container.classList.add(className);
                      break;
                  case "remove":
                      container.classList.remove(className);
                      break;
                  case "toggle":
                      container.classList.toggle(className);
                      break;
              };    
          };
      });
    })

  }

  return {
      start, 
      addElement
  }
}

export default new DynamicActions();