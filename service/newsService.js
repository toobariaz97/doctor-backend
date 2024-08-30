const { default: mongoose } = require("mongoose");
const News = require("../models/News");

class NewsService {
static async addNewNews(req) {
    try {
     
      const { title, priority, image, country, isActive, description, type, isNews, timer, endDate, startDate } = req.body;
      const newNews = new News({
        isNews,
        priority,
        title,
        country,
        isActive,
        type,
        image,
        description,
        timer,
        endDate, 
        startDate
      });
      const savedNews = await newNews.save();
      if (!savedNews) return { status: 403, message: "Unable to save News" };
      return { status: 201, data: savedNews };
    } catch (error) {
      return { status: 500, message: error.message };
    }
  }
 static async deleteNews(req) {
    try {
      if (!mongoose.isValidObjectId(req.params.id)) {
        return { status: 400, message: "Invalid News ID" };
      }
      const itemRetrieved = await News.findByIdAndDelete(req.params.id);
      if (itemRetrieved) return { status: 200, message: "Deleted successfully" };
      return { status: 201, message: "Already Deleted" };
    } catch (error) {
      return { status: 500, message: error.message};
    }
  }

  static async findNewsById(req) {
    try {
           
      if (!mongoose.isValidObjectId(req.params.id)) {
        return { status: 400, message: "Invalid News ID" };
      }
      const newsData = await News.findById(req.params.id);
      if (!newsData) return { status: 403, message: "Banner not found" };
      return { status: 200, data: newsData, message: "successful" };
    } catch (error) {
      return { status: 500, message: error.message };
    }
  }

  static async findAllNews(req) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * pageSize;

    const [newsData, totalCount] = await Promise.all([
        News.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
        News.countDocuments(),
      ]);
      const totalPages = Math.ceil(totalCount / limit);
  
      return { status: 200, newsData, totalPages, totalCount, page };
  } catch (error) {
    
  }
  }

static async updateNews(req) {
    try {
           
      if (!mongoose.isValidObjectId(req.params.id)) {
        return { status: 400, message: "Invalid Product ID" };
      }
      const {
        title,
        priority,
        country,
        isActive,
        image,
        description,
        type,
        timer,
        endDate, 
        startDate
      } = req.body;
      const updateNews = await News.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            title,
            priority,
            country,
            isActive,
            image,
            description,
            type,
            timer,
            endDate, 
            startDate
          },
        }, { upsert: true, new: true }
      );
      if (!updateNews)
        return { status: 400, message: "Unable to save News!" };
      return {
        status: 201,
        updateNews
      };
    } catch (error) {
      return { status: 500, message: error.message };
    }
  }

}

module.exports = NewsService;
