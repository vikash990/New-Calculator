import React, { Component } from "react";
import styled from "styled-components";
import { Input } from "./components/Input";



const CalcWrapper = styled.div`
  width: 400px;
  height: 600px;
`;
const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => props.bodyColor};
  align-items: center;
  height: 100vh;
  width: 100%;
  padding-top: 70px;
`;

const ButtonWrapper = styled('button')`
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
  color: ${props => props.btnFont};
  background-color: ${props => props.btncolor};
  flex: 1;
  outline: 1px solid #888888;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      btnColor:"",
      bodyColor: "",
      fontColor: "",
      showScientificButtons: false,
    };
    this.changeColor=this.changeColor.bind(this);
  }
  
  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };
  
  changeColor = (bodyColor, buttonColor, fontColor) => {
    this.setState({ 
        btnColor: buttonColor,
        bodyColor: bodyColor,
        fontColor: fontColor,
    })
  };

  render() {
    return (
      <BodyWrapper bodyColor={this.state.bodyColor}>
        <CalcWrapper>
          <Input input={this.state.input} />
          <RowWrapper>
            <ButtonWrapper
                btnFont={this.state.fontColor}
                btncolor={this.state.btnColor}
                onClick={() => this.addToInput(7)}>7</ButtonWrapper>
            <ButtonWrapper
                btnFont={this.state.fontColor}
                btncolor={this.state.btnColor}
                onClick={() => this.addToInput(8)}>8</ButtonWrapper>
            <ButtonWrapper
                btnFont={this.state.fontColor}
                btncolor={this.state.btnColor}
                onClick={() => this.addToInput(9)}>9</ButtonWrapper>
            
            <ButtonWrapper
                btnFont={this.state.fontColor}
                btncolor={this.state.btnColor}
                onClick={() => this.addToInput('+')}>+</ButtonWrapper>
          </RowWrapper>
          <RowWrapper>
            <ButtonWrapper
                btnFont={this.state.fontColor}
                btncolor={this.state.btnColor}
                onClick={() => this.addToInput(4)}>4</ButtonWrapper>
            <ButtonWrapper
                btnFont={this.state.fontColor}
                btncolor={this.state.btnColor}
                onClick={() => this.addToInput(5)}>5</ButtonWrapper>
            <ButtonWrapper
                btnFont={this.state.fontColor}
                btncolor={this.state.btnColor}
                onClick={() => this.addToInput(6)}>6</ButtonWrapper>
            
            <ButtonWrapper
                btnFont={this.state.fontColor}
                btncolor={this.state.btnColor}
                onClick={() => this.addToInput('-')}>-</ButtonWrapper>
          </RowWrapper>
          <RowWrapper>
            <ButtonWrapper
                btnFont={this.state.fontColor}
                btncolor={this.state.btnColor}
                onClick={() => this.addToInput(1)}>1</ButtonWrapper>
            <ButtonWrapper
                btnFont={this.state.fontColor}
                btncolor={this.state.btnColor}
                onClick={() => this.addToInput(2)}>2</ButtonWrapper>
            <ButtonWrapper
                btnFont={this.state.fontColor}
                btncolor={this.state.btnColor}
                onClick={() => this.addToInput(3)}>3</ButtonWrapper>
            <ButtonWrapper
                btnFont={this.state.fontColor}
                btncolor={this.state.btnColor}
                onClick={() => this.addToInput('*')}>*</ButtonWrapper>
          </RowWrapper>
          <RowWrapper>
          <ButtonWrapper
              btnFont={this.state.fontColor}
              btncolor={this.state.btnColor}
              onClick={() => this.setState({ input: "" })}>
              Clear
            </ButtonWrapper>
            <ButtonWrapper
                btnFont={this.state.fontColor}
                btncolor={this.state.btnColor}
                onClick={() => this.addToInput(0)}>0</ButtonWrapper>
            <ButtonWrapper
                btnFont={this.state.fontColor}
                btncolor={this.state.btnColor}
                onClick={() => this.setState({ input: eval(this.state.input) })}>=</ButtonWrapper>
            
            <ButtonWrapper
                btnFont={this.state.fontColor}
                btncolor={this.state.btnColor}
                onClick={() => this.addToInput('/')}>/</ButtonWrapper>
          </RowWrapper>
          <RowWrapper>
            <ButtonWrapper
                btnFont={this.state.fontColor}
                btncolor={this.state.btnColor}
                onClick={() => this.setState({ input: "" ,
                  showScientificButtons: !this.state.showScientificButtons})}>
            ScientificMode
            </ButtonWrapper>
        </RowWrapper>
          {this.state.showScientificButtons &&
          <RowWrapper>
            <ButtonWrapper
                btnFont={this.state.fontColor}
                btncolor={this.state.btnColor}
                onClick={() => this.setState({ input: eval(-1*this.state.input) })}>--</ButtonWrapper>
            <ButtonWrapper
                btnFont={this.state.fontColor}
                btncolor={this.state.btnColor}
                onClick={() => this.setState({ input: eval(this.state.input*this.state.input) })}>sq</ButtonWrapper>
            <ButtonWrapper
                btnFont={this.state.fontColor}
                btncolor={this.state.btnColor}
                onClick={() => this.setState({ input: Math.sqrt(eval(this.state.input)) })}>√</ButtonWrapper>
          </RowWrapper>}
        <RowWrapper>
        <ButtonWrapper
            btnFont={this.state.fontColor}
            btncolor={this.state.btnColor}
            onClick={()=>this.changeColor('white','grey','black')}
        >Light Theme</ButtonWrapper>
        <ButtonWrapper
            btnFont={this.state.fontColor}
            btncolor={this.state.btnColor}
            onClick={()=>this.changeColor('black','#666','white')}
        >Dark Theme
        </ButtonWrapper>
        </RowWrapper>
      </CalcWrapper>
      </BodyWrapper>
    );
  }
}

export default App;