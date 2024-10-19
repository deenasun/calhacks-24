'use client'

import Breadcrumbs from '@/components/Breadcrumbs'
import { useParams } from 'next/navigation'
import '@/styles/styles.css'

export default function Page() {

    const { id } = useParams()

    return (
        <main className='main'>
            <Breadcrumbs />
            <h1>Project Page</h1>
            <div className='grid grid-cols-2 gap-4 w-full '>
                <div className='flex flex-col'>Notes</div>
                <div className='flex flex-col'>Tasks</div>
            </div>
        </main>
    )
}