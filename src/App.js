import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, Lock, BookOpen, Award, ArrowRight, ArrowLeft, Brain, Users, TrendingUp, Shield, Sparkles, Target, Zap } from 'lucide-react';

const COURSES = {
  hr: {
    id: 'hr',
    title: 'AI Literacy for HR',
    description: 'Transform talent acquisition, employee engagement, and workforce planning with AI',
    color: 'from-violet-600 to-purple-600',
    icon: Users,
    sections: [
      {
        id: 'what-is-ai',
        title: 'WHAT IS Artificial Intelligence?',
        lessons: [
          { id: 'ai-what-is-it', title: 'AI - What Is It?', type: 'lesson' },
          { id: 'types-of-ai', title: 'What Are the Different Types of AI?', type: 'lesson' },
          { id: 'how-ai-learns', title: 'How AI Learns', type: 'lesson' },
          { id: 'generative-ai', title: 'Generative AI', type: 'lesson' },
          { id: 'agentic-ai', title: 'Agentic AI', type: 'lesson' },
          { id: 'knowledge-check-1', title: 'Knowledge Check', type: 'quiz' }
        ]
      },
      {
        id: 'risks-ethics',
        title: 'RISKS AND ETHICS OF AI',
        lessons: [
          { id: 'risks-rewards', title: 'The Risks and Rewards of AI', type: 'lesson' },
          { id: 'socio-technical', title: 'Taking a Socio-Technical Approach', type: 'lesson' },
          { id: 'why-care', title: 'Why We Should Care About AI Risks', type: 'lesson' },
          { id: 'unique-risks', title: 'What Makes AI Risk Management Unique?', type: 'lesson' },
          { id: 'ethical-ai', title: 'What Is Ethical AI?', type: 'lesson' },
          { id: 'ai-governance', title: 'The Importance of AI Governance', type: 'lesson' },
          { id: 'compliance', title: 'Compliance and the Regulatory Landscape', type: 'lesson' },
          { id: 'practical-guidance', title: 'Practical Guidance for AI Use', type: 'lesson' },
          { id: 'knowledge-check-2', title: 'Knowledge Check', type: 'quiz' }
        ]
      },
      {
        id: 'responsible-user',
        title: 'Are You a Responsible AI User?',
        lessons: [
          { id: 'responsible-assessment', title: 'Are You a Responsible AI User?', type: 'assessment' }
        ]
      },
      {
        id: 'conclusion',
        title: 'CONCLUSION',
        lessons: [
          { id: 'final-thoughts', title: 'Final Thoughts', type: 'lesson' }
        ]
      }
    ]
  },
  insurance: {
    id: 'insurance',
    title: 'AI Literacy for Insurance',
    description: 'Master AI applications in underwriting, claims processing, and risk assessment',
    color: 'from-emerald-600 to-teal-600',
    icon: Shield,
    sections: [
      {
        id: 'what-is-ai',
        title: 'WHAT IS Artificial Intelligence?',
        lessons: [
          { id: 'ai-what-is-it', title: 'AI - What Is It?', type: 'lesson' },
          { id: 'types-of-ai', title: 'What Are the Different Types of AI?', type: 'lesson' },
          { id: 'how-ai-learns', title: 'How AI Learns', type: 'lesson' },
          { id: 'generative-ai', title: 'Generative AI', type: 'lesson' },
          { id: 'agentic-ai', title: 'Agentic AI', type: 'lesson' },
          { id: 'knowledge-check-1', title: 'Knowledge Check', type: 'quiz' }
        ]
      },
      {
        id: 'risks-ethics',
        title: 'RISKS AND ETHICS OF AI',
        lessons: [
          { id: 'risks-rewards', title: 'The Risks and Rewards of AI', type: 'lesson' },
          { id: 'insurance-bias', title: 'Bias and Fairness in Insurance AI', type: 'lesson' },
          { id: 'regulatory', title: 'Insurance Regulatory Landscape', type: 'lesson' },
          { id: 'knowledge-check-2', title: 'Knowledge Check', type: 'quiz' }
        ]
      },
      {
        id: 'conclusion',
        title: 'CONCLUSION',
        lessons: [
          { id: 'final-thoughts', title: 'Final Thoughts', type: 'lesson' }
        ]
      }
    ]
  },
  genai: {
    id: 'genai',
    title: 'Generative AI Literacy',
    description: 'Harness generative AI tools for business innovation and productivity',
    color: 'from-pink-600 to-rose-600',
    icon: Sparkles,
    sections: [
      {
        id: 'what-is-ai',
        title: 'UNDERSTANDING GENERATIVE AI',
        lessons: [
          { id: 'ai-what-is-it', title: 'AI - What Is It?', type: 'lesson' },
          { id: 'types-of-ai', title: 'What Are the Different Types of AI?', type: 'lesson' },
          { id: 'how-ai-learns', title: 'How AI Learns', type: 'lesson' },
           { id: 'generative-ai', title: 'Generative AI Deep Dive', type: 'lesson' },
          { id: 'agentic-ai', title: 'Agentic AI', type: 'lesson' },
          { id: 'knowledge-check-1', title: 'Knowledge Check', type: 'quiz' }
        ]
      },
      {
        id: 'practical-applications',
        title: 'PRACTICAL APPLICATIONS',
        lessons: [
          { id: 'prompt-engineering', title: 'Effective Prompt Engineering', type: 'lesson' },
          { id: 'business-use-cases', title: 'Business Use Cases', type: 'lesson' },
          { id: 'ethical-use', title: 'Ethical and Responsible Use', type: 'lesson' },
          { id: 'knowledge-check-2', title: 'Knowledge Check', type: 'quiz' }
        ]
      },
      {
        id: 'conclusion',
        title: 'CONCLUSION',
        lessons: [
          { id: 'final-thoughts', title: 'Final Thoughts', type: 'lesson' }
        ]
      }
    ]
  },
  healthcare: {
    id: 'healthcare',
    title: 'AI Literacy in Healthcare',
    description: 'Navigate AI in diagnostics, patient care, and medical research',
    color: 'from-blue-600 to-cyan-600',
    icon: Target,
    sections: [
      {
        id: 'what-is-ai',
        title: 'WHAT IS Artificial Intelligence?',
        lessons: [
          { id: 'ai-what-is-it', title: 'AI - What Is It?', type: 'lesson' },
          { id: 'types-of-ai', title: 'What Are the Different Types of AI?', type: 'lesson' },
          { id: 'how-ai-learns', title: 'How AI Learns', type: 'lesson' },
          { id: 'generative-ai', title: 'Generative AI', type: 'lesson' },
          { id: 'agentic-ai', title: 'Agentic AI', type: 'lesson' },
          { id: 'knowledge-check-1', title: 'Knowledge Check', type: 'quiz' }
        ]
      },
      {
        id: 'risks-ethics',
        title: 'SAFETY AND ETHICS IN HEALTHCARE AI',
        lessons: [
          { id: 'patient-safety', title: 'Patient Safety Considerations', type: 'lesson' },
          { id: 'data-privacy', title: 'Data Privacy and HIPAA Compliance', type: 'lesson' },
          { id: 'clinical-validation', title: 'Clinical Validation of AI Tools', type: 'lesson' },
          { id: 'knowledge-check-2', title: 'Knowledge Check', type: 'quiz' }
        ]
      },
      {
        id: 'conclusion',
        title: 'CONCLUSION',
        lessons: [
          { id: 'final-thoughts', title: 'Final Thoughts', type: 'lesson' }
        ]
      }
    ]
  }
};

