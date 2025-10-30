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
    icon: Shield
  },
  genai: {
    id: 'genai',
    title: 'Generative AI Literacy',
    description: 'Harness generative AI tools for business innovation and productivity',
    color: 'from-pink-600 to-rose-600',
    icon: Sparkles
  },
  healthcare: {
    id: 'healthcare',
    title: 'AI Literacy in Healthcare',
    description: 'Navigate AI in diagnostics, patient care, and medical research',
    color: 'from-blue-600 to-cyan-600',
    icon: Target
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
    const content = HR_CONTENT[currentLesson.id];

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

    const handleAnswer = (answer) => {
      const question = QUIZ_1.questions[currentQuestion];
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

      setQuizAnswers({
        ...quizAnswers,
        [question.id]: { answer, isCorrect }
      });

      if (isCorrect) {
        setScore(score + 1);
      }

      setTimeout(() => {
        if (currentQuestion < QUIZ_1.questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setShowResults(true);
        }
      }, 1500);
    };

    const question = QUIZ_1.questions[currentQuestion];
    const hasAnswered = quizAnswers[question.id];

    if (showResults) {
      const percentage = Math.round((score / QUIZ_1.questions.length) * 100);
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
              You scored {score} out of {QUIZ_1.questions.length} questions correctly
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
                Question {currentQuestion + 1} of {QUIZ_1.questions.length}
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-10">
              <div
                className="bg-gradient-to-r from-violet-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / QUIZ_1.questions.length) * 100}%` }}
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