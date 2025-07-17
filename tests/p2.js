const { expect } = require('chai');
const { addTwoNumbers } = require('../scripts/p2.js');

/**
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

describe('addTwoNumbers', () => {
    it('should add two numbers represented by linked lists - example 1', () => {
        const l1 = createLinkedList([2,4,3]);
        const l2 = createLinkedList([5,6,4]);
        const expected = [7,0,8];
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).to.deep.equal(expected);
    });

    it('should add two numbers represented by linked lists - example 2', () => {
        const l1 = createLinkedList([0]);
        const l2 = createLinkedList([0]);
        const expected = [0];
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).to.deep.equal(expected);
    });

    it('should add two numbers represented by linked lists - example 3', () => {
        const l1 = createLinkedList([9,9,9,9,9,9,9]);
        const l2 = createLinkedList([9,9,9,9]);
        const expected = [8,9,9,9,0,0,0,1];
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).to.deep.equal(expected);
    });

    it('should handle one empty list', () => {
        const l1 = createLinkedList([]);
        const l2 = createLinkedList([1,2,3]);
        const expected = [1,2,3];
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).to.deep.equal(expected);
    });

    it('should handle carry over multiple digits', () => {
        const l1 = createLinkedList([9,9]);
        const l2 = createLinkedList([1]);
        const expected = [0,0,1];
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).to.deep.equal(expected);
    });
});