const HR_CONTENT = {
  'ai-what-is-it': {
    title: 'AI - What Is It?',
    sections: [
      {
        heading: 'Understanding AI in HR Context',
        content: 'Artificial Intelligence (AI) refers to computer systems designed to perform tasks that typically require human intelligence. In HR, this means technology that can screen resumes, answer employee questions, predict attrition, and personalize learning paths.'
      },
      {
        heading: 'Think of AI as Your Intelligent Assistant',
        content: 'When you use AI-powered recruitment tools that rank candidates or chatbots that answer benefits questions, you\'re leveraging AI that learns from patterns in your data.'
      },
      {
        heading: 'Key Characteristics of AI in HR',
        list: [
          'Pattern Recognition: Identifying trends in employee data',
          'Automation: Handling repetitive tasks like interview scheduling',
          'Prediction: Forecasting hiring needs or turnover risks',
          'Personalization: Tailoring employee experiences at scale'
        ]
      },
      {
        content: 'For HR professionals, understanding AI isn\'t about becoming a programmer—it\'s about knowing how to leverage these tools effectively while ensuring fairness and compliance.'
      }
    ]
  },
  'types-of-ai': {
    title: 'What Are the Different Types of AI?',
    sections: [
      {
        content: 'AI comes in different forms, each with unique capabilities relevant to HR:'
      },
      {
        heading: 'Narrow AI (Weak AI)',
        content: 'The AI you use today in HR tools. It excels at specific tasks like:',
        list: [
          'Resume screening systems that match skills to job descriptions',
          'Chatbots answering common HR policy questions',
          'Scheduling assistants for interviews'
        ]
      },
      {
        heading: 'General AI (Strong AI)',
        content: 'Hypothetical AI with human-like intelligence across all domains. Not yet achieved and not currently used in HR applications.'
      },
      {
        heading: 'Machine Learning',
        content: 'AI that improves through experience:',
        list: [
          'Predictive analytics identifying flight-risk employees',
          'Compensation analysis tools finding pay equity gaps',
          'Performance prediction models'
        ]
      },
      {
        heading: 'Deep Learning',
        content: 'Advanced ML using neural networks:',
        list: [
          'Video interview analysis (use with caution due to bias concerns)',
          'Sentiment analysis of employee surveys',
          'Voice-based candidate screening'
        ]
      },
      {
        content: 'For HR professionals, you\'ll primarily work with Narrow AI and Machine Learning applications designed for specific workforce challenges.'
      }
    ]
  },
  'how-ai-learns': {
    title: 'How AI Learns',
    sections: [
      {
        content: 'Understanding how AI learns helps HR professionals make better decisions about tool selection and use:'
      },
      {
        heading: 'Supervised Learning',
        content: 'AI learns from labeled examples:',
        list: [
          'Training: Show the AI 10,000 resumes labeled "good fit" or "not a fit"',
          'Application: System learns to screen new resumes',
          'HR Use Case: Candidate screening, skills assessment scoring'
        ]
      },
      {
        heading: 'Unsupervised Learning',
        content: 'AI finds patterns without labels:',
        list: [
          'Training: Feed AI employee data without telling it what to find',
          'Application: System discovers natural groupings (high performers, flight risks)',
          'HR Use Case: Employee segmentation, identifying training needs'
        ]
      },
      {
        heading: 'Reinforcement Learning',
        content: 'AI learns through trial and error:',
        list: [
          'Training: System tries different actions and learns from outcomes',
          'Application: Optimizes decisions based on results',
          'HR Use Case: Interview scheduling optimization, onboarding workflow improvements'
        ]
      },
      {
        heading: 'The HR Implication',
        content: 'The quality of AI output depends on the quality and fairness of training data. Biased historical hiring data creates biased AI recommendations. Always audit your data sources.'
      }
    ]
  },
  'generative-ai': {
    title: 'Generative AI',
    sections: [
      {
        content: 'Generative AI creates new content based on patterns learned from existing data. For HR, this is transformative.'
      },
      {
        heading: 'What It Does',
        list: [
          'Generates job descriptions optimized for inclusion and SEO',
          'Creates personalized onboarding materials for new hires',
          'Drafts policy communications in multiple languages',
          'Generates interview questions tailored to specific roles',
          'Creates training content and learning modules'
        ]
      },
      {
        heading: 'Popular Tools in HR',
        list: [
          'ChatGPT/Claude: Draft communications, summarize policies',
          'Writing assistants: Create inclusive job postings',
          'Content generators: Develop training materials',
          'Email composers: Personalize employee communications'
        ]
      },
      {
        heading: 'HR-Specific Applications',
        content: 'Recruitment: Generate compelling job ads that attract diverse candidates. Onboarding: Create personalized welcome materials for each role. Learning & Development: Develop customized training content. Employee Communications: Draft announcements, policy updates. Performance Management: Generate feedback templates.'
      },
      {
        heading: 'Critical Consideration',
        content: 'Always review AI-generated content for accuracy, bias, and legal compliance. Generative AI should augment, not replace, human judgment in sensitive HR matters.'
      }
    ]
  },
  'agentic-ai': {
    title: 'Agentic AI',
    sections: [
      {
        content: 'Agentic AI represents the next evolution: systems that can act autonomously to achieve goals with minimal human intervention.'
      },
      {
        heading: 'What Makes It "Agentic"',
        list: [
          'Takes initiative rather than waiting for commands',
          'Makes multi-step decisions to achieve objectives',
          'Adapts strategies based on outcomes',
          'Operates across multiple tools and systems'
        ]
      },
      {
        heading: 'Emerging HR Applications',
        content: 'Intelligent Recruiting Agents: Posts jobs, sources candidates, screens resumes, schedules interviews. Employee Experience Agents: Assigns tasks, monitors completion, personalizes experience. Workforce Planning Agents: Predicts turnover, identifies skill gaps, recommends hiring and training.'
      },
      {
        heading: 'The HR Professional\'s Role',
        content: 'As these systems evolve, HR\'s focus shifts to setting appropriate goals and guardrails, monitoring for bias and compliance, handling exceptions and sensitive situations, and ensuring human oversight for critical decisions.'
      },
      {
        heading: 'Current Reality',
        content: 'Most HR AI isn\'t truly agentic yet. Be cautious of vendors overclaiming capabilities.'
      }
    ]
  }
};

