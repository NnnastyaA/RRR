import { useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Настя",
    age: 25,
    isActive: true,
    });
    console.log(user)

    return (
        <>
          <h2>Имя: {user.name}</h2>
          <h2>Возраст: {user.age}</h2>
          <h2>Статус: {user.isActive ? "Активен" : "Не активен"}</h2>
          <button onClick={() => setUser({...user, name: "Анастасия"})}>Сменить имя</button>
          <button onClick={() => setUser({...user, age: user.age + 1})}>Увеличить возраст</button>
          <button onClick={() => setUser({...user, isActive: !user.isActive})}>Сменить статус</button>  
        </>
    )
};

export default UserProfile;