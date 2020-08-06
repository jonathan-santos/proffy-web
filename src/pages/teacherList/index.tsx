import React, { useState, FormEvent } from 'react'

import PageHeader from '../../components/pageHeader'
import Input from '../../components/input'
import Select from '../../components/select'
import TeacherItem from '../../components/teacherItem'

import api from '../../services/api'

import './styles.css'

const TeacherList = () => {
  const [ subject, setSubject ] = useState('')
  const [ weekDay, setWeekDay ] = useState('')
  const [ time, setTime ] = useState('')
  const [ teachers, setTeachers ] = useState([]) 

  const getTeachers = (e: FormEvent) => {
    e.preventDefault()

    api.get('/classes', { params: {
      subject,
      week_day: weekDay,
      time
    }})
    .then(res => setTeachers(res.data))
    .catch(res => alert('Houve um problema pesquisando os professores'))
  }

  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='Esses são os proffys disponíveis.'>
        <form id='search-teachers' onSubmit={getTeachers}>
          <Select
            name='subject'
            label='Matéria'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            options={[
              { value: 'artes', label: 'Artes' },
              { value: 'ciência', label: 'Ciência' },
              { value: 'programação', label: 'Programação' },
              { value: 'matemática', label: 'Matemática' }
            ]}
          />

          <Select
            name='week_day'
            label='Dia da semana'
            value={weekDay}
            onChange={(e) => setWeekDay(e.target.value)}
            options={[
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
              { value: '0', label: 'Domingo' }
            ]}
          />

          <Input 
            type='time'
            name='time'
            label='Hora'
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button type='submit'>
            Pesquisar
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: any, index) => (
          <TeacherItem
            key={index}
            teacher={teacher}
          />
        ))}
      </main>
    </div>
  )
}

export default TeacherList