const INSURANCE_CONTENT = {
  'ai-what-is-it': {
    title: 'AI - What Is It?',
    sections: [
      {
        heading: 'Understanding AI in Insurance Context',
        content: 'Artificial Intelligence (AI) in insurance refers to systems that can assess risk, detect fraud, automate claims processing, and personalize customer experiences. AI analyzes vast amounts of data to make predictions and decisions that traditionally required human underwriters and adjusters.'
      },
      {
        heading: 'AI as Your Risk Assessment Partner',
        content: 'When you use AI-powered underwriting platforms that evaluate risk profiles or fraud detection systems that flag suspicious claims, you\'re leveraging AI that learns from historical patterns and real-time data.'
      },
      {
        heading: 'Key Characteristics of AI in Insurance',
        list: [
          'Risk Assessment: Analyzing policyholder data to determine accurate premiums',
          'Fraud Detection: Identifying suspicious patterns in claims submissions',
          'Claims Automation: Processing straightforward claims instantly',
          'Customer Service: Chatbots handling policy queries 24/7'
        ]
      },
      {
        content: 'For insurance professionals, AI literacy means understanding how these tools work, when to trust their outputs, and how to ensure they operate fairly and compliantly.'
      }
    ]
  },
  'types-of-ai': {
    title: 'What Are the Different Types of AI?',
    sections: [
      {
        content: 'Different AI types serve specific insurance functions:'
      },
      {
        heading: 'Narrow AI (Weak AI)',
        content: 'The AI currently used in insurance operations:',
        list: [
          'Underwriting engines that price policies based on risk factors',
          'Claims triage systems that route claims to appropriate handlers',
          'Chatbots answering policy coverage questions'
        ]
      },
      {
        heading: 'Machine Learning',
        content: 'AI that learns from data to improve predictions:',
        list: [
          'Predictive modeling for claim likelihood and severity',
          'Fraud detection systems learning new fraud patterns',
          'Customer churn prediction models',
          'Telematics analyzing driving behavior for auto insurance'
        ]
      },
      {
        heading: 'Deep Learning',
        content: 'Advanced neural networks for complex analysis:',
        list: [
          'Image recognition for damage assessment in property claims',
          'Natural language processing for claim document analysis',
          'Voice analysis for call center quality and fraud detection'
        ]
      },
      {
        content: 'Most insurance AI applications fall into Narrow AI and Machine Learning categories, designed for specific risk assessment and operational tasks.'
      }
    ]
  },
  'how-ai-learns': {
    title: 'How AI Learns',
    sections: [
      {
        content: 'Understanding AI learning methods is crucial for insurance professionals:'
      },
      {
        heading: 'Supervised Learning',
        content: 'AI learns from labeled historical data:',
        list: [
          'Training: Feed AI 100,000 past claims labeled "fraudulent" or "legitimate"',
          'Application: System learns to flag suspicious new claims',
          'Insurance Use: Fraud detection, risk scoring, claim cost prediction'
        ]
      },
      {
        heading: 'Unsupervised Learning',
        content: 'AI discovers hidden patterns without labels:',
        list: [
          'Training: Analyze customer data without predetermined categories',
          'Application: System identifies natural customer segments or anomalies',
          'Insurance Use: Market segmentation, emerging fraud pattern detection'
        ]
      },
      {
        heading: 'Reinforcement Learning',
        content: 'AI learns through trial and optimization:',
        list: [
          'Training: System tests different pricing strategies and learns from outcomes',
          'Application: Optimizes decisions based on profitability and retention',
          'Insurance Use: Dynamic pricing, claims routing optimization'
        ]
      },
      {
        heading: 'The Insurance Implication',
        content: 'Biased training data leads to discriminatory pricing or unfair claim denials. Always validate that historical data doesn\'t encode illegal discrimination (redlining, age bias, etc.) before training AI models.'
      }
    ]
  },
  'generative-ai': {
    title: 'Generative AI',
    sections: [
      {
        content: 'Generative AI creates new content and is transforming insurance operations and customer service.'
      },
      {
        heading: 'What It Does in Insurance',
        list: [
          'Generates personalized policy explanation documents',
          'Creates claim summaries from adjuster notes and photos',
          'Drafts customer communications about coverage changes',
          'Produces underwriting reports synthesizing multiple data sources',
          'Generates training scenarios for new underwriters and adjusters'
        ]
      },
      {
        heading: 'Popular Tools in Insurance',
        list: [
          'ChatGPT/Claude: Draft policy communications, summarize complex claims',
          'Document generators: Create policy documents and endorsements',
          'Email composers: Personalize customer outreach at scale',
          'Report writers: Synthesize claim investigation findings'
        ]
      },
      {
        heading: 'Insurance-Specific Applications',
        content: 'Underwriting: Generate risk assessment reports combining multiple data sources. Claims: Create detailed claim summaries from photos, reports, and statements. Customer Service: Draft personalized responses to complex policy questions. Compliance: Generate required regulatory documentation and disclosures.'
      },
      {
        heading: 'Critical Consideration',
        content: 'Always verify AI-generated policy language and coverage determinations for accuracy. Errors in generated documents can create unintended coverage obligations or regulatory violations.'
      }
    ]
  },
  'agentic-ai': {
    title: 'Agentic AI',
    sections: [
      {
        content: 'Agentic AI represents autonomous systems that can execute complex insurance workflows with minimal human intervention.'
      },
      {
        heading: 'What Makes It "Agentic"',
        list: [
          'Takes initiative to gather needed information',
          'Makes multi-step decisions across systems',
          'Adapts approach based on case complexity',
          'Coordinates between multiple tools and databases'
        ]
      },
      {
        heading: 'Emerging Insurance Applications',
        content: 'Intelligent Claims Agents: Intake claim, request documentation, assess damage via photos, determine coverage, calculate payout, send settlement. Underwriting Agents: Gather applicant data, run background checks, assess risk factors, determine pricing, generate policy. Customer Service Agents: Answer complex multi-policy questions, process policy changes, handle billing issues autonomously.'
      },
      {
        heading: 'The Insurance Professional\'s Role',
        content: 'As agentic AI evolves, insurance professionals will focus on: handling complex exceptions requiring judgment, reviewing AI decisions for bias and fairness, managing customer relationships, and ensuring regulatory compliance.'
      },
      {
        heading: 'Current Reality',
        content: 'True agentic AI in insurance is still emerging. Most "automated" systems still require human checkpoints for complex decisions and regulatory reasons.'
      }
    ]
  }
};

