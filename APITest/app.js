const express=require('express');
const app=express();
const port=3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({"message": "Welcome."});
});
app.listen(port,()=>{console.log('listening to port '+port)});




  DateTime date = DateTime.Now;
            date.ToString("dddd dd MMMM yyyy");
            events.Add(new EventDTO { Id = 1, Title = "Prove1", SourceOfInfo = "gdgdgd1", Date = date.ToString("MMMM dd yyyy HH:mm"), Address = new DTO.BO.Address.AddressBO { Id = 1, Street = "Myslym SHyr", City = "Tr", Number = "1233" }, Businesses = EventBusiness, People = EventPeople });
            events.Add(new EventDTO { Id = 2, Title = "Prove2", SourceOfInfo = "gdgdgd2", Date = date.ToString("MMMM dd yyyy HH:mm"), Address = new DTO.BO.Address.AddressBO { Id = 2, Street = "Fuat Toptani", City = "Tr", Number = "13" }, Businesses = EventBusiness, People = EventPeople });
            events.Add(new EventDTO { Id = 3, Title = "Prove3", SourceOfInfo = "gdgdgd3", Date = date.ToString("MMMM dd yyyy HH:mm"), Address = new DTO.BO.Address.AddressBO { Id = 1, Street = "Don Bosko", City = "Tr", Number = "8883" }, Businesses = EventBusiness, People = EventPeople });
            return events;
			
			
			public DateTime Date { get; set; }