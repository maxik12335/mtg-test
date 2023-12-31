import React from "react"
import { getPagesList } from "../utils/pagination"
import { validateName } from "../utils/validateName"
import { connect } from "react-redux";
import { User } from "../models/user";


interface MainProps {
  users: User[]
}

interface MainState {
  pagesActive: number
}

class _Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props)
    this.state = {
      pagesActive: 0
    }
  }

  render() {
    const users = this.props.users
    const pages = getPagesList(Math.ceil(users.length / 10))
    const usersPage = users.slice(this.state.pagesActive * 10, (this.state.pagesActive + 1) * 10)

    let pagination = {
      min: [1,2,3],
      mid: [Math.ceil(pages.length / 2) - 1, Math.ceil(pages.length / 2), Math.ceil(pages.length / 2) + 1],
      max: [pages.length - 2, pages.length - 1, pages.length],
      ellipsis: [false, false]
    }
    
    return (
      <main className="main">
        <div className="container">
          <h1 className="users__title">Список пользователей</h1>

          <ul className="users__list">
            {usersPage.map(user => (
              <li key={user.review} className="users__list__item">
                <span className="user__name">{validateName(user.name)}</span>
                <span className="user__date">{user.date}</span>
                <span className="user__review">{user.review}</span>
              </li>
            ))}            
          </ul>

          <div className="paginations">
            {
              pages.map(item => {
                if(pagination.min.includes(item) || pagination.mid.includes(item) || pagination.max.includes(item)) {
                  return (
                    <button
                      onClick={() => this.setState({pagesActive: item - 1})}
                      key={item}
                      className={
                        this.state.pagesActive + 1 === item ? 
                        "paginations__button paginations__button__active" : "paginations__button"
                      }
                    >
                      {item}    
                    </button>
                  )
                }

                if(!pagination.min.includes(item) || !pagination.mid.includes(item) || !pagination.max.includes(item)) {
                  if(pagination.ellipsis.every(item => item === true))  {
                    console.log("true")
                    return
                  }

                  if(pagination.ellipsis[0] === false && item < pagination.mid[pagination.mid.length - 1]) {
                    pagination.ellipsis[0] = true
                    return <div className="paginations__ellipsis">...</div>
                  }

                  if(pagination.ellipsis[1] === false && item > pagination.mid[pagination.mid.length - 1]) {
                    pagination.ellipsis[1] = true
                    return <div className="paginations__ellipsis">...</div>
                  }                  
                }
              })
            }
          </div>
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state: { users: User[] }) => ({
  users: state.users
})

const Main = connect(mapStateToProps)(_Main)

export default Main;