const API = "http://localhost:4000/api/"

function CLASSITEM(id){
  return CLASSITEM = API + 'class' + '/' + id;
};
function USERCLASS(id) {
  return USERCLASS = API + 'user' + '/' + id;
}
module.exports = {
  CLASSLIST: API + 'class',
  CLASSITEM: CLASSITEM,
  USERCLASS: USERCLASS
}
