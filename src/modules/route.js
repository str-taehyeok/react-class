import { handleActions } from 'redux-actions'

const initialValue = {
  jobs : {
    developer : {
      name : "흰둥이",
      skills : ["React.js", "Node.js"]
    },
    planner : {
      name : "홍길동",
      skills : ["Excel", "Powerpoint"]
    }
  }
}

const route = handleActions({}, initialValue)

export default route;