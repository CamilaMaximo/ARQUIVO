//template expression

const TemplateExpression = ()=> {
    const name = "Camila"

    const data = {
        age: 31,
        job: "Programadora"
    }
  return (
    <div>
        <p>A soma é : {2 + 2}</p>
        <h3>Bem vinda {name}</h3>
        <p>Sua idade é : {data.age}</p>
        <p>Sua profisão é : {data.job}</p>
    </div>
  )
}

export default TemplateExpression
