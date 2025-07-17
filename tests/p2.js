 * Definition for singly-linked list node 
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * Helper function to create linked list from array 
 */ 
function createLinkedList(arr) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummyHead.next;
}

/**
 * Helper function to convert linked list to array 
 */ 
function linkedListToArray(node) {
    let arr = [];
    while (node !== null) {
        arr.push(node.val);
        node = node.next;
    }
    return arr;
}
