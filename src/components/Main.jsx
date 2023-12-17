import React, { useState } from 'react';
import './Main.css';

const Main = () => {

    const [item, setItem] = useState({
        Year: "",
        Month: "",
        Day: ""
    });

    function onChange(e) {
        const { valueAsDate } = e.target;
        if (valueAsDate) {
            const [Year, Month, Day] = [valueAsDate.getYear(), valueAsDate.getMonth(), valueAsDate.getDate()]
            setItem({
                Year,
                Month, Day
            })
        }
        else {
            setItem({
                Year: "",
                Month: "",
                Day: ""
            })
        }
    }

    function getAge() {
        const para = document.querySelector('.para');
        const date = new Date(1900 + item.Year, item.Month, item.Day);
        const curDate = new Date();
        const year = curDate.getFullYear() - date.getFullYear();

        const month = curDate.getMonth() > date.getMonth() ? curDate.getMonth() - date.getMonth() : date.getMonth() - curDate.getMonth();
        var day=0;
        if (month === 0) {
            day = curDate.getDate() - date.getDate();
        }else{
            day = curDate.getDate() > date.getDate() ? curDate.getDate() - date.getDate() : date.getDate() - curDate.getDate();
        }
        
        if (item.Year) {
            if (year < 0 || day < 0) {
                para.style.color = 'red';
                para.innerText = `Tumhara Baap Tumhe Future Me Jaake Paida Kr Diya 😒`;
                return;
            }
            para.style.color = 'green';
            para.innerText = `You are just ${year} year ${month} month ${day} Day old!`;
        } else {
            para.style.color = 'red';
            para.innerText = `Enter your Date Of Birthday!`;
        }
    }

    return (
        <>
            <div className="container">
                <h1>Count Your Age</h1>
                <div className="content">
                    <div className="inp">
                        <input type="date" onChange={onChange} />
                        <label htmlFor="">Your DOB!</label>
                    </div>
                    <div className="btn">
                        <input type="button" onClick={getAge} value="Get Your Age!" />
                    </div>
                </div>
                <p className="para"></p>
            </div>
        </>
    )
}

export default Main
