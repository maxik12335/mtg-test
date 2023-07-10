import React from "react"
import { setTimer } from "../utils/time";

import { connect } from "react-redux";
import { updateUsers } from "../store/users/users-actions";
import { updateLang } from "../store/lang/lang-actions";


type HeaderProps = {
  lang: string;
  updateLang: (lang: string) => void;
  updateUsers: (lang: string) => void;
};

type HeaderState = {
  time: string;
  lang: string;
};

class _Header extends React.Component<HeaderProps, HeaderState> {
  timeout: NodeJS.Timeout | number | null = null
  constructor(props: HeaderProps) {
    super(props)
    this.state = {
      time: "",
      lang: ""
    }
  }

  watchTimer = () => {
    this.timeout = setInterval(() => {
      this.setState({...this.state, time: setTimer()})
    }, 1000);
  }

  onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState(({...this.state, lang: event.target.value}))       
    this.props.updateLang(event.target.value)
    this.props.updateUsers(event.target.value)
  }

  componentDidMount() {    
    this.props.updateUsers(this.props.lang)
    this.watchTimer()    
    this.setState(state => ({...state, lang: this.props.lang})) 
  }

  componentWillUnmount() {
    if(this.timeout) {
      clearInterval(this.timeout)
    }    
  }

  render() {    
    return (
      <header className="header">
        <div className="container">
          <img 
            className="logo"
            src="https://mtg-biz.ru/bitrix/templates/mtg/img/logo.png"
            alt="logo"
          />

          <div className="watch">
            {this.state.time}
          </div>

          <select 
            onChange={this.onChangeSelect}
            value={this.state.lang}
            className="select__lang"
          >
            <option className="select__item__lang" value="" disabled></option>
            <option className="select__item__lang" value="ru">ru</option>
            <option className="select__item__lang" value="en">en</option>
          </select>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state: { lang: string }) => ({
  lang: state.lang
})

const dispatchStateToProps = {
  updateUsers: updateUsers,
  updateLang: updateLang,
}

const Header = connect(mapStateToProps, dispatchStateToProps)(_Header)


export default Header;