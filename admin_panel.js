const AdminBro = require('admin-bro')
const AdminBroMongoose = require('@admin-bro/mongoose')
const AdminBroExpress = require('@admin-bro/express')

const Faculty = require('./models/Faculty')
const Acadcord = require('./models/Acadcord')
const Activity = require('./models/Activity')
const HOD = require('./models/HodMessage')
const Infrastructure = require('./models/Infrastructure')
const PhdScholar = require('./models/PhdScholar')
const Placement = require('./models/Placement')
const Staff = require('./models/Staff')
const Student = require('./models/Student')

const Navbars = require('./models/navbar');
const Footer = require('./models/footer');
const Clubs = require('./models/club');
const News = require('./models/news');
const About = require('./models/about');




AdminBro.registerAdapter(AdminBroMongoose)
const AdminBroOptions = {
  resources: [Faculty,Acadcord,Activity,HOD,Infrastructure,PhdScholar,Placement,Staff,Student,
              Navbars,Footer,Clubs,News,About],
}
const admin_panel = new AdminBro(AdminBroOptions)
const router = AdminBroExpress.buildRouter(admin_panel)

module.exports = {admin_panel,router}