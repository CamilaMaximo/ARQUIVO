

const changeMessage = (handlemessage) => {
    const messages = ["oi", "Olá", "Tudo bem?"]
  return (
    <div>
      <button onClick={() => handlemessage(messages[0])}>1</button>
      <button onClick={() => handlemessage(messages[1])}>2</button>
      <button onClick={() => handlemessage(messages[2])}>3</button>
    </div>
  )
}

export default changeMessage
