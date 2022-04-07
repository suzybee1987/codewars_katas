// Implement the method length, which accepts a linked list (head), and returns the length of the list.

// For example: Given the list: 1 -> 2 -> 3 -> 4, length should return 4.

// The linked list is defined as follows:

// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }
// Note: the list may be null and can hold any type of value.

// Good luck!

// This kata is part of fun with lists series:

// Fun with lists: length
// Fun with lists: indexOf
// Fun with lists: lastIndexOf
// Fun with lists: countIf
// Fun with lists: anyMatch + allMatch
// Fun with lists: filter
// Fun with lists: map
// Fun with lists: reduce

// https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/ 
// https://www.geeksforgeeks.org/javascript-program-for-finding-length-of-a-linked-list-iterative-and-recursive-approach/ 

function length(head) {
    let temp = head;
    let count = 0;
    while (temp != null) {
        count++;
        temp = temp.next;
    }
    return count;
}

// top answer
// function length(head) {
//     if (head == null) return 0;
//     return 1 + length(head.next);
//   }