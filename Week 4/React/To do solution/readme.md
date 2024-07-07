markAsDone(todoId) takes an argument todoId, which is the unique ID of the todo item that you want to mark as done.

parent.children[2]
parent.children returns a live HTMLCollection of the child elements of the parent element. The children property is an array-like object where you can access each child element by its index.
[2] accesses the third child element of the parent (note that array indices start at 0, so 2 refers to the third child).

Get the Parent Element:

const parent = document.getElementById(todoId);
This line gets the element with the specified ID (todoId). This element represents the todo item in the DOM.

Why [2] is Written
The index [2] is used because, in the addTodo function, the third child element appended to childdiv is the button that should be changed to "Done!" when the todo item is marked as done.

Ok so basically 

```
function markAsDone(todoId) {
            const parent = document.getElementById(todoId);
            parent.children[2].innerHTML = "Done!"
        }
```

This function takes the id and marks it as done

The setAttribute() method sets a new value to an attribute.

If the attribute does not exist, it is created first.

