import {FrameworkCard} from "@/components/FrameworkCard";

const frameworks = [
    {
        name: 'Next.js',
        icon: '/programming/nextjs.png',
        href: '/deployment/frontend/nextjs'
    },
    {
        name: 'React',
        icon: '/programming/react.png',
        href: '/deployment/frontend/react'
    },
    {
        name: 'Vue',
        icon: '/programming/vue.png',
        href: '/deployment/frontend/vue'
    },
    {
        name: 'Nodejs',
        icon: '/programming/nodejs.png',
        href: '/deployment/backend/nodejs'
    },
    {
        name: 'Laravel',
        icon: '/programming/laravel.png',
        href: '/deployment/frontend/laravel'
    },
    {
        name: 'PostgreSQL',
        icon: '/programming/postgres.png',
        href: '/deployment/database/postgres'
    },
    {
        name: 'MongoDB',
        icon: '/programming/mongodb.png',
        href: '/deployment/database/mongodb'
    },
    {
        name: 'Spring',
        icon: '/programming/spring.png',
        href: '/deployment/backend/spring'
    }
]

export function FrameworksGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {frameworks.map((framework) => (
                <FrameworkCard key={framework.name} {...framework} />
            ))}
        </div>
    )
}

