const express = require('express')
const router = express.Router()

require('./routes/Usercredential')(router)
require('./routes/authenticate')(router)
require('./routes/search')(router)


module.exports = router