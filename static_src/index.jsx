import React from 'react'
import ReactDOM from 'react-dom'

let messages = ['Привет', 'Как дела?']

const MessageComponent = (props) => {
  return <div>{props.text}</div>
}

const ButtonComponent = (props) => {
  const addMessage = () => {
    let message = 'Нормально'
    props.messages.push(message)
  }
  const renderMessage = () => {
    addMessage()
    ReactDOM.render(
      <MessageField messages={messages} />,
      document.getElementById('root'),
    )
  }
  return <button onClick={renderMessage}>Respond</button>
}

const MessageField = (props) => {
  return props.messages.map((message) => <MessageComponent text={message} />)
}

ReactDOM.render(
  <>
    <MessageField messages={messages} />
    <ButtonComponent messages={messages} />
  </>,
  document.getElementById('root'),
)

const App = ({ str }) => {
  const [value, setValue] = useState(5)

  const addPlusToString = () => {
    return `${str}+${value}`
  }

  const updateValue = () => {
    setValue(value + 1)
  }

  return (
    <div>
      <h1>HELLO REACT: {addPlusToString()}</h1>
      <button onClick={updateValue}>Update</button>
    </div>
  )
}
