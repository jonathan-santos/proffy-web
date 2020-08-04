import React from 'react'

import PageHeader from '../../components/pageHeader'
import TeacherItem from '../../components/teacherItem'

import './styles.css'

const TeacherList = () => (
  <div id='page-teacher-list' className='container'>
    <PageHeader title='Esses são os proffys disponíveis.'>
      <form id='search-teachers'>
        <div className='input-block'>
          <label htmlFor='subject'>Material</label>
          <input id='subject' type='text' />
        </div>

        <div className='input-block'>
          <label htmlFor='week-day'>Dia da semana</label>
          <input id='week-day' type='text' />
        </div>

        <div className='input-block'>
          <label htmlFor='time'>Hora</label>
          <input id='time' type='text' />
        </div>
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
