function solve(array) {
    let allObjects = {};
    const getProperties = (obj = {}) => {
        const output = [];
        for (const prop in obj) {
            output.push(`${prop}:${obj[prop]}`);
        }

        return output.join(', ');
    };

    const actions = {
        create: (objName, inherit, name2) => {
            allObjects[objName] = Object.create(inherit ? allObjects[name2] : {})
        },
        set: (objName, ...others) => {
            let [key, value] = others;
            allObjects[objName][key] = value;
        },
        print: (objName) => {


            console.log(getProperties(allObjects[objName]));
        },

    }

    for (let i of array) {
        let [command, objName, ...others] = i.split(' ');
        actions[command](objName, ...others);
    }
}




solve(['create c1',
    'create c2 inherit c1',
    'create c3 inherit c2',
    'set c1 color red',
    'set c2 model new',
    'set c3 bla bla',
    'print c1',
    'print c2',
    'print c3'
])