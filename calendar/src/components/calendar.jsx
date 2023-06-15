import {CalendarDatesComponent} from "./calendar-dates.component";

const dayName = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
const monthName = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

export const Calendar = ({now}) => {
    const allDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
    const allDaysOfPrevMonth = new Date(2023, now.getMonth(),0 ).getDate()
    const allDaysOfNextMonth = new Date(2023, now.getMonth() + 2,0).getDate()
    return (
        <div className="ui-datepicker">
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">{dayName[now.getDay()]}</div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{now.getDate()}</div>
                    <div className="ui-datepicker-material-month">{monthName[now.getMonth()]}</div>
                    <div className="ui-datepicker-material-year">{now.getFullYear()}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">{month[now.getMonth()]}</span>&nbsp;<span
                    className="ui-datepicker-year">{now.getFullYear()}</span>
                </div>
            </div>
            <table className="ui-datepicker-calendar">
                <colgroup>
                    <col></col>
                    <col></col>
                    <col></col>
                    <col></col>
                    <col></col>
                    <col className="ui-datepicker-week-end"></col>
                    <col className="ui-datepicker-week-end"></col>
                </colgroup>
                <thead>
                <tr>
                    <th scope="col" title="Понедельник">Пн</th>
                    <th scope="col" title="Вторник">Вт</th>
                    <th scope="col" title="Среда">Ср</th>
                    <th scope="col" title="Четверг">Чт</th>
                    <th scope="col" title="Пятница">Пт</th>
                    <th scope="col" title="Суббота">Сб</th>
                    <th scope="col" title="Воскресенье">Вс</th>
                </tr>
                </thead>
                <CalendarDatesComponent allDayOfMonth={allDayOfMonth}
                                        allDaysOfPrevMonth={allDaysOfPrevMonth}
                                        allDaysOfNextMonth={allDaysOfNextMonth}
                                        now={now}
                                        dayName={dayName}/>
            </table>
        </div>
    )
}