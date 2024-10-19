'use client'

import Breadcrumbs from '@/components/Breadcrumbs'
import { useParams } from 'next/navigation'
import '@/styles/styles.css'

export default function Page() {

    const {id} = useParams()
    console.log(id)

    return (
        <div className='container'>
            <Breadcrumbs />
            <h1>Project Page</h1>
        </div>
    )
}