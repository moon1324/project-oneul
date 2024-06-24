import React, { useCallback, useContext, useEffect, useState } from 'react';
import classNames from "classnames/bind";
import S from './style';
import { FormContext } from '../myMind/context/FormContext';
import { Link, useNavigate } from 'react-router-dom';

const cx = classNames.bind(S);

const CalendarHome = () => {
    

    const navigate = useNavigate();
    
    const today = {
        year: new Date().getFullYear(), //오늘 연도
        month: new Date().getMonth()+1,  //오늘 월
        date: new Date().getDate(), //오늘 날짜
        day: new Date().getDay(), //오늘 요일
    };

    const week = ["일", "월", "화", "수", "목", "금", "토"]; //일주일
    const [selectedYear, setSelectedYear] = useState(today.year); //현재 선택된 연도
    const [selectedMonth, setSelectedMonth] = useState(today.month); //현재 선택된 달
    const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate(); 
    const [calendarData, setCalendarData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(`http://localhost:8000/myMind/getCalendar`,{
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
              if (!response.ok) {
                  throw new Error('데이터를 불러오는 데 실패했습니다.');
              }
              const datas = await response.json();
              setCalendarData(datas); // 서버에서 받아온 데이터를 상태에 설정
          } catch (error) {
              console.error('데이터를 불러오는 중 에러 발생:', error);
          }
      };

      fetchData(); // 데이터를 불러오는 함수 호출
  }, [selectedYear, selectedMonth]);

  console.log(calendarData);

  const prevMonth = useCallback(() => {
        //이전 달 보기 보튼
        if (selectedMonth === 1) {
          setSelectedMonth(12);
          setSelectedYear(selectedYear - 1);
          if(selectedYear===2024){
            setSelectedYear(2028);
          }
        } else {
          setSelectedMonth(selectedMonth - 1);
        }
      }, [selectedMonth]);
    
      const nextMonth = useCallback(() => {
        //다음 달 보기 버튼
        if (selectedMonth === 12) {
          setSelectedMonth(1);
          setSelectedYear(selectedYear + 1);
          if(selectedYear===2028){
            setSelectedYear(2024);
          }
        } else {
          setSelectedMonth(selectedMonth + 1);
        }
      }, [selectedMonth]);
    
    const monthControl = useCallback(() => {
        //달 선택박스에서 고르기
        let monthArr = [];
        for (let i = 0; i < 12; i++) {
          monthArr.push(
            <option key={i + 1} value={i + 1}>
              {i + 1}월
            </option>
          );
        }
        return (
          <select className="monthSelect" onChange={changeSelectMonth} value={selectedMonth}>
            {monthArr}
          </select>
        );
    }, [selectedMonth]);

    const yearControl = useCallback(() => {
        //연도 선택박스에서 고르기
        let yearArr = [];
        const startYear = today.year; 
        const endYear = today.year+4; 
        for (let i = startYear; i < endYear + 1; i++) {
          yearArr.push(
            <option key={i} value={i}>
              {i}년
            </option>
          );
        }
        return (
          <select
            onChange={changeSelectYear}
            value={selectedYear}
          >
            {yearArr}
          </select>
        );
      }, [selectedYear]);
    
      const changeSelectMonth = (e) => {
        setSelectedMonth(Number(e.target.value));
      };
      const changeSelectYear = (e) => {
        setSelectedYear(Number(e.target.value));
      };

      const returnWeek = useCallback(() => {
        //요일 반환 함수
        let weekArr = [];
        week.forEach((v) => {
          weekArr.push(
            <div key={`week-${v}`} className='weekday'>{v}</div>
          );
        });
        return weekArr;
      }, []);
    
    //   const isDateWithData = useCallback((date) => {
    //     const formattedDate = `${selectedYear}-${String(selectedMonth).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    //     return calendarData.some(data => data.createdAt.startsWith(formattedDate)); // createdAt이 formattedDate로 시작하는지 확인
    // }, [calendarData, selectedYear, selectedMonth]);

      const returnDay = useCallback(() => {
        //선택된 달의 날짜들 반환 함수
        let dayArr = [];
        
        const handleClick = (date) => {
          
          const formattedDate=`${selectedYear}-${selectedMonth}-${date}`
          navigate(`/calendar/checkMyMind?date=${formattedDate}`);
          // const calendarState=calendarData.filter((data,i)=>{data[i].createdAt===formattedDate});
          // console.log(calendarState);
          // formattedDate===calendarData
        //   if (isDateWithData(date)) {
        //     navigate(`/calendar/checkMyMind?date=${formattedDate}`);
        // }
          
        };
        for (const nowDay of week) {
          const day = new Date(selectedYear, selectedMonth - 1, 1).getDay();
          if (week[day] === nowDay) {
            for (let i = 0; i < dateTotalCount; i++) {
              
              dayArr.push(
                <div key={`day-${i + 1}`} className={cx(
                    {
                      //오늘 날짜일 때 표시할 스타일 클라스네임
                      today:
                        today.year === selectedYear &&
                        today.month === selectedMonth &&
                        today.date === i + 1,
                    },
                    { weekday: true }, //전체 날짜 스타일
                   )}
                   onClick={() => handleClick(i+1)} // 날짜 클릭 핸들러

                >
                  {/* {i}
                    {isDateWithData(i) && <div className="dot" />} 데이터가 있는 날짜에 동그라미 표시 */}
                  {i + 1}
                  
                </div>
              );
            }
          } else {
            // 키 값 추가
            dayArr.push(<div className="weekday" key={`weekday-${nowDay}`}></div>);
          }
        }
    
        return dayArr;
      }, [selectedYear, selectedMonth, dateTotalCount]);
    
      return (
        <>
          <S.TitleWrapper>
              나의 지난 마음보기
          </S.TitleWrapper>
            
          <S.CalendarContainer>
            
            <S.CalendarHeadContainer>
                    
              <S.SelectWrapper>
                {yearControl()} {monthControl()}
              </S.SelectWrapper>
                    
              <S.ArrowsWrapper >
                <div>
                  <button onClick={prevMonth}>◀</button>
                  <button onClick={nextMonth}>▶</button>
                </div>
              </S.ArrowsWrapper>
                
            </S.CalendarHeadContainer>

            <S.WeekWrapper>
              <div className="week">{returnWeek()}</div>
            </S.WeekWrapper>
                    
            <S.DateWrapper>
              <div className="date">{returnDay()}</div>
              {/* <Link to={'/calendar/checkMyMind'}><div className="date">{returnDay()}</div></Link> */}
            </S.DateWrapper>
                
          </S.CalendarContainer>
      </>
  );
};

export default CalendarHome;

