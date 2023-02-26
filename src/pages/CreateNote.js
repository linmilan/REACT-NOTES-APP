import { Link } from 'react-router-dom';
import { IoIoAwrrowBack } from 'react-icons/io';


const CreatNote = () => {
    return(
        <section>
            <header className='create-note__beader'>
                <Link to='/' className='btn'><IoIoAwrrowBack /></Link>
                <button className='btn lg primary'>Save</button>
            </header>
        </section>
    )
}

export default CreatNote