class NewsController {

    // [GET] /news
    index(req, res) {
        res.render('news')
    }

    // [GET] /news/f8-lap-trinh
    show(req, res) {
        res.send('F8 Lap Trinh')
    }
}

export default new NewsController 