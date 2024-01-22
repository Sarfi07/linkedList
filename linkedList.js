export default class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

// insert a value at the start
    prepend(value) {
        this.head = Node(value, this.head);
        this.size++;
    }

// insert value at the end
    append(value) {
        const newNode = Node(value);
        let current;

        if (!this.head) {
            this.head = newNode;
            this.size++;

        }
        else {
            current = this.head;
            
            while(current.nextNode) {
                current = current.nextNode;
            }

            current.nextNode = newNode;
            this.size++;
        }
    }
    
// print size
    getSize() {
        return this.size;
    }


// print head(first node)
    getHead() {
        return this.head.value;
    }

// print tail(last node)
    getTail() {
        let current = this.head;

        while(current.nextNode) {
            current = current.nextNode;
        }

        return current.value;
    }

// at(index) return a node at the given index
    at(index) {
        let current = this.head;
        let i = 0

        if (index < 0 || index > this.size) {
            return `Nothing at ${index}th index`;
        }

        while(i <= index) {
            if (i == index) {
                return current.value;
            } else {
                current = current.nextNode;
                i++;
            }
        }
    }
// pop: remove the last element;

    pop() {
        let priorNode;
        let current = this.head;

        while(current.nextNode) {
            priorNode = current;
            current = current.nextNode;

        }

        priorNode.nextNode = null;

    }

// contains(value) return true if value is present in the list
    contains(value) {
        let current = this.head;

        while(current) {
            if (current.value === value) {
                return true
            }
            else {
                current = current.nextNode;
            }
        }

        return false;
    }

// find(value) returns the index of the node containing value
    find(value) {
        let current = this.head;
        let index = 0

        while(current) {
            if (current.value === value) {
                return index;
            }
            else {
                current = current.nextNode;
                index++;
            }
        }

        return null;
    }


//toString print them in the format of ( value ) -> ( value ) -> null

    toString() {
        let s = '';
        let current = this.head;

        while(current) {
            s  = s.concat(`( ${current.value} ) -> `);
            
            current = current.nextNode;
        }

        return s.concat(null);

        
    }


// insertAt(value, index) insert the new value provided at the given index
    insertAt(value, index) {
        let precceeding;
        let succeeding;
        let current = this.head;
        let i = 0;

        if (index > this.size - 1 || index < 0) {
            console.error(`${index}th index is out of range.`);
        }

        while(current) {
            if (i === index && index === 0) {
                succeeding = current;
                this.head = Node(value, succeeding);
                this.size++;
                console.log(this.printLl())
                return;
            }
            else if (i === index && index !== 0) {
                // 300/200 -> 250/200 200/100 -> null
                const newNode = Node(value, precceeding.nextNode);
                precceeding.nextNode = newNode;
                this.size++;
            }
            
            precceeding = current;
            current = current.nextNode;
            i++;
        }
    }


// removeAt(index)  remove the node at the given index
    removeAt(index) {
        let current = this.head;
        let preceding;
        let i = 0;

        if (index > size - 1 && index < 0) {
            console.error(`${index}th index is out of range.`)
        }

        while(current) {
            if (i === index && index === 0) {
                this.head = current.nextNode;
                return;
            }
            else if (i === index && index !== 0) {
                preceding.nextNode = current.nextNode;
                return;
            }
            
            preceding = current;
            current = current.nextNode;
            i++;
        }
    }


    // printLl() {
    //     let current = this.head;

    //     while(current) {
    //         console.log(current.value);
    //         current = current.nextNode;
    //     }
    // }

}


function Node(value=null, nextNode=null) {
    return {
        value,
        nextNode
    }
}