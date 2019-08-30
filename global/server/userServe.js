import API from '../request/api.js'
import Request from '../request/request.js'

module.exports = {
    userClass(id) {
        return Request._get(API.USERCLASS(id));
    },
}