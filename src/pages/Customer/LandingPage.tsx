import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
    const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center h-svh'>
        <Button onClick={() => navigate('/login')} className='cursor-pointer'>Login</Button>
    </div>
  )
}

export default LandingPage