const GENAI_CONTENT = {
  'ai-what-is-it': {
    title: 'AI - What Is It?',
    sections: [
      {
        heading: 'Understanding Generative AI',
        content: 'Generative AI refers to artificial intelligence systems that can create new content—text, images, code, audio, video—based on patterns learned from existing data. Unlike traditional AI that classifies or predicts, generative AI produces original outputs.'
      },
      {
        heading: 'How It Differs from Other AI',
        content: 'Traditional AI: "Is this email spam?" (classification). Generative AI: "Write a professional email response" (creation). Traditional AI analyzes and categorizes; generative AI synthesizes and produces.'
      },
      {
        heading: 'Key Capabilities',
        list: [
          'Text Generation: Writing articles, code, emails, reports',
          'Image Creation: Generating visuals from text descriptions',
          'Code Writing: Producing functional software from requirements',
          'Audio/Video: Creating synthetic voices and video content',
          'Translation: Converting between formats and languages'
        ]
      },
      {
        content: 'Understanding generative AI means knowing both its creative power and its limitations—it produces convincing content but doesn\'t truly "understand" like humans do.'
      }
    ]
  },
  'types-of-ai': {
    title: 'What Are the Different Types of AI?',
    sections: [
      {
        content: 'Generative AI encompasses various technologies, each with distinct capabilities:'
      },
      {
        heading: 'Large Language Models (LLMs)',
        content: 'Text-based AI trained on vast text datasets:',
        list: [
          'Examples: GPT-4, Claude, Gemini, LLaMA',
          'Applications: Writing, analysis, coding, conversation',
          'Strengths: Versatile, natural language understanding',
          'Limitations: Can hallucinate facts, knowledge cutoff dates'
        ]
      },
      {
        heading: 'Image Generation Models',
        content: 'AI that creates visuals from text prompts:',
        list: [
          'Examples: DALL-E, Midjourney, Stable Diffusion',
          'Applications: Marketing visuals, product mockups, concept art',
          'Strengths: Rapid prototyping, creative exploration',
          'Limitations: Inconsistent results, copyright concerns'
        ]
      },
      {
        heading: 'Multimodal Models',
        content: 'AI that works across text, images, and other formats:',
        list: [
          'Examples: GPT-4V, Gemini Pro Vision',
          'Applications: Document analysis, visual Q&A, accessibility tools',
          'Strengths: Unified interface for multiple content types'
        ]
      },
      {
        heading: 'Code Generation Models',
        content: 'Specialized AI for software development:',
        list: [
          'Examples: GitHub Copilot, Amazon CodeWhisperer',
          'Applications: Code completion, bug fixing, test generation'
        ]
      }
    ]
  },
  'how-ai-learns': {
    title: 'How AI Learns',
    sections: [
      {
        content: 'Generative AI learns through sophisticated training processes:'
      },
      {
        heading: 'Pre-training: Learning from Massive Data',
        content: 'The foundation of generative AI:',
        list: [
          'Process: Models ingest billions of text documents, images, or code samples',
          'Learning: AI identifies patterns, relationships, and structures',
          'Result: Broad knowledge base and general capabilities',
          'Example: GPT models trained on large portions of the internet'
        ]
      },
      {
        heading: 'Fine-tuning: Specialization',
        content: 'Adapting to specific tasks:',
        list: [
          'Process: Further training on domain-specific data',
          'Learning: Optimizes for particular use cases or styles',
          'Result: Enhanced performance on targeted applications',
          'Example: Medical AI fine-tuned on clinical literature'
        ]
      },
      {
        heading: 'Reinforcement Learning from Human Feedback (RLHF)',
        content: 'Aligning AI with human preferences:',
        list: [
          'Process: Humans rate AI outputs as helpful, accurate, safe',
          'Learning: Model adjusts to produce preferred responses',
          'Result: More useful, harmless, and honest AI',
          'Why it matters: Makes AI safer and more aligned with values'
        ]
      },
      {
        heading: 'The Quality Principle',
        content: 'Generative AI quality depends on training data quality. Biased, inaccurate, or outdated training data produces flawed outputs. Always verify critical information.'
      }
    ]
  },
  'generative-ai': {
    title: 'Generative AI',
    sections: [
      {
        content: 'Deep dive into practical applications of generative AI across business functions.'
      },
      {
        heading: 'Content Creation',
        list: [
          'Marketing: Generate ad copy, social media posts, campaign ideas',
          'Documentation: Create user guides, FAQs, technical documentation',
          'Communication: Draft emails, reports, presentations',
          'Creative: Produce blog posts, scripts, brainstorm concepts'
        ]
      },
      {
        heading: 'Analysis and Research',
        list: [
          'Summarization: Condense long documents into key points',
          'Data analysis: Generate insights from datasets',
          'Research: Synthesize information from multiple sources',
          'Competitive intelligence: Analyze market trends'
        ]
      },
      {
        heading: 'Software Development',
        list: [
          'Code generation: Write functions, classes, entire modules',
          'Debugging: Identify and fix code errors',
          'Documentation: Generate code comments and API docs',
          'Testing: Create test cases and test data'
        ]
      },
      {
        heading: 'Customer Experience',
        list: [
          'Chatbots: Provide 24/7 customer support',
          'Personalization: Tailor content to individual preferences',
          'Translation: Communicate across languages',
          'Accessibility: Generate alt text, transcriptions, summaries'
        ]
      },
      {
        heading: 'Best Practices',
        content: 'Use specific prompts for better results. Always review and edit AI outputs. Verify facts and citations. Consider ethical implications. Respect copyright and attribution.'
      }
    ]
  },
  'agentic-ai': {
    title: 'Agentic AI',
    sections: [
      {
        content: 'Agentic AI represents the evolution from passive tools to autonomous digital workers that plan and execute complex tasks.'
      },
      {
        heading: 'From Tool to Agent',
        list: [
          'Traditional AI: You ask, it answers once',
          'Agentic AI: You set a goal, it plans and executes multiple steps',
          'Example: Instead of "write an email," you say "research this company and draft a personalized outreach email"'
        ]
      },
      {
        heading: 'Key Capabilities',
        list: [
          'Planning: Breaking complex goals into actionable steps',
          'Tool Use: Accessing APIs, databases, search engines',
          'Memory: Maintaining context across long interactions',
          'Reflection: Evaluating its own outputs and iterating'
        ]
      },
      {
        heading: 'Emerging Applications',
        content: 'Research Agents: Gather information from multiple sources, synthesize findings, produce comprehensive reports. Coding Agents: Understand requirements, write code, test, debug, and deploy. Business Agents: Analyze market data, generate strategies, create implementation plans. Personal Assistants: Manage calendars, email, tasks across multiple platforms.'
      },
      {
        heading: 'The Future of Work',
        content: 'Agentic AI will augment human capabilities by handling routine multi-step tasks, allowing professionals to focus on strategy, creativity, and relationship-building. The key skill: knowing how to delegate effectively to AI agents.'
      },
      {
        heading: 'Current Limitations',
        content: 'Still requires human oversight for critical decisions. Can make mistakes when encountering novel situations. May lack nuanced understanding of context. Requires careful goal specification to avoid unintended actions.'
      }
    ]
  }
};

