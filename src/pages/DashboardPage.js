import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const questionsAndAnswers = [
  {
    question: 'What is the capital of France?',
    answers: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answers: ['Mars', 'Venus', 'Earth', 'Jupiter'],
    correctAnswer: 'Mars',
  },
  // Add more questions and answers as needed
];

function DashboardPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questionsAndAnswers[currentQuestionIndex];
    setUserAnswers([...userAnswers, { question: currentQuestion.question, answer: selectedAnswer }]);
    
    if (currentQuestionIndex < questionsAndAnswers.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // If it's the last question, show results
      setShowResults(true);
    }
  };

  const renderQuestion = () => {
    const currentQuestion = questionsAndAnswers[currentQuestionIndex];
    return (
      <View>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
        {currentQuestion.answers.map((answer, index) => (
          <TouchableOpacity
            key={index}
            style={styles.answerButton}
            onPress={() => handleAnswer(answer)}
          >
            <Text>{answer}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderResults = () => {
    return (
      <View>
        <Text style={styles.resultsText}>Results:</Text>
        {userAnswers.map((item, index) => (
          <Text key={index}>
            Q: {item.question}, A: {item.answer}
          </Text>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {showResults ? renderResults() : renderQuestion()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  answerButton: {
    backgroundColor: '#e1e1e1',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  resultsText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default DashboardPage;
