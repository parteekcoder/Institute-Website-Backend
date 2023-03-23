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

AdminBro.registerAdapter(AdminBroMongoose)
const AdminBroOptions = {
  resources: [Faculty,Acadcord,Activity,HOD,Infrastructure,PhdScholar,Placement,Staff,Student],
}
const admin_panel = new AdminBro(AdminBroOptions)
const router = AdminBroExpress.buildRouter(admin_panel)

module.exports = {admin_panel,router}