import React from 'react';
import _ from 'lodash';

import HotQuestionsQuestion from './HotQuestionsQuestion'

class HotQuestions extends React.Component {

  flattenQuestionsByCategories(questionsByCategory) {
    const QuestionsLimit = 7;
    var result = questionsByCategory.map(function(category) {
      if (!category.questions) {
        return [];
      } else {
        return category.questions.map(function(question) {
          return {
            'categorySubTitle': category.subTitle,
            'question': question
          };
        });
      }
    });

    return _.take(
                _.sortBy(
                    _.flatten(result), function(q) {
                      return -q.question.askedCount;
                    }), QuestionsLimit);
  }

  render() {

    var questionsWithCategories = this.flattenQuestionsByCategories(this.props.questionsByCategory);
    var feedItemsSorted = questionsWithCategories.map(function(questionWithCategory , i) {
      return <HotQuestionsQuestion key={i}
        categorySubTitle={questionWithCategory.categorySubTitle}
        title={questionWithCategory.question.title}
        askedCount={questionWithCategory.question.askedCount || 0} />
    });
    return (
      <div className="faq-home">
        <h2>Mest stillede spørgsmål</h2>
        <ul className="list-unstyled">{feedItemsSorted}</ul>
      </div>
    );
  }
}

export default HotQuestions;
