const Article = require('../models/Article')

async function getAllArticles(search){
    const pattern = new RegExp(search,'i')
    return Article.find({title: pattern}).lean()
}
async function getArticleById(id){
    return Article.findById(id).lean()
}
async function createArticle(articleData){
    const pattern = new RegExp(`^${articleData.title}$`, 'i');
    const existing = await Article.findOne({ title: { $regex: pattern } });

    if(existing){
        throw new Error('An article with this name already exist!')
    }
    const article = new Article(articleData)
    await article.save()
    return article
}
async function editArticle(id,articleData){
    const article = await Article.findById(id)

    article.description = articleData.description

    await article.save()
    return article
}
async function deleteArticle(id){
    return Article.findByIdAndDelete(id)
}

module.exports = {
    getAllArticles,
    createArticle,
    getArticleById,
    editArticle,
    deleteArticle
}