const HEALTHCARE_CONTENT = {
  'ai-what-is-it': {
    title: 'AI - What Is It?',
    sections: [
      {
        heading: 'Understanding AI in Healthcare Context',
        content: 'Artificial Intelligence in healthcare refers to systems that can analyze medical images, predict patient outcomes, assist in diagnosis, personalize treatment plans, and streamline administrative tasks. AI processes vast amounts of clinical data to support medical decision-making.'
      },
      {
        heading: 'AI as Your Clinical Decision Support',
        content: 'When radiologists use AI to detect anomalies in scans, or when EHR systems flag potential drug interactions, they\'re leveraging AI that learns from millions of medical cases and clinical studies.'
      },
      {
        heading: 'Key Characteristics of AI in Healthcare',
        list: [
          'Diagnostic Support: Analyzing medical images and lab results',
          'Predictive Analytics: Forecasting patient deterioration or readmission risk',
          'Personalized Medicine: Tailoring treatments based on patient data',
          'Administrative Automation: Handling scheduling, coding, documentation'
        ]
      },
      {
        content: 'For healthcare professionals, AI literacy means understanding these tools\' capabilities and limitations, maintaining clinical judgment, and ensuring patient safety and privacy.'
      }
    ]
  },
  'types-of-ai': {
    title: 'What Are the Different Types of AI?',
    sections: [
      {
        content: 'Different AI types serve specific healthcare functions:'
      },
      {
        heading: 'Narrow AI (Weak AI)',
        content: 'Task-specific AI used in current healthcare:',
        list: [
          'Medical imaging analysis (X-rays, MRIs, CT scans)',
          'Clinical decision support systems',
          'Appointment scheduling and patient triage chatbots',
          'Medical coding and billing automation'
        ]
      },
      {
        heading: 'Machine Learning',
        content: 'AI that learns from clinical data:',
        list: [
          'Predictive models for disease progression',
          'Risk stratification for patient populations',
          'Drug discovery and development',
          'Epidemic outbreak prediction'
        ]
      },
      {
        heading: 'Deep Learning',
        content: 'Advanced neural networks for complex medical analysis:',
        list: [
          'Radiology image interpretation (detecting tumors, fractures)',
          'Pathology slide analysis',
          'Genomic analysis for precision medicine',
          'Natural language processing of clinical notes'
        ]
      },
      {
        heading: 'Clinical Application',
        content: 'Most healthcare AI currently deployed falls into Narrow AI and Machine Learning, focused on augmenting clinical workflows rather than replacing physician judgment.'
      }
    ]
  },
  'how-ai-learns': {
    title: 'How AI Learns',
    sections: [
      {
        content: 'Understanding AI learning is critical for evaluating clinical AI tools:'
      },
      {
        heading: 'Supervised Learning',
        content: 'AI learns from labeled medical data:',
        list: [
          'Training: Feed AI 100,000 chest X-rays labeled with diagnoses',
          'Application: System learns to identify pneumonia, fractures, tumors',
          'Healthcare Use: Disease detection, image interpretation, diagnosis support',
          'Quality Factor: Requires expert-labeled data from diverse patient populations'
        ]
      },
      {
        heading: 'Unsupervised Learning',
        content: 'AI discovers patterns in unlabeled data:',
        list: [
          'Training: Analyze patient data without predetermined diagnoses',
          'Application: Identifies patient subtypes or disease clusters',
          'Healthcare Use: Disease subtyping, patient stratification, novel pattern discovery',
          'Research Value: Can reveal previously unknown disease relationships'
        ]
      },
      {
        heading: 'Reinforcement Learning',
        content: 'AI learns optimal strategies through outcomes:',
        list: [
          'Training: System tests treatment strategies and learns from results',
          'Application: Optimizes treatment protocols and dosing',
          'Healthcare Use: Treatment planning, resource allocation, ICU management'
        ]
      },
      {
        heading: 'The Healthcare Imperative',
        content: 'Training data must represent diverse patient populations. AI trained primarily on data from one demographic can perform poorly or dangerously on others. Always validate AI tools across your patient population.'
      }
    ]
  },
  'generative-ai': {
    title: 'Generative AI',
    sections: [
      {
        content: 'Generative AI is transforming healthcare documentation, patient communication, and medical education.'
      },
      {
        heading: 'What It Does in Healthcare',
        list: [
          'Generates clinical documentation from voice dictation',
          'Creates patient education materials at appropriate literacy levels',
          'Drafts discharge summaries and referral letters',
          'Produces personalized care instructions',
          'Generates medical training scenarios and case studies'
        ]
      },
      {
        heading: 'Clinical Applications',
        content: 'Documentation: Convert physician-patient conversations into structured notes. Patient Communication: Generate easy-to-understand explanations of conditions and treatments. Care Coordination: Draft referral letters synthesizing complex medical histories. Medical Education: Create realistic case studies and simulation scenarios.'
      },
      {
        heading: 'Popular Tools in Healthcare',
        list: [
          'Medical scribes: Ambient documentation from patient encounters',
          'Patient portals: Generate personalized health summaries',
          'EHR assistants: Draft notes, orders, and documentation',
          'Education tools: Create patient handouts and training materials'
        ]
      },
      {
        heading: 'Critical Safety Considerations',
        content: 'NEVER rely solely on AI for clinical decisions. Always verify AI-generated medical content for accuracy. Ensure patient privacy—don\'t input PHI into public AI tools. Review all documentation for clinical accuracy before signing. Use AI to augment, never replace, clinical judgment.'
      }
    ]
  },
  'agentic-ai': {
    title: 'Agentic AI',
    sections: [
      {
        content: 'Agentic AI in healthcare represents systems that can autonomously coordinate complex care workflows while maintaining appropriate human oversight.'
      },
      {
        heading: 'What Makes Healthcare AI "Agentic"',
        list: [
          'Proactively monitors patient data for concerning trends',
          'Coordinates multi-step care protocols',
          'Adapts recommendations based on patient response',
          'Integrates information across multiple systems'
        ]
      },
      {
        heading: 'Emerging Healthcare Applications',
        content: 'Care Coordination Agents: Monitor post-discharge patients, detect early warning signs, trigger interventions, coordinate follow-up. Clinical Research Agents: Screen patients for trial eligibility, manage enrollment workflows, track outcomes. Administrative Agents: Handle prior authorizations, verify insurance, schedule appointments. Population Health Agents: Identify at-risk patients, recommend preventive interventions, track outcomes.'
      },
      {
        heading: 'The Clinician\'s Role',
        content: 'As agentic AI evolves, healthcare professionals will focus on: complex diagnostic reasoning, handling exceptions and complications, building therapeutic relationships, making ethical decisions, and ensuring AI operates safely and appropriately.'
      },
      {
        heading: 'Safety and Oversight',
        content: 'Healthcare agentic AI requires rigorous safeguards: Clinical validation and FDA clearance where applicable. Human oversight for all clinical decisions. Audit trails for accountability. Regular monitoring for safety issues. Clear escalation protocols for uncertain situations.'
      },
      {
        heading: 'Current Reality',
        content: 'True agentic AI in healthcare is still limited due to regulatory requirements and patient safety concerns. Most "autonomous" systems still require clinical oversight at key decision points.'
      }
    ]
  }
};

const QUIZ_1 = {
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'Which type of AI is most commonly used in current HR applications?',
      options: [
        'General AI (Strong AI)',
        'Narrow AI (Weak AI)',
        'Superintelligent AI',
        'Quantum AI'
      ],
      correct: 1,
      explanation: 'Narrow AI (Weak AI) is designed for specific tasks and is what powers current HR tools like resume screening and chatbots.'
    },
    {
      id: 'q2',
      type: 'matching',
      question: 'Match the AI learning type to its HR application:',
      pairs: [
        { left: 'Supervised Learning', right: 'Resume screening based on past hiring decisions' },
        { left: 'Unsupervised Learning', right: 'Discovering natural employee segments' },
        { left: 'Reinforcement Learning', right: 'Optimizing interview scheduling' }
      ]
    },
    {
      id: 'q3',
      type: 'true-false',
      question: 'Generative AI can completely replace human judgment in HR decision-making.',
      correct: false,
      explanation: 'Generative AI should augment human judgment, not replace it, especially in sensitive HR matters requiring compliance and ethical considerations.'
    },
    {
      id: 'q4',
      type: 'scenario',
      question: 'Your company wants to use AI to screen resumes. The historical hiring data shows 80% male hires in technical roles. What should you do?',
      options: [
        'Use the data as-is since it reflects past success',
        'Audit the data for bias and adjust before training AI',
        'Only use AI for non-technical roles',
        'Manually review all AI recommendations regardless of data'
      ],
      correct: 1,
      explanation: 'Biased historical data creates biased AI. Always audit and adjust training data to ensure fair outcomes.'
    }
  ]
};

