const config = {
  // ==== HOME PAGE ====
  homePage: {
    // Number of sentences displayed per slide
    sentencePerSlide: 2, // Adjust this to control how many sentences are shown per slide
    slides: [
      [
        "Hey my love",
        "I made something for you for 6 Months <3",
        // If you set `sentencePerSlide` to 2, the next text won't be visible
        "Surprise!",
      ],
      [
        "This is not a regular website",
        "since its for Gracie :)",
      ],
      ["I want to show you js how much I love you.", "But here is a quiz to see if you really remember our special moments"],
      // You can add more slides or delete slides as needed
    ],
  },

  // ==== QUIZ PAGE ====
  quizPage: {
    // Color of the progress bar
    progressBarColor: "#cf6b87",
    // Text labels for the quiz
    text: {
      questionLabel: "Question",
      ofLabel: "out of",
      scoreLabel: "Score:",
      yourScoreLabel: "Your score:",
      nextButtonText: "Go to next page",
    },
    // Quiz questions and answers
    questions: [
      {
        id: 1, // Unique ID for the question
        title: "who said I love you first?",
        description: "(accidental or not)",
        correctAnswer: "Gracie", // Correct answer value (must match one of the options' `value`)
        options: [
          { value: "Andre", label: "Andre" },
          { value: "Gracie", label: "Gracie" }, 
        ],
      },
      {
        id: 2,
        title: "Where was our first kiss?",
        description: "Back of the car",
        correctAnswer: "McLennon",
        options: [
          { value: "Walmart", label: "Walmart" },
          { value: "Pool", label: "Pool" },
          { value: "Parking Lot", label: "Parking Lot" },
          { value: "McLennon", label: "McLennon" },
        ],
      },
      {
        id: 3,
        title: "When did I get your IG?",
        description: "Don't make the same mistake twice:D",
        correctAnswer: "March-14",
        options: [
          { value: "Feb-29", label: "Febuary 29th" },
          { value: "March-26", label: "March 26th" },
          { value: "April-1", label: "April 1st" },
          { value: "March-14", label: "March 14th" },
        ],
      },
      // You can add more questions here
    ],
    // GIF ANIMATION CONFIGURATION
    gifConfig: [
      {
        check: (score) => score >= 3, // If score is 3 or above, this GIF will be shown
        heading: "Wow!!!!!!! unbelievable",
        gifName: "gif4.gif", // Name of the GIF file in `src/assets/gifs`
        style: "w-44", // Tailwind CSS class for styling the GIF
      },
      {
        check: (score) => score === 2, // If score is exactly 2, this GIF will be shown
        heading: "Ehhh, not bad! so I still love you",
        gifName: "gif3.gif",
        style: "w-44",
      },
      {
        check: (score) => score === 1, // If score is exactly 1, this GIF will be shown
        heading: "It's okay, I know you tried so hard",
        gifName: "gif2.gif",
        style: "w-44",
      },
      {
        check: () => true, // Default case (if none of the above conditions are met)
        heading: "umm... wtf???",
        gifName: "gif1.gif",
        style: "w-44",
      },
    ],
  },

  // ==== DRAWING PAGE ====
  drawingPage: {
    // Messages displayed on the drawing page
    messages: [
      "Can you draw me a flower",
      "Give me another flower",
      "Draw me one last flower",
    ],
    // Colors available for drawing
    COLORS: ["#000000", "#FF7043", "#66BB6A", "#42A5F5", "#FFEE58"],
    // Text for the submit button
    text: {
      submitText: "Submit",
      finalText: "Thank you baby ❤️",
      loading: "Sending...",
    },
  },

  // ==== LETTER PAGE ====
  letterPage: {
  // Custom message you want to display (your love letter)
  customMessage: `To Mina More,

Oh Gracie Where do i even start, Life with you has been so amazing and perfecta even with its ups and downs.

But you know what, I wouldnt change a single thing! I am so Grateful and Thankful for everyday that I spend with you.

When I wake up I Think of you, when i go to sleep i think of you, you are my everything and I am so glad i get to 

spend the rest of my life with you. its one thing to say I am obsessed and another to actualy be obsessed and I am happily 

Obsessed, from the mornings when the first thing i do is reach to see if you text me or to text you good morning, to our 

daily habitual need to see eachother, then to the nights when we yap before bed, my life is filled with Gracie and I LOVE IT!!!

I can barley remember life before Gracie and to me it seems like i just got spawned in with you in my life and this weird thing

we call life only truly started 6 months ago, it seems like its been a enternity but at the same time it feels like we have barley

started our story, to me it is so soreal that we have been tg all throughout 2025 into 2026 and whats even more crazy is how we met 

met at the perfect moment so we get to jump straight into our lives and grow tg, eat tg, live tg, sleep tg, and experience all

this world has to offer TOGETHER. I genuinely cannot be more thankful to be yours and be lucky enough to have you in my life <3

I Truly Believe we were put on this earth to meet eachother and be with eachother because you are so perfect, and kawaiiiii.

But through thick and thin I am here bby and whenever it seems like i dont love you I hope you will look to this, your ring or now

wrist? to see just how much I LOVEEEE YOUUUUUUUU. MEOOOWWW MEEOOOWWWWWW

SO THANK YOU SO MUCH FOR BEING THE BEST WIFEYYYY EVERRRRRR

THANKK YOUUUU SO MUCHHH FOR BEING MINEEEE

I AM THE LUCKIEST GUY IN THE ENTIRE GALAXYYYY

HAPPPPYYYYYY 6 MONTHHSSSSS BBBYYYYYYY

Love,
Andre ❤️`,
    // Placeholder text for the letter input
    placeholder: {
      default: `Now, I want you to write me a letter :) Once you click "Send Message" I'll be able to see it hehe`,
      emptyInput: "You have to write me something first!! ):",
      success: "Thank you for the message my love!",
      error: "Failed to send the message. try it again!",
    },
    // Button text
    buttons: {
      sendMessage: "Send Message",
      clearText: "Clear",
      loading: "Sending...",
    },
    // API configuration for sending emails
    api: {
      baseURL: `http://localhost:3000`,
      // Configure this based on your development port (check server/app.js or .env.PORT) and update this to your live backend URL after deployment

      sendEmailEndpoint: "/send-email", // Endpoint for sending emails
    },
  },

  // ==== CLOSING PAGE ====
  closingPage: {
    // Final message displayed on the closing page
    message:
      "Thank you for contributing to this project. I love you with all my heart",
    // GIF displayed on the closing page
    gifName: "closing.gif", // Name of the GIF file in `src/assets/gifs`
    style: "w-44", // Tailwind CSS class for styling the GIF
  },
};

export default config;
