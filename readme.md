

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

    Those functions mentioned above are all methods used in DOM. Document Object Model needs to interact with each HTML elements to perform a certain task. The usage of these methods depends on how we want to access our elements. 
    
        getElementById accesses elements through id attribute. Returns a single element.
        geElementsByClassName accesses elements through tag name. Returns an HTMLCollection.
        querySelector accesses elements through any valid css selector. Returns the first element with given selector.
        querySelectorAll accesses elements through any valid css selector. Returns a Nodelist of every elements with given selector.



2. How do you **create and insert a new element into the DOM**?

    To create a new element we can use the createElement() method. We pass the tag name of the desired element as argument. It creates the elemtent inside the DOM. We need the access the parent element afterwards to add the new element to it using addChild() method with the new element passed as an argument.





3. What is **Event Bubbling** and how does it work?

    Event bubbling is similar to a priority list but for JS events. If we have a parents and a child element and both of them has a certain eventListener assigned to them, if the user clicks on both of them, the deepest most element's in our case the child's event with be executed first then it'll propagate to the parent's event. Some events have this behavior by default.

        Events with event bubbling: click, focusout, keydown
        Events without event bubbling: focus, blur



4. What is **Event Delegation** in JavaScript? Why is it useful?

    Event Delegation is a way of using eventLIsteners dynamically. A common case for event delegation is an HTML list. Instead of repeating same event on every list element we can add the eventListerner to the parent and pass an arrow function with "event" as argument. Inside the function body event.target is used to identify which element way clicked. 

    Using event delegation improves performance of the programs and makes events dynamic.



5. What is the difference between **preventDefault() and stopPropagation()** methods?


    Methods mentioned above don't share certain key differences but here are what they do:

        preventDefault()
            It prevents elements default behavior and controls default browser action. Typically used in forms.

        stopPropagation()
            Prevents events from bubblimg up and controls the event flow. 

---