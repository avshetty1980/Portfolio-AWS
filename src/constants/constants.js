const prefix = 'Portfolio-AWS';
export const projects = [
  {
    title: 'React web app on AWS Fargate',
    description: 'The architecture had Route53 responding to DNS \
                  queries with an ALB directing traffic to \
                  ECS clusters managed by Fargate. \
                  Orchestrate release process, deploying to Dev \
                  and approvals form Test and Prod \
                  environments: CodePipeline. Approvals triggered SNS topic.\
                  Cross-account access to Dev, Prod, Test accounts\
                  Infrastructure creation: Terraform',
    image: prefix + '/images/projects-3.jpg',
    tags: ['Networking', 'Containers', 'Terraform','Linux'],
    period: ' 12 Months',
    type: 'Freelance',
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 0,
  },
  {
    title: 'Mobile marketplace using API Gateway',
    description:"Routing based on query: Route53 \
                Static content: CloudFront + S3 with OAI and bucket policy \
                Dynamic Content: Cognito User pools to authenticate into API Gateway with SQS for decoupling and Lambda to write into DynamoDB. \
                API key was used for throttling between basic and premium plans. \
                CloudWatch Alarms for metrics of API gateway endpoint with Lambda to dynamically increase limit based on usage.\
                Redshift was used as a datawarehouse for clickstream and user data info\
                from DynamoDB and RDS",
    image: prefix + '/images/projects-7.jpg',
    tags: ['Serverless', 'Security', 'NoSQL', 'SQL'],
    period: ' 18 Months',
    type: 'Freelance',
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 1,
  },
  {
    title: 'Vehicle test data ingestion and analysis on AWS',
    description: "Created and maintained Hardware-In-the-Loop (HILs) rig and vehicle test data integration.\
                  Used S3 to store and analyze test drive logs, \
                  RDS MySQL for data that need complex queries and \
                  DynamoDB for meta-data storage. \
                  Amazon Redshift was used as Data Warehouse and \
                  ES for keyword searches and Kibana for dashboarding. \
                  Data Transformation with AWS Glue & AWS Lambda. \
                  Queuing: SQS and Orchestration with AWS Step Functions",
    image: prefix + '/images/projects-9.jpg',
    tags: ['Automotive', 'ELK', 'Migration', 'Agile'],
    type: 'ZF',
    period: ' 18 Months',
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 2,
  },  
];

export const TimeLineData = [
  { from: 2000, to: 2005, text: 'BSc Electronics Engineering, University of Westminster', },
  { from: 2005, to: 2008, text: 'Electronics Engineer, Mando Corporation', },
  { from: 2008, to: 2009, text: 'MSc Microelectronics & System on Chip, Lancaster University', },
  { from: 2010, to: 2014, text: 'Electronics Engineer, GE Sensing', },
  { from: 2014, to: 2021, text: 'Product Development Manager, ZF Automotive', },
  { from: 2020, to: 2021, text: 'Principal Engineer, ZF Automotive -- setup and maintain Hardware-In-the-Loop (HILs) rig integration on AWS. Split roles between PDM and Principal Engg.' , },
  { from: 2015, to: 2021, text: 'Freelancer, Fullstack Node and Python for first 2 years then AWS consultant ' , },

];