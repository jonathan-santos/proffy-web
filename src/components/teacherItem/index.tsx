import React from 'react'

import api from '../../services/api'
import Teacher from '../../models/teacher'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  console.log(teacher.id)
  
  const newConnection = () => {
    api.post('/connections', {
      user_id: teacher.id
    })
  }

  return (
    <article className='teacher-item'>
      <header>
        <img src={teacher.avatar} alt='Foto'/>
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>

        </p>
        <a href={`https://wa.me/${teacher.whatsapp}`} target='_blank' rel='noopener noreferrer' onClick={newConnection}>
          <img src={whatsappIcon} alt='Whatsapp' />
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem
