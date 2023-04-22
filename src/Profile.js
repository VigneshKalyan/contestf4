import {useEffect,useState} from 'react';
const Profile = () => {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const id = localStorage.getItem('id');
      fetch(`https://dummyjson.com/users/${id}`)
        .then(res => res.json())
        .then(data => setUser(data));
    }, []);
  
    return (
      <div>
        {user ? (
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };

  export default Profile;