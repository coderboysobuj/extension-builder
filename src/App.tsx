import React, { useEffect } from "react"
export default function App() {
  useEffect(() => {
    browser.storage.local.set({ testing: "Hey, is work." }).then(() => {
      alert("Works!!!")
    }).catch((error: any) => {
      console.log(error);
      alert("Something went wrong.")
    })
  }, [])
  const getMessage = () => {
    browser.storage.local.get('testing').then((response) => {
      console.log("Get Message", response);
    }).catch((err: any) => {
      console.log("Get message Error: ", err)
    })
  }
  return (
    <button onClick={getMessage}>Get message</button>
  )
}
