

const apis=()=>{
  const local='http://localhost:4000/'

  const list={
    signupUser:`${local}api/v1/signup`,
    loginUser:`${local}api/v1/login`
  }
  return list
}

export default apis;