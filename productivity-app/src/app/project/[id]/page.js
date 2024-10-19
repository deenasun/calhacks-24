import { useParams } from 'next/navigation'

export default function Page() {

    const {id} = useParams()
    console.log(id)

    return (
        <div>
            <h1>Project Page</h1>
        </div>
    )
}