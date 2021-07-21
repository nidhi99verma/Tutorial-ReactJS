import React from 'react'

const UserContext = React.createContext('Ajai Verma')  //default value 
// const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
export default UserContext     //

//marked which lines not use in 1st way