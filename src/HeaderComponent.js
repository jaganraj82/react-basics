import React from 'react'

export default function HeaderComponent({salutation,name,role}) {
  return (
    <div>
      <h1>Welcome {salutation} {name}</h1>
      <h2>Logged in as</h2>
      {JSON.stringify({role})}
    </div>
  )
}