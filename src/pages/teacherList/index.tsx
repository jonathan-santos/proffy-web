import React from 'react'

import PageHeader from '../../components/pageHeader'
import Input from '../../components/input'
import TeacherItem from '../../components/teacherItem'

import './styles.css'

const TeacherList = () => (
  <div id='page-teacher-list' className='container'>
    <PageHeader title='Esses são os proffys disponíveis.'>
      <form id='search-teachers'>
        <Input 
          name='subject'
          label='Material'
        />

        <Input 
          name='week_day'
          label='Dia da semana'
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
