function softUniStudents(input) {
    let coursesObj = {};
    
    for (let line of input) {
        if (line.includes(': ')) {
            let [course, capacity] = line.split(': ');
            capacity = Number(capacity);
            if (!coursesObj[course]) {
                coursesObj[course] = {
                    capacity: 0,
                    students: [],
                };
            }
            coursesObj[course].capacity += capacity;

        } else if (line.includes('email')) {
            line = line.split(' ');
            let split = new RegExp(/[\[\]]/, 'g');
            let [user, credits] = line[0].split(split);
            let email = line[3];
            let course = line[5];
            credits = Number(credits);

            if (coursesObj[course]) {
                if (coursesObj[course].capacity > 0) {
                    coursesObj[course].capacity -= 1;
                    coursesObj[course].students.push({ user, email, credits, })

                }
            }

        }
    }

    let sort = Object.keys(coursesObj).sort((a, b) => coursesObj[b].students.length - coursesObj[a].students.length);

    for (let course of sort) {
        console.log(`${course}: ${coursesObj[course].capacity} places left`);
        let sortCredits = Object.entries(coursesObj[course].students)
            .sort((a, b) => b[1].credits - a[1].credits)
            .forEach(element => {
                console.log(`--- ${element[1].credits}: ${element[1].user}, ${element[1].email}`);
            });
    }
}

softUniStudents([
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'
])