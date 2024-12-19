import {FrameworkCard} from "@/components/FrameworkCard";

const frameworks = [
    {
        name: 'Next.js',
        icon: '/programming/nextjs.png',
        href: '/Deployment/Frontend/nextjs'
    },
    {
        name: 'React',
        icon: '/programming/react.png',
        href: '/Deployment/Frontend/react'
    },
    {
        name: 'Vue',
        icon: '/programming/vue.png',
        href: '/Deployment/Frontend/vue'
    },
    {
        name: 'Nodejs',
        icon: '/programming/nodejs.png',
        href: '/Deployment/Backend/nodejs'
    },
    {
        name: 'Laravel',
        icon: '/programming/laravel.png',
        href: '/Deployment/Frontend/laravel'
    },
    {
        name: 'PostgreSQL',
        icon: '/programming/postgres.png',
        href: '/Deployment/Database/postgres'
    },
    {
        name: 'MongoDB',
        icon: '/programming/mongodb.png',
        href: '/Deployment/Database/mongodb'
    },
    {
        name: 'Spring',
        icon: '/programming/spring.png',
        href: '/Deployment/Backend/spring'
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

