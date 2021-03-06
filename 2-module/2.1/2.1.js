var List = {

    create: function () {
        return {
            value: 'head',
            next: null
        }
    },

    add: function (list, v) {

        if (list.next === null) {
            list.next = {value: v, next: null};
        } else {
            List.add(list.next, v);
        }

    },

    get: function (list, index) {

        if (index === 0) {
            return list;
        }
        else {
            var count = 1;
            var currentList = list.next;
            while (count < index) {
                currentList = currentList.next;
                count++;

                if (currentList === null) {
                    return false;
                }
            }

            return currentList;
        }
    },

    remove: function (list, index) {

        if (list.next === null){
            return false;
        }
        else if (index === 0) {
            list.next = list.next.next;
        }
        else  {
            List.remove(list.next, index-1);
        }
    },

    search: function (list, value) {
        if (list.value === value) {
            return list;
        }
        else if (list.next === null) {
            return null;
        }
        else {
            return List.search(list.next, value);
        }
    },

    isEmpty: function (list) {
        if (list.value !== null && list.next !== null) {
            return false;
        } else {
            return true;
        }
    },

    insertAt: function (list, v, index) {
        if(list.next === null) {
            return false;
        }
        else if (index === 0) {
            list.next = {value: v, next: list.next}
        }
        else  {
            List.insertAt(list.next, v, index-1);
        }
    },

    toArray: function (list) {
        var arr = []
        if (list.next === null) {
            return list.value;
        }
        else if (list.value === 'head') {
            var result = List.toArray(list.next);
            var arr = arr.concat(result);
        }
        else {
            arr.push(list.value);
            var result = List.toArray(list.next);
            var arr = arr.concat(result);
        }
        return arr;
    },

    size: function(list){
        var count;
        if(list.next === null){
            return count = 0;
        } else {
            var result = List.size(list.next)+1;
            return result;
        }
    }


};
var x = List.create();
List.add(x, 1);
List.add(x, 3);
List.add(x, 5)
console.log(List.get(x, 2));
console.log(List.toArray(x)); // [1, 3, 5]
console.log(List.size(x)); // 3
List.remove(x, 1);
console.log(List.toArray(x)); // [1, 5]
List.add(x, 8);
List.add(x, 10);
console.log(List.toArray(x)); // [1, 5, 8, 10]
List.insertAt(x, 11, 2);
console.log(List.toArray(x)); // [1, 5, 11, 8, 10]
console.log(List.search(x, 11));

