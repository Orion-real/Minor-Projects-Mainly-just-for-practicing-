function GetTime() {
    //This gets a constant time value 
    const TimeToday = new Date;
        let hour = TimeToday.getHours();
        let minute = TimeToday.getMinutes();
        let second = TimeToday.getSeconds();

        //Calls the function to be used to display
        let ReformattedTime = ModifiedHours(hour, minute, second);

        document.getElementById('clock').innerHTML = ReformattedTime;

    //This just sets the interval to 1000 to make the time accurate
    setTimeout(GetTime, 1000);
}

//This just puts zeros before the leading number
function ZeroBeforeLeadingNumber(num) {
    return num < 10 ? "0" + num : num;
}

//Modifies the hours, minutes, and seconds to regular time
function ModifiedHours(hour, minute, seconds) {
    //Initializes the period used to determine if it is AM or PM
    let period = "AM";

    //Checks if hours is greater than 12 (13 is 1pm in regular time)
    if (hour >= 12) {
        period = "PM";
        //Here just minuses 12 from 13 (again this is 1pm and will be displayed)
        if (hour > 12) {
            hour = hour - 12;
        }
    }
    //Checks if hour is midnight since 0000 is 12 in military hours
    if (hour === 0) {
        hour = 12;
    }

    //Takes minutes and seconds and uses ZeroBeforeLeadingNumber function to put zero before the actual time
    minute = ZeroBeforeLeadingNumber(minute);
    seconds = ZeroBeforeLeadingNumber(seconds);

    //Returns the hours, minutes, seconds, and the current period to the ModifiedHours function
    return hour + ":" + minute + ":" + seconds + period;
}