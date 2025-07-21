function Node(value = null, nextNode = null) {
    return {
      value,
      nextNode
    }
}

function LinkedList() {
    let size = 0
    let head = null

    return {
        // Add a node to the end
        append(value) {
            const newNode = Node(value)
            if (!head) {
                head = newNode;
                tail = newNode;
            } else {
                tail.nextNode = newNode;
                tail = newNode;
            }
        },

        anotherfunction() {
        },
    }
}










// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// Output: ( dog ) -> ( cat ) -> ( parrot ) -> 
// ( hamster ) -> ( snake ) -> ( turtle ) -> null
