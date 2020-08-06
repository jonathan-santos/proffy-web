import React, { useState } from 'react'

import PageHeader from '../../components/pageHeader'
import Input from '../../components/input'
import TextArea from '../../components/textarea'
import Select from '../../components/select'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'

interface ScheduleItem {
  week_day: number
  from: string
  to: string
}

const TeacherForm = () => {
  const [ scheduleItems, setScheduleItems ] = useState([
    { week_day: 0, from: '', to: '' }
  ])

  const createScheduleItem = () => {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: ''}
    ])
  }

  return (
    <div id='page-teacher-form' className='container'>
      <PageHeader
        title='Que incrível que você quer dar aulas!'
        description='O primeiro passo é preencher este formulário de inscrição'
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input
            name='name'
            label='Nome completo'
          />

          <Input
            name='avatar'
            label='Avatar'
          />

          <Input
            name='whatsapp'
            label='Whatsapp'
          />

          <TextArea
            name='bio'
            label='Biografia'
          />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select
            name='subject'
            label='Matéria'
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Ciência', label: 'Ciência' },
              { value: 'Programação', label: 'Programação' },
              { value: 'Matemática', label: 'Matemática' }
            ]}
          />

          <Input 
            name='cost'
            label='Custo da sua hora por aula (em R$)'
          />
        </fieldset>

        <fieldset>
          <legend>
            <span>Horários disponíveis</span>
            <button type='button' onClick={createScheduleItem}>+ Novo Horário</button>
          </legend>

          {scheduleItems.map((scheduleItem: ScheduleItem, count: number) => (
            <div key={count} className='schedule-item'>
              <Select
                name='week_day'
                label='Dia da semana'
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
                name='from'
                label='Das'
              />

              <Input
                type='time'
                name='to'
                label='Até'
              />
            </div>
          ))}

        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt='Aviso importante' />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type='button'>
            Salvar cadastro
          </button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm
