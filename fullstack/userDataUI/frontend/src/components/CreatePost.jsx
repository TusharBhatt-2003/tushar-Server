import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const CreatePost = () => {
  // Array of random post suggestions
  const suggestions = [
    "What's on your mind today?",
    "Share something exciting with us!",
    "Tell us about your latest adventure.",
    "What have you been up to recently?",
    "Express your thoughts here!",
    "Share a fun fact or something cool!",
    "What's new in your world?",
    "Write something that inspires you today!",
    "Feeling creative? Share your ideas here!",
    "How are you feeling right now?",
  ];

  // State to store the random sentence for the placeholder
  const [placeholder, setPlaceholder] = useState("");
  const textRef = useRef(null); // Reference for the text container
  const intervalIdRef = useRef(null); // Reference for the interval ID

  // Function to pick a random suggestion
  const getRandomSuggestion = () => {
    const randomIndex = Math.floor(Math.random() * suggestions.length);
    return suggestions[randomIndex];
  };

  // Function to animate the placeholder text
  const animatePlaceholder = () => {
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0, // Start with 0 opacity
        x: -50, // Start with a slight upward offset
        scale: 0, // Start with scale 0
      },
      {
        opacity: 1, // End with full opacity
        x: 0, // Reset the position
        scale: 1,
        duration: 1, // Duration of animation
        ease: "elastic.inOut(.5, 0.3)", // Elastic easing for a more natural effect
      },
    );
  };

  // Start changing placeholder every 2.5 seconds
  const startPlaceholderInterval = () => {
    intervalIdRef.current = setInterval(() => {
      const newPlaceholder = getRandomSuggestion();
      setPlaceholder(newPlaceholder); // Update the placeholder
    }, 2500);
  };

  // Function to stop placeholder interval when user focuses on textarea
  const stopPlaceholderInterval = () => {
    clearInterval(intervalIdRef.current); // Stop the interval when typing starts
  };

  useEffect(() => {
    setPlaceholder(getRandomSuggestion()); // Set an initial random suggestion
    startPlaceholderInterval(); // Start interval on mount
    return () => clearInterval(intervalIdRef.current); // Cleanup interval on unmount
  }, []); // Run only once on mount to set initial placeholder

  useEffect(() => {
    if (placeholder) {
      animatePlaceholder(); // Trigger animation when placeholder changes
    }
  }, [placeholder]); // Trigger animation when placeholder updates

  return (
    <div className="hidden md:block h-fit w-full bg-[#C7C9C6] text-[#484F48]">
      <h1 className="text-3xl font-bold">Create Post</h1>
      <div className="flex w-full">
        <div className="border-2 w-2/3 h-[15vh] border-[#484F48] rounded-xl">
          <textarea
            ref={textRef} // Reference to the textarea for animation
            className="w-full h-full overflow-hidden p-2 bg-transparent outline-none rounded-xl placeholder:text-[#484F48]/50"
            placeholder={placeholder} // Setting the random suggestion as placeholder
            onFocus={stopPlaceholderInterval} // Stop interval when focused
          />
        </div>
        <div className="w-1/3 grid place-content-center">
          <button className="bg-[#484F48] text-[#E8D8C9] px-5 py-3 font-bold rounded-xl text-center uppercase">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
