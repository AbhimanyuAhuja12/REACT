# REACT
It’s not a framework
Angular or Ember are frameworks where some decisions are already made for you. React is just a library and you need to make all decisions by yourself. It focuses on helping you to build user interfaces using components.


# parcel(zero config tool)
-dev build
-local Server
- Refressing your page(HMR= Hot Module Replacement)- uses a file watching algorithm (which is written in C++)
- faster build (because of caching)
-Image optimization(most expensive thing in your web browser is load images)
-Minification of files(bundling)
-Compressing
-Consistent Hashing
-Code Splitting
-Differential Bundling (to support older browsers ,when you script type="module", it  generates nomodule fallback for older browser){different bundle for different types of browser}
-Diagnostics (good error handling ) {beautiful errors- to incresse your dev experience}
-HTTPs (parcel index.html --https)
-Tree shaking(suppose we have 100 of function and we are using 4-5 functions , it will remove everything that is not used)
-lazy loading
-Different Build for dev and prod bundles


there  are two types of export/import
-default export
    - export default <Name of component or variable>
      import component from "path"
 
 
 -  export const Component
 import {Component }  from "path"




# Props
Props are a short form for properties, and they simply refer to the internal data of a component in React. They are written inside component calls and are passed into components. They also use the same syntax as HTML attributes, e.g._ prop=“value”. Two things that are worth remembering about props; Firstly, we determine the value of a prop and use it as part of the blueprint before the component is built. Secondly, the value of a prop will never change, i.e. props are read-only once they are passed into components



# State 
State is an object that holds some information that may change over the lifetime of the component. Meaning it is just the current snapshot of data stored in a component’s Props. The data can change over time, so techniques to manage the way that data changes become necessary to ensure the component looks the way engineers want it to, at just the right time — this is called State management.
In React, state can also be tracked globally, and data can be shared between components as needed. Essentially, this means that in React apps, loading data in new places is not as expensive as it is with other technologies. React apps are smarter about which data they save and load, and when. This opens up opportunities to make interfaces that use data in new ways.





# React hooks 
they are normal js utility function
their are multiple hooks in react

useState()- This hook takes some initial state and returns two value. The first value contains the state and the second value is a function that updates the state. The value passed in useState will be treated as the default value.
const [var, setVar] = useState(0);
            Superpowerful state variable in react 
            maintains the state of your variable
           import it as named import {}
           import {UseState}  from "react"
Updating state using useState Hook:-
To update states using useState we will use the second value passed in useState hook which updates the first value.
           setVar(newState);



useEffect()





# whenever there is change in state variable update, react triggers a reconciliation cycle (re render the componenet)