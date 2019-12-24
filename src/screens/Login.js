import React,{useState} from "react"
import { Button, Form, Input } from "antd"
import { Row, Column,Gap } from "../comps/styles"
import { Redirect } from "react-router-dom"


const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 15}
}

const users =[
  {email:"kampower55@gmail.com" ,password:"1234", name:"kameshwar"},
  {email:"test@gmail.com" ,password:"2345", name:"Test"}
]
const Login =()=>{
  const[email,setEmail]= useState("")
  const[password,setPassword]= useState("")
  const[redirect ,setRedirect]= useState(false)

 const goToMain =()=>{
   if(!email || !password){
     alert("you cannot login empty")
     return
    }

  const user = users.filter(user=>{
  if(user.email === email || user.password === password){
    // console.log("im rumming", user)
    return user
  }else{
    // console.log("i should be", user)
     return false
  }

  })

  if(user.length){
    setPassword('')
    setEmail("")
    setRedirect(true)
  }else{
    setPassword('')
    setEmail("")
    alert("either email or pass word is wrong")
  }

}

if(redirect){
  return <Redirect to="/main"/>
}
  return(
    <div
    style={{
      display: "flex",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <Column>
      {/* <Row style={{ alignSelf: "center" }}>

          <img
            style={{ height: 200, marginBottom: 22 }}
            src={require("../assets/Sanjivani_Academy.png")}
            alt="logo"
          />

      </Row> */}
      <Row style={{ alignSelf: "center" }}>
          <h1>Learning Management Admin Panel</h1>
      </Row>
      {/* <Row
        style={{ alignSelf: "center", marginTop: -12, marginBottom: 12 }}
      >
        <span>v 1.3.4</span>
      </Row> */}

      <Form.Item {...formItemLayout} label=" Email" required={true}>
        <Input
          name="email"
          value={email}
          placeholder="Please enter your email"
          onChange={(e)=>setEmail(e.target.value)}
          type="email"

        />
      </Form.Item>
      <Gap/>

      <Form.Item {...formItemLayout} label=" Password" required={true}>
        <Input
          name="password"
          value={password}
          placeholder="Please enter password"
          onChange={(e)=>setPassword(e.target.value)}
          type="password"
          maxLength={10}
        />
      </Form.Item>

      <Button
      style={{width:"55%",alignSelf:"center"}}
      type="primary" onClick={goToMain}>
        Login
      </Button>
    </Column>
  </div>
  )
}


export default Login
