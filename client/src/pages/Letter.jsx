import React, { useState, useEffect } from "react";
import "../assets/css/letter.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEmailData } from "../components";
import config from "../config/config";

function Letter() {
  const { emailData } = useEmailData();
  const navigate = useNavigate();

  // Pull what we need from config, including your custom message
  const { buttons, api, customMessage } = config.letterPage;

  // Set the text once and never change it (read-only)
  const [text] = useState(customMessage);

  const [isLoading, setIsLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    config.letterPage.placeholder.default
  );

  useEffect(() => {
    updateDate();
  }, []);

  const updateDate = () => {
    const date = new Date();
    const dateNum = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
    const monthNum =
      date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const yearNum = date.getFullYear();
    document.documentElement.style.setProperty(
      "--date",
      `'${dateNum}/${monthNum}/${yearNum}'`
    );
  };

  // You can still send this preset message via email if you want
  const sendEmail = async () => {
    if (text.trim()) {
      setIsLoading(true);
      setPlaceholder(buttons.loading);

      try {
        const response = await fetch(`${api.baseURL}${api.sendEmailEndpoint}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: text,
            score: `Score: ${emailData.score} out of ${emailData.totalQuestions}`,
            drawings: emailData.drawings,
          }),
        });

        if (response.ok) {
          setPlaceholder(config.letterPage.placeholder.success);
          setTimeout(() => {
            navigate("/closing");
          }, 2000);
        } else {
          throw new Error("Failed to send email");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        setPlaceholder(config.letterPage.placeholder.error);
        setTimeout(() => {
          setPlaceholder(config.letterPage.placeholder.default);
        }, 3000);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <motion.div
      className="letter-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.8 }}
    >
<div className="content" id="content">
  <div id="entry" className="letter-text">
    {text}
  </div>
</div>

    </motion.div>
  );
}

export default Letter;
