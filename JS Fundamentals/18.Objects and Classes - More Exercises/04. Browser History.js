function browserHistory(browserObject, actions) {
    actions.forEach(x => {
        let action = x.split(' ')[0];
        let tab = x.split(' ').splice(1, x.length - 1).join(' ');

        switch (action) {
            case 'Open':
                browserObject['Open Tabs'].push(tab);
                browserObject['Browser Logs'].push(x);
                break;

            case 'Close':
                let index = browserObject['Open Tabs'].indexOf(tab);

                if (index != -1) {
                    browserObject['Open Tabs'].splice(index, 1);
                    browserObject['Recently Closed'].push(tab);
                    browserObject['Browser Logs'].push(x);
                }
                break;

            case 'Clear':
                browserObject['Open Tabs'] = [];
                browserObject['Recently Closed'] = [];
                browserObject['Browser Logs'] = [];
                break;
        }
    });

    console.log(browserObject['Browser Name']);
    console.log(`Open Tabs: ${browserObject['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${browserObject['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${browserObject['Browser Logs'].join(', ')}`);
}

browserHistory({
    'Browser Name': 'Mozilla Firefox',
    'Open Tabs': ['YouTube'],
    'Recently Closed': ['Gmail', 'Dropbox'],
    'Browser Logs': [
        'Open Gmail', 'Close Gmail',
        'Open Dropbox', 'Open YouTube',
        'Close Dropbox'
        ]
    },
    
    ['Open Wikipedia', 'Clear History and Cache', 'Open Twitter']
);