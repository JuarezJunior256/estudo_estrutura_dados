function LinkedList() {
    let Node = function(element) {
        this.element = element
        this.next = null
    }

    let length = 0
    let head = null 

    // adiciona um elemento no final da lista
    this.append = function(element) {
        let node = new Node(element),
        current
        
        if (head === null) {
            head = node
        } else {
            current = head

            while(current.next) {
                current = current.next
            }

            current.next = node
        }

        length++
    }

    // adiciona um elemento em uma posição especifica
    this.insert = function(position, element) {

    }

    // remove um elemento em uma posição especifica
    this.removeAt = function(position) {
        if (position > - 1 && position < length) {
            let current = head,
            previous,
            index = 0
            
            if (position === 0) {
                head = current.next
            } else  {
                while(index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            length--
            return current.element
        } else {
            return null
        }
    }

    // remove o elemento element
    this.remove = function(element) {

    }

    // retorna a posição do elemento
    this.indexOf = function(element) {

    }

    // retorna se está vazia ou não a instancia 
    this.isEmpty = function() {

    }

    // retorna o tamanho da instancia
    this.size = function() {

    }

    // converte em string
    this.toString = function() {
        let current = head,
        string = ''

        while(current) {
            string += current.element + ' '
            current = current.next
        }

        return string
    }

    // mostra no console
    this.print = function() {
        console.log(this.toString());
    }

}

let ll = new LinkedList()

ll.append('João')
ll.append('Jose')
ll.append('Maria')
ll.print();
ll.removeAt(1);
ll.print();