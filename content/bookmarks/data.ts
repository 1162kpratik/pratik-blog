import type { Bookmark } from '@/lib/types'

export const bookmarks: Bookmark[] = [
  {
    id: 1,
    slug: 'atomic-habits',
    title: 'Atomic Habits',
    author: 'James Clear',
    coverImage: '/images/blog/AtomicHabitsCover.jpg',
    noteCount: 1,
    totalNotes: 6,
    coverGradient: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 50%, #111111 100%)',
    quote:
      '',
    goodreadsRating: 4.3,
    goodreadsUrl: 'https://www.goodreads.com/book/show/40121378-atomic-habits',
    favouriteQuotes: [
      "You do not rise to the level of your goals. You fall to the level of your systems.",
      "Every action you take is a vote for the type of person you wish to become.",
      "Habits are the compound interest of self-improvement.",
    ],
    whoShouldRead:
      "This book is perfect for anyone looking to break unproductive cycles, individuals aiming to build sustainable routines and professionals interested in the behavioral science behind personal development.",
    notesAndSummary: [
     "This book is not really a book about motivation. It is a book about <strong>systems</strong>, <strong>identity</strong> & <strong>small changes</strong>.",
"The central idea is simple: <em>Tiny improvements, repeated consistently, create remarkable results over time.</em>",
"The book explains that success rarely comes from one dramatic change. Instead, it comes from everyday actions that seem insignificant in the moment.",
"<strong>Key Ideas From The Book</strong>",
"<mark>Focus on Systems, Not Goals</mark>",
"Goals define direction, but systems create progress. Winning once is temporary. Building a process is what creates lasting change.",
"Example: Instead of: Goal: Read 20 books this year",
"System: Read 10 pages every night",

"<mark>Identity Comes First</mark>",
"James Clear argues that lasting habits begin with identity.",
"Don’t ask: What do I want to achieve? Ask: Who do I want to become?",
"Examples:",
"I want to run → I am a runner",
"I want to write → I am a writer",
"I want to learn → I am someone who keeps learning",

"<mark>The Four Laws of Behavior Change</mark>",
"Good habits become easier when you make them:",
"Obvious → Keep cues visible",
"Attractive → Pair habits with things you enjoy",
"Easy → Reduce friction",
"Satisfying → Reward progress immediately",
"And bad habits are reversed by doing the opposite.",

"<mark>Environment Shapes Behavior</mark>",
"Discipline matters but environment matters more.",

"Want to read more? Keep books visible.",
"Attractive → Pair habits with things you enjoy",
"Want less screen time? Move distractions away.",
"Sometimes changing the room changes the habit.",

"<em>This book is a quiet reminder that big transformations often begin with very small actions.</em>",
    ],
  },
  {
    id: 2,
    slug: 'design-as-art',
    title: 'Design as Art',
    author: 'Bruno Munari',
    noteCount: 2,
    totalNotes: 6,
    coverGradient: 'linear-gradient(135deg, #141414 0%, #0f1015 50%, #111215 100%)',
    quote:
      'Munari breaks down the artificial barriers between fine art and industrial design.',
    goodreadsRating: 4.1,
    goodreadsUrl: 'https://www.goodreads.com/book/show/183132.Design_as_Art',
    favouriteQuotes: [
      "A designer is a planner with an aesthetic sense.",
      "The designer of today re-establishes the long-lost contact between art and the public.",
      "Everything is design. Everything!",
    ],
    whoShouldRead:
      "Anyone who works creatively — whether in engineering, software, writing, or traditional design. Munari will permanently change how you look at everyday objects. It's short, beautifully written, and rewards re-reading.",
    notesAndSummary: [
      "Munari wrote this in 1966 and it still feels urgent. His argument: design is not decoration applied to function. It IS function. The shape of a fork, the typography on a medicine bottle, the layout of a city — all of it is design, and all of it either serves or fails the people who use it.",
      "What I love about this book is how Munari combines playfulness with rigour. He takes design seriously without taking himself seriously. He writes about a useless machine he built just to explore movement, and about teaching children to draw by removing the idea that there's a 'correct' way to see.",
      "The chapter on 'The Designer's Responsibility' hit hard. Munari argues that designers have a duty to the user that's more fundamental than serving the client. You can't design something that confuses or harms people in the name of aesthetics. Good design is honest.",
      "Reading this alongside my engineering work made me think differently about the systems I build. What's the 'design' of a BMS interface? Of an energy monitoring dashboard? These things could be beautiful or they could be functional. Munari argues they should be both — or they've failed.",
    ],
  },
  {
    id: 3,
    slug: 'silence-in-the-age-of-noise',
    title: 'Silence: In the Age of Noise',
    author: 'Erling Kagge',
    noteCount: 3,
    totalNotes: 6,
    coverGradient: 'linear-gradient(135deg, #0f1010 0%, #131515 50%, #0c0e0e 100%)',
    quote:
      'In a world designed to capture every second of our attention, Kagge argues that silence is the ultimate luxury.',
    goodreadsRating: 3.7,
    goodreadsUrl: 'https://www.goodreads.com/book/show/35297968-silence',
    favouriteQuotes: [
      "Silence is not the opposite of sound. It's a different relationship with the world.",
      "The secret to finding silence is not about going somewhere quiet. It's about shutting off the noise inside your own head.",
      "Exploring the world — whether on foot through Antarctica or through a book — means encountering silence on its own terms.",
    ],
    whoShouldRead:
      "This is for anyone who feels they can never quite 'switch off' — who reaches for their phone the moment they feel bored, or who struggles to sit with their own thoughts. It's a short read (under 2 hours) but surprisingly affecting.",
    notesAndSummary: [
      "Kagge walked to the South Pole alone and without a radio, spending 50 days in near-total silence. This book is partly his account of that experience and partly a philosophical meditation on what silence actually is and why we need it.",
      "His central insight: silence is not about the absence of sound. It's about the quality of presence. You can be silent in a busy city if you're truly attentive. You can be surrounded by noise even in a quiet room if your mind won't stop.",
      "The most useful section for me was on what he calls 'inner silence' — the ability to sit with your own thoughts without immediately reaching for distraction. He argues this capacity is both increasingly rare and increasingly valuable. It's where creativity, self-knowledge, and genuine rest actually happen.",
      "I read this during a period when I was feeling scattered and overstimulated, and it worked almost like medicine. Not because Kagge offers any technique or system, but because he makes you remember that silence is available — you just have to choose it.",
    ],
  },
  {
    id: 4,
    slug: 'stolen-focus',
    title: 'Stolen Focus',
    author: 'Johann Hari',
    noteCount: 4,
    totalNotes: 6,
    coverGradient: 'linear-gradient(135deg, #110e0e 0%, #1a1515 50%, #0e0b0b 100%)',
    quote:
      'An unflinching look at why our ability to pay attention is collapsing — and what we can do about it.',
    goodreadsRating: 4.0,
    goodreadsUrl: 'https://www.goodreads.com/book/show/57933306-stolen-focus',
    favouriteQuotes: [
      "Your attention didn't collapse. It was stolen.",
      "The crisis of attention is not a personal failing. It is a systemic problem that requires systemic solutions.",
      "Flow states are becoming rarer, and that's not an accident.",
    ],
    whoShouldRead:
      "Anyone who has tried and failed to 'fix' their attention through apps, habits, or willpower — and anyone who works in tech and wants to understand the industry they're part of. It will make you angry and then, hopefully, motivated.",
    notesAndSummary: [
      "Hari's main argument: the attention crisis is not your fault. It's not a problem of individual weakness or poor habits. It's the result of specific design decisions, business models, and environmental factors that were engineered to hijack your focus.",
      "He interviews leading attention researchers, tech insiders, and neuroscientists to make this case. The most alarming finding: cognitive scientists now estimate that after any interruption, it takes an average of 23 minutes to return to the same level of focused attention. Given how many interruptions the average knowledge worker faces per hour, sustained focus has become structurally almost impossible.",
      "What I appreciated most was how Hari resists the temptation to make this entirely about social media. Yes, algorithmic feeds are a problem. But he also writes about sleep deprivation, the collapse of play in childhood, ultra-processed food and its effects on cognition, and the pace of modern life more broadly. Attention is being attacked from many directions simultaneously.",
      "His proposed solutions are partly individual (strict tech boundaries, more sleep, physical activity, reading for extended periods daily) and partly political (regulating the attention economy the way we regulate other harmful industries). I found the political argument more compelling than I expected.",
    ],
  },
  {
    id: 5,
    slug: 'show-your-work',
    title: 'Show Your Work!',
    author: 'Austin Kleon',
    noteCount: 5,
    totalNotes: 6,
    coverGradient: 'linear-gradient(135deg, #121212 0%, #1e1e1e 50%, #0f0f0f 100%)',
    quote:
      'The most practical and honest book about sharing creative work on the internet.',
    goodreadsRating: 3.9,
    goodreadsUrl: 'https://www.goodreads.com/book/show/18290401-show-your-work',
    favouriteQuotes: [
      "You don't have to be a genius. You just have to be yourself.",
      "Don't show your finished work. Show your work in progress.",
      "The best way to get started on the path to sharing your work is to think about what you want to learn, and make a commitment to learning it in front of others.",
    ],
    whoShouldRead:
      "Anyone who creates things but is afraid to share them — writers, engineers, designers, makers of any kind. If you've ever thought 'I'll share when it's ready', this book will make you rethink that entirely.",
    notesAndSummary: [
      "Kleon's book is short, visual, and punchy — it reads in a couple of hours but I've returned to it many times. The core idea: the creative process itself is interesting to people. You don't need a finished masterpiece to share. You can share the mess, the process, the questions, the false starts.",
      "This was the book that convinced me to start writing publicly. The chapter 'Think Process, Not Product' reframed everything. People don't connect with perfect output. They connect with the human being working through a problem.",
      "His idea of building a 'flow' — sharing small, consistent pieces of what you're learning and making — feels more sustainable than the 'launch a big thing' model most people imagine when they think about putting work online.",
      "What I keep coming back to: 'Don't worry about being in the right scene, or knowing the right people. Just show your work.' This blog is partly a response to reading this book.",
    ],
  },
  {
    id: 6,
    slug: 'thinking-fast-and-slow',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    noteCount: 6,
    totalNotes: 6,
    coverGradient: 'linear-gradient(135deg, #0e1014 0%, #141820 50%, #0a0d12 100%)',
    quote:
      "The book that made me distrust my own certainty. Kahneman's two-system model changed how I approach every decision.",
    goodreadsRating: 4.1,
    goodreadsUrl: 'https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow',
    favouriteQuotes: [
      "Nothing in life is as important as you think it is, while you are thinking about it.",
      "Our comforting conviction that the world makes sense rests on a secure foundation: our almost unlimited ability to ignore our ignorance.",
      "A reliable way to make people believe in falsehoods is frequent repetition, because familiarity is not easily distinguished from truth.",
    ],
    whoShouldRead:
      "Everyone. But especially engineers, product managers, and anyone who makes decisions under uncertainty. If you've ever been confident and wrong, this book will explain why — and give you better tools for the future.",
    notesAndSummary: [
      "Kahneman's central framework divides thinking into two systems: System 1 (fast, automatic, intuitive, emotional) and System 2 (slow, deliberate, effortful, rational). The key insight is that System 1 runs almost all the time and System 2 is lazy — it defers to System 1 unless given a specific reason to engage.",
      "The most practically useful part of the book for me was the section on cognitive biases. Not the list of biases itself (those are everywhere) but Kahneman's point that knowing about a bias doesn't make you immune to it. This was sobering. You can study the availability heuristic for years and still fall for it when making a quick decision.",
      "The chapter on 'What You See Is All There Is' (WYSIATI) was particularly striking for my engineering work. Kahneman shows that System 1 builds the most coherent story it can from whatever information is available — and crucially, doesn't account for what's missing. In infrastructure and BMS projects, the failure to ask 'what data are we NOT seeing?' causes enormous problems.",
      "Reading this book is one of those experiences where you finish it and then spend weeks noticing the phenomena it describes in real time. It's made me a slower, more deliberate decision-maker — which in most contexts is exactly the right direction.",
    ],
  },
]
