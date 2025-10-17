import meta from "../../../pages/_meta.js";
import deployment_backend_meta from "../../../pages/deployment/backend/_meta.js";
import deployment_database_meta from "../../../pages/deployment/database/_meta.js";
import deployment_frontend_meta from "../../../pages/deployment/frontend/_meta.js";
import resource_nuxtjs_meta from "../../../pages/resource/nuxtjs/_meta.js";
import resource_spring_microservice_meta from "../../../pages/resource/spring-microservice/_meta.js";
import spring_microservice_meta from "../../../pages/spring-microservice/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "about",
  route: "/about",
  frontMatter: {
    "title": "About Us",
    "description": "At Cloudinator, we are dedicated to empowering developers and teams to streamline their DevOps workflows with our advanced Infrastructure as Code (IaC) platform. Our mission is to provide you with the tools and resources necessary to simplify deployment processes, enhance collaboration, and drive innovation."
  }
}, {
  name: "blog",
  route: "/blog",
  frontMatter: {
    "sidebarTitle": "Blog"
  }
}, {
  name: "community",
  route: "/community",
  frontMatter: {
    "sidebarTitle": "Community"
  }
}, {
  name: "contact",
  route: "/contact",
  frontMatter: {
    "title": "Contact Us",
    "description": "Get in touch with the Cloudinator team for support, inquiries, or feedback. We are here to help you make the most of our platform and ensure your success in managing DevOps workflows effectively."
  }
}, {
  name: "deployment",
  route: "/deployment",
  children: [{
    name: "backend",
    route: "/deployment/backend",
    children: [{
      data: deployment_backend_meta
    }, {
      name: "nestjs",
      route: "/deployment/backend/nestjs",
      frontMatter: {
        "title": "Nest.js Deployment",
        "description": "Discover how to deploy Nest.js applications seamlessly with Cloudinator. This guide provides step-by-step instructions to leverage Cloudinator's advanced DevOps features, enabling efficient, secure, and scalable deployments for your projects, whether on-premises or in the cloud."
      }
    }, {
      name: "nodejs",
      route: "/deployment/backend/nodejs",
      frontMatter: {
        "sidebarTitle": "Nodejs"
      }
    }, {
      name: "spring",
      route: "/deployment/backend/spring",
      frontMatter: {
        "sidebarTitle": "Spring"
      }
    }]
  }, {
    name: "database",
    route: "/deployment/database",
    children: [{
      data: deployment_database_meta
    }, {
      name: "mongodb",
      route: "/deployment/database/mongodb",
      frontMatter: {
        "sidebarTitle": "Mongodb"
      }
    }, {
      name: "postgres",
      route: "/deployment/database/postgres",
      frontMatter: {
        "sidebarTitle": "Postgres"
      }
    }]
  }, {
    name: "frontend",
    route: "/deployment/frontend",
    children: [{
      data: deployment_frontend_meta
    }, {
      name: "html",
      route: "/deployment/frontend/html",
      frontMatter: {
        "title": "HTML Deployment",
        "description": "Discover how to deploy HTML applications seamlessly with Cloudinator. This guide provides step-by-step instructions to leverage Cloudinator's advanced DevOps features, enabling efficient, secure, and scalable deployments for your projects, whether on-premises or in the cloud."
      }
    }, {
      name: "laravel",
      route: "/deployment/frontend/laravel",
      frontMatter: {
        "sidebarTitle": "Laravel"
      }
    }, {
      name: "nextjs",
      route: "/deployment/frontend/nextjs",
      frontMatter: {
        "title": "Next.js Deployment",
        "description": "Discover how to deploy Next.js applications seamlessly with Cloudinator. This guide provides step-by-step instructions to leverage Cloudinator's advanced DevOps features, enabling efficient, secure, and scalable deployments for your projects, whether on-premises or in the cloud."
      }
    }, {
      name: "nuxt",
      route: "/deployment/frontend/nuxt",
      frontMatter: {
        "title": "Nuxt.js Deployment",
        "description": "Discover how to deploy Nuxt.js applications seamlessly with Cloudinator. This guide provides step-by-step instructions to leverage Cloudinator's advanced DevOps features, enabling efficient, secure, and scalable deployments for your projects, whether on-premises or in the cloud."
      }
    }, {
      name: "react",
      route: "/deployment/frontend/react",
      frontMatter: {
        "title": "React.js Deployment",
        "description": "Discover how to deploy React.js applications seamlessly with Cloudinator. This guide provides step-by-step instructions to leverage Cloudinator's advanced DevOps features, enabling efficient, secure, and scalable deployments for your projects, whether on-premises or in the cloud."
      }
    }, {
      name: "vite",
      route: "/deployment/frontend/vite",
      frontMatter: {
        "sidebarTitle": "Vite"
      }
    }, {
      name: "vue",
      route: "/deployment/frontend/vue",
      frontMatter: {
        "title": "Vue Deployment",
        "description": "Discover how to deploy Vue applications seamlessly with Cloudinator. This guide provides step-by-step instructions to leverage Cloudinator's advanced DevOps features, enabling efficient, secure, and scalable deployments for your projects, whether on-premises or in the cloud."
      }
    }]
  }]
}, {
  name: "getting-started",
  route: "/getting-started",
  frontMatter: {
    "title": "Getting Started",
    "description": "Welcome to the Cloudinator getting started guide. This document will help you set up Cloudinator and guide you through basic usage."
  }
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "title": "Introduction to Cloudinator",
    "description": "Cloudinator is a DevOps platform that streamlines software development, deployment, and infrastructure management with automated CI/CD pipelines, monitoring, and infrastructure-as-code capabilities."
  }
}, {
  name: "installation",
  route: "/installation",
  frontMatter: {
    "title": "Installation",
    "description": "Learn how to install and set up services in Cloudinator, a comprehensive DevSecOps platform."
  }
}, {
  name: "resource",
  route: "/resource",
  children: [{
    name: "nuxtjs",
    route: "/resource/nuxtjs",
    children: [{
      data: resource_nuxtjs_meta
    }, {
      name: "introduction",
      route: "/resource/nuxtjs/introduction",
      frontMatter: {
        "sidebarTitle": "Introduction"
      }
    }]
  }, {
    name: "spring-microservice",
    route: "/resource/spring-microservice",
    children: [{
      data: resource_spring_microservice_meta
    }, {
      name: "core-concepts",
      route: "/resource/spring-microservice/core-concepts",
      frontMatter: {
        "title": "Core Concepts",
        "description": "Spring Microservice is a specialized implementation approach using the Spring Boot framework for building distributed, lightweight services that work together as part of a larger application. It embraces the microservices architectural style where applications are structured as collections of loosely coupled services, each running in its own process and communicating through APIs. Spring Microservice provides built-in support for service discovery, configuration management, load balancing, and fault tolerance patterns essential for microservices. It enables developers to build resilient, scalable distributed systems while leveraging Spring Boot's simplicity and robust ecosystem."
      }
    }, {
      name: "getting-started",
      route: "/resource/spring-microservice/getting-started",
      frontMatter: {
        "sidebarTitle": "Getting Started"
      }
    }, {
      name: "introduction",
      route: "/resource/spring-microservice/introduction",
      frontMatter: {
        "sidebarTitle": "Introduction"
      }
    }, {
      name: "spring-boot",
      route: "/resource/spring-microservice/spring-boot",
      frontMatter: {
        "title": "Spring Boot",
        "description": "Spring Boot is an open-source framework for building web applications and microservices in Java. It is designed to simplify the process of building web applications and microservices by providing a set of default configurations and tools. Spring Boot allows developers to quickly create stand-alone, production-ready applications with minimal configuration. It is a popular choice for developing web applications and microservices, and is widely used in industry and academia."
      }
    }]
  }]
}, {
  name: "spring-microservice",
  route: "/spring-microservice",
  children: [{
    data: spring_microservice_meta
  }, {
    name: "create",
    route: "/spring-microservice/create",
    frontMatter: {
      "sidebarTitle": "Create"
    }
  }, {
    name: "deployment",
    route: "/spring-microservice/deployment",
    frontMatter: {
      "sidebarTitle": "Deployment"
    }
  }, {
    name: "workspace",
    route: "/spring-microservice/workspace",
    frontMatter: {
      "sidebarTitle": "Workspace"
    }
  }]
}, {
  name: "tutorial",
  route: "/tutorial",
  frontMatter: {
    "title": "Tutorial",
    "description": "Discover how to deploy Next.js applications seamlessly with Cloudinator. This guide provides step-by-step instructions to leverage Cloudinator's advanced DevOps features, enabling efficient, secure, and scalable deployments for your projects, whether on-premises or in the cloud."
  }
}];