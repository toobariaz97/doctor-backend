const NewsService = require('../service/newsService');

exports.addNews=async(req, res)=>{
    const {status, ...data } = await NewsService.addNewNews(req);
    return res.status(status).send(data);
}

exports.findById=async(req, res)=>{
    const {status, ...data } = await NewsService.findNewsById(req);
    return res.status(status).send(data);
}

exports.findAll=async(req, res)=>{
    const {status, ...data } = await NewsService.findAllNews(req);
    return res.status(status).send(data);
}

exports.deleteNews=async(req, res)=>{
    const {status, ...data } = await NewsService.deleteNews(req);
    return res.status(status).send(data);
}

exports.updateNews=async(req, res)=>{
    const {status, ...data } = await NewsService.updateNews(req);
    return res.status(status).send(data);
}

