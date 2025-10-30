import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, Lock, Home, BookOpen, Award, ArrowRight, ArrowLeft } from 'lucide-react';

// Course structure
const COURSES = {
  hr: {
    id: 'hr',
    title: 'AI Literacy for HR',
    description: 'Learn how AI is transforming talent acquisition, employee engagement, and workforce planning',
    color: 'from-blue-500 to-cyan-500',
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
    description: 'Discover AI applications in underwriting, claims processing, and risk assessment',
    color: 'from-emerald-500 to-teal-500'
  },
  genai: {
    id: 'genai',
    title: 'Generative AI Literacy',
    description: 'Master the fundamentals of generative AI tools and their business applications',
    color: 'from-purple-500 to-pink-500'
  },
  healthcare: {
    id: 'healthcare',
    title: 'AI Literacy in Healthcare',
    description: 'Explore AI in diagnostics, patient care, and medical research',
    color: 'from-orange-500 to-red-500'
  }
};

// Content for HR lessons
const HR_CONTENT = {
  'ai-what-is-it': {
    title: 'AI - What Is It?',
    content: `Artificial Intelligence (AI) refers to computer systems designed to perform tasks that typically require human intelligence. In HR, this means technology that can screen resumes, answer employee questions, predict attrition, and personalize learning paths.

Think of AI as your intelligent assistant that learns from patterns in your data. When you use AI-powered recruitment tools that rank candidates or chatbots that answer benefits questions, you're leveraging AI.

Key characteristics of AI in HR:
• Pattern Recognition: Identifying trends in employee data
• Automation: Handling repetitive tasks like interview scheduling
• Prediction: Forecasting hiring needs or turnover risks
• Personalization: Tailoring employee experiences at scale

For HR professionals, understanding AI isn't about becoming a programmer—it's about knowing how to leverage these tools effectively while ensuring fairness and compliance.`
  },
  'types-of-ai': {
    title: 'What Are the Different Types of AI?',
    content: `AI comes in different forms, each with unique capabilities relevant to HR:

**Narrow AI (Weak AI)**
The AI you use today in HR tools. It excels at specific tasks like:
• Resume screening systems that match skills to job descriptions
• Chatbots answering common HR policy questions
• Scheduling assistants for interviews

**General AI (Strong AI)**
Hypothetical AI with human-like intelligence across all domains. Not yet achieved and not currently used in HR applications.

**Machine Learning**
AI that improves through experience:
• Predictive analytics identifying flight-risk employees
• Compensation analysis tools finding pay equity gaps
• Performance prediction models

**Deep Learning**
Advanced ML using neural networks:
• Video interview analysis (use with caution due to bias concerns)
• Sentiment analysis of employee surveys
• Voice-based candidate screening

For HR professionals, you'll primarily work with Narrow AI and Machine Learning applications designed for specific workforce challenges.`
  },
  'how-ai-learns': {
    title: 'How AI Learns',
    content: `Understanding how AI learns helps HR professionals make better decisions about tool selection and use:

**Supervised Learning**
AI learns from labeled examples:
• Training: Show the AI 10,000 resumes labeled "good fit" or "not a fit"
• Application: System learns to screen new resumes
• HR Use Case: Candidate screening, skills assessment scoring

**Unsupervised Learning**
AI finds patterns without labels:
• Training: Feed AI employee data without telling it what to find
• Application: System discovers natural groupings (high performers, flight risks)
• HR Use Case: Employee segmentation, identifying training needs

**Reinforcement Learning**
AI learns through trial and error:
• Training: System tries different actions and learns from outcomes
• Application: Optimizes decisions based on results
• HR Use Case: Interview scheduling optimization, onboarding workflow improvements

**The HR Implication:**
The quality of AI output depends on the quality and fairness of training data. Biased historical hiring data creates biased AI recommendations. Always audit your data sources.`
  },
  'generative-ai': {
    title: 'Generative AI',
    content: `Generative AI creates new content based on patterns learned from existing data. For HR, this is transformative:

**What It Does:**
• Generates job descriptions optimized for inclusion and SEO
• Creates personalized onboarding materials for new hires
• Drafts policy communications in multiple languages
• Generates interview questions tailored to specific roles
• Creates training content and learning modules

**Popular Tools in HR:**
• ChatGPT/Claude: Draft communications, summarize policies
• Writing assistants: Create inclusive job postings
• Content generators: Develop training materials
• Email composers: Personalize employee communications

**HR-Specific Applications:**
1. **Recruitment:** Generate compelling job ads that attract diverse candidates
2. **Onboarding:** Create personalized welcome materials for each role
3. **Learning & Development:** Develop customized training content
4. **Employee Communications:** Draft announcements, policy updates
5. **Performance Management:** Generate feedback templates

**Critical Consideration:**
Always review AI-generated content for accuracy, bias, and legal compliance. Generative AI should augment, not replace, human judgment in sensitive HR matters.`
  },
  'agentic-ai': {
    title: 'Agentic AI',
    content: `Agentic AI represents the next evolution: systems that can act autonomously to achieve goals with minimal human intervention.

**What Makes It "Agentic":**
• Takes initiative rather than waiting for commands
• Makes multi-step decisions to achieve objectives
• Adapts strategies based on outcomes
• Operates across multiple tools and systems

**Emerging HR Applications:**

**1. Intelligent Recruiting Agents**
Goal: "Fill this data analyst position with qualified candidates by month-end"
Actions: Posts job, sources candidates, screens resumes, schedules interviews, sends updates

**2. Employee Experience Agents**
Goal: "Ensure smooth onboarding for all new hires"
Actions: Assigns tasks, monitors completion, intervenes when stuck, personalizes experience

**3. Workforce Planning Agents**
Goal: "Maintain optimal staffing levels"
Actions: Predicts turnover, identifies skill gaps, recommends hiring/training, adjusts plans

**The HR Professional's Role:**
As these systems evolve, HR's focus shifts to:
• Setting appropriate goals and guardrails
• Monitoring for bias and compliance
• Handling exceptions and sensitive situations
• Ensuring human oversight for critical decisions

**Current Reality:**
Most HR AI isn't truly agentic yet. Be cautious of vendors overclaiming capabilities.`
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
      <p className="text-gray-600 mb-4">Click items to match them together</p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-3">
          {question.pairs.map((pair) => (
            <button
              key={pair.left}
              onClick={() => !hasAnswered && handleLeftClick(pair.left)}
              disabled={hasAnswered}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedLeft === pair.left
                  ? 'border-blue-500 bg-blue-50'
                  : matches[pair.left]
                  ? hasAnswered?.isCorrect
                    ? 'border-green-500 bg-green-50'
                    : 'border-red-500 bg-red-50'
                  : 'border-gray-200 hover:border-blue-300'
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
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  isMatched
                    ? hasAnswered?.isCorrect
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-blue-300'
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

// Main App Component
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6">
            <BookOpen className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            AI Literacy Training
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Build essential AI skills tailored to your industry. Interactive, engaging, and practical.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {Object.values(COURSES).map(course => {
            const progressPercent = calculateCourseProgress(course.id);
            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => {
                  setSelectedCourse(course.id);
                  setCurrentView('course');
                }}
              >
                <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {course.description}
                  </p>
                  {progressPercent > 0 && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Progress</span>
                        <span>{progressPercent}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${course.color}`}
                          style={{ width: `${progressPercent}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700">
                    {progressPercent > 0 ? 'Continue Learning' : 'Start Course'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Track Your Progress
          </h3>
          <p className="text-gray-600">
            Complete modules in order, take interactive quizzes, and earn certificates
          </p>
        </div>
      </div>
    </div>
  );

  const CourseOverview = () => {
    const course = COURSES[selectedCourse];

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <button
            onClick={() => setCurrentView('home')}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Courses
          </button>

          <div className={`bg-gradient-to-r ${course.color} rounded-2xl p-8 text-white mb-8`}>
            <h1 className="text-4xl font-bold mb-3">{course.title}</h1>
            <p className="text-lg opacity-90">{course.description}</p>
            <div className="mt-6">
              <div className="text-sm opacity-90 mb-2">Course Progress</div>
              <div className="w-full bg-white bg-opacity-30 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-white"
                  style={{ width: `${calculateCourseProgress(selectedCourse)}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {course.sections.map((section, sectionIdx) => (
              <div key={section.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b">
                  <h3 className="font-bold text-lg text-gray-900">{section.title}</h3>
                </div>
                <div className="divide-y">
                  {section.lessons.map((lesson, lessonIdx) => {
                    const unlocked = isLessonUnlocked(selectedCourse, sectionIdx, lessonIdx);
                    const completed = progress[selectedCourse]?.[lesson.id];

                    return (
                      <div
                        key={lesson.id}
                        className={`px-6 py-4 flex items-center justify-between ${
                          unlocked ? 'hover:bg-gray-50 cursor-pointer' : 'opacity-50'
                        }`}
                        onClick={() => {
                          if (unlocked) {
                            setCurrentLesson({ ...lesson, sectionIdx, lessonIdx });
                            setCurrentView('lesson');
                            setQuizAnswers({});
                          }
                        }}
                      >
                        <div className="flex items-center">
                          {completed ? (
                            <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                          ) : unlocked ? (
                            <Circle className="w-6 h-6 text-gray-300 mr-3" />
                          ) : (
                            <Lock className="w-6 h-6 text-gray-300 mr-3" />
                          )}
                          <span className="text-gray-900">{lesson.title}</span>
                        </div>
                        {lesson.type === 'quiz' && (
                          <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                            Quiz
                          </span>
                        )}
                        {lesson.type === 'assessment' && (
                          <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                            Assessment
                          </span>
                        )}
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <button
            onClick={() => setCurrentView('course')}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Course
          </button>

          <div className="bg-white rounded-2xl shadow-lg p-10">
            <div className="mb-6">
              <span className="text-sm text-blue-600 font-semibold">
                {COURSES[selectedCourse].sections[currentLesson.sectionIdx].title}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              {content?.title || currentLesson.title}
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {content?.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t flex justify-between items-center">
              <div className="text-sm text-gray-600">
                Lesson {currentLesson.lessonIdx + 1} of {COURSES[selectedCourse].sections[currentLesson.sectionIdx].lessons.length}
              </div>
              <button
                onClick={handleComplete}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Mark as Complete
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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center px-6">
          <div className="bg-white rounded-2xl shadow-lg p-10 max-w-2xl w-full text-center">
            <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${
              passed ? 'bg-green-100' : 'bg-yellow-100'
            }`}>
              <Award className={`w-10 h-10 ${passed ? 'text-green-600' : 'text-yellow-600'}`} />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {passed ? 'Great Job!' : 'Keep Learning!'}
            </h2>

            <div className="text-6xl font-bold text-blue-600 mb-4">
              {percentage}%
            </div>

            <p className="text-gray-600 mb-8">
              You scored {score} out of {QUIZ_1.questions.length} questions correctly
            </p>

            {passed ? (
              <button
                onClick={onComplete}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Continue to Next Lesson
              </button>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-gray-600">You need 70% to pass</p>
                <button
                  onClick={() => {
                    setCurrentQuestion(0);
                    setScore(0);
                    setShowResults(false);
                    setQuizAnswers({});
                  }}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <button
            onClick={() => setCurrentView('course')}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Course
          </button>

          <div className="bg-white rounded-2xl shadow-lg p-10">
            <div className="mb-6 flex justify-between items-center">
              <span className="text-sm text-blue-600 font-semibold">
                Knowledge Check
              </span>
              <span className="text-sm text-gray-600">
                Question {currentQuestion + 1} of {QUIZ_1.questions.length}
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
              <div
                className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all"
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
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      hasAnswered
                        ? idx === question.correct
                          ? 'border-green-500 bg-green-50'
                          : hasAnswered.answer === idx
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200'
                        : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
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
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      hasAnswered
                        ? value === question.correct
                          ? 'border-green-500 bg-green-50'
                          : hasAnswered.answer === value
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200'
                        : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
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
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      hasAnswered
                        ? idx === question.correct
                          ? 'border-green-500 bg-green-50'
                          : hasAnswered.answer === idx
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200'
                        : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
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
              <div className={`mt-6 p-4 rounded-lg ${
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