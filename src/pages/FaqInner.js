import React from 'react';
import Question from '../components/Question';
import StringReplace from '../components/StringReplace';
import questionsByCategory from '../data/questionsCategories.json'

class FaqInner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { questions: [] }
  }

  componentDidMount() {
    this.setState({questions: questionsByCategory});
  }
  render() {
    let ques = [];
    for (var i = 0; i < this.state.questions.length; i++) {
      var currentCategory = StringReplace(this.state.questions[i].subTitle);
      if (currentCategory == this.props.params.subTitle) {
        if (this.state.questions[i].questions != null) {
          for (var j = 0; j < this.state.questions[i].questions.length; j++) {
          ques.push(this.state.questions[i].questions[j])
          }
        }
        }
      }

    var questions = ques.map(function(question , i) {
      return <Question key={i}
        title={question.title}
        content={question.content} />
    });
    return (
      <div>{questions}</div>
    );}

  }

  export default FaqInner;
