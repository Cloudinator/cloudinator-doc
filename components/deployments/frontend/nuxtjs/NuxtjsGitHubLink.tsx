'use client'

import { useState } from 'react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Github, Copy, Check, Folder, File, ExternalLink } from 'lucide-react'
import { GitHubLinkProps, RepoItem } from '@/types/github'
import { RepoTree } from '../html/RepoTree'

const nuxtjsRepoStructure: RepoItem[] = [
  {
    name: 'public', type: 'directory', children: [
      { name: 'favicon.ico', type: 'file' },
      { name: 'robots.txt', type: 'file' },
    ]
  },
  {
    name: 'server', type: 'directory', children: [
      { name: 'tsconfig.json', type: 'file' },
    ]
  },
  { name: 'app.vue', type: 'file' },
  { name: 'package-lock.json', type: 'file' },
  { name: 'package.json', type: 'file' },
  { name: 'README.md', type: 'file' },
  { name: 'tsconfig.json', type: 'file' },
]

export default function NuxtjsGitHubLink({ repoUrl, repoName }: GitHubLinkProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(repoUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  
  const redirectToGitHub = () => {
    window.open(repoUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Github className="h-6 w-6" />
          {repoName}
        </CardTitle>
        <CardDescription>View and copy the repository link</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-4">
          <Input value={repoUrl} readOnly className="flex-grow" />
          <Button onClick={copyToClipboard} className="border-purple-300 border">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
          <Button onClick={redirectToGitHub} variant="default" className="border border-purple-300 whitespace-nowrap">
              <ExternalLink className="h-4 w-4 mr-2" />
              View on GitHub
            </Button>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Repository Structure</h3>
          <div className="border rounded-md p-4 bg-gray-50 dark:bg-gray-900">
            <RepoTree items={nuxtjsRepoStructure} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

