'use client'

import Image from "next/image"
import Link from "next/link"

import { Separator } from "@/components/ui/separator"
import { Mail, MapPin, Phone } from 'lucide-react'
import { Container } from "./ui/container"

const navigation = {
    links: [
        { name: 'Home', href: 'https://cloudinator.istad.co/' },
        { name: 'Service', href: 'https://cloudinator.istad.co/service' },
        { name: 'Document', href: '#' },
        { name: 'Start Building', href: 'https://cloudinator.istad.co/start-building' },
        { name: 'About Us', href: 'https://cloudinator.istad.co/about' }
    ]
}

const contact = {
    phone: '+855978443615',
    email: 'cloudinator@gmail.com',
    address: 'No. 24, Street 562 ,Sangkat Boeung Kok, Toul Kork, Phnom Penh City.'
}

const partners = [
    {
        name: 'CBRD',
        src: '/images/cbrd.png',
        height: 200,
        width: 200
    },
    {
        name: 'MPTC',
        src: '/images/mptc.png',
        height: 200,
        width: 200
    },
    {
        name: 'ISTAD',
        src: '/images/new-logo.png',
        height: 200,
        width: 180   
    }
]

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t">
            <Container>
                <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                        {/* Logo & Description */}
                        <div className="flex items-center justify-center space-y-4 md:mx-auto md:w-full lg:mx-0 md:justify-start">
                            <Image
                                src="/images/cloudinator-v2.1.png"
                                alt="cloudinator logo"
                                width={150}
                                height={50}
                                className="mx-auto md:mx-0"
                            />
                        </div>

                        {/* Navigation */}
                        <div className="md:mx-auto md:w-full lg:mx-0">
                            <h3 className="text-lg font-semibold text-purple-500 mb-4 text-center">Content</h3>
                            <ul className="space-y-2">
                                {navigation.links.map((item) => (
                                    <li key={item.name} className="text-center">
                                        <Link
                                            href={item.href}
                                            className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-500 transition-all ease-in-out"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="md:mx-auto md:w-full lg:mx-0">
                            <h3 className="text-lg font-semibold text-purple-500 mb-4 text-center">Contact US</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3 justify-center">
                                    <Phone className="h-5 w-5 text-purple-500 mt-0.5" />
                                    <span className="text-gray-600 dark:text-gray-400 hover:text-purple-500 transition-all ease-in-out">{contact.phone}</span>
                                </li>
                                <li className="flex items-start space-x-3 justify-center">
                                    <Mail className="h-5 w-5 text-purple-500 mt-0.5" />
                                    <span className="text-gray-600 dark:text-gray-400 hover:text-purple-500 transition-all ease-in-out">{contact.email}</span>
                                </li>
                                <li className="flex items-start space-x-3 justify-center">
                                    <MapPin className="h-5 w-5 text-purple-500 mt-0.5 " />
                                    <span className="text-gray-600 dark:text-gray-400 hover:text-purple-500 transition-all ease-in-out">{contact.address}</span>
                                </li>
                            </ul>
                        </div>

                        {/* Partners */}
                        <div className="space-y-4 md:mx-auto md:w-full lg:mx-0">
                            <h3 className="text-lg font-semibold text-purple-500 mb-4 text-center">Sponsor</h3>
                            <div className="grid gap-4 sm:gap-6 justify-center">
                                {partners.map((partner) => (
                                    <Image
                                        key={partner.name}
                                        src={partner.src}
                                        alt={partner.name}
                                        width={partner.width}
                                        height={partner.height}
                                        className="rounded-lg"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <Separator className="my-8" />

                    {/* Copyright */}
                    <div className="text-center text-gray-600 dark:text-gray-400 hover:text-purple-500 transition-all ease-in-out">
                        <p> 2025 Copyright Cloudinator by ISTAD. All rights reserved. </p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}