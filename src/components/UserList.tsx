import React, { useEffect } from 'react'

import { useActions } from '../hooks/useActions';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/actions/user';

const UserList:React.FC = () => {
  const {error, loading,users} = useTypedSelector(state=>state.user)
  const {fetchUsers} = useActions()
  useEffect(()=>{
fetchUsers()
  }, [])

  if(loading){
    return <h1>Идет загрузка ...</h1>
  }
  if(error){
    return <h1>{error}</h1>
  }
  return (
	 <div>
    k;lk;lk;
    {users.map(user=>
    <div key={user.id}>{user.name}</div>
      )}
  </div>
  )
}

export default UserList;