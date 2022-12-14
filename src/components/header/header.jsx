import React from 'react';
import './header.css'
import {FaTrash} from 'react-icons/fa'
import {FaEdit} from 'react-icons/fa'



const Header = () => {
    const [todo,setTodo] = React.useState([]);
    const [value,setValue] = React.useState('')

    const submit = (e) => {
        e.preventDefault();
        setTodo([...todo,{name:value,id:Math.round(Math.random() * 1000) }]);
        setValue('')
        }
        

        const delTodo = (id) => {
            setTodo((item) => {
                return item.filter((el) => el.id !== id)
            })
        }


        const editTodo = (id, name) => {
            const Newtitle = prompt("O'zgartirish",name)
            setTodo((item) =>{
                return item.map((el)=> {
                    if(el.id === id){
                        el.name = Newtitle
                    }
                    return el
                })
            })
        }

    return (
        <div className='container'>
            <div className='wrapper'>
                <form className='form' onSubmit={submit}>
                    <h1>BUGUNGI REJALARINGIZ</h1>
                    <input placeholder='Kiriting' type="text" 
                    value={value}
                    onChange={(e) =>  setValue(e.target.value) }
                    />
        
                    <button>qo'shish</button>
                </form>
                <ul>
                    {todo?.map((item) => (
                        <li className='list' key={item.id}>
                            <p>{item.name}</p>
                            <div className='item_btn'>
                                <button className='delBtn' onClick={() => delTodo(item.id)}><FaTrash/></button>
                                <button className='edBtn' onClick={() => editTodo(item.id, item.name)}><FaEdit/></button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;