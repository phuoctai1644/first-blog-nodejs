class SiteController {
 
    // [GET] /home
    home(req, res) {
        res.render('home')
    }

    // [GET] /register
    register(req, res) {
        res.render('register')
    }
}

export default new SiteController
