// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import './App.css';
import React, { useState, useEffect } from 'react';
import { DatePicker } from 'antd';

import MessengerCustomerChat from 'react-messenger-customer-chat';



function App() {
  const [ngay, setNgay] = useState(new Date().getDate())
  const [thang, setThang] = useState(new Date().getMonth() + 1)
  const [nam, setNam] = useState(new Date().getFullYear())
  const [time, setTime] = useState(new Date().getHours() + " Giờ : " + new Date().getMinutes() + " Phút : " + new Date().getSeconds() + " Giây")

  const [dateNghi, setDateNghi] = useState(new Date('2021/03/11'))
  const [show, setShow] = useState(false)

  // var dateNghi = new Date('2021/03/11')

  //   const  today = new Date(new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate())
  const today = new Date(new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate())

  function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }
  const difference = dateDiffInDays(today, dateNghi)


  useEffect(() => {

    setInterval(function () {
      setTime(new Date().getHours() + " Giờ : " + new Date().getMinutes() + " Phút : " + new Date().getSeconds() + " Giây")


    }, 1000);
  }, [time]);

  useEffect(() => {
    const difference = dateDiffInDays(today, dateNghi)

  }, [ngay])


  function onChange(date, dateString) {
    // console.log(dateString);

    console.log(dateString)
    console.log(typeof dateString)
    if (dateString == '') dateString = new Date('2021/03/11')
    setDateNghi(new Date(dateString))

    const difference = dateDiffInDays(today, dateNghi)

  }



  return (




    <div className="App" style={{ backgroundImage: "url(./img/nen.jpg)" }}>
      <div className='head'>

        <p> {"Hôm nay là Ngày " + ngay + " tháng " + thang + " Năm " + nam}</p>
        <p> {time}</p>
          Nghỉ ngày 11-03-2021
            <button className='nutnhan' onClick={() => {
          setShow(!show)

        }}>
          {show
            ? "Ẩn"
            : "Chọn lại ngày"}

        </button>

        {show
          ? <DatePicker onChange={onChange} />
          : ''
        }


      </div>
      <div className='endday'>
        Còn {difference} ngày
      </div>

      <MessengerCustomerChat
        pageId="108457081295779"
        appId="742330696473947"
      />
    </div>
  );
}

export default App;
