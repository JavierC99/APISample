function button()
{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6c7c6ef8femshf861469bd0ebdcap1abfeajsn638f3e3504b7',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=98101', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    document.write("Done! See your console for Seattle's current weather!")
    
}
