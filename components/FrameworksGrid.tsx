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
        href: '/docs/frameworks/remix'
    },
    {
        name: 'Nodejs',
        icon: '/programming/nodejs.png',
        href: '/docs/frameworks/astro'
    },
    {
        name: 'Laravel',
        icon: '/programming/laravel.png',
        href: '/docs/frameworks/laravel'
    },
    {
        name: 'Postgres',
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