const INSURANCE_QUIZ = {
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What is the primary risk when using AI trained on historical insurance data?',
      options: [
        'The AI will be too slow to process claims',
        'The AI may perpetuate historical biases like redlining',
        'The AI will cost too much to implement',
        'The AI cannot understand complex policies'
      ],
      correct: 1,
      explanation: 'Historical insurance data may contain discriminatory practices. AI trained on this data can perpetuate illegal biases in pricing or coverage decisions.'
    },
    {
      id: 'q2',
      type: 'scenario',
      question: 'An AI fraud detection system flags 30% of claims from a specific zip code as suspicious, far above the baseline. What should you do?',
      options: [
        'Trust the AI—it must have detected a fraud pattern',
        'Investigate whether the AI is exhibiting demographic bias',
        'Increase monitoring in that zip code',
        'Adjust premiums for that area'
      ],
      correct: 1,
      explanation: 'Disproportionate flagging by geography may indicate bias rather than actual fraud. This requires investigation to ensure fair treatment.'
    },
    {
      id: 'q3',
      type: 'true-false',
      question: 'Generative AI can be used to automatically approve insurance claims without human review.',
      correct: false,
      explanation: 'While AI can assist in claims processing, regulatory requirements and liability concerns typically require human oversight for claim approvals.'
    },
    {
      id: 'q4',
      type: 'multiple-choice',
      question: 'Which AI application is most mature in insurance today?',
      options: [
        'Fully autonomous underwriting agents',
        'Narrow AI for specific tasks like fraud detection',
        'General AI that handles all insurance functions',
        'Agentic AI that replaces human adjusters'
      ],
      correct: 1,
      explanation: 'Narrow AI designed for specific tasks like fraud detection and risk scoring is the most widely deployed and mature AI technology in insurance.'
    }
  ]
};

const GENAI_QUIZ = {
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What is "hallucination" in generative AI?',
      options: [
        'When the AI becomes too creative',
        'When the AI generates false or inaccurate information presented as fact',
        'When the AI refuses to answer questions',
        'When the AI produces blurry images'
      ],
      correct: 1,
      explanation: 'Hallucination refers to AI confidently generating false information. Always verify critical facts from AI outputs.'
    },
    {
      id: 'q2',
      type: 'scenario',
      question: 'You need to create a market analysis report. How should you use generative AI?',
      options: [
        'Copy the AI output directly into your report',
        'Use AI to generate a draft, then verify facts and add your analysis',
        'Avoid AI entirely for professional work',
        'Use AI only for formatting, not content'
      ],
      correct: 1,
      explanation: 'AI is most effective as a drafting tool. Always verify facts, add human judgment, and ensure accuracy before using AI-generated content professionally.'
    },
    {
      id: 'q3',
      type: 'true-false',
      question: 'Generative AI can replace human creativity and strategic thinking.',
      correct: false,
      explanation: 'Generative AI augments creativity but doesn\'t replace human strategic thinking, nuanced judgment, or original insight.'
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the generative AI type to its primary output:',
      pairs: [
        { left: 'Large Language Models', right: 'Text and code generation' },
        { left: 'Image Generation Models', right: 'Visual content from descriptions' },
        { left: 'Multimodal Models', right: 'Combined text, image, and analysis' }
      ]
    }
  ]
};

const HEALTHCARE_QUIZ = {
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What is the most critical consideration when using AI diagnostic tools?',
      options: [
        'Speed of diagnosis',
        'Cost savings',
        'AI should augment, not replace, clinical judgment',
        'Patient satisfaction scores'
      ],
      correct: 2,
      explanation: 'Patient safety requires that AI serves as decision support, not a replacement for physician expertise and judgment.'
    },
    {
      id: 'q2',
      type: 'scenario',
      question: 'An AI radiology tool shows 98% accuracy on the training dataset. What should you verify before clinical use?',
      options: [
        'That it costs less than hiring a radiologist',
        'That it performs equally well across diverse patient populations',
        'That it can process images faster than humans',
        'That the vendor has good marketing materials'
      ],
      correct: 1,
      explanation: 'Training dataset performance doesn\'t guarantee real-world performance, especially across diverse populations. Validation across your patient demographics is essential.'
    },
    {
      id: 'q3',
      type: 'true-false',
      question: 'It is safe to input patient protected health information (PHI) into public generative AI tools like ChatGPT for documentation help.',
      correct: false,
      explanation: 'HIPAA violations! Never input PHI into public AI tools. Use HIPAA-compliant, healthcare-specific AI solutions with proper business associate agreements.'
    },
    {
      id: 'q4',
      type: 'multiple-choice',
      question: 'Why is data diversity crucial in healthcare AI training?',
      options: [
        'To reduce data storage costs',
        'To make the AI process data faster',
        'AI trained on homogeneous data may perform poorly or dangerously on underrepresented populations',
        'To comply with marketing requirements'
      ],
      correct: 2,
      explanation: 'Healthcare AI must perform safely across all patient populations. Lack of diversity in training data can lead to misdiagnosis or harm in underrepresented groups.'
    }
  ]
};

