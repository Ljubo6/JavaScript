const Course = require('../models/Course')

async function getAllCourses(sortMethod,searchCriteria){
    const pattern = new RegExp(searchCriteria,'i')
    return Course.find({title:pattern}).sort(sortMethod).lean()
}
async function getCourseById(id){
    return Course.findById(id).populate('usersEnrolled').lean()
}
async function createCourse(courseData){
    const pattern = new RegExp(`^${courseData.title}$`, 'i');
    const existing = await Course.findOne({ title: { $regex: pattern } });

    if(existing){
        throw new Error('A course with this name already exist!')
    }
    const course = new Course(courseData)
    await course.save()
    return course
}
async function editCourse(id,courseData){
    const course = await Course.findById(id)

    course.title = courseData.title.trim()
    course.description = courseData.description.trim()
    course.imageUrl = courseData.imageUrl.trim()
    course.duration = courseData.duration.trim()

    return course.save()
}
async function deleteCourse(id){
    return Course.findByIdAndDelete(id)
}
async function enrollCourse(courseId,userId){
    const course = await Course.findById(courseId)

    course.usersEnrolled.push(userId)
    return course.save()
}

module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    enrollCourse,
    editCourse,
    deleteCourse
}