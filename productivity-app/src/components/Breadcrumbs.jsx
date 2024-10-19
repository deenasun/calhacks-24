'use client'

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function Breadcrumbs() {
    let breadcrumbs = [{
        key: 'root',
        text: 'Home',
        path: '/'
    }]

    breadcrumbs.push(...constructBreadcrumbsFromParams())

    return (
        <div className='flex flex-row'>
            {breadcrumbs.map((breadcrumb) => {
                const index = breadcrumbs.indexOf(breadcrumb)
                console.log(index)
                if (index < breadcrumbs.length - 1) {
                    return (
                        <>
                        <Breadcrumb key={breadcrumb.key} text={breadcrumb.text} path={breadcrumb.path} />
                        <span className='mr-2'>/</span>
                        </>
                    )
                }
                return (
                    <Breadcrumb key={breadcrumb.key} text={breadcrumb.text} path={breadcrumb.path} />
                )
            })}
        </div>
    )
}

function constructBreadcrumbsFromParams() {
    const params = useParams()
    const path = usePathname()
    const breadcrumbs = []

    const pathArr = path.split('/').slice(1)

    console.log('arr', pathArr)

    for (let i = 0; i < pathArr.length; i++) {
        switch (pathArr[i]) {
            case 'project':
                breadcrumbs.push({
                    key: i,
                    text: 'Project',
                    path: `/project/${params?.id}`
                })
                break;
        }
    }

    console.log(breadcrumbs)
    return breadcrumbs
}

export function Breadcrumb({ key, text, path }) {

    return (
        <Link href={path} className='mr-2 hover:underline hover:underline-offset-4'>
            {text}
        </Link>
    )
}