const MatchingExercise = ({ question, onAnswer, hasAnswered }) => {
  const [matches, setMatches] = useState({});
  const [selectedLeft, setSelectedLeft] = useState(null);

  const handleLeftClick = (item) => {
    setSelectedLeft(item);
  };

  const handleRightClick = (item) => {
    if (selectedLeft) {
      const newMatches = { ...matches, [selectedLeft]: item };
      setMatches(newMatches);
      setSelectedLeft(null);

      if (Object.keys(newMatches).length === question.pairs.length) {
        const isCorrect = question.pairs.every(
          pair => newMatches[pair.left] === pair.right
        );
        setTimeout(() => onAnswer({ matches: newMatches, isCorrect }), 500);
      }
    }
  };

  return (
    <div className="space-y-6">
      <p className="text-gray-600 text-sm">Click items to match them together</p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-3">
          {question.pairs.map((pair) => (
            <button
              key={pair.left}
              onClick={() => !hasAnswered && handleLeftClick(pair.left)}
              disabled={hasAnswered}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all text-sm ${
                selectedLeft === pair.left
                  ? 'border-violet-500 bg-violet-50'
                  : matches[pair.left]
                  ? hasAnswered?.isCorrect
                    ? 'border-green-500 bg-green-50'
                    : 'border-red-500 bg-red-50'
                  : 'border-gray-200 hover:border-violet-300'
              }`}
            >
              {pair.left}
            </button>
          ))}
        </div>
        <div className="space-y-3">
          {question.pairs.map((pair) => {
            const isMatched = Object.values(matches).includes(pair.right);
            return (
              <button
                key={pair.right}
                onClick={() => !hasAnswered && handleRightClick(pair.right)}
                disabled={hasAnswered || !selectedLeft}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all text-sm ${
                  isMatched
                    ? hasAnswered?.isCorrect
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-violet-300'
                }`}
              >
                {pair.right}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default function AILiteracyPlatform() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [progress, setProgress] = useState({});
  const [quizAnswers, setQuizAnswers] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('aiLiteracyProgress');
    if (saved) {
      setProgress(JSON.parse(saved));
    }
  }, []);

  const saveProgress = (courseId, lessonId) => {
    const newProgress = {
      ...progress,
      [courseId]: {
        ...progress[courseId],
        [lessonId]: true
      }
    };
    setProgress(newProgress);
    localStorage.setItem('aiLiteracyProgress', JSON.stringify(newProgress));
  };

  const isLessonUnlocked = (courseId, sectionIdx, lessonIdx) => {
    if (sectionIdx === 0 && lessonIdx === 0) return true;

    const course = COURSES[courseId];
    const sections = course.sections;

    if (lessonIdx > 0) {
      const prevLesson = sections[sectionIdx].lessons[lessonIdx - 1];
      return progress[courseId]?.[prevLesson.id] || false;
    }

    if (sectionIdx > 0) {
      const prevSection = sections[sectionIdx - 1];
      const lastLesson = prevSection.lessons[prevSection.lessons.length - 1];
      return progress[courseId]?.[lastLesson.id] || false;
    }

    return false;
  };

  const calculateCourseProgress = (courseId) => {
    const course = COURSES[courseId];
    if (!course.sections) return 0;

    const totalLessons = course.sections.reduce((sum, section) => sum + section.lessons.length, 0);
    const completedLessons = course.sections.reduce((sum, section) => {
      return sum + section.lessons.filter(lesson => progress[courseId]?.[lesson.id]).length;
    }, 0);

    return totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
  };

  const HomePage = () => (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Professional Certificate Program</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Master AI Literacy for Your Industry
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Build essential AI skills with industry-tailored training. Interactive, practical, and designed for professionals who want to stay ahead.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  setSelectedCourse('hr');
                  setCurrentView('course');
                }}
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all flex items-center gap-2"
              >
                Start Learning
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Self-Paced</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Interactive</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Industry-Focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why This Matters */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why AI Literacy Matters</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AI is transforming every industry. Stay competitive with the skills to leverage AI effectively, ethically, and strategically.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl border border-violet-100">
            <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center mb-6">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Make Informed Decisions</h3>
            <p className="text-gray-600">
              Understand AI capabilities and limitations to make strategic decisions about AI adoption in your organization.
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100">
            <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Drive Innovation</h3>
            <p className="text-gray-600">
              Identify opportunities to leverage AI for competitive advantage and operational excellence in your field.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Ensure Responsible Use</h3>
            <p className="text-gray-600">
              Navigate ethical considerations, bias risks, and compliance requirements when implementing AI solutions.
            </p>
          </div>
        </div>

        {/* Course Cards */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Choose Your Learning Path</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.values(COURSES).map(course => {
              const Icon = course.icon;
              const progressPercent = calculateCourseProgress(course.id);
              return (
                <div
                  key={course.id}
                  className="group bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-gray-300 transition-all duration-300 cursor-pointer hover:shadow-xl"
                  onClick={() => {
                    setSelectedCourse(course.id);
                    setCurrentView('course');
                  }}
                >
                  <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${course.color} flex items-center justify-center`}>
                        {Icon && <Icon className="w-7 h-7 text-white" />}
                      </div>
                      {progressPercent > 0 && (
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">{progressPercent}%</div>
                          <div className="text-xs text-gray-500">Complete</div>
                        </div>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {course.description}
                    </p>
                    {progressPercent > 0 && (
                      <div className="mb-4">
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className={`h-1.5 rounded-full bg-gradient-to-r ${course.color}`}
                            style={{ width: `${progressPercent}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center text-gray-900 font-semibold group-hover:gap-3 gap-2 transition-all">
                      {progressPercent > 0 ? 'Continue Learning' : 'Start Course'}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features */}
        <div className="bg-gray-50 rounded-3xl p-12 border border-gray-200">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-violet-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Interactive Learning</h4>
              <p className="text-sm text-gray-600">Engaging quizzes, exercises, and real-world scenarios</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Industry-Tailored</h4>
              <p className="text-sm text-gray-600">Content customized for your specific field</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Track Progress</h4>
              <p className="text-sm text-gray-600">Monitor your learning journey and achievements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-pink-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Earn Certificates</h4>
              <p className="text-sm text-gray-600">Receive recognized credentials upon completion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CourseOverview = () => {
    const course = COURSES[selectedCourse];
    const Icon = course.icon;

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <button
            onClick={() => setCurrentView('home')}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-8 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Courses
          </button>

          <div className={`bg-gradient-to-r ${course.color} rounded-3xl p-10 text-white mb-10 shadow-xl`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                {Icon && <Icon className="w-8 h-8 text-white" />}
              </div>
              <div>
                <h1 className="text-4xl font-bold">{course.title}</h1>
                <p className="text-lg opacity-90 mt-2">{course.description}</p>
              </div>
            </div>
            <div>
              <div className="text-sm opacity-90 mb-3 font-medium">Course Progress: {calculateCourseProgress(selectedCourse)}%</div>
              <div className="w-full bg-white/20 rounded-full h-3 backdrop-blur-sm">
                <div
                  className="h-3 rounded-full bg-white shadow-lg"
                  style={{ width: `${calculateCourseProgress(selectedCourse)}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {course.sections.map((section, sectionIdx) => (
              <div key={section.id} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-gray-50 to-white px-8 py-5 border-b border-gray-200">
                  <h3 className="font-bold text-lg text-gray-900">{section.title}</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {section.lessons.map((lesson, lessonIdx) => {
                    const unlocked = isLessonUnlocked(selectedCourse, sectionIdx, lessonIdx);
                    const completed = progress[selectedCourse]?.[lesson.id];

                    return (
                      <div
                        key={lesson.id}
                        className={`px-8 py-5 flex items-center justify-between transition-all ${
                          unlocked ? 'hover:bg-gray-50 cursor-pointer' : 'opacity-50 cursor-not-allowed'
                        }`}
                        onClick={() => {
                          if (unlocked) {
                            setCurrentLesson({ ...lesson, sectionIdx, lessonIdx });
                            setCurrentView('lesson');
                            setQuizAnswers({});
                          }
                        }}
                      >
                        <div className="flex items-center gap-4">
                          {completed ? (
                            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                          ) : unlocked ? (
                            <Circle className="w-6 h-6 text-gray-300 flex-shrink-0" />
                          ) : (
                            <Lock className="w-6 h-6 text-gray-300 flex-shrink-0" />
                          )}
                          <span className="text-gray-900 font-medium">{lesson.title}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          {lesson.type === 'quiz' && (
                            <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full font-medium">
                              Quiz
                            </span>
                          )}
                          {lesson.type === 'assessment' && (
                            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full font-medium">
                              Assessment
                            </span>
                          )}
                          {unlocked && <ArrowRight className="w-5 h-5 text-gray-400" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const LessonView = () => {
    const getContentForCourse = (courseId, lessonId) => {
      switch(courseId) {
        case 'hr': return HR_CONTENT[lessonId];
        case 'insurance': return INSURANCE_CONTENT[lessonId];
        case 'genai': return GENAI_CONTENT[lessonId];
        case 'healthcare': return HEALTHCARE_CONTENT[lessonId];
        default: return null;
      }
    };

const content = getContentForCourse(selectedCourse, currentLesson.id);

    const handleComplete = () => {
      saveProgress(selectedCourse, currentLesson.id);
      setCurrentView('course');
    };

    if (currentLesson.type === 'quiz') {
      return <QuizView onComplete={handleComplete} />;
    }

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <button
            onClick={() => setCurrentView('course')}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-8 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Course
          </button>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12">
            <div className="mb-8">
              <span className="text-sm text-violet-600 font-semibold uppercase tracking-wide">
                {COURSES[selectedCourse].sections[currentLesson.sectionIdx].title}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-10">
              {content?.title || currentLesson.title}
            </h1>

            <div className="space-y-8">
              {content?.sections.map((section, idx) => (
                <div key={idx}>
                  {section.heading && (
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {section.heading}
                    </h2>
                  )}
                  {section.content && (
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      {section.content}
                    </p>
                  )}
                  {section.list && (
                    <ul className="space-y-3 ml-6">
                      {section.list.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-lg text-gray-700 leading-relaxed flex items-start gap-3">
                          <span className="text-violet-600 font-bold mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Lesson {currentLesson.lessonIdx + 1} of {COURSES[selectedCourse].sections[currentLesson.sectionIdx].lessons.length}
              </div>
              <button
                onClick={handleComplete}
                className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2"
              >
                Mark as Complete
                <CheckCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const QuizView = ({ onComplete }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const getQuizForCourse = (courseId) => {
      switch(courseId) {
        case 'hr': return QUIZ_1;
        case 'insurance': return INSURANCE_QUIZ;
        case 'genai': return GENAI_QUIZ;
        case 'healthcare': return HEALTHCARE_QUIZ;
        default: return QUIZ_1;
      }
    };

    const quiz = getQuizForCourse(selectedCourse);

    const handleAnswer = (answer) => {
      const question = quiz.questions[currentQuestion];
      let isCorrect = false;

      if (question.type === 'multiple-choice') {
        isCorrect = answer === question.correct;
      } else if (question.type === 'true-false') {
        isCorrect = answer === question.correct;
      } else if (question.type === 'scenario') {
        isCorrect = answer === question.correct;
      } else if (question.type === 'matching') {
        isCorrect = answer.isCorrect;
      }

      const newAnswers = {
        ...quizAnswers,
        [question.id]: { answer, isCorrect }
      };
      setQuizAnswers(newAnswers);

      if (isCorrect) {
        setScore(score + 1);
      }
    };

    const handleNext = () => {
      if (currentQuestion < quiz.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setQuizAnswers({});
      } else {
        setShowResults(true);
      }
    };

    const handlePrevious = () => {
      setQuizAnswers({});
      setCurrentQuestion(currentQuestion - 1);
    };

    const question = quiz.questions[currentQuestion];
    const hasAnswered = quizAnswers[question.id];

    if (showResults) {
      const percentage = Math.round((score / quiz.questions.length) * 100);
      const passed = percentage >= 70;

      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-12 max-w-2xl w-full text-center">
            <div className={`w-24 h-24 rounded-full mx-auto mb-8 flex items-center justify-center ${
              passed ? 'bg-green-100' : 'bg-yellow-100'
            }`}>
              <Award className={`w-12 h-12 ${passed ? 'text-green-600' : 'text-yellow-600'}`} />
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {passed ? 'Excellent Work!' : 'Keep Learning!'}
            </h2>

            <div className="text-7xl font-bold text-violet-600 mb-6">
              {percentage}%
            </div>

            <p className="text-lg text-gray-600 mb-10">
              You scored {score} out of {quiz.questions.length} questions correctly
            </p>

            {passed ? (
              <button
                onClick={onComplete}
                className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Continue to Next Lesson
              </button>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-gray-600">You need 70% or higher to pass</p>
                <button
                  onClick={() => {
                    setCurrentQuestion(0);
                    setScore(0);
                    setShowResults(false);
                    setQuizAnswers({});
                  }}
                  className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <button
            onClick={() => setCurrentView('course')}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-8 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Course
          </button>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-10">
            <div className="mb-8 flex justify-between items-center">
              <span className="text-sm text-violet-600 font-semibold uppercase tracking-wide">
                Knowledge Check
              </span>
              <span className="text-sm text-gray-500 font-medium">
                Question {currentQuestion + 1} of {quiz.questions.length}
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-10">
              <div
                className="bg-gradient-to-r from-violet-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
              ></div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {question.question}
            </h2>

            {question.type === 'multiple-choice' && (
              <div className="space-y-3">
                {question.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => !hasAnswered && handleAnswer(idx)}
                    disabled={hasAnswered}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                      hasAnswered
                        ? idx === question.correct
                          ? 'border-green-500 bg-green-50'
                          : hasAnswered.answer === idx
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200'
                        : 'border-gray-200 hover:border-violet-500 hover:bg-violet-50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {question.type === 'true-false' && (
              <div className="space-y-3">
                {[true, false].map((value) => (
                  <button
                    key={value.toString()}
                    onClick={() => !hasAnswered && handleAnswer(value)}
                    disabled={hasAnswered}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                      hasAnswered
                        ? value === question.correct
                          ? 'border-green-500 bg-green-50'
                          : hasAnswered.answer === value
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200'
                        : 'border-gray-200 hover:border-violet-500 hover:bg-violet-50'
                    }`}
                  >
                    {value ? 'True' : 'False'}
                  </button>
                ))}
              </div>
            )}

            {question.type === 'scenario' && (
              <div className="space-y-3">
                {question.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => !hasAnswered && handleAnswer(idx)}
                    disabled={hasAnswered}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                      hasAnswered
                        ? idx === question.correct
                          ? 'border-green-500 bg-green-50'
                          : hasAnswered.answer === idx
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200'
                        : 'border-gray-200 hover:border-violet-500 hover:bg-violet-50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {question.type === 'matching' && (
              <MatchingExercise
                question={question}
                onAnswer={handleAnswer}
                hasAnswered={hasAnswered}
              />
            )}

            {hasAnswered && question.explanation && (
              <div className={`mt-8 p-6 rounded-xl ${
                hasAnswered.isCorrect ? 'bg-green-50 border-2 border-green-200' : 'bg-blue-50 border-2 border-blue-200'
              }`}>
                <p className={`font-semibold mb-2 ${hasAnswered.isCorrect ? 'text-green-800' : 'text-blue-800'}`}>
                  {hasAnswered.isCorrect ? '✓ Correct!' : 'ℹ Good to know:'}
                </p>
                <p className="text-gray-700">{question.explanation}</p>
              </div>
            )}

            <div className="mt-10 pt-8 border-t border-gray-200 flex justify-between items-center">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  currentQuestion === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <ArrowLeft className="w-5 h-5" />
                Previous
              </button>

              <button
                onClick={handleNext}
                disabled={!hasAnswered}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  !hasAnswered
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : currentQuestion === quiz.questions.length - 1
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg'
                    : 'bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:shadow-lg'
                }`}
              >
                {currentQuestion === quiz.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (currentView === 'lesson') {
    return <LessonView />;
  }

  if (currentView === 'course') {
    return <CourseOverview />;
  }

  return <HomePage />;
}