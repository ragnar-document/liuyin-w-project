import API from '../request/api.js'
import Request from '../request/request.js'

module.exports = {
  list() {
    return Request._get(API.CLASSLIST);
  },
  classItem(id) {
    return Request._get(API.CLASSITEM(id));
  },
}
