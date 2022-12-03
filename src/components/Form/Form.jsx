import React, { Component } from "react";
import "./Form.css"

class Form extends Component {
    state = {
        fullname: "",
        serialNumber: "",
        gender: "",
        age: "",
        email: "",
        symptoms: ""
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitChanges = () => {
        console.log(this.state);
        alert("Kart qeydiyyatdan keçdi");
    }

    render() {
        return (
            <div className="esas">
            <div className="main">
                <label>
                   Полное имя пациента
                    <br></br>
                    <input type="text" onChange={this.handleInput} name="fullname" placeholder="введите свое имя"></input><br></br>
                </label>
                <br></br>
                <label>
                   Серия и номер паспорта 
                    <br></br>
                    <input type="text" onChange={this.handleInput} name="serialNumber" placeholder="введите номер и серию паспорта"></input><br></br>
                </label>
                <br></br>
                <label>
                    Пол
                    <br></br>
                    <select name="gender" onClick={this.handleInput}>
                        <option value="kişi">Мужчина</option>
                        <option value="qadın">Женщина</option>
                    </select><br></br>
                </label>
                <br></br>
                <label>
                    Возраст
                    <br></br>
                    <input type="number" onChange={this.handleInput} name="age" placeholder="Укажите возраст"></input><br></br>
                </label>
                <br></br>
                <label>
                    Адрес почты
                    <br></br>
                    <input type="email" onChange={this.handleInput} name="email" placeholder="укажите адрес электронной почты"></input><br></br>
                </label>
                <br></br>
                <label>
                    Сиптомы
                    <br></br>
                    <textarea rows="5" cols="30" name="symptoms" onChange={this.handleInput}></textarea>
                </label>
                <br></br>
                <label>
                    Повторный прием
                    <input className="check" type="checkbox"></input><br></br>
                </label>
                <br></br>
                <button onClick={this.submitChanges}>Отправить</button>
            </div>
            </div>
        )
    }
}
export default Form