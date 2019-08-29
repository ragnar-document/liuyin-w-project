const API = "http://localhost:4000/api/"

function CLASSITEM(id){
  return CLASSITEM = API + 'class' + '/' + id;
}
module.exports = {
  CLASSLIST: API + 'class',
  CLASSITEM:CLASSITEM
}
