import _ from 'lodash';

// 개인 정보
const init_data = {
  index : "",
  name : "",
  love : 3,
  hate : 2,
  store : 0,
  lock : 1,
}
 //라운드별 기록
const init_record =  [
  {
    lock : false,
    from_love : [],
    from_hate : []
  },
  {
    lock : false,
    from_love : [],
    from_hate : []
  },
  {
    lock : false,
    from_love : [],
    from_hate : []
  },
  {
    lock : false,
    from_love : [],
    from_hate : []
  },
  {
    lock : false,
    from_love : [],
    from_hate : []
  },
]

const setdata = (idx, name) => {
  const record_init = JSON.parse(JSON.stringify(init_record))
  const data = {...init_data, record : record_init};
  data.index = idx;
  data.name = name;
  return data;
}

const lodash = require("lodash");
const c2 = lodash.cloneDeep([]);

const user = (state = [], action) => {
  switch(action.type) {
    case "RESET" :
      return []
    case "SET_LOCKER" :
      return [...state, {...setdata(action.idx, action.name)}]
    default :
      return state;
  }
}

export default user;