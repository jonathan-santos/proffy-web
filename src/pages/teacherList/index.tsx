import React from 'react'

import PageHeader from '../../components/pageHeader'
import Input from '../../components/input'
import Select from '../../components/select'
import TeacherItem from '../../components/teacherItem'

import './styles.css'

const TeacherList = () => (
  <div id='page-teacher-list' className='container'>
    <PageHeader title='Esses são os proffys disponíveis.'>
      <form id='search-teachers'>
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
          name='time'
          label='Hora'
        />
      </form>
    </PageHeader>

    <main>
      <TeacherItem
        teacher={{
          name: 'Jonathan Santos',
          area: 'Programação',
          introduction: 'Entusiasta em tecnologia, especialmente em Web e Jogos. Apaixonado por React, Godot, CSS e Linux. Adora fazer jogos 3D e sites que mais parecem aplicativos.',
          price: 80.00
        }}
      />

      <TeacherItem
        teacher={{
          name: 'Jonathan Santos',
          area: 'Programação',
          introduction: 'Entusiasta em tecnologia, especialmente em Web e Jogos. Apaixonado por React, Godot, CSS e Linux. Adora fazer jogos 3D e sites que mais parecem aplicativos.',
          price: 80.00
        }}
      />

      <TeacherItem
        teacher={{
          name: 'Jonathan Santos',
          area: 'Programação',
          introduction: 'Entusiasta em tecnologia, especialmente em Web e Jogos. Apaixonado por React, Godot, CSS e Linux. Adora fazer jogos 3D e sites que mais parecem aplicativos.',
          price: 80.00
        }}
      />
    </main>
  </div>
)

export default TeacherList
