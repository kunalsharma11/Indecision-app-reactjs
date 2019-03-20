import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';
export default class IndecisionApp extends React.Component {
    
    state ={
        options: [],
        selectedOptions: undefined
    };


    handleDeleteOptions= () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption= (optionToRemove) =>{
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    };

    handleSelectedOptions= () => {
        this.setState(() => ({ selectedOptions: undefined }));
    };

    handlePick= () => {
        const randomnum = Math.floor(Math.random()*(this.state.options.length));
        const option = this.state.options[randomnum];
        //alert(option);
        this.setState(() => ({
            selectedOptions: option
        }));
    };

    handleAddOption= (option) =>{
        if(!option){
            return 'Enter valid value to add item'
        }else if(this.state.options.indexOf(option)> -1){
            return 'This option already exists';
        }
        
        this.setState((prevState) => ({       
                options: prevState.options.concat([option])
                    }));
    };


   

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
            this.setState(()=>({options}));
        }

        }catch(e){

        }
       
}
    //method fires if any state change occurs like array elements changed added/removed
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options); //takes object and converts in string
            localStorage.setItem('options', json);
        }
}

    componentWillUnmount(){
        console.log('componentWillUnmount!')
    }

   

    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
         
        return (
            <div>
                <Header  title={title} subtitle={subtitle}/>
                <div className="container">
                <Action hasOptions = {this.state.options.length >0}
                handlePick = {this.handlePick}
                />
                <div className="widget">
                <Options options={this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption 
                handleAddOption = {this.handleAddOption}
                />
                </div>
                </div>
                <OptionModal 
                selectedOptions={this.state.selectedOptions}
                handleSelectedOptions = {this.handleSelectedOptions}
                />
            </div>
        );
    }
}
