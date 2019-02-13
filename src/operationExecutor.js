'use strict';

class OperationExecutor {
    constructor() {
        this.state = {
            0: this.firstTaskExecute.bind(this),
            1: this.secondTaskExecute.bind(this),
            2: this.thirdTaskExecute.bind(this),
            3: this.fourthTaskExecute.bind(this),
            4: this.fifthTaskExecute.bind(this),
            5: this.sixthTaskExecute.bind(this),
            6: this.seventhTaskExecute.bind(this),
            7: this.eighthTaskExecute.bind(this),
            8: this.ninthTaskExecute.bind(this),
            9: this.tenthTaskExecute.bind(this),
        };
    }

    /**
     * Execute some transformation of incoming arg
     * @param actionType – type of transformation
     * @param arg – incoming arg
     * @returns object with result
     */
    execute(actionType, arg) {
        return this.state[actionType](arg);
    }

    /**
     * First task of homework
     * @param arg – object with value that you should clone
     * arg = { obj1: { ... } }
     * @returns object that contains source object and his modified clone
     */
    firstTaskExecute(arg) {
        /**
         * Place your code here
         */
        let copyObject = jQuery.extend(true, {}, arg.obj1);
        copyObject.firstName = "Zultinbek";
        console.log(arg.obj1);
        return copyObject;
    }

    /**
     * Second task of homework
     * @param arg – object with values that you should combine
     * arg = { obj1: { ... }, obj2: { ... } }
     * @returns object that contains source objects and their combined and modified clone
     */
    secondTaskExecute(arg) {
        let result = {...arg.obj1, ...arg.obj2};
        result.a = 39;
        console.log(arg);
        return result;
    }

    /**
     * Third task of homework
     * @param arg – object with value that you should modify
     * arg = { obj1: { ... } }
     * @returns object that contains modified source object
     */
    thirdTaskExecute(arg) {
        /**
         * Place your code here
         */
        let copyObject = Object.assign({}, arg);
        copyObject.obj1.relatives.forEach(relation => {
            relation.lastName === "Ivanova" ? relation.gender = "female" : relation.gender = "male";
        });
        return copyObject;
    }

    /**
     * Fourth task of homework
     * @param arg – object with value that contains relatives
     * arg = { obj1: { ... relatives: [ ... ] ... } }
     * @returns object that contains array of string with female relatives
     */
    fourthTaskExecute(arg) {
        /**
         * Place your code here
         */
        let greetingsArray = [];
        arg.obj1.relatives.forEach(relation => {
                if (relation.gender === "female") {
                    greetingsArray.push(`Greetings, ${relation.firstName}!`);
                }
            }
        );
        return greetingsArray;
    }

    /**
     * Fifth task of homework
     * @param arg – object which contains new color of the button and the class of it
     * arg = { color: '...', className: '...' }
     * @returns string which contains the class of the button and current color
     */
    fifthTaskExecute(arg) {
        /**
         * Place your code here
         */
        let element = document.getElementsByClassName(arg.className)[0];
        element.style.background = arg.color;
        return `${element.className} ${element.style.background}`;
    }

    /**
     * Sixth task of homework
     * @param arg – object with values that you should handle
     * arg = { obj1: { ... } }
     * @returns object that contains array of items that match the hostname on which the application is running
     */
    sixthTaskExecute(arg) {
        /**
         * Place your code here
         */
        return arg.hostNames.filter(arrayHostName => {
            return arrayHostName === document.location.hostname;
        });
    }

    /**
     * Seventh task of homework
     * @param arg – object which contains simple key-value pairs
     * arg = { obj1: { key: value } }
     * @returns obj that contains swap pairs ('value: key')
     */
    seventhTaskExecute(arg) {
        /**
         * Place your code here
         */
        let object = {};
        for (let key in arg) {
            let value = arg[key];
            object[value] = key;
        }
        return object;
    }

    /**
     * Eighth task of homework
     * @param arg – object which contains two array
     * arg = { obj1: { ... } }
     * @returns obj that built using array's values
     */
    eighthTaskExecute(arg) {
        /**
         * Place your code here
         */
        let object = {};
        let concatArray = [...arg.arr1, ...arg.arr2];
        for (var i = 0; i <= concatArray.length; i += 2) {
            if (concatArray[i + 1] !== undefined) {
                object[concatArray[i]] = concatArray[i + 1];
            } else {
                object[concatArray[i]] = null;
            }
        }
        return object;
    }

    /**
     * Ninth task of homework
     * @param arg – object which contains array of users
     * arg = { obj1: { users: [...] } }
     * @returns obj that contains pairs id: obj with this id
     */
    ninthTaskExecute(arg) {
        /**
         * Place your code here
         */
        let object = {};
        arg.users.forEach(user => {
            object[user.id] = user;
        });
        return object;
    }

    /**
     * Tenth task of homework
     * @param arg – object which contains class of item and empty array
     * arg = { obj1: { ... } }
     * @returns obj that contains the array with info about children of the node
     */
    tenthTaskExecute(arg) {
        /**
         * Place your code here
         */
        let childArray = document.getElementsByClassName(arg.className)[0].children;
        console.log(childArray);
        for (var i = 0; i < childArray.length; i++) {
            arg.childrenInfo.push(`${childArray[i].className} : ${childArray[i].tagName}`);
        }
        return arg.childrenInfo;
    }
}

export default OperationExecutor;
