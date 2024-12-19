import Image from 'next/image'
import Link from 'next/link'

export default function HTMLDeployGuide() {
  const steps = [
    {
      title: "Sign up for a Cloudinator account",
      description: (
        <p>
          Visit{" "}
          <Link
            href="https://cloudinator-ui.cloudinator.cloud/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-purple-500">Cloudinator</span>
          </Link>{" "}
          and create a new account or sign in if you already have one.
        </p>
      ),
      image: (
        <Image
          src="/html-guide/login.jpg"
          alt="Login User Interface"
          height={1000}
          width={1000}
        />
      ),
    },
    {
      title: "Create a new HTML Static Site",
      description: (
        <p>
          From your Cloudinator dashboard, click on 'Create Project' and select 'Frontend' in project type.
        </p>
      ),
      image: (
        <Image
          src="/html-guide/create-project.png"
          alt="Create a new HTML Static Site"
          height={1000}
          width={1000}
        />
      ),
    },
    {
      title: "Choose Git Provider",
      description: "Choose the Git repository that contains your HTML files. You have option for choose GitHub or GitLab",
      image: (
        <Image
          src="/html-guide/git-provider.png"
          alt="Choose Git Provider"
          height={1000}
          width={1000}
        />
      ),
    },
    {
      title: "Configure deployment settings",
      description: "Set the project name, branch, git url and specify subdomain name for your HTML site. You can also setup webhook for continuous deployment.",
      image: (
        <Image
          src="/html-guide/configure.png"
          alt="Configure build settings"
          height={1000}
          width={1000}
        />
      ),
    },
    {
      title: "Deploy your site",
      description: "Click 'Create Frontend Project' to start the deployment process. Cloudinator will automatically build and deploy your site.",
      image: (
        <Image
          src="/placeholder.svg"
          alt="Deploy your site"
          height={200}
          width={350}
        />
      ),
    },
    {
      title: "Access your deployed HTML site",
      description: "Once deployment is complete, Cloudinator will provide you with a URL to access your live site.",
      image: (
        <Image
          src="/placeholder.svg"
          alt="Access your deployed HTML site"
          height={200}
          width={350}
        />
      ),
    }
  ]

  return (
    <div className="w-full bg-purple-50 p-8">
      <h1 className="text-purple-700 text-4xl font-bold mb-8 text-center">
        How to Deploy HTML on Cloudinator
      </h1>
      <div className="max-w-3xl mx-auto space-y-12">
        {steps.map((step, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            {step.image}
            <div className="p-6">
              <h2 className="text-purple-600 text-2xl font-semibold mb-2">
                Step {index + 1}: {step.title}
              </h2>
              <div className="text-gray-700">{step.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="https://cloudinator-ui.cloudinator.cloud/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Get Started with Cloudinator
        </Link>
      </div>
    </div>
  )
}

