import moment from 'moment'

const DayOfWeek = ()=>{
    let day = moment().format('H');
    if(0 < day && day < 12){
        return "Good Morning!"
    }else if(13 < day && day < 20){
        return "Good Evening!"
    }else{
       return "Goodnight"
    }
}

const Greeting = () =>{
    return(
        <div>
             <DayOfWeek/>
        </div>
    )
}
export default Greeting