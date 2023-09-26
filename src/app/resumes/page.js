import Header from '../../components/header/index'
import MyResumes from '@/components/myresumes'

export default function ResumePage() {
  const resumes = [
    {
      position: "Frontend Developer",
      createdAt: "25.07.2022",
      stats: {
        show: 89,
        views: 456,
        applies: 28
      }
    },
    {
      position: "Backend Developer",
      createdAt: "15.07.2023",
      stats: {
        show: 5,
        views: 56,
        applies: 2
      }
    },
    {
      position: "Android Developer",
      createdAt: "08.07.2023",
      stats: {
        show: 15,
        views: 39,
        applies: 2
      }
    }
  ];
  return (
    <main>
      <Header/> 
      <div className='container'>
        <div className='flex flex-ai-c flex-jc-sb ptb-7'>
            <h1>Мои резюме</h1>
            <button className='button button-secondary-bordered'>Создать резюме</button>
        </div>  
        <MyResumes resumes={resumes}/>      
      </div>
    </main>
  )
}
