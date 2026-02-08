import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Documentation Guide",
    description: "Project documentation using VitePress",

    themeConfig: {
        nav: [
            { text: "Introduction", link: '/' },
            { text: 'DevOps', link: '/devops' },
            { text: 'Full Stack', link: '/fullstack' },
            { text: 'Data Engineering', link: '/dataengineering' },
            { text: 'Artificial Intelligence', link: '/ai' },
            { text: 'Machine Learning', link: '/ml' }
        ],

        sidebar: {
            '/devops/': [
                {
                    text: 'DevOps',
                    items: [
                        { text: 'Overview', link: '/devops/' },
                        {
                            text: 'Azure DevOps',
                            items: [
                                { text: 'Overview', link: '/devops/azure-devops/' },
                                { text: 'Repositories', link: '/devops/azure-devops/repositories' },
                                { text: 'Pipelines', link: '/devops/azure-devops/pipelines' }
                            ]
                        },
                        {
                            text: 'GitHub',
                            items: [
                                { text: 'Overview', link: '/devops/github/' },
                                { text: 'Repositories', link: '/devops/github/repositories' },
                                { text: 'Actions', link: '/devops/github/actions' }
                            ]
                        },
                        {
                            text: 'Terraform',
                            items: [
                                { text: 'Overview', link: '/devops/terraform/' },
                                {text: 'Commands', link: '/devops/terraform/commands'},
                                {text: 'Best Practices', link: '/devops/terraform/best-practices'}
                            ]
                        },
                        {
                            text: 'Cloud Platform',
                            items: [
                                { text: 'Overview', link: '/devops/cloud-platform/' },
                                { text: 'Azure', link: '/devops/cloud-platform/azure' },
                                { text: 'AWS', link: '/devops/cloud-platform/aws' },
                            ]
                        },
                        {
                            text: 'SonarQube',
                            items: [
                                { text: 'Overview', link: '/devops/sonarqube/' },
                                { text: 'Setup', link: '/devops/sonarqube/setup' },     
                            ]
                        },
                        {
                            text: 'Fresh Desk',
                            items: [
                                { text: 'Overview', link: '/devops/freshdesk/' },
                                { text: 'Ticket Management', link: '/devops/freshdesk/ticket-management' },     
                            ]
                        },
                        {
                            text: 'Architecture & Networking',
                            items: [
                                { text: 'Overview', link: '/devops/architecture-networking/' },
                                { text: 'Microservices Architecture', link: '/devops/architecture-networking/microservices' },      
                            ]
                        }

                        // { text: 'Overview', link: '/devops/' },
                        // { text: 'Azure DevOps', link: '/devops/azure-devops' },
                        // { text: 'GitHub', link: '/devops/github' },
                        // { text: 'Terraform', link: '/devops/terraform' },
                        // { text: 'Cloud Platform', link: '/devops/cloud-platform' },
                        // { text: 'SonarQuube', link: '/devops/sonarqube' },
                        // { text: 'Fresh Desk', link: '/devops/freshdesk' },
                        // { text: 'Architecture & Networking', link: '/devops/architecture-networking' },
                    ]
                }
            ],

            '/ml/': [
                {
                    text: 'Machine Learning',
                    items: [
                        { text: 'Overview', link: '/ml/' },
                        { text: 'ML Basics', link: '/ml/ml-basics' },
                        { text: 'Model Training', link: '/ml/model-training' },
                        { text: 'Evaluation', link: '/ml/evaluation' },
                        { text: 'Deployment', link: '/ml/deployment' }
                    ]
                }
            ],

            '/dataengineering/': [
                {
                    text: 'Data Engineering',
                    items: [
                        { text: 'Overview', link: '/data-engineering/' },
                        { text: 'Ingestion', link: '/data-engineering/ingestion' },
                        { text: 'Transformation', link: '/data-engineering/transformation' },
                        { text: 'Orchestration', link: '/data-engineering/orchestration' },
                        { text: 'Governance', link: '/data-engineering/governance' }
                    ]
                }
            ]
        }
    }
})