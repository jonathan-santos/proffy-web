import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

interface TeacherItemProps {
  teacher: any
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => (
  <article className='teacher-item'>
    <header>
      <img src='https://avatars0.githubusercontent.com/u/18014023?s=460&u=37a96704fa38c8ad238e053ea4dda9a97f1ff297&v=4' alt='Foto'/>
      <div>
        <strong>{teacher.name}</strong>
        <span>{teacher.area}</span>
      </div>
    </header>

    <p>
      {teacher.introduction}
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ {teacher.price}</strong>

      </p>
      <button type='button'>
        <img src={whatsappIcon} alt='Whatsapp' />
        Entrar em contato
      </button>
    </footer>
  </article>
)

export default TeacherItem
