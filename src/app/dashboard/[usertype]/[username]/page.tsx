import MentorDashboard from '@/components/MentorDashboard'
import StudentDashboard from '@/components/StudentDashboard'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <div>Componet 1 for Mentor dashboard</div>
      <MentorDashboard />
      <div>Componet 2 for Student dashboard</div>
      <StudentDashboard />

      <p>These will load dynamically based on userType (Mentor or Student)</p>
      <p>Like: if(user = mentor) MentorDashboard else StudentDashboard</p>
    </div>
  )
}

export default page